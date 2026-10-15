// Articles « office manager » (lot F) : fusionnés via lib/journalOffice.js
// Source des chiffres : fiche de faits validée du 13/10/2026 + données du site
// (lib/productsData.js, lib/boissonsData.js, app/creations/*/data.js, app/creations/pauses-gourmandes/page.js).
// Tarifs HT, octobre 2026. Tous les budgets sont calculés dans ce fichier :
// prix par personne × effectif + livraison 29 € HT par livraison (hypothèse de livraisons écrite).

// FAQ visible dans l'article (même contenu que le FAQPage JSON-LD généré depuis `faq`)
const faqHtml = (faq) => `
      <div class="faq-block">
${faq.map(({ q, a }) => `        <details>
          <summary><strong>${q}</strong></summary>
          <p>${a}</p>
        </details>`).join('\n')}
      </div>`

// Mise en forme française : espace comme séparateur de milliers, virgule décimale
const fr = (x, deuxDecimales = false) => {
  const r = Math.round(x * 100) / 100
  const s = deuxDecimales || !Number.isInteger(r) ? r.toFixed(2) : String(r)
  const [entier, dec] = s.split('.')
  const groupe = entier.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  return dec ? `${groupe},${dec}` : groupe
}
const eur = (x, deuxDecimales = false) => `${fr(x, deuxDecimales)} €`

const LIV = 29 // livraison HT, par livraison, Paris et communes proches

/* ─────────────────────────────────────────────────────────────────────────
   1. Inauguration d'entreprise : déroulé, budget traiteur, invités
   La Réception 40,90 ; L'Invitation 29,90 ; La Célébration 51,90 ; une livraison de 29 €.
   Boissons : 1 flûte Chardonnay 0 % (75 cl = 6 flûtes, 16,90 €), 2 verres de jus (1 L = 5 verres, 9,50 €),
   1 verre d'eau (75 cl = 4 verres, 4,80 €) par invité.
   ───────────────────────────────────────────────────────────────────────── */
const INAUG_EFFECTIFS = [40, 80, 150]
const INAUG_FORMULES = [
  { nom: "L'Invitation", pieces: 8, prix: 29.9 },
  { nom: 'La Réception', pieces: 12, prix: 40.9 },
  { nom: 'La Célébration', pieces: 16, prix: 51.9 },
]
const boissonsCocktail = (n) => {
  const chard = Math.ceil(n / 6)
  const jus = Math.ceil((n * 2) / 5)
  const eau = Math.ceil(n / 4)
  const cChard = chard * 16.9
  const cJus = jus * 9.5
  const cEau = eau * 4.8
  return { chard, jus, eau, cChard, cJus, cEau, total: cChard + cJus + cEau }
}
const RECEPTION = INAUG_FORMULES[1].prix
const inaugTotal = (n) => n * RECEPTION + boissonsCocktail(n).total + LIV

const INAUG_STEPS = [
  {
    name: "J-28 : cadrer l'inauguration et demander le devis",
    text: "Fixez la date (un jour de semaine, la livraison se fait du lundi au vendredi), le format, le nombre d'invités et le budget par invité, puis demandez le devis : il revient sous 24 h.",
  },
  {
    name: "J-21 : envoyer les invitations",
    text: "Indiquez l'heure de début et de fin, l'adresse, l'accès et la date limite de réponse. Un cocktail de 2 heures se cale de 18h à 20h ou de 12h à 14h.",
  },
  {
    name: "J-14 : valider la formule et les options",
    text: "Choisissez entre L'Invitation, La Réception et La Célébration, puis décidez de l'animation culinaire et des boissons sans alcool. Signez le devis.",
  },
  {
    name: "J-10 : fixer le plan des buffets et le parcours de visite",
    text: "Placez un buffet à l'entrée et un au fond des locaux, évitez les couloirs et les abords de l'ascenseur, et prévenez l'accueil de l'immeuble de l'heure de livraison.",
  },
  {
    name: "J-7 : relever les réponses et les régimes",
    text: "Comptez les présents confirmés et le nombre d'invités par régime (végétarien, vegan, sans gluten). Toute la carte est halal et sans porc par défaut, sans supplément.",
  },
  {
    name: "J-2 : confirmer l'effectif final",
    text: "Un préavis de 48 h est recommandé à partir de 50 personnes ou pour plusieurs sites. Ajoutez 10 % de marge sur l'effectif confirmé.",
  },
  {
    name: "J-1 avant 14h : faire le dernier ajustement",
    text: "La commande se passe jusqu'à la veille 14h : transmettez l'effectif et les régimes définitifs avant cette heure.",
  },
  {
    name: "Jour J : réceptionner et installer",
    text: "Désignez une personne présente à la livraison, demandez la livraison au moins 30 minutes avant l'arrivée des invités et installez les buffets : la livraison n'inclut ni l'installation ni la reprise du matériel.",
  },
]

const FAQ_INAUG = [
  {
    q: "Quel budget traiteur prévoir pour une inauguration de 80 invités ?",
    a: `${eur(80 * RECEPTION + LIV)} HT en formule La Réception : 80 × 40,90 € = ${eur(80 * RECEPTION)}, plus 29 € de livraison, hors boissons. Avec ${eur(boissonsCocktail(80).total, true)} HT de boissons sans alcool, le total est de ${eur(inaugTotal(80), true)} HT, soit ${eur(inaugTotal(80) / 80, true)} HT par invité, pour une seule livraison.`,
  },
  {
    q: "Combien de temps dure une inauguration d'entreprise ?",
    a: "Prévoyez 2 heures : 30 minutes d'accueil, 15 minutes de discours, 45 minutes de visite et 30 minutes de cocktail. Un format apéritif tient en 1 heure, un dînatoire demande de 2h30 à 3 heures. Le buffet reste en libre-service du début à la fin, y compris pendant le discours.",
  },
  {
    q: "Quelle formule traiteur choisir pour une inauguration ?",
    a: "La Réception, 12 pièces à 40,90 € HT par invité, convient à une inauguration de 2 heures qui reçoit clients et partenaires. L'Invitation, 8 pièces à 29,90 € HT, suffit pour une heure. La Célébration, 16 pièces à 51,90 € HT, remplace le dîner quand la réception se prolonge.",
  },
  {
    q: "Combien de temps à l'avance organiser une inauguration ?",
    a: "Demandez le devis 3 à 4 semaines à l'avance pour une réception d'envergure : il revient sous 24 h. La commande reste possible jusqu'à la veille 14h, avec un préavis de 48 h recommandé à partir de 50 personnes ou pour plusieurs sites. La livraison se fait du lundi au vendredi, dès 6h30.",
  },
  {
    q: "Comment organiser une journée portes ouvertes d'entreprise ?",
    a: `Prévoyez une pause gourmande par visiteur attendu, à partir de 6 € HT, livrée en deux fois (10h et 14h30), et des visites par créneaux de 30 minutes. Pour 60 visiteurs : 60 × 6 € = 360 € HT plus 2 livraisons de 29 € HT, soit 418 € HT. Un thermos de café de 1 L sert 6 tasses, à 19,50 € HT.`,
  },
  {
    q: "Peut-on ajouter une animation culinaire à une inauguration ?",
    a: "Oui, sur devis, avec un plancher de 600 € HT pour la mise en place et les portions : 15 € HT par invité à 40 invités, 7,50 € à 80 et 4 € à 150. Une découpe de saumon frais, des mini burgers ou un bar à mocktails donnent un point de rendez-vous. Précisez accès, électricité et espace dès la demande.",
  },
]

