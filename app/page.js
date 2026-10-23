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
import DevisRapide from '../components/DevisRapide'
import Footer from '../components/Footer'
import { businessNode } from '../lib/site'
import { alternatesPour } from '../lib/i18n'

export const metadata = {
  alternates: alternatesPour('/', { en: true }),
}

export default function Home() {
  return (
    <>
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
        {/* Fin de page sur le formulaire court (audit du 22/10/2026), à la place du bloc jaune */}
        <section id="devis" className="ev-devis home-devis">
          <div className="ev-devis-inner">
            <DevisRapide
              titre="Un petit-déjeuner, un déjeuner ou un cocktail à organiser ?"
              titreEn="A breakfast, a lunch or a reception to organise?"
              sousTitre="Répondez en 30 secondes, devis détaillé sous 24h, livraison dans toute l'Île-de-France."
              sousTitreEn="Answer in 30 seconds, a detailed quote within 24 hours, delivery across the Paris region."
            />
          </div>
        </section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...businessNode() }) }}
        />
      </main>
      <Footer />
    </>
  )
}
