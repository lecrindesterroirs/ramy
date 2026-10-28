// Pages SEO "Pour quel événement", contenu éditorial, maillage interne
// Pas de tunnel d'achat, objectif : capter les requêtes longue traîne par usage

/* Pages d'occasion fusionnées dans une page de la carte (redirigées dans next.config.mjs) : le contenu reste ici, hors liste. */
const OCCASIONS_FUSIONNEES = ['cocktail-entreprise'] // 24/10/2026 : fusionnée dans /creations/cocktails
const OCCASIONS_TOUTES = [
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
    seoDescription: 'Plateaux repas pour vos CODIR et COMEX à Paris : repas complets artisanaux livrés directement en salle de réunion, à l\'heure. Devis sous 24h.',
    productCategory: 'plateaux-repas',
    seoArticle: `
      <p>Le <strong>repas CODIR</strong> ou <strong>COMEX</strong> n'est pas un déjeuner ordinaire. C'est le moment où se prennent les décisions stratégiques, où l'on accueille parfois des administrateurs extérieurs, où l'image de la direction se construit dans les détails. Le traiteur que vous choisissez pour ce moment parle de votre culture d'entreprise.</p>
      <h2>CODIR vs COMEX, deux formats, une même exigence</h2>
      <p>Un <strong>CODIR</strong> (Comité de Direction) rassemble généralement 8 à 15 personnes. Un <strong>COMEX</strong> (Comité Exécutif) est plus restreint : 5 à 8 membres maximum, souvent le cercle le plus stratégique de l'organisation. Dans les deux cas, un plateau repas complet, entrée, plat, dessert, pain, est la solution la plus professionnelle et la plus efficace.</p>
      <h2>Nos plateaux repas recommandés pour un CODIR ou COMEX</h2>
      <p>Nos collections sont conçues pour le repas assis en réunion : portion individuelle complète, conditionnement propre, présentation sobre et élégante. Pour une instance de direction, le plateau <strong>La Romaine</strong> (filet de poulet et pommes de terre rôties, {{ht:poulet}}) et le plateau <strong>La Boréale</strong> (céleri rémoulade, pommes de terre sautées et dés de saumon poêlés, {{ht:poisson}}) sont les plus simples à servir ; <strong>La Solaire</strong> et <strong>La Provençale</strong> couvrent les convives végétariens à {{ht:veg}}.</p>
      <h2>Traiteur plateaux repas CODIR & COMEX Paris, livraison directe en salle</h2>
      <p>Commandez avant <strong>14h la veille</strong>. Précisez votre heure de livraison, votre adresse exacte et le nombre de participants. Nous nous chargeons du reste, votre salle est prête avant que le premier membre n'arrive. Accès sécurisés, réceptions filtrées, tours de bureaux, nous connaissons les contraintes des sièges parisiens.</p>
      <h2>Repas assis ou plateau individuel, quelle formule pour votre réunion ?</h2>
      <p>Pour un CODIR ou COMEX, le <strong>plateau repas individuel</strong> est la solution idéale : chaque membre reçoit son plateau complet, sans se lever ni se servir. Cela préserve le cadre de la réunion et évite les interruptions. L'Écrin Traiteur livre des plateaux prêts à être posés directement devant chaque participant.</p>
      <h2>Artisans identifiés, des produits que vos membres de direction reconnaissent</h2>
      <p>Chaque collection L'Écrin est conçue autour d'un produit signature et d'un sourcing identifié. Des recettes élaborées en interne, des ingrédients choisis, une présentation soignée, c'est ce qui fait la différence entre un "plateau traiteur" et un <strong>repas artisanal</strong> dont on parle encore après la réunion.</p>
    `,
    testimonial: {
      quote: "Je n'ai eu que d'excellents retours sur tous les produits, yaourts, viennoiseries, jus de fruits, avec une mention spéciale pour les madeleines qui étaient succulentes, ainsi que le nectar de fraise qui a énormément plu.",
      author: "Claire Renard",
      role: "Office Manager, Direction numérique",
      company: "Le Monde",
    },
    linkedProducts: ['e2', 'e5', 'e1', 'e3'],
    linkedCities: ['paris', 'la-defense', 'neuilly-sur-seine', 'boulogne-billancourt', 'levallois-perret', 'issy-les-moulineaux'],
    faq: [
      { q: 'Quelle est la différence entre un CODIR et un COMEX pour votre prestation ?', a: 'Un COMEX est généralement plus restreint (5-8 personnes) et plus stratégique qu\'un CODIR (8-15 personnes). Dans les deux cas, nous livrons des plateaux repas individuels complets, entrée, plat, dessert, pain, directement en salle de réunion.' },
      { q: 'Pour combien de personnes livrez-vous un plateau repas CODIR ou COMEX ?', a: 'Nous livrons à partir de 2 personnes, sans minimum de participants. Un COMEX de 6 personnes comme un CODIR de 14 personnes sont des commandes standard pour nous. Le minimum de commande est de {{ht:min}}.' },
      { q: 'Quel budget prévoir pour un repas CODIR ou COMEX ?', a: 'Nos plateaux repas (entrée, plat, dessert et pain) coûtent {{ht:veg}} par personne en végétarien, {{ht:poulet}} au poulet et {{ht:poisson}} au saumon. Pour 10 personnes, comptez de {{htn:veg:10}} à {{htn:poisson:10}}, plus {{ht:liv}} de livraison à Paris et dans les communes proches.' },
      { q: 'Peut-on personnaliser la présentation pour un COMEX avec membres du conseil ?', a: 'Nos plateaux arrivent dans un conditionnement professionnel soigné, prêt à être servi directement. Pour une personnalisation plus poussée (carte nominative, message), contactez-nous pour un devis sur mesure.' },
    ],
  },
  {
    slug: 'seminaire-entreprise',
    heroImg: '/hero-petitdej.webp',
    name: 'Séminaire d\'entreprise',
    navLabel: 'Séminaires d\'entreprise',
    heroTitle: 'Traiteur pour séminaire à Paris : la journée complète',
    heroDescription: 'Accueil café, pauses, déjeuner et cocktail de clôture : L\'Écrin Traiteur livre toute la journée de séminaire sur une seule commande, à Paris et en Île-de-France, avec un budget par personne publié.',
    piliers: [
      { icon: '✦', title: 'Volume sans compromis', text: 'De 20 à 500 personnes, même niveau de qualité, même fraîcheur.' },
      { icon: '✦', title: 'Pauses matin & après-midi', text: 'Nous gérons les deux services si besoin, avec des produits adaptés à chaque moment.' },
      { icon: '✦', title: 'Livraison à l\'heure H', text: 'Vos pauses sont prêtes quand vos intervenants s\'arrêtent. Pas de retard, pas de stress.' },
    ],
    seoTitle: 'Traiteur séminaire Paris : journée complète et budget',
    seoDescription: 'Traiteur séminaire à Paris : accueil café, pauses, déjeuner et cocktail en une commande. Budget par personne, exemples pour 20, 50 et 100 personnes.',
    seoArticle: `
      <p>Un <strong>séminaire d'entreprise</strong> se joue sur la journée entière : l'accueil du matin, la pause de 11h, le déjeuner, celle de 16h. C'est quatre rendez-vous à caler, souvent dans un lieu que vous ne connaissez pas, avec un effectif qui bouge jusqu'à la dernière semaine. Nous livrons l'ensemble dans une seule commande, à <strong>Paris et en Île-de-France</strong>.</p>

      <h2>Hôtels, centres de conférence, locaux clients</h2>
      <p>Un séminaire se tient rarement chez vous. Hôtel à <a href="/traiteur/versailles">Versailles</a>, centre de conférence à <a href="/traiteur/la-defense">La Défense</a>, locaux d'un client à <a href="/traiteur/boulogne-billancourt">Boulogne-Billancourt</a> : chaque lieu a son entrée de livraison, son contact cuisine et son heure de montage. Certains hôtels ont un service traiteur interne et demandent une validation préalable, ce que nous obtenons en général sans difficulté à condition de s'y prendre à l'avance.</p>
      <p>Donnez-nous le nom du lieu et le contact sur place au moment du devis : c'est ce qui évite le livreur qui tourne autour d'un bâtiment pendant que la pause commence.</p>

      <h2>De 20 à 500 participants</h2>
      <p>Un séminaire de 20 personnes reçoit exactement les mêmes produits qu'un séminaire de 500 : nos viennoiseries et nos madeleines Mado Paris sont préparées le matin même quelle que soit la quantité. Au-delà de 60 participants, nous passons les boissons chaudes en jarres de 10 litres plutôt qu'en thermos, plus pratiques en libre service.</p>

      <h2>Quand commander</h2>
      <p>Pour un séminaire, prévoyez <strong>48h à l'avance</strong> sur les volumes importants, ou la veille avant 14h jusqu'à 50 personnes. Livraison dès 6h30, minimum {{ht:min}}, facturation entreprise avec TVA. Pour l'organisation complète d'une journée, nous avons rassemblé nos repères dans notre guide <a href="/journal/traiteur-seminaire-entreprise-paris">traiteur séminaire d'entreprise à Paris</a>. <a href="/devis">Demandez votre devis</a>, réponse sous 24h.</p>
    `,
    testimonial: {
      quote: "Les madeleines sont très bonnes, grand choix de parfums, viennoiseries, jus, et le service au top. Le livreur nous a même aidé à tout installer.",
      author: "Anaïs Launoy",
      role: "Office Manager",
      company: "Vitalliance",
    },
    linkedProducts: ['viennoiseries-melangees', 'madeleines-50', 'brochettes-fruits', 'chouquettes'],
    linkedCities: ['paris', 'la-defense', 'versailles', 'boulogne-billancourt', 'rueil-malmaison', 'saint-cloud'],
    // FAQ : six questions calculées dans lib/seminaireJournee.js (25/10/2026)
  },
  {
    slug: 'accueil-client',
    heroImg: '/prod-macarons.webp',
    name: 'Accueil & Réception client',
    navLabel: 'Accueil & Réception client',
    heroTitle: 'Traiteur Accueil Client à Paris',
    heroDescription: 'La première impression se construit dans les détails. L\'Écrin Traiteur livre des macarons, viennoiseries et jus d\'artisans pour vos accueils clients, réceptions et rendez-vous d\'affaires.',
    piliers: [
      { icon: '✦', title: 'Image de marque renforcée', text: 'Des produits qui parlent de vous : artisanaux, sélectionnés, mémorables.' },
      { icon: '✦', title: 'Présentation soignée', text: 'Chaque produit arrive dans un conditionnement adapté à une mise en scène rapide.' },
      { icon: '✦', title: 'Flexibilité totale', text: 'De 2 à 20 personnes, avec ou sans préavis, pour des rendez-vous réguliers ou ponctuels.' },
    ],
    seoTitle: 'Traiteur accueil client Paris',
    seoDescription: 'Impressionnez vos clients dès le matin : macarons, viennoiseries et coffrets artisanaux livrés à Paris pour vos accueils et réceptions. Devis sous 24h.',
    seoArticle: `
      <p>Recevoir un client dans vos locaux, c'est une opportunité de renforcer la relation commerciale par les détails. Un <strong>accueil client réussi</strong> commence bien avant la réunion, dès que votre interlocuteur entre dans la salle et voit ce qui l'attend sur la table.</p>
      <h2>Traiteur accueil client Paris, des produits qui marquent les esprits</h2>
      <p>Pour un accueil client, la sélection compte. Des <strong>macarons</strong> colorés, des <strong>madeleines</strong> et des <strong>cakes</strong> en tranches changent des viennoiseries habituelles et se posent en quelques minutes sur la table de réunion.</p>
      <h2>Livraison accueil client en bureau parisien, 6h30 à 10h</h2>
      <p>Nos créneaux de livraison couvrent les horaires matinaux les plus courants. Que votre rendez-vous démarre à 8h30 ou à 10h, nous nous adaptons. Pour les réceptions en fin de matinée, nous pouvons également livrer plus tard sur demande.</p>
      <h2>Un traiteur qui comprend les enjeux de la relation client</h2>
      <p>L'accueil d'un client important n'est pas le moment de laisser place à l'incertitude. Chez L'Écrin Traiteur, notre modèle repose sur la fiabilité : commande passée la veille avant <strong>14h</strong>, livraison confirmée, produits frais préparés le matin même. Vous vous concentrez sur votre réunion, nous gérons le reste.</p>
      <h2>Des produits artisanaux identifiés, parce que vos clients le remarquent</h2>
      <p>Un jus <strong>Alain Milliat</strong> sur la table, des viennoiseries pur beurre du matin, des macarons dressés sur un plateau : l'accueil se prépare en quelques minutes, et votre client voit que vous l'attendiez.</p>
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
      { q: 'Quels produits recommandez-vous pour impressionner un client important ?', a: 'Nous recommandons une combinaison macarons + viennoiseries pur beurre + jus Alain Milliat : des produits que vos invités reconnaissent, dressés en quelques minutes.' },
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
    seoDescription: 'Renforcez la cohésion d\'équipe autour d\'un petit-déjeuner artisanal. Livraison à Paris et en IDF pour vos team building et journées cohésion, dès 6h30.',
    seoArticle: `
      <p>Le <strong>team building</strong> est un moment rare où l'équipe sort du quotidien pour se retrouver autrement. La qualité des moments partagés, y compris autour de la table, contribue à la réussite de l'événement et à la mémoire collective qu'il laisse.</p>
      <h2>Traiteur team building Paris, des produits qui créent des moments</h2>
      <p>Pour une journée de cohésion, nous privilégions les produits faits pour être partagés : les <strong>chouquettes</strong> pour leur aspect joyeux et généreux, les <strong>crêpes maison</strong> pour leur côté festif, les <strong>brochettes de fruits</strong> pour la fraîcheur, les <strong>cookies artisanaux</strong> pour la pause conviviale. Des produits qui déclenchent des sourires.</p>
      <h2>Livraison traiteur team building, lieux atypiques et espaces événementiels</h2>
      <p>Un team building se fait rarement au bureau. Karting, espace de coworking atypique, parc d'entreprise, salle de séminaire en dehors de Paris, L'Écrin Traiteur livre dans toute l'Île-de-France, y compris dans des lieux moins standards. Précisez votre adresse et nous vous confirmons la faisabilité.</p>
      <h2>Comment organiser le petit-déjeuner de votre journée team building</h2>
      <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30. Pour les événements avec des contraintes de lieu particulières, n'hésitez pas à nous contacter en amont pour valider la logistique. Un devis personnalisé est disponible pour les groupes de plus de 30 personnes. Voir aussi nos <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a> et nos <a href="/creations/a-partager">menus à partager</a>.</p>
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
    seoDescription: 'Goûter d\'entreprise livré à Paris : cookies, financiers, macarons et brochettes de fruits artisanaux. Livraison dès 6h30 ou à l\'heure de votre choix.',
    seoArticle: `
      <p>Le <strong>goûter d'entreprise</strong> est la pause la plus sous-estimée de la journée. Après 6 à 7 heures de travail, l'énergie chute et la concentration aussi. Un goûter bien pensé relance l'équipe pour finir la journée dans les meilleures conditions, sans la lourdeur d'un repas complet.</p>

      <h2>Goûter en entreprise, pourquoi c'est le format qui fédère le plus</h2>
      <p>Contrairement au petit-déjeuner (souvent individuel) ou au déjeuner (parfois pris à l'extérieur), le <strong>goûter d'équipe</strong> est un moment collectif par nature. On sort de son bureau, on se retrouve autour de la table, on discute sans l'ordre du jour d'une réunion. Pour beaucoup de managers, c'est devenu un rituel hebdomadaire qui remplace le "team building" formel.</p>

      <h2>Quels produits pour un goûter d'entreprise réussi ?</h2>
      <p>Les produits qui fonctionnent le mieux pour un <strong>goûter au bureau</strong> sont ceux qui se mangent en deux bouchées, sans vaisselle contraignante :</p>
      <ul>
        <li><strong>Macarons</strong>, la pièce que l'on remarque sur la table du goûter. Colorés, visuellement attractifs, ils créent un moment.</li>
        <li><strong>Cookies artisanaux</strong>, généreux, parfumés (chocolat, noisette, caramel beurre salé), ils sont universellement appréciés.</li>
        <li><strong>Financiers Mado Paris</strong>, légers, moelleux, déclinés en plusieurs parfums. Idéaux pour ceux qui préfèrent le délicat au gourmand.</li>
        <li><strong>Brochettes de fruits de saison</strong>, la touche de fraîcheur qui équilibre le sucré et convient à tous les régimes.</li>
        <li><strong>Chouquettes maison</strong>, festives et légères, elles rappellent la boulangerie du dimanche matin.</li>
      </ul>

      <h2>Budget goûter d'entreprise Paris, combien prévoir ?</h2>
      <p>La pause gourmande démarre à <strong>{{ht:pause}} par personne</strong> : une pâtisserie et une boisson. Le budget monte avec les macarons, les fruits et le nombre de boissons ; le devis détaille chaque ligne. Pour une commande chaque semaine, demandez-nous un devis récurrent.</p>

      <h2>Traiteur goûter entreprise Paris, comment commander ?</h2>
      <p>Commandez avant <strong>14h la veille</strong>. Choisissez votre heure de livraison, nous livrons dès 6h30 et jusqu'en fin d'après-midi pour les goûters de 15h30 ou 16h. Précisez le nombre de personnes, vos contraintes alimentaires (sans gluten, halal, vegan) et votre adresse exacte. Livraison dans tout Paris et l'Île-de-France, du lundi au vendredi.</p>
      <p>Pour composer votre sélection et voir l'ensemble des produits disponibles, direction notre page <a href="/creations/pauses-gourmandes">goûter d'entreprise et pauses gourmandes</a>.</p>
    `,
    linkedProducts: ['macarons', 'cookies', 'brochettes-fruits', 'madeleines-20'],
    linkedCities: ['paris', 'la-defense', 'boulogne-billancourt', 'neuilly-sur-seine', 'levallois-perret', 'issy-les-moulineaux'],
    faq: [
      { q: 'Livrez-vous pour un goûter d\'entreprise après 15h ?', a: 'Oui, nous adaptons l\'heure de livraison à vos besoins. Précisez l\'heure souhaitée (15h30, 16h, 17h) lors de la commande. Commande avant 14h la veille.' },
      { q: 'Quels produits recommandez-vous pour un goûter d\'équipe de 20 personnes ?', a: 'Pour 20 personnes, nous recommandons : 1 coffret de 24 macarons, 4 boîtes de 6 cookies, 1 plateau de 20 brochettes de fruits (ou 1 corbeille de saison) et des boissons froides. La pause gourmande démarre à {{ht:pause}} par personne ; le devis donne le total exact.' },
      { q: 'Proposez-vous des goûters sans gluten ou vegan ?', a: 'Oui. Les brochettes de fruits et la corbeille de fruits sont vegan et sans gluten. Certains cakes et financiers sont disponibles sans gluten sur demande. Précisez vos contraintes à la commande.' },
      { q: 'Peut-on organiser un goûter d\'entreprise régulier chaque semaine ?', a: 'Absolument. Plusieurs de nos clients organisent un goûter d\'équipe hebdomadaire. Pour les commandes récurrentes, contactez-nous pour un tarif préférentiel et une organisation simplifiée.' },
    ],
  },
  {
    slug: 'petit-dejeuner-entreprise',
    heroImg: '/hero-petitdej.webp',
    name: 'Petit-déjeuner d\'entreprise',
    navLabel: 'Petit-déjeuner d\'entreprise',
    heroTitle: 'Petit-déjeuner d\'équipe et de réunion à Paris',
    heroDescription: 'Un petit-déjeuner d\'équipe, un accueil de rentrée, une réunion hebdomadaire, L\'Écrin Traiteur livre des viennoiseries et pâtisseries artisanales fraîches chaque matin, dans toute l\'Île-de-France.',
    piliers: [
      { icon: '✦', title: 'Fraîcheur du jour', text: 'Viennoiseries et pâtisseries préparées chaque matin par nos artisans boulangers, jamais surgelées.' },
      { icon: '✦', title: 'Simple à répéter', text: 'Commande récurrente hebdomadaire ou ponctuelle, même qualité à chaque livraison.' },
      { icon: '✦', title: 'Livré dès 6h30', text: 'Prêt avant l\'arrivée de vos équipes, partout à Paris et en Île-de-France.' },
    ],
    seoTitle: 'Petit-déjeuner d\'équipe et de réunion à Paris',
    seoDescription: 'Petit-déjeuner d\'entreprise à Paris et en Île-de-France : viennoiseries, madeleines et jus artisanaux livrés dès 6h30. Commande avant 14h la veille.',
    seoArticle: `
      <p>Le <strong>petit-déjeuner d\'entreprise</strong> est souvent le premier moment collectif de la journée, accueil de nouveaux arrivants, réunion d\'équipe hebdomadaire, ou simplement un rituel qui donne le ton. Un bon petit-déjeuner artisanal, c\'est un signal simple mais efficace envoyé à vos collaborateurs. Pour les formules, les prix et la commande, voir nos <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners d\'entreprise à Paris</a>.</p>
      <h2>Des produits reconnaissables, préparés chaque matin</h2>
      <p>Notre <strong>plateau duo de viennoiseries</strong> (croissants et pains au chocolat pur beurre) reste la valeur sûre. Pour varier, nos <strong>chouquettes</strong> et nos <strong>madeleines Mado Paris</strong> apportent une touche plus gourmande, tandis qu\'un <strong>cake maison</strong> complète idéalement une table de petit-déjeuner.</p>
      <h2>Une livraison ponctuelle ou récurrente, dès 6h30</h2>
      <p>Que ce soit pour 6 personnes ou 60, nous livrons directement dans vos locaux, prêt à être posé sur la table de réunion ou l\'espace de pause. Commandez avant <strong>14h la veille</strong> pour une livraison dès 6h30 le lendemain.</p>
      <h2>Un rituel simple à mettre en place, ponctuel ou récurrent</h2>
      <p>Certaines équipes commandent un petit-déjeuner artisanal chaque lundi matin, d\'autres ponctuellement pour un accueil ou un lancement de projet. Dans les deux cas, la commande est la même : simple, sans engagement de volume, avec la même qualité à chaque fois.</p>
      <p>Pour composer votre sélection et voir l\'ensemble des produits disponibles, direction notre page <a href="/creations/petits-dejeuners-et-pauses">petit-déjeuner d\'entreprise</a>.</p>
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
    heroTitle: 'Déjeuner d\'entreprise à Paris : plateaux repas livrés',
    heroDescription: 'Réunion qui déborde sur le midi, journée de travail intense, repas d\'équipe improvisé, L\'Écrin Traiteur livre des plateaux repas complets et équilibrés directement dans vos bureaux.',
    piliers: [
      { icon: '✦', title: 'Repas complet', text: 'Entrée, plat, dessert et pain dans un plateau individuel prêt à servir.' },
      { icon: '✦', title: 'Pour tous les goûts', text: 'Végétarien, poulet, viande, poisson, une collection variée pour toute l\'équipe.' },
      { icon: '✦', title: 'Livré à l\'heure du déjeuner', text: 'Créneau horaire précis, directement en salle ou en espace de restauration.' },
    ],
    seoTitle: 'Déjeuner d\'entreprise : plateaux repas dès {{ht:veg}}',
    seoDescription: 'Plateaux repas pour vos réunions : entrée, plat, dessert. Dès {{ht:veg}}/pers, livrés à l\'heure exacte en salle. Commande avant 14h la veille.',
    productCategory: 'plateaux-repas',
    seoArticle: `
      <p>Certains jours, sortir déjeuner n\'est pas une option : une réunion qui s\'éternise, une deadline serrée, une journée de formation. Le <strong>déjeuner d\'entreprise</strong> livré directement au bureau permet à l\'équipe de rester ensemble et concentrée, sans que personne ne perde quarante minutes à chercher une table.</p>

      <h2>Nos plateaux repas pour le déjeuner en entreprise</h2>
      <p>Chaque plateau est individuel et complet : entrée, plat, dessert et pain, filmé et étiqueté.</p>
      <p>Nos menus démarrent à <strong>{{ht:veg}}</strong> et couvrent aussi bien les déjeuners de travail réguliers que les repas où vous recevez : <strong>La Romaine</strong> et <strong>La Champêtre</strong> au poulet, <strong>La Boréale</strong> au poisson, <strong>La Solaire</strong>, <strong>La Provençale</strong> et <strong>La Potagère</strong> en végétarien. Le détail des compositions est sur la page <a href="/creations/plateaux-repas">plateaux repas</a>.</p>

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
      <p>Minimum de commande {{ht:min}}, livraison {{ht:liv}} sur Paris et les communes proches, facturation entreprise avec TVA. <a href="/devis">Demandez votre devis</a>, réponse sous 24h.</p>
    `,
    linkedProducts: ['e5', 'e2', 'e1', 'e6'],
    linkedCities: ['paris', 'la-defense', 'boulogne-billancourt', 'neuilly-sur-seine', 'issy-les-moulineaux', 'courbevoie'],
    faq: [
      { q: 'Combien coûte un plateau repas d\'entreprise ?', a: 'Nos plateaux repas démarrent à {{ht:veg}} par personne, entrée, plat, dessert et pain compris. S\'ajoute la livraison, {{ht:liv}} sur Paris et les communes proches. Le minimum de commande est de {{ht:min}}.' },
      { q: 'Combien de plateaux végétariens prévoir pour une équipe ?', a: 'Comptez environ un tiers de plateaux végétariens sur une équipe dont vous ne connaissez pas les préférences. C\'est presque toujours la bonne proportion, et cela évite les plateaux qui restent sur la table.' },
      { q: 'Peut-on mélanger plusieurs plateaux différents dans une même commande ?', a: 'Oui, c\'est même recommandé pour satisfaire tous les goûts. Vous pouvez mélanger les catégories (végétarien, poulet, poisson) : précisez la répartition souhaitée lors de votre commande.' },
      { q: 'Livrez-vous à une heure précise pour le déjeuner ?', a: 'Oui, vous donnez une heure et non une plage horaire. Nous livrons à l\'heure convenue, directement en salle de réunion ou en espace de restauration, plateaux prêts à poser devant chaque participant.' },
    ],
  },
  {
    slug: 'cocktail-entreprise',
    heroImg: '/hero-cocktail.webp',
    name: 'Cocktail d\'entreprise',
    navLabel: 'Cocktail d\'entreprise',
    heroTitle: 'Organiser un cocktail d\'entreprise à Paris',
    heroDescription: 'Lancement de produit, pot de départ, réception de fin d\'année, L\'Écrin Traiteur livre des formules cocktail salées et sucrées, prêtes à partager entre collègues ou avec vos invités.',
    piliers: [
      { icon: '✦', title: 'Salé et sucré équilibrés', text: 'Chaque formule mêle pièces salées et douceurs sucrées façonnées à la main.' },
      { icon: '✦', title: '3 formats selon l\'occasion', text: 'L\'Invitation, La Réception ou La Célébration, du pot informel au dîner debout.' },
      { icon: '✦', title: 'Prêt à servir', text: 'Livré en plateau, sans préparation ni dressage de votre côté.' },
    ],
    seoTitle: 'Organiser un cocktail d\'entreprise à Paris : le guide',
    seoDescription: 'Organiser un cocktail d\'entreprise à Paris : combien de pièces par personne, quel format selon le moment, quel budget pour 20 et 50 personnes, quels délais.',
    productCategory: 'cocktails',
    seoArticle: `
      <p><strong>Un cocktail d'entreprise livré à Paris coûte de {{ht:inv}} à {{ht:cel}} par personne</strong> chez L'Écrin Traiteur, selon la formule : L'Invitation (8 pièces par personne), La Réception (12 pièces) ou La Célébration (16 pièces). Chaque formule mêle des pièces salées et sucrées façonnées à la main, livrées prêtes à servir à Paris et en Île-de-France. Commande jusqu'à la veille 14h, minimum de commande {{ht:min}}, livraison {{ht:liv}} à Paris et dans les communes proches, devis sous 24h.</p>
      <p>Un <strong>cocktail d'entreprise</strong> marque un moment particulier : lancement de produit, inauguration, pot de départ, vœux, réception de partenaires. Debout, vos invités circulent et échangent, sans la contrainte d'un service à table. La sélection de pièces contribue directement à l'ambiance et à l'image que vous renvoyez, et c'est ce que les trois formules ci-dessous sont construites pour tenir.</p>

      <h2>Les trois formules cocktail d'entreprise</h2>
      <div class="tbl-wrap"><table>
        <thead><tr><th>Formule</th><th>Pièces par personne</th><th>Salé et sucré</th><th>Prix HT par personne</th><th>Le moment qui lui correspond</th></tr></thead>
        <tbody>
          <tr><td><strong>L'Invitation</strong></td><td>8</td><td>6 salées, 2 sucrées</td><td>{{e:inv}}</td><td>Apéritif : afterwork, pot, accueil avant un événement (1 à 2 h)</td></tr>
          <tr><td><strong>La Réception</strong></td><td>12</td><td>9 salées, 3 sucrées</td><td>{{e:rec}}</td><td>Déjeunatoire, soirée partenaires, inauguration (1h30 à 2h)</td></tr>
          <tr><td><strong>La Célébration</strong></td><td>16</td><td>12 salées, 4 sucrées</td><td>{{e:cel}}</td><td>Dînatoire : le cocktail remplace le dîner (2h30 à 3h)</td></tr>
        </tbody>
      </table></div>
      <p>La Réception est la formule la plus choisie : elle associe terre et mer sans passer à un dîner complet. Les compositions, pièce par pièce, sont détaillées sur la page <a href="/creations/cocktails">traiteur cocktail d'entreprise</a>.</p>

      <h2>Combien de pièces par personne selon le format ?</h2>
      <div class="tbl-wrap"><table>
        <thead><tr><th>Format</th><th>Durée</th><th>Pièces par personne</th><th>Notre formule</th></tr></thead>
        <tbody>
          <tr><td><strong>Apéritif, afterwork</strong></td><td>1 à 2 h</td><td>6 à 8</td><td>L'Invitation, 8 pièces</td></tr>
          <tr><td><strong>Déjeunatoire, remplace le déjeuner</strong></td><td>1h30 à 2h</td><td>12 à 14</td><td>La Réception, 12 pièces</td></tr>
          <tr><td><strong>Dînatoire, remplace le dîner</strong></td><td>2h30 à 3h</td><td>16 à 18</td><td>La Célébration, 16 pièces</td></tr>
        </tbody>
      </table></div>
      <p>Dans le doute, prévoyez large : ajoutez 10 % de marge sur l'effectif confirmé, un léger surplus se partage alors qu'un manque se remarque. Le raisonnement complet est dans notre guide <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">combien de pièces cocktail par personne</a>.</p>

      <h2>Prix d'un cocktail d'entreprise : exemples pour 20 et 50 personnes</h2>
      <div class="tbl-wrap"><table>
        <thead><tr><th>Effectif</th><th>L'Invitation, 8 pièces</th><th>La Réception, 12 pièces</th><th>La Célébration, 16 pièces</th></tr></thead>
        <tbody>
          <tr><td><strong>20 personnes</strong></td><td>{{pc:inv:20}} pièces, {{htn:inv:20}}</td><td>{{pc:rec:20}} pièces, {{htn:rec:20}}</td><td>{{pc:cel:20}} pièces, {{htn:cel:20}}</td></tr>
          <tr><td><strong>50 personnes</strong></td><td>{{pc:inv:50}} pièces, {{htn:inv:50}}</td><td>{{pc:rec:50}} pièces, {{htn:rec:50}}</td><td>{{pc:cel:50}} pièces, {{htn:cel:50}}</td></tr>
        </tbody>
      </table></div>
      <p>Totaux hors livraison ({{ht:liv}} à Paris et dans les communes proches). Le prix par personne reste fixe quel que soit l'effectif.</p>
      <p><strong>Exemple pour 20 personnes.</strong> Un lancement de produit à 18h dans vos locaux, deux heures de cocktail, des clients et des partenaires parmi les invités : La Réception, {{pc:rec:20}} pièces, soit {{htn:rec:20}}, ou {{htl:rec:20}} livraison comprise.</p>
      <p><strong>Exemple pour 50 personnes.</strong> Une soirée de vœux ou d'inauguration : La Réception, {{pc:rec:50}} pièces, soit {{htn:rec:50}}, ou {{htl:rec:50}} livraison comprise. Si le cocktail remplace le dîner, La Célébration passe à {{htn:cel:50}}, soit {{htl:cel:50}} livraison comprise.</p>

      <h2>Quelle formule pour quelle occasion ?</h2>
      <ul>
        <li><strong>Lancement de produit, accueil avant un événement.</strong> L'Invitation si le cocktail dure moins de deux heures, La Réception si vous recevez des clients ou des partenaires.</li>
        <li><strong>Pot de départ, pot de bienvenue, afterwork.</strong> L'Invitation, avec un gâteau à partager. Voir notre page <a href="/occasions/afterwork-entreprise">traiteur afterwork d'entreprise à Paris</a>.</li>
        <li><strong>Inauguration, soirée partenaires, vœux.</strong> La Réception, ou La Célébration si le cocktail remplace le dîner.</li>
        <li><strong>Séminaire ou convention.</strong> Un cocktail de clôture en fin de journée, en complément des pauses et du déjeuner : voir <a href="/occasions/seminaire-entreprise">traiteur séminaire d'entreprise</a>.</li>
      </ul>

      <h2>Comment organiser un cocktail d'entreprise ?</h2>
      <p>Un cocktail d'entreprise se prépare en remontant depuis la date. Le rétroplanning ci-dessous reprend nos délais réels : il n'y a rien à anticiper au-delà, et rien à décider plus tard.</p>
      <div class="tbl-wrap"><table>
        <thead><tr><th>Quand</th><th>Ce qui se décide</th></tr></thead>
        <tbody>
          <tr><td><strong>3 à 4 semaines avant</strong></td><td>Pour une réception d'envergure : la demande de devis, la date et le lieu. C'est le moment où le format se choisit, pas les recettes.</td></tr>
          <tr><td><strong>1 à 2 semaines avant</strong></td><td>L'effectif prévisionnel, l'adresse exacte, l'étage, le contact sur place et l'heure à laquelle les pièces doivent être sur la table. Le maître d'hôtel se réserve à ce moment-là.</td></tr>
          <tr><td><strong>48 h avant</strong></td><td>Obligatoire à partir de 50 personnes ou pour plusieurs sites : l'effectif confirmé et les régimes recensés, avec le nombre de personnes concernées.</td></tr>
          <tr><td><strong>La veille avant 14h</strong></td><td>Le dernier ajustement d'effectif. Au-delà, la commande est lancée en production.</td></tr>
          <tr><td><strong>Le jour J</strong></td><td>Livraison à l'heure fixée, dressage prêt à disposer. Installation sur demande, récupération du matériel ensuite.</td></tr>
        </tbody>
      </table></div>

      <h2>Combien de temps dure un cocktail d'entreprise ?</h2>
      <p>La durée se déduit du nombre de pièces, pas l'inverse : c'est l'erreur la plus fréquente. Huit pièces tiennent une à deux heures, seize remplacent un dîner et tiennent une soirée.</p>
      <div class="tbl-wrap"><table>
        <thead><tr><th>Formule</th><th>Pièces par personne</th><th>Durée tenue</th></tr></thead>
        <tbody>
          <tr><td><strong>L'Invitation</strong></td><td>8</td><td>1 à 2 h, en apéritif</td></tr>
          <tr><td><strong>La Réception</strong></td><td>12</td><td>1h30 à 2h, en déjeunatoire</td></tr>
          <tr><td><strong>La Célébration</strong></td><td>16</td><td>2h30 à 3h, le cocktail remplace le dîner</td></tr>
        </tbody>
      </table></div>
      <p>Si le cocktail doit durer plus longtemps que la formule ne le permet, mieux vaut monter d'un format que doubler les quantités d'un format court : l'équilibre salé-sucré est calculé par formule.</p>

      <h2>Faut-il du personnel sur place ?</h2>
      <p>Pas pour un cocktail livré prêt à disposer : les pièces arrivent dressées, il n'y a rien à préparer. Un maître d'hôtel devient utile quand vous recevez des clients ou des partenaires, et qu'il faut que quelqu'un réapprovisionne, débarrasse et garde la table nette pendant que vous êtes avec vos invités. Comptez <strong>250 € HT pour un service de 6 heures</strong>. Avec la reprise de la vaisselle réutilisable et des thermos après l'événement, livraison et reprise font {{ht:livrecup}} en une ligne à Paris, dans le 92 et le 94 ; ailleurs, prix de la zone plus {{ht:recup}}.</p>

      <h2>Boissons et régimes alimentaires</h2>
      <p>Un cocktail réussi n'a pas besoin d'alcool. Nous livrons dans la même commande les jus Alain Milliat, les eaux et, pour trinquer, un Chardonnay Blanc de Blancs 0 %. Comptez 3 à 4 boissons par personne pour un cocktail de 2h, avec au moins trois parfums différents : voir nos <a href="/creations/boissons">boissons</a>. Toute la carte est halal et sans porc par défaut, sans supplément ; les options végétariennes, véganes et sans gluten se précisent au devis. Le détail est sur la page <a href="/traiteur-halal">traiteur halal d'entreprise</a>.</p>

      <h2>Livraison, installation et délais</h2>
      <p>Nous livrons sur votre lieu de réception, à l'heure de votre événement, avec une présentation prête à disposer ; l'installation est possible sur demande. Commande jusqu'à la veille 14h. À partir de 50 personnes ou pour plusieurs sites, prévenez au moins 48h avant, et demandez votre devis 3 à 4 semaines à l'avance pour une réception d'envergure. Facturation entreprise avec TVA. Nous livrons à <a href="/traiteur/paris">Paris</a>, <a href="/traiteur/la-defense">La Défense</a>, <a href="/traiteur/boulogne-billancourt">Boulogne-Billancourt</a>, <a href="/traiteur/neuilly-sur-seine">Neuilly-sur-Seine</a>, <a href="/traiteur/versailles">Versailles</a> et dans toute l'Île-de-France.</p>

      <h2>Cocktail ou buffet à partager ?</h2>
      <p>Le cocktail se mange debout, pièce par pièce, et laisse les invités circuler. Un buffet à partager convient mieux à une équipe qui reste assise ou à un déjeuner collectif. Nous avons comparé les deux dans notre guide <a href="/journal/buffet-a-partager-ou-cocktail-entreprise-paris">buffet à partager ou cocktail d'entreprise</a>. Pour organiser un cocktail de bout en bout, voir <a href="/journal/organiser-cocktail-entreprise">organiser un cocktail d'entreprise</a>, puis <a href="/devis">demandez votre devis</a> : réponse sous 24h.</p>
    `,
    linkedProducts: ['classique', 'signature', 'prestige'],
    linkedCities: ['paris', 'la-defense', 'boulogne-billancourt', 'neuilly-sur-seine', 'versailles', 'saint-cloud'],
    faq: [
      { q: `Combien coûte un cocktail d'entreprise à Paris ?`, a: `De {{ht:inv}} par personne pour L'Invitation (8 pièces) à {{ht:cel}} pour La Célébration (16 pièces), avec La Réception (12 pièces) à {{ht:rec}}. Pour 20 personnes, comptez de {{htn:inv:20}} à {{htn:cel:20}} ; pour 50 personnes, de {{htn:inv:50}} à {{htn:cel:50}}. La livraison s'ajoute : {{ht:liv}} à Paris et dans les communes proches. Devis sous 24h.` },
      { q: `Combien de pièces par personne pour un cocktail d'entreprise ?`, a: `Comptez 6 à 8 pièces pour un cocktail apéritif d'une à deux heures, 12 à 14 pièces pour un cocktail déjeunatoire et 16 à 18 pièces pour un dînatoire qui remplace le dîner. Ajoutez 10 % de marge sur l'effectif confirmé.` },
      { q: `Quelle formule choisir pour un cocktail de 30 personnes ?`, a: `Pour un cocktail de fin de journée entre collègues, L'Invitation suffit : {{pc:inv:30}} pièces pour {{htn:inv:30}}. Avec des clients ou des partenaires, choisissez La Réception : {{pc:rec:30}} pièces pour {{htn:rec:30}}. Si le cocktail remplace le dîner, La Célébration compte {{pc:cel:30}} pièces pour {{htn:cel:30}}. Livraison en plus : {{ht:liv}}.` },
      { q: `Quel délai pour commander un cocktail d'entreprise ?`, a: `La commande reste possible jusqu'à la veille 14h. À partir de 50 personnes ou pour plusieurs sites, prévenez au moins 48h avant. Pour une réception d'envergure, demandez le devis 3 à 4 semaines à l'avance : nous répondons sous 24h.` },
      { q: `Peut-on adapter la composition à des régimes alimentaires ?`, a: `Toute la carte est halal et sans porc par défaut. Les options végétariennes, véganes et sans gluten se précisent au devis, avec les effectifs concernés. Les trois formules ont une composition fixe, équilibrée entre salé et sucré : pour une demande particulière (allergies, préférences), contactez-nous avant la commande.` },
    ],
  },
  {
    slug: 'afterwork-entreprise',
    // Burgers plutôt que la planche de bouchées : hero-cocktail.webp servait
    // déjà de hero à /occasions/pot-de-depart (28/10/2026, demande de Ramy).
    heroImg: '/plateau-burgers.webp',
    name: 'Afterwork',
    navLabel: 'Afterwork',
    heroTitle: 'Traiteur Afterwork d\'entreprise à Paris',
    heroDescription: 'Fin de semaine, fin de projet, simple envie de se retrouver autrement, L\'Écrin Traiteur livre des formules cocktail conviviales pour vos afterworks d\'équipe, sans organisation de votre côté.',
    piliers: [
      { icon: '✦', title: 'Format décontracté', text: 'Des pièces à picorer, pensées pour un moment convivial entre collègues.' },
      { icon: '✦', title: 'Prêt en quelques clics', text: 'Une commande simple, sans minimum de participants, pour un afterwork improvisé ou planifié.' },
      { icon: '✦', title: 'Livré à l\'heure du pot', text: 'Livraison en fin de journée, à l\'heure qui vous arrange.' },
    ],
    seoTitle: 'Traiteur afterwork en entreprise à Paris : dès {{ht:afw}}',
    seoDescription: 'Traiteur afterwork à Paris : planches et mini-sandwichs à partager dès {{ht:afw}} par personne, cocktail de 8 à 16 pièces dès {{ht:inv}}. Devis sous 24h.',
    productCategory: 'cocktails',
    seoArticle: `
      <p><strong>Un afterwork d'entreprise livré à Paris coûte de {{ht:afw}} à {{ht:cel}} par personne</strong>, selon la formule : Afterwork à partager (planches et 6 mini-sandwichs, dès 10 personnes), L'Invitation (8 pièces salées et sucrées), L'Afterwork ({{pi:afwf}} pièces de plateau et une planche de fromages), La Réception (12 pièces) ou La Célébration (16 pièces). Les plateaux arrivent prêts à poser, juste avant l'heure du pot. Il n'y a pas de minimum de participants, seulement un minimum de commande de {{ht:min}}, et la livraison est à {{ht:liv}} à Paris et dans les communes proches. Commande jusqu'à la veille 14h.</p>
      <p>L'<strong>afterwork</strong>, ou after work, s'est installé dans les habitudes des entreprises parisiennes : une fin de projet, une clôture de trimestre, l'arrivée d'une recrue, ou simplement une semaine dense qui mérite qu'on se retrouve autrement. L'Écrin Traiteur livre un buffet à picorer dans vos bureaux, à Paris et en Île-de-France : personne dans votre équipe n'a de dressage ni de mise en place à faire.</p>

      <h2>Les trois formules d'afterwork, avec le prix pour 20 et 50 personnes</h2>
      <div class="tbl-wrap"><table>
        <thead><tr><th>Formule</th><th>Pièces par personne</th><th>Prix HT par personne</th><th>Pour 20 personnes</th><th>Pour 50 personnes</th><th>Format conseillé</th></tr></thead>
        <tbody>
          <tr><td><strong>L'Invitation</strong></td><td>8</td><td>{{e:inv}}</td><td>{{en:inv:20}}</td><td>{{en:inv:50}}</td><td>Afterwork d'équipe, 1h30 à 2h</td></tr>
          <tr><td><strong>La Réception</strong></td><td>12</td><td>{{e:rec}}</td><td>{{en:rec:20}}</td><td>{{en:rec:50}}</td><td>Afterwork de plus de 2h, ou avec des invités extérieurs</td></tr>
          <tr><td><strong>La Célébration</strong></td><td>16</td><td>{{e:cel}}</td><td>{{en:cel:20}}</td><td>{{en:cel:50}}</td><td>Afterwork qui remplace le dîner</td></tr>
          <tr><td><strong>L'Afterwork</strong></td><td>{{pi:afwf}}</td><td>{{e:afwf}}</td><td>{{en:afwf:20}}</td><td>{{en:afwf:50}}</td><td>Afterwork où l'on veut que l'équipe mange vraiment</td></tr>
        </tbody>
      </table></div>
      <p>Totaux hors livraison ({{ht:liv}} à Paris et dans les communes proches). Le prix par personne reste le même quel que soit l'effectif : pour 20 personnes en formule L'Invitation, la commande revient à {{htl:inv:20}} livraison comprise.</p>
      <p>L'Invitation réunit gougères, tartelette pissaladière, millefeuille betterave et chèvre, brochette de poulet tandoori, ratte au saumon fumé, mini cheeseburger, puis une douceur vanille et un dôme praliné. La Réception y ajoute une bouchée patate douce, feta et olive kalamata, du saumon mariné à la betterave jaune, une navette de légumes grillés et une tartelette aux myrtilles. La Célébration ajoute encore un gâteau de carotte au cerfeuil, une tartelette avocat feta, une tartelette tout chocolat et un choco passion coco. Les compositions sont détaillées sur la page <a href="/creations/cocktails">formules cocktail livrées</a>.</p>

      <h2>La formule L'Afterwork, {{ht:afwf}} par personne</h2>
      <p>Les trois formules ci-dessus sont faites de bouchées montées à la main. <strong>L'Afterwork</strong> remplace la moitié par des pièces qui ont du pain — mini cheeseburger, pains briochés pesto verde et thon, clubs et mini wraps roulés — et ajoute une planche de fromages affinés et des chips à poser au centre de la table. {{pi:afwf}} pièces par personne, sept salées et trois sucrées, à <strong>{{ht:afwf}} par personne</strong>, soit cinq euros de moins que La Réception pour une fin de journée où l'équipe mange vraiment. <a href="/creations/cocktails/afterwork">Voir la fiche de la formule</a>.</p>

      <h2>L'afterwork à partager, dès {{ht:afw}} par personne</h2>
      <p>Pour un afterwork plus simple et plus généreux que le cocktail, la formule <strong>Afterwork à partager</strong> réunit, à partir de 10 personnes, deux planches à poser au centre de la table et 6 mini-sandwichs par personne, pour <strong>{{ht:afw}} par personne</strong>. <a href="/creations/cocktails/afterwork-partage">Voir la fiche de la formule</a>.</p>
      <ul>
        <li><strong>Une planche de charcuteries halal, sans porc</strong> : bœuf séché, bresaola, viande des Grisons, dinde et poulet fumés, olives et raisin frais. Une planche pour 10 à 12 personnes.</li>
        <li><strong>Une planche de fromages affinés</strong>, avec fruits frais et pain artisanal. Une planche pour 10 à 12 personnes.</li>
        <li><strong>6 mini-sandwichs par personne</strong> : mini burgers, clubs et mini wraps roulés, en plateaux de 24 pièces.</li>
        <li><strong>Des chips</strong>, à grignoter pendant que les planches circulent.</li>
      </ul>
      <div class="tbl-wrap"><table>
        <thead><tr><th>Effectif</th><th>Prix HT</th><th>Livraison comprise</th></tr></thead>
        <tbody>
          <tr><td><strong>10 personnes</strong></td><td>{{htn:afw:10}}</td><td>{{htl:afw:10}}</td></tr>
          <tr><td><strong>20 personnes</strong></td><td>{{htn:afw:20}}</td><td>{{htl:afw:20}}</td></tr>
          <tr><td><strong>50 personnes</strong></td><td>{{htn:afw:50}}</td><td>{{htl:afw:50}}</td></tr>
        </tbody>
      </table></div>
      <p>Les quantités sont arrondies au plateau et à la planche. Boissons en plus, sans alcool, dans la même commande. Les pièces sucrées ne sont pas comprises : ajoutez une brochette de fruits frais ou un gâteau à partager au devis.</p>

      <h2>Combien de pièces prévoir par personne pour un afterwork ?</h2>
      <p>Le repère que nous donnons à nos clients : <strong>8 pièces par personne</strong> pour un afterwork d'1h30 à 2h, <strong>12 pièces</strong> s'il dure plus de deux heures ou si vos invités ne dînent pas avant, <strong>16 pièces</strong> quand il remplace le dîner. Gardez environ deux tiers de salé pour un tiers de sucré, et ajoutez 10 % de marge sur l'effectif confirmé : un léger surplus se partage, un manque se remarque. Les pièces salées partent deux fois plus vite que les sucrées en début de soirée, ne rognez pas dessus. Le calcul détaillé par durée est dans notre guide <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">combien de pièces cocktail par personne</a>.</p>

      <h2>Déroulé type d'un afterwork de 1h30 à 2h</h2>
      <div class="tbl-wrap"><table>
        <thead><tr><th>Moment</th><th>Ce qui se passe</th></tr></thead>
        <tbody>
          <tr><td><strong>30 à 45 min avant</strong></td><td>Livraison des plateaux, pose sur la table, boissons au frais. Rien d'autre à préparer.</td></tr>
          <tr><td><strong>0 à 20 min</strong></td><td>Les invités arrivent, les boissons circulent, les premières pièces salées partent. Laissez les plateaux salés en libre service.</td></tr>
          <tr><td><strong>20 min à 1h</strong></td><td>Le gros du service. C'est le bon moment pour un mot de l'équipe ou un toast, quand tout le monde est là.</td></tr>
          <tr><td><strong>1h à 1h30</strong></td><td>Les pièces sucrées passent au premier plan. Pour un pot de départ, c'est le moment du gâteau à partager.</td></tr>
          <tr><td><strong>Après 1h30</strong></td><td>Les plateaux restent à disposition jusqu'à la fin, sans service à assurer.</td></tr>
        </tbody>
      </table></div>
      <p>Au-delà de 30 personnes, répartissez les plateaux sur deux tables pour éviter la file d'attente au début.</p>

      <h2>Boissons : sans alcool, dans la même commande</h2>
      <p>Nous livrons les jus Alain Milliat, les eaux et les gobelets avec les plateaux. Tout est sans alcool : pour trinquer, notre Chardonnay Blanc de Blancs 0 % remplace les bulles, et personne n'est mis de côté. Pour deux heures, comptez 1 flûte de Chardonnay 0 % par personne, 1 litre de jus pour 4 personnes et 1 bouteille d\'eau de 75 cl pour 5. Avec les boissons et la livraison, un afterwork de 20 personnes en L\'Invitation revient à <strong>{{cka:inv:20}}</strong> ({{ckap:inv:20}} par personne), et à 50 personnes à <strong>{{cka:inv:50}}</strong> ({{ckap:inv:50}} par personne). Toute la sélection est sur la page <a href="/creations/boissons">boissons</a>, et le guide <a href="/journal/traiteur-afterwork-pot-depart-entreprise-paris">organiser un afterwork ou un pot de départ</a> détaille l\'organisation.</p>

      <h2>Afterwork, pot de départ, pot de bienvenue</h2>
      <p>Le format se prête à tout ce qui se fête debout. Pour un pot de départ ou une arrivée, nous ajoutons souvent un gâteau à partager aux plateaux salés : voir nos <a href="/creations/pauses-gourmandes">gâteaux à partager</a>. Pour un afterwork avec un geste en direct, nos <a href="/creations/animations-culinaires">animations culinaires</a> se combinent avec les plateaux. Les repères d'organisation (format, budget, boissons) sont rassemblés dans notre guide <a href="/journal/traiteur-afterwork-pot-depart-entreprise-paris">organiser un afterwork ou un pot de départ en entreprise</a>. Pour une réception plus large (lancement, inauguration, vœux), la page <a href="/creations/cocktails">cocktail d'entreprise à Paris</a> détaille les formats, les quantités et les budgets.</p>

      <h2>Halal et sans porc, sans supplément</h2>
      <p>Toute la carte est halal et sans porc par défaut. Les options végétariennes, véganes et sans gluten se précisent au devis avec les effectifs concernés, et les brochettes de fruits frais sont véganes et sans gluten. Voir notre page <a href="/traiteur-halal">traiteur halal d'entreprise</a>.</p>

      <h2>Livraison, délais et zone</h2>
      <p>Vous indiquez l'heure de votre afterwork, nous livrons juste avant. Les plateaux arrivent dressés, filmés, prêts à poser. Nous livrons Paris intra-muros et les Hauts-de-Seine : <a href="/traiteur/la-defense">La Défense</a>, <a href="/traiteur/boulogne-billancourt">Boulogne-Billancourt</a>, <a href="/traiteur/levallois-perret">Levallois-Perret</a>, <a href="/traiteur/neuilly-sur-seine">Neuilly-sur-Seine</a>, ainsi que <a href="/traiteur">toute l'Île-de-France</a>, les communes plus éloignées étant chiffrées au devis. Commande jusqu'à la veille 14h ; à partir de 50 personnes, prévenez 48h avant. Un afterwork pour dix collègues comme pour soixante : minimum de commande {{ht:min}}, facturation entreprise avec TVA, <a href="/devis">devis sous 24h</a>.</p>
    `,
    linkedProducts: ['classique', 'signature'],
    linkedCities: ['paris', 'la-defense', 'boulogne-billancourt', 'levallois-perret', 'neuilly-sur-seine', 'clichy'],
    faq: [
      { q: `Combien coûte un traiteur afterwork à Paris ?`, a: `Comptez {{ht:afw}} par personne pour l'Afterwork à partager (deux planches, dont une de charcuteries halal sans porc, et 6 mini-sandwichs, dès 10 personnes), {{ht:afwf}} pour la formule L'Afterwork ({{pi:afwf}} pièces de plateau et une planche de fromages), {{ht:inv}} pour L'Invitation (8 pièces), {{ht:rec}} pour La Réception (12 pièces) et {{ht:cel}} pour La Célébration (16 pièces). Pour 20 personnes, cela fait {{htn:inv:20}}, {{htn:rec:20}} ou {{htn:cel:20}} ; pour 50 personnes, {{htn:inv:50}}, {{htn:rec:50}} ou {{htn:cel:50}}. La livraison s'ajoute : {{ht:liv}} à Paris et dans les communes proches. Devis sous 24h.` },
      { q: `Combien de pièces par personne pour un afterwork ?`, a: `8 pièces par personne pour un afterwork d'1h30 à 2h, 12 pièces au-delà de deux heures, 16 pièces s'il remplace le dîner. Prévoyez environ deux tiers de salé pour un tiers de sucré et 10 % de marge sur l'effectif confirmé : les pièces salées partent deux fois plus vite que les sucrées.` },
      { q: `Quelle formule choisir pour un afterwork de 30 personnes ?`, a: `Pour un afterwork d'équipe de 1h30 à 2h, L'Invitation suffit : {{pc:inv:30}} pièces pour {{htn:inv:30}}. S'il dépasse deux heures ou reçoit des invités extérieurs, La Réception ({{pc:rec:30}} pièces, {{htn:rec:30}}) est la plus choisie. La Célébration ({{pc:cel:30}} pièces, {{htn:cel:30}}) remplace le dîner. Livraison en plus : {{ht:liv}}.` },
      { q: `À quelle heure et avec quel délai livrez-vous un afterwork ?`, a: `Vous nous donnez l'heure de votre pot et nous livrons juste avant, plateaux prêts à poser. Commande jusqu'à la veille 14h ; à partir de 50 personnes, prévenez 48h avant. Pour une demande le jour même, contactez-nous : nous faisons au mieux selon la disponibilité.` },
      { q: `Y a-t-il un minimum de personnes pour un afterwork ?`, a: `Non, aucun minimum de participants. Seul le minimum de commande de {{ht:min}} s'applique : il est atteint dès 2 personnes en formule L'Invitation ({{htn:inv:2}}). Nous livrons aussi bien pour dix collègues que pour soixante.` },
    ],
  },
]

export const OCCASIONS = OCCASIONS_TOUTES.filter(o => !OCCASIONS_FUSIONNEES.includes(o.slug))

// FAQ universelle ajoutée à toutes les pages occasion
export const FAQ_DERNIERE_MINUTE = {
  q: 'Acceptez-vous les commandes de dernière minute ?',
  a: 'La règle reste de commander avant 14h la veille. Pour une demande le matin même, appelez le 01 74 54 23 10 : nous faisons au mieux selon la disponibilité du jour. À Boulogne-Billancourt, où se trouve notre atelier, les commandes du matin même sont acceptées jusqu\'à 10h sur la sélection du jour.',
}

export const getOccasionBySlug = (slug) => OCCASIONS.find(o => o.slug === slug)
