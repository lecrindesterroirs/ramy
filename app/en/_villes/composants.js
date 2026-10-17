/*
  Pièces communes aux pages anglaises « par ville » :
  /en/traiteur/[ville], /en/traiteur/[ville]/[quartier],
  /en/petit-dejeuner-entreprise/[ville], /en/plateaux-repas-entreprise/[ville].

  Les composants partagés du site (CategoryClosing, HalalLine, LogosSection)
  écrivent leur texte en français en dur. On ne les modifie pas : ce fichier
  en donne la version anglaise, à l'identique de mise en page et de styles,
  rendue côté serveur (survols en CSS, pas en JavaScript).

  Dossier privé (_villes) : Next.js n'en fait pas une route.
*/
import LogosSection from '../../../components/LogosSection'
import { lienLocalise, reecrireLiensEn } from '../../../lib/i18n'
import { enSlugs } from '../../../lib/en/journal'
import { cheminsVillesEn } from '../../../lib/en/villes'

export const BASE_URL = 'https://www.lecrin-traiteur.fr'

let _slugsJournal = null
export const slugsJournalEn = () => (_slugsJournal = _slugsJournal || enSlugs())

let _chemins = null
const cheminsVilles = () => (_chemins = _chemins || new Set(cheminsVillesEn()))

