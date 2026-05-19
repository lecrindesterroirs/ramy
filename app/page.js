import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import LogosSection from '../components/LogosSection'
import PrometteSection from '../components/PrometteSection'
import ExperiencesSection from '../components/ExperiencesSection'
import SelectionSection from '../components/SelectionSection'
import ManifestoSection from '../components/ManifestoSection'
import DetailSection from '../components/DetailSection'
import CreationsSection from '../components/CreationsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import FAQSection from '../components/FAQSection'
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
        <ExperiencesSection />
        <SelectionSection />
        <ManifestoSection />
        <DetailSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
