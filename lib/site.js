// Constantes métier centralisées, NAP & fiche Google Business Profile.
// Une seule source de vérité : à modifier ici uniquement.

// Note & nb d'avis : régénérés depuis Google Places au build (scripts/fetch-gbp.mjs).
// Repli sur les valeurs du fichier si l'API n'est pas dispo. Ne plus éditer à la main.
import gbp from './gbpData.json'

export const NAP = {
  name: "L'Écrin Traiteur",
  phone: '01 74 54 23 10',
  phoneHref: 'tel:+33174542310',
  email: 'commercial@lecrin-traiteur.fr',
  address: '63 bis rue de Sèvres',
  postalCode: '92100',
  city: 'Boulogne-Billancourt',
}

// Fiche Google Business Profile (note et nombre d'avis : voir lib/gbpData.json), URL Maps canonique (CID stable)
export const GBP_URL = 'https://www.google.com/maps?cid=7256328868778850442'
export const GBP_RATING = gbp.rating
export const GBP_RATING_LABEL = gbp.ratingLabel
export const GBP_REVIEWS = gbp.reviews

// Chiffres de confiance affichés sur le site (bandeau ProofBar). Ne jamais les gonfler.
export const PROOF = {
  entreprises: { fr: 'plus de 100', en: 'over 100' },
  personnes: { fr: 'plus de 10 000', en: 'over 10,000' },
  maj: '17 octobre 2026',
}

const SITE = 'https://www.lecrin-traiteur.fr'
export const BUSINESS_ID = `${SITE}/#business`
export const FOUNDER_ID = `${SITE}/#founder`

// Profils personnels du fondateur (LinkedIn perso, etc.). Ne mettre que des URL
// réelles : c'est ce qui relie la personne à l'entité côté Google & IA/GEO.
const FOUNDER_SAME_AS = ['https://www.linkedin.com/in/ramy-abdelaty/']

// Entité Person du fondateur, référencée par #business (founder) et par les
// articles du Journal (author) via le même @id.
export const founderNode = () => ({
  '@type': 'Person',
  '@id': FOUNDER_ID,
  'name': 'Ramy Abdelaty',
  'jobTitle': 'Fondateur & CEO',
  'url': `${SITE}/univers/notre-maison`,
  'worksFor': { '@id': BUSINESS_ID },
  'knowsAbout': [
    "Traiteur d'entreprise",
    'Restauration B2B',
    "Petit-déjeuner d'entreprise",
    "Cocktail d'entreprise",
    'Restauration halal et sans porc',
  ],
  ...(FOUNDER_SAME_AS.length ? { 'sameAs': FOUNDER_SAME_AS } : {}),
})

