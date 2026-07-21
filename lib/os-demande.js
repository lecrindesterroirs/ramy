// Enregistre une demande entrante du site dans L'Écrin OS (table
// demandes_entrantes, via l'API REST Supabase). Best-effort : ne casse JAMAIS
// le formulaire si l'OS est indisponible. Appelé côté serveur uniquement (la
// clé reste dans l'env de la route API, jamais exposée au navigateur).

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/

// Extrait un entier depuis "30", "20-30 personnes", "environ 25"… (null sinon).
function toInt(v) {
  if (v == null) return null
  const m = String(v).match(/\d+/)
  return m ? parseInt(m[0], 10) : null
}

export async function logDemandeToOS(demande) {
  const url = process.env.OS_SUPABASE_URL
  const key = process.env.OS_SUPABASE_ANON_KEY
  if (!url || !key) return // non configuré → on ne bloque rien

  const payload = {
    ...demande,
    date_evenement: ISO_DATE.test(demande.date_evenement || '') ? demande.date_evenement : null,
    nb_personnes: toInt(demande.nb_personnes),
  }

  try {
    await fetch(`${url.replace(/\/$/, '')}/rest/v1/demandes_entrantes`, {
      method: 'POST',
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(payload),
    })
  } catch (e) {
    console.error('logDemandeToOS error:', e)
  }
}
