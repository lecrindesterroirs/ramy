// Données structurées des produits commandables (Petits-Déjeuners & Pauses)

export const MADELEINE_FLAVORS = [
  {
    id: 'pistache-framboise',
    label: 'Pistache Framboise',
    color: '#5A8A3C',
    bg: '#EDF5E6',
    img: '/mado-pistache-framboise.png',
    description: 'Le parfum signature, contraste végétal et fruité.',
  },
  {
    id: 'ananas-coco-passion',
    label: 'Ananas Coco Passion',
    color: '#C87820',
    bg: '#FDF3E0',
    img: '/mado-ananas-coco-passion.png',
    description: 'Solaire, exotique, immédiatement mémorable.',
  },
  {
    id: 'citron',
    label: 'Citron',
    color: '#9A8C10',
    bg: '#F9F5D9',
    img: '/mado-citron.png',
    description: 'Frais, vif et lumineux.',
  },
  {
    id: 'chocolat-lait',
    label: 'Chocolat Lait',
    color: '#8B5E3C',
    bg: '#F5EDE5',
    img: '/mado-chocolat-lait.png',
    description: 'Généreux, réconfortant, très efficace en réception.',
  },
  {
    id: 'chocolat-noir',
    label: 'Chocolat Noir',
    color: '#3E2210',
    bg: '#EDEAE7',
    img: '/mado-chocolat-noir.png',
    description: 'Intense, élégant et plus profond.',
  },
  {
    id: 'nature',
    label: 'Nature',
    color: '#A07C38',
    bg: '#FAF5EC',
    img: '/mado-nature.png',
    description: 'La plus simple, souvent la plus appréciée.',
  },
]

