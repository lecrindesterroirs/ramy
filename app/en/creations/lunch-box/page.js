import ProductsPageTemplate from '../../../../components/ProductsPageTemplate'
import { categorieLunchBox, ht } from '../../../../lib/categoriesVue'
import { MINIMUM, LUNCHBOX_DES } from '../../../../lib/prixEntree'
import { LIV } from '../../../../lib/calculsPrix'

/*
  Index anglais, rendu côté serveur avec le même gabarit et les mêmes calculs
  que la page française (refonte du 23/10/2026) : prix et photos lus dans les
  fiches françaises, noms dans les surcouches lib/en/produits/*.
*/
const SEO_ARTICLE = `
  <h2>Lunch boxes for your Paris office lunches</h2>
  <p>The <strong>lunch box</strong> is the format for a working lunch that cannot stop: a sandwich, a starter and a dessert in one box, eaten at the desk or in the meeting room, with nothing to share out and nothing to clear. From <strong>${ht(LUNCHBOX_DES, true)} per person</strong>, delivered across Paris and Île-de-France.</p>
  <h2>Five recipes, each with a choice of starter and dessert</h2>
  <p>La Parisienne (chicken mayonnaise), L'Épicée (curry chicken), La Fermière (egg and Emmental), La Nordique (salmon and avocado) and L'Océane (tuna mayonnaise). Each box comes with a choice of starter (cucumber and chive salad or tomato and mozzarella) and a choice of dessert, plus a napkin and cutlery. Drink optional.</p>
  <h2>Sandwiches made the same morning</h2>
  <p>Our bread comes from our partner baker, in baguette or brioche, and the boxes are filled the morning of the delivery rather than the day before. It is the difference you taste at one o'clock.</p>
  <h2>Ordering your lunch boxes in Paris</h2>
  <p>Order until <strong>2 pm the day before</strong>, delivered from <strong>6:30 am</strong>. Any headcount, dietary needs catered for, the whole range halal and pork-free. Company invoice showing VAT, personalised quote within 24 hours.</p>
`

export default function Page() {
  const c = categorieLunchBox(true)
  const FAQ = [
    { q: 'How much does a lunch box cost?', a: c.essentiel },
    { q: 'Can we choose the bread?', a: 'Yes: each sandwich is made on baguette or brioche bread, your choice, to state when you order.' },
  ]
  return (
    <ProductsPageTemplate
      lang="en"
      heroImg="/hero-lunch-box.webp"
      heroAlt="L'Écrin Traiteur lunch box: baguette sandwich and kraft bag"
      surtitre="Lunch boxes"
      heroTitle="Corporate lunch boxes in Paris"
      heroSubtitle="A sandwich on baguette or brioche bread, a starter and a dessert, napkin and cutlery included, delivered across Paris and Île-de-France."
      faits={c.faits}
      essentiel={c.essentiel}
      formules={c.formules}
      produits={c.produits}
      sections={c.sections}
      seoArticle={SEO_ARTICLE}
      faq={FAQ}
      basePath="/creations/lunch-box"
      devisPrestation="Plateaux repas"
      devisTitre={{ fr: "Lunch boxes to order?", en: "Lunch boxes to order?" }}
      nomJsonLd="Lunch boxes"
    />
  )
}
