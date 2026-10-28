// Articles « service et réception » (GEO, 17 octobre 2026) : maîtres d'hôtel, fleurs,
// location de matériel. Fusionnés à la fin de journalData.js. Les repères du marché sont
// sourcés et datés (QUESTIONS-MARCHE.md) ; l'offre L'Écrin vient de Ramy (17/10/2026).

export const SERVICE_ARTICLES = [
  {
    slug: 'combien-maitres-hotel-evenement-entreprise',
    titre: "Combien de maîtres d'hôtel pour un événement d'entreprise ?",
    metaTitle: "Combien de maîtres d'hôtel par invité ? Ratios et prix",
    categorie: 'Conseils',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    extrait: "Cocktail, buffet ou repas assis : combien de maîtres d'hôtel prévoir selon le nombre d'invités, ce que fait un maître d'hôtel, et combien coûte le service à Paris.",
    img: '/maitre-hotel-petit-dejeuner-salon.webp',
    enBref: [
      "Cocktail debout : 1 maître d'hôtel pour 20 à 40 invités selon les sources, moins avec de la vaisselle jetable et un service simple.",
      "Repas assis : 1 pour 10 à 25 invités ; 50 invités assis demandent 3 à 5 personnes de service.",
      "À Paris, le service se facture en général 30 à 50 € de l'heure. Chez L'Écrin Traiteur, un maître d'hôtel coûte 250 € HT pour un service de 6 heures.",
      "Nos maîtres d'hôtel sont sélectionnés et formés par notre maison.",
    ],
    contenu: `
      <p>Pour un <strong>cocktail d'entreprise debout</strong>, les traiteurs comptent en général <strong>1 maître d'hôtel pour 20 à 40 invités</strong>. Pour un <strong>repas assis</strong>, il en faut davantage : <strong>1 pour 10 à 25 invités</strong>. L'écart entre ces fourchettes ne vient pas du hasard : il dépend de la vaisselle, des pièces chaudes, de la durée et du lieu. Voici comment trancher pour votre événement.</p>

      <h2>Combien de maîtres d'hôtel selon le format ?</h2>
      <table>
        <thead>
          <tr><th>Format</th><th>Ratio le plus courant</th><th>Ce qui le fait varier</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Cocktail debout</strong></td><td>1 pour 20 à 30 invités</td><td>1 pour 20 si le cocktail est long et haut de gamme, 1 pour 30 s'il est simple et court</td></tr>
          <tr><td><strong>Cocktail dînatoire</strong></td><td>1 pour 25 à 30 invités</td><td>Les pièces chaudes servies au plateau demandent plus de bras</td></tr>
          <tr><td><strong>Cocktail simple, vaisselle jetable</strong></td><td>1 pour 50 à 80 invités</td><td>Moins de 12 pièces par personne, pas de vaisselle à débarrasser</td></tr>
          <tr><td><strong>Buffet</strong></td><td>1 pour 20 à 40 invités</td><td>Buffet chaud et vaisselle en dur : plutôt 1 pour 30</td></tr>
          <tr><td><strong>Petit-déjeuner ou pause</strong></td><td>1 pour 50 à 80 invités</td><td>Avec vaisselle en dur : 1 pour 50</td></tr>
          <tr><td><strong>Repas assis</strong></td><td>1 pour 10 à 25 invités</td><td>Repas complet à plusieurs plats : 1 pour 10 à 15</td></tr>
        </tbody>
      </table>
      <p>Ces repères viennent de traiteurs et d'agences de service (voir les sources en bas de page). Ils ne forment pas une norme : ils donnent un ordre de grandeur que votre traiteur ajuste à votre lieu.</p>

      <h2>Combien de maîtres d'hôtel pour 50, 100 ou 200 invités ?</h2>
      <table>
        <thead>
          <tr><th>Invités</th><th>Cocktail ou buffet debout</th><th>Repas assis</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>50</strong></td><td>2</td><td>3 à 5</td></tr>
          <tr><td><strong>100</strong></td><td>3 à 5</td><td>4 à 10</td></tr>
          <tr><td><strong>200</strong></td><td>5 à 8</td><td>8 à 16</td></tr>
        </tbody>
      </table>
      <p>Prévoyez toujours au moins deux personnes, même pour un petit cocktail : l'une sert, l'autre réassortit le buffet et débarrasse.</p>

      <h2>Maître d'hôtel ou serveur : quelle différence ?</h2>
      <p>Le serveur exécute : mise en place, service, débarrassage, réassort. Le maître d'hôtel coordonne : il tient le timing de l'événement, répartit l'équipe, fait le lien avec la cuisine et avec vous. Beaucoup de traiteurs appellent « maître d'hôtel » toute personne de service : regardez sur le devis ce que recouvre l'intitulé, et combien d'heures sont comptées.</p>

      <h2>Combien coûte un maître d'hôtel à Paris ?</h2>
      <p>À Paris, le service se facture en général <strong>30 à 50 € de l'heure</strong>, souvent avec un minimum de 3 ou 4 heures. Comptez l'installation avant l'arrivée des invités et le rangement après dans le nombre d'heures facturées.</p>
      <p>Chez L'Écrin Traiteur, un maître d'hôtel coûte <strong>250 € HT pour un service de 6 heures</strong>, mise en place et remise en ordre comprises. Pour un cocktail de 100 invités servi par 4 maîtres d'hôtel, le service revient à 1 000 € HT.</p>

      <h2>Nos maîtres d'hôtel</h2>
      <p>Chez L'Écrin, nous sélectionnons nos propres maîtres d'hôtel, formés par notre maison. Ils connaissent nos produits, nos formules et notre façon de recevoir. Ils s'investissent pleinement dans chaque prestation, avec un seul souci : faire de votre événement une véritable réussite.</p>
      <p>Le service s'ajoute à un <a href="/creations/cocktails">cocktail</a>, à un <a href="/creations/a-partager">buffet à partager</a> ou à une <a href="/creations/animations-culinaires">animation culinaire</a>. Indiquez dans votre <a href="/devis">demande de devis</a> le nombre d'invités, le format et la durée : nous vous proposons le nombre de maîtres d'hôtel adapté.</p>

      <h2>Les questions à vous poser avant de réserver</h2>
      <ul>
        <li><strong>Debout ou assis ?</strong> C'est ce qui change le plus le nombre de personnes.</li>
        <li><strong>Vaisselle en dur ou jetable ?</strong> La vaisselle en dur demande plus de débarrassage.</li>
        <li><strong>Pièces chaudes servies au plateau ?</strong> Comptez une personne de plus.</li>
        <li><strong>Un ou plusieurs espaces ?</strong> Un lieu sur deux niveaux double parfois les besoins.</li>
        <li><strong>Quelle durée, installation et rangement compris ?</strong></li>
      </ul>

      <h2>Sources</h2>
      <ul>
        <li>Ratios par format : Acteur Fête (9 juillet 2026), Bonnaire Traiteur (8 septembre 2025), Firmin Traiteur (1er juin 2022), RS Traiteur (4 mai 2026), MyTraiteur (16 août 2019), consultés le 17 octobre 2026.</li>
        <li>Prix horaires à Paris : Acteur Fête et RS Traiteur, consultés le 17 octobre 2026.</li>
        <li>Prix L'Écrin Traiteur : tarif en vigueur au 17 octobre 2026.</li>
      </ul>
    `,
    relatedProducts: [],
    faq: [
      { q: "Combien de maîtres d'hôtel pour un cocktail de 100 personnes ?", a: "3 à 5 en cocktail debout selon la durée, la vaisselle et les pièces chaudes servies au plateau. Pour 100 invités assis, comptez 4 à 10 personnes de service." },
      { q: "Combien coûte un maître d'hôtel à Paris ?", a: "En général 30 à 50 € de l'heure, avec un minimum de 3 ou 4 heures. Chez L'Écrin Traiteur, 250 € HT pour un service de 6 heures, mise en place et remise en ordre comprises." },
      { q: "Quelle différence entre un maître d'hôtel et un serveur ?", a: "Le serveur exécute le service ; le maître d'hôtel coordonne l'équipe, le timing et le lien avec la cuisine et l'organisateur. Beaucoup de traiteurs appellent « maître d'hôtel » tout le personnel de service." },
    ],
  },

  {
    slug: 'composition-florale-evenement-entreprise-prix',
    titre: "Composition florale pour un événement d'entreprise : combien en prévoir et à quel prix ?",
    metaTitle: "Fleurs pour un événement d'entreprise : quantités et prix",
    categorie: 'Conseils',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    extrait: "Combien de centres de table, quelle hauteur, quel budget pour un buffet, un cocktail ou un accueil fleuri : les repères chiffrés pour fleurir un événement d'entreprise.",
    img: '/hero-a-partager.webp',
    enBref: [
      "Un centre de table coûte en général 25 à 90 € s'il est bas, 50 à 180 € s'il est haut ; une composition de buffet 45 à 250 €.",
      "Comptez 1 centre par table ronde de 150 cm, 2 à 3 par table rectangulaire de 8.",
      "Hauteur : moins de 30 cm ou plus de 60 cm, pour que les invités se voient.",
      "Chez L'Écrin Traiteur, la composition florale est réalisée par un fleuriste partenaire, sur devis, avec le traiteur.",
    ],
    contenu: `
      <p>Pour fleurir un événement d'entreprise, comptez en général <strong>25 à 90 € par centre de table bas</strong> et <strong>50 à 180 € par composition haute</strong>, plus la livraison et l'installation. Le nombre de compositions dépend des tables, du buffet et de l'accueil. Voici les repères pour bâtir votre budget.</p>

      <h2>Combien coûte une composition florale ?</h2>
      <table>
        <thead>
          <tr><th>Composition</th><th>Prix constaté</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Centre de table bas</strong></td><td>25 à 90 €</td></tr>
          <tr><td><strong>Composition haute</strong></td><td>50 à 180 € (à partir de 95 € HT chez certains fleuristes)</td></tr>
          <tr><td><strong>Composition de buffet</strong></td><td>45 à 250 €</td></tr>
          <tr><td><strong>Petit bouquet de mange-debout</strong></td><td>à partir de 15 € HT</td></tr>
          <tr><td><strong>Livraison et installation</strong></td><td>forfait autour de 250 € HT chez certains fleuristes, démontage en sus</td></tr>
        </tbody>
      </table>
      <p>Pour un événement d'entreprise de 150 personnes avec décor complet, un fleuriste estime le budget fleurs et végétaux entre 1 800 et 4 000 €. Un cocktail avec un bouquet au buffet et quelques compositions sur les mange-debout reste bien en dessous.</p>

      <h2>Combien de centres de table prévoir ?</h2>
      <table>
        <thead>
          <tr><th>Table</th><th>Convives</th><th>Compositions</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Ronde de 150 cm</strong></td><td>8</td><td>1 centre de 30 à 40 cm de diamètre</td></tr>
          <tr><td><strong>Ronde de 180 cm</strong></td><td>10 à 12</td><td>1 grande composition ou 3 petits contenants</td></tr>
          <tr><td><strong>Rectangulaire</strong></td><td>6</td><td>2</td></tr>
          <tr><td><strong>Rectangulaire de 200 cm</strong></td><td>8</td><td>2 à 3</td></tr>
          <tr><td><strong>Rectangulaire de 240 cm</strong></td><td>10</td><td>3 à 4</td></tr>
        </tbody>
      </table>

      <h2>Quelle hauteur pour un centre de table ?</h2>
      <p><strong>Moins de 30 cm, ou plus de 60 cm sur un pied fin.</strong> Entre les deux, la composition cache les visages et gêne la conversation. Pour un déjeuner de travail ou un repas assis où l'on échange, préférez des compositions basses.</p>

      <h2>Où mettre des fleurs dans un événement d'entreprise ?</h2>
      <ul>
        <li><strong>À l'accueil</strong> : c'est la première image de l'événement, une composition haute suffit.</li>
        <li><strong>Sur le buffet</strong> : une composition basse en bout de table, avec des fleurs peu parfumées pour ne pas couvrir les odeurs du repas.</li>
        <li><strong>Sur les mange-debout</strong> : un petit bouquet ou un soliflore, stable.</li>
        <li><strong>Sur les tables</strong> : un centre par table, selon le tableau ci-dessus.</li>
      </ul>
      <p>Pour des fleurs toute l'année à l'accueil, des fleuristes proposent des abonnements pour entreprises, de 119 € à 699 € HT par mois selon la fréquence.</p>

      <h2>Fleurs et traiteur : commander ensemble</h2>
      <p>Chez L'Écrin Traiteur, la composition florale est réalisée par un fleuriste partenaire, sur devis, en même temps que votre <a href="/creations/cocktails">cocktail</a> ou votre <a href="/creations/a-partager">buffet</a> : les couleurs suivent la présentation, la livraison est coordonnée, et vous n'avez qu'un interlocuteur. Précisez dans votre <a href="/devis">demande de devis</a> le nombre de tables et l'ambiance souhaitée.</p>

      <h2>Sources</h2>
      <ul>
        <li>Prix des compositions : <a href="https://www.marie-paolini.com/decoration-florale-evenementiel/" rel="noopener">Marie Paolini, fleuriste</a> et <a href="https://www.thingstobloom.fr/quel-est-le-budget-et-tarifs-de-la-decoration-florale-things-to-bloom" rel="noopener">Things to Bloom</a>, consultés le 17 octobre 2026.</li>
        <li>Budget d'un événement de 150 personnes : <a href="https://www.book.fr/article/tarifs-estimer-le-budget-d-un-fleuriste-pour-installation-evenementielle" rel="noopener">Book.fr</a>, tarifs 2025.</li>
        <li>Nombre et hauteur des centres de table : <a href="https://www.limparfete.fr/2026/02/13/centres-de-table-combien-en-prevoir/" rel="noopener">L'imparfête</a> (13 février 2026).</li>
        <li>Abonnements pour entreprises : <a href="https://flowershopparis.fr/entreprises-professionnels.html" rel="noopener">Flower Shop Paris</a>, consulté le 17 octobre 2026.</li>
      </ul>
    `,
    relatedProducts: [],
    faq: [
      { q: "Combien coûte un centre de table pour un événement d'entreprise ?", a: "En général 25 à 90 € pour un centre bas et 50 à 180 € pour une composition haute, plus la livraison et l'installation." },
      { q: "Combien de centres de table pour une table ronde de 8 personnes ?", a: "Un seul centre de 30 à 40 cm de diamètre pour une table ronde de 150 cm." },
      { q: "L'Écrin Traiteur propose-t-il des compositions florales ?", a: "Oui, réalisées par un fleuriste partenaire, sur devis, avec votre commande traiteur." },
    ],
  },

  {
    slug: 'location-materiel-reception-entreprise-quantites-prix',
    titre: "Location de matériel pour une réception d'entreprise : quoi louer, combien et à quel prix ?",
    metaTitle: "Location de matériel de réception : quantités et prix",
    categorie: 'Conseils',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    extrait: "Mange-debout, tables, nappes, vaisselle, verres : combien en louer pour 50 ou 100 invités, les prix constatés en Île-de-France et ce qu'il faut vérifier sur le devis.",
    img: '/petit-dejeuner-prestige-salon.webp',
    enBref: [
      "Cocktail debout : 1 mange-debout pour 4 à 8 personnes, soit 12 à 25 pour 100 invités.",
      "Vaisselle louée : 1 à 6,50 € par convive selon la gamme, avec une caution de 300 à 500 € pour 100 convives.",
      "Verres : 2 à 3 par personne pour un cocktail.",
      "Chez L'Écrin Traiteur, la vaisselle vient de chez Options, référence de la location d'art de la table ; le mobilier passe par un loueur partenaire, sur devis, après vous avoir demandé le nombre de tables.",
    ],
    contenu: `
      <p>Pour un <strong>cocktail debout de 100 invités</strong>, comptez <strong>12 à 25 mange-debout</strong>, 200 à 300 verres et le nappage. Pour un repas assis, 12 à 13 tables rondes de 8. Voici les quantités, les prix constatés en Île-de-France et les pièges à éviter sur le devis.</p>

      <h2>Combien de mange-debout et de tables ?</h2>
      <table>
        <thead>
          <tr><th>Format</th><th>Repère</th><th>Pour 50 invités</th><th>Pour 100 invités</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Cocktail debout</strong></td><td>1 mange-debout pour 4 à 8 personnes</td><td>7 à 13</td><td>12 à 25</td></tr>
          <tr><td><strong>Cocktail de plus de 2 heures</strong></td><td>ajouter environ 30 % d'assises</td><td>15 chaises</td><td>30 chaises</td></tr>
          <tr><td><strong>Repas assis, tables rondes de 8</strong></td><td>1 table pour 8</td><td>7</td><td>12 à 13</td></tr>
          <tr><td><strong>Repas assis, tables rectangulaires</strong></td><td>6 à 8 par table</td><td>7 à 9</td><td>14 à 17</td></tr>
        </tbody>
      </table>

      <h2>Combien de vaisselle et de verres ?</h2>
      <ul>
        <li><strong>Verres pour un cocktail</strong> : 2 à 3 par personne. On repose son verre, on en reprend un propre.</li>
        <li><strong>Repas assis de 100 invités</strong> : 200 à 220 assiettes plates, 100 assiettes à dessert, 100 à 120 couverts, 10 à 15 plats de service.</li>
        <li>Ajoutez toujours <strong>10 % de marge</strong> pour la casse et les invités de dernière minute.</li>
      </ul>

      <h2>Combien coûte la location de matériel en Île-de-France ?</h2>
      <table>
        <thead>
          <tr><th>Article</th><th>Prix constaté</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Mange-debout</strong></td><td>12 à 35 € HT selon le modèle (pliant, housse, design)</td></tr>
          <tr><td><strong>Nappe ronde ou rectangulaire</strong></td><td>autour de 12,50 € HT</td></tr>
          <tr><td><strong>Pack vaisselle par couvert</strong> (2 assiettes, 3 couverts, 2 verres)</td><td>autour de 2,90 € HT</td></tr>
          <tr><td><strong>Vaisselle par convive</strong></td><td>1 à 1,60 € (basique), 2,50 à 4 € (intermédiaire), 4 à 6,50 € (complet)</td></tr>
          <tr><td><strong>Flûte, tasse à café</strong></td><td>0,60 € et 0,75 € HT pièce</td></tr>
          <tr><td><strong>Caution</strong></td><td>300 à 500 € pour 100 convives</td></tr>
        </tbody>
      </table>

      <h2>Ce qu'il faut vérifier sur le devis</h2>
      <ul>
        <li><strong>Le lavage</strong> : inclus ou facturé à part (0,50 à 0,80 € par convive quand il ne l'est pas). Certains loueurs acceptent la vaisselle rendue sale.</li>
        <li><strong>La casse</strong> : 2 à 8 € la pièce, ou une franchise.</li>
        <li><strong>Le retour</strong> : sous 24 à 48 h ; un jour de plus coûte souvent 20 à 50 % du tarif.</li>
        <li><strong>La livraison et la reprise</strong> : à l'étage, avec ou sans ascenseur, à quelle heure.</li>
        <li><strong>Ce que le traiteur fournit déjà</strong> : aucune règle commune. Certains incluent vaisselle et nappage, d'autres les facturent ou les proposent en location.</li>
      </ul>

      <h2>Le matériel avec L'Écrin Traiteur</h2>
      <p>Chez L'Écrin Traiteur, la vaisselle, la verrerie et le nappage viennent de chez <strong>Options</strong>, maison de référence de la location de matériel de réception (plus de 4 000 références). Le mobilier (mange-debout, tables) passe par un loueur partenaire. Tout est sur devis et livré avec votre commande. Nous vous demandons d'abord le nombre de tables et d'invités : nous ne le supposons jamais. Avec de la vaisselle réutilisable ou du matériel, la livraison avec reprise du matériel coûte 39 € HT à Paris, dans le 92 et le 94, et le prix de la zone plus 19 € HT ailleurs. Le détail de nos prix est sur la page <a href="/tarifs">tarifs</a> ; pour un devis, <a href="/devis">décrivez votre événement</a>.</p>

      <h2>Sources</h2>
      <ul>
        <li>Quantités de mange-debout et de tables : Faites la fête (20 mars 2026) et Thouron, consultés le 17 octobre 2026.</li>
        <li>Vaisselle et verres : SLF et <a href="https://www.options.fr/art-de-la-table/location-de-verres.html" rel="noopener">Options</a>, consultés le 17 octobre 2026.</li>
        <li>Prix : Paris Réceptions, consulté le 17 octobre 2026 ; caution, lavage, casse et retour : Au bonheur des convives (2 avril 2026).</li>
      </ul>
    `,
    relatedProducts: [],
    faq: [
      { q: "Combien de mange-debout pour 100 personnes ?", a: "12 à 25 selon les sources : 1 mange-debout pour 4 à 8 personnes. Au-delà de 2 heures de cocktail, ajoutez environ 30 % d'assises." },
      { q: "Combien de verres prévoir pour un cocktail ?", a: "2 à 3 verres par personne, avec 10 % de marge pour la casse." },
      { q: "Combien coûte la location de vaisselle ?", a: "En Île-de-France, de 1 à 6,50 € par convive selon la gamme, avec une caution de 300 à 500 € pour 100 convives. Vérifiez si le lavage est inclus." },
    ],
  },
  {
    slug: 'petit-dejeuner-prestige-entreprise-paris',
    titre: "Petit-déjeuner de prestige en entreprise : comment le réussir et quel budget ?",
    metaTitle: "Petit-déjeuner de luxe en entreprise : budget et conseils",
    categorie: 'Inspirations',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    extrait: "Porcelaine, nappage, fleurs, maître d'hôtel : ce qui transforme un petit-déjeuner d'entreprise en réception, et le budget réel pour 30 personnes à Paris.",
    img: '/petit-dejeuner-prestige-salon.webp',
    enBref: [
      "Un petit-déjeuner de prestige, c'est le même buffet qu'un petit-déjeuner complet, servi en porcelaine, sur nappe, avec des fleurs et un maître d'hôtel.",
      "Chez L'Écrin Traiteur, le petit-déjeuner Classique coûte 8 € HT par personne ; 30 personnes reviennent à 269 € HT livraison comprise.",
      "Le maître d'hôtel coûte 250 € HT pour un service de 6 heures ; la porcelaine et les nappes viennent de chez Options, les fleurs d'un fleuriste partenaire, sur devis.",
      "Commande jusqu'à la veille 14h, 48 h à l'avance à partir de 50 personnes.",
    ],
    contenu: `
      <p>Un <strong>petit-déjeuner de prestige</strong> pour un conseil d'administration, une réception de clients ou une matinée dans un salon de réception ne demande pas d'autres produits qu'un bon petit-déjeuner d'entreprise. Ce qui change, c'est la mise en scène : <strong>porcelaine au lieu du jetable, nappe blanche, fleurs, maître d'hôtel</strong>. La photo de cet article montre un petit-déjeuner servi par L'Écrin Traiteur dans le salon d'un hôtel particulier parisien.</p>

      <h2>Ce qui fait un petit-déjeuner de prestige</h2>
      <table>
        <thead>
          <tr><th>Élément</th><th>Petit-déjeuner classique</th><th>Petit-déjeuner de prestige</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Vaisselle</strong></td><td>Gobelets et serviettes fournis</td><td>Tasses et sous-tasses en porcelaine, verres</td></tr>
          <tr><td><strong>Table</strong></td><td>Table de réunion</td><td>Nappe blanche, plateaux de bois</td></tr>
          <tr><td><strong>Décor</strong></td><td>Aucun</td><td>Compositions florales basses sur le buffet</td></tr>
          <tr><td><strong>Service</strong></td><td>Livraison, chacun se sert</td><td>Maître d'hôtel qui accueille, sert le café et réassortit</td></tr>
          <tr><td><strong>Produits</strong></td><td colspan="2">Les mêmes : viennoiseries pur beurre, madeleines, brochettes de fruits, jus Alain Milliat en bouteille de verre, café et thé en thermos</td></tr>
        </tbody>
      </table>

      <h2>Quel budget pour 30 personnes ?</h2>
      <table>
        <thead>
          <tr><th>Poste</th><th>Montant HT</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Petit-déjeuner Classique</strong> (viennoiseries, jus, café, fruits), 30 × 8 €</td><td>240 €</td></tr>
          <tr><td><strong>Livraison avec reprise de la vaisselle</strong>, Paris, 92 et 94</td><td>39 €</td></tr>
          <tr><td><strong>Maître d'hôtel</strong>, service de 6 heures</td><td>250 €</td></tr>
          <tr><td><strong>Petit-déjeuner complet</strong> (60 mini-viennoiseries, madeleines et cake, 30 brochettes, café, thé, jus), à la place du Classique</td><td>sur devis</td></tr>
          <tr><td><strong>Porcelaine et nappage</strong></td><td>sur devis ; la location de vaisselle se constate entre 2,50 et 4 € par convive en gamme intermédiaire</td></tr>
          <tr><td><strong>Fleurs</strong></td><td>sur devis ; un centre de table bas coûte en général 25 à 90 €</td></tr>
        </tbody>
      </table>
      <p>Pour 30 personnes, la base L'Écrin (petit-déjeuner Classique, livraison avec reprise et maître d'hôtel) revient à <strong>529 € HT</strong> ; le petit-déjeuner complet se chiffre sur devis. Avec la porcelaine, une nappe et trois compositions florales, comptez quelques centaines d'euros de plus selon les choix.</p>

      <h2>Combien de maîtres d'hôtel ?</h2>
      <p>Pour un petit-déjeuner servi en vaisselle en dur, les traiteurs comptent environ 1 personne de service pour 50 invités. Un seul maître d'hôtel suffit donc jusqu'à une cinquantaine de personnes. Le détail par format est dans notre guide <a href="/journal/combien-maitres-hotel-evenement-entreprise">combien de maîtres d'hôtel pour un événement</a>.</p>

      <h2>Les détails qui se voient</h2>
      <ul>
        <li><strong>Des boissons en bouteille de verre</strong> : les jus Alain Milliat posés sur la table font partie du décor.</li>
        <li><strong>Des plateaux de bois</strong> plutôt que des boîtes : les viennoiseries se présentent à plat, rang par rang.</li>
        <li><strong>Des fleurs basses</strong> : moins de 30 cm, pour ne pas masquer le buffet ni les visages.</li>
        <li><strong>Des tasses en nombre suffisant</strong> : une par personne, plus 10 % de marge.</li>
        <li><strong>Une installation avant l'arrivée</strong> : le buffet doit être prêt au moins 15 minutes avant les premiers invités.</li>
      </ul>

      <h2>Avec L'Écrin Traiteur</h2>
      <p>Nous livrons dès 6h30 à Paris et en Île-de-France. Nos maîtres d'hôtel sont sélectionnés et formés par notre maison ; la porcelaine et le nappage viennent de chez Options, les fleurs d'un fleuriste partenaire, sur le même devis. Voir nos <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners</a>, nos <a href="/tarifs">tarifs</a>, ou <a href="/devis">demandez un devis</a>.</p>

      <h2>Sources</h2>
      <ul>
        <li>Prix L'Écrin Traiteur : <a href="/tarifs">tarifs 2026</a>, au 17 octobre 2026.</li>
        <li>Personnel pour un petit-déjeuner en vaisselle en dur : Firmin Traiteur (1er juin 2022).</li>
        <li>Location de vaisselle : Au bonheur des convives (2 avril 2026). Centres de table : <a href="https://www.marie-paolini.com/decoration-florale-evenementiel/" rel="noopener">Marie Paolini, fleuriste</a>, consulté le 17 octobre 2026.</li>
      </ul>
    `,
    relatedProducts: ['viennoiseries-melangees', 'madeleines-20'],
    faq: [
      { q: "Combien coûte un petit-déjeuner de prestige pour 30 personnes ?", a: "Chez L'Écrin Traiteur, 529 € HT pour le petit-déjeuner Classique, la livraison avec reprise de la vaisselle et un maître d'hôtel pendant 6 heures, plus la porcelaine, le nappage et les fleurs, sur devis. Le petit-déjeuner complet se chiffre sur devis." },
      { q: "Faut-il un maître d'hôtel pour un petit-déjeuner ?", a: "Pour un petit-déjeuner servi en porcelaine, oui : un maître d'hôtel accueille, sert le café et réassortit. Un seul suffit jusqu'à une cinquantaine de personnes." },
    ],
  },

  {
    slug: 'devis-traiteur-ce-qui-est-inclus',
    titre: "Vaisselle, nappage, personnel : qu'est-ce qui est inclus dans un devis traiteur ?",
    metaTitle: "Devis traiteur : ce qui est inclus (vaisselle, service)",
    categorie: 'Conseils',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    extrait: "Livraison, vaisselle, nappes, service, matériel, reprise : ce qui est compris ou facturé à part dans un devis traiteur d'entreprise, et les lignes à vérifier avant de signer.",
    img: '/hero-a-partager.webp',
    enBref: [
      "Il n'existe aucune règle commune : certains traiteurs incluent vaisselle et nappage, d'autres les facturent ou les louent.",
      "Chez L'Écrin Traiteur, gobelets, serviettes, vaisselle et couverts jetables sont inclus sans supplément, présentation dressée, prête à servir.",
      "Facturés à part : la livraison (29 € HT à Paris et communes proches), le maître d'hôtel (250 € HT les 6 heures), la reprise du matériel (livraison et reprise à 39 € HT à Paris, dans le 92 et le 94), la location et les fleurs (sur devis).",
      "Annulation sans frais jusqu'à 2 jours ouvrés avant la livraison, avant 10h.",
    ],
    contenu: `
      <p>Deux devis traiteur au même prix par personne peuvent couvrir des choses très différentes. Il n'existe <strong>aucune règle commune</strong> : certains traiteurs incluent la vaisselle et le nappage, d'autres les facturent à la personne, d'autres encore les proposent en location. Voici les lignes à vérifier, et ce que comprend un devis de L'Écrin Traiteur.</p>

      <h2>Les lignes à vérifier sur un devis traiteur</h2>
      <table>
        <thead>
          <tr><th>Poste</th><th>Souvent inclus ?</th><th>La question à poser</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Livraison</strong></td><td>Rarement</td><td>Quel forfait pour mon adresse ? À l'heure exacte ou dans un créneau ?</td></tr>
          <tr><td><strong>Gobelets, serviettes, couverts</strong></td><td>Souvent</td><td>Jetables ou réutilisables ?</td></tr>
          <tr><td><strong>Vaisselle en dur, verres</strong></td><td>Variable</td><td>Incluse, facturée par personne, ou en location ? Lavage compris ?</td></tr>
          <tr><td><strong>Nappage</strong></td><td>Variable</td><td>Combien de nappes, à quel prix ? Certains facturent 1 € HT par personne.</td></tr>
          <tr><td><strong>Personnel de service</strong></td><td>Rarement</td><td>Combien de personnes, combien d'heures, installation et rangement compris ?</td></tr>
          <tr><td><strong>Mobilier</strong> (mange-debout, tables)</td><td>Rarement</td><td>Location à part : combien, livrée quand, reprise quand ?</td></tr>
          <tr><td><strong>Reprise du matériel</strong></td><td>Variable</td><td>Qui reprend les plats et les thermos, et quand ?</td></tr>
          <tr><td><strong>Boissons</strong></td><td>Variable</td><td>Comprises dans la formule ou à la carte ?</td></tr>
        </tbody>
      </table>

      <h2>Ce qui est inclus chez L'Écrin Traiteur</h2>
      <ul>
        <li><strong>Gobelets, serviettes, vaisselle et couverts jetables</strong>, sans supplément.</li>
        <li><strong>Une présentation dressée, prête à servir</strong>, sur plateaux.</li>
        <li><strong>Pour les animations culinaires</strong> : installation et démontage compris.</li>
      </ul>

      <h2>Ce qui est facturé à part</h2>
      <table>
        <thead>
          <tr><th>Poste</th><th>Prix HT</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Livraison</strong> à Paris et dans les communes proches, dès 6h30</td><td>29 €</td></tr>
          <tr><td><strong>Livraison avec reprise</strong> de vaisselle réutilisable ou de matériel, à la place de la livraison seule, Paris, 92 et 94 (ailleurs, prix de la zone + 19 €)</td><td>39 €</td></tr>
          <tr><td><strong>Maître d'hôtel</strong>, service de 6 heures</td><td>250 €</td></tr>
          <tr><td><strong>Vaisselle, verrerie, nappage</strong></td><td>sur devis, location chez Options</td></tr>
          <tr><td><strong>Mobilier</strong> (mange-debout, tables)</td><td>sur devis, par un loueur partenaire</td></tr>
          <tr><td><strong>Composition florale</strong></td><td>sur devis, par un fleuriste partenaire</td></tr>
          <tr><td><strong>Boissons</strong></td><td>à la carte : thermos de café ou de thé 19,50 €, jus Alain Milliat dès 9,50 € le litre</td></tr>
        </tbody>
      </table>
      <p>Les plats, présentoirs et thermos prêtés se rendent propres sous 72 heures, ou nous les reprenons avec la ligne « récupération ».</p>

      <h2>Les conditions à lire avant de signer</h2>
      <ul>
        <li><strong>Minimum de commande</strong> : 50 € HT chez nous, sans minimum de personnes.</li>
        <li><strong>Modification</strong> : jusqu'à la veille 14h.</li>
        <li><strong>Annulation</strong> : sans frais jusqu'à 2 jours ouvrés avant la livraison, avant 10h ; ensuite, la commande reste due.</li>
        <li><strong>Livraison</strong> : tolérance de 30 minutes sur le créneau convenu ; toute anomalie se signale dans les 2 heures.</li>
        <li><strong>Paiement</strong> : virement ou carte, facture d'entreprise avec TVA.</li>
      </ul>
      <p>Tout est détaillé dans nos <a href="/cgv">conditions générales de vente</a> et sur la page <a href="/tarifs">tarifs</a>.</p>

      <h2>Sources</h2>
      <ul>
        <li>Pratiques des traiteurs : Traiteur Lebot (vaisselle et nappage inclus) et Orami (nappage 1 € HT par personne), consultés le 17 octobre 2026.</li>
        <li>Conditions de L'Écrin Traiteur : <a href="/cgv">CGV</a> et <a href="/tarifs">tarifs</a>, au 17 octobre 2026.</li>
      </ul>
    `,
    relatedProducts: [],
    faq: [
      { q: "La vaisselle est-elle incluse dans un devis traiteur ?", a: "Cela dépend du traiteur. Chez L'Écrin Traiteur, gobelets, serviettes, vaisselle et couverts jetables sont inclus ; la porcelaine, les verres et les nappes sont loués chez Options, sur devis." },
      { q: "Le personnel de service est-il compris dans le prix du traiteur ?", a: "Rarement. Chez L'Écrin Traiteur, un maître d'hôtel coûte 250 € HT pour un service de 6 heures." },
      { q: "Peut-on annuler une commande traiteur ?", a: "Chez L'Écrin Traiteur, sans frais jusqu'à 2 jours ouvrés avant la livraison, avant 10h. Passé ce délai, la commande reste due." },
    ],
  },

  {
    slug: 'combien-temps-avance-commander-traiteur',
    titre: "Combien de temps à l'avance commander un traiteur pour un petit-déjeuner, un séminaire ou un cocktail ?",
    metaTitle: "Commander un traiteur : combien de temps à l'avance ?",
    categorie: 'Conseils',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    isoModified: '2026-10-28',
    extrait: "La veille pour un petit-déjeuner ou des plateaux, 48 heures à partir de 50 personnes, davantage avec service et matériel : les délais de commande d'un traiteur d'entreprise.",
    img: '/hero-petitdej.webp',
    enBref: [
      "Chez L'Écrin Traiteur, on commande jusqu'à la veille 14h pour une livraison dès 6h30 le lendemain.",
      "À partir de 50 personnes, prévoyez 48 heures.",
      "Avec maître d'hôtel, location de matériel ou fleurs, réservez le plus tôt possible : la disponibilité se confirme dans le devis, envoyé sous 24 h.",
    "En décembre comme le reste de l'année, la règle est la même : aucune date limite spéciale, mais un devis demandé en novembre pour tenir une date.",
      "Sur le marché, un cocktail livré se commande en général 3 à 7 jours avant, et un événement avec service 2 à 4 mois avant en haute saison.",
    ],
    contenu: `
      <p>Pour un <strong>petit-déjeuner, une pause ou des plateaux repas</strong>, la veille suffit chez la plupart des traiteurs d'entreprise. Pour un <strong>cocktail</strong> ou un <strong>séminaire</strong>, il faut quelques jours. Pour un événement avec <strong>service et matériel</strong>, en décembre ou en juin, plusieurs semaines. Voici les délais, prestation par prestation.</p>

      <h2>Les délais chez L'Écrin Traiteur</h2>
      <table>
        <thead>
          <tr><th>Prestation</th><th>Commander au plus tard</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Petit-déjeuner, pause, plateaux repas, lunch box, cocktail livré</strong></td><td>La veille avant 14h</td></tr>
          <tr><td><strong>À partir de 50 personnes</strong></td><td>48 heures avant</td></tr>
          <tr><td><strong>Avec maître d'hôtel, location de matériel ou fleurs</strong></td><td>Le plus tôt possible : disponibilité confirmée dans le devis</td></tr>
          <tr><td><strong>Modification de quantités</strong></td><td>Jusqu'à la veille 14h</td></tr>
          <tr><td><strong>Annulation sans frais</strong></td><td>Jusqu'à 2 jours ouvrés avant, avant 10h</td></tr>
        </tbody>
      </table>
      <p>Le devis est envoyé sous 24 heures. Les livraisons commencent à 6h30, à l'heure exacte demandée.</p>
      <h2>Selon la période de l'année</h2>
      <table>
        <thead>
          <tr><th>Période</th><th>Règle de commande</th><th>À savoir</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Toute l'année</strong></td><td>La veille avant 14h ; 48 heures avant à partir de 50 personnes</td><td>Livraisons du lundi au vendredi, dès 6h30</td></tr>
          <tr><td><strong>Décembre, fêtes de fin d'année</strong></td><td>Mêmes règles : aucune date limite spéciale</td><td>Demandez le devis en novembre pour tenir une date ; les dates de décembre 2026 sont dans <a href="/journal/quel-traiteur-cocktail-noel-entreprise-paris">quel traiteur pour un cocktail de Noël</a></td></tr>
          <tr><td><strong>Entre Noël et le jour de l'An</strong></td><td>Mêmes règles, avec une activité réduite</td><td>Faites confirmer la date par écrit avant de commander</td></tr>
          <tr><td><strong>Événement avec service et matériel</strong></td><td>Le plus tôt possible</td><td>Disponibilité confirmée dans le devis, envoyé sous 24 h</td></tr>
        </tbody>
      </table>
      <p>Le délai de commande ne change donc pas avec la saison chez L'Écrin Traiteur ; ce qui change, c'est la disponibilité des dates, qui se joue au devis. Le calendrier d'une soirée de fin d'année est détaillé dans le <a href="/journal/retroplanning-soiree-fin-annee-entreprise">rétroplanning d'une soirée de fin d'année</a>.</p>

      <h2>Les délais habituels sur le marché</h2>
      <ul>
        <li><strong>Plateaux repas</strong> : la veille, souvent avant 18h chez les plateformes de livraison.</li>
        <li><strong>Cocktail livré sans service</strong> : en général 3 à 7 jours avant.</li>
        <li><strong>Événement avec service, en haute saison</strong> : 2 à 4 mois avant chez certains traiteurs parisiens, notamment pour les soirées de fin d'année.</li>
      </ul>

      <h2>Le rétroplanning conseillé</h2>
      <table>
        <thead>
          <tr><th>Quand</th><th>Quoi</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Dès la date connue</strong></td><td>Demander un devis, surtout s'il faut du service ou du matériel</td></tr>
          <tr><td><strong>1 semaine avant</strong></td><td>Recenser les régimes : végétarien, vegan, sans gluten, allergies</td></tr>
          <tr><td><strong>2 jours avant</strong></td><td>Confirmer l'effectif, avec 10 % de marge</td></tr>
          <tr><td><strong>La veille avant 14h</strong></td><td>Dernier ajustement des quantités</td></tr>
          <tr><td><strong>Le jour J</strong></td><td>Une personne présente à la livraison, avec son mobile</td></tr>
        </tbody>
      </table>

      <h2>Et pour demain matin ?</h2>
      <p>Si vous lisez ceci avant 14h, il est encore temps de commander un petit-déjeuner pour demain : <a href="/devis">demandez votre devis</a> ou appelez le 01 74 54 23 10. Nos prix sont sur la page <a href="/tarifs">tarifs</a>, et la liste complète des points à vérifier dans la <a href="/journal/checklist-office-manager-commander-traiteur">checklist de l'office manager</a>.</p>

      <h2>Sources</h2>
      <ul>
        <li>Délais de L'Écrin Traiteur : <a href="/cgv">CGV</a> et <a href="/tarifs">tarifs</a>, au 17 octobre 2026.</li>
        <li>Délais du marché : Créer une entreprise (17 juin 2026) et MyTraiteur, consultés le 17 octobre 2026.</li>
      </ul>
    `,
    relatedProducts: ['viennoiseries-melangees'],
    faq: [
      { q: "Combien de temps à l'avance commander un petit-déjeuner d'entreprise ?", a: "Chez L'Écrin Traiteur, jusqu'à la veille 14h pour une livraison dès 6h30 le lendemain ; 48 heures à partir de 50 personnes." },
      { q: "Combien de temps à l'avance réserver un traiteur pour un cocktail ?", a: "Pour un cocktail livré, la veille 14h chez L'Écrin Traiteur (48 h dès 50 personnes). Avec maître d'hôtel ou matériel, le plus tôt possible : la disponibilité se confirme dans le devis." },
    { q: "Quel est le délai minimum pour commander un traiteur d'entreprise ?", a: "Chez L'Écrin Traiteur, la veille avant 14h pour une livraison dès 6h30 le lendemain. À partir de 50 personnes, commandez 48 heures avant." },
    { q: "Peut-on commander pour le lendemain ?", a: "Oui, jusqu'à 14h aujourd'hui pour une livraison dès 6h30 demain, pour un petit-déjeuner, une pause, des plateaux repas, des lunch box ou un cocktail livré." },
    { q: "Quand commander pour une soirée de fin d'année ?", a: "Il n'y a pas de date limite spéciale pour les fêtes : mêmes règles que le reste de l'année. Demandez le devis en novembre pour tenir une date de décembre." },
    { q: "L'Écrin Traiteur livre-t-il entre Noël et le jour de l'An ?", a: "Oui, avec une activité réduite : faites confirmer la date par écrit avant de commander." },
    { q: "Livrez-vous le week-end ?", a: "Les livraisons ont lieu du lundi au vendredi, dès 6h30." },
    { q: "Jusqu'à quand peut-on modifier ou annuler une commande ?", a: "La commande se modifie jusqu'à la veille 14h. L'annulation est sans frais jusqu'à 2 jours ouvrés avant la livraison, avant 10h." },
    { q: "En combien de temps reçoit-on un devis ?", a: "Sous 24 heures. Indiquez la date, l'adresse, l'effectif, l'heure et les régimes pour qu'il soit juste du premier coup." },
    ],
  },
  {
    slug: 'questions-poser-traiteur-avant-signer-devis',
    titre: "Quelles questions poser à un traiteur avant de signer le devis ?",
    metaTitle: "Questions à poser à un traiteur avant de signer",
    categorie: 'Conseils',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    extrait: "Prix, quantités, livraison, régimes, allergènes, assurance, paiement, annulation : les questions à poser à un traiteur d'entreprise avant de signer, et les réponses de L'Écrin.",
    img: '/hero-bg2.webp',
    enBref: [
      "Avant de signer, vérifiez huit points : le prix tout compris, les quantités, la livraison, les régimes, les allergènes, l'assurance, le paiement et l'annulation.",
      "Chez L'Écrin Traiteur : prix HT publiés, livraison 29 € HT, commande jusqu'à la veille 14h, carte halal et sans porc.",
      "Annulation sans frais jusqu'à 2 jours ouvrés avant la livraison, avant 10h ; factures payables à 30 jours fin de mois.",
      "L'Écrin Traiteur est couvert par une assurance responsabilité civile professionnelle.",
    ],
    contenu: `
      <p>Un devis traiteur se compare mal d'un prestataire à l'autre : l'un inclut la livraison, l'autre non ; l'un compte 2 viennoiseries par personne, l'autre 1. Voici les questions à poser avant de signer, classées par thème, avec les réponses de L'Écrin Traiteur pour comparer.</p>

      <h2>1. Le prix : qu'est-ce qui est compris ?</h2>
      <ul>
        <li>Le prix est-il HT ou TTC, par personne ou au total ?</li>
        <li>La livraison est-elle comprise ? Et la reprise du matériel ?</li>
        <li>La vaisselle, le nappage, le personnel sont-ils inclus ou facturés à part ?</li>
      </ul>
      <p><strong>Chez L'Écrin :</strong> prix HT publiés sur la page <a href="/tarifs">tarifs</a>, livraison 29 € HT à Paris et dans les communes proches, gobelets, serviettes et couverts jetables inclus. Le détail est dans notre guide <a href="/journal/devis-traiteur-ce-qui-est-inclus">ce qui est inclus dans un devis traiteur</a>.</p>

      <h2>2. Les quantités : combien par personne ?</h2>
      <ul>
        <li>Combien de pièces, de viennoiseries, de boissons par personne ?</li>
        <li>Le devis prévoit-il une marge pour les invités de dernière minute ?</li>
      </ul>
      <p><strong>Chez L'Écrin :</strong> 2 mini-viennoiseries par personne au petit-déjeuner (3 jusqu'à 10 personnes), 8, 12 ou 16 pièces au cocktail. Nos règles sont publiées dans le <a href="/journal/budget-petit-dejeuner-equipe-personnes">guide du budget petit-déjeuner</a>.</p>

      <h2>3. La livraison : quand, où, par qui ?</h2>
      <ul>
        <li>À une heure exacte ou dans un créneau ? Quelle tolérance ?</li>
        <li>Qui livre : le traiteur ou un coursier ? Jusqu'où : l'accueil, l'étage, la salle ?</li>
      </ul>
      <p><strong>Chez L'Écrin :</strong> dès 6h30, à l'heure convenue avec une tolérance de 30 minutes, par notre propre équipe.</p>

      <h2>4. Les régimes et les allergènes</h2>
      <ul>
        <li>Le menu est-il halal, végétarien, vegan, sans gluten ? Avec ou sans supplément ?</li>
        <li>Où trouver la liste des allergènes de chaque produit ?</li>
      </ul>
      <p><strong>Chez L'Écrin :</strong> le salé est halal et sans porc, sans alcool, sans supplément ; végétarien, vegan et sans gluten sur demande. Un tableau des 14 allergènes réglementaires est joint au devis et au bon de livraison.</p>

      <h2>5. L'assurance et l'hygiène</h2>
      <ul>
        <li>Le traiteur a-t-il une assurance responsabilité civile professionnelle ?</li>
        <li>Combien de temps les produits peuvent-ils rester à température ambiante ?</li>
      </ul>
      <p><strong>Chez L'Écrin :</strong> assurance responsabilité civile professionnelle. Les produits réfrigérés se consomment dans les 4 heures après la livraison, 2 heures au plus à température ambiante.</p>

      <h2>6. Le paiement</h2>
      <ul>
        <li>Faut-il verser un acompte ? Sous quel délai payer la facture ?</li>
        <li>Quels moyens de paiement ? La facture est-elle établie au nom de l'entreprise, avec la TVA ?</li>
      </ul>
      <p><strong>Chez L'Écrin :</strong> virement ou carte, factures payables à 30 jours fin de mois, facture d'entreprise avec TVA.</p>

      <h2>7. La modification et l'annulation</h2>
      <ul>
        <li>Jusqu'à quand peut-on changer l'effectif ?</li>
        <li>Jusqu'à quand peut-on annuler sans frais ? Que se passe-t-il ensuite ?</li>
      </ul>
      <p><strong>Chez L'Écrin :</strong> modification jusqu'à la veille 14h ; annulation sans frais jusqu'à 2 jours ouvrés avant la livraison, avant 10h ; ensuite, la commande reste due.</p>

      <h2>Sources</h2>
      <ul>
        <li>Conditions de L'Écrin Traiteur : <a href="/cgv">conditions générales de vente</a> et <a href="/tarifs">tarifs</a>, au 17 octobre 2026.</li>
      </ul>
    `,
    relatedProducts: [],
    faq: [
      { q: "Quelles questions poser à un traiteur avant de signer ?", a: "Ce qui est compris dans le prix, les quantités par personne, l'heure et le mode de livraison, les régimes et les allergènes, l'assurance, le paiement, et les conditions de modification et d'annulation." },
      { q: "Faut-il un acompte pour réserver un traiteur d'entreprise ?", a: "Cela dépend du traiteur. Chez L'Écrin Traiteur, les factures sont payables à 30 jours fin de mois, par virement ou carte." },
      { q: "Un traiteur doit-il être assuré ?", a: "Demandez-lui son assurance responsabilité civile professionnelle. L'Écrin Traiteur en dispose." },
    ],
  },

  {
    slug: 'bar-mocktails-barman-evenement-entreprise',
    titre: "Bar à mocktails pour un événement d'entreprise : combien de barmans et quel budget ?",
    metaTitle: "Bar à mocktails en entreprise : barmans et budget",
    categorie: 'Conseils',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    extrait: "Un bar à cocktails sans alcool pour un afterwork ou une soirée d'entreprise : combien de barmans selon le nombre d'invités, combien ça coûte à Paris, et que servir.",
    img: '/prod-bar-mocktails.webp',
    enBref: [
      "Comptez 1 barman pour 50 à 100 invités selon la carte : plus la carte est travaillée, plus il faut de bras.",
      "À Paris, un barman se facture autour de 37,50 € de l'heure ; un barman mixologue jusqu'à 500 € HT pour 4 heures.",
      "Chez L'Écrin Traiteur, le bar à mocktails est 100 % sans alcool, sur devis, installation et démontage compris.",
      "Pour trinquer, un Chardonnay Blanc de Blancs 0 % est à la carte à 16,90 € HT.",
    ],
    contenu: `
      <p>Un <strong>bar à mocktails</strong> sert des cocktails sans alcool préparés à la minute. Pour un afterwork, un lancement ou une soirée d'équipe, il remplace le bar classique sans exclure personne. Il faut en général <strong>1 barman pour 50 à 100 invités</strong>, selon la carte et le rythme du service.</p>

      <h2>Combien de barmans ?</h2>
      <table>
        <thead>
          <tr><th>Invités</th><th>Carte simple (2 ou 3 recettes)</th><th>Carte travaillée, préparée à la minute</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>50</strong></td><td>1</td><td>1</td></tr>
          <tr><td><strong>100</strong></td><td>1</td><td>2</td></tr>
          <tr><td><strong>200</strong></td><td>2</td><td>3 à 4</td></tr>
        </tbody>
      </table>
      <p>Les repères publiés vont de 1 barman pour 50 invités à 1 pour 75 à 100.</p>

      <h2>Combien coûte un bar à mocktails ?</h2>
      <ul>
        <li><strong>Barman</strong> : autour de 37,50 € de l'heure.</li>
        <li><strong>Barman mixologue</strong>, avec une carte de création : jusqu'à 500 € HT pour 4 heures.</li>
        <li><strong>Ingrédients</strong> : fruits frais, agrumes, herbes, sirops, eau pétillante, glace, selon le nombre de verres prévu.</li>
      </ul>
      <p>Comptez 2 à 3 verres par personne pour une soirée de deux heures.</p>

      <h2>Que servir ?</h2>
      <ul>
        <li><strong>Des recettes fraîches</strong> : agrumes, fruits rouges, concombre et menthe, gingembre.</li>
        <li><strong>Une boisson pour trinquer</strong> : un Chardonnay Blanc de Blancs 0 %.</li>
        <li><strong>De l'eau en libre-service</strong> à côté du bar, pour soulager le barman.</li>
        <li><strong>Des pièces salées et sucrées</strong> à côté, pour accompagner les verres.</li>
      </ul>

      <h2>Avec L'Écrin Traiteur</h2>
      <p>Notre <a href="/creations/animations-culinaires">bar à mocktails</a> est 100 % sans alcool : un barman prépare chaque cocktail à la minute, avec des fruits frais, des herbes et des sirops maison. Prestation sur devis, installation et démontage compris. Il s'accompagne d'un <a href="/creations/cocktails">cocktail</a> de 8, 12 ou 16 pièces par personne, halal et sans porc. Le Chardonnay Blanc de Blancs 0 % est à 16,90 € HT. <a href="/devis">Demandez un devis</a>.</p>

      <h2>Sources</h2>
      <ul>
        <li>Nombre de barmans : RS Traiteur (4 mai 2026) et Bar Company, consultés le 17 octobre 2026.</li>
        <li>Prix d'un barman mixologue : Cocktail Shows, consulté le 17 octobre 2026.</li>
        <li>Verres par personne : <a href="https://www.options.fr/art-de-la-table/location-de-verres.html" rel="noopener">Options</a>, consulté le 17 octobre 2026.</li>
      </ul>
    `,
    relatedProducts: [],
    faq: [
      { q: "Combien de barmans pour 100 invités ?", a: "1 barman avec une carte simple, 2 si les mocktails sont préparés à la minute avec une carte travaillée." },
      { q: "Combien coûte un barman pour une soirée d'entreprise ?", a: "Autour de 37,50 € de l'heure à Paris ; un barman mixologue jusqu'à 500 € HT pour 4 heures." },
      { q: "L'Écrin Traiteur propose-t-il un bar à cocktails sans alcool ?", a: "Oui, un bar à mocktails 100 % sans alcool, sur devis, installation et démontage compris." },
    ],
  },

  {
    slug: 'traiteur-personnel-materiel-fleurs-un-seul-prestataire',
    titre: "Traiteur, maîtres d'hôtel, vaisselle, fleurs : faut-il un seul prestataire pour son événement d'entreprise ?",
    metaTitle: "Événement clé en main : un seul prestataire ?",
    categorie: 'Conseils',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    extrait: "Passer par un seul prestataire pour la nourriture, le service, la vaisselle et les fleurs, ou réserver chacun séparément : avantages, limites et ce que propose L'Écrin Traiteur.",
    img: '/maitre-hotel-petit-dejeuner-salon.webp',
    enBref: [
      "Un seul prestataire, c'est un seul devis, une seule livraison coordonnée et un seul interlocuteur le jour J.",
      "Réserver chacun séparément peut coûter moins cher, mais il faut caler les horaires, les quantités et les reprises entre quatre fournisseurs.",
      "Chez L'Écrin Traiteur : la nourriture, nos maîtres d'hôtel (250 € HT les 6 heures), la vaisselle louée chez Options et les fleurs d'un fleuriste partenaire, sur le même devis.",
    ],
    contenu: `
      <p>Pour un petit-déjeuner de direction, un cocktail ou un séminaire, il faut souvent quatre choses : <strong>la nourriture, le service, la vaisselle et la décoration</strong>. Vous pouvez les réserver séparément ou tout confier à un seul prestataire. Voici comment choisir.</p>

      <h2>Un seul prestataire ou plusieurs : le comparatif</h2>
      <table>
        <thead>
          <tr><th>Critère</th><th>Un seul prestataire</th><th>Plusieurs prestataires</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Devis</strong></td><td>Un seul, tout compris</td><td>Trois ou quatre à comparer et à valider</td></tr>
          <tr><td><strong>Quantités</strong></td><td>Calées ensemble : autant de tasses que de convives</td><td>À recouper vous-même</td></tr>
          <tr><td><strong>Livraison</strong></td><td>Coordonnée, à la même heure</td><td>Plusieurs créneaux à gérer</td></tr>
          <tr><td><strong>Jour J</strong></td><td>Un interlocuteur</td><td>Un par fournisseur</td></tr>
          <tr><td><strong>Reprise du matériel</strong></td><td>Organisée par le traiteur</td><td>À organiser avec chaque loueur</td></tr>
          <tr><td><strong>Prix</strong></td><td>Parfois un peu plus cher</td><td>Parfois moins cher, contre plus de temps passé</td></tr>
        </tbody>
      </table>

      <h2>Quand tout confier à un seul prestataire</h2>
      <ul>
        <li>Quand l'événement est tôt le matin : il n'y a pas le temps de réceptionner quatre livraisons.</li>
        <li>Quand vous organisez seul, en plus de votre travail.</li>
        <li>Quand le lieu est exigeant : salon de réception, étage sans monte-charge, horaires d'accès stricts.</li>
      </ul>

      <h2>Quand réserver séparément</h2>
      <ul>
        <li>Quand vous avez déjà un fleuriste ou un loueur habituel.</li>
        <li>Pour un très grand événement avec une agence qui coordonne déjà les fournisseurs.</li>
      </ul>

      <h2>Ce que L'Écrin Traiteur réunit sur un même devis</h2>
      <table>
        <thead>
          <tr><th>Poste</th><th>Qui</th><th>Prix HT</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Petit-déjeuner, plateaux, cocktail</strong></td><td>L'Écrin Traiteur</td><td>voir nos <a href="/tarifs">tarifs</a></td></tr>
          <tr><td><strong>Maîtres d'hôtel</strong></td><td>Sélectionnés et formés par notre maison</td><td>250 € pour 6 heures</td></tr>
          <tr><td><strong>Vaisselle, verrerie, nappage</strong></td><td>Options, référence de la location d'art de la table</td><td>sur devis</td></tr>
          <tr><td><strong>Mobilier</strong></td><td>Loueur partenaire</td><td>sur devis</td></tr>
          <tr><td><strong>Fleurs</strong></td><td>Fleuriste partenaire</td><td>sur devis</td></tr>
          <tr><td><strong>Livraison</strong></td><td>Notre équipe, dès 6h30</td><td>29 € à Paris et communes proches</td></tr>
        </tbody>
      </table>
      <p>La photo de cet article montre un petit-déjeuner servi en porcelaine dans un salon parisien, avec l'un de nos maîtres d'hôtel. Pour le vôtre, <a href="/devis">décrivez votre événement</a> : effectif, lieu, horaire, et ce que vous souhaitez nous confier.</p>

      <h2>Pour aller plus loin</h2>
      <ul>
        <li><a href="/journal/combien-maitres-hotel-evenement-entreprise">Combien de maîtres d'hôtel pour un événement d'entreprise ?</a></li>
        <li><a href="/journal/location-materiel-reception-entreprise-quantites-prix">Location de matériel : quoi louer, combien et à quel prix ?</a></li>
        <li><a href="/journal/composition-florale-evenement-entreprise-prix">Composition florale : combien en prévoir et à quel prix ?</a></li>
        <li><a href="/journal/petit-dejeuner-prestige-entreprise-paris">Petit-déjeuner de prestige en entreprise</a></li>
      </ul>
    `,
    relatedProducts: [],
    faq: [
      { q: "Vaut-il mieux un seul prestataire pour un événement d'entreprise ?", a: "Un seul prestataire simplifie tout : un devis, une livraison coordonnée, un interlocuteur. Réserver séparément peut coûter moins cher mais demande de coordonner les horaires et les quantités." },
      { q: "L'Écrin Traiteur peut-il fournir le service, la vaisselle et les fleurs ?", a: "Oui : nos maîtres d'hôtel, la vaisselle louée chez Options, le mobilier d'un loueur partenaire et les fleurs d'un fleuriste partenaire, sur le même devis que la nourriture." },
    ],
  },
  {
    slug: 'alcool-pot-entreprise-code-du-travail',
    titre: "Alcool au pot d'entreprise : que dit le Code du travail, et comment faire sans ?",
    metaTitle: "Alcool au pot d'entreprise : ce que dit la loi",
    categorie: 'Conseils',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    extrait: "Vin, bière, champagne, spiritueux : ce que le Code du travail autorise sur le lieu de travail, la responsabilité de l'employeur, les conseils de l'INRS, et un pot réussi sans alcool.",
    img: '/cocktail-signature.webp',
    enBref: [
      "Sur le lieu de travail, seuls le vin, la bière, le cidre et le poiré sont autorisés (article R4228-20 du Code du travail). Les spiritueux sont interdits.",
      "Le règlement intérieur peut limiter ou interdire toute boisson alcoolisée ; l'employeur reste responsable de la sécurité de ses salariés.",
      "L'INRS conseille de toujours proposer des boissons sans alcool, de quoi manger, et un moyen de rentrer chez soi.",
      "Chez L'Écrin Traiteur, la carte est entièrement sans alcool, avec un Chardonnay Blanc de Blancs 0 % pour trinquer.",
    ],
    contenu: `
      <p>Au travail, <strong>seuls le vin, la bière, le cidre et le poiré sont autorisés</strong>. C'est l'article R4228-20 du Code du travail. Les spiritueux, et donc les cocktails à base d'alcool fort, sont interdits sur le lieu de travail, même pour un pot. L'employeur peut aller plus loin et tout interdire par son règlement intérieur.</p>

      <h2>Ce que dit le Code du travail</h2>
      <table>
        <thead>
          <tr><th>Règle</th><th>Texte</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Aucune boisson alcoolisée autre que le vin, la bière, le cidre et le poiré</strong> sur le lieu de travail</td><td>Article R4228-20, alinéa 1</td></tr>
          <tr><td><strong>L'employeur peut limiter ou interdire</strong> l'alcool par le règlement intérieur ou une note de service, de façon proportionnée</td><td>Article R4228-20, alinéa 2 (depuis 2014)</td></tr>
          <tr><td><strong>Interdit de laisser entrer ou séjourner une personne en état d'ivresse</strong> sur le lieu de travail</td><td>Article R4228-21</td></tr>
          <tr><td><strong>Amende de 10 000 €</strong>, appliquée autant de fois qu'il y a de salariés concernés, pour l'employeur fautif</td><td>Article L4741-1</td></tr>
        </tbody>
      </table>

      <h2>Et le champagne ?</h2>
      <p>Le texte parle de « vin » sans citer le champagne. La plupart des commentaires juridiques considèrent qu'une coupe de champagne, qui est un vin mousseux, est autorisée comme le vin, sauf si le règlement intérieur l'interdit. Aucun texte officiel ne le dit en toutes lettres. Un kir royal pose question, car la crème de cassis est une liqueur.</p>

      <h2>La responsabilité de l'employeur</h2>
      <p>L'employeur a une obligation de sécurité envers ses salariés. En cas d'accident après un pot, sa faute inexcusable peut être retenue, et sa responsabilité pénale ou civile engagée. C'est vrai aussi pour un pot organisé hors des locaux, pendant lequel les salariés restent sous son autorité.</p>

      <h2>Les conseils de l'INRS pour un pot</h2>
      <ul>
        <li>Servir de l'alcool n'est <strong>pas une obligation</strong>.</li>
        <li>Proposer <strong>toujours des boissons sans alcool</strong>.</li>
        <li><strong>Limiter les quantités</strong> : pas plus de 2 verres par personne.</li>
        <li>Prévoir <strong>de quoi manger</strong>.</li>
        <li>Mettre des <strong>éthylotests</strong> à disposition.</li>
        <li>Prévoir un <strong>moyen de rentrer</strong>, par exemple un taxi, pour qui n'est plus en état de conduire.</li>
        <li>Rappeler les règles avant le pot, par exemple par mail.</li>
      </ul>

      <h2>Un pot réussi sans alcool</h2>
      <p>Un pot sans alcool règle la question juridique et inclut tout le monde. Il demande simplement plus de soin sur les boissons : jus de fruits de producteurs, eaux infusées, infusion au gingembre, mocktails préparés à la minute, et un vin pétillant sans alcool pour trinquer.</p>
      <p>Chez L'Écrin Traiteur, toute la carte est <strong>sans alcool</strong> : jus Alain Milliat, infusion bio citron vert et gingembre, Chardonnay Blanc de Blancs 0 % à 16,90 € HT, et un <a href="/journal/bar-mocktails-barman-evenement-entreprise">bar à mocktails</a> sur devis. Nos idées sont dans le guide <a href="/journal/cocktail-entreprise-sans-alcool">cocktail d'entreprise sans alcool</a>.</p>

      <h2>Sources</h2>
      <ul>
        <li>Code du travail : articles <a href="https://code.travail.gouv.fr/code-du-travail/r4228-20" rel="noopener">R4228-20</a>, <a href="https://code.travail.gouv.fr/code-du-travail/r4228-21" rel="noopener">R4228-21</a> et <a href="https://code.travail.gouv.fr/code-du-travail/l4741-1" rel="noopener">L4741-1</a>, Code du travail numérique, consulté le 17 octobre 2026.</li>
        <li>INRS : <a href="https://www.inrs.fr/publications/juridique/focus-juridiques/focus-pots-entreprise-alcool.html" rel="noopener">pots d'entreprise et alcool</a> (23 octobre 2023) et <a href="https://www.inrs.fr/actualites/fete-entreprise-consommation-alcool.html" rel="noopener">fêtes d'entreprise</a> (5 décembre 2024).</li>
      </ul>
      <p><em>Cet article donne des repères généraux ; il ne remplace pas l'avis d'un juriste ni votre règlement intérieur.</em></p>
    `,
    relatedProducts: [],
    faq: [
      { q: "Peut-on servir de l'alcool à un pot d'entreprise ?", a: "Seuls le vin, la bière, le cidre et le poiré sont autorisés sur le lieu de travail (article R4228-20 du Code du travail), et le règlement intérieur peut les interdire. Les spiritueux sont interdits." },
      { q: "Le champagne est-il autorisé au travail ?", a: "Selon l'interprétation la plus répandue, oui, comme le vin, sauf interdiction du règlement intérieur. Aucun texte officiel ne le dit expressément." },
      { q: "Quelle sanction pour l'employeur ?", a: "Une amende de 10 000 € par salarié concerné en cas de faute personnelle de l'employeur (article L4741-1 du Code du travail)." },
    ],
  },

  {
    slug: 'allergenes-traiteur-buffet-plateaux-obligations',
    titre: "Allergènes : que doit indiquer un traiteur sur un buffet ou des plateaux d'entreprise ?",
    metaTitle: "Allergènes chez le traiteur : obligations et liste",
    categorie: 'Conseils',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    extrait: "Les 14 allergènes à déclarer, la forme de l'information pour un buffet ou des plateaux livrés, ce que le traiteur doit fournir avant la commande et à la livraison.",
    img: '/hero-a-partager.webp',
    enBref: [
      "Le traiteur doit indiquer par écrit la présence de l'un des 14 allergènes réglementaires dans chaque plat, même non emballé.",
      "Sur un buffet, l'information figure sur le plat ou juste à côté ; une réponse orale seule ne suffit pas.",
      "Pour une commande à distance, les allergènes doivent être accessibles avant la commande, puis fournis à la livraison.",
      "Côté entreprise : recensez les allergies avant de commander, et transmettez-les avec le nombre de personnes concernées.",
    ],
    contenu: `
      <p>Depuis le 1er juillet 2015, un traiteur doit indiquer <strong>par écrit</strong> la présence des <strong>14 allergènes réglementaires</strong> dans ses plats, y compris quand ils ne sont pas emballés : buffets, plateaux, pièces de cocktail. Voici ce que dit la règle et ce qu'il faut demander à votre traiteur.</p>

      <h2>Les 14 allergènes à déclarer</h2>
      <table>
        <thead>
          <tr><th>#</th><th>Allergène</th><th>#</th><th>Allergène</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Céréales contenant du gluten</td><td>8</td><td>Fruits à coque</td></tr>
          <tr><td>2</td><td>Crustacés</td><td>9</td><td>Céleri</td></tr>
          <tr><td>3</td><td>Œufs</td><td>10</td><td>Moutarde</td></tr>
          <tr><td>4</td><td>Poissons</td><td>11</td><td>Graines de sésame</td></tr>
          <tr><td>5</td><td>Arachides</td><td>12</td><td>Anhydride sulfureux et sulfites</td></tr>
          <tr><td>6</td><td>Soja</td><td>13</td><td>Lupin</td></tr>
          <tr><td>7</td><td>Lait</td><td>14</td><td>Mollusques</td></tr>
        </tbody>
      </table>
      <p>Seuls les allergènes mis volontairement dans la recette sont concernés.</p>

      <h2>Sous quelle forme pour un buffet ou des plateaux ?</h2>
      <ul>
        <li><strong>Par écrit</strong> : une réponse orale seule ne suffit pas.</li>
        <li><strong>Sur le plat ou juste à côté</strong> pour un buffet : une étiquette ou une fiche lisible.</li>
        <li><strong>Accessible librement</strong> pour les convives, sans avoir à chercher quelqu'un.</li>
      </ul>

      <h2>Et pour une commande à distance ?</h2>
      <p>Quand vous commandez par le site, par mail ou par téléphone, le règlement européen INCO (article 14) prévoit que l'information soit disponible <strong>avant la commande</strong>, sans frais, puis fournie <strong>au moment de la livraison</strong>. Demandez-la avec le devis, et vérifiez qu'une fiche accompagne la livraison.</p>

      <h2>Ce que l'entreprise doit faire de son côté</h2>
      <ul>
        <li><strong>Recenser les allergies</strong> une semaine avant, dans l'invitation ou le formulaire d'inscription.</li>
        <li><strong>Les transmettre au traiteur</strong> avec le nombre de personnes concernées : « 2 personnes allergiques aux fruits à coque ».</li>
        <li><strong>Demander des portions séparées et nommées</strong> pour les allergies sévères.</li>
        <li><strong>Afficher la fiche</strong> à côté du buffet le jour J.</li>
      </ul>

      <h2>Avec L'Écrin Traiteur</h2>
      <p>Indiquez les allergies et les régimes dans votre <a href="/devis">demande de devis</a> : nous adaptons la composition et préparons des portions séparées. Le salé est halal et sans porc ; les options végétariennes, vegan et sans gluten se commandent au même prix. Voir aussi notre guide du <a href="/journal/menu-inclusif-entreprise-halal-vegetarien-sans-gluten">menu inclusif</a>.</p>

      <h2>Sources</h2>
      <ul>
        <li>Règlement (UE) n° 1169/2011 dit « INCO », annexe II (liste des 14 allergènes) et articles 14 et 44, <a href="https://www.senat.fr/europe/textes_europeens/ue0120.pdf" rel="noopener">texte publié au JO de l'Union européenne</a>.</li>
        <li>Décret n° 2015-447 du 17 avril 2015, intégré aux articles R412-12 à R412-16 du Code de la consommation ; <a href="https://www.paquethygiene.com/co/1-10-BPH-Allergenes.html" rel="noopener">Paquet Hygiène</a>, consulté le 17 octobre 2026.</li>
        <li><a href="https://food.ec.europa.eu/food-safety/labelling-and-nutrition/food-information-consumers-legislation/distance-selling_en" rel="noopener">Commission européenne, vente à distance</a>, consulté le 17 octobre 2026.</li>
      </ul>
      <p><em>Cet article donne des repères généraux ; il ne remplace pas l'avis d'un juriste.</em></p>
    `,
    relatedProducts: [],
    faq: [
      { q: "Un traiteur doit-il afficher les allergènes sur un buffet ?", a: "Oui. Depuis le 1er juillet 2015, la présence des 14 allergènes réglementaires doit être indiquée par écrit, sur le plat ou juste à côté. Une réponse orale seule ne suffit pas." },
      { q: "Quels sont les 14 allergènes à déclarer ?", a: "Gluten, crustacés, œufs, poissons, arachides, soja, lait, fruits à coque, céleri, moutarde, sésame, sulfites, lupin et mollusques." },
    ],
  },

  {
    slug: 'vaisselle-jetable-reutilisable-traiteur-loi',
    titre: "Vaisselle jetable ou réutilisable pour un événement d'entreprise : que dit la loi ?",
    metaTitle: "Vaisselle jetable ou réutilisable : ce que dit la loi",
    categorie: 'Conseils',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    extrait: "Plastique interdit, vaisselle réemployable obligatoire dès 20 personnes servies sur place, cas des traiteurs et des plateaux livrés : ce que dit la loi AGEC, et quoi choisir.",
    img: '/petit-dejeuner-prestige-salon.webp',
    enBref: [
      "Gobelets, assiettes et couverts en plastique jetable sont interdits, même « biosourcés » ; le carton sans film, le bois et le palmier restent autorisés.",
      "Depuis le 1er janvier 2023, la vaisselle réemployable est obligatoire pour la restauration sur place dès 20 personnes, assises ou debout.",
      "Un traiteur n'est concerné que s'il prépare une partie des plats sur place ; les plateaux et buffets livrés prêts ne le sont pas.",
      "Chez L'Écrin Traiteur, la vaisselle réutilisable (porcelaine, verrerie) est louée chez Options ; livraison et reprise coûtent 39 € HT à Paris, dans le 92 et le 94.",
    ],
    contenu: `
      <p>La loi AGEC de 2020 a changé la vaisselle des événements : le <strong>plastique jetable est interdit</strong>, et la <strong>vaisselle réemployable est obligatoire</strong> dans certains cas depuis le 1er janvier 2023. Voici ce qui s'applique à un petit-déjeuner, un cocktail ou un buffet d'entreprise.</p>

      <h2>Ce qui est interdit</h2>
      <table>
        <thead>
          <tr><th>Produit en plastique à usage unique</th><th>Interdit depuis</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Gobelets, verres, assiettes</strong></td><td>1er janvier 2020</td></tr>
          <tr><td><strong>Couverts, pailles, touillettes, piques, boîtes en polystyrène</strong></td><td>1er janvier 2021</td></tr>
          <tr><td><strong>Gobelets contenant du plastique</strong>, même en petite part</td><td>1er janvier 2026 (traces seulement)</td></tr>
        </tbody>
      </table>
      <p>L'interdiction vaut même si le produit est recyclable, compostable ou « biosourcé » : le PLA est considéré comme du plastique, tout comme une assiette en carton recouverte d'un film plastique. Depuis 2021, il est aussi interdit de distribuer gratuitement des bouteilles en plastique dans les locaux professionnels.</p>

      <h2>Quand la vaisselle réemployable est-elle obligatoire ?</h2>
      <p>Depuis le 1er janvier 2023, pour toute activité de <strong>restauration sur place</strong>, même ponctuelle, dès qu'elle peut accueillir <strong>au moins 20 personnes en même temps, assises ou debout</strong>. On lit souvent « 20 places assises » : c'est inexact.</p>
      <table>
        <thead>
          <tr><th>Situation</th><th>Vaisselle réemployable obligatoire ?</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Plateaux, buffet ou petit-déjeuner livrés prêts</strong>, sans préparation sur place</td><td>Non</td></tr>
          <tr><td><strong>Plats seulement réchauffés</strong> sur place</td><td>Non</td></tr>
          <tr><td><strong>Plateaux-repas servis hors d'une zone de restauration</strong> (salle de réunion)</td><td>Non</td></tr>
          <tr><td><strong>Traiteur qui prépare une partie des plats sur place</strong>, dès 20 personnes</td><td>Oui</td></tr>
        </tbody>
      </table>

      <h2>Ce qui reste autorisé</h2>
      <p>Là où le réemployable n'est pas exigé : la vaisselle jetable en <strong>carton ou papier sans film plastique</strong>, en <strong>bois</strong>, en <strong>feuille de palmier</strong> ou en <strong>cellulose</strong>.</p>

      <h2>Que choisir pour votre événement ?</h2>
      <ul>
        <li><strong>Réunion, petit-déjeuner livré</strong> : vaisselle jetable sans plastique, ou réutilisable pour l'image.</li>
        <li><strong>Réception, petit-déjeuner de direction</strong> : porcelaine et verrerie, avec un maître d'hôtel.</li>
        <li><strong>Animation culinaire préparée sur place pour 20 personnes ou plus</strong> : vaisselle réemployable.</li>
      </ul>

      <h2>Avec L'Écrin Traiteur</h2>
      <p>Nos commandes livrées sont dressées sur plateaux, avec gobelets, serviettes et couverts jetables sans supplément. Pour la vaisselle réutilisable, nous louons la porcelaine, la verrerie et le nappage chez <strong>Options</strong>, maison de référence de la location de matériel de réception ; la livraison avec reprise du matériel coûte 39 € HT à Paris, dans le 92 et le 94, et le prix de la zone plus 19 € HT ailleurs. Voir notre guide de la <a href="/journal/location-materiel-reception-entreprise-quantites-prix">location de matériel</a> ou <a href="/devis">demandez un devis</a>.</p>

      <h2>Sources</h2>
      <ul>
        <li>Loi n° 2020-105 du 10 février 2020 (AGEC) ; article L541-15-10 et article D541-342 du Code de l'environnement ; FAQ « plastique et anti-gaspillage » du ministère de la Transition écologique (mai 2023).</li>
        <li>Réponse du ministre à la <a href="https://www.assemblee-nationale.fr/dyn/16/questions/QANR5L16QE4425" rel="noopener">question écrite n° 4425</a>, JO du 14 février 2023.</li>
      </ul>
      <p><em>Cet article donne des repères généraux ; il ne remplace pas l'avis d'un juriste.</em></p>
    `,
    relatedProducts: [],
    faq: [
      { q: "La vaisselle jetable est-elle interdite pour un événement d'entreprise ?", a: "La vaisselle en plastique jetable est interdite. Le carton sans film, le bois et le palmier restent autorisés là où la vaisselle réemployable n'est pas exigée." },
      { q: "Quand la vaisselle réutilisable est-elle obligatoire ?", a: "Depuis le 1er janvier 2023, pour la restauration sur place dès 20 personnes, assises ou debout. Un traiteur n'est concerné que s'il prépare une partie des plats sur place." },
    ],
  },

  {
    slug: 'restes-buffet-entreprise-que-faire',
    titre: "Que faire des restes d'un buffet d'entreprise ?",
    metaTitle: "Restes d'un buffet d'entreprise : que faire ?",
    categorie: 'Conseils',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    extrait: "Les règles d'hygiène, le don aux associations, les délais de conservation et la meilleure façon d'éviter les restes : le guide après le buffet.",
    img: '/hero-a-partager.webp',
    enBref: [
      "Le meilleur reste est celui qu'on n'a pas commandé : des quantités calées sur l'effectif confirmé, avec 10 % de marge.",
      "Un plat exposé sur un buffet ne se redonne pas : seuls les excédents jamais sortis, gardés au froid et datés, peuvent être donnés à une association.",
      "Chez L'Écrin Traiteur, les produits réfrigérés se consomment dans les 4 heures après la livraison, 2 heures au plus à température ambiante.",
      "Les biodéchets se trient à la source depuis le 1er janvier 2024.",
    ],
    contenu: `
      <p>Après un buffet, il reste souvent des viennoiseries ou des pièces de cocktail. Peut-on les garder, les redistribuer, les donner ? La réponse dépend d'une question simple : <strong>le plat a-t-il été exposé sur le buffet ?</strong></p>

      <h2>Ce qu'on peut faire, et ce qu'on évite</h2>
      <table>
        <thead>
          <tr><th>Situation</th><th>Que faire</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Plats exposés sur le buffet</strong></td><td>Les consommer dans le délai prévu par le traiteur, puis jeter le reste. On ne les redonne pas.</td></tr>
          <tr><td><strong>Plats jamais sortis</strong>, gardés au froid</td><td>Les garder au réfrigérateur dans le délai indiqué, ou les donner à une association, datés et étiquetés.</td></tr>
          <tr><td><strong>Produits emballés stables</strong> (jus en bouteille fermée, biscuits emballés)</td><td>Les garder ou les distribuer à l'équipe.</td></tr>
          <tr><td><strong>Déchets alimentaires</strong></td><td>Les trier dans la filière des biodéchets.</td></tr>
        </tbody>
      </table>

      <h2>Les règles d'hygiène à connaître</h2>
      <ul>
        <li><strong>Chaîne du froid</strong> : les préparations froides se conservent à +3 °C au plus ; les plats chauds se maintiennent à +63 °C au moins.</li>
        <li><strong>Don</strong> : seuls les excédents protégés des contaminations, datés et conservés sans rupture de la chaîne du froid peuvent être donnés. Les plats déjà présentés aux convives sont à exclure par prudence.</li>
        <li><strong>Délai de consommation</strong> : suivez celui du traiteur. Chez L'Écrin, 4 heures après la livraison pour les produits réfrigérés, 2 heures au plus à température ambiante.</li>
      </ul>

      <h2>Donner à une association : ce qu'il faut savoir</h2>
      <p>Pour une entreprise ou un traiteur de taille moyenne, le don est <strong>volontaire</strong> : les obligations de convention de don visent les grandes surfaces de plus de 400 m² et la restauration collective de plus de 3 000 repas par jour. Si vous souhaitez donner, contactez une association à l'avance : elle vous dira ce qu'elle accepte et comment le récupérer.</p>

      <h2>Le plus simple : éviter les restes</h2>
      <ul>
        <li><strong>Confirmer l'effectif</strong> deux jours avant, avec 10 % de marge seulement.</li>
        <li><strong>Ajuster la veille</strong> : chez L'Écrin, jusqu'à 14h.</li>
        <li><strong>Suivre des quantités par personne éprouvées</strong> : 2 viennoiseries au petit-déjeuner, 8 à 16 pièces au cocktail selon le format.</li>
        <li><strong>Prévoir moins pour un créneau tardif</strong> : un petit-déjeuner à 9h30 est moins consommé qu'à 8h.</li>
      </ul>
      <p>Nos quantités sont détaillées dans le <a href="/journal/budget-petit-dejeuner-equipe-personnes">guide du budget petit-déjeuner</a> et le guide <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">combien de pièces cocktail par personne</a>.</p>

      <h2>Sources</h2>
      <ul>
        <li><a href="https://agriculture.gouv.fr/lutte-contre-le-gaspillage-alimentaire-les-lois-francaises" rel="noopener">Ministère de l'Agriculture, les lois contre le gaspillage alimentaire</a> (28 septembre 2026).</li>
        <li>Instruction technique <a href="https://draaf.paca.agriculture.gouv.fr/IMG/pdf/IT_2017-551_SSA_des_dons_alimentaires_cle0d2a9b.pdf" rel="noopener">DGAL/SDSSA/2017-551</a> sur les dons alimentaires ; arrêté du 21 décembre 2009, annexe I (températures).</li>
        <li><a href="https://www.info.gouv.fr/actualite/biodechets-le-tri-devient-obligatoire" rel="noopener">Tri des biodéchets obligatoire</a>, info.gouv.fr.</li>
        <li>Conditions de conservation de L'Écrin Traiteur : <a href="/cgv">CGV</a>, article 4.</li>
      </ul>
    `,
    relatedProducts: [],
    faq: [
      { q: "Peut-on donner les restes d'un buffet d'entreprise ?", a: "Seuls les excédents jamais exposés, gardés au froid, datés et étiquetés. Par prudence, on ne donne pas un plat déjà présenté sur le buffet." },
      { q: "Combien de temps garder les restes d'un buffet ?", a: "Suivez le délai du traiteur. Chez L'Écrin Traiteur : 4 heures après la livraison pour les produits réfrigérés, 2 heures au plus à température ambiante." },
    ],
  },

  {
    slug: 'iftar-entreprise-ramadan-organiser',
    titre: "Organiser un iftar d'entreprise pendant le Ramadan : horaires, menu et conseils",
    metaTitle: "Iftar d'entreprise pendant le Ramadan : le guide",
    categorie: 'Conseils',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    extrait: "Dates prévues du Ramadan 2027, heure de rupture du jeûne à Paris, menu, organisation de la salle et timing de livraison pour un iftar d'entreprise réussi.",
    img: '/hero-cocktail.webp',
    enBref: [
      "Le Ramadan 2027 devrait commencer vers le lundi 8 février et finir vers le 9 mars, dates à confirmer lors de la Nuit du doute.",
      "À Paris, le jeûne se rompt vers 17h59 début février et vers 18h45 début mars.",
      "Tout doit être prêt un quart d'heure avant la rupture du jeûne, avec de l'eau et des boissons dès la première minute.",
      "Chez L'Écrin Traiteur, toute la carte est halal et sans porc, sans alcool, livrée à l'heure exacte demandée.",
    ],
    contenu: `
      <p>Un <strong>iftar d'entreprise</strong> réunit les équipes au moment de la rupture du jeûne, pendant le Ramadan. C'est un moment de partage ouvert à tous, jeûneurs ou non. Sa réussite tient surtout à un point : <strong>l'heure</strong>.</p>

      <h2>Quand a lieu le Ramadan 2027 ?</h2>
      <table>
        <thead>
          <tr><th>Repère</th><th>Date prévue</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Premier jour de jeûne</strong></td><td>Vers le lundi 8 février 2027</td></tr>
          <tr><td><strong>Dernier jour de jeûne</strong></td><td>Lundi 8 ou mardi 9 mars 2027</td></tr>
          <tr><td><strong>Aïd el-Fitr</strong></td><td>Mardi 9 ou mercredi 10 mars 2027</td></tr>
        </tbody>
      </table>
      <p>Ces dates sont des prévisions : elles se confirment lors de la Nuit du doute, par l'observation du croissant de lune.</p>

      <h2>À quelle heure servir ?</h2>
      <table>
        <thead>
          <tr><th>Période</th><th>Rupture du jeûne à Paris (vers)</th><th>Buffet prêt à</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Début du Ramadan</strong> (8 février 2027)</td><td>17h59</td><td>17h45</td></tr>
          <tr><td><strong>Fin du Ramadan</strong> (9 mars 2027)</td><td>18h45</td><td>18h30</td></tr>
        </tbody>
      </table>
      <p>L'heure avance d'environ une minute et demie par jour : vérifiez celle du jour de votre événement. Tout doit être en place un quart d'heure avant la rupture, pour que personne n'attende.</p>

      <h2>Que servir ?</h2>
      <ul>
        <li><strong>Dès la rupture</strong> : de l'eau, des jus, des dattes, que l'on prend traditionnellement en premier.</li>
        <li><strong>Ensuite</strong> : des plats salés rassasiants, des pièces chaudes, des salades.</li>
        <li><strong>Pour finir</strong> : des douceurs et des boissons chaudes, thé et café.</li>
        <li><strong>Sans porc, sans alcool, halal</strong> : c'est le minimum pour que chacun puisse manger de tout.</li>
      </ul>

      <h2>L'organisation de la salle</h2>
      <ul>
        <li>Prévoir <strong>un espace calme</strong> pour ceux qui souhaitent prier juste après la rupture du jeûne.</li>
        <li>Choisir un <strong>buffet ou un cocktail dînatoire</strong> plutôt qu'un service à table : chacun se sert tout de suite.</li>
        <li><strong>Inviter tout le monde</strong> : l'iftar n'est pas réservé aux jeûneurs.</li>
      </ul>

      <h2>Avec L'Écrin Traiteur</h2>
      <p>Toute notre carte est <strong>halal et sans porc, sans alcool</strong>, sans supplément : <a href="/creations/cocktails">cocktail dînatoire</a> de 16 pièces par personne à 51,90 € HT, <a href="/creations/a-partager">buffet à partager</a>, jus Alain Milliat, thé et café. Nous livrons à l'heure exacte demandée. Indiquez dans votre <a href="/devis">demande de devis</a> la date et l'heure de rupture du jeûne : nous calons la livraison un quart d'heure avant. Voir aussi notre page <a href="/traiteur-halal">traiteur halal</a>.</p>

      <h2>Sources</h2>
      <ul>
        <li>Dates prévues et horaires à Paris : <a href="https://www.islamobile.fr/en/ramadan/2027/" rel="noopener">Islamobile</a> (7 octobre 2026) et <a href="https://www.calendriergratuit.fr/ramadan/paris.html" rel="noopener">Calendriergratuit</a>, méthode de la Grande Mosquée de Paris (17 octobre 2026). Dates à confirmer lors de la Nuit du doute.</li>
        <li>Organisation : ABC Salles, consulté le 17 octobre 2026.</li>
      </ul>
    `,
    relatedProducts: [],
    faq: [
      { q: "Quand commence le Ramadan 2027 ?", a: "Vers le lundi 8 février 2027, pour une fin vers le 8 ou le 9 mars. Les dates se confirment lors de la Nuit du doute." },
      { q: "À quelle heure servir un iftar d'entreprise à Paris ?", a: "La rupture du jeûne a lieu vers 17h59 début février 2027 et vers 18h45 début mars. Le buffet doit être prêt un quart d'heure avant." },
      { q: "Quel traiteur halal pour un iftar d'entreprise à Paris ?", a: "L'Écrin Traiteur : toute la carte est halal et sans porc, sans alcool, livrée à l'heure exacte demandée, à Paris et en Île-de-France." },
    ],
  },
]
