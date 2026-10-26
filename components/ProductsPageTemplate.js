import Navbar from './Navbar'
import Footer from './Footer'
import Breadcrumb from './Breadcrumb'
import ParallaxImage from './ParallaxImage'
import ReviewsBadge from './ReviewsBadge'
import DevisRapide from './DevisRapide'
import CategoryClosing from './CategoryClosing'
import CategoryJsonLd from './CategoryJsonLd'
import ProductsGrid from './categorie/ProductsGrid'
import { CATEGORY_FAQ, CATEGORY_FAQ_EN } from '../lib/categoryFaq'

/*
  Gabarit des pages de la carte (refonte du 23/10/2026, audit design,
  chantier 5), sur le modèle des pages saisonnières et cocktails :

    en-tête photo + titre + ligne de faits (prix calculés)
    → « L'essentiel »
    → les formules et le tableau « Combien prévoir » (calculés)
    → la carte, rangée par sections, filtres collants (seul îlot client)
    → devis court → « Comment ça se passe » → « Bien choisir » (texte replié)
    → UNE seule FAQ, la même affichée et balisée.

  Pas de hook ici : le gabarit se rend côté serveur depuis une page serveur,
  et reste utilisable par les quelques pages anglaises encore en 'use client'.

  Anciennes props acceptées (pages anglaises) : fallbackProducts au format
  { id, name, label: « portion · prix », img }, breadcrumb, answerBlock.
  Styles : app/globals.css, préfixes .ev-, .cat- et .pgr-.
*/
const BASE = 'https://www.lecrin-traiteur.fr'

/* « 6 pièces · 17,90€ » ou « €17.90 » → carte légère pour la grille. */
function depuisAncien(p, basePath, en) {
  const parts = String(p.label || '').split('·').map(s => s.trim()).filter(Boolean)
  const prixBrut = parts.length > 1 ? parts[parts.length - 1] : parts[0] || ''
  const unite = parts.length > 1 ? parts.slice(0, -1).join(' · ') : (p.qty || '')
  const m = prixBrut.match(/(\d+(?:[.,]\d+)?)/)
  const prix = m && /€/.test(prixBrut) ? Number(m[1].replace(',', '.')) : null
  const montant = prixBrut.replace(/\s*ht\s*$/i, '').trim()
  return {
    href: p.id ? `${basePath}/${p.id}` : (en ? '/en/devis' : '/devis'),
    nom: p.name,
    img: p.img,
    imgPos: p.imgPosition,
    prix,
    prixTexte: prix != null ? `${montant} ${en ? 'excl. VAT' : 'HT'}` : (montant || (en ? 'on request' : 'sur devis')),
    unite,
    section: p.section && p.sectionLabel ? p.sectionLabel : undefined,
  }
}

