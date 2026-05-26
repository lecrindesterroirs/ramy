---
name: lecrin-os
description: Skill maître pour développer L'Écrin OS — l'ERP interne de L'Écrin Traiteur situé à /Users/ramy/Desktop/lecrin-os. Utilise ce skill pour toute tâche liée à l'OS : ajout de modules (clients, devis, commandes, factures, fournisseurs, produits, achats, livraisons, tâches, rapports), intégrations (Pennylane, Gmail, Google Calendar, SIRENE, Anthropic), migrations SQL Supabase, refonte UI, nouvelles routes API, ou debug. Déclenche obligatoirement dès qu'on mentionne l'OS, l'ERP, le dashboard, un module métier, ou une fonctionnalité interne de gestion (différent du site web public lecrin-traiteur.fr). Charge ce skill au moindre signal "OS", "ERP", "dashboard interne", "Supabase", "Pennylane", "tâche auto", ou un chemin commençant par /Users/ramy/Desktop/lecrin-os.
---

# L'Écrin OS — Skill Maître

## Identité du projet

**Nom** : L'Écrin OS  
**Localisation** : `/Users/ramy/Desktop/lecrin-os` (repo `lecrindesterroirs/lecrin-os` sur GitHub)  
**Nature** : ERP interne (back-office) — séparé du site public lecrin-traiteur.fr  
**Cible** : usage solo (Ramy) — pas de comptes multi-users en v1, RLS permissive  
**Déploiement** : Vercel auto-deploy depuis `main` (commit author requis : `contact@lecrindesterroirs.fr`)

---

## Stack technique

| Couche | Techno |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Langage | TypeScript strict |
| Style | Tailwind utilities + CSS variables (`--os-*` tokens) — pas de shadcn |
| Base | Supabase (PostgreSQL) avec REST API |
| Auth client | Clé `anon` uniquement (RLS permissive sur toutes les tables) |
| Comptable | Pennylane API v2 (clients, devis, factures) |
| Auth Google | OAuth Gmail + Calendar |
| IA | Anthropic Claude Haiku 4.5 (`claude-haiku-4-5-latest`), via fetch direct sans SDK |
| Icons | lucide-react |
| Hébergement | Vercel |

**Pas dans package.json** : `@anthropic-ai/sdk` (on utilise `fetch` direct vers `https://api.anthropic.com/v1/messages`).

---

## Système de couleurs (tokens CSS)

```css
/* Tokens principaux — référencer en CSS via var(--os-*) */
--os-bg          /* fond de page */
--os-card        /* fond des cartes */
--os-surface     /* surface secondaire (hover, bandes) */
--os-text        /* texte principal */
--os-text-2      /* texte secondaire */
--os-text-3      /* texte tertiaire */
--os-text-4      /* texte mineur / placeholder */
--os-border      /* bordure principale */
--os-border-2    /* bordure secondaire (plus douce) */
```

**Couleurs métier (en dur) :**

| Usage | Hex |
|---|---|
| CTA principal (sidebar navy) | `#07111F` |
| Jaune signature L'Écrin (warning, accent) | `#E0A126` |
| Texte sur jaune | `#92610A` |
| Bande jaune (bg fond clair) | `rgba(224,161,38,0.08)` |
| Bordure jaune | `rgba(224,161,38,0.2)` |
| Rouge alert (delete, en retard) | `#DC2626` / texte `#B91C1C` / bg `#FEE2E2` |
| Vert succès | `#16A34A` / bg `#F0FDF4` |
| Orange en attente | `#D97706` / bg `#FEF3C7` |
| Bleu info | `#3B82F6` / bg `#EFF6FF` |
| Violet | `#8B5CF6` / bg `#F5F3FF` |

---

## Architecture des fichiers

