import Ancienne from './Ancienne'
import BlocsSeoBas from '../../../components/BlocsSeoBas'

/* Page serveur : la présentation d'avant le 23/10 (Ancienne.js) reçoit en bas de page les blocs SEO repliés. */
export default function Page() {
  return <Ancienne bas={<BlocsSeoBas categorie="coffrets" lang="fr" />} />
}
