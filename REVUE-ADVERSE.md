# Revue adverse : pages publiées les 12 et 13 octobre 2026

Relecture du 15 octobre 2026. Aucun fichier du site n'a été modifié. Chaque chiffre a été recalculé (script Python sur les règles de `lecrin-os/lib/devis-recipes.ts` et les prix du catalogue) et chaque lien interne a été confronté à la liste des URL générée depuis `app/sitemap.js` et les fichiers de données (281 URL dynamiques + pages statiques).

## À trancher avant de corriger : deux sources se contredisent

1. **Jus au petit-déjeuner.** La fiche de vérité (13/10) et la consigne de relecture disent « jus pour 1 personne sur 2 ». Le code de l'OS dit le contraire depuis le 11 octobre : `jusPartConvives: 1` (un verre de 20 cl par personne), commit `22b5687` du 2026-10-11 sur `main` (« un verre de jus par personne au petit-déjeuner »), `lecrin-os/lib/devis-recipes.ts` l. 68-75. Le commentaire l. 237 (« ~la moitié des convives ») n'a pas été mis à jour. Les pages relues suivent la fiche, donc **un devis de l'OS ne donnera pas les montants publiés** (10 personnes : 160,80 € HT dans l'OS contre 151,30 € sur le site). Les remplacements ci-dessous marqués « (règle OS) » valent si Ramy confirme la règle de l'OS ; sinon, c'est l'OS qu'il faut corriger. Avec la règle de l'OS, tous les prix par personne tombent entre 12,33 et 15,59 €, ce qui règle aussi l'écart avec la fourchette « 12 à 16 € » (voir page 2).
2. **Lunch box « dès 19,90 € ».** La fiche dit 19,90 €, mais La Fermière est à 18,90 € HT (`app/creations/lunch-box/data.js` l. 59, `app/creations/lunch-box/page.js` l. 36). Soit les pages passent à 18,90 €, soit La Fermière passe à 19,90 €. Il faut aussi corriger la fiche.

Autre point dans l'OS, hors site : la recette compte 1 cake pour 10 madeleines (`cakePartsEquivalent: 10`, l. 59), alors que le catalogue vend le cake pour « 5 à 6 personnes » (`lib/productsData.js` l. 244). À 30 personnes, la recette sert 20 madeleines et 1 cake, soit 25 à 26 parts pour 30 personnes, et non une mignardise par personne.

---

## 1. lib/journalCocktail.js (6 articles)

