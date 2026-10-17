// Articles Halloween d'entreprise (octobre 2026) : fusionnés via lib/journalOffice.js
// Complètent l'article « goûter Halloween » existant (halloween-entreprise-paris) sans le dupliquer :
// ici, la date 2026, le programme, l'afterwork cocktail, les desserts avec prix, les régimes.
// Sources des chiffres : lib/productsData.js, lib/boissonsData.js, app/creations/cocktails/data.js,
// fiche de faits du 13/10/2026 (livraison 29 € HT, minimum 50 € HT, commande jusqu'à la veille 14h,
// pause gourmande dès 6 €, Classique 8 €, cocktail 29,90 / 40,90 / 51,90 €). Tarifs HT, octobre 2026.
// Les budgets sont calculés ici : prix × effectif + 29 € HT pour UNE livraison (hypothèse écrite dans l'article).
// Pas de décoration promise : la décision est ouverte, l'article dit « demandez-la au devis ».

const faqHtml = (faq) => `
      <div class="faq-block">
${faq.map(({ q, a }) => `        <details>
          <summary><strong>${q}</strong></summary>
          <p>${a}</p>
        </details>`).join('\n')}
      </div>`

const fr = (x, deuxDecimales = false) => {
  const r = Math.round(x * 100) / 100
  const s = deuxDecimales || !Number.isInteger(r) ? r.toFixed(2) : String(r)
  const [entier, dec] = s.split('.')
  const groupe = entier.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  return dec ? `${groupe},${dec}` : groupe
}
const eur = (x, deuxDecimales = false) => `${fr(x, deuxDecimales)} €`

const LIV = 29 // livraison HT, par livraison, Paris et communes proches
const PAUSE = 6 // pause gourmande, € HT par personne (dès)
const CLASSIQUE = 8 // petit-déjeuner Classique, € HT par personne
const INVITATION = 29.9 // cocktail 8 pièces
const RECEPTION = 40.9 // cocktail 12 pièces
const CHARDONNAY = 16.9 // bouteille 75 cl sans alcool = 6 flûtes
const JUS = 9.5 // jus d'orange 1 L = 5 verres

const total = (n, ppp) => n * ppp + LIV
// Cocktail avec boissons sans alcool : 1 flûte + 2 verres de jus par personne
const cocktail = (n, ppp) => {
  const bouteilles = Math.ceil(n / 6)
  const litres = Math.ceil((2 * n) / 5)
  return { bouteilles, litres, total: n * ppp + bouteilles * CHARDONNAY + litres * JUS + LIV }
}

/* ──────────────────────────────────────────────────────────────────────────
   1. Organiser Halloween au bureau : date 2026, programme, budget
   ────────────────────────────────────────────────────────────────────────── */
const FAQ_ORGANISER = [
  {
    q: "Quelle date choisir pour Halloween au bureau en 2026 ?",
    a: "Le 31 octobre 2026 tombe un samedi : fêtez Halloween le vendredi 30 octobre, ou le jeudi 29 si l'équipe est souvent en télétravail le vendredi. Un créneau d'une heure en milieu d'après-midi suffit.",
  },
  {
    q: "Combien coûte une pause d'Halloween pour 20 personnes ?",
    a: `${eur(total(20, PAUSE))} HT livraison comprise pour une pause gourmande à 6 € HT par personne (20 × 6 € + 29 € de livraison), soit ${eur(total(20, PAUSE) / 20, true)} HT par personne. Le petit-déjeuner Classique revient à ${eur(total(20, CLASSIQUE))} HT et le cocktail de 8 pièces à ${eur(total(20, INVITATION))} HT, boissons non comprises.`,
  },
  {
    q: "Jusqu'à quand commander pour le vendredi 30 octobre ?",
    a: "Jusqu'à la veille à 14h, soit le jeudi 29 octobre à 14h pour une livraison le vendredi 30, avec livraison dès 6h30. À partir de 50 personnes, prévoyez 48 h pour que la commande soit calée sans stress.",
  },
  {
    q: "Faut-il obliger les déguisements ?",
    a: "Non : proposez-les en option avec un petit concours, jamais en obligation. Les couleurs orange et noir sur la table suffisent à créer l'ambiance, et chacun participe à son niveau.",
  },
  {
    q: "Peut-on personnaliser les madeleines aux couleurs d'Halloween ?",
    a: "Oui, les madeleines se personnalisent (couleurs, étiquette) sur devis, le prix dépend du volume. Le coffret standard de 10 madeleines est à 24,90 € HT, celui de 20 à 49 € HT et celui de 50 à 119 € HT.",
  },
  {
    q: "Les produits conviennent-ils à tous les régimes ?",
    a: "Toute la carte est halal et sans porc par défaut, sans alcool et sans supplément. Les options végétariennes, vegan et sans gluten se précisent à la demande de devis, avec le nombre de personnes concernées.",
  },
]

/* ──────────────────────────────────────────────────────────────────────────
   2. Afterwork d'Halloween : cocktail orange et noir
   ────────────────────────────────────────────────────────────────────────── */
const c20 = cocktail(20, INVITATION)
const c40 = cocktail(40, INVITATION)
const c60 = cocktail(60, INVITATION)
const r20 = cocktail(20, RECEPTION)
const r40 = cocktail(40, RECEPTION)
const r60 = cocktail(60, RECEPTION)

