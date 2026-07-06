import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import LogosSection from '../components/LogosSection'
import PrometteSection from '../components/PrometteSection'
import ExperiencesSection from '../components/ExperiencesSection'
import SelectionSection from '../components/SelectionSection'
import ManifestoSection from '../components/ManifestoSection'
import DetailSection from '../components/DetailSection'
import CreationsSection from '../components/CreationsSection'
import ArtisansMapSection from '../components/ArtisansMapSection'
import MadeleinesSection from '../components/MadeleinesSection'
import TestimonialsSection from '../components/TestimonialsSection'
import FAQSection from '../components/FAQSection'
import VillesSection from '../components/VillesSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import ScrollRevealInit from '../components/ScrollRevealInit'

export const metadata = {
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <>
      <ScrollRevealInit />
      <Navbar />
      <main>
        <Hero />
        <LogosSection />
        {/* <PrometteSection />  ← masquée pour test */}
        <CreationsSection />
        <ArtisansMapSection />
        <MadeleinesSection />
        <ExperiencesSection />
        <SelectionSection />
        <ManifestoSection />
        <DetailSection />
        <TestimonialsSection />
        <FAQSection />
        <VillesSection />
        <CTASection />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://www.lecrin-traiteur.fr/#business',
            'name': "L'Écrin Traiteur",
            'description': "Traiteur d'entreprise artisanal à Paris & Île-de-France : petits-déjeuners, plateaux repas, cocktails, buffets, animations culinaires et réceptions sur mesure. Artisans sélectionnés, livraison dès 6h30.",
            'url': 'https://www.lecrin-traiteur.fr',
            'email': 'commercial@lecrin-traiteur.fr',
            'telephone': '+33174542310',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': '63 bis Rue de Sèvres',
              'postalCode': '92100',
              'addressLocality': 'Boulogne-Billancourt',
              'addressRegion': 'Île-de-France',
              'addressCountry': 'FR',
            },
            'geo': {
              '@type': 'GeoCoordinates',
              'latitude': 48.8352,
              'longitude': 2.2409,
            },
            'openingHoursSpecification': [{
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': ['Monday','Tuesday','Wednesday','Thursday','Friday'],
              'opens': '06:30',
              'closes': '14:00',
            }],
            'priceRange': '€€',
            'areaServed': {
              '@type': 'State',
              'name': 'Île-de-France',
            },
            'servesCuisine': 'Français artisanal',
            'hasOfferCatalog': {
              '@type': 'OfferCatalog',
              'name': 'Prestations traiteur entreprise',
              'itemListElement': [
                { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Petit-déjeuner d\'entreprise livré Paris' } },
                { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Plateaux repas entreprise Paris' } },
                { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Pauses café & mignardises' } },
                { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Cocktail & Buffet d\'entreprise' } },
              ],
            },
            'sameAs': ['https://www.lecrin-traiteur.fr'],
          }) }}
        />
      </main>
      <Footer />
    </>
  )
}