| Gravité | Extrait exact | Problème | Source consultée | Remplacement exact proposé |
|---|---|---|---|---|
| important | `<tr><td><strong>La veille avant 14h</strong></td><td>Dernier ajustement des quantités</td></tr>` (cocktail-entreprise-50-personnes, l. 79) | L'article porte sur 50 personnes. À partir de 50 personnes, il faut commander 48 h à l'avance : un ajustement la veille contredit cette règle. | FICHE-VERITE.md, « Commande » ; app/traiteur/page.js l. 80 | `<tr><td><strong>48 h avant</strong></td><td>Dernier ajustement des quantités (délai minimum à partir de 50 personnes)</td></tr>` |
| important | `La commande reste possible jusqu'à la veille 14h. Pour 50 personnes, demandez le devis deux à trois semaines avant` (FAQ, l. 91) | Même contradiction avec la règle des 48 h. | FICHE-VERITE.md, « Commande » | `À partir de 50 personnes, la commande se passe au moins 48 h avant. Demandez le devis deux à trois semaines avant` |
| important | `20 L de jus Alain Milliat (2 verres par personne)` / `190,00 €` / `2 416,10 €` / `48,32 € HT par personne` (l. 45-47) ; FAQ l. 89-90 (`environ 2 416 € HT, soit 48 €`, `20 litres de jus`) | Les quantités ne viennent d'aucune source. La recette cocktail de l'OS prévoit 0,25 L de jus par personne (13 L pour 50) et une Evian 75 cl pour 5 (10 bouteilles à 4,80 €). Le budget « complet, boissons comprises » oublie l'eau. Les calculs de l'article sont justes avec ses propres hypothèses (vérifiés). | lecrin-os/lib/devis-recipes.ts l. 149-155 et 359-365 ; lib/boissonsData.js l. 479 (Evian 4,80 €) | Lignes : `13 L de jus Alain Milliat (1 L pour 4 personnes)` / `123,50 €` ; nouvelle ligne `<tr><td><strong>Eaux</strong></td><td>10 bouteilles d'Evian 75 cl</td><td>48,00 €</td></tr>` ; total `2 397,60 €` / `Soit 47,95 € HT par personne`. FAQ : `revient à environ 2 398 € HT, soit 48 € HT par personne` et `9 bouteilles de Chardonnay 0 %, 13 litres de jus et 10 bouteilles d'eau` |
| important | Tableau « Combien de boissons prévoir ? » (cocktail-entreprise-sans-alcool, l. 208-211), `environ 7 € HT de boissons par invité` (l. 184), FAQ `20 litres de jus, soit environ 342 € HT` (l. 235) | Même écart avec la recette de l'OS (0,25 L de jus par personne et 1 eau pour 5). Les calculs internes sont exacts. | lecrin-os/lib/devis-recipes.ts l. 149-155 | Lignes : `20 personnes` 4 bouteilles · 5 L · `134,30 €` ; `30 personnes` 5 · 8 L · `189,30 €` ; `50 personnes` 9 · 13 L · `323,60 €` ; `100 personnes` 17 · 25 L · `620,80 €` (avec la colonne « Eaux 75 cl » : 4 / 6 / 10 / 20). Intro : `soit environ 6,50 € HT de boissons par invité`. FAQ : `9 bouteilles de Chardonnay 0 %, 13 litres de jus et 10 bouteilles d'eau, soit environ 324 € HT` |
| important | `Jus Alain Milliat (orange, pomme, pomme-framboise)` (l. 193) | Le pomme-framboise n'est pas présenté comme un Alain Milliat dans le catalogue, contrairement à l'orange et à la pomme. | lib/boissonsData.js l. 170-181 (`description: '1 litre · Jus pomme & framboise'`, sans marque) | `Jus orange et pomme Alain Milliat, jus pomme-framboise` |
| important | Budget 100 personnes : `40 L · 380,00 €`, `4 786,30 €`, `5 886,30 €`, `47,86 € HT`, `58,86 € HT` (cocktail-entreprise-100-personnes, l. 313, 316, 326-329, 344, 368) | Même écart avec la recette de l'OS : 25 L de jus et 20 Evian pour 100 personnes. | lecrin-os/lib/devis-recipes.ts l. 149-155 | `25 L · 237,50 €` ; nouvelle ligne `Eaux` `20 bouteilles · 96,00 €` (dans les deux colonnes) ; totaux `4 739,80 €` et `5 839,80 €` ; par personne `47,40 € HT` et `58,40 € HT` ; extrait et intro : `de 4 740 à 5 840 € HT` ; quantités l. 344 : `<tr><td><strong>Jus</strong></td><td>25 litres</td><td>1 L pour 4 invités</td></tr>` ; FAQ l. 368 : `comptez 4 740 € HT (47,40 € par personne) ou 5 840 € HT (58,40 € par personne)` |
| mineur | `<td><strong>Jus et nectars</strong></td><td>20 L de jus Alain Milliat` (l. 45) | La ligne est chiffrée au prix du jus (9,50 €). Les nectars coûtent 10,50 €. | lib/boissonsData.js l. 9 et 57 | `<td><strong>Jus</strong></td><td>…` (ou chiffrer les nectars à 10,50 €) |
| mineur | `notre formule la plus choisie` (l. 30) ; `c'est le plus choisi` (l. 404) | La seule source dit « la plus souvent devisée (8 des 12 formules nommées), même si la médiane acceptée est plus basse ». « La plus choisie » n'est donc pas prouvé. | lecrin-os/lib/devis-recipes.ts l. 135-141 | `notre formule la plus demandée en devis` ; `c'est le plus demandé en devis` |
| mineur | `16 à 18 pièces par personne, de 40,90 à 51,90 € HT` (extrait cocktail-dinatoire, l. 247) | 40,90 € correspond à 12 pièces, pas à 16 ou 18. | app/creations/cocktails/data.js (La Réception 12 pièces / 40,90) | `16 à 18 pièces par personne, 51,90 € HT en 16 pièces (40,90 € HT en 12 pièces pour une soirée courte)` |
| mineur | `l'installation des buffets se fait avant l'arrivée des invités` (l. 360) | L'installation n'est que « possible » selon les formules. Écrit ainsi, l'article la présente comme incluse. | app/creations/cocktails/data.js (seoHtml : « installation possible ») ; app/traiteur/page.js l. 81 (« met en place sur demande ») | `l'installation, si vous la demandez au devis, se fait avant l'arrivée des invités` |
| mineur | `le format le plus adapté est un cocktail de 12 pièces par personne sur deux heures, de 18h à 20h` (cocktail-inauguration-entreprise, l. 383) | Contredit le tableau de l'article dînatoire (l. 258 : 17h30-19h30 = apéritif, 6 à 8 pièces) et la fiche (12-14 pièces = déjeunatoire). | FICHE-VERITE.md, « Quantités cocktail » ; journalCocktail.js l. 258-259 | `le format le plus adapté est un cocktail de 8 à 12 pièces par personne sur deux heures, de 18h à 20h, soit de 29,90 à 40,90 € HT par invité` |

