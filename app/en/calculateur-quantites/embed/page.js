import CalculateurQuantites from '../../../../components/CalculateurQuantites'

// Version intégrable anglaise : voir app/calculateur-quantites/embed/page.js.
export const metadata = {
  title: { absolute: "Quantity calculator | L'Écrin Traiteur" },
  alternates: { canonical: '/en/calculateur-quantites' },
  robots: { index: false, follow: true },
}

export default function CalculatorEmbedEn() {
  return (
    <main lang="en" style={{ background: '#FFFFFF', padding: '20px 16px' }}>
      <CalculateurQuantites lang="en" embed />
    </main>
  )
}
