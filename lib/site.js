// Constantes métier centralisées — NAP & fiche Google Business Profile.
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

// Fiche Google Business Profile (5,0★ · 18 avis) — URL Maps canonique (CID stable)
export const GBP_URL = 'https://www.google.com/maps?cid=7256328868778850442'
export const GBP_RATING = 5.0
export const GBP_RATING_LABEL = '5,0'
export const GBP_REVIEWS = 18

const SITE = 'https://www.lecrin-traiteur.fr'
export const BUSINESS_ID = `${SITE}/#business`

// Nœud LocalBusiness de référence — MÊME @id que la home pour consolider l'entité.
export const businessNode = () => ({
  '@type': 'LocalBusiness',
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
  'sameAs': [GBP_URL],
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
