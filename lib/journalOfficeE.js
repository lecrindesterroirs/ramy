// Articles « office manager » (lot E) : fusionnés via lib/journalOffice.js
// Série « idées » : cocktail dînatoire petit budget, petit-déjeuner, afterwork, déjeuner au bureau.

// Le bloc FAQ visible est généré à partir du tableau `faq` : les deux restent identiques.
const faqBlock = (faq) => `
      <div class="faq-block">
${faq.map(({ q, a }) => `        <details>
          <summary><strong>${q}</strong></summary>
          <p>${a}</p>
        </details>`).join('\n')}
      </div>`

/* ------------------------------------------------------------------ */
/* 1. Cocktail dînatoire pas cher                                      */
/* ------------------------------------------------------------------ */

const FAQ_COCKTAIL_BUDGET = [
  { q: "Combien coûte un cocktail dînatoire pas cher pour 20 personnes ?", a: "Pour 20 personnes, le cocktail le moins cher coûte 598 € HT en 8 pièces, soit 627 € HT avec la livraison de 29 € HT. En 12 pièces, comptez 847 € HT livré, et en 16 pièces, le vrai dînatoire, 1 067 € HT livré. Les boissons s'ajoutent." },
  { q: "Quel est le prix d'une pièce de cocktail d'entreprise ?", a: "La pièce revient à 3,74 € HT en formule L'Invitation (29,90 € pour 8 pièces), 3,41 € HT en La Réception (40,90 € pour 12) et 3,24 € HT en La Célébration (51,90 € pour 16). La formule la plus grande est la moins chère à la pièce, mais la plus chère au total." },
  { q: "Combien de pièces prévoir pour un cocktail dînatoire ?", a: "Un cocktail dînatoire qui remplace le dîner demande 16 à 18 pièces par personne. Un apéritif d'une heure et demie à deux heures se contente de 6 à 8 pièces, un cocktail déjeunatoire de 12 à 14. Pour tenir un budget serré, changez de format plutôt que de réduire les quantités." },
  { q: "Comment réduire le budget d'un cocktail d'entreprise ?", a: "Quatre leviers : choisir 8 pièces plutôt que 16 si l'horaire le permet (22 € HT de moins par personne), commander sur l'effectif confirmé, grouper boissons et pièces dans une seule livraison de 29 € HT, et retirer les extras comme l'animation, qui démarre à 600 € HT." },
  { q: "La livraison est-elle comprise dans le prix par personne ?", a: "Non. La livraison s'ajoute : 29 € HT par livraison à Paris et dans les communes proches, quel que soit l'effectif. Les autres zones sont chiffrées sur devis. Les gobelets, la vaisselle et les couverts jetables sont inclus sans supplément ; la vaisselle réutilisable implique 19 € HT de récupération du matériel." },
  { q: "Le cocktail est-il halal et sans alcool ?", a: "Oui, par défaut : toute la carte est halal et sans porc, sans alcool et sans supplément. Les options végétariennes, vegan et sans gluten se précisent à la commande avec le nombre de convives concernés. L'atelier manipule de la farine, des traces de gluten restent possibles." },
]

/* ------------------------------------------------------------------ */
/* 2. Idées de petit-déjeuner au bureau                                */
/* ------------------------------------------------------------------ */

const FAQ_PDJ_IDEES = [
  { q: "Quelle idée de petit-déjeuner au bureau coûte le moins cher ?", a: "Pour 20 personnes, les chouquettes et le jus : 2 plateaux de 30 chouquettes (53,60 € HT) et 2 L de jus (19,00 € HT), soit 72,60 € HT et 3,63 € HT par personne, plus 29 € HT de livraison. Les cakes maison suivent, à 3,73 € HT." },
  { q: "Combien coûte un petit-déjeuner au bureau pour 20 personnes ?", a: "La formule Classique coûte 160 € HT pour 20 personnes, soit 189 € HT avec la livraison de 29 € HT. Le petit-déjeuner complet va de 12 à 16 € HT par personne, soit 240 à 320 € HT avant livraison." },
  { q: "Quel petit-déjeuner choisir pour une équipe avec des régimes différents ?", a: "Associez des fruits, vegan et sans gluten, et un banana bread sans gluten à 21,90 € HT pour 5 à 6 personnes. Toute la carte est halal et sans porc par défaut. L'atelier manipule de la farine : des traces restent possibles." },
  { q: "Combien de viennoiseries par personne pour un petit-déjeuner au bureau ?", a: "Comptez 2 mini-viennoiseries par personne, 3 jusqu'à 10 personnes, avec 10 % de marge. Un plateau de 30 mini-viennoiseries (48,90 € HT) convient à 10 à 15 personnes ; pour 20 personnes, 3 plateaux de 16 pièces font 48 pièces." },
  { q: "Quelle idée de thème pour un petit-déjeuner d'entreprise en octobre ?", a: "Octobre Rose, jusqu'au 31 octobre : un coffret de 10 madeleines à glaçage rose coûte 29,00 € HT, et 1 € par convive est reversé à la recherche contre le cancer du sein. Pour 20 personnes, la formule Classique et 2 coffrets font 247 € HT livrés." },
  { q: "Jusqu'à quelle heure commander un petit-déjeuner pour le lendemain ?", a: "Jusqu'à la veille 14h, pour une livraison du lundi au vendredi dès 6h30. À partir de 50 personnes ou pour plusieurs sites, un préavis de 48 h est recommandé. Le minimum de commande est de 50 € HT, la livraison de 29 € HT à Paris et communes proches." },
]

/* ------------------------------------------------------------------ */
/* 3. Idées d'afterwork                                                */
/* ------------------------------------------------------------------ */

const FAQ_AFTERWORK_IDEES = [
  { q: "Quelle idée d'afterwork en entreprise pour un petit budget ?", a: "La pause gourmande, dès 6 € HT par personne : 120 € HT pour 20 personnes, soit 149 € HT avec la livraison de 29 € HT. Pour un vrai cocktail, la formule L'Invitation de 8 pièces coûte 29,90 € HT par personne, soit 627 € HT livrés pour 20 personnes." },
  { q: "Combien coûte un afterwork en entreprise pour 30 personnes ?", a: "Pour 30 personnes, 897 € HT en 8 pièces, 1 227 € HT en 12 pièces et 1 557 € HT en 16 pièces, plus 29 € HT de livraison. Les boissons sans alcool, comptées à 4 verres par personne, ajoutent environ 8 € HT par personne. Un menu à partager revient de 1 047 à 1 137 € HT hors livraison." },
  { q: "Peut-on organiser un afterwork sans alcool ?", a: "Oui, c'est le standard chez L'Écrin Traiteur : la carte est sans alcool. Le Chardonnay Blanc de Blancs 0 % remplace le pétillant, à 16,90 € HT la bouteille de 75 cl (6 flûtes), avec des jus et des eaux. Un bar à mocktails, 100 % sans alcool, se commande en animation à partir de 600 € HT." },
  { q: "Combien de pièces par personne pour un afterwork ?", a: "Comptez 8 pièces par personne pour un afterwork de 1h30 à 2h, 12 pièces s'il dépasse deux heures, 16 pièces s'il remplace le dîner. Gardez deux tiers de salé pour un tiers de sucré. Les pièces salées partent deux fois plus vite que les sucrées en début de soirée." },
  { q: "Que comprend une animation d'afterwork ?", a: "Une animation comprend l'intervenant qui prépare devant vos invités, la mise en place, les denrées calées sur l'effectif, l'installation et le démontage. Son prix se fixe sur devis, avec un plancher de 600 € HT. Prévoyez l'accès, l'électricité et l'espace pour les ateliers chauds." },
  { q: "Jusqu'à quelle heure commander un afterwork ?", a: "Jusqu'à la veille 14h, pour une livraison juste avant l'heure du pot, du lundi au vendredi. À partir de 50 personnes ou pour plusieurs sites, un préavis de 48 h est recommandé. Il n'y a pas de minimum de participants, seulement un minimum de commande de 50 € HT." },
]

