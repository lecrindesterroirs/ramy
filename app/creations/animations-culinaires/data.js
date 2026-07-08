// Données animations culinaires — module plat (importable serveur + client)

/* Tag court + couleur par univers. */
export const UNIVERS = {
  brunch:     { tag: 'Brunch',      color: '#C08A3E' },
  dejeuner:   { tag: 'Déjeuner',    color: '#5A7247' },
  streetfood: { tag: 'Street Food', color: '#8A3A3A' },
  douceurs:   { tag: 'Douceurs',    color: '#C4756B' },
  bars:       { tag: 'Bars',        color: '#B07D10' },
}

/* Libellé long par univers (pour breadcrumb / SEO des fiches détail). */
export const UNIVERS_LABEL = {
  brunch:     'Petit-déjeuner & Brunch',
  dejeuner:   'Déjeuner Gourmet',
  streetfood: 'Street Food',
  douceurs:   'Douceurs',
  bars:       'Bars & Boissons',
}

/* Slug URL déterministe à partir du nom (accents/esperluette gérés). */
export const slugAnim = (nom) =>
  nom.toLowerCase().replace(/œ/g, 'oe').replace(/æ/g, 'ae')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/&/g, 'et')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

/* Animations : description sur la carte, composition stockée pour la
   fiche produit. Photos placeholder. */
