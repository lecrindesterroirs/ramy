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
  { id: 'b2', univers: 'brunch', nom: 'Location de Machine Expresso Professionnelle', img: '/prod-machine-expresso.png',
    description: 'Une machine à expresso professionnelle installée pour un café de qualité en libre-service.',
    compo: ['Espresso', 'Lungo', 'Ristretto', 'Décaféiné', 'Sélection de capsules premium', 'Gobelets, sucres & touillettes'],
    article: `
      <h2>Une machine à expresso professionnelle pour vos bureaux et événements d'entreprise à Paris</h2>
      <p>Un vrai café, tout de suite et sans effort : nous installons une machine à expresso professionnelle dans vos locaux ou sur votre lieu d'événement. Chacun se sert quand il veut, un espresso serré avant une réunion, un allongé pendant la pause. L'Écrin Traiteur met en place cette machine à Paris et en Île-de-France, avec les capsules, les gobelets et tout le nécessaire.</p>
      <h2>Un café de qualité, en libre-service toute la journée</h2>
      <p>Espresso, lungo, ristretto ou décaféiné, à partir d'une sélection de capsules premium. La machine reste à disposition pendant toute la prestation : on fournit gobelets, sucres et touillettes, on réassort si besoin, et on reprend le matériel à la fin. Idéal pour un petit-déjeuner d'accueil, un séminaire ou une journée collaborateurs.</p>
      <h2>Louer une machine à expresso à Paris et en Île-de-France</h2>
      <p>Prestation sur devis : date, lieu, durée, nombre de personnes et accès électrique. Livraison, installation et reprise de la machine compris, vous n'avez rien à gérer. Une option simple pour garder vos équipes et vos invités au café toute la journée. Réponse sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },
  { id: 'b3', univers: 'brunch', nom: 'Bar à Jus Pressés', img: '/prod-bar-jus.webp',
    description: 'Jus de fruits et légumes préparés devant les invités.',
    compo: ['Orange', 'Pamplemousse', 'Citronnade fraîche', 'Pomme', 'Carotte, Orange & Gingembre', 'Betterave, Pomme & Citron', 'Concombre, Menthe & Citron Vert'],
    article: `
      <h2>Un bar à jus pressés pour vos petits-déjeuners et événements d'entreprise à Paris</h2>
      <p>Des jus pressés devant vos invités, ça réveille une matinée de séminaire ou un petit-déjeuner d'accueil. Orange, pamplemousse, citronnade, mais aussi des mélanges plus toniques comme carotte-orange-gingembre ou betterave-pomme-citron, extraits à la minute. L'Écrin Traiteur installe ce bar à jus à Paris et en Île-de-France.</p>
      <h2>Fruits et légumes pressés à la demande</h2>
      <p>On presse au fil du service, jamais à l'avance : orange, pamplemousse, pomme, citronnade fraîche, et des associations fruits-légumes comme concombre-menthe-citron vert ou carotte-orange-gingembre. Chacun repart avec un verre net et vitaminé.</p>
      <h2>Installer un bar à jus à Paris et en Île-de-France</h2>
      <p>Prestation sur devis : date, lieu, effectif, durée et accès. Installation et démontage compris. Idéal pour un petit-déjeuner d'accueil, une pause QVT ou un salon. Réponse sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },
  { id: 'b4', univers: 'brunch', nom: 'Brunch Gourmand', img: '/prod-brunch-gourmand.webp',
    description: 'Une animation complète de brunch servie en continu.',
    compo: ['Viennoiseries artisanales', 'Pain & brioches', 'Beurre & confitures', 'Fruits frais', 'Yaourts & granola', 'Jus frais', 'Café & thé'],
    article: `
      <h2>Un brunch d'entreprise servi en continu à Paris</h2>
      <p>Le brunch met tout le monde d'accord : viennoiseries, pain et brioches, œufs, fruits frais, yaourts et granola, jus pressés, café. Servi en continu, il laisse à chacun le temps d'arriver, de se servir et d'échanger. L'Écrin Traiteur installe ce brunch dans vos locaux, à Paris et en Île-de-France.</p>
      <h2>Sucré, salé, chaud et frais au même endroit</h2>
      <p>Viennoiseries artisanales, pains et brioches, beurre et confitures, fruits frais, yaourts et granola, jus frais, café et thé. On dresse un buffet généreux et on réassort au fil de la matinée, en calant les quantités sur votre effectif.</p>
      <h2>Organiser votre brunch à Paris et en Île-de-France</h2>
      <p>Prestation sur devis : date, lieu, nombre d'invités et créneau. Dressage soigné, installation et reprise du matériel compris. Idéal pour une matinée d'intégration, un lancement ou un week-end séminaire. Réponse sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },
  { id: 'b5', univers: 'brunch', nom: 'Œufs brouillés minute', img: '/prod-atelier-oeufs.webp',
    description: 'Œufs préparés minute selon les envies.',
    compo: ['Œufs brouillés', 'Œufs au plat', 'Omelettes', 'Œufs aux fines herbes', 'Dinde fumée (option)', 'Saumon fumé (option)'],
    article: `
      <h2>Un atelier œufs préparés minute pour vos petits-déjeuners d'entreprise à Paris</h2>
      <p>Des œufs brouillés, au plat ou en omelette, préparés devant vos invités : c'est le chaud qui manque à la plupart des petits-déjeuners livrés. Chacun choisit sa cuisson et sa garniture, servie à l'assiette au bon moment. L'Écrin Traiteur installe cet atelier à Paris et en Île-de-France.</p>
      <h2>À la cuisson et à la garniture de chacun</h2>
      <p>Œufs brouillés, au plat, en omelette ou aux fines herbes, avec des options dinde fumée ou saumon fumé. On prépare au rythme des arrivées, pour que personne ne mange froid.</p>
      <h2>Réserver votre atelier œufs à Paris et en Île-de-France</h2>
      <p>Prestation sur devis : date, lieu, effectif, durée et accès (électricité, espace). Installation et démontage inclus. Idéal pour un petit-déjeuner d'accueil ou une matinée de séminaire. Réponse sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },
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
    compo: [],
    article: `
      <h2>Un atelier gaufres belges pour vos pauses et événements d'entreprise à Paris</h2>
      <p>Des gaufres servies chaudes, croustillantes dehors et moelleuses dedans, garnies devant vos invités : voilà de quoi transformer une pause de l'après-midi. Sucre, chocolat, caramel, fruits frais, chantilly, chacun compose la sienne. L'Écrin Traiteur installe cet atelier à Paris et en Île-de-France.</p>
      <h2>Servies chaudes, garnies à la demande</h2>
      <p>Chaque gaufre est cuite minute et garnie au choix : sucre glace, chocolat, caramel beurre salé, fruits frais, chantilly, pâte à tartiner. On cale le rythme sur le nombre d'invités pour un service fluide.</p>
      <h2>Organiser votre atelier gaufres à Paris et en Île-de-France</h2>
      <p>Prestation sur devis : date, lieu, effectif, durée et accès. Installation et démontage compris. Idéal pour un goûter d'équipe, une pause QVT ou un événement familial d'entreprise. Réponse sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },
  { id: 'b8', univers: 'brunch', nom: 'Atelier Bagels de New York', img: '/prod-atelier-bagels.webp',
    description: 'Bagels garnis devant les invités.',
    compo: ['Saumon & Cream Cheese', 'Poulet César', 'Pastrami', 'Avocat & Feta', 'Burrata & Pesto'],
    article: `
      <h2>Un atelier bagels new-yorkais pour vos déjeuners et cocktails d'entreprise à Paris</h2>
      <p>Des bagels garnis devant vos invités, c'est un déjeuner qui a du caractère sans compliquer la logistique. Saumon et cream cheese, poulet César, pastrami, avocat-feta, burrata-pesto : chacun choisit, on assemble minute. L'Écrin Traiteur installe cet atelier à Paris et en Île-de-France.</p>
      <h2>Garnis à la demande</h2>
      <p>On garnit au fil du service, jamais à l'avance, avec des combinaisons franches : saumon-cream cheese, poulet César, pastrami, avocat-feta, burrata-pesto. Des options sans viande sont disponibles, et les quantités s'ajustent à votre effectif.</p>
      <h2>Réserver votre atelier bagels à Paris et en Île-de-France</h2>
      <p>Prestation sur devis : date, lieu, effectif, durée et accès. Installation et démontage compris. Idéal pour un déjeuner d'équipe, un afterwork ou un cocktail. Réponse sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },
  { id: 'b9', univers: 'brunch', nom: 'Bar à Yaourts & Granola', img: '/prod-bar-yaourts.webp',
    description: 'Création de bols personnalisés.',
    compo: ['Skyr', 'Yaourt grec', 'Granola maison', 'Fruits frais', 'Fruits secs', 'Miel', 'Coulis'],
    article: `
      <h2>Un bar à yaourts et granola pour vos petits-déjeuners d'entreprise à Paris</h2>
      <p>Un bar où chacun compose son bol : skyr ou yaourt grec, granola maison, fruits frais, fruits secs, miel, coulis. Léger, frais et personnalisable, il complète parfaitement un petit-déjeuner ou une pause matinale. L'Écrin Traiteur l'installe à Paris et en Île-de-France.</p>
      <h2>Chacun compose son bol</h2>
      <p>Base de skyr ou yaourt grec, granola maison, fruits frais de saison, fruits secs, miel et coulis. Une option qui plaît autant à ceux qui veulent léger qu'à ceux qui veulent gourmand.</p>
      <h2>Installer un bar à yaourts à Paris et en Île-de-France</h2>
      <p>Prestation sur devis : date, lieu, effectif et durée. Installation et reprise du matériel compris. Idéal pour un petit-déjeuner d'accueil ou une semaine QVT. Réponse sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },

  // ── Déjeuner Gourmet ──
  { id: 'd1', univers: 'dejeuner', nom: 'Pasta italienne minute', img: '/prod-atelier-pasta.webp',
    description: 'Préparation minute de pâtes fraîches.',
    compo: ['Trofie au pesto', 'Parmesan', 'Burrata', 'Tomates confites'],
    article: `
      <h2>Un atelier pâtes fraîches minute pour vos déjeuners d'entreprise à Paris</h2>
      <p>Des pâtes fraîches sautées et dressées devant vos invités, c'est un déjeuner chaud et généreux qui change du plateau repas. Trofie au pesto, parmesan, burrata, tomates confites : préparé minute, servi à l'assiette. L'Écrin Traiteur installe cet atelier à Paris et en Île-de-France.</p>
      <h2>Préparées et dressées à la demande</h2>
      <p>On saute et on dresse au fil du service, jamais à l'avance : trofie au pesto, parmesan, burrata crémeuse, tomates confites. Le rythme s'adapte au nombre d'invités pour un service continu.</p>
      <h2>Réserver votre atelier pâtes à Paris et en Île-de-France</h2>
      <p>Prestation sur devis : date, lieu, effectif, durée et accès (électricité, espace). Installation et démontage inclus. Idéal pour un déjeuner d'équipe ou une journée séminaire. Réponse sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },
  { id: 'd2', univers: 'dejeuner', nom: 'Atelier Focaccia & Burrata', img: '/prod-atelier-focaccia.webp',
    description: 'Focaccias artisanales et burrata crémeuse dressées devant les invités.',
    compo: ['Focaccia', 'Burrata crémeuse', 'Bresaola', 'Dinde fumée', 'Tomates anciennes', 'Légumes grillés', 'Pesto', 'Basilic', 'Huile d\'olive'],
    article: `
      <h2>Un atelier focaccia et burrata pour vos réceptions d'entreprise à Paris</h2>
      <p>Focaccia artisanale tiède, burrata crémeuse, tomates anciennes, légumes grillés et un filet d'huile d'olive, dressés devant vos invités : un atelier italien simple et généreux qui fait toujours son effet. L'Écrin Traiteur l'installe à Paris et en Île-de-France.</p>
      <h2>Dressée à la demande</h2>
      <p>On tranche la focaccia, on dresse la burrata et les accompagnements au fil du service : bresaola, dinde fumée, tomates anciennes, légumes grillés, pesto, basilic. Options sans viande, quantités calées sur votre effectif.</p>
      <h2>Organiser votre atelier focaccia à Paris et en Île-de-France</h2>
      <p>Prestation sur devis : date, lieu, effectif et durée. Installation et démontage compris. Idéal pour un cocktail déjeunatoire, une soirée partenaires ou un afterwork. Réponse sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },
  { id: 'd3', univers: 'dejeuner', nom: 'Découpe de saumon frais', img: '/prod-atelier-saumon.webp',
    description: 'Découpe et dressage de saumon fumé & gravlax.',
    compo: ['Blinis', 'Crème citron-aneth', 'Câpres', 'Oignons rouges'],
    article: `
      <h2>Un atelier découpe de saumon pour vos cocktails d'entreprise à Paris</h2>
      <p>Saumon fumé et gravlax tranchés et dressés devant vos invités, sur blinis tièdes avec crème citron-aneth, câpres et oignons rouges : une bouchée nette et élégante qui pose le niveau d'une réception. L'Écrin Traiteur installe cet atelier à Paris et en Île-de-France.</p>
      <h2>Tranché et dressé à la demande</h2>
      <p>On tranche minute et on monte les bouchées au fil du service : blinis, crème citron-aneth, câpres, oignons rouges. Le rythme et les quantités s'ajustent au nombre d'invités.</p>
      <h2>Réserver votre atelier saumon à Paris et en Île-de-France</h2>
      <p>Prestation sur devis : date, lieu, effectif et durée. Installation et démontage compris. Idéal pour un cocktail, une inauguration ou une soirée partenaires. Réponse sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },
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
    compo: ['Cheeseburger', 'Chicken Crispy', 'Bœuf Effiloché BBQ', 'Truffe & Comté', 'Halloumi'],
    article: `
      <h2>Un atelier mini burgers pour vos événements d'entreprise à Paris</h2>
      <p>Des mini burgers montés minute devant vos invités : cheeseburger, chicken crispy, bœuf effiloché BBQ, truffe-comté, halloumi. Un format street food net à manger debout, qui plaît à tous les âges. L'Écrin Traiteur installe cet atelier à Paris et en Île-de-France.</p>
      <h2>Montés à la demande</h2>
      <p>On assemble et on sert au fil du service, jamais à l'avance. Recettes variées, dont une option végétarienne au halloumi, pour que chacun trouve la sienne. Quantités ajustées à votre effectif.</p>
      <h2>Réserver votre atelier mini burgers à Paris et en Île-de-France</h2>
      <p>Prestation sur devis : date, lieu, effectif, durée et accès. Installation et démontage compris. Idéal pour un afterwork, un lancement ou une soirée d'équipe. Réponse sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },
  { id: 's5', univers: 'streetfood', nom: 'Atelier Mini Baguettes', img: '/prod-atelier-baguettes.webp',
    description: 'Découpe et dressage de mini baguettes artisanales.',
    compo: ['Jambon de Dinde', 'Poulet César', 'Thon Ciboulette', 'Burrata', 'Pastrami'],
    article: `
      <h2>Un atelier mini baguettes pour vos déjeuners et pauses d'entreprise à Paris</h2>
      <p>Des mini baguettes artisanales garnies et dressées devant vos invités : jambon de dinde, poulet César, thon ciboulette, burrata, pastrami. Un déjeuner sur le pouce net et rassasiant, parfait pour une réunion qui déborde. L'Écrin Traiteur l'installe à Paris et en Île-de-France.</p>
      <h2>Garnies à la demande</h2>
      <p>On garnit au fil du service des mini baguettes croustillantes, avec des recettes franches et une option sans viande. Le rythme et les quantités s'adaptent à votre effectif.</p>
      <h2>Réserver votre atelier mini baguettes à Paris et en Île-de-France</h2>
      <p>Prestation sur devis : date, lieu, effectif et durée. Installation et démontage compris. Idéal pour un déjeuner de réunion, une pause ou un cocktail. Réponse sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },
  { id: 's6', univers: 'streetfood', nom: 'Atelier Tacos Gourmet', img: '/prod-atelier-tacos.webp',
    description: 'Mini tacos dressés à la minute.',
    compo: ['Poulet mariné', 'Bœuf effiloché', 'Crevettes', 'Falafel'],
    article: `
      <h2>Un atelier tacos pour vos événements d'entreprise à Paris</h2>
      <p>Des mini tacos dressés à la minute devant vos invités : poulet mariné, bœuf effiloché, crevettes, falafel. Un format street food généreux et convivial qui met de l'ambiance sur un afterwork. L'Écrin Traiteur installe cet atelier à Paris et en Île-de-France.</p>
      <h2>Garnis à la demande</h2>
      <p>On garnit au fil du service, avec une option végétarienne au falafel et des sauces dressées à côté. Quantités et rythme calés sur votre effectif.</p>
      <h2>Réserver votre atelier tacos à Paris et en Île-de-France</h2>
      <p>Prestation sur devis : date, lieu, effectif, durée et accès. Installation et démontage compris. Idéal pour un afterwork, un lancement ou une soirée d'équipe. Réponse sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },
  { id: 's7', univers: 'streetfood', nom: 'Atelier Libanais Wrap & Pita', img: '/prod-atelier-libanais.webp',
    description: 'Wraps et pains pita libanais garnis à la minute.',
    compo: ['Chawarma poulet', 'Chawarma bœuf', 'Falafel', 'Houmous', 'Taboulé'],
    article: `
      <h2>Un atelier libanais wrap et pita pour vos déjeuners d'entreprise à Paris</h2>
      <p>Wraps et pains pita garnis à la minute devant vos invités : chawarma poulet, chawarma bœuf, falafel, houmous, taboulé. Un déjeuner généreux, parfumé et facile à manger debout, avec de vraies options végétariennes. L'Écrin Traiteur installe cet atelier à Paris et en Île-de-France.</p>
      <h2>Garnis à la demande</h2>
      <p>On garnit pitas et wraps au fil du service, avec houmous, taboulé et légumes pour accompagner. Options végétariennes au falafel, quantités ajustées à votre effectif.</p>
      <h2>Réserver votre atelier libanais à Paris et en Île-de-France</h2>
      <p>Prestation sur devis : date, lieu, effectif et durée. Installation et démontage compris. Idéal pour un déjeuner d'équipe, un afterwork ou un cocktail. Réponse sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },
  { id: 's9', univers: 'streetfood', nom: 'Atelier Loaded Fries', img: '/prod-atelier-loaded-fries.webp',
    description: 'Pommes de terre croustillantes garnies.',
    compo: ['Cheddar & Jambon de Dinde', 'Bœuf Effiloché', 'Chicken Crispy', 'Truffe & Parmesan'],
    article: `
      <h2>Un atelier loaded fries pour vos afterworks et événements d'entreprise à Paris</h2>
      <p>Des frites croustillantes garnies devant vos invités : cheddar et jambon de dinde, bœuf effiloché, chicken crispy, truffe-parmesan. Un format street food généreux et régressif qui met tout de suite l'ambiance. L'Écrin Traiteur installe cet atelier à Paris et en Île-de-France.</p>
      <h2>Garnies à la demande</h2>
      <p>On garnit au fil du service, jamais à l'avance, avec des recettes franches et une version truffe-parmesan plus fine. Quantités et rythme calés sur votre effectif.</p>
      <h2>Réserver votre atelier loaded fries à Paris et en Île-de-France</h2>
      <p>Prestation sur devis : date, lieu, effectif, durée et accès. Installation et démontage compris. Idéal pour un afterwork, un lancement ou une soirée d'équipe. Réponse sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },

  // ── Douceurs ──
  { id: 'do1', univers: 'douceurs', nom: 'Bar à Glaces Artisanales', img: '/prod-bar-glaces.webp',
    description: 'Une animation parfaite pour l\'été · parfums et toppings au choix.',
    compo: ['Vanille', 'Chocolat', 'Pistache', 'Fraise', 'Citron', 'Café', 'Toppings : coulis, caramel beurre salé, fruits rouges, pistaches, cookies émiettés, chantilly'],
    article: `
      <h2>Un bar à glaces pour vos événements d'été en entreprise à Paris</h2>
      <p>Un bar à glaces installé devant vos invités, c'est la bonne surprise d'un événement d'été : vanille, chocolat, pistache, fraise, citron, café, à composer avec coulis, caramel beurre salé, fruits rouges et cookies émiettés. L'Écrin Traiteur l'installe à Paris et en Île-de-France.</p>
      <h2>Parfums et toppings au choix</h2>
      <p>Chacun compose sa coupe : glaces au choix, coulis, caramel beurre salé, fruits rouges, pistaches, cookies émiettés, chantilly. On sert au fil de l'après-midi, en calant les quantités sur votre effectif.</p>
      <h2>Installer un bar à glaces à Paris et en Île-de-France</h2>
      <p>Prestation sur devis : date, lieu, effectif et durée. Installation et reprise du matériel compris. Idéal pour un pot d'été, une fête des collaborateurs ou une journée portes ouvertes. Réponse sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },
  { id: 'do2', univers: 'douceurs', nom: 'Atelier Desserts', img: '/prod-atelier-desserts.webp',
    description: 'Dressage de pâtisseries individuelles et mignardises.',
    compo: ['Tartelettes', 'Choux', 'Financiers', 'Madeleines', 'Mini desserts Signature'],
    article: `
      <h2>Un atelier desserts et mignardises pour vos réceptions d'entreprise à Paris</h2>
      <p>Pâtisseries individuelles et mignardises dressées devant vos invités : tartelettes, choux, financiers, madeleines, mini desserts. De quoi finir un déjeuner ou animer une pause avec une touche gourmande et soignée. L'Écrin Traiteur l'installe à Paris et en Île-de-France.</p>
      <h2>Dressés à la demande</h2>
      <p>On dresse les pièces au fil du service : tartelettes, choux, financiers, madeleines, mini desserts. Une sélection variée pour plaire au plus grand nombre, en quantités calées sur votre effectif.</p>
      <h2>Organiser votre atelier desserts à Paris et en Île-de-France</h2>
      <p>Prestation sur devis : date, lieu, effectif et durée. Installation et démontage compris. Idéal pour un cocktail, une pause gourmande ou une soirée partenaires. Réponse sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },
  { id: 'do4', univers: 'douceurs', nom: 'Bar à Fruits Frais', img: '/prod-bar-fruits.webp',
    description: 'Découpe et dressage de fruits de saison.', compo: [],
    article: `
      <h2>Un bar à fruits frais pour vos pauses et événements d'entreprise à Paris</h2>
      <p>Des fruits de saison découpés et dressés devant vos invités, c'est la pause simple et bonne qui fait du bien en milieu de journée. Frais, coloré et léger, ce bar complète un petit-déjeuner comme un après-midi de séminaire. L'Écrin Traiteur l'installe à Paris et en Île-de-France.</p>
      <h2>Découpés et dressés à la demande</h2>
      <p>On découpe minute des fruits de saison, dressés en coupes ou en brochettes selon l'occasion. Une option fraîche et légère, en quantités ajustées à votre effectif.</p>
      <h2>Installer un bar à fruits à Paris et en Île-de-France</h2>
      <p>Prestation sur devis : date, lieu, effectif et durée. Installation et reprise du matériel compris. Idéal pour une pause QVT, un petit-déjeuner ou une journée collaborateurs. Réponse sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },
  { id: 'do5', univers: 'douceurs', nom: 'Fontaine au Chocolat', img: '/prod-fontaine-chocolat.webp',
    description: 'Fontaine de chocolat chaud et fruits à tremper.', compo: [],
    article: `
      <h2>Une fontaine au chocolat pour vos événements d'entreprise à Paris</h2>
      <p>Une fontaine de chocolat chaud avec fruits et douceurs à tremper, c'est l'animation qui rassemble petits et grands autour d'un événement familial d'entreprise. Conviviale et généreuse, elle marque les esprits sans effort. L'Écrin Traiteur l'installe à Paris et en Île-de-France.</p>
      <h2>À tremper, à volonté</h2>
      <p>Chocolat chaud qui coule en continu, avec fruits frais, guimauves et petites douceurs à tremper. On réassort au fil du service et on cale les quantités sur votre effectif.</p>
      <h2>Installer une fontaine au chocolat à Paris et en Île-de-France</h2>
      <p>Prestation sur devis : date, lieu, effectif, durée et accès. Installation et démontage compris. Idéal pour un arbre de Noël, une fête des collaborateurs ou une journée portes ouvertes. Réponse sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },

  // ── Bars & Boissons (100 % sans alcool) ──
  { id: 'ba1', univers: 'bars', nom: 'Bar à Mocktails', img: '/prod-bar-mocktails.webp',
    description: 'Cocktails sans alcool préparés à la minute.', compo: [],
    article: `
      <h2>Un bar à mocktails sans alcool pour vos événements d'entreprise à Paris</h2>
      <p>Des cocktails sans alcool préparés à la minute devant vos invités, c'est la façon élégante d'animer un afterwork ou une soirée sans exclure personne. Frais, colorés et travaillés, nos mocktails donnent le ton d'un moment convivial. L'Écrin Traiteur installe ce bar à Paris et en Île-de-France.</p>
      <h2>Préparés à la demande</h2>
      <p>Un barman prépare et dresse chaque mocktail au fil du service : agrumes, fruits frais, herbes et sirops maison. Une carte 100 % sans alcool, en quantités calées sur votre effectif.</p>
      <h2>Installer un bar à mocktails à Paris et en Île-de-France</h2>
      <p>Prestation sur devis : date, lieu, effectif, durée et accès. Installation et démontage compris. Idéal pour un afterwork, un lancement ou une soirée d'équipe. Réponse sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },
  { id: 'ba3', univers: 'bars', nom: 'Eaux Infusées', img: '/prod-eaux-infusees.webp',
    description: 'Eaux infusées aux fruits et herbes fraîches.', compo: [],
    article: `
      <h2>Un bar à eaux infusées pour vos réunions et événements d'entreprise à Paris</h2>
      <p>Des eaux infusées aux fruits et herbes fraîches, dressées devant vos invités : concombre-menthe, agrumes, fruits rouges-basilic. Une alternative simple et rafraîchissante à la bouteille en plastique, parfaite pour une réunion ou un séminaire. L'Écrin Traiteur l'installe à Paris et en Île-de-France.</p>
      <h2>Fruits et herbes fraîches</h2>
      <p>On prépare des carafes d'eaux infusées renouvelées au fil de la journée : combinaisons de fruits de saison, herbes fraîches et agrumes. Léger, sans sucre ajouté, et calé sur votre effectif.</p>
      <h2>Installer un bar à eaux infusées à Paris et en Île-de-France</h2>
      <p>Prestation sur devis : date, lieu, effectif et durée. Installation et reprise du matériel compris. Idéal pour un séminaire, une journée de formation ou un événement estival. Réponse sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },

  // ── Animations Sucrées (Pop Corn, Barbe à Papa) ──
  { id: 'do6', univers: 'douceurs', nom: 'Atelier Pop Corn Sucré', img: '/prod-popcorn.png',
    description: 'Pop corn frais préparé minute avec garnitures sucrées.', compo: ['Pop corn nature', 'Caramel', 'Chocolat', 'Cacahuète', 'Sucre glace'],
    article: `
      <h2>Un atelier pop corn sucré pour vos pauses et événements d'entreprise à Paris</h2>
      <p>Du pop corn frais préparé devant vos invités, garni de caramel, chocolat ou sucre glace : c'est l'animation gourmande et ludique qui fédère une équipe autour d'une pause. Gourmand sans être lourd, c'est le complément parfait d'un petit-déjeuner ou d'un après-midi de séminaire. L'Écrin Traiteur installe cet atelier à Paris et en Île-de-France.</p>
      <h2>Frais et savoureux</h2>
      <p>Pop corn éclaté à la demande, garni à chaud : caramel beurre salé, chocolat, cacahuète grillée ou sucre glace. On prépare en continu et on cale les quantités sur votre effectif.</p>
      <h2>Installer un atelier pop corn à Paris et en Île-de-France</h2>
      <p>Prestation sur devis : date, lieu, effectif et durée. Installation et démontage compris. Idéal pour un petit-déjeuner convivial, une pause de l'après-midi ou un événement ludique. Réponse sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },
  { id: 'do7', univers: 'douceurs', nom: 'Atelier Barbe à Papa', img: '/prod-barbe-papa.png',
    description: 'Barbe à papa fraîche préparée devant les invités.', compo: ['Sucre rosé', 'Sucre bleu', 'Sucre blanc', 'Sucre jaune'],
    article: `
      <h2>Un atelier barbe à papa pour vos événements d'entreprise à Paris</h2>
      <p>Une machine à barbe à papa avec sucres colorés, c'est l'animation gourmande et festive qui ramène l'enfance dans l'événement. Préparée devant vos invités, la barbe à papa crée une ambiance joyeuse et délicate. Parfaite pour un arbre de Noël, une fête des collaborateurs ou un événement familial d'entreprise. L'Écrin Traiteur l'installe à Paris et en Île-de-France.</p>
      <h2>Préparée minute, sucres assortis</h2>
      <p>Machine professionnelle qui prépare la barbe à papa devant vos invités, avec sucres colorés au choix : rose, bleu, blanc, jaune. On prépare en continu et on cale les portions sur votre effectif.</p>
      <h2>Installer un atelier barbe à papa à Paris et en Île-de-France</h2>
      <p>Prestation sur devis : date, lieu, effectif et durée. Installation et démontage compris. Idéal pour une fête des collaborateurs, un arbre de Noël ou un événement familial d'entreprise. Réponse sous <strong>24h</strong>, facturation entreprise avec TVA.</p>
    ` },
]
