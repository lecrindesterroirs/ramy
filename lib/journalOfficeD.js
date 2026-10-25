// Articles « office manager » (lot D) : fusionnés via lib/journalOffice.js
// Sources des chiffres : fiche de faits validés du 13 octobre 2026 + données du site
// (cocktails/data.js, productsData.js, boissonsData.js, pauses-gourmandes, a-partager,
// plateaux-repas, lunch-box, article boissons du 13 octobre). Tarifs HT, octobre 2026.
// Tous les budgets : prix par personne × effectif + livraison 29 € HT (une seule livraison).

// Le bloc FAQ visible est généré à partir du tableau `faq` : les deux restent identiques.
const faqBlock = (faq) => `
      <div class="faq-block">
${faq.map(({ q, a }) => `        <details>
          <summary><strong>${q}</strong></summary>
          <p>${a}</p>
        </details>`).join('\n')}
      </div>`

// Modèle de mail : encadré avec objet et lignes du corps.
const modele = (objet, lignes) => `
      <div style="background: var(--bg-secondary); border-left: 2px solid var(--accent); padding: 24px 28px; margin: 0 0 40px;">
        <p style="margin-bottom: 12px;"><strong>Objet : ${objet}</strong></p>
${lignes.map((l, i) => `        <p style="margin-bottom: ${i === lignes.length - 1 ? 0 : 12}px;">${l}</p>`).join('\n')}
      </div>`

// ─────────────────────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────────────────────

const FAQ_INVITATION = [
  { q: "Que mettre dans une invitation à un pot de départ ?", a: "Cinq informations : le motif dans l'objet, le jour avec l'heure de début et de fin, le lieu précis, la date limite de réponse avec les régimes alimentaires, et un contact. Ajoutez une ligne sur le cadeau commun si une cagnotte est ouverte, avec le nom du référent." },
  { q: "Combien de temps avant envoyer une invitation pour un pot ou un petit-déjeuner ?", a: "Trois semaines avant pour un cocktail ou un pot de fin d'année, une semaine avant pour un petit-déjeuner ou une pause. Demandez la réponse au plus tard 3 jours avant la date, relancez ce jour-là : la commande ferme se passe jusqu'à la veille 14h." },
  { q: "Comment demander les régimes alimentaires dans une invitation ?", a: "Dans le même mail, en une phrase : « merci de préciser votre régime (végétarien, vegan, sans gluten, allergie) ». Demandez la réponse par retour de mail. Le nombre de convives concernés se transmet à la commande, pas le jour de la livraison." },
  { q: "Comment rédiger une invitation à un petit-déjeuner d'entreprise ?", a: "Donnez le jour, l'heure de début, la durée de 30 à 45 minutes, le lieu précis et la date limite de réponse. Citez « petit-déjeuner livré par un traiteur » sans détailler le menu ni le prix. Demandez le régime alimentaire en une phrase." },
  { q: "Faut-il citer le traiteur ou le menu dans l'invitation ?", a: "Une mention suffit : « petit-déjeuner livré par un traiteur » ou « cocktail ». Ne détaillez ni les pièces ni les prix. Le menu intéresse l'office manager, pas les invités, et une liste longue déplace l'attention de l'information utile, le jour et l'heure." },
  { q: "Quel texte pour inviter ses collègues à un petit-déjeuner de départ ?", a: "Cinq lignes : « [Prénom] nous quitte le [date]. Pour lui dire au revoir, nous partageons un petit-déjeuner le [jour] de [heure] à [heure], en [lieu]. Merci de confirmer avant le [date limite] en précisant votre régime alimentaire. » Ajoutez le référent du cadeau. Chez L'Écrin Traiteur, le petit-déjeuner se commande jusqu'à la veille 14h, dès 8 € HT par personne en formule Classique." },
  { q: "Jusqu'à quand commander après avoir reçu les réponses ?", a: "Jusqu'à la veille 14h, pour une livraison dès 6h30 du lundi au vendredi. À partir de 50 personnes ou pour plusieurs sites, un préavis de 48 h est recommandé. Le devis est remis sous 24 h, avec un minimum de commande de 50 € HT." },
]

const FAQ_RETRAITE = [
  { q: "Quel buffet pour un pot de départ à la retraite ?", a: "Un cocktail de 12 pièces à 40,90 € HT par personne si le pot remplace le déjeuner, un cocktail de 8 pièces à 29,90 € HT en fin de journée, ou une pause gourmande dès 6 € HT l'après-midi. Ajoutez un gâteau à partager pour le toast." },
  { q: "Quel est le prix d'un pot de départ à la retraite ?", a: "Pour 40 convives, 269 € HT en pause gourmande, 1 476,70 € HT en cocktail de 8 pièces avec boissons sans alcool, 1 916,70 € HT en cocktail de 12 pièces. La livraison de 29 € HT est comprise, calculée pour une seule livraison." },
  { q: "Pot de départ : combien donner ?", a: "Il n'existe pas de montant standard. La part de chacun est le budget total divisé par le nombre de participants : 1 476,70 € ÷ 40 convives = 36,92 €, plus 2,50 € par tranche de 100 € de cadeau. Fixez le budget avant de demander une participation." },
  { q: "Quelle quantité de boissons pour un pot de départ de 40 personnes ?", a: "Prévoyez 7 bouteilles de Chardonnay 0 % (une flûte par personne), 10 litres de jus (1 litre pour 4 personnes) et 8 bouteilles d'eau de 75 cl (1 pour 5), soit 251,70 € HT. Ajoutez 4 thermos de café, 78 € HT, si vous servez le café." },
  { q: "Comment organiser un pot de départ à la retraite ?", a: "Fixez la date, le budget et la cagnotte trois semaines avant, envoyez l'invitation avec une date limite de réponse, demandez le devis, relancez à J-3 et commandez la veille avant 14h. Prévoyez 2 heures : accueil, prises de parole, toast, buffet." },
  { q: "Jusqu'à quand commander le buffet d'un pot de départ ?", a: "Jusqu'à la veille 14h, pour une livraison dès 6h30 du lundi au vendredi. À partir de 50 personnes ou pour plusieurs sites, un préavis de 48 h est recommandé. Le devis est remis sous 24 h, avec facturation entreprise et bon de commande accepté." },
]

const FAQ_BUFFET = [
  { q: "Quelle quantité par personne pour un buffet froid ?", a: "Chez L'Écrin Traiteur, nous comptons 6 pièces salées par personne si des salades accompagnent, 9 sinon, plus 2 à 3 pièces sucrées. Pour 20 personnes : 120 à 180 pièces salées et 40 à 60 sucrées. Ajoutez 10 % de marge sur l'effectif confirmé, jamais sur la liste d'invités." },
  { q: "Combien de sandwichs par personne pour un buffet ?", a: "Six mini sandwichs, clubs ou wraps par personne si le buffet comprend des salades, neuf s'ils sont le seul plat. Pour 20 personnes, 120 pièces, soit 5 plateaux Clubs Signature de 24 pièces à 64,90 € HT, 324,50 € HT en tout." },
  { q: "Quelle quantité de boissons par personne pour un buffet ?", a: "Pour un repas d'une heure : 1 tasse, 1 verre d'eau et un verre de jus pour une personne sur deux. Pour 20 personnes, 4 thermos, 5 bouteilles d'eau et 2 L de jus, soit 121 € HT hors livraison. Pour 2 heures, comptez 1 flûte par personne, 1 litre de jus pour 4 personnes et 1 bouteille d'eau pour 5." },
  { q: "Combien de salade par personne pour un buffet ?", a: "Environ 150 g de salade composée par personne en accompagnement, soit 3 kg pour 20 personnes. C'est un repère courant, à ajuster, et non une règle de L'Écrin. Répartissez entre deux ou trois salades pour que chacun trouve la sienne." },
  { q: "Quel budget pour un buffet froid de 20 personnes ?", a: "Entre 407 et 467 € HT en lunch box individuelle, 727 à 787 € HT en menu à partager, livraison de 29 € HT comprise pour une seule livraison. Ajoutez 121 € HT de boissons pour un repas d'une heure à 20 personnes." },
  { q: "Quelle quantité pour un buffet froid de 50 personnes ?", a: "Chez L'Écrin Traiteur, nous préparons pour 55 personnes, l'effectif confirmé plus 10 % : 330 pièces salées avec salades (495 sans), 8,25 kg de salade composée à 150 g par personne (repère courant) et 110 à 165 pièces sucrées. Pour un repas d'une heure, ajoutez 9 thermos, 5 L de jus et 13 bouteilles d'eau, soit 285,40 € HT hors livraison." },
  { q: "Un buffet froid peut-il être halal et sans porc ?", a: "Oui, c'est le standard : tout est halal et sans porc par défaut, sans alcool et sans supplément. Les options végétarien, vegan et sans gluten se précisent à la commande. Le plateau de charcuteries est composé de bœuf séché, bresaola et dinde fumée." },
]