/* ------------------------------------------------------------------ */
/* 4. Idées de déjeuner au bureau                                      */
/* ------------------------------------------------------------------ */

const FAQ_DEJEUNER_IDEES = [
  { q: "Quelle idée de déjeuner au bureau pour une équipe de 10 personnes ?", a: "Pour 10 personnes, la lunch box végétarienne coûte 189 + 29 = 218 € HT livrée, le plateau repas au poulet 299 + 29 = 328 € HT et le menu à partager Le Jardin 349 + 29 = 378 € HT. Le minimum de commande est de 50 € HT." },
  { q: "Quel repas d'équipe à emporter choisir ?", a: "La lunch box : un sandwich en baguette ou pain viennois, une entrée, un dessert, serviette et couverts, de 18,90 à 21,90 € HT par personne. Elle se distribue en quelques minutes, sans vaisselle. Le plateau repas, de 28,90 à 30,90 € HT, convient mieux à un déjeuner servi en salle." },
  { q: "Combien coûte un repas de séminaire par personne ?", a: "Pour 30 personnes, un déjeuner assis en plateaux au poulet coûte 29,90 € HT par personne, un déjeuner debout en 12 pièces 40,90 € HT, un dîner en 16 pièces 51,90 € HT. La livraison de 29 € HT s'ajoute à chaque livraison." },
  { q: "Existe-t-il un bar à salades au catalogue ?", a: "Non, le catalogue ne comporte pas de bar à salades. Les salades se trouvent dans les plateaux repas (salade César au poulet, salade de lentilles, quinoa) et dans les menus à partager, comme la salade grecque ou la salade de torti au pesto." },
  { q: "Quel déjeuner choisir pour une équipe aux régimes variés ?", a: "Partez sur un tiers de plateaux végétariens, à 28,90 € HT, soit 7 sur 20, et le reste au poulet ou au saumon. Toute la carte est halal et sans porc par défaut. Le végétarien, le vegan et le sans gluten se précisent à la commande ; des traces de gluten restent possibles." },
  { q: "Jusqu'à quelle heure commander un déjeuner pour le lendemain ?", a: "Jusqu'à la veille 14h, pour une livraison dès 6h30 du lundi au vendredi, à l'heure que vous indiquez. À partir de 50 personnes ou pour plusieurs sites, un préavis de 48 h est recommandé. La livraison est de 29 € HT à Paris et dans les communes proches." },
]

