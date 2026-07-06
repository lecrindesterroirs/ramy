const BASE = 'https://www.lecrin-traiteur.fr'

const META = {
  'sw1': { nom: 'Mini Baguettes Signature',    d: 'Assortiment de mini baguettes artisanales garnies.' },
  'sw2': { nom: 'Clubs Signature',             d: 'Assortiment de clubs sandwichs moelleux découpés.' },
  'sw3': { nom: 'Wraps Gourmands',             d: 'Assortiment de wraps découpés en bouchées.' },
  'sw4': { nom: 'Mini Burgers',                d: 'Assortiment de mini burgers artisanaux.' },
  'go1': { nom: 'Fromages Affinés',            d: 'Sélection de fromages affinés, fruits frais, fruits secs et pain artisanal.' },
  'go2': { nom: 'Charcuteries Artisanales',    d: 'Jambon de Parme, coppa, rosette, bresaola, chorizo doux, cornichons & condiments.' },
  'go4': { nom: 'Saumon',                      d: 'Saumon fumé, gravlax, blinis, crème citron-aneth, câpres, oignons rouges & citron.' },
  'fr1': { nom: 'Crudités & Dips',             d: 'Carottes, concombre, radis, chou-fleur, tomates cerises, houmous, tzatziki & tapenade.' },
  'fr3': { nom: 'Fruits Frais',                d: 'Sélection de fruits frais de saison découpés.' },
  'si1': { nom: 'Asiatique',                   d: "Assortiment de bouchées d'inspiration asiatique." },
  'si4': { nom: 'Douceurs',                    d: 'Sélection de desserts artisanaux à partager.' },
}

export function generateMetadata({ params }) {
  const m = META[params.slug]
  const path = `/creations/plateaux-aperitifs/${params.slug}`
  if (!m) {
    return { title: "Plateaux apéritifs à partager — traiteur à Paris | L'Écrin Traiteur", alternates: { canonical: path } }
  }
  const title = `Plateau ${m.nom} — apéritif à partager à Paris | L'Écrin Traiteur`
  const description = `${m.d} Plateau apéritif à partager livré à Paris et en Île-de-France dès 6h30, devis sous 24h.`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `Plateau ${m.nom} | L'Écrin Traiteur`, description: m.d, url: `${BASE}${path}`, locale: 'fr_FR', type: 'website' },
  }
}

export default function Layout({ children }) {
  return children
}
