# Commande et paiement en ligne — L'Écrin Traiteur

Conception arrêtée avec Ramy le 29 octobre 2026.

---

## 1. L'intention, et pourquoi maintenant

Ramy veut que l'entreprise tourne sans lui. Pas vendre à des inconnus : **faire en sorte
que les clients qui savent déjà ce qu'ils veulent cessent de passer par lui**.

Les chiffres qui ont motivé le chantier, relevés dans l'OS le 29/10/2026 :

- **212 devis créés en deux mois**, 86 acceptés, 45 267 € HT.
- **47 % du chiffre accepté vient de clients qui recommandent** (20 clients sur 151).
- Carglass et Coyote : **23 devis depuis novembre 2025, 20 acceptés (87 %)**, 8 360 € HT.
  Six ou sept références font tout le volume (jus, livraison 92, brochettes, madeleines,
  mini-viennoiseries, chouquettes, thermos).
- **10 de ces 23 devis ont été créés le jour même de la livraison** : le client écrit le
  matin, Ramy monte un devis, le client accepte dans l'heure. Le devis n'est pas une
  négociation, c'est une saisie.

C'est cette saisie qu'on supprime.

---

## 2. Objectifs

1. Un client connu commande sans qu'aucun devis ne soit produit, et sans intervention
   humaine côté L'Écrin.
2. Un client inconnu peut commander et payer par carte sans attendre d'être rappelé.
3. Aucune commande ne part en production hors des règles de délai.
4. Le site ne contredit jamais l'OS : mêmes prix, mêmes règles, mêmes délais.

### Non-objectifs

- Ce n'est **pas une boutique d'acquisition**. Le gisement est le réachat.
- **Pas de prix par client.** Les tarifs négociés (Bain : jus 8,50 €, thermos 19,50 €) ne
  sont jamais exposés. Bain ne commandera pas en ligne — arbitrage de Ramy du 29/10.
- **Pas de compte à créer.** Aucune inscription, aucun mot de passe.
- Le devis reste la voie normale pour les cocktails sur mesure, les animations et tout
  ce qui se chiffre à la main.

### Anti-objectifs — ce qui ferait échouer le projet même s'il fonctionne

- **Créer plus d'appels qu'il n'en supprime.** Un « notre équipe vous rappelle » posé au
  mauvais endroit rend le tunnel inutile.
- Laisser partir en production une commande que personne n'a vue passer.
- Afficher un prix ou un délai qui diffère de l'OS ou du site.

---

## 3. Les règles, arrêtées par Ramy

### Délais

| Famille | Délai |
|---|---|
| Petits-déjeuners, goûters, pauses, boissons | commande jusqu'à **la veille 10h** |
| Cocktails, plateaux repas, buffets | **48 heures** à l'avance |

**La règle la plus stricte gagne.** Dès qu'un cocktail, un plateau repas ou un buffet
entre dans le panier, tout le panier passe à 48 h : une commande ne se livre pas en deux fois.

La limite de 10h est déjà déployée sur l'ensemble du site et dans les CGV de l'OS
(commits `0606edc3` et `5702183`, 1 245 mentions). Rien à refaire de ce côté.

### Qui peut commander, et comment il paie

**Client connu** — son email correspond à une fiche client de l'OS :

- les deux règlements lui sont proposés : **sur facture à 30 jours** (portant la mention
  « votre habitude ») ou **par carte** ;
- la commande est **acceptée automatiquement** et part en production ;
- la facturation suit le circuit actuel.

**Client inconnu** :

- **seule la carte est proposée** ; la commande part automatiquement, sans appel ;
- l'option 30 jours est remplacée par une ligne : « Vous souhaitez être facturé ?
  Écrivez-nous, nous ouvrons le compte. » **C'est Ramy qui ouvre le crédit, par écrit.**

**Un seul garde-fou automatique :** une **première commande supérieure à 1 000 € HT**
déclenche un appel de confirmation, même payée par carte. Justification : sur 84 devis
acceptés, la médiane est à 372 € et seulement 8 % dépassent 1 000 €. Le garde-fou touche
une commande sur douze, et ce sont celles où une erreur coûte cher.

**Le débit carte intervient le jour de la livraison, pas au clic.** Rien n'est encaissé
pour une commande qui n'est pas partie : pas de remboursement à gérer en cas d'annulation.