```
app/
├── (os)/                       ← Group route, layout principal de l'OS
│   ├── layout.tsx              ← Sidebar + TopBar
│   ├── dashboard/              ← KPIs + panels (tâches, Gmail, calendrier)
│   ├── clients/                ← liste + [id] (split view) + nouveau
│   ├── devis/                  ← idem
│   ├── commandes/              ← idem
│   ├── factures/               ← idem
│   ├── fournisseurs/           ← idem
│   ├── produits/               ← idem
│   ├── livraisons/
│   ├── achats/
│   ├── rapports/               ← Analytics avec tabs (?tab=...)
│   │   └── marges/edit/        ← bulk editor prix_achat
│   ├── taches/                 ← page complète tâches
│   ├── calendrier/
│   ├── import/
│   └── parametres/
├── api/                        ← Routes API
│   ├── taches/                 ← GET/POST/PATCH/DELETE + /generate
│   ├── gmail/                  ← inbox + tasks + message/[id]
│   ├── ia/                     ← email-to-tasks, email-to-devis, prefill-fournisseur, parse-tache
│   ├── pennylane/              ← sync-client, sync-devis, sync-facture, webhook
│   ├── import/                 ← run import depuis CSV
│   └── ...
├── signer/devis/[id]/          ← Page de signature client (publique)

components/
├── layout/                     ← Sidebar, TopBar
├── os/                         ← Composants génériques (StatusBadge, CsvMenu, DateRangePicker, etc.)
├── ui/                         ← Input, Select, Button basiques
├── clients/ devis/ commandes/ factures/ fournisseurs/ produits/
│   ├── XxxListTable.tsx        ← Liste principale avec bulk select
│   ├── XxxListPanel.tsx        ← Panel gauche en split view (avec bulk select aussi)
│   ├── XxxDetailPanel.tsx ou XxxDetailActions.tsx
├── dashboard/                  ← DashboardRelanceItem, etc.
├── google/                     ← GmailTasksPanel, CalendarEventsPanel, GoogleConnectBanner
├── taches/                     ← TachesPanel (dashboard), TachesView (/taches), TacheRow, TacheQuickAdd, TacheDetailModal, TachesLiees
└── rapports/                   ← RapportsTabs + OverviewTab/VentesTab/MargesTab/ClientsTab/ActiviteTab/FournisseursTab + PrixAchatBulkEditor

lib/
├── supabase/server.ts          ← tryClient() pour les server components
├── supabase/client.ts          ← createClient() pour les client components
├── constants.ts                ← fmt, fmtDate, labels (STATUT_*, CATEGORIE_*, etc.)
├── google.ts                   ← getValidAccessToken, getGoogleAccountStatus
├── anthropic-key.ts            ← getAnthropicKey()
└── mock-data.ts                ← fallback mock si Supabase indispo

types/index.ts                  ← Types métier (Client, Devis, Tache, etc.)

supabase/                       ← Schémas + migrations versionnées
├── schema_complet.sql
├── migration_v2_acomptes.sql
├── migration_v3_numerotation.sql
├── migration_v4_parametres.sql
├── migration_v5_champs_metier.sql
├── migration_v6_date_acceptation_devis.sql
└── migration_v7_taches.sql
```

---

## Schémas DB (tables principales)

### clients
`id` (uuid), `nom_entreprise`, `secteur`, `interlocuteur`, `prenom`, `email`, `telephone`, `adresse_facturation` (JSONB `{intitule, rue, cp, ville, pays, complement}`), `adresse_livraison`, `siret`, `tva_intracom`, `delai_paiement`, `nb_collaborateurs`, `statut` (prospect/actif/inactif), `tags[]`, `notes`, `actif`, `logo_url`, `source_lead`, `contacts[]` (JSONB), `pennylane_id`, `pennylane_synced_at`, timestamps.

### devis
`id`, `reference` (EDT-YYYY-NNNN), `client_id`, `evenement` (type prestation), `date_evenement`, `statut` (brouillon/en_attente/accepte/refuse/annule/expire), `lignes` (JSONB `[{produit, qte, pu_ht, total_ht, tva_pct}]`), `montant_ht`, `montant_tva`, `montant_ttc`, `validite` (date), `adresse_facturation`, `adresse_livraison`, `contact_livraison`, `nb_personnes`, `heure_livraison`, `note_entete`, `notes`, `notes_internes`, `conditions`, `remise_globale`, `telephone_client`, `date_acceptation` (depuis v6), `pennylane_id`, timestamps.

