import { getEquipe } from '../../../lib/wordpress'

export async function GET() {
  const data = await getEquipe()
  return Response.json(data)
}
