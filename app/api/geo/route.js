// Renvoie la localisation approximative du visiteur, telle que Vercel la déduit
// de son adresse IP (en-têtes x-vercel-ip-*). Sert à enrichir PostHog, dont la
// base de géolocalisation donne rarement la ville. Aucune adresse IP n'est
// renvoyée ni conservée ici.
export const dynamic = 'force-dynamic'

const lire = (headers, nom) => {
  const v = headers.get(nom)
  if (!v) return null
  try { return decodeURIComponent(v) } catch { return v }
}

export async function GET(request) {
  const h = request.headers
  return Response.json(
    {
      ville: lire(h, 'x-vercel-ip-city'),
      region: lire(h, 'x-vercel-ip-country-region'),
      pays: lire(h, 'x-vercel-ip-country'),
      code_postal: lire(h, 'x-vercel-ip-postal-code'),
    },
    { headers: { 'Cache-Control': 'private, no-store' } },
  )
}
