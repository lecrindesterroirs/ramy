// Articles « office manager » (lot B) : fusionnés via lib/journalOffice.js
// Source des chiffres : fiche de faits validée du 13/10/2026 + données du site
// (lib/productsData.js, lib/boissonsData.js, app/creations/*/data.js). Tarifs HT, octobre 2026.
// Tous les budgets sont calculés : prix par personne × effectif + livraison 29 € HT par livraison.

// FAQ visible dans l'article (même contenu que le FAQPage JSON-LD généré depuis `faq`)
const faqHtml = (faq) => `
      <div class="faq-block">
${faq.map(({ q, a }) => `        <details>
          <summary><strong>${q}</strong></summary>
          <p>${a}</p>
        </details>`).join('\n')}
      </div>`

/* ─────────────────────────────────────────────────────────────────────────
   1. Petit-déjeuner hebdomadaire : budget annuel
   Hypothèse affichée : 40 semaines par an. Classique 8 € HT/pers, livraison 29 € HT/semaine.
   10 pers : 80 + 29 = 109 ; 20 pers : 160 + 29 = 189 ; 40 pers : 320 + 29 = 349.
   ───────────────────────────────────────────────────────────────────────── */
const FAQ_HEBDO = [
  {
    q: "Combien coûte un petit-déjeuner par semaine pour 20 personnes sur un an ?",
    a: "7 560 € HT sur 40 semaines en formule Classique : 8 € HT par personne, soit 160 €, plus 29 € HT de livraison, soit 189 € HT par semaine. La formule complète se chiffre sur devis.",
  },
  {
    q: "Combien de semaines faut-il compter dans un budget annuel ?",
    a: "Nous retenons 40 semaines : 52 semaines moins les congés, les jours fériés et la fermeture de fin d'année. C'est une hypothèse de calcul, pas une règle. Chaque semaine en plus ou en moins change le budget de 189 € HT pour 20 personnes en formule Classique, livraison de 29 € HT comprise.",
  },
  {
    q: "Quel jour choisir pour un petit-déjeuner de retour au bureau ?",
    a: "Le jour où le plus de collaborateurs sont déjà présents : relevez la présence sur quatre semaines et gardez le jour le plus fréquenté. Pour une livraison le mardi, la commande part le lundi avant 14h. La livraison se fait du lundi au vendredi, dès 6h30, à l'heure que vous choisissez.",
  },
  {
    q: "Faut-il commander pour tout l'effectif ou seulement pour les présents ?",
    a: "Seulement pour les présents le jour choisi. Pour 25 personnes sur 40, la formule Classique revient à 25 × 8 € + 29 € = 229 € HT par semaine, soit 9 160 € HT sur 40 semaines, contre 13 960 € HT pour 40 personnes. Le minimum de commande est de 50 € HT, atteint dès 7 personnes.",
  },
  {
    q: "Peut-on varier la sélection d'une semaine à l'autre ?",
    a: "Oui. Faites tourner quatre sélections : Classique, Classique avec madeleines, Classique avec yaourts fermiers, puis petit-déjeuner complet sur devis. Pour 20 personnes, le Classique toute l'année revient à 7 560 € HT, hors ajouts chiffrés au catalogue ; les semaines en complet se chiffrent sur devis.",
  },
  {
    q: "Les régimes alimentaires sont-ils couverts sur une série hebdomadaire ?",
    a: "Toute la carte est halal et sans porc, sans alcool et sans supplément. Les options végétarien, vegan et sans gluten se commandent sur demande ; l'atelier manipule de la farine, des traces sont donc possibles. Précisez les régimes une seule fois, dans la demande de devis de la série.",
  },
]

