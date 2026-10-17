import { alternatesPourEn } from '../../../../../lib/i18n'
import { PRODUITS, prixMenu } from '../../../../creations/plateaux-repas/data'
import { enPlateauRepas, slugsPlateauxRepasEn } from '../../../../../lib/en/produits/plateauxRepas'
import { ogImages } from '../../../../../lib/og'

/*
  Métadonnées des fiches plateau repas anglaises. Sans ce layout, la page
  étant un composant client, les fiches héritaient du titre de l'accueil
  français et n'avaient ni canonical ni hreflang.

  Seuls les plateaux traduits ont une page ici : generateStaticParams ne
  renvoie que les identifiants de la surcouche.
*/

export function generateStaticParams() {
  return slugsPlateauxRepasEn().map(slug => ({ slug }))
}

/* Premier candidat qui tient dans la limite d'une meta description (~155 car.). */
const fit = (candidats, max) => candidats.find(c => c.length <= max) || candidats[candidats.length - 1]

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = PRODUITS.find(x => x.id === slug)
  const en = enPlateauRepas(slug)
  if (!p || !en) return { title: "Lunch trays, corporate catering Paris | L'Écrin Traiteur" }

  const bas = (s) => (s || '').charAt(0).toLowerCase() + (s || '').slice(1)
  const [e, pl, d] = [en.entree, en.plat, en.dessert].map(bas)
  // Le point décimal, pas la virgule : la page est en anglais.
  const px = prixMenu(p) ? String(prixMenu(p)).replace(',', '.') : null

  return {
    title: { absolute: `${p.nom}, lunch tray Paris | L'Écrin Traiteur` },
    description: fit([
      px && `${p.nom}: ${e}, ${pl}, ${d}. €${px} excl. VAT per person, delivered from 6:30 am in Paris.`,
      px && `${p.nom}: ${pl}, ${d}. €${px} excl. VAT per person, delivered from 6:30 am in Paris.`,
      `${p.nom}: ${e}, ${pl}, ${d}. Individual lunch tray delivered from 6:30 am across Paris.`,
      `${p.nom}: ${pl}, ${d}. Lunch tray delivered from 6:30 am across Paris and Île-de-France.`,
      `${p.nom}: ${pl}, ${d}. Lunch tray delivered from 6:30 am in Paris.`,
    ].filter(Boolean), 155),
    alternates: alternatesPourEn(`/creations/plateaux-repas/${p.id}`),
    openGraph: {
      title: `${p.nom}, lunch tray | L'Écrin Traiteur`,
      description: `${p.nom} lunch tray, put together the same morning. Corporate delivery from 6:30 am in Paris.`,
      images: ogImages(p.img, p.nom),
      locale: 'en_GB',
      type: 'website',
    },
  }
}

export default function Layout({ children }) {
  return children
}
