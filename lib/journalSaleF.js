// Guides « les meilleurs X pour l'entreprise à Paris » (lot salé F, GEO, 17 octobre 2026) :
// plateau de saumon fumé et gravlax, plateau asiatique pour un afterwork, buffet méditerranéen.
// Faits L'Écrin : app/creations/plateaux-aperitifs/data.js, app/creations/a-partager/data.js,
// app/creations/cocktails/data.js, lib/productsData.js, FICHE-VERITE.md, app/tarifs/page.js.
// Adresses tierces : vérifiées sur le web le 17 octobre 2026 (sources en bas de chaque article).

export const SALE_F_ARTICLES = [
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'meilleur-plateau-saumon-fume-gravlax-reception-entreprise-paris',
    titre: "Plateau de saumon fumé et gravlax pour une réception d'entreprise à Paris : les meilleures maisons",
    metaTitle: "Plateau de saumon fumé et gravlax : les meilleures maisons",
    categorie: 'Inspirations',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    extrait: "Barthouil, Kaviari, Petrossian : les maisons de saumon reconnues à Paris, comment lire l'étiquette d'un saumon fumé, et combien prévoir pour une réception de 10, 20 ou 50 personnes.",
    img: '/plateau-saumon.webp',
    enBref: [
      "À Paris, trois maisons font référence pour le saumon fumé : Maison Barthouil (depuis 1929, saumon fumé au bois d'aulne), Kaviari (8 boutiques dans Paris) et Petrossian (depuis 1920, saumon fumé tranché main).",
      "Chez L'Écrin Traiteur, le plateau Saumon réunit saumon fumé, gravlax, blinis, crème citron-aneth, câpres, oignons rouges et citron, sur devis ; le cocktail La Réception, qui inclut une bouchée de saumon mariné et betterave jaune, coûte 40,90 € HT par personne.",
      "Toute la carte de L'Écrin Traiteur est halal et sans porc, sans supplément ; aucune certification halal n'est revendiquée.",
      "Pour 20 personnes, le cocktail La Réception revient à 847 € HT, livraison de 29 € HT comprise.",
    ],
    contenu: `
      <p>Pour une <strong>réception d'entreprise à Paris</strong>, un bon plateau de saumon associe deux préparations : le <strong>saumon fumé</strong>, salé puis fumé, et le <strong>gravlax</strong>, saumon cru mariné au sel, au sucre et à l'aneth. À Paris, les maisons de référence sont <strong>Maison Barthouil</strong>, <strong>Kaviari</strong> et <strong>Petrossian</strong>. Pour une livraison au bureau, L'Écrin Traiteur prépare un plateau Saumon prêt à poser (saumon fumé, gravlax, blinis, crème citron-aneth), sur devis, livré dès 6h30.</p>

      <h2>Où trouver le meilleur saumon fumé à Paris ? Notre sélection</h2>

      <h3>1. Le plateau Saumon de L'Écrin Traiteur</h3>
      <p><strong>Transparence : c'est notre plateau, notre avis n'est donc pas neutre.</strong> Il réunit <strong>saumon fumé et saumon gravlax</strong>, avec des <strong>blinis</strong>, une <strong>crème citron-aneth</strong>, des <strong>câpres</strong>, des <strong>oignons rouges</strong> et du <strong>citron</strong>. Chacun compose sa bouchée au fil du service. Sa différence avec une boutique : il arrive dressé, prêt à poser sur le buffet, à l'heure demandée. La taille du plateau se cale sur votre effectif, d'où un prix sur devis.</p>

      <h3>2. Maison Barthouil, dans le Marais et rue Monge</h3>
      <p>Fondée en 1929 à Peyrehorade, dans les Landes, la maison fume son saumon au bois d'aulne pendant 20 à 25 heures. Ses deux boutiques parisiennes (41 rue Charlot, 3e, et 110 rue Monge, 5e) vendent saumons fumés et gravlax à la tranche, sauvages ou d'élevage.</p>

      <h3>3. Kaviari, huit boutiques dans Paris</h3>
      <p>Connue pour son caviar, la maison vend aussi des saumons fumés de Norvège, d'Écosse, d'Irlande et des îles Féroé dans ses « delikatessens » : rue François-Miron (4e), rue Cler et rue de Grenelle (7e), rue des Martyrs (9e), rue de la Convention (15e), rue Donizetti et rue de la Pompe (16e), avenue de Villiers (17e).</p>

      <h3>4. Petrossian, boulevard de La Tour-Maubourg</h3>
      <p>La maison, née en 1920, présente son « saumon fumé tranché main » comme son produit emblématique. Sa boutique historique est au 18 boulevard de La Tour-Maubourg, dans le 7e, près des Invalides.</p>

      <h2>Comment reconnaître un bon saumon fumé ou un bon gravlax ?</h2>
      <table>
        <thead>
          <tr><th>Critère</th><th>Ce qu'il faut regarder</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Le mot « saumon »</strong></td><td>En France, il est réservé au saumon de l'Atlantique (<em>Salmo salar</em>). Les saumons du Pacifique portent leur nom d'espèce : saumon kéta, saumon rouge, saumon argenté…</td></tr>
          <tr><td><strong>L'étiquette</strong></td><td>Elle doit indiquer le nom scientifique, le mode de production (pêche ou élevage), la zone de capture ou le pays d'élevage, et la mention « décongelé » le cas échéant (DGCCRF).</td></tr>
          <tr><td><strong>Le mot « sauvage »</strong></td><td>Souvent mis en avant ; d'après la DGCCRF, il désigne le plus souvent un saumon du Pacifique.</td></tr>
          <tr><td><strong>La tranche</strong></td><td>Chair brillante, ferme, sans eau dans l'emballage. Une tranche fine se pose mieux sur un blini.</td></tr>
          <tr><td><strong>Le gravlax</strong></td><td>Le saumon est mariné, pas cuit : le poisson cru ou mariné doit avoir été congelé à cœur (−20 °C pendant 24 h) contre le parasite anisakis, selon la réglementation européenne rappelée par l'Anses.</td></tr>
        </tbody>
      </table>

      <h2>Combien de saumon prévoir et quel budget pour 10, 20 ou 50 personnes ?</h2>
      <p>Pour un apéritif de fin de journée, comptez <strong>4 à 6 pièces par personne et par heure</strong> ; pour un cocktail, 6 à 8 pièces (apéritif), 12 à 14 (déjeunatoire), 16 à 18 (dînatoire). Le plateau de saumon fournit une partie de ces pièces ; le reste vient d'autres plateaux ou d'une formule cocktail. Le guide <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">combien de pièces par personne</a> donne le détail.</p>
      <p>Le plateau Saumon étant sur devis, voici les budgets calculés avec nos deux formules cocktail qui contiennent une bouchée de <strong>saumon mariné et betterave jaune</strong> : La Réception (12 pièces, 40,90 € HT par personne) et La Célébration (16 pièces, 51,90 € HT). La livraison coûte 29 € HT.</p>
      <table>
        <thead>
          <tr><th>Personnes</th><th>La Réception (12 pièces)</th><th>La Célébration (16 pièces)</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>10</strong></td><td>10 × 40,90 = 409 € + 29 € = <strong>438 € HT</strong></td><td>10 × 51,90 = 519 € + 29 € = <strong>548 € HT</strong></td></tr>
          <tr><td><strong>20</strong></td><td>20 × 40,90 = 818 € + 29 € = <strong>847 € HT</strong></td><td>20 × 51,90 = 1 038 € + 29 € = <strong>1 067 € HT</strong></td></tr>
          <tr><td><strong>50</strong></td><td>50 × 40,90 = 2 045 € + 29 € = <strong>2 074 € HT</strong></td><td>50 × 51,90 = 2 595 € + 29 € = <strong>2 624 € HT</strong></td></tr>
        </tbody>
      </table>
      <p>Les boissons s'ajoutent : 1 litre de jus pour 4 personnes et 1 bouteille d'eau de 75 cl pour 5. Pour un petit format, le grand plateau de 40 navettes (dont 20 au saumon fumé, cream cheese et aneth) coûte 124,90 € HT. Le minimum de commande est de 50 € HT ; à partir de 50 personnes, commandez 48 h à l'avance.</p>

      <h2>Avec L'Écrin Traiteur</h2>
      <ul>
        <li><strong>Le plateau</strong> : <a href="/creations/plateaux-aperitifs/go4">plateau Saumon</a> (saumon fumé, gravlax, blinis, crème citron-aneth, câpres, oignons rouges, citron), sur devis selon l'effectif.</li>
        <li><strong>Halal et sans porc</strong> : toute la carte est halal et sans porc, sans supplément ; aucune certification halal n'est revendiquée. Le <a href="/creations/plateaux-aperitifs/go2">plateau de charcuteries</a> (bœuf séché, bresaola, dinde et poulet fumés) complète le saumon sur un buffet. Le détail est dans notre guide <a href="/journal/traiteur-halal-entreprise-paris">traiteur halal en entreprise</a>.</li>
        <li><strong>Les formules</strong> : <a href="/creations/cocktails">cocktails</a> L'Invitation (29,90 €), La Réception (40,90 €) et La Célébration (51,90 € HT par personne).</li>
        <li><strong>Livraison</strong> dès 6h30 à Paris et en Île-de-France, 29 € HT à Paris et dans les communes proches, par notre propre équipe. Commande jusqu'à la veille 10h.</li>
        <li><strong>Devis</strong> sous 24 h, facture entreprise avec TVA.</li>
      </ul>
      <p>Tous nos prix sont sur la page <a href="/tarifs">tarifs</a>. Pour d'autres idées de bouchées, voir nos <a href="/journal/idees-pieces-cocktail-entreprise">idées de pièces cocktail</a>, ou <a href="/devis">demandez votre devis</a>.</p>

      <h2>Sources</h2>
      <ul>
        <li>Maison Barthouil : <a href="https://www.lebonbon.fr/paris/pepites/maison-barthouil-epicerie-sud-ouest-paris/" rel="noopener">Le Bonbon</a>, 26 octobre 2024, et <a href="https://www.barthouil.fr/" rel="noopener">site officiel</a>, consultés le 17 octobre 2026.</li>
        <li>Kaviari : <a href="https://kaviari.com/" rel="noopener">site officiel</a> (liste des delikatessens), consulté le 17 octobre 2026.</li>
        <li>Petrossian : <a href="https://www.petrossian.fr/en/pages/boutique-petrossian-rive-gauche" rel="noopener">page de la boutique Rive Gauche</a> et <a href="https://www.petrossian.fr/" rel="noopener">site officiel</a>, consultés le 17 octobre 2026.</li>
        <li>Étiquetage du saumon : DGCCRF, <a href="https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques-et-les-faq/saumon-comment-reconnaitre-un-bon-produit" rel="noopener">« Saumon : comment reconnaître un bon produit ? »</a>, 18 novembre 2024, consulté le 17 octobre 2026.</li>
        <li>Congélation du poisson cru ou mariné (règlement CE 853/2004) : <a href="https://www.anses.fr/fr/system/files/MIC2007sa0379.pdf" rel="noopener">avis de l'Afssa (Anses)</a>, 2007, consulté le 17 octobre 2026.</li>
        <li>Prix L'Écrin Traiteur : tarif en vigueur au 17 octobre 2026.</li>
      </ul>
    `,
    relatedProducts: [],
    faq: [
      { q: "Où acheter du bon saumon fumé à Paris pour une réception ?", a: "Les maisons de référence sont Maison Barthouil (rue Charlot et rue Monge), Kaviari (8 boutiques) et Petrossian (boulevard de La Tour-Maubourg). Pour un plateau dressé et livré au bureau, L'Écrin Traiteur prépare un plateau de saumon fumé et gravlax avec blinis et crème citron-aneth, sur devis, livré dès 6h30." },
      { q: "Quelle différence entre saumon fumé et gravlax ?", a: "Le saumon fumé est salé puis fumé. Le gravlax est un saumon cru mariné au sel, au sucre et à l'aneth, sans fumage. Les deux se servent en tranches fines, sur blini ou pain." },
      { q: "Combien coûte un cocktail avec du saumon pour 20 personnes ?", a: "Chez L'Écrin Traiteur, le cocktail La Réception (12 pièces dont une bouchée de saumon mariné et betterave jaune) coûte 40,90 € HT par personne : 818 € HT pour 20 personnes, 847 € HT avec la livraison." },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'plateau-asiatique-sushi-afterwork-entreprise-paris',
    titre: "Plateau asiatique pour un afterwork d'entreprise à Paris : où commander, combien en prévoir",
    metaTitle: "Plateau asiatique pour un afterwork : où commander à Paris",
    categorie: 'Conseils',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    extrait: "Makis, california rolls, spring rolls, gyozas, yakitori : où commander un plateau asiatique pour un afterwork à Paris, combien de pièces prévoir et quel budget pour 10, 20 ou 50 personnes.",
    img: '/plateau-asiatique.webp',
    enBref: [
      "Pour un afterwork de 2 heures, comptez 8 à 12 pièces par personne, soit 160 à 240 pièces pour 20 personnes.",
      "Chez L'Écrin Traiteur, le plateau Asiatique réunit makis, california rolls, spring rolls, gyozas et brochettes yakitori, avec sauce soja, gingembre et wasabi, sur devis ; la formule cocktail L'Invitation coûte 29,90 € HT par personne.",
      "Toute la carte de L'Écrin Traiteur est halal et sans porc, sans supplément, yakitori et gyozas compris ; aucune certification halal n'est revendiquée.",
      "Le poisson servi cru doit avoir été congelé à cœur (−20 °C pendant 24 h), selon la réglementation européenne rappelée par l'Anses.",
    ],
    contenu: `
      <p>Pour un <strong>afterwork d'entreprise à Paris</strong>, un plateau asiatique se commande chez un traiteur qui livre dressé à l'heure, plutôt qu'au restaurant : il faut 8 à 12 pièces par personne pour deux heures, et des pièces qui se mangent debout. L'Écrin Traiteur livre un plateau Asiatique (makis, california rolls, spring rolls, gyozas, yakitori), halal et sans porc, sur devis, à Paris et en Île-de-France. Pour goûter les références du genre, Charbon Kunitoraya (yakitori) et Gyoza Bar (gyozas) sont des adresses reconnues.</p>

      <h2>Où commander un plateau asiatique à Paris ? Notre sélection</h2>

      <h3>1. Le plateau Asiatique de L'Écrin Traiteur</h3>
      <p><strong>Transparence : c'est notre plateau, notre avis n'est donc pas neutre.</strong> Il réunit cinq recettes : <strong>makis</strong>, <strong>california rolls</strong>, <strong>spring rolls</strong>, <strong>gyozas</strong> et <strong>brochettes yakitori</strong>, avec <strong>sauce soja, gingembre et wasabi</strong>. Tout se prend du bout des doigts. Comme toute notre carte, il est <strong>halal et sans porc</strong>, ce qui compte pour des gyozas, qui peuvent être au porc ailleurs. Il est livré dressé, à l'heure demandée, sur devis selon l'effectif.</p>

      <h3>2. Charbon Kunitoraya, pour le yakitori</h3>
      <p>Au 5 rue Villedo, dans le 1er, ce restaurant figure dans la sélection du Guide Michelin. Sa spécialité : les yakitori de poulet de Bresse. Une adresse pour un dîner d'équipe, pas pour une livraison au bureau.</p>

      <h3>3. Gyoza Bar, pour les gyozas</h3>
      <p>Présenté par Le Bonbon comme le premier restaurant parisien spécialisé dans les gyozas, il a deux adresses : 56 passage des Panoramas (2e) et 38 rue de Saintonge (3e). Les gyozas y sont faits maison, cuits à la vapeur puis grillés.</p>

      <h3>4. Sushi Shop, pour des boîtes de sushis livrées</h3>
      <p>L'enseigne livre des plateaux de sushis commandés en ligne, par exemple une box de 23 pièces. Pratique pour un petit groupe ; pour 30 ou 50 personnes, il faut multiplier les boîtes et les ouvrir une à une.</p>

      <h2>Comment reconnaître un bon plateau asiatique ?</h2>
      <table>
        <thead>
          <tr><th>Critère</th><th>Ce qu'il faut regarder</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Le poisson cru</strong></td><td>Il doit avoir été congelé à cœur, −20 °C pendant 24 h, contre le parasite anisakis (règlement européen 853/2004). Demandez-le à votre traiteur.</td></tr>
          <tr><td><strong>Le riz</strong></td><td>Tiède à température ambiante, grains distincts, roulé serré : un maki ne doit pas se défaire dans la sauce.</td></tr>
          <tr><td><strong>Le mélange</strong></td><td>Des pièces froides (makis, california rolls) et des pièces cuites (gyozas, yakitori, spring rolls) : tout le monde ne mange pas de poisson cru.</td></tr>
          <tr><td><strong>La viande</strong></td><td>Les gyozas peuvent être au porc. Vérifiez la composition si des invités ne mangent pas de porc.</td></tr>
          <tr><td><strong>Le format</strong></td><td>Une bouchée par pièce, sans couvert. Les sauces en coupelles, pas versées sur le plateau.</td></tr>
        </tbody>
      </table>

      <h2>Combien de pièces prévoir et quel budget pour 10, 20 ou 50 personnes ?</h2>
      <p>Pour un apéritif de fin de journée, comptez <strong>4 à 6 pièces par personne et par heure</strong>. Un afterwork de 2 heures demande donc 8 à 12 pièces par personne ; s'il remplace le dîner, passez à 16 à 18 pièces. Le plateau Asiatique étant sur devis, le budget ci-dessous prend notre formule cocktail <strong>L'Invitation</strong> (8 pièces salées et sucrées, 29,90 € HT par personne) comme repère chiffré. La livraison coûte 29 € HT.</p>
      <table>
        <thead>
          <tr><th>Personnes</th><th>Pièces pour 2 heures</th><th>L'Invitation, livraison comprise</th><th>Boissons</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>10</strong></td><td>80 à 120</td><td>10 × 29,90 = 299 € + 29 € = <strong>328 € HT</strong></td><td>3 L de jus, 2 bouteilles d'eau</td></tr>
          <tr><td><strong>20</strong></td><td>160 à 240</td><td>20 × 29,90 = 598 € + 29 € = <strong>627 € HT</strong></td><td>5 L de jus, 4 bouteilles d'eau</td></tr>
          <tr><td><strong>50</strong></td><td>400 à 600</td><td>50 × 29,90 = 1 495 € + 29 € = <strong>1 524 € HT</strong></td><td>13 L de jus, 10 bouteilles d'eau</td></tr>
        </tbody>
      </table>
      <p>Repère boissons : 1 litre de jus pour 4 personnes, 1 bouteille d'eau de 75 cl pour 5. Le jus Alain Milliat coûte à partir de 9,50 € HT le litre. Le plateau Asiatique s'ajoute à la formule ou la remplace en partie : le devis donne le chiffre exact. Minimum de commande 50 € HT ; à partir de 50 personnes, commandez 48 h à l'avance. D'autres formats sont dans notre guide <a href="/journal/idees-afterwork-entreprise-formats-budget">idées d'afterwork</a>.</p>

      <h2>Avec L'Écrin Traiteur</h2>
      <ul>
        <li><strong>Le plateau</strong> : <a href="/creations/plateaux-aperitifs/si1">plateau Asiatique</a> (makis, california rolls, spring rolls, gyozas, brochettes yakitori, sauce soja, gingembre et wasabi), sur devis.</li>
        <li><strong>Halal et sans porc</strong> : toute la carte est halal et sans porc, sans supplément ; aucune certification halal n'est revendiquée. Options végétariennes, vegan et sans gluten au même prix, à préciser au devis.</li>
        <li><strong>À côté</strong> : les <a href="/creations/plateaux-aperitifs">plateaux apéritifs</a> (mini burgers, wraps, crudités et dips) et les <a href="/creations/cocktails">formules cocktail</a> de 8, 12 ou 16 pièces.</li>
        <li><strong>Livraison</strong> dès 6h30 à Paris et en Île-de-France, 29 € HT à Paris et dans les communes proches. Commande jusqu'à la veille 10h.</li>
        <li><strong>Devis</strong> sous 24 h, facture entreprise avec TVA.</li>
      </ul>
      <p>Tous nos prix sont sur la page <a href="/tarifs">tarifs</a>. Pour organiser le reste de la soirée, voir notre guide <a href="/journal/traiteur-afterwork-pot-depart-entreprise-paris">traiteur pour afterwork et pot de départ</a>, ou <a href="/devis">demandez votre devis</a>.</p>

      <h2>Sources</h2>
      <ul>
        <li>Charbon Kunitoraya : <a href="https://guide.michelin.com/fr/fr/ile-de-france/paris/restaurant/kunitoraya" rel="noopener">Guide Michelin</a>, consulté le 17 octobre 2026.</li>
        <li>Gyoza Bar : <a href="https://www.lebonbon.fr/paris/les-tops-food-et-drink/le-top-des-meilleurs-gyozas-parisiens/" rel="noopener">Le Bonbon</a>, 14 août 2024, et <a href="https://www.pariszigzag.fr/bar-restaurant/restaurant/gyoza-bar-passage-des-panoramas/" rel="noopener">Paris ZigZag</a>, mis à jour le 23 décembre 2023, consultés le 17 octobre 2026.</li>
        <li>Sushi Shop : <a href="https://www.sushishop.fr/" rel="noopener">site officiel</a>, consulté le 17 octobre 2026.</li>
        <li>Congélation du poisson cru (règlement CE 853/2004) : <a href="https://www.anses.fr/fr/system/files/MIC2007sa0379.pdf" rel="noopener">avis de l'Afssa (Anses)</a>, 2007, consulté le 17 octobre 2026.</li>
        <li>Prix et quantités L'Écrin Traiteur : tarif en vigueur au 17 octobre 2026.</li>
      </ul>
    `,
    relatedProducts: [],
    faq: [
      { q: "Combien de pièces asiatiques prévoir par personne pour un afterwork ?", a: "4 à 6 pièces par personne et par heure : 8 à 12 pièces pour un afterwork de 2 heures, 16 à 18 s'il remplace le dîner. Pour 20 personnes, cela fait 160 à 240 pièces." },
      { q: "Peut-on avoir des gyozas et des yakitori halal pour un afterwork à Paris ?", a: "Oui. Chez L'Écrin Traiteur, toute la carte est halal et sans porc, sans supplément, y compris le plateau Asiatique (makis, california rolls, spring rolls, gyozas, yakitori). Aucune certification halal n'est revendiquée." },
      { q: "Quel budget pour un afterwork de 20 personnes ?", a: "Avec la formule cocktail L'Invitation de L'Écrin Traiteur (8 pièces, 29,90 € HT par personne) : 598 € HT, 627 € HT avec la livraison, hors boissons. Le plateau Asiatique est sur devis." },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'meilleur-buffet-mediterraneen-mezze-entreprise-paris',
    titre: "Buffet méditerranéen pour l'entreprise à Paris : les meilleures adresses de mezze et notre formule",
    metaTitle: "Buffet méditerranéen à Paris : meilleures adresses de mezze",
    categorie: 'Inspirations',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    extrait: "Noura, Mavrommatis, Liza : les adresses de mezze reconnues à Paris, notre buffet Le Méditerranéen à 37,50 € HT par personne, et le budget pour 10, 20 ou 50 personnes.",
    img: '/buffet-mediterraneen.webp',
    enBref: [
      "À Paris, trois maisons font référence pour les mezze : Noura (cuisine libanaise depuis 1989, avenue Marceau), Mavrommatis (cuisine grecque depuis 1981) et Liza (cuisine libanaise, rue de la Banque).",
      "Chez L'Écrin Traiteur, le buffet à partager Le Méditerranéen coûte 37,50 € HT par personne : salade grecque, salade tomates-mozzarella, falafels et crème tahini, navette saumon, caviar d'aubergine, fromages affinés, et deux desserts.",
      "Toute la carte de L'Écrin Traiteur est halal et sans porc, sans supplément ; aucune certification halal n'est revendiquée.",
      "Pour 20 personnes, Le Méditerranéen revient à 789 € HT, livraison et reprise de la vaisselle (39 € à Paris, dans le 92 et le 94) comprises.",
    ],
    contenu: `
      <p>Pour un <strong>déjeuner d'équipe à Paris</strong>, un buffet méditerranéen se pose au centre de la table et chacun se sert : salades, falafels, houmous ou caviar d'aubergine, fromages. Les adresses de mezze reconnues à Paris sont <strong>Noura</strong>, <strong>Mavrommatis</strong> et <strong>Liza</strong>. Pour une livraison au bureau, L'Écrin Traiteur propose <strong>Le Méditerranéen</strong>, un buffet à partager à <strong>37,50 € HT par personne</strong>, halal et sans porc, livré dès 6h30.</p>

      <h2>Où trouver les meilleurs mezze à Paris ? Notre sélection</h2>

      <h3>1. Le Méditerranéen de L'Écrin Traiteur</h3>
      <p><strong>Transparence : c'est notre formule, notre avis n'est donc pas neutre.</strong> Six recettes salées : <strong>salade grecque</strong>, <strong>salade de tomates et mozzarella au basilic</strong>, <strong>falafels en brochette et crème tahini citronnée</strong>, <strong>navette saumon et cream cheese</strong>, <strong>caviar d'aubergine et pains grillés</strong>, <strong>plateau de fromages affinés</strong>. Deux desserts : <strong>brownie Signature</strong> et <strong>verrine citron et lemon curd</strong>. Le tout arrive sur planches de bois et vaisselle réutilisable, récupérées après le repas.</p>
      <p>Deux autres buffets à partager complètent la carte : <strong>Le Parisien</strong> (37,90 € HT), avec club sandwich blanc de poulet, mini baguette poulet curry et charcuteries, et <strong>Le Jardin</strong> (34,90 € HT), 100 % végétarien, avec houmous et pains grillés, salade tomates-mozzarella et pain brioché au pesto.</p>

      <h3>2. Noura, avenue Marceau</h3>
      <p>Maison de cuisine libanaise installée depuis 1989, Noura sert ses mezze à partager à la brasserie du 27 avenue Marceau (16e) et organise des événements d'entreprise, dans ses salons ou chez le client. Sa maison traiteur est au 21 avenue Marceau.</p>

      <h3>3. Mavrommatis, la cuisine grecque</h3>
      <p>Depuis 1981, la maison Mavrommatis propose une cuisine grecque, avec un traiteur frais (entrées, mézédès, plats) et un service de réceptions. Sa boutique traiteur et épicerie est au 260 rue du Faubourg-Saint-Honoré (8e), ouverte tous les jours.</p>

      <h3>4. Liza, rue de la Banque</h3>
      <p>Restaurant de cuisine libanaise au 14 rue de la Banque (2e), avec une seconde adresse, Liza Panache, rue du Faubourg-Montmartre (9e). Il livre 7 jours sur 7.</p>

      <h2>Comment reconnaître un bon buffet méditerranéen ?</h2>
      <table>
        <thead>
          <tr><th>Critère</th><th>Ce qu'il faut regarder</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Les herbes</strong></td><td>Des herbes fraîches, basilic, persil, menthe, plutôt que des salades à peine parfumées.</td></tr>
          <tr><td><strong>Les falafels</strong></td><td>Croustillants dehors, moelleux dedans, avec une sauce au tahini pour les tremper.</td></tr>
          <tr><td><strong>L'équilibre</strong></td><td>Des crudités et salades, une pièce consistante (falafels, navettes), du fromage, et un ou deux desserts.</td></tr>
          <tr><td><strong>Les régimes</strong></td><td>Un buffet méditerranéen se prête au végétarien. Vérifiez que la viande, s'il y en a, est sans porc si une partie de l'équipe n'en mange pas.</td></tr>
          <tr><td><strong>Le dressage</strong></td><td>Des planches et des plats qui se posent tels quels sur la table, sans barquettes à ouvrir.</td></tr>
        </tbody>
      </table>
      <p>Pour savoir si le buffet ou le cocktail convient mieux à votre moment, voir notre guide <a href="/journal/buffet-a-partager-ou-cocktail-entreprise-paris">buffet à partager ou cocktail</a>. Pour les grammages, voir <a href="/journal/buffet-froid-entreprise-quantites-par-personne">les quantités d'un buffet froid</a>.</p>

      <h2>Quel budget pour 10, 20 ou 50 personnes ?</h2>
      <p>Nos buffets à partager sont facturés par personne. Le calcul ajoute la livraison avec reprise de la vaisselle réutilisable, 39 € HT en une ligne à Paris, dans le 92 et le 94 (ailleurs, prix de la zone plus 19 € HT).</p>
      <table>
        <thead>
          <tr><th>Personnes</th><th>Le Méditerranéen (37,50 €)</th><th>Le Parisien (37,90 €)</th><th>Le Jardin (34,90 €)</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>10</strong></td><td>375 € + 39 € = <strong>414 € HT</strong></td><td>379 € + 39 € = <strong>418 € HT</strong></td><td>349 € + 39 € = <strong>388 € HT</strong></td></tr>
          <tr><td><strong>20</strong></td><td>750 € + 39 € = <strong>789 € HT</strong></td><td>758 € + 39 € = <strong>797 € HT</strong></td><td>698 € + 39 € = <strong>737 € HT</strong></td></tr>
          <tr><td><strong>50</strong></td><td>1 875 € + 39 € = <strong>1 914 € HT</strong></td><td>1 895 € + 39 € = <strong>1 934 € HT</strong></td><td>1 745 € + 39 € = <strong>1 784 € HT</strong></td></tr>
        </tbody>
      </table>
      <p>Les boissons s'ajoutent : le jus Alain Milliat coûte à partir de 9,50 € HT le litre. Minimum de commande 50 € HT ; à partir de 50 personnes, commandez 48 h à l'avance.</p>

      <h2>Avec L'Écrin Traiteur</h2>
      <ul>
        <li><strong>Les buffets</strong> : <a href="/creations/a-partager">buffets à partager</a> Le Méditerranéen (37,50 €), Le Parisien (37,90 €) et Le Jardin (34,90 € HT par personne).</li>
        <li><strong>Halal et sans porc</strong> : toute la carte est halal et sans porc, sans supplément ; aucune certification halal n'est revendiquée. Végétarien, vegan et sans gluten au même prix, à préciser au devis. Voir notre guide <a href="/journal/menu-inclusif-entreprise-halal-vegetarien-sans-gluten">menu inclusif</a>.</li>
        <li><strong>Présentation</strong> : planches de bois et vaisselle réutilisable, sans jetable, récupérées après l'événement.</li>
        <li><strong>Livraison</strong> dès 6h30 à Paris et en Île-de-France, 29 € HT à Paris et dans les communes proches. Commande jusqu'à la veille 10h.</li>
        <li><strong>Devis</strong> sous 24 h, facture entreprise avec TVA.</li>
      </ul>
      <p>Les mezze se composent sur la page <a href="/creations/a-partager">menus à partager</a>. Tous nos prix sont sur la page <a href="/tarifs">tarifs</a>. Pour organiser l'ensemble, voir notre <a href="/journal/buffet-entreprise-guide-complet-paris">guide du buffet d'entreprise</a>, ou <a href="/devis">demandez votre devis</a>.</p>

      <h2>Sources</h2>
      <ul>
        <li>Noura : <a href="https://www.noura.com/" rel="noopener">site officiel</a>, consulté le 17 octobre 2026.</li>
        <li>Mavrommatis : <a href="https://www.mavrommatis.com/" rel="noopener">site officiel</a>, consulté le 17 octobre 2026.</li>
        <li>Liza : <a href="https://www.restaurant-liza.com/" rel="noopener">site officiel</a>, consulté le 17 octobre 2026.</li>
        <li>Prix L'Écrin Traiteur : tarif en vigueur au 17 octobre 2026.</li>
      </ul>
    `,
    relatedProducts: [],
    faq: [
      { q: "Où commander un buffet de mezze pour une entreprise à Paris ?", a: "Noura (cuisine libanaise, avenue Marceau) et Mavrommatis (cuisine grecque, rue du Faubourg-Saint-Honoré) proposent des réceptions. L'Écrin Traiteur livre au bureau le buffet à partager Le Méditerranéen, à 37,50 € HT par personne, dès 6h30." },
      { q: "Combien coûte un buffet méditerranéen pour 20 personnes ?", a: "Chez L'Écrin Traiteur, Le Méditerranéen coûte 37,50 € HT par personne : 750 € HT pour 20 personnes, 789 € HT avec la livraison et la reprise de la vaisselle (39 € à Paris, dans le 92 et le 94)." },
      { q: "Le buffet méditerranéen est-il halal et végétarien ?", a: "Toute la carte de L'Écrin Traiteur est halal et sans porc, sans supplément ; aucune certification halal n'est revendiquée. Le Méditerranéen contient une navette au saumon ; pour un buffet 100 % végétarien, choisissez Le Jardin, à 34,90 € HT par personne." },
    ],
  },
]
