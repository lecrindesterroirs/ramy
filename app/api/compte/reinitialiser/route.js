import { reinitialiser, ipDe } from '@/lib/compteOS'

export async function POST(request) {
  let b
  try { b = await request.json() } catch { return Response.json({ erreur: 'Requête illisible.' }, { status: 400 }) }
  const motDePasse = String(b.motDePasse ?? '')
  if (motDePasse.length < 8) {
    return Response.json({ erreur: 'Votre mot de passe doit faire au moins 8 caractères.' }, { status: 400 })
  }
  const r = await reinitialiser({ jeton: String(b.jeton ?? ''), motDePasse }, ipDe(request))
  if (!r?.ok) return Response.json({ erreur: 'Ce lien n\'est plus valable. Redemandez-en un.' }, { status: 400 })
  return Response.json({ ok: true })
}
