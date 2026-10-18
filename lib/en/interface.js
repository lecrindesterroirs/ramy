/*
  Textes d'interface en anglais.

  Ce fichier ne contient QUE de l'interface : navigation, pied de page,
  boutons, libellés de formulaire. Les noms de produits, les prix et les
  quantités n'y sont pas — ils restent lus dans les données françaises, qui
  sont la seule source (voir lib/i18n.js).

  Usage :
    import { t } from '../lib/en/interface'
    t('devis', langue)        // 'Obtenir un devis' ou 'Get a quote'

  Une clé absente en anglais retombe sur le français : mieux vaut un mot
  français dans une interface anglaise qu'un trou ou une clé technique.
*/

export const TEXTES = {
  // Navigation
  'nav.devis':            { fr: 'Obtenir un devis',        en: 'Get a quote' },
  'nav.bandeau':          { fr: "Commandez jusqu'à la veille avant 14h", en: 'Order until 2 pm the day before' },
  'nav.bandeau.livraison':{ fr: 'Livraison dès 6h30',      en: 'Delivered from 6:30 am' },
  'nav.categories':       { fr: 'Catégories',              en: 'Categories' },
  'nav.occasions':        { fr: 'Pour vos événements',     en: 'For your events' },
  'nav.contact':          { fr: 'Contact',                 en: 'Contact' },
  'nav.journal':          { fr: 'Le Journal',              en: 'The Journal' },
  'nav.univers':          { fr: "L'Univers",               en: 'About us' },
  'nav.menu':             { fr: 'Menu',                    en: 'Menu' },
  'nav.fermer':           { fr: 'Fermer',                  en: 'Close' },
  'nav.retour':           { fr: 'Retour',                  en: 'Back' },

  // Pied de page
  'pied.carte':           { fr: 'La carte',                en: 'Our menu' },
  'pied.occasions':       { fr: 'Occasions',               en: 'Occasions' },
  /*
    Ligne sous le logo du pied de page. Elle est sur toutes les pages : c'est
    elle qu'une IA lit comme la définition de l'entreprise. Factuelle depuis le
    18/10/2026 (décision de Ramy) — avant : « Des expériences pensées pour
    marquer les esprits », qui ne disait rien de vérifiable.
  */
  'pied.signature1':      { fr: "Traiteur d'entreprise à Paris et en Île-de-France.", en: 'Corporate caterer in Paris and the Paris region.' },
  'pied.signature2':      { fr: "Produits d'artisans, livraison dès 6h30.", en: 'Artisan products, delivery from 6:30 am.' },
  'pied.maison':          { fr: 'La maison',               en: 'The company' },
  'pied.legal':           { fr: 'Informations légales',    en: 'Legal' },
  'pied.suivre':          { fr: 'Nous suivre',             en: 'Follow us' },

  // Appels à l'action
  'cta.devis24h':         { fr: 'Devis sous 24h',          en: 'Quote within 24 hours' },
  'cta.appeler':          { fr: 'Appeler',                 en: 'Call us' },
  'cta.decouvrir':        { fr: 'Découvrir',               en: 'Discover' },
  'cta.catalogue':        { fr: 'Découvrir notre catalogue', en: 'See our catalogue' },
  'cta.enSavoirPlus':     { fr: 'En savoir plus',          en: 'Find out more' },

  // Repères commerciaux
  'info.livraison':       { fr: 'Livraison dès 6h30',      en: 'Delivery from 6:30 am' },
  'info.commande':        { fr: 'Commandez jusqu\'à la veille 14h', en: 'Order until 2 pm the day before' },
  'info.zone':            { fr: 'Paris & Île-de-France',   en: 'Paris & Île-de-France' },
  'info.minimum':         { fr: 'Minimum de commande 50 € HT', en: 'Minimum order €50 excl. VAT' },

  // Formulaires — champs
  'form.nom':             { fr: 'Nom complet',             en: 'Full name' },
  'form.societe':         { fr: 'Société',                 en: 'Company' },
  'form.email':           { fr: 'Email professionnel',     en: 'Work email' },
  'form.telephone':       { fr: 'Téléphone',               en: 'Phone' },
  'form.facultatif':      { fr: '(facultatif)',            en: '(optional)' },
  'form.requis':          { fr: 'Champ requis',            en: 'Required field' },
  'form.personnes':       { fr: 'Nombre de personnes',     en: 'Number of guests' },
  'form.convives':        { fr: 'Nombre de convives',      en: 'Number of guests' },
  'form.typeEvenement':   { fr: "Type d'événement",        en: 'Type of event' },
  'form.message':         { fr: 'Votre message',           en: 'Your message' },
  'form.messagePlaceholder': { fr: 'Votre message. Décrivez votre projet, vos envies, vos contraintes...', en: 'Your message. Tell us about your event, what you have in mind, any constraints…' },
  'form.date':            { fr: 'Date souhaitée',          en: 'Preferred date' },
  'form.ville':           { fr: 'Ville ou code postal',    en: 'Town or postcode' },
  'form.budget':          { fr: 'Budget estimé',           en: 'Estimated budget' },
  'form.details':         { fr: 'Détails de votre projet', en: 'About your event' },
  'form.detailsPlaceholder': { fr: 'Décrivez votre événement, vos contraintes alimentaires ou toute information utile…', en: 'Describe your event, any dietary needs or anything else we should know…' },

  // Formulaires — navigation et envoi
  'form.envoyer':         { fr: 'Envoyer ma demande',      en: 'Send my request' },
  'form.suivant':         { fr: 'Suivant',                 en: 'Next' },
  'form.precedent':       { fr: 'Précédent',               en: 'Back' },
  'form.etape':           { fr: 'Étape',                   en: 'Step' },
  'form.sur':             { fr: 'sur',                     en: 'of' },
  'form.envoiEnCours':    { fr: 'Envoi en cours…',         en: 'Sending…' },
  'form.recu':            { fr: 'Demande bien reçue.',     en: 'Request received.' },
  'form.erreur':          { fr: "L'envoi a échoué. Réessayez ou appelez-nous.", en: 'Sending failed. Please try again or call us.' },
  'form.effacer':         { fr: 'Effacer',                 en: 'Clear' },
  'form.aujourdhui':      { fr: "Aujourd'hui",             en: 'Today' },
  'form.choisirDate':     { fr: 'Choisir une date',        en: 'Choose a date' },
  'form.dateEvenement':   { fr: "Date de l'événement",      en: 'Date of the event' },
  'form.obligatoire':     { fr: 'obligatoire',             en: 'required' },
  'form.moisPrecedent':   { fr: 'Mois précédent',          en: 'Previous month' },
  'form.moisSuivant':     { fr: 'Mois suivant',            en: 'Next month' },

  // Formulaire de devis — titres d'étape
  'devis.occasion':       { fr: 'Pour quelle occasion ?',  en: 'What is the occasion?' },
  'devis.projet':         { fr: 'Parlez-nous de votre projet', en: 'Tell us about your event' },
  'devis.coordonnees':    { fr: 'Vos coordonnées',         en: 'Your details' },
  'devis.sousTitre':      { fr: 'Ces informations nous permettent de vous proposer le devis le plus adapté à vos besoins.', en: 'This helps us put together the quote that fits your event best.' },
  'devis.conditions':     { fr: 'Commande minimum 50 € HT · Livraison 29 € HT à Paris · Devis sous 24h', en: 'Minimum order €50 excl. VAT · Delivery €29 excl. VAT in Paris · Quote within 24 hours' },

  // Repères affichés autour des formulaires
  'info.reponse24h':      { fr: 'Réponse sous 24h',        en: 'Reply within 24 hours' },
  'info.toutIdf':         { fr: 'Toute Île-de-France',     en: 'All of Île-de-France' },
  'info.zoneDesservie':   { fr: 'Zone desservie',          en: 'Area covered' },

  // Formulaire de devis — occasions
  'devis.petitDejeuner':  { fr: 'Petit-déjeuner',          en: 'Breakfast' },
  'devis.petitDejeunerD': { fr: 'Viennoiseries, jus frais, pâtisseries artisanales, fruits et douceurs.', en: 'Butter pastries, fresh juice, artisan cakes, fruit and sweet things.' },
  'devis.plateauxRepas':  { fr: 'Plateaux repas',          en: 'Lunch trays' },
  'devis.plateauxRepasD': { fr: 'Plateaux individuels gourmands, équilibrés et de saison.', en: 'Individual trays, generous, balanced and seasonal.' },
  'devis.cocktail':       { fr: 'Cocktail / Buffet',       en: 'Cocktail / Buffet' },
  'devis.cocktailD':      { fr: 'Pièces petites et bouchées, buffets élaborés, bar sans alcool.', en: 'Canapés and small bites, elaborate buffets, alcohol-free bar.' },
  'devis.gouter':         { fr: 'Goûter',                  en: 'Afternoon break' },
  'devis.gouterD':        { fr: 'Pâtisseries, gâteaux, boissons chaudes, moments sucrés et joyeux.', en: 'Pastries, cakes, hot drinks — a sweet, cheerful moment.' },
  'devis.surMesure':      { fr: 'Événement sur mesure',    en: 'Bespoke event' },
  'devis.surMesureD':     { fr: 'Une conception entièrement personnalisée pour vos envies.', en: 'Designed entirely around what you have in mind.' },
  'devis.autre':          { fr: 'Autre demande',           en: 'Something else' },
  'devis.autreD':         { fr: 'Une demande spécifique ? Décrivez-la, nous nous adaptons.', en: 'Something specific? Tell us and we will adapt.' },

  // Formulaire de devis — divers
  'devis.vousAvezRegarde':{ fr: 'Vous avez regardé :',     en: 'You looked at:' },
  'devis.nonRenseigne':   { fr: 'Non renseigné',           en: 'Not given' },
  'devis.modifier':       { fr: 'Modifier la prestation',  en: 'Change the service' },
  'devis.resteDeux':      { fr: 'Encore deux petites étapes avant de recevoir votre devis personnalisé.', en: 'Two short steps left before your personalised quote.' },
  'devis.resteUne':       { fr: 'Encore une petite étape avant de recevoir votre devis.', en: 'One short step left before your quote.' },
  'devis.presque':        { fr: "Vous y êtes presque, il ne reste que l'envoi de votre demande.", en: 'Almost there — all that is left is to send your request.' },
  'devis.continuer':      { fr: 'Continuer mon devis',     en: 'Continue my quote' },
  'devis.quitter':        { fr: 'Quitter quand même',      en: 'Leave anyway' },
  'devis.attendez':       { fr: 'Attendez !',              en: 'Wait!' },

  // Exemples de saisie
  'ex.nom':               { fr: 'Ex : Marie Dupont',       en: 'e.g. Jane Smith' },
  'ex.societe':           { fr: 'Ex : Entreprise SAS',     en: 'e.g. Acme Ltd' },
  'ex.email':             { fr: 'Ex : marie@entreprise.com', en: 'e.g. jane@company.com' },
  'ex.telephone':         { fr: 'Ex : 06 12 34 56 78',     en: 'e.g. +33 6 12 34 56 78' },
  'ex.convives':          { fr: 'Ex : 30 personnes',       en: 'e.g. 30 people' },
  'ex.budget':            { fr: 'Ex : 1000 € à 2000 €',    en: 'e.g. €1,000 to €2,000' },
  'ex.ville':             { fr: 'Ex : Paris, 92150, Suresnes...', en: 'e.g. Paris, 92150, Suresnes…' },

  // Pied de page légal des formulaires
  'legal.mentions':       { fr: 'Mentions légales',        en: 'Legal notice' },
  'legal.cgv':            { fr: 'CGV',                     en: 'Terms' },
  'legal.confidentialite':{ fr: 'Confidentialité',         en: 'Privacy' },
  'legal.infos':          { fr: 'Informations légales',    en: 'Legal information' },

  // Bandeau de logos clients (components/LogosSection.js)
  'logos.label':          { fr: 'Ils nous font confiance',  en: 'They trust us' },
  'logos.pourquoipas':    { fr: 'Et pourquoi pas vous ?',    en: 'Why not you?' },

  // Page /contact (le même composant sert /contact et /en/contact)
  'contact.surtitre':     { fr: 'Contactez-nous',            en: 'Get in touch' },
  'contact.titre1':       { fr: 'Un échange simple',         en: 'A simple,' },
  'contact.titre2':       { fr: 'et rapide.',                en: 'quick conversation.' },
  'contact.chapeau':      { fr: 'Notre équipe vous répond avec attention pour concevoir une prestation sur mesure, adaptée à vos besoins et à vos contraintes.', en: 'Our team reads every request carefully and builds a service around what you need and the constraints you have.' },
  'contact.formTitre':    { fr: 'Parlez-nous de votre projet', en: 'Tell us about your event' },
  'contact.formChapeau':  { fr: 'Nous vous répondons sous 24h avec une proposition personnalisée.', en: 'We reply within 24 hours with a proposal built for you.' },
  'contact.confidentiel': { fr: 'Vos données restent privées et ne sont jamais partagées.', en: 'Your details stay private and are never shared.' },
  'contact.erreur':       { fr: 'Une erreur est survenue. Veuillez réessayer ou nous appeler directement.', en: 'Something went wrong. Please try again, or call us directly.' },
  'contact.merci':        { fr: 'Envoyez-nous votre demande.', en: 'Send us your request.' },
  'contact.vivevoix':     { fr: 'Vous préférez en parler de vive voix ?', en: 'Would you rather talk it through?' },
  'contact.rdv':          { fr: 'Prendre 15 min avec nous',  en: 'Book 15 minutes with us' },
  'contact.argsSurtitre': { fr: 'Pensé pour les entreprises', en: 'Built for companies' },
  'contact.argsTitre1':   { fr: 'Un service exigeant,',      en: 'A service held to a standard,' },
  'contact.argsTitre2':   { fr: 'adapté à votre quotidien.', en: 'fitted to your working day.' },
  'contact.arg1.titre':   { fr: 'Réponse rapide',            en: 'Quick reply' },
  'contact.arg1.desc':    { fr: "Nous vous répondons sous 24h pour toute demande de devis ou d'information.", en: 'We reply within 24 hours to any quote request or question.' },
  'contact.arg2.titre':   { fr: 'Prestation sur mesure',     en: 'Made to measure' },
  'contact.arg2.desc':    { fr: 'Des offres adaptées à vos envies, à votre budget et aux besoins de votre entreprise.', en: 'Offers shaped around what you want, your budget and what your company needs.' },
  'contact.arg3.titre':   { fr: 'Livraison ponctuelle',      en: 'On-time delivery' },
  'contact.arg3.desc':    { fr: 'Livraison dès 6h30 en Île-de-France, avec le respect de vos impératifs horaires.', en: 'Delivery from 6:30 am across the Paris region, to the times you set.' },
  'contact.arg4.titre':   { fr: 'Installation soignée',      en: 'Careful set-up' },
  'contact.arg4.desc':    { fr: "Mise en place élégante et discrète pour un service prêt à l'heure souhaitée.", en: 'An elegant, discreet set-up so everything is ready at the hour you asked for.' },
  'contact.arg5.titre':   { fr: 'Interlocuteur unique',      en: 'One point of contact' },
  'contact.arg5.desc':    { fr: "Un contact dédié pour vous accompagner à chaque étape de votre événement.", en: 'One dedicated contact with you at every stage of your event.' },
  'contact.arg6.titre':   { fr: 'Règlement à 30 jours',      en: 'Payment at 30 days' },
  'contact.arg6.desc':    { fr: 'Conditions de règlement adaptées aux entreprises, sans avance de frais.', en: 'Payment terms made for companies, with nothing to pay up front.' },

  // Sélecteur de langue
  'langue.fr':            { fr: 'Français',                en: 'French' },
  'langue.en':            { fr: 'Anglais',                 en: 'English' },
  'langue.basculer':      { fr: 'Voir cette page en anglais', en: 'View this page in French' },
}

