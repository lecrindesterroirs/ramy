import { notFound } from 'next/navigation'
import Image from 'next/image'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Breadcrumb from '../Breadcrumb'
import ParallaxImage from '../ParallaxImage'
import ReviewsBadge from '../ReviewsBadge'
import DevisRapide from '../DevisRapide'
import { UI } from './textes'
import { FAQ_DERNIERE_MINUTE } from '../../lib/occasionsData'
import { FAQ_DERNIERE_MINUTE_EN } from '../../lib/en/pages/occasions'
import { BUSINESS_ID, productOfferPolicy } from '../../lib/site'
import {
  evenementPour, contexteDate, remplir, prixDesTexte, exemplesFormates, guidesLies, occasionsLiees,
  voisins, produitsDe, majTexte, PRESTATIONS, prixHT, LIV, MINIMUM, BASE, CHEMIN,
} from '../../lib/evenementsVue'
import { prixDes } from '../../lib/evenementsPrix'

/*
  Page d'un événement saisonnier, rendue côté serveur (modèle : OccasionView).
  La même vue sert /creations/evenements-saisonniers/<slug> et sa version
  /en. Seuls Navbar, ParallaxImage, ReviewsBadge et DevisRapide sont des
  îlots client : aucune donnée d'événement, de Journal ou de traduction
  n'est envoyée au navigateur.

  Mise en page calquée sur les pages abouties du site : héros éditorial,
  cartes de la page d'accueil et des catégories (carte entière cliquable,
  titre qui passe en --accent-deep au survol), boutons noirs sans flèche.
  Les styles sont dans app/globals.css, préfixe .ev-.
*/
export default function EvenementView({ slug, en = false }) {
  const ev = evenementPour(slug, en)
  if (!ev) notFound()
  const lang = en ? 'en' : 'fr'
  const T = UI[lang]
  const pre = en ? '/en' : ''
  const url = `${BASE}${pre}${CHEMIN}/${ev.slug}`

  const ctx = contexteDate(ev, lang)
  const r = (s) => remplir(s, ctx)
  const des = prixDesTexte(ev, lang)
  const exemples = exemplesFormates(ev, lang)
  const ex0 = exemples[0] && { libelle: exemples[0].libelle, total: exemples[0].totalTexte, parPersonne: exemples[0].parPersonneTexte }
  const produits = produitsDe(ev, en)
  const guides = guidesLies(ev, en)
  const occasions = occasionsLiees(ev, en)
  const proches = voisins(ev, en)
  const liv = prixHT(LIV, lang)
  const min = prixHT(MINIMUM, lang)
  const surtitre = en ? ctx.date.replace(/^around /, '') : ctx.date.replace(/^(vers le|environ) /, '')

  // Le premier mot du surtitre, en majuscule : « Octobre 2026 », « Samedi 31 octobre 2026 ».
  const surtitreAffiche = surtitre.charAt(0).toUpperCase() + surtitre.slice(1)

  const faq = [
    { q: T.qDate(ev.nom, ctx.annee), a: T.aDate(ctx.date, ctx.conseil) },
    ex0 && { q: T.qBudget(ev.ctaNom || ev.nom), a: T.aBudget(ex0, liv, min) },
    ...(ev.faq || []).map(f => ({ q: r(f.q), a: r(f.a) })),
    { q: T.qDelai, a: T.aDelai },
    ev.halal ? { q: T.qHalal, a: T.aHalal } : { q: T.qRegimes, a: T.aRegimes },
    en ? FAQ_DERNIERE_MINUTE_EN : FAQ_DERNIERE_MINUTE,
  ].filter(Boolean)

  const lignesPratiques = [
    [T.lignes.edition, ctx.date],
    ctx.conseil && [T.lignes.conseil, ctx.conseil],
    [T.lignes.commande, T.commande],
    [T.lignes.livraison, T.livraison(liv)],
    [T.lignes.minimum, min],
    [T.lignes.regimes, ev.halal ? T.regimesHalal : T.regimes],
  ].filter(Boolean)

  // Photo de la rangée « signature » : celle du guide si elle existe, sinon la première pièce de la sélection.
  const imgSignature = ev.article.sections.find(s => s.img)?.img || produits.find(p => p.img && p.img !== ev.img)?.img
  const prestationDevis = PRESTATIONS[ev.prestations[0]].devis

  const fil = [
    { label: T.accueil, href: en ? '/en' : '/' },
    { label: T.fil, href: `${pre}${CHEMIN}` },
    { label: ev.nom },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: ev.seoTitle || ev.h1,
        description: ev.metaDescription,
        inLanguage: en ? 'en-GB' : 'fr-FR',
        dateModified: ev.maj,
        isPartOf: { '@id': `${BASE}/#website` },
        about: { '@type': 'Thing', name: ev.nom },
        primaryImageOfPage: { '@type': 'ImageObject', url: `${BASE}${ev.img}` },
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: fil.map((c, i) => ({
          '@type': 'ListItem', position: i + 1, name: c.label, ...(c.href ? { item: `${BASE}${c.href === '/' ? '' : c.href}` } : { item: url }),
        })),
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: ev.h1,
        serviceType: en ? `Corporate catering for ${ev.nom}` : `Traiteur d'entreprise pour ${ev.nom}`,
        provider: { '@id': BUSINESS_ID },
        areaServed: [{ '@type': 'City', name: 'Paris' }, { '@type': 'AdministrativeArea', name: 'Île-de-France' }],
        offers: {
          '@type': 'AggregateOffer',
          lowPrice: prixDes(ev.prestations).toFixed(2),
          priceCurrency: 'EUR',
          priceSpecification: { '@type': 'UnitPriceSpecification', price: prixDes(ev.prestations).toFixed(2), priceCurrency: 'EUR', valueAddedTaxIncluded: false, unitText: en ? 'per person' : 'par personne' },
          ...productOfferPolicy(),
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: T.selection(ev.nom),
          itemListElement: produits.map(p => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Product', name: p.nom, url: `${BASE}${p.href}`, image: `${BASE}${p.img}` },
            ...(p.prix != null ? { price: Number(p.prix).toFixed(2), priceCurrency: 'EUR' } : {}),
          })),
        },
      },
      {
        '@type': 'Article',
        '@id': `${url}#guide`,
        headline: r(ev.article.titre),
        inLanguage: en ? 'en-GB' : 'fr-FR',
        dateModified: ev.maj,
        author: { '@id': BUSINESS_ID },
        publisher: { '@id': BUSINESS_ID },
        mainEntityOfPage: { '@id': `${url}#webpage` },
        image: `${BASE}${ev.img}`,
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  }

  return (
    <>
      <Navbar showBanner />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className={`ev-main${ev.theme === 'rose' ? ' ev-rose' : ''}`}>
        <Breadcrumb items={fil} jsonLd={false} maxWidth="1440px" />

        {/* Héros éditorial : un seul surtitre, le H1, une phrase, les faits, deux actions */}
        <section className="ev-hero">
          <div className="ev-hero-texte">
            <p className="ev-surtitre">{surtitreAffiche}</p>
            <h1 className="ev-h1">{ev.h1}</h1>
            <p className="ev-chapo">{r(ev.descCourt)}</p>
            <p className="ev-faits">{T.faits(ctx.date.charAt(0).toUpperCase() + ctx.date.slice(1), des)}</p>
            <div className="ev-actions">
              <a className="ev-btn" href="#devis">{T.devis}</a>
              <a className="ev-btn-filet" href="#selection">{T.voirSelection}</a>
            </div>
            <ReviewsBadge showCount />
          </div>
          <div className="ev-hero-img">
            <ParallaxImage priority sizes="(max-width: 900px) 100vw, 55vw" src={ev.img} alt={ev.imgAlt || ev.nom}
              strength={0.05} style={{ position: 'absolute', inset: 0 }} imgStyle={{ objectPosition: ev.imgPos || 'center' }} />
          </div>
        </section>

        {/* L'essentiel, en phrases citables */}
        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{T.brefTitre}</h2>
          <p className="ev-texte">{r(ev.enBref)} {T.bref({ date: ctx.date, conseil: ctx.conseil, des, ex: ex0 })}</p>
          {ev.bilan?.montant && <p className="ev-texte">{T.bilan(ev.bilan)}</p>}
          <p className="ev-maj">{T.maj(majTexte(ev, lang))}</p>
        </section>

        {/* La sélection : fiches du catalogue, puis ce qui est sur demande */}
        <section id="selection" className="ev-bloc">
          <h2 className="ev-h2">{T.selection(ev.nom)}</h2>
          <p className="ev-intro">{T.selectionIntro}</p>
          <div className="ev-cartes">
            {produits.map(p => (
              <a key={p.href} href={p.href} className="ev-carte">
                <span className="ev-carte-img">
                  {p.img ? <Image fill sizes="(max-width: 768px) 50vw, 25vw" src={p.img} alt={p.nom} style={{ objectFit: 'cover' }} /> : <span className="pgr-sans-photo">{p.nom}</span>}
                </span>
                <span className="ev-carte-nom">{p.nom}</span>
                <span className="ev-carte-prix">{p.prixTexte}</span>
                {p.unite && <span className="ev-carte-unite">{p.unite}</span>}
              </a>
            ))}
          </div>
          {ev.horsCatalogue?.length > 0 && (
            <div className="ev-surdemande">
              <h3 className="ev-h3">{T.surDemande}</h3>
              <p className="ev-intro">{T.surDemandeIntro}</p>
              <ul>
                {ev.horsCatalogue.map(h => <li key={h}>{h}</li>)}
              </ul>
            </div>
          )}
        </section>

        {/* Rangée signature : photo et texte */}
        <section className="ev-signature">
          {imgSignature && (
            <div className="ev-signature-img">
              <Image fill sizes="(max-width: 900px) 100vw, 45vw" src={imgSignature} alt="" style={{ objectFit: 'cover' }} />
            </div>
          )}
          <div className="ev-signature-texte">
            <h2 className="ev-h2">{ev.differentiateur.label}</h2>
            <p className="ev-texte">{r(ev.desc)}</p>
            <p className="ev-texte">{r(ev.differentiateur.text)}</p>
          </div>
        </section>

        {/* Exemples chiffrés, calculés */}
        {exemples.length > 0 && (
          <section className="ev-bloc ev-etroit">
            <h2 className="ev-h2">{T.combien}</h2>
            <div className="ev-table-wrap">
              <table className="ev-table">
                <thead><tr>{T.entetes.map(h => <th key={h}>{h}</th>)}</tr></thead>
                <tbody>
                  {exemples.map(x => (
                    <tr key={x.libelle}>
                      <td><strong>{x.libelle}</strong></td>
                      <td>{x.compris}</td>
                      <td className="ev-nowrap">{x.totalTexte}</td>
                      <td className="ev-nowrap">{x.parPersonneTexte}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="ev-note">{T.noteExemples(liv, min)}</p>
            {ex0 && <p className="ev-texte">{T.phraseExemple(ex0)}</p>}
          </section>
        )}

        {/* Quand et comment */}
        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{T.pratique}</h2>
          <ul className="ev-lignes">
            {lignesPratiques.map(([label, texte]) => (
              <li key={label}><strong>{label}&nbsp;:</strong> {texte}</li>
            ))}
          </ul>
        </section>

        {/* Le guide */}
        <article className="ev-bloc ev-etroit ev-guide">
          <h2 className="ev-h2 ev-guide-titre">{r(ev.article.titre)}</h2>
          {ev.article.sections.map(s => (
            <div key={s.heading} className="ev-guide-section">
              <h2 className="ev-h3">{r(s.heading)}</h2>
              <p className="ev-texte">{r(s.texte)}</p>
              {s.img && (
                <div className="ev-guide-img">
                  <Image fill sizes="(max-width: 900px) 100vw, 720px" src={s.img} alt={s.imgAlt || ''} style={{ objectFit: 'cover' }} />
                </div>
              )}
            </div>
          ))}
        </article>

        {ev.halal && (
          <p className="ev-halal">
            {en ? 'Our ' : 'Notre '}
            <a href={`${pre}/traiteur-halal`}>{en ? 'halal corporate catering: all the savoury food is pork-free and alcohol-free' : "traiteur halal d'entreprise : tout le salé est sans porc et sans alcool"}</a>.
          </p>
        )}

        {/* FAQ visible, la même que le balisage */}
        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{T.faq}</h2>
          <div className="ev-faq">
            {faq.map(f => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="devis" className="ev-devis">
          <div className="ev-devis-inner">
            <DevisRapide
              defaultPrestation={prestationDevis}
              titre={T.devisTitre(ev.ctaNom || ev.nom)}
              titreEn={UI.en.devisTitre(ev.ctaNom || ev.nom)}
              sousTitre={UI.fr.devisSousTitre}
              sousTitreEn={UI.en.devisSousTitre}
            />
          </div>
        </section>

        {/* Dans l'année : les rendez-vous suivants, en liste */}
        <section className="ev-bloc">
          <h2 className="ev-h2">{T.annee}</h2>
          <ul className="ev-liste">
            {proches.map(p => (
              <li key={p.href}>
                <a href={p.href} className="ev-ligne">
                  <span className="ev-ligne-img"><Image fill sizes="120px" src={p.img} alt="" style={{ objectFit: 'cover' }} /></span>
                  <span className="ev-ligne-corps">
                    <span className="ev-ligne-nom">{p.nom}</span>
                    <span className="ev-ligne-desc">{p.descCourt}</span>
                    <span className="ev-ligne-meta">{p.date.charAt(0).toUpperCase() + p.date.slice(1)} · {en ? 'from' : 'dès'} {p.des}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {(guides.length > 0 || occasions.length > 0) && (
          <section className="ev-bloc ev-etroit">
            <h2 className="ev-h2">{T.lectures}</h2>
            <ul className="ev-liens">
              {guides.map(g => (
                <li key={g.href}><a href={g.href}>{g.titre}</a><span>{T.guide}</span></li>
              ))}
              {occasions.map(o => (
                <li key={o.href}><a href={o.href}>{o.titre}</a><span>{T.occasion}</span></li>
              ))}
            </ul>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}
