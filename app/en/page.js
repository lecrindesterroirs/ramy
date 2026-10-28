import Navbar from '../../components/Navbar'
import { ogImages } from '../../lib/og'
import Hero from '../../components/Hero'
import LogosSection from '../../components/LogosSection'
import CreationsSection from '../../components/CreationsSection'
import ArtisansMapSection from '../../components/ArtisansMapSection'
import MadeleinesSection from '../../components/MadeleinesSection'
import ExperiencesSection from '../../components/ExperiencesSection'
import SelectionSection from '../../components/SelectionSection'
import ManifestoSection from '../../components/ManifestoSection'
import DetailSection from '../../components/DetailSection'
import TestimonialsSection from '../../components/TestimonialsSection'
import FAQSection from '../../components/FAQSection'
import PiliersAccueil from '../../components/PiliersAccueil'
import VillesSection from '../../components/VillesSection'
import DevisRapide from '../../components/DevisRapide'
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
  mêmes villes, mêmes faits, mêmes prix. Les treize sections sont dans le
  même ordre que l'accueil français.
*/

export const metadata = {
  title: { absolute: "Corporate Catering in Paris | L'Écrin Traiteur" },
  description: 'Corporate catering in Paris and Île-de-France: breakfasts, lunch trays and cocktail receptions delivered from 6:30 am. Halal and pork-free savoury food, quote within 24 hours.',
  alternates: alternatesPourEn('/'),
  openGraph: {
    images: ogImages('/hero-bg.webp'),
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
        <ArtisansMapSection lang="en" />
        <MadeleinesSection lang="en" />
        <ExperiencesSection lang="en" />
        <SelectionSection lang="en" />
        <ManifestoSection lang="en" />
        <DetailSection lang="en" />
        <TestimonialsSection lang="en" />
        <PiliersAccueil lang="en" />
        <FAQSection lang="en" />
        <VillesSection lang="en" />
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