const CONTENU_HEBDO = `
      <p>Un petit-déjeuner d'équipe chaque semaine coûte <strong>7 560 € HT par an pour 20 personnes</strong> en formule Classique : 8 € HT par personne plus 29 € HT de livraison, soit 189 € HT par semaine, sur 40 semaines. Quand l'équipe alterne bureau et télétravail, un rendez-vous fixe donne une raison concrète de venir un jour précis. Voici le budget annuel pour 10, 20 et 40 personnes, le bon jour de la semaine, la rotation de la sélection et le suivi.</p>

      <h2>Combien coûte un petit-déjeuner par semaine sur une année ?</h2>
      <p>En formule Classique, un petit-déjeuner hebdomadaire coûte <strong>109 € HT par semaine pour 10 personnes, 189 € HT pour 20 et 349 € HT pour 40</strong>, soit de 4 360 à 13 960 € HT sur 40 semaines. L'hypothèse retenue est de 40 semaines par an : 52 semaines moins les congés, les jours fériés et la fermeture de fin d'année. Ajustez ce nombre à votre calendrier.</p>
      <table>
        <thead>
          <tr><th>Effectif</th><th>Produits par semaine (8 € × effectif)</th><th>Livraison</th><th>Total par semaine</th><th>Budget sur 40 semaines</th><th>Par personne et par semaine</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>10 personnes</strong></td><td>80 €</td><td>29 €</td><td>109 € HT</td><td>4 360 € HT</td><td>10,90 €</td></tr>
          <tr><td><strong>20 personnes</strong></td><td>160 €</td><td>29 €</td><td>189 € HT</td><td>7 560 € HT</td><td>9,45 €</td></tr>
          <tr><td><strong>40 personnes</strong></td><td>320 €</td><td>29 €</td><td>349 € HT</td><td>13 960 € HT</td><td>8,73 €</td></tr>
        </tbody>
      </table>
      <p>Le prix par personne baisse avec l'effectif, parce que la livraison de 29 € HT se répartit sur plus de convives. La formule Classique comprend viennoiseries, jus, café et fruits. Le détail des quantités est dans notre guide du <a href="/journal/budget-petit-dejeuner-equipe-personnes">budget petit-déjeuner d'équipe selon le nombre de personnes</a>.</p>

      <h2>Et avec le petit-déjeuner complet plutôt que le Classique ?</h2>
      <p>Le petit-déjeuner complet se chiffre sur devis.</p>
      <p>Un compromis simple : une semaine sur quatre en formule complète, sur devis. Pour 20 personnes, le Classique toute l'année revient à 7 560 € HT (189 € HT par semaine sur 40 semaines).</p>

      <h2>Quel jour de la semaine choisir pour faire revenir les équipes ?</h2>
      <p>Choisissez le jour où le plus de collaborateurs sont déjà prévus au bureau, pas celui où vous aimeriez qu'ils y soient. Le petit-déjeuner ne crée pas la présence à lui seul : il donne une raison de ne pas décaler sa venue. Trois étapes suffisent pour fixer le rendez-vous.</p>
      <ol>
        <li><strong>Relevez la présence réelle sur quatre semaines</strong> et retenez le jour le plus fréquenté.</li>
        <li><strong>Calez le petit-déjeuner avant la première réunion de la journée</strong> : livraison dès 6h30, à l'heure que vous choisissez, du lundi au vendredi.</li>
        <li><strong>Annoncez une date fixe</strong>, par exemple « tous les mardis à 8h30 », et ne la déplacez pas.</li>
      </ol>
      <p>Pour une livraison le mardi, la commande part le lundi avant 14h, la règle de la veille s'appliquant à chaque semaine.</p>

      <h2>Comment faire tourner la sélection pour que le rituel ne s'use pas ?</h2>
      <p>Faites tourner <strong>quatre sélections sur quatre semaines</strong> : le même petit-déjeuner chaque semaine devient vite un décor, alors qu'une rotation reste prévisible pour vous et variée pour l'équipe. Elle se décide une fois, au moment du devis de la série.</p>
      <table>
        <thead>
          <tr><th>Semaine</th><th>Sélection</th><th>Effet sur le budget</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Semaine 1</strong></td><td>Classique : viennoiseries, jus, café, fruits</td><td>8 € HT par personne</td></tr>
          <tr><td><strong>Semaine 2</strong></td><td>Classique avec madeleines en plus</td><td>Ajout chiffré au catalogue</td></tr>
          <tr><td><strong>Semaine 3</strong></td><td>Classique avec yaourts fermiers en plus</td><td>Ajout chiffré au catalogue</td></tr>
          <tr><td><strong>Semaine 4</strong></td><td>Petit-déjeuner complet</td><td>Sur devis</td></tr>
        </tbody>
      </table>
      <p>Pour les collègues vegan ou sans gluten, ajoutez une corbeille de fruits de saison à 38,90 € HT, sans gluten et vegan. Toute la carte est halal et sans porc : voir notre page <a href="/traiteur-halal">traiteur halal pour l'entreprise</a>.</p>

      <h2>Pour combien de personnes commander quand l'équipe est en hybride ?</h2>
      <p>Commandez pour les personnes présentes le jour choisi, pas pour l'effectif total. Exemple : <strong>25 présents sur 40 salariés donnent 25 × 8 € + 29 € = 229 € HT par semaine</strong>, soit 9 160 € HT sur 40 semaines, contre 13 960 € HT pour 40 personnes.</p>
      <p>Côté quantités, on compte 2 viennoiseries par personne, plus 10 % de marge : pour 25 personnes, 50 viennoiseries, soit 55 avec la marge, donc 2 plateaux de 30 mini-viennoiseries. Le minimum de commande est de 50 € HT, atteint dès 7 personnes en formule Classique (7 × 8 € = 56 €). Le guide <a href="/journal/combien-viennoiseries-par-personne">combien de viennoiseries par personne</a> détaille la règle.</p>

      <h2>Comment suivre le rituel et ajuster le budget ?</h2>
      <p>Notez chaque semaine quatre chiffres : personnes commandées, personnes présentes, restes, remarque. Après trois semaines, calez l'effectif commandé sur la moyenne des présents. Deux règles de décision suffisent :</p>
      <ul>
        <li>Si plus d'un tiers de la commande reste deux semaines de suite, baissez l'effectif commandé.</li>
        <li>Si rien ne reste et que les premiers servis ont tout pris, ajoutez 10 %.</li>
      </ul>
      <p>Comparez aussi la présence du jour choisi avec celle des quatre semaines précédentes : c'est le seul indicateur qui dit si le rituel remplit le bureau. Pour les autres jours, des <a href="/journal/snacks-collations-bureau-quoi-livrer-budget">collations pour le bureau</a> complètent le dispositif.</p>

      <h2>Comment mettre en place la commande récurrente ?</h2>
      <p>Demandez un devis unique pour toute la série plutôt qu'une commande par semaine : il fixe le jour, l'heure, l'adresse, l'effectif et la rotation, et la facturation entreprise avec TVA s'adapte à votre rythme, bon de commande accepté. Un tarif préférentiel est possible sur devis pour les commandes récurrentes.</p>
      <ol>
        <li>Fixez le jour, l'heure de livraison, le lieu et l'effectif de départ.</li>
        <li>Précisez la rotation de sélection et les régimes à couvrir.</li>
        <li>Donnez un contact sur place avec son mobile.</li>
        <li>Signalez à l'avance les semaines sans petit-déjeuner (congés, fériés) pour que le calendrier soit juste.</li>
      </ol>
      <p>Les rendez-vous de l'année (rentrée, fêtes, séminaires) se calent dans le <a href="/journal/calendrier-office-manager-2026-2027-temps-forts">calendrier de l'office manager 2026-2027</a>. Pour un premier petit-déjeuner, notre page <a href="/journal/petit-dejeuner-entreprise-paris">petit-déjeuner d'entreprise à Paris</a> donne les formules.</p>

      <h2>Quelles erreurs éviter avec un petit-déjeuner hebdomadaire ?</h2>
      <ul>
        <li><strong>Lancer le rituel sans budget annuel.</strong> Le calcul est simple : 189 € HT par semaine pour 20 personnes en Classique, 7 560 € HT sur 40 semaines.</li>
        <li><strong>Commander pour l'effectif total.</strong> Seuls les présents du jour comptent.</li>
        <li><strong>Changer de jour chaque semaine.</strong> Un rendez-vous mobile ne s'inscrit dans aucun agenda.</li>
        <li><strong>Servir la même sélection toute l'année.</strong> La rotation sur quatre semaines règle le problème.</li>
        <li><strong>Livrer à l'heure de début de la réunion.</strong> Demandez la livraison 30 minutes avant l'arrivée des premiers.</li>
        <li><strong>Oublier les régimes.</strong> Précisez végétarien, vegan et sans gluten dès le devis de la série.</li>
      </ul>

      <h2>Questions fréquentes sur le petit-déjeuner hebdomadaire</h2>${faqHtml(FAQ_HEBDO)}

      <p>Pour chiffrer votre série à partir de votre effectif et de votre jour, <a href="/devis">demandez votre devis</a> : réponse sous 24 h, retrouvez aussi nos <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a>. Tarifs L'Écrin Traiteur, octobre 2026.</p>
    `

