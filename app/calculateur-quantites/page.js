import InfoPage from '../../components/InfoPage'
import CalculateurQuantites from '../../components/CalculateurQuantites'
import { CALC, calcJsonLd } from '../../lib/calculateurPage'

/* Calculateur de quantités (25/10/2026) : page indexable. Calcul dans lib/calculateurQuantites.js,
   textes dans lib/calculateurPage.js, version iframe dans ./embed. */
export default function CalculateurPage() {
  const c = CALC.fr
  return (
    <InfoPage
      eyebrow={c.eyebrow}
      title={c.title}
      intro={c.intro}
      sections={c.sections}
      faq={c.faq}
      jsonLd={calcJsonLd('fr')}
      breadcrumb={c.breadcrumb}
    >
      <CalculateurQuantites lang="fr" />
    </InfoPage>
  )
}
