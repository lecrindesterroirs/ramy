// Article Movember en entreprise (octobre 2026) : fusionné via lib/journalOffice.js
// Sources Movember (lues le 17/10/2026) :
//   - Guide de la collecte de fonds sur le lieu de travail (fr.movember.com, PDF) : quatre façons de se mobiliser,
//     idées au travail (rasage collectif, quiz, discussions santé, abondement, boîte à dons, remise des prix),
//     chiffres de santé, section « rester dans la légalité » ;
//   - fr.movember.com/get-involved/at-work : solo, équipe ou compétition entre bureaux, Business Club ;
//   - movember.com/about-us : trois causes, « plus de 1,8 milliard de dollars australiens » investis dans la prévention.
// Chiffres L'Écrin : fiche de faits du 13/10/2026 (livraison 29 € HT, Classique 8 €, pause gourmande dès 6 €,
// cocktail 8 pièces 29,90 €, commande jusqu'à la veille 14h). Aucun reversement ni opération Movember annoncés :
// la décision n'est pas prise (question Q-PRO-128 du coffre). Pas de « halal » sur le sucré (règle du 17/10/2026).

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
const CLASSIQUE = 8 // petit-déjeuner Classique, € HT par personne
const PAUSE = 6 // pause gourmande, € HT par personne (dès)
const INVITATION = 29.9 // cocktail 8 pièces
const total = (n, ppp) => n * ppp + LIV

const lancement20 = total(20, CLASSIQUE) // 189
const cloture20 = total(20, PAUSE) // 149
const deuxTemps20 = lancement20 + cloture20 // 338, deux livraisons

const SRC_AT_WORK = 'https://fr.movember.com/get-involved/at-work'
const SRC_ABOUT = 'https://movember.com/about-us'
const SRC_GUIDE = 'https://fr.movember.com/uploads/files/Fundraising-Resources/Guides%20T2%20-%20FR/Movember%20-%20Workplace%20Fundraising%20Guide%20French.pdf'

const FAQ_MOVEMBER = [
  {
    q: "Quelles sont les dates de Movember en 2026 ?",
    a: "Movember se vit pendant tout le mois de novembre : les participants démarrent rasés le dimanche 1er novembre, soit le lundi 2 novembre au bureau, et le mois se clôt le lundi 30 novembre. Un petit-déjeuner de lancement le 2 et un goûter de remise des prix le 27 ou le 30 donnent un cadre simple.",
  },
  {
    q: "Combien coûte un petit-déjeuner Movember pour 20 personnes ?",
    a: `${eur(lancement20)} HT livraison comprise pour un petit-déjeuner Classique à 8 € HT par personne (20 × 8 € + 29 € de livraison). Avec un goûter de clôture à partir de 6 € HT par personne, soit ${eur(cloture20)} HT, les deux temps forts reviennent à ${eur(deuxTemps20)} HT pour 20 personnes, avec deux livraisons.`,
  },
  {
    q: "Comment participer à Movember sans se laisser pousser la moustache ?",
    a: "Le guide Movember propose trois autres façons : bouger en marchant ou en courant 60 km dans le mois, organiser un « Mo-ment » (soirée quiz, tournoi de ping-pong) ou inventer son propre défi. Elles se combinent entre elles.",
  },
  {
    q: "L'entreprise peut-elle doubler les dons des collègues ?",
    a: "Oui, si elle propose l'abondement : l'employeur verse une somme équivalente aux dons collectés, un euro pour un euro. Movember invite à poser la question à la direction ou aux RH avant le lancement.",
  },
  {
    q: "Le traiteur collecte-t-il les dons Movember ?",
    a: "Non, la collecte se fait sur la page de votre équipe Movember. La facture du traiteur couvre le petit-déjeuner ou le goûter livré, rien d'autre.",
  },
  {
    q: "Quels régimes prévoir sur la table ?",
    a: "Prévoyez des options végétariennes, vegan et sans gluten : les brochettes de fruits frais et la corbeille de fruits de saison sont vegan et sans gluten, et le banana bread sans gluten est à 26,90 € HT pour 6 à 8 personnes. Précisez le nombre de personnes concernées à la demande de devis.",
  },
]