export const ANIMATIONS = [
  // ── Petit-déjeuner & Brunch ──
  { id: 'b1', univers: 'brunch', nom: 'Barista', img: '/prod-cafe.webp',
    description: 'Préparation de cafés de spécialité à la demande.',
    compo: ['Espresso', 'Cappuccino', 'Latte', 'Flat White', 'Chocolat chaud', 'Thés premium'] },
  { id: 'b3', univers: 'brunch', nom: 'Bar à Jus Pressés', img: '/prod-bar-jus.webp',
    description: 'Jus de fruits et légumes préparés devant les invités.',
    compo: ['Orange', 'Pamplemousse', 'Citronnade fraîche', 'Pomme', 'Carotte, Orange & Gingembre', 'Betterave, Pomme & Citron', 'Concombre, Menthe & Citron Vert'] },
  { id: 'b4', univers: 'brunch', nom: 'Brunch Gourmand', img: '/prod-brunch-gourmand.webp',
    description: 'Une animation complète de brunch servie en continu.',
    compo: ['Viennoiseries artisanales', 'Pain & brioches', 'Beurre & confitures', 'Fruits frais', 'Yaourts & granola', 'Jus frais', 'Café & thé'] },
  { id: 'b5', univers: 'brunch', nom: 'Œufs brouillés minute', img: '/prod-atelier-oeufs.webp',
    description: 'Œufs préparés minute selon les envies.',
    compo: ['Œufs brouillés', 'Œufs au plat', 'Omelettes', 'Œufs aux fines herbes', 'Dinde fumée (option)', 'Saumon fumé (option)'] },
  { id: 'b6', univers: 'brunch', nom: 'Atelier Crêpes & Pancakes', img: '/prod-atelier-crepes.webp',
    description: 'Crêpes et pancakes préparés et dressés à la demande.',
    compo: ['Sirop d\'érable', 'Chocolat', 'Caramel beurre salé', 'Citron', 'Sucre', 'Fruits frais', 'Chantilly', 'Pistaches'] },
  { id: 'b7', univers: 'brunch', nom: 'Atelier Gaufres Belges', img: '/prod-atelier-gaufres.webp',
    description: 'Gaufres servies chaudes avec un large choix de toppings.',
    compo: [] },
  { id: 'b8', univers: 'brunch', nom: 'Atelier Bagels de New York', img: '/prod-atelier-bagels.webp',
    description: 'Bagels garnis devant les invités.',
    compo: ['Saumon & Cream Cheese', 'Poulet César', 'Pastrami', 'Avocat & Feta', 'Burrata & Pesto'] },
  { id: 'b9', univers: 'brunch', nom: 'Bar à Yaourts & Granola', img: '/prod-bar-yaourts.webp',
    description: 'Création de bols personnalisés.',
    compo: ['Skyr', 'Yaourt grec', 'Granola maison', 'Fruits frais', 'Fruits secs', 'Miel', 'Coulis'] },

  // ── Déjeuner Gourmet ──
  { id: 'd1', univers: 'dejeuner', nom: 'Pasta italienne minute', img: '/prod-atelier-pasta.webp',
    description: 'Préparation minute de pâtes fraîches.',
    compo: ['Trofie au pesto', 'Parmesan', 'Burrata', 'Tomates confites'] },
  { id: 'd2', univers: 'dejeuner', nom: 'Atelier Focaccia & Burrata', img: '/prod-atelier-focaccia.webp',
    description: 'Focaccias artisanales et burrata crémeuse dressées devant les invités.',
    compo: ['Focaccia', 'Burrata crémeuse', 'Bresaola', 'Dinde fumée', 'Tomates anciennes', 'Légumes grillés', 'Pesto', 'Basilic', 'Huile d\'olive'] },
  { id: 'd3', univers: 'dejeuner', nom: 'Découpe de saumon frais', img: '/prod-atelier-saumon.webp',
    description: 'Découpe et dressage de saumon fumé & gravlax.',
    compo: ['Blinis', 'Crème citron-aneth', 'Câpres', 'Oignons rouges'] },
  { id: 'd5', univers: 'dejeuner', nom: 'Atelier Fromages Affinés', img: '/prod-atelier-fromages.webp',
    description: 'Découpe et présentation de fromages AOP, pains artisanaux, fruits frais et fruits secs.',
    compo: [] },
  { id: 'd6', univers: 'dejeuner', nom: 'Atelier Charcuterie Artisanale', img: '/prod-atelier-charcuterie.webp',
    description: 'Découpe minute de charcuteries halal, sans porc.',
    compo: ['Bœuf séché', 'Dinde fumée', 'Poulet fumé', 'Bresaola', 'Viande des Grisons'] },
  { id: 'd7', univers: 'dejeuner', nom: 'Atelier Sushi & Maki', img: '/prod-atelier-sushi.webp',
    description: 'Préparation ou dressage de bouchées japonaises.',
    compo: ['Makis', 'California Rolls', 'Nigiris', 'Gyozas'] },

  // ── Street Food Premium ──
  { id: 's2', univers: 'streetfood', nom: 'Atelier Lobster Roll', img: '/prod-atelier-lobster.webp',
    description: 'Le grand classique new-yorkais, servi dans un pain brioché toasté.',
    compo: ['Homard', 'Crevettes', 'Crabe', 'Saumon fumé'] },
  { id: 's3', univers: 'streetfood', nom: 'Atelier Mini Burgers', img: '/prod-atelier-burgers.webp',
    description: 'Montage minute de mini burgers.',
    compo: ['Cheeseburger', 'Chicken Crispy', 'Bœuf Effiloché BBQ', 'Truffe & Comté', 'Halloumi'] },
  { id: 's5', univers: 'streetfood', nom: 'Atelier Mini Baguettes', img: '/prod-atelier-baguettes.webp',
    description: 'Découpe et dressage de mini baguettes artisanales.',
    compo: ['Jambon de Dinde', 'Poulet César', 'Thon Ciboulette', 'Burrata', 'Pastrami'] },
  { id: 's6', univers: 'streetfood', nom: 'Atelier Tacos Gourmet', img: '/prod-atelier-tacos.webp',
    description: 'Mini tacos dressés à la minute.',
    compo: ['Poulet mariné', 'Bœuf effiloché', 'Crevettes', 'Falafel'] },
  { id: 's7', univers: 'streetfood', nom: 'Atelier Libanais Wrap & Pita', img: '/prod-atelier-libanais.webp',
    description: 'Wraps et pains pita libanais garnis à la minute, produits frais.',
    compo: ['Chawarma poulet', 'Chawarma bœuf', 'Falafel', 'Houmous', 'Taboulé'] },
  { id: 's9', univers: 'streetfood', nom: 'Atelier Loaded Fries', img: '/prod-atelier-loaded-fries.webp',
    description: 'Pommes de terre croustillantes garnies.',
    compo: ['Cheddar & Jambon de Dinde', 'Bœuf Effiloché', 'Chicken Crispy', 'Truffe & Parmesan'] },

  // ── Douceurs ──
  { id: 'do1', univers: 'douceurs', nom: 'Bar à Glaces Artisanales', img: '/prod-bar-glaces.webp',
    description: 'Une animation parfaite pour l\'été — parfums et toppings au choix.',
    compo: ['Vanille', 'Chocolat', 'Pistache', 'Fraise', 'Citron', 'Café', 'Toppings : coulis, caramel beurre salé, fruits rouges, pistaches, cookies émiettés, chantilly'] },
  { id: 'do2', univers: 'douceurs', nom: 'Atelier Desserts', img: '/prod-atelier-desserts.webp',
    description: 'Dressage de pâtisseries individuelles et mignardises.',
    compo: ['Tartelettes', 'Choux', 'Financiers', 'Madeleines', 'Mini desserts Signature'] },
  { id: 'do4', univers: 'douceurs', nom: 'Bar à Fruits Frais', img: '/prod-bar-fruits.webp',
    description: 'Découpe et dressage de fruits de saison.', compo: [] },
  { id: 'do5', univers: 'douceurs', nom: 'Fontaine au Chocolat', img: '/prod-fontaine-chocolat.webp',
    description: 'Fontaine de chocolat chaud et fruits à tremper.', compo: [] },

  // ── Bars & Boissons (100 % sans alcool) ──
  { id: 'ba1', univers: 'bars', nom: 'Bar à Mocktails', img: '/prod-bar-mocktails.webp',
    description: 'Cocktails sans alcool préparés à la minute.', compo: [] },
  { id: 'ba3', univers: 'bars', nom: 'Eaux Infusées', img: '/prod-eaux-infusees.webp',
    description: 'Eaux infusées aux fruits et herbes fraîches.', compo: [] },
]
