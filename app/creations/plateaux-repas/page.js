import Ancienne from './Ancienne'
import BlocsSeoBas from '../../../components/BlocsSeoBas'

/* Pages dédiées « plateaux repas d'entreprise » par zone. Au 26/10/2026, 4 sur 5 étaient inconnues de
   Google (jamais explorées) : liées seulement entre elles et depuis la page ville. Ce bloc replié les
   relie depuis la page de la carte, qui est explorée et indexée. */
const ZONES = [
  { href: '/plateaux-repas-entreprise/boulogne-billancourt', nom: 'Boulogne-Billancourt' },
  { href: '/plateaux-repas-entreprise/suresnes', nom: 'Suresnes' },
  { href: '/plateaux-repas-entreprise/nanterre', nom: 'Nanterre' },
  { href: '/plateaux-repas-entreprise/courbevoie', nom: 'Courbevoie' },
  { href: '/plateaux-repas-entreprise/la-defense', nom: 'La Défense' },
]

const ZONES_HTML = `
  <h2>Plateaux repas d'entreprise près de chez vous</h2>
  <p>Nos plateaux repas sont livrés par notre propre équipe à Paris et dans les Hauts-de-Seine, sur commande jusqu'à 14 h la veille. Une page détaille la livraison, les délais et les prix pour chaque zone :</p>
  <ul>${ZONES.map(z => `<li><a href="${z.href}">Plateaux repas d'entreprise à ${z.nom}</a></li>`).join('')}</ul>
`

/* Page serveur : la présentation d'avant le 23/10 (Ancienne.js) reçoit en bas de page les blocs SEO repliés. */
export default function Page() {
  return (
    <Ancienne
      bas={<BlocsSeoBas categorie="plateaux" lang="fr" extraHtml={ZONES_HTML} extraTitre="Plateaux repas près de chez vous" />}
    />
  )
}
