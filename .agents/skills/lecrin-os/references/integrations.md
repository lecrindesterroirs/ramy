# Intégrations externes — détails opérationnels

## Pennylane API v2

**Base URL** : `https://app.pennylane.com/api/external/v2`
**Auth** : Header `Authorization: Bearer ${PENNYLANE_API_KEY}`

### Clients (company_customers)

⚠️ **L'endpoint est `/company_customers`, PAS `/customers`** — la version 1 utilise `/customers` et renvoie 404 sur la v2.

```
POST /company_customers   → créer un client B2B (entreprise)
GET  /company_customers/{id}
PUT  /company_customers/{id}
```

Payload minimal pour créer :
```json
{
  "name": "Nom Entreprise",
  "emails": ["contact@example.com"],
  "siret": "12345678901234",
  "vat_number": "FR12345678901",
  "billing_address": {
    "address": "1 rue Example",
    "postal_code": "75001",
    "city": "Paris",
    "country_alpha2": "FR"
  }
}
```

Stocker l'`id` retourné dans `clients.pennylane_id`.

### Factures (customer_invoices)

```
POST /customer_invoices   → créer une facture
GET  /customer_invoices/{id}
PUT  /customer_invoices/{id}/finalize  → passe brouillon → finalisée
POST /customer_invoices/{id}/send_by_email
```

**Gotchas dans les line items** :
- `unit` est requis (sinon erreur 422). Valeurs : `'unit'`, `'piece'`, `'kg'`, `'hour'`...
- `raw_currency_unit_price` doit être une **string** (pas un number) : `"25.00"` et pas `25`
- `customer_id` (pas `customer: { id: ... }`)
- `vat_rate` en string aussi : `"FR_10"` pour 10%, `"FR_200"` pour 20%, `"FR_055"` pour 5.5%

### Idempotence factures

Pour éviter le doublon "Custom payment reference has already been taken" :

```ts
async function syncFacture(facture: Facture) {
  try {
    const r = await fetch(`${BASE}/customer_invoices`, { ... })
    if (r.ok) return await r.json()
  } catch (e) {
    // Si "external_reference" déjà pris → on lookup l'existant
    const list = await fetch(
      `${BASE}/customer_invoices?filter[external_reference]=${facture.reference}`,
      { headers: authHeader }
    )
    const existing = (await list.json()).data?.[0]
    if (existing) return existing
    throw e
  }
}
```

Stocker l'`external_reference` côté Supabase : `factures.pennylane_external_reference`.

### Webhook

Endpoint : `/api/pennylane/webhook`
Validation HMAC du payload avec `PENNYLANE_WEBHOOK_SECRET`.

Évents écoutés :
- `customer_invoice.paid` → marquer la facture en `payee` dans Supabase
- `customer_invoice.cancelled` → marquer `annulee`

---

## SIRENE (Recherche d'entreprises)

API publique gratuite, **pas de clé requise**.

**Base URL** : `https://recherche-entreprises.api.gouv.fr`

### Endpoint principal

```
GET /search?q=<NAME>&page=1&per_page=5
```

Réponse :
```json
{
  "results": [
    {
      "siren": "123456789",
      "nom_complet": "ENTREPRISE EXAMPLE",
      "nom_raison_sociale": "EXAMPLE SAS",
      "etat_administratif": "A",     // A = actif, C = cessé
      "tranche_effectif_salarie": "12",  // codes INSEE
      "activite_principale": "70.10Z",   // code NAF
      "siege": {
        "siret": "12345678901234",
        "adresse": "1 RUE EXEMPLE 75001 PARIS",
        "code_postal": "75001",
        "commune": "PARIS",
        "libelle_voie": "RUE EXEMPLE"
      }
    }
  ]
}
```

### Mapping recommandé

- `siret` → `siege.siret`
- `siren` → `siret.slice(0, 9)`
- `adresse_facturation` :
  ```json
  {
    "intitule": "<nom_entreprise>",
    "rue": "<voie>",
    "cp": "<code_postal>",
    "ville": "<commune>",
    "pays": "France",
    "complement": ""
  }
  ```