export const PRODUCTS = [
  // ─── Viennoiseries ───────────────────────────────────────────────────────────
  {
    id: 'viennoiseries-duo',
    name: 'Plateau duo de viennoiseries',
    shortName: 'Duo de viennoiseries',
    price: 26.80,
    label: '16 pièces — 26,80€',
    description: '16 pièces — Croissants & pains au chocolat',
    qty: '16 pièces',
    category: 'viennoiseries',
    categoryLabel: 'Viennoiseries',
    img: '/prod-viennoiseries.webp',
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Farine de blé T55, beurre AOP Charentes-Poitou, œufs frais, sucre, levure, sel. Fabriqués quotidiennement chez notre boulanger artisan partenaire à Paris.',
    seoTitle: 'Plateau duo de viennoiseries pour petit-déjeuner d\'entreprise à Paris',
    seoArticle: `
      <p>Le <strong>plateau duo de viennoiseries</strong> est la valeur sûre du petit-déjeuner d'entreprise à Paris. Composé de 8 croissants et de 8 pains au chocolat feuilletés à la perfection, il incarne l'équilibre entre le classique et le gourmand — deux indémodables qui conviennent à tous les palais, du stagiaire au dirigeant.</p>
      <h2>Un beurre d'exception, un feuilletage irréprochable</h2>
      <p>Chez L'Écrin Traiteur, nous travaillons exclusivement avec des boulangers artisans parisiens qui utilisent un <strong>beurre AOP Charentes-Poitou</strong> pour leurs viennoiseries. La différence est immédiate : une pâte aérée, un feuilletage qui se tient, un fondant en bouche qui laisse une impression durable sur vos collaborateurs et clients.</p>
      <h2>Idéal pour les réunions matinales et les accueils de partenaires</h2>
      <p>Livré <strong>dès 6h30 à Paris et en Île-de-France</strong>, ce plateau est pensé pour accueillir 6 à 8 personnes lors d'un CODIR matinal, d'une formation ou d'un séminaire. Nos livraisons respectent un créneau horaire précis — commandé avant 14h la veille, livré frais le lendemain matin.</p>
      <h2>Commander des viennoiseries pour votre entreprise</h2>
      <p>Que vous soyez une <strong>PME parisienne</strong>, un cabinet de conseil du 8ème, ou un grand groupe en Île-de-France, ce plateau s'intègre naturellement dans votre budget traiteur. Simple à commander en ligne, sans minimum récurrent, avec une facturation entreprise disponible sur demande.</p>
    `,
  },
  {
    id: 'chouquettes',
    name: 'Plateau de chouquettes',
    shortName: 'Chouquettes',
    price: 26.80,
    label: '30 pièces — 26,80€',
    description: '30 pièces — Chouquettes à la perle de sucre',
    qty: '30 pièces',
    category: 'viennoiseries',
    categoryLabel: 'Viennoiseries',
    img: '/prod-chouquettes.webp',
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Farine de blé, eau, beurre, œufs, sucre, sel, perles de sucre. Pâte à choux préparée chaque matin.',
    seoTitle: 'Plateau de chouquettes livraison Paris — traiteur entreprise Île-de-France',
    seoArticle: `
      <p>Les <strong>chouquettes</strong> sont l'en-cas de bureau par excellence. Légères, généreuses, craquantes sous la dent grâce à leurs perles de sucre dorées, elles transforment n'importe quelle pause café en moment de convivialité. Notre plateau de 30 pièces est calibré pour une équipe de 8 à 12 personnes.</p>
      <h2>La pâte à choux, un art que nous prenons au sérieux</h2>
      <p>La vraie chouquette ne se conserve pas : elle se déguste dans les heures qui suivent sa cuisson. C'est pourquoi nos partenaires artisans les préparent chaque matin, et pourquoi nous les livrons <strong>tôt le matin à Paris et en Île-de-France</strong> — pour que vous les receviez à peine sorties du four, gonflées et dorées à souhait.</p>
      <h2>Un choix intelligent pour animer une pause</h2>
      <p>Pour un atelier de 2h, une formation ou une présentation commerciale, proposer un plateau de chouquettes à vos participants envoie un signal fort : vous prenez soin des détails. C'est simple, mais cela fait une vraie différence dans la perception de votre image de marque en interne comme en externe.</p>
      <h2>Traiteur chouquettes Paris : commandez la veille avant 14h</h2>
      <p>Commandez en ligne avant <strong>14h la veille</strong> et recevez votre plateau dès 6h30. L'Écrin Traiteur assure la livraison dans tout Paris et les communes d'Île-de-France desservies. Pas d'abonnement, pas de minimum de commande imposé.</p>
    `,
  },
  {
    id: 'viennoiseries-melangees',
    name: 'Plateau de viennoiseries mélangées',
    shortName: 'Viennoiseries mélangées',
    price: 48.90,
    label: '30 pièces — 48,90€',
    description: '30 pièces — Assortiment varié',
    qty: '30 pièces',
    category: 'viennoiseries',
    categoryLabel: 'Viennoiseries',
    img: '/prod-viennoiseries.webp',
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Assortiment de croissants, pains au chocolat, pains aux raisins, croissants aux amandes. Beurre AOP, farine de blé, œufs frais, amandes. Fabriqués artisanalement.',
    seoTitle: 'Plateau viennoiseries mélangées entreprise Paris — assortiment traiteur 30 pièces',
    seoArticle: `
      <p>Pour les événements d'entreprise qui rassemblent 15 à 20 personnes, le <strong>plateau de viennoiseries mélangées</strong> est notre incontournable. 30 pièces soigneusement sélectionnées parmi nos meilleures références : croissants pur beurre, pains au chocolat, pains aux raisins et croissants aux amandes caramélisés.</p>
      <h2>La diversité au service de la satisfaction collective</h2>
      <p>Dans une équipe, les goûts varient. Certains préfèrent le croustillant du croissant nature, d'autres le fondant du pain aux raisins ou la richesse du croissant amandes. Cet assortiment couvre l'ensemble des profils et garantit qu'il ne reste rien dans le plateau à la fin de la réunion.</p>
      <h2>Nos artisans boulangers parisiens</h2>
      <p>L'Écrin Traiteur travaille avec des artisans boulangers sélectionnés pour leur rigueur et la qualité de leurs matières premières. <strong>Beurre AOP Charentes-Poitou, œufs frais, farines françaises</strong> : chaque pièce est fabriquée dans le respect des méthodes traditionnelles. Nous refusons les viennoiseries industrielles ou surgelées.</p>
      <h2>Livraison viennoiseries entreprise Paris et Île-de-France</h2>
      <p>Livraison disponible <strong>dès 6h30</strong>, du lundi au vendredi, partout à Paris et en petite couronne. Commandez avant 14h la veille. Idéal pour les CODIR, les accueils de partenaires, les séminaires et les journées de formation. Facture entreprise disponible à la demande.</p>
    `,
  },

  // ─── Madeleines ──────────────────────────────────────────────────────────────
  {
    id: 'madeleines-10',
    name: 'Coffret de madeleines',
    shortName: 'Madeleines × 10',
    price: 24.90,
    label: '10 madeleines — 24,90€',
    description: '10 madeleines Mado Paris',
    qty: '10 pièces',
    isMadeleine: true,
    maxPieces: 10,
    category: 'patisserie',
    categoryLabel: 'Pâtisserie',
    img: '/prod-madeleines-10.webp',
    dietary: ['Bio', 'Sans huile de palme', 'Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Farine de blé bio, beurre bio, œufs bio, sucre de canne bio, miel, zeste de citron. Certifié Bio AB. Fabriqué par Mado Paris.',
    seoTitle: 'Madeleines bio Mado Paris pour entreprise — coffret 10 pièces livraison Paris',
    seoArticle: `
      <p>Le <strong>coffret de 10 madeleines Mado Paris</strong> est une façon délicate et mémorable de marquer une occasion en entreprise. Ces madeleines bio, au beurre et au zeste de citron, incarnent le savoir-faire français dans ce qu'il a de plus élégant : un produit simple, irréprochable, qui parle d'artisanat à chaque bouchée.</p>
      <h2>Mado Paris : la madeleine réinventée par une artisane engagée</h2>
      <p>Nous avons choisi de travailler avec <strong>Mado Paris</strong> pour une raison simple : leurs madeleines sont certifiées <strong>Agriculture Biologique</strong>, fabriquées sans huile de palme, avec des œufs et un beurre de qualité supérieure. Le résultat est une texture moelleuse, une bosse généreuse et un parfum délicat qui réveille instantanément le souvenir d'une enfance gourmande.</p>
      <h2>Pour 4 à 6 personnes en pause gourmande</h2>
      <p>Ce coffret de 10 pièces est idéal pour une petite réunion, un entretien de recrutement ou un déjeuner de travail avec un ou deux clients. Proposer des madeleines artisanales bio plutôt que des biscuits industriels, c'est affirmer des valeurs — qualité, authenticité, attention au détail — que vos interlocuteurs associeront à votre marque.</p>
      <h2>Commander des madeleines artisanales pour votre bureau à Paris</h2>
      <p>Livré <strong>dès 6h30</strong> à Paris et en Île-de-France. Commande avant 14h la veille. Conditionnement soigné, adapté à une présentation professionnelle.</p>
    `,
  },
  {
    id: 'madeleines-20',
    name: 'Coffret de madeleines',
    shortName: 'Madeleines × 20',
    price: 49.00,
    label: '20 madeleines — 49,00€',
    description: '20 madeleines Mado Paris',
    qty: '20 pièces',
    isMadeleine: true,
    maxPieces: 20,
    category: 'patisserie',
    categoryLabel: 'Pâtisserie',
    img: '/prod-madeleines-20.webp',
    dietary: ['Bio', 'Sans huile de palme', 'Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Farine de blé bio, beurre bio, œufs bio, sucre de canne bio, miel, zeste de citron. Certifié Bio AB. Fabriqué par Mado Paris.',
    seoTitle: 'Coffret 20 madeleines bio entreprise Paris — pause gourmande Île-de-France',
    seoArticle: `
      <p>Pour accueillir une équipe de 8 à 12 personnes lors d'une pause café ou d'un séminaire, le <strong>coffret de 20 madeleines Mado Paris</strong> est la solution idéale. Deux madeleines par personne — une quantité généreuse qui permet à chacun de prendre le temps de la savourer sans se précipiter.</p>
      <h2>L'argument bio dans votre politique RSE</h2>
      <p>De plus en plus d'entreprises intègrent des critères de <strong>consommation responsable</strong> dans leurs achats de prestations traiteur. Les madeleines Mado Paris sont certifiées Agriculture Biologique et fabriquées <strong>sans huile de palme</strong> — deux arguments concrets que vous pouvez mettre en avant auprès de vos équipes et de vos clients, en cohérence avec vos engagements environnementaux.</p>
      <h2>Un produit de qualité qui se distingue</h2>
      <p>La madeleine de Mado Paris n'est pas une madeleine générique. Elle est fabriquée à la main, avec un beurre bio fondu à la bonne température pour obtenir la bosse caractéristique — signe d'une cuisson maîtrisée. Le moelleux, la légèreté et le parfum citronné en font un produit que vos collaborateurs remarquent et dont ils se souviennent.</p>
      <h2>Traiteur pauses gourmandes Paris — livraison entreprise</h2>
      <p>Livré frais dès <strong>6h30</strong> à Paris et en Île-de-France. Commande en ligne, facturation entreprise possible, sans engagement de régularité.</p>
    `,
  },
  {
    id: 'madeleines-50',
    name: 'Coffret de madeleines',
    shortName: 'Madeleines × 50',
    price: 119.00,
    label: '50 madeleines — 119,00€',
    description: '50 madeleines Mado Paris',
    qty: '50 pièces',
    isMadeleine: true,
    maxPieces: 50,
    category: 'patisserie',
    categoryLabel: 'Pâtisserie',
    img: '/prod-madeleines-50.webp',
    dietary: ['Bio', 'Sans huile de palme', 'Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Farine de blé bio, beurre bio, œufs bio, sucre de canne bio, miel, zeste de citron. Certifié Bio AB. Fabriqué par Mado Paris.',
    seoTitle: 'Grand coffret 50 madeleines bio — traiteur événement entreprise Paris',
    seoArticle: `
      <p>Le <strong>grand coffret de 50 madeleines Mado Paris</strong> est conçu pour les événements d'entreprise à grande échelle : journées portes ouvertes, assemblées générales, séminaires de 30 à 50 personnes, ou distributions à l'ensemble d'une équipe pour marquer une occasion particulière.</p>
      <h2>Offrir une madeleine artisanale bio à ses équipes</h2>
      <p>Offrir 50 madeleines bio à vos collaborateurs lors d'un anniversaire d'entreprise, d'une clôture de projet ou d'une journée de cohésion, c'est un geste attentionné et mémorable. À la différence des boîtes de chocolats génériques, les madeleines Mado Paris portent une <strong>histoire artisanale</strong> et un engagement qualité que vos équipes perçoivent immédiatement.</p>
      <h2>Format événementiel, rapport qualité-prix exceptionnel</h2>
      <p>À 2,38 € la madeleine, ce grand coffret offre un <strong>rapport qualité-prix imbattable</strong> pour un produit artisanal bio de cette qualité. Chaque madeleine est fabriquée à Paris, sans compromis sur les matières premières, dans le respect des normes de fabrication artisanale.</p>
      <h2>Livraison grand coffret Paris et grande couronne</h2>
      <p>Disponible en livraison dès <strong>6h30</strong> à Paris et en Île-de-France. Commandez avant 14h la veille. Pour les commandes récurrentes ou les volumes importants, contactez notre équipe pour un tarif préférentiel.</p>
    `,
  },

  // ─── Cakes ───────────────────────────────────────────────────────────────────
  {
    id: 'cake-marbre',
    name: 'Cake marbré maison',
    shortName: 'Cake marbré',
    price: 12.90,
    label: '5/6 pers — 12,90€',
    description: '5/6 personnes',
    qty: '5/6 pers',
    category: 'patisserie',
    categoryLabel: 'Pâtisserie',
    img: '/prod-cake-marbre.webp',
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Farine de blé, beurre, œufs, sucre, cacao en poudre, extrait de vanille naturelle, levure chimique. Fabriqué maison.',
    seoTitle: 'Cake marbré maison livraison Paris — pâtisserie traiteur entreprise',
    seoArticle: `
      <p>Le <strong>cake marbré maison</strong> de L'Écrin Traiteur est un classique de la pâtisserie française revisité avec soin. Son damier de pâte vanille et de pâte chocolat, sa croûte dorée et son moelleux incomparable en font un choix idéal pour la pause café du matin ou le goûter de l'après-midi en entreprise.</p>
      <h2>Un cake fait maison, sans compromis</h2>
      <p>Chez nous, "maison" ne signifie pas industriel emballé dans un film plastique. Notre cake marbré est préparé quotidiennement avec du <strong>beurre frais, des œufs entiers et un cacao de qualité</strong>. La texture est dense sans être lourde, le marbrage est régulier, et le parfum de vanille naturelle se sent dès l'ouverture du colis.</p>
      <h2>Pour 5 à 6 personnes autour d'un café</h2>
      <p>Ce format personnel est adapté aux petites équipes ou aux réunions restreintes. Il se tranche facilement, se partage sans gêne et accompagne aussi bien un café allongé qu'un thé à la bergamote. Il peut compléter un plateau de viennoiseries pour enrichir votre petit-déjeuner d'entreprise.</p>
      <h2>Pâtisserie traiteur Paris — commander un cake pour votre bureau</h2>
      <p>Livré <strong>dès 6h30</strong> à Paris et en Île-de-France, ce cake s'intègre dans n'importe quelle commande L'Écrin Traiteur. Commandez avant <strong>14h la veille</strong> — pas d'abonnement, pas de minimum.</p>
    `,
  },
  {
    id: 'cake-poire',
    name: 'Cake poire maison',
    shortName: 'Cake poire',
    price: 12.90,
    label: '5/6 pers — 12,90€',
    description: '5/6 personnes',
    qty: '5/6 pers',
    category: 'patisserie',
    categoryLabel: 'Pâtisserie',
    img: '/prod-cake.webp',
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Farine de blé, beurre, œufs, sucre, poires fraîches, extrait de vanille, levure chimique. Fabriqué maison en saison.',
    seoTitle: 'Cake poire maison traiteur Paris — pâtisserie artisanale entreprise Île-de-France',
    seoArticle: `
      <p>Le <strong>cake poire maison</strong> est l'une de nos créations préférées à L'Écrin Traiteur. Fondant, parfumé, avec des morceaux de poires fraîches fondus dans la pâte — c'est un produit de saison qui porte en lui la douceur des vergers et le soin d'une fabrication artisanale.</p>
      <h2>Des poires fraîches, pas de conserves</h2>
      <p>La différence avec un cake industriel tient à peu de chose : nous utilisons des <strong>poires fraîches</strong>, sélectionnées selon la saison, que nous incorporons directement dans la pâte. La texture est plus fondante, le goût plus naturel, et le moelleux se conserve parfaitement jusqu'au lendemain.</p>
      <h2>Le cake fruité préféré des équipes</h2>
      <p>Lors des petits-déjeuners d'entreprise, les cakes fruités plaisent à ceux qui ne veulent pas démarrer la journée avec du chocolat. Le cake poire est une alternative élégante aux viennoiseries classiques, particulièrement apprécié des collaborateurs qui recherchent quelque chose de plus délicat et moins sucré.</p>
      <h2>Traiteur pâtisserie Paris — livraison dès 6h30</h2>
      <p>Disponible à la commande du lundi au vendredi, jusqu'à 14h la veille, livré dès 6h30 à Paris et en Île-de-France. Ce cake accompagne idéalement un plateau de viennoiseries ou un coffret de madeleines pour varier les plaisirs.</p>
    `,
  },
  {
    id: 'cake-framboise',
    name: 'Cake framboise',
    shortName: 'Cake framboise',
    price: 12.90,
    label: '5/6 pers — 12,90€',
    description: '5/6 personnes',
    qty: '5/6 pers',
    category: 'patisserie',
    categoryLabel: 'Pâtisserie',
    img: '/prod-cake.webp',
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Farine de blé, beurre, œufs, sucre, framboises fraîches ou surgelées IQF, extrait de vanille, levure chimique. Fabriqué maison.',
    seoTitle: 'Cake framboise maison livraison Paris — traiteur pause entreprise',
    seoArticle: `
      <p>Le <strong>cake framboise maison</strong> de L'Écrin Traiteur est une note acidulée et généreuse dans votre plateau sucré. La pâte vanillée, légère et moelleuse, est généreusement ponctuée de framboises qui libèrent un jus fruité à chaque tranche. Un équilibre parfait entre douceur et caractère.</p>
      <h2>La framboise : une star en pâtisserie française</h2>
      <p>La framboise est l'un des fruits les plus utilisés en pâtisserie pour sa vivacité et son acidité naturelle qui équilibrent la richesse du beurre et des œufs. Dans notre cake, elle apporte une couleur rose vive qui attire l'œil et une fraîcheur en bouche qui tranche avec les gâteaux trop sucrés. <strong>Un choix différenciant</strong> pour vos pauses d'entreprise.</p>
      <h2>Idéal pour les goûters d'équipe et les after-meetings</h2>
      <p>Ce cake est particulièrement adapté aux moments de l'après-midi : goûter d'équipe, pot informel, clôture de réunion. Son format permet de servir facilement 5 à 6 personnes sans préparation particulière — il suffit de trancher et de servir.</p>
      <h2>Commander un cake framboise pour votre bureau à Paris</h2>
      <p>Commandez en ligne avant <strong>14h la veille</strong>. Livraison dès 6h30 à Paris et en Île-de-France. Peut être associé à d'autres cakes maison pour composer un plateau pâtisserie varié.</p>
    `,
  },
  {
    id: 'cake-chocolat',
    name: 'Cake pépites de chocolat',
    shortName: 'Cake chocolat',
    price: 12.90,
    label: '5/6 pers — 12,90€',
    description: '5/6 personnes',
    qty: '5/6 pers',
    category: 'patisserie',
    categoryLabel: 'Pâtisserie',
    img: '/prod-cake.webp',
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Farine de blé, beurre, œufs, sucre, pépites de chocolat noir 64%, extrait de vanille, levure chimique. Fabriqué maison.',
    seoTitle: 'Cake chocolat pépites maison Paris — traiteur pâtisserie entreprise livraison',
    seoArticle: `
      <p>Le <strong>cake aux pépites de chocolat</strong> est sans doute le plus populaire de notre gamme de cakes maison. Généreux en pépites de chocolat noir 64%, moelleux à cœur et doré en surface, il satisfait les gourmands les plus exigeants dès la première bouchée. Un classique qui ne déçoit jamais.</p>
      <h2>Du chocolat noir, pas du chocolat de couverture bas de gamme</h2>
      <p>Nous utilisons des <strong>pépites de chocolat noir à 64% de cacao</strong>, qui fondent à la cuisson tout en conservant leur structure. Le résultat : une mâche légèrement croquante autour des pépites, une amertume douce qui équilibre la douceur de la pâte. Un profil aromatique que les amateurs de chocolat reconnaissent immédiatement.</p>
      <h2>Le cake préféré des pauses café matinales</h2>
      <p>Associé à un café espresso ou un café crème, ce cake au chocolat est un démarrage de journée idéal pour les équipes qui ont besoin d'énergie. Son côté réconfortant en fait également un excellent choix pour les journées de travail longues ou les séminaires intenses.</p>
      <h2>Traiteur Paris — pâtisserie maison livraison entreprise</h2>
      <p>Ce cake est disponible à la commande du lundi au vendredi, livré dès 6h30 à Paris et en Île-de-France. Commandez avant 14h la veille. Idéal en accompagnement d'un plateau de viennoiseries pour un petit-déjeuner complet.</p>
    `,
  },
  {
    id: 'cake-pistache',
    name: 'Cake pistache maison',
    shortName: 'Cake pistache',
    price: 12.90,
    label: '5/6 pers — 12,90€',
    description: '5/6 personnes',
    qty: '5/6 pers',
    category: 'patisserie',
    categoryLabel: 'Pâtisserie',
    img: '/prod-cake.webp',
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs', 'Fruits à coque'],
    ingredients: 'Farine de blé, beurre, œufs, sucre, pâte de pistache naturelle, pistaches concassées, levure chimique. Fabriqué maison. Contient des pistaches (fruits à coque).',
    seoTitle: 'Cake pistache maison traiteur Paris — pâtisserie premium entreprise Île-de-France',
    seoArticle: `
      <p>Le <strong>cake pistache maison</strong> est la création signature de L'Écrin Traiteur dans notre gamme de cakes. Sa couleur vert pâle caractéristique, son parfum de pistache naturelle et ses éclats de fruits à coque concassés en font un produit haut de gamme qui surprend et séduit à chaque dégustation.</p>
      <h2>La vraie pistache, pas l'arôme artificiel</h2>
      <p>Contrairement à de nombreux gâteaux à la pistache qui utilisent de l'arôme artificiel, notre cake est élaboré avec de la <strong>pâte de pistache naturelle</strong> — un ingrédient premium qui donne cette couleur et ce goût authentiques. Les pistaches concassées apportent une texture et une intensité aromatique supplémentaires.</p>
      <h2>Un choix raffiné pour des clients ou partenaires exigeants</h2>
      <p>Ce cake est particulièrement adapté aux <strong>accueils de partenaires</strong>, réunions de direction ou présentations commerciales où l'on cherche à impressionner subtilement. La pistache est associée à la qualité et à l'originalité — des valeurs que vous transmettez à vos interlocuteurs en faisant ce choix.</p>
      <h2>Attention aux allergènes : fruits à coque</h2>
      <p>Ce cake contient des <strong>fruits à coque (pistaches)</strong>. Merci de vérifier les intolérances alimentaires de vos convives avant de commander. Pour les équipes avec des contraintes allergiques, nos cakes marbré, poire ou citron sont de bonnes alternatives.</p>
    `,
  },
  {
    id: 'cake-citron',
    name: 'Cake citron maison',
    shortName: 'Cake citron',
    price: 12.90,
    label: '5/6 pers — 12,90€',
    description: '5/6 personnes',
    qty: '5/6 pers',
    category: 'patisserie',
    categoryLabel: 'Pâtisserie',
    img: '/prod-cake.webp',
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Farine de blé, beurre, œufs, sucre, zestes de citron frais, jus de citron, levure chimique. Fabriqué maison.',
    seoTitle: 'Cake citron maison livraison Paris — pâtisserie traiteur entreprise fraîcheur',
    seoArticle: `
      <p>Le <strong>cake citron maison</strong> de L'Écrin Traiteur est notre réponse aux amateurs de fraîcheur et d'acidité. Sa pâte moelleuse, parfumée aux zestes de citron frais et au jus naturel, offre une légèreté en bouche qui contraste agréablement avec les cakes plus riches. Un choix parfait pour démarrer la journée avec de l'énergie.</p>
      <h2>Le zeste de citron frais, toute la différence</html>
      <p>Le secret d'un bon cake citron tient à la qualité du citron. Chez L'Écrin Traiteur, nous utilisons des <strong>citrons frais zestés</strong>, non traités, dont l'huile essentielle naturelle se libère à la cuisson pour imprégner toute la pâte d'un parfum délicat et authentique. L'acidité est présente sans être agressive — équilibrée par le sucre et le beurre.</p>
      <h2>L'alternative légère pour varier vos petits-déjeuners d'entreprise</h2>
      <p>En alternance avec les viennoiseries au beurre et les cakes au chocolat, le cake citron apporte une touche de légèreté à votre plateau sucré. Il est particulièrement apprécié en été ou au printemps, et convient aussi bien aux personnes qui cherchent quelque chose de moins riche en matière grasse.</p>
      <h2>Commander une pâtisserie artisanale à Paris pour votre bureau</h2>
      <p>Disponible toute l'année, livré <strong>dès 6h30</strong> à Paris et en Île-de-France. Commandez avant <strong>14h la veille</strong>. Ce cake se conserve jusqu'à 48h dans un emballage hermétique.</p>
    `,
  },

  // ─── Sucrés / salés ──────────────────────────────────────────────────────────
  {
    id: 'crepes',
    name: 'Crêpe maison',
    shortName: 'Crêpes maison',
    subtitle: 'Sucrée ou salée',
    price: 58.90,
    label: '20 grandes crêpes — 58,90€',
    description: '20 grandes crêpes',
    qty: '20 pièces',
    category: 'sucre-sale',
    categoryLabel: 'Sucré & Salé',
    img: '/prod-crepes.webp',
    layout: 'gallery',
    gallery: ['/prod-crepes.webp'],
    included: ['Mini pots de confiture', 'Mini pots de pâte à tartiner', 'Serviettes'],
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Délicates et moelleuses, nos crêpes sont préparées chaque matin avec des ingrédients de qualité pour un goût authentique et généreux. Farine de blé, lait entier, œufs frais, beurre, sucre, sel.',
    seoTitle: 'Crêpes maison pour entreprise Paris — 20 grandes crêpes livraison Île-de-France',
    seoArticle: `
      <p>Les <strong>crêpes maison</strong> de L'Écrin Traiteur sont une option conviviale et originale pour vos petits-déjeuners d'entreprise. 20 grandes crêpes moelleuses, préparées le matin même dans notre atelier, livrées fraîches et prêtes à être garnies selon les envies de vos collaborateurs.</p>
      <h2>La crêpe comme prétexte à la convivialité</h2>
      <p>Il y a quelque chose de particulièrement fédérateur autour d'un plateau de crêpes. Chacun choisit sa garniture — confiture, beurre, miel, sucre — et la pause se transforme en moment de partage informel. Un format idéal pour les <strong>team buildings matinaux</strong>, les séminaires ou les journées de cohésion.</p>
      <h2>Notre pâte à crêpes : une recette sans compromis</h2>
      <p>Farine de blé française, lait entier, œufs frais, beurre fondu : notre pâte à crêpes suit une recette traditionnelle sans additif ni conservateur. La pâte est préparée la veille pour être reposée, et les crêpes sont cuites le <strong>matin même</strong> pour une fraîcheur optimale à la livraison.</p>
      <h2>Traiteur crêpes entreprise Paris — livraison dès 6h30</h2>
      <p>Ce plateau de 20 crêpes est calibré pour <strong>8 à 12 personnes</strong>, avec 2 crêpes par personne en moyenne. Livraison dès 6h30 à Paris et en Île-de-France. Les garnitures ne sont pas incluses mais peuvent être commandées en complément de votre panier.</p>
    `,
  },
  {
    id: 'brochettes-fruits',
    name: 'Brochettes de fruits',
    shortName: 'Brochettes de fruits',
    price: 48.90,
    label: '20 brochettes — 48,90€',
    description: '20 brochettes de fruits frais de saison',
    qty: '20 pièces',
    category: 'sucre-sale',
    categoryLabel: 'Sucré & Salé',
    img: '/prod-brochettes.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: 'Assortiment de fruits frais de saison : fraises, melon, ananas, raisin, kiwi, myrtilles selon arrivage. Sans sucre ajouté.',
    seoTitle: 'Brochettes de fruits frais entreprise Paris — option vegan sans gluten livraison',
    seoArticle: `
      <p>Les <strong>brochettes de fruits frais</strong> de L'Écrin Traiteur sont la touche fraîche et colorée qui manque souvent aux petits-déjeuners d'entreprise. 20 brochettes composées de fruits de saison soigneusement sélectionnés — fraises, ananas, melon, raisin, kiwi — pour un plateau aussi beau que savoureux.</p>
      <h2>L'option santé et inclusive pour toutes les équipes</h2>
      <p>Nos brochettes de fruits sont <strong>vegan et sans gluten</strong>, ce qui les rend accessibles à l'ensemble de vos collaborateurs, quelles que soient leurs restrictions alimentaires. Dans une équipe diverse, proposer une option 100% naturelle et sans allergènes majeurs est un geste d'attention que tout le monde appréciera.</p>
      <h2>Des fruits de saison, sélectionnés selon l'arrivage</h2>
      <p>Nous travaillons avec des fournisseurs qui privilégient les circuits courts et la saisonnalité. La composition des brochettes varie selon les arrivages et les saisons, ce qui garantit des fruits au pic de leur maturité. Vous ne recevrez jamais des fraises en janvier — vous recevrez des clémentines en hiver et des abricots en été.</p>
      <h2>Traiteur fruits frais Paris — associé à un petit-déjeuner complet</h2>
      <p>Ces brochettes accompagnent idéalement un plateau de viennoiseries ou un assortiment de cakes pour composer un <strong>petit-déjeuner d'entreprise équilibré</strong>. Livraison dès 6h30 à Paris et en Île-de-France. Commande avant 14h la veille.</p>
    `,
  },
  {
    id: 'panier-fruits',
    name: 'Corbeille de fruits de saison',
    shortName: 'Corbeille de fruits',
    price: 38.90,
    label: '10–12 fruits — 38,90€',
    description: '10–12 fruits entiers de saison',
    qty: '10–12 fruits',
    category: 'sucre-sale',
    categoryLabel: 'Fruits & Fraîcheur',
    img: '/prod-corbeille.webp',
    dietary: ['Vegan', 'Sans gluten', 'Sans lactose'],
    allergens: [],
    ingredients: 'Assortiment de fruits entiers de saison : pommes, poires, oranges, mandarines, bananes, kiwis selon arrivage. Fruits calibrés, lavés, prêts à poser en corbeille.',
    seoTitle: 'Corbeille de fruits de saison entreprise Paris — livraison bureau dès 6h30',
    seoArticle: `
      <p>La <strong>corbeille de fruits de saison</strong> est l'un des gestes les plus simples qu'une entreprise puisse faire pour ses équipes. Posée sur un comptoir, dans une salle de réunion ou à l'accueil, elle envoie un signal clair : on pense à vous au-delà de la réunion. Un fruit frais disponible en libre accès, c'est une collation saine, inclusive et naturellement appréciée.</p>
      <h2>Fruits entiers ou découpés — deux usages distincts</h2>
      <p>La corbeille de fruits entiers convient parfaitement à un usage quotidien ou semi-régulier : posée à l'accueil ou dans la cuisine, elle se consomme naturellement au fil de la journée. Pour les réunions, séminaires ou accueils clients, nos <strong>brochettes de fruits découpés</strong> sont plus adaptées — service immédiat, présentation soignée, format à grignoter.</p>
      <h2>Des fruits de saison, sélectionnés selon l'arrivage</h2>
      <p>Nous travaillons avec des fournisseurs qui raisonnent en saisonnalité. La composition varie selon les semaines : oranges et clémentines en hiver, fraises et abricots au printemps, figues et raisins en automne. Vous recevez des fruits au pic de leur maturité — jamais des produits hors saison sans goût.</p>
      <h2>Une option 100% inclusive</h2>
      <p>Vegan, sans gluten, sans lactose, sans allergènes majeurs — la corbeille de fruits convient à tous les profils alimentaires sans exception. Dans des équipes aux régimes variés, c'est l'une des rares options qui satisfait tout le monde sans adaptation.</p>
      <h2>Commander votre corbeille de fruits à Paris</h2>
      <p>Livraison dès 6h30 à Paris et en Île-de-France, du lundi au vendredi. Commandez avant 14h la veille. Idéale en complément d'un plateau de viennoiseries ou d'une sélection sucrée pour équilibrer votre petit-déjeuner d'entreprise.</p>
    `,
  },
  {
    id: 'navettes-salees',
    name: 'Mini navettes salées',
    shortName: 'Navettes salées',
    price: 63.90,
    label: '20 navettes — 63,90€',
    description: '20 pièces — garnitures assorties',
    qty: '20 pièces',
    category: 'sucre-sale',
    categoryLabel: 'Sucré & Salé',
    img: '/prod-navettes.webp',
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Pain de mie brioché maison, fromage frais, légumes marinés, herbes fraîches, moutarde à l\'ancienne. Garnitures végétariennes assorties.',
    seoTitle: 'Mini navettes salées traiteur Paris — amuse-bouches végétariens livraison entreprise',
    seoArticle: `
      <p>Les <strong>mini navettes salées</strong> de L'Écrin Traiteur sont notre interprétation de l'amuse-bouche parfait pour accompagner un café ou ouvrir une réunion de travail. Composées d'un pain brioché maison et de garnitures végétariennes soigneusement choisies, elles apportent un contrepoint salé au reste de votre plateau sucré.</p>
      <h2>La navette salée : l'amuse-bouche de la réunion réussie</h2>
      <p>Proposer des navettes salées à vos collaborateurs ou clients en début de réunion, c'est créer une atmosphère détendue et attentionnée. Elles se grignotent sans effort, sans assiette, sans couverts — parfaites pour un debout convivial ou un accueil de partenaires dans un open space.</p>
      <h2>Garnitures assorties, toujours végétariennes</h2>
      <p>Nos garnitures changent selon les saisons et les arrivages, mais restent toujours <strong>végétariennes</strong> : fromage frais et ciboulette, légumes marinés à la moutarde, tapenade de poivrons rôtis... Des associations qui surprennent et séduisent, loin des sandwichs jambon-beurre sans imagination.</p>
      <h2>Traiteur pause déjeuner Paris — mini sandwichs livraison entreprise</h2>
      <p>Ce plateau de 20 navettes est calibré pour <strong>6 à 10 personnes</strong> en amuse-bouche. Livré dès 6h30 à Paris et en Île-de-France. Commande avant 14h la veille. Peut être associé à un plateau de viennoiseries pour composer un petit-déjeuner sucré-salé complet.</p>
    `,
  },
  {
    id: 'macarons',
    name: 'Macaron',
    shortName: 'Macarons',
    price: 64.00,
    label: '24 pièces — 64,00€',
    description: '24 macarons Pierre Morel',
    qty: '24 pièces',
    category: 'patisserie',
    categoryLabel: 'Pâtisserie',
    img: '/prod-macarons.webp',
    dietary: ['Sans gluten', 'Végétarien'],
    allergens: ['Fruits à coque', 'Œufs'],
    ingredients: 'Amandes en poudre, blancs d\'œufs, sucre glace, sucre, colorants naturels. Ganaches et crèmes selon les parfums. Sans farine de blé. Fabriqués par Pierre Morel, Paris.',
    seoTitle: 'Macarons Pierre Morel Paris — commande traiteur entreprise 24 pièces livraison',
    seoArticle: `
      <p>Notre boîte de <strong>24 macarons Pierre Morel</strong> est la pièce maîtresse de nos propositions pâtissières pour l'entreprise. Pierre Morel est un artisan pâtissier parisien reconnu dont les macarons sont distingués par leur coques fines et craquantes, leur ganache généreuse et la précision de leurs arômes. Un cadeau gourmand d'exception.</p>
      <h2>Pierre Morel : la référence parisienne du macaron artisanal</h2>
      <p>Nous avons sélectionné Pierre Morel pour son engagement sans compromis envers la <strong>qualité des matières premières</strong> et la maîtrise technique. Ses macarons sont fabriqués à Paris, à partir d'amandes de première qualité, de colorants naturels et de ganaches préparées avec des ingrédients frais. Chaque boîte est un hommage à la tradition pâtissière française.</p>
      <h2>Sans gluten — accessible à plus de collaborateurs</h2>
      <p>Les macarons sont naturellement <strong>sans gluten</strong> — leur coque est à base de poudre d'amandes, sans farine de blé. Un atout non négligeable pour les équipes qui comptent des personnes intolérantes ou sensibles au gluten, à condition de vérifier l'absence de contamination croisée selon vos besoins.</p>
      <h2>Mignardises traiteur Paris — macarons pour vos événements d'entreprise</h2>
      <p>Ces 24 macarons en assortiment de parfums — framboise, pistache, chocolat, caramel, citron, rose... — sont la <strong>mignardise traiteur</strong> par excellence pour une réunion de direction, un afterwork, un anniversaire d'entreprise ou un accueil client haut de gamme. Un <strong>plateau repas traiteur luxe</strong> s'accompagne naturellement d'une sélection de macarons en dessert. Livraison dès <strong>6h30</strong> à Paris et en Île-de-France.</p>
    `,
  },
  {
    id: 'cookies',
    name: 'Cookie',
    shortName: 'Cookies',
    price: 17.90,
    label: '6 pièces — 17,90€',
    description: '6 cookies Laura Todd',
    qty: '6 pièces',
    category: 'patisserie',
    categoryLabel: 'Pâtisserie',
    img: '/prod-cookies.webp',
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Farine de blé, beurre, sucre roux, œufs, chocolat noir et lait en morceaux, sel de Guérande, vanille. Fabriqués par Laura Todd, Paris.',
    seoTitle: 'Cookies Laura Todd Paris — commande traiteur bureau entreprise livraison',
    seoArticle: `
      <p>Les <strong>cookies Laura Todd</strong> sont une institution parisienne. Ces cookies généreux, épais et fondants à cœur avec des morceaux de chocolat de qualité et un subtil grain de sel de Guérande sont devenus en quelques années la référence du cookie artisanal à Paris. Nous les proposons par coffret de 6 pièces pour vos pauses d'entreprise.</p>
      <h2>Laura Todd : le cookie américain revisité à la française</h2>
      <p>Laura Todd a importé à Paris la culture du <strong>vrai cookie américain</strong> — épais, chewy, généreux — en lui apportant l'exigence française des matières premières. Beurre AOP, chocolat de couverture, farine française, sel de Guérande : chaque ingrédient est choisi pour contribuer à un résultat final irréprochable.</p>
      <h2>Le cookie comme récompense informelle</h2>
      <p>Dans la culture de bureau, le cookie est le signal du moment détendu. Après une réunion intense, avant une présentation, pendant un point d'équipe — les cookies créent une atmosphere plus décontractée qui favorise la communication et la cohésion. 6 cookies pour une petite équipe, ou une distribution de 1 cookie par personne pour 6 collaborateurs.</p>
      <h2>Traiteur cookies Paris — livraison dès 6h30 en Île-de-France</h2>
      <p>Commandez avant <strong>14h la veille</strong>, recevez vos cookies le lendemain matin, frais et prêts à être dégustés. Livraison disponible dans Paris et en Île-de-France. Les cookies Laura Todd se conservent jusqu'à 3 jours dans leur emballage d'origine.</p>
    `,
  },
  {
    id: 'panna-cotta',
    name: 'Panna cotta fruits rouges',
    shortName: 'Panna cotta',
    price: 16.90,
    label: '6 pièces — 16,90€',
    description: '6 verrines — coulis de fruits rouges',
    qty: '6 pièces',
    category: 'sucre-sale',
    categoryLabel: 'Sucré & Salé',
    img: '/prod-panna-cotta.webp',
    dietary: ['Sans gluten', 'Végétarien'],
    allergens: ['Lait'],
    ingredients: 'Crème fleurette entière, sucre, gélatine, coulis de fruits rouges (framboises, mûres, groseilles). Sans gluten. Conditionné en verrine individuelle.',
    seoTitle: 'Panna cotta fruits rouges traiteur Paris — verrines sans gluten livraison entreprise',
    seoArticle: `
      <p>La <strong>panna cotta aux fruits rouges</strong> de L'Écrin Traiteur est un dessert raffiné et élégant, conditionné en verrine individuelle pour une dégustation facile lors de vos événements d'entreprise. Sa texture crémeuse et délicate, son coulis généreux de framboises, mûres et groseilles en font un choix haut de gamme pour surprendre vos convives.</p>
      <h2>Sans gluten, accessible à tous</h2>
      <p>La panna cotta est naturellement <strong>sans gluten</strong> — un argument important dans les équipes où certains collaborateurs présentent une intolérance ou une sensibilité au gluten. Elle peut être proposée à côté d'autres douceurs pour garantir que personne n'est laissé pour compte lors de la pause gourmande.</p>
      <h2>La verrine individuelle : pratique et élégante</h2>
      <p>Chaque panna cotta est conditionnée dans une verrine individuelle refermable, ce qui facilite la distribution et la dégustation sans assiette. Le coulis de fruits rouges est versé sur la panna cotta au moment de la livraison, préservant la fraîcheur et la tenue du dessert jusqu'à la dégustation.</p>
      <h2>Dessert traiteur Paris — commande verrines entreprise Île-de-France</h2>
      <p>Parfaite pour conclure un plateau-repas ou ponctuer un afterwork, la panna cotta est livrée fraîche dès <strong>6h30</strong> à Paris et en Île-de-France. Commandez avant 14h la veille. Conservation jusqu'à 48h au réfrigérateur.</p>
    `,
  },
  {
    id: 'compote-pomme',
    name: 'Compote de pomme du verger',
    shortName: 'Compote pomme',
    price: 16.90,
    label: '6 pièces — 16,90€',
    description: '6 verrines — pommes du verger',
    qty: '6 pièces',
    category: 'sucre-sale',
    categoryLabel: 'Sucré & Salé',
    img: '/prod-compote.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: 'Pommes françaises du verger, sucre de canne (ou sans sucre ajouté selon la préparation). Sans gluten, sans lactose. 100% vegan. Conditionné en verrine individuelle.',
    seoTitle: 'Compote pomme artisanale traiteur Paris — vegan sans gluten livraison entreprise',
    seoArticle: `
      <p>La <strong>compote de pomme du verger</strong> de L'Écrin Traiteur est notre proposition la plus inclusive et la plus naturelle. Préparée à partir de pommes françaises de variétés sélectionnées pour leur équilibre sucre-acidité, conditionnée en verrine individuelle, elle est <strong>vegan, sans gluten et sans allergènes majeurs</strong> — la solution idéale pour les équipes avec des restrictions alimentaires variées.</p>
      <h2>Des pommes françaises, pas de concentré industriel</h2>
      <p>Notre compote est préparée à partir de vraies pommes françaises, cuites lentement pour conserver leur texture et leur saveur naturelle. Pas de concentré de jus, pas d'arôme artificiel, pas d'épaississant. Le résultat est une compote honnête, au goût authentique du verger, qui rappelle celle que l'on préparait à la maison.</p>
      <h2>L'option 100% inclusive pour vos petits-déjeuners d'entreprise</h2>
      <p>Dans une équipe multiculturelle et sensible aux enjeux alimentaires, proposer une option <strong>vegan et sans allergènes</strong> est un signal fort. La compote de pomme peut être servie à côté des viennoiseries et des cakes sans que personne ne soit exclu du moment de convivialité.</p>
      <h2>Traiteur Paris — verrines vegan sans gluten livraison Île-de-France</h2>
      <p>Livrée fraîche dès <strong>6h30</strong> à Paris et en Île-de-France. Commandez avant 14h la veille. Conservation 4 à 5 jours au réfrigérateur. Parfaite en complément d'un plateau de viennoiseries ou de brochettes de fruits.</p>
    `,
  },
]

export const getProductById = (id) => PRODUCTS.find(p => p.id === id)

// Couleurs des tags dietary
export const DIETARY_COLORS = {
  'Bio': { bg: 'rgba(74,124,74,0.1)', color: '#3a7c3a' },
  'Vegan': { bg: 'rgba(74,124,74,0.1)', color: '#3a7c3a' },
  'Sans gluten': { bg: 'rgba(224,161,38,0.12)', color: '#b07d10' },
  'Sans huile de palme': { bg: 'rgba(74,124,74,0.1)', color: '#3a7c3a' },
  'Végétarien': { bg: 'rgba(17,17,17,0.05)', color: 'rgba(17,17,17,0.45)' },
  'Fruits à coque': { bg: 'rgba(200,100,30,0.1)', color: '#a0520a' },
}
