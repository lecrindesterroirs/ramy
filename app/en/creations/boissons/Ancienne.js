'use client'

import ProductsPageTemplate from '../../../../components/ProductsPageTemplate'
import { BOISSONS } from '../../../../lib/boissonsData'
import { enBoisson, qtyEn } from '../../../../lib/en/produits/boissons'

/* Index boissons en anglais. Prix et contenances viennent du fichier français. */

const PRODUITS = BOISSONS
  .filter(b => enBoisson(b.id))
  .map(b => ({
    id: b.id,
    name: enBoisson(b.id).name,
    label: `${qtyEn(b.qty)} · €${b.price?.toFixed(2)}`,
    img: b.img,
  }))

const SEO_ARTICLE = `
  <h2>Artisan drinks for your corporate events in Paris</h2>
  <p>The drink is usually the most noticed detail, and the most neglected. An <strong>Alain Milliat</strong> juice on the table says something about your standards. A <strong>Mariage Frères</strong> tea in a meeting creates a different atmosphere from a supermarket teabag. L'Écrin Traiteur picks artisan drinks for every corporate event in Paris.</p>
  <h2>Our selection: Alain Milliat, Mariage Frères, Vergers de Plaisir</h2>
  <p>Our juices are made from whole fruit, with no concentrate and no added sugar. <strong>Alain Milliat</strong> juices (strawberry nectar, apple, pure orange) are known to anyone who cares about juice. The juices from <strong>les Vergers de Plaisir</strong> (Yvelines) come straight from the grower. <strong>Mariage Frères</strong> teas and our flasks of coffee or hot chocolate round out a range built for every point in the day.</p>
  <h2>Cold and hot, from the morning to the afternoon</h2>
  <p>For a <strong>breakfast</strong>: cold juices plus a flask of coffee or tea. For an <strong>afternoon break</strong>: cold drinks, organic infusions, seasonal juices. For a <strong>cocktail reception</strong>: Alain Milliat nectars plus sparkling waters. Our flasks hold their heat for several hours after delivery, which matters on a full-day offsite.</p>
  <h2>Ordering your drinks in Paris</h2>
  <p>Order until <strong>2 pm the day before</strong>. Delivered from <strong>6:30 am</strong>, Monday to Friday. Juices and cold drinks arrive <strong>with cups</strong>, so there is nothing for you to arrange. Drinks are easy to add to an existing pastry or dessert order, one delivery, everything together. Company invoice showing VAT.</p>
`

export default function BoissonsEn({ bas }) {
  return (
    <ProductsPageTemplate sansBandeau bas={bas} sucre
      lang="en"
      heroImg="/boissons-hero.webp"
      heroTitle="Drinks"
      heroSubtitle="Alain Milliat juices, Mariage Frères teas, coffee and water. Drinks chosen for how they taste."
      breadcrumb="Our menu, Drinks"
      fallbackProducts={PRODUITS}
      basePath="/en/creations/boissons"
      seoArticle={SEO_ARTICLE}
      editorial={{
        eyebrow: 'Built to go with every moment',
        title: 'Exceptional juice and\nartisan drinks.',
        body: 'Whole-fruit Alain Milliat juices, Mariage Frères teas, coffee served in flasks: the drink is the detail your guests notice. We choose it as carefully as the rest of the table.',
      }}
    />
  )
}