/* ─────────────────────────────────────────────────────────────────────────
   2. Budget d'un séminaire par personne
   Journée type : Classique 8 + pause 6 + plateau repas 29,90 + pause 6 = 49,90 €/pers, 2 livraisons.
   20 : 998 + 58 = 1 056 ; 50 : 2 495 + 58 = 2 553 ; 100 : 4 990 + 58 = 5 048.
   Allégée 43,90 : 936 / 2 253 / 4 448. À partager 37,50 → 57,50 : 1 208 / 2 933 / 5 808.
   Avec cocktail L'Invitation 29,90 → 79,80 + 3 livraisons (87) : 1 683 / 4 077 / 8 067.
   ───────────────────────────────────────────────────────────────────────── */
const FAQ_SEMINAIRE = [
  {
    q: "Quel est le budget restauration d'un séminaire par personne à Paris ?",
    a: "Pour une journée type (petit-déjeuner Classique, deux pauses gourmandes à 6 € HT, plateau repas à 29,90 € HT), comptez 49,90 € HT de produits par personne, soit 52,80 € livraisons comprises pour 20 personnes, 51,06 € pour 50 et 50,48 € pour 100, avec deux livraisons de 29 € HT.",
  },
  {
    q: "Combien coûte la restauration d'un séminaire de 50 personnes ?",
    a: "2 553 € HT pour la journée type : 2 495 € HT de produits (50 × 49,90 €) plus deux livraisons de 29 € HT. Avec un cocktail de clôture L'Invitation à 29,90 € HT par personne et une troisième livraison, le total monte à 4 077 € HT. Un préavis de 48 h est recommandé à partir de 50 personnes.",
  },
  {
    q: "Combien de pauses prévoir et à quel coût ?",
    a: "Deux pauses gourmandes par journée, à partir de 6 € HT par personne chacune, soit 12 € HT par personne et 240 € HT pour 20 personnes. Retirer une pause réduit le budget de 6 € HT par personne, soit 300 € HT pour 50 personnes. Comptez 1,5 à 2 pièces sucrées par personne et par pause.",
  },
  {
    q: "Plateaux repas ou déjeuner à partager : quel écart de budget ?",
    a: "Le plateau repas coûte de 28,90 à 30,90 € HT par personne et se mange en salle sans se lever. Les menus à partager coûtent de 34,90 à 37,90 € HT par personne : prévoyez de 5 à 8 € HT de plus qu'un plateau à 29,90 €, soit de 250 à 400 € HT pour 50 personnes.",
  },
  {
    q: "La livraison est-elle comprise dans le budget d'un séminaire ?",
    a: "Non : 29 € HT par livraison à Paris et dans les communes proches, autres zones sur devis. Une journée avec petit-déjeuner et déjeuner compte deux livraisons, soit 58 € HT ; avec un cocktail de clôture, trois livraisons, soit 87 € HT. La livraison n'inclut ni l'installation ni la reprise du matériel.",
  },
  {
    q: "Quel délai prévoir pour commander la restauration d'un séminaire ?",
    a: "La commande se passe jusqu'à la veille 14h, avec livraison du lundi au vendredi dès 6h30. À partir de 50 personnes ou avec plusieurs sites, un préavis de 48 h est recommandé. Le devis arrive sous 24 h, avec facturation entreprise et TVA, et le bon de commande est accepté.",
  },
]

