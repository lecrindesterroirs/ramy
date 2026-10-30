import { Suspense } from 'react'
import ConnexionEcran from '@/components/compte/ConnexionEcran'

export const metadata = { title: 'Votre espace · L\'Écrin Traiteur' }

export default function Page() {
  return (
    <Suspense fallback={<div className="cmd" />}>
      <ConnexionEcran />
    </Suspense>
  )
}
