# Achats — plannings, règles métier et pilotage par MCP

Tout le module Achats de l'OS (état au 9 octobre 2026). Les règles ci-dessous viennent de Ramy :
ne pas les changer sans lui demander.

## Les écrans

| Écran | Route | Rôle |
|---|---|---|
| Planning achat | `/achats/planning` | Une carte par fournisseur le jour où il faut passer commande ; case = commandé |
| Planning préparation | `/achats/preparation` | Une carte par commande le jour où on la prépare ; clic = bon de préparation |
| Bon de préparation | `/print/preparation/[id]` | Feuille au design du bon de livraison, cases enregistrées, « tout cocher » |
| Planning stock | `/achats/stock` | Carte le jour où le stock prévisionnel passe sous le seuil |
| Inventaire | `/achats/stock/inventaire` | Saisie rapide stock / seuil / quantité habituelle |
| Vue par fournisseur | `/achats/fournisseurs` | Totaux par produit de la semaine, onglets par jour, lignes dépliables |
| Récupération | `/recuperation` | Matériel prêté à récupérer le lendemain de la livraison |

Logique pure et testée : `lib/planning-commandes.ts`, `lib/preparation.ts`, `lib/planning-stock.ts`,
`lib/recuperation.ts` (tests dans `__tests__/`). Le build Vercel lance `vitest run && next build`.

## Règles de commande

- **J-X = jours calendaires, le dimanche n'est jamais compté** et aucune carte n'est posée un dimanche.
- **Lot du vendredi** : les commandes d'une semaine se passent le **vendredi qui la précède** ; passé ce
  vendredi, on revient au compte-goutte à J-N. « Au plus tôt » ne veut donc jamais dire avant ce vendredi.
- **Report** : une carte non cochée dont la date limite est passée reste affichée à aujourd'hui.
- **Message au fournisseur** : jamais le nom du client. « Bonjour, J'ai une commande pour le <date> :
  - N × produit … Merci beaucoup et bonne journée ». Pour un coffret, le contenu est listé dessous.
- Une ligne sans fournisseur « à la commande » apparaît dans le bloc **Hors planning** : rien n'est écarté en silence.

### Par fournisseur
| Fournisseur | Règle |
|---|---|
| Corbeille tradition (brochettes, corbeilles de fruits) | J-2 ; dernière minute J-1 en allant chercher |
| Mado Paris (madeleines) | J-2, au plus tôt |
| D'un Passage à l'Autre (cakes) | J-2 |
| Maison Marques (viennoiseries, pains tranchés, lunch box, pain aux figues) | J-2 ; J-1 avant 12h toléré |
| Cheffe Imene (tout le salé : clubs, wraps, navettes, plateaux, menus à partager, cocktails, blinis) | J-2, elle prépare à J-1 |
| Congélateur (macarons, choux, brownies, crêpes, babkas, pain brioché salé) | pas une commande : décongélation J-1, événement lundi → vendredi |
| Labo interne (thermos, banana bread…) | hors planning achat |
| Chef Mishael, Dammann Frères | plus utilisés |

## Règles de préparation (bon de préparation)

Sections : Emballage · Boissons · Produits à mettre dans les boîtes · Matériel & service · Jour J.
- Jour de préparation = **J-1** ; livraison lundi, samedi ou dimanche → **vendredi**.
- **Gobelets** : 6 par bouteille / thermos / jus ; percolateur = ceux de sa recette (48) ; grosse contenance = 6 par litre ; rien pour les 33 / 50 cl.
- **Serviettes** : 1,5 × personnes. **Touillettes** : 1 sachet pour 50. Pas de dosettes de lait.
- **Crêpes** : 3 confitures / pâte à tartiner pour 6 crêpes + couteaux. **Verrines** : cuillères (sauf kit couvert).
- **Menus à partager** : 2 assiettes / pers., 1 kit couvert / pers. + 1, couverts de service 2 pièces par saladier
  (1 saladier / 10 pers.), 1 plateau de pain tranché pour 5 pers. par plateau fromage / charcuterie (Jour J).
- **Cocktails** : 2 assiettes cocktail / pers. + serviettes cocktail.
- **Viennoiseries** : Jour J. Lignes « sur-mesure » : c'est l'intitulé du devis qui fait foi.

## Stock

- Prévisionnel = stock réel − commandes validées à venir (décomptées à leur préparation) + réappros commandés.
- Jus Alain Milliat : en **cartons de 6**, **commande groupée** (pomme 8, orange 8, fraise 6, mangue 6), 23 cartons = 2 offerts.
- Stock non renseigné (null) = pas d'alerte ; « Reçu » crédite le stock.

## Récupération

J+1 de la livraison (dimanche → lundi) : thermos, percolateurs, jarres, lignes « location / vaisselle ».

## Piloter l'OS depuis un Claude (serveur MCP hébergé)

L'OS expose un serveur MCP à `https://lecrin-os.vercel.app/api/mcp/server` (clé générée dans
Paramètres → Clés API & MCP). Branchement Claude Code :

    claude mcp add --transport http lecrin https://lecrin-os.vercel.app/api/mcp/server --header "Authorization: Bearer <clé>"

Outils de base : `ping`, `clients_list/get/create`, `produits_search`, `devis_list/create`,
`factures_impayees`, `commandes_list`, `taches_list/create`.
Avec une clé « Contrôle complet » :
- `os_routes` (catalogue) puis `os_api` : appeler une route `/api/*` avec sa logique métier
  (envoyer un devis ou une facture, Pennylane, cocher une commande fournisseur / une préparation / un réappro…).
- `donnees_lire` / `donnees_creer` / `donnees_modifier` : tables métier. Pour un devis, préférer
  `devis_create`, `os_api PATCH /api/devis/<id>/inline` (totaux recalculés) et `devis_changer_statut`.
- Jamais de suppression ; comptes, clés et paramètres fermés.
- **Un mail envoyé ou une facture Pennylane validée ne s'annule pas** : vérifier destinataire et contenu, et demander
  confirmation à l'humain avant ces actions.

Code : `app/api/mcp/server/route.ts`, `lib/mcp/` ; régénérer le catalogue avec `node scripts/gen-mcp-routes.mjs`.