### commandes
`id`, `reference` (CMD-YYYY-NNNN), `client_id`, `devis_id`, `type_prestation`, `date_livraison`, `statut` (en_attente/confirmee/en_preparation/livree/annulee), `montant_ttc`, `lignes` (JSONB), etc.

### factures
`id`, `reference` (INV-YYYY-MM-N — aligné Pennylane), `client_id`, `commande_id`, `date_facture`, `date_echeance`, `montant_ht`, `montant_ttc`, `statut` (brouillon/envoyee/payee/en_retard/annulee), `pennylane_id`, `pennylane_external_reference`.

### produits
`id`, `reference`, `nom`, `categorie`, `description`, `prix_ht`, `tva_pct` (défaut 10), `prix_ttc`, `prix_achat`, `tva_achat_pct` (défaut 20), `unite`, `statut` (disponible/indisponible/saisonnier), `fournisseur_id`, `image_url`, `note_degustation`, `mode_approvisionnement`, `filiere_durable`, `stock_actuel`, `stock_minimum`, `conservation`.

### fournisseurs
`id`, `nom`, `nom_entreprise`, `categorie` (patisserie/boulangerie_viennoiserie/produit_laitier/boisson/autre), `code_fournisseur`, `mode_recuperation` (relai_labo/livraison_directe/stock_long/autre), `mode_approvisionnement` (par_commande/sur_stock), `conditions_paiement`, `delai_moyen`, `siret`, `tva_intracom`, `interlocuteur`, `email`, `telephone`, `actif`.

### taches (v7)
`id`, `titre`, `description`, `priorite` (haute/normale/basse), `echeance` (timestamptz), `rappel_at`, `statut` (pending/done/dismissed/snoozed), liens vers `client_id`/`devis_id`/`commande_id`/`facture_id`, `source` (manuel ou auto_xxx), `source_key` UNIQUE pour idempotence, `recurrence`, `notes`, `done_at`, timestamps.

---

## Patterns récurrents (à respecter)

### Bulk select (pattern référent : `ProduitsListTable.tsx`)
- `useState<Set<string>>` pour la sélection
- Header checkbox avec état `indeterminate`
- Barre d'actions en bande jaune `rgba(224,161,38,0.08)` quand `selected.size > 0`
- Boutons : actions statut + Supprimer (rouge, avec modal de confirmation)
- Modal de confirmation pour delete uniquement
- Reset selection au changement d'items via `useEffect`
- `onClick={e => e.stopPropagation()}` sur les checkboxes pour ne pas déclencher le row link

### Split view (3 niveaux obligatoires dans chaque module)
1. Liste principale (`/clients`)
2. Vue split (liste à gauche + aperçu à droite) — accessible depuis la liste
3. Page complète (`/clients/[id]/edit`)

Référence panel gauche avec bulk : `ProduitsListPanel.tsx`.

### Migrations résilientes (colonne pas encore créée)
Quand on ajoute une colonne via migration mais que le code doit fonctionner AVANT que la migration ne soit lancée :

```ts
const payload: Record<string, any> = { ...basePayload, nouvelle_colonne: value }
let { error } = await sb.from('table').update(payload).eq('id', id)
if (error && /nouvelle_colonne/.test(error.message)) {
  delete payload.nouvelle_colonne
  ;({ error } = await sb.from('table').update(payload).eq('id', id))
}
if (error) throw error
```

### Throttle IA / appels coûteux (pattern GmailTasksPanel)
- `localStorage` key : `lecrin:<feature>_last_<action>` → timestamp
- Cooldown 10 min par défaut
- Plage de veille 22h-6h (Europe/Paris) : skip total
- Bouton "↻ Rafraîchir" qui bypass le cooldown
- Indicateur "Mis à jour à HH:mm"

