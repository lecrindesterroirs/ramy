import { notFound } from 'next/navigation'
import { CITIES } from '../../../../lib/citiesData'
import QuartierClient from './QuartierClient'

export default function QuartierPage({ params }) {
  const city = CITIES.find(c => c.slug === params.ville)
  if (!city?.quartiers) notFound()

  const q = city.quartiers.find(q => q.slug === params.quartier)
  if (!q) notFound()

  return <QuartierClient city={{ name: city.name, slug: city.slug }} q={q} />
}
