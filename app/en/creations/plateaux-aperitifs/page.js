import ProductsPageTemplate from '../../../../components/ProductsPageTemplate'
import { categorieAperitifs, ht } from '../../../../lib/categoriesVue'
import { MINIMUM } from '../../../../lib/prixEntree'
import { LIV } from '../../../../lib/calculsPrix'

/*
  Index anglais, rendu côté serveur avec le même gabarit et les mêmes calculs
  que la page française (refonte du 23/10/2026) : prix et photos lus dans les
  fiches françaises, noms dans les surcouches lib/en/produits/*.
*/
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

export default function Page() {
  const c = categorieAperitifs(true)
  const FAQ = [
    { q: 'How much do aperitif platters cost?', a: c.essentiel },
    { q: 'Are the platters halal?', a: 'Yes. All the savoury food is halal and pork-free, alcohol-free and at no extra cost. The charcuterie platter is cured beef and poultry.' },
  ]
  return (
    <ProductsPageTemplate
      lang="en"
      heroImg="/plateau-crudites.webp"
      heroAlt="Crudités and dips platter by L'Écrin Traiteur"
      surtitre="Aperitif platters"
      heroTitle="Aperitif platters for the office"
      heroSubtitle="Platters to share for afterworks and drinks: sandwiches, cheese, salmon, crudités and sweet things, delivered across Paris and Île-de-France."
      faits={c.faits}
      essentiel={c.essentiel}
      formules={c.formules}
      produits={c.produits}
      sections={c.sections}
      seoArticle={SEO_ARTICLE}
      faq={FAQ}
      basePath="/creations/plateaux-aperitifs"
      devisPrestation="Cocktail / Buffet"
      devisTitre={{ fr: "Drinks to organise?", en: "Drinks to organise?" }}
      nomJsonLd="Aperitif platters"
    />
  )
}
