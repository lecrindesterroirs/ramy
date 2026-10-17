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
        <li>Ratios par format : <a href="https://www.acteur-fete.com/fr/blog/combien-de-serveurs-pour-reception" rel="noopener">Acteur Fête</a> (9 juillet 2026), <a href="https://www.bonnaire.fr/blog/4-combien-de-serveurs-sont-necessaires-pour-assurer-un-service-fluide-le-jour-j" rel="noopener">Bonnaire Traiteur</a> (8 septembre 2025), <a href="https://firmin-traiteur.com/blogs/news/conseil-n-3-comment-estimer-mes-besoins-en-personnel-pour-mon-evenement" rel="noopener">Firmin Traiteur</a> (1er juin 2022), <a href="https://www.rs-traiteur.fr/guide-pratique---calculer-le-nombre-de-serveurs-pour-votre-evenement-d-entreprise_ad83.html" rel="noopener">RS Traiteur</a> (4 mai 2026), <a href="https://blog.mytraiteur.com/combien-de-serveurs-pour-un-repas-un-cocktail-un-buffet/" rel="noopener">MyTraiteur</a> (16 août 2019), consultés le 17 octobre 2026.</li>
        <li>Prix horaires à Paris : <a href="https://www.acteur-fete.com/fr/p/extra-paris-75" rel="noopener">Acteur Fête</a> et RS Traiteur, consultés le 17 octobre 2026.</li>
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
      "Chez L'Écrin Traiteur, la location passe par un partenaire, sur devis ; nous vous demandons d'abord le nombre de tables.",
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
      <p>Chez L'Écrin Traiteur, la location de matériel (mange-debout, tables, nappes, vaisselle) passe par un loueur partenaire, sur devis, livrée avec votre commande. Nous vous demandons d'abord le nombre de tables et d'invités : nous ne le supposons jamais. La récupération de la vaisselle réutilisable ou du matériel coûte 19 € HT en plus de la livraison. Le détail de nos prix est sur la page <a href="/tarifs">tarifs</a> ; pour un devis, <a href="/devis">décrivez votre événement</a>.</p>

      <h2>Sources</h2>
      <ul>
        <li>Quantités de mange-debout et de tables : <a href="https://faites-lafete.com/blog/combien-tables-chaises-louer-evenement/" rel="noopener">Faites la fête</a> (20 mars 2026) et <a href="https://www.thouron.fr/combien-mange-debout-reception-100-personnes/" rel="noopener">Thouron</a>, consultés le 17 octobre 2026.</li>
        <li>Vaisselle et verres : <a href="https://www.slf.fr/infos/quantite-vaisselle-louer-pour-100-invites/" rel="noopener">SLF</a> et <a href="https://www.options.fr/art-de-la-table/location-de-verres.html" rel="noopener">Options</a>, consultés le 17 octobre 2026.</li>
        <li>Prix : <a href="https://location-mobilier-receptions.fr/mobilier/location-vaisselle-ile-de-france/" rel="noopener">Paris Réceptions</a>, consulté le 17 octobre 2026 ; caution, lavage, casse et retour : <a href="https://aubonheurdesconvives.fr/art-de-recevoir/location-vaisselle-rendue-sale/" rel="noopener">Au bonheur des convives</a> (2 avril 2026).</li>
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
      "Chez L'Écrin Traiteur, le petit-déjeuner complet coûte 12 à 16 € HT par personne ; 30 personnes reviennent à 442,60 € HT livraison comprise.",
      "Le maître d'hôtel coûte 250 € HT pour un service de 6 heures ; porcelaine, nappes et fleurs sont sur devis, par nos partenaires.",
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
          <tr><td><strong>Petit-déjeuner complet</strong> (60 mini-viennoiseries, madeleines et cake, 30 brochettes, café, thé, jus), livraison comprise</td><td>442,60 €</td></tr>
          <tr><td><strong>Maître d'hôtel</strong>, service de 6 heures</td><td>250 €</td></tr>
          <tr><td><strong>Porcelaine et nappage</strong></td><td>sur devis ; la location de vaisselle se constate entre 2,50 et 4 € par convive en gamme intermédiaire</td></tr>
          <tr><td><strong>Fleurs</strong></td><td>sur devis ; un centre de table bas coûte en général 25 à 90 €</td></tr>
        </tbody>
      </table>
      <p>Pour 30 personnes, la base L'Écrin (petit-déjeuner et maître d'hôtel) revient à <strong>692,60 € HT</strong>. Avec la porcelaine, une nappe et trois compositions florales, comptez quelques centaines d'euros de plus selon les choix.</p>

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
      <p>Nous livrons dès 6h30 à Paris et en Île-de-France. Nos maîtres d'hôtel sont sélectionnés et formés par notre maison ; la porcelaine, le nappage et les fleurs sont fournis par nos partenaires, sur le même devis. Toute la carte est halal et sans porc. Voir nos <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners</a>, nos <a href="/tarifs">tarifs</a>, ou <a href="/devis">demandez un devis</a>.</p>

      <h2>Sources</h2>
      <ul>
        <li>Prix L'Écrin Traiteur : <a href="/tarifs">tarifs 2026</a>, au 17 octobre 2026.</li>
        <li>Personnel pour un petit-déjeuner en vaisselle en dur : <a href="https://firmin-traiteur.com/blogs/news/conseil-n-3-comment-estimer-mes-besoins-en-personnel-pour-mon-evenement" rel="noopener">Firmin Traiteur</a> (1er juin 2022).</li>
        <li>Location de vaisselle : <a href="https://aubonheurdesconvives.fr/art-de-recevoir/location-vaisselle-rendue-sale/" rel="noopener">Au bonheur des convives</a> (2 avril 2026). Centres de table : <a href="https://www.marie-paolini.com/decoration-florale-evenementiel/" rel="noopener">Marie Paolini, fleuriste</a>, consulté le 17 octobre 2026.</li>
      </ul>
    `,
    relatedProducts: ['viennoiseries-melangees', 'madeleines-20'],
    faq: [
      { q: "Combien coûte un petit-déjeuner de prestige pour 30 personnes ?", a: "Chez L'Écrin Traiteur, 692,60 € HT pour le petit-déjeuner complet livré et un maître d'hôtel pendant 6 heures, plus la porcelaine, le nappage et les fleurs, sur devis." },
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
      "Facturés à part : la livraison (29 € HT à Paris et communes proches), le maître d'hôtel (250 € HT les 6 heures), la récupération de matériel (19 € HT), la location et les fleurs (sur devis).",
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
          <tr><td><strong>Récupération</strong> de vaisselle réutilisable ou de matériel</td><td>19 €</td></tr>
          <tr><td><strong>Maître d'hôtel</strong>, service de 6 heures</td><td>250 €</td></tr>
          <tr><td><strong>Location de matériel</strong> (mange-debout, tables, nappes, porcelaine)</td><td>sur devis, par un loueur partenaire</td></tr>
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
        <li>Pratiques des traiteurs : <a href="https://www.traiteur-lebot.com/cocktail/" rel="noopener">Traiteur Lebot</a> (vaisselle et nappage inclus) et <a href="https://orami.fr/finger-food-entreprise/" rel="noopener">Orami</a> (nappage 1 € HT par personne), consultés le 17 octobre 2026.</li>
        <li>Conditions de L'Écrin Traiteur : <a href="/cgv">CGV</a> et <a href="/tarifs">tarifs</a>, au 17 octobre 2026.</li>
      </ul>
    `,
    relatedProducts: [],
    faq: [
      { q: "La vaisselle est-elle incluse dans un devis traiteur ?", a: "Cela dépend du traiteur. Chez L'Écrin Traiteur, gobelets, serviettes, vaisselle et couverts jetables sont inclus ; la porcelaine et les verres sont en location, sur devis." },
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
    extrait: "La veille pour un petit-déjeuner ou des plateaux, 48 heures à partir de 50 personnes, davantage avec service et matériel : les délais de commande d'un traiteur d'entreprise.",
    img: '/hero-petitdej.webp',
    enBref: [
      "Chez L'Écrin Traiteur, on commande jusqu'à la veille 14h pour une livraison dès 6h30 le lendemain.",
      "À partir de 50 personnes, prévoyez 48 heures.",
      "Avec maître d'hôtel, location de matériel ou fleurs, réservez le plus tôt possible : la disponibilité se confirme dans le devis, envoyé sous 24 h.",
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
      <p>Si vous lisez ceci avant 14h, il est encore temps de commander un petit-déjeuner pour demain : <a href="/devis">demandez votre devis</a> ou appelez le 01 74 54 23 10. Toute la carte est halal et sans porc. Nos prix sont sur la page <a href="/tarifs">tarifs</a>, et la liste complète des points à vérifier dans la <a href="/journal/checklist-office-manager-commander-traiteur">checklist de l'office manager</a>.</p>

      <h2>Sources</h2>
      <ul>
        <li>Délais de L'Écrin Traiteur : <a href="/cgv">CGV</a> et <a href="/tarifs">tarifs</a>, au 17 octobre 2026.</li>
        <li>Délais du marché : <a href="https://www.creer-une-entreprise.com/combien-de-temps-a-lavance-faut-il-commander-un-cocktails-aupres-dun-traiteur-parisien/" rel="noopener">Créer une entreprise</a> (17 juin 2026) et MyTraiteur, consultés le 17 octobre 2026.</li>
      </ul>
    `,
    relatedProducts: ['viennoiseries-melangees'],
    faq: [
      { q: "Combien de temps à l'avance commander un petit-déjeuner d'entreprise ?", a: "Chez L'Écrin Traiteur, jusqu'à la veille 14h pour une livraison dès 6h30 le lendemain ; 48 heures à partir de 50 personnes." },
      { q: "Combien de temps à l'avance réserver un traiteur pour un cocktail ?", a: "Pour un cocktail livré, la veille 14h chez L'Écrin Traiteur (48 h dès 50 personnes). Avec maître d'hôtel ou matériel, le plus tôt possible : la disponibilité se confirme dans le devis." },
    ],
  },
]