const CONTENU_SEMINAIRE = `
      <p>La restauration d'un séminaire d'entreprise à Paris revient à <strong>environ 50 € HT par personne</strong> pour une journée type : 49,90 € HT de produits, plus deux livraisons de 29 € HT. Cela représente 1 056 € HT pour 20 personnes, 2 553 € HT pour 50 et 5 048 € HT pour 100. Voici le budget poste par poste, quatre versions de la journée et les leviers pour l'ajuster. Pour l'organisation générale (accueil, pauses, régimes), voir notre guide du <a href="/journal/traiteur-seminaire-entreprise-paris">traiteur séminaire d'entreprise à Paris</a>.</p>

      <h2>Quel est le budget d'une journée de séminaire, poste par poste ?</h2>
      <p>La journée type additionne un petit-déjeuner d'accueil à 8 € HT, deux pauses gourmandes à 6 € HT et un plateau repas à 29,90 € HT : <strong>49,90 € HT par personne de produits</strong>, auxquels s'ajoutent deux livraisons de 29 € HT.</p>
      <table>
        <thead>
          <tr><th>Poste</th><th>Prix HT par personne</th><th>20 personnes</th><th>50 personnes</th><th>100 personnes</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Petit-déjeuner d'accueil (Classique)</strong></td><td>8,00 €</td><td>160 €</td><td>400 €</td><td>800 €</td></tr>
          <tr><td><strong>Pause du matin (pause gourmande)</strong></td><td>6,00 €</td><td>120 €</td><td>300 €</td><td>600 €</td></tr>
          <tr><td><strong>Déjeuner : plateaux repas</strong></td><td>29,90 €</td><td>598 €</td><td>1 495 €</td><td>2 990 €</td></tr>
          <tr><td><strong>Pause de l'après-midi</strong></td><td>6,00 €</td><td>120 €</td><td>300 €</td><td>600 €</td></tr>
          <tr><td><strong>Sous-total produits</strong></td><td>49,90 €</td><td>998 €</td><td>2 495 €</td><td>4 990 €</td></tr>
          <tr><td><strong>Livraisons (2 × 29 €)</strong></td><td>2 × 29 € HT</td><td>58 €</td><td>58 €</td><td>58 €</td></tr>
          <tr><td><strong>Total HT</strong></td><td></td><td><strong>1 056 €</strong></td><td><strong>2 553 €</strong></td><td><strong>5 048 €</strong></td></tr>
          <tr><td><strong>Par personne, livraisons comprises</strong></td><td></td><td>52,80 €</td><td>51,06 €</td><td>50,48 €</td></tr>
        </tbody>
      </table>
      <p>Le déjeuner pèse près de 60 % du budget produits (29,90 € sur 49,90 €). Le plateau repas est facturé 28,90 € (végétarien), 29,90 € (poulet) ou 30,90 € (saumon) : l'écart avec le prix retenu ici reste d'un euro par personne. Les menus sont détaillés sur notre page <a href="/creations/plateaux-repas">plateaux repas</a>.</p>

      <h2>Combien de livraisons faut-il compter pour un séminaire ?</h2>
      <p>Comptez <strong>deux livraisons de 29 € HT, soit 58 € HT</strong>, pour une journée classique : une le matin avec le petit-déjeuner et la pause du matin, une à midi avec le déjeuner et la pause de l'après-midi. C'est l'hypothèse retenue dans tous les tableaux de cet article.</p>
      <p>Si vous voulez la pause de l'après-midi livrée juste avant 16h, ajoutez une livraison : 29 € HT de plus. Avec un cocktail de clôture, une troisième livraison porte le total à 87 € HT. La livraison se facture 29 € HT à Paris et dans les communes proches, les autres zones sont sur devis, et elle n'inclut ni l'installation ni la reprise du matériel.</p>

      <h2>Quelle version de la journée choisir selon votre budget ?</h2>
      <p>La journée type à 49,90 € HT de produits par personne se décline en quatre versions, de <strong>43,90 à 79,80 € HT par personne</strong> avant livraison. Les totaux ci-dessous incluent les livraisons : deux de 29 € HT pour les versions A à C, trois (87 € HT) pour la version D.</p>
      <table>
        <thead>
          <tr><th>Version</th><th>Composition</th><th>Produits par personne HT</th><th>20 pers.</th><th>50 pers.</th><th>100 pers.</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>A. Allégée</strong></td><td>Accueil, déjeuner plateau repas, une pause</td><td>43,90 €</td><td>936 €</td><td>2 253 €</td><td>4 448 €</td></tr>
          <tr><td><strong>B. Journée type</strong></td><td>Accueil, deux pauses, plateau repas</td><td>49,90 €</td><td>1 056 €</td><td>2 553 €</td><td>5 048 €</td></tr>
          <tr><td><strong>C. Déjeuner à partager</strong></td><td>Journée type, menu à partager à 37,50 € au lieu du plateau</td><td>57,50 €</td><td>1 208 €</td><td>2 933 €</td><td>5 808 €</td></tr>
          <tr><td><strong>D. Avec cocktail de clôture</strong></td><td>Journée type plus L'Invitation, 8 pièces à 29,90 €</td><td>79,80 €</td><td>1 683 €</td><td>4 077 €</td><td>8 067 €</td></tr>
        </tbody>
      </table>
      <p>Exemple de calcul pour la version A à 50 personnes : 43,90 € × 50 = 2 195 €, plus 2 × 29 € de livraison, soit 2 253 € HT.</p>

      <h2>Faut-il ajouter un cocktail de clôture, et pour quel budget ?</h2>
      <p>Un cocktail de clôture L'Invitation ajoute <strong>29,90 € HT par personne pour 8 pièces</strong>, plus 29 € HT de livraison : 627 € HT pour 20 personnes, 1 524 € HT pour 50 et 3 019 € HT pour 100. La livraison supplémentaire est incluse dans ces trois totaux.</p>
      <table>
        <thead>
          <tr><th>Formule</th><th>Pièces par personne</th><th>Prix HT par personne</th><th>20 personnes</th><th>50 personnes</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>L'Invitation</strong></td><td>8</td><td>29,90 €</td><td>598 €</td><td>1 495 €</td></tr>
          <tr><td><strong>La Réception</strong></td><td>12</td><td>40,90 €</td><td>818 €</td><td>2 045 €</td></tr>
          <tr><td><strong>La Célébration</strong></td><td>16</td><td>51,90 €</td><td>1 038 €</td><td>2 595 €</td></tr>
        </tbody>
      </table>
      <p>Prix hors livraison, à ajouter à hauteur de 29 € HT. Pour un apéritif de fin de journée, 6 à 8 pièces par personne suffisent ; pour un cocktail qui remplace le dîner, comptez 16 à 18 pièces. Nos formules sont sur la page <a href="/creations/cocktails">cocktails</a>. Trois guides complètent le sujet : <a href="/journal/cocktail-entreprise-50-personnes">le cocktail d'entreprise pour 50 personnes</a>, <a href="/journal/idees-pieces-cocktail-entreprise">les idées de pièces cocktail</a> et <a href="/journal/cocktail-entreprise-sans-alcool">le cocktail sans alcool</a>.</p>

      <h2>Plateaux repas ou déjeuner à partager : quel écart de budget ?</h2>
      <p>Un menu à partager coûte <strong>7,60 € HT de plus par personne</strong> qu'un plateau repas à 29,90 € HT : 37,50 € pour Le Méditerranéen contre 29,90 €, soit 152 € HT d'écart pour 20 personnes, 380 € HT pour 50 et 760 € HT pour 100.</p>
      <p>Les menus à partager sont à 34,90 € (Le Jardin, 100 % végétarien), 37,50 € (Le Méditerranéen) et 37,90 € (Le Parisien). Le plateau repas se mange en salle sans se lever ; le menu à partager se pose au centre de la table. Pour décider, voir le <a href="/journal/dejeuner-entreprise-guide-complet">guide complet du déjeuner d'entreprise</a> et le calcul des quantités dans <a href="/journal/combien-plateaux-repas-commander-reunion-entreprise">combien de plateaux repas commander</a>.</p>

      <h2>Comment réduire le budget d'un séminaire sans sacrifier la journée ?</h2>
      <p>Quatre leviers font baisser le budget sans retirer le déjeuner ni l'accueil.</p>
      <ul>
        <li><strong>Passer de deux pauses à une :</strong> 6 € HT par personne en moins, soit 120 € HT pour 20 personnes et 300 € HT pour 50.</li>
        <li><strong>Prendre le plateau végétarien à 28,90 € pour tout le monde :</strong> 1 € HT par personne en moins, soit 50 € HT pour 50 personnes. À réserver aux groupes sans contrainte de goût.</li>
        <li><strong>Commander sur les présents :</strong> 5 absents sur 50 inscrits économisent 5 × 49,90 € = 249,50 € HT.</li>
        <li><strong>Regrouper les livraisons :</strong> la pause de l'après-midi livrée avec le déjeuner évite une livraison de 29 € HT.</li>
      </ul>

      <h2>Que ne comprend pas le budget d'une journée de séminaire ?</h2>
      <p>Le budget de cet article ne comprend ni l'eau du déjeuner, ni la reprise du matériel, ni les animations.</p>
      <ul>
        <li><strong>Eau :</strong> une Evian 33 cl coûte 3,80 € HT, soit 76 € HT pour 20 personnes et 190 € HT pour 50. Un thermos de 1 L de café ou de thé coûte 19,50 € HT pour 6 à 8 tasses. Le guide <a href="/journal/combien-boissons-par-personne-reunion-seminaire-cocktail">combien de boissons par personne</a> donne les quantités.</li>
        <li><strong>Reprise de la vaisselle réutilisable :</strong> livraison et reprise font 39 € HT en une ligne à Paris, dans le 92 et le 94 ; ailleurs, prix de la zone plus 19 € HT.</li>
        <li><strong>Animation culinaire :</strong> plancher de 600 € HT, voir les <a href="/journal/animations-culinaires-entreprise-idees-budget">idées d'animations culinaires et leur budget</a>.</li>
      </ul>

      <h2>Quelles erreurs éviter dans le budget d'un séminaire ?</h2>
      <ul>
        <li><strong>Budgéter sur les inscrits :</strong> basez-vous sur la présence confirmée, mise à jour 48 h avant.</li>
        <li><strong>Oublier la deuxième livraison :</strong> 29 € HT par livraison, deux pour une journée avec petit-déjeuner et déjeuner.</li>
        <li><strong>Oublier les boissons du déjeuner :</strong> l'eau n'est pas dans le prix du plateau repas.</li>
        <li><strong>Découvrir les régimes le jour même :</strong> toute la carte est halal et sans porc ; les options végétarien, vegan et sans gluten se précisent dès la demande. Voir notre page <a href="/traiteur-halal">traiteur halal</a>.</li>
        <li><strong>Commander à la veille pour 100 personnes :</strong> la règle est 14h la veille, mais un préavis de 48 h est recommandé à partir de 50 personnes.</li>
        <li><strong>Supprimer la pause de l'après-midi par réflexe :</strong> elle ne coûte que 6 € HT par personne ; retirez-la seulement si le programme est court.</li>
      </ul>
      <p>Pour un séminaire qui finit en soirée de fin d'année, le calcul se poursuit dans le <a href="/journal/fetes-fin-annee-entreprise-guide-chiffre-2026">guide chiffré des fêtes de fin d'année</a>. Et pour le petit-déjeuner d'accueil, voir nos <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners</a> et nos <a href="/creations/pauses-gourmandes">pauses gourmandes</a>.</p>

      <h2>Questions fréquentes sur le budget d'un séminaire</h2>${faqHtml(FAQ_SEMINAIRE)}

      <p>Pour un budget calé sur votre programme, votre effectif et votre lieu, <a href="/devis">demandez votre devis</a> : réponse sous 24 h, livraison dès 6h30 à Paris et en Île-de-France. Tarifs L'Écrin Traiteur, octobre 2026.</p>
    `

