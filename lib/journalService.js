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
    img: '/cocktail-prestige.webp',
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
    img: '/cocktail-dinatoire.webp',
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
]