### Auto-génération idempotente (tâches auto)
- `source_key` UNIQUE en DB → upsert sans doublon
- Format : `<rule>:<entity_id>` (ex. `devis_relance:abc-123`) ou `<rule>:<entity_id>:<period>` pour re-fire périodique
- Chaque règle wrap `try/catch` → skip si une colonne manque, on continue

### Numérotation
- Devis : `EDT-YYYY-NNNN` annuel continu (4 digits padded)
- Commandes : `CMD-YYYY-NNNN`
- Factures : `INV-YYYY-MM-N` mensuel, ré-aligné avec Pennylane API pour éviter la divergence
- Table `numerotation` côté Supabase pour réserver le prochain numéro

### IA — appels Anthropic
- Pas de SDK, fetch direct sur `https://api.anthropic.com/v1/messages`
- Modèle par défaut : `claude-haiku-4-5-latest`
- Helper `getAnthropicKey()` dans `lib/anthropic-key.ts` (lit `ANTHROPIC_API_KEY`, gère le fallback)
- Toujours retourner un fallback gracieux si la clé manque ou si l'IA échoue (ne pas casser l'UX)
- Toujours préciser la date d'aujourd'hui en Europe/Paris dans le prompt pour les parsings de date relative ("demain", "vendredi")

### Pennylane API
- Endpoint clients : `POST /company_customers` (pas `/customers` — erreur 404)
- Factures : `unit` requis, `raw_currency_unit_price` en string, `customer_id` (pas `customer:{id}`)
- Idempotence : `pennylane_external_reference` côté factures, lookup fallback en cas de "Custom payment reference has already been taken"

### TVA
- Vente alimentation : 10%
- Achats : variable (5.5%, 10%, 20%) — défaut 20%
- Tous les prix stockés en HT, calculs TTC à la volée
- Calcul TVA intracom France : `FR + key + SIREN` où `key = (12 + 3 * (SIREN % 97)) % 97` (zero-pad 2 digits)

---

## Intégrations externes

### Pennylane
- API v2, clé dans `PENNYLANE_API_KEY`
- Webhook : `PENNYLANE_WEBHOOK_SECRET`
- Sync clients, devis, factures dans les deux sens

### Google (Gmail + Calendar)
- OAuth via `GOOGLE_CLIENT_ID` + `GOOGLE_CLIENT_SECRET`
- Helper `getValidAccessToken()` pour refresh automatique
- Token stocké dans table `google_account` côté Supabase
- Gmail : analyse IA des emails → tâches auto (`/api/ia/email-to-tasks`) + création directe de devis (`/api/ia/email-to-devis`)
- Calendar : affichage d'événements proches dans le dashboard

### SIRENE (Recherche d'entreprises)
- API publique sans clé : `https://recherche-entreprises.api.gouv.fr/search?q=<NAME>&per_page=N`
- Utilisée pour : autocomplete création client/fournisseur, enrichissement bulk

### Anthropic
- Routes IA : `email-to-tasks`, `email-to-devis`, `prefill-fournisseur`, `parse-tache`
- Toutes utilisent fetch direct + Haiku 4.5

---

## Variables d'environnement (.env.local)

```
NEXT_PUBLIC_SUPABASE_URL=https://zyfxdgrehbgzypquzbxz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=…
ANTHROPIC_API_KEY=…
PENNYLANE_API_KEY=…
PENNYLANE_WEBHOOK_SECRET=…
GOOGLE_CLIENT_ID=…
GOOGLE_CLIENT_SECRET=…
```

---

## Conventions de commit

Format Conventional Commits avec scope :
- `feat(taches): add ...`
- `fix(dashboard): correct ...`
- `perf(gmail-tasks): cache ...`
- `feat(analytics): 6-tab layout`

Footer obligatoire :
```
Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
```

**Auteur du commit doit être** : `contact@lecrindesterroirs.fr` (sinon Vercel bloque le deploy).

---

## RLS / sécurité

Toutes les tables ont :
```sql
ALTER TABLE public.<table> ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon full access <table>" ON public.<table> FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "auth full access <table>" ON public.<table> FOR ALL TO authenticated USING (true) WITH CHECK (true);
```