/* ─────────────────────────────────────────────────────────────────────────
   3. Checklist de l'office manager (J-7 à J+1)
   Exemple 20 pers : Classique 160 + 29 = 189 ; pause 120 + 29 = 149 ; plateaux 578 à 618 + 29 = 607 à 647 ;
   L'Invitation 598 + 29 = 627 ; La Réception 818 + 29 = 847 ; La Célébration 1 038 + 29 = 1 067.
   ───────────────────────────────────────────────────────────────────────── */
const FAQ_CHECKLIST = [
  {
    q: "Combien de temps à l'avance commander un traiteur d'entreprise ?",
    a: "Une commande se passe jusqu'à la veille 14h, avec livraison du lundi au vendredi dès 6h30. Visez J-5 pour la demande de devis, qui revient sous 24 h. À partir de 50 personnes ou avec plusieurs sites, un préavis de 48 h est recommandé pour caler la logistique.",
  },
  {
    q: "Que mentionner dans une demande de devis à un traiteur ?",
    a: "Sept informations : date et heure de livraison, adresse avec accès, effectif et régimes, type de prestation, budget HT par personne, coordonnées de facturation avec numéro de bon de commande, contact sur place avec mobile. Avec ces sept éléments, le devis revient sous 24 h et limite les allers-retours.",
  },
  {
    q: "Quel budget par personne annoncer au traiteur ?",
    a: "Petit-déjeuner Classique à 8 € HT, pause gourmande dès 6 €, plateau repas de 28,90 à 30,90 €, cocktail de 29,90 à 51,90 €. Ajoutez 29 € HT de livraison par commande. Exemple : 20 plateaux à 29,90 € HT font 598 € HT, soit 627 € HT livraison comprise.",
  },
  {
    q: "La livraison comprend-elle l'installation et la reprise du matériel ?",
    a: "Non. La livraison à 29 € HT n'inclut ni l'installation ni la reprise du matériel. Avec de la vaisselle réutilisable, la livraison avec reprise du matériel coûte 39 € HT à Paris, dans le 92 et le 94, et le prix de la zone plus 19 € HT ailleurs. Prévoyez une personne et un point d'installation sur place, et précisez-le dans la demande de devis.",
  },
  {
    q: "Peut-on payer sur bon de commande ?",
    a: "Oui. La facturation entreprise avec TVA est la règle et le bon de commande est accepté. Indiquez son numéro dans la demande de devis, avec la raison sociale et l'adresse de facturation, pour qu'il figure sur la facture dès l'émission. Le minimum de commande est de 50 € HT.",
  },
  {
    q: "Quels régimes alimentaires sont couverts par défaut ?",
    a: "Tout est halal et sans porc par défaut, sans alcool et sans supplément. Les options végétarien, vegan et sans gluten se commandent sur demande ; l'atelier manipule de la farine, des traces sont possibles. Indiquez le nombre de convives par régime dès la demande de devis.",
  },
]

