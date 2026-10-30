/*
  La session d'un client connecté (30/10/2026).

  Le jeton vit dans un cookie httpOnly : le JavaScript de la page ne peut pas
  le lire, donc un script tiers injecté ne peut pas l'emporter. C'est aussi
  pour cela qu'il n'est PAS dans localStorage, où tout le monde le lirait.

  SameSite=Lax empêche qu'un autre site déclenche une requête authentifiée au
  nom du client, et Secure le réserve au HTTPS — sauf en développement, où le
  site tourne en clair sur localhost.
*/

import { cookies } from 'next/headers'

const NOM = 'lecrin_session'
const DUREE = 30 * 24 * 60 * 60   // trente jours, en secondes

export function poserSession(jeton) {
  cookies().set(NOM, jeton, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: DUREE,
  })
}

export function retirerSession() {
  cookies().set(NOM, '', { httpOnly: true, path: '/', maxAge: 0 })
}

export function jetonDeSession() {
  return cookies().get(NOM)?.value || null
}
