// Lot du 28 octobre 2026 (demande de Ramy : « halal d'entreprise, on met le paquet », quantités des régimes,
// petit-déjeuner pour 100 personnes, café d'accueil). Six guides chiffrés, sans nom de fournisseur ni de client.
// Chiffres vérifiés dans le code du site (calculsPrix.js, app/creations/cocktails/data.js, a-partager/data.js) et FICHE-VERITE.md :
//   - petit-déjeuner : recette de l'OS reproduite dans calculsPrix.js (pdj(100) = 7 plateaux de 30, 90 madeleines, 2 cakes,
//     100 brochettes, 20 L de jus, 17 thermos dont 14 café et 3 thé) ; seul le Classique est chiffré (n × 8 € + 29 €) ;
//     le complet reste sur devis (décision de Ramy, 21 et 24/10/2026) ;
//   - café d'accueil : plateau de 30 mini-viennoiseries 48,90 € HT, thermos d'1 L 19,50 € HT, livraison 29 € HT ;
//   - cocktail : 29,90 / 40,90 / 51,90 € HT par personne ; boissons : 1 L de jus pour 4 (9,50 €), 1 Evian 75 cl pour 5
//     (4,80 €), Chardonnay 0 % 16,90 € HT la bouteille pour 6 flûtes ; maître d'hôtel 250 € HT les 6 h pour 20 à 40 invités debout ;
//   - menus à partager 34,90 / 37,50 / 37,90 € HT par personne, calibrés pour 8 à 12 convives ;
//   - régimes : toute la carte salée est halal et sans porc, sans alcool ; options végétariennes, vegan et sans gluten précisées
//     au devis avec le nombre de personnes concernées ; tableau des allergènes joint au devis et au bon de livraison ;
//     aucune certification halal n'est revendiquée (FICHE-VERITE.md) ; aucune affirmation pièce par pièce sur le vegan et le sans gluten
//     (confirmation écrite de l'artisan à obtenir avant de la publier).