const HOWTO_CHECKLIST_STEPS = [
  {
    name: "J-7 : cadrer le besoin",
    text: "Fixez la date, l'heure de début, le lieu, le nombre de personnes présentes et le budget HT par personne. Cinq lignes écrites suffisent pour demander un devis.",
  },
  {
    name: "J-6 : relever les régimes et les contraintes",
    text: "Demandez aux participants leurs régimes (végétarien, vegan, sans gluten) et leurs allergies. Toute la carte est halal et sans porc par défaut, sans supplément ; les autres régimes se précisent dans la demande de devis.",
  },
  {
    name: "J-5 : envoyer la demande de devis",
    text: "Envoyez un mail court avec la date, l'heure, l'adresse, l'effectif, les régimes, la prestation, le budget, la facturation et le contact sur place. Le devis revient sous 24 h.",
  },
  {
    name: "J-4 : valider le devis et le bon de commande",
    text: "Vérifiez l'effectif, les prix HT, la livraison de 29 € HT et l'adresse de facturation, puis transmettez le bon de commande si votre entreprise en émet un.",
  },
  {
    name: "J-3 : transmettre les informations d'accès",
    text: "Donnez l'adresse exacte, l'étage, le badge ou l'interphone, l'ascenseur, le quai de livraison, ainsi que le nom et le mobile du contact sur place.",
  },
  {
    name: "J-2 : confirmer l'effectif final",
    text: "À partir de 50 personnes ou avec plusieurs sites, un préavis de 48 h est recommandé : confirmez l'effectif final et les régimes à ce moment.",
  },
  {
    name: "J-1 avant 14h : faire le dernier ajustement",
    text: "La commande se passe jusqu'à la veille 14h. Passé 14h, appelez l'atelier plutôt que d'écrire. Préparez en parallèle la table, la zone d'installation et le contact sur place.",
  },
  {
    name: "J : réceptionner la livraison",
    text: "Désignez une personne présente à l'heure de livraison, contrôlez les quantités et les régimes, puis installez avant l'arrivée des participants : la livraison n'inclut pas l'installation.",
  },
  {
    name: "J+1 : clôturer",
    text: "Contrôlez la facture et le numéro de bon de commande, notez ce qui a manqué ou été en trop pour la prochaine fois, et organisez la reprise du matériel réutilisable (livraison et reprise à 39 € HT à Paris, dans le 92 et le 94).",
  },
]

