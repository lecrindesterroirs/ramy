// Données structurées des produits, Boissons

export const BOISSONS = [
  // ─── Jus & Nectars ───────────────────────────────────────────────────────────
  {
    id: 'jus-pomme',
    name: 'Jus de Pomme',
    shortName: 'Jus de Pomme',
    price: 9.50,
    label: '1 litre · 9,50€',
    description: '1 litre · Jus de pomme Alain Milliat',
    qty: '1 litre',
    category: 'jus',
    categoryLabel: 'Jus & Nectars',
    img: '/bois-jus-pomme.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: 'Pommes françaises pressées, 100% pur jus. Sans sucre ajouté, sans conservateur, sans concentré. Alain Milliat.',
    seoTitle: "Jus de pomme Alain Milliat",
    seoArticle: `
      <p>Le <strong>jus de pomme Alain Milliat</strong> est l'une des références absolues du jus artisanal en France. Issu de pommes françaises soigneusement sélectionnées, pressé sans concentré ni sucre ajouté, il offre une clarté de goût et une fraîcheur incomparables qui transforment n'importe quelle pause en moment de plaisir vrai.</p>
      <h2>Alain Milliat : le standard du jus artisanal</h2>
      <p>Alain Milliat a construit sa réputation sur un principe simple : choisir des fruits à maturité et les presser sans concentré ni sucre ajouté. Ses jus sont reconnus par les grands restaurants et les maisons haut de gamme pour leur authenticité et leur intensité aromatique. Proposer un jus Alain Milliat à vos équipes ou clients, c'est leur offrir la meilleure version possible d'un jus de fruit.</p>
      <h2>Pour vos petits-déjeuners et pauses d'entreprise</h2>
      <p>Un litre de jus de pomme suffit pour servir <strong>5 à 6 personnes</strong> lors d'un petit-déjeuner d'entreprise. Associé à nos viennoiseries artisanales et à un thermos de café, il compose un accueil soigné qui marque une vraie différence.</p>
      <h2>Commander vos boissons artisanales à Paris</h2>
      <p>Livraison dès <strong>6h30</strong> à Paris et en Île-de-France. Commandez avant 14h la veille. Facturation entreprise disponible.</p>
    `,
  },
  {
    id: 'jus-orange',
    name: "Jus d'Orange",
    shortName: "Jus d'Orange",
    price: 9.50,
    label: '1 litre · 9,50€',
    description: "1 litre · Jus d'orange Alain Milliat",
    qty: '1 litre',
    category: 'jus',
    categoryLabel: 'Jus & Nectars',
    img: '/bois-jus-orange.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Oranges sélectionnées, 100% pur jus. Sans sucre ajouté, sans conservateur, sans concentré. Alain Milliat.",
    seoTitle: "Jus d'orange Alain Milliat",
    seoArticle: `
      <p>Le <strong>jus d'orange Alain Milliat</strong> est le classique absolu revisité à la hauteur des plus grandes maisons. Pressé à partir d'oranges sélectionnées pour leur maturité et leur teneur en sucre naturel, il offre un équilibre parfait entre douceur et acidité, sans sucre ajouté, sans concentré, sans compromis.</p>
      <h2>La différence que vos équipes remarquent</h2>
      <p>Un bon jus d'orange se reconnaît immédiatement : sa couleur naturelle, son parfum intense, sa texture légèrement pulpeuse. À côté d'un jus industriel en bouteille plastique, le jus d'orange Alain Milliat parle de lui-même. C'est le type de détail qui, accumulé, crée une impression durable sur vos collaborateurs et vos clients.</p>
      <h2>Le jus du petit-déjeuner d'entreprise</h2>
      <p>Le jus d'orange reste la boisson la plus demandée lors des petits-déjeuners d'entreprise. Un litre suffit pour <strong>5 à 6 personnes</strong>. Associé à nos viennoiseries artisanales, il compose un accueil classique et élégant pour vos CODIR, séminaires et formations matinales.</p>
    `,
  },
  {
    id: 'jus-abricot',
    name: "Nectar d'Abricot",
    shortName: "Nectar d'Abricot",
    price: 10.50,
    label: '1 litre · 10,50€',
    description: "1 litre · Nectar d'abricot Alain Milliat",
    qty: '1 litre',
    category: 'jus',
    categoryLabel: 'Jus & Nectars',
    img: '/bois-jus-abricot.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Abricots sélectionnés, sucre, eau. Nectar élaboré par Alain Milliat. Sans arôme artificiel, sans colorant.",
    seoTitle: "Nectar d'abricot Alain Milliat",
    seoArticle: `
      <p>Le <strong>nectar d'abricot Alain Milliat</strong> est l'une des créations les plus appréciées de la gamme. Sa robe dorée, son parfum intense d'abricot solaire et sa texture veloutée en font une boisson d'exception qui surprend et séduit dès la première gorgée. Idéal pour apporter une touche d'originalité à vos petits-déjeuners d'entreprise.</p>
      <h2>L'abricot : un fruit d'exception travaillé avec soin</h2>
      <p>Alain Milliat sélectionne ses abricots à maturité parfaite pour obtenir un nectar dense et parfumé. La texture est généreuse sans être lourde, l'équilibre sucre-acidité est maîtrisé. C'est une boisson qui parle de soleil et de qualité, un choix raffiné pour distinguer votre prestation.</p>
      <h2>Pour diversifier vos plateaux boissons</h2>
      <p>En accompagnement d'un petit-déjeuner ou d'une pause gourmande, le nectar d'abricot apporte une alternative élégante au jus d'orange classique. L'association jus d'orange + nectar d'abricot fonctionne très bien pour les équipes qui aiment varier les plaisirs.</p>
    `,
  },
  {
    id: 'jus-peche',
    name: 'Nectar de Pêche',
    shortName: 'Nectar de Pêche',
    price: 10.50,
    label: '1 litre · 10,50€',
    description: '1 litre · Nectar de pêche Alain Milliat',
    qty: '1 litre',
    category: 'jus',
    categoryLabel: 'Jus & Nectars',
    img: '/bois-jus-peche.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Pêches sélectionnées, sucre, eau. Nectar élaboré par Alain Milliat. Sans arôme artificiel, sans colorant.",
    seoTitle: "Nectar de pêche Alain Milliat",
    seoArticle: `
      <p>Le <strong>nectar de pêche Alain Milliat</strong> est l'une des boissons les plus douces et les plus raffinées de notre sélection. Sa texture veloutée, son parfum délicat de pêche blanche et sa couleur rosée en font un choix élégant pour les accueils de partenaires, les afterworks ou les petits-déjeuners de réunion.</p>
      <h2>La pêche blanche au summum de sa maturité</h2>
      <p>Pour obtenir un nectar de cette qualité, Alain Milliat n'utilise que des pêches récoltées à pleine maturité, au pic de leur concentration aromatique. Le résultat est une boisson qui évoque immédiatement l'été et la fraîcheur, un contraste bienvenu dans une journée de travail chargée.</p>
      <h2>Pour un accueil client ou un comité</h2>
      <p>Le nectar de pêche est particulièrement adapté aux événements où vous souhaitez marquer une attention particulière : accueil de grands comptes, célébration d'un anniversaire d'entreprise, séminaire de direction. Sa rareté relative en fait un choix différenciant qui crée la surprise.</p>
    `,
  },
  {
    id: 'jus-fraise',
    name: 'Nectar de Fraise',
    shortName: 'Nectar de Fraise',
    price: 10.50,
    label: '1 litre · 10,50€',
    description: '1 litre · Nectar de fraise Alain Milliat',
    qty: '1 litre',
    category: 'jus',
    categoryLabel: 'Jus & Nectars',
    img: '/bois-jus-fraise.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Fraises sélectionnées, sucre, eau. Nectar élaboré par Alain Milliat. Sans arôme artificiel, sans colorant.",
    seoTitle: "Nectar de fraise Alain Milliat",
    seoArticle: `
      <p>Le <strong>nectar de fraise Alain Milliat</strong> capture l'essence de la fraise à son meilleur : intense, parfumé, généreux. Sa couleur rouge profonde et son nez de fraise fraîche en font une boisson qui attire immédiatement l'attention sur la table et crée un moment de surprise pour vos équipes et vos clients.</p>
      <h2>Une fraise qui a du goût</h2>
      <p>La différence entre un nectar de fraise industriel et un Alain Milliat est immédiate : là où l'un évoque vaguement la fraise, l'autre la révèle dans toute sa complexité. Alain Milliat sélectionne des variétés de fraises reconnues pour leur teneur aromatique, Mara des Bois, Charlotte, Gariguette selon la saison.</p>
      <h2>Pour vos petits-déjeuners et accueils clients</h2>
      <p>Sa couleur vive et son parfum attrayant en font une boisson de choix pour les accueils clients et les événements d'entreprise où la présentation compte.</p>
    `,
  },
  {
    id: 'jus-orange-presse',
    name: "Jus d'Orange Pressé Minute",
    shortName: "OJ Pressé Minute",
    price: 9.90,
    label: '1 litre · 9,90€',
    description: "1 litre · Pur jus pressé minute",
    qty: '1 litre',
    category: 'jus',
    categoryLabel: 'Jus & Nectars',
    img: '/bois-jus-orange-presse.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Oranges pressées minute le matin même. 100% pur jus, sans sucre ajouté, sans conservateur, sans concentré.",
    seoTitle: "Jus d'orange pressé minute Paris",
    seoArticle: `
      <p>Le <strong>jus d'orange pressé minute</strong> est le standard absolu en matière de boisson fraîche pour les petits-déjeuners d'entreprise. Pressé le matin même, livré en quelques heures, c'est le jus le plus frais qu'il soit possible de commander pour votre équipe à Paris.</p>
      <h2>Pressé le matin, livré frais</h2>
      <p>Contrairement aux jus conditionnés qui peuvent avoir été pressés des jours ou des semaines avant, notre jus d'orange pressé minute est préparé le matin de votre livraison. La différence est immédiate : la couleur est plus vive, le goût est plus intense, les vitamines sont préservées.</p>
      <h2>L'argument qualité pour votre marque employeur</h2>
      <p>Proposer un jus pressé minute à vos équipes plutôt qu'un jus en bouteille du supermarché, c'est un signal fort sur votre culture d'entreprise. Ce détail parle de votre attention au bien-être de vos collaborateurs, un argument de marque employeur concret et mémorable.</p>
    `,
  },
  {
    id: 'jus-pomme-verger',
    name: 'Jus de Pomme du Verger',
    shortName: 'Pomme Verger de Plaisir',
    price: 9.50,
    label: '1 litre · 9,50€',
    description: '1 litre · Vergers de Plaisir, Yvelines',
    qty: '1 litre',
    category: 'jus',
    categoryLabel: 'Jus & Nectars',
    img: '/bois-jus-verger.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Pommes des Vergers de Plaisir (Yvelines), circuit direct producteur. 100% pur jus, sans sucre ajouté, sans concentré.",
    seoTitle: "Jus de pomme du verger Yvelines",
    seoArticle: `
      <p>Le <strong>jus de pomme du Verger de Plaisir</strong> est notre choix de circuit court par excellence. Produit dans les Yvelines, à moins de 40 km de Paris, ce jus illustre notre engagement : quand la proximité améliore réellement le produit, nous la choisissons.</p>
      <h2>Les Vergers de Plaisir : un circuit direct sans intermédiaire</h2>
      <p>Nous travaillons directement avec les Vergers de Plaisir, situés dans les Yvelines. Leurs pommes sont récoltées à maturité et pressées rapidement, sans intermédiaire, sans entrepôt, sans délai inutile. Ce circuit ultra-court est l'une des raisons pour lesquelles ce jus se distingue par sa fraîcheur et son intensité aromatique naturelle.</p>
      <h2>Un argument fort pour votre démarche RSE</h2>
      <p>Proposer un jus produit à 40 km de Paris, en circuit direct, c'est un geste concret pour réduire l'empreinte carbone de votre prestation. Dans une période où les entreprises cherchent à rendre leur démarche RSE tangible, choisir ce jus est un choix qui se défend et se raconte.</p>
    `,
  },
  {
    id: 'jus-pomme-framboise',
    name: 'Jus de Pomme-Framboise',
    shortName: 'Pomme-Framboise',
    price: 9.50,
    label: '1 litre · 9,50€',
    description: '1 litre · Jus pomme & framboise',
    qty: '1 litre',
    category: 'jus',
    categoryLabel: 'Jus & Nectars',
    img: '/bois-jus-framboise.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Pommes pressées, framboises. Sans sucre ajouté, sans conservateur, sans concentré.",
    seoTitle: "Jus pomme-framboise livraison Paris",
    seoArticle: `
      <p>Le <strong>jus de pomme-framboise</strong> est l'assemblage fruité qui crée toujours une agréable surprise sur les tables de réunion. La douceur naturelle de la pomme, alliée à l'acidité vive de la framboise, donne une boisson équilibrée et colorée qui se démarque immédiatement des jus standards.</p>
      <h2>L'originalité qui déclenche la conversation</h2>
      <p>Proposer un jus de pomme-framboise plutôt qu'un jus d'orange classique, c'est introduire une touche de surprise dans votre accueil. Les collaborateurs le remarquent, s'interrogent, apprécient. Ces petits détails qui sortent de l'ordinaire contribuent à créer une ambiance plus détendue et mémorable lors de vos événements d'entreprise.</p>
      <h2>Une couleur rose naturelle, aucun colorant</h2>
      <p>La belle couleur rosée de ce jus est entièrement naturelle, elle vient de la framboise, pas d'un colorant artificiel. Sur la table, ce jus est visuellement attrayant et ajoute une note de fraîcheur à votre installation petit-déjeuner.</p>
    `,
  },
  {
    id: 'jus-tomate-rouge',
    name: 'Jus de Tomate Rouge',
    shortName: 'Jus de Tomate Rouge',
    price: 9.50,
    label: '1 litre · 9,50€',
    description: '1 litre · Jus de tomate Alain Milliat',
    qty: '1 litre',
    category: 'jus',
    categoryLabel: 'Jus & Nectars',
    img: '/bois-jus-tomate.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Tomates rouges sélectionnées, sel, épices. 100% pur jus, sans conservateur, sans concentré. Alain Milliat.",
    seoTitle: "Jus de tomate rouge Alain Milliat",
    seoArticle: `
      <p>Le <strong>jus de tomate Alain Milliat</strong> change des classiques pomme et orange sur un plateau petit-déjeuner. Pressé à partir de tomates rouges sélectionnées et légèrement relevé de sel et d'épices, il apporte une note salée qui tranche agréablement avec le reste de la table.</p>
      <h2>Une alternative qui trouve toujours son public</h2>
      <p>Sur un buffet varié, le jus de tomate a ses habitués : ceux qui cherchent une boisson moins sucrée le matin, ou qui l'apprécient en accompagnement d'un plateau repas le midi. Sa présence complète intelligemment une offre de jus déjà installée.</p>
      <h2>Pour vos petits-déjeuners et plateaux repas</h2>
      <p>Livraison dès <strong>6h30</strong> à Paris et en Île-de-France. Commandez avant 14h la veille. Facturation entreprise disponible.</p>
    `,
  },
  {
    id: 'nectar-mangue',
    name: 'Nectar de Mangue',
    shortName: 'Nectar de Mangue',
    price: 10.50,
    label: '1 litre · 10,50€',
    description: '1 litre · Nectar de mangue Alain Milliat',
    qty: '1 litre',
    category: 'jus',
    categoryLabel: 'Jus & Nectars',
    img: '/bois-jus-mangue.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Mangues sélectionnées, sucre, eau. Nectar élaboré par Alain Milliat. Sans arôme artificiel, sans colorant.",
    seoTitle: "Nectar de mangue Alain Milliat",
    seoArticle: `
      <p>Le <strong>nectar de mangue Alain Milliat</strong> apporte une couleur et un parfum solaires à vos plateaux petit-déjeuner. Sa texture veloutée et son goût généreux de mangue mûre en font une boisson qui sort de l'ordinaire, appréciée aussi bien en petit-déjeuner qu'en pause l'après-midi.</p>
      <h2>Une mangue choisie à pleine maturité</h2>
      <p>Alain Milliat sélectionne des mangues récoltées à maturité pour obtenir un nectar dense, sans amertume, avec ce parfum tropical reconnaissable immédiatement. C'est une boisson qui change des jus habituels sans dérouter vos équipes.</p>
      <h2>Pour diversifier vos plateaux boissons</h2>
      <p>Un litre suffit pour 5 à 6 personnes. Livraison dès <strong>6h30</strong> à Paris et en Île-de-France, commande avant 14h la veille.</p>
    `,
  },
  {
    id: 'nectar-passion',
    name: 'Nectar de Fruit de la Passion',
    shortName: 'Nectar de Passion',
    price: 10.50,
    label: '1 litre · 10,50€',
    description: '1 litre · Nectar de passion Alain Milliat',
    qty: '1 litre',
    category: 'jus',
    categoryLabel: 'Jus & Nectars',
    img: '/bois-jus-passion.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Fruits de la passion sélectionnés, sucre, eau. Nectar élaboré par Alain Milliat. Sans arôme artificiel, sans colorant.",
    seoTitle: "Nectar de fruit de la passion Alain Milliat",
    seoArticle: `
      <p>Le <strong>nectar de fruit de la passion Alain Milliat</strong> est le plus vif et le plus parfumé de la gamme. Son acidité franche et son parfum exotique intense réveillent les papilles, un choix qui tranche nettement avec les jus plus classiques.</p>
      <h2>Une intensité aromatique reconnaissable</h2>
      <p>Le fruit de la passion est difficile à travailler tant son acidité est marquée : Alain Milliat maîtrise l'équilibre sucre-acidité pour livrer un nectar qui garde tout son caractère sans agresser le palais.</p>
      <h2>Pour surprendre sur un plateau petit-déjeuner ou cocktail</h2>
      <p>Un litre sert 5 à 6 personnes. Livraison dès <strong>6h30</strong> à Paris et en Île-de-France, commande avant 14h la veille.</p>
    `,
  },
  {
    id: 'nectar-mangue-passion',
    name: 'Nectar de Mangue-Passion Bio',
    shortName: 'Mangue-Passion Bio',
    price: 10.50,
    label: '1 litre · 10,50€',
    description: '1 litre · Nectar bio mangue-passion Alain Milliat',
    qty: '1 litre',
    category: 'jus',
    categoryLabel: 'Jus & Nectars',
    img: '/bois-jus-mangue-passion.webp',
    dietary: ['Vegan', 'Sans gluten', 'Bio'],
    allergens: [],
    ingredients: "Mangues et fruits de la passion issus de l'agriculture biologique, sucre de canne, eau. Nectar bio élaboré par Alain Milliat. Sans arôme artificiel, sans colorant.",
    seoTitle: "Nectar de mangue-passion bio Alain Milliat",
    seoArticle: `
      <p>Le <strong>nectar de mangue-passion bio Alain Milliat</strong> associe la douceur ronde de la mangue à l'acidité vive du fruit de la passion, le tout élaboré à partir de fruits issus de l'agriculture biologique. Un équilibre gourmand qui plaît autant qu'il surprend.</p>
      <h2>Deux fruits, un seul nectar bio</h2>
      <p>L'assemblage mangue-passion est pensé pour que ni l'un ni l'autre fruit ne domine : la mangue apporte le fondant, la passion apporte le peps. Le résultat est une boisson ronde en attaque, vive en fin de bouche.</p>
      <h2>Pour une offre bio sur vos plateaux boissons</h2>
      <p>Un litre suffit pour 5 à 6 personnes. Livraison dès <strong>6h30</strong> à Paris et en Île-de-France, commande avant 14h la veille.</p>
    `,
  },
  {
    id: 'infusion-gingembre-1l',
    name: 'Infusion Citron Vert & Gingembre Bio',
    shortName: 'Infusion Citron Vert & Gingembre',
    price: 10.50,
    label: '1 litre · 10,50€',
    description: '1 litre · Bouteille en verre, infusion bio de citron vert et gingembre frais',
    qty: '1 bouteille en verre · 1 litre',
    category: 'jus',
    categoryLabel: 'Jus & Nectars',
    img: '/bois-infusion-gingembre-1l.webp',
    dietary: ['Vegan', 'Sans gluten', 'Bio'],
    allergens: [],
    ingredients: "Infusion de gingembre frais bio et de citron vert bio, eau, sucre de canne bio. Préparation artisanale, sans arôme artificiel, sans conservateur.",
    seoTitle: "Infusion citron vert gingembre bio, bouteille 1 litre Paris",
    seoArticle: `
      <p>L'<strong>infusion citron vert et gingembre bio</strong> est préparée à partir de gingembre frais infusé, relevé de citron vert bio. Vive, tonique, légèrement piquante, elle réveille une pause de l'après-midi ou accompagne un plateau petit-déjeuner pour les amateurs de sensations franches.</p>
      <h2>Une infusion, pas un soda</h2>
      <p>Pas de concentré ni d'arôme de synthèse : le gingembre est infusé frais, la boisson garde son côté brut et naturel. Une alternative bio aux boissons gazeuses industrielles pour vos moments de pause.</p>
      <h2>En bouteille verre 1 litre</h2>
      <p>Conditionnée en bouteille en verre d'un litre, pratique pour une petite équipe. Livraison dès <strong>6h30</strong> à Paris et en Île-de-France, commande avant 14h la veille.</p>
    `,
  },
  {
    id: 'infusion-gingembre-10l',
    name: 'Infusion Citron Vert & Gingembre Bio, Jarre 10L',
    shortName: 'Infusion Citron Vert & Gingembre 10L',
    price: 59.90,
    label: '10 litres · 59,90€',
    description: '10 litres · Jarre, infusion bio de citron vert et gingembre frais',
    qty: '1 jarre · 10 litres',
    category: 'jus',
    categoryLabel: 'Jus & Nectars',
    img: '/bois-infusion-gingembre-10l.webp',
    dietary: ['Vegan', 'Sans gluten', 'Bio'],
    allergens: [],
    ingredients: "Infusion de gingembre frais bio et de citron vert bio, eau, sucre de canne bio. Préparation artisanale, sans arôme artificiel, sans conservateur.",
    seoTitle: "Infusion citron vert gingembre bio, jarre 10 litres Paris",
    seoArticle: `
      <p>La <strong>jarre de 10 litres d'infusion citron vert et gingembre bio</strong> est notre format grand volume, pensé pour les séminaires, cocktails et journées d'entreprise qui rassemblent un large effectif. Même infusion artisanale que le format bouteille, en contenance adaptée aux grands groupes.</p>
      <h2>Le bon format pour les grands effectifs</h2>
      <p>Une jarre de 10 litres permet de servir une soixantaine de verres, sans multiplier les bouteilles à réapprovisionner en cours d'événement. Pratique à installer sur un buffet, elle se sert directement au robinet ou à la louche selon le contenant fourni.</p>
      <h2>Pour vos séminaires et cocktails à Paris et en Île-de-France</h2>
      <p>Livraison dès <strong>6h30</strong>, commande avant 14h la veille. Facturation entreprise disponible.</p>
    `,
  },
  {
    id: 'infusion-passion-1l',
    name: 'Infusion Passion Bio',
    shortName: 'Infusion Passion Bio',
    price: 10.50,
    label: '1 litre · 10,50€',
    description: '1 litre · Bouteille en verre, infusion bio de fruit de la passion',
    qty: '1 bouteille en verre · 1 litre',
    category: 'jus',
    categoryLabel: 'Jus & Nectars',
    img: '/bois-infusion-passion-1l.webp',
    dietary: ['Vegan', 'Sans gluten', 'Bio'],
    allergens: [],
    ingredients: "Infusion de fruit de la passion bio, eau, sucre de canne bio. Préparation artisanale, sans arôme artificiel, sans conservateur.",
    seoTitle: "Infusion passion bio, bouteille 1 litre Paris",
    seoArticle: `
      <p>L'<strong>infusion passion bio</strong> mise sur le parfum exotique et l'acidité franche du fruit de la passion, infusé et légèrement sucré au sucre de canne bio. Une boisson fraîche et parfumée, différente des jus classiques.</p>
      <h2>Une infusion fruitée sans artifice</h2>
      <p>Pas de concentré, pas d'arôme de synthèse : le fruit de la passion est infusé pour garder son acidité naturelle et son parfum intense. Une option bio qui change des jus habituels sur un plateau boissons.</p>
      <h2>En bouteille verre 1 litre</h2>
      <p>Conditionnée en bouteille en verre d'un litre. Livraison dès <strong>6h30</strong> à Paris et en Île-de-France, commande avant 14h la veille.</p>
    `,
  },
  {
    id: 'infusion-passion-10l',
    name: 'Infusion Passion Bio, Jarre 10L',
    shortName: 'Infusion Passion Bio 10L',
    price: 59.90,
    label: '10 litres · 59,90€',
    description: '10 litres · Jarre, infusion bio de fruit de la passion',
    qty: '1 jarre · 10 litres',
    category: 'jus',
    categoryLabel: 'Jus & Nectars',
    img: '/bois-infusion-passion-10l.webp',
    dietary: ['Vegan', 'Sans gluten', 'Bio'],
    allergens: [],
    ingredients: "Infusion de fruit de la passion bio, eau, sucre de canne bio. Préparation artisanale, sans arôme artificiel, sans conservateur.",
    seoTitle: "Infusion passion bio, jarre 10 litres Paris",
    seoArticle: `
      <p>La <strong>jarre de 10 litres d'infusion passion bio</strong> est notre format grand volume pour les séminaires, cocktails et événements à large effectif. Même recette artisanale que le format bouteille, en contenance adaptée aux grands groupes.</p>
      <h2>Le bon format pour les grands effectifs</h2>
      <p>Une jarre de 10 litres permet de servir une soixantaine de verres sans multiplier les contenants sur le buffet. Elle se sert directement au robinet ou à la louche selon le contenant fourni.</p>
      <h2>Pour vos séminaires et cocktails à Paris et en Île-de-France</h2>
      <p>Livraison dès <strong>6h30</strong>, commande avant 14h la veille. Facturation entreprise disponible.</p>
    `,
  },
  {
    // Le Vermentino d'Alain Milliat : robe rosée, sans alcool. Référencé le
    // 28/10/2026 pour les tables de Noël et d'Octobre Rose.
    id: 'petillant-vermentino-rose',
    name: 'Pétillant de raisin Vermentino rosé, sans alcool',
    shortName: 'Pétillant rosé Vermentino',
    price: 18.90,
    label: '75cl · 18,90€',
    description: "75cl · Pétillant de raisin rosé Alain Milliat, cépage Vermentino, sans alcool",
    qty: '1 bouteille · 75cl',
    category: 'jus',
    categoryLabel: 'Jus & Nectars',
    img: '/bois-petillant-vermentino.webp',
    dietary: ['Vegan', 'Sans gluten', 'Sans alcool'],
    allergens: ['Sulfites'],
    ingredients: "Raisin Vermentino (Rolle) cultivé en IGP Méditerranée, pétillant sans alcool. 0% alcool.",
    seoTitle: "Pétillant de raisin rosé sans alcool Paris",
    seoArticle: `
      <p>Le <strong>Vermentino pétillant d'Alain Milliat</strong> est un pétillant de raisin <strong>sans alcool</strong>, issu du Vermentino — aussi appelé Rolle — cépage blanc emblématique du bassin méditerranéen, cultivé en IGP Méditerranée.</p>
      <h2>Une robe rosée, pour trinquer sans alcool</h2>
      <p>Il arbore une robe rosée, claire et lumineuse, animée de fines bulles. Au nez, les notes d'agrumes du Vermentino sont rehaussées d'arômes de fraise Mara des Bois, de bergamote et d'hibiscus. Une interprétation fraîche et gourmande, à la teneur en sucre maîtrisée.</p>
      <h2>Quand le servir en entreprise</h2>
      <p>C'est la bouteille des moments où l'équipe trinque : table de Noël, Octobre Rose, pot de départ, signature d'un contrat. Tout le monde lève le même verre, personne n'a à se justifier de ne pas boire d'alcool. Comptez une bouteille de 75 cl pour 6 flûtes.</p>
      <h2>Commander votre pétillant rosé à Paris et en Île-de-France</h2>
      <p>Livraison dès <strong>6h30</strong>, commande avant 14h la veille. Facturation entreprise disponible.</p>
    `,
  },
  {
    id: 'chardonnay-blanc-de-blancs-0',
    name: "Blanc de Blancs Chardonnay 0% Alcool",
    shortName: 'Chardonnay 0% Blanc de Blancs',
    price: 16.90,
    label: '75cl · 16,90€',
    description: "75cl · Jus de raisin Chardonnay sans alcool, façon Blanc de Blancs",
    qty: '1 bouteille · 75cl',
    category: 'jus',
    categoryLabel: 'Jus & Nectars',
    img: '/bois-chardonnay-0.webp',
    dietary: ['Vegan', 'Sans gluten', 'Sans alcool'],
    allergens: ['Sulfites'],
    ingredients: "Raisins Chardonnay de la parcelle Coste Blanche (coteau calcaire du sud de la France), assemblés avec 10% de Verjus de cépages blancs. 0% alcool, sans sucre ajouté.",
    seoTitle: "Jus de raisin Chardonnay 0% alcool Paris",
    seoArticle: `
      <p>Ce <strong>« Blanc de Blancs » sans alcool</strong> est élaboré à partir de raisins Chardonnay cultivés sur la parcelle Coste Blanche, un coteau calcaire du sud de la France. Il est assemblé avec 10% de Verjus de cépages blancs pour en révéler toute la fraîcheur.</p>
      <h2>Robe, nez, bouche : une dégustation à part entière</h2>
      <p>Sa robe dorée aux reflets rosés séduit d'emblée. Son nez intense rappelle des notes gourmandes de mirabelle rôtie et de miel de bruyère. En bouche, l'équilibre se joue entre une fine sucrosité, une fraîcheur acidulée et une effervescence perlée. Le Chardonnay, vif et élégant, illumine apéritifs et mets délicats.</p>
      <h2>Une alternative sans alcool pour vos réceptions</h2>
      <p>Servi frais, ce Blanc de Blancs 0% remplace élégamment le champagne ou le vin blanc lors d'un cocktail, d'un afterwork ou d'une réception où tous les invités ne consomment pas d'alcool. Une façon de ne priver personne du geste de trinquer.</p>
      <h2>Livraison à Paris et en Île-de-France</h2>
      <p>Livraison dès <strong>6h30</strong>, commande avant 14h la veille. Facturation entreprise disponible.</p>
    `,
  },

  // ─── Boissons Chaudes ─────────────────────────────────────────────────────────
  {
    id: 'thermos-cafe',
    name: 'Thermos de Café Bio',
    shortName: 'Thermos de Café',
    price: 19.50,
    label: '1 litre · 19,50€',
    description: '1 litre · Café bio, environ 6 à 8 tasses',
    qty: '1 litre · 6 à 8 tasses',
    category: 'chaud',
    categoryLabel: 'Boissons Chaudes',
    img: '/bois-thermos-cafe.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Café arabica bio sélectionné, torréfié artisanalement. Préparé le matin même et conditionné en thermos isotherme.",
    seoTitle: "Thermos de café bio livraison Paris",
    seoArticle: `
      <p>Le <strong>thermos de café bio</strong> fait partie de chacun de nos petits-déjeuners complets. Préparé le matin même à partir d'un café arabica bio soigneusement sélectionné et torréfié artisanalement, il est conditionné dans un thermos isotherme qui maintient la température pendant plusieurs heures.</p>
      <h2>Un café bio qui a du caractère</h2>
      <p>Notre café bio est issu de torréfacteurs artisanaux parisiens qui travaillent des origines sélectionnées pour leur équilibre aromatique. Le résultat est un café rond, peu amer, qui convient aussi bien aux amateurs d'espresso qu'à ceux qui préfèrent un café plus léger.</p>
      <h2>Le thermos : pratique pour toute la matinée</h2>
      <p>Un litre de café représente <strong>6 à 8 tasses</strong> selon le format. Notre thermos isotherme maintient le café chaud pendant <strong>6 heures, voire 8 heures</strong> après la livraison, vous pouvez l'installer à l'arrivée et laisser vos équipes se servir tout au long de la matinée sans contrainte.</p>
      <h2>Traiteur café Paris, livraison entreprise dès 6h30</h2>
      <p>Livraison dès <strong>6h30</strong> à Paris et en Île-de-France. Commandez avant 14h la veille. Tasses, cuillères et sucre peuvent être ajoutés à votre commande.</p>
    `,
  },
  {
    id: 'thermos-the',
    name: 'Thermos de Thé Mariage Frères',
    shortName: 'Thermos de Thé',
    price: 19.50,
    label: '1 litre · 19,50€',
    description: '1 litre · Thé Mariage Frères, 6 à 8 tasses',
    qty: '1 litre · 6 à 8 tasses',
    category: 'chaud',
    categoryLabel: 'Boissons Chaudes',
    img: '/bois-thermos-the.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Thé Mariage Frères, infusé au bon temps et à la bonne température. Conditionné en thermos isotherme.",
    seoTitle: "Thermos de thé Mariage Frères Paris",
    seoArticle: `
      <p>Le <strong>thermos de thé Mariage Frères</strong> est l'alternative élégante au café pour les amateurs de thé. Mariage Frères est l'une des maisons de thé les plus réputées de Paris, reconnue pour la qualité de ses assemblages et la précision de ses arômes depuis 1854.</p>
      <h2>Mariage Frères : la maison de thé parisienne de référence</h2>
      <p>Fondée à Paris, Mariage Frères est synonyme d'excellence dans le monde du thé. Leurs assemblages sont travaillés avec la même rigueur qu'un grand parfumeur, chaque mélange est le résultat d'une expertise transmise de génération en génération. Proposer un thé Mariage Frères, c'est offrir une expérience de dégustation réelle.</p>
      <h2>Un thermos pour 6 à 8 personnes</h2>
      <p>Notre thermos d'un litre permet de servir <strong>6 à 8 tasses</strong> et maintient le thé à température idéale pendant plusieurs heures. Il s'intègre naturellement à votre plateau petit-déjeuner aux côtés d'un thermos de café pour proposer le choix à l'ensemble de vos collaborateurs.</p>
    `,
  },
  {
    id: 'thermos-chocolat',
    name: 'Thermos de Chocolat Chaud',
    shortName: 'Chocolat Chaud',
    price: 19.50,
    label: '1 litre · 19,50€',
    description: '1 litre · Chocolat chaud artisanal, 6 à 8 tasses',
    qty: '1 litre · 6 à 8 tasses',
    category: 'chaud',
    categoryLabel: 'Boissons Chaudes',
    img: '/bois-thermos-chocolat.webp',
    dietary: ['Végétarien', 'Sans gluten'],
    allergens: ['Lait'],
    ingredients: "Lait entier, chocolat noir, sucre. Préparé artisanalement le matin même. Conditionné en thermos isotherme.",
    seoTitle: "Thermos de chocolat chaud Paris",
    seoArticle: `
      <p>Le <strong>thermos de chocolat chaud</strong> réchauffe une matinée d'entreprise en hiver. Notre chocolat chaud artisanal est préparé le matin même avec du chocolat noir et du lait entier, pas à partir d'une poudre à diluer, et livré en thermos isotherme d'un litre.</p>
      <h2>Un thermos d'un litre, 6 à 8 tasses</h2>
      <p>Un thermos d'un litre sert 6 à 8 tasses et se commande à 19,50 € HT, au même prix que le thermos de café ou de thé. Comptez un thermos pour 6 à 8 personnes si le chocolat chaud est la boisson principale, par exemple sur un goûter ou un événement avec des enfants.</p>
      <h2>En complément du café et du thé</h2>
      <p>Sur un petit-déjeuner d'équipe classique, le café et le thé suffisent. Le chocolat chaud s'ajoute à la commande selon votre choix : il n'est jamais compris par défaut dans une formule. À proposer à côté du café lors d'une journée de formation, d'un séminaire ou d'un goûter de décembre. Préparé et livré le matin même à Paris et en Île-de-France, commande jusqu'à la veille 14h.</p>
    `,
  },

  // ─── Éditions de Noël ────────────────────────────────────────────────
  // Variantes saisonnières des thermos classiques, disponibles en décembre.
  // Le classique reste au catalogue toute l'année : on n'écrase rien.
  {
    id: 'thermos-chocolat-noel',
    name: 'Thermos de Chocolat Chaud de Noël',
    shortName: 'Chocolat Chaud de Noël',
    price: 19.50,
    label: '1 litre · 19,50€',
    description: '1 litre · Chocolat chaud à la cannelle et à la muscade, guimauves à part, 6 à 8 tasses',
    qty: '1 litre · 6 à 8 tasses',
    category: 'chaud',
    categoryLabel: 'Boissons Chaudes',
    img: '/bois-thermos-chocolat.webp',
    dietary: ['Végétarien', 'Sans gluten'],
    allergens: ['Lait'],
    ingredients: "Lait entier, chocolat noir, sucre, cannelle, muscade. Guimauves servies à part. Préparé artisanalement le matin même. Conditionné en thermos isotherme.",
    seoTitle: "Thermos de chocolat chaud de Noël, entreprise Paris",
    seoArticle: `
      <p>Le <strong>chocolat chaud de Noël</strong> est notre chocolat chaud artisanal infusé à la <strong>cannelle et à la muscade</strong>, servi avec des guimauves à part. Même base que le classique, lait entier et chocolat noir préparés le matin même, et les épices infusées dans le lait puis filtrées avant la mise en thermos.</p>
      <h2>Pourquoi les épices sont infusées, pas saupoudrées</h2>
      <p>La cannelle et la muscade sont infusées dans le lait chaud puis filtrées : le goût se diffuse sans laisser de dépôt au fond du thermos ni de grain sous la dent. C'est la seule façon de tenir une heure de service sans que la dernière tasse soit différente de la première.</p>
      <h2>Les guimauves sont servies à part</h2>
      <p>Elles arrivent dans un contenant séparé, pour que chacun en mette ou pas, et pour qu'elles ne fondent pas pendant le transport. C'est aussi ce qui permet de servir le thermos à ceux qui n'en veulent pas sans qu'ils aient à les retirer.</p>
      <h2>Un thermos d'un litre, 6 à 8 tasses</h2>
      <p>Un litre sert 6 à 8 tasses, à 19,50 € HT, le même prix que le thermos classique. Comptez un thermos pour 6 à 8 personnes si le chocolat chaud est la boisson principale, un pour 12 s'il vient en complément du café. Disponible en décembre, à ajouter à un petit-déjeuner, un goûter ou une <a href="/creations/evenements-saisonniers/noel">prestation de Noël</a>.</p>
    `,
  },
  {
    id: 'thermos-the-noel',
    name: 'Thermos de Thé de Noël Mariage Frères',
    shortName: 'Thé de Noël',
    price: 19.50,
    label: '1 litre · 19,50€',
    description: "1 litre · Esprit de Noël® Mariage Frères, 6 à 8 tasses",
    qty: '1 litre · 6 à 8 tasses',
    category: 'chaud',
    categoryLabel: 'Boissons Chaudes',
    img: '/bois-thermos-the.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: ['Fruits à coque'],
    ingredients: "Esprit de Noël® Mariage Frères (réf. T921) : thé noir aux épices douces et aux fruits, pomme, mandarine, cannelle, amande, écorces d'orange et vanille Bourbon. Infusé 5 minutes à 95 °C, conditionné en thermos isotherme.",
    seoTitle: "Thermos de thé de Noël Mariage Frères, entreprise Paris",
    seoArticle: `
      <p>Le <strong>thé de Noël</strong> est l'<strong>Esprit de Noël®</strong> de Mariage Frères, leur assemblage de fête : un thé noir aux épices douces et aux fruits, pomme, mandarine, cannelle et amande, agrémenté d'écorces d'orange et de morceaux de vanille Bourbon. Servi en thermos d'un litre, 6 à 8 tasses.</p>
      <h2>Une référence nommée</h2>
      <p>L'Esprit de Noël est une référence Mariage Frères identifiée (T921) : sa composition tient aux épices, aux fruits et à la vanille. C'est pour cette raison que nous l'avons retenu.</p>
      <h2>Infusé au bon temps, pas laissé dans le thermos</h2>
      <p>Cinq minutes à 95 °C, puis les feuilles sont retirées avant la mise en thermos. Un thé qui continue d'infuser pendant le transport devient amer : c'est la différence entre un thé livré et un thé préparé.</p>
      <h2>Un thermos d'un litre, 6 à 8 tasses</h2>
      <p>19,50 € HT le litre, le même prix que le thermos de thé classique. Il s'ajoute à un petit-déjeuner, à un goûter ou à une <a href="/creations/evenements-saisonniers/noel">prestation de Noël</a>, et se commande jusqu'à la veille 14h pour une livraison dès 6h30.</p>
    `,
  },

  // ─── Eaux ─────────────────────────────────────────────────────────────────────
  {
    id: 'evian-75',
    name: 'Evian 75cl',
    shortName: 'Evian 75cl',
    price: 4.80,
    label: '75cl · 4,80€',
    description: '1 bouteille Evian 75cl',
    qty: '1 bouteille · 75cl',
    category: 'eau',
    categoryLabel: 'Eaux',
    img: '/bois-evian-75.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Eau minérale naturelle des Alpes. Source Evian, Évian-les-Bains.",
    seoTitle: "Evian 75cl livraison Paris",
    seoArticle: `
      <p>L'<strong>Evian 75cl</strong> est l'eau minérale de référence pour les événements d'entreprise. Issue des Alpes et réputée pour sa pureté et son goût neutre, elle accompagne idéalement tous vos plateaux repas, petits-déjeuners et buffets.</p>
      <h2>L'eau qui convient à tous</h2>
      <p>Neutre en goût, riche en minéraux naturels, faiblement minéralisée, l'Evian est la référence des eaux plates dans les entreprises françaises pour une raison simple : elle convient à tout le monde. Elle accompagne les repas sans s'imposer.</p>
      <h2>Format idéal pour les réunions et les plateaux repas</h2>
      <p>Une bouteille de 75cl permet de servir 2 à 3 personnes lors d'un repas. Nous la proposons à la bouteille pour vous permettre de calibrer précisément votre commande en fonction du nombre de convives.</p>
    `,
  },
  {
    id: 'badoit-75',
    name: 'Badoit 75cl',
    shortName: 'Badoit 75cl',
    price: 4.80,
    label: '75cl · 4,80€',
    description: '1 bouteille Badoit 75cl',
    qty: '1 bouteille · 75cl',
    category: 'eau',
    categoryLabel: 'Eaux',
    img: '/bois-badoit.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Eau minérale naturelle gazeuse de Badoit. Source Saint-Galmier, Loire.",
    seoTitle: "Badoit 75cl livraison Paris",
    seoArticle: `
      <p>La <strong>Badoit 75cl</strong> est l'eau gazeuse de référence des tables d'entreprise françaises. Ses fines bulles naturelles, son goût légèrement minéral et sa digestibilité reconnue en font le compagnon idéal des plateaux repas et des réunions de travail.</p>
      <h2>Les fines bulles naturelles de Badoit</h2>
      <p>Ce qui distingue Badoit des autres eaux gazeuses, c'est la finesse naturelle de ses bulles, un résultat de sa source naturellement gazeuse à Saint-Galmier dans la Loire. Ces bulles délicates accompagnent le repas sans agresser le palais et facilitent la digestion.</p>
      <h2>L'eau gazeuse des plateaux repas d'entreprise</h2>
      <p>Dans la gamme de nos eaux, la Badoit complète l'Evian plate pour offrir le choix entre eau plate et gazeuse lors de vos plateaux repas, déjeuners de travail et événements d'entreprise.</p>
    `,
  },
  {
    id: 'evian-33',
    name: 'Evian 33cl',
    shortName: 'Evian 33cl',
    price: 3.80,
    label: '33cl · 3,80€',
    description: '1 bouteille Evian 33cl',
    qty: '1 bouteille · 33cl',
    category: 'eau',
    categoryLabel: 'Eaux',
    img: '/bois-evian-33.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Eau minérale naturelle des Alpes. Source Evian, Évian-les-Bains.",
    seoTitle: "Evian 33cl livraison Paris",
    seoArticle: `
      <p>L'<strong>Evian 33cl</strong> est le format individuel par excellence pour les plateaux repas, les petits-déjeuners et les pauses d'entreprise. Une bouteille individuelle par personne, pratique, élégant, sans gaspillage.</p>
      <h2>Le format individuel pour les plateaux repas</h2>
      <p>Dans le cadre d'un plateau repas d'entreprise, le format 33cl est le choix le plus cohérent : une bouteille par plateau, une boisson par personne. Pas de partage, pas de manipulation, chacun dispose de sa propre eau minérale, propre et scellée.</p>
      <h2>Evian : la pureté des Alpes dans chaque bouteille</h2>
      <p>L'Evian est filtrée naturellement pendant 15 ans à travers les roches glaciaires des Alpes avant d'atteindre sa source. Cette filtration naturelle lui confère une pureté exceptionnelle et une composition minérale stable.</p>
    `,
  },
  {
    id: 'eau-neuve',
    name: "L'Eau Neuve",
    shortName: "L'Eau Neuve",
    price: 4.50,
    label: '50cl · 4,50€',
    description: '1 brique 50cl · Eau minérale naturelle de montagne',
    qty: '1 brique · 50cl',
    category: 'eau',
    categoryLabel: 'Eaux',
    img: '/bois-eau-neuve.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: "Eau minérale naturelle de montagne. Conditionnée en brique carton recyclable, française.",
    seoTitle: "L'Eau Neuve, eau en brique carton Paris",
    seoArticle: `
      <p>L'<strong>Eau Neuve</strong> est une eau minérale naturelle de montagne conditionnée en brique carton plutôt qu'en bouteille plastique. Une alternative écoresponsable pour vos plateaux repas et réunions, sans rien sacrifier à la qualité de l'eau.</p>
      <h2>Une brique carton plutôt qu'une bouteille plastique</h2>
      <p>Format 50cl en carton recyclable, L'Eau Neuve réduit l'empreinte plastique de vos commandes. Un choix simple qui parle de votre engagement environnemental sans avoir à le formuler.</p>
      <h2>Pour vos plateaux repas et réunions</h2>
      <p>Idéale en format individuel sur un plateau repas ou une table de réunion. Livraison dès <strong>6h30</strong> à Paris et en Île-de-France, commande avant 14h la veille.</p>
    `,
  },
]

export const getBoissonsById = (id) => BOISSONS.find(p => p.id === id)
