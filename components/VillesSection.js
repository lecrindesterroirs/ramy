import { CITIES } from '../lib/citiesData'
import VillesSectionClient from './VillesSectionClient'

// Composant serveur : lit lib/citiesData.js ici et ne transmet au navigateur que
// ce que la section affiche. Avant, l'import direct dans un composant client
// ajoutait 190 Ko compressés de textes de villes à chaque page.
export default function VillesSection({ lang = 'fr' }) {
  const villes = CITIES.map(({ slug, name, region }) => ({ slug, name, region }))
  return <VillesSectionClient lang={lang} villes={villes} />
}
