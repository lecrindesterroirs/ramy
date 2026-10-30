/* Le profil du client connecté, et sa mise à jour. */
import { profil, majProfil } from '@/lib/compteOS'
import { jetonDeSession, poserBonjour } from '@/lib/sessionCompte'

export async function GET() {
  const jeton = jetonDeSession()
  if (!jeton) return Response.json({ connecte: false }, { status: 401 })
  const p = await profil(jeton)
  if (!p) return Response.json({ connecte: false }, { status: 401 })
  return Response.json({ connecte: true, profil: p })
}

export async function PATCH(request) {
  const jeton = jetonDeSession()
  if (!jeton) return Response.json({ connecte: false }, { status: 401 })
  let b
  try { b = await request.json() } catch { return Response.json({ erreur: 'Requête illisible.' }, { status: 400 }) }
  const p = await majProfil(jeton, b)
  if (!p) return Response.json({ erreur: 'Mise à jour impossible.' }, { status: 400 })
  poserBonjour(p)   // il vient peut-être de corriger son nom
  return Response.json({ ok: true, profil: p })
}
