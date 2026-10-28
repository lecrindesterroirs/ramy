// Guide « comment organiser un buffet d'entreprise » (28 octobre 2026) : le guide de processus (étapes,
// rétroplanning, quantités, budget, installation). Il complète sans le remplacer le guide d'orientation
// « buffet-entreprise-guide-complet-paris » et renvoie vers les guides détaillés (dressage, quantités
// du buffet froid, allergènes, restes, maître d'hôtel).
// Tous les chiffres viennent de ces guides et de lib/calculsPrix.js : menus à partager 34,90 à 37,90 € HT
// (8 à 12 convives), cocktails 29,90 / 40,90 / 51,90 €, L'Afterwork 35,90 €, livraison 29 € HT,
// minimum 50 € HT, commande jusqu'à la veille 10h (48 h dès 50 personnes), jetable sans supplément, vaisselle en dur sur devis,
// livraison avec reprise de vaisselle réutilisable 39 € HT (Paris, 92, 94), maître d'hôtel 250 € HT les 6 h. « 20 personnes » = n × prix + 29 € de livraison.

// FAQ visible dans l'article (même contenu que le FAQPage JSON-LD généré depuis `faq`) : le gabarit français
// n'affiche pas `faq` tout seul, contrairement au gabarit anglais.
const faqHtml = (faq) => `
      <div class="faq-block">
${faq.map(({ q, a }) => `        <details>
          <summary><strong>${q}</strong></summary>
          <p>${a}</p>
        </details>`).join('\n')}
      </div>`

const FAQ = [
  { q: "Comment organiser un buffet d'entreprise ?", a: "En six étapes : fixer l'objectif et l'effectif, choisir le format (menu à partager ou cocktail), recenser les régimes une semaine avant, demander le devis et commander, préparer l'espace et l'accès, puis tenir le jour J. Chez L'Écrin Traiteur, on commande jusqu'à la veille 10h, et 48 h à l'avance à partir de 50 personnes." },
  { q: "Combien de temps à l'avance commander un buffet d'entreprise ?", a: "Chez L'Écrin Traiteur, jusqu'à la veille 10h, et 48 h à l'avance à partir de 50 personnes. Pour un événement important ou une date chargée, demandez le devis dès que la date est fixée : il arrive sous 24 h." },
  { q: "Quelle quantité par personne prévoir pour un buffet d'entreprise ?", a: "Comptez 6 pièces salées par personne avec des salades, 9 sans, plus 2 à 3 pièces sucrées, et ajoutez 10 % de marge sur l'effectif confirmé. Pour 20 personnes, cela fait 120 pièces salées avec salades et 40 à 60 pièces sucrées." },
  { q: "Quel budget prévoir pour un buffet d'entreprise à Paris ?", a: "Pour 20 personnes, livraison de 29 € HT comprise : de 727 à 787 € HT en menu à partager (34,90 à 37,90 € HT par personne), de 627 à 1 067 € HT en cocktail de 8 à 16 pièces. Les boissons, la vaisselle en dur (sur devis) et un éventuel maître d'hôtel s'ajoutent." },
  { q: "À partir de combien de personnes faut-il deux points de service ?", a: "Au-delà de 20 à 25 convives. Un seul point crée une file : dédoublez la table ou dupliquez les plats principaux pour que chacun soit servi dans les dix premières minutes." },
  { q: "Combien de temps un buffet peut-il rester sur la table ?", a: "Chez L'Écrin Traiteur, les produits réfrigérés se consomment dans les 4 heures après la livraison, et pas plus de 2 heures à température ambiante. Ce qui a été exposé sur le buffet ne se redonne pas." },
  { q: "Plateaux repas ou buffet : que choisir pour une équipe ?", a: "Le plateau repas ou la lunch box convient quand chacun mange seul, à son poste ou en réunion courte : de 18,90 à 30,90 € HT par personne. Le menu à partager convient quand le repas réunit l'équipe : de 34,90 à 37,90 € HT par personne, soit 6 à 7 € HT de plus qu'un plateau repas." },
  { q: "Quelle différence entre un buffet et un cocktail ?", a: "Le buffet à partager se déguste assis, posé au centre de la table, pour un repas. Le cocktail se picore debout, pièce par pièce, en circulant. Le choix dépend du moment de la journée et de l'ambiance, pas du standing." },
    ]

