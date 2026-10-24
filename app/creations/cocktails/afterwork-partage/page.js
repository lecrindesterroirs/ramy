import GalleryFiche from '../../../../components/GalleryFiche'
import { textes, IMG, GALERIE, prixNombreFr } from '../../../../lib/afterworkFiche'

/* Fiche produit « Afterwork à partager » : textes et prix dans lib/afterworkFiche.js. */
export default function AfterworkPartage() {
  const T = textes('fr')
  return (
    <GalleryFiche
      title={T.title}
      subtitle={T.subtitle}
      img={IMG}
      gallery={GALERIE}
      price={prixNombreFr}
      priceNote={T.priceNote}
      description={T.description}
      sections={T.sections}
      related={T.related}
      relatedTitle={T.relatedTitle}
      breadcrumb={T.breadcrumb}
      backHref={T.backHref}
      backLabel={T.backLabel}
      seoEyebrow={T.seoEyebrow}
      seoTitle={T.seoTitle}
      seoHtml={T.seoHtml}
      devisPrestation="Cocktail / Buffet"
      devisTitre={T.devisTitre}
      devisSousTitre={T.devisSousTitre}
    />
  )
}
