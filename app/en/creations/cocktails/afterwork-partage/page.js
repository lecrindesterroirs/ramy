import GalleryFiche from '../../../../../components/GalleryFiche'
import { textes, IMG, GALERIE, prixNombreEn } from '../../../../../lib/afterworkFiche'

/* English fiche for the sharing afterwork: texts and price in lib/afterworkFiche.js. */
export default function AfterworkPartageEn() {
  const T = textes('en')
  return (
    <GalleryFiche
      lang="en"
      title={T.title}
      subtitle={T.subtitle}
      img={IMG}
      gallery={GALERIE}
      price={prixNombreEn}
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
