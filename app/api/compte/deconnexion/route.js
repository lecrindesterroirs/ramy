import { retirerSession } from '@/lib/sessionCompte'

export async function POST() {
  retirerSession()
  return Response.json({ ok: true })
}
