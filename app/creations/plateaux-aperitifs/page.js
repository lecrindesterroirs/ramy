import ProductsPageTemplate from '../../../components/ProductsPageTemplate'
import { categorieAperitifs } from '../../../lib/categoriesVue'

/*
  Plateaux apéritifs. En-tête : plateau de crudités (23/10/2026), la photo de groupe hero-plateaux-aperitifs montrait des roulés de volaille qui ressemblent à du jambon.
  Page rendue côté serveur (refonte du 23/10/2026, audit design chantier 5) :
  formules et tableau calculés en tête, carte par sections avec filtres
  collants, texte replié dans « Bien choisir », une seule FAQ affichée et
  balisée. Données et prix : lib/categoriesVue.js.
*/
const SEO_ARTICLE = `
  <h2>Plateaux apéritifs pour entreprise : l'apéritif dinatoire sans logistique</h2>
  <p>Le <strong>plateau apéritif d'entreprise</strong> est le format des fins de journée réussies : afterwork d'équipe, apéritif dinatoire, célébration d'un projet livré, pot informel entre deux services. Pas de traiteur en cuisine, pas de vaisselle, des plateaux généreux posés sur la table, et la convivialité fait le reste. L'Écrin Traiteur livre vos apéritifs à Paris et en Île-de-France.</p>

  <h2>Des planches pensées pour le partage</h2>
  <p>Nos plateaux réunissent le meilleur de nos artisans : bouchées salées, produits de caractère, douceurs à picorer. Le format « à partager » casse la distance entre collègues, on tend le plateau, on compare, on discute. C'est précisément ce qu'on attend d'un apéritif d'équipe, et c'est ce qui le distingue d'un buffet formel.</p>

  <h2>Quelles quantités pour un afterwork ?</h2>
  <p>Comptez <strong>4 à 6 pièces par personne et par heure</strong> pour un apéritif de fin de journée. Pour un afterwork qui se prolonge au-delà de deux heures ou qui remplace le dîner, passez à 10-12 pièces en ajoutant des bouchées plus consistantes. Pensez aux boissons : jus Alain Milliat et eaux pétillantes complètent naturellement la commande.</p>

  <h2>Commander vos plateaux apéritifs à Paris</h2>
  <p>Commandez avant <strong>14h la veille</strong> en indiquant l'heure exacte de livraison, vos plateaux arrivent prêts à servir, présentation soignée. Facturation entreprise avec TVA. Pour un événement plus ambitieux, notre équipe compose des formats sur mesure sur devis, réponse sous 24h.</p>
`

export default function PlateauxAperitifs() {
  const c = categorieAperitifs(false)
  const FAQ = [
    { q: 'Combien coûtent les plateaux apéritifs ?', a: c.essentiel },
    { q: 'Combien de plateaux pour un afterwork ?', a: `${c.formules.tableau.lignes.map(l => `${l[0]} : ${l[1]} plateau${Number(l[1]) > 1 ? 'x' : ''}, ${l[2]} livré`).join(' ; ')}. Comptez 6 pièces par personne pour un apéritif d'une à deux heures.` },
    { q: 'Les plateaux sont-ils halal ?', a: "Oui. Tout le salé est halal et sans porc, sans alcool et sans supplément. Le plateau de charcuteries est au bœuf séché et à la volaille." },
  ]
  return (
    <ProductsPageTemplate
      heroImg="/plateau-crudites.webp"
      heroAlt="Plateau de crudités et dips L'Écrin Traiteur"
      surtitre="Apéritif d'entreprise"
      heroTitle="Plateaux apéritifs pour l'entreprise"
      heroSubtitle="Plateaux à partager pour vos afterworks et apéritifs dînatoires : sandwichs, fromages, saumon, crudités et douceurs, livrés à Paris et en Île-de-France."
      faits={c.faits}
      essentiel={c.essentiel}
      formules={c.formules}
      produits={c.produits}
      sections={c.sections}
      seoArticle={SEO_ARTICLE}
      faq={FAQ}
      basePath="/creations/plateaux-aperitifs"
      devisPrestation="Cocktail / Buffet"
      devisTitre={{ fr: 'Un apéritif à organiser ?', en: 'Drinks to organise?' }}
      nomJsonLd="Plateaux apéritifs"
    />
  )
}