const CONTENU_INAUG = `
      <p>Une inauguration d'entreprise tient en <strong>2 heures</strong> : 30 minutes d'accueil, 15 minutes de discours, 45 minutes de visite, puis 30 minutes de cocktail, le buffet restant ouvert du début à la fin. Avec La Réception à 40,90 € HT par invité, le budget traiteur est de <strong>${eur(inaugTotal(40), true)} HT pour 40 invités</strong>, boissons sans alcool et livraison comprises. Voici le déroulé heure par heure, les formats, le budget pour 40, 80 et 150 invités et le rétroplanning de quatre semaines.</p>

      <h2>Quel déroulé pour une inauguration d'entreprise, heure par heure ?</h2>
      <p>Comptez 2 heures, de 18h à 20h ou de 12h à 14h pour une version déjeunatoire : accueil, discours, visite, puis cocktail. Les buffets sont dressés avant l'arrivée du premier invité, restent en libre-service pendant le discours et la visite, et les pièces sucrées se servent pendant le dernier quart d'heure.</p>
      <table>
        <thead>
          <tr><th>Soirée</th><th>Midi</th><th>Moment</th><th>Côté restauration</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>17h15</strong></td><td>11h15</td><td>Livraison et mise en place</td><td>Buffets dressés, boissons au frais, un point par zone</td></tr>
          <tr><td><strong>18h00</strong></td><td>12h00</td><td>Accueil des invités</td><td>Boissons, premières pièces salées</td></tr>
          <tr><td><strong>18h30</strong></td><td>12h30</td><td>Discours (15 minutes)</td><td>Buffet en libre-service</td></tr>
          <tr><td><strong>18h45</strong></td><td>12h45</td><td>Visite des lieux par petits groupes</td><td>Un buffet à l'entrée, un au fond</td></tr>
          <tr><td><strong>19h30</strong></td><td>13h30</td><td>Cœur du cocktail</td><td>Pièces salées consistantes, animation</td></tr>
          <tr><td><strong>19h45</strong></td><td>13h45</td><td>Pièces sucrées et boissons chaudes, jusqu'à 20h00 (14h00)</td><td>Fin du service</td></tr>
        </tbody>
      </table>
      <p>Le plan des buffets dans des bureaux est détaillé dans le guide du <a href="/journal/cocktail-inauguration-entreprise">cocktail d'inauguration de bureaux</a>.</p>

      <h2>Quels formats choisir pour une inauguration d'entreprise ?</h2>
      <p>Quatre formats couvrent presque toutes les inaugurations : le cocktail apéritif à 29,90 € HT par invité (8 pièces), le déjeunatoire à 40,90 € HT (12 pièces), le dînatoire à 51,90 € HT (16 pièces) et la journée portes ouvertes, dès 6 € HT par visiteur et par pause.</p>
      <table>
        <thead>
          <tr><th>Format</th><th>Durée</th><th>Pièces par personne</th><th>Formule catalogue</th><th>Prix HT par invité</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Cocktail apéritif, fin de journée</strong></td><td>1 à 2 h</td><td>6 à 8</td><td>L'Invitation</td><td>29,90 €</td></tr>
          <tr><td><strong>Cocktail déjeunatoire</strong></td><td>1h30 à 2 h</td><td>12 à 14</td><td>La Réception (12 pièces)</td><td>40,90 €</td></tr>
          <tr><td><strong>Cocktail dînatoire</strong></td><td>2h30 à 3 h</td><td>16 à 18</td><td>La Célébration (16 pièces)</td><td>51,90 €</td></tr>
          <tr><td><strong>Journée portes ouvertes</strong></td><td>Visiteurs en continu</td><td>1,5 à 2 pièces sucrées par pause</td><td>Pause gourmande</td><td>dès 6 €</td></tr>
        </tbody>
      </table>
      <p>La Réception est la formule la plus choisie des cocktails d'entreprise, et celle à retenir pour recevoir clients et partenaires. Les compositions sont sur la page <a href="/creations/cocktails">cocktails</a>, les repères par occasion sur celle du <a href="/occasions/cocktail-entreprise">cocktail d'entreprise à Paris</a>.</p>

      <h2>Quel budget traiteur pour une inauguration de 40, 80 ou 150 invités ?</h2>
      <p>Avec La Réception, comptez <strong>${eur(40 * RECEPTION + LIV)} HT pour 40 invités, ${eur(80 * RECEPTION + LIV)} HT pour 80 et ${eur(150 * RECEPTION + LIV)} HT pour 150</strong>, livraison comprise et hors boissons. Le calcul est le prix par invité multiplié par l'effectif, plus 29 € HT pour une seule livraison.</p>
      <table>
        <thead>
          <tr><th>Formule</th><th>40 invités</th><th>80 invités</th><th>150 invités</th></tr>
        </thead>
        <tbody>
${INAUG_FORMULES.map((f) => `          <tr><td><strong>${f.nom}</strong> (${f.pieces} pièces, ${eur(f.prix, true)})</td>${INAUG_EFFECTIFS.map((n) => `<td>${fr(f.prix * n)} + ${LIV} = ${eur(f.prix * n + LIV)}</td>`).join('')}</tr>`).join('\n')}
        </tbody>
      </table>
      <p>Les boissons s'ajoutent. Pour un cocktail de 2 heures, comptez 4 boissons par invité : 1 flûte de Chardonnay 0 % à 16,90 € HT la bouteille de 75 cl (6 flûtes), 2 verres de jus à 9,50 € HT le litre (5 verres) et 1 verre d'eau à 4,80 € HT la bouteille de 75 cl (4 verres).</p>
      <table>
        <thead>
          <tr><th>Invités</th><th>Chardonnay 0 %</th><th>Jus</th><th>Eau</th><th>Boissons</th><th>Total avec La Réception et 1 livraison</th><th>Par invité</th></tr>
        </thead>
        <tbody>
${INAUG_EFFECTIFS.map((n) => {
  const b = boissonsCocktail(n)
  return `          <tr><td><strong>${n}</strong></td><td>${b.chard} bouteilles : ${eur(b.cChard, true)}</td><td>${b.jus} L : ${eur(b.cJus, true)}</td><td>${b.eau} bouteilles : ${eur(b.cEau, true)}</td><td>${eur(b.total, true)}</td><td>${fr(n * RECEPTION)} + ${fr(b.total, true)} + ${LIV} = <strong>${eur(inaugTotal(n), true)}</strong></td><td>${eur(inaugTotal(n) / n, true)}</td></tr>`
}).join('\n')}
        </tbody>
      </table>
      <p>L'hypothèse est une seule livraison de 29 € HT, boissons comprises. Une seconde livraison ou un second site ajoute 29 € HT. Commandez sur les présents confirmés, avec 10 % de marge.</p>

      <h2>Quel rétroplanning pour organiser une inauguration en 4 semaines ?</h2>
      <p>Une réception d'envergure se prépare 3 à 4 semaines à l'avance, même si le devis revient sous 24 h. Voici huit étapes, de J-28 au jour J ; la commande elle-même, de J-7 à J+1, est dans la <a href="/journal/checklist-office-manager-commander-traiteur">checklist de l'office manager</a>.</p>
      <ol>
${INAUG_STEPS.map((s) => `        <li><strong>${s.name}.</strong> ${s.text}</li>`).join('\n')}
      </ol>

      <h2>Comment organiser une journée portes ouvertes d'entreprise ?</h2>
      <p>Pour une journée portes ouvertes de 10h à 17h, prévoyez une pause gourmande par visiteur attendu, livrée en deux fois : <strong>${eur(60 * 6 + 2 * LIV)} HT pour 60 visiteurs</strong>, soit ${eur((60 * 6 + 2 * LIV) / 60, true)} HT par visiteur. Le calcul : 60 × 6 € = 360 €, plus 2 livraisons de 29 € HT.</p>
      <p>Les visiteurs arrivent au fil de la journée : un cocktail à heure fixe ne convient pas. Placez un point d'accueil renouvelé à 10h et à 14h30, et organisez des visites par créneaux de 30 minutes. Pour du café en continu, un thermos de 1 L sert 6 tasses : 10 thermos pour 60 visiteurs, soit 195 € HT.</p>

      <h2>Quelles idées pour marquer une inauguration d'entreprise ?</h2>
      <p>Quatre idées donnent aux invités un point de rendez-vous, chacune avec un coût connu.</p>
      <ul>
        <li><strong>Une animation culinaire :</strong> plancher de 600 € HT, soit ${eur(600 / 40, true)} par invité à 40, ${eur(600 / 80, true)} à 80 et ${eur(600 / 150, true)} à 150. Découpe de saumon frais, mini burgers ou bar à mocktails : voir les <a href="/creations/animations-culinaires">animations culinaires</a>.</li>
        <li><strong>Un bar sans alcool :</strong> le Chardonnay 0 % à 16,90 € HT la bouteille pour trinquer.</li>
        <li><strong>Deux buffets plutôt qu'un :</strong> un à l'entrée, un au fond des locaux.</li>
        <li><strong>Un coffret pour les invités clés :</strong> 10 coffrets de 10 madeleines à 24,90 € HT coûtent 249 € HT. Voir les <a href="/creations/coffrets-cadeaux">coffrets cadeaux</a>.</li>
      </ul>

      <h2>Quelles erreurs éviter pour une inauguration d'entreprise ?</h2>
      <ul>
        <li><strong>Fixer l'inauguration un week-end :</strong> la livraison se fait du lundi au vendredi, dès 6h30.</li>
        <li><strong>Compter les invités plutôt que les présents :</strong> commandez sur les confirmés, plus 10 %.</li>
        <li><strong>Couper le service pendant le discours :</strong> une partie des invités arrive encore.</li>
        <li><strong>Oublier les boissons dans le budget :</strong> ${eur(boissonsCocktail(40).total, true)} HT pour 40 invités.</li>
        <li><strong>Prendre une animation sous 20 invités :</strong> le plancher de 600 € HT dépasse 30 € HT par invité.</li>
      </ul>

      <h2>Questions fréquentes sur l'organisation d'une inauguration d'entreprise</h2>${faqHtml(FAQ_INAUG)}

      <p>Pour un budget calé sur votre date, votre lieu et votre liste d'invités, <a href="/devis">demandez votre devis</a> : réponse sous 24 h, livraison dès 6h30 à Paris et en Île-de-France. Tarifs L'Écrin Traiteur, octobre 2026.</p>
    `

