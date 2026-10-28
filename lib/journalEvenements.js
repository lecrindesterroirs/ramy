// Guide « que servir pour chaque événement d'entreprise » (28 octobre 2026) : page d'orientation qui
// renvoie vers les guides détaillés (afterwork, pot de départ, cocktail, séminaire, boissons).
// Tous les prix viennent de lib/prixEntree.js et lib/calculsPrix.js : Classique 8 €, pause 6 €, lunch box
// 18,90 €, plateau 28,90 €, afterwork à partager 24,90 €, cocktails 29,90 / 34,80 / 40,90 / 51,90 €,
// livraison 29 € HT, minimum 50 € HT. Exemples « 20 personnes » = n × prix + 29 €, boissons du cocktail
// non comprises. Chiffres du pot de départ et du cocktail à 50 personnes repris des guides existants.

// FAQ visible dans l'article (même contenu que le FAQPage JSON-LD généré depuis `faq`) : le gabarit français
// n'affiche pas `faq` tout seul, contrairement au gabarit anglais. Ajoutée le 28/10/2026.
const faqHtml = (faq) => `
      <div class="faq-block">
${faq.map(({ q, a }) => `        <details>
          <summary><strong>${q}</strong></summary>
          <p>${a}</p>
        </details>`).join('\n')}
      </div>`
