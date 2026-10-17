/*
  Image de partage (LinkedIn, WhatsApp, Slack, X).

  Règle : chaque page partage SA propre photo, celle qu'elle affiche déjà en
  haut. Rien n'est inventé ni choisi à la main — si la photo de la page change,
  l'aperçu de partage change avec elle. 239 pages se partageaient la même image
  avant le 17 octobre 2026.

  Les cartes sont pré-générées dans /public/og au format 1200x630 (le format
  attendu par les réseaux), recadrées depuis la photo d'origine, avec un voile
  calibré sur la luminosité de la photo et le logotype en bas à gauche.
  Script : scripts/build-og.py, à relancer quand une photo est ajoutée.

  Les pages sans photo propre (mentions légales, /contact, /devis…) gardent
  l'image par défaut : personne ne les partage.
*/
import cartes from './ogCartes.json'

export const OG_DEFAUT = '/og-image.jpg'
export const OG_ALT = "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France"

/** '/prod-madeleines.webp' → '/og/prod-madeleines.jpg' si la carte existe. */
export function ogImage(photo) {
  if (!photo) return OG_DEFAUT
  const base = String(photo).replace(/^\//, '').replace(/\.(webp|jpe?g|png)$/i, '')
  return cartes.includes(base) ? `/og/${base}.jpg` : OG_DEFAUT
}

/** Bloc `images` prêt à poser dans openGraph. */
export function ogImages(photo, alt) {
  return [{ url: ogImage(photo), width: 1200, height: 630, alt: alt || OG_ALT }]
}
