/*
  Chemins des animations traduites, dans un module à part.

  Pourquoi un fichier séparé : le slug d'une animation est dérivé de son nom
  français par slugAnim(), donc il faut lire les données françaises pour le
  calculer. Importer app/creations/… depuis lib/i18n.js créerait un cycle,
  puisque la fiche française importe lib/i18n.js pour ses hreflang.
*/

import { ANIMATIONS, slugAnim } from '../../../app/creations/animations-culinaires/data'
import { idsAnimationsEn } from './animations'

export function cheminsAnimationsEn() {
  const traduites = idsAnimationsEn()
  return ANIMATIONS
    .filter(a => traduites.includes(a.id))
    .map(a => `/creations/animations-culinaires/${slugAnim(a.nom)}`)
}
