import { getTemoignages } from '../../../lib/wordpress'

export async function GET() {
  const data = await getTemoignages()
  return Response.json(data)
}
