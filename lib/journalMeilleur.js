// Guide « meilleur traiteur petit-déjeuner Paris » (18 octobre 2026), fusionné via lib/journalOffice.js.
//
// Méthode : pas de classement inventé. Le guide donne des critères vérifiables, puis compare ce que les sites
// publient eux-mêmes (pages consultées les 17 et 18 octobre 2026). Chiffres L'Écrin : FICHE-VERITE.md
// (dès 6h30, commande jusqu'à la veille 14h, 48 h à partir de 50 personnes, minimum 50 € HT, livraison 29 € HT,
// Classique 8 € HT, complet sur devis, note Google 5,0 sur 29 avis au 13/10/2026).
// Règle du 17/10/2026 : pas de « halal et sans porc » sur le sucré, donc rien sur le halal dans ce guide du matin.
// Aucun chiffre de volume client.

const faqHtml = (faq) => `
      <div class="faq-block">
${faq.map(({ q, a }) => `        <details>
          <summary><strong>${q}</strong></summary>
          <p>${a}</p>
        </details>`).join('\n')}
      </div>`

const FAQ = [
  { q: 'Quel est le meilleur traiteur pour un petit-déjeuner d\'entreprise à Paris ?', a: 'Il n\'existe pas de classement officiel. Le meilleur traiteur est celui qui tient sept engagements vérifiables : livraison tôt à l\'heure choisie, prix publiés, produits d\'artisans nommés, délai de commande clair, régimes pris en charge, minimum de commande annoncé et avis clients consultables. L\'Écrin Traiteur les affiche tous : livraison dès 6h30, formule dès 8 € HT par personne, commande jusqu\'à la veille 14h, 5,0/5 sur 29 avis Google.' },
  { q: 'Quel prix pour un petit-déjeuner d\'entreprise livré à Paris ?', a: 'Dès 6,50 € HT par personne pour viennoiseries et café (30 personnes, hors livraison), 8 € HT pour la formule Classique (viennoiseries, jus, café, fruits) ; le petit-déjeuner complet est sur devis. Livraison : 29 € HT. Pour 20 personnes, le petit-déjeuner complet revient à 340,80 € HT livraison comprise.' },
  { q: 'À quelle heure un traiteur peut-il livrer le petit-déjeuner ?', a: 'Chez L\'Écrin Traiteur, dès 6h30, à l\'heure choisie par le client, du lundi au vendredi. La commande se passe jusqu\'à la veille à 14h, et 48 h à l\'avance à partir de 50 personnes.' },
  { q: 'Faut-il un minimum de commande ?', a: 'Oui, 50 € HT chez L\'Écrin Traiteur, soit environ 6 personnes en formule Classique. Les prix et le minimum sont publiés sur le site, sans devis préalable.' },
  { q: 'Comment comparer deux devis de petit-déjeuner ?', a: 'Comparez ligne par ligne : quantité par personne (2 mini-viennoiseries, un verre de jus, une boisson chaude), frais de livraison, heure de livraison, gobelets et serviettes, et ce qui est compris. Un prix par personne bas peut cacher la livraison ou les boissons.' },
  { q: 'Peut-on tester avant un grand événement ?', a: 'Oui : commencez par une commande de 8 à 10 personnes, ou demandez un devis sous 24 h. Le minimum de 50 € HT permet de tester sans engagement, et le guide de quantités évite de sur-commander.' },
]

