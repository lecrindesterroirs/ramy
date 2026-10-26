import { PDJ_DES, PAUSE_DES, LUNCHBOX_DES, PLATEAU_DES, AFTERWORK_PARTAGE, euroFr, euroEn } from '../lib/prixEntree'
import { FORMULES } from '../lib/calculsPrix'

/*
  Paragraphe de l'accueil avec des liens dans le texte vers les pages piliers
  (petit-déjeuner, goûter, lunch box, plateaux repas, cocktails, afterwork),
  tarifs, halal et métiers. Ajouté le 25/10/2026 : l'accueil est la page la
  plus forte du site (2 326 affichages, position 6,7 sur 28 jours) et les piliers
  petit-déjeuner et cocktail sont en position 32 et 39. Les prix viennent de
  lib/prixEntree.js et lib/calculsPrix.js : rien n'est écrit à la main.
*/
const SERIF = "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif"
const SANS = "'Neue Montreal', 'Neue Montreal Fallback', sans-serif"
const lien = { color: 'var(--text-primary)', textDecoration: 'underline', textUnderlineOffset: '3px' }

export default function PiliersAccueil({ lang = 'fr' }) {
  const en = lang === 'en'
  const pre = en ? '/en' : ''
  const p = (x) => (en ? `${euroEn(x)} excl. VAT` : `${euroFr(x)} HT`)
  const A = ({ href, children }) => <a href={`${pre}${href}`} style={lien}>{children}</a>
  return (
    <section style={{ maxWidth: '860px', margin: '0 auto', padding: '72px 24px 24px' }}>
      <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text-primary)', marginBottom: '20px' }}>
        {en ? 'What we deliver to companies in Paris and Île-de-France' : "Ce que nous livrons aux entreprises de Paris et d'Île-de-France"}
      </h2>
      {en ? (
        <p style={{ fontFamily: SANS, fontSize: 'clamp(16px, 1.4vw, 18px)', lineHeight: 1.85, color: 'var(--text-secondary)' }}>
          Every working day from 6:30 am, L&apos;Écrin Traiteur delivers the <A href="/creations/petits-dejeuners-et-pauses">office breakfast</A> from {p(PDJ_DES)} per person, the <A href="/creations/pauses-gourmandes">afternoon break</A> from {p(PAUSE_DES)}, the <A href="/creations/lunch-box">lunch box</A> from {p(LUNCHBOX_DES)} and <A href="/creations/plateaux-repas">lunch trays</A> from {p(PLATEAU_DES)}, then the <A href="/creations/cocktails">corporate cocktail</A> from {p(FORMULES.invitation.prix)} and the <A href="/creations/cocktails/afterwork-partage">sharing afterwork</A> from {p(AFTERWORK_PARTAGE)}. Every price is on our <A href="/tarifs">2026 prices</A> page. The whole menu is <A href="/traiteur-halal">halal and pork-free</A>, and we cater for every profession, from law firms to laboratories: see <A href="/metiers">corporate catering by profession</A>.
        </p>
      ) : (
        <p style={{ fontFamily: SANS, fontSize: 'clamp(16px, 1.4vw, 18px)', lineHeight: 1.85, color: 'var(--text-secondary)' }}>
          Chaque jour ouvré dès 6h30, L&apos;Écrin Traiteur livre le <A href="/creations/petits-dejeuners-et-pauses">petit-déjeuner d&apos;entreprise</A> dès {p(PDJ_DES)} par personne (<A href="/livraison-petit-dejeuner-entreprise-paris">zones, horaires et prix de la livraison</A>), le <A href="/creations/pauses-gourmandes">goûter d&apos;entreprise</A> dès {p(PAUSE_DES)} (<A href="/livraison-gouter-entreprise-paris">livraison à l&apos;heure de la pause</A>), la <A href="/creations/lunch-box">lunch box</A> dès {p(LUNCHBOX_DES)} et les <A href="/creations/plateaux-repas">plateaux repas</A> dès {p(PLATEAU_DES)}, puis le <A href="/creations/cocktails">cocktail d&apos;entreprise</A> dès {p(FORMULES.invitation.prix)} et l&apos;<A href="/creations/cocktails/afterwork-partage">afterwork à partager</A> dès {p(AFTERWORK_PARTAGE)}. Tous les prix sont sur la page <A href="/tarifs">tarifs 2026</A>. Toute la carte est <A href="/traiteur-halal">halal et sans porc</A>, et nous livrons tous les métiers, des cabinets d&apos;avocats aux laboratoires : voir le <A href="/metiers">traiteur d&apos;entreprise par métier</A>.
        </p>
      )}
    </section>
  )
}
