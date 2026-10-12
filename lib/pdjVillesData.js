// Pages "Petit-déjeuner d'entreprise + Ville" — déclinaison ciblée du modèle
// /traiteur/[ville], focalisée sur le petit-déjeuner. Créées suite à l'audit
// GSC du 23/09/2026 : ~3000 impressions/90j à 0 clic sur "petit déjeuner
// entreprise + ville", captées par des pages non ciblées (home ou catégorie
// générique). Une seule source de vérité par ville, ajouter ici pour étendre
// à d'autres communes (mêmes champs que citiesData.js, focus petit-déj).

export const PDJ_VILLES = [
  {
    slug: 'gennevilliers',
    name: 'Gennevilliers',
    region: 'Hauts-de-Seine (92)',
    metaTitle: "Petit-déjeuner d'entreprise à Gennevilliers dès 8 € HT/pers.",
    metaDescription: "Viennoiseries artisanales, jus Alain Milliat, café et fruits livrés à Gennevilliers dès 6h30, à partir de 8 € HT par personne. Devis sous 24h.",
    heroDescription: "Viennoiseries pur beurre, madeleines Mado Paris, jus Alain Milliat et café, livrés dès 6h30 dans tout Gennevilliers : port, ZAC des Grésillons, Chandon, centre-ville.",
    cityHref: '/traiteur/gennevilliers',
    formules: [
      { nom: 'Classique', prix: '8€ HT/pers', desc: '2 viennoiseries, jus Alain Milliat, café, corbeille de fruits.' },
      { nom: 'Bio', prix: '10€ HT/pers', desc: 'Viennoiseries bio Maison Landemaine, jus bio, café bio, fruits bio.' },
    ],
    seoArticle: `
      <p>Que votre équipe soit installée près du port de Gennevilliers, dans la ZAC des Grésillons, au Chandon ou en centre-ville, nous livrons chaque matin dès <strong>6h30</strong> : viennoiseries pur beurre façonnées le matin même, madeleines <strong>Mado Paris</strong>, jus <strong>Alain Milliat</strong>, café et corbeille de fruits frais.</p>

      <h2>Formule Classique (8€ HT/pers)</h2>
      <p>2 viennoiseries pur beurre par personne, jus Alain Milliat, café chaud en thermos, corbeille de fruits frais. Pour 20 personnes : 160€ HT + 29€ HT de livraison, soit <strong>189€ HT</strong>.</p>

      <h2>Formule Bio (10€ HT/pers)</h2>
      <p>Viennoiseries bio Maison Landemaine, jus bio Alain Milliat, café bio torréfié local, fruits bio. Pour 20 personnes : 200€ HT + 29€ HT de livraison, soit <strong>229€ HT</strong>.</p>

      <h2>Livrer sur un site industriel ou logistique à Gennevilliers</h2>
      <p>Une partie des adresses de Gennevilliers ne se livre pas comme un immeuble de bureaux classique : quais de réception, horaires fixes, parfois un poste de garde à l'entrée. Précisez-le à la commande, nous calons le créneau en conséquence — nom du site, point de réception, contact sur place, horaires autorisés.</p>

      <h2>Commander votre petit-déjeuner d'entreprise à Gennevilliers</h2>
      <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30. Minimum de commande 50€ HT, livraison 29€ HT. Facturation entreprise avec TVA. <a href="/devis">Demandez votre devis</a>, réponse sous 24h. Retrouvez aussi nos <a href="/traiteur/gennevilliers">autres prestations à Gennevilliers</a> (plateaux repas, cocktails, buffets).</p>
    `,
    faq: [
      { name: "Livrez-vous avant 7h à Gennevilliers ?", answer: "Oui, 6h30 possible partout à Gennevilliers, sous réserve d'accès au bâtiment. Confirmez au moment du devis." },
      { name: "Quel est le budget pour 20 personnes ?", answer: "Formule Classique : 189€ HT (160€ + 29€ de livraison). Formule Bio : 229€ HT." },
      { name: "Livrez-vous sur les sites industriels du port ?", answer: "Oui. Précisez le point de réception (quai, poste de garde, accueil) et le contact sur place à la commande." },
    ],
  },
  {
    slug: 'boulogne-billancourt',
    name: 'Boulogne-Billancourt',
    region: 'Hauts-de-Seine (92)',
    metaTitle: "Petit-déjeuner d'entreprise à Boulogne-Billancourt : dès 6h30",
    metaDescription: "Petit-déjeuner d'entreprise à Boulogne-Billancourt dès 8€ HT/pers. Notre atelier y est basé : livraison la plus rapide de notre zone. Devis 24h.",
    heroDescription: "Boulogne-Billancourt est notre commune d'attache, notre atelier est au 63 bis rue de Sèvres. C'est la ville où nous livrons le plus tôt et acceptons le plus facilement les commandes de dernière minute.",
    cityHref: '/traiteur/boulogne-billancourt',
    formules: [
      { nom: 'Classique', prix: '8€ HT/pers', desc: 'Viennoiseries pur beurre, jus, café, corbeille de fruits frais.' },
      { nom: 'Premium', prix: '18€ HT/pers', desc: 'Sélection élargie : madeleines Mado Paris, yaourts fermiers, pâtisseries.' },
    ],
    seoArticle: `
      <p>Boulogne-Billancourt est notre commune d'attache : notre atelier est au 63 bis rue de Sèvres. C'est la ville où nous livrons le plus tôt et le plus souvent, du Trapèze au Pont-de-Sèvres en passant par le centre-ville et la route de la Reine. Sur Boulogne, un oubli de dernière minute reste rattrapable, ce qui n'est pas vrai partout.</p>

      <h2>Formule Classique (8€ HT/pers)</h2>
      <p>Viennoiseries pur beurre façonnées le matin même par nos boulangers partenaires, jus Alain Milliat, café, corbeille de fruits frais découpés. Pour 20 personnes : 160€ HT + 29€ HT de livraison, soit <strong>189€ HT</strong>.</p>

      <h2>Formule Premium (18€ HT/pers)</h2>
      <p>Sélection élargie avec madeleines <strong>Mado Paris</strong>, yaourts fermiers, pâtisseries individuelles. Pour 20 personnes : 360€ HT + 29€ HT de livraison, soit <strong>389€ HT</strong>.</p>

      <h2>Livraison à Boulogne : Trapèze, Pont-de-Sèvres, centre-ville</h2>
      <p>Nous connaissons les accès du Trapèze immeuble par immeuble, les contraintes de stationnement du centre-ville et les procédures des tours de Pont-de-Sèvres. Livraison à partir de <strong>6h30</strong>, montée à l'étage quand c'est possible. Étant basés sur la commune, nous sommes aussi la ville où nous acceptons le plus facilement les commandes du matin même sur notre sélection disponible du jour, jusqu'à 10h.</p>

      <h2>Commander votre petit-déjeuner d'entreprise à Boulogne-Billancourt</h2>
      <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30, et jusqu'à 10h le matin même sur notre sélection du jour. Minimum de commande 50€ HT, livraison 29€ HT. Facturation entreprise avec TVA. <a href="/devis">Demandez votre devis</a>, réponse sous 24h. Retrouvez aussi nos <a href="/traiteur/boulogne-billancourt">autres prestations à Boulogne-Billancourt</a> (plateaux repas, cocktails, buffets).</p>
    `,
    faq: [
      { name: "Pourquoi la livraison est-elle plus rapide à Boulogne-Billancourt ?", answer: "Notre atelier est basé sur la commune (63 bis rue de Sèvres) : c'est la ville où nous acceptons le plus facilement les commandes du matin même, jusqu'à 10h sur notre sélection du jour." },
      { name: "Quel est le budget pour 20 personnes ?", answer: "Formule Classique : 189€ HT (160€ + 29€ de livraison). Formule Premium : 389€ HT." },
      { name: "Livrez-vous dans le Trapèze et à Pont-de-Sèvres ?", answer: "Oui, quotidiennement. Nous connaissons les accès immeuble par immeuble sur ces deux secteurs." },
    ],
  },
  {
    slug: 'puteaux',
    name: 'Puteaux',
    region: 'Hauts-de-Seine (92) · La Défense',
    metaTitle: "Petit-déjeuner d'entreprise à Puteaux : livré dès 6h30",
    metaDescription: "Petit-déjeuner d'entreprise à Puteaux dès 8€ HT/pers., livré dès 6h30 dans les tours Ariane et Aurore. Commande avant 14h la veille, devis 24h.",
    heroDescription: "Viennoiseries pur beurre, jus, café et corbeilles de fruits livrés dès 6h30 dans les tours Ariane et Aurore, le quartier Bellini, les Dunes et les bords de Seine, pour 10 comme pour 80 personnes.",
    cityHref: '/traiteur/puteaux',
    formules: [
      { nom: 'Classique', prix: '8€ HT/pers', desc: 'Viennoiseries pur beurre, jus, café, corbeille de fruits frais. Même composition pour 10 comme pour 80 personnes.' },
      { nom: 'Complet', prix: '12 à 16€ HT/pers', desc: 'La base Classique, plus madeleines ou cakes, yaourts fermiers et une sélection de jus plus large. Pour les lancements et les comités élargis.' },
    ],
    seoArticle: `
      <p>À Puteaux, un petit-déjeuner d'entreprise se commande rarement pour six. Entre la <strong>tour Ariane</strong>, la <strong>tour Aurore</strong>, le quartier Bellini, les Dunes et les bureaux des bords de Seine, les commandes que nous livrons montent souvent à 30, 50, parfois 80 personnes, pour un lancement ou un comité élargi. Nous livrons dès <strong>6h30</strong>, avec une composition qui reste la même quand l'effectif monte.</p>

      <h2>Formule Classique (8€ HT/pers)</h2>
      <p>Viennoiseries pur beurre, jus, café et corbeille de fruits frais. Pour 20 personnes : 160€ HT + 29€ HT de livraison, soit <strong>189€ HT</strong>. Pour 50 personnes : 400€ HT + 29€ HT de livraison, soit <strong>429€ HT</strong>.</p>

      <h2>Formule Complet (12 à 16€ HT/pers)</h2>
      <p>La base Classique, plus madeleines ou cakes, yaourts fermiers et une sélection de jus plus large. Le prix par personne baisse avec l'effectif : une équipe de 10 se rapproche de la fourchette haute, un comité élargi de la fourchette basse.</p>

      <h2>Livrer dans une tour de Puteaux : ce qu'il nous faut</h2>
      <p>Une tour ne se livre pas comme un immeuble de bureaux : accès livraison souvent en sous-sol, créneau de réception, parfois un badge visiteur déclaré la veille. Un mauvais quai ou un badge manquant, et le petit-déjeuner arrive après la réunion. À la commande, indiquez :</p>
      <ul>
        <li>le nom exact de la tour et l'étage</li>
        <li>le nom et le numéro du contact sur place</li>
        <li>l'heure de réception souhaitée, pas l'heure de la réunion</li>
        <li>la procédure d'accès si votre site en impose une</li>
      </ul>

      <h2>Commander votre petit-déjeuner d'entreprise à Puteaux</h2>
      <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30, du lundi au vendredi. Minimum de commande 50€ HT, livraison 29€ HT, facturation entreprise avec TVA. Tout est halal et sans porc par défaut ; options végétariennes, véganes et sans gluten sur demande, avec les effectifs concernés. <a href="/devis">Demandez votre devis</a>, réponse sous 24h.</p>
      <p>Retrouvez aussi nos <a href="/traiteur/puteaux">autres prestations à Puteaux</a> (plateaux repas, cocktails) et notre <a href="/journal/traiteur-puteaux-la-defense-guide-complet">guide complet traiteur Puteaux et La Défense</a>. Côté Courbevoie, voir le <a href="/petit-dejeuner-entreprise/courbevoie">petit-déjeuner d'entreprise à Courbevoie</a>.</p>
    `,
    faq: [
      { name: "Livrez-vous dans les tours Ariane et Aurore ?", answer: "Oui. Indiquez le nom de la tour, l'étage, le contact sur place et l'heure de réception : l'accès livraison est souvent en sous-sol et un badge visiteur peut devoir être déclaré la veille." },
      { name: "Quel est le budget pour 50 personnes ?", answer: "Formule Classique : 429€ HT (50 × 8€ + 29€ de livraison). Formule Complet : de 629 à 829€ HT livraison comprise." },
      { name: "Livrez-vous de grosses commandes à Puteaux ?", answer: "Oui, 30, 50, parfois 80 personnes pour un lancement ou un comité élargi, avec la même composition quel que soit l'effectif. Pour un format particulier, demandez un devis sous 24h." },
    ],
  },
  {
    slug: 'suresnes',
    name: 'Suresnes',
    region: 'Hauts-de-Seine (92)',
    metaTitle: "Petit-déjeuner d'entreprise à Suresnes : dès 8€ HT/pers",
    metaDescription: "Petit-déjeuner d'entreprise à Suresnes dès 8€ HT/pers., livré dès 6h30 : centre-ville, Mont-Valérien, ZAC des Cottages. Devis sous 24h.",
    heroDescription: "Suresnes est une ville à taille humaine : nous livrons le petit-déjeuner de votre équipe dès 6h30 au centre-ville, sur les bords de Seine, dans le quartier du Mont-Valérien et à la ZAC des Cottages.",
    cityHref: '/traiteur/suresnes',
    formules: [
      { nom: 'Classique', prix: '8€ HT/pers', desc: 'Viennoiseries pur beurre, jus, café, corbeille de fruits frais. Pour la réunion d\'équipe du matin.' },
      { nom: 'Complet', prix: '12 à 16€ HT/pers', desc: 'La base Classique, plus madeleines ou cakes, yaourts fermiers et une sélection de jus plus large. Pour une réunion de direction ou un accueil.' },
    ],
    seoArticle: `
      <p><strong>Suresnes</strong> est une ville à taille humaine, avec des entreprises exigeantes : on y trouve notamment des entreprises pharmaceutiques et de santé, le siège de Johnson &amp; Johnson France et des PME tertiaires. Nous y livrons le petit-déjeuner d'entreprise dès <strong>6h30</strong>, au centre-ville, sur les bords de Seine, dans le quartier du Mont-Valérien et à la ZAC des Cottages.</p>

      <h2>Formule Classique (8€ HT/pers)</h2>
      <p>Viennoiseries pur beurre, jus, café et corbeille de fruits frais, pour la réunion d'équipe du matin. Pour 20 personnes : 160€ HT + 29€ HT de livraison, soit <strong>189€ HT</strong>.</p>

      <h2>Un petit-déjeuner pour la réunion de direction</h2>
      <p>La formule Complet (12 à 16€ HT/pers) ajoute madeleines ou cakes, yaourts fermiers et une sélection de jus plus large. Pour un comité de 10 personnes : de 120 à 160€ HT + 29€ HT de livraison, soit de <strong>149 à 189€ HT</strong>.</p>

      <h2>Livraison à Suresnes : quatre secteurs, une heure de réception</h2>
      <p>Centre-ville, bords de Seine, quartier du Mont-Valérien, ZAC des Cottages : dites-nous l'étage, le nom du contact sur place et l'heure à laquelle le plateau doit être posé, pas l'heure de la réunion. Si votre site demande un badge visiteur ou une procédure d'accès, précisez-le à la commande, nous l'anticipons.</p>

      <h2>Commander votre petit-déjeuner d'entreprise à Suresnes</h2>
      <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30, du lundi au vendredi. Minimum de commande 50€ HT, livraison 29€ HT, facturation entreprise avec TVA. Tout est halal et sans porc par défaut ; options végétariennes, véganes et sans gluten sur demande. <a href="/devis">Demandez votre devis</a>, réponse sous 24h.</p>
      <p>Retrouvez aussi nos <a href="/traiteur/suresnes">autres prestations à Suresnes</a> (plateaux repas, cocktails, buffets). Nous livrons le petit-déjeuner d'entreprise dans les communes voisines : <a href="/petit-dejeuner-entreprise/puteaux">Puteaux</a> et <a href="/petit-dejeuner-entreprise/nanterre">Nanterre</a>.</p>
    `,
    faq: [
      { name: "Livrez-vous à la ZAC des Cottages et dans le quartier du Mont-Valérien ?", answer: "Oui, dans les deux, ainsi qu'au centre-ville et sur les bords de Seine, dès 6h30. Précisez l'étage, le contact sur place et l'heure de réception à la commande." },
      { name: "Quel est le budget pour 20 personnes ?", answer: "Formule Classique : 189€ HT (160€ + 29€ de livraison). Formule Complet : de 269 à 349€ HT livraison comprise." },
      { name: "Peut-on commander pour une réunion de direction ?", answer: "Oui. La formule Complet (12 à 16€ HT par personne) convient à une réunion de direction ou à un accueil. Pour un format particulier, demandez un devis sous 24h." },
    ],
  },
  {
    slug: 'courbevoie',
    name: 'Courbevoie',
    region: 'Hauts-de-Seine (92) · La Défense',
    metaTitle: "Petit-déjeuner d'entreprise à Courbevoie : livré dès 6h30",
    metaDescription: "Petit-déjeuner d'entreprise à Courbevoie dès 8€ HT/pers., livré dès 6h30 dans les tours First et Total, au CNIT et aux Groues. Devis 24h.",
    heroDescription: "Tours First et Total, CNIT, Westfield Les Quatre Temps, quartier des Groues : nous livrons le petit-déjeuner d'entreprise dès 6h30 côté Courbevoie de La Défense, de 10 à 500 personnes.",
    cityHref: '/traiteur/courbevoie',
    formules: [
      { nom: 'Classique', prix: '8€ HT/pers', desc: 'Viennoiseries pur beurre, jus, café, corbeille de fruits frais. Pour les réunions d\'équipe.' },
      { nom: 'Complet', prix: '12 à 16€ HT/pers', desc: 'La base Classique, plus madeleines ou cakes, yaourts fermiers et une sélection de jus plus large. Pour les comités de direction et les accueils.' },
    ],
    seoArticle: `
      <p>La majeure partie des tours de La Défense se trouve sur la commune de <strong>Courbevoie</strong> : tour First, tour Total, CNIT, Westfield Les Quatre Temps, sans oublier le quartier des Groues. Plus de 180 000 salariés travaillent sur le quartier d'affaires, et des sièges comme ceux d'EDF, de Total, de Société Générale et de BNP Paribas s'y trouvent. Nous livrons le petit-déjeuner d'entreprise dès <strong>6h30</strong>.</p>

      <h2>De la réunion d'équipe au COMEX</h2>
      <p>Une équipe de 10 personnes prend la formule Classique (8€ HT/pers) : 80€ HT + 29€ HT de livraison, soit <strong>109€ HT</strong>. Un comité de direction ou un COMEX prend plutôt la formule Complet (12 à 16€ HT/pers), avec madeleines ou cakes, yaourts fermiers et une sélection de jus plus large. Pour les grands groupes, de 10 à 500 personnes, la commande se compose sur devis, avec une qualité homogène sur toute la livraison.</p>

      <h2>Livraison dans les tours : conditionnement et accès</h2>
      <p>Livrer à La Défense est une compétence en soi : parkings dédiés, accès piétons, réception d'immeuble, monte-charges. Nos commandes sont conditionnées pour le transport en ascenseur. À la commande, donnez le nom de la tour, l'étage, le contact sur place et l'heure de réception souhaitée, pour que le petit-déjeuner soit prêt avant la réunion.</p>

      <h2>Commander votre petit-déjeuner d'entreprise à Courbevoie</h2>
      <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30, du lundi au vendredi. Minimum de commande 50€ HT, livraison 29€ HT, facturation entreprise avec TVA. Tout est halal et sans porc par défaut ; options végétariennes, véganes et sans gluten sur demande. <a href="/devis">Demandez votre devis</a>, réponse sous 24h.</p>
      <p>Retrouvez aussi nos <a href="/traiteur/courbevoie">autres prestations à Courbevoie</a> (plateaux repas, cocktails). Pour les tours côté Puteaux, voir le <a href="/petit-dejeuner-entreprise/puteaux">petit-déjeuner d'entreprise à Puteaux</a>, et pour une vue d'ensemble le <a href="/petit-dejeuner-entreprise/la-defense">petit-déjeuner d'entreprise à La Défense</a>.</p>
    `,
    faq: [
      { name: "Livrez-vous dans la tour First et la tour Total ?", answer: "Oui, ainsi qu'au CNIT, à Westfield Les Quatre Temps et dans le quartier des Groues. Indiquez le nom de la tour, l'étage et le contact sur place à la commande." },
      { name: "Pour combien de personnes livrez-vous à Courbevoie ?", answer: "De 10 à 500 personnes. Pour 20 personnes en formule Classique : 189€ HT (160€ + 29€ de livraison). Les grands groupes se composent sur devis." },
      { name: "Comment la commande monte-t-elle dans la tour ?", answer: "Nos commandes sont conditionnées pour le transport en ascenseur. L'accès (réception, monte-charges, accès piéton) et l'heure de réception sont convenus à la commande." },
    ],
  },
  {
    slug: 'la-defense',
    name: 'La Défense',
    region: 'Hauts-de-Seine (92)',
    metaTitle: "Petit-déjeuner d'entreprise à La Défense : dès 6h30",
    metaDescription: "Petit-déjeuner d'entreprise à La Défense dès 8€ HT/pers., livré dès 6h30 dans les tours : First, CB21, Ariane, Eqho, CNIT. Devis sous 24h.",
    heroDescription: "Tour First, Total Énergies, CB21, Ariane, Aurore, Eqho, CNIT, Parvis : nous livrons le petit-déjeuner d'entreprise dès 6h30 dans l'ensemble du quartier d'affaires, côté Courbevoie comme côté Puteaux.",
    cityHref: '/traiteur/la-defense',
    formules: [
      { nom: 'Classique', prix: '8€ HT/pers', desc: 'Viennoiseries pur beurre, jus, café, corbeille de fruits frais.' },
      { nom: 'Complet', prix: '12 à 16€ HT/pers', desc: 'La base Classique, plus madeleines ou cakes, yaourts fermiers et une sélection de jus plus large.' },
    ],
    seoArticle: `
      <p><strong>La Défense</strong> compte 72 tours et 180 000 salariés, réparties entre les communes de Courbevoie et de Puteaux. Nous livrons le petit-déjeuner d'entreprise dès <strong>6h30</strong> dans l'ensemble du quartier : tour First, tour Total Énergies, CB21, Ariane, Aurore, Eqho, CNIT, mais aussi les immeubles plus modestes du Parvis et du quartier des Damiers.</p>

      <h2>Comment se passe la livraison dans une tour</h2>
      <p>Notre livreur se présente au point de livraison convenu à la commande : réception, quai de déchargement ou accès piéton, avec les documents nécessaires. La commande est conditionnée dans des emballages rigides adaptés au transport vertical. À l'heure choisie, votre salle de réunion ou votre espace d'accueil est prêt.</p>

      <h2>Formules et budget</h2>
      <p>Formule Classique (8€ HT/pers) : viennoiseries pur beurre, jus, café, corbeille de fruits frais. Pour 20 personnes : 160€ HT + 29€ HT de livraison, soit <strong>189€ HT</strong>. Formule Complet (12 à 16€ HT/pers) : la base Classique, plus madeleines ou cakes, yaourts fermiers et une sélection de jus plus large, pour les comités de direction et les accueils.</p>

      <h2>Comptes récurrents dans les grandes tours</h2>
      <p>Pour une équipe qui commande chaque semaine, un interlocuteur dédié et des procédures d'accès simplifiées peuvent être mis en place. La facturation entreprise avec TVA est standard.</p>

      <h2>Commander votre petit-déjeuner d'entreprise à La Défense</h2>
      <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30, du lundi au vendredi. Minimum de commande 50€ HT, livraison 29€ HT. Tout est halal et sans porc par défaut ; options végétariennes, véganes et sans gluten sur demande. <a href="/devis">Demandez votre devis</a>, réponse sous 24h.</p>
      <p>Retrouvez aussi nos <a href="/traiteur/la-defense">autres prestations à La Défense</a> et la liste des <a href="/traiteur/la-defense/tours">tours desservies</a>. Selon la commune de votre tour : <a href="/petit-dejeuner-entreprise/courbevoie">petit-déjeuner d'entreprise à Courbevoie</a> ou <a href="/petit-dejeuner-entreprise/puteaux">à Puteaux</a>.</p>
    `,
    faq: [
      { name: "Livrez-vous dans toutes les tours de La Défense ?", answer: "Oui, côté Courbevoie comme côté Puteaux : First, Total Énergies, CB21, Ariane, Aurore, Eqho, CNIT, le Parvis et le quartier des Damiers." },
      { name: "Comment la commande arrive-t-elle jusqu'à la salle de réunion ?", answer: "Le livreur se présente au point de livraison convenu (réception, quai de déchargement ou accès piéton). La commande est conditionnée en emballages rigides adaptés au transport vertical." },
      { name: "Quel est le budget pour 20 personnes ?", answer: "Formule Classique : 189€ HT (160€ + 29€ de livraison). Formule Complet : de 269 à 349€ HT livraison comprise." },
    ],
  },
  {
    slug: 'nanterre',
    name: 'Nanterre',
    region: 'Hauts-de-Seine (92)',
    metaTitle: "Petit-déjeuner d'entreprise à Nanterre : livré dès 6h30",
    metaDescription: "Petit-déjeuner d'entreprise à Nanterre dès 8€ HT/pers., livré dès 6h30 à Seine-Arche, Préfecture et à l'université. Devis sous 24h.",
    heroDescription: "Défense-Seine-Arche, secteur Préfecture, Petit-Nanterre, campus de l'université : nous livrons le petit-déjeuner d'entreprise dès 6h30, du comité de 10 personnes au séminaire.",
    cityHref: '/traiteur/nanterre',
    formules: [
      { nom: 'Classique', prix: '8€ HT/pers', desc: 'Viennoiseries pur beurre, jus, café, corbeille de fruits frais. Pour un comité ou une réunion d\'équipe.' },
      { nom: 'Complet', prix: '12 à 16€ HT/pers', desc: 'La base Classique, plus madeleines ou cakes, yaourts fermiers et une sélection de jus plus large. Pour un séminaire ou une journée de formation.' },
    ],
    seoArticle: `
      <p><strong>Nanterre</strong> est la ville-porte de La Défense, et les commandes y diffèrent beaucoup d'une adresse à l'autre : un comité de 10 personnes le matin à Seine-Arche, une pause de séminaire pour 120 personnes l'après-midi. Nous livrons dès <strong>6h30</strong> les sièges, les organismes de formation, les collectivités et l'université, à Défense-Seine-Arche, dans le secteur Préfecture, au Petit-Nanterre et sur le campus.</p>

      <h2>Formule Classique (8€ HT/pers)</h2>
      <p>Viennoiseries pur beurre, jus, café et corbeille de fruits frais. Pour 20 personnes : 160€ HT + 29€ HT de livraison, soit <strong>189€ HT</strong>. Pour un comité de 10 personnes : 80€ HT + 29€ HT de livraison, soit <strong>109€ HT</strong>.</p>

      <h2>Séminaires et formations : deux services, une seule commande</h2>
      <p>Une journée de formation demande deux pauses, celle du matin et celle de l'après-midi. Nous livrons les deux dans la même commande, avec des produits différents pour chaque service : viennoiseries et fruits le matin, chouquettes, cookies et madeleines l'après-midi. Pour un séminaire de plus de 20 personnes, demandez un devis.</p>

      <h2>Sites à accès contrôlé</h2>
      <p>Sur un site à accès contrôlé (barrière, poste de sécurité, badge), donnez-nous à la commande la procédure d'accès et le nom du contact sur place, et nous calons l'heure de réception en conséquence. Un livreur qui attend à l'entrée, c'est un café qui refroidit.</p>

      <h2>Commander votre petit-déjeuner d'entreprise à Nanterre</h2>
      <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30, du lundi au vendredi. Minimum de commande 50€ HT, livraison 29€ HT, facturation entreprise avec TVA. Tout est halal et sans porc par défaut ; options végétariennes, véganes et sans gluten sur demande, avec les effectifs concernés. <a href="/devis">Demandez votre devis</a>, réponse sous 24h.</p>
      <p>Retrouvez aussi nos <a href="/traiteur/nanterre">autres prestations à Nanterre</a> (plateaux repas, cocktails, buffets). Nous livrons le petit-déjeuner d'entreprise à <a href="/petit-dejeuner-entreprise/puteaux">Puteaux</a>, <a href="/petit-dejeuner-entreprise/courbevoie">Courbevoie</a> et <a href="/petit-dejeuner-entreprise/suresnes">Suresnes</a>, juste à côté.</p>
    `,
    faq: [
      { name: "Livrez-vous à l'université et dans le secteur Préfecture ?", answer: "Oui : Défense-Seine-Arche, secteur Préfecture, Petit-Nanterre et campus, dès 6h30. Sur un site à accès contrôlé, indiquez la procédure d'accès et le contact sur place à la commande." },
      { name: "Pouvez-vous livrer la pause du matin et celle de l'après-midi ?", answer: "Oui, dans la même commande, avec des produits différents pour chaque service : viennoiseries et fruits le matin, chouquettes, cookies et madeleines l'après-midi." },
      { name: "Quel est le budget pour 20 personnes ?", answer: "Formule Classique : 189€ HT (160€ + 29€ de livraison). Formule Complet : de 269 à 349€ HT livraison comprise." },
    ],
  },
]
