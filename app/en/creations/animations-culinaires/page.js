import ProductsPageTemplate from '../../../../components/ProductsPageTemplate'
import { categorieAnimations, ht } from '../../../../lib/categoriesVue'
import { MINIMUM } from '../../../../lib/prixEntree'
import { LIV } from '../../../../lib/calculsPrix'

/*
  Index anglais, rendu côté serveur avec le même gabarit et les mêmes calculs
  que la page française (refonte du 23/10/2026) : prix et photos lus dans les
  fiches françaises, noms dans les surcouches lib/en/produits/*.
*/
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

export default function Page() {
  const c = categorieAnimations(true)
  const FAQ = [
    { q: 'How much does a live food station cost?', a: c.essentiel },
    { q: 'How far ahead should we book?', a: 'At least a week ahead: we check access, water and power, and book the chef or barista. The quote arrives within 24 hours.' },
  ]
  return (
    <ProductsPageTemplate
      lang="en"
      heroImg="/prod-atelier-crepes.webp"
      heroAlt="Crêpe station made live at a corporate event"
      surtitre="Live food stations"
      heroTitle="Live food stations"
      heroSubtitle="A barista, a crêpe pan, a pasta pan: something made in front of your guests rather than set out an hour before."
      faits={c.faits}
      essentiel={c.essentiel}
      formules={c.formules}
      produits={c.produits}
      sections={c.sections}
      seoArticle={SEO_ARTICLE}
      faq={FAQ}
      basePath="/creations/animations-culinaires"
      devisPrestation="Événement sur mesure"
      devisTitre={{ fr: "A live station to organise?", en: "A live station to organise?" }}
      nomJsonLd="Live food stations"
    />
  )
}