/* ─────────────────────────────────────────────────────────────────────────
   2. Cadeaux gourmands par budget
   Catalogue : cookies 6 = 17,90 ; brownie 6 = 19,90 ; banana bread sans gluten = 21,90 ;
   madeleines 10 = 24,90 ; babka = 24,90 ; madeleines 20 = 49,00 ; macarons 24 = 64,00 ; madeleines 50 = 119,00.
   Livraison groupée unique : 29 € HT.
   ───────────────────────────────────────────────────────────────────────── */
const C = {
  cookies: 17.9,
  brownie: 19.9,
  banana: 21.9,
  mad10: 24.9,
  babka: 24.9,
  mad20: 49,
  macarons: 64,
  mad50: 119,
}
const IDEES_A = [
  { n: 1, nom: 'Coffret de cookies', contenu: '6 cookies assortis : caramel beurre salé, pépites de chocolat, pistache, chocolat blanc', prix: C.cookies, pour: 'Salarié, client à remercier' },
  { n: 2, nom: 'Brownie fondant', contenu: '6 pièces au chocolat', prix: C.brownie, pour: 'Salarié' },
  { n: 3, nom: 'Banana bread sans gluten', contenu: '5 à 6 parts, farine de riz et poudre d\'amande', prix: C.banana, pour: 'Collaborateur sans gluten, client' },
  { n: 4, nom: 'Coffret de 10 madeleines', contenu: '10 madeleines d\'exception', prix: C.mad10, pour: 'Client, salarié' },
  { n: 5, nom: 'Brioche babka', contenu: 'Brioche roulée au chocolat, 5 à 6 parts', prix: C.babka, pour: 'Salarié, à partager chez soi' },
]
const IDEES_B = [
  { n: 6, nom: 'Duo cookies et madeleines', contenu: 'Coffret de 6 cookies + coffret de 10 madeleines', prix: C.cookies + C.mad10, pour: 'Client fidèle, partenaire' },
  { n: 7, nom: 'Coffret de 20 madeleines', contenu: '20 madeleines, pour 8 à 12 personnes', prix: C.mad20, pour: 'Équipe, client' },
  { n: 8, nom: 'Coffret de 24 macarons', contenu: '24 macarons, plusieurs parfums, pour 8 à 12 personnes', prix: C.macarons, pour: 'Client important, direction' },
]
const IDEES_C = [
  { n: 9, nom: 'Macarons et cookies', contenu: 'Coffret de 24 macarons + coffret de 6 cookies', prix: C.macarons + C.cookies, pour: 'Client important' },
  { n: 10, nom: 'Macarons et madeleines', contenu: 'Coffret de 24 macarons + coffret de 10 madeleines', prix: C.macarons + C.mad10, pour: 'Client stratégique' },
  { n: 11, nom: 'Macarons et grandes madeleines', contenu: 'Coffret de 24 macarons + coffret de 20 madeleines', prix: C.macarons + C.mad20, pour: 'Client stratégique, comité de direction' },
  { n: 12, nom: 'Coffret de 50 madeleines', contenu: '50 madeleines, pour 25 à 30 personnes', prix: C.mad50, pour: 'Équipe, service, site' },
]
const ligneIdee = (i) => `          <tr><td><strong>${i.n}. ${i.nom}</strong></td><td>${i.contenu}</td><td>${eur(i.prix, true)}</td><td>${i.pour}</td></tr>`
const tableIdees = (liste) => `
      <table>
        <thead>
          <tr><th>Idée</th><th>Contenu</th><th>Prix HT</th><th>Pour qui</th></tr>
        </thead>
        <tbody>
${liste.map(ligneIdee).join('\n')}
        </tbody>
      </table>`

