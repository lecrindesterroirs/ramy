#!/usr/bin/env node
// Met à jour lib/gbpData.json (note + nb d'avis) depuis Google Places API (New)
// avant chaque build. Robustesse : ne casse JAMAIS le build. En cas d'échec
// (pas de clé, API non activée, réponse inattendue), conserve les valeurs
// existantes et exit 0.
//
// Clé lue depuis : GOOGLE_PLACES_API_KEY, puis GOOGLE_API_KEY, puis le fichier
// local ~/.config/claude-seo/google-api.json (pour les builds en local).
// Sur Vercel : définir GOOGLE_PLACES_API_KEY dans les variables d'environnement.

import { readFileSync, writeFileSync } from 'fs'
import { homedir } from 'os'
import { join } from 'path'

const OUT = new URL('../lib/gbpData.json', import.meta.url)
// Recherche la fiche par nom + adresse (validée ensuite sur le nom).
const QUERY = "L'Écrin Traiteur, 63 bis rue de Sèvres, Boulogne-Billancourt"

function readKey() {
  if (process.env.GOOGLE_PLACES_API_KEY) return process.env.GOOGLE_PLACES_API_KEY
  if (process.env.GOOGLE_API_KEY) return process.env.GOOGLE_API_KEY
  try {
    const cfg = JSON.parse(readFileSync(join(homedir(), '.config/claude-seo/google-api.json'), 'utf8'))
    return cfg.api_key || null
  } catch { return null }
}

async function main() {
  const key = readKey()
  if (!key) { console.warn('[gbp] pas de clé API, valeurs conservées.'); return }

  const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': key,
      'X-Goog-FieldMask': 'places.displayName,places.rating,places.userRatingCount',
    },
    body: JSON.stringify({ textQuery: QUERY, languageCode: 'fr' }),
  })
  const j = await res.json()
  if (j.error) { console.warn('[gbp] API:', j.error.status, '-', String(j.error.message).slice(0, 120), '→ valeurs conservées.'); return }

  const p = (j.places || [])[0]
  const name = p?.displayName?.text || ''
  if (!p || !/écrin/i.test(name) || typeof p.rating !== 'number' || typeof p.userRatingCount !== 'number') {
    console.warn('[gbp] fiche non identifiée avec certitude, valeurs conservées.'); return
  }

  const data = {
    rating: p.rating,
    ratingLabel: p.rating.toFixed(1).replace('.', ','),
    reviews: p.userRatingCount,
  }
  writeFileSync(OUT, JSON.stringify(data, null, 2) + '\n')
  console.log(`[gbp] mis à jour depuis Google : ${data.ratingLabel} / ${data.reviews} avis (${name}).`)
}

main().catch(err => { console.warn('[gbp] ignoré:', err?.message || err); process.exit(0) })
