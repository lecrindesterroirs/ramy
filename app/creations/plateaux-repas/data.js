// Données plateaux repas, module plat (importable serveur + client)

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
    description: 'Une sélection raffinée élaborée par nos chefs · produits nobles, dressage soigné, transformable en coffret Prestige.',
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
    seoTitle: `La Romaine : le plateau repas César au poulet pour vos déjeuners d'entreprise à Paris`,
    seoHtml: `
      <p>La Romaine remet la salade César à sa vraie place : une salade au poulet rôti généreuse, précédée d'une salade de tomates anciennes et basilic, terminée par un brownie. Un menu complet et rassasiant de la collection Essentiel, monté le matin même. Idéal pour un déjeuner de réunion ou un comité qui n'a pas le temps de sortir.</p>
      <h2>Un classique bien fait, préparé le jour même</h2>
      <p>Salade de tomates anciennes et basilic en entrée, salade César au poulet rôti en plat, brownie en dessert. Des recettes de saison, dressées en plateau individuel et montées le matin de la livraison. Rien d'industriel.</p>
      <h2>Commander La Romaine à Paris et en Île-de-France</h2>
      <p>Commande avant 14h la veille, livraison dans vos bureaux dès 6h30. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis personnalisé sous <strong>24h</strong>.</p>
    `,
    entree: 'Salade de tomates anciennes & basilic',
    plat: 'Salade César au poulet rôti',
    dessert: 'Brownie',
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
      <p>La Provençale sent bon le sud : caviar d'aubergine et focaccia au romarin en entrée, pâtes au pesto, mozzarella et tomates confites en plat, panna cotta aux fruits rouges en dessert. Un plateau repas végétarien de la collection Essentiel, préparé le matin même, pour un déjeuner d'entreprise qui change de l'ordinaire.</p>
      <h2>Le sud dans un plateau individuel</h2>
      <p>Caviar d'aubergine et focaccia romarin, pâtes au pesto avec mozzarella et tomates confites, panna cotta fruits rouges. Des recettes parfumées, dressées avec soin et montées le jour de la livraison.</p>
      <h2>Commander La Provençale à Paris et en Île-de-France</h2>
      <p>Commande avant 14h la veille, livraison dès 6h30. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis sous <strong>24h</strong>.</p>
    `,
    entree: 'Caviar d\'aubergine & focaccia romarin',
    plat: 'Pâtes au pesto, mozzarella & tomates confites',
    dessert: 'Panna Cotta fruits rouges',
  },
  {
    id: 'e4', collection: 'essentiel', categorie: 'poulet', nom: 'La Champêtre', img: '/plateau-fermier.webp',
    seoTitle: `La Champêtre : le plateau repas au poulet et légumes grillés pour vos déjeuners d'entreprise`,
    seoHtml: `
      <p>La Champêtre joue la fraîcheur : salade de concombre au yaourt, menthe et aneth en entrée, émincé de poulet aux légumes grillés marinés et huile au basilic en plat, compote pomme et fève tonka en dessert. Un plateau repas de la collection Essentiel, léger et équilibré, idéal pour un déjeuner de travail.</p>
      <h2>Léger, frais et rassasiant</h2>
      <p>Salade de concombre au yaourt et herbes, émincé de poulet et légumes grillés, compote pomme-tonka. Des recettes de saison préparées le matin même, dressées en plateau individuel, pour bien déjeuner sans se sentir lourd l'après-midi.</p>
      <h2>Commander La Champêtre à Paris et en Île-de-France</h2>
      <p>Commande avant 14h la veille, livraison dès 6h30 dans vos locaux. On adapte aux effectifs et aux régimes, facturation entreprise avec TVA. Devis sous <strong>24h</strong>.</p>
    `,
    entree: 'Salade de concombre au yaourt, menthe & aneth',
    plat: 'Émincé de Poulet, légumes grillés marinés & huile au basilic',
    dessert: 'Compote pomme & fève tonka',
  },
  {
    id: 'e5', collection: 'essentiel', categorie: 'poisson', nom: 'La Boréale', img: '/plateau-nordique.webp',
    seoTitle: `La Boréale : le plateau repas au saumon fumé pour vos déjeuners d'entreprise à Paris`,
    seoHtml: `
      <p>La Boréale met le saumon à l'honneur : salade de tomates anciennes et basilic en entrée, salade de pommes de terre au saumon fumé et crème citronnée en plat, mousse au chocolat du chef en dessert. Un plateau repas de la collection Essentiel, complet et soigné, pour un déjeuner d'entreprise.</p>
      <h2>Un plateau autour du saumon fumé</h2>
      <p>Tomates anciennes et basilic, salade de pommes de terre au saumon fumé et crème citronnée, mousse au chocolat. Des recettes de saison préparées le matin même et dressées en plateau individuel.</p>
      <h2>Commander La Boréale à Paris et en Île-de-France</h2>
      <p>Commande avant 14h la veille, livraison dès 6h30. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis sous <strong>24h</strong>.</p>
    `,
    entree: 'Salade de tomates anciennes & basilic',
    plat: 'Salade de pommes de terre, saumon fumé & crème citronnée',
    dessert: 'Mousse au chocolat du Chef',
  },
  {
    id: 'e6', collection: 'essentiel', categorie: 'vegetarien', nom: 'La Potagère', img: '/plateau-gourmand.webp',
    seoTitle: `La Potagère : le plateau repas végétarien aux légumes rôtis pour vos déjeuners à Paris`,
    seoHtml: `
      <p>La Potagère célèbre le végétal : tartelette pissaladière et jeunes pousses en entrée, salade de lentilles, feta et légumes rôtis en plat, verrine citron et lemon curd en dessert. Un plateau repas végétarien de la collection Essentiel, riche en goût et en textures, pour un déjeuner d'équipe équilibré.</p>
      <h2>Le végétal qui rassasie</h2>
      <p>Tartelette pissaladière, salade de lentilles avec feta et légumes rôtis, verrine citron. Des recettes de saison préparées le matin même et dressées en plateau individuel. Une option végétarienne qui tient au corps.</p>
      <h2>Commander La Potagère à Paris et en Île-de-France</h2>
      <p>Commande avant 14h la veille, livraison dès 6h30 dans vos bureaux. On gère effectifs et régimes, facturation entreprise avec TVA. Devis sous <strong>24h</strong>.</p>
    `,
    entree: 'Tartelette pissaladière & jeunes pousses',
    plat: 'Salade de lentilles, feta & légumes rôtis',
    dessert: 'Verrine Citron / Lemon Curd',
  },

  // ── Collection Signature (à partir de 33,90 € HT) ──
  {
    id: 's1', collection: 'signature', categorie: 'vegetarien', nom: 'La Dolce Vita', img: '/plat-trofie-burrata.webp',
    seoTitle: `La Dolce Vita : le plateau repas signature italien pour vos déjeuners d'entreprise à Paris`,
    seoHtml: `
      <p>La Dolce Vita, c'est l'Italie en plateau signature : burrata, tomates anciennes et pesto en entrée, trofie au pesto, burrata et tomates confites en plat, tartelette praliné en dessert. Un menu végétarien élaboré par nos chefs, aux produits nobles et au dressage soigné, pour un déjeuner d'entreprise qui marque.</p>
      <h2>Un menu signature autour de la burrata</h2>
      <p>Burrata et tomates anciennes au pesto, trofie au pesto avec burrata et tomates confites, tartelette praliné. Des recettes préparées le matin même, dressées avec soin, transformables en coffret Prestige pour les occasions importantes.</p>
      <h2>Commander La Dolce Vita à Paris et en Île-de-France</h2>
      <p>Commande avant 14h la veille, livraison dès 6h30. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis sous <strong>24h</strong>.</p>
    `,
    entree: 'Burrata, tomates anciennes & pesto',
    plat: 'Trofie au pesto, burrata & tomates confites',
    dessert: 'Tartelette Praliné',
  },
  {
    id: 's2', collection: 'signature', categorie: 'poulet', nom: 'L\'Audacieuse', img: '/plat-poulet-coreen.webp',
    seoTitle: `L'Audacieuse : le plateau repas signature poulet coréen pour vos déjeuners à Paris`,
    seoHtml: `
      <p>L'Audacieuse sort des sentiers battus : assiette mezzé en entrée, poulet coréen, riz au sésame et légumes pickles en plat, mousse chocolat en dessert. Un plateau repas signature qui apporte du relief à un déjeuner d'entreprise, pour les équipes qui aiment goûter autre chose.</p>
      <h2>Du caractère dans un plateau signature</h2>
      <p>Assiette mezzé, poulet coréen avec riz au sésame et légumes pickles, mousse chocolat. Des recettes élaborées par nos chefs, préparées le matin même et dressées avec soin. Un menu qui change de la salade classique.</p>
      <h2>Commander L'Audacieuse à Paris et en Île-de-France</h2>
      <p>Commande avant 14h la veille, livraison dès 6h30. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis sous <strong>24h</strong>.</p>
    `,
    entree: 'Assiette mezzé',
    plat: 'Poulet coréen, riz au sésame & légumes pickles',
    dessert: 'Mousse Chocolat',
  },
  {
    id: 's3', collection: 'signature', categorie: 'poisson', nom: 'Le Riviera', img: '/plat-gravlax-riviera.webp',
    seoTitle: `Le Riviera : le plateau repas signature au saumon gravlax pour vos déjeuners à Paris`,
    seoHtml: `
      <p>Le Riviera respire la Méditerranée : tartare de saumon méditerranéen en entrée, saumon gravlax, pommes grenailles, crème d'Isigny et jeunes pousses en plat, tartelette citron en dessert. Un plateau repas signature élégant, pour un déjeuner d'affaires ou un comité de direction.</p>
      <h2>Un menu signature autour du saumon</h2>
      <p>Tartare de saumon, saumon gravlax avec pommes grenailles et crème d'Isigny, tartelette citron. Des produits nobles, un dressage soigné, un plateau monté le matin de la livraison. Transformable en coffret Prestige.</p>
      <h2>Commander Le Riviera à Paris et en Île-de-France</h2>
      <p>Commande avant 14h la veille, livraison dès 6h30. On adapte aux effectifs et régimes, facturation entreprise avec TVA. Devis sous <strong>24h</strong>.</p>
    `,
    entree: 'Tartare de saumon méditerranéen',
    plat: 'Saumon gravlax, pommes grenailles, crème d\'Isigny & jeunes pousses',
    dessert: 'Tartelette Citron',
  },
  {
    id: 's4', collection: 'signature', categorie: 'viande', nom: 'La Parisienne', img: '/plat-tataki.webp',
    seoTitle: `La Parisienne : le plateau repas signature au bœuf pour vos déjeuners d'entreprise à Paris`,
    seoHtml: `
      <p>La Parisienne met le bœuf en scène : carpaccio de bœuf, parmesan et roquette en entrée, tataki de bœuf, pommes grenailles rôties et chimichurri en plat, carrot cake en dessert. Un plateau repas signature généreux, pour un déjeuner d'affaires qui a du caractère.</p>
      <h2>Un menu signature autour du bœuf</h2>
      <p>Carpaccio de bœuf au parmesan et roquette, tataki de bœuf avec pommes grenailles et chimichurri, carrot cake. Des produits nobles, un dressage maîtrisé, un plateau préparé le matin même. Transformable en coffret Prestige.</p>
      <h2>Commander La Parisienne à Paris et en Île-de-France</h2>
      <p>Commande avant 14h la veille, livraison dès 6h30 dans vos bureaux. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis sous <strong>24h</strong>.</p>
    `,
    entree: 'Carpaccio de bœuf, parmesan & roquette',
    plat: 'Tataki de bœuf, pommes grenailles rôties & chimichurri',
    dessert: 'Carrot Cake',
  },
  {
    id: 's5', collection: 'signature', categorie: 'vegetarien', nom: 'La Levantine', img: '/plat-levant.webp',
    seoTitle: `La Levantine : le plateau repas signature végétarien pour vos déjeuners à Paris`,
    seoHtml: `
      <p>La Levantine voyage vers l'orient : assiette mezzé en entrée, quinoa gourmand aux falafels, feta, légumes grillés et tahini en plat, mousse chocolat en dessert. Un plateau repas signature végétarien, riche en saveurs, pour un déjeuner d'entreprise qui sort de l'ordinaire.</p>
      <h2>Un menu signature végétarien et parfumé</h2>
      <p>Assiette mezzé, quinoa aux falafels avec feta, légumes grillés et tahini, mousse chocolat. Des recettes élaborées par nos chefs, préparées le matin même et dressées avec soin. Une option végétarienne qui a du relief.</p>
      <h2>Commander La Levantine à Paris et en Île-de-France</h2>
      <p>Commande avant 14h la veille, livraison dès 6h30. On gère effectifs et régimes, facturation entreprise avec TVA. Devis sous <strong>24h</strong>.</p>
    `,
    entree: 'Assiette mezzé',
    plat: 'Quinoa gourmand, falafels, feta, légumes grillés & tahini',
    dessert: 'Mousse Chocolat',
  },
  {
    id: 's6', collection: 'signature', categorie: 'poisson', nom: 'L\'Estivale', img: '/plat-gravlax.webp',
    seoTitle: `L'Estivale : le plateau repas signature poisson et ceviche pour vos déjeuners à Paris`,
    seoHtml: `
      <p>L'Estivale a le goût de l'été : ceviche de daurade, mangue et coriandre en entrée, saumon gravlax, pommes grenailles et crème d'Isigny en plat, tartelette citron en dessert. Un plateau repas signature frais et léger, pour un déjeuner d'entreprise ensoleillé.</p>
      <h2>Un menu signature frais et iodé</h2>
      <p>Ceviche de daurade à la mangue, saumon gravlax avec pommes grenailles et crème d'Isigny, tartelette citron. Des produits nobles, un dressage soigné, un plateau monté le matin de la livraison. Transformable en coffret Prestige.</p>
      <h2>Commander L'Estivale à Paris et en Île-de-France</h2>
      <p>Commande avant 14h la veille, livraison dès 6h30. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis sous <strong>24h</strong>.</p>
    `,
    entree: 'Ceviche de daurade, mangue & coriandre',
    plat: 'Saumon gravlax, pommes grenailles & crème d\'Isigny',
    dessert: 'Tartelette Citron',
  },
  {
    id: 's7', collection: 'signature', categorie: 'viande', nom: 'La Souveraine', img: '/plat-tataki-prestige.webp',
    seoTitle: `La Souveraine : le plateau repas signature au bœuf tataki pour vos déjeuners à Paris`,
    seoHtml: `
      <p>La Souveraine va à l'essentiel du raffinement : carpaccio de bœuf, parmesan et roquette en entrée, tataki de bœuf et chimichurri en plat, mousse chocolat en dessert. Un plateau repas signature épuré et généreux, pensé pour un déjeuner d'affaires ou un comité de direction.</p>
      <h2>Un menu signature autour du bœuf tataki</h2>
      <p>Carpaccio de bœuf au parmesan et roquette, tataki de bœuf au chimichurri, mousse chocolat. Des produits nobles, un dressage maîtrisé, un plateau préparé le matin même. Transformable en coffret Prestige pour vos occasions importantes.</p>
      <h2>Commander La Souveraine à Paris et en Île-de-France</h2>
      <p>Commande avant 14h la veille, livraison dès 6h30 dans vos bureaux. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis sous <strong>24h</strong>.</p>
    `,
    entree: 'Carpaccio de bœuf, parmesan & roquette',
    plat: 'Tataki de bœuf & chimichurri',
    dessert: 'Mousse Chocolat',
  },
  {
    id: 's8', collection: 'signature', categorie: 'vegetarien', nom: 'La Divine', img: '/plat-trofie-prestige.webp',
    seoTitle: `La Divine : le plateau repas signature végétarien italien pour vos déjeuners à Paris`,
    seoHtml: `
      <p>La Divine décline l'Italie en version épurée : burrata, tomates anciennes et pesto en entrée, trofie au pesto et burrata en plat, carrot cake en dessert. Un plateau repas signature végétarien, simple et abouti, pour un déjeuner d'entreprise soigné.</p>
      <h2>Un menu signature végétarien autour de la burrata</h2>
      <p>Burrata et tomates anciennes au pesto, trofie au pesto et burrata, carrot cake. Des produits nobles, un dressage soigné, un plateau monté le matin de la livraison. Transformable en coffret Prestige.</p>
      <h2>Commander La Divine à Paris et en Île-de-France</h2>
      <p>Commande avant 14h la veille, livraison dès 6h30. On adapte aux effectifs et régimes, facturation entreprise avec TVA. Devis sous <strong>24h</strong>.</p>
    `,
    entree: 'Burrata, tomates anciennes & pesto',
    plat: 'Trofie au pesto & burrata',
    dessert: 'Carrot Cake',
  },
]