**Verdict : à corriger.**

---

## 2. lib/journalData.js

### cocktail-entreprise-halal-paris

| Gravité | Extrait exact | Problème | Source consultée | Remplacement exact proposé |
|---|---|---|---|---|
| mineur | `Comptez 3 à 4 boissons par personne pour un cocktail de deux heures.` (l. 73, et FAQ l. 83) | Contredit les articles cocktail : 3 boissons pour deux heures (une flûte et deux verres de jus), 3 à 4 pour trois heures. | lib/journalCocktail.js l. 214 et l. 293 | `Comptez 3 boissons par personne pour un cocktail de deux heures, 3 à 4 au-delà.` |

### evenement-entreprise-halal-guide

| Gravité | Extrait exact | Problème | Source consultée | Remplacement exact proposé |
|---|---|---|---|---|
| important | `<td>Lunch box</td><td>19,90 €</td>` (l. 108) | La lunch box la moins chère est à 18,90 € HT (La Fermière). À trancher : voir l'en-tête. | app/creations/lunch-box/data.js l. 59 | `<td>Lunch box</td><td>18,90 €</td>` |
| important | `Tout est livré dans la même commande.` (l. 112) ; `livrés dans la même commande` (FAQ l. 142) | Promesse impossible à tenir. Un petit-déjeuner à 7h et un cocktail à 18h font deux livraisons, et chaque livraison coûte 29 € HT. | FICHE-VERITE.md, « Livraison » | `Tout se commande sur un seul devis.` ; FAQ : `commandés sur un seul devis` |
| important | `Jusqu'à la veille 14h pour un petit-déjeuner, des plateaux repas ou un cocktail.` (l. 135 et FAQ l. 144) | Le délai de 48 h à partir de 50 personnes n'est pas mentionné. | FICHE-VERITE.md, « Commande » | `Jusqu'à la veille 14h pour un petit-déjeuner, des plateaux repas ou un cocktail, et 48 h avant à partir de 50 personnes.` |
| mineur | `Entrée, plat, dessert, individuels et étiquetés` (l. 107) | « Étiquetés » n'a pas de source, et le pain est oublié. | app/creations/plateaux-repas/page.js l. 23 | `Entrée, plat, dessert et pain, en plateau individuel` |
| mineur | `Madeleines, cakes, fruits, boissons chaudes` (l. 106) | La pause à 6 € comprend une pâtisserie et une boisson. Selon la recette goûter de l'OS, les boissons chaudes ne sont pas incluses d'office. | app/traiteur/page.js l. 51 ; lecrin-os/lib/devis-recipes.ts l. 126-127 | `Une pâtisserie (madeleines, cookies, cakes) et une boisson` |

### budget-petit-dejeuner-equipe-personnes (tableaux)

J'ai recalculé les sept lignes avec la règle « jus pour 1 personne sur 2 » : 122,30 / 175,40 / 292,80 / 360,20 / 642,80 / 1 010,10 / 1 234,50 € sont exacts, et la composition aussi. Les écarts restants sont les suivants.

| Gravité | Extrait exact | Problème | Source consultée | Remplacement exact proposé |
|---|---|---|---|---|
| bloquant | `<td>à partir de 2,90 €</td><td>Viennoiseries pur beurre et thermos de café</td>` (l. 2889) ; `et 2,90 € HT pour des viennoiseries avec café` (FAQ l. 2931) | Prix sans aucune source, et impossible à honorer. Avec le catalogue : 2 mini-viennoiseries = 48,90 / 30 × 2 = 3,26 € ; café = 19,50 / 6 = 3,25 € ; total 6,51 € par personne. Le même chiffre figure dans app/creations/evenements-saisonniers/evenementsData.js l. 257 (hors périmètre). | lib/productsData.js l. 110 ; lib/boissonsData.js l. 407 | `<td>environ 6,50 €</td>` ; FAQ : `et environ 6,50 € HT pour deux mini-viennoiseries avec café` |
| important | `1 verre de 20 cl pour 1 personne sur 2` (l. 2844), le paragraphe l. 2847, FAQ l. 2932, la colonne Jus et le tableau des budgets | Conforme à la fiche, mais pas à l'OS en service depuis le 11/10. À trancher (voir l'en-tête). | lecrin-os/lib/devis-recipes.ts l. 68-75 | (règle OS) Quantité : `1 verre de 20 cl par personne`. Supprimer le paragraphe l. 2847. Jus : 2 / 3 / 4 / 6 / 10 / 16 / 20 L. Budgets (produits / total / par personne) : 10 p. `131,80 / 160,80 / 13,18` ; 15 p. `184,90 / 213,90 / 12,33` ; 20 p. `311,80 / 340,80 / 15,59` ; 30 p. `388,70 / 417,70 / 12,96` ; 50 p. `690,30 / 719,30 / 13,81` ; 80 p. `1 086,10 / 1 115,10 / 13,58` ; 100 p. `1 329,50 / 1 358,50 / 13,29`. FAQ 10 p. : `131,80 € HT … soit 160,80 € HT … 2 L de jus, soit 13,18 €` ; FAQ 20 p. : `311,80 € … 340,80 € … 15,59 € … 4 L de jus` ; FAQ 50 p. : `690,30 € … 719,30 € … 13,81 € … 10 L de jus` |
| important | `entre 12 et 16 € HT par personne</strong>, plus la livraison de 29 € HT, pour une équipe de 10 à 100 personnes` (l. 2831 et FAQ l. 2931) | Contredit le tableau de l'article : 11,69 € par personne à 15 personnes. | Tableau de l'article, l. 2872 | Si la règle de l'OS est retenue, le texte reste juste (12,33 à 15,59 €). Sinon : `entre 11,70 et 14,70 € HT par personne` |
| important | `1 à 2 cakes maison d'une dizaine de parts pour varier` (l. 2841) | Le catalogue vend le cake pour « 5 à 6 personnes ». | lib/productsData.js l. 244-246 | `1 à 2 cakes maison (5 à 6 parts chacun) pour varier` |
| mineur | `il grimpe à 20 personnes, seuil où nous ajoutons les brochettes de fruits et un second plateau de viennoiseries` (l. 2881) | Le seuil est à 16 personnes : brochettes au-delà de 15, et 16 × 2 = 32 viennoiseries, donc 2 plateaux. | lecrin-os/lib/devis-recipes.ts l. 78, 224-225 | `il grimpe à partir de 16 personnes, seuil où nous ajoutons les brochettes de fruits et un second plateau de viennoiseries` |
| mineur | `Un croissant artisanal coûte 2 à 3 fois plus cher à produire.` (l. 2900) | Chiffre sans source. | Aucune | (supprimer la phrase) |

