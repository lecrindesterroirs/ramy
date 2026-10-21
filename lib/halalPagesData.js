// Sous-pages de /traiteur-halal (route /traiteur-halal/[slug])
//
// Créées suite à l'audit GSC du 11/10/2026 : « traiteur halal île de france » (78 imp.),
// « traiteur halal paris » (54), « plateau repas halal » (4), « buffet halal entreprise » (2)
// n'avaient qu'une seule page pour répondre, /traiteur-halal. Déclinaison du modèle
// lib/pdjVillesData.js, avec les vraies données du site.
//
// Sources des chiffres : fiche de faits validés (13 octobre 2026), app/creations/cocktails/data.js,
// app/creations/plateaux-repas/data.js, app/creations/lunch-box/data.js, app/creations/a-partager/data.js.
// Offre « halal-friendly » : tout est halal et sans porc, sans alcool, sans supplément ;
// AUCUNE certification halal revendiquée. Ne rien ajouter sur la gélatine, l'abattage ou les additifs.
//
// Champs : slug, name, h1, eyebrow, breadcrumbLabel, serviceName, serviceType, areaServed,
// metaTitle (≤ 60), metaDescription (≤ 155), heroDescription, heroImg, heroAlt,
// reponseQ + reponse [paragraphes], formulesEyebrow, formulesTitle, formules [{ nom, prix, desc }],
// selection [{ id, note }] (ids de app/creations/plateaux-repas/data.js, optionnel),
// seoArticle, closingEyebrow, closingTitle, closingBody, ctaQuestion, faq [{ name, answer }],
// liensUtiles [{ href, label }].