### Autres règles à appliquer au panier

- Minimum de commande (`MINIMUM` dans `lib/prixEntree.js`).
- Zone et frais de livraison (`lib/calculsPrix.js`), **comptés dès la première ligne du
  panier**. Aucun frais ne doit apparaître au dernier écran.

---

## 4. Le parcours

**Trois étapes : Panier → Livraison → Paiement.**

Pas d'étape « Vérification » séparée : l'écran de paiement récapitule déjà la commande,
la date, le créneau, l'adresse et le contact. Un écran de plus perd des clients sans rien
apprendre au vendeur.

### Avant le tunnel — la carte produit

Le geste d'ajout vit **sur la ligne du prix**, jamais sur la photo (les photos produit
sont le point fort du site et ne doivent rien porter).

Trois états, même emplacement :

1. **Au repos** : un `+`, trait gris, **signe en `--accent-deep`**. Un rond entièrement
   gris se lit comme désactivé.
2. **Une seconde après le clic** : une coche. Elle confirme sans ouvrir le panier.
3. **Ensuite** : un réglage `− n +`. **Le prix de la carte suit la quantité**
   (19,90 € → 59,70 €, et la ligne du dessous passe à « 3 × 6 pièces »).

**Sur téléphone**, la carte fait ~160 px de large en grille à deux colonnes : le bouton
passe **sous le prix, sur toute la largeur**, hauteur unique de 38 px pour les deux états,
afin que la ligne du bas d'une grille reste parfaitement régulière.

Le panier n'apparaît dans la barre de navigation **que s'il contient quelque chose**.

### Étape 1 — Panier

Lignes avec vignette, nom, détail à l'unité, réglage de quantité, prix de ligne, lien
« Retirer ». À droite : sous-total, livraison, **Total HT**, TVA, **Total TTC**, et la
mention que la livraison est déjà comptée.

**Le panier conseille.** Il reprend les repères que Ramy donne au téléphone : « trois
thermos servent 18 à 24 tasses ; pour une trentaine de personnes, nous en conseillons
quatre à cinq ». C'est le seul endroit où le métier passe dans l'écran, et ça évite
l'appel « on n'avait pas assez de café ».

Bouton : **« Choisir la date »**, jamais un « Continuer » muet.

### Étape 2 — Livraison

**La règle ne se lit pas, elle se voit** : le calendrier **barre les dates impossibles**.
Une ligne sous le calendrier dit **laquelle des deux règles a joué** (« vos plateaux repas
demandent 48 heures… ») — sans elle, le client croit à un bug et il appelle.

Champs : heure, adresse, **étage / code / accès**, **contact sur place avec portable**,
société et email de facturation. Ces quatre derniers sont ceux qui provoquent les appels
aujourd'hui.

**Le créneau, tranché par Ramy le 29/10/2026 au soir :**

| Choix du client | Ce que nous annonçons | Prix |
|---|---|---|
| Souple | créneau d'une heure | inclus |
| **Standard** | **créneau de 30 minutes** | **inclus** |
| Heure fixe | l'heure exacte, à la minute | **+ 15 € HT** |

Le client choisit son heure d'arrivée, puis la largeur du créneau. Plus il nous laisse de
marge, mieux la tournée se monte ; celui qui veut une heure à la minute la paie.

Vérification faite : **aucun texte du site n'est à réécrire**. Les pages disent « un créneau
précis plutôt qu'une plage de deux heures », ce qu'un créneau de 30 minutes est, et la
charte de service (`lib/journalService.js`) annonce déjà « tolérance de 30 minutes sur le
créneau convenu ».

### Étape 3 — Paiement

Choix du règlement en deux lignes séparées par des filets, case carrée qui se remplit
d'or. **Les champs de carte disparaissent si le client choisit la facture.**

À droite : détail des lignes, HT, TVA, TTC, puis le rappel de livraison complet.
Le bouton **porte le montant** : « Commander · 300,85 € TTC ».

Dernière ligne : « Modifiable jusqu'au lundi 2 novembre à 10h. Au-delà, un appel suffit. »

---

## 5. Où la commande atterrit

