import InfoPage from '../../../components/InfoPage'
import CalculateurQuantites from '../../../components/CalculateurQuantites'
import { CALC, calcJsonLd } from '../../../lib/calculateurPage'
import { alternatesPourEn } from '../../../lib/i18n'
import { ogImages } from '../../../lib/og'

// Version anglaise du calculateur de quantités (25/10/2026), même composant que la page française.
export const metadata = {
  title: { absolute: CALC.en.metaTitle },
  description: CALC.en.description,
  alternates: alternatesPourEn('/calculateur-quantites'),
  openGraph: {
    images: ogImages('/hero-petitdej.webp', "L'Écrin Traiteur, corporate caterer in Paris"),
    title: CALC.en.metaTitle,
    description: CALC.en.description,
    locale: 'en_GB',
    type: 'website',
  },
}

export default function CalculatorPageEn() {
  const c = CALC.en
  return (
    <InfoPage
      lang="en"
      eyebrow={c.eyebrow}
      title={c.title}
      intro={c.intro}
      sections={c.sections}
      faq={c.faq}
      jsonLd={calcJsonLd('en')}
      breadcrumb={c.breadcrumb}
    >
      <CalculateurQuantites lang="en" />
    </InfoPage>
  )
}