const FAQ_DESSERTS = [
  { q: "Combien de gâteaux par personne ?", a: "Une part par personne quand le gâteau est le seul dessert : une grande tarte de 10 à 12 parts pour 10 personnes, 2 pour 20, 5 pour 50. Si d'autres pièces sucrées sont servies, comptez la part pour une pièce sucrée et complétez." },
  { q: "Combien de mignardises par personne ?", a: "Chez L'Écrin Traiteur, deux à trois mignardises par personne en dessert de buffet, 1,5 à 2 pour une pause de 20 à 30 minutes, 4 pour un cocktail dînatoire. Pour 20 personnes en buffet : 40 à 60 pièces, soit par exemple 24 macarons, 24 verrines et 12 tartelettes." },
  { q: "Combien de verrines dessert par personne ?", a: "Une verrine par personne si elle est le seul dessert, soit 4 boîtes de 6 pour 20 personnes (24 verrines, 67,60 € HT en panna cotta). En complément d'autres pièces sucrées, une verrine compte pour une des 2 à 3 pièces sucrées." },
  { q: "Combien de gâteaux de soirée par personne ?", a: "Pour une soirée en cocktail dînatoire, comptez 4 pièces sucrées par personne, dont une part de gâteau : 80 pièces pour 20 personnes, soit 2 grandes tartes de 10 à 12 parts et 60 mignardises. Le gâteau sert aussi de moment de toast." },
  { q: "Quel budget dessert pour 20 personnes ?", a: "126,90 € HT pour une pause de 2 pièces par personne, 200,40 € HT pour un buffet de 3 pièces, 320,20 € HT pour une soirée de 4 pièces dont une part de gâteau. La livraison de 29 € HT est comprise, pour une seule livraison." },
  { q: "Combien de mignardises sucrées pour 50 personnes ?", a: "100 à 150 mignardises en dessert de buffet, 75 à 100 pour une pause de 20 à 30 minutes, 200 pour un cocktail dînatoire et 50 pour un petit-déjeuner, à raison d'une par personne. Ajoutez 10 % de marge sur l'effectif confirmé, jamais sur la liste d'invités." },
  { q: "Les desserts conviennent-ils aux régimes alimentaires ?", a: "Toute la carte est halal et sans porc par défaut, sans alcool. Les brochettes de fruits frais sont vegan et sans gluten, le banana bread est sans gluten. Précisez les régimes à la commande ; des traces de gluten restent possibles, l'atelier manipulant de la farine." },
]

