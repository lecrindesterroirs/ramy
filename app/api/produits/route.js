import { getProduits } from '../../../lib/wordpress'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const categorie = searchParams.get('categorie') || null
  const data = await getProduits()
  const filtered = categorie
    ? data.filter(p => p.categories.includes(categorie))
    : data
  return Response.json(filtered)
}
