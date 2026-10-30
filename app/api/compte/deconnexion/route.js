import { retirerSession, retirerBonjour } from '@/lib/sessionCompte'

export async function POST() {
  retirerSession()
  retirerBonjour()
  return Response.json({ ok: true })
}
