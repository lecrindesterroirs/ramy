import { alternatesPour } from '../../../../lib/i18n'
import { ogImages } from '../../../../lib/og'
import { textes, CHEMIN, IMG } from '../../../../lib/afterworkFiche'

const T = textes('fr')

export const metadata = {
  title: { absolute: T.meta.title },
  description: T.meta.description,
  alternates: alternatesPour(CHEMIN, { en: true }),
  openGraph: {
    images: ogImages(IMG),
    title: T.meta.title,
    description: T.meta.og,
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
