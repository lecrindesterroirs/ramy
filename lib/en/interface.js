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
  'nav.contact':          { fr: 'Contact',                 en: 'Contact' },
  'nav.journal':          { fr: 'Le Journal',              en: 'The Journal' },
  'nav.univers':          { fr: "L'Univers",               en: 'About us' },
  'nav.menu':             { fr: 'Menu',                    en: 'Menu' },
  'nav.fermer':           { fr: 'Fermer',                  en: 'Close' },
  'nav.retour':           { fr: 'Retour',                  en: 'Back' },

  // Pied de page
  'pied.carte':           { fr: 'La carte',                en: 'Our menu' },
  'pied.occasions':       { fr: 'Occasions',               en: 'Occasions' },
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

  // Sélecteur de langue
  'langue.fr':            { fr: 'Français',                en: 'French' },
  'langue.en':            { fr: 'Anglais',                 en: 'English' },
  'langue.basculer':      { fr: 'Voir cette page en anglais', en: 'View this page in French' },
}

/** Texte d'interface dans la langue demandée, repli sur le français. */
export function t(cle, langue = 'fr') {
  const e = TEXTES[cle]
  if (!e) return cle
  return (langue === 'en' ? e.en : e.fr) || e.fr
}