### petit-dejeuner-entreprise-conseils (quantités et budget)

Le tableau l. 3819-3824 et le budget pour 20 personnes (292,80 / 321,80 €) sont exacts avec la règle de la fiche.

| Gravité | Extrait exact | Problème | Source consultée | Remplacement exact proposé |
|---|---|---|---|---|
| important | `un verre de jus pour une personne sur deux` (l. 3814), colonne Jus 1 / 2 / 3 / 5, `292,80 € HT, soit 321,80 € HT` (section budget et FAQ) | Même écart avec l'OS. À trancher. | lecrin-os/lib/devis-recipes.ts l. 68-75 | (règle OS) `un verre de jus par personne` ; colonne Jus `2 / 4 / 6 / 10` ; `311,80 € HT, soit 340,80 € HT` ; FAQ 10 p. `2 litres de jus`, FAQ 20 p. `4 litres de jus` |

**Verdict : à corriger** (les quatre articles).

---

## 3. lib/pdjVillesData.js

| Gravité | Extrait exact | Problème | Source consultée | Remplacement exact proposé |
|---|---|---|---|---|
| important | `le petit-déjeuner est notre commande la plus fréquente : sièges sociaux, cabinets d'avocats, sociétés de gestion et family offices […] Les effectifs sont souvent réduits, de 8 à 15 personnes` (Neuilly, l. 261) | Affirmations sur la clientèle locale sans source. Ni la fiche ni l'OS n'ont été cités. | FICHE-VERITE.md (absent de « Certain ») | `À <strong>Neuilly-sur-Seine</strong>, nous livrons le petit-déjeuner d'entreprise dès <strong>6h30</strong>, de la Porte Maillot au pont de Neuilly : avenue Charles-de-Gaulle, Sablons, boulevard Bineau. Pour un comité de 8 personnes comme pour une réunion d'équipe, la présentation compte autant que le contenu du plateau.` |
| important | `nos clients neuilléens passent à la formule Complet : aux viennoiseries s'ajoutent des madeleines, des brochettes de fruits frais, du thé et un choix de jus plus large` (l. 267) | Habitude de clients sans source. Le « choix de jus plus large » ne figure pas dans la recette, qui se limite à orange et pomme. | lecrin-os/lib/devis-recipes.ts l. 74-75 | `Quand la réunion compte des invités externes, la formule Complet ajoute aux viennoiseries des madeleines, des brochettes de fruits frais et du thé.` |
| important | `Formule Complet : environ 151€ HT livraison comprise.` (Neuilly FAQ, l. 278) | Exact avec la fiche, mais 160,80 € avec l'OS. À trancher. | lecrin-os/lib/devis-recipes.ts l. 72 | (règle OS) `Formule Complet : environ 161€ HT livraison comprise.` |
| mineur | `Beaucoup d'équipes de Neuilly commandent le même jour chaque semaine. Dites-le à la première commande : nous gardons votre composition` (l. 270) | Fréquence sans source. La commande récurrente n'est pas décrite ailleurs sur le site. | FICHE-VERITE.md | `Pour une livraison chaque semaine, dites-le à la première commande : nous reprenons votre composition, votre heure de livraison et les consignes d'accès, et vous confirmez l'effectif la veille avant 14h.` |
| important | `beaucoup des entreprises que nous y livrons ont quitté Paris pour des bureaux plus grands. La demande principale : un petit-déjeuner pour une réunion qui démarre tôt.` (Asnières, l. 295) | Affirmations sur la clientèle sans source. | FICHE-VERITE.md | `La demande la plus courante : un petit-déjeuner pour une réunion qui démarre tôt.` (supprimer la première affirmation) |
| important | `Les commandes vont du petit-déjeuner de 15 personnes pour une réunion client au petit-déjeuner de 150 personnes pour un événement interne.` (Levallois, l. 329) | Commandes réelles à Levallois sans source. | FICHE-VERITE.md | `Nous livrons aussi bien un petit-déjeuner de 15 personnes pour une réunion client qu'un petit-déjeuner de 150 personnes pour un événement interne.` |
| important | `17 thermos de café et de thé et 10 litres de jus, soit environ 1 264€ HT livraison comprise` (l. 335 et FAQ l. 345) | Calcul exact avec la fiche (1 234,50 + 29 = 1 263,50). Avec l'OS : 20 L et 1 358,50 €. À trancher. | lecrin-os/lib/devis-recipes.ts l. 72 | (règle OS) `17 thermos de café et de thé et 20 litres de jus, soit environ 1 359€ HT livraison comprise` |
| mineur | `et une sélection de jus plus large` (formules Complet, l. 258, 292, 326) | Pas dans la recette (orange et pomme). | lecrin-os/lib/devis-recipes.ts l. 74-75 | `La base Classique, plus madeleines ou cakes, brochettes de fruits et thé.` (garder la fin de phrase propre à chaque ville) |

