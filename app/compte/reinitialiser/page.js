import { Suspense } from 'react'
import ReinitialiserEcran from '@/components/compte/ReinitialiserEcran'

/*
  Le jeton du mail passe dans l'URL de cette page. Deux précautions :
  - referrer « no-referrer » : sans elle, le jeton partirait dans l'en-tête
    Referer de la première requête sortante de la page ;
  - noindex, hérité du layout de /compte et répété ici : une URL avec jeton
    n'a rien à faire dans un index.
*/
export const metadata = {
  title: 'Nouveau mot de passe · L\'Écrin Traiteur',
  referrer: 'no-referrer',
  robots: { index: false, follow: false },
}

export default function Page() {
  return (
    <Suspense fallback={<div className="cmd" />}>
      <ReinitialiserEcran />
    </Suspense>
  )
}
