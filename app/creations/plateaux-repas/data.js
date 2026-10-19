// Données plateaux repas, module plat (importable serveur + client)

export const COLLECTIONS = [
  {
    key: 'essentiel',
    label: 'Essentiel',
    description: 'Des recettes fraîches et équilibrées, entrée, plat et dessert préparés chaque matin avec des produits de saison.',
    prix: '28,90',
    hero: '/plateau-mediterraneen.webp',
  },
]

export const PRIX = {
  essentiel: { vegetarien: '28,90', poulet: '29,90', poisson: '30,90' },
}

export const prixMenu = (p) => p.prix ?? PRIX[p.collection]?.[p.categorie] ?? ''

export const PRODUITS = [
  // ── Collection Essentiel (à partir de 28,90 € HT) ──
  {
    id: 'e2', collection: 'essentiel', categorie: 'poulet', nom: 'La Romaine', img: '/plateau-cesar.webp',
    seoTitle: `La Romaine : le plateau repas poulet et pommes de terre rôties pour vos déjeuners d'entreprise à Paris`,
    seoHtml: `
      <p>La Romaine, c'est le plateau poulet qui cale : salade de tomates anciennes et basilic en entrée, filet de poulet et pommes de terre rôties en plat, muffin aux pépites de chocolat en dessert. Un menu complet et rassasiant de la collection Essentiel, monté le matin même. Idéal pour un déjeuner de réunion ou un comité qui n'a pas le temps de sortir.</p>
      <h2>Un classique bien fait, préparé le jour même</h2>
      <p>Une salade de tomates anciennes au basilic frais, un filet de poulet et des pommes de terre rôties à l'huile d'olive, un muffin aux pépites de chocolat. Dressé en plateau individuel et monté le matin de la livraison.</p>
      <h2>Commander La Romaine à Paris et en Île-de-France</h2>
      <p>Commande avant 14h la veille, livraison dans vos bureaux dès 6h30. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis personnalisé sous <strong>24h</strong>.</p>
    `,
    entree: 'Salade de tomates anciennes & basilic',
    plat: 'Filet de poulet & pommes de terre rôties',
    dessert: 'Muffin aux pépites de chocolat',
  },
  {
    id: 'e1', collection: 'essentiel', categorie: 'vegetarien', nom: 'La Solaire', img: '/plateau-mediterraneen.webp',
    seoTitle: `La Solaire : le plateau repas végétarien pour vos déjeuners d'entreprise à Paris`,
    seoHtml: `
      <p>La Solaire est notre plateau repas 100 % végétarien de la collection Essentiel : houmous et pain grillé en entrée, quinoa gourmand aux falafels et sauce tahini en plat, cookie Signature en dessert. Un menu coloré et rassasiant, qui prouve qu'un déjeuner sans viande peut être aussi consistant que gourmand.</p>
      <h2>Un menu végétarien complet et généreux</h2>
      <p>Houmous, huile d'olive et pain grillé, puis quinoa aux falafels et tahini, et un cookie pour finir. Des recettes de saison préparées le matin même, dressées en plateau individuel. Parfait pour un déjeuner d'équipe qui mélange les régimes.</p>
      <h2>Commander La Solaire à Paris et en Île-de-France</h2>
      <p>Commande avant 14h la veille, livraison dès 6h30 dans vos bureaux. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis sous <strong>24h</strong>.</p>
    `,
    entree: 'Houmous, huile d\'olive & pain grillé',
    plat: 'Quinoa gourmand, falafels & sauce tahini',
    dessert: 'Cookie Signature',
  },
  {
    id: 'e3', collection: 'essentiel', categorie: 'vegetarien', nom: 'La Provençale', img: '/plateau-provencal.webp',
    seoTitle: `La Provençale : le plateau repas végétarien aux accents du sud pour vos déjeuners à Paris`,
    seoHtml: `
      <p>La Provençale sent bon le sud : salade fraîcheur de tomates, concombre et oignon rouge à l'huile d'olive en entrée, pâtes au pesto, mozzarella et tomates confites en plat, panna cotta aux fruits rouges en dessert. Un plateau repas végétarien de la collection Essentiel, préparé le matin même, pour un déjeuner d'entreprise qui change de l'ordinaire.</p>
      <h2>Le sud dans un plateau individuel</h2>
      <p>Salade fraîcheur, pâtes au pesto avec mozzarella et tomates confites, panna cotta fruits rouges. Des recettes parfumées, dressées avec soin et montées le jour de la livraison.</p>
      <h2>Commander La Provençale à Paris et en Île-de-France</h2>
      <p>Commande avant 14h la veille, livraison dès 6h30. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis sous <strong>24h</strong>.</p>
    `,
    entree: 'Salade fraîcheur : tomates, concombre, oignon rouge & huile d\'olive',
    plat: 'Pâtes au pesto, mozzarella & tomates confites',
    dessert: 'Panna Cotta fruits rouges',
  },
  {
    id: 'e4', collection: 'essentiel', categorie: 'poulet', nom: 'La Champêtre', img: '/plateau-fermier.webp',
    seoTitle: `La Champêtre : le plateau repas au poulet et riz pour vos déjeuners d'entreprise`,
    seoHtml: `
      <p>La Champêtre joue la fraîcheur : salade de concombre au yaourt et ciboulette en entrée, émincé de poulet et riz en plat, salade de fruits frais en dessert. Un plateau repas de la collection Essentiel, léger et équilibré, idéal pour un déjeuner de travail.</p>
      <h2>Léger, frais et rassasiant</h2>
      <p>Salade de concombre au yaourt et ciboulette, émincé de poulet et riz basmati, salade de fruits frais. Des recettes de saison préparées le matin même, dressées en plateau individuel, pour bien déjeuner sans se sentir lourd l'après-midi.</p>
      <h2>Commander La Champêtre à Paris et en Île-de-France</h2>
      <p>Commande avant 14h la veille, livraison dès 6h30 dans vos locaux. On adapte aux effectifs et aux régimes, facturation entreprise avec TVA. Devis sous <strong>24h</strong>.</p>
    `,
    entree: 'Salade de concombre au yaourt & ciboulette',
    plat: 'Émincé de poulet & riz',
    dessert: 'Salade de fruits frais',
  },
  {
    id: 'e5', collection: 'essentiel', categorie: 'poisson', nom: 'La Boréale', img: '/plateau-nordique.webp',
    seoTitle: `La Boréale : le plateau repas au saumon pour vos déjeuners d'entreprise à Paris`,
    seoHtml: `
      <p>La Boréale met le saumon à l'honneur : céleri rémoulade en entrée, pommes de terre sautées et dés de saumon poêlés en plat, compote pomme-fraise en dessert. Un plateau repas de la collection Essentiel, complet et soigné, pour un déjeuner d'entreprise.</p>
      <h2>Un plateau autour du saumon</h2>
      <p>Céleri rémoulade, pommes de terre sautées et dés de saumon poêlés, compote pomme-fraise. Des recettes de saison préparées le matin même et dressées en plateau individuel.</p>
      <h2>Commander La Boréale à Paris et en Île-de-France</h2>
      <p>Commande avant 14h la veille, livraison dès 6h30. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis sous <strong>24h</strong>.</p>
    `,
    entree: 'Céleri rémoulade',
    plat: 'Pommes de terre sautées & dés de saumon poêlés',
    dessert: 'Compote pomme-fraise',
  },
  {
    id: 'e6', collection: 'essentiel', categorie: 'vegetarien', nom: 'La Potagère', img: '/plateau-gourmand.webp',
    seoTitle: `La Potagère : le plateau repas végétarien à la tarte aux légumes pour vos déjeuners à Paris`,
    seoHtml: `
      <p>La Potagère célèbre le végétal : salade de lentilles et feta en entrée, tarte aux légumes du soleil (courgette, aubergine, carotte, poivrons, oignon) en plat, fromage blanc et granola en dessert. Un plateau repas végétarien de la collection Essentiel, riche en goût et en textures, pour un déjeuner d'équipe équilibré.</p>
      <h2>Le végétal qui rassasie</h2>
      <p>Salade de lentilles et feta, tarte aux légumes du soleil, fromage blanc et granola. Des recettes de saison préparées le matin même et dressées en plateau individuel. Une option végétarienne qui tient au corps.</p>
      <h2>Commander La Potagère à Paris et en Île-de-France</h2>
      <p>Commande avant 14h la veille, livraison dès 6h30 dans vos bureaux. On gère effectifs et régimes, facturation entreprise avec TVA. Devis sous <strong>24h</strong>.</p>
    `,
    entree: 'Salade de lentilles & feta',
    plat: 'Tarte aux légumes du soleil',
    dessert: 'Fromage blanc & granola',
  },

]