// Nœud LocalBusiness de référence, MÊME @id que la home pour consolider l'entité.
// FoodEstablishment : sous-type le plus précis supporté par Google pour un
// traiteur (pas de type « Caterer » dédié dans la table LocalBusiness).
export const businessNode = () => ({
  '@type': ['LocalBusiness', 'FoodEstablishment'],
  '@id': BUSINESS_ID,
  'name': NAP.name,
  'legalName': "L'Écrin des Terroirs",
  'description': "Traiteur d'entreprise artisanal à Paris & Île-de-France : petits-déjeuners, plateaux repas, cocktails, buffets et animations culinaires. Halal et sans porc par défaut. Artisans sélectionnés, livraison dès 6h30.",
  'url': SITE,
  'logo': {
    '@type': 'ImageObject',
    'url': `${SITE}/icon-512.png`,
    'width': 512,
    'height': 512,
  },
  'image': `${SITE}/og-image.jpg`,
  'email': NAP.email,
  'telephone': '+33174542310',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': NAP.address,
    'postalCode': NAP.postalCode,
    'addressLocality': NAP.city,
    'addressRegion': 'Île-de-France',
    'addressCountry': 'FR',
  },
  // Coordonnées du 63 bis rue de Sèvres, relevées sur Nominatim le 19/10/2026 et
  // cohérentes avec la fiche Google (48,8345 / 2,2285). Elles étaient à 48,8352 /
  // 2,2409, soit ~920 m trop à l'est : un point qui ne tombait pas sur l'adresse.
  'geo': { '@type': 'GeoCoordinates', 'latitude': 48.8347, 'longitude': 2.2283 },
  'areaServed': { '@type': 'State', 'name': 'Île-de-France' },
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': '+33174542310',
    'email': NAP.email,
    'contactType': 'sales',
    'areaServed': 'FR',
    'availableLanguage': 'French',
  },
  'openingHoursSpecification': [
    { '@type': 'OpeningHoursSpecification', 'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], 'opens': '06:00', 'closes': '22:30' },
    { '@type': 'OpeningHoursSpecification', 'dayOfWeek': 'Sunday', 'opens': '09:00', 'closes': '21:00' },
  ],
  'founder': founderNode(),
  'foundingDate': '2025',
  'priceRange': '€€',
  'servesCuisine': 'Français artisanal',
  // Identifiants publics (voir /mentions-legales) : ils rattachent le site à une
  // société réelle, ce que vérifient autant un acheteur B2B qu'un moteur d'IA.
  'vatID': 'FR05100102672',
  'taxID': '10010267200019',
  'legalName': "L'Écrin des Terroirs",
  'currenciesAccepted': 'EUR',
  'paymentAccepted': 'Virement bancaire, carte bancaire, lien de paiement',
  'knowsLanguage': ['fr', 'en'],
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Prestations traiteur entreprise',
    // Prix de départ HT par personne : à tenir alignés avec les pages (voir /traiteur).
    'itemListElement': [
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': "Petit-déjeuner d'entreprise livré Paris" }, 'priceSpecification': { '@type': 'UnitPriceSpecification', 'minPrice': '8.00', 'priceCurrency': 'EUR', 'valueAddedTaxIncluded': false, 'unitText': 'par personne' }, 'description': "Dès 8 € HT par personne" },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': "Pause goûter d'entreprise" }, 'priceSpecification': { '@type': 'UnitPriceSpecification', 'minPrice': '6.00', 'priceCurrency': 'EUR', 'valueAddedTaxIncluded': false, 'unitText': 'par personne' }, 'description': "Dès 6 € HT par personne" },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': "Lunch box entreprise" }, 'priceSpecification': { '@type': 'UnitPriceSpecification', 'minPrice': '18.90', 'priceCurrency': 'EUR', 'valueAddedTaxIncluded': false, 'unitText': 'par personne' }, 'description': "De 18,90 à 21,90 € HT par personne" },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': "Plateaux repas entreprise Paris" }, 'priceSpecification': { '@type': 'UnitPriceSpecification', 'minPrice': '28.90', 'priceCurrency': 'EUR', 'valueAddedTaxIncluded': false, 'unitText': 'par personne' }, 'description': "Dès 28,90 € HT par personne" },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': "Cocktail d'entreprise" }, 'priceSpecification': { '@type': 'UnitPriceSpecification', 'minPrice': '29.90', 'priceCurrency': 'EUR', 'valueAddedTaxIncluded': false, 'unitText': 'par personne' }, 'description': "29,90 € HT (8 pièces), 40,90 € HT (12 pièces) ou 51,90 € HT (16 pièces) par personne" },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': "Buffet à partager entreprise" }, 'priceSpecification': { '@type': 'UnitPriceSpecification', 'minPrice': '34.90', 'priceCurrency': 'EUR', 'valueAddedTaxIncluded': false, 'unitText': 'par personne' }, 'description': "À partir de 34,90 € HT par personne" },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': "Plateaux apéritifs entreprise" }, 'priceSpecification': { '@type': 'UnitPriceSpecification', 'minPrice': '63.90', 'priceCurrency': 'EUR', 'valueAddedTaxIncluded': false, 'unitText': 'par plateau' }, 'description': "À partir de 63,90 € HT le plateau" },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': "Coffrets cadeaux entreprise" }, 'priceSpecification': { '@type': 'UnitPriceSpecification', 'minPrice': '17.90', 'priceCurrency': 'EUR', 'valueAddedTaxIncluded': false, 'unitText': 'par coffret' }, 'description': "À partir de 17,90 € HT le coffret" },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': "Boissons artisanales livrées" }, 'priceSpecification': { '@type': 'UnitPriceSpecification', 'minPrice': '3.80', 'priceCurrency': 'EUR', 'valueAddedTaxIncluded': false }, 'description': "À partir de 3,80 € HT" },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': "Animation culinaire en entreprise" }, 'priceSpecification': { '@type': 'UnitPriceSpecification', 'minPrice': '600.00', 'priceCurrency': 'EUR', 'valueAddedTaxIncluded': false }, 'description': "Sur devis, à partir de 600 € HT" },
    ],
  },
  // Pas d'aggregateRating : des avis déclarés par l'entreprise elle-même sur son
  // propre LocalBusiness sont contraires aux règles de Google (retiré le 13/10/2026,
  // validé par Ramy). La note reste affichée en texte sur le site et sur la fiche Google.
  // Profils externes qui identifient l'entité (renforce la reconnaissance
  // côté Google & IA/GEO). Ajouter ici LinkedIn / Instagram dès qu'ils portent
  // la marque (nom, logo, lien site). Ne mettre que des URL réelles.
  'sameAs': [
    GBP_URL,
    'https://www.pagesjaunes.fr/pros/64402938',
    'https://www.linkedin.com/company/lecrin-traiteur/',
    'https://www.instagram.com/lecrin_traiteur',
    'https://www.wikidata.org/wiki/Q141715270',
    'https://www.pinterest.com/lecrin_traiteur/',
  ],
})

