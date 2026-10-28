'use client'

import ProductsPageTemplate from '../../../../components/ProductsPageTemplate'
import { ANIMATIONS, slugAnim } from '../../../creations/animations-culinaires/data'
import { enAnimation, UNIVERS_EN } from '../../../../lib/en/produits/animations'

/* Index animations culinaires en anglais. L'identifiant de carte est le slug
   français, comme sur les fiches, pour garder /en/<chemin FR>. */

const PRODUITS = ANIMATIONS
  .filter(a => enAnimation(a.id))
  .map(a => ({
    id: slugAnim(a.nom),
    name: enAnimation(a.id).nom,
    label: `${UNIVERS_EN[a.univers] || 'Live station'} · On quote`,
    img: a.img,
  }))

const SEO_ARTICLE = `
  <h2>Live food stations for your corporate events in Paris</h2>
  <p>A <strong>live food station</strong> changes an event: instead of a buffet that was dressed an hour earlier, something is being made in front of your guests. A barista pulling espresso, a crêpe cooking, salmon being carved, candy floss being spun. L'Écrin Traiteur brings the kit, the staff and the setup, across Paris and Île-de-France.</p>
  <h2>Breakfast, lunch, street food, sweet things and bars</h2>
  <p>Twenty-nine stations across five families: coffee and juice bars and brunch for the morning; fresh pasta, focaccia, salmon and cheese carving for lunch; burgers, tacos, lobster rolls, loaded fries and Lebanese wraps for street food; ice cream, desserts, chocolate fountain, popcorn and candy floss for the sweet end; mocktails and infused waters behind the bar.</p>
  <h2>What is included, and what we need from you</h2>
  <p>Priced on quote by date, venue, headcount, length and access. We bring the equipment, set up before your guests arrive and take everything away afterwards, so there is nothing for you to manage. Most stations need a power socket and a couple of square metres.</p>
  <h2>Booking a live station in Paris and Île-de-France</h2>
  <p>Tell us the date, the venue and roughly how many people, and we come back within <strong>24 hours</strong> with a detailed quote. Company invoice showing VAT. Several stations can run side by side for a large reception.</p>
`

export default function AnimationsEn({ bas }) {
  return (
    <ProductsPageTemplate sansBandeau bas={bas} jsonLdFaq={false} jsonLdItems={false}
      lang="en"
      heroImg="/hero-animations.webp"
      heroTitle="Live food stations"
      heroSubtitle="A barista, a crêpe pan, a carving board: something made in front of your guests rather than dressed an hour before."
      breadcrumb="Our menu, Live food stations"
      fallbackProducts={PRODUITS}
      basePath="/en/creations/animations-culinaires"
      seoArticle={SEO_ARTICLE}
      editorial={{
        eyebrow: 'Made in front of your guests',
        title: 'The difference between a buffet\nand something happening.',
        body: 'Twenty-nine stations, from a speciality coffee bar to a candy floss machine. We bring the kit, set up, serve and clear away.',
      }}
    />
  )
}
