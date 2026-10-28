'use client'

import ProductsPageTemplate from '../../../../components/ProductsPageTemplate'
import { PLATEAUX } from '../../../creations/plateaux-aperitifs/data'
import { enPlateauAperitif, FAMILLES_EN } from '../../../../lib/en/produits/plateauxAperitifs'

/* Index plateaux apéritifs en anglais. Ces plateaux n'ont pas de prix
   affiché : ils se chiffrent au format et à l'effectif. */

const PRODUITS = PLATEAUX
  .filter(p => enPlateauAperitif(p.id))
  .map(p => ({
    id: p.id,
    name: enPlateauAperitif(p.id).nom,
    label: p.prix ? `${FAMILLES_EN[p.famille] || 'Aperitif'} · €${p.prix.toFixed(2)} excl. VAT` : `${FAMILLES_EN[p.famille] || 'Aperitif'} · On quote`,
    img: p.img,
  }))

const SEO_ARTICLE = `
  <h2>Aperitif platters to share for your Paris afterworks</h2>
  <p>The <strong>sharing aperitif platter</strong> is what makes an afterwork, a leaving party or a corporate reception work. Put in the middle of the table, it gets people standing together: sandwich platters, cheese and charcuterie boards, signature creations.</p>
  <h2>Artisan assortments, built to the occasion</h2>
  <p>Each platter is a selection of bites made from <strong>sourced ingredients</strong>: mini baguettes, club sandwiches, wraps, mini burgers, aged cheeses, halal charcuterie, smoked salmon, crudités and dips, or Asian-inspired bites. We mix savoury and fresh so the buffet is balanced rather than heavy.</p>
  <h2>Halal and pork-free as standard</h2>
  <p>Our charcuterie board is <strong>halal and pork-free</strong>: air-dried beef, bresaola, Grisons beef, smoked turkey and smoked chicken. It means a mixed room can all reach for the same board, which is the whole reason we built it that way.</p>
  <h2>Delivered across Paris and Île-de-France from 6:30 am</h2>
  <p>Headcount, formats, dietary needs: we put together the right selection and send you a personalised quote within 24 hours. Order until 2 pm the day before, delivered straight to your venue.</p>
`

export default function PlateauxAperitifsEn({ bas }) {
  return (
    <ProductsPageTemplate sansBandeau bas={bas}
      lang="en"
      heroImg="/hero-plateaux-aperitifs-full.webp"
      heroTitle="Aperitif platters"
      heroSubtitle="Sandwiches, cheese, charcuterie and signature bites, on a board in the middle of the table."
      breadcrumb="Our menu, Aperitif platters"
      fallbackProducts={PRODUITS}
      basePath="/en/creations/plateaux-aperitifs"
      seoArticle={SEO_ARTICLE}
      editorial={{
        eyebrow: 'Built for standing events',
        title: 'Boards that get a room\ntalking to each other.',
        body: 'Platters to put in the middle of the table, generous enough that nobody has to ask whether there is more. Halal and pork-free as standard.',
      }}
    />
  )
}
