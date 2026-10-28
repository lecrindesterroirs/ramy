// Questions/réponses logistiques, vraies pour toutes les catégories.
// Réutilisées en FAQPage JSON-LD (CategoryJsonLd) ET en bloc visible
// (ProductsPageTemplate) — cohérence des faits pour le SEO et la citation IA.
export const CATEGORY_FAQ = [
  {
    q: 'Dans quelles villes livrez-vous ?',
    a: "Paris et une vingtaine de villes d'Île-de-France (Hauts-de-Seine, Yvelines, Essonne, Val-de-Marne, Seine-Saint-Denis), livraison dès 6h30 par notre équipe.",
  },
  {
    q: 'Y a-t-il un minimum de commande et des frais de livraison ?',
    a: "Le minimum de commande est de 50 € HT. Un forfait de livraison de 29 € HT s'applique à Paris et communes proches ; les autres zones d'Île-de-France sont chiffrées au devis.",
  },
  {
    q: 'Combien de temps à l\'avance faut-il commander ?',
    a: "Commande jusqu'à la veille 10h pour une livraison le lendemain matin. Pour une demande de dernière minute, appelez-nous : nous faisons au mieux selon la disponibilité.",
  },
  {
    q: 'Proposez-vous du halal et des régimes particuliers ?',
    a: 'Tout le salé est halal et sans porc, sans alcool, sans supplément ; options végétariennes, vegan et sans gluten à préciser au devis.',
  },
]

/*
  Mêmes quatre questions, mêmes faits, en anglais. Les chiffres (50 € HT,
  29 € HT, 6h30, veille 10h) sont les mêmes des deux côtés : une divergence
  entre les deux langues serait une contradiction lue par les IA.
*/
export const CATEGORY_FAQ_EN = [
  {
    q: 'Which towns do you deliver to?',
    a: "Paris and around twenty towns across Île-de-France (Hauts-de-Seine, Yvelines, Essonne, Val-de-Marne, Seine-Saint-Denis), delivered from 6:30 am by our own team.",
  },
  {
    q: 'Is there a minimum order, and a delivery charge?',
    a: "The minimum order is €50 excl. VAT. A flat delivery charge of €29 excl. VAT applies in Paris and nearby towns; other parts of Île-de-France are priced on the quote.",
  },
  {
    q: 'How far ahead do we need to order?',
    a: "Order until 10 am the day before for delivery the next morning. For a last-minute request, call us: we do what we can depending on what is available.",
  },
  {
    q: 'Do you cater for halal and other dietary needs?',
    a: 'All our savoury food is halal and pork-free, alcohol-free and at no extra cost; vegetarian, vegan and gluten-free options to specify on the quote.',
  },
]

/*
  Pages du sucré et des boissons (petits-déjeuners, pauses, boissons, coffrets) :
  pas de « halal », « sans porc » ni « sans alcool » (demande de Ramy du 29/10/2026).
  La quatrième question ne porte que sur les régimes ; balisage et bloc visible
  lisent la même liste.
*/
export const CATEGORY_FAQ_SUCRE = [
  ...CATEGORY_FAQ.slice(0, 3),
  {
    q: 'Proposez-vous des options pour les régimes particuliers ?',
    a: 'Oui : options végétariennes, vegan et sans gluten, à préciser au devis avec le nombre de personnes concernées.',
  },
]

export const CATEGORY_FAQ_SUCRE_EN = [
  ...CATEGORY_FAQ_EN.slice(0, 3),
  {
    q: 'Do you cater for special diets?',
    a: 'Yes: vegetarian, vegan and gluten-free options, to specify on the quote with the number of people concerned.',
  },
]

export const faqCategorie = (en, sucre) =>
  sucre ? (en ? CATEGORY_FAQ_SUCRE_EN : CATEGORY_FAQ_SUCRE) : (en ? CATEGORY_FAQ_EN : CATEGORY_FAQ)