const FAQ_AFTERWORK = [
  {
    q: "Combien coûte un afterwork d'Halloween pour 20 personnes ?",
    a: `${eur(c20.total, true)} HT en cocktail de 8 pièces avec boissons sans alcool et livraison comprises : 20 × 29,90 € = 598 €, ${c20.bouteilles} bouteilles de Chardonnay 0 % à 16,90 € = ${eur(c20.bouteilles * CHARDONNAY, true)}, ${c20.litres} L de jus d'orange à 9,50 € = ${eur(c20.litres * JUS, true)}, livraison 29 €. Soit ${eur(c20.total / 20, true)} HT par personne.`,
  },
  {
    q: "Quelle formule choisir pour un afterwork d'Halloween ?",
    a: "L'Invitation, 8 pièces à 29,90 € HT par personne, pour un afterwork d'1h30 à 2h. La Réception, 12 pièces à 40,90 € HT, si l'afterwork dure plus de deux heures ou tient lieu de dîner. La Célébration, 16 pièces à 51,90 € HT, remplace un repas assis.",
  },
  {
    q: "Peut-on changer les pièces pour qu'elles soient orange et noir ?",
    a: "Non, la composition des trois formules est fixe. La couleur vient de la carte telle quelle (poulet tandoori, patate douce, mangue, carotte, chocolat), des boissons orange et du dressage. La décoration de table se prévoit à part.",
  },
  {
    q: "L'afterwork est-il sans alcool ?",
    a: "Oui, c'est le standard : la carte est sans alcool. Le Chardonnay Blanc de Blancs 0 % à 16,90 € HT la bouteille de 75 cl (6 flûtes) permet de trinquer, avec du jus d'orange à 9,50 € HT le litre.",
  },
  {
    q: "Quelle date pour un afterwork d'Halloween en 2026 ?",
    a: "Le jeudi 29 octobre est le soir le plus choisi, puisque le 31 tombe un samedi. Commandez jusqu'à la veille à 14h, avec livraison dès 6h30, ou 48 h à l'avance à partir de 50 personnes.",
  },
  {
    q: "Peut-on ajouter une décoration ou une animation ?",
    a: "Une décoration de buffet se demande au devis, chiffrée à part. Une animation culinaire s'ajoute sur devis à partir de 600 € HT (mise en place et portions comprises).",
  },
]

/* ──────────────────────────────────────────────────────────────────────────
   3. Desserts d'Halloween au bureau : 10 idées avec le prix
   ────────────────────────────────────────────────────────────────────────── */
const planA = 49 + 48.9 + LIV // 20 madeleines + 20 brochettes + livraison
const planB = 49 + 48.9 + 4 * 17.9 + LIV // + 24 cookies (4 coffrets de 6)
const planC = 49 + 48.9 + 4 * 17.9 + 64 + LIV // + 24 macarons (1 coffret)

const FAQ_DESSERTS = [
  {
    q: "Quel dessert d'Halloween servir au bureau sans se compliquer ?",
    a: "Des madeleines et des brochettes de fruits frais : 20 madeleines à 49 € HT le coffret et 20 brochettes à 48,90 € HT, soit 126,90 € HT livraison comprise pour 20 personnes (2 pièces chacune).",
  },
  {
    q: "Combien de desserts prévoir par personne ?",
    a: "Deux pièces pour une pause de 30 minutes, trois pour un goûter ou un buffet, quatre pour une soirée. Pour 20 personnes, cela donne 40, 60 ou 80 pièces. Voir le guide du nombre de desserts par personne.",
  },
  {
    q: "Peut-on personnaliser des madeleines ou des macarons pour Halloween ?",
    a: "Oui, madeleines, macarons et cookies se personnalisent (couleurs, étiquette, emballage) sur devis. Les coffrets standard sont à 24,90 € HT les 10 madeleines et 64 € HT les 24 macarons.",
  },
  {
    q: "Les desserts sont-ils sans porc ?",
    a: "Oui, toute la carte est halal et sans porc, sans alcool et sans supplément. Pour des bonbons du commerce, lisez la composition : la gélatine des bonbons gélifiés est souvent d'origine porcine.",
  },
  {
    q: "Quel dessert d'Halloween convient aux personnes sans gluten ?",
    a: "Le banana bread sans gluten à 21,90 € HT (5 à 6 personnes) et les brochettes de fruits frais, vegan et sans gluten. Précisez le nombre de personnes concernées à la demande de devis.",
  },
  {
    q: "Quel budget pour les desserts d'une équipe de 20 personnes ?",
    a: `Entre ${eur(planA, true)} HT (madeleines et brochettes) et ${eur(planC, true)} HT (avec cookies et macarons), livraison de 29 € HT comprise, selon le nombre de pièces par personne.`,
  },
]

/* ──────────────────────────────────────────────────────────────────────────
   4. Halloween et régimes alimentaires
   ────────────────────────────────────────────────────────────────────────── */
const planSG = 48.9 + 21.9 + 49 + LIV // brochettes + banana bread SG + madeleines + livraison

