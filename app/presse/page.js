import InfoPage from '../../components/InfoPage'
import { PRESSE, presseJsonLd } from '../../lib/pressePage'
import { alternatesPour } from '../../lib/i18n'
import { ogImages } from '../../lib/og'

// Kit média (25/10/2026) : textes dans lib/pressePage.js, version anglaise dans app/en/presse.
export const metadata = {
  title: { absolute: PRESSE.fr.metaTitle },
  description: PRESSE.fr.description,
  alternates: alternatesPour('/presse', { en: true }),
  openGraph: {
    images: ogImages('/octobre-rose-buffet-entreprise.webp', "Buffet de petit-déjeuner livré par L'Écrin Traiteur"),
    title: PRESSE.fr.metaTitle,
    description: PRESSE.fr.description,
  },
}

export default function PressePage() {
  const c = PRESSE.fr
  return (
    <InfoPage
      eyebrow={c.eyebrow}
      title={c.title}
      intro={c.intro}
      sections={c.sections}
      jsonLd={presseJsonLd('fr')}
      breadcrumb={c.breadcrumb}
    />
  )
}
