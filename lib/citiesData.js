import { CITIES_EXTRA, PARIS_QUARTIERS_EXTRA } from './citiesExtra'

// Données SEO local, 20 villes IDF prioritaires
// Chaque ville a du contenu unique pour éviter le duplicate content

export const CITIES = [
  {
    slug: 'paris',
    name: 'Paris',
    region: 'Paris',
    subtitle: 'Livraison dans tous les arrondissements',
    heroDescription: 'De la Défense à Nation, de Montparnasse à l\'Opéra, L\'Écrin Traiteur livre petits-déjeuners, plateaux repas, cocktails et réceptions dans tous les arrondissements de Paris dès 6h30.',
    zones: ['Paris 1er', 'Paris 2e', 'Paris 3e', 'Paris 4e', 'Paris 5e', 'Paris 6e', 'Paris 7e', 'Paris 8e', 'Paris 9e', 'Paris 10e', 'Paris 11e', 'Paris 12e', 'Paris 13e', 'Paris 14e', 'Paris 15e', 'Paris 16e', 'Paris 17e', 'Paris 18e'],
    quartiers: [
      {
        slug: '8e-arrondissement',
        name: 'Paris 8e, Champs-Élysées',
        heroDescription: 'Le 8e arrondissement, Triangle d\'or, Madeleine, boulevard Haussmann, L\'Écrin Traiteur signe cocktails, réceptions, plateaux repas et petits-déjeuners dans les sièges sociaux et cabinets du quartier le plus corporate de Paris.',
        linkedZones: ['Paris 8e', 'Champs-Élysées'],
        seoTitle: 'Traiteur d\'entreprise Paris 8e',
        seoDescription: 'L\'Écrin Traiteur orchestre cocktails, réceptions, plateaux repas et petits-déjeuners d\'entreprise dans le 8e : Champs-Élysées, Triangle d\'or, Madeleine. Devis sous 24h, livraison dès 6h30.',
        seoArticle: `
          <p>Le <strong>8e arrondissement de Paris</strong> concentre une densité unique de sièges sociaux, de cabinets d'affaires et d'institutions financières. Triangle d'or, avenue Hoche, boulevard Haussmann, rue du Faubourg Saint-Honoré, chaque adresse est synonyme d'exigence. L'Écrin Traiteur y livre dès 6h30.</p>
          <h2>Traiteur Paris 8e, à la hauteur du Triangle d'or</h2>
          <p>Le 8e arrondissement est le quartier des sièges sociaux premium, des banques d'affaires et des maisons de luxe. Nos produits artisanaux, viennoiseries pur beurre, macarons Pierre Morel, madeleines Mado Paris, s'inscrivent naturellement dans cet environnement où l'excellence est un standard attendu.</p>
          <h2>Livraison petits-déjeuners d'entreprise Paris 8e, boulevard Haussmann et Champs-Élysées</h2>
          <p>Que vous soyez installé boulevard Haussmann face aux grands magasins, avenue George-V à deux pas des Champs-Élysées, ou rue du Faubourg Saint-Honoré au cœur du Triangle d'or, nos livreurs connaissent chaque rue, chaque accès de livraison et chaque contrainte horaire du quartier.</p>
          <h2>Commander votre traiteur Paris 8e avant 14h</h2>
          <p>Commande en ligne avant <strong>14h la veille</strong>, livraison dès 6h30. Facturation entreprise avec TVA disponible. Pour des prestations récurrentes ou des volumes importants, un interlocuteur dédié peut être mis en place.</p>
        `,
      },
      {
        slug: '9e-arrondissement',
        name: 'Paris 9e, Opéra',
        heroDescription: 'Le 9e arrondissement, Opéra, Grands Boulevards, Notre-Dame-de-Lorette, L\'Écrin Traiteur livre petits-déjeuners, pauses gourmandes, plateaux repas et lunch box dans les agences, startups et grandes entreprises de ce quartier en plein essor digital.',
        linkedZones: ['Paris 9e', 'Opéra'],
        seoTitle: 'Traiteur d\'entreprise Paris 9e',
        seoDescription: 'L\'Écrin Traiteur livre petits-déjeuners, pauses, plateaux repas et lunch box dans le 9e : Opéra, Grands Boulevards, Notre-Dame-de-Lorette. Devis sous 24h, livraison dès 6h30.',
        seoArticle: `
          <p>Le <strong>9e arrondissement de Paris</strong> est devenu l'un des quartiers les plus dynamiques pour les entreprises tech, les agences créatives et les services financiers. Opéra, Notre-Dame-de-Lorette, Grands Boulevards, L'Écrin Traiteur y livre dès 6h30.</p>
          <h2>Traiteur Paris 9e, agences, startups et grandes entreprises</h2>
          <p>Le 9e réunit aujourd'hui un écosystème varié : grands groupes installés autour de l'Opéra, startups et scale-ups dans les rues du quartier Notre-Dame-de-Lorette, cabinets de recrutement et agences de communication. Nos petits-déjeuners s'adaptent à tous ces profils, du plateau de viennoiseries artisanales au coffret premium pour une réunion investisseur.</p>
          <h2>Livraison traiteur Opéra et Grands Boulevards, petits-déjeuners & pauses</h2>
          <p>Nos livraisons dans le 9e couvrent l'ensemble du quartier : du boulevard des Capucines aux rues Pigalle, de la rue Lafayette aux alentours de la place Saint-Georges. Ponctualité garantie, conditionnement professionnel, produits préparés le matin même.</p>
          <h2>Commander votre traiteur Paris 9e</h2>
          <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30 dans tout le 9e arrondissement. Facturation entreprise disponible, devis sur mesure pour les événements.</p>
        `,
      },
      {
        slug: '15e-arrondissement',
        name: 'Paris 15e, Front-de-Seine',
        heroDescription: 'Le 15e arrondissement, Front-de-Seine, Beaugrenelle, Montparnasse, L\'Écrin Traiteur livre plateaux repas, buffets de séminaire, cocktails et petits-déjeuners dans les tours de bureaux et sièges sociaux du plus grand arrondissement de Paris.',
        linkedZones: ['Paris 15e'],
        seoTitle: 'Traiteur d\'entreprise Paris 15e',
        seoDescription: 'L\'Écrin Traiteur livre plateaux repas, buffets de séminaire, cocktails et petits-déjeuners dans le 15e : Front-de-Seine, Beaugrenelle, Montparnasse. Devis sous 24h, livraison dès 6h30.',
        seoArticle: `
          <p>Le <strong>15e arrondissement de Paris</strong> est le plus peuplé de la capitale, et l'un des plus actifs en termes d'activité tertiaire. Entre les tours de <strong>Front-de-Seine</strong>, le quartier Beaugrenelle et les abords de Montparnasse, le 15e concentre des milliers de salariés qui méritent un traiteur à la hauteur. L'Écrin Traiteur livre dès 6h30.</p>
          <h2>Traiteur Front-de-Seine et Beaugrenelle, livraison dans les tours</h2>
          <p>Le quartier Front-de-Seine est le pendant rive gauche de La Défense, avec ses tours résidentielles et de bureaux qui dominent la Seine. Nos livreurs connaissent les accès spécifiques à ces immeubles, monte-charges, réceptions sécurisées, horaires de livraison, et garantissent une ponctualité sans faille.</p>
          <h2>Montparnasse et les entreprises du 15e, petits-déjeuners artisanaux</h2>
          <p>Au-delà des tours, le 15e abrite un tissu dense de PME, cabinets et agences autour de Montparnasse, de la Convention et de Vaugirard. Pour vos réunions matinales, vos accueils clients ou vos pauses d'équipe, L'Écrin Traiteur propose un choix complet de viennoiseries artisanales, coffrets gourmands et plateaux sur mesure.</p>
          <h2>Commander votre traiteur Paris 15e avant 14h</h2>
          <p>Commande en ligne avant <strong>14h la veille</strong>, livraison dès 6h30 dans tout le 15e arrondissement. Facturation entreprise avec TVA disponible.</p>
        `,
      },
      {
        slug: '16e-arrondissement',
        name: 'Paris 16e, Trocadéro',
        heroDescription: 'Le 16e arrondissement, Trocadéro, Victor Hugo, Passy, La Muette, L\'Écrin Traiteur signe réceptions, cocktails, plateaux repas et petits-déjeuners dans les family offices, cabinets d\'affaires et sièges internationaux de l\'arrondissement le plus huppé de Paris.',
        linkedZones: ['Paris 16e'],
        seoTitle: 'Traiteur d\'entreprise Paris 16e',
        seoDescription: 'L\'Écrin Traiteur orchestre réceptions, cocktails, plateaux repas et petits-déjeuners d\'entreprise dans le 16e : Trocadéro, Victor Hugo, Passy, La Muette. Standards premium, livraison dès 6h30.',
        seoArticle: `
          <p>Le <strong>16e arrondissement de Paris</strong> est synonyme d'excellence et de discrétion. Family offices avenue Victor Hugo, sièges d'organisations internationales autour du Trocadéro, cabinets d'avocats d'affaires à Passy, chaque adresse du 16e est exigeante. L'Écrin Traiteur y livre avec le niveau de qualité attendu dès 6h30.</p>
          <h2>Traiteur Paris 16e, des produits à la hauteur des standards du quartier</h2>
          <p>Dans un arrondissement où l'image et les détails comptent, proposer des macarons Pierre Morel ou des viennoiseries pur beurre à ses partenaires, c'est soigner son positionnement. Nos produits artisanaux sélectionnés, provenance connue, artisans identifiés, finitions irréprochables, s'inscrivent naturellement dans la culture d'excellence du 16e.</p>
          <h2>Trocadéro, Victor Hugo, Passy, livraison dans tout le 16e</h2>
          <p>Nos livreurs connaissent les rues calmes et les accès discrets du 16e. Pas de livreur pressé qui sonne à l'interphone à 7h, nous adaptons notre mode de livraison à la culture du quartier : ponctualité, discrétion, présentation soignée.</p>
          <h2>Commander votre traiteur Paris 16e</h2>
          <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30. Pour les prestations récurrentes ou les réceptions d'envergure, un interlocuteur dédié et une facturation entreprise sont disponibles sur demande.</p>
        `,
      },
      {
        slug: '17e-arrondissement',
        name: 'Paris 17e, Batignolles',
        heroDescription: 'Le 17e arrondissement, Batignolles, Wagram, Ternes, Porte Maillot, L\'Écrin Traiteur livre plateaux repas, lunch box, pauses gourmandes et petits-déjeuners dans les cabinets, agences et entreprises de ce quartier tertiaire haut de gamme.',
        linkedZones: ['Paris 17e'],
        seoTitle: 'Traiteur d\'entreprise Paris 17e',
        seoDescription: 'L\'Écrin Traiteur livre plateaux repas, lunch box, pauses et petits-déjeuners d\'entreprise dans le 17e : Batignolles, Wagram, Ternes, Pereire. Devis sous 24h, livraison dès 6h30.',
        seoArticle: `
          <p>Le <strong>17e arrondissement de Paris</strong> associe vie résidentielle premium et activité professionnelle dense. Cabinets d'avocats et de notaires autour de la Porte Maillot, agences créatives à Batignolles, grandes entreprises avenue de la Grande-Armée, L'Écrin Traiteur livre dans tout le 17e dès 6h30.</p>
          <h2>Traiteur Paris 17e, du cabinet d'avocats à l'agence créative</h2>
          <p>La diversité du tissu économique du 17e est une richesse. Que vous soyez une étude notariale avenue de Wagram, une agence de design à Batignolles ou un cabinet de conseil avenue Niel, nos produits s'adaptent à votre contexte. Nos plateaux de petits-déjeuners sont modulables selon vos besoins.</p>
          <h2>Livraison traiteur Batignolles, Wagram, Ternes, dès 6h30</h2>
          <p>Nos livreurs connaissent bien les quartiers du 17e et leurs accès. Porte Maillot, Ternes, Courcelles, Batignolles, nous livrons dans l'ensemble de l'arrondissement avec une ponctualité sans exception.</p>
          <h2>Commander votre traiteur Paris 17e</h2>
          <p>Commande en ligne avant <strong>14h la veille</strong>, livraison dès 6h30. Pas de minimum imposé, facturation entreprise avec TVA disponible.</p>
        `,
      },
      {
        slug: '1er-arrondissement',
        name: 'Paris 1er, Louvre & Châtelet',
        heroDescription: 'Le 1er arrondissement, Palais-Royal, Châtelet-Les-Halles, Louvre, Vendôme, L\'Écrin Traiteur signe cocktails, réceptions, plateaux repas et petits-déjeuners dans les institutions financières, sièges premium et cabinets discrets du quartier le plus historique de Paris.',
        linkedZones: ['Paris 1er'],
        seoTitle: 'Traiteur d\'entreprise Paris 1er',
        seoDescription: 'L\'Écrin Traiteur orchestre cocktails, réceptions, plateaux repas et petits-déjeuners d\'entreprise dans le 1er : Palais-Royal, Châtelet, Louvre, Vendôme. Devis sous 24h, livraison dès 6h30.',
        faq: [
          { q: 'Acceptez-vous les commandes de dernière minute dans le 1er arrondissement ?', a: 'La règle reste la veille avant 14h, pour le catalogue complet. Pour une demande le matin même, appelez le 01 74 54 23 10 : nous faisons au mieux selon la disponibilité du jour.' },
          { q: 'Comment gérez-vous les accès de livraison dans les immeubles haussmanniens du 1er ?', a: 'Nos livreurs connaissent les procédures spécifiques aux immeubles du centre de Paris : interphone, gardien, cour intérieure, monte-charge. Précisez vos contraintes d\'accès lors de la commande et nous anticipons.' },
          { q: 'Livrez-vous dans les hôtels et espaces de réunion du 1er arrondissement ?', a: 'Oui, nous livrons dans les hôtels, espaces de coworking et salles de séminaire du 1er. Pour les établissements avec un service traiteur interne, nous vous recommandons de valider en amont avec votre contact sur place.' },
        ],
        seoArticle: `
          <p>Le <strong>1er arrondissement de Paris</strong> est l'un des centres économiques les plus anciens et les plus denses de la capitale. Entre la Banque de France rue de la Vrillière, les institutions financières autour de la Bourse du Commerce reconvertie en Fondation Pinault, et les adresses de prestige de la place Vendôme, le 1er concentre une activité professionnelle d'exception. L'Écrin Traiteur y livre dès 6h30.</p>
          <h2>Traiteur Paris 1er, entre patrimoine institutionnel et excellence contemporaine</h2>
          <p>Les professionnels du 1er partagent une culture de l'excellence héritée du quartier. Des palaces de Vendôme aux bureaux modernes des Halles, des cabinets discrets du Palais-Royal aux sièges institutionnels du Louvre, chaque adresse a ses standards. L'Écrin Traiteur propose des produits artisanaux à la hauteur : <strong>viennoiseries pur beurre</strong>, <strong>macarons Pierre Morel</strong>, <strong>madeleines Mado Paris</strong>. Des produits qui envoient le bon signal à vos partenaires.</p>
          <h2>Livraison petit-déjeuner Paris 1er, Châtelet, Louvre, Palais-Royal, Vendôme</h2>
          <p>Le 1er est l'un des arrondissements les mieux desservis de Paris. Nos livreurs connaissent les accès de livraison spécifiques aux immeubles haussmanniens, interphone, gardien, monte-charge, et garantissent une livraison discrète et ponctuelle. Que vous soyez rue de Rivoli, rue Saint-Honoré ou boulevard des Capucines, votre plateau arrive à l'heure prévue.</p>
          <h2>Petit-déjeuner d'entreprise Paris 1er, institutions financières, cabinets et directions</h2>
          <p>Les réunions du matin dans le 1er rassemblent souvent des profils exigeants : comités de direction, réunions de partenaires, accueils clients institutionnels. Nos prestations s'adaptent à ces contextes : sélections premium pour 6 à 15 personnes, conditionnement professionnel, livraison à l'heure exacte demandée.</p>
          <h2>Commande jusqu'à la veille 14h dans le 1er arrondissement</h2>
          <p>Commandez avant <strong>14h la veille</strong> pour votre catalogue complet. Pour une demande le matin même, appelez-nous : nous faisons au mieux selon la disponibilité du jour. Facturation entreprise avec TVA disponible sur demande.</p>
        `,
      },
      {
        slug: '2e-arrondissement',
        name: 'Paris 2e, Sentier & Bourse',
        heroDescription: 'Le 2e arrondissement, Silicon Sentier, Bourse, Grands Boulevards, L\'Écrin Traiteur livre petits-déjeuners, pauses gourmandes, lunch box et plateaux repas dans le quartier qui concentre le plus de startups au mètre carré en France.',
        linkedZones: ['Paris 2e'],
        seoTitle: 'Traiteur d\'entreprise Paris 2e',
        seoDescription: 'L\'Écrin Traiteur livre petits-déjeuners, pauses, lunch box et plateaux repas dans le 2e : Silicon Sentier, Bourse, Grands Boulevards. Startups et grands groupes, livraison dès 6h30.',
        faq: [
          { q: 'Acceptez-vous les commandes de dernière minute dans le Sentier ?', a: 'La règle reste la veille avant 14h, pour le catalogue complet. Pour une demande le matin même, appelez le 01 74 54 23 10 : nous faisons au mieux selon la disponibilité du jour.' },
          { q: 'Livrez-vous dans les espaces de coworking du Sentier ?', a: 'Absolument. Nous livrons régulièrement dans les espaces de coworking du 2e. Précisez l\'espace et votre salle ou floor lors de la commande.' },
        ],
        seoArticle: `
          <p>Le <strong>2e arrondissement de Paris</strong> est devenu la capitale française de la startup tech. Le quartier du Sentier, surnommé le <em>Silicon Sentier</em>, concentre une densité unique de scale-ups, fintechs, agences digitales et fonds d'investissement. L'Écrin Traiteur y livre chaque matin pour accompagner les rituels des équipes les plus dynamiques de Paris.</p>
          <h2>Traiteur Silicon Sentier, nourrir l'écosystème startup parisien</h2>
          <p>Les équipes tech ont leurs propres rituels matinaux : all-hands meetings, stand-up quotidiens, onboarding de nouveaux collaborateurs. Nos petits-déjeuners s'intègrent dans ces moments. <strong>Brochettes de fruits vegan</strong> pour les profils healthy, <strong>viennoiseries artisanales</strong> pour le classique, <strong>cookies Laura Todd</strong> pour les pauses créatives, nous connaissons les préférences des équipes modernes.</p>
          <h2>Livraison traiteur Bourse et Sentier, de la fintech au cabinet traditionnel</h2>
          <p>Du côté de la Bourse, les cabinets financiers et les studios de presse ont des exigences plus classiques. Nous livrons dans les deux univers du 2e avec la même ponctualité et la même qualité artisanale. Votre adresse détermine votre créneau, pas notre niveau de service.</p>
          <h2>Traiteur Paris 2e, onboarding, investor meetings, all-hands</h2>
          <p>Que vous accueilliez de nouveaux talents, présentiez vos résultats à des investisseurs ou organisiez votre réunion d'équipe hebdomadaire, L'Écrin Traiteur propose la prestation adaptée à votre culture d'entreprise. Petits-déjeuners pour 4 comme pour 40 personnes, avec la même fraîcheur artisanale.</p>
          <h2>Commande jusqu'à la veille 14h dans le 2e</h2>
          <p>Commandez avant <strong>14h la veille</strong> pour votre sélection complète. Pour une demande le matin même, appelez-nous : nous faisons au mieux selon la disponibilité. Livraison dès 6h30, facturation entreprise disponible.</p>
        `,
      },
      {
        slug: '3e-arrondissement',
        name: 'Paris 3e, Haut-Marais',
        heroDescription: 'Le 3e arrondissement, Haut-Marais, Carreau du Temple, République, L\'Écrin Traiteur signe cocktails, plateaux apéritifs, pauses gourmandes et petits-déjeuners pour les agences créatives, showrooms de mode et galeries d\'art du quartier le plus branché de Paris.',
        linkedZones: ['Paris 3e'],
        seoTitle: 'Traiteur d\'entreprise Paris 3e',
        seoDescription: 'L\'Écrin Traiteur signe cocktails, plateaux apéritifs, pauses et petits-déjeuners pour press days et agences du 3e : Haut-Marais, Carreau du Temple. Devis sous 24h, livraison dès 6h30.',
        faq: [
          { q: 'Acceptez-vous les commandes de dernière minute dans le Marais ?', a: 'La règle reste la veille avant 14h. Pour un événement de dernière minute, appelez le 01 74 54 23 10 : nous faisons au mieux selon la disponibilité du jour.' },
          { q: 'Pouvez-vous livrer pour un press day ou un événement de marque dans le 3e ?', a: 'Oui. Pour les événements de ce type, nous recommandons un devis sur mesure pour garantir la disponibilité et la présentation adaptée. Contactez-nous en amont.' },
        ],
        seoArticle: `
          <p>Le <strong>3e arrondissement de Paris</strong> est le quartier où l'esthétique est un standard professionnel. Agences de communication, showrooms de mode, galeries d'art contemporain, studios de design, les entreprises du Haut-Marais ont un œil aiguisé pour ce qui est beau et ce qui ne l'est pas. L'Écrin Traiteur livre des produits artisanaux qui passent ce test.</p>
          <h2>Traiteur Paris 3e, pour les agences créatives et les studios du Marais</h2>
          <p>Dans un quartier où l'image professionnelle se joue dans les détails, le traiteur que vous choisissez est un signal. Nos <strong>macarons Pierre Morel</strong>, visuellement impeccables et gustativement irréprochables, nos <strong>cakes maison</strong> à la pistache, au citron ou au chocolat, nos <strong>viennoiseries pur beurre</strong> au feuilletage parfait : des produits qui s'exposent aussi bien qu'ils se dégustent. Vos collaborateurs et vos clients le remarqueront.</p>
          <h2>Livraison traiteur Haut-Marais, immeubles atypiques et accès spécifiques</h2>
          <p>Les bureaux du Marais occupent souvent des espaces atypiques : hôtels particuliers reconvertis, lofts industriels, arrière-cours pavées. Nos livreurs s'adaptent à ces configurations sans que vous ayez à gérer la logistique. Interphone, code de porte, étages sans ascenseur, nous connaissons le quartier.</p>
          <h2>Press days, lancements de collection, réunions de direction créative</h2>
          <p>Le 3e arrondissement est un lieu de lancements et d'événements de marque. Pour ces moments qui exigent une présentation irréprochable, L'Écrin Traiteur propose des prestations sur devis adaptées à vos contraintes visuelles et temporelles. Commandez avant <strong>14h la veille</strong>. Pour une demande le matin même, appelez-nous : nous faisons au mieux selon la disponibilité.</p>
        `,
      },
      {
        slug: '6e-arrondissement',
        name: 'Paris 6e, Saint-Germain',
        heroDescription: 'Le 6e arrondissement, Saint-Germain-des-Prés, Odéon, Luxembourg, L\'Écrin Traiteur livre plateaux repas, réceptions, cocktails et petits-déjeuners dans les maisons d\'édition, cabinets d\'avocats d\'affaires et sièges de luxe du quartier le plus intellectuel de Paris.',
        linkedZones: ['Paris 6e'],
        seoTitle: 'Traiteur d\'entreprise Paris 6e',
        seoDescription: 'L\'Écrin Traiteur livre plateaux repas, réceptions, cocktails et petits-déjeuners dans le 6e : Saint-Germain-des-Prés, édition, cabinets d\'avocats, luxe. Devis sous 24h, livraison dès 6h30.',
        faq: [
          { q: 'Acceptez-vous les commandes de dernière minute dans le 6e arrondissement ?', a: 'La règle reste la veille avant 14h, pour votre choix complet de produits artisanaux et les plateaux repas. Pour une demande le matin même, appelez le 01 74 54 23 10 : nous faisons au mieux selon la disponibilité du jour. Livraison dès 6h30, du lundi au vendredi, à Saint-Germain-des-Prés, Odéon et autour du Luxembourg.' },
          { q: 'Proposez-vous des produits adaptés aux réunions éditoriales et aux comités de direction ?', a: 'Tout à fait. Nos coffrets de macarons Pierre Morel et nos plateaux de viennoiseries pur beurre sont particulièrement appréciés pour les comités éditoriaux et les réunions de direction du 6e. La formule Classique est à 8 € HT par personne, le petit-déjeuner complet de 12 à 16 € HT, livrés dès 6h30.' },
          { q: 'Quel budget prévoir pour un déjeuner de direction de 8 personnes dans le 6e ?', a: 'Un plateau repas au poulet est à 29,90 € HT par personne, soit 239,20 € HT pour 8 personnes et 268,20 € HT avec la livraison de 29 € HT. Le végétarien est à 28,90 € HT et le poisson à 30,90 € HT, avec entrée, plat, dessert et pain. Commande jusqu\'à la veille 14h, devis remis sous 24 h.' },
          { q: 'Livrez-vous dans les immeubles à digicode et les cours intérieures du 6e ?', a: 'Oui. À la commande, indiquez le digicode ou le nom sur l\'interphone, l\'étage, la présence d\'un ascenseur et le contact sur place. Le livreur monte le plateau à l\'étage convenu ; si l\'immeuble ne le permet pas, le dépôt se fait à l\'accueil. Nous donnons un créneau précis plutôt qu\'une plage de deux heures.' },
        ],
        seoArticle: `
          <p>Le <strong>6e arrondissement de Paris</strong> incarne une certaine idée de l'excellence française : maisons d'édition historiques du boulevard Saint-Germain, cabinets d'avocats d'affaires de la rue de l'Université, sièges discrets de maisons de luxe autour de Saint-Sulpice. L'Écrin Traiteur y livre des petits-déjeuners dès <strong>8 € HT par personne</strong>, des plateaux repas dès <strong>28,90 € HT</strong> et des cocktails dès <strong>29,90 € HT</strong>, du lundi au vendredi, dès <strong>6h30</strong>, avec le même état d'esprit : des produits dont on connaît l'artisan.</p>
          <h2>Traiteur Saint-Germain, au cœur de l'édition, du droit et du luxe parisien</h2>
          <p>Les réunions du matin dans le 6e rassemblent des profils qui connaissent la différence entre un croissant industriel et une viennoiserie artisanale. Nos <strong>madeleines Mado Paris</strong>, nos <strong>macarons Pierre Morel</strong> et nos <strong>viennoiseries pur beurre</strong> s'inscrivent dans la culture de l'excellence authentique qui caractérise le 6e. Ce ne sont pas des produits anonymes, ce sont des artisans identifiés.</p>
          <h2>Petit-déjeuner d'entreprise dans le 6e : formules et prix</h2>
          <p>La formule Classique, à 8 € HT par personne, comprend deux viennoiseries pur beurre, un jus Alain Milliat, un café et une corbeille de fruits frais. Pour un comité éditorial de 8 personnes, cela fait 64 € HT, soit 93 € HT avec la livraison de 29 € HT. Le petit-déjeuner complet, de 12 à 16 € HT par personne, ajoute des madeleines ou des cakes, des brochettes de fruits, du thé et une sélection de jus plus large : il convient à l'accueil d'un auteur, d'un client ou d'un partenaire. Toutes les compositions sont sur la page <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a>.</p>
          <h2>Plateaux repas pour les déjeuners de direction et les réunions qui s'étirent</h2>
          <p>Quand le comité déborde sur le déjeuner, les plateaux repas individuels de la collection Essentiel évitent d'interrompre la séance : 28,90 € HT par personne en végétarien, 29,90 € HT au poulet, 30,90 € HT au poisson, avec entrée, plat, dessert et pain, filmés et étiquetés. Pour 6 personnes au poulet, comptez 179,40 € HT, soit 208,40 € HT avec la livraison. Les menus sont sur la page <a href="/creations/plateaux-repas">plateaux repas</a>.</p>
          <h2>Livraison petit-déjeuner Paris 6e, immeubles haussmanniens et cours intérieures</h2>
          <p>Le 6e arrondissement est principalement composé d'immeubles haussmanniens et d'hôtels particuliers aux accès caractéristiques. Nos livreurs respectent le cadre et la tranquillité de ces adresses, de Saint-Germain-des-Prés à Odéon et aux abords du Luxembourg. Pour que la livraison passe sans appel à votre accueil, donnez à la commande le digicode ou le nom sur l'interphone, l'étage, la présence d'un ascenseur et le contact sur place. Livraison discrète, ponctuelle, sans perturbation pour votre activité.</p>
          <h2>Cocktails, signatures et départs dans le 6e</h2>
          <p>Pour un lancement, une signature ou un pot de départ, trois formules, hors boissons : 29,90 € HT par personne pour 8 pièces (L'Invitation), 40,90 € HT pour 12 pièces (La Réception) et 51,90 € HT pour 16 pièces (La Célébration). Pour 20 personnes en La Réception, le total est de 847 € HT livraison comprise. Fixez le créneau à la commande : pour une réunion à 9h, une livraison vers 8h30 laisse le temps d'installer les plateaux. Voir la page <a href="/occasions/cocktail-entreprise">cocktail d'entreprise</a>.</p>
          <h2>Remercier un auteur, un client, un partenaire</h2>
          <p>Pour marquer une signature, un départ ou une fin de collaboration, les coffrets de madeleines d'exception se livrent sur place : 24,90 € HT les 10, 49,00 € HT les 20 et 119,00 € HT les 50. Ils se personnalisent aux couleurs de l'entreprise et se livrent sur un site ou à plusieurs adresses. Voir la page <a href="/creations/coffrets-cadeaux">coffrets cadeaux</a>.</p>
          <h2>Comités éditoriaux, réunions de direction, accueils clients institutionnels</h2>
          <p>Que vous organisiez un comité éditorial, une réunion de partenariat ou un accueil client dans vos bureaux de Saint-Germain, L'Écrin Traiteur propose la prestation adaptée. Commandez jusqu'à la veille <strong>14h</strong>. Pour une demande le matin même, appelez-nous : nous faisons au mieux selon la disponibilité. Minimum de commande 50 € HT, pas de minimum de participants. Facturation entreprise avec TVA, bon de commande accepté. <a href="/devis">Demandez votre devis</a>, réponse sous 24h.</p>
          <h2>Les arrondissements voisins</h2>
          <p>Nous livrons de la même façon dans le <a href="/traiteur/paris/7e-arrondissement">7e</a>, le <a href="/traiteur/paris/14e-arrondissement">14e</a> et le <a href="/traiteur/paris/15e-arrondissement">15e</a>, ainsi que dans <a href="/traiteur/paris">tous les arrondissements de Paris</a>. Tout est halal et sans porc par défaut, sans alcool, avec des options végétariennes, véganes et sans gluten à préciser à la commande.</p>
        `,
      },
      {
        slug: '7e-arrondissement',
        name: 'Paris 7e, Invalides & Institutions',
        heroDescription: 'Le 7e arrondissement, Invalides, Assemblée Nationale, ministères, ambassades, L\'Écrin Traiteur livre plateaux repas, réceptions, cocktails et petits-déjeuners de travail dans les institutions gouvernementales, organisations internationales et think tanks de la rive gauche institutionnelle.',
        linkedZones: ['Paris 7e'],
        seoTitle: 'Traiteur d\'entreprise Paris 7e',
        seoDescription: 'L\'Écrin Traiteur livre plateaux repas, réceptions et petits-déjeuners de travail dans le 7e : Invalides, ministères, ambassades, organisations internationales. Livraison discrète dès 6h30.',
        faq: [
          { q: 'Acceptez-vous les commandes de dernière minute dans le 7e arrondissement ?', a: 'La règle reste la veille avant 14h, ce qui laisse le temps d\'anticiper la logistique des institutions avec des procédures d\'accès particulières. Pour une demande le matin même, appelez le 01 74 54 23 10 : nous faisons au mieux selon la disponibilité du jour.' },
          { q: 'Comment gérez-vous les livraisons dans les institutions avec sécurité renforcée ?', a: 'Nous sommes habitués aux accès sécurisés : postes de contrôle, vérification d\'identité, livraison sur autorisation préalable. Précisez vos contraintes lors de la commande et notre équipe anticipe les délais nécessaires.' },
        ],
        seoArticle: `
          <p>Le <strong>7e arrondissement de Paris</strong> est le quartier du pouvoir institutionnel. Ministères, ambassades, organisations internationales, think tanks et ONGs, la rive gauche institutionnelle regroupe des structures qui cherchent des prestataires discrets, fiables et de qualité. L'Écrin Traiteur y livre avec le niveau de professionnalisme qu'impose ce territoire.</p>
          <h2>Traiteur Paris 7e, institutions, ministères et organisations internationales</h2>
          <p>Livrer dans le 7e, c'est souvent travailler avec des procédures d'accès strictes : postes de sécurité, vérification d'identité préalable, livraison sur autorisation. Notre équipe est habituée à ces contraintes et les anticipe. Votre plateau arrive à l'heure prévue, dans les conditions requises par l'institution.</p>
          <h2>Petit-déjeuner de travail institutionnel, discrétion et qualité</h2>
          <p>Les réunions matinales dans les institutions du 7e suivent des agendas chargés et peu flexibles. Nos produits artisanaux, <strong>viennoiseries pur beurre</strong>, <strong>macarons Pierre Morel</strong>, <strong>madeleines Mado Paris</strong>, sont conditionnés pour être servis rapidement et efficacement. Un traiteur qui facilite votre réunion plutôt qu'il ne la complique.</p>
          <h2>Livraison traiteur Paris 7e, Invalides, Saint-Germain rive gauche, Champ-de-Mars, rue du Bac</h2>
          <p>Nous couvrons l'ensemble du 7e : boulevard des Invalides, rue de Grenelle, rue du Bac, avenue de la Motte-Picquet, quai d'Orsay. Pour les institutions avec des procédures d'accès spécifiques, nous recommandons de nous contacter en amont. Commandez avant <strong>14h la veille</strong> ; pour une demande le matin même, appelez-nous.</p>
        `,
      },
      {
        slug: '12e-arrondissement',
        name: 'Paris 12e, Bercy & Nation',
        heroDescription: 'Le 12e arrondissement, Bercy, Nation, Gare de Lyon, L\'Écrin Traiteur livre plateaux repas, lunch box, pauses gourmandes et petits-déjeuners au ministère des Finances, dans les sièges tertiaires de l\'Est parisien et autour de la Gare de Lyon.',
        linkedZones: ['Paris 12e'],
        seoTitle: 'Traiteur d\'entreprise Paris 12e',
        seoDescription: 'L\'Écrin Traiteur livre plateaux repas, lunch box, pauses et petits-déjeuners dans le 12e : Bercy, Nation, Gare de Lyon. Entreprises et administrations, livraison dès 6h30.',
        faq: [
          { q: 'Acceptez-vous les commandes de dernière minute dans le 12e arrondissement ?', a: 'La règle reste la veille avant 14h, pour le catalogue complet. Pour une demande le matin même, appelez le 01 74 54 23 10 : nous faisons au mieux selon la disponibilité du jour.' },
          { q: 'Livrez-vous au ministère des Finances à Bercy ?', a: 'Oui, nous livrons dans l\'ensemble du quartier Bercy, y compris autour du ministère. Pour les accès institutionnels, précisez vos contraintes lors de la commande et nous anticipons la procédure.' },
        ],
        seoArticle: `
          <p>Le <strong>12e arrondissement de Paris</strong> est un pôle tertiaire souvent sous-estimé. Le quartier Bercy abrite le ministère de l'Économie et des Finances, l'un des plus grands employeurs de la capitale, ainsi qu'un tissu dense d'entreprises privées, de sièges régionaux et d'espaces de coworking modernes. L'Écrin Traiteur y livre dès 6h30.</p>
          <h2>Traiteur Bercy Paris, ministère, entreprises et sièges tertiaires</h2>
          <p>Bercy concentre des profils très différents : collaborateurs du ministère des Finances, équipes des entreprises installées autour de Bercy-Village, sièges régionaux à proximité de la Gare de Lyon. Nos petits-déjeuners artisanaux s'adaptent à tous ces contextes, de la réunion institutionnelle à l'onboarding startup, avec la même fraîcheur et la même qualité.</p>
          <h2>Livraison petit-déjeuner Paris 12e, Gare de Lyon, Daumesnil, Nation</h2>
          <p>Nos livraisons dans le 12e couvrent l'ensemble de l'arrondissement : les tours de Bercy-Village, les immeubles tertiaires autour de la Gare de Lyon, les espaces de coworking de Daumesnil et les bureaux des abords de Nation. Créneaux de 6h30 à 10h, ponctualité garantie.</p>
          <h2>Traiteur Paris Est, pour les réunions matinales et les accueils partenaires</h2>
          <p>Que vous organisiez un CODIR matinal, une réunion avec des partenaires ou une journée de formation dans le 12e, L'Écrin Traiteur propose la prestation adaptée. Commandez avant <strong>14h la veille</strong> pour votre catalogue complet. Pour une demande le matin même, appelez-nous : nous faisons au mieux selon la disponibilité.</p>
        `,
      },
      {
        slug: '13e-arrondissement',
        name: 'Paris 13e, Paris Rive Gauche',
        heroDescription: 'Le 13e arrondissement, Paris Rive Gauche, BNF, Austerlitz, Tolbiac, L\'Écrin Traiteur livre plateaux repas, lunch box, pauses gourmandes et petits-déjeuners dans l\'un des quartiers d\'affaires les plus dynamiques de la rive gauche, entre grandes entreprises, startups deeptech et campus universitaires.',
        linkedZones: ['Paris 13e'],
        seoTitle: 'Traiteur d\'entreprise Paris 13e',
        seoDescription: 'L\'Écrin Traiteur livre plateaux repas, lunch box, pauses et petits-déjeuners dans le 13e : Paris Rive Gauche, BNF, Tolbiac, Austerlitz. Options vegan, livraison dès 6h30.',
        faq: [
          { q: 'Acceptez-vous les commandes de dernière minute dans le 13e arrondissement ?', a: 'La règle reste la veille avant 14h. Pour une demande le matin même, appelez le 01 74 54 23 10 : nous faisons au mieux selon la disponibilité du jour.' },
          { q: 'Proposez-vous des produits vegan et adaptés aux valeurs RSE des entreprises du 13e ?', a: 'Oui. Nos brochettes de fruits et compotes sont vegan, nos produits sont sans huile de palme et nos artisans sont sélectionnés avec soin. Le 13e étant un quartier sensible aux valeurs RSE, nous sommes le bon partenaire.' },
        ],
        seoArticle: `
          <p>Le <strong>13e arrondissement de Paris</strong> est l'un des grands projets urbains parisiens de ces vingt dernières années. Le quartier <strong>Paris Rive Gauche</strong> a transformé d'anciennes friches ferroviaires en un pôle d'affaires moderne attirant de grandes entreprises, des startups deeptech et des institutions académiques de premier plan. L'Écrin Traiteur y livre chaque matin.</p>
          <h2>Traiteur Paris Rive Gauche, accompagner l'innovation et la croissance</h2>
          <p>Les entreprises de Paris Rive Gauche partagent souvent des valeurs d'innovation et d'engagement. Nos produits artisanaux y trouvent une résonance naturelle : <strong>madeleines Mado Paris</strong> réputées comme les meilleures de Paris, produits sans huile de palme, traçabilité complète de nos artisans. Commander chez L'Écrin Traiteur, c'est aussi une cohérence avec les valeurs RSE de votre organisation.</p>
          <h2>Livraison petit-déjeuner Paris 13e, BNF, Tolbiac, Austerlitz, Ivry limite</h2>
          <p>Nous livrons dans l'ensemble du 13e arrondissement : les tours de bureaux de Paris Rive Gauche, les immeubles tertiaires autour d'Austerlitz, les espaces de coworking de Tolbiac et les campus du secteur. Chaque livraison est gérée avec la même rigueur, qu'il s'agisse d'une tour de 25 étages ou d'un loft reconverti.</p>
          <h2>Startups, grands groupes et instituts académiques, un traiteur pour tous</h2>
          <p>La diversité du tissu économique du 13e est une richesse. L'Écrin Traiteur s'adapte à tous les profils : plateau de viennoiseries pour 6 personnes comme prestation pour 80 collaborateurs. Commandez avant <strong>14h la veille</strong>, ou appelez-nous pour une demande le matin même.</p>
        `,
      },
      {
        slug: '14e-arrondissement',
        name: 'Paris 14e, Montparnasse',
        heroDescription: 'Le 14e arrondissement, Tour Montparnasse, Alésia, Denfert-Rochereau, L\'Écrin Traiteur livre plateaux repas, lunch box, pauses gourmandes et petits-déjeuners aux entreprises de la Tour Montparnasse, aux cabinets et PME d\'Alésia et aux espaces tertiaires du 14e.',
        linkedZones: ['Paris 14e'],
        seoTitle: 'Traiteur d\'entreprise Paris 14e',
        seoDescription: 'L\'Écrin Traiteur livre plateaux repas, lunch box, pauses et petits-déjeuners dans le 14e : Tour Montparnasse, Alésia, Denfert. Devis sous 24h, livraison dès 6h30.',
        faq: [
          { q: 'Acceptez-vous les commandes de dernière minute dans le 14e arrondissement ?', a: 'La règle reste la veille avant 14h, pour le catalogue complet et les plateaux repas. Pour une demande le matin même, appelez le 01 74 54 23 10 : nous faisons au mieux selon la disponibilité du jour. Livraison dès 6h30, du lundi au vendredi, de Montparnasse à Alésia et Denfert-Rochereau.' },
          { q: 'Livrez-vous dans la Tour Montparnasse ?', a: 'Oui, nous livrons dans la Tour Montparnasse et l\'ensemble de ses immeubles satellites, dès 6h30 du lundi au vendredi. Nos livreurs connaissent les accès et les procédures de livraison du complexe. Indiquez à la commande l\'étage, le nom du contact et l\'heure à laquelle le plateau doit être posé, pas l\'heure de la réunion.' },
          { q: 'Quel budget prévoir pour un petit-déjeuner de 12 personnes dans le 14e ?', a: 'En formule Classique, à 8 € HT par personne, 12 personnes reviennent à 96 € HT, soit 125 € HT avec la livraison de 29 € HT. Le petit-déjeuner complet, de 12 à 16 € HT par personne, donne 144 à 192 € HT hors livraison. Le minimum de commande est de 50 € HT, sans minimum de participants.' },
          { q: 'Livrez-vous les petites équipes et les cabinets du 14e ?', a: 'Oui, dès 2 personnes : il n\'y a pas de minimum de participants, seulement un minimum de commande de 50 € HT. Deux plateaux repas végétariens font 57,80 € HT, plus 29 € HT de livraison. Cabinets d\'architecture, agences conseil et professions libérales du 14e sont livrés dans les mêmes créneaux que les grandes entreprises.' },
        ],
        seoArticle: `
          <p>Le <strong>14e arrondissement de Paris</strong> est structuré autour de deux dynamiques complémentaires : la puissance tertiaire de <strong>Montparnasse</strong> avec sa tour emblématique et ses immeubles de bureaux, et le tissu dense de PME, cabinets et professions libérales qui s'étend vers Alésia et Denfert-Rochereau. L'Écrin Traiteur livre dans tout le 14e dès <strong>6h30</strong>, du lundi au vendredi : petits-déjeuners dès <strong>8 € HT par personne</strong>, plateaux repas dès <strong>28,90 € HT</strong>, cocktails dès <strong>29,90 € HT</strong>.</p>
          <h2>Traiteur Tour Montparnasse, livraison dans le complexe de bureaux</h2>
          <p>La Tour Montparnasse et ses immeubles satellites hébergent des centaines d'entreprises réparties sur des dizaines d'étages. Nos livreurs connaissent les accès, les procédures de livraison et les contacts du complexe. Votre petit-déjeuner arrive à l'étage convenu, à l'heure exacte demandée, sans que vous ayez à gérer la logistique.</p>
          <h2>Livraison traiteur Paris 14e, Alésia, Denfert, Gaîté, Pernety</h2>
          <p>Au-delà de la Tour Montparnasse, le 14e abrite un tissu économique diversifié : cabinets d'architecture, agences conseil, professions libérales, PME de services. Nos créneaux de livraison couvrent l'ensemble de l'arrondissement de 6h30 à 10h, avec la même ponctualité du Carrefour Pernety à la place Denfert-Rochereau.</p>
          <h2>Quel créneau demander dans le 14e</h2>
          <p>Nos créneaux couvrent l'arrondissement de 6h30 à 10h. Choisissez l'heure à laquelle le plateau doit être posé, pas l'heure de la réunion : pour un comité à 9h, une livraison à 8h15 laisse le temps de dresser la salle ; pour un accueil de partenaires avant 8h, demandez 7h30. Les premiers créneaux, dès 6h30, conviennent aux équipes qui démarrent tôt à la Tour Montparnasse ou aux cabinets qui reçoivent dès l'ouverture.</p>
          <h2>Petit-déjeuner d'entreprise dans le 14e, pour toutes vos occasions</h2>
          <p>Du petit-déjeuner hebdomadaire de votre équipe à l'accueil d'un partenaire important, L'Écrin Traiteur propose la prestation adaptée à votre contexte et votre budget. La formule Classique est à 8 € HT par personne : pour 12 personnes, 96 € HT, soit 125 € HT avec la livraison de 29 € HT. Le petit-déjeuner complet va de 12 à 16 € HT par personne. Les compositions sont sur la page <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a>.</p>
          <h2>Plateaux repas pour les cabinets, agences et PME du 14e</h2>
          <p>Les plateaux repas individuels de la collection Essentiel démarrent à <strong>28,90 € HT par personne</strong> en végétarien, 29,90 € HT au poulet et 30,90 € HT au poisson : entrée, plat, dessert et pain, filmés et étiquetés. Pour 6 personnes en végétarien, comptez 173,40 € HT, soit 202,40 € HT avec la livraison. Il n'y a pas de minimum de participants : un cabinet de quatre personnes est livré comme une grande équipe. Voir la page <a href="/creations/plateaux-repas">plateaux repas</a>.</p>
          <h2>Formation ou séminaire dans le 14e : une journée en une commande</h2>
          <p>Une journée de formation demande trois temps : la pause du matin, les plateaux repas à midi et la pause de l'après-midi. Pour 15 personnes, comptez 120 € HT en formule Classique le matin, 433,50 € HT en plateaux végétariens et 90 € HT en pause gourmande, à partir de 6 € HT par personne, soit 643,50 € HT, plus la livraison de 29 € HT par commande. Voir <a href="/occasions/journee-formation">traiteur pour journée de formation</a>.</p>
          <h2>Buffets et cocktails dans le 14e</h2>
          <p>Pour une inauguration, un départ ou une réunion de fin de trimestre, trois formules, hors boissons, à 29,90, 40,90 et 51,90 € HT par personne pour respectivement 8, 12 et 16 pièces. Pour 30 personnes, cela donne 897, 1 227 ou 1 557 € HT, plus 29 € HT de livraison. Voir <a href="/creations/cocktails">buffets et cocktails</a>.</p>
          <h2>Régimes alimentaires et allergies</h2>
          <p>Tout est halal et sans porc par défaut, sans alcool et sans supplément. Pour les options végétariennes, véganes ou sans gluten, indiquez à la commande le nombre de convives concernés : les plateaux sont adaptés sans ligne supplémentaire sur le devis. La liste des allergènes est disponible sur demande à commercial@lecrin-traiteur.fr, et l'atelier manipule de la farine : des traces de gluten restent possibles.</p>
          <h2>Commander dans le 14e</h2>
          <p>Commandez jusqu'à la veille <strong>14h</strong> pour votre sélection complète. Pour une demande le matin même, appelez-nous : nous faisons au mieux selon la disponibilité. Minimum de commande 50 € HT, facturation entreprise avec TVA, bon de commande accepté. <a href="/devis">Demandez votre devis</a>, réponse sous 24h. Nous livrons aussi les <a href="/traiteur/paris/15e-arrondissement">15e</a>, <a href="/traiteur/paris/13e-arrondissement">13e</a> et <a href="/traiteur/paris/6e-arrondissement">6e arrondissements</a>.</p>
        `,
      },
    ],
    businessContext: 'Capital économique de France, Paris concentre des milliers de sièges sociaux, cabinets de conseil, banques d\'affaires et agences de communication.',
    seoTitle: 'Traiteur d\'entreprise à Paris',
    seoArticle: `
      <p>Paris est au cœur de l'activité de <strong>L'Écrin Traiteur</strong>. Que vous soyez installé dans un bureau du 8e arrondissement face aux Champs-Élysées, dans un open space du 9e près de l'Opéra, ou dans une tour du 15e à Front-de-Seine, nous livrons votre petit-déjeuner d'entreprise <strong>dès 6h30</strong>, chaque matin, partout à Paris.</p>
      <h2>Traiteur Paris : une exigence à la hauteur de la capitale</h2>
      <p>Paris est exigeante, ses professionnels le sont aussi. Chez L'Écrin Traiteur, nous sélectionnons nos artisans boulangers, pâtissiers et épiciers fins dans les meilleurs ateliers parisiens. Chaque viennoiserie sort du four le matin même. Nos madeleines Mado Paris sont réputées comme les meilleures de la capitale. Chaque plateau est préparé avec le soin que méritent vos réunions.</p>
      <h2>Petit-déjeuner d'entreprise Paris, tous les arrondissements</h2>
      <p>Nos livraisons couvrent l'ensemble des <strong>20 arrondissements de Paris</strong>. Des sièges sociaux du 1er aux startups du 11e, des cabinets d'avocats du 16e aux agences créatives du 18e, L'Écrin Traiteur s'adapte à votre adresse, à votre budget et à vos contraintes horaires.</p>
      <h2>Commander un traiteur à Paris avant 14h pour le lendemain matin</h2>
      <p>Notre modèle est simple : vous commandez en ligne avant <strong>14h la veille</strong>, nous livrons le lendemain matin à l'heure que vous avez choisie. Pas d'abonnement, pas de minimum imposé, facturation entreprise disponible. Idéal pour les CODIR, les accueils de partenaires, les formations ou les journées de cohésion.</p>
    `,
  },
  {
    slug: 'boulogne-billancourt',
    name: 'Boulogne-Billancourt',
    region: 'Hauts-de-Seine (92)',
    subtitle: 'Traiteur au cœur du premier pôle économique d\'IDF',
    heroDescription: 'Notre atelier est à Boulogne-Billancourt, 63 bis rue de Sèvres. L\'Écrin Traiteur livre plateaux repas, cocktails, pauses et petits-déjeuners dans le Trapèze, le centre-ville et les parcs d\'affaires, dès 6h30.',
    zones: ['Le Trapèze', 'Pont-de-Sèvres', 'Centre-ville', 'Parc de Saint-Cloud', 'Île Seguin'],
    quartiers: [
      {
        slug: 'trapeze',
        name: 'Le Trapèze',
        heroDescription: 'Le Trapèze, quartier d\'affaires moderne de Boulogne-Billancourt, entre la Seine et les tours de Pont-de-Sèvres, L\'Écrin Traiteur livre plateaux repas, pauses gourmandes, cocktails et petits-déjeuners dans tous les immeubles du secteur dès 6h30.',
        linkedZones: ['Le Trapèze', 'Pont-de-Sèvres', 'Île Seguin'],
        seoTitle: 'Traiteur d\'entreprise Le Trapèze Boulogne',
        seoDescription: 'L\'Écrin Traiteur livre plateaux repas, pauses, cocktails et petits-déjeuners d\'entreprise dans le Trapèze à Boulogne-Billancourt : Pont-de-Sèvres, Île Seguin. Livraison dès 6h30.',
        seoArticle: `
          <p>Le <strong>Trapèze</strong> est le quartier d'affaires moderne de Boulogne-Billancourt, né de la reconversion des anciens terrains Renault. Il concentre aujourd'hui des sièges sociaux de premier plan, des espaces de coworking et des immeubles tertiaires contemporains. L'Écrin Traiteur y livre depuis son ouverture.</p>
          <h2>Livraison traiteur dans le Trapèze, un secteur que nous connaissons parfaitement</h2>
          <p>Nos livreurs connaissent les accès spécifiques à chaque immeuble du Trapèze, les contraintes de stationnement et les procédures de livraison des principaux acteurs installés sur le site. Votre petit-déjeuner arrive à l'heure, sans friction, quelle que soit la complexité de votre accès.</p>
          <h2>Pont-de-Sèvres et les tours en bord de Seine</h2>
          <p>Les tours de Pont-de-Sèvres, qui surplombent la Seine face à Sèvres, hébergent des entreprises qui apprécient la combinaison d'un cadre exceptionnel et d'un accès direct aux transports. L'Écrin Traiteur livre dans ces immeubles avec la même régularité et la même qualité artisanale que partout ailleurs dans notre zone.</p>
          <h2>Commander votre traiteur au Trapèze</h2>
          <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30 dans le Trapèze, Pont-de-Sèvres et l'ensemble de Boulogne-Billancourt. Facturation entreprise disponible.</p>
        `,
      },
    ],
    businessContext: 'Boulogne-Billancourt est la commune la plus riche d\'Île-de-France hors Paris. Elle accueille les sièges d\'Engie, Bouygues, TF1, Deezer et des centaines de PME et cabinets de conseil.',
    seoTitle: 'Traiteur entreprise Boulogne-Billancourt',
    metaTitle: "Traiteur entreprise Boulogne-Billancourt, atelier sur place",
    metaDescription: "Notre atelier est au 63 bis rue de Sèvres : petit-déjeuner dès 8 € HT/pers., plateaux repas et cocktails livrés dès 6h30 à Boulogne. Devis sous 24h.",
    faq: [
      { q: 'Peut-on commander le matin même à Boulogne-Billancourt ?', a: "Oui, jusqu'à 10h le matin même sur notre sélection disponible du jour : plateaux de viennoiseries, madeleines, brochettes de fruits. Pour votre carte complète et un choix garanti, commandez jusqu'à la veille 14h. Boulogne-Billancourt est la commune où cette souplesse est la plus facile à tenir, car notre atelier s'y trouve." },
      { q: 'Quels quartiers de Boulogne-Billancourt livrez-vous ?', a: "Le Trapèze, le Pont-de-Sèvres, le centre-ville, la route de la Reine, les abords du Parc de Saint-Cloud et l'Île Seguin, dès 6h30 du lundi au vendredi. Notre atelier est au 63 bis rue de Sèvres, sur la commune. Donnez l'étage, le contact et l'heure de réception : nous montons à l'étage quand l'immeuble le permet." },
      { q: 'Combien coûte la livraison à Boulogne-Billancourt ?', a: "29 € HT par commande, avec un minimum de commande de 50 € HT et aucun minimum de participants. Un petit-déjeuner Classique à 8 € HT par personne pour 15 personnes revient à 120 € HT, soit 149 € HT avec la livraison. Pour 10 plateaux repas au poulet, 299 € HT, soit 328 € HT avec la livraison." },
      { q: 'Vos plateaux repas conviennent-ils à une journée de formation ?', a: "Oui : une journée se commande en une fois, avec la pause du matin, les plateaux repas à midi et la pause de l'après-midi. Les plateaux démarrent à 28,90 € HT par personne en végétarien, 29,90 € HT au poulet et 30,90 € HT au poisson, avec entrée, plat, dessert et pain. Tout est halal et sans porc par défaut." },
    ],
    seoArticle: `
      <p><strong>Boulogne-Billancourt</strong> est notre commune d'attache : notre atelier est au 63 bis rue de Sèvres. C'est la ville où nous livrons le plus tôt et le plus souvent, du Trapèze au Pont-de-Sèvres en passant par le centre-ville et la route de la Reine. Sur Boulogne, un oubli de dernière minute reste rattrapable, ce qui n'est pas vrai partout. Nous y livrons des petits-déjeuners dès <strong>8 € HT par personne</strong>, des plateaux repas dès <strong>28,90 € HT</strong> et des cocktails dès <strong>29,90 € HT</strong>, du lundi au vendredi, dès <strong>6h30</strong>.</p>

      <h2>Petit-déjeuner d'entreprise à Boulogne-Billancourt</h2>
      <p>C'est notre commande la plus courante sur la ville. Viennoiseries pur beurre façonnées le matin même par nos boulangers partenaires, corbeille de fruits frais découpés, jus Alain Milliat, café, et les madeleines Mado Paris que beaucoup d'équipes boulonnaises commandent maintenant systématiquement. En formule Classique, à 8 € HT par personne, 15 personnes reviennent à 120 € HT, soit 149 € HT avec la livraison de 29 € HT. Détail des formules et tarifs sur notre page <a href="/petit-dejeuner-entreprise/boulogne-billancourt">petit-déjeuner d'entreprise à Boulogne-Billancourt</a>, ou toutes nos créations sur <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a>.</p>

      <h2>Livraison à Boulogne : Trapèze, Pont-de-Sèvres, centre-ville</h2>
      <p>Nous connaissons les accès du Trapèze immeuble par immeuble, les contraintes de stationnement du centre-ville et les procédures des tours de Pont-de-Sèvres. Livraison à partir de <strong>6h30</strong>, montée à l'étage quand c'est possible. Étant basés sur la commune, nous sommes aussi la ville où nous acceptons le plus facilement les commandes du matin même sur notre sélection disponible du jour, jusqu'à 10h.</p>

      <h2>Deux commandes types à Boulogne-Billancourt</h2>
      <p>Une équipe de 18 personnes en petit-déjeuner Classique revient à 144 € HT, soit 173 € HT avec la livraison de 29 € HT. La même équipe en plateaux repas végétariens revient à 520,20 € HT, soit 549,20 € HT avec la livraison. Pour une pause de l'après-midi, la pause gourmande démarre à 6 € HT par personne. Ces formats peuvent se commander ensemble pour une journée entière, avec un devis remis sous 24 h.</p>

      <h2>Les secteurs de Boulogne que nous livrons</h2>
      <p>Cinq secteurs reviennent dans nos tournées : le Trapèze, le Pont-de-Sèvres, le centre-ville, les abords du Parc de Saint-Cloud et l'Île Seguin. Le Trapèze a sa propre page : <a href="/traiteur/boulogne-billancourt/trapeze">traiteur d'entreprise au Trapèze</a>. Donnez à la commande l'adresse exacte, l'étage et le nom du contact : sur une commune où notre atelier est à côté, il n'y a aucune raison que le plateau attende à l'accueil.</p>

      <h2>Plateaux repas pour vos réunions</h2>
      <p>Plateaux individuels complets, entrée, plat, dessert et pain, livrés directement en salle. C'est le format des déjeuners de réunion et des journées de formation. Ils démarrent à <strong>28,90 € HT par personne</strong> en végétarien, 29,90 € HT au poulet et 30,90 € HT au poisson. Pour 10 plateaux au poulet, comptez 299 € HT, soit 328 € HT avec la livraison. Les collections, dont les options végétariennes, sont sur la page <a href="/creations/plateaux-repas">plateaux repas</a>.</p>

      <h2>Cocktails, afterworks et réceptions à Boulogne</h2>
      <p>Formules cocktail de 8, 12 ou 16 pièces par personne, à 29,90, 40,90 et 51,90 € HT, hors boissons, livrées en fin de journée et prêtes à poser, pour un afterwork, un pot de départ ou une fin de trimestre. Pour 25 personnes en La Réception, le total est de 1 022,50 € HT, soit 1 051,50 € HT avec la livraison. Voir la page <a href="/occasions/afterwork-entreprise">traiteur afterwork d'entreprise</a>.</p>

      <h2>Toute la carte halal et sans porc</h2>
      <p>Par défaut, sur l'ensemble de la carte, sans que vous ayez à le demander ni à payer un supplément, et sans alcool. Options végétariennes, véganes et sans gluten à préciser à la commande avec les effectifs concernés. L'atelier manipule de la farine : des traces de gluten restent possibles. Détail sur la page <a href="/traiteur-halal">traiteur halal d'entreprise</a>.</p>

      <h2>Commander à Boulogne-Billancourt</h2>
      <p>Commande jusqu'à la veille <strong>14h</strong>, livraison dès 6h30, et jusqu'à 10h le matin même sur notre sélection du jour. Minimum de commande 50 € HT, livraison 29 € HT, pas de minimum de participants. Pour 50 personnes ou plus, un préavis de 48 h est recommandé. Facturation entreprise avec TVA, bon de commande accepté, interlocuteur unique pour les commandes récurrentes. <a href="/devis">Demandez votre devis</a>, réponse sous 24h, ou appelez le 01 74 54 23 10.</p>
    `,
  },
  {
    slug: 'neuilly-sur-seine',
    name: 'Neuilly-sur-Seine',
    region: 'Hauts-de-Seine (92)',
    subtitle: 'Livraison dans les sièges sociaux et cabinets premium du 92',
    heroDescription: 'Neuilly-sur-Seine, entre prestige et exigence, L\'Écrin Traiteur signe réceptions, cocktails, plateaux repas et petits-déjeuners dans les bureaux de l\'avenue Charles-de-Gaulle et du quartier des Sablons.',
    zones: ['Avenue Charles-de-Gaulle', 'Quartier des Sablons', 'Boulevard Bineau', 'Porte Maillot'],
    businessContext: 'Neuilly-sur-Seine héberge de nombreux family offices, holdings, cabinets d\'avocats d\'affaires et sièges de groupes internationaux. La ville est connue pour ses standards d\'exigence élevés.',
    seoTitle: 'Traiteur d\'entreprise Neuilly-sur-Seine',
    metaTitle: "Traiteur entreprise Neuilly-sur-Seine : livré dès 6h30",
    metaDescription: "Petits-déjeuners, plateaux repas et cocktails livrés avenue Charles-de-Gaulle et aux Sablons dès 6h30. Dès 8 € HT/pers., commande avant 14h la veille.",
    faq: [
      { q: 'Livrez-vous avenue Charles-de-Gaulle et aux Sablons avant 8h ?', a: "Oui, la livraison démarre à 6h30 du lundi au vendredi sur toute la commune : avenue Charles-de-Gaulle, Sablons, boulevard Bineau, Porte Maillot, île de la Jatte. Nous montons à l'étage quand l'immeuble le permet, sinon dépôt à l'accueil. Donnez l'étage, le nom du contact et l'heure voulue à la commande : nous n'appelons pas votre standard à 7h." },
      { q: 'Quel budget pour un petit-déjeuner de 10 personnes à Neuilly-sur-Seine ?', a: "En formule Classique à 8 € HT par personne, 10 personnes reviennent à 80 € HT, soit 109 € HT avec la livraison de 29 € HT. Un petit-déjeuner complet, de 12 à 16 € HT par personne, donne 120 à 160 € HT, soit 149 à 189 € HT livraison comprise. Le minimum de commande est de 50 € HT." },
      { q: 'Proposez-vous des plateaux repas pour un comité de direction à Neuilly ?', a: "Oui. Les plateaux repas individuels démarrent à 28,90 € HT par personne en végétarien, 29,90 € HT au poulet et 30,90 € HT au poisson, avec entrée, plat, dessert et pain, filmés et étiquetés. Pour 8 personnes, comptez 231,20 € HT au plus bas, hors livraison. Commande jusqu'à la veille 14h." },
      { q: 'Peut-on commander chaque semaine sans abonnement ?', a: "Oui. Il n'y a ni abonnement ni engagement de volume : chaque commande est traitée de la même façon, pour 2 ou pour 50 personnes. Pour une commande hebdomadaire, vous avez un interlocuteur unique et une facturation entreprise avec TVA, et le bon de commande est accepté. Le minimum de commande est de 50 € HT." },
    ],
    seoArticle: `
      <p>À <strong>Neuilly-sur-Seine</strong>, nous livrons chaque matin les bureaux de l'avenue Charles-de-Gaulle, du quartier des Sablons et du boulevard Bineau : petits-déjeuners dès <strong>8 € HT par personne</strong>, plateaux repas dès <strong>28,90 € HT</strong>, cocktails dès <strong>29,90 € HT</strong>, du lundi au vendredi, dès <strong>6h30</strong>. Sièges sociaux, family offices, cabinets d'avocats d'affaires et sociétés de gestion : les commandes y sont souvent récurrentes, parfois quotidiennes, et la présentation compte autant que le contenu du plateau.</p>

      <h2>Petit-déjeuner d'entreprise à Neuilly-sur-Seine</h2>
      <p>C'est notre commande la plus fréquente sur la commune. Un petit-déjeuner L'Écrin, c'est des viennoiseries pur beurre façonnées le matin même par nos boulangers partenaires, une corbeille de fruits frais découpés, les jus Alain Milliat et le café. Beaucoup de nos clients neuilléens y ajoutent les madeleines Mado Paris, devenues un réflexe pour les comités et les réunions d'associés. La formule Classique est à 8 € HT par personne, le petit-déjeuner complet de 12 à 16 € HT. Pour un comité de 10 personnes, comptez 80 € HT en Classique, soit 109 € HT avec la livraison de 29 € HT.</p>
      <p>Trois formats reviennent en boucle à Neuilly :</p>
      <ul>
        <li>Le petit-déjeuner d'accueil, pour une réunion de 8 à 15 personnes avec des invités externes</li>
        <li>Le petit-déjeuner récurrent, une fois par semaine, pour toute une équipe</li>
        <li>Le plateau de viennoiseries seul, pour un point d'équipe de 30 minutes</li>
      </ul>
      <p>Les compositions complètes sont sur notre page <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a>.</p>

      <h2>Livraison à Neuilly : quartiers, horaires, accès</h2>
      <p>Nous couvrons toute la commune, de la Porte Maillot au pont de Neuilly, en passant par les Sablons, l'île de la Jatte et le boulevard Bineau. Livraison à partir de <strong>6h30</strong>, montée directement à l'étage quand l'immeuble le permet, dépôt à l'accueil sinon. Vous nous donnez l'étage, le nom du contact et l'heure voulue au moment de la commande : nous n'appelons pas votre standard à 7h du matin pour demander où aller.</p>

      <h2>Plateaux repas et déjeuners de réunion</h2>
      <p>Pour les déjeuners de travail, nous livrons des plateaux repas individuels, filmés et étiquetés, avec entrée, plat, dessert et pain. C'est le format qui fonctionne quand la réunion s'étire et que personne ne veut descendre déjeuner. Les plateaux de la collection Essentiel démarrent à <strong>28,90 € HT par personne</strong> en végétarien, 29,90 € HT au poulet et 30,90 € HT au poisson. Pour 8 personnes, comptez 231,20 € HT au plus bas, hors livraison. Les collections, dont les options végétariennes, sont détaillées sur la page <a href="/creations/plateaux-repas">plateaux repas</a>.</p>

      <h2>Cocktails, afterworks et pots de départ</h2>
      <p>Pour une fin de trimestre, une signature de dossier ou un départ, nous livrons des formules cocktail de 8, 12 ou 16 pièces par personne, à 29,90, 40,90 et 51,90 € HT, hors boissons, dressées et prêtes à poser. Le détail des formules est sur la page <a href="/occasions/afterwork-entreprise">traiteur afterwork d'entreprise</a>.</p>

      <h2>Recevoir des invités externes à Neuilly</h2>
      <p>Pour un rendez-vous avec un client, un candidat ou un partenaire, le petit-déjeuner complet, de 12 à 16 € HT par personne, ajoute à la base Classique des madeleines ou des cakes, des brochettes de fruits, du thé et une sélection de jus plus large. Pour un comité d'associés de 8 personnes, comptez entre 96 et 128 € HT, soit 125 à 157 € HT avec la livraison. Nous livrons dès 6h30 et montons le plateau à l'étage quand l'immeuble le permet : il est posé avant l'arrivée des invités.</p>

      <h2>Budget pour 10 personnes à Neuilly, livraison comprise</h2>
      <ul>
        <li>Petit-déjeuner Classique : 80 € HT, soit 109 € HT avec la livraison de 29 € HT.</li>
        <li>Plateaux repas en végétarien : 289 € HT, soit 318 € HT avec la livraison.</li>
        <li>Cocktail L'Invitation, 8 pièces par personne : 299 € HT, soit 328 € HT avec la livraison, hors boissons.</li>
      </ul>

      <h2>Toute la carte halal et sans porc</h2>
      <p>C'est le cas par défaut, pas une option à demander. Nous proposons aussi des compositions végétariennes, véganes et sans gluten. Indiquez les contraintes de votre équipe à la commande, avec les effectifs concernés, et nous adaptons les plateaux sans supplément caché sur le devis.</p>

      <h2>Commander à Neuilly-sur-Seine</h2>
      <p>Commande jusqu'à la veille <strong>14h</strong>, livraison dès 6h30. Minimum de commande 50 € HT, livraison 29 € HT, pas de minimum de participants ni d'abonnement. Facturation entreprise avec TVA, bon de commande accepté, et un interlocuteur unique si vous commandez régulièrement. Pour 50 personnes ou plus, un préavis de 48 h est recommandé. <a href="/devis">Demandez votre devis</a>, réponse sous 24h.</p>
    `,
  },
  {
    slug: 'levallois-perret',
    name: 'Levallois-Perret',
    region: 'Hauts-de-Seine (92)',
    subtitle: 'Traiteur dans la ville la plus dense d\'Europe',
    heroDescription: 'Levallois-Perret, hub digital et créatif du 92, L\'Écrin Traiteur livre dans les immeubles Coface, les bureaux de Havas et les startups du secteur.',
    zones: ['Anatole France', 'Victor Hugo', 'Louise Michel', 'Centre', 'Bords de Seine'],
    businessContext: 'Levallois-Perret est l\'une des villes les plus denses d\'Europe. Elle accueille les sièges de Havas, Coface, LCL, et de nombreuses agences de communication et digital natives.',
    seoTitle: 'Traiteur d\'entreprise Levallois-Perret',
    metaTitle: "Traiteur entreprise Levallois-Perret : petit-déj dès 8 € HT",
    metaDescription: "Petit-déjeuner dès 8 € HT/pers., plateaux repas et cocktails livrés à Levallois-Perret, d'Anatole France aux bords de Seine, dès 6h30. Devis 24h.",
    faq: [
      { q: 'Livrez-vous dans le centre de Levallois-Perret, où le stationnement est difficile ?', a: "Oui, sur l'ensemble de la commune, d'Anatole France à Victor Hugo, Louise Michel et aux bords de Seine, dès 6h30 du lundi au vendredi. Nous donnons un créneau précis plutôt qu'une plage de deux heures : si votre réunion démarre à 9h, le plateau est posé avant 8h45. Indiquez l'étage et le contact sur place à la commande." },
      { q: 'À partir de combien de personnes livrez-vous à Levallois-Perret ?', a: "Dès 2 personnes : il n'y a pas de minimum de participants, seulement un minimum de commande de 50 € HT. Deux plateaux repas végétariens font 57,80 € HT, plus 29 € HT de livraison. Un petit-déjeuner Classique pour 10 personnes revient à 80 € HT, soit 109 € HT avec la livraison." },
      { q: 'Quel budget prévoir pour un afterwork au bureau à Levallois-Perret ?', a: "Comptez 29,90 € HT par personne en L'Invitation (8 pièces), 40,90 € HT en La Réception (12 pièces) et 51,90 € HT en La Célébration (16 pièces), hors boissons. Pour 20 personnes en L'Invitation, 598 € HT, soit 627 € HT avec la livraison de 29 € HT, livrés en fin de journée et prêts à poser." },
      { q: 'Votre carte est-elle halal à Levallois-Perret ?', a: "Oui, c'est le standard : tout est halal, sans porc et sans alcool par défaut, sans supplément ni ligne séparée sur le devis. Les options végétarienne, vegan et sans gluten se précisent à la commande avec les effectifs concernés. Nous ne revendiquons aucune certification halal, et des traces de gluten restent possibles." },
    ],
    seoArticle: `
      <p><strong>Levallois-Perret</strong> est l'une des villes les plus denses d'Europe, et cela se voit dans nos tournées : beaucoup d'adresses, sur peu de kilomètres, avec des agences de communication et des sièges de groupes financiers à quelques rues d'écart. Nous y livrons chaque matin, du quartier Anatole France aux bords de Seine : le petit-déjeuner à partir de <strong>8 € HT par personne</strong>, le plateau repas à partir de <strong>28,90 € HT</strong>, le cocktail à partir de <strong>29,90 € HT</strong>, avec une livraison dès <strong>6h30</strong>, du lundi au vendredi.</p>

      <h2>Petit-déjeuner d'entreprise à Levallois-Perret</h2>
      <p>Le profil des commandes y est varié. Une agence de vingt personnes ne commande pas comme un siège de plusieurs centaines de collaborateurs. Nos plateaux couvrent les deux : viennoiseries pur beurre, cookies Laura Todd, madeleines Mado Paris, brochettes de fruits frais, jus Alain Milliat. Pour une agence de 20 personnes en formule Classique, à 8 € HT par personne, le total est de 189 € HT livraison de 29 € HT comprise. Le petit-déjeuner complet va de 12 à 16 € HT par personne. La carte complète est sur la page <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a>, et les formules par ville sur <a href="/petit-dejeuner-entreprise/levallois-perret">petit-déjeuner d'entreprise à Levallois-Perret</a>.</p>

      <h2>Livraison à Levallois : Anatole France, Victor Hugo, bords de Seine</h2>
      <p>Nous couvrons l'ensemble de la commune, y compris les rues à stationnement difficile du centre. Livraison à partir de <strong>6h30</strong>, avec un créneau précis plutôt qu'une plage de deux heures : si votre réunion démarre à 9h, le plateau est posé avant 8h45.</p>

      <h2>Plateaux repas d'entreprise à Levallois-Perret</h2>
      <p>Pour les déjeuners de réunion à Levallois-Perret, nous livrons des plateaux individuels complets, entrée, plat, dessert et pain, filmés et étiquetés au nom du participant si vous le souhaitez. Ils démarrent à <strong>28,90 € HT par personne</strong> en végétarien, 29,90 € HT au poulet, 30,90 € HT au poisson. Pour 20 personnes en végétarien, le total est de 607 € HT livraison comprise. Voir la page <a href="/creations/plateaux-repas">plateaux repas</a>.</p>

      <h2>Afterworks et pots d'équipe</h2>
      <p>Levallois-Perret est une ville où les afterworks se font souvent au bureau plutôt qu'au bar d'à côté, faute de place le jeudi soir. Nous livrons les formules cocktail en fin de journée : L'Invitation (8 pièces par personne, 29,90 € HT), La Réception (12 pièces, 40,90 € HT) et La Célébration (16 pièces, 51,90 € HT), hors boissons. Pour 20 personnes en L'Invitation, le total est de 627 € HT livraison comprise. Détail sur la page <a href="/occasions/afterwork-entreprise">traiteur afterwork d'entreprise</a>.</p>

      <h2>Quel format selon la durée de la réunion</h2>
      <ul>
        <li>Un point d'équipe de 30 minutes : un petit-déjeuner Classique, à 8 € HT par personne.</li>
        <li>Une réunion de deux heures avec des invités : le petit-déjeuner complet, de 12 à 16 € HT par personne.</li>
        <li>Une demi-journée de travail : une pause gourmande, à partir de 6 € HT par personne, sur la page <a href="/creations/pauses-gourmandes">pauses gourmandes</a>.</li>
        <li>Une journée complète : la pause du matin, les plateaux repas à midi et la pause de l'après-midi, dans une seule commande.</li>
      </ul>

      <h2>Petites équipes : à partir de deux personnes</h2>
      <p>Une petite agence ou une start-up n'a pas besoin de commander pour trente personnes pour être livrée. Il n'y a pas de minimum de participants, seulement un minimum de commande de 50 € HT : deux plateaux repas végétariens font déjà 57,80 € HT, plus 29 € HT de livraison. Un petit-déjeuner Classique pour 10 personnes revient à 80 € HT, soit 109 € HT avec la livraison.</p>

      <h2>Traiteur dans tout le nord des Hauts-de-Seine (92)</h2>
      <p>Levallois-Perret est notre point d'ancrage sur ce secteur du 92, mais nous livrons tout aussi bien <a href="/traiteur/clichy">Clichy</a>, <a href="/traiteur/neuilly-sur-seine">Neuilly-sur-Seine</a> et <a href="/traiteur/courbevoie">Courbevoie</a> juste à côté. Même exigence, mêmes artisans, mêmes délais.</p>

      <h2>Toute la carte halal et sans porc</h2>
      <p>C'est notre standard, pas une option en supplément. Les compositions végétariennes, véganes et sans gluten se demandent à la commande, avec les effectifs concernés, et n'apparaissent pas comme une ligne supplémentaire sur le devis.</p>

      <h2>Traiteur entreprise Levallois-Perret, sans abonnement</h2>
      <p>Pas d'abonnement, pas d'engagement de volume. Chaque commande est traitée pareil, qu'elle soit pour 2 personnes ou pour 50. Commande jusqu'à la veille <strong>14h</strong>, livraison dès 6h30, minimum 50 € HT, livraison 29 € HT. Pour 50 personnes ou plus, un préavis de 48 h est recommandé. Facturation entreprise avec TVA, bon de commande accepté. <a href="/devis">Demandez votre devis</a>, réponse sous 24h.</p>
    `,
  },
  {
    slug: 'courbevoie',
    name: 'Courbevoie',
    region: 'Hauts-de-Seine (92) · La Défense',
    subtitle: 'Traiteur au cœur de La Défense',
    heroDescription: 'Courbevoie, c\'est La Défense, le premier quartier d\'affaires européen. L\'Écrin Traiteur livre dans toutes les tours et les espaces de coworking.',
    zones: ['La Défense', 'Tour First', 'Tour Total', 'Westfield Les Quatre Temps', 'CNIT', 'Les Groues'],
    businessContext: 'Courbevoie abrite la majeure partie des tours de La Défense, le premier quartier d\'affaires d\'Europe avec plus de 180 000 salariés. EDF, Total, Société Générale, BNP Paribas y ont leurs sièges.',
    seoTitle: 'Traiteur d\'entreprise Courbevoie 92',
    metaTitle: "Traiteur entreprise Courbevoie : livré dès 6h30 à La Défense",
    metaDescription: "Petit-déjeuner dès 8 € HT/pers., plateaux repas et cocktails livrés dans les tours de Courbevoie et La Défense dès 6h30. Commande avant 14h, devis 24h.",
    faq: [
      { q: 'Livrez-vous dans la tour First, la tour Total et au CNIT ?', a: "Oui, ainsi qu'à Westfield Les Quatre Temps et dans le quartier des Groues, dès 6h30 du lundi au vendredi. Indiquez à la commande le nom de la tour, l'étage, le contact sur place et l'heure de réception : l'accès en sous-sol, le monte-charges ou la réception d'immeuble sont convenus à ce moment-là." },
      { q: 'Quel est le prix d\'un plateau repas à Courbevoie ?', a: "Les plateaux repas démarrent à 28,90 € HT par personne en végétarien, 29,90 € HT au poulet et 30,90 € HT au poisson, avec entrée, plat, dessert et pain. S'ajoutent 29 € HT de livraison par commande. Pour 15 personnes au poulet, le total est de 477,50 € HT. Le minimum de commande est de 50 € HT." },
      { q: 'Combien de temps à l\'avance commander pour un séminaire à La Défense ?', a: "Jusqu'à la veille 14h pour une livraison dès 6h30. À partir de 50 personnes ou pour plusieurs sites, un préavis de 48 h est recommandé. Les grands groupes se composent sur devis, remis sous 24 h, avec facturation entreprise, TVA et bon de commande accepté." },
      { q: 'Proposez-vous des buffets et des cocktails dans les tours ?', a: "Oui, en trois formules : L'Invitation à 29,90 € HT (8 pièces par personne), La Réception à 40,90 € HT (12 pièces) et La Célébration à 51,90 € HT (16 pièces), hors boissons. Pour 40 personnes en La Réception, comptez 1 636 € HT, soit 1 665 € HT avec la livraison de 29 € HT." },
    ],
    seoArticle: `
      <p><strong>Courbevoie</strong> abrite la majeure partie des tours de La Défense, le premier quartier d'affaires d'Europe, avec plus de 180 000 salariés. L'Écrin Traiteur y livre des petits-déjeuners dès <strong>8 € HT par personne</strong>, des plateaux repas dès <strong>28,90 € HT</strong>, des buffets et cocktails dès <strong>29,90 € HT</strong>, du lundi au vendredi, dès <strong>6h30</strong>. Notre atelier est à Boulogne-Billancourt, dans les Hauts-de-Seine comme Courbevoie, et nos tournées sont montées pour tenir des créneaux serrés dans les tours.</p>

      <h2>Plateaux repas d'entreprise à Courbevoie</h2>
      <p>Pour un déjeuner de réunion sans quitter la salle, les plateaux repas individuels de la collection Essentiel démarrent à <strong>28,90 € HT par personne</strong> en végétarien, 29,90 € HT au poulet et 30,90 € HT au poisson : entrée, plat, dessert et pain, filmés et étiquetés. Pour 15 personnes au poulet, comptez 448,50 € HT, soit 477,50 € HT avec la livraison de 29 € HT. Les menus sont sur la page <a href="/creations/plateaux-repas">plateaux repas</a>.</p>

      <h2>Petit-déjeuner d'entreprise à Courbevoie</h2>
      <p>La formule Classique, à 8 € HT par personne, réunit viennoiseries pur beurre, jus, café et corbeille de fruits frais. La formule Complet, de 12 à 16 € HT, ajoute madeleines ou cakes et une sélection de jus plus large pour les comités de direction et les accueils. Une équipe de 10 personnes en Classique revient à 109 € HT livraison comprise. Les formules sont détaillées sur la page <a href="/petit-dejeuner-entreprise/courbevoie">petit-déjeuner d'entreprise à Courbevoie</a>. Pour les grands groupes, la commande se compose sur devis, avec une qualité homogène sur toute la livraison.</p>

      <h2>Livrer dans les tours : First, Total, CNIT, Quatre Temps</h2>
      <p>Livrer à La Défense, c'est une compétence en soi : parkings dédiés, accès piétons, réception d'immeuble, monte-charges. Nos commandes sont conditionnées pour le transport en ascenseur, dans des caisses rigides, avec le café chaud en thermos. Nous livrons la tour First, la tour Total, le CNIT, Westfield Les Quatre Temps et le quartier des Groues. À la commande, donnez le nom de la tour, l'étage, le contact sur place et l'heure à laquelle la salle doit être prête.</p>

      <h2>Buffets et cocktails dans les tours de La Défense</h2>
      <p>Pour un pot de fin de projet, une convention ou un afterwork, trois formules, hors boissons, avec livraison de 29 € HT en plus par commande :</p>
      <ul>
        <li>L'Invitation, 8 pièces par personne, 29,90 € HT : 1 225 € HT pour 40 personnes, livraison comprise.</li>
        <li>La Réception, 12 pièces, 40,90 € HT : 1 665 € HT pour 40 personnes, livraison comprise.</li>
        <li>La Célébration, 16 pièces, 51,90 € HT : 2 105 € HT pour 40 personnes, livraison comprise.</li>
      </ul>
      <p>Le détail est sur la page <a href="/creations/cocktails">buffets et cocktails</a> et dans le guide du <a href="/journal/budget-cocktail-entreprise-paris">budget d'un cocktail d'entreprise</a>.</p>

      <h2>Exemple : un événement de 100 personnes à La Défense</h2>
      <p>Aux prix de la carte, un événement de 100 personnes donne : 800 € HT en petit-déjeuner Classique, de 1 200 à 1 600 € HT en petit-déjeuner complet, 2 890 € HT en plateaux repas végétariens et 4 090 € HT en cocktail La Réception, hors boissons, plus 29 € HT de livraison par commande. À cette taille, un préavis de 48 h est recommandé et le devis sur mesure, remis sous 24 h, précise l'accès à la tour, le quai ou la réception, et l'heure à laquelle chaque service doit être prêt.</p>

      <h2>Séminaires et journées de formation en tour</h2>
      <p>Une journée entière se commande en une fois : pause du matin, plateaux repas à midi, pause de l'après-midi, avec des produits différents à chaque service. Pour les tours côté Puteaux, voir <a href="/traiteur/puteaux">traiteur à Puteaux</a>, et pour une vue d'ensemble du quartier <a href="/traiteur/la-defense">traiteur à La Défense</a>.</p>

      <h2>Halal, sans porc, végétarien</h2>
      <p>Tout est halal et sans porc par défaut, sans alcool, sans supplément. Les options végétariennes, véganes et sans gluten se précisent à la commande avec les effectifs concernés. L'atelier manipule de la farine : des traces de gluten restent possibles.</p>

      <h2>Commander votre traiteur à Courbevoie</h2>
      <p>Commande jusqu'à la veille <strong>14h</strong>, livraison dès 6h30. À partir de 50 personnes ou pour plusieurs tours, un préavis de 48 h est recommandé. Minimum de commande 50 € HT, livraison 29 € HT, pas de minimum de participants. Facturation entreprise avec TVA, bon de commande accepté. <a href="/devis">Demandez votre devis</a>, réponse sous 24h.</p>
    `,
  },
  {
    slug: 'puteaux',
    name: 'Puteaux',
    region: 'Hauts-de-Seine (92) · La Défense',
    subtitle: 'Livraison traiteur dans les tours de La Défense rive Puteaux',
    heroDescription: 'Puteaux accueille les tours Ariane, Aurore et des dizaines de sièges sociaux. L\'Écrin Traiteur livre dès 6h30 dans tout le secteur.',
    zones: ['La Défense', 'Tour Ariane', 'Tour Aurore', 'Dunes', 'Bords de Seine'],
    businessContext: 'Puteaux est la commune qui abrite une partie importante des tours de La Défense, notamment les tours Ariane et Aurore, ainsi que des entreprises comme Accenture et des banques internationales.',
    seoTitle: 'Traiteur d\'entreprise Puteaux La Défense',
    metaTitle: "Traiteur entreprise Puteaux : livré dès 6h30 à La Défense",
    metaDescription: "Petit-déjeuner dès 8 € HT/pers., plateaux repas, cocktails. Livraison dès 6h30 dans les tours Ariane et Aurore et à Puteaux. Devis sous 24h.",
    faq: [
      { q: 'Livrez-vous dans les tours Ariane et Aurore à Puteaux ?', a: "Oui. Indiquez le nom de la tour, l'étage, le contact sur place et l'heure de réception souhaitée. L'accès livraison est souvent en sous-sol et un badge visiteur peut devoir être déclaré la veille. Nous livrons dès 6h30 du lundi au vendredi et calons le créneau sur l'heure à laquelle le plateau doit être posé, pas sur le début de la réunion." },
      { q: 'Quel budget prévoir pour 50 personnes à Puteaux ?', a: "En formule Classique, 50 personnes reviennent à 400 € HT, soit 429 € HT avec la livraison de 29 € HT. En plateaux repas, comptez 1 445 € HT au plus bas, soit 1 474 € HT livraison comprise. Pour un cocktail de 12 pièces par personne, 2 045 € HT, soit 2 074 € HT avec la livraison, hors boissons." },
      { q: 'Peut-on commander pour 80 personnes à Puteaux ?', a: "Oui, des commandes de 30, 50 ou 80 personnes sont courantes sur le secteur, avec la même composition quel que soit l'effectif. À partir de 50 personnes, nous recommandons un préavis de 48 h plutôt que la veille 14h, pour sécuriser les quantités. Le devis arrive sous 24 h avec la livraison indiquée." },
      { q: 'Vos plateaux conviennent-ils à une équipe aux régimes variés ?', a: "Oui : tout est halal, sans porc et sans alcool par défaut, ce qui évite une commande à part sur une grande équipe. Les options végétarienne, vegan et sans gluten se précisent à la commande avec les effectifs concernés. Les plateaux sont filmés et étiquetés, au nom du participant si vous le souhaitez." },
    ],
    seoArticle: `
      <p><strong>Puteaux</strong> couvre une bonne partie de La Défense, la tour Ariane et la tour Aurore en tête, plus les immeubles du quartier Bellini et les bureaux des bords de Seine. Côté prix : petit-déjeuner dès <strong>8 € HT par personne</strong>, plateau repas dès <strong>28,90 € HT</strong>, cocktail dès <strong>29,90 € HT</strong>, livrés du lundi au vendredi à partir de <strong>6h30</strong>. C'est un secteur où la livraison se joue autant sur la logistique que sur le contenu du plateau : mauvais quai, badge manquant, et le petit-déjeuner arrive après la réunion.</p>

      <h2>Petit-déjeuner d'entreprise à Puteaux et à La Défense</h2>
      <p>Les commandes y sont souvent volumineuses : 30, 50, parfois 80 personnes pour un lancement ou un comité élargi. Nous livrons des plateaux de viennoiseries pur beurre, des corbeilles de fruits frais découpés, les jus Alain Milliat et le café, en quantité, sans que la composition se dégrade quand le nombre monte. En formule Classique, à 8 € HT par personne, une équipe de 50 revient à 400 € HT, soit 429 € HT avec la livraison de 29 € HT. Les formules sont détaillées sur la page <a href="/petit-dejeuner-entreprise/puteaux">petit-déjeuner d'entreprise à Puteaux</a>, et la carte complète sur <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a>.</p>

      <h2>Livrer dans une tour : ce que nous gérons pour vous</h2>
      <p>La livraison en tour n'a rien à voir avec un immeuble de bureaux classique. Il faut le bon accès livraison, souvent en sous-sol, un créneau de réception, parfois un badge visiteur déclaré la veille. Nos tournées couvrent la tour Ariane, la tour Aurore, les Dunes, le quartier Bellini et les bureaux des bords de Seine, et nous anticipons ces contraintes dès la commande.</p>
      <p>Ce que nous vous demandons pour que la livraison passe sans accroc :</p>
      <ul>
        <li>Le nom exact de la tour et l'étage</li>
        <li>Le nom et le numéro du contact sur place</li>
        <li>L'heure de réception souhaitée, pas l'heure de la réunion</li>
        <li>La procédure d'accès si votre site en impose une</li>
      </ul>

      <h2>Plateaux repas pour vos réunions et journées de formation</h2>
      <p>Sur La Défense, le déjeuner de réunion en plateau individuel est le format dominant : chacun reçoit son plateau complet, personne ne se lève, la réunion continue. Les plateaux de la collection Essentiel démarrent à <strong>28,90 € HT par personne</strong> en végétarien, 29,90 € HT au poulet et 30,90 € HT au poisson, avec entrée, plat, dessert et pain. Pour 20 personnes en végétarien, cela fait 578 € HT, soit 607 € HT avec la livraison. Les menus sont détaillés sur la page <a href="/creations/plateaux-repas">plateaux repas</a>.</p>

      <h2>Quel format pour quelle réunion à Puteaux</h2>
      <ul>
        <li>Un comité de 10 personnes à 9h : un petit-déjeuner Classique ou Complet, posé avant 8h30.</li>
        <li>Une journée de formation de 30 personnes : pause du matin, plateaux repas à midi, pause de l'après-midi, le tout dans une seule commande.</li>
        <li>Un lancement ou une convention de 80 personnes : petit-déjeuner Complet, ou cocktail déjeunatoire de 12 pièces par personne.</li>
      </ul>

      <h2>Cocktails et afterworks à La Défense</h2>
      <p>Pour un afterwork d'équipe ou un pot de fin de projet, nous livrons en fin de journée des formules de 8, 12 ou 16 pièces par personne, à 29,90, 40,90 et 51,90 € HT, hors boissons, prêtes à poser sur la table. Voir la page <a href="/occasions/afterwork-entreprise">traiteur afterwork d'entreprise</a>.</p>

      <h2>Toute la carte halal et sans porc</h2>
      <p>Par défaut, sans que vous ayez à le demander, et sans alcool. Sur des équipes de grande taille comme celles de La Défense, c'est ce qui évite d'avoir à gérer deux commandes séparées. Options végétariennes, véganes et sans gluten sur demande, à préciser avec les effectifs concernés.</p>

      <h2>Exemple : une convention de 60 personnes à Puteaux</h2>
      <p>Pour une convention d'une demi-journée, trois budgets de départ aux prix de la carte, livraison de 29 € HT par commande en plus :</p>
      <ul>
        <li>Petit-déjeuner Classique : 480 € HT, soit 509 € HT avec la livraison.</li>
        <li>Plateaux repas en végétarien : 1 734 € HT, soit 1 763 € HT avec la livraison.</li>
        <li>Cocktail déjeunatoire La Réception, 12 pièces : 2 454 € HT, soit 2 483 € HT avec la livraison, hors boissons.</li>
      </ul>
      <p>À cette taille, nous recommandons un préavis de 48 h : le devis fixe les quantités, le créneau de livraison et l'accès à la tour.</p>

      <h2>Commander à Puteaux</h2>
      <p>Commande jusqu'à la veille <strong>14h</strong>, livraison dès 6h30. Pour 50 personnes ou plus, un préavis de 48 h est recommandé. Minimum de commande 50 € HT, livraison 29 € HT, pas de minimum de participants. Facturation entreprise avec TVA, bon de commande accepté, interlocuteur dédié pour les comptes récurrents. <a href="/devis">Demandez votre devis</a>, réponse sous 24h.</p>
      <p>Pour aller plus loin sur la logistique spécifique aux tours de La Défense, consultez notre <a href="/journal/traiteur-puteaux-la-defense-guide-complet">guide complet traiteur Puteaux & La Défense</a>.</p>
    `,
  },
  {
    slug: 'issy-les-moulineaux',
    name: 'Issy-les-Moulineaux',
    region: 'Hauts-de-Seine (92)',
    subtitle: 'Traiteur dans la Silicon Valley française',
    heroDescription: 'Microsoft, Canal+, Bouygues Telecom, Issy-les-Moulineaux concentre les géants du numérique. L\'Écrin Traiteur livre dans tout le Val-de-Seine.',
    zones: ['Val de Seine', 'Fort d\'Issy', 'Cœur d\'Issy', 'Rue Camille Desmoulins', 'Bords de Seine'],
    quartiers: [
      {
        slug: 'val-de-seine',
        name: 'Val-de-Seine',
        heroDescription: 'Le Val-de-Seine à Issy-les-Moulineaux, Microsoft, Canal+, SFR, Bouygues Telecom, L\'Écrin Traiteur livre dans les campus tech et les sièges sociaux de la Silicon Valley française.',
        linkedZones: ['Val de Seine', 'Rue Camille Desmoulins', 'Bords de Seine'],
        seoTitle: 'Traiteur Val-de-Seine Issy-les-Moulineaux',
        seoDescription: 'L\'Écrin Traiteur livre vos petits-déjeuners dans le Val-de-Seine à Issy-les-Moulineaux : Microsoft, Canal+, Bouygues Telecom. Livraison dès 6h30, produits artisanaux.',
        seoArticle: `
          <p>Le <strong>Val-de-Seine</strong> est le cœur économique d'Issy-les-Moulineaux. Le long des bords de Seine, les campus de Microsoft, Canal+, Bouygues Telecom et SFR ont transformé ce secteur en pôle tech de premier plan. L'Écrin Traiteur y livre chaque matin avec une logistique adaptée aux grandes organisations.</p>
          <h2>Traiteur campus tech Val-de-Seine, produits engagés pour entreprises engagées</h2>
          <p>Les entreprises tech du Val-de-Seine sont souvent pionnières en matière de RSE et de bien-être au travail. Nos produits répondent à ces engagements : madeleines Mado Paris réputées comme les meilleures de la capitale, produits sans huile de palme, traçabilité complète des artisans. Commander chez L'Écrin Traiteur, c'est aussi renforcer la cohérence de vos valeurs.</p>
          <h2>Livraison traiteur dans les campus Issy, gestion des accès et ponctualité</h2>
          <p>Les grands campus du Val-de-Seine ont des procédures d'accès spécifiques. Nous travaillons avec vos équipes facilities pour intégrer nos livraisons dans vos flux. Enregistrement visiteur, badge, accès dédié livreurs, nous gérons chaque étape avec professionnalisme.</p>
          <h2>Commander votre traiteur Val-de-Seine Issy</h2>
          <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30. Pour les comptes récurrents sur campus, des accords-cadres peuvent être mis en place. Contactez-nous pour en discuter.</p>
        `,
      },
    ],
    businessContext: 'Issy-les-Moulineaux est surnommée la "Silicon Valley française" et accueille les sièges français de Microsoft, Canal+, Bouygues Telecom, SFR et de nombreuses entreprises tech.',
    seoTitle: 'Traiteur entreprise Issy-les-Moulineaux',
    seoArticle: `
      <p><strong>Issy-les-Moulineaux</strong>, surnommée la Silicon Valley française, concentre certains des plus grands noms du numérique et des télécommunications. L'Écrin Traiteur livre dans les campus, les sièges sociaux et les bureaux du Val-de-Seine avec la réactivité et la qualité qu'attendent ces entreprises innovantes.</p>
      <h2>Traiteur tech et digital à Issy, des produits qui reflètent vos valeurs</h2>
      <p>Les entreprises tech d'Issy-les-Moulineaux sont souvent engagées dans des démarches RSE et de bien-être au travail. Nos madeleines Mado Paris, nos brochettes de fruits vegan, nos produits sans huile de palme s'inscrivent naturellement dans ces valeurs. Un traiteur qui respecte vos engagements.</p>
      <h2>Livraison dans les campus et open spaces d'Issy</h2>
      <p>Nous livrons dans les grands campus d'entreprise comme dans les immeubles plus classiques. Que votre accueil soit au rez-de-chaussée ou que la livraison se fasse à l'étage dans une salle de réunion, nous nous adaptons.</p>
      <h2>Commandez votre traiteur à Issy-les-Moulineaux</h2>
      <p>Commande en ligne avant <strong>14h la veille</strong>. Livraison dès 6h30. Facturation entreprise disponible. Pour les commandes régulières, un tarif préférentiel est envisageable, contactez notre équipe.</p>
    `,
  },
  {
    slug: 'versailles',
    name: 'Versailles',
    region: 'Yvelines (78)',
    subtitle: 'Traiteur dans la capitale des Yvelines',
    heroDescription: 'Versailles, ville royale et pôle tertiaire majeur des Yvelines, L\'Écrin Traiteur livre dans le quartier Saint-Louis, le Chesnay et les zones d\'affaires.',
    zones: ['Quartier Saint-Louis', 'Quartier Notre-Dame', 'Montreuil', 'Le Chesnay', 'Parly 2', 'ZAC de Satory'],
    businessContext: 'Versailles est un pôle économique important des Yvelines avec de nombreux cabinets, services publics, entreprises de services et le pôle scientifique et technologique de Saclay à proximité.',
    seoTitle: 'Traiteur d\'entreprise Versailles 78',
    metaTitle: "Traiteur entreprise Versailles : livré dès 6h30, devis 24h",
    metaDescription: "Petits-déjeuners, plateaux repas, buffets et cocktails livrés à Versailles et dans les Yvelines dès 6h30. Commande avant 14h la veille, devis sous 24h.",
    faq: [
      { q: 'Livrez-vous à Versailles avant 7h ?', a: "Oui, la livraison démarre à 6h30 du lundi au vendredi, y compris à Versailles, au Chesnay et à Viroflay. Le trajet depuis notre atelier de Boulogne-Billancourt est plus long que pour le 92 : commandez la veille avant 14h et indiquez l'adresse exacte, l'étage et le contact sur place pour que nous calions la tournée sur votre heure de réception." },
      { q: 'Combien coûte la livraison à Versailles ?', a: "Le forfait de 29 € HT s'applique à Paris et aux communes proches. Les Yvelines sont chiffrées au devis selon la distance réelle depuis notre atelier de Boulogne-Billancourt, sans ligne cachée. Le minimum de commande est de 50 € HT, sans minimum de participants. Le devis arrive sous 24 h avec la livraison indiquée." },
      { q: 'Quel budget prévoir pour un buffet ou un cocktail à Versailles ?', a: "Comptez 29,90 € HT par personne pour 8 pièces, 40,90 € HT pour 12 pièces et 51,90 € HT pour 16 pièces, hors boissons. Pour 30 personnes, cela donne 897, 1 227 ou 1 557 € HT avant livraison. Un buffet de séminaire peut aussi se composer sur mesure, sur devis sous 24 h." },
      { q: 'Votre carte est-elle halal à Versailles ?', a: "Oui : tout est halal, sans porc et sans alcool par défaut, sans supplément, à Versailles comme ailleurs. Les options végétarienne, vegan et sans gluten se précisent à la commande avec le nombre de convives concernés. Nous ne revendiquons aucune certification halal, et l'atelier manipule de la farine, donc des traces de gluten restent possibles." },
    ],
    seoArticle: `
      <p><strong>Versailles</strong> n'est pas qu'une ville de tourisme. C'est un pôle économique actif des Yvelines : cabinets, services publics, sociétés de services, établissements d'enseignement, plus la zone d'activités de Satory et la proximité du plateau de Saclay. L'Écrin Traiteur y livre des petits-déjeuners dès <strong>8 € HT par personne</strong>, des plateaux repas dès <strong>28,90 € HT</strong> et des buffets cocktail dès <strong>29,90 € HT</strong>, du lundi au vendredi, dès <strong>6h30</strong>. Notre atelier est à Boulogne-Billancourt : pour Versailles, le départ se fait plus tôt afin de tenir ce créneau.</p>

      <h2>Petit-déjeuner d'entreprise à Versailles</h2>
      <p>C'est la commande la plus fréquente sur le secteur, souvent pour des réunions du matin ou des journées de formation. La formule Classique, à 8 € HT par personne, comprend deux viennoiseries pur beurre de nos boulangers partenaires, un jus Alain Milliat, un café et une corbeille de fruits frais découpés. Pour 20 personnes, cela fait 160 € HT hors livraison. Un petit-déjeuner plus complet se situe entre 12 et 16 € HT par personne. Les compositions sont sur la page <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a>, et le calcul par effectif dans le <a href="/journal/budget-petit-dejeuner-equipe-personnes">guide budget par nombre de personnes</a>.</p>

      <h2>Livraison à Versailles : Notre-Dame, Saint-Louis, Montreuil, Satory</h2>
      <p>Nous couvrons l'ensemble de la commune, des quartiers Notre-Dame et Saint-Louis au quartier Montreuil et à la zone de Satory, ainsi que Le Chesnay-Rocquencourt, Parly 2, Viroflay et Jouy-en-Josas. Livraison à partir de <strong>6h30</strong>, du lundi au vendredi. Donnez-nous l'adresse exacte, l'étage, le nom du contact sur place et l'heure à laquelle le plateau doit être posé, pas l'heure de la réunion. Sur Versailles, commandez la veille avant 14h sans exception : le trajet est plus long que sur le 92 et nous calons les tournées en conséquence.</p>

      <h2>Plateaux repas et déjeuners de travail</h2>
      <p>Pour les déjeuners de réunion, les plateaux repas individuels de la collection Essentiel démarrent à <strong>28,90 € HT par personne</strong> en végétarien, 29,90 € HT au poulet et 30,90 € HT au poisson : entrée, plat, dessert et pain, filmés et étiquetés. Pour 10 personnes, comptez 289 € HT au plus bas, hors livraison. Les menus et leur composition sont sur la page <a href="/creations/plateaux-repas">plateaux repas</a>.</p>

      <h2>Buffets et cocktails événementiels à Versailles</h2>
      <p>Pour un séminaire à Versailles, nous gérons les deux services dans une seule commande : viennoiseries et fruits pour la pause du matin, chouquettes, cookies et madeleines pour celle de l'après-midi. Pour une réception, un pot de départ ou un buffet d'entreprise, nos <a href="/creations/cocktails">buffets et cocktails</a> se déclinent en trois formules : L'Invitation (8 pièces par personne, 29,90 € HT), La Réception (12 pièces, 40,90 € HT) et La Célébration (16 pièces, 51,90 € HT), hors boissons. Pour 30 personnes en La Réception, le budget est de 1 227 € HT avant livraison.</p>

      <h2>Traiteur dans tout le département des Yvelines (78)</h2>
      <p>Versailles est notre point d'ancrage dans les Yvelines, mais nous livrons plus largement le département : Le Chesnay-Rocquencourt, Viroflay, Jouy-en-Josas, ainsi que le secteur de Saint-Quentin-en-Yvelines (Guyancourt, Élancourt, Montigny-le-Bretonneux, Maurepas). Même exigence, mêmes artisans, mêmes délais qu'à Versailles. Pour une adresse plus éloignée dans le département, la faisabilité et le tarif de livraison sont confirmés sur le devis.</p>

      <h2>Comment choisir un traiteur d'entreprise à Versailles</h2>
      <p>Quatre points départagent les traiteurs qui livrent dans les Yvelines. Des artisans identifiés plutôt que des produits anonymes : viennoiseries de boulangers partenaires, jus Alain Milliat, plateaux montés le matin à notre atelier. Une livraison faite par notre propre équipe, jamais en sous-traitance, donc un créneau tenu. Un devis chiffré sous 24 h, livraison incluse noir sur blanc. Et une carte qui convient à toute l'équipe sans commande à part, puisque tout est halal et sans porc par défaut.</p>

      <h2>Un devis clair, sans surprise sur le trajet</h2>
      <p>Les prix par personne indiqués sur cette page sont ceux de la carte, hors taxes. Le devis sous 24 h reprend l'effectif, les produits et la livraison, sans ligne cachée. Minimum de commande 50 € HT, pas de minimum de participants. Les Yvelines sont hors du forfait de livraison de 29 € HT appliqué à Paris et aux communes proches : la livraison à Versailles est chiffrée au devis, en fonction de la distance réelle depuis notre atelier.</p>

      <h2>Toute la carte halal et sans porc</h2>
      <p>C'est notre standard sur l'ensemble de la carte, sans alcool non plus et sans supplément. Options végétariennes, véganes et sans gluten à préciser à la commande avec les effectifs concernés, sans ligne supplémentaire sur le devis. L'atelier manipule de la farine : des traces de gluten restent possibles. L'offre complète est détaillée sur la page <a href="/traiteur-halal">traiteur halal d'entreprise</a>.</p>

      <h2>Commander à Versailles</h2>
      <p>Commande jusqu'à la veille <strong>14h</strong>, livraison dès 6h30, du lundi au vendredi. À partir de 50 personnes ou pour plusieurs sites, un préavis de 48 h est recommandé. Le devis arrive sous 24 h, avec facturation entreprise et TVA, bon de commande accepté. <a href="/devis">Demandez votre devis</a> en indiquant l'effectif, la date, l'adresse à Versailles et les régimes à prévoir, ou appelez le 01 74 54 23 10.</p>
    `,
  },
  {
    slug: 'saint-denis',
    name: 'Saint-Denis',
    region: 'Seine-Saint-Denis (93)',
    subtitle: 'Traiteur dans la ville olympique du 93',
    heroDescription: 'Saint-Denis, en pleine transformation économique, L\'Écrin Traiteur livre dans le Stade de France, Pleyel et les nouveaux quartiers d\'affaires.',
    zones: ['Stade de France', 'Pleyel', 'Centre-ville', 'ZAC Landy France', 'Porte de Paris'],
    quartiers: [
      {
        slug: 'pleyel',
        name: 'Pleyel',
        heroDescription: 'Pleyel, le quartier d\'affaires en plein essor de Saint-Denis, autour du Grand Paris Express, L\'Écrin Traiteur livre dans les nouveaux immeubles de bureaux et espaces de coworking du secteur.',
        linkedZones: ['Pleyel', 'Stade de France', 'ZAC Landy France'],
        seoTitle: 'Traiteur d\'entreprise Pleyel Saint-Denis',
        seoDescription: 'L\'Écrin Traiteur dans le quartier d\'affaires Pleyel à Saint-Denis (93) : petits-déjeuners, plateaux repas, cocktails et buffets. Village Olympique, ZAC Landy France. Livraison dès 6h30.',
        seoArticle: `
          <p>Le quartier <strong>Pleyel</strong> à Saint-Denis est l'une des transformations urbaines les plus spectaculaires d'Île-de-France. Autour de la salle de concert mythique, de nouveaux immeubles de bureaux, des espaces de coworking et des sièges sociaux ont vu le jour, attirant des entreprises qui cherchent des alternatives à Paris intra-muros. L'Écrin Traiteur y livre chaque matin.</p>
          <h2>Traiteur Pleyel, accompagner l'essor d'un nouveau quartier d'affaires</h2>
          <p>Pleyel bénéficie d'une connexion directe avec le métro et le Grand Paris Express (ligne 15 et 16). Ce désenclavement attire des entreprises de plus en plus nombreuses. L'Écrin Traiteur est là pour les accompagner avec des petits-déjeuners artisanaux qui reflètent leur niveau d'exigence.</p>
          <h2>Village Olympique et nouveaux sièges, notre zone de livraison</h2>
          <p>Notre zone de livraison autour de Pleyel couvre l'ensemble du périmètre : Village Olympique reconverti, ZAC Landy France, Stade de France et les rues adjacentes. Que votre entreprise soit dans un immeuble neuf ou rénové, nous livrons.</p>
          <h2>Commander votre traiteur à Pleyel</h2>
          <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30. Facturation entreprise disponible. Pour les grands événements liés au Stade de France, contactez-nous pour un devis sur mesure.</p>
        `,
      },
    ],
    businessContext: 'Saint-Denis connaît une forte croissance économique portée par les Jeux Olympiques 2024, le développement du Village Olympique et l\'arrivée de sièges sociaux autour de Pleyel. Alstom, SNCF et de nombreuses entreprises y sont présentes.',
    seoTitle: 'Traiteur d\'entreprise Saint-Denis 93',
    metaTitle: "Traiteur entreprise Saint-Denis : livré dès 6h30, devis 24h",
    metaDescription: "Petits-déjeuners, plateaux repas et buffets livrés à Saint-Denis, Pleyel et au Stade de France dès 6h30. Commande avant 14h la veille, devis sous 24h.",
    faq: [
      { q: 'Livrez-vous au Stade de France et à Pleyel ?', a: "Oui, au Stade de France, à Pleyel, dans le centre-ville, à la ZAC Landy France et à la Porte de Paris, dès 6h30 du lundi au vendredi. Donnez à la commande l'adresse exacte, l'étage, le contact sur place et la procédure d'accès. Pour un événement lié au Stade de France, demandez un devis sur mesure, remis sous 24 h." },
      { q: 'Combien coûte la livraison à Saint-Denis ?', a: "Le forfait de 29 € HT s'applique à Paris et aux communes proches. Pour Saint-Denis et le reste de la Seine-Saint-Denis, la livraison est indiquée sur le devis selon l'adresse, sans ligne cachée. Le minimum de commande est de 50 € HT, sans minimum de participants. Le devis est remis sous 24 h." },
      { q: 'Livrez-vous ailleurs en Seine-Saint-Denis (93) ?', a: "Oui : Aubervilliers, Saint-Ouen-sur-Seine, Épinay-sur-Seine et les communes limitrophes de Saint-Denis. Nous livrons du lundi au vendredi, dès 6h30, avec les mêmes artisans et les mêmes délais : commande jusqu'à la veille 14h. Précisez l'adresse au devis, la livraison est indiquée selon la commune." },
      { q: 'Quel budget prévoir pour un buffet ou un cocktail à Saint-Denis ?', a: "Comptez 29,90 € HT par personne en L'Invitation (8 pièces), 40,90 € HT en La Réception (12 pièces) et 51,90 € HT en La Célébration (16 pièces), hors boissons et hors livraison. Pour 30 personnes, cela donne 897, 1 227 ou 1 557 € HT. Les animations culinaires se chiffrent sur devis." },
    ],
    seoArticle: `
      <p><strong>Saint-Denis</strong> est en pleine effervescence économique. Entre le développement du quartier Pleyel, les héritages des JO 2024 et l'arrivée de nouveaux sièges sociaux, la ville attire des entreprises qui cherchent un traiteur fiable. L'Écrin Traiteur y livre des petits-déjeuners dès <strong>8 € HT par personne</strong>, des plateaux repas dès <strong>28,90 € HT</strong> et des buffets cocktail dès <strong>29,90 € HT</strong>, du lundi au vendredi, dès <strong>6h30</strong>, au Stade de France, à Pleyel, dans le centre-ville et à la ZAC Landy France.</p>

      <h2>Petit-déjeuner d'entreprise à Saint-Denis</h2>
      <p>Les entreprises qui s'installent dans le secteur ont besoin d'un prestataire qui tient l'horaire et la qualité d'une livraison à l'autre. Nos produits sont ceux de la carte, artisanaux et identifiés : viennoiseries pur beurre, fruits frais, pâtisseries. En formule Classique, à 8 € HT par personne (deux viennoiseries, un jus Alain Milliat, un café et une corbeille de fruits), une équipe de 15 personnes revient à 120 € HT hors livraison. Le complet se situe entre 12 et 16 € HT par personne. La carte est sur la page <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a>.</p>

      <h2>Plateaux repas et déjeuners de réunion</h2>
      <p>Les plateaux repas individuels de la collection Essentiel démarrent à <strong>28,90 € HT par personne</strong> en végétarien, 29,90 € HT au poulet et 30,90 € HT au poisson : entrée, plat, dessert et pain, filmés et étiquetés, pour vos déjeuners de travail. Pour 12 personnes au poulet, comptez 358,80 € HT hors livraison. Voir la page <a href="/creations/plateaux-repas">plateaux repas</a>.</p>

      <h2>Buffets, cocktails et événements d'entreprise</h2>
      <p>Pour un pot de départ, un lancement ou un événement d'équipe, nos <a href="/creations/cocktails">buffets et cocktails</a> se déclinent en trois formules, hors boissons : L'Invitation à 29,90 € HT par personne (8 pièces), La Réception à 40,90 € HT (12 pièces) et La Célébration à 51,90 € HT (16 pièces). Pour 30 personnes en L'Invitation, le total est de 897 € HT hors livraison. Pour un événement plus large, nous proposons aussi des <a href="/creations/animations-culinaires">animations culinaires</a>, préparées en direct devant vos invités, sur devis.</p>

      <h2>Quelles quantités commander</h2>
      <p>Pour un petit-déjeuner, comptez deux viennoiseries par personne, trois jusqu'à 10 personnes, et une boisson chaude. Pour un déjeuner de travail, un plateau repas par personne, avec le choix entre végétarien, poulet ou poisson. Pour un cocktail, 6 à 8 pièces par personne en apéritif, 12 à 14 en déjeunatoire et 16 à 18 en dînatoire, plus 10 % de marge : le calcul complet est dans <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">combien de pièces de cocktail par personne</a>. Pour un événement lié au Stade de France, nous partons de votre effectif réel et de la durée pour chiffrer le devis.</p>

      <h2>Livraison autour du Stade de France et de Pleyel</h2>
      <p>Nous livrons cinq secteurs : le Stade de France, Pleyel, le centre-ville, la ZAC Landy France et la Porte de Paris. Les accès et les horaires dépendent de l'immeuble, et aux abords du Stade de France ils peuvent être restreints certains jours d'événement : donnez à la commande l'adresse exacte, l'étage, le contact sur place et la procédure d'accès. Le quartier a sa propre page : <a href="/traiteur/saint-denis/pleyel">traiteur d'entreprise à Pleyel</a>.</p>

      <h2>Traiteur d'entreprise dans tout le 93 (Seine-Saint-Denis)</h2>
      <p>Saint-Denis est notre point d'ancrage en Seine-Saint-Denis, mais nous livrons plus largement le département : Aubervilliers, Saint-Ouen-sur-Seine, Épinay-sur-Seine et les communes limitrophes. Même exigence, mêmes artisans, mêmes délais qu'à Saint-Denis. Le forfait de livraison de 29 € HT s'applique à Paris et aux communes proches ; pour Saint-Denis et le reste du 93, la livraison est indiquée sur le devis selon l'adresse.</p>

      <h2>Toute la carte halal et sans porc</h2>
      <p>C'est notre standard, pas une option en supplément, et sans alcool. Options végétariennes, véganes et sans gluten à préciser à la commande avec les effectifs concernés. L'atelier manipule de la farine : des traces de gluten restent possibles.</p>

      <h2>Commander votre traiteur à Saint-Denis</h2>
      <p>Commande jusqu'à la veille <strong>14h</strong>, livraison dès 6h30, du lundi au vendredi. Minimum de commande 50 € HT, pas de minimum de participants. À partir de 50 personnes ou pour un événement lié au Stade de France, un préavis de 48 h est recommandé et le devis se fait sur mesure : il détaille les quantités, les produits et la livraison. Facturation entreprise avec TVA, bon de commande accepté. <a href="/devis">Demandez votre devis</a>, réponse sous 24h.</p>
    `,
  },
  {
    slug: 'nanterre',
    name: 'Nanterre',
    region: 'Hauts-de-Seine (92)',
    subtitle: 'Traiteur à la porte de La Défense',
    heroDescription: 'Nanterre, entre La Défense et l\'université, L\'Écrin Traiteur livre dans les entreprises du quartier Défense-Seine-Arche et au-delà.',
    zones: ['Défense-Seine-Arche', 'Seine-Arche', 'Préfecture', 'Université Paris Nanterre', 'Rueil-Nanterre'],
    businessContext: 'Nanterre accueille les sièges de Natixis, Thales Digital et de nombreuses entreprises en périphérie de La Défense dans le secteur de Seine-Arche.',
    seoTitle: 'Traiteur d\'entreprise Nanterre 92',
    metaTitle: "Traiteur entreprise Nanterre : livré dès 6h30, Seine-Arche",
    metaDescription: "Petit-déjeuner dès 8 € HT/pers., plateaux repas et cocktails livrés à Défense-Seine-Arche, Préfecture et à l'université dès 6h30. Devis sous 24h.",
    faq: [
      { q: 'Livrez-vous à l\'université et à Seine-Arche ?', a: "Oui : Défense-Seine-Arche, secteur Préfecture, Petit-Nanterre et campus de l'université, dès 6h30 du lundi au vendredi. Sur un site à accès contrôlé (barrière, poste de sécurité, badge), donnez la procédure d'accès et le nom du contact à la commande, pour éviter qu'un livreur attende à l'entrée pendant que le café refroidit." },
      { q: 'Peut-on commander les pauses du matin et de l\'après-midi pour un séminaire ?', a: "Oui, dans la même commande, avec des produits différents à chaque service : viennoiseries et fruits le matin, chouquettes, cookies et madeleines l'après-midi. Pour 40 personnes en formule Classique le matin, 320 € HT, soit 349 € HT avec la livraison. Au-delà de 20 personnes, demandez un devis, remis sous 24 h." },
      { q: 'Acceptez-vous le bon de commande et les factures à 30 jours ?', a: "Oui. Nous établissons une facturation entreprise avec TVA, le bon de commande est accepté, et les factures sont payables à 30 jours fin de mois, par virement ou carte bancaire. Le devis est remis sous 24 h, avec l'effectif, les produits et la livraison indiquée. Le minimum de commande est de 50 € HT." },
      { q: 'Quel budget pour un déjeuner de réunion à Nanterre ?', a: "Les plateaux repas démarrent à 28,90 € HT par personne en végétarien, 29,90 € HT au poulet et 30,90 € HT au poisson, avec entrée, plat, dessert et pain. Pour 20 personnes en végétarien, 578 € HT, soit 607 € HT avec la livraison de 29 € HT. Commande jusqu'à la veille 14h." },
    ],
    seoArticle: `
      <p><strong>Nanterre</strong> est la ville-porte de La Défense, et le quartier Seine-Arche en a fait un pôle tertiaire à part entière. Nous y livrons des sièges sociaux, des organismes de formation, des collectivités et l'université, ce qui donne des commandes très différentes d'une adresse à l'autre : un petit-déjeuner de comité de 10 personnes le matin, une pause de séminaire pour 120 l'après-midi. À Nanterre, le petit-déjeuner démarre à <strong>8 € HT par personne</strong>, le plateau repas à <strong>28,90 € HT</strong> et le cocktail à <strong>29,90 € HT</strong>, livrés dès <strong>6h30</strong> du lundi au vendredi.</p>

      <h2>Petit-déjeuner d'entreprise à Nanterre</h2>
      <p>Le format le plus demandé sur la commune. Viennoiseries pur beurre, corbeille de fruits frais découpés, jus Alain Milliat, café, et les madeleines Mado Paris pour les réunions où l'on reçoit. En formule Classique, à 8 € HT par personne, un comité de 10 personnes revient à 80 € HT, soit 109 € HT avec la livraison de 29 € HT. Le complet monte de 12 à 16 € HT. Les formules sont sur la page <a href="/petit-dejeuner-entreprise/nanterre">petit-déjeuner d'entreprise à Nanterre</a> et les compositions détaillées sur la page <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a>.</p>

      <h2>Livraison à Nanterre : Seine-Arche, Préfecture, université</h2>
      <p>Nous couvrons Défense-Seine-Arche, le secteur Préfecture, le Petit-Nanterre et le campus. Livraison à partir de <strong>6h30</strong>. Sur les sites à accès contrôlé, indiquez-nous la procédure et le nom du contact à la commande : c'est ce qui évite qu'un livreur attende vingt minutes à une barrière pendant que le café refroidit.</p>

      <h2>Pauses de séminaire et journées de formation</h2>
      <p>Nanterre concentre beaucoup de journées de formation et de séminaires, avec deux services à gérer, la pause du matin et celle de l'après-midi. Nous livrons les deux dans la même commande, avec des produits différents pour chaque service : viennoiseries et fruits le matin, chouquettes, cookies et madeleines l'après-midi. Pour 40 personnes, la pause du matin en formule Classique revient à 320 € HT, soit 349 € HT avec la livraison. Au-delà de 20 personnes, un devis est remis sous 24 h. Pour la pause de l'après-midi, la pause gourmande démarre à 6 € HT par personne, soit 120 € HT pour 20 personnes.</p>

      <h2>Plateaux repas pour les déjeuners de réunion</h2>
      <p>Plateaux individuels complets, entrée, plat, dessert et pain, filmés et étiquetés, à partir de <strong>28,90 € HT par personne</strong> en végétarien, 29,90 € HT au poulet et 30,90 € HT au poisson. Pour 20 personnes en végétarien, le total est de 607 € HT livraison comprise. Les collections et les options végétariennes sont sur la page <a href="/creations/plateaux-repas">plateaux repas</a>.</p>

      <h2>Buffets et cocktails d'entreprise à Nanterre</h2>
      <p>Pour un pot de départ, une inauguration de locaux ou un afterwork, nos <a href="/creations/cocktails">buffets et cocktails</a> se déclinent en L'Invitation (8 pièces par personne, 29,90 € HT), La Réception (12 pièces, 40,90 € HT) et La Célébration (16 pièces, 51,90 € HT), hors boissons. Livrés et dressés directement dans vos locaux, Défense-Seine-Arche ou Préfecture.</p>

      <h2>Collectivités, organismes de formation, université</h2>
      <p>Les établissements publics et les organismes de formation commandent souvent avec un bon de commande et un circuit de validation. Le bon de commande est accepté, la facturation entreprise s'établit avec TVA, et les factures sont payables à 30 jours fin de mois, par virement ou carte bancaire. Le devis, remis sous 24 h, reprend l'effectif, les produits et la livraison, ce qui permet de le faire valider en interne avant la commande.</p>

      <h2>Traiteur dans tout le secteur des Hauts-de-Seine (92)</h2>
      <p>Nanterre est notre point d'ancrage à la porte de La Défense, mais nous livrons tout aussi bien <a href="/traiteur/courbevoie">Courbevoie</a>, <a href="/traiteur/puteaux">Puteaux</a> et <a href="/traiteur/rueil-malmaison">Rueil-Malmaison</a> juste à côté. Même exigence, mêmes artisans, mêmes délais.</p>

      <h2>Toute la carte halal et sans porc</h2>
      <p>C'est le standard, pas une option. Sur des groupes larges comme ceux des séminaires, cela évite d'avoir à gérer une commande à part. Options végétariennes, véganes et sans gluten à préciser avec les effectifs concernés.</p>

      <h2>Commander à Nanterre</h2>
      <p>Commande jusqu'à la veille <strong>14h</strong>, livraison dès 6h30, du lundi au vendredi. Minimum de commande 50 € HT, livraison 29 € HT, pas de minimum de participants. À partir de 50 personnes, un préavis de 48 h est recommandé. Facturation entreprise avec TVA. Pour un séminaire de plus de 20 personnes, <a href="/devis">demandez un devis</a>, réponse sous 24h.</p>
    `,
  },
  {
    slug: 'rueil-malmaison',
    name: 'Rueil-Malmaison',
    region: 'Hauts-de-Seine (92)',
    subtitle: 'Traiteur dans la ville des sièges sociaux premium',
    heroDescription: 'Rueil-Malmaison, ville de Renault, Sanofi et L\'Oréal R&D, L\'Écrin Traiteur livre dans les campus et les grands sièges du 92.',
    zones: ['Campus Sanofi', 'Renault', 'La Boursidière', 'Centre-ville', 'Pré-Saint-Gervais'],
    businessContext: 'Rueil-Malmaison est une ville stratégique du 92 avec les sièges de Renault, Sanofi et les laboratoires R&D de L\'Oréal. La ville concentre de grandes organisations avec des besoins traiteurs importants.',
    seoTitle: 'Traiteur d\'entreprise Rueil-Malmaison',
    metaTitle: "Traiteur entreprise Rueil-Malmaison : livré dès 6h30",
    metaDescription: "Petit-déjeuner dès 8 € HT/pers., plateaux repas et cocktails livrés à Rueil-Malmaison, campus et La Boursidière, dès 6h30. Commande avant 14h la veille.",
    seoArticle: `
      <p><strong>Rueil-Malmaison</strong> est l'une des villes les plus stratégiques du 92 en termes d'implantations d'entreprises. Les campus de Sanofi, les ateliers de Renault et les laboratoires R&D qui jalonnent la commune ont des besoins traiteurs réguliers et exigeants. L'Écrin Traiteur y répond chaque matin.</p>
      <h2>Traiteur campus à Rueil, des livraisons adaptées aux grandes organisations</h2>
      <p>Les campus d'entreprise de Rueil-Malmaison ont des procédures d'accès spécifiques. Notre équipe connaît ces contraintes et les anticipe. Nous livrons dans les restaurants d'entreprise, les salles de réunion et les espaces d'accueil avec efficacité et discrétion.</p>
      <h2>Séminaires et événements d'entreprise à Rueil-Malmaison</h2>
      <p>Pour vos séminaires, journées de formation ou événements ponctuels, L'Écrin Traiteur propose des devis sur mesure adaptés à vos volumes. Des plateaux de 10 personnes aux prestations de 100 convives, nous nous adaptons.</p>
      <h2>Commander votre traiteur à Rueil-Malmaison</h2>
      <p>Commandez avant <strong>14h la veille</strong>, livraison dès 6h30 à Rueil-Malmaison et communes limitrophes. Facturation entreprise et conventions de partenariat disponibles pour les comptes réguliers.</p>
    `,
  },
  {
    slug: 'asnieres-sur-seine',
    name: 'Asnières-sur-Seine',
    region: 'Hauts-de-Seine (92)',
    subtitle: 'Traiteur entre Paris et Clichy',
    heroDescription: 'Asnières-sur-Seine, entre les zones d\'activités et les bords de Seine, L\'Écrin Traiteur livre dans tout le 92 nord.',
    zones: ['Centre-ville', 'ZAC des Grésillons', 'Quartier Flachat', 'Bords de Seine', 'Gennevilliers limite'],
    businessContext: 'Asnières-sur-Seine est une commune dynamique du 92 avec des zones d\'activités actives et une proximité immédiate avec Paris (17e, 18e) et Clichy-la-Garenne.',
    seoTitle: 'Traiteur d\'entreprise Asnières-sur-Seine',
    metaTitle: "Traiteur entreprise Asnières-sur-Seine : livré dès 6h30",
    metaDescription: "Petit-déjeuner dès 8 € HT/pers., plateaux repas et cocktails livrés à Asnières, du centre-ville aux Grésillons et à Flachat, dès 6h30. Devis sous 24h.",
    seoArticle: `
      <p><strong>Asnières-sur-Seine</strong> est à quelques minutes du 17e et du 18e arrondissement, et c'est ce qui explique le profil de nos livraisons sur la commune : beaucoup de PME et d'entreprises de services qui ont quitté Paris pour des surfaces plus grandes, sans vouloir renoncer à un traiteur parisien. Nous livrons du centre-ville à la ZAC des Grésillons et au quartier Flachat.</p>

      <h2>Petit-déjeuner d'entreprise à Asnières-sur-Seine</h2>
      <p>C'est la demande principale sur Asnières, souvent pour des réunions qui démarrent tôt. Nous livrons dès <strong>6h30</strong> : viennoiseries pur beurre livrées le matin même par nos boulangers partenaires, cakes maison, madeleines Mado Paris, plateaux de fruits frais découpés et jus Alain Milliat. Le détail des formules est sur la page <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a>.</p>

      <h2>Livraison à Asnières : centre-ville, Grésillons, bords de Seine</h2>
      <p>Nous couvrons toute la commune, y compris les zones d'activités le long des bords de Seine et la limite Gennevilliers. Sur les sites avec quai de livraison ou accueil filtré, précisez-le à la commande et nous adaptons le créneau. Vous choisissez une heure de réception, pas une plage horaire approximative.</p>

      <h2>Plateaux repas et déjeuners de réunion</h2>
      <p>Pour un déjeuner de travail ou une journée de formation, nous livrons des plateaux repas individuels complets, filmés et étiquetés. Les collections et les options végétariennes sont sur la page <a href="/creations/plateaux-repas">plateaux repas</a>.</p>

      <h2>Cocktails, afterworks et moments d'équipe</h2>
      <p>Pour un pot de départ, une arrivée ou une fin de projet, les formules cocktail vont de 8 à 16 pièces par personne, livrées en fin de journée et prêtes à poser. Voir la page <a href="/occasions/afterwork-entreprise">traiteur afterwork d'entreprise</a>.</p>

      <h2>Toute la carte halal et sans porc</h2>
      <p>Par défaut, sur l'ensemble de la carte. Options végétariennes, véganes et sans gluten à préciser à la commande avec les effectifs concernés, sans supplément caché sur le devis.</p>

      <h2>Commander à Asnières-sur-Seine</h2>
      <p>Commande en ligne avant <strong>14h la veille</strong>, livraison dès 6h30. Minimum de commande 50 € HT, livraison 29 € HT, pas de minimum de participants. Facturation entreprise avec TVA disponible. <a href="/devis">Demandez votre devis</a>, réponse sous 24h.</p>
    `,
  },
  {
    slug: 'gennevilliers',
    name: 'Gennevilliers',
    region: 'Hauts-de-Seine (92)',
    subtitle: 'Traiteur entre le port industriel et les zones tertiaires du 92 nord',
    heroDescription: 'Gennevilliers, entre le premier port fluvial d\'Île-de-France et des zones d\'activités en plein essor, L\'Écrin Traiteur livre petits-déjeuners d\'entreprise, plateaux repas et pauses dans tout le secteur dès 6h30.',
    zones: ['Centre-ville', 'ZAC des Grésillons', 'Quartier Chandon', 'Port de Gennevilliers', 'Bords de Seine'],
    businessContext: 'Gennevilliers accueille le premier port fluvial d\'Île-de-France, une zone industrielle et logistique active, ainsi qu\'un tissu croissant de PME tertiaires attirées par la proximité de La Défense et d\'Asnières.',
    seoTitle: 'Traiteur d\'entreprise Gennevilliers 92',
    metaTitle: "Traiteur entreprise Gennevilliers : petit-déj dès 8 € HT",
    metaDescription: "Petit-déjeuner dès 8 € HT/pers. livré dès 6h30 à Gennevilliers : port, ZAC des Grésillons, Chandon. Plateaux repas et cocktails, devis sous 24h.",
    seoArticle: `
      <p><strong>Gennevilliers</strong> combine le premier port fluvial d'Île-de-France, une zone industrielle et logistique active, et un tissu de PME tertiaires qui s'étoffe avec la proximité d'Asnières et de La Défense. Nos livraisons sur la commune vont du siège de PME en centre-ville au site logistique avec quai de réception et badge obligatoire.</p>

      <h2>Petit-déjeuner d'entreprise à Gennevilliers</h2>
      <p>Que votre équipe soit installée près du port, dans la ZAC des Grésillons, au Chandon ou en centre-ville, nous livrons dès <strong>6h30</strong> : viennoiseries pur beurre, plateaux de fruits frais découpés, madeleines Mado Paris, jus Alain Milliat et café. Détail des formules et tarifs sur notre page <a href="/petit-dejeuner-entreprise/gennevilliers">petit-déjeuner d'entreprise à Gennevilliers</a>, ou toutes nos créations sur <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a>.</p>

      <h2>Livrer sur un site industriel ou logistique</h2>
      <p>Sur Gennevilliers, une partie des adresses ne se livre pas comme un immeuble de bureaux. Il y a des quais, des horaires de réception fixes, parfois un poste de garde à l'entrée du site. Précisez-le à la commande et nous calons le créneau en conséquence.</p>
      <p>Les informations qui nous font gagner du temps :</p>
      <ul>
        <li>Le nom du site et le bâtiment</li>
        <li>Le point de réception : accueil, quai, poste de garde</li>
        <li>Le nom et le numéro du contact sur place</li>
        <li>Les horaires de réception autorisés</li>
      </ul>

      <h2>Plateaux repas et déjeuners de réunion</h2>
      <p>Plateaux individuels complets, entrée, plat, dessert et pain, adaptés aux réunions et aux journées de formation. Voir la page <a href="/creations/plateaux-repas">plateaux repas</a>, options végétariennes disponibles sur toutes les collections.</p>

      <h2>Pots d'équipe et afterworks</h2>
      <p>Formules cocktail de 8 à 16 pièces par personne, livrées en fin de journée et prêtes à poser. Détail sur la page <a href="/occasions/afterwork-entreprise">traiteur afterwork d'entreprise</a>.</p>

      <h2>Toute la carte halal et sans porc</h2>
      <p>Par défaut, sans supplément et sans commande séparée à gérer. Options végétariennes, véganes et sans gluten sur demande, à préciser avec les effectifs concernés.</p>

      <h2>Commander à Gennevilliers</h2>
      <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30 dans tout Gennevilliers et les communes limitrophes. Minimum de commande 50 € HT, livraison 29 € HT, pas de minimum de participants. Facturation entreprise avec TVA. <a href="/devis">Demandez votre devis</a>, réponse sous 24h.</p>
      <p>Pour aller plus loin sur les spécificités des sites industriels et logistiques, consultez notre <a href="/journal/traiteur-gennevilliers-la-defense-ouest-guide-complet">guide complet traiteur Gennevilliers</a>.</p>
    `,
  },
  {
    slug: 'clichy',
    name: 'Clichy',
    region: 'Hauts-de-Seine (92)',
    subtitle: 'Traiteur dans la ville de L\'Oréal et du digital 92',
    heroDescription: 'Clichy, siège mondial de L\'Oréal et hub créatif du 92, L\'Écrin Traiteur livre chaque matin dans les bureaux et les sièges.',
    zones: ['Siège L\'Oréal', 'Rue Martre', 'Bords de Seine', 'Centre-ville', 'Victor Hugo'],
    businessContext: 'Clichy-la-Garenne abrite le siège mondial de L\'Oréal et de nombreuses entreprises du secteur cosmétique, digital et créatif. La ville est directement adjacente au 17e arrondissement de Paris.',
    seoTitle: 'Traiteur d\'entreprise Clichy 92',
    metaDescription: "Traiteur d'entreprise à Clichy (92) : petits-déjeuners, plateaux repas et buffets cocktail livrés dès 6h30 dans vos bureaux. Commande avant 14h la veille, devis sous 24h.",
    seoArticle: `
      <p><strong>Clichy</strong> est une ville de créatifs, de marketeurs et d'innovateurs. Entre le siège mondial de L'Oréal et les agences qui gravitent autour, la ville a développé une culture du travail exigeante et internationale. L'Écrin Traiteur propose des produits à la hauteur de cette ambiance créative.</p>

      <h2>Petit-déjeuner d'entreprise à Clichy</h2>
      <p>Dans un environnement créatif comme celui de Clichy, les détails comptent. Viennoiseries pur beurre, macarons Pierre Morel, madeleines Mado Paris, jus Alain Milliat : proposer une sélection soignée à ses équipes, c'est aussi soigner l'image de marque interne. La carte complète est sur la page <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a>.</p>

      <h2>Plateaux repas pour les déjeuners de réunion à Clichy</h2>
      <p>Plateaux individuels complets, entrée, plat, dessert et pain, filmés et étiquetés, livrés pour vos déjeuners de travail. Voir la page <a href="/creations/plateaux-repas">plateaux repas</a>.</p>

      <h2>Buffets et cocktails d'entreprise à Clichy</h2>
      <p>Pour un pot de départ, un lancement de produit ou un afterwork, nos <a href="/creations/cocktails">buffets et cocktails</a> vont de 8 à 16 pièces par personne selon le format retenu.</p>

      <h2>Livraison traiteur Clichy-la-Garenne dès 6h30</h2>
      <p>Nous livrons dans l'ensemble de Clichy, depuis les bords de Seine jusqu'au boulevard Victor Hugo. Commandez avant <strong>14h la veille</strong> pour recevoir votre commande le matin même dès 6h30.</p>

      <h2>Traiteur dans tout le nord des Hauts-de-Seine (92)</h2>
      <p>Clichy est notre point d'ancrage sur ce secteur du 92, mais nous livrons tout aussi bien <a href="/traiteur/levallois-perret">Levallois-Perret</a> et <a href="/traiteur/neuilly-sur-seine">Neuilly-sur-Seine</a> juste à côté. Même exigence, mêmes artisans, mêmes délais.</p>

      <h2>Toute la carte halal et sans porc</h2>
      <p>C'est notre standard, pas une option en supplément. Options végétariennes, véganes et sans gluten à préciser à la commande avec les effectifs concernés.</p>

      <h2>Commander à Clichy</h2>
      <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30. Facturation entreprise avec TVA. <a href="/devis">Demandez votre devis</a>, réponse sous 24h.</p>
    `,
  },
  {
    slug: 'suresnes',
    name: 'Suresnes',
    region: 'Hauts-de-Seine (92)',
    subtitle: 'Traiteur sur les hauteurs du 92',
    heroDescription: 'Suresnes, entre le Mont-Valérien et les bords de Seine, L\'Écrin Traiteur livre dans les entreprises et campus de cette ville stratégique.',
    zones: ['Centre-ville', 'Bords de Seine', 'Quartier Mont-Valérien', 'ZAC des Cottages'],
    businessContext: 'Suresnes accueille notamment le siège de Johnson & Johnson France et plusieurs entreprises pharmaceutiques et de santé, ainsi que des PME tertiaires.',
    seoTitle: 'Traiteur d\'entreprise Suresnes 92',
    metaTitle: "Traiteur entreprise Suresnes : livré dès 6h30, devis 24h",
    metaDescription: "Petit-déjeuner dès 8 € HT/pers., plateaux repas et cocktails livrés à Suresnes, du Mont-Valérien aux bords de Seine, dès 6h30. Devis sous 24h.",
    faq: [
      { q: 'Livrez-vous à Suresnes avant 7h ?', a: "Oui, dès 6h30 du lundi au vendredi, du centre-ville aux bords de Seine, au quartier du Mont-Valérien et à la ZAC des Cottages. Commandez jusqu'à la veille 14h et précisez l'étage, le contact sur place et l'heure à laquelle le petit-déjeuner doit être posé : nous calons la tournée sur cette heure, pas sur le début de la réunion." },
      { q: 'Quel est le prix d\'un petit-déjeuner d\'entreprise à Suresnes ?', a: "La formule Classique est à 8 € HT par personne : deux viennoiseries pur beurre, un jus Alain Milliat, un café et une corbeille de fruits frais. Pour 12 personnes, 96 € HT, soit 125 € HT avec la livraison de 29 € HT. Le petit-déjeuner complet va de 12 à 16 € HT par personne. Minimum de commande : 50 € HT." },
      { q: 'Pouvez-vous fournir la liste des allergènes ?', a: "Oui, la liste des allergènes de nos produits est disponible sur demande à commercial@lecrin-traiteur.fr. Indiquez aussi à la commande les régimes particuliers et les effectifs concernés : végétarien, vegan, sans gluten. L'atelier manipule de la farine, donc des traces de gluten restent possibles. Tout est halal, sans porc et sans alcool par défaut." },
      { q: 'Combien de temps garder un plateau livré à Suresnes ?', a: "Les produits réfrigérés se conservent entre 0 et 4 °C et se consomment dans les 4 heures suivant la livraison ; à température ambiante, 2 heures au maximum. C'est pourquoi nous calons l'heure de livraison au plus près du début de votre réunion ou de votre déjeuner, que vous précisez à la commande." },
    ],
    seoArticle: `
      <p><strong>Suresnes</strong> est une ville à taille humaine qui accueille des entreprises exigeantes, notamment dans le secteur pharmaceutique et de la santé, ainsi que des PME tertiaires. Aux tarifs de la carte, le petit-déjeuner démarre à <strong>8 € HT par personne</strong>, le plateau repas à <strong>28,90 € HT</strong> et le cocktail à <strong>29,90 € HT</strong>, avec une livraison du lundi au vendredi dès <strong>6h30</strong>. Les tournées de Suresnes partent de notre atelier du 63 bis rue de Sèvres, à Boulogne-Billancourt.</p>

      <h2>Petit-déjeuner d'entreprise à Suresnes</h2>
      <p>La formule Classique est à 8 € HT par personne : deux viennoiseries pur beurre, un jus Alain Milliat, un café et une corbeille de fruits frais. Pour une équipe de 12 personnes, cela fait 96 € HT, soit 125 € HT avec la livraison de 29 € HT. En formule complète, comptez de 12 à 16 € HT par personne. Les formules sont détaillées sur la page <a href="/petit-dejeuner-entreprise/suresnes">petit-déjeuner d'entreprise à Suresnes</a>.</p>

      <h2>Plateaux repas pour vos réunions et vos formations</h2>
      <p>Les plateaux repas individuels de la collection Essentiel démarrent à <strong>28,90 € HT par personne</strong> en végétarien, 29,90 € HT au poulet et 30,90 € HT au poisson : entrée, plat, dessert et pain, filmés et étiquetés. Pour 12 personnes en végétarien, le total est de 346,80 € HT, soit 375,80 € HT avec la livraison. Les menus sont sur la page <a href="/creations/plateaux-repas">plateaux repas</a>.</p>

      <h2>Traçabilité, allergènes, conservation</h2>
      <p>Les entreprises de la santé et du pharmaceutique ont des exigences élevées en matière de traçabilité, voici ce que nous pouvons documenter. Nos produits sont sans huile de palme, avec des ingrédients tracés et des artisans identifiés. La liste des allergènes est disponible sur demande à commercial@lecrin-traiteur.fr. Côté conservation, les produits réfrigérés se gardent entre 0 et 4 °C et se consomment dans les 4 heures suivant la livraison : nous calons donc l'heure de livraison au plus près de votre réunion.</p>

      <h2>Livrer à Suresnes : centre-ville, bords de Seine, Mont-Valérien, Cottages</h2>
      <p>Nous couvrons le centre-ville, les bords de Seine, le quartier du Mont-Valérien et la ZAC des Cottages. Donnez à la commande l'adresse exacte, l'étage, le nom du contact et l'heure à laquelle le plateau doit être posé. Suresnes touche <a href="/traiteur/puteaux">Puteaux</a>, <a href="/traiteur/nanterre">Nanterre</a> et <a href="/traiteur/rueil-malmaison">Rueil-Malmaison</a> : une équipe répartie sur plusieurs sites de ces communes peut être livrée dans une seule commande.</p>

      <h2>Cocktails et pots d'équipe</h2>
      <p>Pour un départ, une fin de projet ou une réunion de direction élargie, trois formules, hors boissons : L'Invitation (8 pièces par personne, 29,90 € HT), La Réception (12 pièces, 40,90 € HT) et La Célébration (16 pièces, 51,90 € HT). Pour 20 personnes, cela donne 627, 847 ou 1 067 € HT livraison comprise. Voir la page <a href="/creations/cocktails">buffets et cocktails</a>.</p>

      <h2>Exemple : une journée de formation de 20 personnes</h2>
      <p>La pause du matin en formule Classique revient à 160 € HT, les plateaux repas du midi en végétarien à 578 € HT et la pause gourmande de l'après-midi, à partir de 6 € HT par personne, à 120 € HT. Le total est de 858 € HT, plus 29 € HT de livraison, soit 887 € HT dans une commande unique dont le devis précise les créneaux. Une journée entière se commande ainsi en une fois, avec des produits différents à chaque service.</p>

      <h2>Départs, remerciements, événements de site</h2>
      <p>Pour un départ ou pour remercier un partenaire, les coffrets de madeleines d'exception coûtent 24,90 € HT les 10, 49,00 € HT les 20 et 119,00 € HT les 50, et se personnalisent aux couleurs de l'entreprise : voir <a href="/creations/coffrets-cadeaux">coffrets cadeaux</a>. Pour un événement de site, nous proposons aussi des <a href="/creations/animations-culinaires">animations culinaires</a>, préparées en direct devant vos invités, sur devis.</p>

      <h2>Halal, sans porc, végétarien</h2>
      <p>Tout est halal et sans porc par défaut, sans alcool et sans supplément. Les options végétariennes, véganes et sans gluten se précisent à la commande avec les effectifs concernés. L'atelier manipule de la farine : des traces de gluten restent possibles.</p>

      <h2>Commander votre traiteur à Suresnes</h2>
      <p>Commande jusqu'à la veille <strong>14h</strong>, livraison dès 6h30. Minimum de commande 50 € HT, livraison 29 € HT, pas de minimum de participants. Facturation entreprise avec TVA, bon de commande accepté. Pour une réunion de direction ou un événement, <a href="/devis">demandez un devis</a> : réponse sous 24h.</p>
    `,
  },
  {
    slug: 'montrouge',
    name: 'Montrouge',
    region: 'Hauts-de-Seine (92)',
    subtitle: 'Traiteur à la porte de Paris sud',
    heroDescription: 'Montrouge, aux portes du 14e arrondissement, L\'Écrin Traiteur livre dans les entreprises et les agences du sud parisien.',
    zones: ['Porte de Châtillon', 'Centre-ville', 'ZAC Rouget de Lisle', 'Châtillon limite'],
    businessContext: 'Montrouge est une ville tertiaire dense aux portes de Paris sud. SFR y a établi son siège social, et la commune accueille de nombreuses PME et cabinets de conseil.',
    seoTitle: 'Traiteur d\'entreprise Montrouge 92',
    seoArticle: `
      <p><strong>Montrouge</strong> est une commune dense et active, directement reliée au 14e arrondissement de Paris. Son tissu économique est diversifié : grandes entreprises comme SFR, PME tertiaires, agences de communication et cabinets de conseil. L'Écrin Traiteur y livre chaque matin des petits-déjeuners artisanaux.</p>
      <h2>Livraison traiteur Montrouge, entre Paris et le 92</h2>
      <p>La position de Montrouge, à la frontière de Paris, est un atout pour la livraison. Nous optimisons nos tournées pour être présents dans les rues de Montrouge dès l'ouverture des bureaux, avec des produits frais préparés le matin même.</p>
      <h2>Commandez votre traiteur à Montrouge</h2>
      <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30. Pas de minimum, facturation entreprise disponible.</p>
    `,
  },
  {
    slug: 'massy',
    name: 'Massy',
    region: 'Essonne (91)',
    subtitle: 'Traiteur dans le technopôle de l\'Essonne',
    heroDescription: 'Massy, technopôle et hub scientifique de l\'Essonne, L\'Écrin Traiteur livre dans les entreprises et les laboratoires du secteur.',
    zones: ['Massy-Palaiseau', 'Technopôle', 'Triangle de Gonesse', 'Opéra de Massy', 'ZA de Villaine'],
    businessContext: 'Massy est un pôle technologique majeur de l\'Essonne avec de nombreuses entreprises high-tech, laboratoires de recherche et sièges régionaux. La ville est desservie par le TGV et le RER B.',
    seoTitle: 'Traiteur d\'entreprise Massy 91',
    seoArticle: `
      <p><strong>Massy</strong> est le poumon économique de l'Essonne. Son technopôle attire des entreprises high-tech, des laboratoires R&D et des sièges régionaux qui cherchent des prestataires traiteurs fiables. L'Écrin Traiteur livre à Massy et dans l'ensemble du secteur Massy-Saclay.</p>
      <h2>Traiteur technopôle Massy, qualité artisanale pour entreprises innovantes</h2>
      <p>Les entreprises innovantes de Massy partagent souvent des valeurs de qualité et d'authenticité. Nos produits artisanaux, sans huile de palme, fabriqués par des artisans identifiés, correspondent à ces valeurs et renforcent votre culture d'entreprise.</p>
      <h2>Livraison traiteur Massy-Palaiseau, plateau-repas et petits-déjeuners</h2>
      <p>Nous livrons dans l'ensemble du secteur Massy, Palaiseau et les communes limitrophes. Commande avant <strong>14h la veille</strong>, livraison dès 6h30, facturation entreprise disponible.</p>
    `,
  },
  {
    slug: 'velizy-villacoublay',
    name: 'Vélizy-Villacoublay',
    region: 'Yvelines (78)',
    subtitle: 'Traiteur dans le technopôle de Thales et Renault Trucks',
    heroDescription: 'Vélizy-Villacoublay, pôle aéronautique et défense, L\'Écrin Traiteur livre dans les campus de Thales, Renault et les entreprises du secteur.',
    zones: ['Campus Thales', 'Vélizy 2', 'ZAC Inovel Parc', 'Aerospace Valley', 'Villacoublay'],
    businessContext: 'Vélizy-Villacoublay est le principal site industriel de Thales Group, ainsi que des filiales de Renault et de nombreuses entreprises de la défense et de l\'aéronautique.',
    seoTitle: 'Traiteur d\'entreprise Vélizy-Villacoublay',
    seoArticle: `
      <p><strong>Vélizy-Villacoublay</strong> est un pôle industriel et technologique de premier plan des Yvelines, dominé par Thales Group et ses sous-traitants. L'Écrin Traiteur livre dans les campus et les sièges de Vélizy avec une logistique adaptée aux grandes organizations.</p>
      <h2>Livrer dans les campus de Vélizy, notre expertise logistique</h2>
      <p>Les grands campus industriels de Vélizy ont des procédures d'accès strictes. Notre équipe est habituée à travailler avec les services de sécurité et de logistique des grandes entreprises pour s'assurer que vos petits-déjeuners arrivent à destination sans accroc.</p>
      <h2>Traiteur entreprise Vélizy, du petit-déjeuner au séminaire</h2>
      <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30. Devis personnalisé pour les événements. Facturation grandes entreprises disponible.</p>
    `,
  },
  {
    slug: 'la-defense',
    name: 'La Défense',
    region: 'Hauts-de-Seine (92)',
    subtitle: 'Traiteur dans le 1er quartier d\'affaires européen',
    heroDescription: 'La Défense, 180 000 salariés, des dizaines de tours, le cœur économique de l\'Europe. L\'Écrin Traiteur livre dans toutes les tours et espaces de coworking dès 6h30.',
    zones: ['Tour First', 'Tour Total Énergies', 'Tour CB21', 'CNIT', 'Westfield Les Quatre Temps', 'Tour Ariane', 'Tour Aurore', 'Tour Eqho'],
    quartiers: [
      {
        slug: 'tours',
        name: 'Les Tours de La Défense',
        heroDescription: 'Tour First, CB21, Ariane, Total Énergies, Eqho, L\'Écrin Traiteur livre dans toutes les tours du premier quartier d\'affaires européen avec une logistique millimétrée et des accès maîtrisés.',
        linkedZones: ['Tour First', 'Tour Total Énergies', 'Tour CB21', 'Tour Ariane', 'Tour Aurore', 'Tour Eqho', 'CNIT'],
        seoTitle: 'Traiteur La Défense, tours & sièges',
        seoDescription: 'L\'Écrin Traiteur dans toutes les tours de La Défense : Tour First, CB21, Total Énergies, Ariane, Aurore, Eqho. Petits-déjeuners, plateaux repas, cocktails et réceptions, accès maîtrisés.',
        seoArticle: `
          <p>Livrer dans les <strong>tours de La Défense</strong>, c'est une discipline à part entière. Accès sécurisés, réceptions d'immeuble, monte-charges dédiés, interphones et badges, chaque tour a ses propres procédures. L'Écrin Traiteur maîtrise ces contraintes et garantit une livraison sans accroc dans l'ensemble des tours du quartier.</p>
          <h2>Les tours desservies par L'Écrin Traiteur à La Défense</h2>
          <p>Nous livrons régulièrement dans les principales tours de La Défense : <strong>Tour First</strong> (Société Générale), <strong>Tour Total Énergies</strong>, <strong>Tour CB21</strong>, <strong>Tour Ariane</strong>, <strong>Tour Aurore</strong>, <strong>Tour Eqho</strong>, mais aussi dans les immeubles plus modestes du Parvis ou du quartier des Damiers. Aucune adresse de La Défense ne nous est étrangère.</p>
          <h2>Comment nous livrons dans les tours</h2>
          <p>Nos livreurs se présentent au point de livraison convenu, réception, quai de déchargement ou accès piéton, avec les documents nécessaires. Votre commande est conditionnée dans des emballages rigides adaptés au transport vertical. À l'heure choisie, votre salle de réunion ou espace d'accueil est prêt.</p>
          <h2>Commander votre traiteur pour les tours de La Défense</h2>
          <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30. Pour les comptes récurrents dans les grandes tours, un interlocuteur dédié et des procédures d'accès simplifiées peuvent être mis en place. Contactez-nous pour en discuter.</p>
        `,
      },
    ],
    businessContext: 'La Défense est le premier quartier d\'affaires d\'Europe avec plus de 180 000 salariés. EDF, Total Énergies, Société Générale, BNP Paribas, KPMG, Accenture y ont leurs sièges. Le quartier concentre une densité exceptionnelle de décideurs et de grandes organisations.',
    seoTitle: 'Traiteur d\'entreprise La Défense 92',
    metaTitle: "Traiteur & petit-déjeuner entreprise La Défense | L'Écrin",
    metaDescription: "Petits-déjeuners, plateaux repas et cocktails livrés dans les tours de La Défense. Livraison dès 6h30, commande avant 14h la veille.",
    seoArticle: `
      <p><strong>La Défense</strong> est le premier quartier d'affaires d'Europe, 72 tours, 180 000 salariés, des sièges sociaux parmi les plus puissants du monde. L'Écrin Traiteur s'est organisé pour livrer dans cet environnement exceptionnel : accès tours maîtrisés, conditionnement adapté au transport en ascenseur, ponctualité millimétrée.</p>
      <h2>Livrer dans les tours de La Défense : notre expertise logistique</h2>
      <p>Livrer à La Défense, c'est une compétence à part entière. Parkings dédiés, accès piétons sécurisés, réception d'immeuble, monte-charges réservés, nous connaissons les contraintes logistiques de chaque tour et adaptons notre mode de livraison en conséquence. Vos collaborateurs trouvent leur petit-déjeuner prêt à l'heure, sans effort de votre part.</p>
      <h2>Petit-déjeuner d'entreprise La Défense, du team meeting au COMEX</h2>
      <p>De la pause café d'équipe au petit-déjeuner de COMEX, L'Écrin Traiteur propose une gamme complète adaptée aux grandes organisations. Plateaux de viennoiseries artisanales pour 10 personnes, coffrets de macarons Pierre Morel pour une réunion de direction, assortiments de cakes et fruits frais pour une formation de 80 collaborateurs, nous gérons toutes les échelles avec une qualité constante.</p>
      <h2>Les tours desservies à La Défense</h2>
      <p>Nous livrons dans l'ensemble des tours de La Défense, qu'elles soient situées sur la commune de Courbevoie ou de Puteaux. Tour First, Tour Total Énergies, CB21, Ariane, Aurore, Eqho, CNIT, le Parvis, aucune adresse ne nous est inconnue.</p>
      <h2>Commander votre traiteur à La Défense avant 14h</h2>
      <p>Commande en ligne avant <strong>14h la veille</strong>. Livraison dès 6h30 dans toutes les tours de La Défense. Facturation grands comptes disponible, interlocuteur dédié pour les entreprises avec des commandes récurrentes.</p>
    `,
  },
  {
    slug: 'vincennes',
    name: 'Vincennes',
    region: 'Val-de-Marne (94)',
    subtitle: 'Traiteur aux portes du Bois de Vincennes',
    heroDescription: 'Vincennes, entre le bois et Paris, L\'Écrin Traiteur livre dans les entreprises et cabinets de cette commune premium du 94.',
    zones: ['Avenue de Paris', 'Cours Marigny', 'Centre-ville', 'Fontenay-sous-Bois limite'],
    businessContext: 'Vincennes est une commune premium du Val-de-Marne avec un tissu économique dynamique de PME, cabinets et professions libérales. Elle est directement adjacente au 12e arrondissement de Paris.',
    seoTitle: 'Traiteur d\'entreprise Vincennes 94',
    seoArticle: `
      <p><strong>Vincennes</strong> combine le cadre de vie exceptionnel du Bois de Vincennes avec un tissu économique actif. PME, professions libérales, cabinets et startups s'y installent pour profiter de ce cadre tout en restant proches de Paris. L'Écrin Traiteur y livre chaque matin des petits-déjeuners de qualité.</p>
      <h2>Un traiteur artisanal pour une commune exigeante</h2>
      <p>Vincennes a un profil socio-économique qui correspond parfaitement à notre positionnement : exigeant, attaché à la qualité, sensible à l'artisanat. Nos produits, macarons Pierre Morel, madeleines Mado Paris, viennoiseries pur beurre, y trouvent leur clientèle naturelle.</p>
      <h2>Commandez votre traiteur à Vincennes</h2>
      <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30 à Vincennes et communes limitrophes (Fontenay-sous-Bois, Saint-Mandé, Nogent-sur-Marne). Facturation entreprise disponible.</p>
    `,
  },
  {
    slug: 'saint-cloud',
    name: 'Saint-Cloud',
    region: 'Hauts-de-Seine (92)',
    subtitle: 'Traiteur dans la commune premium du 92',
    heroDescription: 'Saint-Cloud, entre le domaine national et les sièges d\'entreprise, L\'Écrin Traiteur livre dans les bureaux et espaces de réception de la commune.',
    zones: ['Domaine de Saint-Cloud', 'Centre-ville', 'Parc de Saint-Cloud', 'Bords de Seine'],
    businessContext: 'Saint-Cloud est une commune résidentielle et tertiaire premium du 92, proche de Boulogne-Billancourt et Sèvres, avec plusieurs sièges sociaux et espaces de séminaires haut de gamme.',
    seoTitle: 'Traiteur d\'entreprise Saint-Cloud 92',
    seoArticle: `
      <p><strong>Saint-Cloud</strong> est l'une des communes les plus exclusives du 92. Son cadre naturel exceptionnel en fait un lieu privilégié pour les séminaires, les retraites d'entreprise et les réceptions haut de gamme. L'Écrin Traiteur y propose des prestations à la hauteur de ce positionnement.</p>
      <h2>Traiteur séminaire à Saint-Cloud, des produits d'exception</h2>
      <p>Les espaces de séminaire et les hôtels de Saint-Cloud accueillent régulièrement des événements d'entreprise premium. Nos coffrets de macarons Pierre Morel, nos plateaux de viennoiseries pur beurre et nos créations pâtissières maison s'inscrivent parfaitement dans ces contextes.</p>
      <h2>Livraison traiteur Saint-Cloud et communes voisines</h2>
      <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30 à Saint-Cloud, Sèvres, Garches et communes limitrophes. Devis personnalisé pour les événements et séminaires.</p>
    `,
  },
]

// Extensions déclarées dans lib/citiesExtra.js (nouvelles villes et arrondissements)
CITIES.push(...CITIES_EXTRA)
const PARIS = CITIES.find(c => c.slug === 'paris')
if (PARIS) PARIS.quartiers = [...(PARIS.quartiers || []), ...PARIS_QUARTIERS_EXTRA]

export const getCityBySlug = (slug) => CITIES.find(c => c.slug === slug)
