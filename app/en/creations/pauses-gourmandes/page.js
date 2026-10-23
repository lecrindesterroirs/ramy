import ProductsPageTemplate from '../../../../components/ProductsPageTemplate'
import { categoriePause, ht } from '../../../../lib/categoriesVue'
import { MINIMUM, PAUSE_DES } from '../../../../lib/prixEntree'
import { LIV } from '../../../../lib/calculsPrix'

/*
  Index anglais, rendu côté serveur avec le même gabarit et les mêmes calculs
  que la page française (refonte du 23/10/2026) : prix et photos lus dans les
  fiches françaises, noms dans les surcouches lib/en/produits/*.
*/
const SEO_ARTICLE = `
  <h2>Afternoon treats for your Paris office</h2>
  <p>The afternoon break is the moment a team actually talks to each other. A few artisan sweet things on the table at four o'clock does more for a long afternoon than another round of coffee. L'Écrin Traiteur delivers them across Paris and Île-de-France, from <strong>${ht(PAUSE_DES, true)} per person</strong>.</p>
  <h2>Made by our pastry partners, baked close to delivery</h2>
  <p>Madeleines, macarons, tartlets, choux buns, loaf cakes, cookies and brownies: each piece is shaped by hand and baked as close to the delivery as we can manage. We are happy to balance a platter with cut fresh fruit and individual desserts, so the table is not all sugar.</p>
  <h2>Large cakes to share, for birthdays and team moments</h2>
  <p>For a birthday, a leaving party or an onboarding worth marking, we also make <strong>large cakes to share</strong>: raspberry tart, hazelnut praline cake, fraisier, lemon meringue tart, strawberry roulade, panettone. Cut in front of everyone, which is the point.</p>
  <h2>Ordering your afternoon break in Paris</h2>
  <p>Order until <strong>2 pm the day before</strong>, delivered from <strong>6:30 am</strong> Monday to Friday. Minimum order ${ht(MINIMUM, true)}, delivery ${ht(LIV, true)} in Paris and nearby towns. The whole menu is halal and pork-free. Company invoice showing VAT, quote within 24 hours.</p>
`

export default function Page() {
  const c = categoriePause(true)
  const FAQ = [
    { q: 'How much does an afternoon break cost per person?', a: c.essentiel },
    { q: 'How much should we allow per person?', a: 'Allow 1.5 to 2 sweet pieces per person for a 20 to 30 minute break, and 3 varied pieces for an afternoon with two breaks.' },
  ]
  return (
    <ProductsPageTemplate
      lang="en"
      heroImg="/hero-pauses-gourmandes.webp"
      heroAlt="Afternoon break by L'Écrin Traiteur: choux, macarons and babka"
      surtitre="Afternoon treats"
      heroTitle="Afternoon breaks delivered in Paris"
      heroSubtitle="Madeleines, macarons, loaf cakes, tartlets and fruit skewers, delivered at break time across Paris and Île-de-France."
      faits={c.faits}
      essentiel={c.essentiel}
      formules={c.formules}
      produits={c.produits}
      sections={c.sections}
      seoArticle={SEO_ARTICLE}
      faq={FAQ}
      basePath="/creations/pauses-gourmandes"
      devisPrestation="Goûter"
      devisTitre={{ fr: "An afternoon break to organise?", en: "An afternoon break to organise?" }}
      nomJsonLd="Afternoon treats"
    />
  )
}
