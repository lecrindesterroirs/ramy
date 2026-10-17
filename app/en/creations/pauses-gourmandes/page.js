'use client'

import ProductsPageTemplate from '../../../../components/ProductsPageTemplate'
import { PAUSES } from '../../../creations/pauses-gourmandes/data'
import { enPause, prixEn } from '../../../../lib/en/produits/pausesGourmandes'

/*
  Index pause goûter en anglais. La grille est construite à partir des données
  françaises : seuls les noms et les formats passent par la surcouche. Les
  pièces non traduites n'apparaissent pas, pour ne jamais afficher une carte
  qui mène à une page française.
*/

const PRODUITS = PAUSES
  .filter(p => enPause(p.id))
  .map(p => {
    const prix = prixEn(p.prix)
    const en = enPause(p.id)
    // prix.note vaut « excl. VAT · 6 pieces », « excl. VAT · from » ou
    // « excl. VAT ». La carte attend « portion · montant » : on en tire la
    // portion, et « from » se rattache au montant plutôt qu'à la portion.
    const portion = prix ? prix.note.replace(/^excl\. VAT(\s·\s)?/, '') : ''
    const montant = prix ? `€${prix.montant}` : ''
    const label = portion === 'from'
      ? `from ${montant}`
      : (portion ? `${portion} · ${montant}` : montant)
    return { id: p.id, name: en.nom, label, img: p.img }
  })

const SEO_ARTICLE = `
  <h2>Afternoon treats for your Paris office</h2>
  <p>The afternoon break is the moment a team actually talks to each other. A few artisan sweet things on the table at four o'clock does more for a long afternoon than another round of coffee. L'Écrin Traiteur delivers them across Paris and Île-de-France, from <strong>€6 per person</strong>.</p>
  <h2>Made by our pastry partners, baked close to delivery</h2>
  <p>Madeleines, macarons, tartlets, choux buns, loaf cakes, cookies and brownies: each piece is shaped by hand and baked as close to the delivery as we can manage. We are happy to balance a platter with cut fresh fruit and individual desserts, so the table is not all sugar.</p>
  <h2>Large cakes to share, for birthdays and team moments</h2>
  <p>For a birthday, a leaving party or an onboarding worth marking, we also make <strong>large cakes to share</strong>: raspberry tart, hazelnut praline cake, fraisier, lemon meringue tart, strawberry roulade, panettone. Cut in front of everyone, which is the point.</p>
  <h2>Ordering your afternoon break in Paris</h2>
  <p>Order until <strong>2 pm the day before</strong>, delivered from <strong>6:30 am</strong> Monday to Friday. Minimum order €50 excl. VAT, delivery €29 excl. VAT in Paris and nearby towns. The whole menu is halal and pork-free. Company invoice showing VAT, quote within 24 hours.</p>
`

export default function PausesEn() {
  return (
    <ProductsPageTemplate
      lang="en"
      heroImg="/hero-pauses-gourmandes.webp"
      heroTitle="Afternoon treats"
      heroSubtitle="Madeleines, macarons, loaf cakes and cut fruit, delivered to your offices for the four o'clock break."
      breadcrumb="Our menu, Afternoon treats"
      fallbackProducts={PRODUITS}
      basePath="/en/creations/pauses-gourmandes"
      seoArticle={SEO_ARTICLE}
      editorial={{
        eyebrow: 'The four o’clock break, done properly',
        title: 'The simplest way to\nget a team talking.',
        body: 'Madeleines baked the same day, macarons by a named pastry chef, loaf cakes cut on a wooden board. A break worth leaving your desk for.',
      }}
    />
  )
}