const CADEAUX_EFFECTIFS = [10, 50, 100]
const CADEAUX_CALCUL = [
  { label: '1. Coffret de 6 cookies', prix: C.cookies },
  { label: '4. Coffret de 10 madeleines', prix: C.mad10 },
  { label: '6. Duo cookies et madeleines', prix: C.cookies + C.mad10 },
  { label: '7. Coffret de 20 madeleines', prix: C.mad20 },
  { label: '8. Coffret de 24 macarons', prix: C.macarons },
  { label: '10. Macarons et madeleines', prix: C.macarons + C.mad10 },
]
const totalCadeaux = (prix, n) => prix * n + LIV

const FAQ_CADEAUX = [
  {
    q: "Quel cadeau client entreprise pas cher offrir ?",
    a: `Le coffret de 6 cookies à 17,90 € HT, le brownie fondant à 19,90 € HT ou le coffret de 10 madeleines à 24,90 € HT. Pour 50 clients, cela représente ${eur(50 * C.cookies)}, ${eur(50 * C.brownie)} ou ${eur(50 * C.mad10)} HT, plus 29 € HT pour une livraison groupée sur un site.`,
  },
  {
    q: "Quelle idée de cadeau salarié de fin d'année à petit prix ?",
    a: `Un coffret de 6 cookies à 17,90 € HT ou un coffret de 10 madeleines à 24,90 € HT par salarié. Pour 100 salariés : ${eur(100 * C.cookies)} ou ${eur(100 * C.mad10)} HT, plus 29 € HT de livraison groupée. Pour un cadeau d'équipe, le coffret de 50 madeleines à 119,00 € HT revient à moins de 5 € HT par personne pour 25 à 30 personnes.`,
  },
  {
    q: "Combien coûtent 100 cadeaux gourmands d'entreprise ?",
    a: `De ${eur(totalCadeaux(C.cookies, 100))} HT pour 100 coffrets de 6 cookies (${eur(100 * C.cookies)} + 29 €) à ${eur(totalCadeaux(C.macarons, 100))} HT pour 100 coffrets de 24 macarons (${eur(100 * C.macarons)} + 29 €), avec une livraison groupée. Les madeleines par 10 donnent ${eur(totalCadeaux(C.mad10, 100))} HT. Un tarif préférentiel est possible sur devis pour les volumes.`,
  },
  {
    q: "Peut-on personnaliser les cadeaux et les livrer à plusieurs adresses ?",
    a: "Oui. Les coffrets se personnalisent : assortiment, nombre de pièces, rubans et emballages à vos couleurs, message, logo. La livraison se fait en une fois sur un site, pour une distribution en interne, ou à plusieurs adresses pour les clients et les télétravailleurs, sur devis. Demandez le devis dès que le volume est connu : réponse sous 24 h.",
  },
  {
    q: "Quel cadeau offrir à un client important ?",
    a: `Le coffret de 24 macarons à 64,00 € HT est la référence. Pour monter en gamme, associez-le à un coffret de 10 madeleines (${eur(C.macarons + C.mad10, true)} HT) ou de 20 madeleines (${eur(C.macarons + C.mad20, true)} HT). Les deux coffrets sont des produits du catalogue : le prix est la somme des deux, et leur présentation commune se précise au devis.`,
  },
  {
    q: "Comment tenir compte des régimes alimentaires dans un cadeau ?",
    a: "Toute la carte est halal et sans porc, sans alcool et sans supplément. Le banana bread à 21,90 € HT est sans gluten et les coques des macarons sont à base de poudre d'amandes. Les options végétarien, vegan et sans gluten se précisent à la commande ; l'atelier manipule de la farine, des traces sont possibles.",
  },
]

