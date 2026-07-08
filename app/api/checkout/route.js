// Route archivée, paiement en ligne désactivé
export async function POST() {
  return Response.json({ error: 'Commande en ligne temporairement désactivée' }, { status: 503 })
}