const CONTENU_CHECKLIST = `
      <p>Commander un traiteur sans rien oublier demande <strong>9 étapes, de J-7 à J+1, et 15 questions à trancher</strong> : effectif présent, régimes, accès, heure de livraison, matériel, facturation, bon de commande et contact sur place. Cette checklist suit le calendrier réel d'une commande, avec les délais de L'Écrin Traiteur (devis sous 24 h, commande jusqu'à la veille 14h), un modèle de mail à copier et les erreurs à éviter.</p>

      <h2>Que faire de J-7 à J+1 pour commander un traiteur ?</h2>
      <p>Une commande bien tenue se déroule en neuf étapes datées, la demande de devis partant à J-5 au plus tard pour laisser les 24 h de réponse, la validation et la confirmation de l'effectif avant la veille 14h.</p>
      <ol>
        <li><strong>J-7 : cadrer le besoin.</strong> Fixez la date, l'heure de début, le lieu, le nombre de personnes présentes et le budget HT par personne.</li>
        <li><strong>J-6 : relever les régimes et les contraintes.</strong> Demandez régimes et allergies aux participants. Toute la carte est halal et sans porc par défaut.</li>
        <li><strong>J-5 : envoyer la demande de devis.</strong> Utilisez le modèle de mail plus bas. Le devis revient sous 24 h.</li>
        <li><strong>J-4 : valider le devis et le bon de commande.</strong> Vérifiez effectif, prix HT, livraison de 29 € HT et adresse de facturation.</li>
        <li><strong>J-3 : transmettre les informations d'accès.</strong> Adresse exacte, étage, badge ou interphone, ascenseur, quai, contact sur place avec son mobile.</li>
        <li><strong>J-2 : confirmer l'effectif final.</strong> Un préavis de 48 h est recommandé à partir de 50 personnes ou avec plusieurs sites.</li>
        <li><strong>J-1 avant 14h : faire le dernier ajustement.</strong> Passé 14h, appelez l'atelier plutôt que d'écrire. Préparez la table et la zone d'installation.</li>
        <li><strong>J : réceptionner la livraison.</strong> Une personne présente à l'heure, contrôle des quantités et des régimes, installation avant l'arrivée des participants.</li>
        <li><strong>J+1 : clôturer.</strong> Contrôlez la facture, notez ce qui a manqué ou été en trop, organisez la reprise du matériel réutilisable.</li>
      </ol>

      <h2>Quelles sont les 15 questions à se poser avant de commander ?</h2>
      <p>Quinze questions couvrent l'effectif, les régimes, l'accès, le matériel et la facturation : les huit premières sont pour vous, les sept suivantes pour le traiteur. Répondez-y par écrit avant la demande de devis.</p>
      <ol>
        <li><strong>Combien de personnes seront réellement présentes ?</strong> Un plateau repas par personne présente, sans marge ; 10 % de marge seulement sur les viennoiseries.</li>
        <li><strong>À quelle heure précise la livraison doit-elle arriver ?</strong> Demandez 30 minutes avant l'arrivée des participants.</li>
        <li><strong>Quel est le moment : petit-déjeuner, pause, déjeuner ou cocktail ?</strong> Un déjeuner du jeudi se commande le mercredi avant 14h.</li>
        <li><strong>Quel budget HT par personne ?</strong> Voir le tableau des repères plus bas.</li>
        <li><strong>Quels régimes et quelles allergies ?</strong> Végétarien, vegan, sans gluten, avec le nombre de convives par régime.</li>
        <li><strong>Quel est l'accès exact ?</strong> Adresse, étage, badge ou interphone, ascenseur, quai de livraison, heures d'ouverture de l'accueil.</li>
        <li><strong>Qui réceptionne ?</strong> Un nom, un mobile joignable à l'heure de livraison, et un suppléant.</li>
        <li><strong>Où installe-t-on ?</strong> Une table, un espace, une prise pour le café si besoin.</li>
        <li><strong>Le matériel est-il compris ?</strong> Demandez vaisselle, couverts et serviettes : la livraison n'inclut ni l'installation ni la reprise du matériel.</li>
        <li><strong>Que coûte la livraison, et dans quelle zone ?</strong> 29 € HT à Paris et communes proches, autres zones sur devis, minimum de commande 50 € HT.</li>
        <li><strong>Quelles boissons sont comprises ?</strong> Le Classique comprend jus et café ; l'eau et les thermos se chiffrent à part.</li>
        <li><strong>Quelle date limite pour commander ?</strong> La veille 14h, avec un préavis de 48 h recommandé à partir de 50 personnes.</li>
        <li><strong>Jusqu'à quand l'effectif peut-il bouger ?</strong> Demandez la date limite de modification avant de signer.</li>
        <li><strong>Quelles informations de facturation faut-il ?</strong> Raison sociale, adresse de facturation, TVA, service payeur.</li>
        <li><strong>Un bon de commande est-il accepté, et où s'écrit son numéro ?</strong> Oui, et il s'écrit dans la demande de devis.</li>
      </ol>

      <h2>Quels délais et règles chiffrées faut-il connaître ?</h2>
      <p>Sept règles chiffrées cadrent le calendrier d'une commande chez L'Écrin Traiteur : le devis sous 24 h, la commande jusqu'à la veille 14h, la livraison du lundi au vendredi dès 6h30, un minimum de 50 € HT, une livraison à 29 € HT.</p>
      <table>
        <thead>
          <tr><th>Règle</th><th>Valeur</th><th>Ce que cela change pour votre calendrier</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Devis</strong></td><td>Sous 24 h</td><td>Envoyez la demande à J-5 au plus tard</td></tr>
          <tr><td><strong>Commande</strong></td><td>Jusqu'à la veille 14h</td><td>Pour un jeudi, commandez le mercredi avant 14h</td></tr>
          <tr><td><strong>Préavis recommandé</strong></td><td>48 h, à partir de 50 personnes ou plusieurs sites</td><td>Confirmez le mardi pour un jeudi</td></tr>
          <tr><td><strong>Livraison</strong></td><td>Lundi au vendredi, dès 6h30</td><td>Pas de livraison le week-end</td></tr>
          <tr><td><strong>Minimum de commande</strong></td><td>50 € HT</td><td>Atteint dès 7 personnes en petit-déjeuner Classique</td></tr>
          <tr><td><strong>Frais de livraison</strong></td><td>29 € HT à Paris et communes proches</td><td>Autres zones sur devis</td></tr>
          <tr><td><strong>Livraison avec reprise du matériel</strong></td><td>39 € HT à Paris, dans le 92 et le 94 ; ailleurs, prix de la zone + 19 € HT</td><td>À demander dès le devis</td></tr>
        </tbody>
      </table>

      <h2>Quel budget par personne annoncer dans la demande de devis ?</h2>
      <p>Annoncez un budget HT par personne : <strong>8 € pour un petit-déjeuner Classique, dès 6 € pour une pause gourmande, de 28,90 à 30,90 € pour un plateau repas, de 29,90 à 51,90 € pour un cocktail</strong>, auxquels s'ajoutent 29 € HT de livraison par commande.</p>
      <table>
        <thead>
          <tr><th>Format</th><th>Prix HT par personne</th><th>Exemple pour 20 personnes, livraison comprise</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Petit-déjeuner Classique</strong></td><td>8 €</td><td>160 + 29 = 189 € HT</td></tr>
          <tr><td><strong>Pause gourmande</strong></td><td>dès 6 €</td><td>120 + 29 = 149 € HT</td></tr>
          <tr><td><strong>Plateaux repas</strong></td><td>28,90 à 30,90 €</td><td>578 à 618 + 29 = 607 à 647 € HT</td></tr>
          <tr><td><strong>Cocktail L'Invitation (8 pièces)</strong></td><td>29,90 €</td><td>598 + 29 = 627 € HT</td></tr>
          <tr><td><strong>Cocktail La Réception (12 pièces)</strong></td><td>40,90 €</td><td>818 + 29 = 847 € HT</td></tr>
          <tr><td><strong>Cocktail La Célébration (16 pièces)</strong></td><td>51,90 €</td><td>1 038 + 29 = 1 067 € HT</td></tr>
        </tbody>
      </table>
      <p>Les formules détaillées sont sur les pages <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners</a>, <a href="/creations/pauses-gourmandes">pauses gourmandes</a>, <a href="/creations/plateaux-repas">plateaux repas</a> et <a href="/creations/cocktails">cocktails</a>. Pour comparer les prix du marché, voir le <a href="/journal/budget-traiteur-entreprise-paris">budget traiteur d'entreprise à Paris</a>.</p>

      <h2>Quel modèle de mail pour demander un devis à un traiteur ?</h2>
      <p>Un mail de demande de devis tient en huit lignes : date, adresse, effectif, régimes, prestation, budget, facturation, contact. Copiez ce modèle et remplacez les crochets.</p>
      <div style="background: var(--bg-secondary); border-left: 2px solid var(--accent); padding: 24px 28px; margin: 0 0 40px;">
        <p><strong>Objet :</strong> Demande de devis, [déjeuner / petit-déjeuner] du [date], [nombre] personnes</p>
        <p>Bonjour,<br>
        Pourriez-vous m'adresser un devis pour :<br>
        - Livraison : le [jj/mm] à [hh:mm]<br>
        - Adresse : [adresse, étage, code d'accès]<br>
        - Effectif : [nombre] personnes, dont [x] végétariens et [y] sans gluten<br>
        - Prestation : [petit-déjeuner / plateaux repas / pause / cocktail]<br>
        - Budget visé : [x] € HT par personne<br>
        - Facturation : [raison sociale, adresse], bon de commande n° [numéro]<br>
        - Contact sur place : [prénom], [mobile]<br>
        Merci de me confirmer la livraison et le délai de réponse.<br>
        Cordialement,<br>
        [Prénom Nom, fonction, téléphone]</p>
      </div>

      <h2>Quelles erreurs éviter quand on commande un traiteur ?</h2>
      <ul>
        <li><strong>Demander le devis la veille de la réunion.</strong> Le devis demande jusqu'à 24 h et la commande se clôt à 14h la veille : visez J-5.</li>
        <li><strong>Compter les inscrits plutôt que les présents.</strong> Confirmez l'effectif à J-2.</li>
        <li><strong>Oublier l'accès.</strong> Badge, interphone ou quai non communiqués : le livreur attend à la porte.</li>
        <li><strong>Ne pas désigner de contact joignable sur place.</strong> Un nom, un mobile, un suppléant.</li>
        <li><strong>Découvrir les régimes le jour même.</strong> Relevez-les à J-6 avec un nombre par régime.</li>
        <li><strong>Oublier le numéro de bon de commande.</strong> Il ralentit le règlement de la facture ; indiquez-le dès la demande.</li>
        <li><strong>Livrer à l'heure de début.</strong> Demandez la livraison 30 minutes avant.</li>
        <li><strong>Supposer que l'installation est comprise.</strong> La livraison n'inclut ni l'installation ni la reprise du matériel.</li>
      </ul>
      <p>La checklist se combine avec le <a href="/journal/calendrier-office-manager-2026-2027-temps-forts">calendrier de l'office manager 2026-2027</a> pour anticiper les temps forts, et avec le guide <a href="/journal/combien-plateaux-repas-commander-reunion-entreprise">combien de plateaux repas commander</a> pour les quantités. Pour un pot de départ, voir <a href="/journal/organiser-pot-de-depart-entreprise-budget-quantites">organiser un pot de départ : budget et quantités</a>.</p>

      <h2>Questions fréquentes sur la commande d'un traiteur d'entreprise</h2>${faqHtml(FAQ_CHECKLIST)}

      <p>Pour appliquer cette checklist à votre prochaine réunion, <a href="/devis">demandez votre devis</a> avec les huit informations du modèle de mail : réponse sous 24 h, facturation entreprise avec TVA et bon de commande accepté. Tarifs L'Écrin Traiteur, octobre 2026.</p>
    `