const CONTENU_CADEAUX = `
      <p>Un cadeau gourmand d'entreprise se trouve à tous les budgets : de <strong>17,90 € HT</strong> le coffret de 6 cookies à <strong>119,00 € HT</strong> le coffret de 50 madeleines. Voici 12 idées classées par budget (de 15 à 30 € HT, puis de 30 à 120 € HT par cadeau) et par destinataire, ce que chacune coûte pour 10, 50 et 100 cadeaux, et comment les livrer. Le guide des <a href="/journal/cadeaux-gourmands-entreprise-fin-annee-paris">cadeaux gourmands d'entreprise en fin d'année</a> traite la logistique ; celui-ci raisonne par budget.</p>

      <h2>Quel cadeau client d'entreprise pas cher offrir, de 15 à 30 € HT ?</h2>
      <p>Cinq cadeaux restent sous 30 € HT : le coffret de 6 cookies à 17,90 €, le brownie fondant à 19,90 €, le banana bread sans gluten à 21,90 €, le coffret de 10 madeleines et la brioche babka à 24,90 €. Les coffrets de cookies et de madeleines sont des coffrets cadeaux ; le brownie, le banana bread et la brioche babka sont des pâtisseries du catalogue, que l'on offre telles quelles, leur emballage cadeau se précisant au devis.</p>${tableIdees(IDEES_A)}
      <p>Les cookies se conservent jusqu'à 3 jours dans leur emballage d'origine : livrez-les au plus près de la remise. Le banana bread est sans gluten ; l'atelier manipule de la farine, des traces sont possibles. Les autres produits de cette gamme sont sur la page <a href="/creations/pauses-gourmandes">pauses gourmandes</a>.</p>

      <h2>Quelle idée de cadeau salarié de fin d'année à petit prix ?</h2>
      <p>Pour un cadeau salarié de fin d'année à petit prix, le coffret de 6 cookies à 17,90 € HT ou le coffret de 10 madeleines à 24,90 € HT donnent un cadeau individuel identique pour tous, de ${eur(100 * C.cookies)} à ${eur(100 * C.mad10)} HT pour 100 salariés, hors livraison. Parmi les 12 idées, les numéros 1 à 5 conviennent à un cadeau individuel.</p>
      <p>Un cadeau d'équipe coûte moins par tête : le coffret de 20 madeleines à 49,00 € HT sert 8 à 12 personnes, soit de ${eur(C.mad20 / 12, true)} à ${eur(C.mad20 / 8, true)} HT par personne, et le coffret de 50 à 119,00 € HT sert 25 à 30 personnes, soit de ${eur(C.mad50 / 30, true)} à ${eur(C.mad50 / 25, true)} HT. Pour un cadeau collectif offert à un collègue, le partage est une division : le coffret de 24 macarons à 64,00 € HT entre 16 collègues revient à 4,00 € chacun.</p>

      <h2>Quel cadeau pour un client important, de 30 à 120 € HT ?</h2>
      <p>Pour un client à soigner, le coffret de 24 macarons à 64,00 € HT est la valeur de référence ; on monte jusqu'à ${eur(C.macarons + C.mad20, true)} HT en l'associant à un coffret de 20 madeleines. Sept idées couvrent cette tranche, dont quatre associent deux coffrets du catalogue.</p>${tableIdees([...IDEES_B, ...IDEES_C])}
      <p>Les idées 6, 9, 10 et 11 associent deux coffrets : le prix est la somme des deux, et leur présentation dans un même emballage se précise au devis. Les macarons ont des coques à base de poudre d'amandes : signalez les allergies aux fruits à coque.</p>

      <h2>Combien coûtent 10, 50 ou 100 cadeaux gourmands ?</h2>
      <p>Pour 50 cadeaux, comptez ${eur(totalCadeaux(C.cookies, 50))} HT en coffrets de cookies, ${eur(totalCadeaux(C.mad10, 50))} HT en coffrets de 10 madeleines et ${eur(totalCadeaux(C.macarons, 50))} HT en coffrets de macarons, livraison groupée comprise. Le calcul est le prix du cadeau multiplié par le nombre de destinataires, plus 29 € HT.</p>
      <table>
        <thead>
          <tr><th>Idée</th><th>Prix HT</th><th>10 cadeaux</th><th>50 cadeaux</th><th>100 cadeaux</th></tr>
        </thead>
        <tbody>
${CADEAUX_CALCUL.map((c) => `          <tr><td><strong>${c.label}</strong></td><td>${eur(c.prix, true)}</td>${CADEAUX_EFFECTIFS.map((n) => `<td>${fr(c.prix * n)} + ${LIV} = <strong>${eur(totalCadeaux(c.prix, n))}</strong></td>`).join('')}</tr>`).join('\n')}
        </tbody>
      </table>
      <p>L'hypothèse est une seule livraison groupée de 29 € HT à Paris ou dans une commune proche, pour une distribution en interne. Des envois individuels à plusieurs adresses se chiffrent sur devis. Un tarif préférentiel est possible sur devis pour les volumes ou la récurrence.</p>

      <h2>Peut-on personnaliser les cadeaux et les livrer à plusieurs adresses ?</h2>
      <p>Oui : les coffrets se personnalisent (assortiment, nombre de pièces, rubans et emballages à vos couleurs, message, logo) et la livraison se fait en une fois sur un site, ou à plusieurs adresses, sur devis. Les possibilités et les exemples sont sur la page <a href="/creations/coffrets-cadeaux">coffrets cadeaux</a>.</p>

      <h2>Quand commander des cadeaux de fin d'année ?</h2>
      <p>Commandez en novembre pour une livraison en décembre : ce délai laisse le temps de valider les quantités, la personnalisation et les adresses. La commande reste possible jusqu'à la veille 14h, avec un préavis de 48 h recommandé à partir de 50 personnes ou pour plusieurs sites. Le devis revient sous 24 h, et le calendrier complet est dans le <a href="/journal/fetes-fin-annee-entreprise-guide-chiffre-2026">guide chiffré des fêtes de fin d'année</a>.</p>
      <p>Les occasions de cadeaux ne se limitent pas à décembre : le <a href="/journal/calendrier-office-manager-2026-2027-temps-forts">calendrier de l'office manager 2026-2027</a> place les coffrets de macarons et de madeleines sur d'autres temps forts.</p>

      <h2>Quelles erreurs éviter dans le choix d'un cadeau gourmand ?</h2>
      <ul>
        <li><strong>Un seul niveau de cadeau pour tous :</strong> deux niveaux suffisent, par exemple le coffret de 10 madeleines à 24,90 € pour tous et le coffret de macarons à 64,00 € pour les clients clés.</li>
        <li><strong>Mélanger les budgets clients et salariés :</strong> gardez deux lignes séparées pour comparer ce que chaque groupe reçoit.</li>
        <li><strong>Oublier la livraison :</strong> 29 € HT par livraison à Paris et communes proches, autres zones sur devis.</li>
        <li><strong>Livrer trop tôt :</strong> les cookies se conservent 3 jours dans leur emballage d'origine.</li>
        <li><strong>Ignorer les régimes :</strong> toute la carte est halal et sans porc ; les options végétarien, vegan et sans gluten se précisent à la commande. Voir <a href="/traiteur-halal">traiteur halal pour l'entreprise</a>.</li>
        <li><strong>Demander la personnalisation au dernier moment :</strong> envoyez le volume et les adresses dès qu'ils sont connus.</li>
      </ul>

      <h2>Questions fréquentes sur les cadeaux gourmands pour clients et salariés</h2>${faqHtml(FAQ_CADEAUX)}

      <p>Pour un devis calé sur votre nombre de destinataires, votre budget par cadeau et vos adresses, <a href="/devis">demandez votre devis</a> : réponse sous 24 h, facturation entreprise avec TVA. Tarifs L'Écrin Traiteur, octobre 2026.</p>
    `

