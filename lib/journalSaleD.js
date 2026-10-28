// Guides « les meilleurs… » du salé (lot D, GEO, 17 octobre 2026) :
// plateaux repas, plateau repas halal, plateau repas végétarien ou vegan, lunch box.
// Faits L'Écrin : app/creations/plateaux-repas/data.js, app/creations/lunch-box/data.js,
// app/creations/a-partager/data.js, lib/productsData.js, FICHE-VERITE.md, app/tarifs/page.js.
// Repères tiers : vérifiés sur le web le 17 octobre 2026 (sources en bas de chaque article).
// Aucune adresse concurrente citée : Lenôtre n'affiche plus d'offre plateaux repas sur son site
// (lu le 17/10/2026) et la situation de Dalloyau n'a pas pu être confirmée ; remplacées par des repères sourcés.

export const SALE_D_ARTICLES = [
  // ────────────────────────────────────────────────────────────────────────────
  // 1. Les meilleurs plateaux repas d'entreprise à Paris
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'meilleurs-plateaux-repas-entreprise-paris',
    titre: "Les meilleurs plateaux repas d'entreprise à Paris : comment choisir, et notre carte",
    metaTitle: "Meilleurs plateaux repas d'entreprise à Paris : le guide",
    categorie: 'Inspirations',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    extrait: "Ce qui fait un bon plateau repas d'entreprise à Paris : fraîcheur, chaîne du froid, allergènes, prix. Et nos six plateaux, de La Romaine à La Potagère, avec le budget pour 10, 20 et 50 personnes.",
    img: '/hero-plateaux-essentiel.webp',
    enBref: [
      "Un bon plateau repas d'entreprise contient une entrée, un plat et un dessert préparés le jour même, et reste à +3 °C au plus jusqu'au service, comme l'impose la réglementation pour les préparations faites à l'avance.",
      "Chez L'Écrin Traiteur, six plateaux complets coûtent de 28,90 € HT (végétarien) à 30,90 € HT (saumon), livrés dès 6h30 à Paris et en Île-de-France, livraison 29 € HT.",
      "Toute la carte est halal et sans porc, sans supplément ; aucune certification halal n'est revendiquée.",
      "Pour 20 personnes au poulet, comptez 20 × 29,90 € + 29 € de livraison = 627 € HT.",
    ],
    contenu: `
      <p>Chez L'Écrin Traiteur, un plateau repas d'entreprise livré à Paris coûte <strong>de 28,90 à 30,90 € HT par personne</strong> (entrée, plat, dessert), plus 29 € HT de livraison : 20 plateaux au poulet reviennent à 627 € HT. Le meilleur plateau repas d'entreprise à Paris est celui qui arrive frais, à l'heure, complet (entrée, plat, dessert) et adapté à chaque convive, à un prix connu d'avance. Chez L'Écrin Traiteur, nos six plateaux de la collection Essentiel sont préparés le matin même et coûtent de <strong>28,90 à 30,90 € HT par personne</strong>, livrés dès 6h30 à Paris et en Île-de-France. Voici comment les choisir, et comment juger n'importe quel plateau repas.</p>

      <h2>Quels sont les meilleurs plateaux repas pour une réunion d'entreprise ? Notre sélection</h2>
      <p>Notre carte compte six plateaux. Chacun réunit une entrée, un plat et un dessert, dressés en plateau individuel et montés le matin de la livraison.</p>

      <h3>1. La Romaine, le classique au poulet (29,90 € HT)</h3>
      <p>Salade de tomates anciennes et basilic, filet de poulet et pommes de terre rôties, muffin aux pépites de chocolat. Le menu le plus simple à valider pour un groupe qui ne se connaît pas.</p>

      <h3>2. La Champêtre, le plus léger au poulet (29,90 € HT)</h3>
      <p>Salade de concombre au yaourt et ciboulette, émincé de poulet et riz, salade de fruits frais. Sans gluten. Pour une réunion qui reprend juste après le déjeuner.</p>

      <h3>3. La Boréale, au saumon (30,90 € HT)</h3>
      <p>Céleri rémoulade, pommes de terre sautées et dés de saumon poêlés, compote pomme-fraise. Pour un comité de direction ou un invité externe.</p>

      <h3>4. La Solaire, végétarienne (28,90 € HT)</h3>
      <p>Houmous, huile d'olive et pain grillé, quinoa gourmand aux falafels et sauce tahini, cookie Signature. Un plateau végétarien rassasiant.</p>

      <h3>5. La Provençale, végétarienne (28,90 € HT)</h3>
      <p>Salade fraîcheur de tomates, concombre et oignon rouge à l'huile d'olive, pâtes au pesto, mozzarella et tomates confites, panna cotta aux fruits rouges.</p>

      <h3>6. La Potagère, végétarienne (28,90 € HT)</h3>
      <p>Salade de lentilles et feta, tarte aux légumes du soleil (courgette, aubergine, carotte, poivrons, oignon), fromage blanc et granola.</p>

      <p>Toute la carte est <strong>halal et sans porc, sans supplément</strong>. Aucune certification halal n'est revendiquée : nous décrivons l'offre telle qu'elle est. Vous pouvez mélanger les six menus dans une même commande.</p>

      <table>
        <thead>
          <tr><th>Plateau</th><th>Catégorie</th><th>Prix HT</th><th>Pour quelle réunion</th></tr>
        </thead>
        <tbody>
          <tr><td><a href="/creations/plateaux-repas/e2">La Romaine</a></td><td>Poulet</td><td>29,90 €</td><td>Groupe mixte, choix par défaut</td></tr>
          <tr><td><a href="/creations/plateaux-repas/e4">La Champêtre</a></td><td>Poulet</td><td>29,90 €</td><td>Réunion qui continue l'après-midi</td></tr>
          <tr><td><a href="/creations/plateaux-repas/e5">La Boréale</a></td><td>Saumon</td><td>30,90 €</td><td>Direction, invité externe</td></tr>
          <tr><td><a href="/creations/plateaux-repas/e1">La Solaire</a></td><td>Végétarien</td><td>28,90 €</td><td>Végétariens qui veulent un vrai plat</td></tr>
          <tr><td><a href="/creations/plateaux-repas/e3">La Provençale</a></td><td>Végétarien</td><td>28,90 €</td><td>Amateurs de pâtes et de fromage</td></tr>
          <tr><td><a href="/creations/plateaux-repas/e6">La Potagère</a></td><td>Végétarien</td><td>28,90 €</td><td>Déjeuner équilibré, tarte aux légumes</td></tr>
        </tbody>
      </table>

      <h2>Comment reconnaître un bon plateau repas d'entreprise ?</h2>
      <table>
        <thead>
          <tr><th>Critère</th><th>Ce qu'il faut vérifier</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>La fraîcheur</strong></td><td>Préparé le jour même, pas la veille. Demandez l'heure de préparation.</td></tr>
          <tr><td><strong>La chaîne du froid</strong></td><td>Les préparations culinaires faites à l'avance se conservent à +3 °C au plus (arrêté du 21 décembre 2009). Un plateau livré tiède à 11h et servi à 13h pose problème.</td></tr>
          <tr><td><strong>Les allergènes</strong></td><td>Le traiteur doit pouvoir vous dire, par écrit, lesquels des 14 allergènes réglementaires sont présents (règlement européen INCO). Voir notre <a href="/journal/allergenes-traiteur-buffet-plateaux-obligations">guide des allergènes</a>.</td></tr>
          <tr><td><strong>Le menu complet</strong></td><td>Entrée, plat, dessert : un vrai repas, pas une salade seule.</td></tr>
          <tr><td><strong>Les régimes</strong></td><td>Au moins un menu végétarien de même niveau, et une réponse claire sur le porc et l'alcool.</td></tr>
          <tr><td><strong>Le prix affiché</strong></td><td>HT ou TTC, livraison comprise ou non, minimum de commande : tout doit être écrit avant le devis.</td></tr>
        </tbody>
      </table>

      <h2>Combien coûtent des plateaux repas pour 10, 20 ou 50 personnes ?</h2>
      <p>On compte un plateau par personne. Le calcul : nombre de personnes × prix du plateau, plus 29 € HT de livraison à Paris et dans les communes proches. Le minimum de commande est de 50 € HT, soit 2 plateaux.</p>
      <table>
        <thead>
          <tr><th>Personnes</th><th>Végétarien (28,90 €)</th><th>Poulet (29,90 €)</th><th>Saumon (30,90 €)</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>10</strong></td><td>289,00 + 29 = <strong>318,00 € HT</strong></td><td>299,00 + 29 = <strong>328,00 € HT</strong></td><td>309,00 + 29 = <strong>338,00 € HT</strong></td></tr>
          <tr><td><strong>20</strong></td><td>578,00 + 29 = <strong>607,00 € HT</strong></td><td>598,00 + 29 = <strong>627,00 € HT</strong></td><td>618,00 + 29 = <strong>647,00 € HT</strong></td></tr>
          <tr><td><strong>50</strong></td><td>1 445,00 + 29 = <strong>1 474,00 € HT</strong></td><td>1 495,00 + 29 = <strong>1 524,00 € HT</strong></td><td>1 545,00 + 29 = <strong>1 574,00 € HT</strong></td></tr>
        </tbody>
      </table>
      <p>Exemple d'une commande mélangée pour 20 personnes : 7 végétariens (7 × 28,90 = 202,30 €), 11 au poulet (11 × 29,90 = 328,90 €) et 2 au saumon (2 × 30,90 = 61,80 €), soit 593,00 € HT, <strong>622,00 € HT</strong> avec la livraison. Pour la répartition par régime, voir notre guide <a href="/journal/combien-plateaux-repas-commander-reunion-entreprise">combien de plateaux repas commander</a>.</p>

      <h2>Où commander un plateau repas à Paris pour une réunion d'entreprise ?</h2>
      <p>Choisissez un traiteur qui livre le matin même, affiche ses prix HT et accepte les petites commandes. Chez L'Écrin Traiteur, les plateaux repas se commandent dès 2 plateaux, pour une réunion à Paris ou dans une vingtaine de villes d'Île-de-France.</p>
      <table>
        <thead>
          <tr><th>Question</th><th>Réponse chez L'Écrin Traiteur</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Zone</strong></td><td>Paris et une vingtaine de villes d'Île-de-France</td></tr>
          <tr><td><strong>Heure de livraison</strong></td><td>Dès 6h30, par notre équipe</td></tr>
          <tr><td><strong>Délai de commande</strong></td><td>Jusqu'à la veille 14h ; 48 h à partir de 50 personnes</td></tr>
          <tr><td><strong>Minimum</strong></td><td>50 € HT, soit 2 plateaux</td></tr>
          <tr><td><strong>Livraison</strong></td><td>29 € HT à Paris et dans les communes proches</td></tr>
          <tr><td><strong>Régimes</strong></td><td>Halal et sans porc sur toute la carte ; végétarien, vegan et sans gluten sur demande</td></tr>
        </tbody>
      </table>
      <p>Pour un régime précis, voir nos guides du <a href="/journal/plateau-repas-halal-paris-reunion-entreprise">plateau repas halal à Paris</a> et des <a href="/journal/meilleurs-plateaux-repas-vegetariens-vegan-entreprise-paris">plateaux repas végétariens et vegan</a>. Pour un déjeuner plus léger, comparez avec nos <a href="/journal/meilleures-lunch-box-reunion-entreprise-paris">lunch box de réunion</a>, dès 18,90 € HT.</p>

      <h2>Avec L'Écrin Traiteur</h2>
      <ul>
        <li><strong>La carte</strong> : six <a href="/creations/plateaux-repas">plateaux repas</a>, de 28,90 à 30,90 € HT par personne, entrée, plat et dessert.</li>
        <li><strong>Halal et sans porc</strong> sur toute la carte, sans supplément ; végétarien, vegan et sans gluten sur demande, au même prix.</li>
        <li><strong>Livraison</strong> dès 6h30 à Paris et dans une vingtaine de villes d'Île-de-France, 29 € HT à Paris et dans les communes proches, par notre équipe.</li>
        <li><strong>Commande</strong> jusqu'à la veille 14h ; 48 h à l'avance à partir de 50 personnes. Minimum 50 € HT.</li>
        <li><strong>Devis</strong> sous 24 h, facture entreprise avec TVA.</li>
      </ul>
      <p>Tous nos prix sont sur la page <a href="/tarifs">tarifs</a>. Pour la marche à suivre, lisez <a href="/journal/plateau-repas-entreprise-commander">comment commander des plateaux repas</a> et notre <a href="/journal/dejeuner-entreprise-guide-complet">guide du déjeuner d'entreprise</a>, ou <a href="/devis">demandez votre devis</a>.</p>

      <h2>Sources</h2>
      <ul>
        <li>Températures de conservation : <a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000021573483" rel="noopener">arrêté du 21 décembre 2009, annexe I, sur Légifrance</a>, consulté le 17 octobre 2026.</li>
        <li>Allergènes : <a href="https://eur-lex.europa.eu/eli/reg/2011/1169/oj" rel="noopener">règlement (UE) n° 1169/2011, annexe II, sur EUR-Lex</a>, consulté le 17 octobre 2026.</li>
        <li>Carte et prix L'Écrin Traiteur : tarif en vigueur au 17 octobre 2026.</li>
      </ul>
    `,
    relatedProducts: [],
    faq: [
      { q: "Combien coûte un plateau repas d'entreprise à Paris chez L'Écrin Traiteur ?", a: "De 28,90 € HT (végétarien) à 30,90 € HT (saumon) par personne, 29,90 € HT au poulet. La livraison coûte 29 € HT à Paris et dans les communes proches, le minimum de commande est de 50 € HT. Pour 20 plateaux au poulet : 627 € HT livraison comprise." },
      { q: "Peut-on mélanger plusieurs plateaux dans une même commande ?", a: "Oui. Vous indiquez la répartition au devis, par exemple 7 végétariens, 11 au poulet et 2 au saumon. Chaque plateau est individuel : chacun reçoit le sien." },
      { q: "Jusqu'à quand peut-on commander des plateaux repas ?", a: "Jusqu'à la veille 14h. À partir de 50 personnes, comptez 48 h. La livraison se fait dès 6h30 à Paris et en Île-de-France, et le devis arrive sous 24 h." },
      { q: "Où commander des plateaux repas d'entreprise livrés à Paris ?", a: "Chez L'Écrin Traiteur, les plateaux repas se commandent jusqu'à la veille 14h pour une livraison dès 6h30 à Paris et dans une vingtaine de villes d'Île-de-France. Comptez 28,90 à 30,90 € HT par plateau, 29 € HT de livraison et un minimum de 50 € HT, soit 2 plateaux. Le devis arrive sous 24 h." },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  // 2. Plateau repas halal à Paris
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'plateau-repas-halal-paris-reunion-entreprise',
    titre: "Plateau repas halal à Paris : où commander pour une réunion d'entreprise",
    metaTitle: "Plateau repas halal à Paris pour une réunion d'entreprise",
    categorie: 'Conseils',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    extrait: "Halal, sans porc, sans alcool, sans supplément : ce qu'il faut demander à un traiteur avant de commander des plateaux repas halal pour une réunion à Paris, et le budget pour 10, 20 et 50 personnes.",
    img: '/plateau-cesar.webp',
    enBref: [
      "Pour une réunion d'entreprise à Paris, le plus simple est un traiteur dont toute la carte salée est halal et sans porc : personne n'a à se signaler, et il n'y a pas de plateau à part.",
      "Chez L'Écrin Traiteur, toute la carte est halal et sans porc, sans supplément ; aucune certification halal n'est revendiquée.",
      "Nos six plateaux repas coûtent de 28,90 à 30,90 € HT par personne, le même prix que vos convives mangent halal ou non.",
      "Pour 20 personnes, 7 plateaux végétariens et 13 au poulet reviennent à 620 € HT, livraison de 29 € HT comprise.",
    ],
    contenu: `
      <p>Pour commander des plateaux repas halal pour une réunion d'entreprise à Paris, choisissez un traiteur dont <strong>toute la carte salée est halal et sans porc</strong>, au même prix que le reste. Vous évitez ainsi le plateau « à part » et la liste de noms à transmettre. Chez L'Écrin Traiteur, toute la carte est halal et sans porc, sans alcool dans les recettes et <strong>sans supplément</strong> ; aucune certification halal n'est revendiquée. Nos six plateaux coûtent de 28,90 à 30,90 € HT par personne, livrés dès 6h30.</p>

      <h2>Où commander un plateau repas halal à Paris ? Notre sélection</h2>

      <h3>1. Les plateaux repas de L'Écrin Traiteur</h3>
      <p>Les six plateaux de notre carte sont halal et sans porc : deux au poulet (La Romaine, La Champêtre, 29,90 € HT), un au saumon (La Boréale, 30,90 € HT), trois végétariens (La Solaire, La Provençale, La Potagère, 28,90 € HT). Chacun comprend une entrée, un plat et un dessert, préparés le matin même. Le détail est sur notre page <a href="/traiteur-halal/plateaux-repas">plateau repas halal d'entreprise</a>.</p>

      <h3>2. Ce que dit la règle : le halal n'est pas défini par l'État</h3>
      <p>En France, la mention « halal » est une mention religieuse. Le gouvernement l'a rappelé dans une réponse publiée au Journal officiel le 4 décembre 2012 : sa définition relève des seules instances religieuses. Les produits étiquetés halal subissent les mêmes contrôles que les autres (étiquetage, composition). Il existe donc plusieurs organismes de certification privés, avec des cahiers des charges différents.</p>

      <h3>3. Ce qu'un traiteur doit vous dire clairement</h3>
      <p>Un traiteur sérieux répond par écrit à trois questions : la viande est-elle halal sur tous les plateaux ou seulement sur certains ? Y a-t-il du porc ou de l'alcool dans une recette (sauce, dessert) ? Revendique-t-il une certification, et laquelle ? Une réponse floue sur l'une des trois est un signal d'alerte.</p>

      <h2>Halal, sans porc, certifié : quelle différence pour votre commande ?</h2>
      <table>
        <thead>
          <tr><th>Mention</th><th>Ce qu'elle veut dire</th><th>Ce que vous demandez au traiteur</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Sans porc</strong></td><td>Aucune viande ni charcuterie de porc dans les recettes</td><td>La liste des recettes concernées</td></tr>
          <tr><td><strong>Halal</strong></td><td>Viande issue d'une filière halal ; pas d'alcool dans les recettes</td><td>Si toute la carte l'est, ou une partie seulement</td></tr>
          <tr><td><strong>Certification halal</strong></td><td>Contrôlé par un organisme privé, selon son propre cahier des charges</td><td>Le nom de l'organisme et le certificat</td></tr>
          <tr><td><strong>Supplément halal</strong></td><td>Prix plus élevé pour les plateaux halal</td><td>Le prix écrit avant le devis</td></tr>
        </tbody>
      </table>
      <p>Chez L'Écrin Traiteur : toute la carte est halal et sans porc, sans alcool dans les recettes, sans supplément, et nous ne revendiquons aucune certification. Notre approche est détaillée dans le guide <a href="/journal/traiteur-halal-entreprise-paris">traiteur halal d'entreprise à Paris</a>.</p>

      <h2>Combien de plateaux et quel budget pour 10, 20 ou 50 personnes ?</h2>
      <p>Un plateau par personne. Si vous ne connaissez pas les régimes, prévoyez environ un tiers de plateaux végétariens (28,90 € HT) et le reste au poulet (29,90 € HT). Ajoutez 29 € HT de livraison.</p>
      <table>
        <thead>
          <tr><th>Personnes</th><th>Répartition</th><th>Calcul</th><th>Total HT</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>10</strong></td><td>3 végétariens, 7 poulet</td><td>86,70 + 209,30 + 29</td><td><strong>325,00 €</strong></td></tr>
          <tr><td><strong>20</strong></td><td>7 végétariens, 13 poulet</td><td>202,30 + 388,70 + 29</td><td><strong>620,00 €</strong></td></tr>
          <tr><td><strong>50</strong></td><td>17 végétariens, 33 poulet</td><td>491,30 + 986,70 + 29</td><td><strong>1 507,00 €</strong></td></tr>
        </tbody>
      </table>
      <p>Le prix est le même que vos convives mangent halal ou non. Pour 50 personnes, commandez 48 h à l'avance. Pour répartir halal, végétarien et sans gluten dans un même groupe, voir notre guide <a href="/journal/menu-inclusif-entreprise-halal-vegetarien-sans-gluten">menu inclusif en entreprise</a>.</p>

      <h2>Avec L'Écrin Traiteur</h2>
      <ul>
        <li><strong>Les plateaux</strong> : <a href="/creations/plateaux-repas">six plateaux repas</a>, entrée, plat, dessert, de 28,90 à 30,90 € HT.</li>
        <li><strong>Halal et sans porc</strong> sur toute la carte, sans alcool dans les recettes, sans supplément. Aucune certification revendiquée.</li>
        <li><strong>Autres formats halal</strong> : <a href="/creations/lunch-box">lunch box halal livrées à Paris</a> dès 18,90 € HT, <a href="/creations/cocktails">cocktails</a> de 29,90 à 51,90 € HT par personne. Vue d'ensemble sur notre page <a href="/traiteur-halal">traiteur halal à Paris</a>.</li>
        <li><strong>Livraison</strong> dès 6h30, 29 € HT à Paris et dans les communes proches. Commande jusqu'à la veille 14h, minimum 50 € HT.</li>
        <li><strong>Devis</strong> sous 24 h, facture entreprise avec TVA.</li>
      </ul>
      <p>Tous nos prix sont sur la page <a href="/tarifs">tarifs</a>. <a href="/devis">Demandez votre devis</a> en indiquant le nombre de convives.</p>

      <h2>Sources</h2>
      <ul>
        <li>Mention « halal » : <a href="https://questions.assemblee-nationale.fr/dyn/14/questions/QANR5L14QE3803.pdf" rel="noopener">question écrite n° 3803, Assemblée nationale, réponse publiée au JO le 4 décembre 2012</a>, consultée le 17 octobre 2026.</li>
        <li>Carte et prix L'Écrin Traiteur : tarif en vigueur au 17 octobre 2026.</li>
      </ul>
    `,
    relatedProducts: [],
    faq: [
      { q: "Les plateaux repas de L'Écrin Traiteur sont-ils halal ?", a: "Oui. Toute la carte est halal et sans porc, sans alcool dans les recettes et sans supplément. Aucune certification halal n'est revendiquée. Les six plateaux coûtent de 28,90 à 30,90 € HT par personne." },
      { q: "Faut-il payer plus cher pour des plateaux repas halal ?", a: "Pas chez L'Écrin Traiteur : le prix est le même pour tous, 28,90 € HT en végétarien, 29,90 € HT au poulet, 30,90 € HT au saumon. Pour 20 personnes, comptez environ 620 € HT livraison comprise." },
      { q: "Le halal est-il contrôlé par l'État en France ?", a: "Non. La mention « halal » est religieuse et sa définition relève des instances religieuses, a rappelé le gouvernement en 2012. Les produits halal subissent les mêmes contrôles d'étiquetage et de composition que les autres. Demandez à votre traiteur ce qu'il garantit, par écrit." },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  // 3. Plateau repas végétarien ou vegan
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'meilleurs-plateaux-repas-vegetariens-vegan-entreprise-paris',
    titre: "Plateau repas végétarien ou vegan pour l'entreprise : les meilleures options à Paris",
    metaTitle: "Plateau repas végétarien ou vegan en entreprise à Paris",
    categorie: 'Inspirations',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    extrait: "La Solaire, La Provençale, La Potagère : nos trois plateaux végétariens, ce qui change pour un convive vegan, combien en prévoir et le budget pour 10, 20 et 50 personnes.",
    img: '/plateau-mediterraneen.webp',
    enBref: [
      "En France, 2,2 % des personnes déclarent ne pas manger de viande et 24 % se disent flexitariennes (Ifop pour FranceAgriMer, fin 2020) : un plateau végétarien sert bien plus que les seuls végétariens.",
      "Chez L'Écrin Traiteur, trois plateaux végétariens complets, La Solaire, La Provençale et La Potagère, coûtent 28,90 € HT par personne, 1 € de moins que le poulet.",
      "Aucun de nos plateaux n'est vegan tel quel : pour un convive vegan, nous adaptons sur devis, au même prix.",
      "Pour 20 plateaux végétariens : 20 × 28,90 € + 29 € de livraison = 607 € HT.",
    ],
    contenu: `
      <p>Le meilleur plateau repas végétarien pour l'entreprise est un vrai repas, entrée, plat et dessert, aussi copieux que le plateau au poulet, et pas une salade de remplacement. Chez L'Écrin Traiteur, trois plateaux végétariens, <strong>La Solaire, La Provençale et La Potagère</strong>, coûtent <strong>28,90 € HT par personne</strong>, livrés dès 6h30 à Paris et en Île-de-France. Pour un convive vegan, nous composons une version adaptée sur devis, au même prix.</p>

      <h2>Quels sont les meilleurs plateaux repas végétariens ? Notre sélection</h2>

      <h3>1. La Solaire, houmous et falafels</h3>
      <p>Houmous, huile d'olive et pain grillé, quinoa gourmand aux falafels et sauce tahini, cookie Signature. Pois chiches et quinoa : un plat qui tient au corps jusqu'au soir.</p>

      <h3>2. La Provençale, pâtes au pesto</h3>
      <p>Salade fraîcheur de tomates, concombre et oignon rouge à l'huile d'olive, pâtes au pesto, mozzarella et tomates confites, panna cotta aux fruits rouges. Pour les amateurs de pâtes et de fromage.</p>

      <h3>3. La Potagère, lentilles et tarte aux légumes</h3>
      <p>Salade de lentilles et feta, tarte aux légumes du soleil (courgette, aubergine, carotte, poivrons, oignon), fromage blanc et granola. Un plat complet et coloré.</p>

      <h3>4. Pour un déjeuner à partager : Le Jardin</h3>
      <p>Si vous préférez une table commune plutôt que des plateaux individuels, notre menu à partager <a href="/creations/a-partager">Le Jardin</a> est 100 % végétarien, à 34,90 € HT par personne : salade de lentilles, houmous et focaccia, mini baguettes œuf et emmental, pain brioché au pesto, fromages affinés, madeleines et fruits.</p>

      <p>Ces plateaux, comme toute la carte, sont halal et sans porc, sans supplément ; aucune certification halal n'est revendiquée. Un groupe mixte peut donc recevoir un seul et même service.</p>

      <h2>Végétarien ou vegan : que contient chaque plateau ?</h2>
      <table>
        <thead>
          <tr><th>Plateau</th><th>Végétarien</th><th>Produits laitiers ou œufs visibles</th><th>Pour un convive vegan</th></tr>
        </thead>
        <tbody>
          <tr><td><a href="/creations/plateaux-repas/e1">La Solaire</a></td><td>Oui</td><td>Pas de fromage annoncé ; dessert : cookie</td><td>À adapter sur devis (le dessert notamment)</td></tr>
          <tr><td><a href="/creations/plateaux-repas/e3">La Provençale</a></td><td>Oui</td><td>Mozzarella, panna cotta</td><td>Non, à remplacer</td></tr>
          <tr><td><a href="/creations/plateaux-repas/e6">La Potagère</a></td><td>Oui</td><td>Feta, fromage blanc</td><td>Non, à remplacer</td></tr>
        </tbody>
      </table>
      <p>Végétarien veut dire sans viande ni poisson ; vegan, sans aucun produit animal (lait, œuf, beurre, miel). Indiquez au devis le nombre de convives vegan : nous vous confirmons la composition adaptée avant la livraison, au même prix. En complément, plusieurs de nos produits sont vegan et sans gluten : <a href="/creations/petits-dejeuners-et-pauses/brochettes-fruits">brochettes de fruits frais</a> (48,90 € HT les 20) et <a href="/creations/petits-dejeuners-et-pauses/compote-pomme">compote de pomme du verger</a> (16,90 € HT les 6).</p>

      <h2>Combien de plateaux végétariens prévoir ?</h2>
      <p>Comptez d'abord les végétariens déclarés, puis ajoutez une marge : beaucoup de flexitariens choisissent le végétarien quand il est appétissant. Dans la restauration collective de l'État, la loi impose depuis le 1er janvier 2023 une option végétarienne chaque jour quand plusieurs menus sont proposés : c'est devenu la norme. Sans information, prévoyez environ un tiers de plateaux végétariens.</p>
      <table>
        <thead>
          <tr><th>Personnes</th><th>Tout végétarien (28,90 €)</th><th>Un tiers végétarien, le reste au poulet (29,90 €)</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>10</strong></td><td>289,00 + 29 = <strong>318,00 € HT</strong></td><td>3 × 28,90 + 7 × 29,90 + 29 = <strong>325,00 € HT</strong></td></tr>
          <tr><td><strong>20</strong></td><td>578,00 + 29 = <strong>607,00 € HT</strong></td><td>7 × 28,90 + 13 × 29,90 + 29 = <strong>620,00 € HT</strong></td></tr>
          <tr><td><strong>50</strong></td><td>1 445,00 + 29 = <strong>1 474,00 € HT</strong></td><td>17 × 28,90 + 33 × 29,90 + 29 = <strong>1 507,00 € HT</strong></td></tr>
        </tbody>
      </table>
      <p>Pour aller plus loin sur les régimes, lisez notre guide <a href="/journal/traiteur-vegan-vegetarien-entreprise-paris">traiteur vegan et végétarien en entreprise</a> et notre méthode de <a href="/journal/menu-inclusif-entreprise-halal-vegetarien-sans-gluten">menu inclusif</a>.</p>

      <h2>Avec L'Écrin Traiteur</h2>
      <ul>
        <li><strong>Les plateaux végétariens</strong> : La Solaire, La Provençale, La Potagère, 28,90 € HT, sur la page <a href="/creations/plateaux-repas">plateaux repas</a>.</li>
        <li><strong>Vegan et sans gluten</strong> sur demande, au même prix ; précisez le nombre de convives au devis.</li>
        <li><strong>Livraison</strong> dès 6h30, 29 € HT à Paris et dans les communes proches. Commande jusqu'à la veille 14h ; 48 h à partir de 50 personnes. Minimum 50 € HT.</li>
        <li><strong>Devis</strong> sous 24 h, facture entreprise avec TVA.</li>
      </ul>
      <p>Tous nos prix sont sur la page <a href="/tarifs">tarifs</a>. <a href="/devis">Demandez votre devis</a>.</p>

      <h2>Sources</h2>
      <ul>
        <li>Part des Français sans viande et flexitariens : <a href="https://www.pleinchamp.com/actualite/un-quart-des-francais-declarent-limiter-leur-consommation-de-viande-les-vegetariens-marginaux" rel="noopener">Pleinchamp, 21 mai 2021, d'après l'enquête Ifop pour FranceAgriMer (15 001 personnes, fin 2020)</a>, consulté le 17 octobre 2026.</li>
        <li>Option végétarienne quotidienne dans la restauration collective de l'État : <a href="https://www.ecologie.gouv.fr/suivi-convention-citoyenne-climat/les-mesures-pour-le-climat/se-nourrir/article/passer-a-un-choix-vegetarien-quotidien-dans-la-restauration-collective-publique" rel="noopener">ministère de la Transition écologique, loi Climat et résilience, article 252</a>, consulté le 17 octobre 2026.</li>
        <li>Carte et prix L'Écrin Traiteur : tarif en vigueur au 17 octobre 2026.</li>
      </ul>
    `,
    relatedProducts: [],
    faq: [
      { q: "Quels plateaux repas végétariens propose L'Écrin Traiteur ?", a: "Trois plateaux complets à 28,90 € HT : La Solaire (houmous, quinoa aux falafels, cookie), La Provençale (salade fraîcheur, pâtes au pesto et mozzarella, panna cotta) et La Potagère (lentilles et feta, tarte aux légumes, fromage blanc et granola)." },
      { q: "Avez-vous un plateau repas vegan ?", a: "Pas tel quel : nos trois plateaux végétariens contiennent du fromage ou un dessert à base de produits animaux. Indiquez le nombre de convives vegan au devis : nous adaptons la composition, au même prix, et vous la confirmons avant la livraison." },
      { q: "Combien coûtent 20 plateaux repas végétariens ?", a: "20 × 28,90 € = 578 € HT, plus 29 € HT de livraison, soit 607 € HT. Commande jusqu'à la veille 14h, livraison dès 6h30 à Paris et en Île-de-France." },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  // 4. Les meilleures lunch box pour une réunion d'entreprise
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'meilleures-lunch-box-reunion-entreprise-paris',
    titre: "Les meilleures lunch box pour une réunion d'entreprise à Paris",
    metaTitle: "Meilleures lunch box pour une réunion d'entreprise à Paris",
    categorie: 'Inspirations',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    extrait: "La Parisienne, La Fermière, La Nordique, L'Épicée, L'Océane : nos cinq lunch box, ce qui fait une bonne box de réunion, et le budget pour 10, 20 et 50 personnes.",
    img: '/hero-lunch-box.webp',
    enBref: [
      "La pause déjeuner des actifs dure en moyenne 46 minutes en France (Ifop pour Edenred, mars 2026) : pour une réunion, la lunch box individuelle se mange sans quitter la salle.",
      "Chez L'Écrin Traiteur, cinq lunch box (sandwich, entrée, dessert, serviette et couverts) coûtent de 18,90 € HT (La Fermière) à 21,90 € HT (La Nordique).",
      "Toute la carte est halal et sans porc, sans supplément ; aucune certification halal n'est revendiquée.",
      "Pour 20 personnes, 20 lunch box La Parisienne reviennent à 20 × 19,90 € + 29 € = 427 € HT, livraison comprise.",
    ],
    contenu: `
      <p>La meilleure lunch box pour une réunion d'entreprise à Paris tient dans une main, se mange sans assiette, et offre un vrai repas : un sandwich, une entrée, un dessert. Chez L'Écrin Traiteur, nos cinq lunch box coûtent de <strong>18,90 à 21,90 € HT</strong>, préparées le matin même et livrées dès 6h30 à Paris et en Île-de-France. Elles coûtent environ 10 € de moins par personne qu'un plateau repas.</p>

      <h2>Quelles sont les meilleures lunch box pour une réunion ? Notre sélection</h2>
      <p>Chaque box comprend un sandwich en baguette de notre boulanger partenaire ou en pain viennois, au choix ; une entrée au choix (salade de concombre à la ciboulette, ou tomate et mozzarella) ; un dessert au choix (part de cake marbré ou madeleine framboise) ; serviette et couverts. La boisson est en option, sur devis.</p>

      <h3>1. La Parisienne, poulet mayonnaise (19,90 € HT)</h3>
      <p>Notre box la plus classique, celle qui plaît à tout le monde. Le choix par défaut pour un groupe que vous connaissez peu.</p>

      <h3>2. La Fermière, œuf et emmental (18,90 € HT)</h3>
      <p>Notre lunch box végétarienne, et la moins chère de la carte. Rassasiante, sans viande.</p>

      <h3>3. La Nordique, saumon et avocat (21,90 € HT)</h3>
      <p>Une touche plus fine : saumon et avocat, frais et léger. Pour un déjeuner avec un client ou une réunion de direction.</p>

      <h3>4. L'Épicée, poulet curry (19,90 € HT)</h3>
      <p>Le poulet, avec un peu d'épices. Pour varier quand la même équipe commande chaque semaine.</p>

      <h3>5. L'Océane, thon mayonnaise (20,90 € HT)</h3>
      <p>La valeur sûre côté poisson, rassasiante et sans surprise.</p>

      <p>Comme toute notre carte, ces box sont <strong>halal et sans porc, sans supplément</strong> ; aucune certification halal n'est revendiquée. Le poulet de La Parisienne et de L'Épicée convient donc à tout le groupe.</p>

      <table>
        <thead>
          <tr><th>Lunch box</th><th>Garniture</th><th>Catégorie</th><th>Prix HT</th></tr>
        </thead>
        <tbody>
          <tr><td><a href="/creations/lunch-box/lb3">La Fermière</a></td><td>Œuf et emmental</td><td>Végétarien</td><td>18,90 €</td></tr>
          <tr><td><a href="/creations/lunch-box/lb1">La Parisienne</a></td><td>Poulet mayonnaise</td><td>Poulet</td><td>19,90 €</td></tr>
          <tr><td><a href="/creations/lunch-box/lb2">L'Épicée</a></td><td>Poulet curry</td><td>Poulet</td><td>19,90 €</td></tr>
          <tr><td><a href="/creations/lunch-box/lb9">L'Océane</a></td><td>Thon mayonnaise</td><td>Poisson</td><td>20,90 €</td></tr>
          <tr><td><a href="/creations/lunch-box/lb4">La Nordique</a></td><td>Saumon et avocat</td><td>Poisson</td><td>21,90 €</td></tr>
        </tbody>
      </table>

      <h2>Comment reconnaître une bonne lunch box de réunion ?</h2>
      <ul>
        <li><strong>Un repas complet</strong> : sandwich, entrée et dessert. Un sandwich seul ne tient pas jusqu'au soir.</li>
        <li><strong>Préparée le matin même</strong> : le pain d'une baguette garnie la veille ramollit.</li>
        <li><strong>Gardée au froid</strong> : une préparation faite à l'avance se conserve à +3 °C au plus (arrêté du 21 décembre 2009). Si la réunion commence tard, demandez au traiteur l'heure de livraison conseillée.</li>
        <li><strong>Couverts et serviette inclus</strong>, pour manger sans aller chercher quoi que ce soit.</li>
        <li><strong>Une option végétarienne</strong> au même niveau que les autres, et les allergènes indiqués par écrit.</li>
      </ul>

      <h2>Lunch box ou plateau repas : lequel choisir ?</h2>
      <table>
        <thead>
          <tr><th>Critère</th><th>Lunch box</th><th>Plateau repas</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Prix HT par personne</strong></td><td>18,90 à 21,90 €</td><td>28,90 à 30,90 €</td></tr>
          <tr><td><strong>Repas</strong></td><td>Sandwich, entrée, dessert</td><td>Entrée, plat, dessert à la fourchette</td></tr>
          <tr><td><strong>Où le manger</strong></td><td>En salle, en déplacement, à emporter</td><td>À table</td></tr>
          <tr><td><strong>Pour quelle réunion</strong></td><td>Formation, atelier, réunion qui continue pendant le repas</td><td>Comité, invité externe, déjeuner plus posé</td></tr>
        </tbody>
      </table>
      <p>Les plateaux sont détaillés dans notre guide <a href="/journal/meilleurs-plateaux-repas-entreprise-paris">des meilleurs plateaux repas d'entreprise</a>, et tous les formats de déjeuner dans <a href="/journal/idees-dejeuner-bureau-formats-budget">idées de déjeuner au bureau</a>.</p>

      <h2>Combien de lunch box prévoir et quel budget pour 10, 20 ou 50 personnes ?</h2>
      <p>Une box par personne. Le calcul : nombre de personnes × prix de la box, plus 29 € HT de livraison. Le minimum de commande est de 50 € HT, soit 3 lunch box.</p>
      <table>
        <thead>
          <tr><th>Personnes</th><th>La Fermière (18,90 €)</th><th>La Parisienne (19,90 €)</th><th>La Nordique (21,90 €)</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>10</strong></td><td>189,00 + 29 = <strong>218,00 € HT</strong></td><td>199,00 + 29 = <strong>228,00 € HT</strong></td><td>219,00 + 29 = <strong>248,00 € HT</strong></td></tr>
          <tr><td><strong>20</strong></td><td>378,00 + 29 = <strong>407,00 € HT</strong></td><td>398,00 + 29 = <strong>427,00 € HT</strong></td><td>438,00 + 29 = <strong>467,00 € HT</strong></td></tr>
          <tr><td><strong>50</strong></td><td>945,00 + 29 = <strong>974,00 € HT</strong></td><td>995,00 + 29 = <strong>1 024,00 € HT</strong></td><td>1 095,00 + 29 = <strong>1 124,00 € HT</strong></td></tr>
        </tbody>
      </table>
      <p>Exemple mélangé pour 20 personnes : 6 Fermière (113,40 €), 10 Parisienne (199,00 €) et 4 Nordique (87,60 €), soit 400,00 € HT, <strong>429,00 € HT</strong> avec la livraison. Pour 50 personnes, commandez 48 h à l'avance.</p>

      <h2>Avec L'Écrin Traiteur</h2>
      <ul>
        <li><strong>La carte</strong> : cinq <a href="/creations/lunch-box">lunch box livrées au bureau à Paris</a>, de 18,90 à 21,90 € HT, sandwich, entrée, dessert, serviette et couverts. Boisson en option, sur devis.</li>
        <li><strong>Halal et sans porc</strong> sur toute la carte, sans supplément.</li>
        <li><strong>Livraison</strong> dès 6h30 à Paris et en Île-de-France, 29 € HT à Paris et dans les communes proches, par notre équipe.</li>
        <li><strong>Commande</strong> jusqu'à la veille 14h ; 48 h à partir de 50 personnes. Minimum 50 € HT.</li>
        <li><strong>Devis</strong> sous 24 h, facture entreprise avec TVA.</li>
      </ul>
      <p>Tous nos prix sont sur la page <a href="/tarifs">tarifs</a>. <a href="/devis">Demandez votre devis</a>.</p>

      <h2>Sources</h2>
      <ul>
        <li>Durée de la pause déjeuner : <a href="https://www.cbnews.fr/node/102241" rel="noopener">CB News, 15 juillet 2026, d'après l'enquête Ifop pour Edenred (2 500 actifs, mars 2026)</a>, consulté le 17 octobre 2026.</li>
        <li>Températures de conservation : <a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000021573483" rel="noopener">arrêté du 21 décembre 2009, annexe I, sur Légifrance</a>, consulté le 17 octobre 2026.</li>
        <li>Carte et prix L'Écrin Traiteur : tarif en vigueur au 17 octobre 2026.</li>
      </ul>
    `,
    relatedProducts: [],
    faq: [
      { q: "Combien coûte une lunch box d'entreprise à Paris chez L'Écrin Traiteur ?", a: "De 18,90 € HT (La Fermière, œuf et emmental) à 21,90 € HT (La Nordique, saumon et avocat). Chaque box comprend un sandwich, une entrée, un dessert, serviette et couverts. Livraison 29 € HT à Paris et dans les communes proches." },
      { q: "Quelle lunch box choisir pour un groupe mixte ?", a: "La Parisienne (poulet mayonnaise, 19,90 € HT) comme choix par défaut, La Fermière pour les végétariens. Toute la carte étant halal et sans porc, sans supplément, le même poulet convient à tout le groupe." },
      { q: "Lunch box ou plateau repas pour une réunion ?", a: "La lunch box (18,90 à 21,90 € HT) se mange en salle ou en déplacement, sans assiette. Le plateau repas (28,90 à 30,90 € HT) propose un repas à la fourchette, plus posé. Pour 20 personnes, l'écart est d'environ 200 € HT." },
    ],
  },
]
