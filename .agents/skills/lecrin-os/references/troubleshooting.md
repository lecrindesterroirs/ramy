# Troubleshooting — Bugs rencontrés et fixes

## DB / Supabase

### "column XXX does not exist" lors d'un UPDATE
**Cause** : la migration qui ajoute la colonne n'a pas été lancée par l'utilisateur.
**Fix** : utiliser le pattern *retry-without-column* (cf. `ui-patterns.md` section 2).

### Popup Supabase "Potential issue detected — no RLS"
**Cause** : `CREATE TABLE` sans `ALTER TABLE ... ENABLE ROW LEVEL SECURITY` derrière.
**Fix** : toujours ajouter dans la même migration :
```sql
ALTER TABLE public.<table> ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon full access <table>" ON public.<table> FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "auth full access <table>" ON public.<table> FOR ALL TO authenticated USING (true) WITH CHECK (true);
```
Si l'utilisateur a déjà cliqué "Run and enable RLS", les policies manquent peut-être. Lancer juste les `CREATE POLICY` séparément.

### "null value in column XXX violates not-null constraint" lors d'import
**Cause** : champ NOT NULL côté Supabase, mais l'IA n'a pas trouvé la valeur dans le mail/CSV.
**Fix** : pattern de retry avec valeurs par défaut :
```ts
// 1er essai → erreur 23502 sur colonne X
// Détecter le nom de la colonne dans error.message
// Ajouter une valeur par défaut sensée (string vide, 0, today, etc.)
// Retry
```

---

## UI / Browser

### `<input type="date">` invisible superposé en absolute ne s'ouvre pas
**Cause** : Chrome / Safari récents ne déclenchent pas le picker via la propagation click depuis le label parent.
**Fix** : utiliser `inputRef.current.showPicker()` au clic d'un bouton (cf. `ui-patterns.md` section 5). Fallback `focus() + click()` pour vieux navigateurs.

### Bulk select : checkbox sélectionne ET ouvre le détail en même temps
**Cause** : le `<Link>` parent absorbe le click de la checkbox.
**Fix** : `onClick={e => e.stopPropagation()}` sur le `<input type="checkbox">`.

### Tâches IA générées en boucle / doublons
**Cause** : pas de `source_key` ou pas de contrainte UNIQUE.
**Fix** : 
1. Ajouter `source_key text UNIQUE` à la table
2. Catch l'erreur Postgres `23505` (unique violation) et l'ignorer silencieusement
3. Pour les règles re-fire (ex. client dormant), inclure la période dans la clé : `client_dormant:abc:202605`

---

## Pennylane

### POST /customers → 404
**Cause** : l'endpoint a changé en v2.
**Fix** : utiliser `/company_customers` pour les clients B2B.

### "Custom payment reference has already been taken"
**Cause** : tentative de re-créer une facture avec le même `external_reference`.
**Fix** : avant POST, faire un GET avec `filter[external_reference]=` ; si déjà existant, retourner l'id existant. Cf. `integrations.md` section "Idempotence factures".

### Erreur 422 sur les line items
**Causes possibles** :
- `unit` manquant → ajouter `"unit": "unit"` ou `"piece"`
- `raw_currency_unit_price` en number → convertir en string `"25.00"`
- `vat_rate` mal formaté → utiliser `"FR_10"`, pas `"10"` ni `10`

---

## Anthropic IA

### "ANTHROPIC_API_KEY non configurée"
**Cause** : variable manquante en local OU pas redémarré après ajout au .env.local.
**Fix** :
1. Vérifier `.env.local` contient bien `ANTHROPIC_API_KEY=...`
2. Tuer le serveur Next (`Ctrl+C` ou `lsof -ti:3000 | xargs kill`)
3. `npm run dev` à nouveau (Next ne hot-reload PAS les env vars)

### Parsing "demain" parse mal la date
**Cause** : Claude n'a pas la date courante en contexte.
**Fix** : injecter dans le system prompt :
```
Aujourd'hui : ${new Date().toLocaleDateString('fr-FR', { timeZone: 'Europe/Paris', weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}.
```

### Coût IA qui s'envole
**Cause** : pas de prompt caching activé.
**Fix** : utiliser le skill `claude-api` pour analyser les routes IA et ajouter `cache_control: { type: 'ephemeral' }` sur les system prompts stables > 500 tokens.

---

## Vercel

### Deploy bloqué silencieusement après push
**Cause** : l'auteur du commit n'est pas `contact@lecrindesterroirs.fr`.
**Fix** :
```bash
git log -1 --format='%ae'        # vérifier
git config user.email "contact@lecrindesterroirs.fr"
git commit --amend --reset-author --no-edit
git push --force-with-lease
```

### Build qui passe en local mais échoue sur Vercel
**Causes fréquentes** :
- Différence Node version → vérifier `package.json` engines ou `.nvmrc`
- Variable d'env manquante côté Vercel → Settings → Environment Variables
- `output: 'standalone'` dans next.config.ts modifié

---

## Git / workflow

### "Your branch is behind"
**Fix** : `git pull --rebase` (jamais de `git pull` simple, qui crée des merge commits parasites).

### Conflit lors d'un rebase
**Fix** :
1. Résoudre dans le fichier
2. `git add <fichier>`
3. `git rebase --continue`
4. Ne JAMAIS faire `git rebase -i` (non supporté par le tool Bash de Claude Code)

---

## Next.js / Turbopack

### "Module not found" après ajout d'un import
**Fix** : Turbopack a parfois besoin d'un redémarrage. `Ctrl+C` puis `npm run dev`.

### `searchParams` types changent
**Cause** : Next 15+ → `searchParams` est maintenant une `Promise<...>`.
**Fix** :
```ts
export default async function Page({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const params = await searchParams
  // ...
}
```

---

## Quand un agent délégué fait n'importe quoi

### L'agent invente une colonne / table
**Préventif** : dans le prompt, dire explicitement *"Lis 1 row du schéma avant d'écrire un PATCH"*.

### L'agent dépose les fichiers au mauvais endroit
**Préventif** : donner les chemins absolus exacts dans la spec.

### L'agent rate des détails (ex. tva_achat_pct)
**Préventif** : pointer le skill `lecrin-os` dans le prompt : *"Respecte les schémas et patterns documentés dans .claude/skills/lecrin-os/SKILL.md"*.

---

## Si tout casse

Ordre de vérification :
1. `npx tsc --noEmit` exit 0 ?
2. Migration SQL passée côté Supabase ?
3. Env vars chargées (redémarrage Next) ?
4. RLS policies en place sur les nouvelles tables ?
5. Auteur git correct pour Vercel ?
