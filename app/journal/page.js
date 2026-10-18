import { articles, articleAuthor } from '../../lib/journalData'
import JournalListe from './JournalListe'

// Composant serveur : lit tous les articles ici et ne transmet au navigateur que les
// champs affichés sur les cartes (le texte des articles reste côté serveur).
export default function Journal() {
  const cards = articles.map(({ slug, titre, extrait, img, imgPosition, categorie, date }) => ({
    slug, titre, extrait, img, imgPosition: imgPosition || null, categorie, date, auteur: articleAuthor(slug).name,
  }))
  return <JournalListe cards={cards} />
}
