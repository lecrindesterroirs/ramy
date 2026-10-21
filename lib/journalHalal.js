// Articles « niche halal d'entreprise » : fusionnés à la fin de journalData.js
//
// Angles volontairement distincts des trois articles déjà en ligne dans journalData.js
// (cocktail-entreprise-halal-paris, evenement-entreprise-halal-guide, traiteur-halal-entreprise-paris),
// qui couvrent le cocktail halal, l'événement halal et la transparence sur la certification :
//   1. petit-déjeuner halal (quantités, budget par effectif)
//   2. menu inclusif halal / végétarien / sans gluten (répartition par effectif)
//
// Source des chiffres : fiche de faits validés du 13 octobre 2026 + données du site
// (productsData.js, plateaux-repas/data.js, a-partager/data.js). Tarifs HT, octobre 2026.
// Offre halal-friendly : AUCUNE certification revendiquée ; rien sur la gélatine, l'abattage, les additifs.

// FAQ visible dans l'article (même contenu que le FAQPage JSON-LD généré depuis `faq`)
const faqHtml = (faq) => `
      <div class="faq-block">
${faq.map(({ q, a }) => `        <details>
          <summary><strong>${q}</strong></summary>
          <p>${a}</p>
        </details>`).join('\n')}
      </div>`

const FAQ_PDJ = [
  {
    q: "Le petit-déjeuner d'entreprise est-il halal chez L'Écrin Traiteur ?",
    a: "Oui. Tout est halal et sans porc par défaut, sans alcool dans les recettes et sans supplément : viennoiseries pur beurre, madeleines, fruits, jus et café. Aucune certification halal n'est revendiquée. Pour les viandes servies à d'autres moments de la journée, l'origine peut être précisée au moment du devis.",
  },
  {
    q: "Combien coûte un petit-déjeuner halal pour 20 personnes ?",
    a: "Pour 20 personnes, la formule Classique coûte 189 € HT : 160 € de produits à 8 € HT par personne, plus 29 € HT de livraison. La formule complète est sur devis.",
  },
  {
    q: "Combien de viennoiseries commander par personne ?",
    a: "Comptez 2 viennoiseries par personne, et 3 par personne jusqu'à 10 personnes, puis ajoutez 10 % de marge. Un plateau de 30 mini-viennoiseries sert 10 à 15 personnes. Pour 20 personnes, cela représente 40 viennoiseries, soit 44 avec la marge.",
  },
  {
    q: "Que prévoir pour un collègue vegan ou sans gluten au petit-déjeuner ?",
    a: "Ajoutez une corbeille de fruits de saison (38,90 € HT) ou des brochettes de fruits frais (48,90 € HT les 20), vegan et sans gluten, et un banana bread sans gluten (21,90 € HT). Précisez les effectifs à la commande. L'atelier manipule de la farine : des traces de gluten restent possibles.",
  },
  {
    q: "À quelle heure peut-on être livré pour un petit-déjeuner d'équipe ?",
    a: "Dès 6h30, du lundi au vendredi, à Paris et en Île-de-France. Commandez jusqu'à la veille 14h. Pour 50 personnes et plus ou plusieurs sites, un préavis de 48 h est recommandé. À Boulogne-Billancourt, où se trouve l'atelier, la commande du matin même reste possible jusqu'à 10h sur la sélection du jour.",
  },
  {
    q: "Le petit-déjeuner contient-il de l'alcool ou du porc ?",
    a: "Non. Aucun porc et aucun alcool dans les recettes, sur toute la carte, sans supplément. Les boissons sont toutes sans alcool : jus Alain Milliat, café, thé et eaux. Aucune certification halal n'est revendiquée : c'est une offre halal-friendly, que nous décrivons telle qu'elle est.",
  },
]