// Politique de retour + livraison à injecter dans les Offer produit
// (exigée par Google pour l'éligibilité "merchant listing"). Denrées
// périssables → pas de retour. Livraison 29 € HT Paris, J+1.
export const productOfferPolicy = () => ({
  'hasMerchantReturnPolicy': {
    '@type': 'MerchantReturnPolicy',
    'returnPolicyCategory': 'https://schema.org/MerchantReturnNotPermitted',
    'applicableCountry': 'FR',
  },
  'shippingDetails': {
    '@type': 'OfferShippingDetails',
    'shippingRate': { '@type': 'MonetaryAmount', 'value': '29.00', 'currency': 'EUR' },
    'shippingDestination': { '@type': 'DefinedRegion', 'addressCountry': 'FR', 'addressRegion': 'Île-de-France' },
    'deliveryTime': {
      '@type': 'ShippingDeliveryTime',
      'handlingTime': { '@type': 'QuantitativeValue', 'minValue': 0, 'maxValue': 1, 'unitCode': 'DAY' },
      'transitTime': { '@type': 'QuantitativeValue', 'minValue': 0, 'maxValue': 0, 'unitCode': 'DAY' },
    },
  },
})

// Entité WebSite du site, injectée une seule fois (layout racine).
// Référencée par les autres nœuds via `isPartOf: { '@id': #website }`.
export const websiteNode = () => ({
  '@type': 'WebSite',
  '@id': `${SITE}/#website`,
  'url': SITE,
  'name': NAP.name,
  'inLanguage': 'fr-FR',
  'publisher': { '@id': BUSINESS_ID },
})

// JSON-LD complet pour une page de contact/devis (ContactPage + entité consolidée).
export const contactPageLd = (path, name) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': `${SITE}${path}#webpage`,
      'url': `${SITE}${path}`,
      'name': name,
      'isPartOf': { '@id': `${SITE}/#website` },
      'about': { '@id': BUSINESS_ID },
    },
    businessNode(),
  ],
})