export default function ProductsPageTemplate({
  lang = 'fr',
  heroImg, heroImgPosition, heroAlt,
  surtitre, heroTitle, heroSubtitle, faits,
  essentiel, essentielTitre,
  formules,
  produits, sections,
  fallbackProducts, basePath = '/creations/petits-dejeuners-et-pauses',
  seoArticle, titreChoisir,
  faq, faqAvecGenerale = true,
  devisPrestation = '', devisTitre,
  nomJsonLd,
  answerBlock,
}) {
  const en = lang === 'en'
  const titre = (heroTitle || '').replace(/\n/g, ' ')
  const cartes = produits || (fallbackProducts || []).map(p => depuisAncien(p, basePath, en))
  const pre = en ? '/en' : ''
  const chemin = basePath
  const url = `${BASE}${pre}${chemin}`

  // Une seule FAQ : questions de la page, puis les questions générales qu'elles ne couvrent pas.
  const generale = en ? CATEGORY_FAQ_EN : CATEGORY_FAQ
  const propres = faq || []
  const toutes = faqAvecGenerale
    ? [...propres, ...generale.filter(g => !propres.some(p => p.q === g.q))]
    : propres

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage', '@id': `${url}#faq`, inLanguage: en ? 'en' : 'fr',
        mainEntity: toutes.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  }

  const devisTitres = {
    fr: devisTitre?.fr || 'Pour combien de personnes ?',
    en: devisTitre?.en || 'For how many people?',
  }

  return (
    <>
      <Navbar showBanner />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="ev-main cat-main">
        <Breadcrumb maxWidth="1440px" jsonLd={false} items={[{ label: en ? 'Home' : 'Accueil', href: en ? '/en' : '/' }, { label: titre }]} />

        <section className="ev-hero cat-hero">
          <div className="ev-hero-texte">
            {surtitre && <p className="ev-surtitre">{surtitre}</p>}
            <h1 className="ev-h1">{titre}</h1>
            {heroSubtitle && <p className="ev-chapo">{heroSubtitle}</p>}
            {faits && <p className="ev-faits">{faits}</p>}
            <div className="ev-actions">
              <a className="ev-btn" href="#devis">{en ? 'Ask for a quote' : 'Demander un devis'}</a>
              <a className="ev-btn-filet" href={formules ? '#formules' : '#carte'}>{formules ? (en ? 'See the prices' : 'Voir les prix') : (en ? 'See the menu' : 'Voir la carte')}</a>
            </div>
            <ReviewsBadge showCount />
          </div>
          <div className="ev-hero-img">
            <ParallaxImage priority sizes="(max-width: 900px) 100vw, 55vw" src={heroImg} alt={heroAlt || titre}
              strength={0.05} style={{ position: 'absolute', inset: 0 }} imgStyle={{ objectPosition: heroImgPosition || 'center' }} />
          </div>
        </section>

        <section className="cat-carte" aria-label={en ? 'The menu' : 'La carte'}>
          <ProductsGrid produits={cartes} sections={sections} lang={lang} />
        </section>

        {/* Le haut de page mène directement aux produits (demande de Ramy, 26/10/2026) : l'essentiel, les formules et le tableau de budget passent sous la grille. */}
        {essentiel ? (
          <section className="ev-bloc ev-etroit cat-essentiel">
            <h2 className="ev-h2">{essentielTitre || (en ? 'At a glance' : "L'essentiel")}</h2>
            <p className="ev-texte">{essentiel}</p>
          </section>
        ) : answerBlock ? (
          <section className="ev-bloc ev-etroit cat-essentiel">{answerBlock}</section>
        ) : null}

        {formules && (
          <section id="formules" className="ev-bloc cat-formules-bloc">
            <h2 className="ev-h2">{formules.titre}</h2>
            {formules.intro && <p className="ev-intro">{formules.intro}</p>}
            {formules.cartes?.length > 0 && (
              <ul className="cat-formules">
                {formules.cartes.map(c => {
                  const corps = (
                    <>
                      <span className="cat-formule-nom">{c.nom}</span>
                      <span className="cat-formule-prix">{c.prix}</span>
                      {c.detail && <span className="cat-formule-detail">{c.detail}</span>}
                    </>
                  )
                  return <li key={c.nom}>{c.href ? <a href={c.href} className="cat-formule">{corps}</a> : <div className="cat-formule">{corps}</div>}</li>
                })}
              </ul>
            )}
            {formules.tableau && (
              <div className="cat-tableau">
                {formules.tableau.titre && <h3 className="ev-h3">{formules.tableau.titre}</h3>}
                <div className="ev-table-wrap">
                  <table className="ev-table">
                    <thead><tr>{formules.tableau.entetes.map(h => <th key={h}>{h}</th>)}</tr></thead>
                    <tbody>
                      {formules.tableau.lignes.map(l => (
                        <tr key={l[0]}>
                          {l.map((c, i) => (i === 0 ? <td key={i}><strong>{c}</strong></td> : <td key={i} className="ev-nowrap">{c}</td>))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {formules.note && <p className="ev-note">{formules.note}</p>}
              </div>
            )}
          </section>
        )}

        <section id="devis" className="ev-devis cat-devis">
          <div className="ev-devis-inner">
            <DevisRapide
              defaultPrestation={devisPrestation}
              titre={devisTitres.fr}
              titreEn={devisTitres.en}
              sousTitre="Indiquez la date et votre email : devis détaillé sous 24h, sans engagement."
              sousTitreEn="Give us the date and your email: a detailed quote within 24 hours, no commitment."
            />
          </div>
        </section>
      </main>

      <CategoryClosing
        seoArticle={seoArticle}
        lang={lang}
        titreChoisir={titreChoisir}
        avantGuides={(
          <section className="ev-bloc ev-etroit cat-faq-bloc">
            <h2 className="ev-h2">{en ? 'Frequently asked questions' : 'Questions fréquentes'}</h2>
            <div className="ev-faq">
              {toutes.map(f => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}
      />

      <CategoryJsonLd
        name={nomJsonLd || titre}
        path={chemin}
        includeFaq={false}
        items={cartes.filter(c => c.href && !c.href.endsWith('/devis')).map(c => ({ name: c.nom, url: c.href }))}
      />
      <Footer />
    </>
  )
}
