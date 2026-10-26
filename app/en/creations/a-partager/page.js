import Ancienne from '../../../creations/a-partager/Ancienne'
import BlocsSeoBas from '../../../../components/BlocsSeoBas'
import { BUFFET_EN } from '../../../../lib/blocBuffet'

export default function Page() {
  return <Ancienne bas={<BlocsSeoBas categorie="partage" lang="en" extraTitre="Which corporate buffet should you choose, and what does it cost?" extraHtml={BUFFET_EN} />} />
}