/* ─────────────────────────────────────────────────────────────────────────
   3. Séminaire : programme heure par heure et restauration
   Journée type : Classique 8 + pause 6 + plateau 29,90 + pause 6 = 49,90 €/pers, 2 livraisons (58 €).
   20 pers : 1 056 ; 50 : 2 553 ; 100 : 5 048 (budget-seminaire-entreprise-par-personne-paris).
   Menu à partager 37,50 (Le Méditerranéen) ; cocktail de clôture L'Invitation 29,90 + 3e livraison.
   ───────────────────────────────────────────────────────────────────────── */
const SEM_PDJ = 8
const SEM_PAUSE = 6
const SEM_PLATEAU = 29.9
const SEM_PARTAGE = 37.5
const SEM_COCKTAIL = 29.9
const SEM_JOURNEE = SEM_PDJ + 2 * SEM_PAUSE + SEM_PLATEAU // 49,90
const semTotal = (n, parPers, nbLiv) => n * parPers + nbLiv * LIV

const FAQ_SEMINAIRE_F = [
  {
    q: "Quel est le programme d'une journée de séminaire d'entreprise ?",
    a: `Accueil à 8h30, ouverture à 9h15, pause à 10h45, déjeuner à 12h30, séance à 13h45, pause à 15h30, clôture à 17h15. Soit quatre séances de 1h30 à 1h45, deux pauses de 15 minutes et un déjeuner de 1h15. La restauration de cette journée type coûte ${eur(SEM_JOURNEE, true)} HT par personne.`,
  },
  {
    q: "Combien de pauses prévoir dans une journée de séminaire ?",
    a: "Deux pauses de 15 à 20 minutes, à 10h45 et à 15h30, soit une pause toutes les 1h30 à 2 heures. Comptez 1,5 à 2 pièces sucrées par personne et par pause, à partir de 6 € HT par personne. Retirer une pause fait économiser 6 € HT par personne, soit 300 € HT pour 50 personnes.",
  },
  {
    q: "Quel repas choisir pour un séminaire d'entreprise ?",
    a: "Le plateau repas, de 28,90 à 30,90 € HT par personne, se mange en salle sans service et garde le rythme du programme. Le menu à partager, de 34,90 à 37,90 €, convient à une journée de cohésion. Le cocktail déjeunatoire La Réception, à 40,90 €, ajoute un temps debout de 1h30 à 2 heures.",
  },
  {
    q: "Combien coûte la restauration d'un séminaire de 30 personnes ?",
    a: `${eur(semTotal(30, SEM_JOURNEE, 2))} HT pour la journée type : 30 × 49,90 € = ${eur(30 * SEM_JOURNEE)}, plus 2 livraisons de 29 €. Avec un menu à partager à 37,50 € au lieu du plateau, ${eur(semTotal(30, SEM_JOURNEE - SEM_PLATEAU + SEM_PARTAGE, 2))} HT. Avec un cocktail de clôture L'Invitation et une 3e livraison, ${eur(semTotal(30, SEM_JOURNEE + SEM_COCKTAIL, 3))} HT.`,
  },
  {
    q: "Comment gérer les régimes alimentaires pendant un séminaire ?",
    a: "Toute la carte est halal et sans porc par défaut, sans alcool et sans supplément. Les options végétarien, vegan et sans gluten se précisent à la demande de devis, avec le nombre de convives par régime ; l'atelier manipule de la farine, des traces sont possibles. Relevez les régimes une semaine avant la date.",
  },
  {
    q: "Combien de livraisons prévoir pour une journée de séminaire ?",
    a: "Deux livraisons de 29 € HT, soit 58 € HT : une le matin avec le petit-déjeuner et la pause du matin, une à midi avec le déjeuner et la pause de l'après-midi. Un cocktail de clôture ajoute une troisième livraison. La livraison n'inclut ni l'installation ni la reprise du matériel, à 19 € HT pour la vaisselle réutilisable.",
  },
]

