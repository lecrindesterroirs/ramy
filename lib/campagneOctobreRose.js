// Campagne saisonnière qui colore les CTA « devis » (Navbar, Hero, MobileCTA)
// et le formulaire. Octobre Rose est terminé : arrêté le 28/10/2026 à la
// demande de Ramy, qui a voulu rendre au site son habillage normal avant
// Halloween. La fonction est gardée (et renvoie false) pour que les quatre
// appelants n'aient pas à bouger d'une campagne à l'autre : il suffira de
// remettre des dates ici et une couleur l'an prochain.
const DEBUT = '2026-09-25'
const FIN = '2026-10-28'   // arrêt anticipé — la campagne allait jusqu'au 1er novembre

export function isOctobreRoseActive() {
  const now = new Date()
  return now >= new Date(DEBUT + 'T00:00:00') && now < new Date(FIN + 'T00:00:00')
}

export const OCTOBRE_ROSE_ACCENT = '#E27FA0'
