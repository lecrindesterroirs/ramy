// Constantes métier centralisées, NAP & fiche Google Business Profile.
// Une seule source de vérité : à modifier ici uniquement.

export const NAP = {
  name: "L'Écrin Traiteur",
  phone: '01 74 54 23 10',
  phoneHref: 'tel:+33174542310',
  email: 'commercial@lecrin-traiteur.fr',
  address: '63 bis rue de Sèvres',
  postalCode: '92100',
  city: 'Boulogne-Billancourt',
}

// Fiche Google Business Profile (5,0★ · 18 avis), URL Maps canonique (CID stable)
export const GBP_URL = 'https://www.google.com/maps?cid=7256328868778850442'
export const GBP_RATING = 5.0
export const GBP_RATING_LABEL = '5,0'
export const GBP_REVIEWS = 18

const SITE = 'https://www.lecrin-traiteur.fr'
export const BUSINESS_ID = `${SITE}/#business`

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
  'geo': { '@type': 'GeoCoordinates', 'latitude': 48.8352, 'longitude': 2.2409 },
  'areaServed': { '@type': 'State', 'name': 'Île-de-France' },
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': '+33174542310',
    'email': NAP.email,
    'contactType': 'sales',
    'areaServed': 'FR',
    'availableLanguage': 'French',
  },
  'openingHoursSpecification': [{
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    'opens': '06:30',
    'closes': '14:00',
  }],
  'priceRange': '€€',
  'servesCuisine': 'Français artisanal',
  // Note Google Business Profile (source de vérité : la fiche GBP).
  // Mettre à jour GBP_RATING / GBP_REVIEWS dans ce fichier quand la fiche évolue.
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': String(GBP_RATING),
    'reviewCount': String(GBP_REVIEWS),
    'bestRating': '5',
    'worstRating': '1',
  },
  'sameAs': [GBP_URL],
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
