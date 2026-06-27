import { NextResponse } from 'next/server'

// ───────────────────────────────────────────────────────────────────────────
// Redirections 301 de l'ancien site Webflow (lecrindesterroirs.fr)
// vers le nouveau site (lecrin-traiteur.fr).
//
// Ce middleware n'agit QUE lorsque l'hôte de la requête est lecrindesterroirs.fr.
// Pour le domaine principal lecrin-traiteur.fr, il ne fait rien (next()).
// Il reste donc totalement inerte tant que l'ancien domaine ne pointe pas
// vers Vercel — il peut être déployé sans aucun effet de bord.
// ───────────────────────────────────────────────────────────────────────────

const NEW_ORIGIN = 'https://www.lecrin-traiteur.fr'

const REDIRECT_MAP = {
  '/': '/',
  '/petit-dejeuner': '/creations/petits-dejeuners-et-pauses',
  '/gouter': '/creations/petits-dejeuners-et-pauses',
  '/boisson': '/creations/boissons',
  '/notre-histoire': '/univers/notre-maison',
  '/nos-artisans': '/univers/nos-artisans',
  '/nos-engagements-et-valeurs': '/univers/nos-engagements',
  '/devis': '/devis',
  '/mentions-legales': '/mentions-legales',
  '/conditions-generales-de-vente': '/cgv',
  '/politique-de-cookies': '/cookies',
  '/post/petit-dejeuner-entreprise-paris-guide-complet': '/journal/petit-dejeuner-entreprise-conseils',
  '/post/gouter-entreprise-idees-cohesion-equipe': '/journal/gouter-entreprise-bureau',
  '/post/le-petit-dejeuner-en-entreprise-le-nouveau-secret-de-la-productivite-a-suresnes': '/journal/petit-dejeuner-productivite-science',
  '/post/pourquoi-le-petit-dejeuner-est-devenu-le-nouveau-moment-fort-de-la-vie-de-bureau': '/journal/bien-manger-bureau-concentration-engagement',
  '/post/traiteur-codir-paris-petit-dejeuner-dirigeants': '/journal/petit-dejeuner-entreprise-conseils',
}

export function middleware(request) {
  const host = request.headers.get('host') || ''

  // Domaine principal (ou tout autre hôte) : on ne touche à rien.
  if (!host.includes('lecrindesterroirs.fr')) {
    return NextResponse.next()
  }

  const pathname = request.nextUrl.pathname
  let destination = REDIRECT_MAP[pathname]

  if (!destination) {
    // Anciens articles de blog non mappés → index du journal.
    // Toute autre URL inconnue → accueil.
    destination = pathname.startsWith('/post/') ? '/journal' : '/'
  }

  return NextResponse.redirect(`${NEW_ORIGIN}${destination}`, 301)
}

export const config = {
  // S'exécute sur toutes les routes sauf les assets internes et l'API.
  matcher: ['/((?!_next/|api/|favicon|.*\\.[\\w]+$).*)'],
}
