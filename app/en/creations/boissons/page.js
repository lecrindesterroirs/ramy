import ProductsPageTemplate from '../../../../components/ProductsPageTemplate'
import { categorieBoissons, ht } from '../../../../lib/categoriesVue'
import { MINIMUM } from '../../../../lib/prixEntree'
import { LIV } from '../../../../lib/calculsPrix'

/*
  Index anglais, rendu côté serveur avec le même gabarit et les mêmes calculs
  que la page française (refonte du 23/10/2026) : prix et photos lus dans les
  fiches françaises, noms dans les surcouches lib/en/produits/*.
*/
const SEO_ARTICLE = `
  <h2>Artisan drinks for your corporate events in Paris</h2>
  <p>The drink is usually the most noticed detail, and the most neglected. An <strong>Alain Milliat</strong> juice on the table says something about your standards. A <strong>Mariage Frères</strong> tea in a meeting creates a different atmosphere from a supermarket teabag. L'Écrin Traiteur picks artisan drinks for every corporate event in Paris.</p>
  <h2>Our selection: Alain Milliat, Mariage Frères, Vergers de Plaisir</h2>
  <p>Our juices are made from whole fruit, with no concentrate and no added sugar. <strong>Alain Milliat</strong> juices (strawberry nectar, apple, pure orange) are known to anyone who cares about juice. The juices from <strong>les Vergers de Plaisir</strong> (Yvelines) come straight from the grower. <strong>Mariage Frères</strong> teas and our flasks of coffee or hot chocolate round out a range built for every point in the day.</p>
  <h2>Cold and hot, from the morning to the afternoon</h2>
  <p>For a <strong>breakfast</strong>: cold juices plus a flask of coffee or tea. For an <strong>afternoon break</strong>: cold alcohol-free drinks, organic infusions, seasonal juices. For a <strong>cocktail reception</strong>: Alain Milliat nectars plus sparkling waters. Our flasks hold their heat for several hours after delivery, which matters on a full-day offsite.</p>
  <h2>Ordering your drinks in Paris</h2>
  <p>Order until <strong>2 pm the day before</strong>. Delivered from <strong>6:30 am</strong>, Monday to Friday. Juices and cold drinks arrive <strong>with cups</strong>, so there is nothing for you to arrange. Drinks are easy to add to an existing pastry or dessert order, one delivery, everything together. Company invoice showing VAT.</p>
`

export default function Page() {
  const c = categorieBoissons(true)
  const FAQ = [
    { q: 'How much should we allow?', a: c.essentiel },
    { q: 'Do you serve alcohol?', a: 'No, the whole menu is alcohol-free. To raise a glass, we deliver an alcohol-free Chardonnay Blanc de Blancs.' },
  ]
  return (
    <ProductsPageTemplate
      lang="en"
      heroImg="/creations-boissons.webp"
      heroAlt="Alain Milliat juices and a coffee thermos"
      surtitre="Drinks"
      heroTitle="Drinks for the office"
      heroSubtitle="Alain Milliat juices, Mariage Frères teas, coffee in thermoses and water, delivered with your order."
      faits={c.faits}
      essentiel={c.essentiel}
      formules={c.formules}
      produits={c.produits}
      sections={c.sections}
      seoArticle={SEO_ARTICLE}
      faq={FAQ}
      basePath="/creations/boissons"
      devisPrestation="Petit-déjeuner"
      devisTitre={{ fr: "Drinks to order?", en: "Drinks to order?" }}
      nomJsonLd="Drinks"
    />
  )
}