**Quand on crée une nouvelle table, TOUJOURS** ajouter ce bloc à la fin de la migration, sinon Supabase warning + risque d'incohérence.

---

## DOs

- ✅ Reuse les patterns existants (ListTable, ListPanel, RapportsTabs, throttle 10min, bulk select, retry-without-column)
- ✅ Vérifier les colonnes avant un PATCH (read 1 row du schéma si besoin)
- ✅ Toujours `npx tsc --noEmit` avant de commit
- ✅ Toujours commit + push (l'utilisateur déploie via Vercel auto)
- ✅ Migrations : versionnées sous `supabase/migration_vN_<nom>.sql`, jamais d'exécution directe (l'utilisateur les lance manuellement)
- ✅ Code résilient : si une colonne nouvelle peut manquer, retry sans elle
- ✅ Quiet hours 22h-6h sur tous les jobs IA
- ✅ Idempotence via `source_key` ou `external_reference`
- ✅ Empty states soignés (jamais de page blanche, toujours un message + CTA)
- ✅ Mock data fallback si Supabase indispo (via `tryClient()` qui retourne `null`)

## DON'Ts

- ❌ Pas d'utilisation de shadcn (l'OS a sa propre couche UI)
- ❌ Pas de dépendance npm sans demander (le projet est minimal)
- ❌ Ne JAMAIS toucher à `interlocuteur` / `prenom` / `telephone` quand on enrichit des clients
- ❌ Ne JAMAIS lancer une migration SQL via REST (le user le fait à la main)
- ❌ Pas de skip de hooks ni d'amend de commit (toujours créer un nouveau commit)
- ❌ Pas d'`any` non typé sans raison (TS strict)
- ❌ Pas de couleur en dehors des tokens `--os-*` sauf les couleurs métier listées plus haut
- ❌ Ne pas confondre avec le site web `lecrin-traiteur.fr` (qui est à `/Users/ramy/Desktop/claude site web` et utilise le skill `lecrin-traiteur`)

---

## Modules existants (état au 2026-05)

| Module | Statut |
|---|---|
| Clients | ✅ liste + split + nouveau/edit + bulk select + enrichissement SIRENE + sync Pennylane |
| Devis | ✅ liste + split + form + signature client + Pennylane + date_acceptation |
| Commandes | ✅ liste + split + workflow statuts |
| Factures | ✅ liste + split + Pennylane sync bidir + statuts |
| Fournisseurs | ✅ liste + split + modes appro + conditions paiement |
| Produits | ✅ liste + split + bulk select + prix_achat (vide à remplir) |
| Achats | partiel (table existe mais peu utilisée) |
| Livraisons | partiel |
| Rapports/Analytics | ✅ 6 onglets (Overview, Ventes, Marges, Clients, Activité, Fournisseurs) + bulk editor prix_achat |
| Tâches | ✅ système assistant avec 6 règles auto + quick-add IA + page complète + panels liés |
| Calendrier | partiel (Google Calendar intégré dashboard) |
| Import | ✅ CSV multi-modules avec dédup |
| Paramètres | ✅ Google OAuth, Pennylane, identité entreprise |

---

## Bonnes habitudes en début de session

1. Lire le CLAUDE.md / AGENTS.md à la racine de l'OS si présents
2. Vérifier l'état git : `cd /Users/ramy/Desktop/lecrin-os && git status && git log -3 --oneline`
3. Pour une feature touchant la DB : lire 1 row de la table cible pour vérifier le schéma actuel
4. Pour une feature IA : utiliser le skill `claude-api` pour optimiser (prompt caching)
5. Pour du planning de feature : utiliser le skill `Plan`
6. Avant gros commit : envisager `code-review`
7. Avant deploy d'une feature sensible : envisager `security-review`

---

## Références utiles à charger sur demande

- `references/migrations.md` — historique détaillé des migrations v2 à v7
- `references/integrations.md` — détails Pennylane endpoints + Gmail + SIRENE
- `references/ui-patterns.md` — extraits de code des patterns (bulk select, throttle, retry)
- `references/troubleshooting.md` — erreurs courantes et leurs fixes