const FAQ_INCLUSIF = [
  {
    q: "Combien de plateaux végétariens prévoir pour 20 personnes ?",
    a: "Comptez environ un tiers de plateaux végétariens quand vous ne connaissez pas les préférences : 7 plateaux végétariens à 28,90 € HT et 13 au poulet à 29,90 € HT pour 20 personnes, soit 591 € HT avant la livraison de 29 € HT. Remplacez cette estimation par vos chiffres si vous avez fait un sondage.",
  },
  {
    q: "Quels produits sont à la fois vegan et sans gluten ?",
    a: "La corbeille de fruits de saison (38,90 € HT), les brochettes de fruits frais (48,90 € HT les 20), la compote de pomme du verger (16,90 € HT les 6) et la verrine de salade de fruits (16,90 € HT les 6). Ils conviennent aux deux régimes et à toute l'équipe, sans menu séparé.",
  },
  {
    q: "Un menu halal convient-il aux végétariens ?",
    a: "Oui. Toute la carte est halal et sans porc par défaut, y compris les plateaux végétariens La Solaire, La Provençale et La Potagère, à 28,90 € HT par personne. Les végétariens reçoivent donc le même service que leurs collègues, avec un menu sans viande, et personne n'a de formule à part à demander.",
  },
  {
    q: "Le sans gluten est-il garanti sans aucune trace ?",
    a: "Non. Les produits sans gluten le sont par leur recette, mais l'atelier manipule de la farine : des traces restent possibles. Pour une personne cœliaque à réaction sévère, signalez-le à la commande, avant le devis, afin que nous vous indiquions les pièces les plus adaptées avant que vous ne validiez.",
  },
  {
    q: "Comment préciser les régimes alimentaires à la commande ?",
    a: "Indiquez au devis le nombre de personnes concernées par chaque régime : végétarien, vegan, sans gluten. Pas besoin de noms. Demandez les régimes à vos participants une semaine avant, puis transmettez les effectifs. Nous répartissons la commande, et les plateaux repas sont filmés et étiquetés pour une distribution sans question.",
  },
  {
    q: "Faut-il commander un buffet halal séparé ?",
    a: "Non. Toute la carte étant halal et sans porc, tous les invités se servent au même buffet et personne n'a à se signaler. Les besoins végétariens, vegan ou sans gluten se précisent au devis, car la composition des trois formules cocktail est fixe. Le menu à partager Le Jardin est 100 % végétarien.",
  },
]

