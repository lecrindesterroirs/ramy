// Données plateaux-aperitifs, module plat (importable depuis le serveur comme depuis le client).
// Extraites de page.js : un `export const` dans un fichier 'use client' revient
// sous forme de proxy dans une route API, pas sous forme de tableau.

export const FILTRES = [
  { key: 'tous',      label: 'Tous' },
  { key: 'sandwichs', label: 'Sandwichs' },
  { key: 'gourmands', label: 'Gourmands' },
  { key: 'fraicheur', label: 'Fraîcheur' },
  { key: 'signature', label: 'Signature' },
  { key: 'sucre',     label: 'Sucré' },
]

export const CATEGORIE_COLORS = {
  sandwichs: '#C08A3E',
  gourmands: '#8A3A3A',
  fraicheur: '#5A7247',
  signature: '#B07D10',
}

/* Plateaux : description affichée sur la carte, recettes stockées pour
   la fiche produit. Photos placeholder. */
export const PLATEAUX = [
  // ── Sandwichs ──
  {
    seoTitle: `Plateau mini baguettes pour vos afterworks et réceptions d'entreprise à Paris`,
    seoHtml: `<p>Notre plateau de mini baguettes artisanales garnies est le format qui rassure : des sandwichs francs, faciles à attraper debout, qui plaisent à tout le monde lors d'un afterwork ou d'un pot de départ. Posé au centre de la table, il se partage sans chichi et cale les petites faims de fin de journée.</p><h2>Un assortiment à partager, net à manger debout</h2><p>Six garnitures : poulet au curry doux, poulet rôti et mayonnaise, poulet croustillant pané, œuf et emmental, saumon fumé et avocat, thon et mayonnaise. Découpées pour picorer, on équilibre l'assortiment pour que chacun trouve la sienne et on ajuste les quantités à votre effectif.</p><h2>Commander votre plateau à Paris et en Île-de-France</h2><p>Format à partager selon le nombre de convives, commande avant 14h la veille, livraison dès 6h30 sur votre lieu de réception. Facturation entreprise avec TVA, devis personnalisé sous 24h.</p>`,
    id: 'sw1', famille: 'sandwichs', nom: 'Mini Baguettes Signature', img: '/plateau-baguettes.webp',
    description: 'Assortiment de mini baguettes artisanales garnies.',
    recettes: ['Poulet au Curry Doux', 'Poulet Rôti & Mayonnaise', 'Poulet Croustillant Pané', 'Œuf & Emmental', 'Saumon Fumé & Avocat', 'Thon & Mayonnaise'],
  },
  {
    seoTitle: `Plateau club sandwichs pour vos afterworks et réunions d'entreprise à Paris`,
    seoHtml: `<p>Notre plateau de clubs sandwichs moelleux, découpés en triangles, est un classique de l'apéritif d'entreprise qui ne déçoit jamais. Généreux et facile à partager, il accompagne un afterwork, un déjeuner de travail qui s'étire ou une réception, sans couverts ni logistique compliquée.</p><h2>Des clubs généreux, découpés à partager</h2><p>Deux garnitures : saumon fumé et cream cheese, et blanc de poulet, sur pain brioché moelleux découpé en triangles pour se servir d'une main. On cale les quantités sur votre effectif.</p><h2>Commander votre plateau à Paris et en Île-de-France</h2><p>Format à partager selon le nombre de convives, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    id: 'sw2', famille: 'sandwichs', nom: 'Clubs Signature', img: '/plateau-clubs.webp',
    description: 'Assortiment de clubs sandwichs moelleux découpés.',
    recettes: ['Club Saumon Fumé & Cream Cheese', 'Club Blanc de Poulet'],
  },
  {
    seoTitle: `Plateau de mini wraps roulés pour vos afterworks et pauses déjeuner d'entreprise à Paris`,
    seoHtml: `<p>Notre plateau de mini wraps roulés découpés en bouchées apporte de la couleur et de la fraîcheur à un apéritif d'équipe. Roulés serrés, coupés net, les mini wraps se picorent facilement debout et offrent une alternative plus légère aux sandwichs classiques pour un afterwork ou une réunion de l'après-midi.</p><h2>Roulés, coupés, prêts à picorer</h2><p>Deux garnitures : saumon fumé et cream cheese, et blanc de poulet. Roulés serrés puis découpés en bouchées pour se partager sans effort. On ajuste les quantités à votre effectif.</p><h2>Commander votre plateau à Paris et en Île-de-France</h2><p>Format à partager selon l'effectif, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis personnalisé sous 24h.</p>`,
    id: 'sw3', famille: 'sandwichs', nom: 'Mini Wraps Roulés', img: '/plateau-wraps.webp',
    description: 'Assortiment de mini wraps roulés, découpés en bouchées.',
    recettes: ['Mini Wrap Roulé Saumon Fumé & Cream Cheese', 'Mini Wrap Roulé Blanc de Poulet'],
  },
  {
    seoTitle: `Plateau de mini burgers pour vos afterworks et événements d'entreprise à Paris`,
    seoHtml: `<p>Notre plateau de mini burgers artisanaux met de l'ambiance sur un apéritif d'équipe. Format street food net à manger debout, il plaît à tous les âges et transforme un afterwork ou un pot de départ en moment convivial. Des bouchées généreuses, assemblées avec soin.</p><h2>Des mini burgers à partager</h2><p>Deux recettes, cheeseburger et chicken crispy, prêtes à se servir d'une main. On mixe les garnitures et on cale les quantités sur votre effectif.</p><h2>Commander votre plateau à Paris et en Île-de-France</h2><p>Format à partager selon le nombre de convives, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    id: 'sw4', famille: 'sandwichs', nom: 'Mini Burgers', img: '/plateau-burgers.webp',
    description: 'Assortiment de mini burgers artisanaux.',
    recettes: ['Cheeseburger', 'Chicken Crispy'],
  },
  // ── Gourmands ──
  {
    seoTitle: `Plateau de fromages affinés pour vos apéritifs et réceptions d'entreprise à Paris`,
    seoHtml: `<p>Notre plateau de fromages affinés, accompagné de fruits frais et de pain artisanal, pose tout de suite le ton d'une réception soignée. Posé au centre de la table, il invite au partage et accompagne parfaitement un afterwork, une soirée partenaires ou un cocktail dînatoire.</p><h2>Une sélection à composer soi-même</h2><p>Fromages affinés variés, fruits frais et pain artisanal pour construire chaque bouchée. On adapte la taille du plateau et l'assortiment à votre effectif et à l'occasion.</p><h2>Commander votre plateau à Paris et en Île-de-France</h2><p>Format à partager selon le nombre de convives, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis personnalisé sous 24h.</p>`,
    id: 'go1', famille: 'gourmands', nom: 'Fromages Affinés', img: '/plateau-fromages.webp',
    description: 'Sélection de fromages affinés accompagnés de fruits frais et de pain artisanal.',
    recettes: [],
  },
  {
    seoTitle: `Plateau de charcuterie halal, sans porc, pour vos apéritifs d'entreprise à Paris`,
    seoHtml: `<p>Notre plateau de charcuteries est halal et sans porc : bœuf séché, bresaola, viande des Grisons, dinde fumée, poulet fumé, relevés d'olives vertes et de raisin frais. Une planche généreuse qui n'exclut personne autour de la table, parfaite pour un afterwork, une inauguration ou une réception mixant les profils.</p><h2>Une planche généreuse, halal et sans porc</h2><p>Bœuf séché, bresaola, viande des Grisons, dinde fumée et poulet fumé, roulés et dressés à la main, avec olives vertes et raisin frais pour la fraîcheur. Livré en barquette bois, prêt à poser au centre de la table. On ajuste la taille du plateau à votre effectif.</p><h2>Commander votre plateau à Paris et en Île-de-France</h2><p>Format à partager selon le nombre de convives, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    id: 'go2', famille: 'gourmands', nom: 'Charcuteries Artisanales', img: '/plateau-charcuterie-v2.webp',
    description: 'Bœuf séché, bresaola, viande des Grisons, dinde fumée, poulet fumé, olives & raisin frais · halal, sans porc.',
    recettes: [],
  },
  {
    seoTitle: `Plateau de saumon fumé et gravlax pour vos réceptions d'entreprise à Paris`,
    seoHtml: `<p>Notre plateau de saumon réunit saumon fumé et gravlax, blinis, crème citron-aneth, câpres, oignons rouges et citron. Une bouchée nette et élégante qui pose le niveau d'un cocktail ou d'une réception, à monter soi-même au fil du service. Le genre de plateau qui se remarque sur un buffet.</p><h2>Saumon fumé, gravlax et accompagnements</h2><p>Saumon fumé et gravlax, blinis, crème citron-aneth, câpres et oignons rouges pour composer chaque bouchée. On adapte la taille du plateau à votre effectif et à l'occasion.</p><h2>Commander votre plateau à Paris et en Île-de-France</h2><p>Format à partager selon le nombre de convives, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis personnalisé sous 24h.</p>`,
    id: 'go4', famille: 'gourmands', nom: 'Saumon', img: '/plateau-saumon.webp',
    description: 'Saumon fumé, saumon gravlax, blinis, crème citron-aneth, câpres, oignons rouges & citron.',
    recettes: [],
  },
  // ── Fraîcheur ──
  {
    seoTitle: `Plateau de crudités et dips pour vos apéritifs et pauses d'entreprise à Paris`,
    seoHtml: `<p>Notre plateau de crudités et dips joue la fraîcheur et la légèreté : carottes, concombre, radis, chou-fleur, tomates cerises, avec houmous, tzatziki et tapenade. L'option saine d'un apéritif d'équipe, qui équilibre un buffet plus riche et plaît à ceux qui veulent picorer léger.</p><h2>Frais, coloré, à tremper</h2><p>Légumes croquants de saison taillés pour tremper, avec houmous, tzatziki et tapenade. On ajuste les quantités à votre effectif et on complète volontiers un buffet plus copieux.</p><h2>Commander votre plateau à Paris et en Île-de-France</h2><p>Format à partager selon le nombre de convives, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    id: 'fr1', famille: 'fraicheur', nom: 'Crudités & Dips', img: '/plateau-crudites.webp',
    description: 'Carottes, concombre, radis, chou-fleur, tomates cerises, houmous, tzatziki & tapenade.',
    recettes: [],
  },

  // ── Signature ──
  {
    seoTitle: `Plateau apéritif asiatique pour vos afterworks et réceptions d'entreprise à Paris`,
    seoHtml: `<p>Notre plateau d'inspiration asiatique change des classiques de l'apéritif : un assortiment de bouchées parfumées qui apporte du relief à un afterwork ou une réception. Le genre de plateau qui lance la conversation et sort du sandwich habituel.</p><h2>Des bouchées parfumées à partager</h2><p>Assortiment de bouchées d'inspiration asiatique, à picorer du bout des doigts, avec des sauces pour accompagner. On équilibre l'assortiment et on cale les quantités sur votre effectif.</p><h2>Commander votre plateau à Paris et en Île-de-France</h2><p>Format à partager selon le nombre de convives, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis personnalisé sous 24h.</p>`,
    id: 'si1', famille: 'signature', nom: 'Asiatique', img: '/plateau-asiatique.webp',
    description: 'Assortiment de bouchées d\'inspiration asiatique.',
    recettes: ['Makis', 'California Rolls', 'Spring Rolls', 'Gyozas', 'Brochettes Yakitori', 'Sauce soja, gingembre & wasabi'],
  },

  // ── Sucré ──
  {
    seoTitle: `Plateau de douceurs pour vos apéritifs et réceptions d'entreprise à Paris`,
    seoHtml: `<p>Notre plateau de douceurs réunit une sélection de desserts artisanaux pour finir un afterwork ou une réception sur une note sucrée. Brownies, choux, muffins et macarons à picorer, il apporte la touche gourmande qui clôt agréablement un buffet salé.</p><h2>Des douceurs à partager</h2><p>Brownies, choux à la crème, mini muffins et macarons, en petites pièces à picorer sans couvert. On varie l'assortiment et on ajuste les quantités à votre effectif.</p><h2>Commander votre plateau à Paris et en Île-de-France</h2><p>Format à partager selon le nombre de convives, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    id: 'si4', famille: 'sucre', nom: 'Douceurs', img: '/plateau-douceurs.webp',
    description: 'Brownies, choux, muffins et macarons.',
    recettes: ['Brownies', 'Choux à la crème', 'Mini muffins', 'Macarons'],
  },
  {
    seoTitle: `Plateau de brochettes de fruits pour vos apéritifs et pauses d'entreprise à Paris`,
    seoHtml: `<p>Notre plateau de brochettes de fruits frais de saison apporte fraîcheur et couleur à un apéritif ou une pause d'équipe. Chacun attrape la sienne d'une main, sans couvert ni assiette : c'est ce qui le rend plus pratique qu'un plateau découpé sur un buffet debout.</p><h2>Des fruits de saison, prêts à picorer</h2><p>Fraises, ananas, melon, raisin, kiwi selon la saison, montés en brochettes. Vegan et sans gluten, donc accessible à toute l'équipe. On adapte le nombre de brochettes à votre effectif et à l'occasion.</p><h2>Commander votre plateau à Paris et en Île-de-France</h2><p>Format à partager selon le nombre de convives, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis personnalisé sous 24h.</p>`,
    id: 'fr3', famille: 'sucre', nom: 'Brochettes de Fruits', img: '/plateau-brochettes-fruits-v2.webp',
    description: 'Brochettes de fruits frais de saison, à picorer. Vegan et sans gluten.',
    recettes: [],
  },
]