Dans l'OS, table **`demandes_entrantes`**, avec `source: 'commande'` et le panier complet
dans le champ `raw` (jsonb). La table existe, la page `/demandes` de l'OS les affiche déjà,
et `lib/os-demande.js` écrit dedans : **aucune migration n'est nécessaire**.

Les commandes acceptées automatiquement doivent être distinguables de celles qui attendent
un appel (nouveau client au-dessus de 1 000 €).

---

## 6. Le design

Tout est repris de `app/globals.css`, sans réinvention :

- **Polices** : Baskerville Display PT (titres, prix, heures) et Neue Montreal (tout le reste).
- **Jetons** : `--accent #E0A126`, `--accent-deep #875E10`, `--text-primary #111111`,
  `--text-secondary #605A4F`, filet `rgba(17,17,17,0.08)`.
- **Aucun coin arrondi.** Le site n'en a aucun.
- **Aucun aplat de couleur.** On groupe par des filets et par de l'espace — décision de
  Ramy du 29/10 après avoir vu une version à fonds crème.
- Bouton principal : `.ev-btn` (noir, carré, 15/30 px, 12 px majuscules, 0,1 em).
- Liens secondaires : majuscules fines à filet, le motif des cartes cocktail.
- Chaque écran **tient dans la hauteur de fenêtre**, dans une proportion proche de 3:2.

Les maquettes validées sont dans `.superpowers/brainstorm/` (non versionné) :
`panier-etape1.html`, `livraison-blanc.html`, `paiement-etape3.html`.

---

## 7. Ce qui est laissé au constructeur

- **Le prestataire de paiement.** Stripe a été abandonné le 11/10/2026 ; les liens de
  paiement passent aujourd'hui par Pennylane (Adyen, 0,9 à 2,4 % TTC, déjà rapprochés en
  compta). À choisir entre une intégration carte dans le tunnel et un lien Pennylane
  généré à la validation. **Contrainte ferme : débit le jour de la livraison.**
- La reprise du panier archivé de mai 2026 (`2c6a3773`) est **déconseillée** : il date
  d'avant toutes les refontes.
- Le rapprochement « client connu » : l'email peut correspondre à un contact secondaire
  d'une fiche existante (champ `clients.contacts`). À traiter sans créer de doublon
  (cf. règle « une entreprise = une fiche »).
- Les emails de confirmation, côté client et côté L'Écrin.
- Le comportement du tunnel sur téléphone au-delà de la carte produit.

---

## 8. Ce qui a déjà été fait pendant la conception

