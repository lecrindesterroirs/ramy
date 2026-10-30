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

/*
  Le prénom, pour la navigation (31/10/2026).

  Le bandeau du site doit pouvoir écrire « Bonjour Ramy » sans interroger
  l'OS à chaque page — un visiteur connecté en verrait une requête par page,
  et le prénom n'arriverait qu'après coup, en sautillant.

  Ce cookie-là n'est donc PAS httpOnly : le JavaScript de la page le lit.
  C'est volontaire et sans conséquence — il ne contient qu'un prénom, jamais
  le jeton. Même durée que la session, posé et retiré avec elle.
*/
const BONJOUR = 'lecrin_bonjour'

/** Le premier mot du nom : « Ramy Abdelaty » → « Ramy ». */
export const prenomDe = (profil) =>
  String(profil?.nom || '').trim().split(/\s+/)[0]?.slice(0, 24) || ''

export function poserBonjour(profil) {
  const p = prenomDe(profil)
  if (!p) return retirerBonjour()
  cookies().set(BONJOUR, encodeURIComponent(p), {
    httpOnly: false,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: DUREE,
  })
}

export function retirerBonjour() {
  cookies().set(BONJOUR, '', { httpOnly: false, path: '/', maxAge: 0 })
}
