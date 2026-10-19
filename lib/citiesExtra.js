// Nouvelles villes et arrondissements (mêmes champs que lib/citiesData.js), fusionnés dans CITIES
// Repères géographiques : uniquement des lieux publics (gares, grands axes, quartiers, communes voisines).

export const CITIES_EXTRA = [
  {
    slug: 'sevres',
    name: 'Sèvres',
    region: 'Hauts-de-Seine (92)',
    subtitle: "Traiteur d'entreprise, commune voisine de notre atelier",
    heroDescription: "Sèvres est la commune voisine de Boulogne-Billancourt, où se trouve notre atelier, rue de Sèvres. L'Écrin Traiteur livre petits-déjeuners, plateaux repas, cocktails et buffets dans les bureaux de Sèvres dès 6h30.",
    zones: ['Centre-ville', 'Grande Rue', 'Pont de Sèvres', 'Manufacture de Sèvres', 'Bords de Seine'],
    businessContext: "Sèvres est une commune des Hauts-de-Seine au bord de la Seine, voisine de Boulogne-Billancourt, de Saint-Cloud et de Meudon. Notre atelier est à Boulogne-Billancourt, au 63 bis rue de Sèvres.",
    seoTitle: "Traiteur d'entreprise Sèvres 92",
    metaTitle: "Traiteur entreprise Sèvres : livré dès 6h30, devis 24h",
    metaDescription: "Traiteur d'entreprise à Sèvres (92) : petit-déjeuner dès 8 € HT/pers., plateaux repas dès 28,90 € HT, livraison dès 6h30. Devis sous 24h.",
    faq: [
      { q: "Livrez-vous à Sèvres depuis votre atelier de Boulogne-Billancourt ?", a: "Oui. Notre atelier est au 63 bis rue de Sèvres, à Boulogne-Billancourt, commune voisine de Sèvres. Les commandes pour Sèvres sont préparées là et livrées dès 6h30, du lundi au vendredi." },
      { q: "Quel budget prévoir pour une réunion de dix personnes à Sèvres ?", a: "Un petit-déjeuner Classique revient à 80 € HT pour dix personnes, soit 109 € HT avec 29 € HT de livraison. Dix plateaux repas coûtent de 289 à 309 € HT selon les menus, plus la livraison." },
      { q: "Faut-il un minimum de personnes ou un abonnement ?", a: "Non. Le minimum de commande est de 50 € HT, sans minimum de participants et sans abonnement. La facturation entreprise avec TVA est standard." },
    ],
    seoArticle: `
      <p><strong>Sèvres</strong> est la commune voisine de Boulogne-Billancourt, où se trouve notre atelier, au 63 bis rue de Sèvres. Les commandes pour Sèvres partent donc d'à côté : petits-déjeuners, plateaux repas, cocktails et buffets sont préparés à Boulogne-Billancourt, puis livrés chez vous dès <strong>6h30</strong>, du lundi au vendredi.</p>

      <h2>Où nous livrons à Sèvres</h2>
      <p>Nous livrons dans l'ensemble de la commune : le centre-ville et la Grande Rue, les abords du pont de Sèvres, les bords de Seine, le secteur de la Manufacture nationale et de la Cité de la céramique, jusqu'aux limites de Saint-Cloud, de Meudon, de Chaville et de Ville-d'Avray. Votre équipe est dans un immeuble de bureaux, un cabinet ou un bureau en rez-de-chaussée : la commande arrive prête à poser sur table.</p>

      <h2>Ce qu'il faut nous dire à la commande</h2>
      <p>Pour que la livraison se passe bien, donnez l'adresse exacte, l'étage, le nom du contact sur place et l'heure à laquelle tout doit être posé, pas l'heure de la réunion. Si le bâtiment n'a pas d'ascenseur ou si l'entrée se fait par une cour, dites-le : nous calons le créneau en conséquence, et personne n'attend devant une porte fermée.</p>

      <h2>Ce que vous pouvez commander à Sèvres</h2>
      <ul>
        <li>Le <a href="/creations/petits-dejeuners-et-pauses">petit-déjeuner d'entreprise</a>, dès 8 € HT par personne : viennoiseries, jus, café et corbeille de fruits.</li>
        <li>Les <a href="/creations/plateaux-repas">plateaux repas</a>, dès 28,90 € HT par personne : entrée, plat et dessert, dressés en plateau individuel le matin même.</li>
        <li>Les <a href="/creations/cocktails">cocktails</a>, dès 29,90 € HT par personne pour huit pièces, pour un pot de départ ou une fin de projet.</li>
        <li>Les buffets et les pauses de séminaire, chiffrés sur devis.</li>
      </ul>
      <p>Pour un déjeuner de réunion, la page <a href="/plateaux-repas-entreprise/boulogne-billancourt">plateaux repas d'entreprise à Boulogne-Billancourt</a> détaille les six menus, livrés à Sèvres aux mêmes conditions.</p>

      <h2>Halal et sans porc, avec des options pour chacun</h2>
      <p>Tout est halal et sans porc par défaut. Les options végétariennes, véganes et sans gluten se précisent à la commande, avec le nombre de personnes concernées, pour que chacun ait un menu équivalent en qualité et en quantité.</p>

      <h2>Une équipe qui commande chaque semaine</h2>
      <p>Pour un rendez-vous hebdomadaire, un comité du lundi ou des déjeuners réguliers, un interlocuteur dédié peut être mis en place : mêmes adresses, mêmes contacts sur place, un devis clair et une facture unique. Un oubli la veille ? Une commande reste modifiable jusqu'à 14h la veille.</p>

      <h2>Commander à Sèvres</h2>
      <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30. Minimum de commande 50 € HT, livraison 29 € HT, facturation entreprise avec TVA, sans abonnement ni engagement de volume. <a href="/devis">Demandez votre devis</a>, réponse sous 24h. Nous livrons aussi à <a href="/traiteur/boulogne-billancourt">Boulogne-Billancourt</a> et à <a href="/traiteur/saint-cloud">Saint-Cloud</a>, juste à côté.</p>
    `,
  },
]

