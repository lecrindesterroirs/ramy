/* « Mot de passe oublié ». Répond toujours ok : l'absence de compte ne doit
   pas se deviner depuis ce formulaire. */
import { demanderReinitialisation } from '@/lib/compteOS'

export async function POST(request) {
  let b
  try { b = await request.json() } catch { return Response.json({ ok: true }) }
  const email = String(b.email ?? '').trim().toLowerCase()
  if (email) await demanderReinitialisation(email)
  return Response.json({ ok: true })
}