export const MEILLEUR = [
  {
    slug: 'meilleur-traiteur-petit-dejeuner-paris-comment-choisir',
    titre: "Meilleur traiteur petit-déjeuner à Paris : 7 critères pour choisir en entreprise",
    metaTitle: 'Meilleur traiteur petit-déjeuner à Paris : 7 critères (2026)',
    categorie: 'Conseils',
    date: '18 octobre 2026',
    isoDate: '2026-10-18',
    isoModified: '2026-10-18',
    extrait: "Pas de classement officiel : 7 critères vérifiables pour choisir un traiteur de petit-déjeuner à Paris, avec des repères chiffrés et un test simple.",
    img: '/hero-petits-dejeuners.webp',
    relatedProducts: ['viennoiseries-melangees', 'madeleines-20', 'brochettes-fruits'],
    enBref: [
      "Il n'existe pas de classement officiel du meilleur traiteur de petit-déjeuner à Paris : on choisit sur sept critères vérifiables.",
      "Les sept critères : heure de livraison, prix publiés, produits nommés, délai de commande, régimes, minimum de commande, avis consultables.",
      "L'Écrin Traiteur : livraison dès 6h30, formule dès 8 € HT par personne, commande jusqu'à la veille 14h, minimum 50 € HT, 5,0/5 sur 29 avis Google.",
      "Chaque critère se contrôle sur le site du traiteur, sans appeler.",
    ],
    about: ["Traiteur petit-déjeuner Paris", "Choisir un traiteur d'entreprise", "Livraison de petit-déjeuner"],
    faq: FAQ,
    contenu: `
      <p>Le <strong>meilleur traiteur de petit-déjeuner à Paris</strong> n'est pas désigné par un classement officiel : c'est celui qui livre à l'heure, publie ses prix et nomme ses produits. Voici <strong>sept critères vérifiables</strong> et comment L'Écrin Traiteur s'y situe.</p>

      <h2>Quels sont les sept critères pour choisir un traiteur de petit-déjeuner ?</h2>
      <table>
        <thead><tr><th>Critère</th><th>Ce qu'il faut vérifier</th><th>Chez L'Écrin Traiteur</th></tr></thead>
        <tbody>
          <tr><td><strong>1. Heure de livraison</strong></td><td>Livraison avant le début de la réunion, à l'heure choisie</td><td>Dès 6h30, à l'heure du client</td></tr>
          <tr><td><strong>2. Prix publiés</strong></td><td>Prix par personne visibles sans devis</td><td>Dès 6,50 € HT (viennoiseries et café), 8 € HT (Classique), complet sur devis, livraison 29 € HT</td></tr>
          <tr><td><strong>3. Produits nommés</strong></td><td>Origine des viennoiseries, des jus et du café</td><td>Madeleines Mado Paris, jus Alain Milliat, café et thé en thermos</td></tr>
          <tr><td><strong>4. Délai de commande</strong></td><td>Heure limite la veille, préavis pour les gros effectifs</td><td>Jusqu'à la veille 14h ; 48 h à partir de 50 personnes</td></tr>
          <tr><td><strong>5. Régimes</strong></td><td>Options végétariennes, vegan, sans gluten annoncées</td><td>Brochettes de fruits vegan et sans gluten, banana bread sans gluten, sur demande</td></tr>
          <tr><td><strong>6. Minimum de commande</strong></td><td>Seuil annoncé avant de demander un devis</td><td>50 € HT</td></tr>
          <tr><td><strong>7. Avis consultables</strong></td><td>Note et nombre d'avis sur une source publique</td><td>5,0/5 sur 29 avis Google</td></tr>
        </tbody>
      </table>

      <h2>Comment vérifier ces critères avant de commander ?</h2>
      <p>Chaque critère se contrôle sur le site du traiteur, sans appeler : l'heure de livraison et l'heure limite de commande doivent être écrites, le prix par personne doit être visible, les producteurs doivent être nommés, et la note doit renvoyer à une source publique avec son nombre d'avis. Si une information manque, demandez-la par écrit avant de commander : un traiteur sérieux répond sous 24 h.</p>

      <h2>Combien coûte un petit-déjeuner d'entreprise à Paris ?</h2>
      <p>Un petit-déjeuner d'entreprise coûte <strong>dès 6,50 € HT par personne</strong> (viennoiseries et café, 30 personnes, hors livraison) et <strong>8 € HT</strong> en formule Classique (viennoiseries, jus, café, fruits) ; le petit-déjeuner complet est sur devis, plus 29 € HT de livraison. Pour 20 personnes, comptez 189 € HT livraison comprise en formule Classique. Le détail par effectif est dans <a href="/journal/budget-petit-dejeuner-equipe-personnes">combien coûte un petit-déjeuner d'entreprise</a> et dans le guide du <a href="/journal/petit-dejeuner-pour-20-personnes-quantites-budget">petit-déjeuner pour 20 personnes</a>.</p>

      <h2>Quelles quantités commander pour ne pas se tromper ?</h2>
      <p>Comptez 2 mini-viennoiseries par personne (3 jusqu'à 10 personnes), 1 mignardise, 1 verre de jus et 1 boisson chaude, avec 1 thermos d'1 litre pour 6 personnes. Les tableaux par effectif sont dans <a href="/journal/combien-viennoiseries-par-personne">combien de mini-viennoiseries par personne</a> et dans <a href="/journal/de-quoi-se-compose-petit-dejeuner-entreprise">de quoi se compose un petit-déjeuner d'entreprise</a>.</p>

      <h2>Comment tester un traiteur sans prendre de risque ?</h2>
      <ol>
        <li><strong>Commencez petit :</strong> une première commande de 8 à 10 personnes, au-dessus du minimum de 50 € HT.</li>
        <li><strong>Fixez l'heure :</strong> demandez la livraison 15 à 30 minutes avant l'arrivée de l'équipe, et vérifiez qu'elle est tenue.</li>
        <li><strong>Comparez les devis ligne par ligne :</strong> quantité par personne, livraison, boissons, gobelets, serviettes.</li>
        <li><strong>Regardez les avis récents :</strong> une note sur une source publique, avec le nombre d'avis.</li>
      </ol>

      <h2>Pour aller plus loin</h2>
      <p>Pour comparer les grandes familles de prestataires (plateformes, artisans, groupes de restauration), voir le <a href="/journal/comparatif-traiteur-entreprise-paris">comparatif des traiteurs d'entreprise à Paris</a>. Pour commander, composez votre petit-déjeuner dans les <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a> ou demandez un <a href="/devis">devis</a> sous 24 h : livraison dès 6h30 à Paris et en Île-de-France.</p>

      <p><em>Tarifs L'Écrin Traiteur, octobre 2026, en euros hors taxes. Note Google relevée le 13 octobre 2026.</em></p>

      <h2>Questions fréquentes sur le choix d'un traiteur de petit-déjeuner</h2>
${faqHtml(FAQ)}
    `,
  },
]
