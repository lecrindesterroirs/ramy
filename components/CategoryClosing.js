'use client'

import GuidesPratiques from './GuidesPratiques'

import { LIV } from '../lib/calculsPrix'
import { MINIMUM, euroFr, euroEn } from '../lib/prixEntree'
import { trackPhoneClick } from '../lib/tracking'

/*
  Section de clôture des pages catégorie, refaite le 22/10/2026 (audit design) :
  plus de cartes d'icônes « Produits de qualité / Livraison / Sur mesure /
  Accompagnement », mais un bloc factuel « Comment ça se passe » : délai,
  livraison et minimum calculés (lib/prixEntree.js, lib/calculsPrix.js), facture,
  une vraie citation client, le téléphone. Puis l'article SEO de la page.

  Les anciennes props (eyebrow, title, body, args, ctaQuestion) sont encore
  passées par certaines pages : elles sont ignorées, pour qu'un seul bloc
  sobre et identique serve partout. Styles : app/globals.css, préfixe .csp-.
*/

const TEXTES = {
  fr: {
    titre: 'Comment ça se passe',
    lignes: (liv, min) => [
      ['Commande', "jusqu'à 14h la veille ; à partir de 50 personnes ou pour plusieurs sites, 48 h de préavis recommandées."],
      ['Livraison', `dès 6h30, du lundi au vendredi, à Paris et en Île-de-France ; ${liv} HT à Paris et dans les communes proches.`],
      ['Minimum', `${min} HT de commande.`],
      ['Facture', 'facture entreprise avec TVA, bon de commande accepté.'],
      ['Devis', 'réponse sous 24h, avec le détail des quantités.'],
    ],
    citation: 'Les madeleines sont très bonnes, grand choix de parfums, viennoiseries, jus, et le service au top. Le livreur nous a même aidé à tout installer.',
    auteur: 'Rose Jean, Office Manager, Sia Partners',
    question: 'Une question avant de commander ?',
    devis: 'Demander un devis',
    devisHref: '/devis',
    choisir: 'Bien choisir : quantités, budget, livraison',
  },
  en: {
    titre: 'How it works',
    lignes: (liv, min) => [
      ['Ordering', "until 2 pm the day before; from 50 people or across several sites, 48 hours' notice recommended."],
      ['Delivery', `from 6:30 am, Monday to Friday, across Paris and Île-de-France; ${liv} excl. VAT in Paris and nearby towns.`],
      ['Minimum', `${min} excl. VAT per order.`],
      ['Invoice', 'company invoice showing VAT, purchase orders accepted.'],
      ['Quote', 'reply within 24 hours, with the quantities set out.'],
    ],
    citation: 'The madeleines are very good, a wide choice of flavours, pastries, juice, and the service was excellent. The driver even helped us set everything up.',
    auteur: 'Rose Jean, Office Manager, Sia Partners (translated from French)',
    question: 'A question before you order?',
    devis: 'Ask for a quote',
    devisHref: '/en/devis',
    choisir: 'Choosing well: quantities, budget, delivery',
  },
}

export default function CategoryClosing({ seoArticle, lang = 'fr', titreChoisir, avantGuides = null }) {
  const en = lang === 'en'
  const T = TEXTES[en ? 'en' : 'fr']
  const lignes = T.lignes(en ? euroEn(LIV) : euroFr(LIV), en ? euroEn(MINIMUM) : euroFr(MINIMUM))
  return (
    <>
      <section className="csp">
        <div className="csp-inner">
          <h2 className="csp-titre">{T.titre}</h2>
          <ul className="csp-lignes">
            {lignes.map(([label, texte]) => (
              <li key={label}><strong>{label}&nbsp;:</strong> {texte}</li>
            ))}
          </ul>
          <figure className="csp-citation">
            <blockquote>« {T.citation} »</blockquote>
            <figcaption>{T.auteur}</figcaption>
          </figure>
          <div className="csp-actions">
            <a className="csp-btn" href={T.devisHref}>{T.devis}</a>
            <p className="csp-tel">
              {T.question}{' '}
              <a href="tel:+33174542310" data-emplacement="bloc_comment" onClick={trackPhoneClick}>01 74 54 23 10</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── Article SEO catégorie, replié dans « Bien choisir » (23/10/2026) :
          le texte reste dans le HTML (details natif), la page ne s'étire plus. ── */}
      {seoArticle && (
        <section className="cat-choisir">
          <details className="cat-choisir-details">
            <summary>{titreChoisir || T.choisir}</summary>
            <div className="cat-seo-body" dangerouslySetInnerHTML={{ __html: seoArticle }} />
          </details>
        </section>
      )}

      {avantGuides}

      {/* Les guides du Journal ne sont pas tous traduits : on ne les montre
          pas en anglais plutôt que d'y envoyer vers des pages françaises. */}
      {!en && <GuidesPratiques />}

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .cat-seo-body p {
          font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif;
          font-size: 15px;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }
        .cat-seo-body h2 {
          font-family: 'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif;
          font-size: 26px;
          font-weight: 400;
          color: var(--text-primary);
          margin: 40px 0 16px;
        }
        .cat-seo-body h2:first-child { margin-top: 0; }
        .cat-seo-body h3 {
          font-family: 'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif;
          font-size: 20px;
          font-weight: 400;
          color: var(--text-primary);
          margin: 28px 0 10px;
        }
        .cat-seo-body .tbl-wrap { overflow-x: auto; margin: 8px 0 24px; -webkit-overflow-scrolling: touch; }
        .cat-seo-body table {
          width: 100%;
          border-collapse: collapse;
          font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif;
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
          font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif;
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
          /* --accent (#E0A126) tombe à 2,26:1 en texte sur fond clair.
             --accent-deep est le token prévu pour l'accent en texte (AA ≥ 4,5:1). */
          color: var(--accent-deep);
          text-decoration: none;
          border-bottom: 1px solid var(--accent);
        }
        .cat-seo-body a:hover { opacity: 0.75; }
        @media (max-width: 768px) {
          .cat-seo-body h2 { font-size: 22px !important; }
        }
      ` }} />
    </>
  )
}
