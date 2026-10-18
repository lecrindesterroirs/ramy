import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import LogosSection from '../../components/LogosSection'
import CreationsSection from '../../components/CreationsSection'
import TestimonialsSection from '../../components/TestimonialsSection'
import FAQSection from '../../components/FAQSection'
import VillesSection from '../../components/VillesSection'
import CTASection from '../../components/CTASection'
import Footer from '../../components/Footer'
import { businessNode } from '../../lib/site'
import { alternatesPourEn } from '../../lib/i18n'

/*
  Accueil en anglais.

  Pourquoi cette page existe : /en répondait 404, alors que 149 pages
  anglaises y pointaient par leur fil d'Ariane et leur bouton « Home ». Un
  visiteur anglophone qui cliquait sur Accueil tombait sur une erreur.

  Elle réutilise les sections de l'accueil français, par prop `lang`, pour
  que les deux pages restent la même page : mêmes photos, mêmes logos,
  mêmes villes, mêmes faits. Les six sections encore franco-seules
  (artisans, madeleines, expériences, sélection, manifeste, détail) ne sont
  pas rendues ici : mieux vaut une page anglaise plus courte qu'une page
  anglaise avec six blocs en français.
*/

export const metadata = {
  title: { absolute: "Corporate Catering in Paris | L'Écrin Traiteur" },
  description: 'Corporate catering in Paris and Île-de-France: breakfasts, lunch trays and cocktail receptions delivered from 6:30 am. Halal and pork-free menu, quote within 24 hours.',
  alternates: alternatesPourEn('/'),
  openGraph: {
    title: "Corporate Catering in Paris | L'Écrin Traiteur",
    description: 'Breakfasts, lunch trays and cocktail receptions delivered to your offices from 6:30 am. Quote within 24 hours.',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function HomeEn() {
  return (
    <>
      <Navbar />
      <main>
        <Hero lang="en" />
        <LogosSection label="They trust us" />
        <CreationsSection lang="en" />
        <TestimonialsSection lang="en" />
        <FAQSection lang="en" />
        <VillesSection lang="en" />
        <CTASection lang="en" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...businessNode() }) }}
        />
      </main>
      <Footer />
    </>
  )
}
