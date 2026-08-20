import { logDemandeToOS } from '@/lib/os-demande'

export async function POST(req) {
  try {
    const data = await req.json()
    const { email, telephone } = data

    // Besoin d'au moins un contact pour faire du suivi
    if (!email && !telephone) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 })
    }

    // Insérer le brouillon en arrière-plan (silencieux)
    await logDemandeToOS({
      email: email || null,
      telephone: telephone || null,
      nom: data.nom || null,
      societe: data.societe || null,
      prestation: data.prestation || null,
      date_evenement: data.date || null,
      nb_personnes: data.convives ? parseInt(data.convives) : null,
      ville: data.ville || null,
      budget: data.budget || null,
      message: data.message || null,
      source: 'devis-draft',
      statut: 'nouvelle',
    }).catch(() => {})

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch {
    return new Response(JSON.stringify({ ok: true }), { status: 200 }) // Silencieux
  }
}
