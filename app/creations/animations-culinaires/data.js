// Données animations culinaires, module plat (importable serveur + client)

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
    compo: ['Espresso', 'Cappuccino', 'Latte', 'Flat White', 'Chocolat chaud', 'Thés premium'],
    article: `
      <h2>Une animation barista pour vos petits-déjeuners et événements d'entreprise à Paris</h2>
      <p>Un vrai barista qui prépare espresso, cappuccino, latte et flat white à la demande, c'est le détail qui réveille une matinée de séminaire ou un petit-déjeuner d'accueil. Chacun commande sa boisson, préparée devant lui, avec l'attention d'un comptoir de café de spécialité. L'Écrin Traiteur installe ce bar à café dans vos bureaux ou votre lieu d'événement, à Paris et en Île-de-France.</p>
      <h2>Cafés de spécialité et boissons chaudes</h2>
      <p>Espresso, cappuccino, latte, flat white, chocolat chaud et une sélection de thés, servis en continu pendant toute la prestation. On prévoit des laits végétaux pour s'adapter à chacun, et on cale le rythme sur le nombre d'invités.</p>
      <h2>Installer un bar à café à Paris et en Île-de-France</h2>
      <p>Prestation sur devis : date, lieu, effectif, durée et accès électrique. On installe la machine et le comptoir, on démonte à la fin, vous n'avez rien à gérer. Idéal pour un petit-déjeuner d'accueil, un salon ou une journée collaborateurs. Réponse sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },
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
    compo: ['Sirop d\'érable', 'Chocolat', 'Caramel beurre salé', 'Citron', 'Sucre', 'Fruits frais', 'Chantilly', 'Pistaches'],
    article: `
      <h2>Un atelier crêpes et pancakes pour vos pauses et événements d'entreprise à Paris</h2>
      <p>Rien ne rassemble une équipe comme l'odeur d'une crêpe qui cuit. Notre crêpier prépare crêpes et pancakes à la demande, garnis sous vos yeux, du petit-déjeuner d'accueil au goûter de l'après-midi. Un format simple qui met tout le monde de bonne humeur. L'Écrin Traiteur installe cette animation dans vos locaux ou votre lieu d'événement, à Paris et en Île-de-France.</p>
      <h2>Sucré, chaud, servi minute</h2>
      <p>Chaque crêpe est cuite et garnie au moment où l'invité la commande, jamais empilée à l'avance. Large choix de garnitures : caramel beurre salé, chocolat, sirop d'érable, citron, fruits frais, chantilly et pistaches. On prévoit aussi des versions plus légères pour équilibrer, et on ajuste le rythme au nombre d'invités.</p>
      <h2>Réserver votre atelier crêpes à Paris et en Île-de-France</h2>
      <p>Prestation sur devis selon la date, le lieu, l'effectif et la durée souhaitée. Installation et démontage compris, vous n'avez rien à gérer. Parfait pour la Chandeleur, une matinée d'intégration ou une semaine QVT. Devis détaillé sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },
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
    compo: [],
    article: `
      <h2>Un atelier fromages affinés pour vos réceptions d'entreprise à Paris</h2>
      <p>Un fromager qui découpe et présente devant vos invités, c'est autre chose qu'un plateau posé sur une table. Comté, chèvres, pâtes persillées et croûtes fleuries sont taillés à la demande, accompagnés de pains artisanaux, de fruits frais et de fruits secs. Une animation qui installe tout de suite une ambiance conviviale, à Paris et en Île-de-France.</p>
      <h2>Fromages AOP, pains et accompagnements</h2>
      <p>Sélection de fromages AOP à maturité, coupés minute et expliqués à ceux qui veulent en savoir plus. On dresse à côté pains artisanaux, miel, fruits de saison et fruits secs pour composer chaque bouchée. Les proportions s'ajustent à votre effectif et à la durée de la prestation.</p>
      <h2>Organiser votre atelier fromages à Paris et en Île-de-France</h2>
      <p>Prestation sur devis : date, lieu, nombre d'invités et durée. On installe, on présente, on démonte. Idéal pour un cocktail dînatoire, une soirée partenaires ou un afterwork d'équipe. Réponse sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },
  { id: 'd6', univers: 'dejeuner', nom: 'Atelier Charcuterie Artisanale', img: '/prod-atelier-charcuterie.webp',
    description: 'Découpe minute de charcuteries halal, sans porc.',
    compo: ['Bœuf séché', 'Dinde fumée', 'Poulet fumé', 'Bresaola', 'Viande des Grisons'],
    article: `
      <h2>Un atelier charcuterie halal, sans porc, pour vos événements d'entreprise à Paris</h2>
      <p>Toutes nos charcuteries sont halal et sans porc, découpées minute devant vos invités : bœuf séché, dinde fumée, poulet fumé, bresaola et viande des Grisons. Une façon simple de proposer une planche vivante et généreuse sans exclure personne autour de la table. L'Écrin Traiteur installe cet atelier à Paris et en Île-de-France.</p>
      <h2>Découpe minute, planches généreuses</h2>
      <p>Notre équipe tranche à la demande et dresse au fil du service, avec pains artisanaux, condiments et quelques légumes marinés pour accompagner. Le rythme et les quantités s'adaptent au nombre d'invités et à la durée de votre événement.</p>
      <h2>Réserver votre atelier charcuterie à Paris et en Île-de-France</h2>
      <p>Prestation sur devis selon date, lieu, effectif et accès sur place. Installation et démontage inclus. Parfait pour un cocktail, une inauguration ou une réception qui mélange les profils et les régimes. Devis sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },
  { id: 'd7', univers: 'dejeuner', nom: 'Atelier Sushi & Maki', img: '/prod-atelier-sushi.webp',
    description: 'Préparation ou dressage de bouchées japonaises.',
    compo: ['Makis', 'California Rolls', 'Nigiris', 'Gyozas'],
    article: `
      <h2>Un atelier sushi et maki pour vos événements d'entreprise à Paris</h2>
      <p>Faire dresser makis, california rolls et nigiris devant vos invités change complètement une réception. Le sushi-man roule, tranche et dresse au fil du service : chacun goûte à sa main, au bon moment, et personne ne se retrouve devant un plateau qui a attendu deux heures. L'Écrin Traiteur installe cet atelier dans vos bureaux ou votre lieu d'événement, à Paris et en Île-de-France.</p>
      <h2>Ce que l'on prépare devant vos invités</h2>
      <p>Makis, california rolls, nigiris et gyozas, préparés en continu pendant toute la prestation. On adapte les proportions et le rythme au nombre d'invités, avec des options sans poisson cru pour celles et ceux qui préfèrent. Sauce soja, gingembre et wasabi dressés à côté, comme au comptoir.</p>
      <h2>Organiser votre atelier sushi à Paris et en Île-de-France</h2>
      <p>Cet atelier se prépare sur devis : date, lieu, effectif, durée et accès sur place. On installe et on démonte, vous n'avez rien à gérer. Idéal pour un cocktail de fin d'année, un lancement produit ou un afterwork d'équipe. Réponse sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },

  // ── Street Food Premium ──
  { id: 's2', univers: 'streetfood', nom: 'Atelier Lobster Roll', img: '/prod-atelier-lobster.webp',
    description: 'Le grand classique new-yorkais, servi dans un pain brioché toasté.',
    compo: ['Homard', 'Crevettes', 'Crabe', 'Saumon fumé'],
    article: `
      <h2>Un atelier lobster roll pour vos événements d'entreprise à Paris</h2>
      <p>Le lobster roll, ce grand classique new-yorkais, se garnit et se toaste devant vos invités : homard, pain brioché beurré, une pointe de citron et d'herbes. Servi minute, c'est le genre de bouchée qui fait parler un cocktail et qu'on n'attend pas d'un traiteur d'entreprise. L'Écrin Traiteur installe cet atelier à Paris et en Île-de-France.</p>
      <h2>Servi chaud, monté à la demande</h2>
      <p>Chaque roll est garni et toasté au moment du service, jamais préparé à l'avance. Au-delà du homard, on peut décliner l'atelier en crevettes, crabe ou saumon fumé. On ajuste les quantités au nombre d'invités et on dresse un format net à manger debout.</p>
      <h2>Organiser votre atelier lobster roll à Paris et en Île-de-France</h2>
      <p>Prestation sur devis : date, lieu, effectif, durée et accès. Installation et démontage compris. Idéal pour un lancement, une soirée partenaires ou un cocktail de fin d'année. Devis sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },
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
    description: 'Une animation parfaite pour l\'été · parfums et toppings au choix.',
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