export const OFFICE_D = [
  // ───────────────────────────────────────────────────────────────────────────
  // 1. Modèles d'invitation : pot, petit-déjeuner, afterwork
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'modeles-invitation-pot-petit-dejeuner-afterwork-entreprise',
    titre: "Modèles d'invitation pour un pot, un petit-déjeuner ou un afterwork : 8 mails à copier",
    metaTitle: "Modèle d'invitation pot, petit-déjeuner, afterwork : 8 mails",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    isoModified: '2026-10-24',
    enBref: [
      "Une invitation à un pot ou à un petit-déjeuner tient en cinq informations : l'occasion, le jour et l'heure, le lieu précis, la date limite de réponse et un contact.",
      "Envoyez-la trois semaines avant un cocktail, une semaine avant un petit-déjeuner, et demandez la réponse au plus tard 3 jours avant la date.",
      "Chez L'Écrin Traiteur, le petit-déjeuner qui suit l'invitation démarre à 6,50 € HT par personne (viennoiseries et café, pour 30 personnes, hors livraison) et se commande jusqu'à la veille 14h.",
    ],
    extrait: "8 modèles d'invitation à copier : pot de départ, retraite, bienvenue, petit-déjeuner, fin d'année, afterwork, vœux, client. Objet et corps du mail.",
    img: '/hero-journal.webp',
    contenu: `
      <p>Pour inviter vos collègues à un petit-déjeuner ou à un pot de départ, un mail de cinq lignes suffit : l'occasion, le jour et l'heure, le lieu précis, la date limite de réponse et un contact. Chez L'Écrin Traiteur, le petit-déjeuner qui suit se commande jusqu'à la veille 14h, <strong>dès 8 € HT par personne</strong> en formule Classique. Voici 8 modèles de mails prêts à copier, avec objet et variables entre crochets, du pot de départ au petit-déjeuner client, plus une variante pour un petit-déjeuner de départ.</p>

      <h2>Quelles informations mettre dans une invitation à un pot ou à un petit-déjeuner ?</h2>
      <p>Mettez toujours cinq informations : le motif dans l'objet, le jour avec l'heure de début et de fin, le lieu précis, la date limite de réponse avec les régimes alimentaires, et un contact. Sans date limite, pas d'effectif fiable : la commande se passe jusqu'à la veille 14h.</p>
      <table>
        <thead>
          <tr><th>Information</th><th>Ce qu'il faut écrire</th><th>Exemple</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>L'occasion</strong></td><td>Le motif, dans l'objet du mail</td><td>Pot de départ de [Prénom]</td></tr>
          <tr><td><strong>Le moment</strong></td><td>Jour, heure de début, heure de fin</td><td>[jour] de [heure] à [heure]</td></tr>
          <tr><td><strong>Le lieu</strong></td><td>Salle, étage, bâtiment</td><td>Salle [nom], [étage]</td></tr>
          <tr><td><strong>La réponse</strong></td><td>Date limite et régime alimentaire</td><td>Avant le [date], avec votre régime</td></tr>
          <tr><td><strong>Le contact</strong></td><td>Un nom et un moyen de joindre</td><td>[Prénom], poste [numéro]</td></tr>
        </tbody>
      </table>

      <h2>Quel modèle d'invitation pour un pot de départ ?</h2>
      <p>Utilisez ce modèle quand un collègue quitte l'équipe pour un autre poste ou une autre entreprise. Il tient en cinq lignes, fixe une date limite de réponse et recueille les régimes alimentaires dans le même mail, ce qui évite un second message de relance.</p>${modele("Pot de départ de [Prénom], le [jour] à [heure]", [
        "Bonjour à tous,",
        "[Prénom] quitte [le service ou l'entreprise] le [date]. Nous nous retrouvons le [jour] de [heure] à [heure], en [lieu précis], pour le remercier et lui souhaiter une bonne continuation.",
        "Merci de confirmer votre présence avant le [date limite], en précisant un éventuel régime alimentaire (végétarien, sans gluten, allergie).",
        "Pour le cadeau commun, rapprochez-vous de [référent] avant le [date].",
        "Cordialement,<br>[Prénom, fonction]",
      ])}

      <h2>Quel texte d'invitation pour un petit-déjeuner de départ entre collègues ?</h2>
      <p>Le petit-déjeuner de départ est la variante matinale du pot de départ : 30 à 45 minutes avant la journée de travail, sans long discours. Le texte reste court, donne l'heure de fin et demande les régimes dans le même mail. Le budget et les quantités sont dans notre guide du <a href="/journal/pot-de-depart-petit-dejeuner-entreprise-budget">pot de départ en petit-déjeuner</a>.</p>${modele("Petit-déjeuner de départ de [Prénom], le [jour] à [heure]", [
        "Bonjour à tous,",
        "[Prénom] nous quitte le [date]. Pour lui dire au revoir, nous partageons un petit-déjeuner le [jour] de [heure] à [heure], en [lieu précis] : viennoiseries, jus et café livrés par un traiteur.",
        "Merci de confirmer votre présence avant le [date limite], en précisant un éventuel régime alimentaire (végétarien, vegan, sans gluten, allergie).",
        "Pour le cadeau commun, rapprochez-vous de [référent] avant le [date].",
        "Cordialement,<br>[Prénom, fonction]",
      ])}
      <p>Côté quantités, comptez 2 mini-viennoiseries par personne (3 jusqu'à 10 personnes), un verre de jus et un thermos d'1 litre de café pour 6. Chez L'Écrin Traiteur, viennoiseries et café démarrent à 6,50 € HT par personne pour 30 personnes, hors livraison. Le détail pour 20 personnes est dans <a href="/journal/petit-dejeuner-pour-20-personnes-quantites-budget">petit-déjeuner pour 20 personnes</a>, et nos formules sur la page <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a>.</p>

      <h2>Quel modèle d'invitation pour un pot de départ en retraite ?</h2>
      <p>Choisissez ce modèle pour un départ en retraite : le moment est plus long, les invités plus nombreux (anciens collègues, autres services) et les discours font partie du programme. Indiquez leur heure et ouvrez la cagnotte dans le même mail.</p>${modele("Départ en retraite de [Prénom] : rendez-vous le [jour] à [heure]", [
        "Bonjour à tous,",
        "Après [nombre] années passées [au sein de l'entreprise], [Prénom] part en retraite le [date]. Nous organisons un moment convivial le [jour] à [heure], en [lieu précis], autour d'un buffet. Les prises de parole débuteront à [heure].",
        "Merci de répondre avant le [date limite], avec votre régime alimentaire éventuel.",
        "Une cagnotte est ouverte pour le cadeau commun : [lien ou référent], clôture le [date].",
        "Cordialement,<br>[Prénom, fonction]",
      ])}

      <h2>Quel modèle d'invitation pour un pot de bienvenue ?</h2>
      <p>Ce modèle accueille une nouvelle recrue autour d'un petit-déjeuner ou d'un café. Il ne demande de réponse que pour les régimes alimentaires : l'objectif est que toute l'équipe passe dire bonjour, sans engagement ni liste d'émargement, pendant la durée du petit-déjeuner.</p>${modele("Bienvenue à [Prénom], qui rejoint [l'équipe] le [jour]", [
        "Bonjour à tous,",
        "[Prénom] rejoint [l'équipe] le [date] en tant que [fonction]. Venez lui souhaiter la bienvenue le [jour] à [heure], en [lieu précis] : un petit-déjeuner livré par un traiteur nous attend, de [heure] à [heure].",
        "Aucune réponse n'est nécessaire. Si vous avez un régime alimentaire particulier, écrivez-moi avant le [date].",
        "À très vite,<br>[Prénom]",
      ])}

      <h2>Quel exemple d'invitation à un petit-déjeuner d'entreprise ?</h2>
      <p>Utilisez ce modèle pour un petit-déjeuner d'équipe ou une journée de rentrée. Annoncez l'heure de début et la durée, 30 à 45 minutes en général, pour que chacun cale son agenda, et nommez le petit-déjeuner livré par un traiteur sans détailler le menu.</p>${modele("Petit-déjeuner d'équipe le [jour] à [heure], en [lieu]", [
        "Bonjour à tous,",
        "Nous nous retrouvons le [jour] à [heure], en [lieu précis], pour un petit-déjeuner d'équipe livré par un traiteur : viennoiseries, fruits, jus et café. Durée prévue : [30 à 45 minutes].",
        "Merci de répondre avant le [date limite] en indiquant votre régime (végétarien, vegan, sans gluten) pour que chacun trouve son compte.",
        "[Prénom]",
      ])}

      <h2>Quel modèle d'invitation pour un pot de fin d'année en entreprise ?</h2>
      <p>Ce modèle sert un pot de fin d'année ouvert à toute l'entreprise. Envoyez-le trois semaines avant, avec une date limite de réponse : le cocktail se commande sur un effectif confirmé. Indiquez l'heure de la prise de parole et l'heure de fin.</p>${modele("Pot de fin d'année le [jour] à [heure] : merci de répondre avant le [date]", [
        "Bonjour à tous,",
        "Pour clore [l'année], nous nous retrouvons le [jour] de [heure] à [heure], en [lieu précis], autour d'un cocktail. [Prénom du dirigeant] prendra la parole à [heure].",
        "Merci de confirmer votre présence avant le [date limite] et d'indiquer votre régime alimentaire. La tenue est [libre].",
        "Au plaisir de vous y retrouver,<br>[Prénom, fonction]",
      ])}

      <h2>Quel modèle d'invitation pour un afterwork ?</h2>
      <p>Un afterwork se joue en fin de journée : l'heure de début et surtout l'heure de fin doivent apparaître dès la première ligne. Ce modèle est volontairement court et informel, à adapter au ton de votre équipe, tutoiement compris, sans y ajouter de programme. Pour ce qui est servi, voir nos formules <a href="/creations/cocktails">cocktails et buffets</a>.</p>${modele("Afterwork d'équipe le [jour] dès [heure], en [lieu]", [
        "Bonjour à tous,",
        "Rendez-vous le [jour] à partir de [heure], jusqu'à [heure], en [lieu précis], pour un afterwork : bouchées salées et sucrées, boissons sans alcool.",
        "Merci de répondre avant le [date limite], avec votre régime alimentaire éventuel.",
        "À [jour],<br>[Prénom]",
      ])}

      <h2>Quel modèle d'invitation pour la cérémonie des vœux de janvier ?</h2>
      <p>Pour les vœux de janvier, l'invitation doit donner l'heure du discours et la durée de l'ensemble : 1 h 30 en général, avec accueil, discours, toast et buffet. Prévoyez une ligne pour les collègues à distance, avec le lien de connexion, si l'entreprise compte plusieurs sites.</p>${modele("Cérémonie des vœux : [jour] à [heure], en [lieu]", [
        "Bonjour à tous,",
        "[Prénom du dirigeant] présentera les vœux de [l'entreprise] le [jour] à [heure], en [lieu précis]. L'accueil débute à [heure] ; le discours est suivi d'un toast et d'un buffet jusqu'à [heure].",
        "Merci de confirmer votre présence avant le [date limite], avec votre régime alimentaire éventuel. [Pour les collègues à distance : lien de connexion.]",
        "Cordialement,<br>[Prénom, fonction]",
      ])}

      <h2>Quel modèle d'invitation d'un client à un petit-déjeuner ?</h2>
      <p>Cette invitation s'adresse à des clients ou à des partenaires : vouvoiement, programme en deux lignes et petit-déjeuner livré par un traiteur, annoncé sans détail. Demandez une confirmation par retour de mail, avec le régime alimentaire, pour commander sur un effectif fiable.</p>${modele("Invitation : petit-déjeuner [thème] le [jour] à [heure]", [
        "Bonjour [Prénom],",
        "Nous avons le plaisir de vous inviter à un petit-déjeuner le [jour] à [heure], à [adresse complète], autour de [thème]. Accueil à [heure], intervention de [nom] à [heure], échanges jusqu'à [heure].",
        "Un petit-déjeuner livré par un traiteur vous sera servi. Merci de confirmer votre venue avant le [date limite] en répondant à ce mail, en précisant un éventuel régime alimentaire.",
        "Cordialement,<br>[Prénom, fonction, entreprise, téléphone]",
      ])}

      <h2>Quel format de traiteur derrière chaque invitation ?</h2>
      <p>Chaque invitation correspond à un format, de 6 € HT par personne en pause gourmande à 40,90 € HT en cocktail de 12 pièces. La livraison est de 29 € HT par livraison à Paris et dans les communes proches ; le petit-déjeuner complet est sur devis.</p>
      <table>
        <thead>
          <tr><th>Invitation</th><th>Format adapté</th><th>Prix HT par personne</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Pot de départ, pot de bienvenue</strong></td><td><a href="/creations/pauses-gourmandes">Pause gourmande</a></td><td>dès 6 €</td></tr>
          <tr><td><strong>Petit-déjeuner d'équipe</strong></td><td>Petit-déjeuner Classique</td><td>dès 8 €</td></tr>
          <tr><td><strong>Petit-déjeuner client</strong></td><td>Petit-déjeuner complet</td><td>sur devis</td></tr>
          <tr><td><strong>Afterwork, pot de fin d'année</strong></td><td><a href="/occasions/afterwork-entreprise">Cocktail de 8 pièces</a></td><td>29,90 €</td></tr>
          <tr><td><strong>Retraite, vœux</strong></td><td>Cocktail de 12 pièces</td><td>40,90 €</td></tr>
        </tbody>
      </table>
      <p>Pour chiffrer le pot, voir <a href="/journal/organiser-pot-de-depart-entreprise-budget-quantites">organiser un pot de départ en entreprise</a> et le <a href="/journal/pot-de-depart-retraite-buffet-budget-cagnotte">pot de départ à la retraite</a>.</p>

      <h2>Quelles erreurs éviter dans une invitation ?</h2>
      <ul>
        <li><strong>Un objet vague</strong> : « Pot vendredi » ne dit ni le motif ni l'heure ; écrivez l'occasion, le jour et l'heure.</li>
        <li><strong>Aucune heure de fin</strong> : chacun ignore s'il peut revenir à son poste ensuite.</li>
                <li><strong>Pas de date limite de réponse</strong> : la commande se fait sur l'effectif confirmé, pas sur la liste d'invités.</li>
                <li><strong>Aucune relance</strong> : relancez à J-3, puis commandez la veille avant 14h.</li>
      </ul>
      <p>La check-list complète est dans <a href="/journal/checklist-office-manager-commander-traiteur">la check-list de l'office manager pour commander un traiteur</a>.</p>

      <h2>Questions fréquentes sur les modèles d'invitation</h2>${faqBlock(FAQ_INVITATION)}

      <h2>Comment demander un devis après vos invitations ?</h2>
      <p>Indiquez la date, l'effectif confirmé, l'adresse et les régimes recensés : le devis est remis sous 24 h, avec facturation entreprise, TVA et bon de commande accepté, et la livraison est possible dès 6h30 du lundi au vendredi. <a href="/devis">Demandez votre devis</a>. Tarifs L'Écrin Traiteur, octobre 2026.</p>
    `,
    relatedProducts: ['viennoiseries-melangees', 'brochettes-fruits', 'macarons'],
    faq: FAQ_INVITATION,
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 2. Pot de départ à la retraite : buffet, budget, cagnotte
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'pot-de-depart-retraite-buffet-budget-cagnotte',
    titre: "Pot de départ à la retraite : quel buffet, quel budget et combien par collègue",
    metaTitle: "Pot de départ retraite : buffet, budget et cagnotte",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    isoModified: '2026-10-13',
    extrait: "Pot de départ à la retraite : quel buffet, budget de 10 à 60 personnes, quantités de boissons et part de cagnotte par collègue, calculée.",
    img: '/hero-cocktail.webp',
    contenu: `
      <p>Un pot de départ à la retraite pour 40 convives revient à 1 476,70 € HT en cocktail de 8 pièces, boissons sans alcool et livraison comprises, soit 36,92 € HT par convive, et à 269 € HT en pause gourmande. Voici le buffet, les quantités de boissons, le déroulé et la part de chacun dans la cagnotte, de 10 à 60 personnes. Pour un départ ordinaire, voir <a href="/journal/organiser-pot-de-depart-entreprise-budget-quantites">organiser un pot de départ en entreprise</a>.</p>

      <h2>Quel buffet choisir pour un pot de départ à la retraite ?</h2>
      <p>Choisissez le cocktail de 12 pièces à 40,90 € HT par personne si le pot remplace le déjeuner, celui de 8 pièces à 29,90 € HT en fin de journée, ou la pause gourmande dès 6 € HT l'après-midi. Une retraite réunit plus de monde et dure plus longtemps : prévoyez 2 heures.</p>
      <ul>
        <li><strong>Pause gourmande, dès 6 € HT</strong> : l'après-midi, 20 à 30 minutes, pâtisserie et boisson comprises (<a href="/creations/pauses-gourmandes">pauses gourmandes</a>).</li>
        <li><strong>Cocktail L'Invitation, 8 pièces, 29,90 € HT</strong> : fin de journée, 6 pièces salées et 2 sucrées (<a href="/creations/cocktails">cocktails d'entreprise</a>).</li>
        <li><strong>Cocktail La Réception, 12 pièces, 40,90 € HT</strong> : midi ou début de soirée, 9 pièces salées et 3 sucrées.</li>
        <li><strong>Menu à partager, de 34,90 à 37,90 € HT</strong> : déjeuner posé au centre de la table, Le Jardin étant 100 % végétarien (menus à partager).</li>
        <li><strong>Gâteau à partager, de 44,90 à 69,90 € HT</strong> : de 6 à 12 parts, à ajouter ou à poser seul.</li>
      </ul>

      <h2>Quel budget prévoir pour un pot de départ à la retraite ?</h2>
      <p>Comptez de 37 à 40 € HT par convive en cocktail de 8 pièces avec boissons, et de 48 à 51 € HT en cocktail de 12 pièces. Le tableau donne le total de 10 à 60 convives, retraité compris, livraison de 29 € HT incluse, pour une seule livraison.</p>
      <table>
        <thead>
          <tr><th>Convives</th><th>Pause gourmande</th><th>Cocktail 8 pièces, boissons comprises</th><th>Cocktail 12 pièces, boissons comprises</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>10</strong></td><td>89,00 €</td><td>399,90 €</td><td>509,90 €</td></tr>
          <tr><td><strong>20</strong></td><td>149,00 €</td><td>761,30 €</td><td>981,30 €</td></tr>
          <tr><td><strong>40</strong></td><td>269,00 €</td><td>1 476,70 €</td><td>1 916,70 €</td></tr>
          <tr><td><strong>60</strong></td><td>389,00 €</td><td>2 192,10 €</td><td>2 852,10 €</td></tr>
        </tbody>
      </table>
      <p>Calcul pour 40 convives en 8 pièces : 40 × 29,90 € = 1 196 € ; 7 bouteilles de Chardonnay 0 % × 16,90 € = 118,30 € ; 10 L de jus × 9,50 € = 95 € ; 8 bouteilles d'eau × 4,80 € = 38,40 € ; livraison 29 € ; total 1 476,70 €. Le guide du pot de départ ordinaire applique la même règle de boissons : 761,30 € HT à 20 personnes. Commandez sur l'effectif confirmé plus 10 %.</p>

      <h2>Quelle quantité de boissons prévoir pour un pot de départ à la retraite ?</h2>
      <p>Pour 40 convives, prévoyez 7 bouteilles de Chardonnay 0 %, 10 litres de jus et 8 bouteilles d'eau de 75 cl, soit 251,70 € HT hors livraison. La règle : 1 flûte par personne, 1 litre de jus pour 4 personnes et 1 bouteille d'eau de 75 cl pour 5.</p>
      <table>
        <thead>
          <tr><th>Convives</th><th>Chardonnay 0 % (75 cl)</th><th>Jus (1 L)</th><th>Eau (75 cl)</th><th>Total HT hors livraison</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>10</strong></td><td>2</td><td>3</td><td>2</td><td>71,90 €</td></tr>
          <tr><td><strong>20</strong></td><td>4</td><td>5</td><td>4</td><td>134,30 €</td></tr>
          <tr><td><strong>40</strong></td><td>7</td><td>10</td><td>8</td><td>251,70 €</td></tr>
          <tr><td><strong>60</strong></td><td>10</td><td>15</td><td>12</td><td>369,10 €</td></tr>
        </tbody>
      </table>
      <p>Une bouteille de 75 cl sert 6 flûtes, un litre de jus 4 personnes et une bouteille d'eau 5. Pour un café en fin de buffet, comptez 1 thermos de 1 L pour 12 personnes : 4 thermos pour 40 convives, 78 € HT. Le détail est dans le guide des <a href="/journal/combien-boissons-par-personne-reunion-seminaire-cocktail">boissons par personne</a>.</p>

      <h2>Pot de départ : combien donner, et comment partager la cagnotte ?</h2>
      <p>Il n'existe pas de montant standard : la part de chacun est le budget divisé par le nombre de participants. Pour un buffet de 1 476,70 € HT et 40 convives, la part est de 36,92 € HT, plus 2,50 € par tranche de 100 € de cadeau.</p>
      <table>
        <thead>
          <tr><th>Participants</th><th>Pause gourmande, par personne</th><th>Cocktail 8 pièces, par personne</th><th>Cocktail 12 pièces, par personne</th><th>Cadeau, par tranche de 100 €</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>10</strong></td><td>8,90 €</td><td>39,99 €</td><td>50,99 €</td><td>10,00 €</td></tr>
          <tr><td><strong>20</strong></td><td>7,45 €</td><td>38,07 €</td><td>49,07 €</td><td>5,00 €</td></tr>
          <tr><td><strong>40</strong></td><td>6,73 €</td><td>36,92 €</td><td>47,92 €</td><td>2,50 €</td></tr>
          <tr><td><strong>60</strong></td><td>6,48 €</td><td>36,54 €</td><td>47,54 €</td><td>1,67 €</td></tr>
        </tbody>
      </table>
      <p>Si le retraité ne cotise pas, divisez par un participant de moins : 1 476,70 ÷ 39 = 37,86 €. Le buffet et le cadeau peuvent aussi être financés séparément, l'un par l'entreprise, l'autre par la cagnotte : c'est une décision interne, le calcul reste le même. Pour viser un montant, faites le calcul inverse : 40 participants × 5 € = 200 €.</p>

      <h2>Comment organiser un pot de départ à la retraite ?</h2>
      <p>Organisez-le en six étapes sur trois semaines : fixer la date et le budget, inviter, demander le devis, relancer, commander la veille avant 14h, tenir un déroulé de 2 heures. L'office manager pilote ; le manager ou la direction prononce le discours.</p>
      <ol>
        <li><strong>J-21</strong> : date, lieu, budget, ouverture de la cagnotte avec un référent et une date de clôture.</li>
        <li><strong>J-14</strong> : invitation avec date limite de réponse et régimes, modèle dans les <a href="/journal/modeles-invitation-pot-petit-dejeuner-afterwork-entreprise">8 modèles d'invitation</a>.</li>
        <li><strong>J-10</strong> : demande de devis, remis sous 24 h.</li>
        <li><strong>J-3</strong> : relance des réponses, recensement des régimes, clôture de la cagnotte, achat du cadeau.</li>
        <li><strong>J-1 avant 14h</strong> : commande ferme sur l'effectif confirmé plus 10 %. À partir de 50 personnes ou pour plusieurs sites, préavis de 48 h recommandé.</li>
        <li><strong>Jour J</strong> : livraison dès 6h30 ; elle n'inclut pas l'installation, désignez une personne.</li>
      </ol>

      <h2>Quel déroulé pour un pot de départ à la retraite de 2 heures ?</h2>
      <p>Prévoyez 20 minutes d'accueil avec les boissons, 20 minutes de prises de parole (manager, un ou deux collègues, réponse du retraité) avec remise du cadeau et toast, puis le buffet et les échanges, et le dessert avec le café dans la dernière demi-heure.</p>

      <h2>Quelles idées pour un pot de départ à la retraite ?</h2>
      <ul>
        <li><strong>Un gâteau à partager</strong> au moment du toast : grande tarte au citron meringuée à 59,90 € HT ou grand gâteau praliné noisette à 69,90 € HT, de 10 à 12 parts.</li>
        <li><strong>Un coffret à emporter</strong> pour le retraité : 24 macarons d'exception à 64 € HT, ou 20 madeleines à 49 € HT.</li>
        <li><strong>Un toast sans alcool</strong> : une flûte de Chardonnay 0 % pour tous, sans distinction.</li>
        <li><strong>Un livre d'or ou une vidéo</strong> de messages, préparés dans les deux semaines avant le pot.</li>
        <li><strong>Une animation</strong> pour un grand départ : bar à mocktails, 100 % sans alcool, sur devis, plancher de 600 € HT.</li>
      </ul>

      <h2>Quelles erreurs éviter pour un pot de départ à la retraite ?</h2>
      <ul>
        <li><strong>Ouvrir la cagnotte sans budget cible</strong> : calculez d'abord le total, puis la part de chacun.</li>
        <li><strong>Commander sur la liste d'invités</strong> : les anciens collègues répondent tard, relancez à J-3.</li>
        <li><strong>Oublier la date de clôture</strong> de la cagnotte : le cadeau doit être acheté avant le pot.</li>
        <li><strong>Laisser le buffet ouvert pendant les discours</strong> : accueillez d'abord, servez ensuite.</li>
        <li><strong>Prévoir une mise en place sans responsable</strong> : la livraison ne comprend ni installation ni reprise.</li>
      </ul>

      <h2>Questions fréquentes sur le pot de départ à la retraite</h2>${faqBlock(FAQ_RETRAITE)}

      <h2>Comment demander un devis pour un pot de départ à la retraite ?</h2>
      <p>Indiquez la date, l'effectif, l'adresse et les régimes recensés : le devis est remis sous 24 h, avec facturation entreprise, TVA et bon de commande accepté, et la livraison est possible dès 6h30 du lundi au vendredi. <a href="/devis">Demandez votre devis</a>. Tarifs L'Écrin Traiteur, octobre 2026.</p>
    `,
    relatedProducts: ['tarte-citron-meringuee-grande', 'macarons', 'madeleines-20'],
    faq: FAQ_RETRAITE,
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 3. Buffet froid : quantités par personne
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'buffet-froid-entreprise-quantites-par-personne',
    titre: "Buffet froid d'entreprise : quantités par personne (sandwichs, salades, desserts, boissons)",
    metaTitle: "Buffet froid d'entreprise : quantités par personne",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    isoModified: '2026-10-24',
    enBref: [
      "Pour un buffet froid d'entreprise, L'Écrin Traiteur compte par personne 6 pièces salées avec des salades (9 sans), environ 150 g de salade composée et 2 à 3 pièces sucrées.",
      "Pour 50 personnes : 300 pièces salées avec salades, 7,5 kg de salade et 100 à 150 pièces sucrées, plus 10 % de marge sur l'effectif confirmé.",
      "Chez L'Écrin Traiteur, un buffet froid de 20 personnes revient de 407 € HT en lunch box à 787 € HT en menu à partager, livraison de 29 € HT comprise.",
    ],
    extrait: "Buffet froid d'entreprise : quantité par personne de sandwichs, salades, desserts et boissons, pour 10, 20 et 50 personnes, avec le budget.",
    img: '/hero-a-partager.webp',
    contenu: `
      <p>Pour un buffet froid de 50 personnes, comptez <strong>300 pièces salées</strong> avec des salades (450 sans), environ <strong>7,5 kg de salade composée</strong> (150 g par personne, repère courant) et 100 à 150 pièces sucrées ; chez L'Écrin Traiteur, le même buffet pour 20 personnes revient de 407 à 787 € HT selon le format, livraison comprise. Pour un buffet froid d'entreprise, comptez par personne 6 pièces salées avec des salades à côté, 9 sans salade, 2 à 3 pièces sucrées, une boisson chaude, un verre d'eau et un verre de jus pour une personne sur deux : pour 20 personnes, 120 à 180 pièces salées, 40 à 60 pièces sucrées et 121 € HT de boissons. Voici les quantités pour 10, 20 et 50 personnes, avec les prix du catalogue.</p>

      <h2>Quelle quantité par personne pour un buffet froid ?</h2>
      <p>Comptez 6 pièces salées par personne si le buffet comprend des salades, 9 s'il n'y en a pas, plus 2 à 3 pièces sucrées. Ces repères reprennent les pièces des cocktails : 6 salées pour la formule de 8 pièces, 9 pour celle de 12. Ajoutez 10 % de marge sur l'effectif confirmé.</p>
      <table>
        <thead>
          <tr><th>Poste</th><th>Par personne</th><th>10 personnes</th><th>20 personnes</th><th>50 personnes</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Pièces salées, avec salades</strong></td><td>6</td><td>60</td><td>120</td><td>300</td></tr>
          <tr><td><strong>Pièces salées, sans salade</strong></td><td>9</td><td>90</td><td>180</td><td>450</td></tr>
          <tr><td><strong>Salade composée</strong></td><td>150 g, repère courant</td><td>1,5 kg</td><td>3 kg</td><td>7,5 kg</td></tr>
          <tr><td><strong>Pièces sucrées</strong></td><td>2 à 3</td><td>20 à 30</td><td>40 à 60</td><td>100 à 150</td></tr>
        </tbody>
      </table>

      <h2>Combien de sandwichs par personne pour un buffet ?</h2>
      <p>Comptez 6 mini sandwichs, clubs ou wraps par personne si des salades accompagnent, 9 s'ils sont le seul plat : 120 pièces pour 20 personnes. Au catalogue, 5 plateaux Clubs Signature de 24 pièces à 64,90 € HT couvrent ces 120 pièces pour 324,50 € HT.</p>
      <table>
        <thead>
          <tr><th>Plateau</th><th>Pièces</th><th>Prix HT</th><th>Prix par pièce</th><th>120 pièces pour 20 personnes</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Clubs Signature</strong>, saumon fumé et blanc de poulet</td><td>24</td><td>64,90 €</td><td>2,70 €</td><td>5 plateaux, 324,50 €</td></tr>
          <tr><td><strong>Pains briochés assortis</strong>, thon et saumon fumé</td><td>40</td><td>124,90 €</td><td>3,12 €</td><td>3 plateaux, 374,70 €</td></tr>
        </tbody>
      </table>
      <p>Les mini baguettes, wraps et mini burgers des <a href="/creations/plateaux-aperitifs">plateaux apéritifs</a> se chiffrent sur devis. Les repères en pièces viennent des cocktails : 6 salées pour la formule de 8 pièces, 9 pour celle de 12.</p>

      <h2>Combien de grammes de salade et d'accompagnements par personne ?</h2>
      <p>Comptez environ 150 g de salade composée par personne en accompagnement, soit 3 kg pour 20 personnes : c'est un repère courant, à ajuster, et non une règle de L'Écrin. Répartissez entre deux ou trois salades, dont une végétarienne, pour que chacun trouve la sienne.</p>
      <p>Pour un buffet clé en main, un <a href="/creations/a-partager">menu à partager</a> est calibré pour 8 à 12 personnes : 6 recettes salées et 2 sucrées, dressées. Le plateau de charcuteries est halal et sans porc, avec bœuf séché, bresaola et dinde fumée ; les fromages affinés se chiffrent sur devis.</p>

      <h2>Combien de desserts par personne pour un buffet froid ?</h2>
      <p>Comptez 2 à 3 pièces sucrées par personne : 40 à 60 pièces pour 20 personnes, soit par exemple 24 macarons, 24 verrines et 12 tartelettes. Les produits et les prix sont détaillés dans <a href="/journal/combien-desserts-par-personne-buffet-cocktail-gouter">combien de desserts par personne</a>.</p>

      <h2>Quelle quantité de boissons par personne pour un buffet ?</h2>
      <p>Pour un repas d'une heure, comptez 1 tasse, 1 verre d'eau et un verre de jus pour une personne sur deux : pour 20 personnes, 4 thermos, 5 bouteilles d'eau et 2 L de jus, soit 121 € HT. Pour une soirée de 2 heures, comptez 1 flûte par personne, 1 litre de jus pour 4 personnes et 1 bouteille d'eau de 75 cl pour 5.</p>
      <table>
        <thead>
          <tr><th>Effectif</th><th>Repas d'1 h</th><th>Soirée de 2 h</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>10</strong></td><td>2 thermos, 1 L de jus, 3 eaux : 62,90 €</td><td>2 Chardonnay 0 %, 3 L de jus, 2 eaux : 71,90 €</td></tr>
          <tr><td><strong>20</strong></td><td>4 thermos, 2 L de jus, 5 eaux : 121,00 €</td><td>4 Chardonnay 0 %, 5 L de jus, 4 eaux : 134,30 €</td></tr>
          <tr><td><strong>50</strong></td><td>9 thermos, 5 L de jus, 13 eaux : 285,40 €</td><td>9 Chardonnay 0 %, 13 L de jus, 10 eaux : 323,60 €</td></tr>
        </tbody>
      </table>
      <p>Un thermos de 1 L sert 6 tasses, un litre de jus 5 verres, une bouteille d'eau de 75 cl 4 verres. Les totaux sont hors livraison. La carte est sur la page <a href="/creations/boissons">boissons</a>.</p>

      <h2>Combien coûte un buffet froid pour 20 personnes ?</h2>
      <p>Un buffet froid de 20 personnes revient de 407 à 467 € HT en lunch box individuelle, de 607 à 647 € HT en plateau repas et de 727 à 787 € HT en menu à partager, livraison de 29 € HT comprise. Les boissons s'ajoutent, 121 € HT pour un repas d'une heure. Pour un buffet composé plutôt qu'assemblé, voir nos formules <a href="/creations/cocktails">cocktails et buffets</a>.</p>
      <table>
        <thead>
          <tr><th>Format</th><th>Prix HT par personne</th><th>Calcul pour 20 personnes</th><th>Total HT</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Lunch box individuelle</strong></td><td>18,90 à 21,90 €</td><td>20 × 18,90 à 21,90 € + 29 €</td><td>407 à 467 €</td></tr>
          <tr><td><strong><a href="/creations/plateaux-repas">Plateau repas</a></strong></td><td>28,90 à 30,90 €</td><td>20 × 28,90 à 30,90 € + 29 €</td><td>607 à 647 €</td></tr>
          <tr><td><strong>Menu à partager</strong></td><td>34,90 à 37,90 €</td><td>20 × 34,90 à 37,90 € + 29 €</td><td>727 à 787 €</td></tr>
        </tbody>
      </table>
      <p>L'hypothèse est une seule livraison à 29 € HT. Les boissons et les éventuels desserts supplémentaires s'ajoutent à ces totaux.</p>

      <h2>Quelle quantité pour un buffet froid de 50 personnes ?</h2>
      <p>Pour 50 convives confirmés, commandez pour 55 : 330 pièces salées avec salades (6 × 55), 8,25 kg de salade composée (150 g × 55, repère courant), 110 à 165 pièces sucrées (2 à 3 × 55), puis 9 thermos, 5 L de jus et 13 bouteilles d'eau, soit 285,40 € HT de boissons hors livraison. En plateaux Clubs Signature, 330 pièces représentent 14 plateaux de 24 pièces, soit 908,60 € HT.</p>
      <table>
        <thead>
          <tr><th>Poste</th><th>Par personne</th><th>50 confirmés, commande pour 55</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Pièces salées, avec salades</strong></td><td>6</td><td>330</td></tr>
          <tr><td><strong>Pièces salées, sans salade</strong></td><td>9</td><td>495</td></tr>
          <tr><td><strong>Salade composée</strong></td><td>150 g, repère courant</td><td>8,25 kg</td></tr>
          <tr><td><strong>Pièces sucrées</strong></td><td>2 à 3</td><td>110 à 165</td></tr>
        </tbody>
      </table>
      <p>À partir de 50 personnes, commandez 48 h à l'avance. Pour les autres postes d'un événement, voir <a href="/journal/combien-prevoir-par-personne-traiteur-entreprise">combien prévoir par personne</a> ; pour choisir entre buffet et cocktail, <a href="/journal/cocktail-aperitif-dinatoire-buffet-difference-que-choisir">cocktail, apéritif dînatoire ou buffet</a> ; et pour l'après, <a href="/journal/restes-buffet-entreprise-que-faire">que faire des restes d'un buffet</a>.</p>

      <h2>Faut-il prévoir de la vaisselle et une installation ?</h2>
      <p>Les gobelets, la vaisselle et les couverts jetables sont inclus sans supplément. La vaisselle réutilisable se facture sur devis, et la livraison avec reprise du matériel coûte 39 € HT à Paris, dans le 92 et le 94, et le prix de la zone plus 19 € HT ailleurs. La livraison n'inclut pas l'installation : désignez une personne pour dresser le buffet avant l'arrivée des convives.</p>

      <h2>Quelles erreurs éviter sur les quantités d'un buffet froid ?</h2>
      <ul>
        <li><strong>Compter sur la liste d'invités</strong> : calculez sur l'effectif confirmé, plus 10 %.</li>
        <li><strong>Sous-estimer le sucré</strong> : 2 à 3 pièces par personne, pas un dessert pour deux.</li>
        <li><strong>Oublier les boissons chaudes</strong> : un thermos sert 6 tasses, pas 20.</li>
        <li><strong>Prévoir 6 pièces sans salade</strong> : sans accompagnement, passez à 9.</li>
        <li><strong>Négliger les régimes</strong> : végétarien, vegan et sans gluten se précisent à la commande.</li>
      </ul>

      <h2>Questions fréquentes sur les quantités d'un buffet froid</h2>${faqBlock(FAQ_BUFFET)}

      <h2>Comment demander un devis pour votre buffet froid ?</h2>
      <p>Indiquez la date, l'effectif, l'adresse et les régimes recensés : le devis est remis sous 24 h, avec facturation entreprise, TVA et bon de commande accepté, et la livraison est possible dès 6h30 du lundi au vendredi. <a href="/devis">Demandez votre devis</a>. Tarifs L'Écrin Traiteur, octobre 2026.</p>
    `,
    relatedProducts: ['plateau-clubs-signature', 'navettes-salees', 'brochettes-fruits'],
    faq: FAQ_BUFFET,
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 4. Combien de desserts par personne
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'combien-desserts-par-personne-buffet-cocktail-gouter',
    titre: "Combien de desserts par personne : mignardises, verrines, gâteaux ?",
    metaTitle: "Combien de desserts par personne : mignardises, gâteaux",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    isoModified: '2026-10-24',
    enBref: [
      "Chez L'Écrin Traiteur, nous comptons 2 à 3 mignardises sucrées par personne pour un buffet, 1,5 à 2 pour une pause courte et 4 pour un cocktail dînatoire.",
      "Pour 20 personnes en buffet : 40 à 60 pièces, par exemple 24 macarons, 24 verrines et 12 tartelettes, soit 200,40 € HT livraison comprise chez L'Écrin Traiteur.",
      "Un grand gâteau de 10 à 12 parts sert 10 personnes quand il est le seul dessert : 2 gâteaux pour 20 personnes, 5 pour 50.",
    ],
    extrait: "Combien de gâteaux, mignardises et verrines par personne : 1,5 à 4 pièces selon le format, tableau pour 10, 20 et 50 personnes et budget.",
    img: '/plateau-douceurs.webp',
    contenu: `
      <p>Comptez <strong>2 à 3 mignardises sucrées par personne</strong> pour un buffet, 1,5 à 2 pour une pause de 20 à 30 minutes et 4 pour un cocktail dînatoire : pour 20 personnes, 40 à 60 mignardises, ou 2 grands gâteaux de 10 à 12 parts. Chez L'Écrin Traiteur, une mignardise coûte de 2,45 à 3,32 € HT au catalogue, et nos formules cocktail en comptent 2, 3 et 4 pour 8, 12 et 16 pièces. Voici les quantités pour 10, 20 et 50 personnes, avec les produits et les prix du catalogue.</p>

      <h2>Combien de desserts par personne selon le format ?</h2>
      <p>Le nombre de pièces sucrées par personne monte avec la durée et le repas remplacé : 1,5 à 2 en pause, 2 à 3 en buffet, 4 en cocktail dînatoire. Ajoutez 10 % de marge sur l'effectif confirmé. Le tableau donne le total pour 10, 20 et 50 personnes. Le sucré est déjà compris dans nos formules <a href="/creations/cocktails">cocktails et buffets</a>, à raison de 2 pièces sucrées sur 8.</p>
      <table>
        <thead>
          <tr><th>Format</th><th>Par personne</th><th>10 personnes</th><th>20 personnes</th><th>50 personnes</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Pause ou goûter de 20 à 30 minutes</strong></td><td>1,5 à 2</td><td>15 à 20</td><td>30 à 40</td><td>75 à 100</td></tr>
          <tr><td><strong>Après-midi de séminaire, deux pauses</strong></td><td>3</td><td>30</td><td>60</td><td>150</td></tr>
          <tr><td><strong>Cocktail apéritif, 8 pièces</strong></td><td>2</td><td>20</td><td>40</td><td>100</td></tr>
          <tr><td><strong>Buffet froid</strong></td><td>2 à 3</td><td>20 à 30</td><td>40 à 60</td><td>100 à 150</td></tr>
          <tr><td><strong>Cocktail déjeunatoire, 12 pièces</strong></td><td>3</td><td>30</td><td>60</td><td>150</td></tr>
          <tr><td><strong>Cocktail dînatoire, 16 pièces</strong></td><td>4</td><td>40</td><td>80</td><td>200</td></tr>
        </tbody>
      </table>
      <p>Les repères des cocktails viennent des formules de 8, 12 et 16 pièces, qui comptent 2, 3 et 4 pièces sucrées ; ceux d'un buffet sont dans <a href="/journal/buffet-froid-entreprise-quantites-par-personne">les quantités d'un buffet froid</a>.</p>

      <h2>Combien de mignardises sucrées par personne ?</h2>
      <p>Comptez 2 à 3 mignardises par personne en dessert de buffet, 1,5 à 2 en pause, 1 à 2 macarons quand ils accompagnent d'autres produits, 2 à 3 s'ils sont la pièce centrale. Le premier tableau donne le total selon le moment, le second le prix de chaque pièce au catalogue pour calculer votre commande.</p>
      <table>
        <thead>
          <tr><th>Moment</th><th>Mignardises par personne</th><th>20 personnes</th><th>50 personnes</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Petit-déjeuner</strong></td><td>1</td><td>20</td><td>50</td></tr>
          <tr><td><strong>Pause de 20 à 30 minutes</strong></td><td>1,5 à 2</td><td>30 à 40</td><td>75 à 100</td></tr>
          <tr><td><strong>Dessert de buffet</strong></td><td>2 à 3</td><td>40 à 60</td><td>100 à 150</td></tr>
          <tr><td><strong>Cocktail dînatoire</strong></td><td>4</td><td>80</td><td>200</td></tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr><th>Produit</th><th>Conditionnement</th><th>Prix HT</th><th>Prix par pièce</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Macarons d'exception</strong></td><td>Coffret de 24, pour 8 à 12 personnes</td><td>64,00 €</td><td>2,67 €</td></tr>
          <tr><td><strong>Madeleines</strong></td><td>Coffret de 20, pour 8 à 12 personnes</td><td>49,00 €</td><td>2,45 €</td></tr>
          <tr><td><strong>Cookies signature</strong></td><td>6 pièces</td><td>17,90 €</td><td>2,98 €</td></tr>
          <tr><td><strong>Tartelette citron ou praliné</strong></td><td>6 pièces</td><td>19,90 €</td><td>3,32 €</td></tr>
          <tr><td><strong>Brochettes de fruits frais</strong></td><td>20 brochettes</td><td>48,90 €</td><td>2,45 €</td></tr>
        </tbody>
      </table>
      <p>Le détail pour les macarons est dans <a href="/journal/combien-macarons-commander-entreprise">combien de macarons commander</a>, et tous les produits sur la page <a href="/creations/pauses-gourmandes">goûter et pause gourmande à Paris</a>. Pour le salé et les autres postes, voir <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">combien de pièces cocktail par personne</a> et <a href="/journal/combien-prevoir-par-personne-traiteur-entreprise">combien prévoir par personne</a> ; pour choisir les pâtisseries, <a href="/journal/meilleures-patisseries-gouter-entreprise-paris">les meilleures pâtisseries pour un goûter d'entreprise</a>.</p>

      <h2>Combien de verrines dessert par personne ?</h2>
      <p>Comptez une verrine par personne quand elle est le seul dessert, soit 4 boîtes de 6 pour 20 personnes : 24 verrines, 67,60 € HT en panna cotta à 16,90 € HT la boîte. En complément d'autres pièces, une verrine compte pour une des 2 à 3 pièces sucrées.</p>
      <table>
        <thead>
          <tr><th>Effectif</th><th>Boîtes de 6</th><th>Verrines</th><th>Panna cotta ou lemon curd à 16,90 €</th><th>Mousse au chocolat à 18,90 €</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>10</strong></td><td>2</td><td>12</td><td>33,80 €</td><td>37,80 €</td></tr>
          <tr><td><strong>20</strong></td><td>4</td><td>24</td><td>67,60 €</td><td>75,60 €</td></tr>
          <tr><td><strong>50</strong></td><td>10</td><td>60</td><td>169,00 €</td><td>189,00 €</td></tr>
        </tbody>
      </table>
      <p>Les verrines se mangent à la cuillère : les couverts jetables sont inclus sans supplément.</p>

      <h2>Combien de gâteaux par personne ?</h2>
      <p>Comptez une part par personne quand le gâteau est le seul dessert : une grande tarte de 10 à 12 parts pour 10 personnes, 2 pour 20, 5 pour 50. La grande tarte au citron meringuée est à 59,90 € HT, le grand gâteau praliné noisette à 69,90 € HT, soit de 4,99 à 6,99 € HT la part.</p>

      <h2>Combien de gâteaux de soirée par personne ?</h2>
      <p>Pour une soirée en cocktail dînatoire, comptez 4 pièces sucrées par personne, dont une part de gâteau : 80 pièces pour 20 personnes, soit 2 grandes tartes (20 parts) et 60 mignardises. Le gâteau pose le moment du toast ; les mignardises complètent pour les gourmands.</p>

      <h2>Quel budget dessert prévoir pour 20 personnes ?</h2>
      <p>Pour 20 personnes, le dessert revient à 126,90 € HT pour une pause de 2 pièces, 200,40 € HT pour un buffet de 3 pièces et 320,20 € HT pour une soirée de 4 pièces dont une part de gâteau, livraison de 29 € HT comprise, pour une seule livraison.</p>
      <table>
        <thead>
          <tr><th>Format</th><th>Composition</th><th>Calcul HT</th><th>Total HT</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Pause, 2 pièces (40)</strong></td><td>20 madeleines, 20 brochettes de fruits</td><td>49,00 + 48,90 + 29</td><td>126,90 €</td></tr>
          <tr><td><strong>Buffet, 3 pièces (60)</strong></td><td>24 macarons, 24 verrines panna cotta, 12 tartelettes citron</td><td>64,00 + 67,60 + 39,80 + 29</td><td>200,40 €</td></tr>
          <tr><td><strong>Soirée, 4 pièces (80)</strong></td><td>2 grandes tartes citron meringuées, 24 macarons, 24 verrines, 12 tartelettes</td><td>119,80 + 64,00 + 67,60 + 39,80 + 29</td><td>320,20 €</td></tr>
        </tbody>
      </table>
      <p>La pause gourmande clé en main démarre à 6 € HT par personne, soit 149 € HT pour 20 personnes livraison comprise ; voir aussi le <a href="/journal/gouter-entreprise-bureau">goûter d'entreprise au bureau</a>.</p>

      <h2>Quels desserts choisir selon le moment ?</h2>
      <p>Choisissez le dessert selon le moment : des produits qui se mangent debout en pause, des pièces variées en buffet, un gâteau au centre de la table en soirée. Chaque famille du catalogue correspond à un usage précis, avec des prix et des quantités différents.</p>
      <ul>
        <li><strong>En pause</strong> : madeleines, cookies, brochettes de fruits frais, cakes tranchés (5 à 6 personnes pour 13,90 € HT).</li>
        <li><strong>En buffet</strong> : macarons, verrines (panna cotta, lemon curd, mousse au chocolat) et tartelettes.</li>
        <li><strong>En soirée</strong> : une grande tarte (citron meringuée, framboises ou praliné noisette) et des macarons.</li>
      </ul>

      <h2>Combien de viennoiseries par personne pour un petit-déjeuner ?</h2>
      <p>Comptez 2 viennoiseries par personne, 3 jusqu'à 10 personnes, soit 40 pour 20 personnes, avec 10 % de marge sur l'effectif confirmé. Un plateau de 30 mini-viennoiseries sert 10 à 15 personnes. Le détail est dans <a href="/journal/combien-viennoiseries-par-personne">combien de viennoiseries par personne</a>.</p>

      <h2>Quelles erreurs éviter sur les quantités de desserts ?</h2>
      <ul>
        <li><strong>Un seul gâteau pour 20 personnes</strong> : une grande tarte sert 10 à 12 parts, il en faut 2.</li>
        <li><strong>Compter sur la liste d'invités</strong> : calculez sur l'effectif confirmé, plus 10 %.</li>
        <li><strong>Additionner salé et sucré</strong> : les pièces sucrées se comptent à part.</li>
        <li><strong>Oublier les régimes</strong> : les brochettes de fruits sont vegan et sans gluten, le banana bread est sans gluten.</li>
        <li><strong>Commander tout en un format</strong> : mêlez une part de gâteau, une verrine et un macaron.</li>
      </ul>

      <h2>Questions fréquentes sur les quantités de desserts</h2>${faqBlock(FAQ_DESSERTS)}

      <h2>Comment demander un devis pour vos desserts ?</h2>
      <p>Indiquez la date, l'effectif, l'adresse et les régimes recensés : le devis est remis sous 24 h, avec facturation entreprise, TVA et bon de commande accepté, et la livraison est possible dès 6h30 du lundi au vendredi. <a href="/devis">Demandez votre devis</a>. Tarifs L'Écrin Traiteur, octobre 2026.</p>
    `,
    relatedProducts: ['macarons', 'madeleines-20', 'panna-cotta'],
    faq: FAQ_DESSERTS,
  },
]
