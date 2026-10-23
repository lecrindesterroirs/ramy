import { notFound } from 'next/navigation'
import Image from 'next/image'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Breadcrumb from '../Breadcrumb'
import ParallaxImage from '../ParallaxImage'
import ReviewsBadge from '../ReviewsBadge'
import DevisRapide from '../DevisRapide'
import { BUSINESS_ID, productOfferPolicy } from '../../lib/site'
import {
  occasionPour, prixDesOccasion, exemplesOccasion, produitsOccasion, villesOccasion, evenementsOccasion,
  faqDerniereMinute, prixHT, LIV, MINIMUM, BASE, CHEMIN,
} from '../../lib/occasionsVue'

/*
  Page d'une occasion (/occasions/<slug> et /en/occasions/<slug>), rendue côté
  serveur. Refonte du 23/10/2026 sur le modèle des événements saisonniers :
  héros éditorial et ligne de faits, l'essentiel, sélection de fiches
  cliquables avec leur prix, tableau « Combien prévoir » calculé, guide, FAQ
  visible identique au balisage, devis. Plus de piliers numérotés « 01 », plus
  de surtitres en petites majuscules hors du héros. Styles : globals.css (.ev-, .occ-).
*/
const T = {
  fr: {
    accueil: 'Accueil', fil: 'Occasions', surtitre: "Traiteur d'entreprise",
    faits: (des) => `Dès ${des} par personne · commande jusqu'à la veille 14h · livraison dès 6h30 à Paris et en Île-de-France`,
    devis: 'Demander un devis', voir: 'Voir la sélection',
    brefTitre: "L'essentiel",
    bref: (court, des, ex, liv, min) => `${court} Dès ${des} par personne${ex ? ` ; ${ex.libelle.charAt(0).toLowerCase() + ex.libelle.slice(1)}, ${ex.totalTexte} livraison comprise` : ''}. Commande jusqu'à la veille 14h, livraison dès 6h30, ${liv} à Paris et dans les communes proches, minimum ${min}.`,
    selection: (cta) => `Notre sélection pour ${cta}`,
    selectionIntro: 'Chaque produit renvoie à sa fiche, avec sa composition et son prix.',
    combien: 'Combien prévoir',
    entetes: ['Commande', 'Ce qui est compris', 'Total HT', 'Par personne HT'],
    note: (liv, min) => `Livraison ${liv} comprise à Paris et dans les communes proches. Minimum de commande ${min}.`,
    guide: 'Le guide',
    villes: 'Nous livrons notamment à',
    toutes: 'toutes nos villes',
    annee: "Dans l'année : ",
    faq: 'Questions fréquentes',
    qBudget: (cta) => `Quel budget prévoir pour ${cta} ?`,
    aBudget: (ex, liv, min) => `Chez L'Écrin Traiteur, ${ex.libelle.charAt(0).toLowerCase() + ex.libelle.slice(1)} coûte ${ex.totalTexte} livraison comprise, soit ${ex.parPersonneTexte} par personne. La livraison est de ${liv} à Paris et dans les communes proches, le minimum de commande de ${min}.`,
    devisTitre: (cta) => `Organiser ${cta} ?`,
    devisSous: "Répondez en 30 secondes, devis détaillé sous 24h, livraison dans toute l'Île-de-France.",
    traduit: '',
  },
  en: {
    accueil: 'Home', fil: 'Occasions', surtitre: 'Corporate catering',
    faits: (des) => `From ${des} per person · order by 2 pm the day before · delivered from 6:30 am across Paris and Île-de-France`,
    devis: 'Ask for a quote', voir: 'See the selection',
    brefTitre: 'At a glance',
    bref: (court, des, ex, liv, min) => `${court} From ${des} per person${ex ? `; ${ex.libelle.charAt(0).toLowerCase() + ex.libelle.slice(1)}, ${ex.totalTexte} delivery included` : ''}. Order until 2 pm the day before, delivered from 6:30 am, ${liv} in Paris and nearby towns, minimum order ${min}.`,
    selection: (cta) => `What we recommend for ${cta}`,
    selectionIntro: 'Each product links to its page, with what it contains and its price.',
    combien: 'How much to allow',
    entetes: ['Order', 'What is included', 'Total excl. VAT', 'Per person excl. VAT'],
    note: (liv, min) => `Delivery at ${liv} included in Paris and nearby towns. Minimum order ${min}.`,
    guide: 'The guide',
    villes: 'Towns we deliver to include',
    toutes: 'all our towns',
    annee: 'Through the year: ',
    faq: 'Frequently asked questions',
    qBudget: (cta) => `What budget should you allow for ${cta}?`,
    aBudget: (ex, liv, min) => `At L'Écrin Traiteur, ${ex.libelle.charAt(0).toLowerCase() + ex.libelle.slice(1)} costs ${ex.totalTexte} delivery included, which is ${ex.parPersonneTexte} per person. Delivery is ${liv} in Paris and nearby towns, and the minimum order is ${min}.`,
    devisTitre: (cta) => `Organising ${cta}?`,
    devisSous: 'Answer in 30 seconds, a detailed quote within 24 hours, delivery across the Paris region.',
    traduit: ' (translated from French)',
  },
}