- Heure limite **10h la veille** déployée partout (site FR + EN, CGV de l'OS).
- `lib/panier.js` écrit — panier minimal en `localStorage`, sans contexte React, non
  branché à ce jour.


---

## 9. État au 29 octobre au soir — ce qui est codé, et ce qui ne l'est pas

Tout est **en local, rien n'est poussé en production**.

### Ce qui tourne, vérifié dans le navigateur

| Fichier | Rôle |
|---|---|
| `lib/reglesCommande.js` | veille 10h / 48 h, jours ouvrés, jours fériés calculés, créneaux, largeur du créneau |
| `lib/zonesLivraison.js` | code postal → zone et frais |
| `lib/catalogueCommande.js` | **liste explicite** des 50 références ouvertes à la commande |
| `lib/panier.js`, `lib/brouillonCommande.js` | panier et commande en cours, en localStorage |
| `lib/totauxCommande.js` | totaux, TVA, minimum, blocages, conseils du panier |
| `lib/paiement.js` | la couture laissée au prestataire de paiement |
| `app/api/commande/route.js` | réception, **recalcul serveur**, écriture dans l'OS, emails |
| `app/api/commande/client/route.js` | « client connu ? » — **désactivée par défaut** |
| `app/commander/*` | les trois écrans + la confirmation |
| `components/commande/*` | le bouton « + », le panier de la navigation, le calendrier |

Parcours complet essayé de bout en bout : ajout depuis une carte produit, parfums d'un
coffret Mado répartis dans le panier, code postal, calendrier, créneau, adresse, règlement,
commande enregistrée. **Le serveur ignore les prix envoyés par le navigateur** : il
reconstruit chaque ligne depuis le catalogue (essai fait avec un prix falsifié à 1 €).

Le calcul des dates a été vérifié **depuis un navigateur réglé sur Bali** : il raisonne bien
en heure de Paris. C'était le piège.

### Les décisions que j'ai prises seul, à relire

1. **Zone de livraison en ligne : Paris, 92, 93, 94, à 29 € HT, reprise comprise.** Ailleurs,
   le tunnel s'arrête et renvoie au devis. Facturer les 39 € de la règle du 19/10 aurait
   contredit tous les totaux publiés sur le site (« 887 € HT livraison comprise »).
2. **Le code postal est demandé dans le panier**, pas à l'étape 2, pour qu'aucun frais
   n'apparaisse au dernier écran.
3. **TVA à 10 % sur tout**, livraison comprise. Aucune boisson du catalogue en ligne n'est
   alcoolisée. Le taux est porté par ligne, donc modifiable référence par référence.
4. **50 références ouvertes**, les saisonnières exclues (madeleines Octobre Rose, Noël…) ;
   les plateaux apéritifs sont en 48 h. Les formules au prix par personne restent au devis.
5. **Les coffrets Mado se composent dans le panier** (n parfums à répartir) ; le panier
   bloque tant que le compte n'y est pas.
6. **« Modifiable » veut dire « écrivez-nous ou appelez »**, pas un lien d'auto-modification.
7. **L'après-midi est ouvert de 14h à 17h** pour les goûters. Déduit des livraisons réelles,
   pas d'un texte publié : à confirmer.
8. **Le bouton « + » n'apparaît pas sur une référence fermée**, mais sa place est réservée,
   sinon la grille du téléphone se décale.

### Les questions qui restent, et que toi seul peux trancher

1. **Comment la commande entre en production dans l'OS.** Elle arrive aujourd'hui dans
   `demandes_entrantes` avec `source: 'commande'` et le panier complet. Mais dans l'OS, la
   production ne démarre qu'au devis accepté (`sync-commande`). Veux-tu que le site crée
   tout seul la fiche client, un devis accepté d'office et la commande — ou qu'un clic
   dans `/demandes` suffise ? C'est le gros du chantier restant, et il est **dans le dépôt
   de l'OS**, pas dans le site.
2. **Le paiement.** « Débit le jour de la livraison » ne se fait avec aucun lien de paiement
   Pennylane : une autorisation carte ne tient qu'une semaine. Soit on ouvre un compte
   prestataire direct (et on rouvre la décision Stripe du 11/10), soit le client reçoit un
   lien à payer, ce que fait le code aujourd'hui.
3. **Le site peut-il lire dans l'OS ?** Sans lecture, impossible de reconnaître un client
   connu, donc la facture à 30 jours est proposée avec la mention « à vérifier ». Tu as
   fermé l'accès du rôle anon deux fois (v35, v63) : je n'ai rien rouvert.
4. **L'email suffit-il à reconnaître un client ?** Si on active la lecture, quiconque connaît
   l'adresse d'un contact Carglass obtient le paiement à 30 jours en son nom. Un code à
   quatre chiffres envoyé par mail règle ça sans créer de compte.
5. **Combien de livraisons une matinée peut absorber** en acceptation automatique ? Rien ne
   plafonne aujourd'hui, et c'est l'anti-objectif du document.
6. **Qui appelle** quand une première commande dépasse 1 000 € HT, et sous quel délai ?

### Un décalage de catalogue, à réconcilier

Les plateaux apéritifs existent **deux fois**, avec des identifiants qui ne se recoupent
pas : `app/creations/plateaux-aperitifs/data.js` (`sw2`, `sw3`…) et `lib/productsData.js`
(`plateau-clubs-signature`, `plateau-mini-wraps`…), aux mêmes prix. Leurs fiches ne portent
donc pas encore le bouton d'ajout. À réconcilier avant de les ouvrir à la commande.

### Deux vestiges à supprimer, de l'ancien panier de mai 2026

`app/api/checkout/route.js` (désactivé, répond 503), `app/api/commande-facture/route.js` et
`context/CartContext.js` (enveloppe la racine du site, plus aucun consommateur).

### Un défaut antérieur, vu au passage

Une erreur d'hydratation React (« Text content does not match server-rendered HTML ») se
produit sur **toutes** les pages du site, y compris celles qui n'ont rien à voir avec la
commande. Elle n'a pas été introduite ici, mais elle fait basculer la page entière en rendu
client : elle mérite une session à elle seule.