export const MOVEMBER = [
  {
    slug: 'movember-entreprise-organiser-petit-dejeuner-gouter-bureau',
    titre: "Movember en entreprise : comment l'organiser au bureau, du petit-déjeuner de lancement au goûter de clôture",
    metaTitle: "Movember en entreprise : organiser le mois au bureau",
    categorie: 'Conseils',
    date: '17 octobre 2026',
    isoDate: '2026-10-17',
    isoModified: '2026-10-17',
    enBref: [
      "Movember dure tout le mois de novembre : les participants démarrent rasés le 1er novembre (un dimanche en 2026) et laissent pousser une moustache.",
      "Trois causes sont soutenues : la santé mentale et la prévention du suicide, le cancer de la prostate, le cancer des testicules.",
      "Calendrier 2026 au bureau : lancement le lundi 2 novembre, clôture le vendredi 27 ou le lundi 30 novembre.",
      `Petit-déjeuner Classique : 8 € HT par personne, soit ${eur(lancement20)} HT livraison comprise pour 20 personnes.`,
    ],
    about: ["Movember", "Santé masculine en entreprise", "Petit-déjeuner d'entreprise"],
    extrait: "Movember au bureau en 2026 : dates, actions proposées par Movember, petit-déjeuner de lancement, goûter de clôture et budget pour 20 personnes.",
    img: '/prod-cake-marbre.webp',
    relatedProducts: ['madeleines-20', 'brochettes-fruits', 'panier-fruits'],
    howto: {
      name: "Organiser Movember au bureau en quatre étapes",
      description: "Obtenir l'accord de la direction, créer l'équipe Movember, planifier le lancement et la clôture, puis commander le petit-déjeuner et le goûter.",
      totalTime: 'P1M',
      steps: [
        { name: "Obtenir l'accord de la direction", text: "Écrivez à un responsable en précisant quoi, quand, où et comment, le montant visé et ce que l'entreprise y gagne. Demandez aussi si elle propose l'abondement des dons." },
        { name: "Créer l'équipe Movember", text: "Chaque participant crée son Mo Space, puis l'un d'eux crée l'équipe depuis la section Équipe et en devient le capitaine. Choisissez un nom d'équipe et un objectif de collecte." },
        { name: "Planifier le lancement et la clôture", text: "Fixez un petit-déjeuner de lancement le lundi 2 novembre et une remise des prix le vendredi 27 ou le lundi 30 novembre. Annoncez les dates par affiche et par e-mail." },
        { name: "Commander le petit-déjeuner et le goûter", text: "Demandez un devis, puis commandez jusqu'à la veille à 14h, avec une livraison dès 6h30. Précisez les régimes de l'équipe : végétarien, vegan, sans gluten." },
      ],
    },
    faq: FAQ_MOVEMBER,
    contenu: `
      <p>Movember se vit pendant tout le mois de novembre : les participants démarrent rasés le 1er novembre et laissent pousser une moustache pour soutenir la santé mentale et la prévention du suicide, le cancer de la prostate et le cancer des testicules. Au bureau, le plus simple tient en deux rendez-vous : un <strong>petit-déjeuner de lancement le lundi 2 novembre 2026</strong> et un <strong>goûter de clôture</strong> en fin de mois. Pour 20 personnes, comptez ${eur(lancement20)} HT pour le lancement, livraison comprise.</p>

      <h2>Qu'est-ce que Movember et quelles causes soutient-il ?</h2>
      <p>Movember est un mouvement né entre amis qui laissent pousser des moustaches. Il soutient trois causes : la <strong>santé mentale et la prévention du suicide</strong>, le <strong>cancer de la prostate</strong> et le <strong>cancer des testicules</strong>. Movember indique avoir financé plus de 1,8 milliard de dollars australiens de travaux de prévention (<a href="${SRC_ABOUT}" target="_blank" rel="noopener">movember.com</a>).</p>
      <p>Dans son guide pour le lieu de travail, Movember rappelle qu'un homme se suicide toutes les minutes dans le monde, que le cancer de la prostate est le deuxième cancer le plus diagnostiqué chez les hommes et qu'un dépistage précoce change l'issue : 98 % de chances de survie au-delà de cinq ans, contre 26 % pour un dépistage tardif (<a href="${SRC_GUIDE}" target="_blank" rel="noopener">guide Movember</a>). Pour toute question médicale, le bon interlocuteur est un médecin.</p>

      <h2>Quelles actions organiser au bureau pour Movember ?</h2>
      <p>Movember propose quatre façons de se mobiliser : laisser pousser une moustache, <strong>bouger</strong> en marchant ou courant 60 km dans le mois, <strong>organiser un « Mo-ment »</strong> (soirée quiz, tournoi de ping-pong) ou inventer son propre défi. Une entreprise peut s'inscrire en solo, créer une équipe ou organiser une compétition entre plusieurs bureaux (<a href="${SRC_AT_WORK}" target="_blank" rel="noopener">fr.movember.com</a>).</p>
      <p>Le guide détaille aussi des idées qui se prêtent bien à un temps convivial :</p>
      <ul>
        <li><strong>Le rasage collectif :</strong> les collègues donnent pour que les participants démarrent rasés, avec des photos avant et après.</li>
        <li><strong>Le quiz au bureau :</strong> on invite les entreprises voisines, partenaires et fournisseurs à jouer en échange d'un don.</li>
        <li><strong>Les discussions santé :</strong> un échange hebdomadaire sur la santé ou le bien-être.</li>
        <li><strong>L'abondement des dons :</strong> l'employeur verse une somme équivalente à celle collectée, un euro pour un euro.</li>
        <li><strong>La boîte à dons :</strong> dans la salle de pause ou tout lieu où l'équipe se réunit.</li>
        <li><strong>La remise des prix :</strong> en fin de mois, pour le meilleur collecteur, la personne qui a le plus bougé et la meilleure et la pire moustache.</li>
      </ul>

      <h2>Quel calendrier prévoir en novembre 2026 ?</h2>
      <p>Le 1er novembre 2026 est un dimanche : le lancement se fait donc le <strong>lundi 2 novembre</strong>. La clôture tombe le <strong>vendredi 27</strong> ou le <strong>lundi 30 novembre</strong>, dernier jour du mois. Entre les deux, un quiz ou une discussion santé en milieu de mois rythme la campagne.</p>
      <p>Commandez jusqu'à la veille à 14h, avec une livraison dès 6h30. À partir de 50 personnes, prévoyez 48 h. Pour inviter l'équipe, des <a href="/journal/modeles-invitation-pot-petit-dejeuner-afterwork-entreprise">modèles de mails d'invitation</a> sont prêts à copier.</p>

      <h2>Quel petit-déjeuner ou goûter pour chaque temps fort ?</h2>
      <p>Le tableau associe chaque idée du guide Movember à un format livré, avec son prix HT par personne.</p>
      <table>
        <thead>
          <tr><th>Temps fort</th><th>Idée Movember</th><th>Format L'Écrin Traiteur</th><th>Prix HT / personne</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Lancement, lundi 2 novembre</strong></td><td>Rasage collectif, mot de la direction, annonce des objectifs</td><td><a href="/creations/petits-dejeuners-et-pauses">Petit-déjeuner Classique</a></td><td>8 €</td></tr>
          <tr><td><strong>Mi-novembre</strong></td><td>Quiz au bureau, discussion santé</td><td><a href="/creations/pauses-gourmandes">Pause gourmande</a></td><td>dès 6 €</td></tr>
          <tr><td><strong>Soirée quiz ou afterwork</strong></td><td>Quiz avec partenaires et fournisseurs</td><td><a href="/creations/cocktails">Cocktail de 8 pièces</a>, halal et sans porc</td><td>29,90 €</td></tr>
          <tr><td><strong>Clôture, 27 ou 30 novembre</strong></td><td>Remise des prix, meilleure et pire moustache</td><td><a href="/creations/pauses-gourmandes">Goûter</a> avec madeleines et brochettes de fruits</td><td>dès 6 €</td></tr>
          <tr><td><strong>Pour celles et ceux qui bougent</strong></td><td>60 km dans le mois, club de course</td><td>Corbeille de fruits de saison (38,90 € pour 10 à 12 fruits)</td><td>—</td></tr>
        </tbody>
      </table>
      <p>Les madeleines se personnalisent (couleurs, étiquette) sur devis : voir la <a href="/creations/personnalisation">personnalisation</a>. Pour une cause portée par un buffet, le guide <a href="/journal/octobre-rose-entreprise-paris">Octobre Rose en entreprise</a> montre une organisation comparable.</p>

      <h2>Quel budget pour un Movember au bureau ?</h2>
      <p>Pour 20 personnes, le petit-déjeuner de lancement revient à <strong>${eur(lancement20)} HT</strong> et le goûter de clôture à <strong>${eur(cloture20)} HT</strong> : ${eur(deuxTemps20)} HT pour les deux, avec deux livraisons de 29 € HT. Le tableau donne le total livraison comprise, pour une seule livraison.</p>
      <table>
        <thead>
          <tr><th>Effectif</th><th>Petit-déjeuner Classique (8 € HT / pers.)</th><th>Pause gourmande (6 € HT / pers.)</th><th>Cocktail 8 pièces (29,90 € HT / pers.)</th></tr>
        </thead>
        <tbody>
${[10, 20, 30, 50].map(n => `          <tr><td><strong>${n}</strong></td><td>${eur(total(n, CLASSIQUE), true)}</td><td>${eur(total(n, PAUSE), true)}</td><td>${eur(total(n, INVITATION), true)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>Le minimum de commande est de 50 € HT. Les quantités par personne sont détaillées dans le guide <a href="/journal/idees-petit-dejeuner-bureau-par-budget">idées de petit-déjeuner au bureau par budget</a> et dans <a href="/journal/combien-desserts-par-personne-buffet-cocktail-gouter">combien de desserts par personne</a>.</p>

      <h2>Quelles précautions prendre pour la collecte ?</h2>
      <p>Les dons se collectent sur la page de l'équipe Movember (le Mo Space), pas auprès du traiteur : la facture du repas couvre uniquement la prestation. Movember rappelle aussi que son assurance ne couvre pas l'événement organisé par une entreprise : vérifiez vos propres garanties, et si vous organisez une tombola ou un jeu d'adresse, renseignez-vous sur les règles applicables (<a href="${SRC_GUIDE}" target="_blank" rel="noopener">guide Movember, « rester dans la légalité »</a>).</p>
      <p>Pour une grande entreprise, le Business Club Movember demande de s'engager à lever au moins 10 000 € par des collectes internes (<a href="${SRC_AT_WORK}" target="_blank" rel="noopener">fr.movember.com</a>).</p>

      <h2>Comment tenir compte des régimes et de la participation de chacun ?</h2>
      <p>La participation reste libre : la moustache n'est pas obligatoire, et marcher 60 km ou organiser un quiz compte tout autant. Sur la table, prévoyez des options végétariennes, vegan et sans gluten, avec le nombre de personnes concernées à la demande de devis.</p>

      <h2>Comment commander votre petit-déjeuner ou goûter Movember ?</h2>
      <p>Demandez un <a href="/devis">devis</a> sous 24 h en indiquant l'effectif, la date et l'adresse. Commandez jusqu'à la veille à 14h, livraison dès 6h30 à Paris et en Île-de-France, facturation entreprise avec TVA.</p>
      <p><em>Tarifs L'Écrin Traiteur, octobre 2026. Calcul : prix par personne × effectif + 29 € HT par livraison, Paris et communes proches. Informations sur Movember : movember.com et fr.movember.com, consultés le 17 octobre 2026.</em></p>

      <h2>Questions fréquentes sur Movember en entreprise</h2>
${faqHtml(FAQ_MOVEMBER)}
    `,
  },
]
