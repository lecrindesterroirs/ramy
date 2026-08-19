// Pages SEO "Pour quel événement", contenu éditorial, maillage interne
// Pas de tunnel d'achat, objectif : capter les requêtes longue traîne par usage

export const OCCASIONS = [
  {
    slug: 'petit-dejeuner-codir',
    heroImg: '/hero-plateau-signature.webp',
    name: 'Repas CODIR & COMEX',
    navLabel: 'CODIR, COMEX & Direction',
    heroTitle: 'Plateau repas CODIR & COMEX à Paris',
    heroDescription: 'CODIR ou COMEX, chaque réunion de direction mérite un repas à la hauteur. L\'Écrin Traiteur livre vos plateaux repas artisanaux directement en salle, à l\'heure que vous choisissez.',
    piliers: [
      { icon: '✦', title: 'Présentation irréprochable', text: 'Conditionnement soigné, plateau servi directement en salle, entrée, plat, dessert, pain. Zéro logistique de votre côté.' },
      { icon: '✦', title: 'Qualité à la hauteur du moment', text: 'Produits sourcés chez des artisans identifiés, recettes élaborées en interne. Un repas dont vos membres de direction se souviendront.' },
      { icon: '✦', title: 'Ponctualité sans faille', text: 'Livraison à l\'heure que vous choisissez, directement en salle de réunion. Accès sécurisés, réceptions filtrées, nous connaissons les contraintes des sièges parisiens.' },
    ],
    seoTitle: 'Plateau repas CODIR & COMEX Paris',
    seoDescription: 'Traiteur plateaux repas pour vos CODIR et COMEX à Paris. L\'Écrin Traiteur livre des repas complets artisanaux directement en salle de réunion, livraison ponctuelle garantie.',
    productCategory: 'plateaux-repas',
    seoArticle: `
      <p>Le <strong>repas CODIR</strong> ou <strong>COMEX</strong> n'est pas un déjeuner ordinaire. C'est le moment où se prennent les décisions stratégiques, où l'on accueille parfois des administrateurs extérieurs, où l'image de la direction se construit dans les détails. Le traiteur que vous choisissez pour ce moment parle de votre culture d'entreprise.</p>
      <h2>CODIR vs COMEX, deux formats, une même exigence</h2>
      <p>Un <strong>CODIR</strong> (Comité de Direction) rassemble généralement 8 à 15 personnes. Un <strong>COMEX</strong> (Comité Exécutif) est plus restreint : 5 à 8 membres maximum, souvent le cercle le plus stratégique de l'organisation. Dans les deux cas, un plateau repas complet, entrée, plat, dessert, pain, est la solution la plus professionnelle et la plus efficace.</p>
      <h2>Nos plateaux repas recommandés pour un CODIR ou COMEX</h2>
      <p>Nos collections sont conçues pour le repas assis en réunion : portion individuelle complète, conditionnement propre, présentation sobre et élégante. Le plateau <strong>La Parisienne</strong> (tataki de bœuf, pommes grenailles rôties, chimichurri) et le plateau <strong>Le Riviera</strong> (saumon gravlax, crème d'Isigny) sont nos bestsellers pour les instances de direction.</p>
      <h2>Traiteur plateaux repas CODIR & COMEX Paris, livraison directe en salle</h2>
      <p>Commandez avant <strong>14h la veille</strong>. Précisez votre heure de livraison, votre adresse exacte et le nombre de participants. Nous nous chargeons du reste, votre salle est prête avant que le premier membre n'arrive. Accès sécurisés, réceptions filtrées, tours de bureaux, nous connaissons les contraintes des sièges parisiens.</p>
      <h2>Repas assis ou plateau individuel, quelle formule pour votre réunion ?</h2>
      <p>Pour un CODIR ou COMEX, le <strong>plateau repas individuel</strong> est la solution idéale : chaque membre reçoit son plateau complet, sans se lever ni se servir. Cela préserve le cadre de la réunion et évite les interruptions. L'Écrin Traiteur livre des plateaux prêts à être posés directement devant chaque participant.</p>
      <h2>Artisans identifiés, des produits que vos membres de direction reconnaissent</h2>
      <p>Chaque collection L'Écrin est conçue autour d'un produit signature et d'un sourcing identifié. Des recettes élaborées en interne, des ingrédients de qualité, une présentation soignée, c'est ce qui fait la différence entre un "plateau traiteur" et un <strong>repas artisanal</strong> dont on parle encore après la réunion.</p>
    `,
    testimonial: {
      quote: "Je n'ai eu que d'excellents retours sur tous les produits, yaourts, viennoiseries, jus de fruits, avec une mention spéciale pour les madeleines qui étaient succulentes, ainsi que le nectar de fraise qui a énormément plu.",
      author: "Claire Renard",
      role: "Office Manager, Direction numérique",
      company: "Le Monde",
    },
    linkedProducts: ['s4', 's3', 'e2', 's1'],
    linkedCities: ['paris', 'la-defense', 'neuilly-sur-seine', 'boulogne-billancourt', 'levallois-perret', 'issy-les-moulineaux'],
    faq: [
      { q: 'Quelle est la différence entre un CODIR et un COMEX pour votre prestation ?', a: 'Un COMEX est généralement plus restreint (5-8 personnes) et plus stratégique qu\'un CODIR (8-15 personnes). Dans les deux cas, nous livrons des plateaux repas individuels complets, entrée, plat, dessert, pain, directement en salle de réunion.' },
      { q: 'Pour combien de personnes livrez-vous un plateau repas CODIR ou COMEX ?', a: 'Nous livrons à partir de 2 personnes, sans minimum de participants. Un COMEX de 6 personnes comme un CODIR de 14 personnes sont des commandes standard pour nous. Le minimum de commande est de 50 € HT.' },
      { q: 'Quel budget prévoir pour un repas CODIR ou COMEX ?', a: 'Nos plateaux repas sont à partir de 22€ HT par personne. Pour un COMEX avec une collection premium, comptez 25-30€ HT par personne, un investissement très raisonnable pour une réunion de direction.' },
      { q: 'Peut-on personnaliser la présentation pour un COMEX avec membres du conseil ?', a: 'Nos plateaux arrivent dans un conditionnement professionnel soigné, prêt à être servi directement. Pour une personnalisation plus poussée (carte nominative, message), contactez-nous pour un devis sur mesure.' },
    ],
  },
  {
    slug: 'seminaire-entreprise',
    heroImg: '/hero-petitdej.webp',
    name: 'Séminaire d\'entreprise',
    navLabel: 'Séminaires d\'entreprise',
    heroTitle: 'Traiteur Séminaire d\'entreprise Paris & IDF',
    heroDescription: 'Un séminaire se prépare dans les détails. L\'Écrin Traiteur livre vos pauses café et petits-déjeuners artisanaux pour toute la journée, partout en Île-de-France.',
    piliers: [
      { icon: '✦', title: 'Volume sans compromis', text: 'De 20 à 500 personnes, même niveau de qualité, même fraîcheur.' },
      { icon: '✦', title: 'Pauses matin & après-midi', text: 'Nous gérons les deux services si besoin, avec des produits adaptés à chaque moment.' },
      { icon: '✦', title: 'Livraison à l\'heure H', text: 'Vos pauses sont prêtes quand vos intervenants s\'arrêtent. Pas de retard, pas de stress.' },
    ],
    seoTitle: 'Traiteur séminaire d\'entreprise Paris',
    seoDescription: 'Traiteur séminaire d\'entreprise à Paris : petit-déjeuner d\'accueil, deux pauses et déjeuner livrés dans une seule commande. De 20 à 500 participants, devis sous 24h.',
    seoArticle: `
      <p>Un <strong>séminaire d'entreprise</strong> se joue sur la journée entière : l'accueil du matin, la pause de 11h, le déjeuner, celle de 16h. C'est quatre rendez-vous à caler, souvent dans un lieu que vous ne connaissez pas, avec un effectif qui bouge jusqu'à la dernière semaine. Nous livrons l'ensemble dans une seule commande, à <strong>Paris et en Île-de-France</strong>.</p>

      <h2>Les quatre moments d'un séminaire, et quoi servir à chacun</h2>
      <ul>
        <li><strong>L'accueil, entre 8h et 9h.</strong> Viennoiseries pur beurre, fruits frais découpés, café et jus. C'est le moment qui donne le ton, et celui où tout le monde est présent. Voir nos <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners</a>.</li>
        <li><strong>La pause du matin.</strong> Elle sert surtout à relancer le café. Prévoyez du sucré léger, pas un second petit-déjeuner.</li>
        <li><strong>Le déjeuner.</strong> Plateaux repas individuels si les travaux continuent, buffet si vous voulez faire circuler les gens. Voir nos <a href="/creations/plateaux-repas">plateaux repas</a> et nos <a href="/creations/lunch-box">lunch box</a>.</li>
        <li><strong>La pause de 16h.</strong> C'est le vrai creux de la journée. Madeleines, cookies, cakes maison et gâteaux à partager tiennent mieux que du salé. Voir nos <a href="/creations/pauses-gourmandes">pauses gourmandes</a>.</li>
      </ul>

      <h2>Deux services, une seule commande</h2>
      <p>Nous livrons les deux pauses en une fois, avec des produits différents pour chacune, ou en deux passages si votre lieu ne permet pas de stocker. C'est à préciser au devis : dans le premier cas vous gagnez sur le forfait de livraison, dans le second vous avez du chaud à 16h.</p>

      <h2>Combien prévoir par personne</h2>
      <p>Sur un séminaire, les gens mangent plus qu'au bureau : la journée est longue et les pauses sont les seuls moments de respiration. Comptez <strong>2 viennoiseries par personne</strong> à l'accueil plutôt que 1,5, et prévoyez large sur le café. Un thermos couvre 6 à 8 tasses seulement, ce qui fait 4 thermos pour 30 participants. Le détail est dans notre guide <a href="/journal/boissons-petit-dejeuner-entreprise">boissons pour un petit-déjeuner d'entreprise</a>.</p>

      <h2>Hôtels, centres de conférence, locaux clients</h2>
      <p>Un séminaire se tient rarement chez vous. Hôtel à Versailles, centre de conférence à La Défense, locaux d'un client à Boulogne-Billancourt : chaque lieu a son entrée de livraison, son contact cuisine et son heure de montage. Certains hôtels ont un service traiteur interne et demandent une validation préalable, ce que nous obtenons en général sans difficulté à condition de s'y prendre à l'avance.</p>
      <p>Donnez-nous le nom du lieu et le contact sur place au moment du devis : c'est ce qui évite le livreur qui tourne autour d'un bâtiment pendant que la pause commence.</p>

      <h2>De 20 à 500 participants</h2>
      <p>Un séminaire de 20 personnes reçoit exactement les mêmes produits qu'un séminaire de 500 : nos viennoiseries et nos madeleines Mado Paris sont préparées le matin même quelle que soit la quantité. Au-delà de 60 participants, nous passons les boissons chaudes en jarres de 10 litres plutôt qu'en thermos, plus pratiques en libre service.</p>

      <h2>Toute la carte halal et sans porc</h2>
      <p>Par défaut, sans supplément. Sur un séminaire qui réunit plusieurs équipes et parfois des intervenants externes, cela évite d'avoir à recenser les contraintes de chacun. Options végétariennes, véganes et sans gluten à préciser au devis avec les effectifs.</p>

      <h2>Quand commander</h2>
      <p>Pour un séminaire, prévoyez <strong>48h à l'avance</strong> sur les volumes importants, ou la veille avant 14h jusqu'à 50 personnes. Livraison dès 6h30, minimum 50 € HT, facturation entreprise avec TVA. Pour l'organisation complète d'une journée, nous avons rassemblé nos repères dans notre guide <a href="/journal/traiteur-seminaire-entreprise-paris">traiteur séminaire d'entreprise à Paris</a>. <a href="/devis">Demandez votre devis</a>, réponse sous 24h.</p>
    `,
    testimonial: {
      quote: "Les madeleines sont très bonnes, grand choix de parfums, viennoiseries, jus, et le service au top. Le livreur nous a même aidé à tout installer.",
      author: "Anaïs Launoy",
      role: "Office Manager",
      company: "Vitalliance",
    },
    linkedProducts: ['viennoiseries-melangees', 'madeleines-50', 'brochettes-fruits', 'chouquettes'],
    linkedCities: ['paris', 'la-defense', 'versailles', 'boulogne-billancourt', 'rueil-malmaison', 'saint-cloud'],
    faq: [
      { q: 'Quel budget prévoir pour un séminaire d\'une journée ?', a: 'Cela dépend du nombre de services. Un petit-déjeuner d\'accueil complet démarre à 6,90 € HT par personne, un plateau repas à 28,90 € HT, et une pause de l\'après-midi se situe entre les deux. Sur une journée complète avec accueil, deux pauses et déjeuner, demandez un devis : nous le chiffrons service par service pour que vous puissiez arbitrer.' },
      { q: 'Combien de viennoiseries et de café prévoir sur un séminaire ?', a: 'Comptez 2 viennoiseries par personne à l\'accueil, contre 1,5 sur un petit-déjeuner de bureau classique : la journée est longue. Sur le café, un thermos couvre 6 à 8 tasses, soit 4 thermos pour 30 participants. C\'est le poste le plus souvent sous-estimé.' },
      { q: 'Livrez-vous pour des groupes de plus de 50 personnes ?', a: 'Oui, nous gérons des commandes jusqu\'à 500 personnes. Pour les groupes importants, nous recommandons un devis personnalisé pour garantir la disponibilité des produits. Au-delà de 60 participants, nous passons les boissons chaudes en jarres de 10 litres plutôt qu\'en thermos.' },
      { q: 'Peut-on prévoir deux pauses dans la journée (matin + après-midi) ?', a: 'Absolument. Nous pouvons organiser deux livraisons séparées ou une livraison unique avec deux lots distincts, selon la configuration de votre lieu de séminaire.' },
      { q: 'Livrez-vous dans les hôtels avec service traiteur interne ?', a: 'Oui, sous réserve de validation avec l\'hôtel. Nous recommandons de vérifier en amont avec votre contact hôtel. Nous livrons régulièrement dans des hôtels et centres de conférence d\'Île-de-France.' },
    ],
  },
  {
    slug: 'accueil-client',
    heroImg: '/hero-coffrets-cadeaux.webp',
    name: 'Accueil & Réception client',
    navLabel: 'Accueil & Réception client',
    heroTitle: 'Traiteur Accueil Client à Paris',
    heroDescription: 'La première impression se construit dans les détails. L\'Écrin Traiteur livre des sélections premium pour vos accueils clients, réceptions et rendez-vous d\'affaires.',
    piliers: [
      { icon: '✦', title: 'Image de marque renforcée', text: 'Des produits qui parlent de vous : artisanaux, sélectionnés, mémorables.' },
      { icon: '✦', title: 'Présentation soignée', text: 'Chaque produit arrive dans un conditionnement adapté à une mise en scène rapide.' },
      { icon: '✦', title: 'Flexibilité totale', text: 'De 2 à 20 personnes, avec ou sans préavis, pour des rendez-vous réguliers ou ponctuels.' },
    ],
    seoTitle: 'Traiteur accueil client Paris',
    seoDescription: 'Impressionnez vos clients dès le matin. L\'Écrin Traiteur livre des sélections premium pour vos accueils et réceptions : macarons, viennoiseries, coffrets artisanaux à Paris.',
    seoArticle: `
      <p>Recevoir un client dans vos locaux, c'est une opportunité de renforcer la relation commerciale par les détails. Un <strong>accueil client réussi</strong> commence bien avant la réunion, dès que votre interlocuteur entre dans la salle et voit ce qui l'attend sur la table.</p>
      <h2>Traiteur accueil client Paris, des produits qui marquent les esprits</h2>
      <p>Pour un accueil client, la sélection compte. Nos <strong>macarons Pierre Morel</strong> sont reconnus par les connaisseurs. Nos <strong>madeleines Mado Paris</strong> surprennent par leur moelleux. Nos <strong>cakes maison</strong> sont une alternative élégante aux viennoiseries classiques. Des produits qui déclenchent une conversation, pas seulement une dégustation.</p>
      <h2>Livraison accueil client en bureau parisien, 6h30 à 10h</h2>
      <p>Nos créneaux de livraison couvrent les horaires matinaux les plus courants. Que votre rendez-vous démarre à 8h30 ou à 10h, nous nous adaptons. Pour les réceptions en fin de matinée, nous pouvons également livrer plus tard sur demande.</p>
      <h2>Un traiteur qui comprend les enjeux de la relation client</h2>
      <p>L'accueil d'un client important n'est pas le moment de laisser place à l'incertitude. Chez L'Écrin Traiteur, notre modèle repose sur la fiabilité : commande passée la veille avant <strong>14h</strong>, livraison confirmée, produits frais préparés le matin même. Vous vous concentrez sur votre réunion, nous gérons le reste.</p>
      <h2>Des produits artisanaux identifiés, parce que vos clients le remarquent</h2>
      <p>Un client averti reconnaît un macaron <strong>Pierre Morel</strong>. Un connaisseur goûte la différence d'une madeleine artisanale <strong>Mado Paris</strong>. Un jus <strong>Alain Milliat</strong> sur la table dit quelque chose de votre exigence. Ces produits ne sont pas anonymes, ils portent un nom, une histoire, une qualité reconnaissable. C'est précisément ce qui transforme un accueil en message de marque.</p>
      <h2>Commandez la veille avant 14h, livré dès 6h30 à votre adresse exacte</h2>
      <p>Immeuble sécurisé, réception filtrée, badge d'accès requis, L'Écrin Traiteur connaît les contraintes des bureaux parisiens. Communiquez votre adresse exacte, vos instructions d'accès et votre heure souhaitée : nous livrons en main propre, à l'étage si nécessaire, avant que votre client arrive.</p>
    `,
    testimonial: {
      quote: "Pour nos événements clients et nos journées portes ouvertes, j'ai fait appel à L'Écrin à plusieurs reprises et l'expérience est toujours parfaite.",
      author: "Sara Molto",
      role: "Responsable marketing",
      company: "Stellantis",
    },
    linkedProducts: ['macarons', 'madeleines-10', 'cake-pistache', 'viennoiseries-duo'],
    linkedCities: ['paris', 'neuilly-sur-seine', 'la-defense', 'boulogne-billancourt', 'levallois-perret', 'clichy'],
    faq: [
      { q: 'Peut-on passer une commande la veille pour un accueil client le lendemain matin ?', a: 'Oui, c\'est notre modèle standard. Commandez avant 14h la veille, livraison dès 6h30 le lendemain à l\'heure choisie.' },
      { q: 'Quels produits recommandez-vous pour impressionner un client important ?', a: 'Nous recommandons une combinaison macarons Pierre Morel + viennoiseries pur beurre + jus premium. Cette sélection offre visuellement et gustativement le meilleur rapport qualité / impact.' },
    ],
  },
  {
    slug: 'journee-formation',
    heroImg: '/hero-pauses-gourmandes.webp',
    name: 'Journée de formation',
    navLabel: 'Journées de formation',
    heroTitle: 'Traiteur Journée de formation entreprise Paris',
    heroDescription: 'Une journée de formation réussie, c\'est aussi une bonne gestion de l\'énergie des participants. L\'Écrin Traiteur livre vos pauses artisanales pour maintenir la concentration du matin au soir.',
    piliers: [
      { icon: '✦', title: 'Énergie toute la journée', text: 'Mix sucré / salé, fruits frais, des produits qui nourrissent sans alourdir.' },
      { icon: '✦', title: 'Adapté aux régimes variés', text: 'Produits bio, vegan, sans gluten disponibles selon vos besoins.' },
      { icon: '✦', title: 'Logistique simplifiée', text: 'Une commande unique, une livraison, vous gérez votre programme, on gère les pauses.' },
    ],
    seoTitle: 'Traiteur journée de formation Paris',
    seoDescription: 'Pauses café matin et après-midi pour vos journées de formation. L\'Écrin Traiteur livre à Paris et en IDF : viennoiseries, fruits, snacks artisanaux dès 6h30.',
    seoArticle: `
      <p>Une <strong>journée de formation</strong> sollicite les participants de 9h à 17h ou 18h. La qualité des pauses influence directement le niveau d'attention et d'engagement des stagiaires. Un mauvais café ou une pause trop légère, et vous perdez votre auditoire avant la reprise.</p>
      <h2>Traiteur formation Paris, des pauses pensées pour la concentration</h2>
      <p>Pour les journées de formation, nous recommandons des produits légers et variés : <strong>brochettes de fruits frais</strong> pour la vitalité, <strong>mini navettes salées</strong> pour ceux qui ne supportent pas le sucré en continu, <strong>cookies artisanaux</strong> pour la pause de l'après-midi. Des produits énergisants sans alourdir.</p>
      <h2>Livraison traiteur formation, organismes de formation, entreprises et centres de conférence</h2>
      <p>Que votre formation se tienne dans vos locaux, dans un espace de coworking ou dans un centre de formation dédié, L'Écrin Traiteur livre partout en Île-de-France. Nous gérons la logistique pour que vous puissiez vous concentrer sur le contenu pédagogique.</p>
      <h2>Comment organiser les pauses d'une journée de formation avec L'Écrin Traiteur</h2>
      <p>Commandez la veille avant <strong>14h</strong>. Indiquez le nombre de participants, vos contraintes alimentaires éventuelles et vos horaires de pauses. Nous livrons en une fois avec les produits séparés par moment (pause matin / pause après-midi) pour faciliter votre organisation.</p>
      <h2>Pause matin ET pause après-midi, une seule commande, tout est prévu</h2>
      <p>Pour les journées de formation complètes, nous emballons les deux lots séparément et les étiquettons clairement : <strong>pause 10h30</strong> / <strong>pause 15h</strong>. Vous n'avez qu'une seule livraison à réceptionner, un seul bon de commande. Le reste de la logistique, c'est nous. Vous gérez votre programme pédagogique, nous gérons l'énergie de vos participants.</p>
      <h2>Produits adaptés à toute la journée, légers le matin, revigorants l'après-midi</h2>
      <p>Une pause matin réussie mise sur les viennoiseries et les pâtisseries fines. Une pause après-midi efficace joue sur la fraîcheur : brochettes de fruits, cookies artisanaux, jus sans sucre ajouté. Nous adaptons la composition des deux pauses à la durée et au rythme de votre formation, sur simple indication lors de votre commande.</p>
    `,
    linkedProducts: ['brochettes-fruits', 'navettes-salees', 'cookies', 'viennoiseries-melangees'],
    linkedCities: ['paris', 'la-defense', 'boulogne-billancourt', 'massy', 'velizy-villacoublay', 'saint-denis'],
    faq: [
      { q: 'Livrez-vous pour une pause matin ET une pause après-midi le même jour ?', a: 'Oui. Nous pouvons effectuer deux livraisons distinctes ou une livraison unique avec deux lots clairement séparés et étiquetés pour faciliter votre organisation.' },
      { q: 'Avez-vous des produits sans gluten ou vegan pour les formations ?', a: 'Oui, nous proposons plusieurs produits adaptés : brochettes de fruits (vegan), compotes maison (vegan), et certains cakes sans gluten sur demande. Précisez vos contraintes lors de la commande.' },
    ],
  },
  {
    slug: 'team-building',
    heroImg: '/hero-a-partager.webp',
    name: 'Team Building & Cohésion',
    navLabel: 'Team Building & Cohésion',
    heroTitle: 'Traiteur Team Building Paris & Île-de-France',
    heroDescription: 'Commencer ou terminer une journée de cohésion autour d\'un petit-déjeuner artisanal partagé, c\'est déjà créer du lien. L\'Écrin Traiteur livre dans toute l\'IDF pour vos événements d\'équipe.',
    piliers: [
      { icon: '✦', title: 'Convivialité avant tout', text: 'Des produits faits pour être partagés, chouquettes, crêpes, brochettes, cookies.' },
      { icon: '✦', title: 'Pour toutes les tailles d\'équipe', text: 'De 5 à 500 personnes, nous adaptons les quantités et le format.' },
      { icon: '✦', title: 'N\'importe où en IDF', text: 'Karting, salle événementielle, parc, locaux, on livre là où vous faites votre team building.' },
    ],
    seoTitle: 'Traiteur team building Paris IDF',
    seoDescription: 'Renforcez la cohésion d\'équipe autour d\'un petit-déjeuner artisanal. L\'Écrin Traiteur livre à Paris et en IDF pour vos événements team building et journées cohésion dès 6h30.',
    seoArticle: `
      <p>Le <strong>team building</strong> est un moment rare où l'équipe sort du quotidien pour se retrouver autrement. La qualité des moments partagés, y compris autour de la table, contribue à la réussite de l'événement et à la mémoire collective qu'il laisse.</p>
      <h2>Traiteur team building Paris, des produits qui créent des moments</h2>
      <p>Pour une journée de cohésion, nous privilégions les produits faits pour être partagés : les <strong>chouquettes</strong> pour leur aspect joyeux et généreux, les <strong>crêpes maison</strong> pour leur côté festif, les <strong>brochettes de fruits</strong> pour la fraîcheur, les <strong>cookies artisanaux</strong> pour la pause conviviale. Des produits qui déclenchent des sourires.</p>
      <h2>Livraison traiteur team building, lieux atypiques et espaces événementiels</h2>
      <p>Un team building se fait rarement au bureau. Karting, espace de coworking atypique, parc d'entreprise, salle de séminaire en dehors de Paris, L'Écrin Traiteur livre dans toute l'Île-de-France, y compris dans des lieux moins standards. Précisez votre adresse et nous vous confirmons la faisabilité.</p>
      <h2>Comment organiser le petit-déjeuner de votre journée team building</h2>
      <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30. Pour les événements avec des contraintes de lieu particulières, n'hésitez pas à nous contacter en amont pour valider la logistique. Un devis personnalisé est disponible pour les groupes de plus de 30 personnes.</p>
      <h2>Karting, forêt, espace atypique, L'Écrin Traiteur livre partout en Île-de-France</h2>
      <p>Le team building se passe rarement au bureau. Parc d'entreprise, gîte de séminaire, salle événementielle de banlieue, karting de Buchelay, L'Écrin Traiteur livre dans toute l'Île-de-France, y compris dans les lieux les moins standards. Précisez l'adresse exacte et les éventuelles contraintes d'accès lors de la commande. Nous validons la faisabilité sous 24h.</p>
      <h2>Des produits qui créent de la complicité, pas juste de la nourriture</h2>
      <p>Les <strong>chouquettes</strong> se passent de main en main. Les <strong>cookies Laura Todd</strong> déclenchent des conversations. Une <strong>brochette de fruits</strong> colorée attire l'attention. Ces produits sont pensés pour être partagés, commentés, mémorisés. C'est la différence entre un plateau "à consommer" et une sélection artisanale qui fait partie du souvenir de la journée.</p>
    `,
    linkedProducts: ['chouquettes', 'crepes', 'cookies', 'brochettes-fruits'],
    linkedCities: ['paris', 'boulogne-billancourt', 'versailles', 'saint-cloud', 'rueil-malmaison', 'vincennes'],
    faq: [
      { q: 'Livrez-vous dans des lieux de team building hors des bureaux habituels ?', a: 'Oui, nous livrons dans toute l\'Île-de-France, y compris dans des lieux atypiques. Précisez l\'adresse exacte lors de la commande et nous confirmons la faisabilité.' },
      { q: 'Livrez-vous pour un team building en semaine uniquement ?', a: 'Nos livraisons sont assurées du lundi au vendredi. Pour un événement team building en semaine, commandez avant 14h la veille. Pour un projet le week-end, contactez-nous à l\'avance pour étudier votre demande.' },
    ],
  },
  {
    slug: 'gouter-entreprise',
    heroImg: '/hero-pauses-gourmandes.webp',
    name: 'Goûter d\'entreprise',
    navLabel: 'Goûter d\'entreprise',
    heroTitle: 'Traiteur Goûter d\'entreprise à Paris',
    heroDescription: 'La pause de 16h est le moment de relâche le plus attendu. L\'Écrin Traiteur livre vos goûters artisanaux, pâtisseries, fruits, mignardises, directement dans vos bureaux à Paris et en IDF.',
    piliers: [
      { icon: '✦', title: 'Le bon moment, le bon produit', text: 'Cookies, financiers, macarons, brochettes de fruits, une sélection pensée pour la pause de l\'après-midi.' },
      { icon: '✦', title: 'Pour petites et grandes équipes', text: 'De 5 à 500 personnes, livraison adaptée en quantité et en conditionnement.' },
      { icon: '✦', title: 'Livraison à l\'heure de votre choix', text: 'Commandez avant 14h la veille, livraison à 15h30, 16h ou selon vos horaires.' },
    ],
    seoTitle: 'Goûter d\'entreprise Paris',
    seoDescription: 'Goûter d\'entreprise livré à Paris : cookies, financiers, macarons, brochettes de fruits artisanaux. L\'Écrin Traiteur livre dans vos bureaux dès 6h30 et à l\'heure de votre choix.',
    seoArticle: `
      <p>Le <strong>goûter d'entreprise</strong> est la pause la plus sous-estimée de la journée. Après 6 à 7 heures de travail, l'énergie chute et la concentration aussi. Un goûter bien pensé relance l'équipe pour finir la journée dans les meilleures conditions, sans la lourdeur d'un repas complet.</p>

      <h2>Goûter en entreprise, pourquoi c'est le format qui fédère le plus</h2>
      <p>Contrairement au petit-déjeuner (souvent individuel) ou au déjeuner (parfois pris à l'extérieur), le <strong>goûter d'équipe</strong> est un moment collectif par nature. On sort de son bureau, on se retrouve autour de la table, on discute sans l'ordre du jour d'une réunion. Pour beaucoup de managers, c'est devenu un rituel hebdomadaire qui remplace le "team building" formel.</p>

      <h2>Quels produits pour un goûter d'entreprise réussi ?</h2>
      <p>Les produits qui fonctionnent le mieux pour un <strong>goûter au bureau</strong> sont ceux qui se mangent en deux bouchées, sans vaisselle contraignante :</p>
      <ul>
        <li><strong>Macarons Pierre Morel</strong>, une pièce maîtresse du goûter premium. Colorés, visuellement attractifs, ils créent un moment.</li>
        <li><strong>Cookies artisanaux</strong>, généreux, parfumés (chocolat, noisette, caramel beurre salé), ils sont universellement appréciés.</li>
        <li><strong>Financiers Mado Paris</strong>, légers, moelleux, déclinés en plusieurs parfums. Idéaux pour ceux qui préfèrent le délicat au gourmand.</li>
        <li><strong>Brochettes de fruits de saison</strong>, la touche de fraîcheur qui équilibre le sucré et convient à tous les régimes.</li>
        <li><strong>Chouquettes maison</strong>, festives et légères, elles rappellent la boulangerie du dimanche matin.</li>
      </ul>

      <h2>Budget goûter d'entreprise Paris, combien prévoir ?</h2>
      <p>Comptez entre <strong>6€ et 15€ par personne HT</strong> selon les produits choisis. Un goûter standard (cookies + chouquettes + eau) tourne autour de 6 à 8€/personne. Un goûter premium (macarons + financiers + fruits + boissons) monte à 12 à 15€/personne. Pour des commandes régulières, L'Écrin Traiteur propose des tarifs préférentiels sur volume.</p>

      <h2>Traiteur goûter entreprise Paris, comment commander ?</h2>
      <p>Commandez avant <strong>14h la veille</strong>. Choisissez votre heure de livraison, nous livrons dès 6h30 et jusqu'en fin d'après-midi pour les goûters de 15h30 ou 16h. Précisez le nombre de personnes, vos contraintes alimentaires (sans gluten, halal, vegan) et votre adresse exacte. Livraison dans tout Paris et l'Île-de-France, du lundi au vendredi.</p>
    `,
    linkedProducts: ['macarons', 'cookies', 'brochettes-fruits', 'chouquettes', 'madeleines-20'],
    linkedCities: ['paris', 'la-defense', 'boulogne-billancourt', 'neuilly-sur-seine', 'levallois-perret', 'issy-les-moulineaux'],
    faq: [
      { q: 'Livrez-vous pour un goûter d\'entreprise après 15h ?', a: 'Oui, nous adaptons l\'heure de livraison à vos besoins. Précisez l\'heure souhaitée (15h30, 16h, 17h) lors de la commande. Commande avant 14h la veille.' },
      { q: 'Quels produits recommandez-vous pour un goûter d\'équipe de 20 personnes ?', a: 'Pour 20 personnes, nous recommandons : 1 plateau de macarons (20 pièces), 20 cookies artisanaux, 2 brochettes de fruits (ou 1 corbeille de saison) et des boissons froides. Budget indicatif : 10 à 12€/personne HT.' },
      { q: 'Proposez-vous des goûters sans gluten ou vegan ?', a: 'Oui. Les brochettes de fruits et la corbeille de fruits sont vegan et sans gluten. Certains cakes et financiers sont disponibles sans gluten sur demande. Précisez vos contraintes à la commande.' },
      { q: 'Peut-on organiser un goûter d\'entreprise régulier chaque semaine ?', a: 'Absolument. Plusieurs de nos clients organisent un goûter d\'équipe hebdomadaire. Pour les commandes récurrentes, contactez-nous pour un tarif préférentiel et une organisation simplifiée.' },
    ],
  },
  {
    slug: 'petit-dejeuner-entreprise',
    heroImg: '/hero-petitdej.webp',
    name: 'Petit-déjeuner d\'entreprise',
    navLabel: 'Petit-déjeuner d\'entreprise',
    heroTitle: 'Traiteur Petit-déjeuner d\'entreprise à Paris',
    heroDescription: 'Un petit-déjeuner d\'équipe, un accueil de rentrée, une réunion hebdomadaire, L\'Écrin Traiteur livre des viennoiseries et pâtisseries artisanales fraîches chaque matin, dans toute l\'Île-de-France.',
    piliers: [
      { icon: '✦', title: 'Fraîcheur du jour', text: 'Viennoiseries et pâtisseries préparées chaque matin par nos artisans boulangers, jamais surgelées.' },
      { icon: '✦', title: 'Simple à répéter', text: 'Commande récurrente hebdomadaire ou ponctuelle, même qualité à chaque livraison.' },
      { icon: '✦', title: 'Livré dès 6h30', text: 'Prêt avant l\'arrivée de vos équipes, partout à Paris et en Île-de-France.' },
    ],
    seoTitle: 'Petit-déjeuner d\'entreprise Paris',
    seoDescription: 'Traiteur petit-déjeuner d\'entreprise à Paris et en Île-de-France. Viennoiseries, madeleines artisanales et jus artisanaux livrés dès 6h30, commande avant 14h la veille.',
    seoArticle: `
      <p>Le <strong>petit-déjeuner d\'entreprise</strong> est souvent le premier moment collectif de la journée, accueil de nouveaux arrivants, réunion d\'équipe hebdomadaire, ou simplement un rituel qui donne le ton. Un bon petit-déjeuner artisanal, c\'est un signal simple mais efficace envoyé à vos collaborateurs.</p>
      <h2>Traiteur petit-déjeuner Paris, des produits reconnaissables</h2>
      <p>Notre <strong>plateau duo de viennoiseries</strong> (croissants et pains au chocolat pur beurre) reste la valeur sûre. Pour varier, nos <strong>chouquettes</strong> et nos <strong>madeleines Mado Paris</strong> apportent une touche plus gourmande, tandis qu\'un <strong>cake maison</strong> complète idéalement une table de petit-déjeuner.</p>
      <h2>Livraison petit-déjeuner entreprise, Paris et Île-de-France dès 6h30</h2>
      <p>Que ce soit pour 6 personnes ou 60, nous livrons directement dans vos locaux, prêt à être posé sur la table de réunion ou l\'espace de pause. Commandez avant <strong>14h la veille</strong> pour une livraison dès 6h30 le lendemain.</p>
      <h2>Un rituel simple à mettre en place, ponctuel ou récurrent</h2>
      <p>Certaines équipes commandent un petit-déjeuner artisanal chaque lundi matin, d\'autres ponctuellement pour un accueil ou un lancement de projet. Dans les deux cas, la commande est la même : simple, sans engagement de volume, avec la même qualité à chaque fois.</p>
    `,
    linkedProducts: ['viennoiseries-duo', 'chouquettes', 'madeleines-10', 'cake-poire'],
    linkedCities: ['paris', 'la-defense', 'boulogne-billancourt', 'neuilly-sur-seine', 'issy-les-moulineaux', 'levallois-perret'],
    faq: [
      { q: 'Quelle quantité prévoir pour un petit-déjeuner d\'équipe ?', a: 'En moyenne, comptez 2 à 3 pièces de viennoiserie par personne, complétées par une boisson chaude ou un jus. Nous vous conseillons selon votre effectif exact lors de la commande.' },
      { q: 'Peut-on mettre en place une commande récurrente chaque semaine ?', a: 'Oui, c\'est une demande fréquente. Contactez-nous pour organiser une commande hebdomadaire ou mensuelle avec un processus simplifié.' },
    ],
  },
  {
    slug: 'dejeuner-entreprise',
    heroImg: '/hero-plateau-signature.webp',
    name: 'Déjeuner d\'entreprise',
    navLabel: 'Déjeuner d\'entreprise',
    heroTitle: 'Traiteur Déjeuner d\'entreprise à Paris',
    heroDescription: 'Réunion qui déborde sur le midi, journée de travail intense, repas d\'équipe improvisé, L\'Écrin Traiteur livre des plateaux repas complets et équilibrés directement dans vos bureaux.',
    piliers: [
      { icon: '✦', title: 'Repas complet', text: 'Entrée, plat, dessert et pain dans un plateau individuel prêt à servir.' },
      { icon: '✦', title: 'Pour tous les goûts', text: 'Végétarien, poulet, viande, poisson, une collection variée pour toute l\'équipe.' },
      { icon: '✦', title: 'Livré à l\'heure du déjeuner', text: 'Créneau horaire précis, directement en salle ou en espace de restauration.' },
    ],
    seoTitle: 'Déjeuner d\'entreprise et plateaux repas',
    seoDescription: 'Traiteur déjeuner d\'entreprise à Paris : plateaux repas individuels complets à partir de 28,90 € HT, livrés en salle à l\'heure choisie. Devis sous 24h.',
    productCategory: 'plateaux-repas',
    seoArticle: `
      <p>Certains jours, sortir déjeuner n\'est pas une option : une réunion qui s\'éternise, une deadline serrée, une journée de formation. Le <strong>déjeuner d\'entreprise</strong> livré directement au bureau permet à l\'équipe de rester ensemble et concentrée, sans que personne ne perde quarante minutes à chercher une table.</p>

      <h2>Nos plateaux repas pour le déjeuner en entreprise</h2>
      <p>Chaque plateau est individuel et complet : entrée, plat, dessert et pain, filmé et étiqueté. Deux collections, selon le niveau du déjeuner.</p>
      <p>La collection <strong>Essentiel</strong>, à partir de <strong>28,90 € HT</strong>, couvre les déjeuners de travail réguliers : <strong>La Romaine</strong> et <strong>La Champêtre</strong> au poulet, <strong>La Boréale</strong> au poisson, <strong>La Solaire</strong>, <strong>La Provençale</strong> et <strong>La Potagère</strong> en végétarien.</p>
      <p>La collection <strong>Signature</strong>, à partir de <strong>33,90 € HT</strong>, est celle des déjeuners où vous recevez : <strong>Le Riviera</strong> au poisson, <strong>La Parisienne</strong> et <strong>La Souveraine</strong> en viande, <strong>La Dolce Vita</strong>, <strong>La Levantine</strong> et <strong>La Divine</strong> en végétarien. Le détail des compositions est sur la page <a href="/creations/plateaux-repas">plateaux repas</a>.</p>

      <h2>Combien de plateaux commander, et lesquels ?</h2>
      <p>Un plateau par personne, c\'est la règle simple. Pour la répartition, le repère que nous donnons à nos clients : comptez environ <strong>un tiers de végétarien</strong> sur une équipe dont vous ne connaissez pas les préférences. C\'est presque toujours la bonne proportion, et cela évite le plateau qui reste sur la table.</p>
      <p>Vous pouvez mélanger librement les collections et les catégories dans une même commande : indiquez simplement la répartition au moment du devis.</p>

      <h2>Livraison en salle, à l\'heure que vous fixez</h2>
      <p>Vous donnez une heure, pas une plage horaire. Nous livrons directement en salle de réunion ou en espace de restauration, plateaux prêts à poser devant chaque participant. Aucun service à organiser, aucune vaisselle à gérer, rien à dresser. Commande avant <strong>14h la veille</strong>, livraison à Paris et en Île-de-France.</p>

      <h2>Déjeuner de réunion, formation, comité de direction</h2>
      <p>Le plateau individuel est le format qui préserve le cadre de travail : chacun reçoit le sien, personne ne se lève, la réunion continue. C\'est ce qui en fait le standard des journées de formation, des déjeuners de closing et des <a href="/occasions/petit-dejeuner-codir">réunions de direction</a>.</p>

      <h2>Toute la carte halal et sans porc</h2>
      <p>Par défaut, sur l\'ensemble des plateaux, sans supplément ni commande séparée à gérer. Les options véganes et sans gluten se précisent au devis, avec les effectifs concernés.</p>

      <h2>Commander vos déjeuners d\'entreprise</h2>
      <p>Minimum de commande 50 € HT, livraison 29 € HT sur Paris et les communes proches, facturation entreprise avec TVA. <a href="/devis">Demandez votre devis</a>, réponse sous 24h.</p>
    `,
    linkedProducts: ['e5', 's7', 'e2', 's1'],
    linkedCities: ['paris', 'la-defense', 'boulogne-billancourt', 'neuilly-sur-seine', 'issy-les-moulineaux', 'courbevoie'],
    faq: [
      { q: 'Combien coûte un plateau repas d\'entreprise ?', a: 'La collection Essentiel démarre à 28,90 € HT par personne et la collection Signature à 33,90 € HT, entrée, plat, dessert et pain compris. S\'ajoute la livraison, 29 € HT sur Paris et les communes proches. Le minimum de commande est de 50 € HT.' },
      { q: 'Combien de plateaux végétariens prévoir pour une équipe ?', a: 'Comptez environ un tiers de plateaux végétariens sur une équipe dont vous ne connaissez pas les préférences. C\'est presque toujours la bonne proportion, et cela évite les plateaux qui restent sur la table.' },
      { q: 'Peut-on mélanger plusieurs plateaux différents dans une même commande ?', a: 'Oui, c\'est même recommandé pour satisfaire tous les goûts. Vous pouvez mélanger les collections Essentiel et Signature et les catégories (végétarien, poulet, viande, poisson) : précisez la répartition souhaitée lors de votre commande.' },
      { q: 'Livrez-vous à une heure précise pour le déjeuner ?', a: 'Oui, vous donnez une heure et non une plage horaire. Nous livrons à l\'heure convenue, directement en salle de réunion ou en espace de restauration, plateaux prêts à poser devant chaque participant.' },
    ],
  },
  {
    slug: 'cocktail-entreprise',
    heroImg: '/hero-cocktail.webp',
    name: 'Cocktail d\'entreprise',
    navLabel: 'Cocktail d\'entreprise',
    heroTitle: 'Traiteur Cocktail d\'entreprise à Paris',
    heroDescription: 'Lancement de produit, pot de départ, réception de fin d\'année, L\'Écrin Traiteur livre des formules cocktail salées et sucrées, prêtes à partager entre collègues ou avec vos invités.',
    piliers: [
      { icon: '✦', title: 'Salé et sucré équilibrés', text: 'Chaque formule mêle pièces salées et douceurs sucrées façonnées à la main.' },
      { icon: '✦', title: '3 formats selon l\'occasion', text: 'Classique, Signature ou Prestige, du pot informel à la réception soignée.' },
      { icon: '✦', title: 'Prêt à servir', text: 'Livré en plateau, sans préparation ni dressage de votre côté.' },
    ],
    seoTitle: 'Cocktail d\'entreprise Paris',
    seoDescription: 'Traiteur cocktail d\'entreprise à Paris : formules Classique, Signature et Prestige, pièces salées et sucrées artisanales, livraison en Île-de-France.',
    productCategory: 'cocktails',
    seoArticle: `
      <p>Un <strong>cocktail d\'entreprise</strong> marque un moment particulier, lancement, pot de départ, clôture d\'année. La sélection de pièces servies contribue directement à l\'ambiance et à l\'image que vous renvoyez à vos invités ou à vos équipes.</p>
      <h2>Nos formules cocktail pour vos événements d\'entreprise</h2>
      <p>La formule <strong>Cocktail</strong> (8 pièces/personne) convient aux afterworks et pauses conviviales. La formule <strong>Signature</strong> (12 pièces), la plus choisie, propose une sélection raffinée entre terre et mer. La formule <strong>Prestige</strong> (16 pièces) est pensée pour les réceptions les plus soignées.</p>
      <h2>Livraison cocktail d\'entreprise, Paris et Île-de-France</h2>
      <p>Précisez le nombre de participants et l\'heure de votre événement : nous livrons vos plateaux prêts à être disposés, sans dressage nécessaire de votre côté. Commande avant <strong>14h la veille</strong>.</p>
      <h2>Des pièces façonnées à la main, salées et sucrées</h2>
      <p>Chaque formule associe des pièces salées (samoussas, verrines, bruchettas, brochettes) et des pièces sucrées (tartelettes, mousse chocolat, cookies) pour un équilibre pensé du début à la fin de votre réception.</p>
    `,
    linkedProducts: ['classique', 'signature', 'prestige'],
    linkedCities: ['paris', 'la-defense', 'boulogne-billancourt', 'neuilly-sur-seine', 'versailles', 'saint-cloud'],
    faq: [
      { q: 'Quelle formule choisir pour un cocktail de 30 personnes ?', a: 'Pour un cocktail de fin de journée informel, la formule Classique (8 pièces/personne) suffit. Pour une réception plus soignée avec des invités externes, la formule Signature ou Prestige est recommandée.' },
      { q: 'Peut-on personnaliser la composition d\'une formule cocktail ?', a: 'Nos formules sont conçues pour un équilibre optimal salé/sucré. Pour une demande spécifique (allergies, préférences), contactez-nous avant la commande.' },
    ],
  },
  {
    slug: 'afterwork-entreprise',
    heroImg: '/hero-cocktail.webp',
    name: 'Afterwork',
    navLabel: 'Afterwork',
    heroTitle: 'Traiteur Afterwork d\'entreprise à Paris',
    heroDescription: 'Fin de semaine, fin de projet, simple envie de se retrouver autrement, L\'Écrin Traiteur livre des formules cocktail conviviales pour vos afterworks d\'équipe, sans organisation de votre côté.',
    piliers: [
      { icon: '✦', title: 'Format décontracté', text: 'Des pièces à picorer, pensées pour un moment convivial entre collègues.' },
      { icon: '✦', title: 'Prêt en quelques clics', text: 'Une commande simple, sans minimum de participants, pour un afterwork improvisé ou planifié.' },
      { icon: '✦', title: 'Livré à l\'heure du pot', text: 'Livraison en fin de journée, à l\'heure qui vous arrange.' },
    ],
    seoTitle: 'Traiteur afterwork entreprise Paris',
    seoDescription: 'Traiteur afterwork d\'entreprise à Paris : 8 à 16 pièces par personne, livrées en fin de journée, prêtes à poser. Sans minimum de participants, devis sous 24h.',
    productCategory: 'cocktails',
    seoArticle: `
      <p>L\'<strong>afterwork</strong> s\'est installé dans les habitudes des entreprises parisiennes : une fin de projet, une clôture de trimestre, l\'arrivée d\'une nouvelle recrue, ou simplement une semaine dense qui mérite qu\'on se retrouve autrement. L\'Écrin Traiteur livre les pièces salées et sucrées dans vos bureaux à Paris et en Île-de-France, prêtes à poser sur la table.</p>

      <h2>Traiteur afterwork à Paris : ce que nous livrons</h2>
      <p>Trois formats, selon le ton que vous voulez donner à la soirée. <strong>L\'Invitation</strong> (8 pièces par personne, 29,90 € HT) couvre l\'afterwork classique entre collègues : samoussa curry végétarien, mini quiche de saison, bruschetta tomates confites, brochette yakitori, et deux pièces sucrées pour finir. <strong>La Réception</strong> (12 pièces, 39,90 € HT) ajoute des bouchées terre et mer, pour un after work où vous recevez des invités externes. <strong>La Célébration</strong> (16 pièces, 51,90 € HT) remplace le dîner. Le détail des compositions est sur notre page <a href="/creations/cocktails">formules cocktail</a>.</p>

      <h2>Combien de pièces prévoir pour un afterwork d\'entreprise ?</h2>
      <p>Le repère que nous donnons à nos clients : <strong>8 pièces par personne</strong> pour un afterwork d\'une heure et demie autour d\'un verre, <strong>12 pièces</strong> si l\'afterwork s\'étire au delà de deux heures ou remplace le dîner de vos équipes. Comptez large sur les pièces salées en début de soirée, elles partent deux fois plus vite que les sucrées. Nous détaillons ce calcul dans notre guide <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">combien de pièces cocktail par personne</a>.</p>

      <h2>Livraison en fin de journée, à l\'heure de votre pot</h2>
      <p>Vous indiquez l\'heure de votre afterwork, nous livrons juste avant. Les plateaux arrivent dressés, filmés, prêts à poser : personne dans votre équipe n\'a de mise en place à faire. Nous livrons Paris intra-muros et les Hauts-de-Seine, de La Défense à Boulogne-Billancourt en passant par Levallois et Neuilly. Commande avant <strong>14h la veille</strong>.</p>

      <h2>Afterwork, pot de départ, pot de bienvenue</h2>
      <p>Le format se prête à tout ce qui se fête debout, un verre à la main. Pour un pot de départ ou une arrivée, nous ajoutons souvent un gâteau à partager aux plateaux salés. Nous avons rassemblé les repères d\'organisation dans un guide dédié : <a href="/journal/traiteur-afterwork-pot-depart-entreprise-paris">organiser un afterwork ou un pot de départ en entreprise</a>.</p>

      <h2>Et les boissons ?</h2>
      <p>Nous livrons les jus Alain Milliat, les eaux et les gobelets avec les plateaux, dans la même commande. Si vous prévoyez du vin ou de la bière, vous les achetez de votre côté et nous nous occupons du reste : c\'est souvent la formule la plus simple.</p>

      <h2>Un afterwork pour dix comme pour soixante</h2>
      <p>Pas besoin d\'un événement d\'ampleur pour justifier un afterwork. Nous livrons pour une dizaine de collègues comme pour soixante. Minimum de commande 50 € HT, livraison 29 € HT sur Paris et les communes proches. Facturation entreprise et TVA sur demande, <a href="/devis">devis sous 24h</a>.</p>
    `,
    linkedProducts: ['classique', 'signature'],
    linkedCities: ['paris', 'la-defense', 'boulogne-billancourt', 'levallois-perret', 'neuilly-sur-seine', 'clichy'],
    faq: [
      { q: 'Combien coûte un traiteur afterwork à Paris ?', a: 'Comptez 29,90 € HT par personne pour la formule L\'Invitation (8 pièces), 39,90 € HT pour La Réception (12 pièces) et 51,90 € HT pour La Célébration (16 pièces). S\'ajoute la livraison, 29 € HT sur Paris et les communes proches. Pour un afterwork de 20 personnes en formule L\'Invitation, comptez donc environ 627 € HT. Devis sous 24h.' },
      { q: 'Combien de pièces par personne pour un afterwork ?', a: 'Comptez 8 pièces par personne pour un afterwork d\'une heure trente autour d\'un verre, et 12 pièces si l\'afterwork dure plus longtemps ou remplace le dîner. Les pièces salées partent environ deux fois plus vite que les sucrées en début de soirée.' },
      { q: 'À quelle heure livrez-vous un afterwork ?', a: 'Vous nous indiquez l\'heure de votre pot et nous livrons juste avant, en fin de journée. Les plateaux arrivent prêts à poser sur la table, sans dressage de votre côté.' },
      { q: 'Peut-on commander un afterwork pour le jour même ?', a: 'Nous recommandons de commander avant 14h la veille pour garantir la disponibilité complète. Pour une demande le jour même, contactez-nous, nous faisons notre possible selon notre stock disponible.' },
      { q: 'Y a-t-il un minimum de personnes pour un afterwork ?', a: 'Non, aucun minimum de participants. Nous livrons aussi bien pour une dizaine de collègues que pour un afterwork de plusieurs dizaines de personnes. Le minimum de commande est de 50 € HT.' },
    ],
  },
]

// FAQ universelle ajoutée à toutes les pages occasion
export const FAQ_DERNIERE_MINUTE = {
  q: 'Acceptez-vous les commandes de dernière minute ?',
  a: 'Oui. Nous acceptons les commandes jusqu\'à 10h le matin même sur notre sélection disponible du jour : plateaux de petits-déjeuners et plateaux repas en quantité limitée. Pour garantir votre sélection complète et vos produits préférés, nous recommandons de commander avant 14h la veille.',
}

export const getOccasionBySlug = (slug) => OCCASIONS.find(o => o.slug === slug)
