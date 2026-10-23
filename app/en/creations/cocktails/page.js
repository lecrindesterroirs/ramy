import CocktailsIndexView from '../../../../components/cocktails/CocktailsIndexView'
import { alternatesPourEn } from '../../../../lib/i18n'
import { ogImages } from '../../../../lib/og'
import { formules, prixHT } from '../../../../lib/cocktailsVue'

/*
  Index Cocktails en anglais : la même vue serveur que la page française
  (23/10/2026). Avant, /en/creations/cocktails était une page de texte
  générique servie par app/en/[...chemin] (lib/enPages.js).
*/
const F = formules(true)
const des = Math.min(...F.map(f => f.prixNum))
const TITLE = `Corporate cocktail catering in Paris from ${prixHT(des, true)} | L'Écrin Traiteur`
const DESCRIPTION = `${F.map(f => `${f.label} (${f.pieces} pieces)`).join(', ')} from ${prixHT(des, true)} per person. Halal, pork-free and alcohol-free, delivered across Paris and Île-de-France. Quote within 24 hours.`

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: alternatesPourEn('/creations/cocktails'),
  openGraph: {
    images: ogImages('/hero-cocktail.webp', "L'Écrin Traiteur, corporate cocktail reception in Paris"),
    title: TITLE,
    description: DESCRIPTION,
    locale: 'en_GB',
    type: 'website',
  },
}

export default function CocktailsEn() {
  return <CocktailsIndexView en />
}