const CONTENU_SEMINAIRE_F = `
      <p>Un séminaire d'entreprise d'une journée tient entre <strong>8h30 et 17h30</strong> : un accueil, quatre séances, deux pauses de 15 minutes, un déjeuner et une clôture. La restauration de cette journée type coûte <strong>${eur(SEM_JOURNEE, true)} HT par personne</strong>, soit ${eur(semTotal(20, SEM_JOURNEE, 2))} HT pour 20 personnes avec deux livraisons. Voici le programme heure par heure, le rythme des pauses, le choix du déjeuner et les erreurs à éviter. Le tableau de budget complet est dans le <a href="/journal/budget-seminaire-entreprise-par-personne-paris">budget d'un séminaire d'entreprise par personne</a>.</p>

      <h2>Quel est le programme d'une journée de séminaire, heure par heure ?</h2>
      <p>Une journée de séminaire tient entre 8h30 et 17h30 avec quatre séances de 1h30 à 1h45, deux pauses de 15 minutes et un déjeuner de 1h15. La restauration suit ces repères : accueil à 8h30, pause à 10h45, déjeuner à 12h30, pause à 15h30 et clôture à 17h15.</p>
      <table>
        <thead>
          <tr><th>Heure</th><th>Moment</th><th>Durée</th><th>Restauration</th><th>Prix HT par personne</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>8h30</strong></td><td>Accueil café</td><td>45 min</td><td>Petit-déjeuner Classique : viennoiseries, jus, café, fruits</td><td>8,00 €</td></tr>
          <tr><td><strong>9h15</strong></td><td>Ouverture et séance 1</td><td>1h30</td><td>Aucune</td><td>0 €</td></tr>
          <tr><td><strong>10h45</strong></td><td>Pause du matin</td><td>15 min</td><td>Pause gourmande</td><td>6,00 €</td></tr>
          <tr><td><strong>11h00</strong></td><td>Séance 2</td><td>1h30</td><td>Aucune</td><td>0 €</td></tr>
          <tr><td><strong>12h30</strong></td><td>Déjeuner</td><td>1h15</td><td>Plateau repas</td><td>29,90 €</td></tr>
          <tr><td><strong>13h45</strong></td><td>Séance 3</td><td>1h45</td><td>Aucune</td><td>0 €</td></tr>
          <tr><td><strong>15h30</strong></td><td>Pause de l'après-midi</td><td>15 min</td><td>Pause gourmande</td><td>6,00 €</td></tr>
          <tr><td><strong>15h45</strong></td><td>Séance 4</td><td>1h30</td><td>Aucune</td><td>0 €</td></tr>
          <tr><td><strong>17h15</strong></td><td>Conclusions et clôture</td><td>15 min</td><td>Option : cocktail L'Invitation, 8 pièces</td><td>29,90 € en option</td></tr>
          <tr><td><strong>Journée</strong></td><td></td><td>9 h</td><td>Petit-déjeuner, 2 pauses, déjeuner</td><td><strong>${eur(SEM_JOURNEE, true)}</strong></td></tr>
        </tbody>
      </table>
      <p>Pour l'organisation générale d'un séminaire (accueil, formats résidentiels, lieux), voir le guide du <a href="/journal/traiteur-seminaire-entreprise-paris">traiteur séminaire d'entreprise à Paris</a>.</p>

      <h2>Quel rythme de pauses pour tenir une journée entière ?</h2>
      <p>Prévoyez une pause toutes les 1h30 à 2 heures, soit deux pauses de 15 à 20 minutes dans la journée, et comptez 1,5 à 2 pièces sucrées par personne et par pause. Les pauses figurent à une heure fixe dans le programme, jamais « quand la séance se termine ».</p>
      <p>Côté boissons, comptez 1,5 tasse par personne sur une matinée de 3 heures : un thermos de 1 L sert 6 tasses, soit 5 thermos à 19,50 € HT pour 20 personnes (97,50 € HT). Supprimer une pause par réflexe économise 6 € HT par personne, soit 120 € HT pour 20 personnes : à réserver à un programme court.</p>

      <h2>Quelle idée de repas pour un séminaire : plateau repas, menu à partager ou cocktail ?</h2>
      <p>Le plateau repas, de 28,90 à 30,90 € HT par personne, est le choix qui garde le rythme du programme : il se mange en salle sans service. Le menu à partager et le cocktail déjeunatoire conviennent aux journées de cohésion, avec un écart de budget chiffré ci-dessous.</p>
      <table>
        <thead>
          <tr><th>Format</th><th>Prix HT par personne</th><th>À choisir si</th><th>Écart avec le plateau à 29,90 €, 50 personnes</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Plateau repas</strong></td><td>28,90 à 30,90 €</td><td>Le programme est dense, la reprise à 13h45 est ferme</td><td>Référence</td></tr>
          <tr><td><strong>Menu à partager</strong></td><td>34,90 à 37,90 €</td><td>La journée sert la cohésion, les tables sont partagées</td><td>+ ${eur(50 * (34.9 - SEM_PLATEAU))} à + ${eur(50 * (37.9 - SEM_PLATEAU))}</td></tr>
          <tr><td><strong>Cocktail déjeunatoire La Réception</strong></td><td>40,90 €</td><td>Le déjeuner est un temps d'échange debout de 1h30 à 2 heures</td><td>+ ${eur(50 * (40.9 - SEM_PLATEAU))}</td></tr>
          <tr><td><strong>Atelier culinaire sur place</strong></td><td>Sur devis, plancher 600 € HT</td><td>Le groupe compte 20 personnes ou plus et la journée a un temps fort</td><td>Au moins 12 € HT par personne à 50</td></tr>
        </tbody>
      </table>
      <p>Les menus sont détaillés sur la page <a href="/creations/plateaux-repas">plateaux repas</a>. Le plateau est facturé 28,90 € (végétarien), 29,90 € (poulet) ou 30,90 € (saumon).</p>

      <h2>Quel budget pour un séminaire de 30 personnes, exemple chiffré ?</h2>
      <p>Pour 30 personnes, la journée type coûte <strong>${eur(semTotal(30, SEM_JOURNEE, 2))} HT</strong> : 30 × 49,90 € = ${eur(30 * SEM_JOURNEE)}, plus 2 livraisons de 29 € HT. Les trois variantes ci-dessous partent de la même journée et reprennent les prix du guide du budget par personne.</p>
      <table>
        <thead>
          <tr><th>Variante</th><th>Produits par personne</th><th>Livraisons</th><th>Calcul pour 30 personnes</th><th>Total HT</th><th>Par personne</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Journée type</strong></td><td>${eur(SEM_JOURNEE, true)}</td><td>2 (58 €)</td><td>30 × ${fr(SEM_JOURNEE, true)} + 58</td><td><strong>${eur(semTotal(30, SEM_JOURNEE, 2))}</strong></td><td>${eur(semTotal(30, SEM_JOURNEE, 2) / 30, true)}</td></tr>
          <tr><td><strong>Menu à partager à 37,50 €</strong></td><td>${eur(SEM_JOURNEE - SEM_PLATEAU + SEM_PARTAGE, true)}</td><td>2 (58 €)</td><td>30 × ${fr(SEM_JOURNEE - SEM_PLATEAU + SEM_PARTAGE, true)} + 58</td><td><strong>${eur(semTotal(30, SEM_JOURNEE - SEM_PLATEAU + SEM_PARTAGE, 2))}</strong></td><td>${eur(semTotal(30, SEM_JOURNEE - SEM_PLATEAU + SEM_PARTAGE, 2) / 30, true)}</td></tr>
          <tr><td><strong>Avec cocktail de clôture</strong></td><td>${eur(SEM_JOURNEE + SEM_COCKTAIL, true)}</td><td>3 (87 €)</td><td>30 × ${fr(SEM_JOURNEE + SEM_COCKTAIL, true)} + 87</td><td><strong>${eur(semTotal(30, SEM_JOURNEE + SEM_COCKTAIL, 3))}</strong></td><td>${eur(semTotal(30, SEM_JOURNEE + SEM_COCKTAIL, 3) / 30, true)}</td></tr>
        </tbody>
      </table>
      <p>Pour 20, 50 et 100 personnes : ${eur(semTotal(20, SEM_JOURNEE, 2))}, ${eur(semTotal(50, SEM_JOURNEE, 2))} et ${eur(semTotal(100, SEM_JOURNEE, 2))} HT pour la journée type. L'eau du déjeuner, la reprise du matériel et les animations sont à ajouter.</p>

      <h2>Quelle logistique prévoir le jour du séminaire ?</h2>
      <p>Prévoyez deux livraisons de 29 € HT, soit 58 € HT : une à 8h00 avec le petit-déjeuner et la pause du matin, une à 12h00 avec les plateaux repas et la pause de l'après-midi. Si vous voulez la pause de 15h30 livrée juste avant, comptez une troisième livraison.</p>
      <ul>
        <li><strong>Lieu :</strong> une table pour l'accueil, une table pour les pauses, un point d'eau ou des bouteilles, hors de la salle de séance.</li>
        <li><strong>Contact :</strong> une personne présente à chaque livraison, avec son mobile.</li>
        <li><strong>Matériel :</strong> la livraison n'inclut ni l'installation ni la reprise. La récupération de vaisselle réutilisable coûte 19 € HT en plus de la livraison.</li>
        <li><strong>Délais :</strong> commande jusqu'à la veille 14h, préavis de 48 h recommandé à partir de 50 personnes. Le détail est dans la <a href="/journal/checklist-office-manager-commander-traiteur">checklist de l'office manager</a>.</li>
      </ul>

      <h2>Un exemple réel : 3 jours de séminaire dans le Val-d'Oise</h2>
      <p>En juin 2026, un organisateur de séminaires nous a confié trois jours à Ermont (95). Chaque matin à 7h00 : 250 à 350 mini-viennoiseries, 5 percolateurs de café et 1 de thé. Chaque midi à 11h30 : 59 à 71 plateaux repas en cinq menus, un végétarien, deux viandes et deux poissons. Soit 6 livraisons en 3 jours et 193 plateaux repas. Le récit complet est dans nos <a href="/univers/cas-clients">cas clients</a>.</p>

      <h2>Comment gérer les régimes alimentaires pendant un séminaire ?</h2>
      <p>Toute la carte est halal et sans porc par défaut, sans alcool et sans supplément : personne n'a à se signaler. Les options végétarien, vegan et sans gluten se précisent à la demande de devis, avec le nombre de convives par régime ; l'atelier manipule de la farine, des traces sont possibles. Voir la page <a href="/traiteur-halal">traiteur halal pour l'entreprise</a>.</p>

      <h2>Quelles erreurs fréquentes éviter dans un séminaire d'entreprise ?</h2>
      <ul>
        <li><strong>Laisser le déjeuner sans durée :</strong> fixez 1h15 pour le plateau repas et affichez l'heure de reprise.</li>
        <li><strong>Livrer le petit-déjeuner à l'heure de début :</strong> demandez la livraison au moins 30 minutes avant l'arrivée des participants.</li>
        <li><strong>Supprimer la pause de l'après-midi par réflexe :</strong> elle ne coûte que 6 € HT par personne.</li>
        <li><strong>Compter les inscrits plutôt que les présents :</strong> commandez sur la présence confirmée 48 h avant.</li>
        <li><strong>Oublier l'eau :</strong> elle n'est pas dans le prix du plateau repas.</li>
        <li><strong>Découvrir les régimes le jour même :</strong> relevez-les une semaine avant, avec un nombre par régime.</li>
        <li><strong>Oublier la deuxième livraison dans le budget :</strong> 29 € HT par livraison, deux pour une journée.</li>
      </ul>

      <h2>Questions fréquentes sur l'organisation d'un séminaire d'entreprise</h2>${faqHtml(FAQ_SEMINAIRE_F)}

      <p>Pour une restauration calée sur votre programme, votre effectif et votre lieu, <a href="/devis">demandez votre devis</a> avec l'heure de chaque temps de la journée : réponse sous 24 h, livraison dès 6h30 à Paris et en Île-de-France. Tarifs L'Écrin Traiteur, octobre 2026.</p>
    `

