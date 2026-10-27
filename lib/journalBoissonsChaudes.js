// Guides « café et thé en entreprise » (27 octobre 2026) : proportion café / thé, thermos par effectif,
// ce qu'il faut prévoir avec les thermos, durée de chaleur. Faits L'Écrin tirés du dépôt : boissonsData
// (thermos d'1 L, 6 à 8 tasses, 19,50 € HT, café bio, thé Mariage Frères, maintien au chaud 6 h, voire 8 h (dit par Ramy le 28/10/2026),
// tasses, cuillères et sucre ajoutables), calculsPrix et calculateurQuantites (1 thermos pour 6, 1 de thé pour
// 4 de café, arrondi du nombre de thermos par excès), tarifs (livraison 29 € HT, minimum 50 € HT).
// Aucun chiffre de consommation externe : tout vient des règles publiées sur le site.

export const BOISSONS_CHAUDES_ARTICLES = [
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'cafe-ou-the-entreprise-reunion-quelle-proportion',
    titre: "Café ou thé en entreprise : lequel servir à une réunion et en quelle proportion ?",
    metaTitle: "Café ou thé en entreprise : quelle proportion ?",
    categorie: 'Conseils',
    date: '27 octobre 2026',
    isoDate: '2026-10-27',
    extrait: "La proportion de café et de thé pour une réunion ou un petit-déjeuner d'entreprise, thermos par thermos, avec le budget pour 10, 20, 30, 50 et 100 personnes.",
    img: '/bois-thermos-cafe.webp',
    enBref: [
      "Chez L'Écrin Traiteur, la règle est de 1 thermos d'1 litre pour 6 personnes, dont 1 de thé pour 4 de café : pour 20 personnes, 3 thermos de café et 1 de thé.",
      "Un thermos d'1 litre sert 6 à 8 tasses et coûte 19,50 € HT, au même prix pour le café bio et pour le thé Mariage Frères.",
      "Jusqu'à 10 personnes, 2 thermos de café ou de thé suffisent ; le thé ne se compte à part qu'à partir de 5 thermos.",
      "Le chocolat chaud n'est jamais compris par défaut : il s'ajoute à la demande, au même prix de 19,50 € HT le litre.",
    ],
    contenu: `
      <p>Pour une réunion ou un petit-déjeuner d'entreprise, servez surtout du café et gardez un thermos de thé pour ceux qui n'en boivent pas. Chez L'Écrin Traiteur, la règle est de <strong>1 thermos d'1 litre pour 6 personnes</strong>, dont <strong>1 thermos de thé pour 4 de café</strong>. Un thermos sert 6 à 8 tasses : on calcule sur 6 pour que personne ne manque.</p>

      <h2>Quelle proportion de café et de thé selon l'effectif ?</h2>
      <p>Le nombre de thermos est arrondi à l'unité supérieure, puis un cinquième environ passe en thé. Prix de la boisson seule, à 19,50 € HT le thermos, livraison de 29 € HT en plus.</p>
      <table>
        <thead>
          <tr><th>Effectif</th><th>Thermos d'1 litre</th><th>Café / thé</th><th>Boissons HT</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>10 personnes</strong></td><td>2</td><td>2 de café ou de thé, au choix</td><td>39,00 €</td></tr>
          <tr><td><strong>20 personnes</strong></td><td>4</td><td>3 de café, 1 de thé</td><td>78,00 €</td></tr>
          <tr><td><strong>30 personnes</strong></td><td>5</td><td>4 de café, 1 de thé</td><td>97,50 €</td></tr>
          <tr><td><strong>50 personnes</strong></td><td>9</td><td>7 de café, 2 de thé</td><td>175,50 €</td></tr>
          <tr><td><strong>100 personnes</strong></td><td>17</td><td>14 de café, 3 de thé</td><td>331,50 €</td></tr>
        </tbody>
      </table>
      <p>Pour 20 personnes, la livraison comprise revient à 78 + 29 = <strong>107 € HT</strong>. Le minimum de commande est de 50 € HT de produits : pour 10 personnes, les 39 € de thermos se complètent d'un autre produit, par exemple les <a href="/creations/petits-dejeuners-et-pauses">viennoiseries d'un petit-déjeuner</a>. Pour d'autres quantités, le <a href="/calculateur-quantites">calculateur de quantités</a> donne le même résultat.</p>

      <h2>Pourquoi garder un thermos de thé ?</h2>
      <p>Parce qu'un seul thermos de thé sert 6 à 8 tasses : c'est la garantie que les personnes qui ne boivent pas de café ont une boisson chaude. Le café reste la boisson principale, le thé est le complément, c'est pourquoi la règle compte 4 thermos de café pour 1 de thé. Si votre équipe boit surtout du thé, précisez-le dans votre demande de devis.</p>

      <h2>Qu'y a-t-il dans chaque thermos ?</h2>
      <ul>
        <li><strong>Le <a href="/creations/boissons/thermos-cafe">thermos de café bio</a> :</strong> café arabica bio, torréfié artisanalement, préparé le matin même. Vegan et sans gluten.</li>
        <li><strong>Le <a href="/creations/boissons/thermos-the">thermos de thé Mariage Frères</a> :</strong> un thé de la maison parisienne, infusé à la bonne température. Vegan et sans gluten.</li>
        <li><strong>Le thermos de chocolat chaud :</strong> lait entier, chocolat noir, sucre. Il contient du lait et ne s'ajoute que sur demande, jamais par défaut.</li>
      </ul>

      <h2>Et pour ceux qui ne boivent ni café ni thé ?</h2>
      <p>Prévoyez une boisson fraîche sans caféine : l'<a href="/creations/boissons/infusion-gingembre-1l">infusion froide gingembre et citron vert</a> en bouteille d'1 litre (10,50 € HT) ou un jus Alain Milliat. Pour la quantité de jus et d'eau par personne, voir <a href="/journal/combien-boissons-par-personne-reunion-seminaire-cocktail">combien de boissons par personne</a>.</p>

      <h2>Avec L'Écrin Traiteur</h2>
      <ul>
        <li>Thermos d'1 litre de café bio ou de thé Mariage Frères : 19,50 € HT, 6 à 8 tasses.</li>
        <li>Livraison dès 6h30 à Paris et en Île-de-France, 29 € HT ; commande jusqu'à la veille 14h (48 h à partir de 50 personnes).</li>
        <li>Minimum de commande 50 € HT de produits ; devis sous 24 h, facture d'entreprise avec TVA.</li>
      </ul>
      <p>Voir toutes nos <a href="/creations/boissons">boissons</a>, nos <a href="/tarifs">tarifs</a>, ou <a href="/devis">demandez un devis</a> avec l'effectif et la date. Pour choisir les maisons de thé et de café, lisez <a href="/journal/meilleur-the-cafe-reunion-entreprise-paris">le meilleur thé et café pour une réunion à Paris</a>.</p>
    `,
    relatedProducts: [],
    faq: [
      { q: "Quelle proportion de café et de thé pour une réunion ?", a: "Chez L'Écrin Traiteur, 1 thermos de thé pour 4 de café à partir de 5 thermos, soit pour 20 personnes 3 thermos de café et 1 de thé. Jusqu'à 10 personnes, 2 thermos de café ou de thé au choix." },
      { q: "Combien coûtent le café et le thé pour 20 personnes ?", a: "4 thermos d'1 litre à 19,50 € HT, soit 78 € HT, plus 29 € HT de livraison à Paris et en Île-de-France : 107 € HT au total, devis sous 24 h." },
      { q: "Le thermos de café et le thermos de thé sont-ils au même prix ?", a: "Oui. Le thermos d'1 litre de café bio et celui de thé Mariage Frères coûtent chacun 19,50 € HT, et servent 6 à 8 tasses." },
      { q: "Le chocolat chaud est-il compris dans un petit-déjeuner ?", a: "Non. Il n'est jamais compris par défaut : il s'ajoute à la demande, en thermos d'1 litre à 19,50 € HT. Il contient du lait entier." },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'combien-de-thermos-cafe-the-10-20-50-100-personnes',
    titre: "Combien de thermos de café et de thé pour 10, 20, 50 ou 100 personnes ?",
    metaTitle: "Combien de thermos de café pour 20, 50, 100 personnes",
    categorie: 'Conseils',
    date: '27 octobre 2026',
    isoDate: '2026-10-27',
    extrait: "Le nombre de thermos d'1 litre à commander pour 10, 20, 30, 40, 50 ou 100 personnes, le budget et le prix par personne, avec la règle de calcul.",
    img: '/bois-thermos-the.webp',
    enBref: [
      "Pour 20 personnes, 4 thermos d'1 litre ; pour 50 personnes, 9 ; pour 100 personnes, 17, à raison de 1 thermos pour 6 personnes arrondi à l'unité supérieure.",
      "Chez L'Écrin Traiteur, à 19,50 € HT le thermos : 78 € HT pour 20 personnes, 175,50 € HT pour 50, 331,50 € HT pour 100, hors livraison de 29 € HT.",
      "Le prix par personne se situe entre 3,32 € HT et 3,90 € HT selon l'effectif, livraison non comprise.",
      "À partir de 50 personnes, la commande se passe 48 h à l'avance au lieu de la veille avant 14h.",
    ],
    contenu: `
      <p>Comptez <strong>1 thermos d'1 litre pour 6 personnes</strong>, arrondi à l'unité supérieure : <strong>4 thermos pour 20 personnes, 9 pour 50, 17 pour 100</strong>. Un thermos d'1 litre sert 6 à 8 tasses ; calculer sur 6 évite de manquer, car tout le monde ne boit pas la même quantité.</p>

      <h2>Quel nombre de thermos pour quel effectif ?</h2>
      <table>
        <thead>
          <tr><th>Effectif</th><th>Thermos</th><th>Café / thé</th><th>Boissons HT</th><th>Avec livraison (29 € HT)</th><th>Par personne</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>10 personnes</strong></td><td>2</td><td>2 de café ou de thé</td><td>39,00 €</td><td>68,00 €</td><td>3,90 €</td></tr>
          <tr><td><strong>20 personnes</strong></td><td>4</td><td>3 de café, 1 de thé</td><td>78,00 €</td><td>107,00 €</td><td>3,90 €</td></tr>
          <tr><td><strong>30 personnes</strong></td><td>5</td><td>4 de café, 1 de thé</td><td>97,50 €</td><td>126,50 €</td><td>3,25 €</td></tr>
          <tr><td><strong>40 personnes</strong></td><td>7</td><td>6 de café, 1 de thé</td><td>136,50 €</td><td>165,50 €</td><td>3,41 €</td></tr>
          <tr><td><strong>50 personnes</strong></td><td>9</td><td>7 de café, 2 de thé</td><td>175,50 €</td><td>204,50 €</td><td>3,51 €</td></tr>
          <tr><td><strong>100 personnes</strong></td><td>17</td><td>14 de café, 3 de thé</td><td>331,50 €</td><td>360,50 €</td><td>3,32 €</td></tr>
        </tbody>
      </table>
      <p>Le prix par personne est celui des boissons seules, hors livraison. Pour 10 personnes, les 39 € de thermos sont sous le minimum de commande de 50 € HT de produits : ajoutez un autre produit, des <a href="/creations/petits-dejeuners-et-pauses">viennoiseries</a> par exemple. La répartition entre café et thé suit la règle de 1 thermos de thé pour 4 de café, détaillée dans <a href="/journal/cafe-ou-the-entreprise-reunion-quelle-proportion">café ou thé en entreprise</a>.</p>

      <h2>Comment répartir les thermos dans la salle ?</h2>
      <p>À partir de 30 personnes, répartissez les thermos sur plusieurs points de service plutôt que sur une seule table : l'attente est plus courte.</p>

      <h2>Quand prévoir plus que 1 thermos pour 6 ?</h2>
      <p>La règle de 6 personnes par thermos suppose une tasse par personne avec une marge de sécurité. Pour une réunion longue ou un séminaire où l'on se ressert, indiquez la durée dans votre demande de devis. Notre guide <a href="/journal/combien-boissons-par-personne-reunion-seminaire-cocktail">combien de boissons par personne</a> détaille les durées de réunion, de séminaire et de cocktail.</p>

      <h2>Quel délai de commande ?</h2>
      <ul>
        <li><strong>Jusqu'à 49 personnes :</strong> commande jusqu'à la veille 14h.</li>
        <li><strong>À partir de 50 personnes :</strong> 48 h à l'avance.</li>
        <li><strong>Livraison :</strong> dès 6h30 à Paris et en Île-de-France.</li>
      </ul>

      <h2>Avec L'Écrin Traiteur</h2>
      <ul>
        <li>Thermos d'1 litre de <a href="/creations/boissons/thermos-cafe">café bio</a> ou de <a href="/creations/boissons/thermos-the">thé Mariage Frères</a> : 19,50 € HT chacun, 6 à 8 tasses.</li>
        <li>Livraison 29 € HT à Paris et en Île-de-France ; minimum de commande 50 € HT de produits.</li>
        <li>Devis sous 24 h, facture d'entreprise avec TVA.</li>
      </ul>
      <p>Pour un autre effectif, utilisez le <a href="/calculateur-quantites">calculateur de quantités</a> ou <a href="/devis">demandez un devis</a> avec le nombre de personnes et la date. Tous les prix sont dans les <a href="/tarifs">tarifs</a>.</p>
    `,
    relatedProducts: [],
    faq: [
      { q: "Combien de thermos de café pour 20 personnes ?", a: "4 thermos d'1 litre, dont 3 de café et 1 de thé, soit 78 € HT chez L'Écrin Traiteur, 107 € HT avec la livraison de 29 € HT." },
      { q: "Combien de thermos de café pour 50 personnes ?", a: "9 thermos d'1 litre, dont 7 de café et 2 de thé, soit 175,50 € HT, 204,50 € HT avec la livraison. À partir de 50 personnes, la commande se passe 48 h à l'avance." },
      { q: "Combien de thermos de café pour 100 personnes ?", a: "17 thermos d'1 litre, dont 14 de café et 3 de thé, soit 331,50 € HT, 360,50 € HT avec la livraison de 29 € HT, soit 3,32 € HT de boissons par personne." },
      { q: "Combien de tasses dans un thermos d'1 litre ?", a: "6 à 8 tasses. On compte 6 personnes par thermos pour ne pas manquer." },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'thermos-cafe-the-accessoires-regimes-tasses-sucre-lait',
    titre: "Thermos de café et de thé au bureau : tasses, sucre, lait et régimes, que prévoir en plus ?",
    metaTitle: "Thermos de café et thé : tasses, sucre, lait, régimes",
    categorie: 'Conseils',
    date: '27 octobre 2026',
    isoDate: '2026-10-27',
    extrait: "Ce qui est dans le thermos, ce qui s'ajoute (tasses, cuillères, sucre), ce que contiennent le café, le thé et le chocolat chaud pour les régimes, et ce qu'il faut préciser sur la demande.",
    img: '/bois-thermos-cafe.webp',
    enBref: [
      "Chez L'Écrin Traiteur, le thermos de café bio et le thermos de thé Mariage Frères sont vegan et sans gluten, sans allergène déclaré.",
      "Les tasses, les cuillères et le sucre peuvent être ajoutés à la commande : précisez-le sur la demande de devis.",
      "Le chocolat chaud, qui contient du lait entier, n'est jamais compris par défaut et ne s'ajoute que sur demande.",
      "Pour ceux qui ne boivent ni café ni thé, l'infusion froide d'1 litre est à 10,50 € HT.",
    ],
    contenu: `
      <p>Un thermos livré à l'heure choisie ne suffit pas pour servir : il faut des tasses et, pour certains, du sucre. Chez L'Écrin Traiteur, le <strong>thermos d'1 litre de café bio ou de thé Mariage Frères</strong> coûte 19,50 € HT et sert 6 à 8 tasses ; les <strong>tasses, cuillères et sucre</strong> peuvent être ajoutés à la commande, et le café comme le thé sont <strong>vegan et sans gluten</strong>.</p>

      <h2>Que contient chaque thermos ?</h2>
      <table>
        <thead>
          <tr><th>Thermos d'1 litre</th><th>Contenu</th><th>Régimes</th><th>Prix HT</th></tr>
        </thead>
        <tbody>
          <tr><td><strong><a href="/creations/boissons/thermos-cafe">Café bio</a></strong></td><td>Café arabica bio, torréfié artisanalement, préparé le matin même</td><td>Vegan, sans gluten, aucun allergène déclaré</td><td>19,50 €</td></tr>
          <tr><td><strong><a href="/creations/boissons/thermos-the">Thé Mariage Frères</a></strong></td><td>Thé de la maison parisienne, infusé à la bonne température</td><td>Vegan, sans gluten, aucun allergène déclaré</td><td>19,50 €</td></tr>
          <tr><td><strong>Chocolat chaud</strong></td><td>Lait entier, chocolat noir, sucre</td><td>Végétarien, sans gluten ; contient du lait</td><td>19,50 €</td></tr>
        </tbody>
      </table>
      <p>Le chocolat chaud n'est jamais compris par défaut dans une formule : il s'ajoute sur demande, par exemple en hiver ou pour un goûter.</p>

      <h2>Que faut-il ajouter à la commande ?</h2>
      <ul>
        <li><strong>Des tasses :</strong> comptez une tasse par personne, 6 à 8 tasses par thermos.</li>
        <li><strong>Des cuillères et du sucre :</strong> ils peuvent être ajoutés à la commande.</li>
        <li><strong>Du lait ou une boisson végétale :</strong> les thermos de café et de thé sont servis nature. Si votre équipe en consomme, écrivez-le dans la demande de devis : nous vous répondons sous 24 h.</li>
      </ul>
      <p>Les quantités de thermos se calculent à raison de 1 pour 6 personnes, voir <a href="/journal/combien-de-thermos-cafe-the-10-20-50-100-personnes">combien de thermos pour 10, 20, 50 ou 100 personnes</a>.</p>

      <h2>Comment tenir compte des régimes ?</h2>
      <p>Pour les personnes qui ne mangent ni produit laitier ni gluten, le café et le thé conviennent : aucun allergène n'est déclaré sur ces deux fiches. Le chocolat chaud, lui, contient du lait entier : à ne servir qu'aux personnes qui en consomment. Pour un buffet entier adapté aux régimes, voir <a href="/journal/menu-inclusif-entreprise-halal-vegetarien-sans-gluten">le menu inclusif halal, végétarien et sans gluten</a>.</p>

      <h2>Et ceux qui ne boivent ni café ni thé ?</h2>
      <p>Proposez une boisson froide sans caféine : l'<a href="/creations/boissons/infusion-gingembre-1l">infusion gingembre et citron vert</a> ou l'<a href="/creations/boissons/infusion-passion-1l">infusion passion</a>, en bouteille d'1 litre à 10,50 € HT chacune, ou un jus Alain Milliat. Voir toutes les <a href="/creations/boissons">boissons</a>.</p>

      <h2>Avec L'Écrin Traiteur</h2>
      <ul>
        <li>Livraison dès 6h30 à Paris et en Île-de-France, 29 € HT ; commande jusqu'à la veille 14h (48 h à partir de 50 personnes).</li>
        <li>Minimum de commande 50 € HT de produits ; devis sous 24 h, facture d'entreprise avec TVA.</li>
      </ul>
      <p><a href="/devis">Demandez un devis</a> en indiquant l'effectif, la date, les tasses et le sucre souhaités, et tout régime à respecter. Les prix sont dans les <a href="/tarifs">tarifs</a>.</p>
    `,
    relatedProducts: [],
    faq: [
      { q: "Le café et le thé en thermos sont-ils vegan et sans gluten ?", a: "Oui, chez L'Écrin Traiteur le thermos de café bio et le thermos de thé Mariage Frères sont vegan et sans gluten, et aucun allergène n'est déclaré sur leurs fiches." },
      { q: "Peut-on ajouter des tasses, des cuillères et du sucre à une commande de thermos ?", a: "Oui, les tasses, les cuillères et le sucre peuvent être ajoutés à la commande. Indiquez-le dans la demande de devis, qui reçoit une réponse sous 24 h." },
      { q: "Le chocolat chaud contient-il du lait ?", a: "Oui, il est préparé avec du lait entier, du chocolat noir et du sucre. Il n'est jamais compris par défaut et ne s'ajoute que sur demande." },
      { q: "Que servir à ceux qui ne boivent ni café ni thé ?", a: "Une infusion froide d'1 litre (gingembre et citron vert, ou passion) à 10,50 € HT, ou un jus Alain Milliat." },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'combien-de-temps-cafe-chaud-thermos-reunion',
    titre: "Combien de temps un café reste-t-il chaud dans un thermos pour une réunion ?",
    metaTitle: "Combien de temps un café reste chaud en thermos",
    categorie: 'Conseils',
    date: '27 octobre 2026',
    isoDate: '2026-10-27',
    extrait: "Le café en thermos reste chaud 6 heures, voire 8 heures après la livraison : à quelle heure le faire livrer, quand l'installer, et que faire pour une journée entière.",
    img: '/bois-thermos-cafe.webp',
    enBref: [
      "Le thermos de café L'Écrin Traiteur garde le café chaud 6 heures après la livraison, et jusqu'à 8 heures.",
      "Livré à 7h30, il reste chaud jusqu'à 13h30 et jusqu'à 15h30 ; livré à 8h30, jusqu'à 14h30 et jusqu'à 16h30.",
      "La livraison commence à 6h30 à Paris et en Île-de-France : on peut installer le café avant l'arrivée des participants.",
      "Un thermos d'1 litre sert 6 à 8 tasses et coûte 19,50 € HT ; on en compte 1 pour 6 personnes.",
    ],
    contenu: `
      <p>Un café en thermos reste chaud <strong>6 heures, voire 8 heures</strong> après la livraison. Chez L'Écrin Traiteur, le <a href="/creations/boissons/thermos-cafe">thermos d'1 litre de café bio</a> est préparé le matin même et conditionné en thermos isotherme : vous pouvez l'installer avant la réunion, sans réchauffer ni surveiller. Le thé en thermos reste chaud plusieurs heures.</p>

      <h2>Jusqu'à quelle heure le café reste-t-il chaud ?</h2>
      <table>
        <thead>
          <tr><th>Livraison</th><th>Café chaud jusqu'à</th><th>Convient pour</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>6h30</strong></td><td>12h30 à 14h30</td><td>Un accueil avant 9h et toute la matinée</td></tr>
          <tr><td><strong>7h30</strong></td><td>13h30 à 15h30</td><td>Un petit-déjeuner, la matinée et le déjeuner</td></tr>
          <tr><td><strong>8h30</strong></td><td>14h30 à 16h30</td><td>Une réunion de 9h à 14h</td></tr>
          <tr><td><strong>11h30</strong></td><td>17h30 à 19h30</td><td>Un déjeuner et une réunion d'après-midi</td></tr>
        </tbody>
      </table>
      <p>Les heures de fin sont le calcul de 6 à 8 heures après l'heure de livraison. Elles tiennent à condition de ne pas ouvrir le thermos plus que nécessaire.</p>

      <h2>À quelle heure le faire livrer ?</h2>
      <p>La livraison commence à <strong>6h30</strong> à Paris et en Île-de-France. Pour une réunion à 9h, faites livrer vers 8h : le café est chaud à l'arrivée des participants et le reste jusqu'au début d'après-midi. Pour un petit-déjeuner d'accueil, une livraison à 7h30 couvre l'accueil, la réunion de matinée et le début de la pause.</p>

      <h2>Et pour une journée entière ?</h2>
      <p>Au-delà de 6 à 8 heures, le café refroidit. Pour un séminaire de toute une journée, indiquez le planning (matin et après-midi) dans votre demande de devis. Pour un goûter d'après-midi, voir <a href="/creations/pauses-gourmandes">nos pauses gourmandes</a>.</p>

      <h2>Combien de thermos prévoir ?</h2>
      <p>Comptez 1 thermos d'1 litre pour 6 personnes, soit 4 pour 20 personnes (3 de café, 1 de thé) et 9 pour 50 : le détail est dans <a href="/journal/combien-de-thermos-cafe-the-10-20-50-100-personnes">combien de thermos pour 10, 20, 50 ou 100 personnes</a>. Un thermos coûte 19,50 € HT, au même prix pour le café et pour le thé.</p>

      <h2>Avec L'Écrin Traiteur</h2>
      <ul>
        <li>Thermos d'1 litre de café bio ou de thé Mariage Frères : 19,50 € HT, 6 à 8 tasses, préparé le matin même.</li>
        <li>Livraison dès 6h30, 29 € HT ; commande jusqu'à la veille 14h (48 h à partir de 50 personnes).</li>
        <li>Minimum de commande 50 € HT de produits ; devis sous 24 h, facture d'entreprise avec TVA.</li>
      </ul>
      <p>Voir les <a href="/creations/boissons">boissons</a>, les <a href="/tarifs">tarifs</a>, ou <a href="/devis">demandez un devis</a> avec l'effectif, la date et l'heure de livraison souhaitée.</p>
    `,
    relatedProducts: [],
    faq: [
      { q: "Combien de temps le café reste-t-il chaud dans un thermos ?", a: "Le thermos de café L'Écrin Traiteur garde le café chaud 6 heures après la livraison, et jusqu'à 8 heures. Livré à 7h30, il reste chaud jusqu'à 13h30 et jusqu'à 15h30." },
      { q: "À quelle heure peut-on se faire livrer le café ?", a: "Dès 6h30 à Paris et en Île-de-France, avec une commande passée jusqu'à la veille 14h (48 h à partir de 50 personnes)." },
      { q: "Faut-il réchauffer le café en thermos ?", a: "Non. Le café est préparé le matin même et livré chaud dans un thermos isotherme : il suffit de l'installer avant la réunion." },
      { q: "Combien de tasses sert un thermos d'1 litre ?", a: "6 à 8 tasses. On compte 1 thermos pour 6 personnes, au prix de 19,50 € HT." },
    ],
  },
]
