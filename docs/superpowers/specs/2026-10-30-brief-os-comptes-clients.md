# Brief pour l'OS — les routes dont le site a besoin pour les comptes clients

Écrit le 30 octobre 2026 par la session Site, à l'attention de la session OS.
Décision de Ramy du 30/10 : les comptes et l'historique vivent **dans l'OS**, et
l'OS expose au site des **routes dédiées**, authentifiées par la table `api_keys`
(v48). Le site n'obtient jamais la clé service-role.

---

## Pourquoi ces routes et pas un accès direct

Ramy a fermé l'accès du rôle anon à deux reprises (v35, v63). Une clé service-role
posée dans l'environnement du site ouvrirait toute la base : clients, devis,
factures, marges. Les routes ci-dessous n'exposent que ce dont le tunnel a besoin,
et chacune peut être tracée.

La règle du coffre tient : **une entreprise = une fiche**. Un compte est un
**contact** d'une fiche client existante, jamais une fiche parallèle.

---

## Ce que le site attend, route par route

Toutes les routes sont sous `/api/site/`, authentifiées par l'en-tête
`x-api-key` (table `api_keys`), et l'origine `lecrin-traiteur.fr` est ajoutée à
`ALLOWED_ORIGINS`.

Les routes marquées **(session)** exigent en plus un `Authorization: Bearer <jeton>`
obtenu à la connexion.

### 1. `POST /api/site/compte/inscrire`

```
{ email, motDePasse, nom, societe, telephone }
→ 200 { ok: true }
```

- Le mot de passe est **haché par l'OS** (bcrypt ou argon2), jamais stocké en clair.
  Le site ne le conserve à aucun moment.
- Si l'email correspond déjà à un contact d'une fiche client, le compte s'y
  rattache. Sinon, une fiche est créée avec `canal_acquisition = 'site'`.
- **Répond toujours `{ ok: true }`**, que l'adresse existe ou non. Sinon le
  formulaire dit qui est client de L'Écrin. Si l'adresse a déjà un compte, l'OS
  envoie un email « vous avez déjà un compte » au lieu d'en créer un second.

### 2. `POST /api/site/compte/connexion`

```
{ email, motDePasse }
→ 200 { ok: true, jeton, expire, profil }
→ 401 { ok: false }          // message identique quelle que soit la cause
```

- Limite de tentatives par email ET par IP. Au-delà, 429 avec un délai.
- `jeton` : opaque, à durée limitée (30 jours proposés), révocable.
- `profil` : voir la route 4.

### 3. `POST /api/site/compte/oubli` puis `POST /api/site/compte/reinitialiser`

```
{ email }                          → 200 { ok: true }   // toujours, même inconnu
{ jeton, motDePasse }              → 200 { ok: true }
```

L'OS envoie le lien de réinitialisation (usage unique, une heure). Le site n'envoie
pas cet email : il ne connaît pas les adresses qui ont un compte.

### 4. `GET /api/site/compte/moi` **(session)**

```
→ { email, nom, societe, telephone,
    livraison: { adresse, cp, ville, acces },
    facturation: { entite, adresse, cp, ville, pays, email, reference } }
```

C'est ce que le tunnel pré-remplit. Un `PATCH` sur la même route met à jour ces
champs.

### 5. `GET /api/site/compte/commandes` **(session)**

```
→ [ { reference, date_livraison, creneau, montant_ht, montant_ttc,
      statut, lignes: [ { id, nom, qte, prix } ] } ]
```

**Uniquement les commandes de CETTE personne**, pas celles de ses collègues —
décision de Ramy du 30/10. Les commandes en ligne arrivent aujourd'hui dans
`demandes_entrantes` avec `source: 'commande'` et le panier complet dans `raw` :
tout est déjà là, il s'agit de filtrer sur l'email et de remettre en forme.

Trier du plus récent au plus ancien, limiter aux 20 dernières.

---

## Ce que le site fait de son côté

- Les écrans de connexion, d'inscription, de réinitialisation, « Mes commandes »
  et « Mes informations ».
- Le jeton de session dans un cookie `httpOnly`, `Secure`, `SameSite=Lax` — jamais
  dans localStorage.
- Le bouton « Recommander », qui reconstruit le panier depuis les lignes renvoyées
  par la route 5 en **revalidant chaque référence dans le catalogue du site** : un
  produit retiré de la carte ne doit pas réapparaître.

---

## Questions ouvertes, à trancher par l'OS

1. **Où vivent les comptes dans le schéma ?** Une table `comptes_site` liée à
   `clients.contacts`, ou des colonnes sur le contact lui-même ?
2. **Les commandes en ligne restent-elles dans `demandes_entrantes` ?** Si elles
   deviennent des commandes au sens de l'OS (voir la question 1 de la relecture du
   29/10, toujours ouverte), la route 5 devra lire ailleurs.
3. **Qui envoie les emails de compte** — l'OS avec ses propres gabarits, ou une
   route que le site appelle ? Proposition : l'OS, pour que le site n'ait jamais
   besoin de savoir qu'une adresse a un compte.

---

## Ce qui n'est PAS demandé

- Aucun accès aux devis, aux factures, aux marges, aux tarifs négociés.
- Aucune liste de clients : on n'interroge que par la session d'une personne.
- Aucune ouverture de crédit automatique. Le paiement à 30 jours reste accordé par
  Ramy, par écrit ; le compte ne fait que porter la décision.
