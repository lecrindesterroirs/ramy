// Données structurées des produits commandables (Petits-Déjeuners & Pauses)

export const MADELEINE_FLAVORS = [
  {
    id: 'pistache-framboise',
    label: 'Pistache Framboise',
    color: '#5A8A3C',
    bg: '#EDF5E6',
    img: '/mado-pistache-framboise.webp',
    description: 'Le parfum signature, contraste végétal et fruité.',
  },
  {
    id: 'ananas-coco-passion',
    label: 'Ananas Coco Passion',
    color: '#C87820',
    bg: '#FDF3E0',
    img: '/mado-ananas-coco-passion.webp',
    description: 'Solaire, exotique, immédiatement mémorable.',
  },
  {
    id: 'citron',
    label: 'Citron',
    color: '#9A8C10',
    bg: '#F9F5D9',
    img: '/mado-citron.webp',
    description: 'Frais, vif et lumineux.',
  },
  {
    id: 'chocolat-lait',
    label: 'Chocolat Lait',
    color: '#8B5E3C',
    bg: '#F5EDE5',
    img: '/mado-chocolat-lait.webp',
    description: 'Généreux, réconfortant, très efficace en réception.',
  },
  {
    id: 'chocolat-noir',
    label: 'Chocolat Noir',
    color: '#3E2210',
    bg: '#EDEAE7',
    img: '/mado-chocolat-noir.webp',
    description: 'Intense, élégant et plus profond.',
  },
  {
    id: 'nature',
    label: 'Nature',
    color: '#A07C38',
    bg: '#FAF5EC',
    img: '/mado-nature.webp',
    description: 'La plus simple, souvent la plus appréciée.',
  },
]

