// Données plateaux repas — module plat (importable serveur + client)

export const COLLECTIONS = [
  {
    key: 'essentiel',
    label: 'Essentiel',
    description: 'Des recettes fraîches et équilibrées, entrée, plat et dessert préparés chaque matin avec des produits de saison.',
    prix: '28,90',
    hero: '/plateau-mediterraneen.webp',
  },
  {
    key: 'signature',
    label: 'Signature',
    description: 'Une sélection raffinée élaborée par nos chefs — produits nobles, dressage soigné, transformable en coffret Prestige.',
    prix: '33,90',
    hero: '/hero-plateau-signature.webp',
  },
]

export const PRIX = {
  essentiel: { vegetarien: '28,90', poulet: '29,90', poisson: '30,90' },
  signature: { vegetarien: '33,90', poulet: '34,90', poisson: '35,90', viande: '35,90' },
}

export const prixMenu = (p) => p.prix ?? PRIX[p.collection]?.[p.categorie] ?? ''

export const PRODUITS = [
  // ── Collection Essentiel (à partir de 28,90 € HT) ──
  {
    id: 'e2', collection: 'essentiel', categorie: 'poulet', nom: 'La Romaine', img: '/plateau-cesar.webp',
    entree: 'Salade de tomates anciennes & basilic',
    plat: 'Salade César au poulet rôti',
    dessert: 'Brownie',
  },
  {
    id: 'e1', collection: 'essentiel', categorie: 'vegetarien', nom: 'La Solaire', img: '/plateau-mediterraneen.webp',
    entree: 'Houmous, huile d\'olive & pain grillé',
    plat: 'Quinoa gourmand, falafels & sauce tahini',
    dessert: 'Cookie Signature',
  },
  {
    id: 'e3', collection: 'essentiel', categorie: 'vegetarien', nom: 'La Provençale', img: '/plateau-provencal.webp',
    entree: 'Caviar d\'aubergine & focaccia romarin',
    plat: 'Pâtes au pesto, mozzarella & tomates confites',
    dessert: 'Panna Cotta fruits rouges',
  },
  {
    id: 'e4', collection: 'essentiel', categorie: 'poulet', nom: 'La Champêtre', img: '/plateau-fermier.webp',
    entree: 'Salade de concombre au yaourt, menthe & aneth',
    plat: 'Émincé de Poulet, légumes grillés marinés & huile au basilic',
    dessert: 'Compote pomme & fève tonka',
  },
  {
    id: 'e5', collection: 'essentiel', categorie: 'poisson', nom: 'La Boréale', img: '/plateau-nordique.webp',
    entree: 'Salade de tomates anciennes & basilic',
    plat: 'Salade de pommes de terre, saumon fumé & crème citronnée',
    dessert: 'Mousse au chocolat du Chef',
  },
  {
    id: 'e6', collection: 'essentiel', categorie: 'vegetarien', nom: 'La Potagère', img: '/plateau-gourmand.webp',
    entree: 'Tartelette pissaladière & jeunes pousses',
    plat: 'Salade de lentilles, feta & légumes rôtis',
    dessert: 'Verrine Citron / Lemon Curd',
  },

  // ── Collection Signature (à partir de 33,90 € HT) ──
  {
    id: 's1', collection: 'signature', categorie: 'vegetarien', nom: 'La Dolce Vita', img: '/plat-trofie-burrata.webp',
    entree: 'Burrata, tomates anciennes & pesto',
    plat: 'Trofie au pesto, burrata & tomates confites',
    dessert: 'Tartelette Praliné',
  },
  {
    id: 's2', collection: 'signature', categorie: 'poulet', nom: 'L\'Audacieuse', img: '/plat-poulet-coreen.webp',
    entree: 'Assiette mezzé',
    plat: 'Poulet coréen, riz au sésame & légumes pickles',
    dessert: 'Mousse Chocolat',
  },
  {
    id: 's3', collection: 'signature', categorie: 'poisson', nom: 'Le Riviera', img: '/plat-gravlax-riviera.webp',
    entree: 'Tartare de saumon méditerranéen',
    plat: 'Saumon gravlax, pommes grenailles, crème d\'Isigny & jeunes pousses',
    dessert: 'Tartelette Citron',
  },
  {
    id: 's4', collection: 'signature', categorie: 'viande', nom: 'La Parisienne', img: '/plat-tataki.webp',
    entree: 'Carpaccio de bœuf, parmesan & roquette',
    plat: 'Tataki de bœuf, pommes grenailles rôties & chimichurri',
    dessert: 'Carrot Cake',
  },
  {
    id: 's5', collection: 'signature', categorie: 'vegetarien', nom: 'La Levantine', img: '/plat-levant.webp',
    entree: 'Assiette mezzé',
    plat: 'Quinoa gourmand, falafels, feta, légumes grillés & tahini',
    dessert: 'Mousse Chocolat',
  },
  {
    id: 's6', collection: 'signature', categorie: 'poisson', nom: 'L\'Estivale', img: '/plat-gravlax.webp',
    entree: 'Ceviche de daurade, mangue & coriandre',
    plat: 'Saumon gravlax, pommes grenailles & crème d\'Isigny',
    dessert: 'Tartelette Citron',
  },
  {
    id: 's7', collection: 'signature', categorie: 'viande', nom: 'La Souveraine', img: '/plat-tataki-prestige.webp',
    entree: 'Carpaccio de bœuf, parmesan & roquette',
    plat: 'Tataki de bœuf & chimichurri',
    dessert: 'Mousse Chocolat',
  },
  {
    id: 's8', collection: 'signature', categorie: 'vegetarien', nom: 'La Divine', img: '/plat-trofie-prestige.webp',
    entree: 'Burrata, tomates anciennes & pesto',
    plat: 'Trofie au pesto & burrata',
    dessert: 'Carrot Cake',
  },
]
