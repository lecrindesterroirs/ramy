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
  'url': SITE,
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
  'areaServed': { '@type': 'State', 'name': 'Île-de-France' },
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': '+33174542310',
    'email': NAP.email,
    'contactType': 'sales',
    'areaServed': 'FR',
    'availableLanguage': 'French',
  },
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
