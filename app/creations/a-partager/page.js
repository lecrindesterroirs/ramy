import Ancienne from './Ancienne'
import BlocsSeoBas from '../../../components/BlocsSeoBas'
import { BUFFET_FR } from '../../../lib/blocBuffet'

/* Page serveur : la présentation d'avant le 23/10 (Ancienne.js) reçoit en bas de page les blocs SEO repliés. */
export default function Page() {
  return <Ancienne bas={<BlocsSeoBas categorie="partage" lang="fr" extraTitre="Quel buffet d'entreprise choisir, et combien ça coûte ?" extraHtml={BUFFET_FR} />} />
}
