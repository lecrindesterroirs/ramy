import { createClient } from '@supabase/supabase-js'

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export async function POST(req) {
  try {
    const data = await req.json()
    const { email, telephone, source, timestamp } = data

    // Besoin d'au moins un contact pour faire du suivi
    if (!email && !telephone) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 })
    }

    // Upsert : si email existe, mettre à jour, sinon créer
    const identifier = email || telephone
    const { error } = await sb
      .from('demandes_entrantes')
      .upsert({
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
        source: 'devis-rapide',
        statut: 'nouvelle',
        metadata: { draft_source: source, last_update: timestamp },
      }, { onConflict: 'email' })

    if (error) throw error

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (err) {
    console.error('Devis draft save error:', err)
    return new Response(JSON.stringify({ ok: true }), { status: 200 }) // Silencieux, pas d'erreur client
  }
}
