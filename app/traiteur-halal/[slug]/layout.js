import { alternatesPour } from '../../../lib/i18n'
import { slugsHalalEn } from '../../../lib/en/pages/halal'
import { HALAL_PAGES } from '../../../lib/halalPagesData'
import { ogImages } from '../../../lib/og'

/* Un slug inventé répond 404, pas 200. */
export const dynamicParams = false

export function generateStaticParams() {
  return HALAL_PAGES.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const page = HALAL_PAGES.find(p => p.slug === slug)
  if (!page) {
    return { title: "Traiteur halal d'entreprise | L'Écrin Traiteur" }
  }

  // Marque ajoutée seulement si le titre reste sous ~60 caractères : au-delà,
  // Google tronque et la fin (marque) ne sert à rien, autant garder le mot-clé entier.
  const withBrand = `${page.metaTitle} | L'Écrin Traiteur`
  const title = withBrand.length <= 60 ? withBrand : page.metaTitle

  return {
    title: { absolute: title },
    description: page.metaDescription,
    openGraph: {
      images: ogImages(page.heroImg || '/hero-petitdej.webp'),
      title,
      description: page.metaDescription,
      locale: 'fr_FR',
      type: 'website',
    },
    alternates: alternatesPour(`/traiteur-halal/${page.slug}`, { en: slugsHalalEn().includes(page.slug) }),
  }
}

export default function TraiteurHalalSousPageLayout({ children }) {
  return children
}
