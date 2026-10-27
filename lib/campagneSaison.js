// Campagne saisonnière du formulaire de devis : la case « Autre » du premier
// écran prend le nom de l'offre du moment. Dates alignées sur lib/promoBanner.js.
// Pour changer de campagne : les deux dates ici, et le libellé dans app/devis/page.js.
const DEBUT = '2026-10-28'
const FIN = '2026-11-01'

export function isHalloweenActive() {
  const now = new Date()
  return now >= new Date(DEBUT + 'T00:00:00') && now < new Date(FIN + 'T00:00:00')
}
