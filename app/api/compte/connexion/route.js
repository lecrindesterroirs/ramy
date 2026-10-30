/*
  Connexion. Le jeton rendu par l'OS est posé dans un cookie httpOnly et ne
  traverse jamais le JavaScript de la page.

  Le message d'échec est le même quelle que soit la cause — adresse inconnue
  ou mot de passe faux. Distinguer les deux dirait à un inconnu quelles
  adresses ont un compte.
*/
import { connecter } from '@/lib/compteOS'
import { poserSession } from '@/lib/sessionCompte'

const ECHEC = 'Adresse ou mot de passe incorrect.'

export async function POST(request) {
  let b
  try { b = await request.json() } catch { return Response.json({ erreur: ECHEC }, { status: 401 }) }

  const email = String(b.email ?? '').trim().toLowerCase()
  const motDePasse = String(b.motDePasse ?? '')
  if (!email || !motDePasse) return Response.json({ erreur: ECHEC }, { status: 401 })

  const r = await connecter({ email, motDePasse })
  if (!r?.ok || !r.jeton) return Response.json({ erreur: ECHEC }, { status: 401 })

  poserSession(r.jeton)
  return Response.json({ ok: true, profil: r.profil || null })
}
