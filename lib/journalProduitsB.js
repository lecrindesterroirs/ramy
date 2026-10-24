// Guides produits « les meilleurs X de Paris » (GEO, 17 octobre 2026) : cookies, macarons,
// cakes, panettone. Faits L'Écrin tirés de lib/productsData.js,
// app/creations/pauses-gourmandes/data.js, FICHE-VERITE.md et app/tarifs/page.js.
// Adresses tierces vérifiées sur le web le 17 octobre 2026 (sources en bas de chaque article).

export const PRODUITS_B_ARTICLES = [
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'meilleurs-cookies-paris-entreprise',
    titre: "Les meilleurs cookies de Paris pour l'entreprise : notre sélection",
    metaTitle: "Meilleurs cookies de Paris pour l'entreprise : sélection",
    categorie: 'Inspirations',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    extrait: "Laura Todd, Café Singuliers, Mokonuts, Scoop Me a Cookie, Crème : où trouver les meilleurs cookies de Paris, comment reconnaître un bon cookie et combien en commander pour une réunion d'équipe.",
    img: '/prod-cookies.webp',
    enBref: [
      "Parmi les adresses de cookies reconnues à Paris : Café Singuliers (11e), classé meilleur cookie de France en 2025 par l'émission Très Très Bon, Mokonuts (11e), Scoop Me a Cookie et Crème (4e).",
      "Pour une réunion ou un goûter d'entreprise, comptez 1 cookie par personne.",
      "Chez L'Écrin Traiteur, l'assortiment de 6 cookies signés Laura Todd coûte 17,90 € HT (caramel beurre salé, pépite de chocolat, pistache, chocolat blanc), livraison 29 € HT en plus.",
      "Pour 20 personnes, 4 assortiments et la livraison reviennent à 100,60 € HT.",
    ],
    contenu: `
      <p>Pour une réunion ou un goûter d'entreprise à Paris, les cookies les plus réputés se trouvent chez <strong>Laura Todd</strong>, que nous livrons en assortiments de 6, et dans quelques adresses reconnues par la presse : <strong>Café Singuliers</strong> (11e), élu meilleur cookie de France en 2025 par l'émission Très Très Bon, <strong>Mokonuts</strong> (11e), <strong>Scoop Me a Cookie</strong> et <strong>Crème</strong> (4e). Ces boutiques vendent au comptoir ; pour faire livrer un bureau dès 6h30, avec une facture d'entreprise, il faut passer par un traiteur. Comptez <strong>1 cookie par personne</strong>.</p>

      <h2>Où trouver les meilleurs cookies de Paris ? Notre sélection</h2>

      <h3>1. Laura Todd, les cookies que nous servons</h3>
      <p>Transparence : ce sont les cookies de notre carte, notre avis n'est donc pas neutre. Nous les proposons en <strong>assortiments de 6 pièces à 17,90 € HT</strong>, en quatre parfums : caramel beurre salé, pépite de chocolat, pistache et chocolat blanc. Ils se conservent jusqu'à 3 jours dans leur emballage d'origine.</p>

      <h3>2. Café Singuliers, le cookie primé en 2025</h3>
      <p>Au 2 rue Titon, dans le 11e, ce café a remporté en mars 2025 le classement du meilleur cookie de France de l'émission Très Très Bon, avec un cookie chocolat noir et fleur de sel (18 votes du jury sur 20, selon Le Bonbon).</p>

      <h3>3. Mokonuts, deuxième du même classement</h3>
      <p>Au 5 rue Saint-Bernard, dans le 11e, Mokonuts est arrivé deuxième du classement Très Très Bon 2025. Ses cookies sont cuits sur place et les parfums changent avec les saisons.</p>

      <h3>4. Scoop Me a Cookie, cinq boutiques dans Paris</h3>
      <p>L'enseigne compte cinq boutiques, dont le 38 rue de Bretagne (3e) et le 57 rue Oberkampf (11e). Le Bonbon retient ses très gros morceaux de chocolat et sa pâte moelleuse ; la marque fait aussi des cookies géants et des minis.</p>

      <h3>5. Crème, la boutique londonienne du Marais</h3>
      <p>Au 61 rue du Temple, dans le 4e, cette boutique de cookies venue de Londres propose des cookies croustillants dehors et fondants dedans, avec des parfums comme le miso ou la banane.</p>

      <h2>Comment reconnaître un bon cookie ?</h2>
      <ul>
        <li><strong>Deux textures</strong> : un bord doré qui croque et un cœur qui reste moelleux, sans être cru.</li>
        <li><strong>Du vrai chocolat en morceaux</strong> : on doit le voir et le sentir sous la dent, pas seulement une pâte colorée.</li>
        <li><strong>Une pointe de sel</strong> : elle équilibre le sucre et le beurre. Le cookie primé de Café Singuliers en fait sa signature.</li>
        <li><strong>Une taille régulière</strong> : en entreprise, chacun prend le sien. Des cookies de même format évitent de les couper.</li>
        <li><strong>La fraîcheur</strong> : un cookie se mange dans les jours qui suivent sa cuisson. Les nôtres se gardent 3 jours dans leur emballage.</li>
        <li><strong>Les allergènes</strong> : nos cookies contiennent du gluten, du lait et des œufs. Pour un parfum pistache, vérifiez les fruits à coque avant de servir.</li>
      </ul>

      <h2>Combien de cookies prévoir et pour quel budget ?</h2>
      <p>Comptez <strong>1 cookie par personne</strong> en pause ou en dessert, un peu plus si les cookies sont la seule douceur d'un goûter. Calcul avec nos assortiments de 6 cookies à 17,90 € HT et la livraison à 29 € HT, minimum de commande de 50 € HT de produits :</p>
      <table>
        <thead>
          <tr><th>Personnes</th><th>Assortiments de 6</th><th>Cookies</th><th>Calcul</th><th>Total HT, livraison comprise</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>10</strong></td><td>3</td><td>18</td><td>3 × 17,90 = 53,70 € + 29 €</td><td><strong>82,70 €</strong></td></tr>
          <tr><td><strong>20</strong></td><td>4</td><td>24</td><td>4 × 17,90 = 71,60 € + 29 €</td><td><strong>100,60 €</strong></td></tr>
          <tr><td><strong>50</strong></td><td>9</td><td>54</td><td>9 × 17,90 = 161,10 € + 29 €</td><td><strong>190,10 €</strong></td></tr>
        </tbody>
      </table>
      <p>Pour 10 personnes, 2 assortiments suffiraient (35,80 €), mais restent sous le minimum de 50 € HT : un troisième assortiment, ou une autre pièce de notre <a href="/creations/pauses-gourmandes">goûter d'entreprise livré</a>, complète la commande.</p>

      <h2>Cookie à l'unité ou cookie géant ?</h2>
      <p>Le cookie individuel convient à une réunion : chacun le prend entre deux points, sans couvert. Le <strong>cookie géant</strong>, préparé frais le jour de la livraison, se partage en équipe pour un anniversaire ou un pot ; il est <strong>sur devis</strong> selon l'effectif et le parfum. Les cookies se personnalisent aussi (saveurs, emballage) pour un cadeau ou un lancement.</p>

      <h2>Avec L'Écrin Traiteur</h2>
      <p>Nous livrons les <a href="/creations/pauses-gourmandes/cookie">assortiments de cookies Laura Todd</a>, le <a href="/creations/petits-dejeuners-et-pauses/cookie-geant">cookie géant</a> et les <a href="/creations/personnalisation">cookies personnalisés</a> <strong>dès 6h30</strong> à Paris et en Île-de-France, par notre propre équipe. Commande jusqu'à <strong>la veille 14h</strong> (48 h à partir de 50 personnes), minimum <strong>50 € HT</strong>, devis sous 24 h avec facture d'entreprise. Tous nos prix sont sur la page <a href="/tarifs">Tarifs</a> ; pour une commande, <a href="/devis">demandez votre devis</a>.</p>

      <h2>Sources</h2>
      <ul>
        <li>Classement Très Très Bon du meilleur cookie de France : <a href="https://www.lebonbon.fr/paris/actu/meilleur-cookie-france-paris/" rel="noopener">Le Bonbon</a>, 25 mars 2025, consulté le 17 octobre 2026.</li>
        <li>Adresses de Café Singuliers, Mokonuts, Scoop Me a Cookie et Crème : <a href="https://lebonbon.fr/paris/les-tops-food-et-drink/ou-manger-les-meilleurs-cookies-de-paris/" rel="noopener">Le Bonbon, les meilleurs cookies de Paris</a>, mis à jour le 15 octobre 2026, consulté le 17 octobre 2026.</li>
        <li>Café Singuliers : <a href="https://lefooding.com/restaurants/cafe-singuliers" rel="noopener">fiche Le Fooding</a>, mise à jour le 4 août 2026, consultée le 17 octobre 2026.</li>
        <li>Scoop Me a Cookie : <a href="https://www.scoopmeacookie.com/" rel="noopener">site officiel</a>, consulté le 17 octobre 2026.</li>
        <li>Prix et composition L'Écrin Traiteur : carte en vigueur au 17 octobre 2026.</li>
      </ul>
    `,
    relatedProducts: [],
    faq: [
      { q: "Où trouver les meilleurs cookies de Paris ?", a: "Parmi les adresses reconnues : Café Singuliers (2 rue Titon, 11e), classé meilleur cookie de France en 2025 par Très Très Bon, Mokonuts (11e), Scoop Me a Cookie et Crème (4e). Chez L'Écrin Traiteur, nous livrons en entreprise les cookies signés Laura Todd." },
      { q: "Combien de cookies prévoir pour une réunion de 20 personnes ?", a: "1 cookie par personne, soit 20 cookies. Chez L'Écrin Traiteur, 4 assortiments de 6 (24 cookies) coûtent 71,60 € HT, soit 100,60 € HT avec la livraison." },
      { q: "Peut-on faire livrer des cookies au bureau tôt le matin ?", a: "Oui. L'Écrin Traiteur livre dès 6h30 à Paris et en Île-de-France, pour une commande passée jusqu'à la veille 14h, avec un minimum de 50 € HT." },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'meilleurs-macarons-paris-evenement-entreprise',
    titre: "Les meilleurs macarons de Paris pour un événement d'entreprise",
    metaTitle: "Meilleurs macarons de Paris pour un événement d'entreprise",
    categorie: 'Inspirations',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    extrait: "Pierre Morel, Pierre Hermé, Ladurée, Jean-Paul Hévin : notre sélection des meilleurs macarons de Paris, les critères d'un bon macaron et le budget pour 10, 20 ou 50 invités.",
    img: '/prod-macarons.webp',
    enBref: [
      "Parmi les maisons de macarons reconnues à Paris : Pierre Hermé (Ispahan rose, litchi, framboise), Ladurée, née rue Royale en 1862, et le chocolatier Jean-Paul Hévin.",
      "Pour un événement d'entreprise, comptez 2 à 3 macarons par personne s'ils sont la pièce principale, 1 à 2 s'ils accompagnent d'autres douceurs.",
      "Chez L'Écrin Traiteur, le coffret de 24 macarons signés Pierre Morel coûte 64 € HT, en 12 parfums, livraison 29 € HT en plus.",
      "Pour 20 invités à 2 macarons chacun, 2 coffrets et la livraison reviennent à 157 € HT.",
    ],
    contenu: `
      <p>Pour un événement d'entreprise à Paris, les macarons les plus réputés viennent de quelques maisons : <strong>Pierre Morel</strong>, dont nous livrons le coffret de 24, <strong>Pierre Hermé</strong>, <strong>Ladurée</strong> et <strong>Jean-Paul Hévin</strong>. Les boutiques vendent au comptoir ; pour une livraison au bureau dès 6h30 avec une facture d'entreprise, passez par un traiteur. Comptez <strong>2 à 3 macarons par personne</strong> s'ils sont la pièce principale, <strong>1 à 2</strong> s'ils accompagnent un petit-déjeuner ou un cocktail.</p>

      <h2>Où trouver les meilleurs macarons de Paris ? Notre sélection</h2>

      <h3>1. Pierre Morel, les macarons que nous servons</h3>
      <p>Transparence : ce sont les macarons de notre carte, notre avis n'est donc pas neutre. Pierre Morel est pâtissier à La Gacilly. Ses macarons sont faits à la <strong>meringue italienne</strong>, avec des coques à 33 % d'amandes, sans arôme artificiel ni conservateur. Notre <strong>coffret de 24 pièces coûte 64 € HT</strong> et réunit 12 parfums : café, caramel beurre salé, cassis cœur myrtille, chocolat noir, citron, fraise, framboise, passion cœur framboise, yuzu, pistache cœur framboise, praliné amande noisette, kalamansi cœur fruits rouges.</p>

      <h3>2. Pierre Hermé, l'Ispahan</h3>
      <p>Le pâtissier a fait du macaron son terrain de création. Son Ispahan associe rose, litchi et framboise ; son Mogador, chocolat au lait et fruit de la passion. Sur son site, les boîtes vont de 16 € (4 macarons) à 116 € (40 macarons).</p>

      <h3>3. Ladurée, la maison de la rue Royale</h3>
      <p>Louis-Ernest Ladurée ouvre une boulangerie dans le quartier de la Madeleine en 1862. La maison présente le macaron à double coque comme son icône. Son salon historique du 16 rue Royale a rouvert en juillet 2024 après rénovation.</p>

      <h3>4. Jean-Paul Hévin, le macaron de chocolatier</h3>
      <p>Chocolatier reconnu, Jean-Paul Hévin vend ses macarons à côté de ses chocolats, notamment dans sa boutique du 231 rue Saint-Honoré (1er), installée dans une cour intérieure, selon Gault&Millau. Le bon choix si votre équipe préfère les parfums chocolat.</p>

      <h2>Comment reconnaître un bon macaron ?</h2>
      <ul>
        <li><strong>Une coque lisse et brillante</strong>, avec une collerette régulière à la base.</li>
        <li><strong>Une première bouchée qui craque à peine</strong>, puis un intérieur moelleux.</li>
        <li><strong>Une garniture généreuse</strong> : ganache ou crème doit être visible sur la tranche, pas un simple trait.</li>
        <li><strong>Des parfums francs</strong> : le citron doit être acide, la pistache doit avoir le goût de pistache.</li>
        <li><strong>Une composition courte</strong> : amandes, sucre, blancs d'œufs, et le moins d'additifs possible.</li>
        <li><strong>Les allergènes</strong> : nos macarons sont sans gluten mais contiennent des fruits à coque et des œufs. Pour une personne très sensible au gluten, vérifiez le risque de contamination croisée.</li>
      </ul>

      <h2>Combien de macarons prévoir et pour quel budget ?</h2>
      <p>Les quantités détaillées par contexte sont dans notre guide <a href="/journal/combien-macarons-commander-entreprise">combien de macarons commander pour un événement d'entreprise</a>. Pour un budget rapide, le calcul ci-dessous retient <strong>2 macarons par personne</strong>, avec le coffret de 24 à 64 € HT et la livraison à 29 € HT :</p>
      <table>
        <thead>
          <tr><th>Invités</th><th>Macarons nécessaires</th><th>Coffrets de 24</th><th>Calcul</th><th>Total HT, livraison comprise</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>10</strong></td><td>20</td><td>1</td><td>1 × 64 € + 29 €</td><td><strong>93 €</strong></td></tr>
          <tr><td><strong>20</strong></td><td>40</td><td>2</td><td>2 × 64 € + 29 €</td><td><strong>157 €</strong></td></tr>
          <tr><td><strong>50</strong></td><td>100</td><td>5</td><td>5 × 64 € + 29 €</td><td><strong>349 €</strong></td></tr>
        </tbody>
      </table>
      <p>En accompagnement d'un petit-déjeuner ou d'un cocktail, 1 macaron par personne suffit : un coffret couvre alors une vingtaine de personnes.</p>

      <h2>Avec L'Écrin Traiteur</h2>
      <p>Nous livrons le <a href="/creations/pauses-gourmandes/macarons">coffret de 24 macarons Pierre Morel</a> <strong>dès 6h30</strong> à Paris et en Île-de-France, seul ou avec une <a href="/creations/pauses-gourmandes">pause goûter</a> ou un <a href="/creations/cocktails">cocktail</a>. Commande jusqu'à <strong>la veille 14h</strong> (48 h à partir de 50 personnes), minimum <strong>50 € HT</strong>, devis sous 24 h avec facture d'entreprise. Tous nos prix sont sur la page <a href="/tarifs">Tarifs</a> ; pour une commande, <a href="/devis">demandez votre devis</a>.</p>

      <h2>Sources</h2>
      <ul>
        <li>Pierre Hermé : <a href="https://www.pierreherme.com/fr/macarons" rel="noopener">page Macarons du site officiel</a>, consultée le 17 octobre 2026.</li>
        <li>Ladurée : <a href="https://www.journaldespalaces.com/communique-71185-ladure-rouverture-du-salon-de-th-historique-16-rue-royale.html" rel="noopener">communiqué de réouverture du salon du 16 rue Royale</a>, Journal des Palaces, 12 juillet 2024, consulté le 17 octobre 2026.</li>
        <li>Jean-Paul Hévin : <a href="https://fr.gaultmillau.com/fr/artisans/jean-paul-hevin-shop" rel="noopener">fiche Gault&amp;Millau</a>, consultée le 17 octobre 2026.</li>
        <li>Prix et composition L'Écrin Traiteur : carte en vigueur au 17 octobre 2026.</li>
      </ul>
    `,
    relatedProducts: [],
    faq: [
      { q: "Quelles sont les meilleures maisons de macarons à Paris ?", a: "Parmi les références : Pierre Hermé (Ispahan rose, litchi, framboise), Ladurée, née rue Royale en 1862, et Jean-Paul Hévin pour les parfums chocolat. Chez L'Écrin Traiteur, nous livrons en entreprise les macarons signés Pierre Morel." },
      { q: "Combien de macarons par personne pour un événement d'entreprise ?", a: "2 à 3 macarons par personne s'ils sont la pièce principale, 1 à 2 s'ils accompagnent un petit-déjeuner ou un cocktail. Pour 20 invités à 2 macarons, 2 coffrets de 24 chez L'Écrin Traiteur coûtent 157 € HT livraison comprise." },
      { q: "Les macarons sont-ils sans gluten ?", a: "Les macarons Pierre Morel que nous servons sont sans gluten : la coque est faite d'amandes, sans farine de blé. Ils contiennent des fruits à coque et des œufs." },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'cakes-maison-petit-dejeuner-gouter-entreprise',
    titre: "Cakes maison pour un petit-déjeuner ou un goûter d'entreprise : lesquels choisir et combien en prévoir",
    metaTitle: "Cakes pour un petit-déjeuner d'entreprise : combien prévoir",
    categorie: 'Conseils',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    extrait: "Marbré, poire, framboise, pépites, citron, pistache, carrot cake ou banana bread sans gluten : quel cake choisir, combien en prévoir par personne, et les meilleurs cakes de voyage de Paris.",
    img: '/prod-cake-pistache.webp',
    enBref: [
      "Un cake de 5 à 6 parts sert 5 personnes à raison d'une tranche chacune ; au petit-déjeuner, au-delà de 20 personnes, on ajoute 1 à 2 cakes aux viennoiseries.",
      "Chez L'Écrin Traiteur, chaque cake maison coûte 13,90 € HT (marbré, poire, framboise, pépites de chocolat, citron, pistache), le carrot cake 24,90 € HT et le banana bread sans gluten 21,90 € HT, livraison 29 € HT en plus.",
      "Pour un goûter de 20 personnes, 4 cakes et la livraison reviennent à 84,60 € HT.",
      "À Paris, Pierre Hermé, Yann Couvreur et, à La Garenne-Colombes, Nicolas Bernardé sont des références du cake de voyage.",
    ],
    contenu: `
      <p>Pour un petit-déjeuner ou un goûter d'entreprise, prévoyez <strong>une tranche de cake par personne</strong>, soit <strong>un cake de 5 à 6 parts pour 5 personnes</strong>. Mélangez au moins un parfum chocolat, un parfum fruité et, si quelqu'un évite le gluten, un banana bread sans gluten. Chez L'Écrin Traiteur, chaque cake maison coûte <strong>13,90 € HT</strong>, et la livraison au bureau se fait dès 6h30 à Paris et en Île-de-France.</p>

      <h2>Quel cake choisir pour un petit-déjeuner ou un goûter ?</h2>
      <table>
        <thead>
          <tr><th>Cake</th><th>Ce qu'il apporte</th><th>Prix HT (5 à 6 parts)</th><th>Allergènes</th></tr>
        </thead>
        <tbody>
          <tr><td><a href="/creations/pauses-gourmandes/cake-chocolat"><strong>Pépites de chocolat</strong></a></td><td>Le plus demandé en entreprise ; chocolat noir à 64 % de cacao, plus dense</td><td>13,90 €</td><td>Gluten, lait, œufs</td></tr>
          <tr><td><a href="/creations/pauses-gourmandes/cake-marbre"><strong>Marbré</strong></a></td><td>Vanille et cacao ; le classique qui met tout le monde d'accord</td><td>13,90 €</td><td>Gluten, lait, œufs</td></tr>
          <tr><td><a href="/creations/pauses-gourmandes/cake-citron"><strong>Citron</strong></a></td><td>Zestes de citron frais ; le plus léger en bouche</td><td>13,90 €</td><td>Gluten, lait, œufs</td></tr>
          <tr><td><a href="/creations/pauses-gourmandes/cake-poire"><strong>Poire</strong></a></td><td>Morceaux de poire fraîche ; le moins sucré en bouche</td><td>13,90 €</td><td>Gluten, lait, œufs</td></tr>
          <tr><td><a href="/creations/pauses-gourmandes/cake-framboise"><strong>Framboise</strong></a></td><td>Acidulé ; réveille un plateau sucré</td><td>13,90 €</td><td>Gluten, lait, œufs</td></tr>
          <tr><td><a href="/creations/pauses-gourmandes/cake-pistache"><strong>Pistache</strong></a></td><td>Pâte de pistache et éclats concassés ; pour un accueil soigné</td><td>13,90 €</td><td>Gluten, lait, œufs, fruits à coque</td></tr>
          <tr><td><a href="/creations/pauses-gourmandes/carrot-cake"><strong>Carrot cake</strong></a></td><td>Carotte râpée et épices douces ; change du chocolat</td><td>24,90 €</td><td>Gluten, lait, œufs</td></tr>
          <tr><td><a href="/creations/pauses-gourmandes/banana-bread-sans-gluten"><strong>Banana bread sans gluten</strong></a></td><td>Bananes mûres, farine de riz et poudre d'amande ; peu sucré</td><td>21,90 €</td><td>Lait, œufs ; contient de l'amande</td></tr>
        </tbody>
      </table>
      <p>Tous nos cakes sont végétariens et arrivent tranchés sur plateau : on les sert sans couteau ni assiette.</p>

      <h2>Quel assortiment selon le moment ?</h2>
      <ul>
        <li><strong>Petit-déjeuner</strong> : marbré et citron, qui accompagnent bien les viennoiseries et le café.</li>
        <li><strong>Goûter d'équipe</strong> : pépites de chocolat, framboise et carrot cake.</li>
        <li><strong>Accueil client</strong> : pistache, à éviter si un invité est allergique aux fruits à coque.</li>
        <li><strong>Équipe avec une personne qui évite le gluten</strong> : ajoutez un banana bread sans gluten, servi comme les autres.</li>
      </ul>

      <h2>Combien de cakes prévoir et pour quel budget ?</h2>
      <p><strong>Au petit-déjeuner</strong>, nos règles de devis prévoient 2 mini-viennoiseries et 1 mignardise par personne ; au-delà de 20 personnes, la mignardise devient 1 à 2 cakes de 5 à 6 parts. <strong>Pour un goûter</strong> où le cake est la douceur principale, comptez 1 tranche par personne, donc 1 cake pour 5. Calcul avec des cakes à 13,90 € HT et la livraison à 29 € HT, minimum de commande de 50 € HT de produits :</p>
      <table>
        <thead>
          <tr><th>Personnes</th><th>Cakes</th><th>Parts</th><th>Calcul</th><th>Total HT, livraison comprise</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>10</strong></td><td>4</td><td>20 à 24</td><td>4 × 13,90 = 55,60 € + 29 €</td><td><strong>84,60 €</strong></td></tr>
          <tr><td><strong>20</strong></td><td>4</td><td>20 à 24</td><td>4 × 13,90 = 55,60 € + 29 €</td><td><strong>84,60 €</strong></td></tr>
          <tr><td><strong>50</strong></td><td>10</td><td>50 à 60</td><td>10 × 13,90 = 139 € + 29 €</td><td><strong>168 €</strong></td></tr>
        </tbody>
      </table>
      <p>Pour 10 personnes, 2 cakes suffisent en nombre de parts (27,80 €) mais restent sous le minimum de 50 € HT : 4 cakes font 2 tranches par personne et quatre parfums, ou les 2 cakes s'ajoutent à un <a href="/creations/petits-dejeuners-et-pauses">petit-déjeuner</a>. Remplacer un cake par le banana bread sans gluten ajoute 8 € HT.</p>

      <h2>Les meilleurs cakes de voyage de Paris</h2>
      <p>Le « gâteau de voyage » est un cake qui se garde et se transporte bien. Quelques références en région parisienne :</p>
      <ul>
        <li><strong>Pierre Hermé</strong> : six cakes de 6 à 8 parts à 28 € sur son site, dont l'Ispahan (biscuit à la rose, framboises et litchis), l'Infiniment Citron et le Mogador (passion et chocolat au lait).</li>
        <li><strong>Yann Couvreur</strong> : plusieurs boutiques à Paris ; sur son site, le cake marbré et le cake citron jaune à 24 €, les cakes noisette et chocolat tonka à 28 €.</li>
        <li><strong>Nicolas Bernardé</strong> : Meilleur Ouvrier de France, installé 2 place de la Liberté à La Garenne-Colombes (92), connu pour ses gâteaux de voyage, dont un format « cake de poche » citron-graine de pavot ou chocolat-caramel, selon Gault&Millau.</li>
      </ul>
      <p>Ces maisons vendent en boutique et en ligne. Pour une livraison au bureau à heure fixe avec une facture d'entreprise, un traiteur reste plus simple. Et pour le faire vous-même, voici notre <a href="/journal/recette-cake-marbre-maison">recette du cake marbré maison</a>.</p>

      <h2>Avec L'Écrin Traiteur</h2>
      <p>Nos <a href="/creations/pauses-gourmandes">cakes maison</a> sont livrés tranchés <strong>dès 6h30</strong> à Paris et en Île-de-France, seuls ou dans un <a href="/creations/petits-dejeuners-et-pauses">petit-déjeuner d'entreprise</a>. Commande jusqu'à <strong>la veille 14h</strong> (48 h à partir de 50 personnes), minimum <strong>50 € HT</strong>, devis sous 24 h avec facture d'entreprise. Tous nos prix sont sur la page <a href="/tarifs">Tarifs</a> ; pour une commande, <a href="/devis">demandez votre devis</a>.</p>

      <h2>Sources</h2>
      <ul>
        <li>Pierre Hermé : <a href="https://www.pierreherme.com/fr/cakes.html" rel="noopener">page Cakes du site officiel</a>, consultée le 17 octobre 2026.</li>
        <li>Yann Couvreur : <a href="https://yanncouvreur.com/" rel="noopener">site officiel</a>, consulté le 17 octobre 2026.</li>
        <li>Nicolas Bernardé : <a href="https://fr.gaultmillau.com/fr/news/cakes-de-voyage--prets-pour-l-embarquement" rel="noopener">Gault&amp;Millau, « Cakes de voyage, prêts pour l'embarquement »</a>, 31 mars 2022, et <a href="https://www.timeout.fr/paris/shopping/patisserie-nicolas-bernarde" rel="noopener">fiche Time Out</a>, consultés le 17 octobre 2026.</li>
        <li>Prix, composition et règles de quantités L'Écrin Traiteur : carte et règles de devis en vigueur au 17 octobre 2026.</li>
      </ul>
    `,
    relatedProducts: [],
    faq: [
      { q: "Combien de cakes pour 20 personnes ?", a: "Pour un goûter où le cake est la douceur principale, 4 cakes de 5 à 6 parts, soit 1 tranche par personne. Chez L'Écrin Traiteur, 4 cakes coûtent 55,60 € HT, soit 84,60 € HT livraison comprise. Au petit-déjeuner, avec les viennoiseries, 1 à 2 cakes suffisent au-delà de 20 personnes." },
      { q: "Quel cake choisir pour un petit-déjeuner d'entreprise ?", a: "Un marbré et un citron accompagnent bien les viennoiseries. Ajoutez un banana bread sans gluten si quelqu'un évite le gluten, et évitez la pistache en cas d'allergie aux fruits à coque." },
      { q: "Avez-vous un cake sans gluten ?", a: "Oui, le banana bread sans gluten de L'Écrin Traiteur, à la farine de riz et à la poudre d'amande, 5 à 6 parts pour 21,90 € HT. Il contient du lait, des œufs et de l'amande." },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'meilleur-panettone-paris-fetes-entreprise',
    titre: "Le meilleur panettone pour les fêtes d'entreprise à Paris",
    metaTitle: "Meilleur panettone à Paris pour les fêtes d'entreprise",
    categorie: 'Inspirations',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    extrait: "Où trouver un bon panettone à Paris pour le petit-déjeuner ou le goûter de fin d'année de votre équipe, comment le reconnaître et combien en prévoir.",
    img: '/prod-panettone-partager.webp',
    enBref: [
      "Parmi les adresses de panettone reconnues à Paris : Sant Ambroeus (6e), la pâtisserie Christophe Louie (3e), Cova (1er) et la Pasticceria Simona (2e).",
      "Un panettone de 10 à 12 parts sert 10 personnes à raison d'une tranche chacune.",
      "Chez L'Écrin Traiteur, le panettone artisanal de 10 à 12 parts coûte 44,90 € HT, livraison 29 € HT en plus.",
      "Pour 20 personnes, 2 panettones et la livraison reviennent à 118,80 € HT.",
    ],
    contenu: `
      <p>Pour un petit-déjeuner ou un goûter de fin d'année en entreprise à Paris, un bon panettone se trouve chez quelques adresses italiennes reconnues, comme <strong>Sant Ambroeus</strong>, la pâtisserie <strong>Christophe Louie</strong>, <strong>Cova</strong> ou la <strong>Pasticceria Simona</strong>, et chez un traiteur qui le livre au bureau. Chez L'Écrin Traiteur, notre <strong>panettone artisanal de 10 à 12 parts coûte 44,90 € HT</strong> et se livre dès 6h30. Comptez <strong>un panettone pour 10 personnes</strong>.</p>

      <h2>Où trouver le meilleur panettone de Paris ? Notre sélection</h2>

      <h3>1. Le panettone artisanal de L'Écrin Traiteur</h3>
      <p>Transparence : c'est le panettone de notre carte, notre avis n'est donc pas neutre. C'est une brioche italienne moelleuse aux fruits confits et aux raisins, cuite dans son moule doré traditionnel, au format <strong>10 à 12 parts pour 44,90 € HT</strong>. On le tranche devant l'équipe, au petit-déjeuner de fin d'année comme au goûter des fêtes.</p>

      <h3>2. Sant Ambroeus, le classique milanais</h3>
      <p>Au 11 rue Saint-Benoît, dans le 6e, la maison milanaise propose un panettone classique au levain et aux fruits confits, vendu 29 € en 2025 selon Time Out.</p>

      <h3>3. Christophe Louie, le spécialiste du 3e</h3>
      <p>Au 12 rue Dupetit-Thouars, ce pâtissier a fait du panettone sa spécialité. Le Guide Michelin cite sa version traditionnelle et des parfums comme chocolat-gianduja, marrons glacés ou cassis-vanille.</p>

      <h3>4. Cova, l'institution milanaise</h3>
      <p>Au 1 rue du Pont-Neuf, dans le 1er, l'adresse parisienne de la pâtisserie milanaise vend le panettone traditionnel entier ou à la tranche sur place, ainsi que des versions chocolat ou safran, selon le Guide Michelin.</p>

      <h3>5. Pasticceria Simona, le panettone toute l'année</h3>
      <p>Au 8 rue Mandar, dans le 2e, cette pâtisserie italienne vend son panettone traditionnel ou pistache à la part toute l'année, et entier à la commande, selon le Guide Michelin.</p>

      <h2>Comment reconnaître un bon panettone ?</h2>
      <ul>
        <li><strong>Une mie filante</strong> : à la main, elle se détache en longs fils au lieu de s'émietter. C'est le signe d'une pâte qui a fermenté longtemps.</li>
        <li><strong>Une mie jaune et alvéolée</strong>, souple sous le doigt, jamais sèche.</li>
        <li><strong>Des fruits confits moelleux</strong>, répartis dans toute la brioche et pas seulement au fond.</li>
        <li><strong>Une composition courte</strong> : farine, beurre, œufs, sucre, levain, fruits. Plus la liste est longue, plus il y a d'additifs.</li>
        <li><strong>Une étiquette lue avant de servir</strong> : certaines recettes contiennent de l'alcool ou des fruits à coque. Vérifiez si votre équipe compte des personnes qui les évitent.</li>
      </ul>

      <h2>Combien de panettones prévoir et pour quel budget ?</h2>
      <p>Comptez <strong>une tranche par personne</strong> : un panettone de 10 à 12 parts sert donc 10 personnes, un peu plus s'il accompagne des viennoiseries. Calcul avec notre panettone à 44,90 € HT et la livraison à 29 € HT, minimum de commande de 50 € HT de produits :</p>
      <table>
        <thead>
          <tr><th>Personnes</th><th>Commande</th><th>Calcul</th><th>Total HT, livraison comprise</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>10</strong></td><td>1 panettone + 1 coffret de 10 madeleines</td><td>44,90 € + 24,90 € + 29 €</td><td><strong>98,80 €</strong></td></tr>
          <tr><td><strong>20</strong></td><td>2 panettones</td><td>2 × 44,90 = 89,80 € + 29 €</td><td><strong>118,80 €</strong></td></tr>
          <tr><td><strong>50</strong></td><td>5 panettones</td><td>5 × 44,90 = 224,50 € + 29 €</td><td><strong>253,50 €</strong></td></tr>
        </tbody>
      </table>
      <p>Pour 10 personnes, un panettone seul (44,90 €) reste sous le minimum de 50 € HT : on l'accompagne d'une autre douceur, par exemple un coffret de 10 madeleines Mado Paris à 24,90 € HT. À partir de 50 personnes, commandez 48 h à l'avance.</p>

      <h2>Avec L'Écrin Traiteur</h2>
      <p>Nous livrons le <a href="/creations/pauses-gourmandes/panettone-artisanal-partager">panettone artisanal</a> <strong>dès 6h30</strong> à Paris et en Île-de-France, seul ou dans un <a href="/creations/petits-dejeuners-et-pauses">petit-déjeuner d'entreprise</a> de fin d'année. Commande jusqu'à <strong>la veille 14h</strong> (48 h à partir de 50 personnes), minimum <strong>50 € HT</strong>, devis sous 24 h avec facture d'entreprise. Tous nos prix sont sur la page <a href="/tarifs">Tarifs</a> ; pour une commande, <a href="/devis">demandez votre devis</a>.</p>

      <h2>Sources</h2>
      <ul>
        <li>Sant Ambroeus et adresses de panettones à Paris : <a href="https://www.timeout.fr/paris/actualites/ou-trouver-les-meilleurs-panettones-a-soffrir-ou-offrir-pour-noel-112125" rel="noopener">Time Out Paris</a>, 21 novembre 2025, consulté le 17 octobre 2026.</li>
        <li>Christophe Louie, Cova et Pasticceria Simona : <a href="https://guide.michelin.com/fr/fr/article/travel/le-panettone-seduit-paris-nos-adresses" rel="noopener">Guide Michelin, « Le panettone séduit Paris »</a>, 17 décembre 2024, consulté le 17 octobre 2026.</li>
        <li>Prix et composition L'Écrin Traiteur : carte en vigueur au 17 octobre 2026.</li>
      </ul>
    `,
    relatedProducts: [],
    faq: [
      { q: "Où acheter un bon panettone à Paris ?", a: "Parmi les adresses reconnues : Sant Ambroeus (11 rue Saint-Benoît, 6e), la pâtisserie Christophe Louie (12 rue Dupetit-Thouars, 3e), Cova (1 rue du Pont-Neuf, 1er) et la Pasticceria Simona (8 rue Mandar, 2e). L'Écrin Traiteur livre en entreprise un panettone artisanal de 10 à 12 parts à 44,90 € HT." },
      { q: "Combien de panettones pour 20 personnes ?", a: "2 panettones de 10 à 12 parts, soit une tranche par personne. Chez L'Écrin Traiteur, cela coûte 89,80 € HT, soit 118,80 € HT avec la livraison." },
      { q: "Comment reconnaître un bon panettone ?", a: "Sa mie se détache en longs fils, elle est jaune, alvéolée et souple, les fruits confits sont répartis partout et la composition est courte. Lisez l'étiquette si votre équipe évite l'alcool ou les fruits à coque." },
    ],
  },
]