/*
  Calendrier des formulaires (/devis et /contact). Les noms de mois et
  l'initiale des jours sont de l'interface, pas de la donnée produit : ils
  suivent la langue de la page. La semaine commence lundi dans les deux
  langues, l'ordre des initiales ne change donc pas.
*/
const MOIS_FR = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre']
const MOIS_EN = ['January','February','March','April','May','June','July','August','September','October','November','December']
const JOURS_FR = ['L','M','M','J','V','S','D']
const JOURS_EN = ['M','T','W','T','F','S','S']

/** Noms de mois du calendrier, dans la langue demandée. */
export const moisCalendrier = (langue = 'fr') => (langue === 'en' ? MOIS_EN : MOIS_FR)

/** Initiales des jours, lundi en premier, dans la langue demandée. */
export const joursCalendrier = (langue = 'fr') => (langue === 'en' ? JOURS_EN : JOURS_FR)

/** Date longue (« 29 octobre 2026 » / « 29 October 2026 ») dans la langue demandée. */
export function dateLongue(iso, langue = 'fr') {
  if (!iso) return ''
  const d = iso instanceof Date ? iso : new Date(iso + 'T00:00:00')
  return d.toLocaleDateString(langue === 'en' ? 'en-GB' : 'fr-FR', { day: '2-digit', month: 'long', year: 'numeric' })
}

/** Texte d'interface dans la langue demandée, repli sur le français. */
export function t(cle, langue = 'fr') {
  const e = TEXTES[cle]
  if (!e) return cle
  return (langue === 'en' ? e.en : e.fr) || e.fr
}