export const PARIS_QUARTIERS_EXTRA = [
  {
    slug: '4e-arrondissement',
    name: 'Paris 4e, Marais & Hôtel de Ville',
    heroDescription: "Le 4e arrondissement, Marais, Hôtel de Ville, Beaubourg, île Saint-Louis, L'Écrin Traiteur livre petits-déjeuners, plateaux repas et cocktails dans les immeubles anciens du centre de Paris, dès 6h30.",
    linkedZones: ['Paris 4e', 'Marais'],
    seoTitle: "Traiteur d'entreprise Paris 4e",
    seoDescription: "Petits-déjeuners, plateaux repas et cocktails livrés dans le 4e : Marais, Hôtel de Ville, Beaubourg, île Saint-Louis. Dès 6h30, devis sous 24h.",
    faq: [
      { q: "Livrez-vous dans les immeubles anciens du Marais, avec cour intérieure ou escalier ?", a: "Oui. Indiquez à la commande l'étage, le code ou l'interphone, la présence d'un ascenseur et le contact sur place. Nous calons le créneau de livraison avec ces informations." },
      { q: "Quel budget prévoir pour dix personnes dans le 4e ?", a: "Petit-déjeuner Classique : 80 € HT, soit 109 € HT avec 29 € HT de livraison. Dix plateaux repas : de 289 à 309 € HT selon les menus, plus la livraison." },
      { q: "Faut-il un minimum de personnes ou un abonnement ?", a: "Non. Le minimum de commande est de 50 € HT, sans minimum de participants et sans abonnement." },
    ],
    seoArticle: `
      <p>Le <strong>4e arrondissement de Paris</strong> s'étend du Marais à l'île Saint-Louis, de l'Hôtel de Ville à la Bastille, en passant par Beaubourg et la rue de Rivoli. Les bâtiments y sont anciens, les rues étroites et les cours nombreuses. L'Écrin Traiteur y livre petits-déjeuners, plateaux repas et cocktails dès <strong>6h30</strong>, du lundi au vendredi, pour six personnes comme pour soixante.</p>

      <h2>Livrer dans un immeuble ancien : ce qu'il faut nous dire</h2>
      <p>Entre l'Hôtel de Ville et le Marais, beaucoup d'adresses se trouvent dans des immeubles anciens, avec cour intérieure, escalier étroit, ascenseur de petite taille ou pas d'ascenseur du tout. Rien de bloquant, à condition de le savoir. À la commande, indiquez l'étage, le code ou l'interphone, la présence d'un ascenseur et le nom du contact sur place. Nous calons le créneau avec ces informations, et vous évitez qu'un livreur attende devant une porte fermée pendant que le café refroidit.</p>

      <h2>Un déjeuner de réunion sans quitter la salle</h2>
      <p>Les <a href="/creations/plateaux-repas">plateaux repas</a> conviennent aux réunions qui se prolongent sur le déjeuner : chacun a son entrée, son plat et son dessert, dressés en plateau individuel le matin même, avec couverts et serviettes. Trois niveaux de prix : 28,90 € HT par personne pour les menus végétariens, 29,90 € HT pour le poulet, 30,90 € HT pour le saumon. Pour dix personnes, comptez entre 289 et 309 € HT, plus 29 € HT de livraison.</p>

      <h2>Petit-déjeuner d'accueil, cocktail de fin de journée</h2>
      <p>Le <a href="/creations/petits-dejeuners-et-pauses">petit-déjeuner d'entreprise</a> commence à 8 € HT par personne : viennoiseries, jus, café et fruits. Pour dix personnes, cela fait 80 € HT, soit 109 € HT livraison comprise. En fin de journée, les <a href="/creations/cocktails">cocktails</a> démarrent à 29,90 € HT par personne pour huit pièces, de quoi marquer un départ, une signature ou la clôture d'un projet.</p>

      <h2>Halal et sans porc, avec des options pour chacun</h2>
      <p>Tout est halal et sans porc par défaut. Les options végétariennes, véganes et sans gluten se précisent à la commande, avec le nombre de convives concernés.</p>

      <h2>Pas de cuisine ni d'office : la commande arrive prête à servir</h2>
      <p>Beaucoup de locaux anciens du centre n'ont ni cuisine ni office. Nos commandes arrivent dressées et prêtes à servir, avec gobelets, serviettes, vaisselle et couverts jetables inclus sans supplément. Il suffit d'une table et d'une personne pour réceptionner. Vous n'avez rien à chauffer, à découper ni à installer avant l'arrivée de vos invités.</p>

      <h2>Commander pour le 4e</h2>
      <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30. Minimum de commande 50 € HT, livraison 29 € HT, facturation entreprise avec TVA, sans abonnement ni minimum de participants. <a href="/devis">Demandez votre devis</a>, réponse sous 24h. Les arrondissements voisins ont leur page : <a href="/traiteur/paris/3e-arrondissement">3e</a>, <a href="/traiteur/paris/1er-arrondissement">1er</a>, <a href="/traiteur/paris/5e-arrondissement">5e</a> et <a href="/traiteur/paris/12e-arrondissement">12e</a>.</p>
    `,
  },
  {
    slug: '5e-arrondissement',
    name: 'Paris 5e, Quartier Latin',
    heroDescription: "Le 5e arrondissement, Quartier Latin, Panthéon, Mouffetard, Jardin des plantes, L'Écrin Traiteur livre petits-déjeuners, pauses, plateaux repas et cocktails pour les colloques, jurys et journées d'étude, dès 6h30.",
    linkedZones: ['Paris 5e', 'Quartier Latin'],
    seoTitle: "Traiteur d'entreprise Paris 5e",
    seoDescription: "Petits-déjeuners, pauses, plateaux repas et cocktails livrés dans le 5e : Quartier Latin, Panthéon, Mouffetard. Dès 6h30, devis sous 24h.",
    faq: [
      { q: "Pouvez-vous livrer une journée d'étude complète dans le 5e ?", a: "Oui : accueil café le matin, plateaux repas à midi, pause l'après-midi, dans la même commande ou en commandes séparées. Précisez les horaires de chaque service et le nombre de participants." },
      { q: "Comment gérez-vous les régimes alimentaires pour un colloque ?", a: "Tout est halal et sans porc par défaut. Les options végétariennes, véganes et sans gluten se précisent à la commande avec les effectifs concernés, et les plateaux sont étiquetés." },
      { q: "Quel est le budget pour vingt participants à midi ?", a: "Vingt plateaux repas coûtent de 578 à 618 € HT selon les menus, plus 29 € HT de livraison. Le minimum de commande est de 50 € HT, sans abonnement." },
    ],
    seoArticle: `
      <p>Le <strong>5e arrondissement de Paris</strong> est celui du Quartier Latin : la montagne Sainte-Geneviève, le Panthéon, la rue Mouffetard, le Jardin des plantes, le boulevard Saint-Michel, et de nombreux établissements d'enseignement supérieur et de recherche. On y organise des colloques, des jurys, des conseils et des journées d'étude, qui demandent plus qu'un simple café. L'Écrin Traiteur y livre dès <strong>6h30</strong>, du lundi au vendredi.</p>

      <h2>Une journée d'étude en trois services</h2>
      <p>Une journée complète se découpe en trois temps. Le matin, un <a href="/creations/petits-dejeuners-et-pauses">petit-déjeuner d'accueil</a> dès 8 € HT par personne, prêt avant l'arrivée des intervenants. À midi, des <a href="/creations/plateaux-repas">plateaux repas</a> individuels, pour déjeuner sans interrompre le programme. L'après-midi, une <a href="/creations/pauses-gourmandes">pause gourmande</a> pour relancer les échanges. Les trois services se commandent ensemble, avec des produits différents à chaque fois : viennoiseries et fruits le matin, cookies, madeleines et chouquettes l'après-midi.</p>

      <h2>Des plateaux étiquetés pour les groupes mixtes</h2>
      <p>Dans un colloque, les régimes se mélangent : végétarien, halal, sans gluten. Nos plateaux sont filmés et étiquetés, ce qui permet de distribuer sans demander à chaque participant ce qu'il a commandé. Trois niveaux de prix : 28,90 € HT par personne pour les menus végétariens, 29,90 € HT pour le poulet, 30,90 € HT pour le saumon. Pour vingt participants, comptez entre 578 et 618 € HT, plus 29 € HT de livraison.</p>

      <h2>Rues étroites : donnez l'heure de réception</h2>
      <p>Autour de la montagne Sainte-Geneviève et de la rue Mouffetard, les rues sont étroites et le stationnement des véhicules de livraison est limité. C'est pourquoi nous vous demandons l'heure à laquelle tout doit être posé plutôt que l'heure de la réunion, ainsi que l'étage, l'entrée et le contact sur place. Si votre établissement a une loge ou un accueil, donnez aussi le nom de la personne à demander en arrivant. Avec ces informations, la commande arrive là où elle est attendue, à l'heure.</p>

      <h2>Pour les réceptions de fin de journée</h2>
      <p>Une soutenance, un vernissage de fin d'année ou un pot de départ : nos <a href="/creations/cocktails">cocktails</a> démarrent à 29,90 € HT par personne pour huit pièces. Tout est halal et sans porc par défaut ; les options végétariennes, véganes et sans gluten se précisent à la commande.</p>

      <h2>Des effectifs qui bougent jusqu'au dernier moment</h2>
      <p>Dans un colloque ou un jury, le nombre de présents change souvent la veille. Une commande reste modifiable jusqu'à 14h la veille. Annoncez un effectif prudent dès le devis, nous ajustons ensuite sans refaire toute la commande.</p>

      <h2>Commander pour le 5e</h2>
      <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30. Minimum de commande 50 € HT, livraison 29 € HT, facturation entreprise avec TVA. <a href="/devis">Demandez votre devis</a>, réponse sous 24h. Pour les arrondissements voisins : <a href="/traiteur/paris/6e-arrondissement">6e</a>, <a href="/traiteur/paris/13e-arrondissement">13e</a>, <a href="/traiteur/paris/14e-arrondissement">14e</a> et <a href="/traiteur/paris/4e-arrondissement">4e</a>.</p>
    `,
  },
  {
    slug: '10e-arrondissement',
    name: 'Paris 10e, Gare du Nord & Canal Saint-Martin',
    heroDescription: "Le 10e arrondissement, Gare du Nord, Gare de l'Est, canal Saint-Martin, République, L'Écrin Traiteur livre petits-déjeuners, plateaux repas et cocktails pour les équipes qui reçoivent des collaborateurs venus en train, dès 6h30.",
    linkedZones: ['Paris 10e', 'Gare du Nord'],
    seoTitle: "Traiteur d'entreprise Paris 10e",
    seoDescription: "Petits-déjeuners, plateaux repas et cocktails livrés dans le 10e : Gare du Nord, Gare de l'Est, canal Saint-Martin. Dès 6h30, devis sous 24h.",
    faq: [
      { q: "Livrez-vous assez tôt pour une réunion qui suit l'arrivée d'un train ?", a: "Oui, dès 6h30. Indiquez l'heure à laquelle le petit-déjeuner doit être posé, pas l'heure de la réunion, et nous calons la livraison avant l'arrivée de vos invités." },
      { q: "Livrez-vous autour de la Gare du Nord et de la Gare de l'Est ?", a: "Oui, dans tout le 10e, y compris autour des deux gares, du boulevard de Magenta, du faubourg Saint-Denis et du canal Saint-Martin. Précisez l'étage et le contact sur place." },
      { q: "Quel budget prévoir pour un petit-déjeuner d'accueil de vingt personnes ?", a: "Formule Classique : 160 € HT pour vingt personnes, soit 189 € HT avec 29 € HT de livraison. Le minimum de commande est de 50 € HT." },
    ],
    seoArticle: `
      <p>Le <strong>10e arrondissement de Paris</strong> est organisé autour de deux gares, la Gare du Nord et la Gare de l'Est, et d'un axe d'eau, le canal Saint-Martin. Entre le boulevard de Magenta, le faubourg Saint-Denis, Strasbourg-Saint-Denis et République, beaucoup d'équipes reçoivent des collaborateurs ou des partenaires qui arrivent par le train. L'Écrin Traiteur livre dans tout l'arrondissement dès <strong>6h30</strong>, du lundi au vendredi.</p>

      <h2>Un accueil prêt avant l'arrivée du train</h2>
      <p>Un invité qui arrive en train n'a pas le temps de chercher un café avant la réunion. Commandez le <a href="/creations/petits-dejeuners-et-pauses">petit-déjeuner d'accueil</a> pour l'heure où il doit être posé, pas pour l'heure de la réunion. La formule Classique est à 8 € HT par personne : viennoiseries, jus, café et corbeille de fruits. Pour vingt personnes : 160 € HT, soit 189 € HT avec la livraison.</p>

      <h2>Un déjeuner de séminaire sans perdre la matinée</h2>
      <p>Pour les équipes qui viennent de province, le déjeuner doit être rapide et sans déplacement. Les <a href="/creations/plateaux-repas">plateaux repas</a> se posent sur la table de réunion à l'heure convenue, avec couverts et serviettes : 28,90 € HT par personne en végétarien, 29,90 € HT au poulet, 30,90 € HT au saumon. Tout est halal et sans porc par défaut, ce qui simplifie les groupes mixtes.</p>

      <h2>Canal, République, faubourgs : des accès variés</h2>
      <p>Le 10e mêle immeubles anciens sur cour, bureaux modernes, ateliers et locaux associatifs. Indiquez l'étage, le code ou l'interphone et la présence d'un ascenseur. Pour les adresses proches des gares, où la circulation est dense aux heures de pointe, la livraison très tôt reste la plus fiable : demandez 6h30 ou 7h. Dites-nous aussi si la salle est en étage élevé ou au fond d'une cour : un livreur qui sait où aller gagne du temps, et votre café arrive chaud.</p>

      <h2>Les soirs de lancement et de départ</h2>
      <p>Pour un pot de départ ou un lancement, nos <a href="/creations/cocktails">cocktails</a> se déclinent en trois formules : L'Invitation à huit pièces, La Réception à douze et La Célébration à seize, à partir de 29,90 € HT par personne. Au-delà d'une quinzaine de convives, les formats à partager de la page <a href="/creations/a-partager">à partager</a> sont souvent plus simples à servir.</p>

      <h2>Des réunions qui reviennent chaque semaine</h2>
      <p>Si une équipe du 10e reçoit chaque semaine, un interlocuteur dédié peut être mis en place pour les commandes récurrentes : vos adresses, vos horaires de réception et vos besoins alimentaires sont connus d'une commande à l'autre. La facturation entreprise avec TVA est standard, sans abonnement ni engagement de volume.</p>

      <h2>Commander dans le 10e</h2>
      <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30. Minimum de commande 50 € HT, livraison 29 € HT, facturation entreprise avec TVA, sans abonnement. <a href="/devis">Demandez votre devis</a>, réponse sous 24h. Les arrondissements voisins : <a href="/traiteur/paris/9e-arrondissement">9e</a>, <a href="/traiteur/paris/11e-arrondissement">11e</a>, <a href="/traiteur/paris/18e-arrondissement">18e</a> et <a href="/traiteur/paris/3e-arrondissement">3e</a>.</p>
    `,
  },
  {
    slug: '11e-arrondissement',
    name: 'Paris 11e, Bastille & Oberkampf',
    heroDescription: "Le 11e arrondissement, Bastille, Oberkampf, République, Voltaire, Nation, L'Écrin Traiteur livre petits-déjeuners, plateaux repas, cocktails et buffets aux agences, ateliers et équipes du quartier, dès 6h30.",
    linkedZones: ['Paris 11e', 'Bastille'],
    seoTitle: "Traiteur d'entreprise Paris 11e",
    seoDescription: "Petits-déjeuners, plateaux repas, cocktails et buffets livrés dans le 11e : Bastille, Oberkampf, République, Nation. Dès 6h30, devis sous 24h.",
    faq: [
      { q: "À partir de combien de personnes passer du plateau repas au buffet ?", a: "Jusqu'à une quinzaine de personnes, le plateau individuel est le plus simple. Au-delà, un buffet à partager se sert plus vite. Dites-nous l'effectif, nous recommandons le format." },
      { q: "Pouvez-vous livrer un afterwork dans le 11e ?", a: "Oui. Les cocktails démarrent à 29,90 € HT par personne pour huit pièces, livrés prêts à servir à l'heure convenue, avec facturation entreprise et TVA." },
      { q: "Livrez-vous dans les cours et ateliers du 11e ?", a: "Oui. Indiquez l'étage, le code ou l'interphone, l'accès par la cour et le contact sur place à la commande, pour que la livraison soit calée sans appel de dernière minute." },
    ],
    seoArticle: `
      <p>Le <strong>11e arrondissement de Paris</strong> compte beaucoup d'équipes compactes : agences, ateliers, associations, jeunes entreprises, souvent installées dans des immeubles sur cour. Entre Bastille, Oberkampf, République, Voltaire et Nation, on y déjeune ensemble et on y fête les départs sur place. L'Écrin Traiteur livre dès <strong>6h30</strong>, du lundi au vendredi.</p>

      <h2>Le déjeuner d'équipe : plateau ou buffet ?</h2>
      <p>Jusqu'à une quinzaine de personnes, le <a href="/creations/plateaux-repas">plateau repas</a> individuel est le plus simple : chacun a son entrée, son plat et son dessert, sans file ni service. Trois niveaux de prix, 28,90 € HT par personne en végétarien, 29,90 € HT au poulet, 30,90 € HT au saumon. Pour douze personnes, comptez entre 347 et 371 € HT, plus 29 € HT de livraison. Au-delà, les formats de la page <a href="/creations/a-partager">à partager</a> se servent plus vite autour d'une table commune.</p>

      <h2>L'afterwork d'équipe, de Bastille à Oberkampf</h2>
      <p>Un départ, un lancement, une bonne nouvelle : les <a href="/creations/cocktails">cocktails</a> se déclinent en trois formules : L'Invitation à huit pièces (29,90 € HT par personne), La Réception à douze pièces (40,90 € HT) et La Célébration à seize pièces (51,90 € HT), pour un dîner debout. Ils arrivent dressés et prêts à servir à l'heure convenue, sans cuisine à prévoir dans vos locaux.</p>

      <h2>Cours, étages et ateliers : préciser l'accès</h2>
      <p>Beaucoup d'adresses du 11e se trouvent au fond d'une cour ou derrière un second portail. Notez dans la commande l'étage, le code ou l'interphone, l'accès par la cour et le nom du contact sur place. Nous calons l'heure de livraison avec ces informations, et la commande est posée là où votre équipe l'attend. Inutile d'avoir une cuisine : tout arrive dressé, avec vaisselle, couverts et serviettes inclus sans supplément.</p>

      <h2>Le petit-déjeuner du lundi matin</h2>
      <p>Pour un comité du lundi ou un accueil de recrue, le <a href="/creations/petits-dejeuners-et-pauses">petit-déjeuner d'entreprise</a> est à 8 € HT par personne : viennoiseries, jus, café et fruits. Pour dix personnes, 80 € HT, soit 109 € HT livraison comprise. Tout est halal et sans porc par défaut ; les options végétariennes, véganes et sans gluten se précisent à la commande.</p>

      <h2>La part végétale n'est pas un accompagnement</h2>
      <p>Dans une équipe, il y a presque toujours quelqu'un qui ne mange ni viande ni poisson. Trois des six plateaux repas sont végétariens : <a href="/creations/plateaux-repas/e1">La Solaire</a> (houmous, quinoa et falafels, cookie), <a href="/creations/plateaux-repas/e3">La Provençale</a> (salade fraîcheur, pâtes au pesto, panna cotta) et <a href="/creations/plateaux-repas/e6">La Potagère</a> (lentilles et feta, tarte aux légumes, fromage blanc et granola). Même prix, même générosité.</p>

      <h2>Commander dans le 11e</h2>
      <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30. Minimum de commande 50 € HT, livraison 29 € HT, facturation entreprise avec TVA, sans abonnement. <a href="/devis">Demandez votre devis</a>, réponse sous 24h. Pour les arrondissements voisins : <a href="/traiteur/paris/10e-arrondissement">10e</a>, <a href="/traiteur/paris/12e-arrondissement">12e</a>, <a href="/traiteur/paris/3e-arrondissement">3e</a> et <a href="/traiteur/paris/4e-arrondissement">4e</a>.</p>
    `,
  },
  {
    slug: '18e-arrondissement',
    name: 'Paris 18e, Montmartre & La Chapelle',
    heroDescription: "Le 18e arrondissement, Montmartre, Barbès, La Chapelle, Marx Dormoy, Porte de Clignancourt, L'Écrin Traiteur livre petits-déjeuners, plateaux repas et cocktails de la butte au nord du périphérique, dès 6h30.",
    linkedZones: ['Paris 18e', 'Montmartre'],
    seoTitle: "Traiteur d'entreprise Paris 18e",
    seoDescription: "Petits-déjeuners, plateaux repas et cocktails livrés dans le 18e : Montmartre, Barbès, La Chapelle, Marx Dormoy. Dès 6h30, devis sous 24h.",
    faq: [
      { q: "Livrez-vous sur la butte Montmartre, avec ses escaliers et ses rues en pente ?", a: "Oui. Indiquez l'adresse exacte, l'étage et le contact sur place. Si l'accès se fait par un escalier ou une cour, précisez-le à la commande pour que le créneau soit calé en conséquence." },
      { q: "Livrez-vous à La Chapelle, Marx Dormoy et Porte de la Chapelle ?", a: "Oui, dans tout le 18e, de Montmartre à la Porte de la Chapelle et à la Porte de Clignancourt, dès 6h30 du lundi au vendredi." },
      { q: "Quel budget prévoir pour quinze personnes à midi ?", a: "Quinze plateaux repas coûtent de 433,50 à 463,50 € HT selon les menus, plus 29 € HT de livraison. Le minimum de commande est de 50 € HT, sans abonnement." },
    ],
    seoArticle: `
      <p>Le <strong>18e arrondissement de Paris</strong> a deux visages. Au sud, la butte Montmartre, ses escaliers, ses rues en pente et ses petits immeubles. Au nord et à l'est, Barbès, La Chapelle, Marx Dormoy et les portes de la Chapelle et de Clignancourt, avec des locaux plus vastes, jusqu'à la limite de Saint-Ouen et de Saint-Denis. L'Écrin Traiteur livre dans tout l'arrondissement dès <strong>6h30</strong>, du lundi au vendredi.</p>

      <h2>Sur la butte : accès et créneau</h2>
      <p>À Montmartre, le détail qui compte est l'accès. Rue en pente, escalier, cour intérieure, immeuble sans ascenseur : à la commande, notez l'étage, le code ou l'interphone et le nom du contact. Nous calons la livraison sur l'heure à laquelle tout doit être posé, pas sur l'heure de la réunion, pour que rien n'attende dans la rue. Pour une petite équipe, le minimum de commande de 50 € HT est atteint dès sept personnes en formule Classique, à 8 € HT par personne.</p>

      <h2>Autour de La Chapelle et de Marx Dormoy : de plus grosses commandes</h2>
      <p>Du côté de La Chapelle, de Marx Dormoy et de la Porte de la Chapelle, on trouve des locaux d'activité, des bureaux et des structures associatives, avec des effectifs plus larges. Un <a href="/creations/petits-dejeuners-et-pauses">petit-déjeuner d'entreprise</a> à 8 € HT par personne : pour trente personnes, 240 € HT, soit 269 € HT avec la livraison. Un déjeuner de formation en <a href="/creations/plateaux-repas">plateaux repas</a> : de 28,90 à 30,90 € HT par personne, étiquetés pour une distribution rapide.</p>

      <h2>Un déjeuner pour tous les régimes</h2>
      <p>Tout est halal et sans porc par défaut, ce qui évite de gérer une commande à part dans les groupes larges. Les menus végétariens, véganes et sans gluten se précisent à la commande, avec les effectifs concernés. Pour quinze personnes, comptez entre 433,50 et 463,50 € HT en plateaux repas, plus 29 € HT de livraison.</p>

      <h2>Les six plateaux repas</h2>
      <p>Côté poulet : <a href="/creations/plateaux-repas/e2">La Romaine</a>, avec filet de poulet et pommes de terre rôties, et <a href="/creations/plateaux-repas/e4">La Champêtre</a>, avec émincé de poulet et riz. Côté poisson : <a href="/creations/plateaux-repas/e5">La Boréale</a>, aux pommes de terre sautées et dés de saumon poêlés. Côté végétarien : <a href="/creations/plateaux-repas/e1">La Solaire</a>, <a href="/creations/plateaux-repas/e3">La Provençale</a> et <a href="/creations/plateaux-repas/e6">La Potagère</a>. Chaque menu comprend une entrée, un plat et un dessert.</p>

      <h2>Pour une fin de projet ou un départ</h2>
      <p>Nos <a href="/creations/cocktails">cocktails</a> démarrent à 29,90 € HT par personne pour huit pièces, livrés dressés et prêts à servir. Pour les grandes équipes, un devis détaille le format et la quantité.</p>

      <h2>Commander dans le 18e</h2>
      <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30. Minimum de commande 50 € HT, livraison 29 € HT, facturation entreprise avec TVA, sans abonnement. <a href="/devis">Demandez votre devis</a>, réponse sous 24h. Nous livrons aussi les arrondissements voisins, <a href="/traiteur/paris/9e-arrondissement">9e</a>, <a href="/traiteur/paris/10e-arrondissement">10e</a> et <a href="/traiteur/paris/17e-arrondissement">17e</a>, ainsi que <a href="/traiteur/saint-denis">Saint-Denis</a> au nord du périphérique.</p>
    `,
  },
]