export default function OccasionView({ slug, en = false }) {
  const o = occasionPour(slug, en)
  if (!o) notFound()
  const lang = en ? 'en' : 'fr'
  const L = T[lang]
  const pre = en ? '/en' : ''
  const url = `${BASE}${pre}${CHEMIN}/${slug}`
  const des = prixHT(prixDesOccasion(slug), lang)
  const exemples = exemplesOccasion(slug, en)
  const ex0 = exemples[0]
  const liv = prixHT(LIV, lang)
  const min = prixHT(MINIMUM, lang)
  const produits = produitsOccasion(o, en)
  const villes = villesOccasion(o)
  const evts = evenementsOccasion(slug, en)
  const img = o.heroImg || '/creations-featured.webp'

  // Une seule question de budget : celle des données si elle existe, sinon la nôtre, calculée.
  const aBudget = o.faqData.some(f => /co[uû]te|budget|cost/i.test(f.q))
  const faq = [
    !aBudget && ex0 && { q: L.qBudget(o.cta), a: L.aBudget(ex0, liv, min) },
    ...o.faqData,
    faqDerniereMinute(en),
  ].filter(Boolean)

  const fil = [
    { label: L.accueil, href: en ? '/en' : '/' },
    { label: L.fil, href: `${pre}${CHEMIN}` },
    { label: o.name },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage', '@id': `${url}#webpage`, url, name: o.heroTitle, description: en ? o.heroDescription : o.seoDescription,
        inLanguage: en ? 'en-GB' : 'fr-FR', isPartOf: { '@id': `${BASE}/#website` },
        primaryImageOfPage: { '@type': 'ImageObject', url: `${BASE}${img}` }, breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`,
        itemListElement: fil.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, item: c.href ? `${BASE}${c.href === '/' ? '' : c.href}` : url })),
      },
      {
        '@type': 'Service', '@id': `${url}#service`, name: o.heroTitle,
        serviceType: en ? `Corporate catering: ${o.name}` : `Traiteur d'entreprise : ${o.name}`,
        provider: { '@id': BUSINESS_ID },
        areaServed: [{ '@type': 'City', name: 'Paris' }, { '@type': 'AdministrativeArea', name: 'Île-de-France' }],
        offers: {
          '@type': 'AggregateOffer', lowPrice: prixDesOccasion(slug).toFixed(2), priceCurrency: 'EUR',
          priceSpecification: { '@type': 'UnitPriceSpecification', price: prixDesOccasion(slug).toFixed(2), priceCurrency: 'EUR', valueAddedTaxIncluded: false, unitText: en ? 'per person' : 'par personne' },
          ...productOfferPolicy(),
        },
      },
      {
        '@type': 'ItemList', '@id': `${url}#selection`, name: L.selection(o.cta),
        itemListElement: produits.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.nom, url: `${BASE}${p.href}` })),
      },
      {
        '@type': 'FAQPage', '@id': `${url}#faq`,
        mainEntity: faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  }

  return (
    <>
      <Navbar showBanner />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="ev-main">
        <Breadcrumb items={fil} jsonLd={false} maxWidth="1440px" />

        <section className="ev-hero">
          <div className="ev-hero-texte">
            <p className="ev-surtitre">{L.surtitre}</p>
            <h1 className="ev-h1">{o.heroTitle}</h1>
            <p className="ev-chapo">{o.court}</p>
            <p className="ev-faits">{L.faits(des)}</p>
            <div className="ev-actions">
              <a className="ev-btn" href="#devis">{L.devis}</a>
              <a className="ev-btn-filet" href="#selection">{L.voir}</a>
            </div>
            <ReviewsBadge showCount />
          </div>
          <div className="ev-hero-img">
            <ParallaxImage priority sizes="(max-width: 900px) 100vw, 55vw" src={img} alt={o.heroTitle}
              strength={0.05} style={{ position: 'absolute', inset: 0 }} imgStyle={{ objectPosition: 'center 45%' }} />
          </div>
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{L.brefTitre}</h2>
          <p className="ev-texte">{L.bref(o.court, des, ex0, liv, min)}</p>
        </section>

        <section id="selection" className="ev-bloc">
          <h2 className="ev-h2">{L.selection(o.cta)}</h2>
          <p className="ev-intro">{L.selectionIntro}</p>
          <div className="ev-cartes occ-cartes">
            {produits.map(p => (
              <a key={p.href} href={p.href} className="ev-carte">
                <span className="ev-carte-img">
                  <Image fill sizes="(max-width: 768px) 50vw, 25vw" src={p.img} alt={p.nom} style={{ objectFit: 'cover' }} />
                </span>
                <span className="ev-carte-nom">{p.nom}</span>
                <span className="ev-carte-prix">{p.prixTexte}</span>
                {p.unite && <span className="ev-carte-unite">{p.unite}</span>}
              </a>
            ))}
          </div>
        </section>

        {exemples.length > 0 && (
          <section className="ev-bloc ev-etroit">
            <h2 className="ev-h2">{L.combien}</h2>
            <div className="ev-table-wrap">
              <table className="ev-table">
                <thead><tr>{L.entetes.map(h => <th key={h}>{h}</th>)}</tr></thead>
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
            <p className="ev-note">{L.note(liv, min)}</p>
          </section>
        )}

        {o.testimonial && (
          <section className="ev-bloc ev-etroit">
            <figure className="csp-citation occ-citation">
              <blockquote>« {o.testimonial.quote} »</blockquote>
              <figcaption>{o.testimonial.author}, {o.testimonial.role}, {o.testimonial.company}{L.traduit}</figcaption>
            </figure>
          </section>
        )}

        <article className="ev-bloc ev-etroit occ-article">
          <h2 className="ev-h2">{L.guide}</h2>
          <div dangerouslySetInnerHTML={{ __html: o.article }} />
        </article>

        <section className="ev-bloc ev-etroit">
          <p className="ev-texte occ-villes">
            {L.villes}{' '}
            {villes.map((v, i) => (
              <span key={v.slug}>{i > 0 && ', '}<a href={`${pre}/traiteur/${v.slug}`}>{v.nom}</a></span>
            ))}
            {' '}{en ? 'and' : 'et'} <a href={`${pre}/traiteur`}>{L.toutes}</a>.
          </p>
          {evts.length > 0 && (
            <p className="ev-texte occ-villes">
              {L.annee}
              {evts.map((e, i) => (
                <span key={e.href}>{i > 0 && ', '}<a href={e.href}>{e.nom}</a></span>
              ))}.
            </p>
          )}
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{L.faq}</h2>
          <div className="ev-faq">
            {faq.map(f => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="devis" className="ev-devis occ-devis">
          <div className="ev-devis-inner">
            <DevisRapide
              defaultPrestation={o.reglages.devis}
              titre={T.fr.devisTitre(o.ctaFr)}
              titreEn={T.en.devisTitre(o.reglages.ctaEn)}
              sousTitre={T.fr.devisSous}
              sousTitreEn={T.en.devisSous}
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