export const OFFICE_B = [
  {
    slug: 'petit-dejeuner-hebdomadaire-bureau-budget-annuel-retour-au-bureau',
    titre: "Un petit-déjeuner par semaine pour faire revenir les équipes au bureau : budget annuel et mode d'emploi",
    metaTitle: "Petit-déjeuner hebdomadaire au bureau : budget annuel",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    isoModified: '2026-10-13',
    extrait: "Un petit-déjeuner par semaine pour 10, 20 ou 40 personnes : budget annuel calculé, jour à choisir, rotation de la sélection et suivi. Tarifs octobre 2026.",
    img: '/hero-bg2.webp',
    contenu: CONTENU_HEBDO,
    relatedProducts: ['viennoiseries-melangees', 'madeleines-20', 'brochettes-fruits'],
    faq: FAQ_HEBDO,
  },
  {
    slug: 'budget-seminaire-entreprise-par-personne-paris',
    titre: "Budget d'un séminaire d'entreprise par personne à Paris : tableau pour 20, 50 et 100 personnes",
    metaTitle: "Budget séminaire d'entreprise par personne à Paris",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    isoModified: '2026-10-13',
    extrait: "Budget restauration d'un séminaire à Paris par personne et au total pour 20, 50 et 100 personnes : accueil, pauses, déjeuner, cocktail.",
    img: '/detail-bg.webp',
    contenu: CONTENU_SEMINAIRE,
    relatedProducts: ['viennoiseries-melangees', 'cookies', 'panier-fruits'],
    faq: FAQ_SEMINAIRE,
  },
  {
    slug: 'checklist-office-manager-commander-traiteur',
    titre: "Checklist de l'office manager : commander un traiteur sans rien oublier (J-7 à J+1)",
    metaTitle: "Checklist office manager : commander un traiteur",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    isoModified: '2026-10-13',
    extrait: "Les 15 questions à poser, le calendrier de J-7 à J+1, un modèle de mail de devis et les erreurs à éviter pour commander un traiteur sans rien oublier.",
    img: '/creations-4.webp',
    contenu: CONTENU_CHECKLIST,
    relatedProducts: ['plateau-clubs-signature', 'viennoiseries-melangees', 'brochettes-fruits'],
    faq: FAQ_CHECKLIST,
    howto: {
      name: "Commander un traiteur d'entreprise sans rien oublier, de J-7 à J+1",
      description: "Les neuf étapes datées pour commander un traiteur d'entreprise : cadrage, régimes, demande de devis, bon de commande, accès, confirmation de l'effectif, livraison et clôture.",
      totalTime: 'P7D',
      steps: HOWTO_CHECKLIST_STEPS,
    },
  },
]