const FAQ_REGIMES = [
  {
    q: "La carte d'Halloween est-elle halal et sans porc ?",
    a: "Oui, par défaut : toute la carte est halal et sans porc, sans alcool et sans supplément. Nous ne revendiquons pas de certification halal délivrée par un organisme.",
  },
  {
    q: "Que servir aux collègues végétariens ou vegan ?",
    a: "Madeleines, cookies, cakes maison et macarons conviennent aux végétariens. Les brochettes de fruits frais et la corbeille de fruits de saison sont vegan. Pour un cocktail, précisez les besoins au devis : la composition des formules est fixe.",
  },
  {
    q: "Existe-t-il un dessert d'Halloween sans gluten ?",
    a: "Oui : le banana bread sans gluten à 21,90 € HT (5 à 6 personnes), servi tranché comme les autres cakes, les brochettes de fruits frais et la corbeille de fruits de saison.",
  },
  {
    q: "Comment connaître les régimes de l'équipe avant de commander ?",
    a: "Ajoutez une question à l'invitation (végétarien, vegan, sans gluten, allergies) avec une date de réponse cinq jours avant. Indiquez ensuite le nombre de personnes par régime à la demande de devis.",
  },
  {
    q: "Les macarons contiennent-ils des fruits à coque ?",
    a: "Oui, les coques des macarons sont à base de poudre d'amandes. Signalez toute allergie aux fruits à coque à la demande de devis.",
  },
  {
    q: "Tout le monde doit-il participer à la fête d'Halloween ?",
    a: "Non, la participation reste libre. Présentez la pause comme un moment gourmand d'automne aux couleurs orange et noir, sans déguisement imposé : chacun passe quand il veut.",
  },
]

