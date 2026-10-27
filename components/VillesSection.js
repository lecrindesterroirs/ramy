import { CITIES } from '../lib/citiesData'
import VillesSectionClient from './VillesSectionClient'

// Composant serveur : lit lib/citiesData.js ici et ne transmet au navigateur que
// ce que la section affiche. Avant, l'import direct dans un composant client
// ajoutait 190 Ko compressés de textes de villes à chaque page.
// Toutes les villes partent au navigateur, mais le mobile n'en montre que six
// (28/10/2026). L'audit du 22/10 avait réduit la liste à six parce que 26 cartes
// allongeaient l'accueil mobile — le problème était la hauteur sur téléphone,
// pas les liens eux-mêmes, qui irriguent les pages villes depuis la page la
// plus forte du site. Les six premières sont donc celles qui restent visibles
// sur mobile ; les autres n'apparaissent qu'à partir de 769 px (CSS dans
// VillesSectionClient). Le poids reste négligeable : trois champs courts par
// ville, pas les textes de lib/citiesData.
const TETE = ['paris', 'la-defense', 'boulogne-billancourt', 'neuilly-sur-seine', 'levallois-perret', 'issy-les-moulineaux']

export default function VillesSection({ lang = 'fr' }) {
  const tete = TETE.map(s => CITIES.find(c => c.slug === s)).filter(Boolean)
  const reste = CITIES.filter(c => !TETE.includes(c.slug))
  const villes = [...tete, ...reste].map(({ slug, name, region }) => ({ slug, name, region }))
  return <VillesSectionClient lang={lang} villes={villes} />
}
