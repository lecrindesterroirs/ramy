/* L'historique de la personne connectée — pas celui de ses collègues. */
import { commandes } from '@/lib/compteOS'
import { jetonDeSession } from '@/lib/sessionCompte'

export async function GET() {
  const jeton = jetonDeSession()
  if (!jeton) return Response.json({ connecte: false }, { status: 401 })
  const liste = await commandes(jeton)
  if (liste === null) return Response.json({ connecte: false }, { status: 401 })
  return Response.json({ connecte: true, commandes: liste })
}
