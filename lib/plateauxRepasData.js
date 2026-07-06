// Données structurées des produits — Plateaux Repas

export const PLATEAUX_REPAS = [
  {
    id: 'plateau-mediterraneen',
    name: 'Plateau Méditerranéen',
    shortName: 'Plateau Méditerranéen',
    price: null,
    label: 'Sur devis',
    description: 'Plateau repas inspiré de la cuisine méditerranéenne',
    qty: 'À partir de 1 pers.',
    category: 'plateau-repas',
    categoryLabel: 'Plateaux Repas',
    img: '/creations-4.webp',
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: "Salade composée méditerranéenne, légumes grillés à l'huile d'olive, fromage de brebis, houmous artisanal, pain artisanal. Ingrédients frais sélectionnés chaque matin.",
    seoTitle: 'Plateau repas Méditerranéen entreprise',
    seoArticle: `
      <p>Le <strong>Plateau Méditerranéen</strong> s'inspire des saveurs ensoleillées du bassin méditerranéen pour composer un repas équilibré, coloré et savoureux. Légumes grillés à l'huile d'olive, houmous artisanal, fromage de brebis — une sélection généreuse qui transporte vos équipes loin des repas de travail sans caractère.</p>
      <h2>Une composition équilibrée et généreuse</h2>
      <p>Notre plateau méditerranéen est pensé pour apporter les protéines, les glucides et les légumes nécessaires à une après-midi de travail productive. Les légumes grillés apportent de la fraîcheur, le houmous artisanal des protéines végétales, et le fromage de brebis une note caractéristique qui distingue ce plateau des offres standard.</p>
      <h2>Idéal pour les équipes avec des contraintes alimentaires variées</h2>
      <p>La cuisine méditerranéenne est naturellement inclusive : végétariens, personnes qui évitent la viande rouge, amateurs de saveurs authentiques — ce plateau convient à un large spectre de préférences alimentaires tout en restant généreux et satisfaisant pour tous.</p>
      <h2>Commander votre plateau repas méditerranéen à Paris</h2>
      <p>Livraison dès <strong>6h30</strong> à Paris et en Île-de-France, du lundi au vendredi. Commandez avant 14h la veille. Devis personnalisé pour les commandes de groupe.</p>
    `,
  },
  {
    id: 'plateau-riviera',
    name: 'Plateau Riviera',
    shortName: 'Plateau Riviera',
    price: null,
    label: 'Sur devis',
    description: 'Plateau repas inspiré de la Riviera — poisson et saveurs marines',
    qty: 'À partir de 1 pers.',
    category: 'plateau-repas',
    categoryLabel: 'Plateaux Repas',
    img: '/creations-4.webp',
    dietary: ['Sans gluten'],
    allergens: ['Poisson', 'Crustacés', 'Gluten', 'Lait'],
    ingredients: "Poisson du jour en carpaccio ou marinade citron-aneth, légumes croquants, sauce vierge, pain artisanal, dessert frais. Poissons sourcés chez nos partenaires sélectionnés.",
    seoTitle: 'Plateau repas Riviera entreprise Paris',
    seoArticle: `
      <p>Le <strong>Plateau Riviera</strong> rend hommage à la tradition culinaire de la côte méditerranéenne avec ses poissons marinés, ses légumes croquants et ses sauces citronnées. Un plateau léger et élégant qui apporte fraîcheur et raffinement à vos déjeuners de travail parisiens.</p>
      <h2>Le poisson frais au cœur du plateau</h2>
      <p>La pièce centrale du Plateau Riviera est un poisson frais travaillé en carpaccio ou en marinade selon la saison et les arrivages. Nous sélectionnons nos poissons chez des partenaires qui garantissent traçabilité et fraîcheur — des produits qui parlent de la mer, pas de la conserve.</p>
      <h2>Un plateau léger pour un après-midi productif</h2>
      <p>Riche en oméga-3, protéines maigres et légumes frais, le Plateau Riviera est le choix idéal pour les équipes qui souhaitent déjeuner légèrement sans sacrifier le plaisir gustatif. Ni trop lourd, ni trop léger — l'équilibre qui permet de rester concentré tout l'après-midi.</p>
      <h2>Plateau repas poisson Paris — livraison entreprise Île-de-France</h2>
      <p>Commandez avant <strong>14h la veille</strong>. Livraison dès 6h30 à Paris et en Île-de-France. Budget indicatif 12€ à 25€ par personne HT selon la composition.</p>
    `,
  },
  {
    id: 'plateau-signature',
    name: 'Plateau Signature',
    shortName: 'Plateau Signature',
    price: null,
    label: 'Sur devis',
    description: "Plateau repas Signature — la sélection premium de L'Écrin",
    qty: 'À partir de 1 pers.',
    category: 'plateau-repas',
    categoryLabel: 'Plateaux Repas',
    img: '/creations-4.webp',
    dietary: [],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: "Sélection premium : viande ou volaille d'exception, accompagnement de saison travaillé avec soin, dessert artisanal. Composition raffinée selon les arrivages et la saisonnalité.",
    seoTitle: "Plateau repas Signature L'Écrin — premium livraison Paris déjeuner entreprise",
    seoArticle: `
      <p>Le <strong>Plateau Signature</strong> est la création premium de L'Écrin Traiteur — notre sélection la plus exigeante, composée de produits d'exception soigneusement choisis pour leur qualité irréprochable. Pour les réunions importantes, les accueils de partenaires stratégiques ou les événements qui méritent le meilleur.</p>
      <h2>La sélection qui reflète l'exigence de L'Écrin</h2>
      <p>Le Plateau Signature n'est pas un plateau standard amélioré — c'est une composition pensée de A à Z pour impressionner. Viande ou volaille d'exception sourcée chez nos artisans bouchers partenaires, accompagnement de saison travaillé avec soin, dessert artisanal qui clôture le repas avec élégance.</p>
      <h2>Pour les moments qui comptent vraiment</h2>
      <p>Signature — le nom dit tout. Ce plateau est votre carte de visite gastronomique lors des déjeuners de travail importants. Il communique votre sens du détail, votre exigence et votre respect pour vos interlocuteurs — des valeurs que les professionnels reconnaissent et apprécient.</p>
      <h2>Plateau repas premium Paris — livraison entreprise sur mesure</h2>
      <p>Disponible sur devis pour les commandes individuelles et de groupe. Commandez avant 14h la veille pour les commandes standard, 48h à l'avance pour les volumes importants.</p>
    `,
  },
  {
    id: 'plateau-toscane',
    name: 'Plateau Toscane',
    shortName: 'Plateau Toscane',
    price: null,
    label: 'Sur devis',
    description: "Plateau repas Toscane — saveurs italiennes artisanales",
    qty: 'À partir de 1 pers.',
    category: 'plateau-repas',
    categoryLabel: 'Plateaux Repas',
    img: '/creations-4.webp',
    dietary: ['Végétarien'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    ingredients: "Antipasti sélectionnés, focaccia artisanale, fromages italiens affinés, charcuterie italienne (ou version végétarienne disponible), dessert tiramisu ou panna cotta.",
    seoTitle: "Plateau repas Toscane — saveurs italiennes livraison Paris entreprise déjeuner",
    seoArticle: `
      <p>Le <strong>Plateau Toscane</strong> rend hommage à la richesse culinaire de la Toscane : antipasti généreux, focaccia artisanale croustillante, fromages italiens affinés et la touche finale d'un dessert emblématique. Un voyage gastronomique en Italie, livré directement dans votre salle de réunion parisienne.</p>
      <h2>L'Italie authentique, pas l'Italie de supermarché</h2>
      <p>Chez L'Écrin, nous travaillons avec des fournisseurs qui importent directement d'Italie des produits d'appellation contrôlée : Parmigiano Reggiano DOP, Prosciutto di Parma IGP, huile d'olive extra-vierge. Le Plateau Toscane est composé avec cette même exigence — pas de copies low-cost, pas de compromis sur l'authenticité.</p>
      <h2>Un plateau convivial pour créer l'ambiance</h2>
      <p>La générosité de la table italienne, avec ses antipasti à partager et ses fromages à déguster, crée naturellement une atmosphère détendue et conviviale. Ce plateau est particulièrement adapté aux réunions informelles, aux déjeuners d'équipe et aux moments de célébration.</p>
      <h2>Plateau repas italien Paris — livraison traiteur entreprise Île-de-France</h2>
      <p>Livraison dès <strong>6h30</strong> à Paris et en Île-de-France. Commandez avant 14h la veille. Devis personnalisé pour les groupes.</p>
    `,
  },
]

export const getPlateauxRepasById = (id) => PLATEAUX_REPAS.find(p => p.id === id)
