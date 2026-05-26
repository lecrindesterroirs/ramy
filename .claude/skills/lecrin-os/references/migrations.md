# Historique des migrations

Localisation : `/Users/ramy/Desktop/lecrin-os/supabase/`

## Convention

- Versionnées : `migration_vN_<nom-court>.sql`
- **L'utilisateur les exécute manuellement** dans Supabase SQL Editor (jamais via REST API depuis le code)
- Toujours `IF NOT EXISTS` / `IF EXISTS` pour idempotence
- Toujours inclure RLS + policies sur les nouvelles tables

---

## v1 — `schema_complet.sql` (initial)

Tables créées : `clients`, `fournisseurs`, `produits`, `devis`, `commandes`, `factures`, `parametres`, `numerotation`.

RLS activé sur toutes avec policies permissives `anon` + `authenticated`.

---

## v2 — `migration_v2_acomptes.sql`

Ajoute la gestion des acomptes sur les devis/factures.

---

## v3 — `migration_v3_numerotation.sql`

Système de numérotation centralisé via table `numerotation` :
- EDT-YYYY-NNNN pour devis (annuel continu)
- CMD-YYYY-NNNN pour commandes
- INV-YYYY-MM-N pour factures (mensuel, aligné Pennylane)

Fonction `next_numero(prefix, scope)` qui réserve atomiquement le prochain numéro.

---

## v4 — `migration_v4_parametres.sql`

Table `parametres` (key/value JSONB) pour stocker la config persistante :
- identité de l'entreprise (nom, SIRET, adresse, RIB)
- préférences (TVA par défaut, validité devis par défaut)
- intégrations (Pennylane org_id, Google account)

---

## v5 — `migration_v5_champs_metier.sql`

Ajoute des colonnes métier sur plusieurs tables :
- `devis.nb_personnes`, `devis.heure_livraison`
- `fournisseurs.code_fournisseur`, `mode_recuperation`, `mode_approvisionnement`, `conditions_paiement`
- `produits.fournisseur_id`, `prix_achat`, `tva_achat_pct`, `mode_approvisionnement`, `filiere_durable`
- `clients.contacts` (JSONB), `source_lead`, `nb_collaborateurs`

---

## v6 — `migration_v6_date_acceptation_devis.sql`

Ajoute `devis.date_acceptation` (timestamptz) :
- Set automatiquement quand un devis passe en statut `accepte`
- Reset à null quand le statut quitte `accepte`
- Sert au KPI "Signés ce mois" sur le dashboard (différent du CA = devis dont l'événement est ce mois)
- Backfill : `UPDATE devis SET date_acceptation = updated_at::date WHERE statut = 'accepte' AND date_acceptation IS NULL`
- Index sur `(date_acceptation)`

Code modifié pour set la valeur dans 4 endroits (résilient au cas où la migration n'est pas encore lancée) :
- `app/signer/devis/[id]/SignerClient.tsx` (signature client)
- `components/devis/DevisDetailActions.tsx` (action bouton sur fiche)
- `components/devis/DevisListPanel.tsx` (bulk action split view)
- `components/devis/DevisListTable.tsx` (bulk action liste principale)

---

## v7 — `migration_v7_taches.sql`

Crée la table `taches` pour le système d'assistant :
- Tâches manuelles + auto-générées (6 règles métier)
- `source_key UNIQUE` pour idempotence des règles auto
- Liens optionnels vers `client_id`, `devis_id`, `commande_id`, `facture_id`
- Statut `pending | done | dismissed | snoozed`
- Échéance + rappel optionnels
- Récurrence (daily/weekly/monthly) — clone la tâche au mark-done si récurrente
- RLS + policies (ajoutées au fix après warning Supabase)

Index principaux :
```
idx_taches_statut_echeance (statut, echeance)
idx_taches_client_id, idx_taches_devis_id, idx_taches_commande_id, idx_taches_facture_id
```

---

## Migrations à venir (possibles)

### Si on industrialise la gestion des achats fournisseurs
Une vraie table `achats` avec :
- `fournisseur_id`, `date_achat`, `montant_ht`, `montant_ttc`, `categorie`, `mode_paiement`, `commande_id` (liée à une commande client si applicable)
- Pour avoir une vraie analyse "coût matière par événement" et alimenter l'onglet Fournisseurs du dashboard Analytics

### Pour passer aux notifications email/Calendar (v2 du module Tâches)
Étendre `taches` avec :
- `notification_email_envoye_at`
- `google_calendar_event_id`

### Pour multi-users plus tard
Ajouter `created_by uuid` partout + adapter les RLS pour scope par utilisateur. Pour l'instant en mono-user, pas nécessaire.

---

## Process pour une nouvelle migration

1. Créer `supabase/migration_vN_<nom>.sql`
2. Toujours inclure :
   - `IF NOT EXISTS` sur les CREATE
   - `ALTER TABLE ... ENABLE ROW LEVEL SECURITY` sur les nouvelles tables
   - 2 policies (anon + authenticated)
   - Index utiles (sur les foreign keys + colonnes filtrées fréquemment)
   - Commentaire `-- vN — <description>` en en-tête
3. Si la migration ajoute une colonne utilisée immédiatement : implémenter le retry-without-column dans le code (cf. `ui-patterns.md` section 2)
4. **Ne pas exécuter** la migration soi-même → demander à l'utilisateur de la lancer dans Supabase SQL Editor
5. Documenter la migration dans CE fichier (`references/migrations.md`)
