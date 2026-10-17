// Pages « plateaux repas d'entreprise + ville » (route /plateaux-repas-entreprise/[ville])
//
// Créées suite à l'audit GSC du 11/10/2026 : « plateaux repas entreprise <ville> » sans page
// dédiée (La Défense 97 imp., Courbevoie 86, Boulogne-Billancourt 82, Suresnes 81), servies par
// la page ville générique ou l'accueil. Déclinaison du modèle lib/pdjVillesData.js.
//
// Prix et menus : strictement ceux de app/creations/plateaux-repas/data.js (collection Essentiel,
// végétarien 28,90 / poulet 29,90 / poisson 30,90 € HT par personne). Repères géographiques :
// uniquement des lieux publics (gares, quartiers, communes voisines).
//
// Champs : slug, name, region, metaTitle (≤ 60), metaDescription (≤ 155), heroDescription, cityHref,
// formules [{ nom, prix, desc }], selection [{ id, pourquoi }] (ids de PRODUITS), seoArticle, faq.

export const PLATEAUX_VILLES = [
  {
    slug: 'courbevoie',
    name: 'Courbevoie',
    region: 'Hauts-de-Seine (92) · La Défense',
    metaTitle: "Plateaux repas d'entreprise à Courbevoie dès 28,90 € HT",
    metaDescription: "Plateaux repas d'entreprise livrés à Courbevoie : entrée, plat, dessert dès 28,90 € HT/pers. Commande avant 14h la veille, livraison dès 6h30, devis 24h.",
    heroDescription: "Six plateaux repas individuels, entrée, plat et dessert, dès 28,90 € HT par personne, livrés à Courbevoie à l'heure de votre réunion : côté La Défense, au Faubourg de l'Arche, à Bécon et autour de la gare de Courbevoie.",
    cityHref: '/traiteur/courbevoie',
    formules: [
      { nom: 'Végétarien', prix: '28,90 € HT/pers', desc: 'La Solaire, La Provençale et La Potagère. Houmous et falafels, pâtes au pesto ou lentilles et feta : de quoi tenir une réunion sans viande.' },
      { nom: 'Poulet', prix: '29,90 € HT/pers', desc: 'La Romaine, une salade César, et La Champêtre, avec émincé de poulet et taboulé. Deux plateaux simples à servir à un groupe mixte.' },
      { nom: 'Saumon', prix: '30,90 € HT/pers', desc: 'La Boréale : céleri rémoulade, pommes de terre sautées et dés de saumon poêlés, compote pomme-fraise.' },
    ],
    selection: [
      { id: 'e2', pourquoi: "Une salade César au poulet rôti : le menu que tout le monde reconnaît, donc le plus simple à valider pour un comité." },
      { id: 'e1', pourquoi: "Houmous, quinoa aux falafels et cookie : un plateau végétarien rassasiant, pour la personne qui ne mange pas de viande." },
      { id: 'e5', pourquoi: "Pour les déjeuners de direction : céleri rémoulade, dés de saumon poêlés et compote pomme-fraise." },
    ],
    seoArticle: `
      <p>À <strong>Courbevoie</strong>, un déjeuner de réunion se passe le plus souvent en salle fermée : on ne sort pas, on ne descend pas de la tour, on déjeune pendant que le dossier avance. C'est le rôle du plateau repas individuel : une entrée, un plat et un dessert, dressés le matin même et posés sur la table de réunion à l'heure convenue. Nous livrons dans toute la commune dès <strong>6h30</strong>, du lundi au vendredi.</p>

      <h2>Six plateaux, trois niveaux de prix</h2>
      <p>La carte tient en six plateaux de la collection Essentiel. Les menus végétariens, <a href="/creations/plateaux-repas/e1">La Solaire</a>, <a href="/creations/plateaux-repas/e3">La Provençale</a> et <a href="/creations/plateaux-repas/e6">La Potagère</a>, sont à 28,90 € HT par personne. Les menus au poulet, <a href="/creations/plateaux-repas/e2">La Romaine</a> et <a href="/creations/plateaux-repas/e4">La Champêtre</a>, sont à 29,90 € HT. <a href="/creations/plateaux-repas/e5">La Boréale</a>, au saumon, est à 30,90 € HT. Chaque plateau arrive avec couverts et serviettes.</p>

      <h2>Combien pour douze personnes ?</h2>
      <p>Prenons six plateaux au poulet, quatre végétariens et deux au saumon : 356,80 € HT, soit 385,80 € HT avec la livraison à 29 € HT. Le minimum de commande est de 50 € HT, sans minimum de participants et sans abonnement.</p>

      <h2>Livrer à Courbevoie : La Défense, Faubourg de l'Arche, Bécon</h2>
      <p>La commune de Courbevoie couvre une partie du quartier d'affaires de La Défense, le Faubourg de l'Arche, le centre autour de la gare de Courbevoie, le secteur de Bécon-les-Bruyères et les bords de Seine. Pour une livraison dans une tour, donnez à la commande le nom de l'immeuble, l'étage, le contact sur place et l'heure à laquelle les plateaux doivent être posés, pas l'heure de la réunion. Nos commandes sont conditionnées pour le transport en ascenseur.</p>

      <h2>Des plateaux étiquetés, pour une distribution sans question</h2>
      <p>Quand une salle réunit douze personnes aux régimes différents, la distribution ne doit pas devenir un jeu de devinettes. Nos plateaux sont filmés et étiquetés : chacun retrouve le menu prévu pour lui. Tout est halal et sans porc par défaut ; les options végétariennes, véganes et sans gluten se précisent à la commande, avec le nombre de personnes concernées.</p>

      <h2>Du déjeuner à la fin de journée</h2>
      <p>Une réunion qui se termine tard appelle souvent un second temps. Nos <a href="/creations/cocktails">cocktails</a> démarrent à 29,90 € HT par personne pour huit pièces, et se commandent dans la même démarche que les plateaux : même devis, même facture, même interlocuteur. Un petit-déjeuner d'accueil dès 8 € HT par personne complète la journée.</p>

      <h2>Commander des plateaux repas à Courbevoie</h2>
      <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30. Minimum de commande 50 € HT, livraison 29 € HT à Paris et dans les communes proches, facturation entreprise avec TVA. <a href="/devis">Demandez votre devis</a>, réponse sous 24h. Pour le début de la réunion, voir le <a href="/petit-dejeuner-entreprise/courbevoie">petit-déjeuner d'entreprise à Courbevoie</a>. Côté tours de Puteaux et de Nanterre, voir les <a href="/plateaux-repas-entreprise/la-defense">plateaux repas à La Défense</a> et à <a href="/plateaux-repas-entreprise/nanterre">Nanterre</a>.</p>
    `,
    faq: [
      { name: "Livrez-vous les plateaux repas dans les tours de Courbevoie ?", answer: "Oui, côté Courbevoie de La Défense comme au Faubourg de l'Arche et à Bécon. Indiquez le nom de l'immeuble, l'étage, le contact sur place et l'heure de réception : les commandes sont conditionnées pour le transport en ascenseur." },
      { name: "Quel est le budget pour douze plateaux repas à Courbevoie ?", answer: "Pour six plateaux au poulet, quatre végétariens et deux au saumon : 356,80 € HT, soit 385,80 € HT avec 29 € HT de livraison." },
      { name: "Comment s'y retrouver à la distribution quand les régimes sont mélangés ?", answer: "Chaque plateau est filmé et étiqueté. Tout est halal et sans porc par défaut ; précisez à la commande les options végétariennes, véganes ou sans gluten avec les effectifs concernés." },
    ],
  },
  {
    slug: 'la-defense',
    name: 'La Défense',
    region: 'Hauts-de-Seine (92)',
    metaTitle: "Plateaux repas d'entreprise à La Défense dès 28,90 € HT",
    metaDescription: "Plateaux repas d'entreprise livrés à La Défense, côté Courbevoie et Puteaux : entrée, plat, dessert dès 28,90 € HT/pers. Dès 6h30, devis sous 24h.",
    heroDescription: "Six plateaux repas individuels, dès 28,90 € HT par personne, pour les comités, formations et réunions qui se prolongent sur le déjeuner, côté Courbevoie comme côté Puteaux, dans une salle ou dans plusieurs.",
    cityHref: '/traiteur/la-defense',
    formules: [
      { nom: 'Végétarien', prix: '28,90 € HT/pers', desc: 'La Solaire, La Provençale et La Potagère. Trois menus végétariens complets, pour les groupes où personne ne doit se contenter d\'une salade.' },
      { nom: 'Poulet', prix: '29,90 € HT/pers', desc: 'La Romaine (salade César) et La Champêtre (poulet et taboulé), pour la majorité d\'une salle.' },
      { nom: 'Saumon', prix: '30,90 € HT/pers', desc: 'La Boréale : pommes de terre sautées et dés de saumon poêlés, compote pomme-fraise, pour les déjeuners de direction.' },
    ],
    selection: [
      { id: 'e4', pourquoi: "Léger, avec un émincé de poulet et du taboulé : pour déjeuner sans alourdir l'après-midi de réunions." },
      { id: 'e3', pourquoi: "Pâtes au pesto, mozzarella et tomates confites : un plat végétarien qui plaît à toute la salle, pas seulement aux végétariens." },
      { id: 'e2', pourquoi: "La salade César au poulet rôti, le menu de référence quand il faut commander vite pour une grosse équipe." },
    ],
    seoArticle: `
      <p><strong>La Défense</strong> s'étend sur les communes de Courbevoie et de Puteaux, avec le Parvis, le boulevard circulaire et la gare au centre du quartier. Dans un quartier de tours, plusieurs réunions peuvent se tenir en même temps, dans plusieurs salles, parfois sur plusieurs étages. Le plateau repas répond à cette organisation : un menu complet par personne, livré à l'heure fixée. Nous livrons dès <strong>6h30</strong>, du lundi au vendredi.</p>

      <h2>Plusieurs salles, une seule commande</h2>
      <p>Pour une commande répartie sur plusieurs salles, précisez à la commande la répartition des menus, l'étage de chaque salle et le contact sur place. Les effectifs peuvent varier d'une salle à l'autre : six personnes dans l'une, vingt dans l'autre. Chaque plateau est filmé et étiqueté, ce qui permet de distribuer sans interrompre les échanges.</p>

      <h2>Le prix d'une grosse commande</h2>
      <p>Les plateaux sont à 28,90 € HT par personne en végétarien, 29,90 € HT au poulet et 30,90 € HT au saumon. Pour trente personnes, avec quatorze plateaux au poulet, dix végétariens et six au saumon : 893 € HT, soit 922 € HT avec 29 € HT de livraison. Au-delà, le devis détaille le format et la quantité sous 24h.</p>

      <h2>Livraison dans une tour : ce qu'il nous faut</h2>
      <p>Une tour ne se livre pas comme un immeuble de bureaux classique : accès livraison, créneau de réception, parfois un badge visiteur à déclarer la veille. À la commande, indiquez :</p>
      <ul>
        <li>le nom de la tour et l'étage de chaque salle</li>
        <li>le nom et le numéro du contact sur place</li>
        <li>l'heure à laquelle les plateaux doivent être posés, pas l'heure de la réunion</li>
        <li>la procédure d'accès si votre site en impose une</li>
      </ul>
      <p>Nous livrons côté Courbevoie comme côté Puteaux, dans les tours comme dans les immeubles plus petits autour du Parvis.</p>

      <h2>Une carte pour tous les régimes</h2>
      <p>Tout est halal et sans porc par défaut. Les options végétariennes, véganes et sans gluten se précisent à la commande, avec les effectifs concernés. Les trois menus végétariens, <a href="/creations/plateaux-repas/e1">La Solaire</a>, <a href="/creations/plateaux-repas/e3">La Provençale</a> et <a href="/creations/plateaux-repas/e6">La Potagère</a>, sont au même prix que le reste de la carte, avec la même générosité.</p>

      <h2>Plateaux ou buffet à partager ?</h2>
      <p>Le plateau est le bon format quand les salles sont séparées ou que chacun reste à sa place. Au-delà d'une quinzaine de personnes réunies dans un même lieu, un buffet à partager se sert plus vite : les formats sont sur la page <a href="/creations/a-partager">à partager</a>. Dites-nous la configuration, nous recommandons le format le plus simple à servir.</p>

      <h2>Commander des plateaux repas à La Défense</h2>
      <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30. Minimum de commande 50 € HT, livraison 29 € HT, facturation entreprise avec TVA. Pour une équipe qui commande chaque semaine, un interlocuteur dédié peut être mis en place. <a href="/devis">Demandez votre devis</a>, réponse sous 24h. Voir aussi le <a href="/petit-dejeuner-entreprise/la-defense">petit-déjeuner d'entreprise à La Défense</a> et les <a href="/traiteur/la-defense/tours">tours desservies</a>.</p>
    `,
    faq: [
      { name: "Pouvez-vous livrer plusieurs salles de réunion dans une même tour ?", answer: "Oui. Indiquez à la commande la répartition des menus par salle, l'étage de chacune et le contact sur place. Les effectifs peuvent varier d'une salle à l'autre, et chaque plateau est étiqueté." },
      { name: "Livrez-vous côté Puteaux comme côté Courbevoie ?", answer: "Oui, dans l'ensemble du quartier d'affaires, que la tour soit sur la commune de Courbevoie ou sur celle de Puteaux, ainsi que dans les immeubles autour du Parvis." },
      { name: "Quel est le budget pour trente plateaux repas ?", answer: "Pour quatorze plateaux au poulet, dix végétariens et six au saumon : 893 € HT, soit 922 € HT avec 29 € HT de livraison. Le devis arrive sous 24h." },
    ],
  },
  {
    slug: 'boulogne-billancourt',
    name: 'Boulogne-Billancourt',
    region: 'Hauts-de-Seine (92)',
    metaTitle: "Plateaux repas entreprise Boulogne-Billancourt dès 28,90 €",
    metaDescription: "Plateaux repas d'entreprise à Boulogne-Billancourt, notre commune d'attache : entrée, plat, dessert dès 28,90 € HT/pers. Dès 6h30, devis sous 24h.",
    heroDescription: "Notre atelier est au 63 bis rue de Sèvres, à Boulogne-Billancourt. Les plateaux repas partent d'à côté : six menus complets dès 28,90 € HT par personne, livrés au Trapèze, à Pont-de-Sèvres et dans toute la commune.",
    cityHref: '/traiteur/boulogne-billancourt',
    formules: [
      { nom: 'Végétarien', prix: '28,90 € HT/pers', desc: 'La Solaire, La Provençale et La Potagère, préparés à quelques rues de chez vous.' },
      { nom: 'Poulet', prix: '29,90 € HT/pers', desc: 'La Romaine, une salade César, et La Champêtre, avec émincé de poulet et taboulé.' },
      { nom: 'Saumon', prix: '30,90 € HT/pers', desc: 'La Boréale : céleri rémoulade, pommes de terre sautées et dés de saumon poêlés, compote pomme-fraise.' },
    ],
    selection: [
      { id: 'e6', pourquoi: "Salade de lentilles et feta, tarte aux légumes du soleil : un menu végétarien qui tient au corps jusqu'à la fin de la journée." },
      { id: 'e4', pourquoi: "Concombre au yaourt, émincé de poulet et taboulé, salade de fruits frais : frais et léger." },
      { id: 'e5', pourquoi: "Dés de saumon poêlés, pommes de terre sautées et céleri rémoulade : le plateau pour une réunion avec un invité." },
    ],
    seoArticle: `
      <p><strong>Boulogne-Billancourt</strong> est notre commune d'attache : notre atelier est au 63 bis rue de Sèvres. Les plateaux repas livrés sur la commune sont donc préparés à quelques rues de leur destination, le matin même, puis posés chez vous à l'heure convenue, dès <strong>6h30</strong>, du lundi au vendredi. Du Trapèze à Pont-de-Sèvres, en passant par le centre-ville, l'île Seguin et la route de la Reine, nous sommes sur place.</p>

      <h2>Ce que la proximité change</h2>
      <p>Un plateau repas se commande normalement avant 14h la veille. Boulogne-Billancourt est la commune où nous acceptons le plus facilement les commandes du matin même : jusqu'à 10h, sur la sélection disponible du jour et dans la limite des quantités. Un invité de plus, un menu végétarien oublié : c'est rattrapable ici, ce qui n'est pas vrai partout. Une commande reste par ailleurs modifiable jusqu'à 14h la veille.</p>

      <h2>Les six plateaux et leurs prix</h2>
      <p>La collection Essentiel compte six plateaux, chacun avec une entrée, un plat et un dessert. Les menus végétariens sont à 28,90 € HT par personne (<a href="/creations/plateaux-repas/e1">La Solaire</a>, <a href="/creations/plateaux-repas/e3">La Provençale</a>, <a href="/creations/plateaux-repas/e6">La Potagère</a>). Les menus au poulet sont à 29,90 € HT (<a href="/creations/plateaux-repas/e2">La Romaine</a>, <a href="/creations/plateaux-repas/e4">La Champêtre</a>). Le menu au saumon, <a href="/creations/plateaux-repas/e5">La Boréale</a>, est à 30,90 € HT. Pour huit personnes avec huit plateaux végétariens : 231,20 € HT, soit 260,20 € HT avec la livraison à 29 € HT.</p>

      <h2>Trapèze, Pont-de-Sèvres, centre-ville : donner le bon accès</h2>
      <p>Au Trapèze et à Pont-de-Sèvres, les immeubles sont grands et les accès multiples. Dans le centre-ville, le stationnement est plus contraint. Dans tous les cas, indiquez à la commande l'adresse exacte, l'étage, le contact sur place et l'heure à laquelle les plateaux doivent être posés. Si votre bureau est de l'autre côté du pont, à <a href="/traiteur/sevres">Sèvres</a>, ou à <a href="/traiteur/saint-cloud">Saint-Cloud</a>, nous livrons aussi.</p>

      <h2>Du petit-déjeuner au cocktail, depuis le même atelier</h2>
      <p>Une seule adresse pour toute la journée : le <a href="/creations/petits-dejeuners-et-pauses">petit-déjeuner d'entreprise</a> dès 8 € HT par personne, les plateaux repas à midi, les <a href="/creations/cocktails">cocktails</a> dès 29,90 € HT par personne pour huit pièces en fin de journée. Un devis, une facture, un interlocuteur.</p>

      <h2>Halal et sans porc, avec des options pour chacun</h2>
      <p>Tout est halal et sans porc par défaut. Végétarien, végane, sans gluten : précisez les besoins à la commande avec le nombre de personnes concernées, et les plateaux sont composés en conséquence, avec couverts et serviettes.</p>

      <h2>Commander des plateaux repas à Boulogne-Billancourt</h2>
      <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30. Minimum de commande 50 € HT, livraison 29 € HT, facturation entreprise avec TVA, sans abonnement. <a href="/devis">Demandez votre devis</a>, réponse sous 24h. Retrouvez aussi le <a href="/petit-dejeuner-entreprise/boulogne-billancourt">petit-déjeuner d'entreprise à Boulogne-Billancourt</a> et toutes nos <a href="/traiteur/boulogne-billancourt">prestations sur la commune</a>.</p>
    `,
    faq: [
      { name: "Jusqu'à quand puis-je modifier ou compléter ma commande de plateaux ?", answer: "Jusqu'à 14h la veille. Les commandes de dernière minute sont acceptées jusqu'à 10h le matin même, sur la sélection disponible du jour et dans la limite des quantités. L'atelier est sur la commune, ce qui rend ces ajustements possibles." },
      { name: "Livrez-vous au Trapèze, à Pont-de-Sèvres et sur l'île Seguin ?", answer: "Oui, dans toute la commune dès 6h30. Indiquez l'adresse exacte, l'étage, le contact sur place et l'heure à laquelle les plateaux doivent être posés." },
      { name: "Quel est le budget pour huit plateaux repas ?", answer: "Huit plateaux végétariens : 231,20 € HT, soit 260,20 € HT avec 29 € HT de livraison. Huit plateaux au poulet : 239,20 € HT, soit 268,20 € HT avec la livraison." },
    ],
  },
  {
    slug: 'suresnes',
    name: 'Suresnes',
    region: 'Hauts-de-Seine (92)',
    metaTitle: "Plateaux repas d'entreprise à Suresnes dès 28,90 € HT",
    metaDescription: "Plateaux repas d'entreprise livrés à Suresnes : entrée, plat, dessert dès 28,90 € HT/pers. Mont-Valérien, bords de Seine, Cottages. Dès 6h30, devis 24h.",
    heroDescription: "Des plateaux repas individuels pour les comités de direction, les équipes de dix et les journées de travail à Suresnes : entrée, plat et dessert dès 28,90 € HT par personne, livrés au centre-ville, au Mont-Valérien et aux Cottages.",
    cityHref: '/traiteur/suresnes',
    formules: [
      { nom: 'Végétarien', prix: '28,90 € HT/pers', desc: 'La Solaire, La Provençale et La Potagère : trois menus complets, au même prix que le reste de la carte.' },
      { nom: 'Poulet', prix: '29,90 € HT/pers', desc: 'La Romaine, une salade César, et La Champêtre, avec émincé de poulet et taboulé.' },
      { nom: 'Saumon', prix: '30,90 € HT/pers', desc: 'La Boréale : dés de saumon poêlés, pommes de terre sautées et compote pomme-fraise.' },
    ],
    selection: [
      { id: 'e5', pourquoi: "Pour un comité de direction : céleri rémoulade, pommes de terre sautées et dés de saumon poêlés, compote pomme-fraise, dressés avec soin." },
      { id: 'e2', pourquoi: "Salade de tomates anciennes, César au poulet rôti et brownie : un classique qui ne surprend personne." },
      { id: 'e3', pourquoi: "Salade fraîcheur, pâtes au pesto, mozzarella et panna cotta : un plateau végétarien aux saveurs du sud." },
    ],
    seoArticle: `
      <p><strong>Suresnes</strong> est une ville de taille moyenne, adossée au Mont-Valérien et ouverte sur la Seine. Pour une réunion d'une dizaine de personnes, comité de direction, équipe projet ou conseil, le plateau repas individuel est le format le plus simple : chacun a son menu complet, posé à l'heure convenue, sans buffet à monter. Nous livrons à Suresnes dès <strong>6h30</strong>, du lundi au vendredi.</p>

      <h2>Où nous livrons à Suresnes</h2>
      <p>Nous couvrons le centre-ville, autour de la gare de Suresnes-Mont-Valérien, les bords de Seine, le quartier du Mont-Valérien et la ZAC des Cottages, jusqu'aux limites de Puteaux, de Nanterre, de Rueil-Malmaison et de Saint-Cloud. Pour chaque commande, donnez l'adresse, l'étage, le contact sur place et l'heure à laquelle les plateaux doivent être posés, pas l'heure de la réunion.</p>

      <h2>Un comité de dix personnes</h2>
      <p>Pour dix personnes, avec cinq plateaux au poulet, trois végétariens et deux au saumon, comptez 298 € HT, soit 327 € HT avec la livraison à 29 € HT. Le minimum de commande est de 50 € HT, sans minimum de participants. Un plateau repas, c'est une entrée, un plat et un dessert, avec couverts et serviettes : <a href="/creations/plateaux-repas">les six menus</a> sont détaillés sur la page des plateaux repas.</p>

      <h2>Une réunion de direction du matin au déjeuner</h2>
      <p>Pour une réunion qui commence tôt et se prolonge, le plus simple est de commander les deux services ensemble : un <a href="/petit-dejeuner-entreprise/suresnes">petit-déjeuner d'accueil</a> dès 8 € HT par personne, puis des plateaux repas à midi. La commande est unique, avec l'horaire de chaque service. Tout est halal et sans porc par défaut ; les options végétariennes, véganes et sans gluten se précisent à la commande.</p>

      <h2>Un déjeuner avec des invités extérieurs</h2>
      <p>Quand vous recevez un partenaire, un candidat ou un auditeur, le plateau se pose au même moment pour tous, sans service ni attente. Précisez les restrictions de vos invités à la commande : les plateaux sont étiquetés. Pour vingt personnes, comptez entre 578 et 618 € HT selon les menus, plus 29 € HT de livraison.</p>

      <h2>Des recettes de saison, préparées le matin même</h2>
      <p>Six plateaux, trois niveaux de prix : 28,90 € HT en végétarien, 29,90 € HT au poulet, 30,90 € HT au saumon. Les recettes suivent la saison, elles sont préparées le matin même et dressées en plateau individuel. Rien d'industriel, et le même soin que la commande soit de deux plateaux ou de vingt.</p>

      <h2>Commander des plateaux repas à Suresnes</h2>
      <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30. Minimum de commande 50 € HT, livraison 29 € HT, facturation entreprise avec TVA. <a href="/devis">Demandez votre devis</a>, réponse sous 24h. Retrouvez aussi nos <a href="/traiteur/suresnes">autres prestations à Suresnes</a>, et les plateaux repas de <a href="/plateaux-repas-entreprise/nanterre">Nanterre</a> et de <a href="/plateaux-repas-entreprise/boulogne-billancourt">Boulogne-Billancourt</a>, juste à côté.</p>
    `,
    faq: [
      { name: "Livrez-vous au Mont-Valérien et à la ZAC des Cottages ?", answer: "Oui, ainsi qu'au centre-ville et sur les bords de Seine, dès 6h30. Précisez l'étage, le contact sur place et l'heure à laquelle les plateaux doivent être posés." },
      { name: "Quel est le budget pour une réunion de direction de dix personnes ?", answer: "Pour cinq plateaux au poulet, trois végétariens et deux au saumon : 298 € HT, soit 327 € HT avec 29 € HT de livraison." },
      { name: "Peut-on commander le petit-déjeuner et les plateaux repas ensemble ?", answer: "Oui, dans la même commande, avec l'horaire de livraison de chaque service. Le petit-déjeuner d'entreprise démarre à 8 € HT par personne, les plateaux repas à 28,90 € HT." },
    ],
  },
  {
    slug: 'nanterre',
    name: 'Nanterre',
    region: 'Hauts-de-Seine (92)',
    metaTitle: "Plateaux repas d'entreprise à Nanterre dès 28,90 € HT",
    metaDescription: "Plateaux repas d'entreprise livrés à Nanterre : entrée, plat, dessert dès 28,90 € HT/pers. Seine-Arche, Préfecture, université. Dès 6h30, devis 24h.",
    heroDescription: "Journées de formation, séminaires, comités : des plateaux repas individuels dès 28,90 € HT par personne, étiquetés pour les groupes mixtes, livrés à Seine-Arche, à la Préfecture, au Petit-Nanterre et à l'université.",
    cityHref: '/traiteur/nanterre',
    formules: [
      { nom: 'Végétarien', prix: '28,90 € HT/pers', desc: 'La Solaire, La Provençale et La Potagère, pour les participants qui ne mangent ni viande ni poisson.' },
      { nom: 'Poulet', prix: '29,90 € HT/pers', desc: 'La Romaine, une salade César, et La Champêtre, avec émincé de poulet et taboulé.' },
      { nom: 'Saumon', prix: '30,90 € HT/pers', desc: 'La Boréale : céleri rémoulade, pommes de terre sautées et dés de saumon poêlés, compote pomme-fraise.' },
    ],
    selection: [
      { id: 'e1', pourquoi: "Houmous, quinoa aux falafels et cookie : pour la part végétarienne d'un groupe de formation." },
      { id: 'e4', pourquoi: "Léger et frais, pour déjeuner à midi sans alourdir la session de l'après-midi." },
      { id: 'e2', pourquoi: "La salade César au poulet rôti : le menu du plus grand nombre quand le groupe est large." },
    ],
    seoArticle: `
      <p><strong>Nanterre</strong> est la ville-porte de La Défense. Entre Défense-Seine-Arche, le secteur de la Préfecture, le Petit-Nanterre et le campus de l'université, les déjeuners s'y organisent souvent autour de journées de formation, de séminaires et de comités. Le plateau repas individuel s'y prête bien : un menu complet par participant, livré à l'heure convenue, sans buffet à installer. Nous livrons dès <strong>6h30</strong>, du lundi au vendredi.</p>

      <h2>Groupes mixtes : du végétarien au saumon</h2>
      <p>Une session de formation réunit rarement vingt personnes aux mêmes besoins. Sur les six plateaux de la carte, trois sont végétariens à 28,90 € HT par personne, deux au poulet à 29,90 € HT, un au saumon à 30,90 € HT. Tout est halal et sans porc par défaut, ce qui évite de gérer une commande à part. Les plateaux sont filmés et étiquetés : le formateur distribue sans demander à chacun ce qu'il a commandé.</p>

      <h2>Vingt participants, un budget</h2>
      <p>Pour vingt personnes, avec dix plateaux au poulet, sept végétariens et trois au saumon : 594 € HT, soit 623 € HT avec 29 € HT de livraison. Pour une commande de plus de vingt personnes, <a href="/devis">demandez un devis</a> : il détaille le format et la quantité sous 24h.</p>

      <h2>Deux pauses, un déjeuner : une seule commande</h2>
      <p>Une journée de formation demande souvent trois temps : la pause du matin, le déjeuner, la pause de l'après-midi. Ils se commandent ensemble, avec des produits différents à chaque service : viennoiseries et fruits le matin, plateaux repas à midi, chouquettes, cookies et madeleines l'après-midi. Le détail des pauses est sur la page du <a href="/petit-dejeuner-entreprise/nanterre">petit-déjeuner d'entreprise à Nanterre</a>.</p>

      <h2>Sites à accès contrôlé</h2>
      <p>Sur un site à barrière, avec poste de sécurité ou badge visiteur, donnez à la commande la procédure d'accès et le nom du contact sur place, et nous calons l'heure de réception en conséquence. Précisez aussi si les plateaux doivent passer par un accès livraison ou un ascenseur de service. Certains sites, campus et administrations compris, fonctionnent de cette façon : un livreur qui attend à l'entrée, ce sont des plateaux qui arrivent après le début de la session.</p>

      <h2>Des sessions qui reviennent chaque semaine</h2>
      <p>Pour des formations ou des comités récurrents, un interlocuteur dédié peut être mis en place : mêmes adresses et mêmes contacts d'une session à l'autre, un effectif à ajuster la veille, une facturation entreprise avec TVA. La commande suivante se règle en quelques lignes, sans repartir de zéro.</p>

      <h2>Commander des plateaux repas à Nanterre</h2>
      <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30. Minimum de commande 50 € HT, livraison 29 € HT, facturation entreprise avec TVA, sans abonnement. Retrouvez aussi nos <a href="/traiteur/nanterre">autres prestations à Nanterre</a>. Pour les communes voisines, voir les <a href="/plateaux-repas-entreprise/courbevoie">plateaux repas à Courbevoie</a> et à <a href="/plateaux-repas-entreprise/suresnes">Suresnes</a>.</p>
    `,
    faq: [
      { name: "Livrez-vous à l'université et dans le secteur de la Préfecture ?", answer: "Oui : Défense-Seine-Arche, secteur Préfecture, Petit-Nanterre et campus, dès 6h30. Sur un site à accès contrôlé, indiquez la procédure d'accès et le contact sur place à la commande." },
      { name: "Comment gérer des participants aux régimes différents lors d'une formation ?", answer: "Les plateaux sont filmés et étiquetés. Tout est halal et sans porc par défaut ; précisez à la commande les options végétariennes, véganes ou sans gluten, avec les effectifs concernés." },
      { name: "Quel est le budget pour vingt plateaux repas à Nanterre ?", answer: "Pour dix plateaux au poulet, sept végétariens et trois au saumon : 594 € HT, soit 623 € HT avec 29 € HT de livraison." },
    ],
  },
]