export const HALAL_ARTICLES = [
  // ───────────────────────────────────────────────────────────────────────────
  // 1. Petit-déjeuner halal d'entreprise : quantités, formules, budget
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'petit-dejeuner-halal-entreprise-paris',
    titre: "Petit-déjeuner halal d'entreprise à Paris : quantités, formules et budget",
    metaTitle: "Petit-déjeuner halal d'entreprise : quantités et budget",
    categorie: 'Régimes',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    isoModified: '2026-10-13',
    extrait: "Un petit-déjeuner d'entreprise halal coûte dès 8 € HT par personne. Quantités et budget pour 10 à 50 personnes, avec les options vegan et sans gluten.",
    img: '/hero-petits-dejeuners.webp',
    contenu: `
      <p>Un <strong>petit-déjeuner d'entreprise halal</strong> coûte à partir de <strong>8 € HT par personne</strong> chez L'Écrin Traiteur, avec 29 € HT de livraison par commande : viennoiseries pur beurre, jus, café et fruits, sans porc et sans alcool, livrés dès 6h30 à Paris et en Île-de-France. Ce guide donne les quantités et le budget pour 10, 20, 30 ou 50 personnes, et ce qu'il faut ajouter pour les collègues vegan ou sans gluten. Tarifs L'Écrin Traiteur, octobre 2026, hors taxes.</p>

      <div style="background: var(--bg-secondary); border-left: 2px solid var(--accent); padding: 24px 28px; margin: 0 0 40px;">
        <p style="margin-bottom: 12px;"><strong>En bref</strong></p>
        <ul style="margin-bottom: 0;">
          <li><strong>Formule Classique</strong> : dès 8 € HT par personne (viennoiseries, jus, café, fruits).</li>
          <li><strong>Formule complète</strong> : sur devis, plus 29 € HT de livraison par commande.</li>
          <li><strong>Viennoiseries</strong> : 2 par personne, 3 jusqu'à 10 personnes, plus 10 % de marge.</li>
          <li><strong>Commande</strong> : jusqu'à la veille 14h, livraison dès 6h30, minimum de commande 50 € HT.</li>
          <li><strong>Régimes</strong> : halal et sans porc par défaut, sans alcool, sans supplément ; aucune certification halal revendiquée.</li>
        </ul>
      </div>

      <h2>Un petit-déjeuner d'entreprise est-il halal par défaut ?</h2>
      <p>Chez L'Écrin Traiteur, oui : tout est halal et sans porc par défaut, sans alcool dans les recettes et sans supplément, du petit-déjeuner au cocktail. Viennoiseries pur beurre, madeleines, fruits, jus et café ne demandent aucun aménagement. Aucune certification halal n'est revendiquée ; ce qui est garanti et ce qui ne l'est pas est détaillé dans l'article <a href="/journal/traiteur-halal-entreprise-paris">traiteur halal-friendly à Paris</a>.</p>

      <h2>Combien de viennoiseries par personne pour un petit-déjeuner halal ?</h2>
      <p>Comptez 2 viennoiseries par personne, et 3 par personne jusqu'à 10 personnes, puis ajoutez 10 % de marge. Un plateau de 30 mini-viennoiseries sert 10 à 15 personnes : c'est l'<a href="/creations/petits-dejeuners-et-pauses">assortiment pur beurre</a> de 30 pièces à 48,90 € HT, avec 12 mini croissants, 12 mini pains au chocolat et 6 mini pains aux raisins. Le calcul complet est dans <a href="/journal/combien-viennoiseries-par-personne">combien de viennoiseries par personne</a>.</p>

      <h2>Combien coûte un petit-déjeuner halal pour 10, 20, 30 ou 50 personnes ?</h2>
      <p>La formule Classique coûte 8 € HT par personne et la formule complète sur devis, plus 29 € HT de livraison par commande. Le tableau donne les viennoiseries à prévoir et le total HT, livraison de 29 € HT ajoutée.</p>
      <table>
        <thead>
          <tr><th>Effectif</th><th>Viennoiseries</th><th>Avec 10 % de marge</th><th>Classique (8 €)</th><th>Complet</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>10 personnes</strong></td><td>30</td><td>33</td><td>109 € HT</td><td>sur devis</td></tr>
          <tr><td><strong>20 personnes</strong></td><td>40</td><td>44</td><td>189 € HT</td><td>sur devis</td></tr>
          <tr><td><strong>30 personnes</strong></td><td>60</td><td>66</td><td>269 € HT</td><td>sur devis</td></tr>
          <tr><td><strong>50 personnes</strong></td><td>100</td><td>110</td><td>429 € HT</td><td>sur devis</td></tr>
        </tbody>
      </table>
      <p>Pour un budget plus large, voir <a href="/journal/budget-petit-dejeuner-equipe-personnes">budget d'un petit-déjeuner d'équipe</a>.</p>

      <h2>Que servir aux collègues vegan ou sans gluten ?</h2>
      <p>Précisez à la commande le nombre de personnes concernées par chaque régime, puis complétez le petit-déjeuner avec des produits qui conviennent d'office. Le tableau les liste avec leurs prix HT. L'atelier manipule de la farine : le sans gluten désigne la recette, et des traces restent possibles.</p>
      <table>
        <thead>
          <tr><th>Produit</th><th>Quantité</th><th>Prix HT</th><th>Convient à</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Corbeille de fruits de saison</strong></td><td>10 à 12 fruits</td><td>38,90 €</td><td>Vegan, sans gluten, sans lactose</td></tr>
          <tr><td><strong>Brochettes de fruits frais</strong></td><td>20 brochettes</td><td>48,90 €</td><td>Vegan, sans gluten</td></tr>
          <tr><td><strong>Compote de pomme du verger</strong></td><td>6 verrines</td><td>16,90 €</td><td>Vegan, sans gluten</td></tr>
          <tr><td><strong>Banana bread sans gluten</strong></td><td>5 à 6 personnes</td><td>21,90 €</td><td>Végétarien, sans gluten</td></tr>
          <tr><td><strong>Pain au maïs sans gluten</strong></td><td>10 à 12 tranches</td><td>24,90 €</td><td>Végétarien, sans gluten</td></tr>
        </tbody>
      </table>
      <p>La répartition d'une commande entre plusieurs régimes est détaillée dans le guide <a href="/journal/menu-inclusif-entreprise-halal-vegetarien-sans-gluten">menu inclusif en entreprise</a>.</p>

      <h2>Quelles boissons servir au petit-déjeuner ?</h2>
      <p>Toute la carte de boissons est sans alcool. La formule Classique comprend des jus Alain Milliat et du café, et il est d'usage de prévoir une boisson chaude par personne. Le guide <a href="/journal/boissons-petit-dejeuner-entreprise">boissons du petit-déjeuner d'entreprise</a> complète le choix, et les produits sont détaillés sur la page <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a>.</p>

      <h2>Quand commander et à quelle heure livrer ?</h2>
      <p>Commandez jusqu'à la veille 14h pour une livraison dès 6h30, du lundi au vendredi. Pour 50 personnes et plus ou plusieurs sites, un préavis de 48 h est recommandé. À Boulogne-Billancourt, où se trouve l'atelier, la commande du matin même est possible jusqu'à 10h sur la sélection du jour. Le <a href="/petit-dejeuner-entreprise/boulogne-billancourt">petit-déjeuner d'entreprise à Boulogne-Billancourt</a> en donne le détail.</p>

      <h2>Comment demander un devis pour un petit-déjeuner halal ?</h2>
      <p>Indiquez la date, l'adresse, l'effectif et les régimes à prévoir : le devis arrive sous 24 h, avec une facture entreprise avec TVA ; le bon de commande est accepté et le minimum de commande est de 50 € HT. <a href="/devis">Demandez votre devis</a>, ou voyez toute l'offre sur la page <a href="/traiteur-halal">traiteur halal d'entreprise</a> et la page <a href="/traiteur-halal/paris">traiteur halal à Paris</a>.</p>
      <p>Tarifs L'Écrin Traiteur, octobre 2026.</p>

      <h2>Questions fréquentes sur le petit-déjeuner halal d'entreprise</h2>${faqHtml(FAQ_PDJ)}
    `,
    relatedProducts: ['viennoiseries-melangees', 'panier-fruits', 'brochettes-fruits'],
    faq: FAQ_PDJ,
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 2. Menu inclusif : halal, végétarien, vegan, sans gluten, répartition par effectif
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'menu-inclusif-entreprise-halal-vegetarien-sans-gluten',
    titre: "Menu inclusif en entreprise : halal, végétarien, vegan et sans gluten, comment répartir",
    metaTitle: "Menu inclusif en entreprise : halal, végé, sans gluten",
    categorie: 'Régimes',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    isoModified: '2026-10-13',
    extrait: "Halal, végétarien, vegan, sans gluten : comment répartir plateaux repas et buffet pour 10 à 100 personnes, avec le budget HT pour chaque effectif.",
    img: '/apartager-mediterraneen.webp',
    contenu: `
      <p>Pour <strong>20 personnes aux régimes mélangés</strong>, commandez une carte halal et sans porc pour tous, avec environ un tiers de plateaux végétariens : 7 plateaux végétariens à 28,90 € HT et 13 au poulet à 29,90 € HT, soit 591 € HT avant la livraison de 29 € HT. Ce guide donne la répartition de 10 à 100 personnes, les produits qui cumulent plusieurs régimes et la méthode pour que personne n'ait à se signaler. Tarifs L'Écrin Traiteur, octobre 2026, hors taxes.</p>

      <div style="background: var(--bg-secondary); border-left: 2px solid var(--accent); padding: 24px 28px; margin: 0 0 40px;">
        <p style="margin-bottom: 12px;"><strong>En bref</strong></p>
        <ul style="margin-bottom: 0;">
          <li><strong>Base commune</strong> : toute la carte est halal et sans porc par défaut, sans alcool, sans supplément.</li>
          <li><strong>Végétarien</strong> : environ un tiers des plateaux repas quand les préférences sont inconnues.</li>
          <li><strong>Vegan et sans gluten</strong> : à préciser à la commande, avec le nombre de personnes concernées.</li>
          <li><strong>Traces de gluten</strong> : possibles, l'atelier manipule de la farine.</li>
          <li><strong>Prix</strong> : plateaux repas de 28,90 à 30,90 € HT par personne, livraison 29 € HT par commande, minimum 50 € HT.</li>
        </ul>
      </div>

      <h2>Comment répartir un menu inclusif selon l'effectif ?</h2>
      <p>Partez d'une base halal et sans porc, identique pour tous, puis comptez environ un tiers de plateaux végétariens quand vous ne connaissez pas les préférences de l'équipe. Si vous avez fait un sondage, remplacez cette estimation par les chiffres réels. Le tableau chiffre les plateaux repas : le tiers végétarien à 28,90 € HT, le reste au poulet à 29,90 € HT.</p>
      <table>
        <thead>
          <tr><th>Effectif</th><th>Plateaux végétariens (un tiers)</th><th>Plateaux au poulet</th><th>Plateaux HT</th><th>Avec livraison 29 € HT</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>10 personnes</strong></td><td>3</td><td>7</td><td>296 €</td><td>325 €</td></tr>
          <tr><td><strong>20 personnes</strong></td><td>7</td><td>13</td><td>591 €</td><td>620 €</td></tr>
          <tr><td><strong>30 personnes</strong></td><td>10</td><td>20</td><td>887 €</td><td>916 €</td></tr>
          <tr><td><strong>50 personnes</strong></td><td>17</td><td>33</td><td>1 478 €</td><td>1 507 €</td></tr>
          <tr><td><strong>100 personnes</strong></td><td>33</td><td>67</td><td>2 957 €</td><td>2 986 €</td></tr>
        </tbody>
      </table>
      <p>Remplacer un plateau au poulet par le saumon (La Boréale, 30,90 € HT) ajoute 1 € HT par plateau. Les six plateaux sont détaillés sur la page <a href="/traiteur-halal/plateaux-repas">plateaux repas halal d'entreprise</a>.</p>

      <h2>Quels produits cumulent plusieurs régimes à la fois ?</h2>
      <p>Six produits de la carte répondent à plusieurs régimes en même temps, ce qui évite de commander une version à part. Tous sont halal et sans porc comme le reste de la carte ; le tableau indique le végétarien, le vegan et le sans gluten d'après les fiches produit.</p>
      <table>
        <thead>
          <tr><th>Produit</th><th>Prix HT</th><th>Végétarien</th><th>Vegan</th><th>Sans gluten</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Corbeille de fruits de saison</strong> (10 à 12 fruits)</td><td>38,90 €</td><td>Oui</td><td>Oui</td><td>Oui</td></tr>
          <tr><td><strong>Brochettes de fruits frais</strong> (20)</td><td>48,90 €</td><td>Oui</td><td>Oui</td><td>Oui</td></tr>
          <tr><td><strong>Compote de pomme du verger</strong> (6 verrines)</td><td>16,90 €</td><td>Oui</td><td>Oui</td><td>Oui</td></tr>
          <tr><td><strong>Verrine de salade de fruits</strong> (6)</td><td>16,90 €</td><td>Oui</td><td>Oui</td><td>Oui</td></tr>
          <tr><td><strong>Banana bread sans gluten</strong> (5 à 6 personnes)</td><td>21,90 €</td><td>Oui</td><td>Non</td><td>Oui</td></tr>
          <tr><td><strong>Coffret de 24 macarons d'exception</strong></td><td>64,00 €</td><td>Oui</td><td>Non</td><td>Oui</td></tr>
        </tbody>
      </table>
      <p>L'atelier manipule de la farine : le sans gluten désigne la recette, pas une absence garantie de traces. Pour une personne cœliaque à réaction sévère, signalez-le à la commande. Voir aussi <a href="/journal/traiteur-sans-gluten-entreprise-paris">traiteur sans gluten en entreprise</a> et <a href="/journal/traiteur-vegan-vegetarien-entreprise-paris">traiteur végétarien et vegan</a>.</p>

      <h2>Comment composer un buffet qui convient à tous les régimes ?</h2>
      <p>La composition des trois formules cocktail est fixe : précisez les besoins végétariens, vegan ou sans gluten au devis, avant la commande, avec le nombre de personnes concernées. Pour un repas assis, le menu à partager Le Jardin est 100 % végétarien, à 34,90 € par personne. Les prix des formules cocktail, de 29,90 à 51,90 € HT, sont dans la page <a href="/traiteur-halal/buffet-entreprise">buffet halal d'entreprise</a> et dans le guide <a href="/journal/cocktail-entreprise-halal-paris">cocktail d'entreprise halal à Paris</a>.</p>

      <h2>Comment éviter que quelqu'un se signale devant ses collègues ?</h2>
      <p>Servez la même carte à tous : quand tout est halal et sans porc, personne n'a à demander un menu à part. Demandez les régimes à vos participants une semaine avant, puis transmettez les effectifs, pas les noms. Les plateaux repas sont filmés et étiquetés : chacun retrouve le menu prévu pour lui. Le guide <a href="/journal/evenement-entreprise-halal-guide">événement d'entreprise halal</a> enchaîne les formats d'une journée.</p>

      <h2>Comment commander un menu inclusif ?</h2>
      <p>Commandez jusqu'à la veille 14h pour une livraison dès 6h30, du lundi au vendredi, à Paris et en Île-de-France. Pour 50 personnes et plus ou plusieurs sites, un préavis de 48 h est recommandé. Le devis arrive sous 24 h, la facture est une facture entreprise avec TVA et le bon de commande est accepté. <a href="/devis">Demandez votre devis</a> en indiquant les effectifs par régime, ou partez de la page <a href="/traiteur-halal">traiteur halal d'entreprise</a>.</p>
      <p>Tarifs L'Écrin Traiteur, octobre 2026.</p>

      <h2>Questions fréquentes sur le menu inclusif en entreprise</h2>${faqHtml(FAQ_INCLUSIF)}
    `,
    relatedProducts: ['brochettes-fruits', 'banana-bread-sans-gluten', 'macarons'],
    faq: FAQ_INCLUSIF,
  },
]