export const OFFICE_E = [
  /* ================================================================ */
  {
    slug: 'cocktail-dinatoire-pas-cher-entreprise-budget',
    titre: "Cocktail dînatoire pas cher en entreprise : combien ça coûte et où économiser",
    metaTitle: "Cocktail dînatoire pas cher : prix et économies",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    isoModified: '2026-10-13',
    extrait: "Cocktail dînatoire pas cher : de 29,90 à 51,90 € HT par personne, de 3,24 à 3,74 € la pièce. Budget pour 20 et 50 personnes et 4 leviers d'économie.",
    img: '/hero-plateaux-aperitifs.webp',
    contenu: `
      <p>Un <strong>cocktail d'entreprise pour 20 personnes coûte 627 € HT livré en 8 pièces</strong> (L'Invitation, un apéritif), 847 € HT en 12 pièces et 1 067 € HT en 16 pièces, le format dînatoire qui remplace le dîner. Le prix par personne ne baisse pas avec l'effectif : l'économie se joue sur le format, l'effectif confirmé, la livraison et les extras, pas sur le prix de la pièce.</p>

      <h2>Quel est le prix d'un cocktail dînatoire pas cher par personne ?</h2>
      <p>Le cocktail le moins cher du catalogue coûte 29,90 € HT par personne en 8 pièces, le plus complet 51,90 € HT en 16 pièces, plus 29 € HT de livraison par commande à Paris et dans les communes proches. Le coût par pièce baisse quand la formule grossit, de 3,74 € à 3,24 €.</p>
      <table>
        <thead>
          <tr><th>Formule</th><th>Pièces par personne</th><th>Prix HT par personne</th><th>Coût HT par pièce</th><th>Usage honnête</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>L'Invitation</strong></td><td>8</td><td>29,90 €</td><td>3,74 €</td><td>Apéritif d'1h30 à 2h, ne remplace pas un repas</td></tr>
          <tr><td><strong>La Réception</strong></td><td>12</td><td>40,90 €</td><td>3,41 €</td><td>Déjeunatoire, ou soirée qui démarre à 19h</td></tr>
          <tr><td><strong>La Célébration</strong></td><td>16</td><td>51,90 €</td><td>3,24 €</td><td>Dînatoire, remplace le dîner</td></tr>
        </tbody>
      </table>
      <p>Les compositions sont sur la page <a href="/creations/cocktails">cocktails d'entreprise</a>.</p>

      <h2>Faut-il prendre 16 pièces pour payer la pièce moins cher ?</h2>
      <p>Non : passer de 8 à 16 pièces fait baisser la pièce de 0,50 € mais ajoute 1 100 € HT à 50 personnes (2 595 moins 1 495). Choisissez le nombre de pièces selon l'horaire : 8 avant un dîner, 12 si la soirée commence à 19h, 16 seulement si personne ne dîne ailleurs. Le total fait foi, pas le prix à la pièce.</p>

      <h2>Combien coûte un cocktail pour 20 et 50 personnes, livraison comprise ?</h2>
      <p>Pour 20 personnes, le budget va de 627 à 1 067 € HT livraison comprise, pour 50 personnes de 1 524 à 2 624 € HT, hors boissons. Le calcul est prix par personne × effectif + 29 € HT, avec l'hypothèse d'une seule livraison pour toute la commande.</p>
      <table>
        <thead>
          <tr><th>Effectif</th><th>L'Invitation (8 pièces)</th><th>La Réception (12 pièces)</th><th>La Célébration (16 pièces)</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>20 personnes</strong></td><td>598 + 29 = 627 € (31,35 € par personne)</td><td>818 + 29 = 847 € (42,35 €)</td><td>1 038 + 29 = 1 067 € (53,35 €)</td></tr>
          <tr><td><strong>50 personnes</strong></td><td>1 495 + 29 = 1 524 € (30,48 € par personne)</td><td>2 045 + 29 = 2 074 € (41,48 €)</td><td>2 595 + 29 = 2 624 € (52,48 €)</td></tr>
        </tbody>
      </table>
      <p>Pour 30, 80 ou 100 personnes, voir le <a href="/journal/budget-cocktail-entreprise-paris">budget d'un cocktail d'entreprise à Paris</a> et le guide du <a href="/journal/cocktail-entreprise-50-personnes">cocktail pour 50 personnes</a>.</p>

      <h2>Existe-t-il un traiteur entreprise pas cher, et que faut-il comparer ?</h2>
      <p>Le prix par personne comprend les pièces dressées et livrées prêtes à poser, les gobelets, la vaisselle et les couverts jetables, le halal et le sans porc, sans supplément. Il ne comprend pas la livraison, les boissons, l'installation ni la reprise du matériel. Comparez les devis ligne par ligne sur ces postes : un prix par personne bas peut cacher la livraison, les boissons ou le matériel.</p>
      <ul>
        <li><strong>Livraison</strong> : 29 € HT par livraison à Paris et communes proches.</li>
        <li><strong>Boissons sans alcool</strong> : 167,60 € HT pour 20 personnes, soit 8,38 € HT par personne (4 Chardonnay 0 %, 8 L de jus, 5 eaux).</li>
        <li><strong>Vaisselle réutilisable</strong> : récupération du matériel à 19 € HT en plus de la livraison, tarif de la vaisselle sur devis.</li>
        <li><strong>Animation</strong> : plancher de 600 € HT.</li>
      </ul>

      <h2>Où économiser vraiment sur un cocktail d'entreprise ?</h2>
      <p>Quatre leviers font baisser le budget d'un cocktail d'entreprise : le format, l'effectif, la livraison et les extras. Le format pèse le plus, jusqu'à 1 100 € HT à 50 personnes ; les trois premiers leviers ne changent rien à ce que voient vos invités.</p>
      <ul>
        <li><strong>Le format</strong> : 8 pièces au lieu de 16 économisent 22 € HT par personne, soit 1 100 € HT à 50 personnes, si vos invités dînent ensuite ou si l'horaire s'y prête, par exemple 17h30 à 19h30.</li>
        <li><strong>L'effectif</strong> : chaque personne en moins retire 29,90 € HT en 8 pièces. La marge de 10 % coûte 149,50 € HT à 50 personnes (5 × 29,90) ; avec une liste nominative confirmée la veille, elle est inutile.</li>
        <li><strong>La livraison</strong> : trois afterworks de 20 personnes regroupés en un seul de 60 économisent 58 € HT (1 881 contre 1 823 €). Des boissons commandées avec les pièces partent dans la même livraison ; à part, elles ajoutent 29 € HT.</li>
        <li><strong>Les extras</strong> : le pétillant à 2,82 € la flûte, l'eau en bouteille (24 € HT pour 20 personnes) et l'animation (600 € HT minimum) se retirent sans toucher au menu.</li>
      </ul>
      <p>Pour des commandes régulières, un tarif préférentiel est possible sur devis.</p>

      <h2>À quoi ressemble la version sobre d'un cocktail pour 50 personnes ?</h2>
      <p>Pour 50 personnes, la version sobre coûte 1 643,80 € HT livrée, soit 32,88 € HT par personne, contre 3 028,50 € HT (60,57 € par personne) pour un dînatoire complet avec boissons : 1 384,70 € HT d'écart. La version sobre est un apéritif de 8 pièces, avec deux verres d'infusion par personne.</p>
      <table>
        <thead>
          <tr><th>Poste</th><th>Dînatoire complet</th><th>Version sobre</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Pièces</strong></td><td>50 × 51,90 = 2 595,00 € (16 pièces)</td><td>50 × 29,90 = 1 495,00 € (8 pièces)</td></tr>
          <tr><td><strong>Boissons</strong></td><td>9 Chardonnay 0 % + 20 L de jus + 13 eaux = 404,50 €</td><td>2 jarres d'infusion de 10 L = 119,80 €</td></tr>
          <tr><td><strong>Livraison</strong> (1 livraison)</td><td>29,00 €</td><td>29,00 €</td></tr>
          <tr><td><strong>Total HT</strong></td><td>3 028,50 €</td><td>1 643,80 €</td></tr>
          <tr><td><strong>Par personne</strong></td><td>60,57 €</td><td>32,88 €</td></tr>
        </tbody>
      </table>
      <p>Une jarre d'infusion de 10 L (citron vert et gingembre, ou passion) remplit 50 verres de 20 cl pour 59,90 € HT, soit 1,20 € le verre contre 1,90 € pour le jus en bouteille. La version sobre suppose une fontaine ou des carafes d'eau sur place.</p>

      <h2>Quelles idées d'apéro dînatoire en entreprise quand le budget est limité ?</h2>
      <p>Cinq idées tiennent entre 6 et 40,90 € HT par personne, sans passer par le dînatoire complet à 51,90 € HT. Elles conviennent à un apéro dînatoire entre collègues ou à un pot : choisissez selon l'horaire et selon que vos invités dînent ensuite ou non.</p>
      <ul>
        <li><strong>L'apéritif de 8 pièces</strong> en fin de journée, à 29,90 € HT : gougères, tartelette pissaladière, brochette de poulet tandoori, mini cheeseburger, tartelette tout chocolat.</li>
        <li><strong>Le menu à partager</strong> à 34,90 € HT (Le Jardin, végétarien), 37,50 € (Le Méditerranéen) ou 37,90 € (Le Parisien) : avec Le Jardin, 850 € HT de moins que La Célébration à 50 personnes. Voir les <a href="/creations/a-partager">menus à partager</a>.</li>
        <li><strong>La Réception en 12 pièces</strong> à 40,90 € HT pour une soirée qui démarre à 19h : 550 € HT de moins que 16 pièces à 50 personnes.</li>
        <li><strong>La pause gourmande</strong> dès 6 € HT par personne pour un pot léger : 120 + 29 = 149 € HT pour 20 personnes.</li>
        <li><strong>Les plateaux apéritifs</strong> (mini baguettes, clubs, wraps, fromages affinés, charcuterie halal sans porc) se chiffrent sur devis : demandez le prix pour comparer.</li>
      </ul>
      <p>Pour un afterwork complet avec animations, voir nos <a href="/journal/idees-afterwork-entreprise-formats-budget">idées d'afterwork en entreprise</a>.</p>

      <h2>Quelles erreurs fréquentes éviter quand on veut un cocktail pas cher ?</h2>
      <p>Cinq erreurs font grimper le budget d'un cocktail sans améliorer la réception : elles coûtent de 29 € HT, une livraison à part, à 1 100 € HT, le choix de 16 pièces plutôt que 8 à 50 personnes. Les repérer avant de commander est le levier le moins cher.</p>
      <ul>
        <li><strong>Comparer le prix à la pièce</strong> plutôt que le total : 16 pièces coûtent 1 100 € HT de plus à 50 personnes.</li>
        <li><strong>Réduire les quantités d'un dînatoire</strong> : à 8 pièces, un dîner debout laisse les invités affamés. Changez de format.</li>
        <li><strong>Compter sur les invités</strong> plutôt que sur les confirmés : chaque personne en trop coûte 29,90 € HT.</li>
        <li><strong>Livrer les boissons à part</strong> : 29 € HT de livraison en plus.</li>
        <li><strong>Ajouter une animation sans retirer de pièces</strong> : l'animation remplace une partie du menu, demandez ce qui peut être enlevé.</li>
      </ul>

      <h2>Quelles sont les questions fréquentes sur le cocktail dînatoire pas cher ?</h2>${faqBlock(FAQ_COCKTAIL_BUDGET)}

      <h2>Comment obtenir le chiffrage de votre cocktail ?</h2>
      <p>Indiquez la date, l'adresse, l'horaire, l'effectif confirmé et les régimes : le devis revient sous 24 h, avec facturation entreprise et TVA. Commande jusqu'à la veille 14h, préavis de 48 h recommandé à partir de 50 personnes. <a href="/devis">Demandez votre devis</a> pour un chiffrage sur votre effectif. Tarifs L'Écrin Traiteur, octobre 2026.</p>
    `,
    relatedProducts: ['brochettes-fruits', 'madeleines-20', 'macarons'],
    faq: FAQ_COCKTAIL_BUDGET,
  },

  /* ================================================================ */
  {
    slug: 'idees-petit-dejeuner-bureau-par-budget',
    titre: "Idées de petit-déjeuner au bureau : 15 idées classées par budget et par effectif",
    metaTitle: "Idées de petit-déjeuner au bureau : 15 idées par budget",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    isoModified: '2026-10-13',
    extrait: "15 idées de petit-déjeuner au bureau, de 3,63 à 18,63 € HT par personne, classées par budget et par effectif, avec thèmes de saison et calculs.",
    img: '/prod-brunch-gourmand.webp',
    contenu: `
      <p>Une <strong>idée de petit-déjeuner au bureau coûte de 3,63 à 18,63 € HT par personne</strong> au catalogue pour 20 personnes, plus 29 € HT de livraison ; une animation barista s'ajoute sur devis. Voici 15 idées réalisables avec le catalogue de L'Écrin Traiteur, classées en trois niveaux de budget, avec le calcul ligne à ligne, l'effectif adapté et les thèmes de saison.</p>

      <h2>Quel petit-déjeuner au bureau choisir selon le budget ?</h2>
      <p>Choisissez le niveau par personne : moins de 6 € HT pour une collation, de 6 à 10 € HT pour un vrai petit-déjeuner, plus de 10 € HT pour un client ou un séminaire. Les calculs prennent 20 personnes et une livraison de 29 € HT.</p>

      <h2>Quelles idées de petit-déjeuner au bureau à moins de 6 € HT par personne ?</h2>
      <p>Cinq idées restent sous 6 € HT par personne, de 3,63 à 5,89 €, car elles reposent sur un ou deux produits. Elles supposent un café déjà disponible au bureau. Les prix sont hors livraison : ajoutez 1,45 € HT par personne pour 20 personnes.</p>
      <table>
        <thead>
          <tr><th>Idée</th><th>Calcul pour 20 personnes</th><th>Par personne HT</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>1. Chouquettes et jus</strong></td><td>2 plateaux de 30 chouquettes (2 × 26,80) + 2 L de jus (2 × 9,50) = 72,60 €</td><td>3,63 €</td></tr>
          <tr><td><strong>2. Cakes maison et jus</strong></td><td>4 cakes de 5 à 6 parts (4 × 13,90) + 2 L de jus (19,00) = 74,60 €</td><td>3,73 €</td></tr>
          <tr><td><strong>3. Viennoiseries seules</strong></td><td>3 plateaux de 16 mini-croissants et mini-pains au chocolat (3 × 26,80) = 80,40 €</td><td>4,02 €</td></tr>
          <tr><td><strong>4. Pains briochés salés et jus</strong></td><td>20 pains, tzatziki-concombre et saumon fumé (63,90) + 2 L de jus (19,00) = 82,90 €</td><td>4,15 €</td></tr>
          <tr><td><strong>5. Crêpes et confiture</strong></td><td>2 boîtes de 20 grandes crêpes (2 × 58,90), confiture et pâte à tartiner incluses = 117,80 €</td><td>5,89 €</td></tr>
        </tbody>
      </table>
      <p>Les viennoiseries se comptent à 2 par personne plus 10 % : 44 pièces pour 20 personnes, soit 3 plateaux de 16.</p>

      <h2>Quelles idées de petit-déjeuner au travail entre 6 et 10 € HT par personne ?</h2>
      <p>Cinq idées se situent entre 6,34 et 9,55 € HT par personne : c'est la zone du vrai petit-déjeuner, avec un fruit, une douceur et souvent une boisson chaude. Les quantités suivent la règle d'1 fruit et 1 douceur par personne, et d'1 thermos pour 6.</p>
      <table>
        <thead>
          <tr><th>Idée</th><th>Calcul pour 20 personnes</th><th>Par personne HT</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>6. Fruits et madeleines</strong></td><td>2 corbeilles de 10 à 12 fruits (2 × 38,90) + 20 madeleines (49,00) = 126,80 €</td><td>6,34 €</td></tr>
          <tr><td><strong>7. Fruits et yaourts fermiers</strong></td><td>2 corbeilles (77,80) + 4 coffrets de 6 yaourts (4 × 14,90) = 137,40 €</td><td>6,87 €</td></tr>
          <tr><td><strong>8. Yaourt granola et fruits</strong></td><td>4 coffrets de 6 yaourts granola (4 × 16,90) + 2 corbeilles (77,80) = 145,40 €</td><td>7,27 €</td></tr>
          <tr><td><strong>9. Viennoiseries, café et jus</strong></td><td>3 plateaux de 16 (80,40) + 4 thermos de 1 L (78,00) + 2 L de jus (19,00) = 177,40 €</td><td>8,87 €</td></tr>
          <tr><td><strong>10. Salé, sucré et café</strong></td><td>20 pains briochés (63,90) + 20 madeleines (49,00) + 4 thermos (78,00) = 190,90 €</td><td>9,55 €</td></tr>
        </tbody>
      </table>
      <p>La formule Classique (2 viennoiseries, jus, café, fruits) démarre à 8 € HT par personne : 160 + 29 = 189 € HT pour 20 personnes. C'est un prix de formule, chiffré au devis.</p>

      <h2>Quelles idées de petit-déjeuner d'équipe au-delà de 10 € HT par personne ?</h2>
      <p>Cinq idées dépassent 10 € HT par personne, de 10,30 à 18,63 € au catalogue et plus de 30 € avec une animation, pour un client, un séminaire ou un régime. Le petit-déjeuner complet de la formule coûte de 12 à 16 € HT par personne, soit 240 à 320 € HT pour 20 personnes avant livraison.</p>
      <table>
        <thead>
          <tr><th>Idée</th><th>Calcul pour 20 personnes</th><th>Par personne HT</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>11. Café et macarons</strong></td><td>2 coffrets de 24 macarons (2 × 64,00) + 4 thermos (78,00) = 206,00 €</td><td>10,30 €</td></tr>
          <tr><td><strong>12. Sans gluten</strong></td><td>4 banana bread sans gluten (4 × 21,90) + 20 brochettes de fruits (48,90) + 4 thermos (78,00) = 214,50 €</td><td>10,73 €</td></tr>
          <tr><td><strong>13. Petit-déjeuner complet</strong></td><td>Viennoiseries, madeleines ou cakes, fruits, café, thé, jus : formule de 12 à 16 € par personne</td><td>12 à 16 €</td></tr>
          <tr><td><strong>14. Brunch salé et sucré</strong></td><td>2 plateaux de 30 mini-viennoiseries (97,80) + 24 clubs (64,90) + 20 pains briochés (63,90) + 20 brochettes (48,90) + 4 thermos (78,00) + 2 L de jus (19,00) = 372,50 €</td><td>18,63 €</td></tr>
          <tr><td><strong>15. Barista en direct</strong></td><td>Cafés de spécialité préparés devant les invités, prix fixé sur devis, plancher de 600 € HT en plus du petit-déjeuner</td><td>dès 30 € à 20 personnes, dès 12 € à 50</td></tr>
        </tbody>
      </table>
      <p>Pour l'idée sans gluten, des traces restent possibles : l'atelier manipule de la farine.</p>

      <h2>Quel petit-déjeuner au bureau choisir selon l'effectif ?</h2>
      <p>Le même petit-déjeuner de viennoiseries, café et jus coûte 16,96 € HT par personne à 5 personnes et 8,95 € HT à 50 personnes, livraison comprise : la livraison de 29 € HT pèse 5,80 € par personne à 5 personnes, 0,58 € à 50.</p>
      <table>
        <thead>
          <tr><th>Effectif</th><th>Quantités</th><th>Calcul avec livraison</th><th>Par personne</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>5 personnes</strong></td><td>16 mini-viennoiseries, 1 thermos, 1 L de jus</td><td>26,80 + 19,50 + 9,50 + 29 = 84,80 €</td><td>16,96 €</td></tr>
          <tr><td><strong>10 personnes</strong></td><td>30 mini-viennoiseries, 2 thermos, 1 L de jus</td><td>48,90 + 39,00 + 9,50 + 29 = 126,40 €</td><td>12,64 €</td></tr>
          <tr><td><strong>20 personnes</strong></td><td>48 mini-viennoiseries, 4 thermos, 2 L de jus</td><td>80,40 + 78,00 + 19,00 + 29 = 206,40 €</td><td>10,32 €</td></tr>
          <tr><td><strong>50 personnes</strong></td><td>120 mini-viennoiseries, 9 thermos, 5 L de jus</td><td>195,60 + 175,50 + 47,50 + 29 = 447,60 €</td><td>8,95 €</td></tr>
        </tbody>
      </table>
      <p>Sous 10 personnes, groupez la livraison avec une autre commande. Quantités détaillées : <a href="/journal/combien-viennoiseries-par-personne">combien de viennoiseries par personne</a> et <a href="/journal/budget-petit-dejeuner-equipe-personnes">budget petit-déjeuner d'équipe</a>.</p>

      <h2>Quel thème choisir pour un petit-déjeuner d'entreprise ?</h2>
      <p>Quatre thèmes de saison donnent une raison de se retrouver : la rentrée en septembre, Octobre Rose jusqu'au 31 octobre, Noël en décembre et la galette en janvier. Le thème se joue sur un ou deux ajouts, pas sur toute la commande : la base reste la même.</p>
      <table>
        <thead>
          <tr><th>Thème</th><th>Période</th><th>Ajout au catalogue</th><th>Budget repère pour 20 personnes</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Rentrée</strong></td><td>Septembre</td><td>Fruits de saison, viennoiseries, café et thé</td><td>Classique : 160 + 29 = 189 € HT</td></tr>
          <tr><td><strong>Octobre Rose</strong></td><td>Jusqu'au 31 octobre</td><td>2 coffrets de 10 madeleines à glaçage rose (2 × 29,00) ; 1 € par convive reversé à la recherche contre le cancer du sein</td><td>160 + 58 + 29 = 247 € HT ; 1 € par convive reversé, soit 20 €</td></tr>
          <tr><td><strong>Noël</strong></td><td>Décembre</td><td>3 thermos de chocolat chaud sur demande (3 × 19,50), 2 panettones de 10 à 12 parts (2 × 44,90)</td><td>160 + 58,50 + 89,80 + 29 = 337,30 € HT</td></tr>
          <tr><td><strong>Galette</strong></td><td>Janvier</td><td>Frangipane, pommes, chocolat-noisette ou pistache, fève et couronne incluses ; une galette de 6 parts pour 5 à 6 personnes</td><td>Sur devis</td></tr>
        </tbody>
      </table>
      <p>Voir aussi le <a href="/journal/petit-dejeuner-noel-bureau-entreprise">petit-déjeuner de Noël au bureau</a> et la carte des <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a>.</p>

      <h2>Comment organiser un petit-déjeuner au bureau en cinq étapes ?</h2>
      <p>Organisez un petit-déjeuner au bureau en cinq étapes : compter les présents, choisir l'idée et le thème, recenser les régimes, commander jusqu'à la veille 14h, installer entre 9h et 10h dans un lieu de passage. Chaque étape évite un surcoût ou un oubli le jour de la livraison.</p>
      <ol>
        <li><strong>Comptez les présents</strong>, pas les inscrits : chaque personne en trop coûte de 3,63 à 18,63 € HT.</li>
        <li><strong>Choisissez l'idée</strong> dans les tableaux, puis un thème.</li>
        <li><strong>Recensez les régimes</strong> : végétarien, vegan et sans gluten sur demande.</li>
        <li><strong>Commandez</strong> jusqu'à la veille 14h ; gobelets et couverts jetables sont inclus.</li>
        <li><strong>Installez</strong> dans la cuisine ou l'open space, pas dans une salle fermée.</li>
      </ol>

      <h2>Quelles erreurs fréquentes éviter pour un petit-déjeuner au bureau ?</h2>
      <p>Quatre erreurs se corrigent à la commande : elles tiennent au produit sucré unique, à la boisson chaude, à la livraison et au chocolat chaud. Les éviter ne coûte rien et peut retirer jusqu'à 5,80 € HT par personne à 5 personnes.</p>
      <ul>
        <li><strong>Un seul produit sucré</strong> : mélangez un fruit, une douceur et, une fois sur deux, un yaourt.</li>
        <li><strong>Oublier la boisson chaude</strong> : un thermos sert 6 tasses, il en faut 4 pour 20 personnes.</li>
        <li><strong>Livrer à 5 personnes sans grouper</strong> : la livraison pèse 5,80 € par personne.</li>
        <li><strong>Mettre du chocolat chaud par défaut</strong> : il se commande sur demande.</li>
      </ul>

      <h2>Quelles sont les questions fréquentes sur les idées de petit-déjeuner au bureau ?</h2>${faqBlock(FAQ_PDJ_IDEES)}

      <h2>Comment demander un devis pour votre petit-déjeuner ?</h2>
      <p>Indiquez la date, l'adresse, l'heure, l'effectif présent et les régimes : le devis revient sous 24 h, avec facturation entreprise, TVA et bon de commande accepté. Commande jusqu'à la veille 14h. <a href="/devis">Demandez votre devis</a>. Tarifs L'Écrin Traiteur, octobre 2026.</p>
    `,
    relatedProducts: ['viennoiseries-melangees', 'panier-fruits', 'yaourt-fermier'],
    faq: FAQ_PDJ_IDEES,
  },

  /* ================================================================ */
  {
    slug: 'idees-afterwork-entreprise-formats-budget',
    titre: "Idées d'afterwork en entreprise : 12 formats, budget par personne et logistique",
    metaTitle: "Idées d'afterwork en entreprise : 12 formats et budgets",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    isoModified: '2026-10-13',
    extrait: "12 idées d'afterwork en entreprise : cocktail dès 29,90 € HT par personne, animations dès 600 € HT, durée, boissons sans alcool et logistique.",
    img: '/prod-atelier-burgers.webp',
    contenu: `
      <p>Un <strong>afterwork en entreprise coûte de 29,90 à 51,90 € HT par personne en cocktail livré</strong>, de 34,90 à 37,90 € HT en menu à partager, et une animation s'ajoute à partir de 600 € HT. Voici 12 idées d'afterwork réalisables avec ce que L'Écrin Traiteur livre réellement, avec le budget par personne calculé, la durée et la logistique.</p>

      <h2>Quelle idée d'afterwork en entreprise choisir selon le budget ?</h2>
      <p>Pour 20 à 50 personnes, cinq formats ont un prix catalogue, de 6 à 51,90 € HT par personne ; les plateaux apéritifs et les six animations se chiffrent sur devis, ces dernières à partir de 600 € HT. Le tableau donne le budget livré pour 20 et 50 personnes, avec une seule livraison de 29 € HT.</p>
      <table>
        <thead>
          <tr><th>Format</th><th>Ce que L'Écrin livre</th><th>20 personnes</th><th>50 personnes</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>1. Pause gourmande</strong></td><td>Douceurs et boisson, dès 6 € HT par personne, pour un afterwork léger</td><td>120 + 29 = 149 €</td><td>300 + 29 = 329 €</td></tr>
          <tr><td><strong>2. Apéritif de 8 pièces</strong></td><td>L'Invitation : 6 salées et 2 sucrées, 29,90 € par personne</td><td>598 + 29 = 627 €</td><td>1 495 + 29 = 1 524 €</td></tr>
          <tr><td><strong>3. Cocktail de 12 pièces</strong></td><td>La Réception : terre et mer, 40,90 € par personne</td><td>818 + 29 = 847 €</td><td>2 045 + 29 = 2 074 €</td></tr>
          <tr><td><strong>4. Cocktail dînatoire</strong></td><td>La Célébration : 16 pièces, 51,90 € par personne</td><td>1 038 + 29 = 1 067 €</td><td>2 595 + 29 = 2 624 €</td></tr>
          <tr><td><strong>5. Menu à partager</strong></td><td>Le Jardin 34,90 €, Le Méditerranéen 37,50 €, Le Parisien 37,90 € par personne</td><td>727 à 787 €</td><td>1 774 à 1 924 €</td></tr>
          <tr><td><strong>6. Plateaux apéritifs</strong></td><td>Mini baguettes, clubs, wraps, mini burgers, fromages affinés, charcuterie halal sans porc, crudités et dips</td><td>Sur devis</td><td>Sur devis</td></tr>
        </tbody>
      </table>
      <p>Les compositions des cocktails sont sur la page <a href="/creations/cocktails">cocktails d'entreprise</a>, celles des plateaux sur la page <a href="/creations/plateaux-aperitifs">plateaux apéritifs</a>.</p>

      <h2>Quelles animations ajouter à un afterwork ?</h2>
      <p>Six animations donnent un geste en direct à l'afterwork, avec un plancher de 600 € HT : 30 € HT par personne au minimum à 20 invités, 12 € HT à 50. Le prix exact est fixé sur devis selon la date, le lieu, l'effectif, la durée et l'accès. Installation et démontage sont compris.</p>
      <table>
        <thead>
          <tr><th>Format</th><th>Ce que reçoivent vos invités</th><th>Moment idéal</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>7. Street food</strong></td><td>Mini burgers (cheeseburger, chicken crispy, halloumi), tacos gourmet (poulet, bœuf, falafel) ou loaded fries</td><td>Afterwork d'équipe, soirée de lancement</td></tr>
          <tr><td><strong>8. Bar à mocktails</strong></td><td>Cocktails 100 % sans alcool préparés à la minute par un barman</td><td>Toute soirée, sans exclure personne</td></tr>
          <tr><td><strong>9. Dégustation de café</strong></td><td>Barista : espresso, cappuccino, latte, flat white, chocolat chaud, thés</td><td>Afterwork de fin d'après-midi</td></tr>
          <tr><td><strong>10. Sushi et maki</strong></td><td>Makis, california rolls, nigiris, gyozas ; option sans poisson cru ; ou découpe de saumon frais</td><td>Soirée partenaires, cocktail dînatoire</td></tr>
          <tr><td><strong>11. Fromages ou charcuterie</strong></td><td>Atelier fromages affinés, ou charcuteries halal sans porc découpées minute</td><td>Afterwork convivial, assis ou debout</td></tr>
          <tr><td><strong>12. Douceurs</strong></td><td>Bar à glaces, fontaine au chocolat, barbe à papa ou pop corn sucré</td><td>Fête d'équipe, fin de journée d'été</td></tr>
        </tbody>
      </table>
      <p>Les fiches complètes sont sur la page <a href="/creations/animations-culinaires">animations culinaires</a>, et leur chiffrage dépend de la date, du lieu et de l'effectif.</p>

      <h2>Combien coûte un afterwork de 20 ou 50 personnes, boissons sans alcool comprises ?</h2>
      <p>Un afterwork de 20 personnes en L'Invitation coûte 794,60 € HT livraison et boissons sans alcool comprises, soit 39,73 € HT par personne ; à 50 personnes, 1 928,50 € HT, soit 38,57 € HT par personne. Les boissons comptent 4 verres par personne.</p>
      <table>
        <thead>
          <tr><th>Poste</th><th>20 personnes</th><th>50 personnes</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Pièces</strong> (8 par personne)</td><td>598,00 €</td><td>1 495,00 €</td></tr>
          <tr><td><strong>Chardonnay 0 %</strong> (1 flûte)</td><td>4 bouteilles : 67,60 €</td><td>9 bouteilles : 152,10 €</td></tr>
          <tr><td><strong>Jus</strong> (2 verres)</td><td>8 L : 76,00 €</td><td>20 L : 190,00 €</td></tr>
          <tr><td><strong>Eau</strong> (1 verre)</td><td>5 bouteilles : 24,00 €</td><td>13 bouteilles : 62,40 €</td></tr>
          <tr><td><strong>Livraison</strong> (1 livraison)</td><td>29,00 €</td><td>29,00 €</td></tr>
          <tr><td><strong>Total HT</strong></td><td>794,60 €</td><td>1 928,50 €</td></tr>
          <tr><td><strong>Par personne</strong></td><td>39,73 €</td><td>38,57 €</td></tr>
        </tbody>
      </table>
      <p>Sans le Chardonnay 0 %, le budget baisse de 67,60 € HT à 20 personnes et de 152,10 € HT à 50 : le pétillant est le premier extra à retirer.</p>

      <h2>Combien de temps dure un afterwork et combien de pièces prévoir ?</h2>
      <p>Un afterwork dure 1h30 à 2h en 8 pièces par personne, plus de 2 h en 12 pièces, et en 16 pièces s'il remplace le dîner. Gardez deux tiers de salé pour un tiers de sucré : les pièces salées partent deux fois plus vite que les sucrées en début de soirée.</p>
      <ul>
        <li><strong>30 à 45 minutes avant</strong> : livraison, plateaux posés, boissons au frais.</li>
        <li><strong>0 à 20 minutes</strong> : arrivée des invités, premières pièces salées.</li>
        <li><strong>20 minutes à 1 h</strong> : le gros du service, bon moment pour un mot de l'équipe.</li>
        <li><strong>1 h à 1h30</strong> : le sucré passe au premier plan, avec le gâteau pour un pot de départ.</li>
      </ul>
      <p>Les formules et leur composition sont aussi détaillées sur la page <a href="/occasions/afterwork-entreprise">traiteur afterwork en entreprise</a>.</p>

      <h2>Quel format d'afterwork choisir selon l'effectif et le moment ?</h2>
      <p>Choisissez un format léger sous 15 personnes, un cocktail de 8 pièces de 20 à 30 personnes, et ajoutez une animation à partir de 20 invités, quand le plancher de 600 € HT passe sous 30 € HT par personne. Le tableau donne le repère par effectif.</p>
      <table>
        <thead>
          <tr><th>Effectif</th><th>Format conseillé</th><th>Pourquoi</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>10 à 15 personnes</strong></td><td>Pause gourmande ou plateaux apéritifs</td><td>Une animation coûterait de 40 à 60 € HT par personne au plancher (600 ÷ 15, 600 ÷ 10)</td></tr>
          <tr><td><strong>20 à 30 personnes</strong></td><td>L'Invitation, avec ou sans une animation</td><td>Le plancher revient de 20 à 30 € HT par personne</td></tr>
          <tr><td><strong>50 personnes et plus</strong></td><td>La Réception, sur deux tables, avec une animation</td><td>Le plancher revient à 12 € HT par personne ou moins</td></tr>
        </tbody>
      </table>
      <p>Pour un pot de départ, ajoutez un gâteau à partager : la grande tarte au citron meringuée sert 10 à 12 personnes pour 59,90 € HT, deux couvrent 20 personnes pour 119,80 € HT.</p>

      <h2>Comment organiser un afterwork : mise en place, déchets, horaires ?</h2>
      <p>La logistique tient en quatre points : livraison 30 à 45 minutes avant le début, plateaux répartis sur deux tables au-delà de 30 personnes, gobelets et couverts jetables inclus, aucun service à assurer. La livraison de 29 € HT n'inclut ni l'installation ni la reprise du matériel.</p>
      <ul>
        <li><strong>Horaires</strong> : commande jusqu'à la veille 14h, livraison du lundi au vendredi juste avant l'heure du pot ; préavis de 48 h à partir de 50 personnes.</li>
        <li><strong>Déchets</strong> : gobelets, vaisselle et couverts jetables sont inclus sans supplément ; prévoyez un sac et un point de tri. La vaisselle réutilisable suppose la récupération du matériel, 19 € HT en plus de la livraison.</li>
        <li><strong>Animations</strong> : accès électrique et espace à prévoir de votre côté pour les ateliers chauds.</li>
        <li><strong>Régimes</strong> : tout est halal et sans porc, sans alcool ; végétarien, vegan et sans gluten sur demande.</li>
      </ul>

      <h2>Quelles erreurs fréquentes éviter pour un afterwork ?</h2>
      <p>Six erreurs coûtent de l'argent ou de l'ambiance à un afterwork. La plupart tiennent à l'ordre des décisions : l'effectif d'abord, le format ensuite, l'animation en dernier, avec une carte de boissons sans alcool complète dès le départ de la commande.</p>
      <ul>
        <li><strong>Choisir l'animation avant l'effectif</strong> : sous 20 invités, le plancher dépasse 30 € HT par personne.</li>
        <li><strong>Cumuler animation et cocktail complet</strong> : l'animation remplace une partie des pièces, demandez ce qui peut être retiré.</li>
        <li><strong>Rogner sur le salé</strong> : il part deux fois plus vite que le sucré.</li>
        <li><strong>Prendre 16 pièces pour 1h30</strong> : 8 pièces suffisent, soit 22 € HT de moins par personne.</li>
        <li><strong>Placer l'animation loin du passage</strong> : un poste au fond d'une salle reste inutilisé.</li>
        <li><strong>Oublier le sans alcool</strong> : prévoyez au moins trois parfums de jus, un pétillant 0 % et de l'eau.</li>
      </ul>

      <h2>Quelles sont les questions fréquentes sur les idées d'afterwork en entreprise ?</h2>${faqBlock(FAQ_AFTERWORK_IDEES)}

      <h2>Comment demander un devis pour votre afterwork ?</h2>
      <p>Indiquez la date, l'adresse, l'horaire, l'effectif et les animations envisagées : le devis revient sous 24 h, avec facturation entreprise et TVA. Pour un budget serré, voir aussi notre guide du <a href="/journal/cocktail-dinatoire-pas-cher-entreprise-budget">cocktail dînatoire pas cher</a>. <a href="/devis">Demandez votre devis</a>. Tarifs L'Écrin Traiteur, octobre 2026.</p>
    `,
    relatedProducts: ['brochettes-fruits', 'macarons', 'madeleines-20'],
    faq: FAQ_AFTERWORK_IDEES,
  },

  /* ================================================================ */
  {
    slug: 'idees-dejeuner-bureau-formats-budget',
    titre: "Idées de déjeuner au bureau : 10 formats d'équipe et leur budget par personne",
    metaTitle: "Idées de déjeuner au bureau : 10 formats et budgets",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    isoModified: '2026-10-13',
    extrait: "10 idées de déjeuner au bureau, de 18,90 à 40,90 € HT par personne : lunch box, plateaux repas, menus à partager. Budget pour 10, 20 et 50 personnes.",
    img: '/apartager-jardin.webp',
    contenu: `
      <p>Un <strong>déjeuner d'équipe au bureau coûte de 18,90 € HT par personne en lunch box à 40,90 € HT en cocktail déjeunatoire</strong>, plus 29 € HT par livraison : 20 plateaux au poulet font 598 + 29 = 627 € HT, 20 lunch box végétariennes 378 + 29 = 407 € HT. Voici 10 formats, leur budget calculé et le moment où choisir chacun.</p>

      <h2>Quelle idée de déjeuner au bureau choisir selon le budget ?</h2>
      <p>Dix formats couvrent le déjeuner d'équipe, de 18,90 € HT (lunch box végétarienne) à 40,90 € HT (cocktail déjeunatoire) par personne. Le tableau les classe par prix, dit ce qui est livré et quand choisir chacun ; deux formats se chiffrent sur devis.</p>
      <table>
        <thead>
          <tr><th>Format</th><th>Ce qui est livré</th><th>Prix HT par personne</th><th>Quand le choisir</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>1. Lunch box végétarienne</strong></td><td>La Fermière : sandwich œuf et emmental, entrée, dessert, couverts</td><td>18,90 €</td><td>Journée de formation, équipe en déplacement</td></tr>
          <tr><td><strong>2. Lunch box poulet</strong></td><td>La Parisienne (mayonnaise) ou L'Épicée (curry)</td><td>19,90 €</td><td>Repas d'équipe à emporter</td></tr>
          <tr><td><strong>3. Lunch box poisson</strong></td><td>L'Océane (thon) ou La Nordique (saumon et avocat)</td><td>20,90 à 21,90 €</td><td>Salle sans office, horaires serrés</td></tr>
          <tr><td><strong>4. Plateau repas végétarien</strong></td><td>La Solaire, La Provençale ou La Potagère : entrée, plat, dessert</td><td>28,90 €</td><td>Réunion qui continue pendant le repas</td></tr>
          <tr><td><strong>5. Plateau repas poulet</strong></td><td>La Romaine ou La Champêtre</td><td>29,90 €</td><td>Comité, formation, réunion de direction</td></tr>
          <tr><td><strong>6. Plateau repas saumon</strong></td><td>La Boréale : pommes de terre sautées et dés de saumon poêlés</td><td>30,90 €</td><td>Déjeuner avec un invité externe</td></tr>
          <tr><td><strong>7. Menu à partager</strong></td><td>Salades, planches, pièces cocktail et sucré, posés au centre de la table</td><td>34,90 à 37,90 €</td><td>Déjeuner convivial, un menu pour 8 à 12 personnes</td></tr>
          <tr><td><strong>8. Cocktail déjeunatoire</strong></td><td>La Réception : 12 pièces, terre et mer</td><td>40,90 €</td><td>Repas debout, réception, séminaire</td></tr>
          <tr><td><strong>9. Plateaux de sandwichs</strong></td><td>Mini baguettes, clubs, wraps, mini burgers à partager</td><td>Sur devis</td><td>Déjeuner sur le pouce</td></tr>
          <tr><td><strong>10. Atelier déjeuner</strong></td><td>Pasta minute, bagels, wrap et pita libanais, focaccia et burrata</td><td>Sur devis, dès 600 € HT</td><td>Déjeuner d'équipe de 20 personnes et plus</td></tr>
        </tbody>
      </table>
      <p>Les menus complets sont sur les pages <a href="/creations/plateaux-repas">plateaux repas</a>, <a href="/creations/lunch-box">lunch box</a> et <a href="/creations/a-partager">menus à partager</a>.</p>

      <h2>Combien coûte un déjeuner d'équipe pour 10, 20 ou 50 personnes ?</h2>
      <p>Un déjeuner de 20 personnes coûte de 407 € HT (lunch box végétarienne) à 847 € HT (cocktail déjeunatoire) livraison comprise ; à 50 personnes, de 974 à 2 074 € HT. Le calcul est prix par personne × effectif + 29 € HT, avec une seule livraison.</p>
      <table>
        <thead>
          <tr><th>Format</th><th>10 personnes</th><th>20 personnes</th><th>50 personnes</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Lunch box végétarienne</strong> 18,90 €</td><td>189 + 29 = 218 €</td><td>378 + 29 = 407 €</td><td>945 + 29 = 974 €</td></tr>
          <tr><td><strong>Lunch box poulet</strong> 19,90 €</td><td>199 + 29 = 228 €</td><td>398 + 29 = 427 €</td><td>995 + 29 = 1 024 €</td></tr>
          <tr><td><strong>Lunch box saumon</strong> 21,90 €</td><td>219 + 29 = 248 €</td><td>438 + 29 = 467 €</td><td>1 095 + 29 = 1 124 €</td></tr>
          <tr><td><strong>Plateau végétarien</strong> 28,90 €</td><td>289 + 29 = 318 €</td><td>578 + 29 = 607 €</td><td>1 445 + 29 = 1 474 €</td></tr>
          <tr><td><strong>Plateau poulet</strong> 29,90 €</td><td>299 + 29 = 328 €</td><td>598 + 29 = 627 €</td><td>1 495 + 29 = 1 524 €</td></tr>
          <tr><td><strong>Plateau saumon</strong> 30,90 €</td><td>309 + 29 = 338 €</td><td>618 + 29 = 647 €</td><td>1 545 + 29 = 1 574 €</td></tr>
          <tr><td><strong>Menu à partager</strong> (Le Jardin) 34,90 €</td><td>349 + 29 = 378 €</td><td>698 + 29 = 727 €</td><td>1 745 + 29 = 1 774 €</td></tr>
          <tr><td><strong>Cocktail déjeunatoire</strong> 40,90 €</td><td>409 + 29 = 438 €</td><td>818 + 29 = 847 €</td><td>2 045 + 29 = 2 074 €</td></tr>
        </tbody>
      </table>

      <h2>Quelle idée de déjeuner au bureau selon la taille de l'équipe ?</h2>
      <p>Pour une équipe de 5 à 8 personnes, la lunch box ou le plateau individuel convient : dès 3 lunch box végétariennes (56,70 € HT), le minimum de commande de 50 € HT est atteint. Un menu à partager est calibré pour 8 à 12 personnes. Au-delà de 20 personnes, un atelier devient possible.</p>
      <ul>
        <li><strong>5 à 8 personnes</strong> : lunch box ou plateaux individuels, chacun mange à son rythme.</li>
        <li><strong>8 à 12 personnes</strong> : un menu à partager au centre de la table, de 34,90 à 37,90 € HT par personne.</li>
        <li><strong>20 à 50 personnes</strong> : plateaux ou lunch box, ou un atelier déjeuner à partir de 600 € HT.</li>
        <li><strong>50 personnes et plus</strong> : préavis de 48 h recommandé, et un point de distribution par étage ou par site.</li>
      </ul>

      <h2>Plateau repas ou lunch box : lequel choisir pour un repas d'équipe à emporter ?</h2>
      <p>Choisissez la lunch box quand le budget ou la logistique prime, dès 18,90 € HT et 10 € HT de moins par personne que le plateau repas végétarien. Choisissez le plateau repas quand le déjeuner doit être complet et servi en salle, de 28,90 à 30,90 € HT. À 20 personnes, l'écart est de 200 € HT : 407 contre 607 €.</p>
      <p>Le plateau comprend entrée, plat, dessert et pain : personne ne se lève, la réunion continue. La lunch box associe un sandwich en baguette ou pain viennois, une salade et un dessert au choix, serviette et couverts : zéro vaisselle, distribution en quelques minutes. La boisson est en option : une Evian de 33 cl à 3,80 € HT porte 20 lunch box végétariennes à 378 + 76 + 29 = 483 € HT.</p>
      <p>Pour le détail des menus et des quantités, voir le <a href="/journal/dejeuner-entreprise-guide-complet">guide complet du déjeuner d'entreprise</a>.</p>

      <h2>Combien ajouter pour les boissons d'un repas d'équipe ?</h2>
      <p>Pour 20 personnes, comptez 102 € HT de boissons : 4 thermos de café et de thé à 78,00 € HT et 5 bouteilles d'eau de 75 cl à 24,00 € HT. Un repas d'équipe complet avec 20 lunch box au poulet revient alors à 398 + 102 + 29 = 529 € HT, soit 26,45 € HT par personne.</p>

      <h2>Quelle idée de repas de séminaire choisir : déjeuner, pause ou dîner ?</h2>
      <p>Pour un séminaire, associez un format par moment : plateau repas ou menu à partager à midi, cocktail déjeunatoire de 12 pièces (40,90 € HT) si le repas se fait debout, cocktail dînatoire de 16 pièces (51,90 € HT) le soir. Le plateau évite que la salle se vide pendant le déjeuner.</p>
      <table>
        <thead>
          <tr><th>Moment</th><th>Format</th><th>Pour 30 personnes, avec 1 livraison</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Déjeuner assis</strong></td><td>Plateaux repas au poulet, 29,90 €</td><td>897 + 29 = 926 €</td></tr>
          <tr><td><strong>Déjeuner debout</strong></td><td>La Réception, 12 pièces, 40,90 €</td><td>1 227 + 29 = 1 256 €</td></tr>
          <tr><td><strong>Dîner debout</strong></td><td>La Célébration, 16 pièces, 51,90 €</td><td>1 557 + 29 = 1 586 €</td></tr>
        </tbody>
      </table>

      <h2>Comment composer un repas d'équipe avec des régimes différents ?</h2>
      <p>Sans information, prévoyez un tiers de plateaux végétariens à 28,90 € HT, soit 7 végétariens et 13 au poulet pour 20 personnes : 202,30 + 388,70 + 29 = 620 € HT. Toute la carte est halal et sans porc par défaut, sans supplément ; le végétarien, le vegan et le sans gluten se précisent à la commande.</p>
      <p>L'atelier manipule de la farine : des traces de gluten restent possibles. Le détail de l'offre est sur la page <a href="/traiteur-halal">traiteur halal d'entreprise</a>.</p>

      <h2>Quelles erreurs fréquentes éviter avec un repas d'équipe ?</h2>
      <p>Cinq erreurs se retrouvent sur les déjeuners d'équipe : elles tiennent au format mélangé, à l'effectif, à l'heure, aux régimes et à la boisson. Toutes se corrigent au moment de la commande, jusqu'à la veille 14h, sans aucun coût supplémentaire.</p>
      <ul>
        <li><strong>Mélanger buffet et plateaux individuels</strong> dans la même réunion : tout le monde se lève en même temps.</li>
        <li><strong>Commander sur les inscrits</strong> : ajoutez 10 % si la liste est approximative, rien si elle est nominative et confirmée la veille.</li>
        <li><strong>Fixer l'heure sans prévenir d'un débordement</strong> : indiquez l'heure à la commande et signalez tout retard.</li>
        <li><strong>Recenser les régimes le jour même</strong> : ils se transmettent à la commande.</li>
        <li><strong>Oublier la boisson</strong> : un thermos de 1 L sert 6 tasses à 19,50 € HT, une bouteille d'eau de 75 cl 4 verres à 4,80 € HT.</li>
      </ul>

      <h2>Quelles sont les questions fréquentes sur les idées de déjeuner au bureau ?</h2>${faqBlock(FAQ_DEJEUNER_IDEES)}

      <h2>Comment demander un devis pour votre déjeuner d'équipe ?</h2>
      <p>Indiquez la date, l'adresse, l'heure exacte, l'effectif et les régimes : le devis revient sous 24 h, avec facturation entreprise, TVA et bon de commande accepté. Précisez aussi l'accès au lieu et l'étage : le livreur gagne du temps. <a href="/devis">Demandez votre devis</a>. Tarifs L'Écrin Traiteur, octobre 2026.</p>
    `,
    relatedProducts: ['panier-fruits', 'madeleines-20', 'cookies'],
    faq: FAQ_DEJEUNER_IDEES,
  },
]
