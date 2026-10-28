import Ancienne from './Ancienne'
import BlocsSeoBas from '../../../components/BlocsSeoBas'
import { BUFFET_PDJ_FR } from '../../../lib/blocPdj'

/* Page serveur : la présentation d'avant le 23/10 (Ancienne.js) reçoit en bas de page les blocs SEO repliés,
   dont « buffet de petit-déjeuner d'entreprise » (lib/blocPdj.js, 28/10/2026). */
export default function Page() {
  return <Ancienne bas={<BlocsSeoBas categorie="pdj" lang="fr" extraTitre="Buffet de petit-déjeuner d'entreprise : quantités, budget et questions" extraHtml={BUFFET_PDJ_FR} />} />
}
