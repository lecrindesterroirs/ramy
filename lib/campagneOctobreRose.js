// Campagne Octobre Rose — dates alignées sur components/PromoBanner.js.
// Centralise la détection de période + la couleur, pour que tous les CTA
// "devis" du site (Navbar, Hero, MobileCTA...) basculent en rose ensemble.
const DEBUT = '2026-09-25'
const FIN = '2026-11-01'

export function isOctobreRoseActive() {
  const now = new Date()
  return now >= new Date(DEBUT + 'T00:00:00') && now < new Date(FIN + 'T00:00:00')
}

export const OCTOBRE_ROSE_ACCENT = '#E27FA0'