- `secteur` → mapper depuis `activite_principale` (code NAF) vers ton enum (cf. lib/constants.ts → SECTEUR_LABEL)
- `nb_collaborateurs` → décoder `tranche_effectif_salarie` :
  - `00` → 0
  - `01` → 1-2 (utiliser 1 ou 2)
  - `02` → 3-5
  - `03` → 6-9
  - `11` → 10-19
  - `12` → 20-49
  - `21` → 50-99
  - `22` → 100-199
  - `31` → 200-249
  - `32` → 250-499
  - `41` → 500-999
  - `42` → 1000-1999
  - `51` → 2000-4999
  - `52` → 5000-9999
  - `53` → 10000+
  - `NN` → non renseigné (null)

### TVA intracom (calcul local)

```ts
function computeVatNumber(siret: string): string | null {
  const siren = siret.slice(0, 9)
  if (!/^\d{9}$/.test(siren)) return null
  const key = (12 + 3 * (Number(siren) % 97)) % 97
  return `FR${String(key).padStart(2, '0')}${siren}`
}
```

---

## Google Workspace OAuth

**Scopes** :
- `https://www.googleapis.com/auth/gmail.readonly`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.googleapis.com/auth/userinfo.email`

Tokens stockés dans la table `google_account` (Supabase) avec `refresh_token`. Helper `getValidAccessToken()` dans `lib/google.ts` rafraîchit automatiquement.

### Gmail — endpoints utilisés

```
GET /gmail/v1/users/me/messages?maxResults=20&q=newer_than:7d
GET /gmail/v1/users/me/messages/{id}?format=full
```

### Calendar — endpoints utilisés

```
GET /calendar/v3/calendars/primary/events?
    timeMin=...&timeMax=...&singleEvents=true&orderBy=startTime
```

---

## Anthropic Claude API

**Pas de SDK installé** — utiliser `fetch` direct.

**Endpoint** : `https://api.anthropic.com/v1/messages`
**Modèle par défaut** : `claude-haiku-4-5-latest`
**Auth headers** :
```
'x-api-key': process.env.ANTHROPIC_API_KEY!
'anthropic-version': '2023-06-01'
'content-type': 'application/json'
```

### Pattern minimal

```ts
const r = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: {
    'x-api-key': apiKey,
    'anthropic-version': '2023-06-01',
    'content-type': 'application/json',
  },
  body: JSON.stringify({
    model: 'claude-haiku-4-5-latest',
    max_tokens: 1024,
    system: '...',
    messages: [{ role: 'user', content: '...' }],
  }),
})
const data = await r.json()
const text = data.content?.[0]?.text ?? ''
```

### Prompt caching (à ajouter, pas encore fait)

Pour économiser sur les routes IA qui ont des prompts système long et stables :

```json
{
  "system": [
    { "type": "text", "text": "Long system prompt...", "cache_control": { "type": "ephemeral" } }
  ]
}
```

→ -90% sur le coût input pour les hits sur 5 minutes. Utile sur `email-to-tasks` et `prefill-fournisseur` qui ont des prompts > 500 tokens.

Skill à utiliser pour optimiser : `claude-api`.

### Parsing dates relatives (français)

Toujours inclure la date du jour dans le system prompt pour parser "demain", "vendredi", "14h" :

```ts
const today = new Date().toLocaleDateString('fr-FR', {
  timeZone: 'Europe/Paris',
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})
const systemPrompt = `Aujourd'hui : ${today}. Heure actuelle : ${new Date().toLocaleTimeString('fr-FR', { timeZone: 'Europe/Paris' })}. ...`
```

---

## Vercel deploy

- Auto-deploy depuis `main`
- Auteur du commit DOIT être `contact@lecrindesterroirs.fr` (config repo lecrin-os)
- Si push avec mauvais auteur → Vercel bloque silencieusement, pas de notif. Vérifier avec `git log -1 --format='%ae'`.

Pour corriger :
```bash
git config user.email "contact@lecrindesterroirs.fr"
git config user.name "Ramy"
# Pour le dernier commit :
git commit --amend --reset-author --no-edit
git push --force-with-lease
```
