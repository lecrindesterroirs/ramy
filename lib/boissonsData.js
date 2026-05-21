// Données structurées des produits — Boissons

export const BOISSONS = [
  // ─── Jus & Nectars ───────────────────────────────────────────────────────────
  {
    id: 'jus-pomme',
    name: 'Jus de Pomme',
    shortName: 'Jus de Pomme',
    price: 9.50,
    label: '1 litre — 9,50€',
    description: '1 litre — Jus de pomme Alain Milliat',
    qty: '1 litre',
    category: 'jus',
    categoryLabel: 'Jus & Nectars',
    img: '/bois-jus-pomme.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: 'Pommes françaises pressées, 100% pur jus. Sans sucre ajouté, sans conservateur, sans concentré. Alain Milliat, Drôme.',
    seoTitle: "Jus de pomme Alain Milliat livraison Paris — boisson artisanale traiteur entreprise",
    seoArticle: `
      <p>Le <strong>jus de pomme Alain Milliat</strong> est l'une des références absolues du jus artisanal en France. Issu de pommes françaises soigneusement sélectionnées, pressé sans concentré ni sucre ajouté, il offre une clarté de goût et une fraîcheur incomparables qui transforment n'importe quelle pause en moment de plaisir vrai.</p>
      <h2>Alain Milliat : le standard du jus artisanal</h2>
      <p>Alain Milliat a construit sa réputation sur un principe simple : utiliser uniquement des fruits de qualité exceptionnelle et les presser sans artifice. Ses jus sont reconnus par les grands restaurants et les maisons haut de gamme pour leur authenticité et leur intensité aromatique. Proposer un jus Alain Milliat à vos équipes ou clients, c'est leur offrir la meilleure version possible d'un jus de fruit.</p>
      <h2>Pour vos petits-déjeuners et pauses d'entreprise</h2>
      <p>Un litre de jus de pomme suffit pour servir <strong>6 à 8 personnes</strong> lors d'un petit-déjeuner d'entreprise. Associé à nos viennoiseries artisanales et à un thermos de café, il compose un accueil de qualité qui marque une vraie différence.</p>
      <h2>Commander vos boissons artisanales à Paris</h2>
      <p>Livraison dès <strong>6h30</strong> à Paris et en Île-de-France. Commandez avant 14h la veille. Facturation entreprise disponible.</p>
    `,
  },
  {
    id: 'jus-orange',
    name: "Jus d'Orange",
    shortName: "Jus d'Orange",
    price: 9.50,
    label: '1 litre — 9,50€',
    description: "1 litre — Jus d'orange Alain Milliat",
    qty: '1 litre',
    category: 'jus',
    categoryLabel: 'Jus & Nectars',
    img: '/bois-jus-orange.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Oranges sélectionnées, 100% pur jus. Sans sucre ajouté, sans conservateur, sans concentré. Alain Milliat.",
    seoTitle: "Jus d'orange Alain Milliat livraison Paris — traiteur entreprise Île-de-France",
    seoArticle: `
      <p>Le <strong>jus d'orange Alain Milliat</strong> est le classique absolu revisité à la hauteur des plus grandes maisons. Pressé à partir d'oranges sélectionnées pour leur maturité et leur teneur en sucre naturel, il offre un équilibre parfait entre douceur et acidité — sans sucre ajouté, sans concentré, sans compromis.</p>
      <h2>La différence que vos équipes remarquent</h2>
      <p>Un jus d'orange de qualité se reconnaît immédiatement : sa couleur naturelle, son parfum intense, sa texture légèrement pulpeuse. À côté d'un jus industriel en bouteille plastique, le jus d'orange Alain Milliat parle de lui-même. C'est le type de détail qui, accumulé, crée une impression durable sur vos collaborateurs et vos clients.</p>
      <h2>L'incontournable du petit-déjeuner d'entreprise</h2>
      <p>Le jus d'orange reste la boisson la plus demandée lors des petits-déjeuners d'entreprise. Un litre suffit pour <strong>6 à 8 personnes</strong>. Associé à nos viennoiseries artisanales, il compose un accueil classique et élégant pour vos CODIR, séminaires et formations matinales.</p>
    `,
  },
  {
    id: 'jus-abricot',
    name: "Nectar d'Abricot",
    shortName: "Nectar d'Abricot",
    price: 10.50,
    label: '1 litre — 10,50€',
    description: "1 litre — Nectar d'abricot Alain Milliat",
    qty: '1 litre',
    category: 'jus',
    categoryLabel: 'Jus & Nectars',
    img: '/bois-jus-abricot.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Abricots sélectionnés, sucre, eau. Nectar élaboré par Alain Milliat. Sans arôme artificiel, sans colorant.",
    seoTitle: "Nectar d'abricot Alain Milliat Paris — boisson premium traiteur entreprise",
    seoArticle: `
      <p>Le <strong>nectar d'abricot Alain Milliat</strong> est l'une des créations les plus appréciées de la gamme. Sa robe dorée, son parfum intense d'abricot solaire et sa texture veloutée en font une boisson d'exception qui surprend et séduit dès la première gorgée. Idéal pour apporter une touche d'originalité à vos petits-déjeuners d'entreprise.</p>
      <h2>L'abricot : un fruit d'exception travaillé avec soin</h2>
      <p>Alain Milliat sélectionne ses abricots à maturité parfaite pour obtenir un nectar dense et parfumé. La texture est généreuse sans être lourde, l'équilibre sucre-acidité est maîtrisé. C'est une boisson qui parle de soleil et de qualité — un choix raffiné pour distinguer votre prestation.</p>
      <h2>Pour diversifier vos plateaux boissons</h2>
      <p>En accompagnement d'un petit-déjeuner ou d'une pause gourmande, le nectar d'abricot apporte une alternative élégante au jus d'orange classique. L'association jus d'orange + nectar d'abricot fonctionne très bien pour les équipes qui aiment varier les plaisirs.</p>
    `,
  },
  {
    id: 'jus-peche',
    name: 'Nectar de Pêche',
    shortName: 'Nectar de Pêche',
    price: 10.50,
    label: '1 litre — 10,50€',
    description: '1 litre — Nectar de pêche Alain Milliat',
    qty: '1 litre',
    category: 'jus',
    categoryLabel: 'Jus & Nectars',
    img: '/bois-jus-peche.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Pêches sélectionnées, sucre, eau. Nectar élaboré par Alain Milliat. Sans arôme artificiel, sans colorant.",
    seoTitle: "Nectar de pêche Alain Milliat Paris — boisson artisanale traiteur entreprise livraison",
    seoArticle: `
      <p>Le <strong>nectar de pêche Alain Milliat</strong> est l'une des boissons les plus douces et les plus raffinées de notre sélection. Sa texture veloutée, son parfum délicat de pêche blanche et sa couleur rosée en font un choix élégant pour les accueils de partenaires, les afterworks ou les plateaux petit-déjeuner premium.</p>
      <h2>La pêche blanche au summum de sa maturité</h2>
      <p>Pour obtenir un nectar de cette qualité, Alain Milliat n'utilise que des pêches récoltées à pleine maturité, au pic de leur concentration aromatique. Le résultat est une boisson qui évoque immédiatement l'été et la fraîcheur — un contraste bienvenu dans une journée de travail chargée.</p>
      <h2>Idéal pour les prestations premium</h2>
      <p>Le nectar de pêche est particulièrement adapté aux événements où vous souhaitez marquer une attention particulière : accueil de grands comptes, célébration d'un anniversaire d'entreprise, séminaire de direction. Sa rareté relative en fait un choix différenciant qui crée la surprise.</p>
    `,
  },
  {
    id: 'jus-fraise',
    name: 'Nectar de Fraise',
    shortName: 'Nectar de Fraise',
    price: 10.50,
    label: '1 litre — 10,50€',
    description: '1 litre — Nectar de fraise Alain Milliat',
    qty: '1 litre',
    category: 'jus',
    categoryLabel: 'Jus & Nectars',
    img: '/bois-jus-fraise.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Fraises sélectionnées, sucre, eau. Nectar élaboré par Alain Milliat. Sans arôme artificiel, sans colorant.",
    seoTitle: "Nectar de fraise Alain Milliat Paris — jus artisanal livraison entreprise Île-de-France",
    seoArticle: `
      <p>Le <strong>nectar de fraise Alain Milliat</strong> capture l'essence de la fraise à son meilleur : intense, parfumé, généreux. Sa couleur rouge profonde et son nez de fraise fraîche en font une boisson qui attire immédiatement l'attention sur la table et crée un moment de surprise pour vos équipes et vos clients.</p>
      <h2>Une fraise qui a du goût</h2>
      <p>La différence entre un nectar de fraise industriel et un Alain Milliat est immédiate : là où l'un évoque vaguement la fraise, l'autre la révèle dans toute sa complexité. Alain Milliat sélectionne des variétés de fraises reconnues pour leur teneur aromatique — Mara des Bois, Charlotte, Gariguette selon la saison.</p>
      <h2>Pour vos petits-déjeuners et accueils premium</h2>
      <p>Sa couleur vive et son parfum attrayant en font une boisson de choix pour les accueils clients et les événements d'entreprise où la présentation compte.</p>
    `,
  },
  {
    id: 'jus-orange-presse',
    name: "Jus d'Orange Pressé Minute",
    shortName: "OJ Pressé Minute",
    price: 9.90,
    label: '1 litre — 9,90€',
    description: "1 litre — Pur jus pressé minute",
    qty: '1 litre',
    category: 'jus',
    categoryLabel: 'Jus & Nectars',
    img: '/bois-jus-orange-presse.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Oranges pressées minute le matin même. 100% pur jus, sans sucre ajouté, sans conservateur, sans concentré.",
    seoTitle: "Jus d'orange pressé minute livraison Paris — traiteur entreprise frais dès 6h30",
    seoArticle: `
      <p>Le <strong>jus d'orange pressé minute</strong> est le standard absolu en matière de boisson fraîche pour les petits-déjeuners d'entreprise premium. Pressé le matin même, livré en quelques heures — c'est le jus le plus frais qu'il soit possible de commander pour votre équipe à Paris.</p>
      <h2>Pressé le matin, livré frais</h2>
      <p>Contrairement aux jus conditionnés qui peuvent avoir été pressés des jours ou des semaines avant, notre jus d'orange pressé minute est préparé le matin de votre livraison. La différence est immédiate : la couleur est plus vive, le goût est plus intense, les vitamines sont préservées.</p>
      <h2>L'argument qualité pour votre marque employeur</h2>
      <p>Proposer un jus pressé minute à vos équipes plutôt qu'un jus en bouteille du supermarché, c'est un signal fort sur votre culture d'entreprise. Ce détail parle de votre attention au bien-être de vos collaborateurs — un argument de marque employeur concret et mémorable.</p>
    `,
  },
  {
    id: 'jus-pomme-verger',
    name: 'Jus de Pomme du Verger',
    shortName: 'Pomme Verger de Plaisir',
    price: 9.50,
    label: '1 litre — 9,50€',
    description: '1 litre — Vergers de Plaisir, Yvelines',
    qty: '1 litre',
    category: 'jus',
    categoryLabel: 'Jus & Nectars',
    img: '/bois-jus-verger.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Pommes des Vergers de Plaisir (Yvelines), circuit direct producteur. 100% pur jus, sans sucre ajouté, sans concentré.",
    seoTitle: "Jus de pomme du verger Yvelines — circuit court livraison Paris entreprise",
    seoArticle: `
      <p>Le <strong>jus de pomme du Verger de Plaisir</strong> est notre choix de circuit court par excellence. Produit dans les Yvelines, à moins de 40 km de Paris, ce jus illustre notre engagement : quand la proximité améliore réellement le produit, nous la choisissons.</p>
      <h2>Les Vergers de Plaisir : un circuit direct sans intermédiaire</h2>
      <p>Nous travaillons directement avec les Vergers de Plaisir, situés dans les Yvelines. Leurs pommes sont récoltées à maturité et pressées rapidement — sans intermédiaire, sans entrepôt, sans délai inutile. Ce circuit ultra-court est l'une des raisons pour lesquelles ce jus se distingue par sa fraîcheur et son intensité aromatique naturelle.</p>
      <h2>Un argument fort pour votre démarche RSE</h2>
      <p>Proposer un jus produit à 40 km de Paris, en circuit direct, c'est un geste concret pour réduire l'empreinte carbone de votre prestation. Dans une période où les entreprises cherchent à rendre leur démarche RSE tangible, choisir ce jus est un choix qui se défend et se raconte.</p>
    `,
  },
  {
    id: 'jus-pomme-framboise',
    name: 'Jus de Pomme-Framboise',
    shortName: 'Pomme-Framboise',
    price: 9.50,
    label: '1 litre — 9,50€',
    description: '1 litre — Jus pomme & framboise',
    qty: '1 litre',
    category: 'jus',
    categoryLabel: 'Jus & Nectars',
    img: '/bois-jus-framboise.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Pommes pressées, framboises. Sans sucre ajouté, sans conservateur, sans concentré.",
    seoTitle: "Jus pomme-framboise livraison Paris — boisson artisanale traiteur entreprise",
    seoArticle: `
      <p>Le <strong>jus de pomme-framboise</strong> est l'assemblage fruité qui crée toujours une agréable surprise sur les tables de réunion. La douceur naturelle de la pomme, alliée à l'acidité vive de la framboise, donne une boisson équilibrée et colorée qui se démarque immédiatement des jus standards.</p>
      <h2>L'originalité qui déclenche la conversation</h2>
      <p>Proposer un jus de pomme-framboise plutôt qu'un jus d'orange classique, c'est introduire une touche de surprise dans votre accueil. Les collaborateurs le remarquent, s'interrogent, apprécient. Ces petits détails qui sortent de l'ordinaire contribuent à créer une ambiance plus détendue et mémorable lors de vos événements d'entreprise.</p>
      <h2>Une couleur rose naturelle, aucun colorant</h2>
      <p>La belle couleur rosée de ce jus est entièrement naturelle — elle vient de la framboise, pas d'un colorant artificiel. Sur la table, ce jus est visuellement attrayant et ajoute une note de fraîcheur à votre installation petit-déjeuner.</p>
    `,
  },
  {
    id: 'citronnade-gingembre',
    name: 'Citronnade Gingembre JOMO',
    shortName: 'Citronnade Gingembre',
    price: 9.50,
    label: '1 litre — 9,50€',
    description: '1 litre — Citronnade JOMO, artisanale',
    qty: '1 litre',
    category: 'jus',
    categoryLabel: 'Jus & Nectars',
    img: '/bois-citronnade.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Citrons pressés, gingembre frais, eau, sucre de canne. Préparation artisanale JOMO. Sans conservateur, sans arôme artificiel.",
    seoTitle: "Citronnade gingembre JOMO Paris — boisson artisanale livraison traiteur entreprise",
    seoArticle: `
      <p>La <strong>citronnade gingembre JOMO</strong> est notre proposition la plus tonique et la plus originale. Préparée artisanalement avec des citrons frais pressés et du gingembre frais râpé, elle offre un piqué naturel et une fraîcheur immédiate qui réveille les papilles — idéale pour les réunions de l'après-midi.</p>
      <h2>JOMO : l'artisan de la limonade à Paris</h2>
      <p>Nous avons sélectionné JOMO pour la qualité de sa formule et son engagement envers des ingrédients vrais. Pas d'arôme citron artificiel, pas d'acidifiant chimique — juste des citrons, du gingembre, de l'eau et du sucre de canne. Une citronnade honnête, intense, qui rappelle celle qu'on prépare à la maison en mieux.</p>
      <h2>La boisson de l'après-midi par excellence</h2>
      <p>Après un déjeuner ou en milieu d'après-midi, la citronnade gingembre apporte une note de fraîcheur et d'énergie qui redynamise une réunion. Ses propriétés naturellement tonifiantes en font également un choix pertinent pour les longues journées de séminaire.</p>
    `,
  },

  // ─── Boissons Chaudes ─────────────────────────────────────────────────────────
  {
    id: 'thermos-cafe',
    name: 'Thermos de Café Bio',
    shortName: 'Thermos de Café',
    price: 19.50,
    label: '1 litre — 19,50€',
    description: '1 litre — Café bio, environ 6 à 8 tasses',
    qty: '1 litre · 6–8 tasses',
    category: 'chaud',
    categoryLabel: 'Boissons Chaudes',
    img: '/bois-thermos-cafe.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Café arabica bio sélectionné, torréfié artisanalement. Préparé le matin même et conditionné en thermos isotherme.",
    seoTitle: "Thermos de café bio livraison Paris — traiteur entreprise petit-déjeuner dès 6h30",
    seoArticle: `
      <p>Le <strong>thermos de café bio</strong> est l'incontournable de tout petit-déjeuner d'entreprise qui se respecte. Préparé le matin même à partir d'un café arabica bio soigneusement sélectionné et torréfié artisanalement, il est conditionné dans un thermos isotherme qui maintient la température pendant plusieurs heures.</p>
      <h2>Un café bio qui a du caractère</h2>
      <p>Notre café bio est issu de torréfacteurs artisanaux parisiens qui travaillent des origines sélectionnées pour leur équilibre aromatique. Le résultat est un café rond, peu amer, qui convient aussi bien aux amateurs d'espresso qu'à ceux qui préfèrent un café plus léger.</p>
      <h2>Le thermos : pratique pour toute la matinée</h2>
      <p>Un litre de café représente <strong>6 à 8 tasses</strong> selon le format. Notre thermos isotherme maintient le café chaud pendant <strong>4 à 5 heures</strong> après la livraison — vous pouvez l'installer à l'arrivée et laisser vos équipes se servir tout au long de la matinée sans contrainte.</p>
      <h2>Traiteur café Paris — livraison entreprise dès 6h30</h2>
      <p>Livraison dès <strong>6h30</strong> à Paris et en Île-de-France. Commandez avant 14h la veille. Tasses, cuillères et sucre peuvent être ajoutés à votre commande.</p>
    `,
  },
  {
    id: 'thermos-the',
    name: 'Thermos de Thé Dammann Frères',
    shortName: 'Thermos de Thé',
    price: 19.50,
    label: '1 litre — 19,50€',
    description: '1 litre — Thé Dammann Frères, 6 à 8 tasses',
    qty: '1 litre · 6–8 tasses',
    category: 'chaud',
    categoryLabel: 'Boissons Chaudes',
    img: '/bois-thermos-cafe.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Thé de qualité supérieure Dammann Frères, infusé selon les règles de l'art. Conditionné en thermos isotherme.",
    seoTitle: "Thermos de thé Dammann Frères Paris — traiteur entreprise livraison dès 6h30",
    seoArticle: `
      <p>Le <strong>thermos de thé Dammann Frères</strong> est l'alternative élégante au café pour les amateurs de thé. Dammann Frères est l'une des maisons de thé les plus réputées de Paris, reconnue pour la qualité de ses assemblages et la précision de ses arômes depuis 1692.</p>
      <h2>Dammann Frères : la maison de thé parisienne de référence</h2>
      <p>Fondée à Paris, Dammann Frères est synonyme d'excellence dans le monde du thé. Leurs assemblages sont travaillés avec la même rigueur qu'un grand parfumeur — chaque mélange est le résultat d'une expertise transmise de génération en génération. Proposer un thé Dammann Frères, c'est offrir une expérience de dégustation réelle.</p>
      <h2>Un thermos pour 6 à 8 personnes</h2>
      <p>Notre thermos d'un litre permet de servir <strong>6 à 8 tasses</strong> et maintient le thé à température idéale pendant plusieurs heures. Il s'intègre naturellement à votre plateau petit-déjeuner aux côtés d'un thermos de café pour proposer le choix à l'ensemble de vos collaborateurs.</p>
    `,
  },
  {
    id: 'thermos-chocolat',
    name: 'Thermos de Chocolat Chaud',
    shortName: 'Chocolat Chaud',
    price: 19.50,
    label: '1 litre — 19,50€',
    description: '1 litre — Chocolat chaud artisanal, 6 à 8 tasses',
    qty: '1 litre · 6–8 tasses',
    category: 'chaud',
    categoryLabel: 'Boissons Chaudes',
    img: '/bois-thermos-cafe.webp',
    dietary: ['Végétarien', 'Sans gluten'],
    allergens: ['Lait'],
    ingredients: "Lait entier, chocolat noir de qualité, sucre. Préparé artisanalement le matin même. Conditionné en thermos isotherme.",
    seoTitle: "Thermos de chocolat chaud livraison Paris — traiteur entreprise petit-déjeuner",
    seoArticle: `
      <p>Le <strong>thermos de chocolat chaud</strong> est la boisson réconfortante et fédératrice par excellence lors des petits-déjeuners d'entreprise. Préparé avec du chocolat noir de qualité et du lait entier, il offre une richesse aromatique et une onctuosité qui en font un incontournable des matins d'hiver.</p>
      <h2>Un chocolat chaud qui ne ressemble pas à celui des distributeurs</h2>
      <p>Notre chocolat chaud est préparé artisanalement le matin même, avec du vrai chocolat noir et du lait entier — pas une poudre reconstituée à l'eau chaude. La différence de goût et de texture est immédiate. C'est le genre de détail que vos équipes remarquent et apprécient sincèrement.</p>
      <h2>Idéal pour les petits-déjeuners et les séminaires</h2>
      <p>Lors des journées de formation, des séminaires ou des réunions importantes, proposer du chocolat chaud en plus du café et du thé permet de satisfaire tous les goûts et de créer une atmosphère plus chaleureuse et informelle.</p>
    `,
  },

  // ─── Eaux ─────────────────────────────────────────────────────────────────────
  {
    id: 'evian-75',
    name: 'Evian 75cl',
    shortName: 'Evian 75cl',
    price: 4.80,
    label: '75cl — 4,80€',
    description: '1 bouteille Evian 75cl',
    qty: '1 bouteille · 75cl',
    category: 'eau',
    categoryLabel: 'Eaux',
    img: '/bois-evian-75.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Eau minérale naturelle des Alpes. Source Evian, Évian-les-Bains.",
    seoTitle: "Evian 75cl livraison Paris — eau minérale traiteur entreprise Île-de-France",
    seoArticle: `
      <p>L'<strong>Evian 75cl</strong> est l'eau minérale de référence pour les événements d'entreprise. Issue des Alpes et réputée pour sa pureté et son goût neutre, elle accompagne idéalement tous vos plateaux repas, petits-déjeuners et buffets.</p>
      <h2>L'eau qui convient à tous</h2>
      <p>Neutre en goût, riche en minéraux naturels, faiblement minéralisée — l'Evian est la référence des eaux plates dans les entreprises françaises pour une raison simple : elle convient à tout le monde. Elle accompagne les repas sans s'imposer.</p>
      <h2>Format idéal pour les réunions et les plateaux repas</h2>
      <p>Une bouteille de 75cl permet de servir 2 à 3 personnes lors d'un repas. Nous la proposons à la bouteille pour vous permettre de calibrer précisément votre commande en fonction du nombre de convives.</p>
    `,
  },
  {
    id: 'badoit-75',
    name: 'Badoit 75cl',
    shortName: 'Badoit 75cl',
    price: 4.80,
    label: '75cl — 4,80€',
    description: '1 bouteille Badoit 75cl',
    qty: '1 bouteille · 75cl',
    category: 'eau',
    categoryLabel: 'Eaux',
    img: '/bois-badoit.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Eau minérale naturelle gazeuse de Badoit. Source Saint-Galmier, Loire.",
    seoTitle: "Badoit 75cl livraison Paris — eau gazeuse traiteur entreprise déjeuner réunion",
    seoArticle: `
      <p>La <strong>Badoit 75cl</strong> est l'eau gazeuse de référence des tables d'entreprise françaises. Ses fines bulles naturelles, son goût légèrement minéral et sa digestibilité reconnue en font le compagnon idéal des plateaux repas et des réunions de travail.</p>
      <h2>Les fines bulles naturelles de Badoit</h2>
      <p>Ce qui distingue Badoit des autres eaux gazeuses, c'est la finesse naturelle de ses bulles — un résultat de sa source naturellement gazeuse à Saint-Galmier dans la Loire. Ces bulles délicates accompagnent le repas sans agresser le palais et facilitent la digestion.</p>
      <h2>L'incontournable des plateaux repas d'entreprise</h2>
      <p>Dans la gamme de nos eaux, la Badoit complète l'Evian plate pour offrir le choix entre eau plate et gazeuse lors de vos plateaux repas, déjeuners de travail et événements d'entreprise.</p>
    `,
  },
  {
    id: 'evian-33',
    name: 'Evian 33cl',
    shortName: 'Evian 33cl',
    price: 3.80,
    label: '33cl — 3,80€',
    description: '1 bouteille Evian 33cl',
    qty: '1 bouteille · 33cl',
    category: 'eau',
    categoryLabel: 'Eaux',
    img: '/bois-evian-33.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Eau minérale naturelle des Alpes. Source Evian, Évian-les-Bains.",
    seoTitle: "Evian 33cl livraison Paris — eau individuelle traiteur entreprise Île-de-France",
    seoArticle: `
      <p>L'<strong>Evian 33cl</strong> est le format individuel par excellence pour les plateaux repas, les petits-déjeuners et les pauses d'entreprise. Une bouteille individuelle par personne — pratique, élégant, sans gaspillage.</p>
      <h2>Le format individuel pour les plateaux repas</h2>
      <p>Dans le cadre d'un plateau repas d'entreprise, le format 33cl est le choix le plus cohérent : une bouteille par plateau, une boisson par personne. Pas de partage, pas de manipulation — chacun dispose de sa propre eau minérale, propre et scellée.</p>
      <h2>Evian : la pureté des Alpes dans chaque bouteille</h2>
      <p>L'Evian est filtrée naturellement pendant 15 ans à travers les roches glaciaires des Alpes avant d'atteindre sa source. Cette filtration naturelle lui confère une pureté exceptionnelle et une composition minérale stable.</p>
    `,
  },
]

export const getBoissonsById = (id) => BOISSONS.find(p => p.id === id)
