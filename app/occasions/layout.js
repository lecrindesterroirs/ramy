import { alternatesPour } from '../../lib/i18n'
export const metadata = {
  title: "Un traiteur pour chaque occasion",
  description: "CODIR, séminaire, accueil client, team building, cocktail, afterwork : nos recommandations traiteur par occasion d'entreprise à Paris.",
  alternates: alternatesPour('/occasions', { en: true }),
}

export default function OccasionsLayout({ children }) {
  return children
}