/*
  Lien depuis une page anglaise : vers la page anglaise si elle existe
  (pages ville traduites, puis tout ce que lib/i18n.js connaît), sinon le
  lien français. Jamais d'adresse qui n'existe pas.
*/
export function lienEn(href) {
  if (!href || !href.startsWith('/')) return href
  if (href === '/en' || href.startsWith('/en/')) return href
  const [chemin, suite = ''] = href.split(/(?=[?#])/)
  if (cheminsVilles().has(chemin)) return `/en${chemin}${suite}`
  return lienLocalise(href, 'en', slugsJournalEn())
}

/** Article SEO : liens réécrits par lib/i18n, puis ceux des pages ville traduites. */
export function articleEn(html) {
  if (!html) return html
  return reecrireLiensEn(html, slugsJournalEn()).replace(/href="(\/[^"#?]*)"/g, (tout, chemin) => {
    if (chemin.startsWith('/en/') || chemin === '/en') return tout
    return cheminsVilles().has(chemin) ? `href="/en${chemin}"` : tout
  })
}

/** '8€ HT/pers' → '€8 excl. VAT per person' ; '12 à 16€ HT/pers' → '€12 to €16 excl. VAT per person'. */
export function prixEn(prix) {
  if (!prix) return prix
  const n = (String(prix).match(/\d+(?:,\d+)?/g) || []).map(x => '€' + x.replace(',', '.'))
  if (!n.length) return prix
  return `${n.join(' to ')} excl. VAT per person`
}

/** '28,90' → '28.90' */
export const nombreEn = (x) => String(x ?? '').replace(',', '.')

/* Libellés anglais des occasions : ceux du menu et du pied de page (Navbar.js, Footer.js). */
export const OCCASIONS_EN = {
  'petit-dejeuner-codir': 'Board & exec meetings',
  'seminaire-entreprise': 'Company offsites',
  'accueil-client': 'Client welcome',
  'journee-formation': 'Training days',
  'team-building': 'Team building',
  'gouter-entreprise': 'Corporate afternoon break',
  'petit-dejeuner-entreprise': 'Corporate breakfast',
  'dejeuner-entreprise': 'Corporate lunch',
  'cocktail-entreprise': 'Corporate cocktail',
  'afterwork-entreprise': 'Afterwork',
}

/* Arguments des pages ville et quartier (CITY_ARGS / QUARTIER_ARGS du français). */
export const argsLieuEn = (lieu, environs) => [
  { icon: 'delivery', titre: `Delivery from 6:30 am in ${lieu}`, desc: `Our drivers cover ${lieu} and ${environs}, every weekday morning.` },
  { icon: 'quality', titre: 'Selected artisans', desc: 'Bakers, pastry chefs and fine grocers chosen for their craft, not their price.' },
  { icon: 'custom', titre: 'Order before 2 pm', desc: 'Order before 2 pm the day before for delivery the next morning from 6:30 am.' },
  { icon: 'support', titre: 'Company invoicing', desc: 'VAT invoice and a dedicated contact for recurring orders or large volumes.' },
]

/* DEFAULT_ARGS de CategoryClosing, en anglais. */
export const ARGS_DEFAUT_EN = [
  { icon: 'quality', titre: 'Quality products', desc: 'Ingredients chosen with care and prepared with real know-how, for food that tastes of something.' },
  { icon: 'delivery', titre: 'Delivery from 6:30 am', desc: 'Logistics built for companies: delivered at the time you choose, in Paris and Île-de-France.' },
  { icon: 'custom', titre: 'Made to measure', desc: 'We work around your dietary needs, your budget and what you have in mind for each event.' },
  { icon: 'support', titre: 'Dedicated support', desc: 'One dedicated contact who listens, from the quote to the delivery.' },
]

/* ── Ligne de maillage halal (HalalLine, en anglais) ── */
export function HalalLineEn({ intro = 'Our ', paddingTop = '44px', maxWidth = '800px', paddingBottom = '0px' }) {
  return (
    <div
      className="halal-line"
      style={{ maxWidth, margin: '0 auto', padding: `${paddingTop} 72px ${paddingBottom}`, textAlign: 'center' }}
    >
      <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>
        {intro}
        <a href={lienEn('/traiteur-halal')} style={{ color: 'var(--accent-deep)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
          halal corporate catering is entirely pork-free and alcohol-free
        </a>
        .
      </p>
      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1100px) and (min-width: 769px) { .halal-line { padding-left: 40px !important; padding-right: 40px !important; } }
        @media (max-width: 768px) { .halal-line { padding-left: 24px !important; padding-right: 24px !important; } }
      ` }} />
    </div>
  )
}

// Bandeau de logos clients, avec le libellé anglais passé au composant.
export function LogosEn() {
  return <LogosSection label="Trusted by" />
}

const ICONS = {
  quality: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M8 12l2 2 4-4"/></svg>,
  delivery: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  custom: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>,
  support: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
}

/*
  Section de clôture (CategoryClosing, en anglais) : bande éditoriale →
  4 cartes arguments → CTA devis → article SEO. Le bloc « Guides pratiques »
  du français n'est pas repris : il ne trouve aucun guide pour une adresse
  /en et ne s'affiche donc pas non plus.
*/
export function ClosingEn({
  eyebrow,
  title,
  body,
  args = ARGS_DEFAUT_EN,
  ctaQuestion = 'Need something made to measure?',
  seoArticle,
}) {
  const titleLines = String(title || '').split('\n')
  return (
    <>
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid rgba(17,17,17,0.07)' }}>

        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 40px 64px', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '20px' }}>
            {eyebrow}
          </p>
          <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '24px' }}>
            {titleLines.map((line, i) => (
              <span key={i}>{line}{i < titleLines.length - 1 && <br />}</span>
            ))}
          </h2>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
            {body}
          </p>
        </div>

        <div className="prods-args" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 72px 72px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          {args.map((item, i) => (
            <div key={i} style={{ background: '#FFFFFF', padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ color: 'var(--accent-deep)', opacity: 0.85 }}>{ICONS[item.icon] || ICONS.quality}</div>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)' }}>{item.titre}</p>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', lineHeight: 1.75, color: 'var(--text-secondary)' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', padding: '0 40px 80px' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
            {ctaQuestion}
          </p>
          <a
            href={lienEn('/devis')}
            className="en-hover-fade"
            style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1A1A18', background: 'var(--accent)', padding: '14px 32px', display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', transition: 'opacity 0.3s ease' }}
          >
            Get a quote →
          </a>
        </div>

      </section>

      {seoArticle && (
        <section style={{ background: '#FFFFFF', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto', padding: '80px 40px 88px' }}>
            <div className="cat-seo-body" dangerouslySetInnerHTML={{ __html: articleEn(seoArticle) }} />
          </div>
        </section>
      )}

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .cat-seo-body p {
          font-family: 'Neue Montreal', sans-serif;
          font-size: 15px;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }
        .cat-seo-body h2 {
          font-family: 'Baskerville Display PT', Georgia, serif;
          font-size: 26px;
          font-weight: 400;
          color: var(--text-primary);
          margin: 40px 0 16px;
        }
        .cat-seo-body h2:first-child { margin-top: 0; }
        .cat-seo-body h3 {
          font-family: 'Baskerville Display PT', Georgia, serif;
          font-size: 20px;
          font-weight: 400;
          color: var(--text-primary);
          margin: 28px 0 10px;
        }
        .cat-seo-body .tbl-wrap { overflow-x: auto; margin: 8px 0 24px; -webkit-overflow-scrolling: touch; }
        .cat-seo-body table {
          width: 100%;
          border-collapse: collapse;
          font-family: 'Neue Montreal', sans-serif;
          font-size: 14px;
          line-height: 1.55;
          color: var(--text-secondary);
          min-width: 520px;
        }
        .cat-seo-body th {
          text-align: left;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-secondary);
          padding: 10px 14px 10px 0;
          border-bottom: 1px solid rgba(17,17,17,0.2);
          vertical-align: bottom;
        }
        .cat-seo-body td { padding: 14px 14px 14px 0; border-bottom: 1px solid rgba(17,17,17,0.08); vertical-align: top; }
        .cat-seo-body li { margin-bottom: 8px; }
        .cat-seo-body ul {
          font-family: 'Neue Montreal', sans-serif;
          font-size: 15px;
          line-height: 1.8;
          color: var(--text-secondary);
          padding-left: 24px;
          margin-bottom: 20px;
        }
        .cat-seo-body strong {
          color: var(--text-primary);
          font-weight: 500;
        }
        .cat-seo-body a {
          color: var(--accent-deep);
          text-decoration: none;
          border-bottom: 1px solid var(--accent);
        }
        .cat-seo-body a:hover { opacity: 0.75; }
        @media (max-width: 768px) {
          .prods-args { grid-template-columns: 1fr 1fr !important; padding: 0 24px 60px !important; }
          .cat-seo-body h2 { font-size: 22px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .prods-args { padding: 0 40px 60px !important; }
        }
      ` }} />
      <SurvolsEn />
    </>
  )
}

/*
  Survols des boutons et des cartes, en CSS : les gabarits français les font
  en JavaScript (onMouseEnter), ce qui oblige à rendre la page côté client.
  !important parce que les styles en ligne priment sinon.
*/
export function SurvolsEn() {
  return (
    <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
      .en-hover-fade:hover { opacity: 0.85 !important; }
      .en-hover-ghost:hover { background: rgba(255,255,255,0.12) !important; }
      .en-hover-lift:hover { transform: translateY(-4px) !important; box-shadow: 0 2px 6px rgba(17,17,17,0.04), 0 16px 40px rgba(17,17,17,0.09) !important; }
      .en-hover-crumb:hover { color: #FFFFFF !important; }
    ` }} />
  )
}