export const PRODUCTS = [
  // ─── Viennoiseries ───────────────────────────────────────────────────────────
  {
    id: 'viennoiseries-duo',
    name: 'Croissants & pains au chocolat AOP',
    shortName: 'Croissants & pains au chocolat AOP',
    price: 26.80,
    label: '8 mini croissants, 8 mini pains au chocolat · 26,80€',
    description: '8 mini croissants, 8 mini pains au chocolat',
    qty: '16 pièces',
    category: 'viennoiseries',
    categoryLabel: 'Viennoiseries',
    img: '/prod-viennoiseries.webp',
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Plateau de 16 mini viennoiseries : 8 croissants et 8 pains au chocolat pur beurre AOP Charentes-Poitou. Feuilletage irréprochable, moelleux en bouche, cuits frais le matin même. Idéal pour un petit-déjeuner d\'équipe ou un accueil de partenaires. Pour 6 à 8 personnes.',
    seoTitle: 'Plateau duo viennoiseries entreprise',
    seoArticle: `
      <p>Le <strong>plateau duo de viennoiseries</strong> est la valeur sûre du petit-déjeuner d'entreprise à Paris. Composé de 8 croissants et de 8 pains au chocolat feuilletés à la perfection, il incarne l'équilibre entre le classique et le gourmand, deux indémodables qui conviennent à tous les palais, du stagiaire au dirigeant.</p>
      <h2>Un beurre d'exception, un feuilletage irréprochable</h2>
      <p>Chez L'Écrin Traiteur, nous travaillons exclusivement avec des boulangers artisans parisiens qui utilisent un <strong>beurre AOP Charentes-Poitou</strong> pour leurs viennoiseries. La différence est immédiate : une pâte aérée, un feuilletage qui se tient, un fondant en bouche qui laisse une impression durable sur vos collaborateurs et clients.</p>
      <h2>Idéal pour les réunions matinales et les accueils de partenaires</h2>
      <p>Livré <strong>dès 6h30 à Paris et en Île-de-France</strong>, ce plateau est pensé pour accueillir 6 à 8 personnes lors d'un CODIR matinal, d'une formation ou d'un séminaire. Nos livraisons respectent un créneau horaire précis, commandé avant 14h la veille, livré frais le lendemain matin.</p>
      <h2>Commander des viennoiseries pour votre entreprise</h2>
      <p>Que vous soyez une <strong>PME parisienne</strong>, un cabinet de conseil du 8ème, ou un grand groupe en Île-de-France, ce plateau s'intègre naturellement dans votre budget traiteur. Simple à commander en ligne, sans minimum récurrent, avec une facturation entreprise disponible sur demande.</p>
    `,
  },
  {
    id: 'chouquettes',
    name: 'Chouquettes à la perle de sucre',
    shortName: 'Chouquettes à la perle',
    price: 26.80,
    label: '30 pièces · 26,80€',
    description: '30 pièces · Croustillantes et dorées',
    qty: '30 pièces',
    category: 'viennoiseries',
    categoryLabel: 'Viennoiseries',
    img: '/prod-chouquettes.webp',
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Plateau de 30 mini chouquettes à la perle de sucre caramélisée. Légères, croustillantes, dorées, sorties du four le matin même. Transforme une pause café en moment de convivialité authentique. Parfait pour un atelier, une formation ou un rendez-vous d\'équipe. Pour 10 à 15 personnes.',
    seoTitle: 'Plateau de chouquettes livraison Paris',
    seoArticle: `
      <p>Les <strong>chouquettes</strong> sont l'en-cas de bureau par excellence. Légères, généreuses, craquantes sous la dent grâce à leurs perles de sucre dorées, elles transforment n'importe quelle pause café en moment de convivialité. Notre plateau de 30 pièces est calibré pour une équipe de 8 à 12 personnes.</p>
      <h2>La pâte à choux, un art que nous prenons au sérieux</h2>
      <p>La vraie chouquette ne se conserve pas : elle se déguste dans les heures qui suivent sa cuisson. C'est pourquoi nos partenaires artisans les préparent chaque matin, et pourquoi nous les livrons <strong>tôt le matin à Paris et en Île-de-France</strong>, pour que vous les receviez à peine sorties du four, gonflées et dorées à souhait.</p>
      <h2>Un choix intelligent pour animer une pause</h2>
      <p>Pour un atelier de 2h, une formation ou une présentation commerciale, proposer un plateau de chouquettes à vos participants envoie un signal fort : vous prenez soin des détails. C'est simple, mais cela fait une vraie différence dans la perception de votre image de marque en interne comme en externe.</p>
      <h2>Traiteur chouquettes Paris : commandez la veille avant 14h</h2>
      <p>Commandez en ligne avant <strong>14h la veille</strong> et recevez votre plateau dès 6h30. L'Écrin Traiteur assure la livraison dans tout Paris et les communes d'Île-de-France desservies. Pas d'abonnement, pas de minimum de commande imposé.</p>
    `,
  },
  {
    id: 'viennoiseries-melangees',
    name: 'Assortiment de viennoiseries AOP',
    shortName: 'Assortiment de viennoiseries AOP',
    price: 48.90,
    label: '30 pièces · 48,90€',
    description: '12 mini croissants, 12 mini pains au chocolat, 6 mini pains aux raisins',
    qty: '30 pièces',
    category: 'viennoiseries',
    categoryLabel: 'Viennoiseries',
    img: '/prod-viennoiseries.webp',
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Plateau premium composé de 30 viennoiseries variées : 12 mini croissants, 12 mini pains au chocolat, 6 mini pains aux raisins. Pur beurre AOP Charentes-Poitou, farines françaises, œufs frais. Chaque pièce fabriquée selon les méthodes artisanales. Idéal pour les CODIR, séminaires ou accueils de partenaires. Pour 10 à 15 personnes.',
    seoTitle: 'Plateau viennoiseries mélangées Paris',
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
    name: 'Coffret de 10 madeleines d\'exception',
    shortName: 'Coffret de 10 madeleines d\'exception',
    price: 24.90,
    label: '10 madeleines · 24,90€',
    description: '10 madeleines Mado Paris',
    qty: '10 pièces',
    isMadeleine: true,
    maxPieces: 10,
    category: 'patisserie',
    categoryLabel: 'Pâtisserie',
    img: '/prod-madeleines-10.webp',
    dietary: ['Sans huile de palme', 'Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Farine de blé, beurre, œufs, sucre de canne, miel, zeste de citron. Fabriqué par Mado Paris.',
    seoTitle: 'Coffret 10 madeleines artisanales Paris',
    seoArticle: `
      <p>Le <strong>coffret de 10 madeleines</strong> est le petit geste qui marque une occasion sans en faire trop : un entretien qu'on veut soigner, un déjeuner avec un client, une réunion à quelques-uns. Des madeleines pur beurre au zeste de citron, dans un conditionnement propre, prêtes à poser sur la table.</p>
      <h2>Les meilleures madeleines de Paris</h2>
      <p>On travaille avec <strong>Mado Paris</strong>, dont les madeleines sont réputées comme <strong>les meilleures de Paris</strong>. Elles sont cuites chaque jour dans leur atelier parisien, <strong>sans huile de palme</strong> : moelleuses, avec la bosse franche d'une cuisson maîtrisée et ce parfum de citron qui ramène tout de suite à l'enfance.</p>
      <h2>Le bon format pour 4 à 6 personnes</h2>
      <p>Dix pièces, c'est la quantité d'une petite réunion, d'un entretien de recrutement ou d'un rendez-vous à deux ou trois. Poser des madeleines d'artisan plutôt qu'un paquet de biscuits, c'est un détail que votre interlocuteur enregistre, sans que vous ayez à le dire.</p>
      <h2>Commander un coffret de madeleines à Paris</h2>
      <p>Livré <strong>dès 6h30</strong> à Paris et en Île-de-France, commande jusqu'à <strong>14h la veille</strong>. Conditionnement soigné, prêt à présenter.</p>
    `,
  },
  {
    id: 'madeleines-20',
    name: 'Coffret de 20 madeleines d\'exception',
    shortName: 'Coffret de 20 madeleines d\'exception',
    price: 49.00,
    label: '20 madeleines · 49,00€',
    description: '20 madeleines Mado Paris',
    qty: '20 pièces',
    isMadeleine: true,
    maxPieces: 20,
    category: 'patisserie',
    categoryLabel: 'Pâtisserie',
    img: '/prod-madeleines-20.webp',
    dietary: ['Sans huile de palme', 'Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Farine de blé, beurre, œufs, sucre de canne, miel, zeste de citron. Fabriqué par Mado Paris.',
    seoTitle: 'Coffret 20 madeleines entreprise Paris',
    seoArticle: `
      <p>Vingt madeleines, c'est <strong>deux par personne pour une équipe de dix</strong>, de quoi tenir une pause café ou un début de séminaire sans que le plateau se vide en deux minutes. Le format des matinées où l'on veut que chacun ait le temps d'en reprendre une.</p>
      <h2>Les meilleures madeleines de Paris à votre étage</h2>
      <p>Les madeleines <strong>Mado Paris</strong> sont réputées comme <strong>les meilleures de Paris</strong> : cuites chaque jour dans leur atelier parisien, <strong>sans huile de palme</strong>. Un nom d'artisan que vous pouvez citer à vos équipes comme à vos clients, ça change d'un paquet anonyme.</p>
      <h2>La bosse, signe d'une vraie madeleine</h2>
      <p>La madeleine de Mado n'est pas moulée à la chaîne : le beurre est fondu à la bonne température pour obtenir la bosse caractéristique, celle qui trahit une cuisson maîtrisée. Moelleuse, légère, citronnée, c'est le genre de détail que les collaborateurs remarquent et redemandent.</p>
      <h2>Livraison en entreprise à Paris</h2>
      <p>Livré <strong>dès 6h30</strong> à Paris et en Île-de-France. Commande en ligne, facturation entreprise possible, sans engagement de régularité.</p>
    `,
  },
  {
    id: 'madeleines-50',
    name: 'Coffret de 50 madeleines d\'exception',
    shortName: 'Coffret de 50 madeleines d\'exception',
    price: 119.00,
    label: '50 madeleines · 119,00€',
    description: '50 madeleines Mado Paris',
    qty: '50 pièces',
    isMadeleine: true,
    maxPieces: 50,
    category: 'patisserie',
    categoryLabel: 'Pâtisserie',
    img: '/prod-madeleines-50.webp',
    dietary: ['Sans huile de palme', 'Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Farine de blé, beurre, œufs, sucre de canne, miel, zeste de citron. Fabriqué par Mado Paris.',
    seoTitle: 'Grand coffret 50 madeleines Paris',
    seoArticle: `
      <p>Le <strong>grand coffret de 50 madeleines</strong> est taillé pour les gros effectifs : assemblée générale, journée portes ouvertes, séminaire de 30 à 50 personnes, ou distribution à toute une équipe pour marquer le coup un matin.</p>
      <h2>Offrir les meilleures madeleines de Paris à ses équipes</h2>
      <p>Distribuer 50 madeleines <strong>Mado Paris</strong> pour un anniversaire d'entreprise, une clôture de projet ou une journée de cohésion, c'est un geste qui se retient. Là où une boîte de chocolats générique s'oublie, ces madeleines, réputées comme <strong>les meilleures de Paris</strong>, portent un nom d'artisan et une histoire que l'équipe perçoit tout de suite.</p>
      <h2>Un format pensé pour les volumes</h2>
      <p>À <strong>2,38 € la madeleine</strong>, le grand coffret rend le geste tenable côté budget, sans descendre en gamme : chaque pièce sort du même atelier parisien, cuite <strong>sans huile de palme</strong>, comme le coffret de dix.</p>
      <h2>Livraison grand format à Paris et en grande couronne</h2>
      <p>Livré <strong>dès 6h30</strong> à Paris et en Île-de-France, commande jusqu'à <strong>14h la veille</strong>. Pour des volumes importants ou des commandes récurrentes, l'équipe cale un tarif avec vous.</p>
    `,
  },

  // ─── Cakes ───────────────────────────────────────────────────────────────────
  {
    id: 'cake-marbre',
    name: 'Cake marbré maison',
    shortName: 'Cake marbré',
    price: 13.90,
    label: '5 à 6 personnes · 13,90€',
    description: '5 à 6 personnes',
    qty: '5/6 pers',
    category: 'patisserie',
    categoryLabel: 'Pâtisserie',
    img: '/prod-cake-marbre.webp',
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Cake marbré chocolat, tranché sur plateau. Contraste élégant moelleux. Le premier choix pour un plateau pâtisserie équilibré. Le plus classique. Format 5 à 6 personnes.',
    seoTitle: 'Cake marbré maison livraison Paris',
    seoArticle: `
      <p>Le <strong>cake marbré maison</strong> joue sur le contraste : deux pâtes, l'une à la vanille, l'autre au cacao, versées en alternance puis marbrées à la lame avant cuisson. À la coupe, chaque tranche dessine un motif différent, c'est ce qui en fait le cake le plus « photogénique » d'un plateau de pause café.</p>
      <h2>Le marbrage, un geste qui ne s'automatise pas</h2>
      <p>Un marbrage régulier ne s'obtient pas à la machine : il faut le bon rapport entre les deux pâtes et un tour de lame maîtrisé pour que la vanille et le chocolat s'entrelacent sans se mélanger. On le prépare avec du <strong>beurre frais, des œufs entiers</strong> et un cacao amer qui vient trancher la douceur de la vanille naturelle.</p>
      <h2>Le passe-partout d'un plateau sucré</h2>
      <p>Ni trop riche, ni trop typé, le marbré met tout le monde d'accord, c'est souvent la première tranche à disparaître. Il tient bien à température ambiante toute une matinée, se coupe net et se sert sans couverts, à côté d'un café allongé comme d'un thé.</p>
      <h2>Cake marbré livré au bureau à Paris</h2>
      <p>Format 5 à 6 personnes, à glisser dans une commande de viennoiseries pour un petit-déjeuner complet. Livraison <strong>dès 6h30</strong> dans Paris et l'Île-de-France, commande jusqu'à <strong>14h la veille</strong>, sans abonnement.</p>
    `,
  },
  {
    id: 'cake-poire',
    name: 'Cake poire maison',
    shortName: 'Cake poire',
    price: 13.90,
    label: '5 à 6 personnes · 13,90€',
    description: '5 à 6 personnes',
    qty: '5/6 pers',
    category: 'patisserie',
    categoryLabel: 'Pâtisserie',
    img: '/prod-cake-poire.webp',
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Cake poire frais, tranché sur plateau. Le plus léger et fruité de la gamme. Délicat et gourmand. Format 5 à 6 personnes.',
    seoTitle: 'Cake poire maison traiteur Paris',
    seoArticle: `
      <p>Le <strong>cake poire maison</strong> est notre cake de saison : des morceaux de poire fraîche fondus dans la pâte, qui laissent des poches moelleuses et un jus léger à la coupe. C'est le plus fondant de la gamme, et le moins sucré en bouche.</p>
      <h2>De la poire fraîche, coupée le jour même</h2>
      <p>La poire n'est pas ajoutée en dés au sirop : elle est <strong>fraîche, coupée le jour de la fabrication</strong>, ce qui donne cette texture qui fond au lieu de croquer. Le revers, assumé, c'est qu'on ne le propose qu'en pleine saison de la poire, quand le fruit a vraiment du goût.</p>
      <h2>Pour celles et ceux qui fuient le chocolat le matin</h2>
      <p>Sur un plateau, il y a toujours une partie de l'équipe qui ne veut pas démarrer la journée sur du chocolat. Le cake poire est la réponse : fruité, délicat, moins riche, il équilibre un plateau où les viennoiseries et le marbré tiennent déjà le rôle « gourmand ».</p>
      <h2>Cake poire livré au bureau à Paris</h2>
      <p>Format 5 à 6 personnes, livré <strong>dès 6h30</strong> à Paris et en Île-de-France, commande jusqu'à <strong>14h la veille</strong>. À associer à un coffret de madeleines pour varier les textures.</p>
    `,
  },
  {
    id: 'cake-framboise',
    name: 'Cake framboise maison',
    shortName: 'Cake framboise',
    price: 13.90,
    label: '5 à 6 personnes · 13,90€',
    description: '5 à 6 personnes',
    qty: '5/6 pers',
    category: 'patisserie',
    categoryLabel: 'Pâtisserie',
    img: '/prod-cake-framboise.webp',
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Cake framboise, tranché sur plateau. Acidulé et gourmand. L\'équilibre parfait entre richesse et légèreté. Le coup de cœur des après-midi. Format 5 à 6 personnes.',
    seoTitle: 'Cake framboise maison livraison Paris',
    seoArticle: `
      <p>Le <strong>cake framboise maison</strong> mise sur l'acidité. La pâte vanillée, moelleuse, est ponctuée de framboises qui libèrent un jus vif à la coupe et colorent la mie de rose, un cake qui réveille un plateau sucré un peu sage.</p>
      <h2>L'acidité qui coupe la richesse</h2>
      <p>Le beurre et les œufs rendent un cake gourmand mais parfois lourd ; la framboise, elle, apporte le contrepoint acidulé qui allège l'ensemble et donne envie d'une deuxième tranche. C'est un équilibre, pas un cake « bonbon ».</p>
      <h2>Plutôt l'après-midi que le petit matin</h2>
      <p>C'est le cake des moments d'après : goûter d'équipe, pot de départ, fin de réunion qui s'éternise. Il se tranche et se sert en deux minutes, sans assiette ni couvert, pour 5 à 6 personnes.</p>
      <h2>Commander un cake framboise à Paris</h2>
      <p>Livraison <strong>dès 6h30</strong> à Paris et en Île-de-France, commande jusqu'à <strong>14h la veille</strong>. À marier avec un cake chocolat ou citron pour composer un plateau pâtisserie à plusieurs parfums.</p>
    `,
  },
  {
    id: 'cake-chocolat',
    name: 'Cake pépites de chocolat maison',
    shortName: 'Cake chocolat',
    price: 13.90,
    label: '5 à 6 personnes · 13,90€',
    description: '5 à 6 personnes',
    qty: '5/6 pers',
    category: 'patisserie',
    categoryLabel: 'Pâtisserie',
    img: '/prod-cake-chocolat.webp',
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Cake pépites de chocolat noir 64% de cacao, tranché sur plateau. Le classique incontournable, celui qui ravit chacun. Le plus demandé en entreprise. Format 5 à 6 personnes.',
    seoTitle: 'Cake chocolat pépites maison Paris',
    seoArticle: `
      <p>Le <strong>cake aux pépites de chocolat</strong> est le plus demandé de la gamme. Sa pâte vanillée reste moelleuse à cœur, parsemée de pépites de chocolat noir à 64 % de cacao qui gardent leur forme à la cuisson au lieu de fondre en nappe, on retrouve donc un vrai éclat de chocolat sous la dent à chaque bouchée.</p>
      <h2>Pourquoi 64 % et pas un chocolat trop doux</h2>
      <p>À <strong>64 % de cacao</strong>, le chocolat apporte une amertume franche qui équilibre le sucre de la pâte, là où un chocolat trop doux rendrait le cake écœurant. C'est le détail qui sépare un cake au chocolat « de boulangerie » d'un cake qu'on reprend une deuxième fois.</p>
      <h2>Le carburant des matinées chargées</h2>
      <p>Réconfortant et un peu plus dense que ses cousins fruités, c'est le cake qui tient au corps sur une journée de séminaire ou une matinée de réunions à rallonge. Avec un espresso serré, il fait un démarrage de journée sans détour.</p>
      <h2>Commander un cake chocolat pour le bureau à Paris</h2>
      <p>Format 5 à 6 personnes, livré <strong>dès 6h30</strong> à Paris et en Île-de-France, commande jusqu'à <strong>14h la veille</strong>. Parfait en renfort d'un plateau de viennoiseries quand une simple corbeille ne suffit pas.</p>
    `,
  },
  {
    id: 'cake-citron',
    name: 'Cake citron maison',
    shortName: 'Cake citron',
    price: 13.90,
    label: '5 à 6 personnes · 13,90€',
    description: '5 à 6 personnes',
    qty: '5/6 pers',
    category: 'patisserie',
    categoryLabel: 'Pâtisserie',
    img: '/prod-cake-citron-pavot.webp',
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Cake citron pavot maison, tranché sur plateau. Vif, lumineux et aérien avec les graines de pavot. La note qui aère un plateau. L\'élégance d\'un choix réfléchi. Format 5 à 6 personnes.',
    seoTitle: 'Cake citron maison livraison Paris',
    seoArticle: `
      <p>Le <strong>cake citron maison</strong> joue la fraîcheur : zestes de citron frais et jus pressé dans la pâte, pour une mie moelleuse et acidulée qui tranche avec les cakes plus riches. C'est le plus léger en bouche de la gamme.</p>
      <h2>Le zeste fait tout le travail</h2>
      <p>Un bon cake citron ne se joue pas au sirop mais au zeste : on râpe des <strong>citrons frais non traités</strong> dont l'huile essentielle parfume toute la pâte à la cuisson, puis on ajoute le jus pour l'acidité. Le résultat est vif sans être piquant, équilibré par le beurre et le sucre.</p>
      <h2>La note qui aère un plateau sucré</h2>
      <p>Entre deux viennoiseries au beurre et un cake chocolat, le citron apporte le contraste qui empêche le plateau de tourner « tout gras, tout sucré ». On le sort volontiers au printemps et en été, quand on cherche de la légèreté.</p>
      <h2>Cake citron livré au bureau à Paris</h2>
      <p>Disponible toute l'année, format 5 à 6 personnes, livré <strong>dès 6h30</strong> à Paris et en Île-de-France. Commande jusqu'à <strong>14h la veille</strong> ; il se garde jusqu'à 48h dans un emballage hermétique.</p>
    `,
  },
  {
    id: 'cake-pistache',
    name: 'Cake pistache maison',
    shortName: 'Cake pistache',
    price: 13.90,
    label: '5 à 6 personnes · 13,90€',
    description: '5 à 6 personnes',
    qty: '5/6 pers',
    category: 'patisserie',
    categoryLabel: 'Pâtisserie',
    img: '/prod-cake-pistache.webp',
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs', 'Fruits à coque'],
    ingredients: 'Cake pistache, tranché sur plateau. Goût torréfié, couleur naturelle. L\'élégant de la gamme. Celui qui marque le coup. Contient des fruits à coque. Format 5 à 6 personnes.',
    seoTitle: 'Cake pistache maison traiteur Paris',
    seoArticle: `
      <p>Le <strong>cake pistache maison</strong> se reconnaît à sa mie vert pâle et à ses éclats de pistache concassée. C'est la pièce un cran au-dessus de la gamme, celle qu'on sort quand on veut marquer le coup sans tomber dans le chocolat que tout le monde attend.</p>
      <h2>Pâte de pistache, pas arôme vert</h2>
      <p>Beaucoup de gâteaux « à la pistache » doivent leur couleur à un colorant et leur goût à un arôme. Ici, c'est de la <strong>pâte de pistache</strong> travaillée dans la masse, complétée de pistaches concassées : la couleur est naturelle, donc discrète, pas fluo, et le goût, franchement torréfié.</p>
      <h2>Le cake des accueils qu'on veut soigner</h2>
      <p>Accueil de partenaires, comité de direction, présentation à un client important : la pistache dit le soin et l'attention sans avoir besoin d'en faire trop. C'est un choix qui se remarque sur la table et se commente une fois goûté.</p>
      <h2>Un cake qui contient des fruits à coque</h2>
      <p>Il contient des <strong>pistaches (fruits à coque)</strong>, à vérifier avant de commander pour une équipe. Pour les tables à contrainte allergique, les cakes marbré, poire ou citron prennent le relais. Livraison <strong>dès 6h30</strong> à Paris et en Île-de-France, commande jusqu'à <strong>14h la veille</strong>.</p>
    `,
  },

  // ─── Sucrés / salés ──────────────────────────────────────────────────────────
  {
    id: 'crepes',
    name: 'Crêpes moelleuses maison',
    shortName: 'Crêpes moelleuses maison',
    subtitle: 'Sucrée ou salée',
    price: 58.90,
    label: '20 grandes crêpes · 58,90€',
    description: '20 grandes crêpes',
    qty: '20 pièces',
    category: 'petits-dejeuners',
    categoryLabel: 'Petits-Déjeuners & Pauses',
    img: '/prod-crepes-v2.webp',
    layout: 'gallery',
    gallery: ['/prod-crepes-v2.webp'],
    included: ['Mini pots de confiture Alain Milliat', 'Mini pots de pâte à tartiner Alain Milliat', 'Serviettes'],
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Crêpes moelleuses maison, 20 grandes pièces. Pâte traditionnelle reposée. Inclus : pots de confiture Alain Milliat et pâte à tartiner. Parfait pour un moment gourmand et convivial en équipe. Format 8 à 12 personnes.',
    seoTitle: 'Crêpes maison pour entreprise Paris',
    seoArticle: `
      <p>Les <strong>crêpes maison</strong> de L'Écrin Traiteur sont une option conviviale et originale pour vos petits-déjeuners d'entreprise. 20 grandes crêpes moelleuses, préparées le matin même dans notre atelier, livrées fraîches et prêtes à être garnies selon les envies de vos collaborateurs.</p>
      <h2>La crêpe comme prétexte à la convivialité</h2>
      <p>Il y a quelque chose de particulièrement fédérateur autour d'un plateau de crêpes. Chacun choisit sa garniture, confiture, beurre, miel, sucre, et la pause se transforme en moment de partage informel. Un format idéal pour les <strong>team buildings matinaux</strong>, les séminaires ou les journées de cohésion.</p>
      <h2>Notre pâte à crêpes : une recette sans compromis</h2>
      <p>Farine de blé française, lait entier, œufs frais, beurre fondu : notre pâte à crêpes suit une recette traditionnelle sans additif ni conservateur. La pâte est préparée la veille pour être reposée, et les crêpes sont cuites le <strong>matin même</strong> pour une fraîcheur optimale à la livraison.</p>
      <h2>Traiteur crêpes entreprise Paris, livraison dès 6h30</h2>
      <p>Ce plateau de 20 crêpes est calibré pour <strong>8 à 12 personnes</strong>, avec 2 crêpes par personne en moyenne. Livraison dès 6h30 à Paris et en Île-de-France. Les garnitures ne sont pas incluses mais peuvent être commandées en complément de votre panier.</p>
    `,
  },
  {
    id: 'mini-crepes',
    name: 'Mini crêpes moelleuses maison',
    shortName: 'Mini crêpes moelleuses maison',
    subtitle: 'Sucrée ou salée',
    price: 39.90,
    label: '20 mini crêpes · 39,90€',
    description: '20 mini crêpes moelleuses',
    qty: '20 pièces',
    category: 'petits-dejeuners',
    categoryLabel: 'Petits-Déjeuners & Pauses',
    img: '/prod-mini-crepes.png',
    layout: 'gallery',
    gallery: ['/prod-mini-crepes.png'],
    included: ['Mini pots de confiture Alain Milliat', 'Mini pots de pâte à tartiner Alain Milliat', 'Serviettes'],
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Mini crêpes moelleuses maison, 20 pièces. Pâte traditionnelle reposée. Inclus : pots de confiture Alain Milliat et pâte à tartiner. Parfait pour un moment gourmand et pratique en réunion. Format 6 à 8 personnes.',
    seoTitle: 'Mini crêpes maison pour entreprise Paris',
    seoArticle: `
      <p>Les <strong>mini crêpes moelleuses</strong> de L'Écrin Traiteur sont l'option gourmande et pratique pour vos réunions d'équipe. 20 mini crêpes moelleuses, préparées le matin même dans notre atelier, livrées fraîches et prêtes à être dégustées selon les envies de vos collaborateurs.</p>
      <h2>Le format mini pour plus de convivialité</h2>
      <p>Plus petites que nos crêpes classiques, les mini crêpes permettent à chacun de goûter plusieurs saveurs. Confiture, pâte à tartiner, sucre frais : c'est l'occasion d'une pause partagée et informelle, une pause qui laisse chacun maître de ses envies. Idéal pour les <strong>réunions courtes</strong> ou les <strong>afterworks sucrés</strong>.</p>
      <h2>Notre pâte à crêpes : une recette sans compromis</h2>
      <p>Farine de blé française, lait entier, œufs frais, beurre fondu : notre pâte à crêpes suit une recette traditionnelle sans additif ni conservateur. La pâte est préparée la veille pour être reposée, et les mini crêpes sont cuites le <strong>matin même</strong> pour une fraîcheur optimale à la livraison.</p>
      <h2>Traiteur mini crêpes entreprise Paris, livraison dès 6h30</h2>
      <p>Ce plateau de 20 mini crêpes est calibré pour <strong>6 à 8 personnes</strong>, avec 2 à 3 mini crêpes par personne en moyenne. Livraison dès 6h30 à Paris et en Île-de-France. Les garnitures ne sont pas incluses mais peuvent être commandées en complément de votre panier.</p>
    `,
  },
  {
    id: 'brochettes-fruits',
    name: 'Brochettes de fruits frais',
    shortName: 'Brochettes de fruits frais',
    price: 48.90,
    label: '20 brochettes · 48,90€',
    description: '20 brochettes de fruits frais de saison',
    qty: '20 pièces',
    category: 'sucre-sale',
    categoryLabel: 'Sucré & Salé',
    img: '/prod-brochettes.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: 'Assortiment de fruits frais de saison : fraises, melon, ananas, raisin, kiwi, myrtilles selon arrivage. Sans sucre ajouté.',
    seoTitle: 'Brochettes de fruits frais Paris',
    seoArticle: `
      <p>Les <strong>brochettes de fruits frais</strong> de L'Écrin Traiteur sont la touche fraîche et colorée qui manque souvent aux petits-déjeuners d'entreprise. 20 brochettes composées de fruits de saison soigneusement sélectionnés, fraises, ananas, melon, raisin, kiwi, pour un plateau aussi beau que savoureux.</p>
      <h2>L'option santé et inclusive pour toutes les équipes</h2>
      <p>Nos brochettes de fruits sont <strong>vegan et sans gluten</strong>, ce qui les rend accessibles à l'ensemble de vos collaborateurs, quelles que soient leurs restrictions alimentaires. Dans une équipe diverse, proposer une option 100% naturelle et sans allergènes majeurs est un geste d'attention que tout le monde appréciera.</p>
      <h2>Des fruits de saison, sélectionnés selon l'arrivage</h2>
      <p>Nous travaillons avec des fournisseurs qui privilégient les circuits courts et la saisonnalité. La composition des brochettes varie selon les arrivages et les saisons, ce qui garantit des fruits au pic de leur maturité. Vous ne recevrez jamais des fraises en janvier, vous recevrez des clémentines en hiver et des abricots en été.</p>
      <h2>Traiteur fruits frais Paris, associé à un petit-déjeuner complet</h2>
      <p>Ces brochettes accompagnent idéalement un plateau de viennoiseries ou un assortiment de cakes pour composer un <strong>petit-déjeuner d'entreprise équilibré</strong>. Livraison dès 6h30 à Paris et en Île-de-France. Commande avant 14h la veille.</p>
    `,
  },
  {
    id: 'panier-fruits',
    name: 'Corbeille de fruits de saison',
    shortName: 'Corbeille de fruits',
    price: 38.90,
    label: '10 à 12 fruits · 38,90€',
    description: '10 à 12 fruits entiers de saison',
    qty: '10 à 12 fruits',
    category: 'sucre-sale',
    categoryLabel: 'Fruits & Fraîcheur',
    img: '/prod-corbeille.webp',
    dietary: ['Vegan', 'Sans gluten', 'Sans lactose'],
    allergens: [],
    ingredients: 'Assortiment de fruits entiers de saison : pommes, poires, oranges, mandarines, bananes, kiwis selon arrivage. Fruits calibrés, lavés, prêts à poser en corbeille.',
    seoTitle: 'Corbeille de fruits de saison Paris',
    seoArticle: `
      <p>La <strong>corbeille de fruits de saison</strong> est l'un des gestes les plus simples qu'une entreprise puisse faire pour ses équipes. Posée sur un comptoir, dans une salle de réunion ou à l'accueil, elle envoie un signal clair : on pense à vous au-delà de la réunion. Un fruit frais disponible en libre accès, c'est une collation saine, inclusive et naturellement appréciée.</p>
      <h2>Fruits entiers ou découpés, deux usages distincts</h2>
      <p>La corbeille de fruits entiers convient parfaitement à un usage quotidien ou semi-régulier : posée à l'accueil ou dans la cuisine, elle se consomme naturellement au fil de la journée. Pour les réunions, séminaires ou accueils clients, nos <strong>brochettes de fruits découpés</strong> sont plus adaptées, service immédiat, présentation soignée, format à grignoter.</p>
      <h2>Des fruits de saison, sélectionnés selon l'arrivage</h2>
      <p>Nous travaillons avec des fournisseurs qui raisonnent en saisonnalité. La composition varie selon les semaines : oranges et clémentines en hiver, fraises et abricots au printemps, figues et raisins en automne. Vous recevez des fruits au pic de leur maturité, jamais des produits hors saison sans goût.</p>
      <h2>Une option 100% inclusive</h2>
      <p>Vegan, sans gluten, sans lactose, sans allergènes majeurs, la corbeille de fruits convient à tous les profils alimentaires sans exception. Dans des équipes aux régimes variés, c'est l'une des rares options qui satisfait tout le monde sans adaptation.</p>
      <h2>Commander votre corbeille de fruits à Paris</h2>
      <p>Livraison dès 6h30 à Paris et en Île-de-France, du lundi au vendredi. Commandez avant 14h la veille. Idéale en complément d'un plateau de viennoiseries ou d'une sélection sucrée pour équilibrer votre petit-déjeuner d'entreprise.</p>
    `,
  },
  {
    id: 'plateau-fruits-frais',
    name: 'Plateau de fruits frais',
    shortName: 'Plateau de fruits',
    price: 48.90,
    label: '15 à 20 pers. · 48,90€',
    description: 'Fruits frais de saison découpés, à partager',
    qty: '15 à 20 pers.',
    category: 'sucre-sale',
    categoryLabel: 'Fruits & Fraîcheur',
    img: '/plateau-fruits.webp',
    dietary: ['Vegan', 'Sans gluten', 'Sans lactose'],
    allergens: [],
    ingredients: 'Assortiment de fruits frais de saison découpés : ananas, melon, pastèque, fraises, raisin, kiwi, mangue, agrumes selon arrivage. Prêt à picorer, sans sucre ajouté.',
    seoTitle: 'Plateau de fruits frais découpés Paris',
    seoArticle: `
      <p>Le <strong>plateau de fruits frais découpés</strong> est la touche colorée et saine qui équilibre un petit-déjeuner ou une pause d'entreprise. Contrairement à la corbeille de fruits entiers, tout est prêt à picorer : fruits lavés, épluchés et taillés, dressés généreusement pour un service immédiat en réunion, séminaire ou accueil client.</p>
      <h2>Prêt à servir, sans couteau ni préparation</h2>
      <p>C'est l'avantage du plateau découpé sur la corbeille : aucune manipulation côté équipe. On pose, on partage. Idéal pour les réunions et les buffets où l'on veut une option fraîche accessible tout de suite.</p>
      <h2>Des fruits de saison, sélectionnés selon l'arrivage</h2>
      <p>La composition varie au fil des saisons, melon, pastèque et fraises en été, agrumes et kiwis en hiver, pour garantir des fruits au pic de leur maturité. Sans sucre ajouté, naturellement vegan, sans gluten et sans lactose : une option 100% inclusive pour toutes vos équipes.</p>
      <h2>Commander votre plateau de fruits à Paris</h2>
      <p>Livraison dès 6h30 à Paris et en Île-de-France, du lundi au vendredi. Commandez avant 14h la veille. Idéal en complément d'un plateau de viennoiseries ou d'une sélection sucrée pour un petit-déjeuner d'entreprise équilibré.</p>
    `,
  },
  {
    id: 'macarons',
    name: 'Coffret de macarons d\'exception',
    shortName: 'Coffret de macarons',
    price: 64.00,
    label: '24 pièces · 64,00€',
    description: 'Café, Caramel beurre salé, Cassis coeur myrtille, Chocolat noir, Citron, Fraise, Framboise, Passion coeur framboise, Yuzu, Pistache coeur framboise, Praline amande noisette, Kalamansi coeur fruits rouges',
    qty: '24 pièces',
    category: 'patisserie',
    categoryLabel: 'Pâtisserie',
    img: '/prod-macarons.webp',
    dietary: ['Sans gluten', 'Végétarien'],
    allergens: ['Fruits à coque', 'Œufs'],
    ingredients: '24 macarons artisanaux à la meringue italienne. Coques composées de 33% d\'amandes, sans arôme artificiel. Ganaches et crèmes selon les parfums.',
    seoTitle: 'Macarons Pierre Morel, livraison Paris',
    seoArticle: `
      <p>Notre boîte de <strong>24 macarons Pierre Morel</strong> est la pièce maîtresse de nos propositions pâtissières pour l'entreprise. Pierre Morel est un artisan pâtissier reconnu dont les macarons sont distingués par leur coques fines et craquantes, leur ganache généreuse et la précision de leurs arômes. Un cadeau gourmand d'exception.</p>
      <h2>Pierre Morel : la référence du macaron à la meringue italienne</h2>
      <p>Nous avons sélectionné Pierre Morel pour son engagement sans compromis envers la <strong>qualité des matières premières</strong> et la maîtrise technique. Ses macarons sont réalisés à la meringue italienne, à partir d'amandes de première qualité, de colorants naturels et de ganaches préparées avec des ingrédients frais. Chaque boîte est un hommage à la tradition pâtissière française.</p>
      <h2>Sans gluten, accessible à plus de collaborateurs</h2>
      <p>Les macarons sont naturellement <strong>sans gluten</strong>, leur coque est à base de poudre d'amandes, sans farine de blé. Un atout non négligeable pour les équipes qui comptent des personnes intolérantes ou sensibles au gluten, à condition de vérifier l'absence de contamination croisée selon vos besoins.</p>
      <h2>Mignardises traiteur Paris, macarons pour vos événements d'entreprise</h2>
      <p>Ces 24 macarons en assortiment de parfums, framboise, pistache, chocolat, caramel, citron, rose..., sont la <strong>mignardise traiteur</strong> par excellence pour une réunion de direction, un afterwork, un anniversaire d'entreprise ou un accueil client haut de gamme. Un <strong>plateau repas traiteur luxe</strong> s'accompagne naturellement d'une sélection de macarons en dessert. Livraison dès <strong>6h30</strong> à Paris et en Île-de-France.</p>
    `,
  },
  {
    id: 'cookies',
    name: 'Assortiments de cookies maison',
    shortName: 'Assortiments de cookies',
    price: 17.90,
    label: '6 pièces · 17,90€',
    description: 'Caramel beurre salé, Pépite de chocolat, Pistache, Chocolat blanc',
    qty: '6 pièces',
    category: 'patisserie',
    categoryLabel: 'Pâtisserie',
    img: '/prod-cookies.webp',
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: '6 cookies maison artisanaux assortis. Beurre AOP, sucre roux, œufs, ingrédients de qualité premium selon les saveurs.',
    seoTitle: 'Cookies Laura Todd Paris',
    seoArticle: `
      <p>Les <strong>cookies Laura Todd</strong> sont une institution parisienne. Épais, fondants à cœur, généreux en morceaux de chocolat noir et lait et relevés d'un grain de sel de Guérande, ils sont devenus en quelques années une référence du cookie à Paris. Nous les proposons par coffret de 6 pièces pour vos pauses d'entreprise.</p>
      <h2>Laura Todd : le cookie américain revisité à la française</h2>
      <p>Laura Todd a importé à Paris la culture du <strong>vrai cookie américain</strong>, épais, chewy, généreux, en lui apportant l'exigence française des matières premières. Beurre AOP, chocolat de couverture, farine française, sel de Guérande : chaque ingrédient est choisi pour contribuer à un résultat final irréprochable.</p>
      <h2>Le cookie comme récompense informelle</h2>
      <p>Dans la culture de bureau, le cookie est le signal du moment détendu. Après une réunion intense, avant une présentation, pendant un point d'équipe, les cookies créent une atmosphère plus décontractée qui favorise la communication et la cohésion. 6 cookies pour une petite équipe, ou une distribution de 1 cookie par personne pour 6 collaborateurs.</p>
      <h2>Traiteur cookies Paris, livraison dès 6h30 en Île-de-France</h2>
      <p>Commandez avant <strong>14h la veille</strong>, recevez vos cookies le lendemain matin, frais et prêts à être dégustés. Livraison disponible dans Paris et en Île-de-France. Les cookies Laura Todd se conservent jusqu'à 3 jours dans leur emballage d'origine.</p>
    `,
  },
  {
    id: 'panna-cotta',
    name: 'Panna cotta maison',
    shortName: 'Panna cotta',
    price: 16.90,
    label: '6 pièces · 16,90€',
    description: '6 verrines · coulis de fruits rouges',
    qty: '6 pièces',
    category: 'sucre-sale',
    categoryLabel: 'Sucré & Salé',
    img: '/prod-panna-cotta.webp',
    dietary: ['Sans gluten', 'Végétarien'],
    allergens: ['Lait'],
    ingredients: 'Crème fleurette entière, sucre, gélatine, fruits rouges frais. Texture crémeuse et délicate avec coulis généreux. Conditionné en verrine individuelle.',
    seoTitle: 'Panna cotta fruits rouges Paris',
    seoArticle: `
      <p>La <strong>panna cotta aux fruits rouges</strong> de L'Écrin Traiteur est un dessert raffiné et élégant, conditionné en verrine individuelle pour une dégustation facile lors de vos événements d'entreprise. Sa texture crémeuse et délicate, son coulis généreux de framboises, mûres et groseilles en font un choix haut de gamme pour surprendre vos convives.</p>
      <h2>Sans gluten, accessible à tous</h2>
      <p>La panna cotta est naturellement <strong>sans gluten</strong>, un argument important dans les équipes où certains collaborateurs présentent une intolérance ou une sensibilité au gluten. Elle peut être proposée à côté d'autres douceurs pour garantir que personne n'est laissé pour compte lors de la pause gourmande.</p>
      <h2>La verrine individuelle : pratique et élégante</h2>
      <p>Chaque panna cotta est conditionnée dans une verrine individuelle refermable, ce qui facilite la distribution et la dégustation sans assiette. Le coulis de fruits rouges est versé sur la panna cotta au moment de la livraison, préservant la fraîcheur et la tenue du dessert jusqu'à la dégustation.</p>
      <h2>Dessert traiteur Paris, commande verrines entreprise Île-de-France</h2>
      <p>Parfaite pour conclure un plateau-repas ou ponctuer un afterwork, la panna cotta est livrée fraîche dès <strong>6h30</strong> à Paris et en Île-de-France. Commandez avant 14h la veille. Conservation jusqu'à 48h au réfrigérateur.</p>
    `,
  },
  {
    id: 'compote-pomme',
    name: 'Compote de pomme du verger',
    shortName: 'Compote pomme',
    price: 16.90,
    label: '6 pièces · 16,90€',
    description: '6 verrines · pommes françaises du verger',
    qty: '6 pièces',
    category: 'sucre-sale',
    categoryLabel: 'Sucré & Salé',
    img: '/prod-compote.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: 'Pommes françaises cuites lentement, saveur naturelle du verger. 100% vegan, sans gluten, sans allergènes. Conditionné en verrine individuelle.',
    seoTitle: 'Compote pomme artisanale Paris',
    seoArticle: `
      <p>La <strong>compote de pomme du verger</strong> de L'Écrin Traiteur est notre proposition la plus inclusive et la plus naturelle. Préparée à partir de pommes françaises de variétés sélectionnées pour leur équilibre sucre-acidité, conditionnée en verrine individuelle, elle est <strong>vegan, sans gluten et sans allergènes majeurs</strong>, la solution idéale pour les équipes avec des restrictions alimentaires variées.</p>
      <h2>Des pommes françaises, pas de concentré industriel</h2>
      <p>Notre compote est préparée à partir de vraies pommes françaises, cuites lentement pour conserver leur texture et leur saveur naturelle. Pas de concentré de jus, pas d'arôme artificiel, pas d'épaississant. Le résultat est une compote honnête, au goût authentique du verger, qui rappelle celle que l'on préparait à la maison.</p>
      <h2>L'option 100% inclusive pour vos petits-déjeuners d'entreprise</h2>
      <p>Dans une équipe multiculturelle et sensible aux enjeux alimentaires, proposer une option <strong>vegan et sans allergènes</strong> est un signal fort. La compote de pomme peut être servie à côté des viennoiseries et des cakes sans que personne ne soit exclu du moment de convivialité.</p>
      <h2>Traiteur Paris, verrines vegan sans gluten livraison Île-de-France</h2>
      <p>Livrée fraîche dès <strong>6h30</strong> à Paris et en Île-de-France. Commandez avant 14h la veille. Conservation 4 à 5 jours au réfrigérateur. Parfaite en complément d'un plateau de viennoiseries ou de brochettes de fruits.</p>
    `,
  },
  {
    id: 'verrine-salade-fruits',
    name: 'Verrine de salade de fruits',
    shortName: 'Salade de fruits',
    price: 16.90,
    label: '6 pièces · 16,90€',
    description: 'Salade de fruits frais coupés en cube, servie en pot individuel.',
    qty: '6 pièces',
    category: 'sucre-sale',
    categoryLabel: 'Sucré & Salé',
    img: '/prod-verrine-salade-fruits.webp',
    dietary: ['Vegan', 'Sans gluten'],
    allergens: [],
    ingredients: 'Fruits frais de saison coupés en cube, conditionnés en verrine individuelle.',
    seoTitle: 'Verrine de salade de fruits frais Paris',
    seoArticle: `
      <p>Notre <strong>verrine de salade de fruits frais</strong> est coupée en cube et servie en pot individuel, prête à déguster à la cuillère. Fraîche, colorée et légère, elle apporte une option saine et vitaminée à un petit-déjeuner ou une pause d'équipe.</p>
      <h2>Traiteur Paris, verrines de fruits frais livraison Île-de-France</h2>
      <p>Livrée fraîche dès <strong>6h30</strong> à Paris et en Île-de-France. Commandez avant 14h la veille. Parfaite en complément d'un plateau de viennoiseries ou d'un buffet de petit-déjeuner.</p>
    `,
  },
  {
    id: 'yaourt-fermier',
    name: 'Yaourt fermier',
    shortName: 'Yaourt fermier',
    price: 14.90,
    label: '6 pièces · 14,90€',
    description: 'Yaourt aux fruits de la Ferme de Viltain, au lait de leurs vaches.',
    qty: '6 pièces',
    category: 'sucre-sale',
    categoryLabel: 'Sucré & Salé',
    img: '/prod-yaourt-fruits.webp',
    dietary: ['Végétarien'],
    allergens: ['Lait'],
    ingredients: 'Yaourt fermier au lait de vache frais, fruits de saison. Pot individuel.',
    seoTitle: 'Yaourt fermier fruits Paris',
    seoArticle: `
      <p>Notre yaourt fermier est celui de la Ferme de Viltain, faits au lait de leurs vaches, avec des fruits. C'est l'option fraîche et légère pour ceux qui préfèrent le laitier au sucré.</p>
    `,
  },
  {
    id: 'yaourt-granola',
    name: 'Yaourt au Granola',
    shortName: 'Yaourt Granola',
    price: 16.90,
    label: '6 pièces · 16,90€',
    description: 'Yaourt crémeux avec granola maison croquant',
    qty: '6 pièces',
    category: 'sucre-sale',
    categoryLabel: 'Sucré & Salé',
    img: '/prod-yaourt-granola.png',
    dietary: ['Végétarien'],
    allergens: ['Lait', 'Fruits à coque'],
    ingredients: 'Yaourt crémeux, granola maison (flocons d\'avoine, miel, amandes, noisettes). Pot individuel.',
    seoTitle: 'Yaourt au granola traiteur Paris',
    seoArticle: `
      <p>Notre <strong>yaourt au granola</strong> associe un yaourt crémeux et savoureux à un granola maison croquant : un contraste de textures apprécié pour une pause gourmande ou un petit-déjeuner équilibré.</p>
    `,
  },
  {
    id: 'brioche-babka',
    name: 'Brioche babka maison',
    shortName: 'Brioche babka',
    price: 24.90,
    label: '5 à 6 personnes · 24,90€',
    description: 'Brioche roulée au chocolat, tranchée.',
    qty: '5 à 6 personnes',
    category: 'sucre-sale',
    categoryLabel: 'Sucré & Salé',
    img: '/prod-babka.webp',
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Brioche moelleuse roulée au chocolat, servie tranchée.',
    seoTitle: 'Brioche babka maison Paris',
    seoArticle: `
      <p>Notre babka briochée roulée au chocolat, servie tranchée, est la pièce généreuse qui change du gâteau classique. Moelleuse, marbrée de chocolat, elle se partage facilement autour d'un café.</p>
    `,
  },
  {
    id: 'plateau-clubs-signature',
    name: 'Plateau Clubs Signature',
    shortName: 'Clubs Signature',
    price: 64.90,
    label: '24 pièces · 64,90€',
    description: '12 Saumon Fumé & Cream Cheese, 8 Club Poulet Rôti, 8 Mousse de Thon & Herbes Fraîches',
    qty: '24 pièces',
    category: 'viennoiseries',
    categoryLabel: 'Plateaux',
    img: '/plateau-clubs.webp',
    dietary: [],
    allergens: ['Gluten', 'Lait', 'Poisson'],
    ingredients: 'Pain brioché moelleux découpé en triangles. Assortiment : 12 clubs Saumon Fumé & Cream Cheese, 8 clubs Poulet Rôti, 8 clubs Mousse de Thon & Herbes Fraîches.',
    seoTitle: 'Plateau clubs sandwichs Paris',
    seoArticle: `
      <p>Notre plateau de clubs sandwichs moelleux, découpés en triangles, accompagne un déjeuner d'équipe ou une réunion de travail. Assortiment varié de 24 pièces : saumon fumé, poulet rôti et mousse de thon aux herbes fraîches.</p>
    `,
  },
  {
    id: 'plateau-fromages-affines',
    name: 'Plateau de fromages affinés',
    shortName: 'Fromages affinés',
    price: 0,
    label: 'À partager · sur devis',
    description: 'Sélection de fromages affinés accompagnés de fruits frais, fruits secs et pain artisanal.',
    qty: 'À partager',
    category: 'viennoiseries',
    categoryLabel: 'Plateaux',
    img: '/plateau-fromages.webp',
    dietary: ['Végétarien'],
    allergens: ['Lait'],
    ingredients: 'Fromages affinés variés, fruits frais, fruits secs et pain artisanal.',
    seoTitle: 'Plateau de fromages affinés Paris',
    seoArticle: `
      <p>Notre plateau de fromages affinés, accompagné de fruits frais et de pain artisanal, pose le ton d'une réception soignée.</p>
    `,
  },
  {
    id: 'cookie-geant',
    name: 'Cookie géant',
    shortName: 'Cookie géant',
    price: 0,
    label: 'Sur devis',
    description: 'Cookie géant gourmand à partager',
    qty: 'À partager',
    category: 'petits-dejeuners',
    categoryLabel: 'Petits-Déjeuners & Pauses',
    img: '/prod-cookie-geant.png',
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: 'Cookie géant moelleux fait maison, portions généreuses à partager.',
    seoTitle: 'Cookie géant maison Paris',
    seoArticle: `
      <p>Notre <strong>cookie géant</strong> est la surprise gourmande qui transforme une pause en moment festif. Préparé frais, moelleux et généreux, il se partage en équipe autour du café. L'Écrin Traiteur prépare votre cookie géant sur commande, à Paris et en Île-de-France.</p>
      <h2>Moelleux, généreux, fait maison</h2>
      <p>Un seul cookie de belle taille, prêt à être partagé. Recette maison simple et généreuse, à déguster chaud avec un café ou un chocolat chaud. Format idéal pour une pause gourmande en équipe.</p>
      <h2>Commander votre cookie géant à Paris</h2>
      <p>Prestation sur devis : date, effectif et saveur souhaitée. Préparé frais le jour de la livraison. Livraison dès 6h30 à Paris et en Île-de-France. Réponse sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    `,
  },
  {
    sectionTitle: 'Petit Déjeuner Salé',
    id: 'navettes-salees',
    name: 'Assortiment de pains briochés salés',
    shortName: 'Pains briochés assortis',
    price: 63.90,
    label: '20 pains · 63,90€',
    description: '10 tzatiki concombre, 10 saumon fumé cream cheese aneth',
    qty: '20 pièces',
    category: 'petits-dejeuners',
    categoryLabel: 'Petits-Déjeuners & Pauses',
    img: '/prod-navettes.webp',
    dietary: [],
    allergens: ['Gluten', 'Lait', 'Poisson', 'Œufs'],
    ingredients: 'Pain brioché maison. Garnitures : 10 pains avec tzatiki maison et concombre frais. 10 pains avec saumon fumé, cream cheese et aneth frais.',
    seoTitle: 'Mini navettes salées traiteur Paris',
    seoArticle: `
      <p>Les <strong>mini navettes salées</strong> de L'Écrin Traiteur sont notre interprétation de l'amuse-bouche parfait pour accompagner un café ou ouvrir une réunion de travail. Composées d'un pain brioché maison et de garnitures végétariennes soigneusement choisies, elles apportent un contrepoint salé au reste de votre plateau sucré.</p>
      <h2>La navette salée : l'amuse-bouche de la réunion réussie</h2>
      <p>Proposer des navettes salées à vos collaborateurs ou clients en début de réunion, c'est créer une atmosphère détendue et attentionnée. Elles se grignotent sans effort, sans assiette, sans couverts, parfaites pour un debout convivial ou un accueil de partenaires dans un open space.</p>
      <h2>Garnitures assorties, toujours végétariennes</h2>
      <p>Nos garnitures changent selon les saisons et les arrivages, mais restent toujours <strong>végétariennes</strong> : fromage frais et ciboulette, légumes marinés à la moutarde, tapenade de poivrons rôtis... Des associations qui surprennent et séduisent, loin des sandwichs jambon-beurre sans imagination.</p>
      <h2>Traiteur pause déjeuner Paris, mini sandwichs livraison entreprise</h2>
      <p>Ce plateau de 20 navettes est calibré pour <strong>6 à 10 personnes</strong> en amuse-bouche. Livré dès 6h30 à Paris et en Île-de-France. Commande avant 14h la veille. Peut être associé à un plateau de viennoiseries pour composer un petit-déjeuner sucré-salé complet.</p>
    `,
  },
  {
    id: 'pains-cereales-tranches',
    name: 'Pains aux Céréales Tranchés',
    shortName: 'Pains Céréales',
    price: 24.90,
    label: '10-12 tranches · 24,90€',
    description: '10 à 12 tranches, 3 beurres, 3 confitures Alain Milliat inclus',
    qty: '4 à 6 personnes',
    category: 'petits-dejeuners',
    categoryLabel: 'Petits-Déjeuners & Pauses',
    img: '/prod-pains-cereales.png',
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait'],
    ingredients: 'Pain aux céréales maison, tranché. Inclus : 3 portions de beurre demi-sel, 3 pots de confiture Alain Milliat.',
    seoTitle: 'Pain aux céréales tranchés traiteur Paris',
    seoArticle: `
      <p>Notre <strong>pain aux céréales tranchés</strong> est la solution pratique pour un petit-déjeuner ou une pause rapide. Tranché d'avance, accompagné de beurre demi-sel et de confitures Alain Milliat, il ne demande que d'être servi sur table.</p>
    `,
  },
  {
    id: 'plateau-clubs-signature',
    name: 'Plateau Clubs Signature',
    shortName: 'Clubs Signature',
    price: 64.90,
    label: '24 pièces · 64,90€',
    description: '12 Saumon Fumé & Cream Cheese, 8 Club Poulet Rôti, 8 Mousse de Thon & Herbes Fraîches',
    qty: '24 pièces',
    category: 'petits-dejeuners',
    categoryLabel: 'Petits-Déjeuners & Pauses',
    img: '/plateau-clubs.webp',
    dietary: [],
    allergens: ['Gluten', 'Lait', 'Poisson'],
    ingredients: 'Pain brioché moelleux découpé en triangles. Assortiment : 12 clubs Saumon Fumé & Cream Cheese, 8 clubs Poulet Rôti, 8 clubs Mousse de Thon & Herbes Fraîches.',
    seoTitle: 'Plateau clubs sandwichs Paris',
    seoArticle: `
      <p>Notre plateau de clubs sandwichs moelleux, découpés en triangles, accompagne un déjeuner d'équipe ou une réunion de travail. Assortiment varié de 24 pièces : saumon fumé, poulet rôti et mousse de thon aux herbes fraîches.</p>
    `,
  },
  {
    id: 'plateau-fromages-affines',
    name: 'Plateau de fromages affinés',
    shortName: 'Fromages affinés',
    price: 0,
    label: 'À partager · sur devis',
    description: 'Sélection de fromages affinés accompagnés de fruits frais, fruits secs et pain artisanal.',
    qty: 'À partager',
    category: 'petits-dejeuners',
    categoryLabel: 'Petits-Déjeuners & Pauses',
    img: '/plateau-fromages.webp',
    dietary: ['Végétarien'],
    allergens: ['Lait'],
    ingredients: 'Fromages affinés variés, fruits frais, fruits secs et pain artisanal.',
    seoTitle: 'Plateau de fromages affinés Paris',
    seoArticle: `
      <p>Notre plateau de fromages affinés, accompagné de fruits frais et de pain artisanal, pose le ton d'une réception soignée.</p>
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
