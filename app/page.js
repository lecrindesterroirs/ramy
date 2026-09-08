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
import { businessNode } from '../lib/site'

export const metadata = {
  alternates: { canonical: '/' },
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
        <CTASection />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...businessNode() }) }}
        />
      </main>
      <Footer />
    </>
  )
}
