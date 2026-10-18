import { alternatesPourEn } from '../../../../lib/i18n'
import { HALAL_PAGES } from '../../../../lib/halalPagesData'
import { enHalal, slugsHalalEn } from '../../../../lib/en/pages/halal'
import { ogImages } from '../../../../lib/og'

/* Les trois pages sont traduites, donc un slug absent est inventé. */
export const dynamicParams = false

export function generateStaticParams() {
  return slugsHalalEn().map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = HALAL_PAGES.find(x => x.slug === slug)
  const en = p && enHalal(slug)
  if (!p || !en) return { title: "Halal corporate catering in Paris | L'Écrin Traiteur" }

  return {
    title: { absolute: `${en.metaTitle} | L'Écrin Traiteur` },
    description: en.metaDescription,
    alternates: alternatesPourEn(`/traiteur-halal/${slug}`),
    openGraph: {
      title: `${en.h1} | L'Écrin Traiteur`,
      description: en.heroDescription,
      images: ogImages(p.heroImg, en.h1),
      locale: 'en_GB',
      type: 'website',
    },
  }
}

export default function Layout({ children }) {
  return children
}