export const HALAL_PAGES = [
  // ───────────────────────────────────────────────────────────────────────────
  // 1. Traiteur halal à Paris (requêtes : traiteur halal paris, traiteur paris halal,
  //    traiteur hallal paris, traiteur halal île de france / idf)
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'paris',
    name: 'Traiteur halal à Paris',
    h1: 'Traiteur halal à Paris',
    eyebrow: "Traiteur d'entreprise · Paris & Île-de-France",
    breadcrumbLabel: 'Traiteur halal à Paris',
    serviceName: "Traiteur halal d'entreprise à Paris",
    serviceType: "Traiteur d'entreprise halal et sans porc",
    areaServed: [
      { '@type': 'City', name: 'Paris' },
      { '@type': 'State', name: 'Île-de-France' },
    ],
    metaTitle: 'Traiteur halal à Paris : tout sans porc, livré dès 6h30',
    metaDescription: "Traiteur d'entreprise halal à Paris et en Île-de-France : tout sans porc ni alcool, livré dès 6h30. Petit-déjeuner dès 8 € HT, devis sous 24h.",
    heroDescription: "Toute la carte est halal et sans porc, sans alcool, sans supplément : petit-déjeuner, plateaux repas, cocktail. Livré dans vos bureaux à Paris et en Île-de-France, du lundi au vendredi dès 6h30.",
    heroImg: '/hero-bg2.webp',
    heroAlt: "Traiteur halal d'entreprise à Paris, L'Écrin Traiteur",
    reponseQ: 'Votre traiteur à Paris est-il halal ?',
    reponse: [
      "Oui. Chez L'Écrin Traiteur, tout est halal et sans porc par défaut, sans alcool dans les recettes et sans supplément : vous n'avez rien à demander. Aucune certification halal n'est revendiquée, et nous le disons clairement.",
      "Prix d'entrée, par personne et hors taxes : petit-déjeuner dès 8 € HT, plateau repas dès 28,90 € HT, cocktail dès 29,90 € HT. La livraison est à 29 € HT à Paris, le minimum de commande est de 50 € HT.",
    ],
    formulesEyebrow: 'Ce que vous commandez',
    formulesTitle: 'Quatre prestations, une même carte halal',
    formules: [
      { nom: 'Petit-déjeuner', prix: 'dès 8 € HT/pers.', desc: 'Viennoiseries, jus, café et fruits. Formule complète sur devis.' },
      { nom: 'Pause gourmande', prix: 'dès 6 € HT/pers.', desc: 'Madeleines, cookies, cakes et fruits pour la pause de l\'après-midi.' },
      { nom: 'Plateau repas', prix: '28,90 à 30,90 € HT/pers.', desc: 'Entrée, plat et dessert individuels : végétarien, poulet ou saumon.' },
      { nom: 'Cocktail et buffet', prix: '29,90 à 51,90 € HT/pers.', desc: '8, 12 ou 16 pièces salées et sucrées par personne, livrées dressées.' },
    ],
    seoArticle: `
      <h2>Que commander chez un traiteur halal à Paris ?</h2>
      <p>Quatre prestations couvrent la journée d'une équipe, toutes halal et sans porc. Le tableau donne le prix d'entrée de chacune, par personne et hors taxes.</p>
      <div class="tbl-wrap"><table>
        <thead><tr><th>Prestation</th><th>Ce que vous recevez</th><th>Prix HT</th></tr></thead>
        <tbody>
          <tr><td><strong><a href="/creations/petits-dejeuners-et-pauses">Petit-déjeuner</a></strong></td><td>Viennoiseries, jus, café et fruits</td><td>Dès 8 €, formule complète sur devis</td></tr>
          <tr><td><strong><a href="/creations/pauses-gourmandes">Pause gourmande</a></strong></td><td>Madeleines, cookies, cakes, fruits</td><td>Dès 6 €</td></tr>
          <tr><td><strong><a href="/traiteur-halal/plateaux-repas">Plateau repas</a></strong></td><td>Entrée, plat et dessert individuels</td><td>De 28,90 à 30,90 €</td></tr>
          <tr><td><strong><a href="/traiteur-halal/buffet-entreprise">Cocktail et buffet</a></strong></td><td>8, 12 ou 16 pièces salées et sucrées</td><td>De 29,90 à 51,90 €</td></tr>
        </tbody>
      </table></div>
      <p>La livraison est facturée 29 € HT par commande à Paris et dans les communes proches, avec un minimum de commande de 50 € HT.</p>

      <h2>Que garantit un traiteur halal sans certification ?</h2>
      <p>Nous garantissons trois choses sur toute la carte : aucun porc, aucun alcool dans les recettes, aucun supplément pour cela. Nous ne revendiquons pas de certification halal délivrée par un organisme extérieur, et nous préférons l'écrire plutôt que d'apposer une étiquette. Pour les viandes, l'origine peut vous être précisée au moment du devis. Le détail est dans notre article <a href="/journal/traiteur-halal-entreprise-paris">traiteur halal-friendly à Paris</a>, et la différence avec un traiteur certifié dans le guide <a href="/journal/evenement-entreprise-halal-guide">événement d'entreprise halal</a>.</p>

      <h2>Où livrons-nous à Paris et autour ?</h2>
      <p>Nous livrons à Paris et dans les Yvelines (78), les Hauts-de-Seine (92), la Seine-Saint-Denis (93), le Val-de-Marne (94) et le Val-d'Oise (95), du lundi au vendredi, dès 6h30. L'atelier est à Boulogne-Billancourt, au 63 bis rue de Sèvres. Voir <a href="/traiteur/paris">traiteur à Paris</a>, <a href="/traiteur/la-defense">La Défense</a>, <a href="/traiteur/boulogne-billancourt">Boulogne-Billancourt</a> ou <a href="/traiteur">toutes les villes servies</a>.</p>

      <h2>Les autres régimes sont-ils pris en compte ?</h2>
      <p>Oui. Les options végétarien, vegan et sans gluten se précisent à la commande, avec le nombre de personnes concernées. L'atelier manipule de la farine : des traces de gluten restent possibles. Pour répartir une commande entre plusieurs régimes, voir le guide <a href="/journal/menu-inclusif-entreprise-halal-vegetarien-sans-gluten">menu inclusif en entreprise</a>.</p>

      <h2>Comment commander ?</h2>
      <p>Commandez jusqu'à la veille 14h pour une livraison le lendemain. À partir de 50 personnes ou pour plusieurs sites, un préavis de 48 h est recommandé. Le devis arrive sous 24 h, la facture est une facture entreprise avec TVA, et le bon de commande est accepté. <a href="/devis">Demandez votre devis</a>.</p>
      <p>Tarifs L'Écrin Traiteur, octobre 2026. Retour à la page <a href="/traiteur-halal">traiteur halal d'entreprise</a>.</p>
    `,
    closingEyebrow: 'Traiteur halal à Paris',
    closingTitle: "Halal et sans porc,\npour toute l'équipe.",
    closingBody: "Une seule carte pour tous vos collègues, du petit-déjeuner au cocktail : vous n'avez aucun menu à part à demander.",
    ctaQuestion: 'Un devis halal pour votre équipe à Paris ?',
    faq: [
      {
        name: 'Halal ou hallal : quelle est la bonne orthographe ?',
        answer: "Les deux notent le même mot arabe, qui signifie « permis ». « Halal » est la forme courante en français ; « hallal », avec deux l, est une variante très répandue. Chez L'Écrin Traiteur, le sens est le même : tout est halal et sans porc, sans alcool dans les recettes, sans supplément.",
      },
      {
        name: 'Combien coûte un traiteur halal à Paris pour 20 personnes ?',
        answer: "Pour 20 personnes, comptez 189 € HT pour un petit-déjeuner Classique (160 € et 29 € de livraison), 627 € HT pour des plateaux repas au poulet à 29,90 € HT (598 € et 29 € de livraison), ou 627 € HT pour un cocktail L'Invitation de 8 pièces. Le minimum de commande est de 50 € HT.",
      },
      {
        name: 'Votre traiteur est-il certifié halal ?',
        answer: "Non. Nous ne revendiquons pas de certification halal délivrée par un organisme. Ce que nous garantissons : une carte entièrement halal et sans porc, sans alcool dans les recettes, sans supplément. Pour les viandes, nous pouvons vous renseigner sur l'origine au moment du devis, avant que vous ne validiez la commande.",
      },
      {
        name: 'Livrez-vous en Île-de-France, pas seulement à Paris ?',
        answer: "Oui : Paris, les Yvelines, les Hauts-de-Seine, la Seine-Saint-Denis, le Val-de-Marne et le Val-d'Oise, du lundi au vendredi, dès 6h30. La livraison est à 29 € HT à Paris et dans les communes proches, les autres zones sont chiffrées sur devis.",
      },
      {
        name: 'Peut-on commander halal et végétarien dans la même livraison ?',
        answer: "Oui. Tout est halal et sans porc, et les options végétarien, vegan et sans gluten se précisent à la commande avec le nombre de personnes concernées. Pour les plateaux repas, comptez environ un tiers de plateaux végétariens si vous ne connaissez pas les préférences. L'atelier manipule de la farine : des traces de gluten sont possibles.",
      },
    ],
    liensUtiles: [
      { href: '/journal/traiteur-halal-entreprise-paris', label: 'Traiteur halal-friendly à Paris : ce que nous garantissons' },
      { href: '/journal/evenement-entreprise-halal-guide', label: "Organiser un événement d'entreprise halal : le guide" },
      { href: '/journal/petit-dejeuner-halal-entreprise-paris', label: "Petit-déjeuner halal d'entreprise : quantités et budget" },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 2. Buffet halal d'entreprise (requêtes : buffet halal entreprise, traiteur buffet halal,
  //    halal buffet catering)
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'buffet-entreprise',
    name: "Buffet halal d'entreprise",
    h1: "Buffet halal d'entreprise",
    eyebrow: 'Cocktail et buffet · Paris & Île-de-France',
    breadcrumbLabel: "Buffet halal d'entreprise",
    serviceName: "Buffet et cocktail halal d'entreprise",
    serviceType: "Buffet et cocktail d'entreprise halal et sans porc",
    areaServed: [{ '@type': 'State', name: 'Île-de-France' }],
    metaTitle: "Buffet halal d'entreprise à Paris : dès 29,90 € HT/pers.",
    metaDescription: "Buffet et cocktail halal pour entreprise à Paris et en Île-de-France : sans porc ni alcool, 8, 12 ou 16 pièces dès 29,90 € HT par personne. Devis 24h.",
    heroDescription: "Cocktail debout ou menu à partager à table : tout est halal et sans porc, sans alcool, sans supplément. De 8 à 16 pièces par personne, livré dressé dès 6h30 à Paris et en Île-de-France.",
    heroImg: '/buffet-mediterraneen.webp',
    heroAlt: "Buffet halal d'entreprise à Paris, L'Écrin Traiteur",
    reponseQ: "Votre buffet d'entreprise est-il halal ?",
    reponse: [
      "Oui. Les trois formules cocktail et les menus à partager de L'Écrin Traiteur sont halal et sans porc, sans alcool dans les recettes, sans supplément. Le buffet est le même pour tous les invités : aucun menu séparé à prévoir. Aucune certification halal n'est revendiquée.",
      "Prix d'entrée : 29,90 € HT par personne pour 8 pièces, 34,90 € par personne pour un menu à partager. La livraison est à 29 € HT, le minimum de commande est de 50 € HT.",
    ],
    formulesEyebrow: 'Nos buffets halal',
    formulesTitle: 'Trois cocktails et un menu à partager',
    formules: [
      { nom: "L'Invitation", prix: '29,90 € HT/pers. · 8 pièces', desc: "Apéritif, afterwork, pot de départ. 6 pièces salées et 2 sucrées." },
      { nom: 'La Réception', prix: '40,90 € HT/pers. · 12 pièces', desc: 'Cocktail déjeunatoire, soirée partenaires, inauguration. 9 pièces salées et 3 sucrées.' },
      { nom: 'La Célébration', prix: '51,90 € HT/pers. · 16 pièces', desc: 'Cocktail dînatoire qui remplace le dîner. 12 pièces salées et 4 sucrées.' },
      { nom: 'Menu à partager', prix: 'dès 34,90 €/pers.', desc: 'Salades, planches et pièces à partager à table, calibrés pour 8 à 12 personnes : Le Jardin, Le Méditerranéen.' },
    ],
    seoArticle: `
      <h2>Buffet debout ou menu à partager : lequel choisir ?</h2>
      <p>Le cocktail se mange debout, pièce par pièce, pour une réception où l'on circule : 6 à 8 pièces par personne en apéritif, 12 à 14 en déjeunatoire, 16 à 18 en dînatoire, avec 10 % de marge. Le <a href="/creations/a-partager">menu à partager</a> se pose au centre de la table pour un repas assis de 8 à 12 personnes. Le guide <a href="/journal/buffet-a-partager-ou-cocktail-entreprise-paris">buffet à partager ou cocktail</a> détaille le choix.</p>

      <h2>Combien coûte un buffet halal pour 20, 50 ou 100 personnes ?</h2>
      <p>Le prix par personne est fixe : 29,90 € HT pour 8 pièces, 40,90 € HT pour 12, 51,90 € HT pour 16. Les totaux ci-dessous s'entendent hors livraison, facturée 29 € HT par commande.</p>
      <div class="tbl-wrap"><table>
        <thead><tr><th>Effectif</th><th>L'Invitation (8 pièces)</th><th>La Réception (12 pièces)</th><th>La Célébration (16 pièces)</th></tr></thead>
        <tbody>
          <tr><td><strong>20 personnes</strong></td><td>598 € HT</td><td>818 € HT</td><td>1 038 € HT</td></tr>
          <tr><td><strong>50 personnes</strong></td><td>1 495 € HT</td><td>2 045 € HT</td><td>2 595 € HT</td></tr>
          <tr><td><strong>100 personnes</strong></td><td>2 990 € HT</td><td>4 090 € HT</td><td>5 190 € HT</td></tr>
        </tbody>
      </table></div>

      <h2>Que contiennent les pièces d'un buffet halal ?</h2>
      <p>L'Invitation réunit gougères, chou craquelin à la tapenade, millefeuille betterave et chèvre, brochette de poulet tandoori et mini cheeseburger, puis tartelette tout chocolat et brochette de fruits frais. La Réception ajoute saumon mariné, crevette à la mangue et dôme praliné ; La Célébration, melon feta menthe et navette de légumes grillés. Le détail complet est dans le guide <a href="/journal/cocktail-entreprise-halal-paris">cocktail d'entreprise halal à Paris</a>.</p>

      <h2>Faut-il un buffet séparé pour les invités qui mangent halal ?</h2>
      <p>Non. Toute la carte étant halal et sans porc, tout le monde se sert au même buffet et personne n'a à se signaler. Les boissons sont toutes sans alcool, Chardonnay 0 % compris.</p>
      <p lang="en">In English: halal buffet catering for companies in Paris and Île-de-France. Every item is halal and pork-free, with no alcohol. No halal certification is claimed. From 29.90 euros excl. VAT per person, delivered from 6:30 am.</p>

      <h2>Comment commander un buffet halal ?</h2>
      <p>Commandez jusqu'à la veille 14h pour une livraison dès 6h30. À partir de 50 personnes ou pour plusieurs sites, un préavis de 48 h est recommandé. Les plateaux arrivent dressés, prêts à poser. La récupération de matériel, si besoin, coûte 19 € HT en plus de la livraison. <a href="/devis">Demandez votre devis</a>, réponse sous 24 h, ou voyez nos <a href="/traiteur-halal/plateaux-repas">plateaux repas halal</a> pour un déjeuner assis.</p>
      <p>Tarifs L'Écrin Traiteur, octobre 2026. Retour à la page <a href="/traiteur-halal">traiteur halal d'entreprise</a>.</p>
    `,
    closingEyebrow: "Buffet halal d'entreprise",
    closingTitle: 'Un seul buffet,\npour tous vos invités.',
    closingBody: "Cocktail debout ou menu à partager, le buffet est identique pour tous : halal, sans porc, sans alcool, sans supplément.",
    ctaQuestion: 'Un buffet halal pour votre réception ?',
    faq: [
      {
        name: "Combien de pièces par personne pour un buffet d'entreprise ?",
        answer: "Prévoyez 6 à 8 pièces par personne pour un apéritif, 12 à 14 pour un cocktail déjeunatoire et 16 à 18 pour un cocktail dînatoire, puis ajoutez 10 % de marge. Pour 50 personnes en déjeunatoire, cela fait de 600 à 700 pièces avant marge.",
      },
      {
        name: 'Un buffet halal coûte-t-il plus cher qu\'un buffet classique ?',
        answer: "Non, il n'y a aucun supplément : toute la carte est halal et sans porc par défaut, et sans alcool dans les recettes. Les prix sont ceux de la carte : 29,90 € HT par personne pour 8 pièces, 40,90 € HT pour 12 pièces, 51,90 € HT pour 16 pièces, avec 29 € HT de livraison par commande.",
      },
      {
        name: 'Le buffet convient-il aux invités végétariens ou sans gluten ?',
        answer: "Oui, sur demande. La composition des trois formules cocktail est fixe : précisez les besoins végétariens, vegan ou sans gluten, avec le nombre de personnes concernées, au moment du devis. L'atelier manipule de la farine : des traces de gluten restent possibles.",
      },
      {
        name: 'Quelles boissons servir avec un buffet halal ?',
        answer: "Jus et nectars Alain Milliat, eaux plates et pétillantes, et un Chardonnay Blanc de Blancs 0 % pour trinquer. Toute notre carte de boissons est sans alcool. Comptez 3 à 4 boissons par personne pour un cocktail de deux heures, avec au moins trois parfums différents.",
      },
      {
        name: "Jusqu'à quand commander un buffet halal ?",
        answer: "Jusqu'à la veille 14h pour une livraison le lendemain, dès 6h30, du lundi au vendredi. À partir de 50 personnes ou pour plusieurs sites, un préavis de 48 h est recommandé. Le devis est envoyé sous 24 h, la facture est une facture entreprise avec TVA et le bon de commande est accepté.",
      },
    ],
    liensUtiles: [
      { href: '/journal/cocktail-entreprise-halal-paris', label: "Cocktail d'entreprise halal à Paris : formules et budget" },
      { href: '/journal/evenement-entreprise-halal-guide', label: "Organiser un événement d'entreprise halal : le guide" },
      { href: '/journal/buffet-entreprise-guide-complet-paris', label: "Buffet d'entreprise à Paris : le guide complet" },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 3. Plateau repas halal d'entreprise (requêtes : plateau repas halal, box repas halal)
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'plateaux-repas',
    name: "Plateau repas halal d'entreprise",
    h1: "Plateau repas halal d'entreprise",
    eyebrow: 'Plateaux repas · Paris & Île-de-France',
    breadcrumbLabel: 'Plateau repas halal',
    serviceName: "Plateaux repas halal d'entreprise",
    serviceType: "Plateaux repas d'entreprise halal et sans porc",
    areaServed: [{ '@type': 'State', name: 'Île-de-France' }],
    metaTitle: "Plateau repas halal d'entreprise dès 28,90 € HT/pers.",
    metaDescription: "Plateaux repas halal et sans porc pour entreprise à Paris : entrée, plat, dessert dès 28,90 € HT par personne, livrés dès 6h30. Devis sous 24h.",
    heroDescription: "Six plateaux individuels complets, entrée, plat et dessert, tous halal et sans porc, sans alcool. De 28,90 à 30,90 € HT par personne, livrés à l'heure de votre réunion dès 6h30.",
    heroImg: '/hero-plateaux-essentiel.webp',
    heroAlt: "Plateau repas halal d'entreprise, L'Écrin Traiteur",
    reponseQ: 'Vos plateaux repas sont-ils halal ?',
    reponse: [
      "Oui. Les six plateaux repas de L'Écrin Traiteur sont halal et sans porc, sans alcool dans les recettes, sans supplément. Chaque plateau comprend une entrée, un plat et un dessert. Aucune certification halal n'est revendiquée.",
      "Prix par personne, hors taxes : 28,90 € HT pour les plateaux végétariens, 29,90 € HT au poulet, 30,90 € HT au saumon. La livraison est à 29 € HT, le minimum de commande est de 50 € HT.",
    ],
    formulesEyebrow: 'Nos plateaux halal',
    formulesTitle: 'Trois niveaux de prix, six menus',
    formules: [
      { nom: 'Végétarien', prix: '28,90 € HT/pers.', desc: 'La Solaire, La Provençale et La Potagère : houmous et falafels, pâtes au pesto ou lentilles et feta.' },
      { nom: 'Poulet', prix: '29,90 € HT/pers.', desc: 'La Romaine, avec filet de poulet et pommes de terre rôties, et La Champêtre, avec émincé de poulet et riz.' },
      { nom: 'Saumon', prix: '30,90 € HT/pers.', desc: 'La Boréale : céleri rémoulade, pommes de terre sautées et dés de saumon poêlés, compote pomme-fraise.' },
    ],
    selection: [
      { id: 'e2', note: 'Le menu le plus simple à valider pour un groupe mixte.' },
      { id: 'e4', note: 'Léger, pour une réunion qui se poursuit l\'après-midi.' },
      { id: 'e5', note: 'Pour les déjeuners de direction.' },
      { id: 'e1', note: 'Le végétarien le plus rassasiant de la carte.' },
      { id: 'e3', note: 'Pâtes au pesto, mozzarella, panna cotta.' },
      { id: 'e6', note: 'Lentilles et feta, tarte aux légumes du soleil.' },
    ],
    seoArticle: `
      <h2>Que contient un plateau repas halal ?</h2>
      <p>Chaque plateau est individuel et complet : une entrée, un plat et un dessert, préparés le matin de la livraison. Les six plateaux sont halal et sans porc : trois végétariens (<a href="/creations/plateaux-repas/e1">La Solaire</a>, <a href="/creations/plateaux-repas/e3">La Provençale</a>, <a href="/creations/plateaux-repas/e6">La Potagère</a>), deux au poulet (<a href="/creations/plateaux-repas/e2">La Romaine</a>, <a href="/creations/plateaux-repas/e4">La Champêtre</a>) et un au saumon (<a href="/creations/plateaux-repas/e5">La Boréale</a>).</p>

      <h2>Combien coûte un déjeuner halal pour 12, 20 ou 50 personnes ?</h2>
      <p>Le prix va de 28,90 à 30,90 € HT par personne, plus 29 € HT de livraison par commande. Le tableau applique un tiers de plateaux végétariens pour 20 et 50 personnes, et pour 12 personnes un mélange de six plateaux au poulet, quatre végétariens et deux au saumon.</p>
      <div class="tbl-wrap"><table>
        <thead><tr><th>Effectif</th><th>Répartition</th><th>Plateaux HT</th><th>Avec livraison 29 € HT</th></tr></thead>
        <tbody>
          <tr><td><strong>12 personnes</strong></td><td>4 végétariens, 6 poulet, 2 saumon</td><td>356,80 €</td><td>385,80 €</td></tr>
          <tr><td><strong>20 personnes</strong></td><td>7 végétariens, 13 poulet</td><td>591,00 €</td><td>620,00 €</td></tr>
          <tr><td><strong>50 personnes</strong></td><td>17 végétariens, 33 poulet</td><td>1 478,00 €</td><td>1 507,00 €</td></tr>
        </tbody>
      </table></div>

      <h2>Comment répartir viande, poisson et végétarien dans une équipe mixte ?</h2>
      <p>Comptez environ un tiers de plateaux végétariens quand vous ne connaissez pas les préférences, puis indiquez à la commande l'effectif de chaque menu. Les plateaux sont filmés et étiquetés : chacun retrouve le menu prévu pour lui, sans devinette à la distribution. Les options vegan et sans gluten se précisent de la même façon. Voir le guide <a href="/journal/menu-inclusif-entreprise-halal-vegetarien-sans-gluten">menu inclusif en entreprise</a>.</p>

      <h2>Existe-t-il un format plus léger pour un déjeuner halal ?</h2>
      <p>Oui : les <a href="/creations/lunch-box">lunch box</a>, de 18,90 à 21,90 € HT par personne, associent un sandwich en baguette ou en pain viennois, une entrée et un dessert. C'est la box repas halal des équipes qui déjeunent à leur poste, avec la même règle que le reste de la carte. Pour une journée complète, le guide <a href="/journal/evenement-entreprise-halal-guide">événement d'entreprise halal</a> enchaîne les formats.</p>

      <h2>Comment commander des plateaux repas halal ?</h2>
      <p>Commandez jusqu'à la veille 14h pour une livraison dès 6h30, du lundi au vendredi. Pour 50 personnes et plus, prévenez 48 h avant. Le minimum de commande est de 50 € HT, la facture est une facture entreprise avec TVA et le bon de commande est accepté. Pour une réunion à La Défense, voir les <a href="/plateaux-repas-entreprise/la-defense">plateaux repas à La Défense</a>. <a href="/devis">Demandez votre devis</a>, réponse sous 24 h.</p>
      <p>Tarifs L'Écrin Traiteur, octobre 2026. Retour à la page <a href="/traiteur-halal">traiteur halal d'entreprise</a>.</p>
    `,
    closingEyebrow: "Plateau repas halal d'entreprise",
    closingTitle: 'Un déjeuner complet,\nhalal et sans porc.',
    closingBody: "Une entrée, un plat, un dessert, par personne, étiquetés et livrés à l'heure : le déjeuner de réunion sans organisation de votre côté.",
    ctaQuestion: 'Des plateaux repas halal pour votre réunion ?',
    faq: [
      {
        name: "Combien coûte un plateau repas halal d'entreprise ?",
        answer: "De 28,90 à 30,90 € HT par personne : 28,90 € pour les plateaux végétariens, 29,90 € pour le poulet, 30,90 € pour le saumon. Chaque plateau comprend entrée, plat et dessert. La livraison est à 29 € HT à Paris et dans les communes proches, le minimum de commande est de 50 € HT.",
      },
      {
        name: "Les plateaux repas contiennent-ils du porc ou de l'alcool ?",
        answer: "Non. Les deux plateaux au poulet, le plateau au saumon et les trois plateaux végétariens sont sans porc et sans alcool dans les recettes, sans supplément. Aucune certification halal n'est revendiquée : l'origine des viandes peut être précisée au moment du devis, avant la commande.",
      },
      {
        name: 'Combien de plateaux végétariens prévoir pour une équipe mixte ?',
        answer: "Comptez environ un tiers de plateaux végétariens quand vous ne connaissez pas les préférences. Pour 20 personnes, cela donne 7 plateaux végétariens à 28,90 € HT et 13 au poulet à 29,90 € HT, soit 591 € HT avant livraison. Précisez les effectifs à la commande : les plateaux sont étiquetés.",
      },
      {
        name: 'Proposez-vous des plateaux repas vegan ou sans gluten ?',
        answer: "Les options vegan et sans gluten se précisent à la commande, avec le nombre de personnes concernées. Les plateaux végétariens ne sont pas tous vegan : La Provençale contient de la mozzarella et La Potagère de la feta. L'atelier manipule de la farine : des traces de gluten restent possibles.",
      },
      {
        name: "Jusqu'à quand commander et à quelle heure livrez-vous ?",
        answer: "Commandez jusqu'à la veille 14h pour une livraison le lendemain, du lundi au vendredi, dès 6h30. Pour 50 personnes et plus ou plusieurs sites, un préavis de 48 h est recommandé. Indiquez à la commande l'heure à laquelle les plateaux doivent être posés, pas l'heure de la réunion.",
      },
    ],
    liensUtiles: [
      { href: '/creations/plateaux-repas', label: 'Les six plateaux repas en détail' },
      { href: '/journal/plateau-repas-entreprise-commander', label: "Plateau repas d'entreprise : comment commander" },
      { href: '/journal/evenement-entreprise-halal-guide', label: "Organiser un événement d'entreprise halal : le guide" },
    ],
  },
]