**Verdict : à corriger** (les trois villes).

---

## 4. app/corporate-catering-paris/page.js

| Gravité | Extrait exact | Problème | Source consultée | Remplacement exact proposé |
|---|---|---|---|---|
| important | `'Lunch boxes', 'From €19.90 per person'` (l. 19) ; `lunch boxes from €19.90` (FAQ l. 25) | La Fermière est à 18,90 € HT. À trancher (voir l'en-tête). | app/creations/lunch-box/data.js l. 59 | `'From €18.90 per person'` ; `lunch boxes from €18.90` |
| important | `We deliver to offices for teams of 10 to 300 people` (l. 80) | Bornes sans source. Contredit aussi la page Neuilly : pas de minimum de personnes, seulement un minimum de 50 € HT, et 8 personnes citées en exemple. | FICHE-VERITE.md, « Minimum » ; lib/pdjVillesData.js l. 277 | `We deliver to offices of any size, with a €50 minimum order:` |
| important | `Every product comes from a named artisan, such as Mado Paris madeleines and Alain Milliat juices` (l. 80) | Généralisation invérifiable. Les pièces cocktail et les plateaux viennent de chefs qu'on ne nomme pas (interdit de la fiche), et les eaux sont de grandes marques. | FICHE-VERITE.md, « Interdit » et « Fournisseurs nommés » | `Our pastries and drinks come from named producers, such as Mado Paris madeleines and Alain Milliat juices` |
| mineur | `'Madeleines, cakes, fruit and hot drinks for a meeting or a training day.'` (l. 18) | L'offre à 6 € comprend une pâtisserie et une boisson. Les boissons chaudes ne sont pas incluses d'office. | app/traiteur/page.js l. 51 ; lecrin-os/lib/devis-recipes.ts l. 126-127 | `'A pastry and a drink per person (madeleines, cookies or cakes) for a meeting or a training day.'` |
| mineur | `individually packed and labelled` (l. 20) | « Labelled » n'a pas de source. | app/creations/plateaux-repas/page.js l. 23 | `individually packed` |

**Verdict : à corriger.**

---

## 5. Tableaux « Combien coûte… » de app/traiteur-halal/page.js et app/traiteur/page.js

| Gravité | Extrait exact | Problème | Source consultée | Remplacement exact proposé |
|---|---|---|---|---|
| important | `['Lunch box', 'dès 19,90 €', 'Déjeuner individuel prêt à manger']` (traiteur-halal, l. 285) | La Fermière est à 18,90 € HT. À trancher. | app/creations/lunch-box/data.js l. 59 | `['Lunch box', 'dès 18,90 €', 'Déjeuner individuel prêt à manger']` |
| important | Même ligne (traiteur, l. 202) | Idem. | Idem | Idem |
| important | `Combien coûte un traiteur d'entreprise à Paris ?` en H2 deux fois sur la même page (l. 187, nouveau tableau ; l. 250, section « Repères de prix » existante) | Deux sections identiques sur la même page, et le contenu se répète. | app/traiteur/page.js l. 186-188 et 249-251 | Titre l. 250 : `Nos prix par prestation` (ou supprimer l'une des deux sections) |

**Verdicts :** traiteur-halal : à corriger (une ligne). traiteur : à corriger (une ligne et un titre en double).

---

## Faux positifs écartés

- **Totaux cocktail** : 20, 30, 40, 50, 60, 80, 100 et 150 personnes × 29,90 / 40,90 / 51,90 € ; tous exacts.
- **Répartition salé / sucré** : 6/2, 9/3, 12/4 conformes à `app/creations/cocktails/data.js`. 300/100, 450/150, 600/200, 900/300 et 1 200/400 exacts. Le menu La Réception (9 + 3) et le menu La Célébration (4 + 4 + 4 salées, 4 sucrées) correspondent aux compositions. Le tableau des 16 pièces et ses coches par formule est exact.
- **Boissons** : Chardonnay 0 % à 16,90 € (75 cl, 6 flûtes = 12,5 cl) ; bouteilles 4 / 5 / 9 / 17 = arrondi supérieur de n / 6 ; nectars à 10,50 € ; infusion citron vert et gingembre à 10,50 € (conforme à la décision du 13/10). Thermos « 6 tasses » cohérent avec la règle de l'OS (1 pour 6), même si la fiche produit dit « 6 à 8 ».
- **Calculs boissons des articles** : 152,10 ; 190 ; 2 416,10 ; 48,32 ; 143,60 ; 198,50 ; 342,10 ; 667,30 ; 4 786,30 ; 5 886,30 ; 47,86 ; 58,86. Tous justes avec les hypothèses des articles. Le problème est l'hypothèse, pas le calcul.
- **Animations citées** (atelier mini burgers, découpe de saumon frais, atelier sushi et maki, bar à mocktails avec barman, fontaine au chocolat) : toutes présentes dans `app/creations/animations-culinaires/data.js`.
- **Liens internes** : les 6 articles cocktail, les articles de journalData relus, les 3 villes, la page anglaise et les deux tableaux ne contiennent aucun lien cassé. Les seuls liens absents de la liste (`/creations/pauses-gourmandes/madeleines-octobre-rose`, l. 5224 et suivantes) sont hors périmètre ; le produit existe dans `lib/productsData.js` l. 134.
- **« ZAC des Grésillons » à Asnières** : la ZAC Gare des Grésillons est à cheval sur Asnières et Gennevilliers, et il existe un quartier Grésillons-Voltaire à Asnières. Correct ([MRAe](https://www.mrae.developpement-durable.gouv.fr/IMG/pdf/2025-02-12_gennevilliers_zac_gare_des_gresillons_avis_delibere.pdf), [lesclefsdechezmoi](https://www.lesclefsdechezmoi.fr/achat-immobilier/hauts-de-seine/asnieres-sur-seine/gresillons-voltaire/appartements/lumineux.html)).
- **Formule Classique** : 8 € HT, et 80 / 120 / 160 / 240 / 400 € + 29 € = 109 / 149 / 189 / 269 / 429 € ; tous exacts. 8 personnes : 64 + 29 = 93 €, au-dessus du minimum. Complet pour 20 personnes, de 269 à 349 € : exact (240-320 + 29).
- **Petit-déjeuner pour 100 personnes à Levallois** : 210 viennoiseries, 80 madeleines, 2 cakes, 100 brochettes, 14 + 3 thermos ; conformes à la recette.
- **« Plus d'un tiers du budget en boissons » à 50 personnes** : 223 / 642,80 = 34,7 % (39 % avec la règle de l'OS). Juste.
- **« Heure de réception précise » et « posé avant 8h45 »** : promesse déjà présente sur le site (« Notre équipe livre à l'heure fixée », app/traiteur/page.js l. 81).
- **Champagne cité dans l'article sans alcool** : présenté comme ce qu'on remplace, pas recommandé. Conforme.
- **« Professionnel » ou « événement professionnel »** : ce n'est pas le mot interdit « pro ». Aucun point d'exclamation dans le périmètre.
- **Page anglaise** : 189 € pour 20 personnes, 2 045 € pour 50 personnes en 12 pièces, note de 5,0 (lib/gbpData.json : 5,0 et 29 avis), villes citées toutes présentes dans `lib/citiesData.js` (Issy, Versailles, Suresnes, Nanterre…). Le pain dans les plateaux repas est sourcé (plateaux-repas/page.js l. 23).
- **Tableaux traiteur et traiteur-halal** : petit-déjeuner 8 €, goûter 6 € (« une boisson et une pâtisserie »), plateau 28,90 €, cocktails 29,90 / 40,90 / 51,90 € et usages par formule ; tous conformes.

## Hors périmètre, à signaler

- `app/creations/evenements-saisonniers/evenementsData.js` l. 257 : même prix « 2,90 euros HT » sans source.
- `app/creations/cocktails/data.js` (seoHtml de La Réception) : « notre formule la plus choisie pour un cocktail dînatoire ». C'est contraire à la fiche, qui réserve le dînatoire à 16-18 pièces.
- `app/traiteur-halal/page.js` l. 89 : « De 10 à 300 personnes et plus », borne sans source (même point que la page anglaise).
- FICHE-VERITE.md : les lignes « Lunch box dès 19,90 € » et « jus pour 1 personne sur 2 » ne sont plus à jour par rapport au catalogue et à l'OS.

## Décompte

| Page | Bloquant | Important | Mineur |
|---|---|---|---|
| 1. journalCocktail.js | 0 | 6 | 5 |
| 2. journalData.js | 1 | 7 | 5 |
| 3. pdjVillesData.js | 0 | 6 | 2 |
| 4. corporate-catering-paris | 0 | 3 | 2 |
| 5. traiteur-halal + traiteur | 0 | 3 | 0 |
| **Total** | **1** | **25** | **14** |

Verdict : aucune des pages n'est publiable telle quelle ; toutes sont à corriger. Huit des 25 points importants dépendent des deux arbitrages de l'en-tête (jus au petit-déjeuner et prix de la lunch box).
