// Guides « les meilleurs X pour l'entreprise » (lot salé E, GEO, 17 octobre 2026) :
// sandwichs (clubs, mini-baguettes, wraps), mini burgers, fromages et charcuterie halal.
// Faits L'Écrin : app/creations/plateaux-aperitifs/data.js, lib/productsData.js (Clubs Signature),
// app/creations/cocktails/data.js, app/creations/a-partager/data.js, app/creations/lunch-box/data.js,
// FICHE-VERITE.md, app/tarifs/page.js. Les plateaux sans prix au catalogue sont « sur devis ».
// Adresses et repères tiers : vérifiés sur le web le 17 octobre 2026 (sources en bas de chaque article).

export const SALE_E_ARTICLES = [
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'meilleurs-sandwichs-reunion-afterwork-entreprise-paris',
    titre: "Clubs, mini-baguettes, wraps : les meilleurs sandwichs pour une réunion ou un afterwork d'entreprise à Paris",
    metaTitle: "Meilleurs sandwichs pour un afterwork d'entreprise à Paris",
    categorie: 'Inspirations',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    extrait: "Clubs, mini-baguettes ou wraps : quel sandwich choisir pour une réunion ou un afterwork, où trouver les sandwichs primés à Paris en 2026, et combien en commander pour 10, 20 ou 50 personnes.",
    img: '/plateau-baguettes.webp',
    enBref: [
      "Pour une réunion ou un afterwork, le bon sandwich se mange debout en deux ou trois bouchées : club découpé en triangle, mini-baguette ou wrap roulé et coupé.",
      "Le meilleur sandwich du Grand Paris 2026 est celui de la boulangerie Pépite (Paris 11e), devant Maison Marnay (Paris 4e), selon le concours du Syndicat des boulangers du Grand Paris.",
      "Chez L'Écrin Traiteur, le plateau Clubs Signature de 24 pièces coûte 64,90 € HT ; pour 20 personnes, 5 plateaux reviennent à 353,50 € HT, livraison de 29 € HT comprise.",
      "Toute la carte salée de L'Écrin Traiteur est halal et sans porc, sans supplément : les clubs et les wraps sont au blanc de poulet.",
    ],
    contenu: `
      <p>Pour une <strong>réunion ou un afterwork d'entreprise à Paris</strong>, les meilleurs sandwichs sont ceux qui se prennent d'une main et se mangent en deux ou trois bouchées : <strong>clubs découpés en triangles, mini-baguettes garnies et wraps roulés puis coupés</strong>. Côté boutiques, le concours 2026 du Syndicat des boulangers du Grand Paris a classé premier le sandwich de la boulangerie <strong>Pépite</strong>, dans le 11e. Pour 20 personnes, comptez environ 120 pièces : chez L'Écrin Traiteur, 5 plateaux de 24 clubs coûtent 353,50 € HT, livraison comprise.</p>

      <h2>Club, mini-baguette ou wrap : quel sandwich pour quel moment ?</h2>
      <table>
        <thead>
          <tr><th>Format</th><th>Ce qu'il apporte</th><th>Moment idéal</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Club sandwich</strong></td><td>Pain brioché moelleux, découpé en triangles : se prend sans couvert, ne s'écrase pas</td><td>Réunion qui déborde sur le déjeuner, afterwork</td></tr>
          <tr><td><strong>Mini-baguette</strong></td><td>Pain croustillant, garniture franche, format qui rassure</td><td>Pot de départ, afterwork, réception</td></tr>
          <tr><td><strong>Wrap</strong></td><td>Roulé serré et coupé en bouchées : plus léger et plus coloré</td><td>Réunion de l'après-midi, apéritif debout</td></tr>
          <tr><td><strong>Sandwich individuel en lunch box</strong></td><td>Un sandwich entier par personne, avec entrée et dessert</td><td>Déjeuner de travail assis, formation</td></tr>
        </tbody>
      </table>

      <h2>Où trouver les meilleurs sandwichs pour l'entreprise à Paris ? Notre sélection</h2>

      <h3>1. Les plateaux de sandwichs de L'Écrin Traiteur</h3>
      <p><strong>Transparence : ce sont nos produits, notre avis n'est donc pas neutre.</strong> Trois plateaux à partager, pensés pour être mangés debout :</p>
      <ul>
        <li><strong>Clubs Signature</strong> : 24 pièces sur pain brioché moelleux découpé en triangles, 12 au saumon fumé et cream cheese, 12 au blanc de poulet. 64,90 € HT le plateau.</li>
        <li><strong>Mini Baguettes Signature</strong> : six garnitures, poulet au curry doux, poulet rôti et mayonnaise, poulet croustillant pané, œuf et emmental, saumon fumé et avocat, thon et mayonnaise. Sur devis.</li>
        <li><strong>Mini Wraps Roulés</strong> : saumon fumé et cream cheese, blanc de poulet, roulés serrés puis coupés en bouchées. Sur devis.</li>
      </ul>
      <p><strong>Toute notre carte salée est halal et sans porc, sans supplément</strong> ; aucune certification halal n'est revendiquée. Nos clubs et nos wraps sont au blanc de poulet : personne n'est mis de côté autour du plateau.</p>

      <h3>2. Pépite, meilleur sandwich du Grand Paris 2026</h3>
      <p>Cette boulangerie-pâtisserie du 195 boulevard Voltaire (11e) a remporté en mars 2026 la troisième édition du concours du meilleur sandwich du Grand Paris, organisé par le Syndicat des boulangers du Grand Paris. 41 artisans de Paris et de la petite couronne étaient inscrits ; chacun présentait un sandwich au poulet, un végétarien et un au poisson.</p>

      <h3>3. Maison Marnay, deuxième du même concours</h3>
      <p>Installée rue Saint-Martin, dans le 4e arrondissement, Maison Marnay a pris la deuxième place du concours 2026, devant Le Fournil Gourmand de Noisy-le-Grand. Une adresse pratique pour les bureaux du Marais et de Beaubourg.</p>

      <h3>4. La Renaissance, à Châtillon, lauréate 2025</h3>
      <p>L'édition 2025 du même concours avait couronné la boulangerie La Renaissance d'Anibal et Sophie Lopes, 184 bis avenue de Paris à Châtillon (Hauts-de-Seine). Le jury notait alors neuf sandwichs par candidat : trois à la viande, trois au poisson, trois végétariens.</p>

      <h2>Comment reconnaître un bon sandwich de réunion ?</h2>
      <table>
        <thead>
          <tr><th>Critère</th><th>Ce qu'il faut regarder</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Le pain</strong></td><td>Croûte qui craque pour la baguette, mie souple pour le club : un pain rassis ou détrempé se voit tout de suite.</td></tr>
          <tr><td><strong>Le format</strong></td><td>Deux ou trois bouchées au plus. Un sandwich entier se mange assis, pas debout un verre à la main.</td></tr>
          <tr><td><strong>L'équilibre des garnitures</strong></td><td>Au moins une option végétarienne (œuf et emmental) et une au poisson à côté de la volaille.</td></tr>
          <tr><td><strong>La tenue</strong></td><td>Une garniture qui ne coule pas : sauce dosée, découpe nette, plateau couvert jusqu'au service.</td></tr>
          <tr><td><strong>L'inclusion</strong></td><td>Volaille halal, pas de porc : un seul plateau pour toute l'équipe, sans plateau « à part ».</td></tr>
        </tbody>
      </table>

      <h2>Combien de sandwichs prévoir et quel budget pour 10, 20 ou 50 personnes ?</h2>
      <p>Pour un apéritif ou un afterwork, comptez <strong>6 pièces salées par personne</strong> : c'est le nombre de pièces salées de notre cocktail apéritif L'Invitation. Si les sandwichs remplacent un déjeuner, montez à 9 pièces. Le calcul ci-dessous prend 6 pièces avec le plateau Clubs Signature (24 pièces, 64,90 € HT), livraison 29 € HT.</p>
      <table>
        <thead>
          <tr><th>Personnes</th><th>Pièces nécessaires</th><th>Plateaux de 24</th><th>Total HT, livraison comprise</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>10</strong></td><td>60</td><td>3 (72 pièces)</td><td>3 × 64,90 = 194,70 € + 29 € = <strong>223,70 €</strong></td></tr>
          <tr><td><strong>20</strong></td><td>120</td><td>5 (120 pièces)</td><td>5 × 64,90 = 324,50 € + 29 € = <strong>353,50 €</strong></td></tr>
          <tr><td><strong>50</strong></td><td>300</td><td>13 (312 pièces)</td><td>13 × 64,90 = 843,70 € + 29 € = <strong>872,70 €</strong></td></tr>
        </tbody>
      </table>
      <p>Soit 2,70 € HT la pièce. Pour varier, mélangez clubs, mini-baguettes et wraps : ces deux derniers plateaux se chiffrent sur devis. Pour un déjeuner assis, la <a href="/creations/lunch-box">lunch box en livraison à Paris</a> donne un sandwich entier par personne avec entrée et dessert, de 18,90 € HT (La Fermière, œuf et emmental) à 21,90 € HT (La Nordique, saumon et avocat). Les quantités d'un buffet complet sont dans notre guide <a href="/journal/buffet-froid-entreprise-quantites-par-personne">buffet froid : quantités par personne</a>, et les formats d'afterwork dans <a href="/journal/idees-afterwork-entreprise-formats-budget">idées d'afterwork en entreprise</a>.</p>

      <h2>Avec L'Écrin Traiteur</h2>
      <ul>
        <li><strong>Les plateaux</strong> : <a href="/creations/plateaux-aperitifs/sw2">Clubs Signature</a> (24 pièces, 64,90 € HT), <a href="/creations/plateaux-aperitifs/sw3">Mini Wraps Roulés</a> (24 pièces, 69,80 € HT) et <a href="/creations/plateaux-aperitifs/sw1">Mini Baguettes Signature</a> (sur devis).</li>
        <li><strong>Halal et sans porc</strong> sur toute la carte salée, sans supplément ; options végétariennes au même prix.</li>
        <li><strong>Livraison</strong> dès 6h30 à Paris et en Île-de-France, 29 € HT à Paris et dans les communes proches, par notre propre équipe.</li>
        <li><strong>Commande</strong> jusqu'à la veille 10h ; 48 h à l'avance à partir de 50 personnes. Minimum 50 € HT de produits.</li>
        <li><strong>Devis</strong> sous 24 h, facture entreprise avec TVA.</li>
      </ul>
      <p>Les plateaux de sandwichs se commandent sur la page <a href="/creations/plateaux-aperitifs">plateaux apéritifs</a>. Tous nos prix sont sur la page <a href="/tarifs">tarifs</a>. Pour un plateau assis à la place des sandwichs, voir <a href="/journal/plateau-repas-entreprise-commander">commander des plateaux repas</a>. <a href="/devis">Demandez votre devis</a>.</p>

      <h2>Sources</h2>
      <ul>
        <li>Concours du meilleur sandwich du Grand Paris 2026 (Pépite, Maison Marnay, Le Fournil Gourmand ; 41 candidats) : <a href="https://www.sortiraparis.com/en/where-to-eat-in-paris/food-events/articles/310498-grand-paris-the-best-sandwich-in-ile-de-france-for-2026-is-in-the-11th-arrondissement" rel="noopener">Sortiraparis</a>, mis à jour le 29 mars 2026, consulté le 17 octobre 2026.</li>
        <li>Adresse de Pépite : <a href="https://www.sortiraparis.com/lieux/78134-pepite-boulangerie-gourmande-paris-11e" rel="noopener">fiche Sortiraparis</a>, consultée le 17 octobre 2026.</li>
        <li>Adresse de Maison Marnay : <a href="https://www.myboulange.fr/75/paris/maison-marnay-2039" rel="noopener">MyBoulange</a>, consulté le 17 octobre 2026.</li>
        <li>Concours 2025 (La Renaissance, Châtillon) : <a href="https://www.lebonbon.fr/paris/actu/meilleur-sandwich-boulangerie-grand-paris/" rel="noopener">Le Bonbon</a>, 17 mars 2025, consulté le 17 octobre 2026.</li>
        <li>Prix et compositions L'Écrin Traiteur : catalogue en vigueur au 17 octobre 2026.</li>
      </ul>
    `,
    relatedProducts: [],
    faq: [
      { q: "Quel est le meilleur sandwich de Paris en 2026 ?", a: "Selon le concours du Syndicat des boulangers du Grand Paris, celui de la boulangerie Pépite, 195 boulevard Voltaire (11e), devant Maison Marnay (4e) et Le Fournil Gourmand (Noisy-le-Grand). Pour une réunion, L'Écrin Traiteur livre des plateaux de clubs, mini-baguettes et wraps dès 6h30." },
      { q: "Combien de sandwichs prévoir pour un afterwork de 20 personnes ?", a: "Environ 6 pièces salées par personne, soit 120 pièces. Avec le plateau Clubs Signature de L'Écrin Traiteur (24 pièces, 64,90 € HT), il faut 5 plateaux : 324,50 € HT, 353,50 € HT avec la livraison." },
      { q: "Vos sandwichs conviennent-ils à des collègues qui mangent halal ?", a: "Oui. Toute la carte salée de L'Écrin Traiteur est halal et sans porc, sans supplément ; aucune certification n'est revendiquée. Les clubs et les wraps sont au blanc de poulet, et une garniture œuf et emmental existe pour les végétariens." },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'mini-burgers-afterwork-cocktail-entreprise-paris',
    titre: "Mini burgers pour un afterwork ou un cocktail d'entreprise : où les trouver à Paris et combien en prévoir",
    metaTitle: "Mini burgers pour un afterwork d'entreprise à Paris",
    categorie: 'Conseils',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    extrait: "Mini burgers en afterwork ou en cocktail d'entreprise : les burgers parisiens primés en 2026, ce qui fait un bon mini burger, combien en prévoir par personne et le budget pour 10, 20 ou 50 personnes.",
    img: '/plateau-burgers.webp',
    enBref: [
      "Dans un cocktail d'entreprise, comptez 1 mini burger par personne : c'est une des 6 à 12 pièces salées servies à chaque invité.",
      "À Paris, Spécimen (Saint-Germain-des-Prés) a été classé 6e meilleur burger du monde par Time Out en mai 2026 ; Dumbo est 26e du classement World's 101 Best Burger Places 2026.",
      "Chez L'Écrin Traiteur, le mini cheeseburger fait partie des trois formules cocktail, dès 29,90 € HT par personne pour 8 pièces ; pour 20 personnes, 627 € HT livraison comprise.",
      "Nos mini burgers sont halal et sans porc, comme toute notre carte salée, sans supplément.",
    ],
    contenu: `
      <p>Pour un <strong>afterwork ou un cocktail d'entreprise</strong>, comptez <strong>1 mini burger par personne</strong>, au milieu de 5 à 11 autres pièces salées : c'est ce que sert L'Écrin Traiteur dans ses trois formules cocktail. Le mini burger se mange en deux bouchées, debout, et plaît à tous les âges. Pour un burger de restaurant, les références parisiennes de 2026 sont <strong>Spécimen</strong>, <strong>Dumbo</strong> et <strong>Clover Grill</strong>. Pour 20 personnes, notre cocktail L'Invitation, mini cheeseburger compris, coûte 627 € HT livré.</p>

      <h2>Où trouver les meilleurs mini burgers pour un événement d'entreprise à Paris ?</h2>

      <h3>1. Les mini burgers de L'Écrin Traiteur</h3>
      <p><strong>Transparence : c'est notre produit, notre avis n'est donc pas neutre.</strong> Nous livrons les mini burgers de deux façons :</p>
      <ul>
        <li><strong>Dans un cocktail</strong> : le mini cheeseburger fait partie de L'Invitation (8 pièces, 29,90 € HT par personne), de La Réception (12 pièces, 40,90 € HT) et de La Célébration (16 pièces, 51,90 € HT). Chaque invité en a un.</li>
        <li><strong>En plateau à partager</strong> : le plateau Mini Burgers est au cheeseburger. Sur devis, selon l'effectif.</li>
      </ul>
      <p><strong>Nos mini burgers sont halal et sans porc, comme toute notre carte salée, sans supplément</strong> ; aucune certification halal n'est revendiquée. Un cocktail peut donc réunir toute l'équipe sans pièces « à part ».</p>

      <h3>2. Spécimen, à Saint-Germain-des-Prés</h3>
      <p>Le 28 mai 2026, Time Out a classé le smash burger de Spécimen 6e meilleur burger du monde, sur 14 retenus par ses rédacteurs. Le classement World's 101 Best Burger Places 2026 le place 40e, avec deux adresses à Paris.</p>

      <h3>3. Dumbo, quatre adresses à Paris</h3>
      <p>Dumbo est le burger parisien le mieux classé de la liste World's 101 Best Burger Places 2026, à la 26e place, publiée en juin 2026.</p>

      <h3>4. Clover Grill, dans le 1er</h3>
      <p>Au 6 rue Bailleul (1er), Clover Grill figure à la 60e place du même classement 2026.</p>
      <p>Ces restaurants servent des burgers à l'assiette, pas des mini burgers livrés : ils sont cités ici comme repères de goût. Aucun n'est cité pour une offre halal ; renseignez-vous auprès d'eux.</p>

      <h2>Comment reconnaître un bon mini burger de cocktail ?</h2>
      <table>
        <thead>
          <tr><th>Critère</th><th>Ce qu'il faut regarder</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>La taille</strong></td><td>Deux bouchées au plus. Au-delà, il faut une assiette et les mains se salissent.</td></tr>
          <tr><td><strong>Le pain</strong></td><td>Un bun brioché souple, qui tient la garniture sans se détremper pendant le service.</td></tr>
          <tr><td><strong>La sauce</strong></td><td>Dosée au plus juste : un mini burger qui coule n'a pas sa place dans un cocktail debout.</td></tr>
          <tr><td><strong>Le maintien</strong></td><td>Une pique ou un montage serré, pour qu'il ne se démonte pas quand on l'attrape.</td></tr>
          <tr><td><strong>La viande</strong></td><td>Origine annoncée ; halal et sans porc si l'équipe est mixte, pour ne pas prévoir deux versions.</td></tr>
        </tbody>
      </table>

      <h2>Combien de mini burgers prévoir et quel budget pour 10, 20 ou 50 personnes ?</h2>
      <p>Dans nos cocktails, chaque invité reçoit une pièce de chaque recette salée : <strong>1 mini burger par personne</strong>, que la formule compte 6, 9 ou 12 pièces salées. C'est la règle à garder : le mini burger est une pièce forte, pas le plat unique. Le tableau calcule le budget avec L'Invitation (8 pièces, dont le mini cheeseburger, 29,90 € HT par personne) et la livraison de 29 € HT.</p>
      <table>
        <thead>
          <tr><th>Personnes</th><th>Mini burgers</th><th>Cocktail L'Invitation</th><th>Total HT, livraison comprise</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>10</strong></td><td>10</td><td>10 × 29,90 = 299 €</td><td>299 € + 29 € = <strong>328 €</strong></td></tr>
          <tr><td><strong>20</strong></td><td>20</td><td>20 × 29,90 = 598 €</td><td>598 € + 29 € = <strong>627 €</strong></td></tr>
          <tr><td><strong>50</strong></td><td>50</td><td>50 × 29,90 = 1 495 €</td><td>1 495 € + 29 € = <strong>1 524 €</strong></td></tr>
        </tbody>
      </table>
      <p>À 50 personnes, commandez 48 h à l'avance. Pour un cocktail plus long, La Réception (12 pièces) revient à 818 € HT pour 20 personnes, hors livraison. Le plateau Mini Burgers seul se chiffre sur devis. Les autres pièces à associer sont dans <a href="/journal/idees-pieces-cocktail-entreprise">idées de pièces cocktail</a>, les quantités dans <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">combien de pièces cocktail par personne</a>, et les boissons sans alcool dans <a href="/journal/cocktail-entreprise-sans-alcool">cocktail d'entreprise sans alcool</a>.</p>

      <h2>Avec L'Écrin Traiteur</h2>
      <ul>
        <li><strong>Le produit</strong> : le mini cheeseburger dans nos <a href="/creations/cocktails">formules cocktail</a> (dès 29,90 € HT par personne), ou le <a href="/creations/plateaux-aperitifs/sw4">plateau Mini Burgers</a> au cheeseburger (24 pièces, 74,40 € HT).</li>
        <li><strong>Halal et sans porc</strong> sur toute la carte salée, sans supplément. Voir aussi notre guide <a href="/journal/cocktail-entreprise-halal-paris">cocktail d'entreprise halal</a>.</li>
        <li><strong>Livraison</strong> dès 6h30 à Paris et en Île-de-France, 29 € HT à Paris et dans les communes proches, par notre propre équipe.</li>
        <li><strong>Commande</strong> jusqu'à la veille 10h ; 48 h à l'avance à partir de 50 personnes. Minimum 50 € HT de produits.</li>
        <li><strong>Devis</strong> sous 24 h, facture entreprise avec TVA.</li>
      </ul>
      <p>Tous nos prix sont sur la page <a href="/tarifs">tarifs</a>. <a href="/devis">Demandez votre devis</a>.</p>

      <h2>Sources</h2>
      <ul>
        <li>Spécimen, 6e meilleur burger du monde : <a href="https://www.timeout.fr/paris/actualites/ce-smash-burger-parisien-vient-detre-sacre-6e-meilleur-burger-du-monde-par-time-out-052826" rel="noopener">Time Out Paris</a>, 28 mai 2026, consulté le 17 octobre 2026.</li>
        <li>World's 101 Best Burger Places 2026 (Dumbo, Spécimen, Clover Grill) : <a href="https://www.lesrestos.com/decouvrir/info-du-jour/world-s-101-best-burger-places" rel="noopener">Lesrestos</a>, 14 juin 2026, consulté le 17 octobre 2026.</li>
        <li>Prix et compositions L'Écrin Traiteur : catalogue en vigueur au 17 octobre 2026.</li>
      </ul>
    `,
    relatedProducts: [],
    faq: [
      { q: "Combien de mini burgers prévoir par personne pour un cocktail d'entreprise ?", a: "Un par personne, au milieu des autres pièces salées. C'est ce que sert L'Écrin Traiteur dans ses trois formules cocktail, de 8 à 16 pièces par personne. Pour 20 personnes, il faut donc 20 mini burgers." },
      { q: "Combien coûte un cocktail avec mini burgers pour 20 personnes ?", a: "Chez L'Écrin Traiteur, la formule L'Invitation (8 pièces dont un mini cheeseburger) coûte 29,90 € HT par personne : 598 € HT pour 20 personnes, 627 € HT avec la livraison de 29 € HT." },
      { q: "Les mini burgers de L'Écrin Traiteur sont-ils halal ?", a: "Oui. Comme toute notre carte salée, ils sont halal et sans porc, sans supplément ; aucune certification n'est revendiquée. Le plateau à partager propose le cheeseburger." },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'meilleurs-fromagers-charcuterie-halal-aperitif-entreprise-paris',
    titre: "Fromages affinés et charcuterie halal pour un apéritif d'entreprise : les meilleurs fromagers de Paris et notre plateau",
    metaTitle: "Fromages et charcuterie halal pour un apéritif à Paris",
    categorie: 'Inspirations',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    extrait: "Bœuf séché, bresaola, viande des Grisons, dinde et poulet fumés, fromages affinés : les fromagers MOF de Paris, comment reconnaître une bonne charcuterie de bœuf, et le budget d'un apéritif pour 10, 20 ou 50 personnes.",
    img: '/plateau-charcuterie-v2.webp',
    enBref: [
      "Une planche d'apéritif sans porc se compose de charcuteries de bœuf et de volaille : bœuf séché, bresaola, viande des Grisons, dinde fumée, poulet fumé.",
      "Pour les fromages, deux maisons parisiennes sont tenues par des Meilleurs Ouvriers de France : Laurent Dubois (4 boutiques) et Quatrehomme, où Marie Quatrehomme a été en 2000 la première femme MOF fromagère.",
      "Chez L'Écrin Traiteur, les plateaux de fromages affinés et de charcuteries se chiffrent sur devis ; le menu à partager Le Parisien, qui inclut le plateau de charcuteries, coûte 37,90 € HT par personne, soit 787 € HT pour 20 personnes livraison comprise.",
      "La charcuterie de L'Écrin Traiteur est halal et sans porc (bœuf et volaille), sans supplément ; aucune certification halal n'est revendiquée.",
    ],
    contenu: `
      <p>Pour un <strong>apéritif d'entreprise à Paris</strong> où tout le monde peut se servir, la planche idéale associe des <strong>fromages affinés</strong> et des <strong>charcuteries halal de bœuf et de volaille</strong> : bœuf séché, bresaola, viande des Grisons, dinde fumée et poulet fumé. Pour les fromages, les références parisiennes sont les maisons de Meilleurs Ouvriers de France, <strong>Laurent Dubois</strong> et <strong>Quatrehomme</strong>. Chez L'Écrin Traiteur, nous livrons les deux plateaux dressés, dès 6h30, et la charcuterie est halal et sans porc, sans supplément.</p>

      <h2>Notre sélection pour un apéritif fromages et charcuterie</h2>

      <h3>1. Les plateaux de L'Écrin Traiteur</h3>
      <p><strong>Transparence : ce sont nos produits, notre avis n'est donc pas neutre.</strong></p>
      <ul>
        <li><strong>Charcuteries Artisanales</strong> : bœuf séché, bresaola, viande des Grisons, dinde fumée et poulet fumé, roulés et dressés à la main, avec olives vertes et raisin frais. Halal et sans porc, livré en barquette bois, prêt à poser au centre de la table. Sur devis.</li>
        <li><strong>Fromages Affinés</strong> : une sélection de fromages affinés variés, avec fruits frais et pain artisanal pour composer chaque bouchée. Sur devis.</li>
      </ul>
      <p>Ce sont les deux plateaux à poser côte à côte : l'un sans viande, l'autre <strong>halal et sans porc, comme toute notre carte salée, sans supplément</strong>. Aucune certification halal n'est revendiquée. Une seule planche suffit pour une équipe aux habitudes différentes.</p>

      <h3>2. Laurent Dubois, fromager Meilleur Ouvrier de France</h3>
      <p>Laurent Dubois est Meilleur Ouvrier de France et fait de l'affinage le cœur de son métier, dans des caves où température et hygrométrie sont contrôlées. Quatre boutiques à Paris : 97-99 rue Saint-Antoine (4e), 47 ter boulevard Saint-Germain (5e), 2 rue de Lourmel (15e) et 58 rue d'Auteuil (16e).</p>

      <h3>3. Quatrehomme, rue de Sèvres et quatre autres adresses</h3>
      <p>En 2000, lors de la première édition du concours consacrée à la fromagerie, Marie Quatrehomme est devenue la première femme Meilleur Ouvrier de France fromagère. La maison tient quatre boutiques à Paris : 62 rue de Sèvres (7e), 26 rue des Martyrs (9e), 4 rue du Rendez-vous (12e) et 32 rue de l'Espérance (13e), et une à Issy-les-Moulineaux.</p>

      <h3>4. Côté charcuterie halal : des repères plutôt que des adresses</h3>
      <p>Nous n'avons pas trouvé, au 17 octobre 2026, de charcutier halal parisien distingué par un concours ou un guide reconnu. Plutôt que de citer une adresse au hasard, voici les repères officiels des deux charcuteries de bœuf les plus connues :</p>
      <table>
        <thead>
          <tr><th>Charcuterie</th><th>Repère officiel</th><th>Ce que cela garantit</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Bresaola della Valtellina IGP</strong></td><td>Indication géographique protégée de l'Union européenne</td><td>Bœuf de 2 à 4 ans, cuisse, produit dans la province de Sondrio (Lombardie)</td></tr>
          <tr><td><strong>Viande des Grisons IGP</strong></td><td>IGP suisse, enregistrée le 24 septembre 1999</td><td>Salaison, séchage et pressage dans le canton des Grisons ; au nord des Alpes, séchage au-dessus de 800 m d'altitude</td></tr>
          <tr><td><strong>Dinde et poulet fumés</strong></td><td>Pas d'appellation</td><td>À juger sur la liste d'ingrédients et l'origine de la volaille</td></tr>
        </tbody>
      </table>
      <p>Une version halal est préparée à partir d'une viande abattue selon le rite : demandez-en l'origine au fournisseur, la mention de l'IGP ne dit rien de l'abattage.</p>

      <h2>Comment reconnaître une bonne planche fromages et charcuterie ?</h2>
      <table>
        <thead>
          <tr><th>Critère</th><th>Ce qu'il faut regarder</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>La variété des fromages</strong></td><td>Plusieurs familles : pâte pressée, croûte fleurie, chèvre, pâte persillée. Un seul type lasse vite.</td></tr>
          <tr><td><strong>L'affinage</strong></td><td>Un fromage à point, servi à température ambiante : sorti du froid 30 minutes avant le service.</td></tr>
          <tr><td><strong>La charcuterie</strong></td><td>Tranches fines, roulées ou pliées, qui se prennent avec les doigts ; couleur franche, pas de bords secs.</td></tr>
          <tr><td><strong>L'inclusion</strong></td><td>Bœuf et volaille halal, aucun porc : une planche pour tout le monde.</td></tr>
          <tr><td><strong>Les accompagnements</strong></td><td>Pain artisanal, fruits frais, olives : ce sont eux qui font tenir la planche sur la durée d'un afterwork.</td></tr>
        </tbody>
      </table>

      <h2>Combien prévoir et quel budget pour 10, 20 ou 50 personnes ?</h2>
      <p>Nos plateaux de fromages et de charcuteries se chiffrent sur devis, selon l'effectif. Pour un budget au prix catalogue, le plus simple est un <strong>menu à partager</strong> qui les inclut : Le Parisien (37,90 € HT par personne) contient le plateau de charcuteries artisanales avec un club sandwich au blanc de poulet et une mini-baguette poulet curry ; Le Méditerranéen (37,50 € HT par personne) contient le plateau de fromages affinés. Livraison 29 € HT.</p>
      <table>
        <thead>
          <tr><th>Personnes</th><th>Le Parisien (charcuteries)</th><th>Le Méditerranéen (fromages)</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>10</strong></td><td>10 × 37,90 = 379 € + 29 € = <strong>408 € HT</strong></td><td>10 × 37,50 = 375 € + 29 € = <strong>404 € HT</strong></td></tr>
          <tr><td><strong>20</strong></td><td>20 × 37,90 = 758 € + 29 € = <strong>787 € HT</strong></td><td>20 × 37,50 = 750 € + 29 € = <strong>779 € HT</strong></td></tr>
          <tr><td><strong>50</strong></td><td>50 × 37,90 = 1 895 € + 29 € = <strong>1 924 € HT</strong></td><td>50 × 37,50 = 1 875 € + 29 € = <strong>1 904 € HT</strong></td></tr>
        </tbody>
      </table>
      <p>Pour une planche seule en complément d'un cocktail, demandez un devis : nous ajustons la taille du plateau à votre effectif. Le choix entre buffet et cocktail est détaillé dans <a href="/journal/buffet-a-partager-ou-cocktail-entreprise-paris">buffet à partager ou cocktail</a>, et les régimes dans <a href="/journal/menu-inclusif-entreprise-halal-vegetarien-sans-gluten">menu inclusif halal, végétarien, sans gluten</a> et <a href="/journal/traiteur-halal-entreprise-paris">traiteur halal d'entreprise à Paris</a>.</p>

      <h2>Avec L'Écrin Traiteur</h2>
      <ul>
        <li><strong>Les plateaux</strong> : <a href="/creations/plateaux-aperitifs/go2">Charcuteries Artisanales</a>, halal et sans porc, et <a href="/creations/plateaux-aperitifs/go1">Fromages Affinés</a> (sur devis).</li>
        <li><strong>Les menus à partager</strong> : <a href="/creations/a-partager">Le Parisien, Le Méditerranéen, Le Jardin</a>, de 34,90 à 37,90 € HT par personne.</li>
        <li><strong>Livraison</strong> dès 6h30 à Paris et en Île-de-France, 29 € HT à Paris et dans les communes proches, par notre propre équipe.</li>
        <li><strong>Commande</strong> jusqu'à la veille 10h ; 48 h à l'avance à partir de 50 personnes. Minimum 50 € HT de produits.</li>
        <li><strong>Devis</strong> sous 24 h, facture entreprise avec TVA.</li>
      </ul>
      <p>Les plateaux de fromages et de charcuterie halal sont sur la page <a href="/creations/plateaux-aperitifs">plateaux apéritifs</a>. Tous nos prix sont sur la page <a href="/tarifs">tarifs</a>. <a href="/devis">Demandez votre devis</a>.</p>

      <h2>Sources</h2>
      <ul>
        <li>Laurent Dubois : <a href="https://www.fromageslaurentdubois.fr/" rel="noopener">site officiel</a>, consulté le 17 octobre 2026.</li>
        <li>Quatrehomme : <a href="https://www.quatrehomme.fr/" rel="noopener">site officiel</a>, consulté le 17 octobre 2026.</li>
        <li>Viande des Grisons IGP : <a href="https://www.blw.admin.ch/dam/fr/sd-web/bQV8MdCpOgk8/B%C3%BCndnerfleisch%20Cahier%20des%20charges.pdf" rel="noopener">cahier des charges, Office fédéral de l'agriculture (Suisse)</a>, version du 25 octobre 2017, consulté le 17 octobre 2026.</li>
        <li>Bresaola della Valtellina IGP : <a href="https://webgate.ec.europa.eu/eambrosia-api/api/v1/attachments/63622" rel="noopener">cahier des charges, registre eAmbrosia de la Commission européenne</a>, consulté le 17 octobre 2026.</li>
        <li>Prix et compositions L'Écrin Traiteur : catalogue en vigueur au 17 octobre 2026.</li>
      </ul>
    `,
    relatedProducts: [],
    faq: [
      { q: "Quels sont les meilleurs fromagers de Paris pour un apéritif ?", a: "Deux maisons sont tenues par des Meilleurs Ouvriers de France : Laurent Dubois (4 boutiques, dont rue Saint-Antoine et boulevard Saint-Germain) et Quatrehomme (rue de Sèvres, rue des Martyrs…). Pour une livraison en entreprise, L'Écrin Traiteur livre un plateau de fromages affinés dès 6h30, sur devis." },
      { q: "Quelle charcuterie servir à un apéritif d'entreprise sans porc ?", a: "Des charcuteries de bœuf et de volaille : bœuf séché, bresaola, viande des Grisons, dinde fumée, poulet fumé. C'est la composition du plateau Charcuteries Artisanales de L'Écrin Traiteur, halal et sans porc, avec olives vertes et raisin frais." },
      { q: "Combien coûte un apéritif fromages et charcuterie pour 20 personnes ?", a: "Les plateaux seuls sont sur devis. Au prix catalogue, le menu à partager Le Parisien, qui inclut le plateau de charcuteries, coûte 37,90 € HT par personne : 758 € HT pour 20 personnes, 787 € HT avec la livraison." },
    ],
  },
]
