'use client'

import { usePathname } from 'next/navigation'
import RelatedLinks from './RelatedLinks'
import { guidesPour } from '../lib/guidesMaillage'

// Bloc « Guides pratiques » de fin de page : les guides du journal les plus utiles
// à cette page (budgets, quantités, idées). Les liens viennent de lib/guidesMaillage.js.
export default function GuidesPratiques({ background = '#FFFFFF' }) {
  const pathname = usePathname()
  const items = guidesPour(pathname)
  if (!items.length) return null
  return (
    <RelatedLinks
      eyebrow="Guides pratiques"
      title="Préparer votre commande : budgets, quantités et idées"
      items={items}
      columns={4}
      background={background}
    />
  )
}
