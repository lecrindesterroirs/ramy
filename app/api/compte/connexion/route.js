/*
  Connexion. Le jeton rendu par l'OS est posé dans un cookie httpOnly et ne
  traverse jamais le JavaScript de la page.

  Le message d'échec est le même quelle que soit la cause — adresse inconnue
  ou mot de passe faux. Distinguer les deux dirait à un inconnu quelles
  adresses ont un compte.
*/
import { connecter, ipDe } from '@/lib/compteOS'
import { poserSession, poserBonjour } from '@/lib/sessionCompte'

/*
  Un seul message, quelle que soit la cause — adresse inconnue, mot de passe
  faux, adresse pas encore confirmée, ou compte fermé après plusieurs essais.
  Distinguer le compte fermé, comme je l'avais fait d'abord, suffisait à
  savoir si une adresse a un compte : huit essais faux, et la réponse
  changeait. D'où la seconde phrase, dite à tout le monde.
*/
const ECHEC = "Adresse ou mot de passe incorrect. Après plusieurs essais, patientez un quart d'heure."


export async function POST(request) {
  let b
  try { b = await request.json() } catch { return Response.json({ erreur: ECHEC }, { status: 401 }) }

  const email = String(b.email ?? '').trim().toLowerCase()
  const motDePasse = String(b.motDePasse ?? '')
  if (!email || !motDePasse) return Response.json({ erreur: ECHEC }, { status: 401 })

  const r = await connecter({ email, motDePasse }, ipDe(request))
  if (!r?.ok || !r.jeton) return Response.json({ erreur: ECHEC }, { status: 401 })

  poserSession(r.jeton)
  poserBonjour(r.profil)   // pour le « Bonjour Prénom » de la navigation
  return Response.json({ ok: true, profil: r.profil || null })
}
