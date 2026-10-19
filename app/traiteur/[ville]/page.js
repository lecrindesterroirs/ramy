import { notFound } from 'next/navigation'
import { CITIES } from '../../../lib/citiesData'
import { PDJ_VILLES } from '../../../lib/pdjVillesData'
import { PLATEAUX_VILLES } from '../../../lib/plateauxVillesData'
import { CITY_NEIGHBORS } from '../../../lib/cityNeighbors'
import { OCCASIONS } from '../../../lib/occasionsData'
import VilleClient from './VilleClient'

export default function CityPage({ params }) {
  const city = CITIES.find(c => c.slug === params.ville)
  if (!city) notFound()

  // Maillage local : communes limitrophes desservies
  const neighbors = (CITY_NEIGHBORS[city.slug] || [])
    .map(slug => CITIES.find(c => c.slug === slug))
    .filter(Boolean)
    .slice(0, 4)
    .map(c => ({ slug: c.slug, name: c.name }))

  // Pages « petit-déjeuner » et « plateaux repas » dédiées à la ville, si elles existent
  const pdj = PDJ_VILLES.find(p => p.slug === city.slug)
  const plateaux = (PLATEAUX_VILLES || []).find(p => p.slug === city.slug)

  return (
    <VilleClient
      city={city}
      neighbors={neighbors}
      pdjPage={pdj ? { slug: pdj.slug } : null}
      plateauxPage={plateaux ? { slug: plateaux.slug } : null}
      occasions={OCCASIONS.map(o => ({ slug: o.slug, name: o.name }))}
    />
  )
}
