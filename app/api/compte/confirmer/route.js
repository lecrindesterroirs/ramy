/*
  Le clic sur le lien du mail de confirmation.

  La page /compte/confirmer appelle cette route en POST avec le jeton. Il ne
  part donc pas en GET vers une route d'API, où il se retrouverait dans les
  journaux du serveur, et il ne quitte pas notre domaine : c'est l'OS qui le
  vérifie, derrière.
*/
import { confirmer, ipDe } from '@/lib/compteOS'

export async function POST(request) {
  let b
  try { b = await request.json() } catch { return Response.json({ erreur: 'Requête illisible.' }, { status: 400 }) }
  const jeton = String(b.jeton ?? '').trim()
  if (!jeton) return Response.json({ erreur: 'Lien incomplet.' }, { status: 400 })

  const r = await confirmer(jeton, ipDe(request))
  if (!r?.ok) {
    return Response.json(
      { erreur: "Ce lien n'est plus valable : il a déjà servi, ou il a plus de 24 heures." },
      { status: 400 },
    )
  }
  return Response.json({ ok: true })
}