export const HALLOWEEN = [
  /* ───────────────────────── 1 ───────────────────────── */
  {
    slug: 'organiser-halloween-bureau-entreprise-date-programme-budget',
    enBref: [
      "Halloween 2026 tombe un samedi : fêtez-le le jeudi 29 ou le vendredi 30 octobre.",
      `Une pause gourmande démarre à 6 € HT par personne : ${eur(total(20, PAUSE))} HT livraison comprise pour 20 personnes.`,
      "Commande jusqu'à la veille à 14h, livraison dès 6h30 ; 48 h à l'avance à partir de 50 personnes.",
      "Déguisements en option, jamais obligatoires : la participation reste libre.",
    ],
    about: ["Halloween en entreprise", "Pause gourmande d'entreprise", "Budget traiteur d'entreprise"],
    titre: "Organiser Halloween au bureau en 2026 : date, programme en 3 temps et budget",
    metaTitle: "Halloween au bureau 2026 : date, programme et budget",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    isoModified: '2026-10-13',
    extrait: "Halloween tombe un samedi en 2026 : jeudi 29 ou vendredi 30 octobre ? Programme d'une heure, budget de 10 à 50 personnes et délais de commande.",
    img: '/halloween-madeleine-potiron.webp',
    imgAlt: "Madeleine d'Halloween en forme de citrouille, chocolat blanc et orange, visage au chocolat noir",
    imgPosition: 'center 40%',
    relatedProducts: ['madeleines-20', 'brochettes-fruits', 'cookies'],
    howto: {
      name: "Organiser une pause d'Halloween au bureau en une heure",
      description: "Trois temps pour une pause d'Halloween d'entreprise : accueil, pause gourmande et concours, avec le budget de 10 à 50 personnes.",
      totalTime: 'PT1H',
      steps: [
        { name: "Choisir le jour et commander", text: "Le 31 octobre 2026 tombe un samedi : retenez le jeudi 29 ou le vendredi 30 octobre. Commandez jusqu'à la veille à 14h, ou 48 h à l'avance à partir de 50 personnes." },
        { name: "Accueillir et dresser la table (15 min)", text: "La livraison arrive dès 6h30 à l'heure choisie. Dressez la table, ajoutez les couleurs orange et noir apportées par l'équipe et prévenez les collègues par un message court." },
        { name: "Servir la pause (30 min)", text: "Laissez les produits en libre-service : madeleines, brochettes de fruits, cookies. Prévoyez deux pièces par personne pour une pause de 30 minutes." },
        { name: "Lancer le concours (15 min)", text: "Un concours du meilleur déguisement ou de la plus belle citrouille, avec un petit lot, rassemble l'équipe. La participation reste libre." },
      ],
    },
    faq: FAQ_ORGANISER,
    contenu: `
      <p>Halloween tombe un samedi en 2026 : l'équipe le fête donc le <strong>jeudi 29 ou le vendredi 30 octobre</strong>. Une pause d'une heure pour 20 personnes revient à <strong>${eur(total(20, PAUSE))} HT livraison comprise</strong>, soit ${eur(total(20, PAUSE) / 20, true)} HT par personne. Voici la date, le programme en trois temps, le budget de 10 à 50 personnes et les délais de commande.</p>

      <h2>Quelle date choisir pour Halloween au bureau en 2026 ?</h2>
      <p>Choisissez le <strong>vendredi 30 octobre</strong> en milieu d'après-midi, ou le <strong>jeudi 29 octobre</strong> si l'équipe télétravaille souvent le vendredi. Le 31 octobre 2026 est un samedi : personne n'est au bureau le jour même.</p>
      <p>La commande part jusqu'à la veille à 14h, soit le jeudi 29 à 14h pour le vendredi 30 et le mercredi 28 à 14h pour le jeudi 29, avec livraison dès 6h30. À partir de 50 personnes, prévoyez 48 h. Pour un goûter classique à thème, voir aussi le guide <a href="/journal/halloween-entreprise-paris">Halloween en entreprise à Paris</a>.</p>

      <h2>Quel programme prévoir pour une pause d'Halloween d'une heure ?</h2>
      <p>Prévoyez trois temps : <strong>15 minutes</strong> d'accueil, <strong>30 minutes</strong> de pause gourmande, <strong>15 minutes</strong> de concours. C'est assez pour marquer le moment sans bloquer l'agenda de l'équipe.</p>
      <ol>
        <li><strong>Accueil (15 min) :</strong> la table est dressée avant l'arrivée des collègues, avec des touches orange et noir apportées par l'équipe.</li>
        <li><strong>Pause gourmande (30 min) :</strong> madeleines, brochettes de fruits frais et cookies en libre-service, deux pièces par personne.</li>
        <li><strong>Concours (15 min) :</strong> meilleur déguisement ou plus belle citrouille, avec un petit lot. La participation reste libre.</li>
      </ol>

      <h2>Quel budget pour Halloween au bureau, de 10 à 50 personnes ?</h2>
      <p>Pour 20 personnes, comptez de ${eur(total(20, PAUSE))} HT en pause gourmande à ${eur(total(20, INVITATION))} HT en cocktail de 8 pièces. Le tableau donne le total livraison de 29 € HT comprise, pour une seule livraison, boissons non comprises.</p>
      <table>
        <thead>
          <tr><th>Effectif</th><th>Pause gourmande (6 € HT / pers.)</th><th>Petit-déjeuner Classique (8 € HT / pers.)</th><th>Cocktail 8 pièces (29,90 € HT / pers.)</th></tr>
        </thead>
        <tbody>
${[10, 20, 30, 50].map(n => `          <tr><td><strong>${n}</strong></td><td>${eur(total(n, PAUSE), true)}</td><td>${eur(total(n, CLASSIQUE), true)}</td><td>${eur(total(n, INVITATION), true)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>Le minimum de commande est de 50 € HT. Les boissons s'ajoutent : jus d'orange à 9,50 € HT le litre (5 verres), thermos de café bio à 19,50 € HT (6 à 8 tasses).</p>

      <h2>Quel format choisir pour Halloween ?</h2>
      <ul>
        <li><strong>La pause gourmande, dès 6 € HT par personne :</strong> l'après-midi, à 30 minutes. Voir les <a href="/creations/pauses-gourmandes">pauses gourmandes</a> et le guide <a href="/journal/combien-desserts-par-personne-buffet-cocktail-gouter">combien de desserts par personne</a>.</li>
        <li><strong>Le petit-déjeuner Classique, 8 € HT par personne :</strong> le vendredi matin, pour démarrer la journée en orange et noir. Voir les <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners</a>.</li>
        <li><strong>Le cocktail de 8 pièces, 29,90 € HT par personne :</strong> en fin de journée. Voir le guide <a href="/journal/afterwork-halloween-entreprise-cocktail-orange-noir-budget">afterwork d'Halloween en entreprise</a>.</li>
      </ul>

      <h2>Faut-il obliger les déguisements ?</h2>
      <p>Non. Proposez le déguisement en option avec un petit concours, jamais en obligation : une partie de l'équipe sera enthousiaste, une autre préférera simplement venir manger. Les couleurs orange et noir sur la table suffisent à créer l'ambiance, et la participation reste libre.</p>

      <h2>Comment gérer la décoration ?</h2>
      <p>Le plus simple est que l'équipe apporte ses citrouilles et ses guirlandes : cela fait partie du moment. Une décoration de buffet se demande au devis, elle est chiffrée à part. Les madeleines se personnalisent aux couleurs de la fête : voir la <a href="/creations/personnalisation">personnalisation</a>.</p>

      <h2>Comment commander votre pause d'Halloween ?</h2>
      <p>Demandez un <a href="/devis">devis</a> : il revient sous 24 h. Commandez jusqu'à la veille à 14h, livraison dès 6h30 à Paris et en Île-de-France, facturation entreprise avec TVA. Toute la carte est halal et sans porc par défaut ; pour les autres besoins, voir le guide <a href="/journal/halloween-bureau-regimes-alimentaires-halal-vegetarien-sans-gluten">Halloween et régimes alimentaires</a>.</p>
      <p><em>Tarifs L'Écrin Traiteur, octobre 2026. Calcul : prix par personne × effectif + 29 € HT par livraison, Paris et communes proches. L'Écrin Traiteur est un traiteur d'entreprise installé à Boulogne-Billancourt, noté 5,0 sur 5 sur 29 avis Google.</em></p>

      <h2>Questions fréquentes sur Halloween au bureau</h2>
${faqHtml(FAQ_ORGANISER)}
    `,
  },

  /* ───────────────────────── 2 ───────────────────────── */
  {
    slug: 'afterwork-halloween-entreprise-cocktail-orange-noir-budget',
    enBref: [
      `Cocktail de 8 pièces à 29,90 € HT par personne : ${eur(c20.total, true)} HT pour 20 personnes, boissons sans alcool et livraison comprises.`,
      "12 pièces à 40,90 € HT par personne si l'afterwork dure plus de deux heures.",
      "La composition des formules est fixe ; toute la carte est halal et sans porc, sans alcool.",
      "Soir conseillé en 2026 : le jeudi 29 octobre, puisque le 31 est un samedi.",
    ],
    about: ["Afterwork d'Halloween", "Cocktail d'entreprise", "Cocktail dînatoire"],
    titre: "Afterwork d'Halloween en entreprise : un cocktail orange et noir, avec le budget",
    metaTitle: "Afterwork Halloween entreprise : cocktail et budget",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    isoModified: '2026-10-13',
    extrait: "Un afterwork d'Halloween pour 20 personnes : cocktail de 8 pièces, boissons sans alcool et budget de 20 à 60 personnes, calculés pièce par pièce.",
    img: '/cocktail-classique.webp',
    relatedProducts: ['macarons', 'brochettes-fruits', 'madeleines-20'],
    faq: FAQ_AFTERWORK,
    contenu: `
      <p>Un afterwork d'Halloween pour 20 personnes revient à <strong>${eur(c20.total, true)} HT</strong> en cocktail de 8 pièces avec boissons sans alcool et livraison comprises, soit ${eur(c20.total / 20, true)} HT par personne. Voici la formule à choisir, les pièces qui jouent l'orange et le noir, les boissons et le budget de 20 à 60 personnes.</p>

      <h2>Quelle formule cocktail choisir pour un afterwork d'Halloween ?</h2>
      <p>Choisissez <strong>L'Invitation, 8 pièces à 29,90 € HT par personne</strong>, pour un afterwork d'1h30 à 2h. Passez à <strong>La Réception, 12 pièces à 40,90 € HT</strong>, s'il dure plus de deux heures ou tient lieu de dîner. Toutes les pièces sont dressées et livrées prêtes à servir. Pour comparer les formats, voir le guide <a href="/journal/idees-afterwork-entreprise-formats-budget">idées d'afterwork en entreprise</a>.</p>

      <h2>Quelles pièces donnent l'orange et le noir ?</h2>
      <p>Les trois formules ont une composition fixe : la couleur vient des pièces de la carte telles quelles. Du côté orange, le poulet tandoori, la patate douce, la mangue et la carotte ; du côté foncé, le chocolat et le praliné.</p>
      <table>
        <thead>
          <tr><th>Couleur</th><th>L'Invitation (8 pièces)</th><th>La Réception (12 pièces)</th><th>La Célébration (16 pièces)</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Orange</strong></td><td>Brochette de poulet mariné tandoori</td><td>+ bouchée de patate douce, feta et olive kalamata ; saumon mariné et betterave jaune ; crevette bio, mangue et radis noir</td><td>+ moelleux de carotte au cerfeuil</td></tr>
          <tr><td><strong>Foncé</strong></td><td>Tartelette tout chocolat</td><td>+ dôme praliné</td><td>+ tartelette aux myrtilles</td></tr>
          <tr><td><strong>Violet</strong></td><td>Millefeuille de betterave au chèvre</td><td>idem</td><td>idem</td></tr>
        </tbody>
      </table>
      <p>Les compositions sont décrites en détail sur la page <a href="/creations/cocktails">cocktails</a>. Les brochettes de fruits frais de saison complètent la partie sucrée dans les trois formules.</p>

      <h2>Quelles boissons pour un afterwork d'Halloween sans alcool ?</h2>
      <p>Toute la carte est sans alcool. Servez le <strong>jus d'orange à 9,50 € HT le litre</strong> (5 verres) pour la couleur, le nectar d'abricot ou de mangue à 10,50 € HT le litre en alternative, et le <strong>Chardonnay Blanc de Blancs 0 % à 16,90 € HT</strong> la bouteille de 75 cl (6 flûtes) pour trinquer. Règle de calcul : 1 flûte et 2 verres de jus par personne.</p>

      <h2>Quel budget pour 20, 40 et 60 personnes ?</h2>
      <p>Pour 40 personnes, comptez ${eur(c40.total, true)} HT en 8 pièces, boissons sans alcool et livraison comprises, soit ${eur(c40.total / 40, true)} HT par personne. Le tableau applique la règle : prix par personne, plus ${c20.bouteilles} bouteilles de Chardonnay 0 % pour 20 personnes, plus le jus d'orange, plus une livraison de 29 € HT.</p>
      <table>
        <thead>
          <tr><th>Effectif</th><th>Boissons (Chardonnay 0 % + jus d'orange)</th><th>8 pièces (29,90 €)</th><th>12 pièces (40,90 €)</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>20</strong></td><td>${c20.bouteilles} bouteilles + ${c20.litres} L</td><td>${eur(c20.total, true)}</td><td>${eur(r20.total, true)}</td></tr>
          <tr><td><strong>40</strong></td><td>${c40.bouteilles} bouteilles + ${c40.litres} L</td><td>${eur(c40.total, true)}</td><td>${eur(r40.total, true)}</td></tr>
          <tr><td><strong>60</strong></td><td>${c60.bouteilles} bouteilles + ${c60.litres} L</td><td>${eur(c60.total, true)}</td><td>${eur(r60.total, true)}</td></tr>
        </tbody>
      </table>
      <p>Calcul pour 20 personnes en 8 pièces : 20 × 29,90 € = 598 € ; ${c20.bouteilles} × 16,90 € = ${eur(c20.bouteilles * CHARDONNAY, true)} ; ${c20.litres} × 9,50 € = ${eur(c20.litres * JUS, true)} ; livraison 29 € ; total ${eur(c20.total, true)}. Pour un cocktail moins cher, voir le guide <a href="/journal/cocktail-dinatoire-pas-cher-entreprise-budget">cocktail dînatoire pas cher</a>.</p>

      <h2>Quelle date pour un afterwork d'Halloween en 2026 ?</h2>
      <p>Le 31 octobre 2026 est un samedi : le <strong>jeudi 29 octobre</strong> est le soir le plus naturel. Commandez jusqu'à la veille à 14h, avec livraison dès 6h30, ou 48 h à l'avance à partir de 50 personnes. Le programme complet d'une pause d'Halloween est dans le guide <a href="/journal/organiser-halloween-bureau-entreprise-date-programme-budget">organiser Halloween au bureau</a>.</p>

      <h2>Comment réussir l'ambiance sans déguisement obligatoire ?</h2>
      <p>Misez sur la lumière et la table : des bougies, des citrouilles, du noir et de l'orange apportés par l'équipe. Le déguisement reste une option avec un petit concours. Une décoration de buffet se demande au devis, chiffrée à part.</p>

      <h2>Comment commander votre afterwork d'Halloween ?</h2>
      <p>Demandez un <a href="/devis">devis</a> en indiquant l'effectif, l'heure et l'adresse : il revient sous 24 h. Le cocktail est halal et sans porc, sans alcool, sans supplément. Voir aussi l'<a href="/occasions/afterwork-entreprise">afterwork en entreprise</a>.</p>
      <p><em>Tarifs L'Écrin Traiteur, octobre 2026. Calcul : prix par personne × effectif + 29 € HT par livraison, Paris et communes proches. L'Écrin Traiteur est un traiteur d'entreprise installé à Boulogne-Billancourt, noté 5,0 sur 5 sur 29 avis Google.</em></p>

      <h2>Questions fréquentes sur l'afterwork d'Halloween</h2>
${faqHtml(FAQ_AFTERWORK)}
    `,
  },

  /* ───────────────────────── 3 ───────────────────────── */
  {
    slug: 'desserts-halloween-bureau-idees-sans-porc-prix',
    enBref: [
      `20 madeleines et 20 brochettes de fruits frais : ${eur(planA, true)} HT pour 20 personnes, livraison comprise.`,
      "Prévoir 2 pièces par personne pour une pause, 3 pour un goûter, 4 pour une soirée.",
      "Madeleines, macarons et cookies se personnalisent aux couleurs de la fête, sur devis.",
      "Toute la carte est sans porc ; la gélatine des bonbons du commerce est souvent d'origine porcine.",
    ],
    about: ["Desserts d'Halloween", "Goûter d'entreprise", "Madeleines personnalisées"],
    titre: "Desserts d'Halloween pour le bureau : 10 idées sans porc, avec le prix par pièce",
    metaTitle: "Desserts Halloween bureau : 10 idées et prix",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    isoModified: '2026-10-13',
    extrait: "10 desserts d'Halloween pour le bureau, tous sans porc, avec le prix par pièce, les quantités par personne et un budget calculé pour 20 personnes.",
    img: '/halloween-madeleine-potiron.webp',
    imgAlt: "Madeleine d'Halloween en forme de citrouille, chocolat blanc et orange, visage au chocolat noir",
    imgPosition: 'center 40%',
    relatedProducts: ['carrot-cake', 'cookies', 'macarons'],
    faq: FAQ_DESSERTS,
    contenu: `
      <p>Pour Halloween au bureau, <strong>20 madeleines et 20 brochettes de fruits</strong> suffisent pour 20 personnes : ${eur(planA, true)} HT livraison comprise, soit ${eur(planA / 20, true)} HT par personne. Voici 10 desserts d'Halloween, tous sans porc, avec le prix de chaque pièce et les quantités à prévoir.</p>

      <h2>Quels desserts d'Halloween servir au bureau ?</h2>
      <p>Servez des desserts qui se mangent à la main, sans assiette, avec des couleurs orange et noir. Le tableau donne le prix HT par coffret et par pièce (hors livraison de 29 € HT).</p>
      <table>
        <thead>
          <tr><th>Idée</th><th>Prix HT</th><th>Par pièce ou par part</th><th>À savoir</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>1. Madeleines</strong></td><td>24,90 € les 10 · 49 € les 20 · 119 € les 50</td><td>${eur(24.9 / 10, true)} · ${eur(49 / 20, true)} · ${eur(119 / 50, true)}</td><td>Personnalisables (couleurs, étiquette) sur devis</td></tr>
          <tr><td><strong>2. Brochettes de fruits frais</strong></td><td>48,90 € les 20</td><td>${eur(48.9 / 20, true)}</td><td>Vegan et sans gluten</td></tr>
          <tr><td><strong>3. Cookies maison</strong></td><td>17,90 € les 6</td><td>${eur(17.9 / 6, true)}</td><td>Version personnalisée sur devis</td></tr>
          <tr><td><strong>4. Macarons</strong></td><td>64 € les 24</td><td>${eur(64 / 24, true)}</td><td>Coques à base de poudre d'amandes</td></tr>
          <tr><td><strong>5. Carrot cake maison</strong></td><td>13,90 € pour 5 à 6 personnes</td><td>de ${eur(13.9 / 6, true)} à ${eur(13.9 / 5, true)} la part</td><td>La couleur orange sans effort</td></tr>
          <tr><td><strong>6. Cake marbré maison</strong></td><td>13,90 € pour 5 à 6 personnes</td><td>de ${eur(13.9 / 6, true)} à ${eur(13.9 / 5, true)} la part</td><td>Le noir et blanc de la table</td></tr>
          <tr><td><strong>7. Cake pépites de chocolat maison</strong></td><td>13,90 € pour 5 à 6 personnes</td><td>de ${eur(13.9 / 6, true)} à ${eur(13.9 / 5, true)} la part</td><td>Le côté foncé</td></tr>
          <tr><td><strong>8. Verrines de salade de fruits</strong></td><td>16,90 € les 6</td><td>${eur(16.9 / 6, true)}</td><td>Une pièce individuelle fraîche</td></tr>
          <tr><td><strong>9. Banana bread sans gluten</strong></td><td>21,90 € pour 5 à 6 personnes</td><td>de ${eur(21.9 / 6, true)} à ${eur(21.9 / 5, true)} la part</td><td>Sert tranché, comme les autres cakes</td></tr>
          <tr><td><strong>10. Corbeille de fruits de saison</strong></td><td>38,90 € pour 10 à 12 fruits</td><td>de ${eur(38.9 / 12, true)} à ${eur(38.9 / 10, true)} le fruit</td><td>Vegan, sans gluten</td></tr>
        </tbody>
      </table>
      <p>Les cakes, les cookies et les madeleines viennent de la <a href="/creations/pauses-gourmandes">pause gourmande</a> ; le reste, des <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a>.</p>

      <h2>Combien de desserts prévoir par personne ?</h2>
      <p>Prévoyez <strong>2 pièces</strong> par personne pour une pause de 30 minutes, <strong>3 pièces</strong> pour un goûter, <strong>4 pièces</strong> pour une soirée. Pour 20 personnes, cela donne 40, 60 ou 80 pièces. Le détail par format est dans le guide <a href="/journal/combien-desserts-par-personne-buffet-cocktail-gouter">combien de desserts par personne</a>.</p>

      <h2>Quel budget pour 20 personnes ?</h2>
      <p>Trois combinaisons, livraison de 29 € HT comprise, pour 20 personnes :</p>
      <table>
        <thead>
          <tr><th>Format</th><th>Contenu</th><th>Total HT</th><th>Par personne</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Pause, 2 pièces</strong></td><td>20 madeleines (49,00) + 20 brochettes de fruits (48,90) + livraison 29</td><td>${eur(planA, true)}</td><td>${eur(planA / 20, true)}</td></tr>
          <tr><td><strong>Goûter, 3 pièces</strong></td><td>idem + 4 coffrets de 6 cookies (4 × 17,90)</td><td>${eur(planB, true)}</td><td>${eur(planB / 20, true)}</td></tr>
          <tr><td><strong>Soirée, 4 pièces</strong></td><td>idem + 1 coffret de 24 macarons (64,00)</td><td>${eur(planC, true)}</td><td>${eur(planC / 20, true)}</td></tr>
        </tbody>
      </table>
      <p>Les coffrets de cookies donnent 24 pièces pour 20 personnes et le coffret de macarons 24 pièces : le surplus se partage. Pour viser plus bas, une pause gourmande démarre à 6 € HT par personne.</p>

      <h2>Comment personnaliser les desserts aux couleurs d'Halloween ?</h2>
      <p>Madeleines, macarons et cookies se personnalisent : couleurs, étiquette, emballage. Le prix dépend du volume et se chiffre au devis. Voir la <a href="/creations/personnalisation">personnalisation</a>. Le coffret standard reste disponible sans personnalisation.</p>

      <h2>Et les bonbons d'Halloween ?</h2>
      <p>Lisez l'étiquette : la gélatine des bonbons gélifiés est souvent d'origine porcine. Si l'équipe compte des personnes qui évitent le porc, privilégiez des desserts dont la composition est connue. Toute notre carte est halal et sans porc par défaut, sans alcool, sans supplément : voir le <a href="/traiteur-halal">traiteur halal d'entreprise</a>.</p>

      <h2>Comment commander vos desserts d'Halloween ?</h2>
      <p>Demandez un <a href="/devis">devis</a> sous 24 h. Commandez jusqu'à la veille à 14h, livraison dès 6h30. Le 31 octobre 2026 est un samedi : visez le jeudi 29 ou le vendredi 30. Programme et budget d'une pause complète : <a href="/journal/organiser-halloween-bureau-entreprise-date-programme-budget">organiser Halloween au bureau</a>.</p>
      <p><em>Tarifs L'Écrin Traiteur, octobre 2026. Calcul : prix par personne × effectif + 29 € HT par livraison, Paris et communes proches. L'Écrin Traiteur est un traiteur d'entreprise installé à Boulogne-Billancourt, noté 5,0 sur 5 sur 29 avis Google.</em></p>

      <h2>Questions fréquentes sur les desserts d'Halloween</h2>
${faqHtml(FAQ_DESSERTS)}
    `,
  },

  /* ───────────────────────── 4 ───────────────────────── */
  {
    slug: 'halloween-bureau-regimes-alimentaires-halal-vegetarien-sans-gluten',
    enBref: [
      "Toute la carte est halal et sans porc, sans alcool et sans supplément ; aucune certification n'est revendiquée.",
      "Sans gluten : banana bread à 21,90 € HT (5 à 6 personnes) et brochettes de fruits frais.",
      "Vegan : brochettes de fruits frais et corbeille de fruits de saison.",
      "Les coques des macarons sont à base de poudre d'amandes : signaler toute allergie au devis.",
    ],
    about: ["Régimes alimentaires en entreprise", "Traiteur halal d'entreprise", "Halloween en entreprise"],
    titre: "Halloween au bureau : que servir quand l'équipe a des régimes différents ?",
    metaTitle: "Halloween au bureau : halal, végétarien, sans gluten",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    isoModified: '2026-10-13',
    extrait: "Halal, végétarien, vegan, sans gluten, allergies : que servir à Halloween quand l'équipe a des régimes différents, avec les prix et un exemple.",
    img: '/prod-banana-bread.webp',
    relatedProducts: ['banana-bread-sans-gluten', 'brochettes-fruits', 'panier-fruits'],
    faq: FAQ_REGIMES,
    contenu: `
      <p>Pour Halloween, <strong>toute la carte L'Écrin est halal et sans porc</strong>, sans alcool et sans supplément : personne n'a à se signaler. Les options végétariennes, vegan et sans gluten se précisent à la demande de devis. Voici ce qui convient à chaque régime, avec les prix et un exemple chiffré pour 20 personnes.</p>

      <h2>Que servir à chaque régime pour Halloween ?</h2>
      <p>Le tableau donne, pour chaque besoin, les produits de la carte qui conviennent, avec le prix HT.</p>
      <table>
        <thead>
          <tr><th>Besoin</th><th>Ce qui convient</th><th>À préciser</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Halal et sans porc</strong></td><td>Toute la carte, par défaut, sans alcool et sans supplément</td><td>Rien : c'est le standard. Pas de certification revendiquée</td></tr>
          <tr><td><strong>Végétarien</strong></td><td>Madeleines, cookies, cakes maison (13,90 €), macarons, brochettes de fruits, verrines de salade de fruits</td><td>Le nombre de personnes concernées</td></tr>
          <tr><td><strong>Vegan</strong></td><td>Brochettes de fruits frais (48,90 € les 20), corbeille de fruits de saison (38,90 €)</td><td>Le nombre de personnes concernées</td></tr>
          <tr><td><strong>Sans gluten</strong></td><td>Banana bread sans gluten (21,90 € pour 5 à 6 personnes), brochettes de fruits, corbeille de fruits</td><td>Le nombre de personnes concernées</td></tr>
          <tr><td><strong>Allergie aux fruits à coque</strong></td><td>Les coques des macarons sont à base de poudre d'amandes</td><td>Toute allergie, dès la demande de devis</td></tr>
        </tbody>
      </table>
      <p>Pour un cocktail, la composition des formules est fixe : précisez les besoins végétariens, vegan ou sans gluten au devis, avant la commande. Le guide <a href="/journal/menu-inclusif-entreprise-halal-vegetarien-sans-gluten">menu inclusif d'entreprise</a> détaille la méthode.</p>

      <h2>Comment connaître les régimes de l'équipe ?</h2>
      <p>Ajoutez une question à l'invitation : « Un régime ou une allergie à signaler ? », avec une date de réponse <strong>cinq jours avant</strong>. Vous transmettez ensuite le nombre de personnes par régime à la demande de devis. Des <a href="/journal/modeles-invitation-pot-petit-dejeuner-afterwork-entreprise">modèles d'invitation</a> prêts à copier sont disponibles.</p>

      <h2>Quel exemple chiffré pour 20 personnes avec un volet sans gluten ?</h2>
      <p>Une pause de 20 personnes avec une option sans gluten revient à <strong>${eur(planSG, true)} HT livraison comprise</strong>, soit ${eur(planSG / 20, true)} HT par personne.</p>
      <table>
        <thead>
          <tr><th>Produit</th><th>Quantité</th><th>Prix HT</th></tr>
        </thead>
        <tbody>
          <tr><td>Brochettes de fruits frais (vegan, sans gluten)</td><td>20</td><td>48,90 €</td></tr>
          <tr><td>Banana bread sans gluten</td><td>1 (5 à 6 personnes)</td><td>21,90 €</td></tr>
          <tr><td>Coffret de 20 madeleines</td><td>1</td><td>49,00 €</td></tr>
          <tr><td>Livraison</td><td>1</td><td>29,00 €</td></tr>
          <tr><td><strong>Total</strong></td><td></td><td><strong>${eur(planSG, true)}</strong></td></tr>
        </tbody>
      </table>

      <h2>Comment présenter la fête sans mettre personne à l'écart ?</h2>
      <p>Présentez-la comme une pause gourmande d'automne aux couleurs orange et noir, avec des déguisements facultatifs. La participation reste libre : chacun passe quand il veut, mange ce qui lui convient et repart. Le programme d'une heure est détaillé dans le guide <a href="/journal/organiser-halloween-bureau-entreprise-date-programme-budget">organiser Halloween au bureau</a>.</p>

      <h2>Comment commander ?</h2>
      <p>Demandez un <a href="/devis">devis</a> sous 24 h en indiquant les régimes. Commandez jusqu'à la veille à 14h, livraison dès 6h30. Le 31 octobre 2026 est un samedi : visez le jeudi 29 ou le vendredi 30. Les desserts avec leur prix par pièce sont dans le guide <a href="/journal/desserts-halloween-bureau-idees-sans-porc-prix">desserts d'Halloween pour le bureau</a>.</p>
      <p><em>Tarifs L'Écrin Traiteur, octobre 2026. Calcul : prix par personne × effectif + 29 € HT par livraison, Paris et communes proches. L'Écrin Traiteur est un traiteur d'entreprise installé à Boulogne-Billancourt, noté 5,0 sur 5 sur 29 avis Google.</em></p>

      <h2>Questions fréquentes sur Halloween et les régimes alimentaires</h2>
${faqHtml(FAQ_REGIMES)}
    `,
  },
]
