'use client'

import ProductsPageTemplate from '../../../../components/ProductsPageTemplate'
import { BOXES } from '../../../creations/lunch-box/data'
import { enLunchBox } from '../../../../lib/en/produits/lunchBox'

/* Index lunch box en anglais. Prix et photos viennent du fichier français. */

const PRODUITS = BOXES
  .filter(b => enLunchBox(b.id))
  .map(b => ({
    id: b.id,
    name: b.nom,
    label: `${(enLunchBox(b.id).sousTitre || '').split('·')[0].trim()} · €${String(b.prix).replace(',', '.')}`,
    img: b.img,
  }))

const SEO_ARTICLE = `
  <h2>Lunch boxes for your Paris office lunches</h2>
  <p>The <strong>lunch box</strong> is the format for a working lunch that cannot stop: a sandwich, a starter and a dessert in one box, eaten at the desk or in the meeting room, with nothing to share out and nothing to clear. From <strong>€18.90 per person</strong>, delivered across Paris and Île-de-France.</p>
  <h2>Five recipes, each with a choice of starter and dessert</h2>
  <p>La Parisienne (chicken mayonnaise), L'Épicée (curry chicken), La Fermière (egg and Emmental), La Nordique (salmon and avocado) and L'Océane (tuna mayonnaise). Each box comes with a choice of starter — cucumber and chive salad or tomato and mozzarella — and a choice of dessert, plus a napkin and cutlery. Drink optional.</p>
  <h2>Sandwiches made the same morning</h2>
  <p>Our bread comes from our partner baker, in baguette or brioche, and the boxes are filled the morning of the delivery rather than the day before. It is the difference you taste at one o'clock.</p>
  <h2>Ordering your lunch boxes in Paris</h2>
  <p>Order until <strong>2 pm the day before</strong>, delivered from <strong>6:30 am</strong>. Any headcount, dietary needs catered for, the whole range halal and pork-free. Company invoice showing VAT, personalised quote within 24 hours.</p>
`

export default function LunchBoxEn() {
  return (
    <ProductsPageTemplate
      lang="en"
      heroImg="/hero-lunch-box.webp"
      heroTitle="Lunch boxes"
      heroSubtitle="A sandwich, a starter and a dessert in one box. For the working lunch that cannot stop."
      breadcrumb="Our menu, Lunch boxes"
      fallbackProducts={PRODUITS}
      basePath="/en/creations/lunch-box"
      seoArticle={SEO_ARTICLE}
      editorial={{
        eyebrow: 'For a lunch that keeps moving',
        title: 'Everything in one box.\nNothing to share out.',
        body: 'Five recipes, each with a choice of starter and dessert, filled the same morning with bread from our partner baker.',
      }}
    />
  )
}