const avecFaqVisible = (articles) => articles.map(a => (
  a.faq?.length && !/faq-block/.test(a.contenu)
    ? { ...a, contenu: a.contenu.replace(/\s*`?$/, '') + `\n      <h2>Questions fréquentes</h2>${faqHtml(a.faq)}\n    ` }
    : a
))

const ARTICLES = [
  {
    slug: 'que-servir-evenement-entreprise-afterwork-pot-de-depart-seminaire',
    titre: "Que servir pour chaque événement d'entreprise : afterwork, pot de départ, séminaire, accueil client ?",
    metaTitle: "Que servir pour un événement d'entreprise : le guide",
    categorie: 'Conseils',
    date: '28 octobre 2026',
    isoDate: '2026-10-28',
    extrait: "Afterwork, pot de départ, réunion, séminaire, accueil client, team building, cocktail : que servir, combien prévoir et quel budget par personne, avec un exemple chiffré pour 20 personnes.",
    img: '/hero-cocktail.webp',
    enBref: [
      "Pour un afterwork ou un pot de départ, comptez 6 à 8 pièces par personne : de 24,90 € HT (afterwork à partager, dès 10 personnes) à 29,90 € HT (cocktail L'Invitation, 8 pièces) chez L'Écrin Traiteur.",
      "Pour une réunion ou un accueil, le petit-déjeuner Classique coûte 8 € HT par personne et la pause gourmande 6 € HT ; pour un séminaire, ajoutez des plateaux repas dès 28,90 € HT ou des lunch box dès 18,90 € HT.",
      "Pour 20 personnes, livraison de 29 € HT comprise : 149 € HT en pause gourmande, 527 € HT en afterwork à partager, 627 € HT en cocktail L'Invitation.",
      "Commande jusqu'à la veille 14h (48 h à partir de 50 personnes), minimum 50 € HT de produits, devis sous 24 h.",
    ],
    contenu: `
      <p>Choisissez le format selon le moment de la journée : <strong>petit-déjeuner ou pause pour une réunion et un accueil, plateaux repas pour un séminaire, cocktail ou afterwork à partager pour un pot de départ et un afterwork</strong>. Chez L'Écrin Traiteur, le prix par personne va de 6 € HT (pause gourmande) à 51,90 € HT (cocktail La Célébration), livraison de 29 € HT en plus.</p>

      <h2>Quel format pour quel événement, et combien ça coûte ?</h2>
      <p>Exemple pour 20 personnes, livraison de 29 € HT comprise. Les boissons du cocktail ne sont pas comptées.</p>
      <table>
        <thead>
          <tr><th>Événement</th><th>Ce qu'on sert</th><th>Prix par personne (HT)</th><th>20 personnes livrées (HT)</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Réunion, petit-déjeuner d'équipe</strong></td><td><a href="/occasions/petit-dejeuner-entreprise">Petit-déjeuner Classique</a></td><td>8 €</td><td>189 €</td></tr>
          <tr><td><strong>Accueil client, pause de l'après-midi</strong></td><td><a href="/occasions/gouter-entreprise">Pause gourmande</a></td><td>6 €</td><td>149 €</td></tr>
          <tr><td><strong>Déjeuner sur le pouce</strong></td><td><a href="/creations/lunch-box">Lunch box</a></td><td>18,90 €</td><td>407 €</td></tr>
          <tr><td><strong>Séminaire, formation, déjeuner</strong></td><td><a href="/creations/plateaux-repas">Plateaux repas</a></td><td>28,90 €</td><td>607 €</td></tr>
          <tr><td><strong>Afterwork, pot de départ</strong></td><td><a href="/creations/cocktails/afterwork-partage">Afterwork à partager</a> (dès 10 personnes)</td><td>24,90 €</td><td>527 €</td></tr>
          <tr><td><strong>Afterwork, pot de départ</strong></td><td>Cocktail L'Invitation, 8 pièces</td><td>29,90 €</td><td>627 €</td></tr>
          <tr><td><strong>Afterwork qui nourrit</strong></td><td>Cocktail L'Afterwork, 10 pièces de plateau, fromages et chips</td><td>35,90 €</td><td>747 €</td></tr>
          <tr><td><strong>Inauguration, fin d'année</strong></td><td>Cocktail La Réception, 12 pièces</td><td>40,90 €</td><td>847 €</td></tr>
          <tr><td><strong>Grande réception, dînatoire</strong></td><td>Cocktail La Célébration, 16 pièces</td><td>51,90 €</td><td>1 067 €</td></tr>
        </tbody>
      </table>
      <p>Pour une autre taille d'équipe, le <a href="/calculateur-quantites">calculateur de quantités</a> donne le même calcul.</p>

      <h2>Que servir pour un afterwork en entreprise ?</h2>
      <p>Comptez <strong>6 à 8 pièces par personne</strong> pour un afterwork d'une à deux heures, et 16 à 18 pièces pour un cocktail dînatoire. Trois formats : l'<a href="/creations/cocktails/afterwork-partage">afterwork à partager</a> (planches de charcuteries halal et de fromages, 6 mini-sandwichs par personne, dès 10 personnes, 24,90 € HT), le cocktail L'Invitation (8 pièces, 29,90 € HT) ou le cocktail L'Afterwork (10 pièces de plateau, une planche de fromages et des chips, 35,90 € HT). Les boissons sont sans alcool. Détail des formats et du budget : <a href="/journal/idees-afterwork-entreprise-formats-budget">idées d'afterwork en entreprise</a> et, pour commander, <a href="/occasions/afterwork-entreprise">traiteur afterwork d'entreprise à Paris</a>.</p>

      <h2>Que prévoir pour un pot de départ ?</h2>
      <p>Un pot de départ se sert comme un afterwork : un cocktail de 8 pièces ou, pour un format plus simple, une pause gourmande. Pour 40 convives, un pot de départ à la retraite revient à <strong>1 476,70 € HT en cocktail de 8 pièces</strong> (boissons sans alcool et livraison comprises, soit 36,92 € HT par convive) et à 269 € HT en pause gourmande. Le buffet, les quantités de boissons et la part de cagnotte par collègue sont calculés dans <a href="/journal/pot-de-depart-retraite-buffet-budget-cagnotte">pot de départ : buffet, budget et cagnotte</a>, et les quantités dans <a href="/journal/traiteur-afterwork-pot-depart-entreprise-paris">organiser un afterwork ou un pot de départ</a>.</p>

      <h2>Que servir pour une réunion, un CODIR ou un accueil client ?</h2>
      <p>Le <strong>petit-déjeuner Classique</strong> à 8 € HT par personne convient aux réunions du matin, aux <a href="/occasions/petit-dejeuner-codir">CODIR</a> et à l'accueil d'un client. En journée, la <a href="/occasions/accueil-client">pause gourmande</a> à 6 € HT par personne suffit. Pour le café et le thé, comptez 1 thermos d'1 litre pour 6 personnes, voir <a href="/journal/combien-de-thermos-cafe-the-10-20-50-100-personnes">combien de thermos pour 10, 20, 50 ou 100 personnes</a>.</p>

      <h2>Que prévoir pour un séminaire ou une journée de formation ?</h2>
      <p>Prévoyez trois temps : un <a href="/occasions/petit-dejeuner-entreprise">petit-déjeuner</a> à l'accueil, un déjeuner en <a href="/creations/plateaux-repas">plateaux repas</a> (28,90 à 30,90 € HT) ou en <a href="/creations/lunch-box">lunch box</a> (dès 18,90 € HT), puis une pause gourmande l'après-midi. Voir <a href="/occasions/seminaire-entreprise">séminaires d'entreprise</a> et <a href="/occasions/journee-formation">journées de formation</a>. Pour les quantités de boissons sur la journée, voir <a href="/journal/combien-boissons-par-personne-reunion-seminaire-cocktail">combien de boissons par personne</a>.</p>

      <h2>Que faire pour un team building ?</h2>
      <p>Une <a href="/creations/animations-culinaires">animation culinaire</a> s'ajoute à un repas ou à un cocktail : elle part de 600 € HT (mise en place et portions). Voir <a href="/occasions/team-building">team building</a>.</p>

      <h2>Que servir pour un cocktail d'inauguration ou de fin d'année ?</h2>
      <p>Choisissez la formule selon le nombre de pièces : 8 pièces à 29,90 € HT, 12 pièces à 40,90 € HT, 16 pièces à 51,90 € HT par personne. Pour 50 personnes, le cocktail coûte 1 495 €, 2 045 € ou 2 595 € HT selon la formule, hors livraison de 29 € HT. En buffet debout, prévoyez 1 maître d'hôtel pour 20 à 40 invités (250 € HT le service de 6 heures). Voir <a href="/journal/budget-cocktail-entreprise-paris">budget cocktail d'entreprise</a>, <a href="/journal/maitre-d-hotel-buffet-entreprise-combien-prix">maître d'hôtel pour un buffet</a> et <a href="/creations/cocktails">nos cocktails</a>.</p>

      <h2>Comment choisir en quatre questions ?</h2>
      <ul>
        <li><strong>Quelle heure ?</strong> Le matin, un petit-déjeuner ; à midi, un plateau repas ou une lunch box ; en fin de journée, un afterwork ou un cocktail.</li>
        <li><strong>Combien de personnes ?</strong> L'afterwork à partager démarre à 10 personnes ; à partir de 50 personnes, commandez 48 h à l'avance.</li>
        <li><strong>Combien de temps ?</strong> Une à deux heures : 6 à 8 pièces par personne ; un dîner debout : 16 à 18 pièces.</li>
        <li><strong>Quel budget ?</strong> Multipliez le prix par personne du tableau par l'effectif et ajoutez 29 € HT de livraison.</li>
      </ul>

      <h2>Avec L'Écrin Traiteur</h2>
      <ul>
        <li>Livraison dès 6h30 à Paris et en Île-de-France, 29 € HT ; commande jusqu'à la veille 14h (48 h à partir de 50 personnes).</li>
        <li>Minimum de commande 50 € HT de produits ; devis sous 24 h, facture d'entreprise avec TVA.</li>
        <li>Toute la carte est halal et sans porc, avec des options végétariennes, vegan et sans gluten.</li>
      </ul>
      <p>Voir tous nos <a href="/tarifs">tarifs</a>, ou <a href="/devis">demandez un devis</a> en indiquant l'événement, l'effectif et la date.</p>
    `,
    relatedProducts: [],
    faq: [
      { q: "Que servir pour un afterwork en entreprise ?", a: "Un afterwork à partager (planches et mini-sandwichs, 24,90 € HT par personne dès 10 personnes) ou un cocktail de 8 à 10 pièces (29,90 ou 35,90 € HT par personne), avec 6 à 8 pièces par personne et des boissons sans alcool. Pour 20 personnes, 527 € HT en afterwork à partager, livraison de 29 € HT comprise." },
      { q: "Que faire pour un pot de départ en entreprise ?", a: "Un cocktail de 8 pièces ou une pause gourmande. Pour 40 convives, un pot de départ coûte 1 476,70 € HT en cocktail de 8 pièces, boissons sans alcool et livraison comprises, soit 36,92 € HT par convive, et 269 € HT en pause gourmande." },
      { q: "Quel petit-déjeuner pour une réunion d'équipe ?", a: "Le petit-déjeuner Classique à 8 € HT par personne, soit 189 € HT pour 20 personnes livrées, avec 1 thermos d'1 litre de café ou de thé pour 6 personnes." },
      { q: "Que prévoir pour un séminaire d'une journée ?", a: "Un petit-déjeuner à l'accueil, un déjeuner en plateaux repas (28,90 à 30,90 € HT par personne) ou en lunch box (dès 18,90 € HT), et une pause gourmande (6 € HT) l'après-midi." },
      { q: "Combien de pièces par personne pour un cocktail d'entreprise ?", a: "6 à 8 pièces pour un afterwork d'une à deux heures, 16 à 18 pour un cocktail dînatoire. Chez L'Écrin Traiteur, les formules comptent 8, 12 ou 16 pièces à 29,90, 40,90 ou 51,90 € HT par personne." },
      { q: "Quel délai pour commander un événement d'entreprise ?", a: "Jusqu'à la veille 14h, et 48 h à l'avance à partir de 50 personnes. Le minimum de commande est de 50 € HT de produits, la livraison de 29 € HT à Paris et en Île-de-France, et le devis arrive sous 24 h." },
    ],
  },
]

export const EVENEMENTS_ARTICLES = avecFaqVisible(ARTICLES)
