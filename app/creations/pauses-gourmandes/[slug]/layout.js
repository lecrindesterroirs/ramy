const BASE = 'https://www.lecrin-traiteur.fr'

const META = {
  'madeleines':        { nom: 'Madeleines Mado Paris',                d: 'Madeleines moelleuses cuites du jour, nature ou parfumées.' },
  'macarons':          { nom: 'Macarons d\'exception',                  d: 'Macarons aux ganaches délicates, assortiment de saveurs.' },
  'brownie':           { nom: 'Brownie fondant maison',                   d: 'Brownie fondant au chocolat intense, servi à couper.' },
  'carrot-cake':       { nom: 'Carrot Cake',               d: 'Carrot cake moelleux aux épices, servi à couper.' },
  'cake-citron':       { nom: 'Cake Citron Pavot',         d: 'Cake maison au citron et graines de pavot, tranché.' },
  'cake-marbre':       { nom: 'Cake Marbré',               d: 'Cake marbré chocolat-vanille, tranché.' },
  'cookie':            { nom: 'Cookie Signature',          d: 'Cookie généreux aux pépites de chocolat.' },
  'tartelette-citron': { nom: 'Tartelette Citron',         d: 'Tartelette au citron meringuée, crémeux acidulé.' },
  'tartelette-praline':{ nom: 'Tartelette Praliné',        d: 'Tartelette au praliné maison, croustillant noisette.' },
  'mousse-chocolat':   { nom: 'Mousse au chocolat maison',           d: 'Mousse au chocolat intense, texture aérienne.' },
  'panna-cotta':       { nom: 'Panna cotta maison',               d: 'Panna cotta vanille, dressée en verrine individuelle.' },
  'verrine-citron':    { nom: 'Verrine Citron', d: 'Verrine lemon curd, fraîcheur acidulée en fin de repas.' },
  'plateau-fruits-frais': { nom: 'Plateau de Fruits Frais', d: 'Sélection de fruits frais de saison découpés, à partager.' },
}

export const SLUGS = Object.keys(META)

export function generateMetadata({ params }) {
  const m = META[params.slug]
  const path = `/creations/pauses-gourmandes/${params.slug}`
  if (!m) {
    return { title: "Pauses gourmandes — traiteur d'entreprise à Paris | L'Écrin Traiteur", alternates: { canonical: path } }
  }
  const title = `${m.nom} — pause gourmande | L'Écrin Traiteur`
  const description = `${m.d} Livraison de pauses gourmandes à Paris et en Île-de-France dès 6h30, devis sous 24h.`
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { images: [{ url: '/og-image.jpg', width: 1200, height: 630 }], title: `${m.nom} | L'Écrin Traiteur`, description: m.d, url: `${BASE}${path}`, locale: 'fr_FR', type: 'website' },
  }
}

export default function Layout({ children }) {
  return children
}