export const BUFFET_ORGANISER_ARTICLES = [
  {
    slug: 'comment-organiser-buffet-entreprise-retroplanning-quantites-budget',
    titre: "Comment organiser un buffet d'entreprise : rétroplanning, quantités et budget",
    metaTitle: "Organiser un buffet d'entreprise : rétroplanning et budget",
    categorie: 'Conseils',
    date: '28 octobre 2026',
    isoDate: '2026-10-28',
    extrait: "Les 6 étapes pour organiser un buffet d'entreprise, le rétroplanning de J-7 au jour J, les quantités par personne, le budget pour 20 personnes et les erreurs qui font rater un buffet.",
    img: '/hero-a-partager.webp',
    enBref: [
      "Organisez un buffet d'entreprise en 6 étapes : objectif et effectif, format, régimes, devis et commande, espace, jour J. Chez L'Écrin Traiteur, on commande jusqu'à la veille 10h (48 h à partir de 50 personnes) et le buffet arrive dressé.",
      "Comptez 6 pièces salées par personne avec des salades, 9 sans, plus 2 à 3 pièces sucrées, et ajoutez 10 % de marge sur l'effectif confirmé.",
      "Pour 20 personnes, livraison de 29 € HT comprise : de 727 à 787 € HT en menu à partager (34,90 à 37,90 € HT par personne), de 627 à 1 067 € HT en cocktail de 8 à 16 pièces.",
      "Au-delà de 20 à 25 convives, prévoyez deux points de service pour que chacun soit servi dans les dix premières minutes.",
    ],
    contenu: `
      <p>Pour organiser un buffet d'entreprise, procédez en six étapes : <strong>fixer l'objectif et l'effectif, choisir le format, recenser les régimes, commander, préparer l'espace, puis tenir le jour J</strong>. Trois repères évitent l'essentiel des ratés : une marge de 10 % sur l'effectif confirmé, 6 pièces salées par personne avec des salades (9 sans), et un second point de service dès 20 à 25 convives. Chez L'Écrin Traiteur, on commande jusqu'à la veille 10h (48 h à partir de 50 personnes) et le buffet est livré dressé.</p>

      <h2>Les 6 étapes pour organiser un buffet d'entreprise</h2>
      <ol>
        <li><strong>Fixez l'objectif et l'effectif.</strong> Déjeuner d'équipe, accueil de partenaires, pot de départ, soirée de fin d'année : l'objectif décide du format, de la durée et du budget. Partez de l'effectif réellement confirmé et ajoutez 10 % de marge, pas davantage : au-delà, le surplus finit à la poubelle.</li>
        <li><strong>Choisissez le format.</strong> Assis autour d'un menu posé au centre de la table, ou debout avec un cocktail : voir le tableau plus bas.</li>
        <li><strong>Recensez les régimes et les allergies une semaine avant</strong>, dans l'invitation ou le formulaire d'inscription, et transmettez-les au traiteur avec le nombre de personnes concernées.</li>
        <li><strong>Demandez le devis et commandez.</strong> Donnez au traiteur de quoi chiffrer juste : la date, l'adresse et l'accès, l'horaire de livraison, l'effectif confirmé, les régimes et les allergies, et votre budget. Chez L'Écrin, le devis arrive sous 24 h et le minimum de commande est de 50 € HT de produits.</li>
        <li><strong>Préparez l'espace et l'accès.</strong> Une table dégagée, une table séparée pour les boissons, un accès livreur clair (interphone, quai, étage) et l'adresse exacte de livraison.</li>
        <li><strong>Tenez le jour J.</strong> Réceptionnez, posez le buffet, affichez la fiche des allergènes et respectez les délais de consommation.</li>
      </ol>

      <h2>Le rétroplanning : quoi faire et quand</h2>
      <table>
        <thead>
          <tr><th>Quand</th><th>Ce qu'il y a à faire</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Dès que la date est fixée</strong></td><td>Fixer l'objectif, le budget et la date. Demander le devis : réponse sous 24 h.</td></tr>
          <tr><td><strong>J-7</strong></td><td>Recenser les allergies et les régimes. Valider le devis. Vérifier l'accès du livreur et l'espace disponible.</td></tr>
          <tr><td><strong>J-2</strong></td><td>Confirmer l'effectif réel, avec 10 % de marge. À partir de 50 personnes, la commande est ferme 48 h avant la livraison.</td></tr>
          <tr><td><strong>J-1, avant 10h</strong></td><td>Dernier ajustement possible de la commande.</td></tr>
          <tr><td><strong>Jour J</strong></td><td>Livraison dès 6h30. Poser le buffet, afficher la fiche des allergènes. Consommer les produits réfrigérés dans les 4 heures après la livraison, ceux à température ambiante dans les 2 heures.</td></tr>
          <tr><td><strong>Après</strong></td><td>Ne pas redonner ce qui a été exposé sur le buffet. Voir <a href="/journal/restes-buffet-entreprise-que-faire">que faire des restes d'un buffet</a>.</td></tr>
        </tbody>
      </table>

      <h2>Quel format choisir : buffet à partager ou cocktail ?</h2>
      <table>
        <thead>
          <tr><th>Format</th><th>Pour quel moment</th><th>Quantité</th><th>Prix par personne (HT)</th></tr>
        </thead>
        <tbody>
          <tr><td><strong><a href="/creations/a-partager">Menu à partager</a></strong></td><td>Déjeuner d'équipe, repas assis autour d'une table</td><td>Menu calibré pour 8 à 12 convives : 6 recettes salées et 2 sucrées</td><td>34,90 à 37,90 €</td></tr>
          <tr><td><strong>Cocktail de 8 pièces</strong></td><td>Apéritif, afterwork, pot de départ d'une à deux heures</td><td>6 à 8 pièces par personne</td><td>29,90 €</td></tr>
          <tr><td><strong>Cocktail de 12 pièces</strong></td><td>Cocktail déjeunatoire, remplace le déjeuner</td><td>12 à 14 pièces par personne</td><td>40,90 €</td></tr>
          <tr><td><strong>Cocktail de 16 pièces</strong></td><td>Cocktail dînatoire, dîner debout</td><td>16 à 18 pièces par personne</td><td>51,90 €</td></tr>
        </tbody>
      </table>
      <p>Le choix dépend du moment de la journée et de l'ambiance, pas du standing : le détail est dans <a href="/journal/buffet-a-partager-ou-cocktail-entreprise-paris">buffet à partager ou cocktail, comment choisir</a>. Pour compter selon votre effectif, le <a href="/calculateur-quantites">calculateur de quantités</a> donne le même calcul.</p>

      <h2>Plateaux repas ou buffet : lequel choisir ?</h2>
      <p>Quatre questions tranchent : <strong>combien de temps dure la pause, combien de personnes, où mange-t-on, et veut-on que l'équipe échange ?</strong> Le plateau repas (ou la lunch box) se mange seul, à son poste ou en salle de réunion, en quelques minutes. Le buffet à partager se pose au milieu de la table et réunit l'équipe : c'est le bon format quand le repas fait partie de l'événement.</p>
      <table>
        <thead>
          <tr><th></th><th><a href="/creations/lunch-box">Lunch box</a></th><th><a href="/creations/plateaux-repas">Plateau repas</a></th><th><a href="/creations/a-partager">Menu à partager</a></th></tr>
        </thead>
        <tbody>
          <tr><td><strong>On mange</strong></td><td>Seul, où l'on veut</td><td>Seul ou en petit groupe, à table ou en salle</td><td>Ensemble, autour d'une table</td></tr>
          <tr><td><strong>Prix par personne (HT)</strong></td><td>18,90 à 21,90 €</td><td>28,90 à 30,90 €</td><td>34,90 à 37,90 €</td></tr>
          <tr><td><strong>20 personnes livrées (HT)</strong></td><td>407 à 467 €</td><td>607 à 647 €</td><td>727 à 787 €</td></tr>
          <tr><td><strong>Le bon choix pour</strong></td><td>Déjeuner sur le pouce, formation, réunion courte</td><td>Séminaire, déjeuner de travail</td><td>Déjeuner d'équipe, accueil de partenaires</td></tr>
        </tbody>
      </table>
      <p>Le menu à partager coûte donc 6 à 7 € HT de plus par personne qu'un plateau repas : le surcoût paie le moment partagé, pas le contenu de l'assiette. Détail des trois formats dans <a href="/journal/buffet-froid-entreprise-quantites-par-personne">les quantités d'un buffet froid</a>.</p>

      <h2>Quelles quantités par personne prévoir ?</h2>
      <p>Pour un buffet froid, comptez par personne 6 pièces salées si des salades l'accompagnent, 9 sans salade, et 2 à 3 pièces sucrées. Ajoutez 10 % de marge sur l'effectif confirmé.</p>
      <table>
        <thead>
          <tr><th>Poste</th><th>Par personne</th><th>10 personnes</th><th>20 personnes</th><th>50 personnes</th></tr>
        </thead>
        <tbody>
          <tr><td>Pièces salées, avec salades</td><td>6</td><td>60</td><td>120</td><td>300</td></tr>
          <tr><td>Pièces salées, sans salade</td><td>9</td><td>90</td><td>180</td><td>450</td></tr>
          <tr><td>Pièces sucrées</td><td>2 à 3</td><td>20 à 30</td><td>40 à 60</td><td>100 à 150</td></tr>
        </tbody>
      </table>
      <p>Pour les boissons d'un repas d'une heure, comptez une tasse, un verre d'eau et un verre de jus pour une personne sur deux : pour 20 personnes, 4 thermos de 1 L, 5 bouteilles d'eau et 2 L de jus, soit 121 € HT. Le détail pour 10, 20 et 50 personnes est dans <a href="/journal/buffet-froid-entreprise-quantites-par-personne">les quantités d'un buffet froid</a>, et celui des boissons dans <a href="/journal/combien-boissons-par-personne-reunion-seminaire-cocktail">combien de boissons par personne</a>.</p>

      <h2>Quel budget pour 20 personnes ?</h2>
      <p>Livraison de 29 € HT comprise ; les boissons du cocktail ne sont pas comptées.</p>
      <table>
        <thead>
          <tr><th>Format</th><th>Prix par personne (HT)</th><th>20 personnes livrées (HT)</th></tr>
        </thead>
        <tbody>
          <tr><td>Menu à partager</td><td>34,90 à 37,90 €</td><td>727 à 787 €</td></tr>
          <tr><td>Cocktail L'Invitation, 8 pièces</td><td>29,90 €</td><td>627 €</td></tr>
          <tr><td>Cocktail L'Afterwork, 10 pièces, fromages et chips</td><td>35,90 €</td><td>747 €</td></tr>
          <tr><td>Cocktail La Réception, 12 pièces</td><td>40,90 €</td><td>847 €</td></tr>
          <tr><td>Cocktail La Célébration, 16 pièces</td><td>51,90 €</td><td>1 067 €</td></tr>
        </tbody>
      </table>
      <p>À ajouter selon vos besoins : les boissons ; la vaisselle en dur, la verrerie et le nappage, sur devis (gobelets, serviettes et couverts jetables sont sans supplément) ; la livraison avec reprise de la vaisselle réutilisable, 39 € HT au lieu de 29 € HT à Paris, dans le 92 et le 94 ; et, pour un cocktail debout de 20 à 40 invités, un maître d'hôtel à 250 € HT les 6 heures (<a href="/journal/maitre-d-hotel-buffet-entreprise-combien-prix">voir quand en prévoir un</a>). Tous nos <a href="/tarifs">tarifs</a> sont publics.</p>

      <h2>Installer le buffet : l'ordre, les points de service, les couverts</h2>
      <ul>
        <li><strong>L'ordre sur la table :</strong> salades et plats froids en premier dans le sens de circulation, puis les plats plus consistants, et les desserts en dernier, à distance du salé.</li>
        <li><strong>Les boissons sur une table séparée :</strong> la circulation reste fluide et la file ne bloque pas le buffet principal.</li>
        <li><strong>Les points de service :</strong> au-delà de 20 à 25 convives, un seul point crée une file. Dédoublez la table, ou dupliquez les plats principaux aux deux extrémités, pour que tout le monde soit servi dans les dix premières minutes.</li>
        <li><strong>Un couvert de service par plat :</strong> une pince ou une cuillère par plat salé, une pince à pâtisserie pour les desserts, une cuillère à sauce séparée si besoin. Un couvert en trop vaut mieux qu'une file faute d'ustensile.</li>
        <li><strong>La mise en place :</strong> chez L'Écrin, les menus à partager et les plateaux cocktail arrivent déjà dressés. Vous prévoyez l'espace et, si besoin, la vaisselle en dur (sur devis). Le détail est dans <a href="/journal/dressage-buffet-entreprise-organisation-materiel">dressage d'un buffet d'entreprise</a>.</li>
      </ul>

      <h2>Régimes et allergènes : ce qu'il faut prévoir</h2>
      <p>Toute la carte de L'Écrin est halal et sans porc. Les options végétariennes, vegan et sans gluten se commandent au même prix : indiquez-les dans la demande de devis, pas le jour J. Depuis 2015, un traiteur doit signaler par écrit la présence des 14 allergènes réglementaires, y compris pour un buffet : demandez la fiche avec le devis et affichez-la à côté du buffet. Les règles complètes sont dans <a href="/journal/allergenes-traiteur-buffet-plateaux-obligations">allergènes : ce que doit indiquer un traiteur</a>.</p>

      <h2>Les 7 erreurs qui font rater un buffet d'entreprise</h2>
      <ul>
        <li>Annoncer un effectif approximatif au lieu de l'effectif confirmé, ou arrondir large : le surplus est jeté.</li>
        <li>Prévoir un seul point de service au-delà de 20 à 25 convives.</li>
        <li>Oublier les couverts de service, ou n'en prévoir qu'un pour plusieurs plats.</li>
        <li>Ne pas préciser la vaisselle à la commande : jetable, réutilisable ou en dur, ce n'est ni le même prix ni la même reprise.</li>
        <li>Découvrir les régimes et les allergies le jour J.</li>
        <li>Poser les boissons sur la table du buffet.</li>
        <li>Laisser le buffet trop longtemps à température ambiante : au-delà de 2 heures, on ne le consomme plus.</li>
      </ul>

      <h2>Avec L'Écrin Traiteur</h2>
      <ul>
        <li>Livraison dès 6h30 à Paris et en Île-de-France, 29 € HT ; commande jusqu'à la veille 10h (48 h à partir de 50 personnes).</li>
        <li>Minimum de commande 50 € HT de produits ; devis sous 24 h, facture d'entreprise avec TVA.</li>
        <li>Menus à partager et cocktails livrés dressés, prêts à poser sur la table.</li>
      </ul>
      <p>Voir nos <a href="/creations/a-partager">menus à partager</a> et nos <a href="/creations/cocktails">cocktails</a>, ou <a href="/devis">demandez un devis</a> en indiquant la date, l'adresse, l'effectif et les régimes.</p>

      <h2>Questions fréquentes</h2>${faqHtml(FAQ)}
    `,
    relatedProducts: [],
    faq: FAQ,
  },
]
