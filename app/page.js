import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import LogosSection from '../components/LogosSection'
import PrometteSection from '../components/PrometteSection'
import ExperiencesSection from '../components/ExperiencesSection'
import SelectionSection from '../components/SelectionSection'
import ManifestoSection from '../components/ManifestoSection'
import DetailSection from '../components/DetailSection'
import CreationsSection from '../components/CreationsSection'
import MadeleinesSection from '../components/MadeleinesSection'
import TestimonialsSection from '../components/TestimonialsSection'
import FAQSection from '../components/FAQSection'
import VillesSection from '../components/VillesSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import ScrollRevealInit from '../components/ScrollRevealInit'

export default function Home() {
  return (
    <>
      <ScrollRevealInit />
      <Navbar />
      <main>
        <Hero />
        <LogosSection />
        <PrometteSection />
        <CreationsSection />
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
            'name': "L'Écrin Traiteur",
            'description': "Traiteur artisanal parisien spécialisé dans les petits-déjeuners d'entreprise, plateaux repas, pauses café et mignardises livrés à Paris et en Île-de-France.",
            'url': 'https://www.lecrin-traiteur.fr',
            'email': 'commercial@lecrin-traiteur.fr',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Paris',
              'addressRegion': 'Île-de-France',
              'addressCountry': 'FR',
            },
            'geo': {
              '@type': 'GeoCoordinates',
              'latitude': 48.8566,
              'longitude': 2.3522,
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
