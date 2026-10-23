import { CITIES } from '../lib/citiesData'
import VillesSectionClient from './VillesSectionClient'

// Composant serveur : lit lib/citiesData.js ici et ne transmet au navigateur que
// ce que la section affiche. Avant, l'import direct dans un composant client
// ajoutait 190 Ko compressés de textes de villes à chaque page.
// Six villes seulement (audit du 22/10/2026 : 26 cartes allongeaient l'accueil
// mobile) ; le lien « Voir toutes les zones » mène à /traiteur.
const SIX = ['paris', 'la-defense', 'boulogne-billancourt', 'neuilly-sur-seine', 'levallois-perret', 'issy-les-moulineaux']

export default function VillesSection({ lang = 'fr' }) {
  const villes = SIX.map(s => CITIES.find(c => c.slug === s)).filter(Boolean)
    .map(({ slug, name, region }) => ({ slug, name, region }))
  return <VillesSectionClient lang={lang} villes={villes} />
}
