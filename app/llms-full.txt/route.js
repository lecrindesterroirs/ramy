// /llms-full.txt : contenu de référence en Markdown pour les assistants IA (lib/llmsFull.js).
// Statique : calculé au déploiement. « noindex » : ce n'est pas une page à classer dans Google.
import { llmsFullTexte } from '../../lib/llmsFull'

export const dynamic = 'force-static'

export function GET() {
  return new Response(llmsFullTexte(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Robots-Tag': 'noindex, follow',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