export const OFFICE_F = [
  {
    slug: 'organiser-inauguration-entreprise-deroule-budget-traiteur',
    titre: "Organiser une inauguration d'entreprise : déroulé, budget traiteur et invités",
    metaTitle: "Organiser une inauguration d'entreprise : déroulé, budget",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    isoModified: '2026-10-13',
    extrait: "Inauguration d'entreprise : déroulé heure par heure, formats, budget traiteur pour 40, 80 et 150 invités, rétroplanning de 4 semaines. Octobre 2026.",
    img: '/img-reception.webp',
    contenu: CONTENU_INAUG,
    relatedProducts: ['macarons', 'brochettes-fruits', 'madeleines-20'],
    faq: FAQ_INAUG,
    howto: {
      name: "Organiser une inauguration d'entreprise en 4 semaines",
      description: "Les huit étapes, de J-28 au jour J, pour organiser une inauguration d'entreprise : cadrage et devis, invitations, formule, plan des buffets, régimes, effectif final et livraison.",
      totalTime: 'P28D',
      steps: INAUG_STEPS,
    },
  },
  {
    slug: 'cadeaux-gourmands-clients-salaries-idees-par-budget',
    titre: "Cadeaux gourmands pour clients et salariés : 12 idées par budget, de 15 à 120 €",
    metaTitle: "Cadeaux gourmands clients et salariés : 12 idées",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    isoModified: '2026-10-13',
    extrait: "12 idées de cadeaux gourmands pour clients et salariés, de 17,90 à 119,00 € HT, avec le budget calculé pour 10, 50 et 100 cadeaux. Tarifs octobre 2026.",
    img: '/hero-coffrets-cadeaux.webp',
    contenu: CONTENU_CADEAUX,
    relatedProducts: ['madeleines-10', 'macarons', 'cookies'],
    faq: FAQ_CADEAUX,
  },
  {
    slug: 'organiser-seminaire-entreprise-programme-journee-restauration',
    titre: "Organiser un séminaire d'entreprise : le programme d'une journée type, heure par heure, avec la restauration",
    metaTitle: "Organiser un séminaire d'entreprise : programme et repas",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    isoModified: '2026-10-13',
    extrait: "Programme d'un séminaire d'entreprise de 8h30 à 17h30 : pauses, déjeuner, régimes, logistique et budget calculé pour 30 personnes. Tarifs octobre 2026.",
    img: '/hero-a-partager.webp',
    contenu: CONTENU_SEMINAIRE_F,
    relatedProducts: ['viennoiseries-melangees', 'madeleines-20', 'panier-fruits'],
    faq: FAQ_SEMINAIRE_F,
  },
]
