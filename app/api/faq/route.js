import { getFAQ } from '../../../lib/wordpress'

export async function GET() {
  const data = await getFAQ()
  return Response.json(data)
}