export const HALAL_EFFECTIFS_ARTICLES = [
  /* ───────── 1 : petit-déjeuner pour 100 personnes ───────── */
  {
    slug: 'petit-dejeuner-pour-100-personnes-quantites-budget',
    titre: 'Petit-déjeuner pour 100 personnes : quantités exactes, budget et organisation',
    metaTitle: 'Petit-déjeuner pour 100 personnes : quantités et budget',
    categorie: 'Conseils',
    date: '28 octobre 2026',
    isoDate: '2026-10-28',
    extrait: 'Pour 100 personnes : 200 mini-viennoiseries, 90 madeleines et 2 cakes, 100 brochettes, 20 L de jus, 17 thermos. Classique : 829 € HT livré.',
    img: '/hero-petitdej.webp',
    enBref: [
      '200 mini-viennoiseries (7 plateaux de 30), 90 madeleines, 2 cakes, 100 brochettes de fruits, 100 verres de jus (20 L) et 17 thermos.',
      'Formule Classique : 829 € HT livraison comprise (100 × 8 € + 29 € de livraison), soit 8,29 € HT par personne.',
      'Le petit-déjeuner complet, avec madeleines, cakes, brochettes et thé, se chiffre sur devis.',
      'À partir de 50 personnes, commandez 48 h à l\'avance ; à 100 personnes, prévoyez plusieurs points de service.',
    ],
    contenu: `
      <p>Chez L'Écrin Traiteur, un petit-déjeuner pour 100 personnes demande <strong>200 mini-viennoiseries, 90 madeleines et 2 cakes, 100 brochettes de fruits, 20 litres de jus et 17 thermos</strong>. En formule Classique, il revient à <strong>829 € HT livraison comprise</strong> ; le petit-déjeuner complet se chiffre sur devis. À cette taille, la commande se fait <strong>48 h à l'avance</strong>.</p>

      <h2>Quelles quantités pour un petit-déjeuner de 100 personnes ?</h2>
      <p>La règle reste de 2 mini-viennoiseries par personne : 200 pièces sont nécessaires, soit 7 plateaux de 30 (210 pièces livrées). Au-delà de 40 personnes, 2 cakes maison remplacent 10 madeleines.</p>
      <table>
        <thead><tr><th>Produit</th><th>Règle</th><th>Pour 100 personnes</th></tr></thead>
        <tbody>
          <tr><td>Mini-viennoiseries</td><td>2 par personne</td><td>200 pièces, soit 7 plateaux de 30</td></tr>
          <tr><td>Madeleines</td><td>1 par personne, moins 5 par cake</td><td>90 pièces (1 coffret de 50 et 2 de 20)</td></tr>
          <tr><td>Cakes maison</td><td>2 au-delà de 40 personnes</td><td>2 cakes de 5 à 6 parts</td></tr>
          <tr><td>Brochettes de fruits frais</td><td>1 par personne</td><td>100 brochettes</td></tr>
          <tr><td>Jus</td><td>1 verre de 20 cl par personne</td><td>20 litres (10 d'orange, 10 de pomme)</td></tr>
          <tr><td>Café et thé</td><td>1 thermos pour 6 personnes, 4 café pour 1 thé</td><td>17 thermos (14 café, 3 thé)</td></tr>
        </tbody>
      </table>

      <h2>Combien coûte un petit-déjeuner pour 100 personnes ?</h2>
      <p>La formule Classique (viennoiseries, jus, café, fruits), à 8 € HT par personne, revient à <strong>829 € HT</strong> livraison comprise (100 × 8 € + 29 €). Le petit-déjeuner complet, avec les quantités du tableau ci-dessus, se chiffre sur devis.</p>
      <table>
        <thead><tr><th>Effectif</th><th>Classique HT, livraison comprise</th><th>Par personne</th></tr></thead>
        <tbody>
          <tr><td>20 personnes</td><td>189 €</td><td>9,45 €</td></tr>
          <tr><td>50 personnes</td><td>429 €</td><td>8,58 €</td></tr>
          <tr><td><strong>100 personnes</strong></td><td><strong>829 €</strong></td><td><strong>8,29 €</strong></td></tr>
        </tbody>
      </table>
      <p>Le prix par personne baisse avec l'effectif parce que la livraison de 29 € HT se répartit sur davantage de convives. Voir aussi <a href="/journal/petit-dejeuner-pour-50-personnes-quantites-budget">50 personnes</a> et <a href="/journal/petit-dejeuner-pour-20-personnes-quantites-budget">20 personnes</a>.</p>

      <h2>Pourquoi commander 48 h à l'avance ?</h2>
      <p>À partir de 50 personnes, les quantités de produits frais à préparer et à livrer justifient 48 h de préavis, contre la veille avant 10h pour les effectifs plus petits. Confirmez l'effectif, l'adresse, l'étage et l'heure de livraison à ce moment-là. La livraison démarre à 6h30.</p>

      <h2>Comment éviter la file d'attente à 100 personnes ?</h2>
      <p>Une seule table pour 100 personnes crée la file. Répartissez le petit-déjeuner en plusieurs points de service, par exemple quatre points pour 25 personnes chacun, avec à chaque point un thermos de café, un de thé et une carafe de jus, et les mini-viennoiseries en libre-service plutôt que servies à l'assiette. Les 17 thermos se divisent alors naturellement : 4 thermos par point, avec un thermos de plus pour absorber les reprises.</p>
      <ul>
        <li><strong>Heure :</strong> un thermos de café reste chaud 6 heures, voire 8 heures après la livraison : on peut tout installer avant l'arrivée des premiers participants.</li>
        <li><strong>Passage :</strong> placez les boissons chaudes loin des viennoiseries, pour que les deux files ne se croisent pas.</li>
        <li><strong>Marge :</strong> si l'effectif peut bouger, ajoutez un huitième plateau de 30 pièces (48,90 € HT) plutôt que de recompter.</li>
      </ul>

      <h2>Quels régimes prévoir ?</h2>
      <p>Les brochettes de fruits sont vegan et sans gluten, les mini-viennoiseries pur beurre conviennent aux végétariens, et le banana bread sans gluten est à 26,90 € HT pour 6 à 8 personnes. À 100 personnes, il y a presque toujours des convives concernés : demandez le régime à l'inscription et précisez le nombre de personnes à la demande de devis. Pour le calcul des pièces par régime, voir <a href="/journal/pieces-vegetariennes-vegan-sans-gluten-cocktail-buffet-quantites">les quantités végétariennes, vegan et sans gluten</a>.</p>

      <h2>Comment commander ?</h2>
      <p>Demandez un <a href="/devis">devis</a> sous 24 h, en indiquant l'effectif, la date, l'adresse et l'heure d'arrivée des premiers participants. Livraison dès 6h30 à Paris et en Île-de-France, facturation entreprise avec TVA. Les formules sont sur notre page <a href="/creations/petits-dejeuners-et-pauses">petit-déjeuner d'entreprise à Paris</a>, et le budget par effectif dans le guide <a href="/journal/budget-petit-dejeuner-equipe-personnes">combien coûte un petit-déjeuner d'entreprise</a>.</p>
      <p><em>Tarifs L'Écrin Traiteur, octobre 2026, en euros hors taxes. Calcul : produits + une livraison de 29 € HT, Paris et communes proches. Minimum de commande 50 € HT.</em></p>
    `,
    faq: [
      { q: 'Combien de viennoiseries pour 100 personnes ?', a: 'L\'Écrin Traiteur prévoit 200 mini-viennoiseries, à raison de 2 par personne, soit 7 plateaux de 30 (210 pièces livrées).' },
      { q: 'Combien de thermos de café et de thé pour 100 personnes ?', a: '17 thermos d\'1 litre : 14 de café et 3 de thé, à raison d\'un thermos pour 6 personnes, avec 4 café pour 1 thé.' },
      { q: 'Combien coûte un petit-déjeuner pour 100 personnes ?', a: 'La formule Classique revient à 829 € HT livraison comprise (100 × 8 € + 29 € de livraison). Le petit-déjeuner complet décrit ici se chiffre sur devis.' },
      { q: 'Faut-il commander plus tôt pour 100 personnes ?', a: 'Oui : à partir de 50 personnes, prévoyez 48 h. La commande reste possible jusqu\'à la veille à 10h en dessous de ce seuil.' },
      { q: 'Combien de jus pour 100 personnes ?', a: '20 litres, soit un verre de 20 cl par personne : 10 litres de jus d\'orange et 10 litres de jus de pomme.' },
      { q: 'Comment organiser le service à 100 personnes ?', a: 'Répartissez le petit-déjeuner en plusieurs points de service, par exemple quatre points pour 25 personnes, avec boissons chaudes et jus à chaque point, et mini-viennoiseries en libre-service.' },
    ],
  },

  /* ───────── 2 : café d'accueil ───────── */
  {
    slug: 'cafe-d-accueil-entreprise-seminaire-quantites-budget',
    titre: 'Café d\'accueil en entreprise : quoi servir, quelles quantités, quel budget',
    metaTitle: 'Café d\'accueil en entreprise : quantités et budget',
    categorie: 'Conseils',
    date: '28 octobre 2026',
    isoDate: '2026-10-28',
    extrait: 'Un café d\'accueil pour un séminaire ou une assemblée : 1 thermos pour 6 personnes, 2 mini-viennoiseries chacune. 20, 50 ou 100 personnes, budget HT.',
    img: '/bois-thermos-cafe.webp',
    enBref: [
      'Pour un café d\'accueil : 1 thermos d\'1 litre pour 6 personnes (4 café pour 1 thé) et 2 mini-viennoiseries par personne.',
      'Viennoiseries et café livrés : 204,80 € HT pour 20 personnes, 400,10 € HT pour 50 et 702,80 € HT pour 100, livraison de 29 € HT comprise.',
      'Le café reste chaud 6 heures, voire 8 heures après la livraison : tout est installé avant l\'arrivée des participants.',
      'Livraison dès 6h30 ; commande jusqu\'à la veille 10h, 48 h à l\'avance à partir de 50 personnes.',
    ],
    contenu: `
      <p>Un <strong>café d'accueil</strong> est le premier moment d'une journée de séminaire, de formation, d'assemblée générale ou de conférence : les participants arrivent, prennent un café, se saluent, puis entrent en salle. Il faut du café et du thé chauds, quelque chose à manger en deux bouchées, et que tout soit prêt <strong>avant</strong> l'arrivée du premier invité. Chez L'Écrin Traiteur, la base est <strong>1 thermos d'1 litre pour 6 personnes et 2 mini-viennoiseries par personne</strong>.</p>

      <h2>Que servir à un café d'accueil ?</h2>
      <ul>
        <li><strong>Du café et du thé en thermos :</strong> 1 thermos d'1 litre pour 6 personnes, à raison de 4 thermos de café pour 1 de thé. Un thermos sert 6 à 8 tasses et coûte 19,50 € HT.</li>
        <li><strong>Des mini-viennoiseries pur beurre :</strong> 2 par personne, en plateaux de 30 pièces à 48,90 € HT. Elles se mangent debout, sans assiette ni couteau.</li>
        <li><strong>Du jus, en option :</strong> un verre de 20 cl par personne, à ajouter si l'accueil dure ou si la journée commence tôt.</li>
        <li><strong>Des brochettes de fruits frais, en option :</strong> vegan et sans gluten, elles couvrent les régimes sans effort.</li>
      </ul>

      <h2>Combien commander pour 20, 50 ou 100 personnes ?</h2>
      <table>
        <thead><tr><th>Effectif</th><th>Mini-viennoiseries</th><th>Thermos</th><th>Viennoiseries + café</th><th>Livraison</th><th>Total HT</th></tr></thead>
        <tbody>
          <tr><td><strong>20</strong></td><td>40 (2 plateaux)</td><td>4 (3 café, 1 thé)</td><td>175,80 €</td><td>29 €</td><td><strong>204,80 €</strong></td></tr>
          <tr><td><strong>50</strong></td><td>100 (4 plateaux)</td><td>9 (7 café, 2 thé)</td><td>371,10 €</td><td>29 €</td><td><strong>400,10 €</strong></td></tr>
          <tr><td><strong>100</strong></td><td>200 (7 plateaux)</td><td>17 (14 café, 3 thé)</td><td>673,80 €</td><td>29 €</td><td><strong>702,80 €</strong></td></tr>
        </tbody>
      </table>
      <p>Le calcul est celui du catalogue : plateaux de 30 mini-viennoiseries à 48,90 € HT, thermos à 19,50 € HT, une seule livraison de 29 € HT. Hors livraison, cela fait 8,79 € HT par personne à 20, 7,42 € à 50 et 6,74 € à 100. Pour le petit-déjeuner complet, avec madeleines, cakes, brochettes et jus, voir <a href="/journal/de-quoi-se-compose-petit-dejeuner-entreprise">de quoi se compose un petit-déjeuner d'entreprise</a> ; il se chiffre sur devis.</p>

      <h2>À quelle heure faire livrer un café d'accueil ?</h2>
      <p>La livraison démarre à 6h30. Le café reste chaud 6 heures, voire 8 heures après la livraison : un café livré à 7h30 pour un accueil à 8h30 est encore chaud en début d'après-midi. Demandez la livraison une heure avant l'arrivée du premier participant, pour installer sans précipitation. Le détail horaire est dans <a href="/journal/combien-de-temps-cafe-chaud-thermos-reunion">combien de temps un café reste chaud dans un thermos</a>.</p>

      <h2>Comment organiser l'accueil pour qu'il ne crée pas de file ?</h2>
      <ul>
        <li><strong>Un point de service pour 25 personnes environ :</strong> au-delà, répartissez les thermos sur plusieurs tables.</li>
        <li><strong>Les boissons chaudes loin des viennoiseries :</strong> les deux files ne se croisent pas.</li>
                <li><strong>L'accueil hors de la salle,</strong> dans le hall ou à l'entrée : la réunion démarre à l'heure.</li>
      </ul>

      <h2>Combien de temps prévoir ?</h2>
      <p>Prévoyez le café d'accueil sur la demi-heure qui précède le début de la séance, et laissez les thermos accessibles pendant la matinée : ils restent chauds. À une journée entière, le déjeuner prend le relais ; voir <a href="/creations/plateaux-repas">les plateaux repas</a> ou <a href="/creations/a-partager">les menus à partager</a>.</p>

      <h2>Comment commander ?</h2>
      <p>Demandez un <a href="/devis">devis</a> sous 24 h, en indiquant l'effectif, la date, l'adresse, l'heure d'arrivée des participants et les régimes. Livraison dès 6h30 à Paris et en Île-de-France, facturation entreprise avec TVA, <a href="/creations/petits-dejeuners-et-pauses">petit-déjeuner d'entreprise</a> et <a href="/creations/boissons/thermos-cafe">thermos de café</a> au catalogue.</p>
      <p><em>Tarifs L'Écrin Traiteur, octobre 2026, en euros hors taxes. Calcul : produits + une livraison de 29 € HT, Paris et communes proches. Minimum de commande 50 € HT.</em></p>
    `,
    faq: [
      { q: 'Combien de café pour un café d\'accueil de 50 personnes ?', a: '9 thermos d\'1 litre, dont 7 de café et 2 de thé, à raison d\'un thermos pour 6 personnes.' },
      { q: 'Combien de viennoiseries par personne pour un café d\'accueil ?', a: '2 mini-viennoiseries par personne chez L\'Écrin Traiteur, vendues en plateaux de 30 pièces. Pour 20 personnes, 2 plateaux suffisent.' },
      { q: 'Combien coûte un café d\'accueil pour 20 personnes ?', a: 'Les viennoiseries et le café reviennent à 204,80 € HT livraison comprise : 2 plateaux de mini-viennoiseries, 4 thermos et 29 € HT de livraison.' },
      { q: 'Le café reste-t-il chaud pendant tout l\'accueil ?', a: 'Oui : le café en thermos reste chaud 6 heures, voire 8 heures après la livraison. Il est installé avant l\'arrivée des participants.' },
      { q: 'Jusqu\'à quand commander un café d\'accueil ?', a: 'Jusqu\'à la veille à 10h, avec une livraison dès 6h30. À partir de 50 personnes, commandez 48 h à l\'avance.' },
      { q: 'Peut-on ajouter du jus et des fruits ?', a: 'Oui : un verre de jus de 20 cl par personne et une brochette de fruits frais par personne (vegan et sans gluten) s\'ajoutent au devis.' },
    ],
  },

  /* ───────── 3 : quantités végétarien / vegan / sans gluten ───────── */
  {
    slug: 'pieces-vegetariennes-vegan-sans-gluten-cocktail-buffet-quantites',
    titre: 'Pièces végétariennes, vegan et sans gluten : combien en prévoir pour un cocktail ou un buffet ?',
    metaTitle: 'Pièces végétariennes, vegan, sans gluten : quantités',
    categorie: 'Conseils',
    date: '28 octobre 2026',
    isoDate: '2026-10-28',
    extrait: 'La méthode pour calculer les pièces végétariennes, vegan et sans gluten d\'un cocktail ou d\'un buffet : comptez les convives concernés, pas un pourcentage.',
    img: '/hero-cocktail-reception.webp',
    enBref: [
      'Ne calculez pas un pourcentage : comptez les convives concernés, puis donnez à chacun autant de pièces qu\'aux autres.',
      'Pour un cocktail de 12 pièces, un convive végétarien a besoin de 12 pièces qui lui conviennent, plus 10 % de marge, soit 14 pièces.',
      'Un menu à partager est calibré pour 8 à 12 convives : à partir de 8 végétariens, le menu Le Jardin (100 % végétarien, 34,90 € HT par personne) leur est dédié.',
      'Les options végétariennes, vegan et sans gluten se précisent au devis, avec le nombre de personnes concernées ; le tableau des allergènes est joint au devis et au bon de livraison.',
    ],
    contenu: `
      <p>Pour un cocktail ou un buffet d'entreprise, la bonne question n'est pas « quel pourcentage de végétariens ? » mais <strong>« combien de personnes, exactement, et combien de pièces chacune doit pouvoir manger ? »</strong>. Un convive vegan qui n'a que trois pièces à sa portée repart affamé, quel que soit le pourcentage moyen. Voici la méthode, un exemple chiffré pour 50 invités, et ce qu'il faut préciser au traiteur.</p>

      <h2>La méthode en quatre étapes</h2>
      <ol>
        <li><strong>Demandez le régime à l'inscription.</strong> Une question simple dans l'invitation : régime alimentaire (végétarien, vegan, sans gluten, autre), allergies. C'est le seul moyen d'obtenir des chiffres réels.</li>
        <li><strong>Comptez les convives par régime,</strong> en notant ceux qui cumulent deux régimes (vegan et sans gluten, par exemple).</li>
        <li><strong>Multipliez par le nombre de pièces par personne,</strong> le même que pour les autres : 8, 12 ou 16 pièces en cocktail, selon la formule.</li>
        <li><strong>Ajoutez 10 % de marge</strong> : un convive qui goûte deux fois une pièce, un invité de dernière minute, une pièce abîmée au transport.</li>
      </ol>
      <p>Ces pièces <strong>font partie</strong> du total commandé : le cocktail reste à 12 pièces par personne pour tout le monde, mais certaines pièces sont choisies pour que les convives concernés puissent les manger. Tout le monde peut manger une pièce végétarienne ; un convive végétarien ne peut pas manger une pièce de poulet.</p>

      <h2>Un exemple : cocktail de 12 pièces pour 50 invités</h2>
      <p>Cinquante invités, dont 5 végétariens, 2 vegan et 3 sans gluten (hypothèse d'illustration, à remplacer par les réponses de vos invités).</p>
      <table>
        <thead><tr><th>Régime</th><th>Convives</th><th>Calcul</th><th>Pièces à prévoir</th></tr></thead>
        <tbody>
          <tr><td>Végétarien</td><td>5</td><td>5 × 12 pièces + 10 %</td><td>66</td></tr>
          <tr><td>Vegan</td><td>2</td><td>2 × 12 pièces + 10 %</td><td>27</td></tr>
          <tr><td>Sans gluten</td><td>3</td><td>3 × 12 pièces + 10 %</td><td>40</td></tr>
          <tr><td><strong>Total à part</strong></td><td>10</td><td></td><td><strong>133 sur 600 pièces</strong></td></tr>
        </tbody>
      </table>
      <p>Trois points à retenir : un convive vegan est aussi végétarien, donc les pièces vegan peuvent compléter celles des végétariens ; un convive à la fois vegan et sans gluten se compte dans les deux lignes ; et les 133 pièces sont comprises dans les 600, pas ajoutées.</p>

      <h2>Et pour un menu à partager ?</h2>
      <p>Les menus à partager (Le Méditerranéen 37,50 € HT, Le Parisien 37,90 €, Le Jardin 34,90 € par personne) sont calibrés pour 8 à 12 convives. Le Jardin est <strong>100 % végétarien</strong> : à partir de 8 végétariens, un menu Le Jardin leur est dédié, sans plat à adapter. En dessous, on adapte les autres menus ; voir <a href="/journal/menu-inclusif-entreprise-halal-vegetarien-sans-gluten">le menu inclusif</a>.</p>

      <h2>Ce que L'Écrin Traiteur précise au devis</h2>
      <ul>
        <li>Toute la carte salée est <strong>halal et sans porc</strong>, sans alcool : le buffet est le même pour tout le monde.</li>
        <li>Les options <strong>végétariennes, vegan et sans gluten</strong> se précisent au devis, avec le nombre de personnes concernées. La composition des formules est fixe : pour une demande particulière, demandez un devis avant la commande.</li>
        <li>Les brochettes de fruits frais sont vegan et sans gluten ; au petit-déjeuner, le banana bread sans gluten est à 26,90 € HT pour 6 à 8 personnes.</li>
        <li>Un <strong>tableau des allergènes</strong> est joint au devis et au bon de livraison. Des traces de gluten restent possibles en cuisine : pour une maladie cœliaque, signalez-le dès la demande de devis.</li>
      </ul>

      <h2>Comment présenter ces pièces le jour J ?</h2>
      <p>Étiquetez chaque plateau (« végétarien », « vegan », « sans gluten »), posez-les au même endroit que les autres plutôt que dans un coin, et séparez-les des pièces à base de viande ou de fromage pour éviter les contacts. Indiquez le nombre de convives concernés à la commande, pour que les quantités correspondent à votre liste.</p>
      <p>Pour aller plus loin : <a href="/journal/traiteur-vegan-vegetarien-entreprise-paris">traiteur végétarien et vegan</a>, <a href="/journal/traiteur-sans-gluten-entreprise-paris">traiteur sans gluten</a> et <a href="/journal/allergenes-traiteur-buffet-plateaux-obligations">les obligations sur les allergènes</a>. <a href="/devis">Demandez un devis</a> en indiquant l'effectif et les régimes.</p>
    `,
    faq: [
      { q: 'Quel pourcentage de végétariens prévoir pour un cocktail ?', a: 'Aucun pourcentage fiable : demandez le régime à l\'inscription et comptez les convives réels. Chaque convive concerné doit avoir autant de pièces adaptées que les autres, plus 10 % de marge.' },
      { q: 'Combien de pièces pour un invité végétarien en cocktail ?', a: 'Autant que les autres : 8, 12 ou 16 pièces selon la formule, plus 10 % de marge (arrondie au-dessus), soit 9, 14 ou 18 pièces.' },
      { q: 'Faut-il prévoir des pièces sans gluten en plus ?', a: 'Oui, dès qu\'un convive est concerné. Précisez le nombre de personnes à la demande de devis ; signalez une maladie cœliaque, car des traces de gluten restent possibles en cuisine.' },
      { q: 'Un buffet halal convient-il aux végétariens ?', a: 'Toute la carte salée de L\'Écrin Traiteur est halal et sans porc, et les options végétariennes se précisent au devis. Le menu Le Jardin est 100 % végétarien.' },
      { q: 'À partir de combien de végétariens commander un menu entier ?', a: 'Un menu à partager est calibré pour 8 à 12 convives : à partir de 8 végétariens, le menu Le Jardin (34,90 € HT par personne) leur est dédié.' },
      { q: 'Où trouver les allergènes ?', a: 'Dans le tableau des allergènes joint au devis et au bon de livraison.' },
    ],
  },

  /* ───────── 4 : halal d'entreprise, 8 questions ───────── */
  {
    slug: 'traiteur-halal-entreprise-8-questions-a-poser-avant-de-signer',
    titre: 'Traiteur halal d\'entreprise : les 8 questions à poser avant de signer',
    metaTitle: 'Traiteur halal d\'entreprise : 8 questions à poser',
    categorie: 'Conseils',
    date: '28 octobre 2026',
    isoDate: '2026-10-28',
    extrait: 'Halal sur toute la carte ou la viande seule, certification ou engagement, alcool, porc, allergènes : huit questions à poser, avec nos réponses.',
    img: '/hero-plateaux-aperitifs.webp',
    enBref: [
      'Huit questions rendent deux traiteurs halal comparables : périmètre du mot « halal », certification, porc et dérivés, alcool, buffet unique, autres régimes, écrit, allergènes.',
      'Chez L\'Écrin Traiteur, toute la carte salée est halal et sans porc, sans alcool, et le buffet est le même pour tous les invités.',
      'Aucune certification halal n\'est revendiquée : posez la question à chaque traiteur et demandez la réponse par écrit.',
      'Un tableau des allergènes est joint au devis et au bon de livraison.',
    ],
    contenu: `
      <p>« Halal » n'a pas le même sens d'un traiteur à l'autre : la viande seule, tout le salé, avec ou sans certification, avec ou sans alcool dans les sauces. Pour un événement d'entreprise où chacun doit pouvoir manger, il faut des réponses précises, <strong>par écrit</strong>, avant de signer le devis. Voici huit questions, ce qu'elles vérifient, et la réponse de L'Écrin Traiteur à chacune.</p>

      <h2>Les 8 questions</h2>
      <table>
        <thead><tr><th>Question</th><th>Ce qu'elle vérifie</th><th>Réponse de L'Écrin Traiteur</th></tr></thead>
        <tbody>
          <tr><td><strong>1. Que couvre « halal » ?</strong></td><td>La viande seulement, ou toute la carte salée ?</td><td>Toute la carte salée est halal et sans porc, ce n'est pas une option à part.</td></tr>
          <tr><td><strong>2. Certification, attestation ou engagement ?</strong></td><td>Ce qui est garanti, et par qui</td><td>Aucune certification halal n'est revendiquée. Demandez la forme de la garantie à chaque traiteur et faites-la écrire.</td></tr>
          <tr><td><strong>3. Porc et dérivés ?</strong></td><td>Charcuterie, gélatine, graisse, sauces</td><td>La carte est sans porc.</td></tr>
          <tr><td><strong>4. Alcool ?</strong></td><td>Dans les préparations et dans les boissons</td><td>La carte est sans alcool ; pour trinquer, un Chardonnay 0 % à 16,90 € HT la bouteille.</td></tr>
          <tr><td><strong>5. Un seul buffet ou deux circuits ?</strong></td><td>Une table à part pour une partie des invités</td><td>Un seul buffet pour tous : pas de table à part.</td></tr>
          <tr><td><strong>6. Et les autres régimes ?</strong></td><td>Végétarien, vegan, sans gluten dans le même buffet</td><td>Options végétariennes, vegan et sans gluten précisées au devis, avec le nombre de personnes concernées.</td></tr>
          <tr><td><strong>7. Est-ce écrit sur le devis ?</strong></td><td>La mention engage le traiteur</td><td>Indiquez « halal et sans porc » dans votre demande de devis, pour qu\'elle y figure.</td></tr>
          <tr><td><strong>8. Allergènes et traces ?</strong></td><td>Étiquetage, contact entre préparations</td><td>Tableau des allergènes joint au devis et au bon de livraison.</td></tr>
        </tbody>
      </table>

      <h2>Pourquoi la question 2 compte le plus</h2>
      <p>Une certification est délivrée par un organisme extérieur ; une attestation vient d\'un fournisseur ; un engagement est la parole du traiteur. Ces trois formes ne garantissent pas la même chose, et certains clients ou salariés ont une exigence précise. La seule bonne pratique est de demander la forme exacte et de la faire écrire.</p>

      <h2>Ce qui change pour un événement d'entreprise</h2>
      <ul>
        <li><strong>Le buffet unique</strong> évite de séparer l'équipe en deux groupes : tout le salé est le même pour tout le monde.</li>
        <li><strong>L'alcool</strong> est le point le plus souvent oublié : une carte sans alcool évite aussi les sauces et les boissons à vérifier une à une.</li>
        <li><strong>Les formats</strong> restent les mêmes qu'ailleurs : petit-déjeuner, plateaux repas, cocktail et menus à partager, avec livraison dès 6h30 à Paris et en Île-de-France.</li>
      </ul>

      <h2>Pour aller plus loin</h2>
      <p>Le budget d'un cocktail halal est détaillé dans <a href="/journal/cocktail-entreprise-halal-paris">cocktail d'entreprise halal à Paris</a> et <a href="/journal/cocktail-halal-entreprise-50-personnes-pieces-boissons-budget">cocktail halal pour 50 personnes</a>. Pour un repas, voir <a href="/journal/buffet-halal-entreprise-paris-exemple-chiffre-30-personnes">le buffet halal pour 30 personnes</a> ; pour une vue d'ensemble, <a href="/journal/traiteur-halal-entreprise-paris">traiteur halal d'entreprise à Paris</a> et la page <a href="/traiteur-halal">traiteur halal</a>. <a href="/devis">Demandez un devis</a> en précisant « halal et sans porc », l'effectif et les autres régimes.</p>
    `,
    faq: [
      { q: 'Que veut dire « traiteur halal » pour une entreprise ?', a: 'Cela dépend du traiteur : la viande seulement, ou toute la carte salée. Demandez le périmètre par écrit. Chez L\'Écrin Traiteur, toute la carte salée est halal et sans porc, sans alcool.' },
      { q: 'L\'Écrin Traiteur est-il certifié halal ?', a: 'Aucune certification halal n\'est revendiquée. La carte salée est halal et sans porc, sans alcool. Si votre entreprise exige une certification précise, indiquez-le dans la demande de devis avant toute commande.' },
      { q: 'Faut-il un buffet séparé pour les invités qui mangent halal ?', a: 'Non, chez L\'Écrin Traiteur : toute la carte salée est halal et sans porc, donc un seul buffet pour tous les invités.' },
      { q: 'Les boissons sont-elles sans alcool ?', a: 'Oui, la carte de boissons est sans alcool. Pour trinquer, le Chardonnay 0 % est à 16,90 € HT la bouteille de 75 cl.' },
      { q: 'Peut-on combiner halal, végétarien et sans gluten ?', a: 'Oui : les options végétariennes, vegan et sans gluten se précisent au devis, avec le nombre de personnes concernées.' },
      { q: 'Comment obtenir la liste des allergènes ?', a: 'Un tableau des allergènes est joint au devis et au bon de livraison.' },
    ],
  },

  /* ───────── 5 : buffet halal pour 30 personnes ───────── */
  {
    slug: 'buffet-halal-entreprise-paris-exemple-chiffre-30-personnes',
    titre: 'Buffet halal d\'entreprise à Paris : exemple chiffré pour 30 personnes',
    metaTitle: 'Buffet halal d\'entreprise : exemple pour 30 personnes',
    categorie: 'Conseils',
    date: '28 octobre 2026',
    isoDate: '2026-10-28',
    extrait: 'Un buffet halal pour 30 personnes : menu à partager de 1 076 à 1 166 € HT ou cocktail de 1 031 à 1 691 € HT, livraison comprise. Calcul ligne par ligne.',
    img: '/hero-a-partager.webp',
    enBref: [
      'Pour 30 personnes, un menu à partager halal revient de 1 076 à 1 166 € HT livraison comprise, soit 35,87 à 38,87 € HT par personne, hors boissons.',
      'Un cocktail halal de 12 pièces (La Réception) revient à 1 360,80 € HT avec jus, eau et livraison, soit 45,36 € HT par personne.',
      'Un seul buffet pour tous les invités : toute la carte salée est halal et sans porc, sans alcool.',
      'Commande jusqu\'à la veille à 10h pour 30 personnes, livraison dès 6h30 ; 48 h à l\'avance à partir de 50 personnes.',
    ],
    contenu: `
      <p>Un buffet halal d'entreprise pour <strong>30 personnes</strong> se compose en deux formats : un <strong>menu à partager</strong> pour un repas assis ou debout, de 1 076 à 1 166 € HT livraison comprise, ou un <strong>cocktail</strong> pour une réception debout, de 1 031 à 1 691 € HT selon le nombre de pièces. Chez L'Écrin Traiteur, toute la carte salée est halal et sans porc, sans alcool : <strong>un seul buffet pour tous les invités</strong>, sans table à part.</p>

      <h2>Option 1 : le menu à partager pour 30 personnes</h2>
      <p>Trois menus, calibrés pour 8 à 12 convives : trente invités se servent de trois menus (par exemple trois fois dix). Le prix est par personne.</p>
      <table>
        <thead><tr><th>Menu</th><th>Prix par personne HT</th><th>30 personnes</th><th>Livraison</th><th>Total HT</th><th>Par personne</th></tr></thead>
        <tbody>
          <tr><td>Le Jardin (100 % végétarien)</td><td>34,90 €</td><td>1 047 €</td><td>29 €</td><td><strong>1 076 €</strong></td><td>35,87 €</td></tr>
          <tr><td>Le Méditerranéen</td><td>37,50 €</td><td>1 125 €</td><td>29 €</td><td><strong>1 154 €</strong></td><td>38,47 €</td></tr>
          <tr><td>Le Parisien</td><td>37,90 €</td><td>1 137 €</td><td>29 €</td><td><strong>1 166 €</strong></td><td>38,87 €</td></tr>
        </tbody>
      </table>
      <p>Les boissons s'ajoutent : pour un repas d'une heure, 20 personnes demandent 121 € HT de boissons (4 thermos, 2 L de jus, 5 bouteilles d'eau), voir <a href="/journal/comparer-devis-traiteur-buffet-entreprise-exemple-20-personnes">le devis type pour 20 personnes</a>. La vaisselle en dur est une location, sur devis ; les gobelets, serviettes et couverts jetables sont sans supplément.</p>

      <h2>Option 2 : le cocktail pour 30 personnes</h2>
      <table>
        <thead><tr><th>Formule</th><th>Pièces</th><th>30 personnes</th><th>Boissons (jus, eau)</th><th>Livraison</th><th>Total HT</th></tr></thead>
        <tbody>
          <tr><td>L'Invitation</td><td>8</td><td>897 €</td><td>104,80 €</td><td>29 €</td><td><strong>1 030,80 €</strong></td></tr>
          <tr><td>La Réception</td><td>12</td><td>1 227 €</td><td>104,80 €</td><td>29 €</td><td><strong>1 360,80 €</strong></td></tr>
          <tr><td>La Célébration</td><td>16</td><td>1 557 €</td><td>104,80 €</td><td>29 €</td><td><strong>1 690,80 €</strong></td></tr>
        </tbody>
      </table>
      <p>Les boissons comptent 8 litres de jus à 9,50 € (76 €) et 6 bouteilles d'eau de 75 cl à 4,80 € (28,80 €), soit 104,80 €. Pour trinquer, un Chardonnay 0 % : 5 bouteilles à 16,90 € ajoutent 84,50 € HT. La Réception passe alors à 1 445,30 € HT, soit 48,18 € HT par personne.</p>

      <h2>Quel format choisir ?</h2>
      <ul>
        <li><strong>Un déjeuner d'équipe :</strong> le menu à partager, à table, avec des plats à poser au centre.</li>
        <li><strong>Une réception, un lancement, une fin d'année :</strong> le cocktail, debout, avec les pièces proposées en continu.</li>
        <li><strong>Un afterwork :</strong> L'Afterwork, 10 pièces et une planche de fromages à 35,90 € HT par personne.</li>
      </ul>
      <p>La différence entre les deux est détaillée dans <a href="/journal/buffet-a-partager-ou-cocktail-entreprise-paris">buffet à partager ou cocktail</a>.</p>

      <h2>Ce qui est identique pour tous les invités</h2>
      <p>Le salé est halal et sans porc pour tout le monde, la carte est sans alcool, et un tableau des allergènes est joint au devis et au bon de livraison. Pour les convives végétariens, vegan ou sans gluten, précisez leur nombre au devis ; voir <a href="/journal/pieces-vegetariennes-vegan-sans-gluten-cocktail-buffet-quantites">les quantités par régime</a>. Les questions à poser avant de signer sont dans <a href="/journal/traiteur-halal-entreprise-8-questions-a-poser-avant-de-signer">les 8 questions à poser à un traiteur halal</a>.</p>

      <h2>Organisation</h2>
      <ul>
        <li><strong>Commande :</strong> jusqu'à la veille à 10h pour 30 personnes ; 48 h à l'avance à partir de 50.</li>
        <li><strong>Livraison :</strong> dès 6h30, dressée, prête à servir ; 29 € HT à Paris et dans les communes proches.</li>
        <li><strong>Durée :</strong> à consommer dans les 4 heures au froid, ou 2 heures à température ambiante.</li>
        <li><strong>Annulation :</strong> sans frais jusqu'à 2 jours ouvrés avant la livraison, avant 10h.</li>
      </ul>
      <p>Retrouvez les formules sur la page <a href="/traiteur-halal/buffet-entreprise">buffet halal d'entreprise</a>, puis <a href="/devis">demandez un devis</a> sous 24 h.</p>
      <p><em>Tarifs L'Écrin Traiteur, octobre 2026, en euros hors taxes. Calcul : produits + une livraison de 29 € HT, Paris et communes proches. Minimum de commande 50 € HT.</em></p>
    `,
    faq: [
      { q: 'Combien coûte un buffet halal pour 30 personnes ?', a: 'En menu à partager, de 1 076 à 1 166 € HT livraison comprise (35,87 à 38,87 € HT par personne), hors boissons. En cocktail de 12 pièces, 1 360,80 € HT avec jus, eau et livraison.' },
      { q: 'Faut-il un buffet séparé pour les convives qui mangent halal ?', a: 'Non : toute la carte salée de L\'Écrin Traiteur est halal et sans porc, donc un seul buffet pour tous.' },
      { q: 'Combien de menus à partager pour 30 personnes ?', a: 'Trois : chaque menu est calibré pour 8 à 12 convives, par exemple trois menus pour dix personnes.' },
      { q: 'Combien de pièces par personne pour un cocktail halal ?', a: '8, 12 ou 16 pièces selon la formule : L\'Invitation à 29,90 €, La Réception à 40,90 € et La Célébration à 51,90 € HT par personne.' },
      { q: 'Jusqu\'à quand commander pour 30 personnes ?', a: 'Jusqu\'à la veille à 10h. À partir de 50 personnes, commandez 48 h à l\'avance.' },
      { q: 'Les boissons sont-elles comprises ?', a: 'Non : elles s\'ajoutent. La carte est sans alcool, avec un Chardonnay 0 % à 16,90 € HT la bouteille de 75 cl pour trinquer.' },
    ],
  },

  /* ───────── 6 : cocktail halal pour 50 personnes ───────── */
  {
    slug: 'cocktail-halal-entreprise-50-personnes-pieces-boissons-budget',
    titre: 'Cocktail halal d\'entreprise pour 50 personnes : pièces, boissons sans alcool et budget',
    metaTitle: 'Cocktail halal pour 50 personnes : pièces et budget',
    categorie: 'Conseils',
    date: '28 octobre 2026',
    isoDate: '2026-10-28',
    extrait: 'Cocktail halal pour 50 personnes : 400 à 800 pièces, boissons sans alcool et budget de 1 696 à 2 796 € HT livraison comprise. Composition et service.',
    img: '/cocktail-reception-signature.webp',
    enBref: [
      'Pour 50 personnes, un cocktail halal compte 400 pièces (L\'Invitation), 600 (La Réception) ou 800 (La Célébration).',
      'Budget HT, livraison et boissons sans alcool comprises : 1 695,50 €, 2 245,50 € ou 2 795,50 €, soit 33,91 à 55,91 € par personne.',
      'Boissons : 13 L de jus, 10 bouteilles d\'eau de 75 cl ; en option, 9 bouteilles de Chardonnay 0 % pour 152,10 € HT.',
      'À 50 invités debout, prévoyez deux maîtres d\'hôtel (250 € HT les 6 h chacun) ; commande 48 h à l\'avance.',
    ],
    contenu: `
      <p>Un cocktail halal d'entreprise pour <strong>50 personnes</strong> compte <strong>400, 600 ou 800 pièces</strong> selon la formule, et revient à <strong>1 695,50 € HT, 2 245,50 € HT ou 2 795,50 € HT</strong> avec les boissons sans alcool et la livraison. Chez L'Écrin Traiteur, toute la carte salée est halal et sans porc, sans alcool : le même cocktail pour tous les invités.</p>

      <h2>Quelle formule pour 50 personnes ?</h2>
      <table>
        <thead><tr><th>Formule</th><th>Pièces par personne</th><th>Pour 50 personnes</th><th>Pour quel moment</th></tr></thead>
        <tbody>
          <tr><td>L'Invitation</td><td>8 (6 salées, 2 sucrées)</td><td>400 pièces</td><td>Un pot d'une heure et demie, un afterwork</td></tr>
          <tr><td>La Réception</td><td>12 (9 salées, 3 sucrées)</td><td>600 pièces</td><td>Un déjeuner debout, une inauguration</td></tr>
          <tr><td>La Célébration</td><td>16 (12 salées, 4 sucrées)</td><td>800 pièces</td><td>Un dîner debout de deux heures et demie à trois heures</td></tr>
        </tbody>
      </table>
      <p>Toutes les pièces salées sont halal et sans porc. La Réception réunit entre terre et mer : saumon mariné et betterave jaune, pomme de terre ratte au saumon fumé, brochette de poulet mariné tandoori, mini cheeseburger, millefeuilles (patate douce et feta, betterave au chèvre), tartelette pissaladière, navette de légumes grillés, gougères au fromage, plus trois pièces sucrées.</p>

      <h2>Le budget pour 50 personnes, avec boissons sans alcool</h2>
      <table>
        <thead><tr><th>Poste</th><th>L'Invitation</th><th>La Réception</th><th>La Célébration</th></tr></thead>
        <tbody>
          <tr><td>Pièces (50 × prix par personne)</td><td>1 495 €</td><td>2 045 €</td><td>2 595 €</td></tr>
          <tr><td>Jus, 13 L (1 L pour 4 personnes)</td><td>123,50 €</td><td>123,50 €</td><td>123,50 €</td></tr>
          <tr><td>Eau, 10 bouteilles de 75 cl</td><td>48 €</td><td>48 €</td><td>48 €</td></tr>
          <tr><td>Livraison</td><td>29 €</td><td>29 €</td><td>29 €</td></tr>
          <tr><td><strong>Total HT</strong></td><td><strong>1 695,50 €</strong></td><td><strong>2 245,50 €</strong></td><td><strong>2 795,50 €</strong></td></tr>
          <tr><td>Par personne</td><td>33,91 €</td><td>44,91 €</td><td>55,91 €</td></tr>
          <tr><td>Option Chardonnay 0 %, 9 bouteilles</td><td>+ 152,10 €</td><td>+ 152,10 €</td><td>+ 152,10 €</td></tr>
          <tr><td><strong>Total avec Chardonnay 0 %</strong></td><td>1 847,60 €</td><td>2 397,60 €</td><td>2 947,60 €</td></tr>
        </tbody>
      </table>
      <p>Les boissons suivent les règles de L'Écrin : 1 litre de jus (orange et pomme, 9,50 €) pour 4 personnes, 1 bouteille d'eau de 75 cl (4,80 €) pour 5 personnes, et pour trinquer 1 flûte de Chardonnay 0 % par personne (bouteille de 75 cl à 16,90 € HT pour 6 flûtes). La carte est sans alcool : pas de champagne, de vin ni de bière.</p>

      <h2>Combien de personnel en service ?</h2>
      <p>Un maître d'hôtel (250 € HT les 6 heures) suffit pour 20 à 40 invités debout. À 50 invités, prévoyez deux maîtres d'hôtel, soit 500 € HT, sur devis. Le cocktail est livré dressé, prêt à servir ; le maître d'hôtel assure le service pendant la réception. Voir <a href="/journal/maitre-d-hotel-buffet-entreprise-combien-prix">le prix d'un maître d'hôtel</a>.</p>

      <h2>Organisation</h2>
      <ul>
        <li><strong>Commande :</strong> 48 h à l'avance à partir de 50 personnes. Livraison dès 6h30, 29 € HT à Paris et dans les communes proches.</li>
        <li><strong>Durée :</strong> à consommer dans les 4 heures au froid, ou 2 heures à température ambiante.</li>
        <li><strong>Plusieurs points de service :</strong> deux tables de pièces, de part et d'autre de la salle, évitent la file.</li>
        <li><strong>Vaisselle :</strong> gobelets, serviettes et couverts jetables sans supplément ; vaisselle en dur et verrerie en location, sur devis.</li>
      </ul>

      <h2>Régimes et halal</h2>
      <p>Le salé est halal et sans porc pour tout le monde. Pour les convives végétariens, vegan ou sans gluten, comptez-les à l'inscription et précisez leur nombre au devis : <a href="/journal/pieces-vegetariennes-vegan-sans-gluten-cocktail-buffet-quantites">le calcul des pièces par régime</a>. Pour comparer deux traiteurs, <a href="/journal/traiteur-halal-entreprise-8-questions-a-poser-avant-de-signer">les 8 questions à poser</a>. Le budget de 20 à 100 personnes est dans <a href="/journal/cocktail-entreprise-halal-paris">cocktail d'entreprise halal à Paris</a>.</p>
      <p>Voir les <a href="/creations/cocktails">cocktails</a> et <a href="/devis">demander un devis</a> sous 24 h.</p>
      <p><em>Tarifs L'Écrin Traiteur, octobre 2026, en euros hors taxes. Calcul : pièces + boissons + une livraison de 29 € HT, Paris et communes proches. Minimum de commande 50 € HT.</em></p>
    `,
    faq: [
      { q: 'Combien coûte un cocktail halal pour 50 personnes ?', a: 'De 1 695,50 à 2 795,50 € HT selon la formule (8, 12 ou 16 pièces), jus, eau et livraison comprises, soit 33,91 à 55,91 € HT par personne.' },
      { q: 'Combien de pièces pour 50 personnes ?', a: '400 pièces en L\'Invitation (8 par personne), 600 en La Réception (12) et 800 en La Célébration (16).' },
      { q: 'Quelles boissons pour un cocktail halal ?', a: 'Une carte sans alcool : jus d\'orange et de pomme (1 L pour 4 personnes), eau (1 bouteille de 75 cl pour 5) et, pour trinquer, un Chardonnay 0 % à 16,90 € HT la bouteille.' },
      { q: 'Combien de maîtres d\'hôtel pour 50 invités debout ?', a: 'Un maître d\'hôtel pour 20 à 40 invités debout, donc deux à 50 invités : 500 € HT pour 6 heures, sur devis.' },
      { q: 'Faut-il commander plus tôt pour 50 personnes ?', a: 'Oui : à partir de 50 personnes, prévoyez 48 h. En dessous, la commande reste possible jusqu\'à la veille à 10h.' },
      { q: 'Toutes les pièces salées sont-elles halal ?', a: 'Oui : toute la carte salée de L\'Écrin Traiteur est halal et sans porc, sans alcool. Aucune certification halal n\'est revendiquée.' },
    ],
  },
]
