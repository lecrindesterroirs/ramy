import Image from 'next/image'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Breadcrumb from '../Breadcrumb'
import ParallaxImage from '../ParallaxImage'
import ReviewsBadge from '../ReviewsBadge'
import DevisRapide from '../DevisRapide'
import { UI } from './textes'
import { EN_EVENEMENTS } from '../../lib/en/pages/evenements'
import { guidesPour } from '../../lib/guidesMaillage'
import { enArticle } from '../../lib/en/journal'
import { prochaineOccurrence, libelleOccurrence, moisDe, aujourdhui } from '../../lib/evenementsCalendrier'
import { evenementsPublies, prixDesTexte, PRESTATIONS, prixHT, LIV, MINIMUM, BASE, CHEMIN } from '../../lib/evenementsVue'

/*
  Page d'accueil des événements saisonniers (FR et /en), rendue côté serveur.
  Calendrier en liste éditoriale par mois, trié par prochaine édition : pas
  de grille de cartes identiques, pas de tag, pas de flèche. Styles dans
  app/globals.css (préfixes .ev- et .sais-).
*/
const H = {
  fr: {
    surtitre: (a) => `Calendrier ${a}-${a + 1}`,
    h1: 'Événements saisonniers en entreprise',
    chapo: "De la galette de janvier au repas de Noël, chaque moment de l'année a ses produits. Nous livrons vos équipes dès 6h30 à Paris et en Île-de-France, avec des prix calculés à l'avance.",
    calendrier: "Voir le calendrier",
    alt: "Petit-déjeuner d'entreprise dressé par L'Écrin Traiteur dans un salon, avec un maître d'hôtel",
    reponseTitre: "Quels événements fêter en entreprise dans l'année ?",
    reponse: (liste, liv, min) => `Chez L'Écrin Traiteur, les prochains rendez-vous de l'année sont ${liste}. La livraison est de ${liv} à Paris et dans les communes proches, le minimum de commande de ${min}, et la commande se passe jusqu'à la veille 14h.`,
    calTitre: "Le calendrier de l'année",
    tableTitre: 'Les dates et les prix, en un tableau',
    entetes: ['Date', 'Événement', 'Format conseillé', 'Prix du format (HT par personne)'],
    faq: 'Questions fréquentes',
    voir: (nom) => `Organiser ${nom}`,
    guides: 'Guides pour préparer',
    devisTitre: 'Un événement saisonnier à organiser ?',
  },
  en: {
    surtitre: (a) => `Calendar ${a}-${a + 1}`,
    h1: 'Seasonal corporate events',
    chapo: 'From the January galette to the Christmas meal, every moment of the year has its own food. We deliver your teams from 6:30 am across Paris and Île-de-France, with prices worked out in advance.',
    calendrier: 'See the calendar',
    alt: "A corporate breakfast laid out by L'Écrin Traiteur in a reception room, with a waiter",
    reponseTitre: 'Which events should a company mark during the year?',
    reponse: (liste, liv, min) => `At L'Écrin Traiteur, the next dates in the year are ${liste}. Delivery is ${liv} in Paris and nearby towns, the minimum order is ${min}, and you can order until 2 pm the day before.`,
    calTitre: 'The calendar for the year',
    tableTitre: 'Dates and prices in one table',
    entetes: ['Date', 'Event', 'Recommended format', 'Format price (excl. VAT per person)'],
    faq: 'Frequently asked questions',
    voir: (nom) => `Organise ${nom}`,
    guides: 'Guides to help you prepare',
    devisTitre: 'A seasonal event to organise?',
  },
}

const FAQ = {
  fr: (liv, min) => [
    { q: 'Combien de temps à l\'avance faut-il commander ?', a: "Jusqu'à la veille 14h pour une livraison dès 6h30. À partir de 50 personnes ou pour plusieurs sites, prévoyez 48 h ; pour une animation (atelier crêpes, barista, bar à mocktails) ou une pièce personnalisée, demandez le devis quelques jours avant." },
    { q: 'Quel est le budget minimum ?', a: `Le minimum de commande est de ${min}, et la livraison de ${liv} à Paris et dans les communes proches. Une petite équipe commande comme une grande.` },
    { q: 'Peut-on personnaliser les produits aux couleurs de l\'entreprise ?', a: "Oui, sur devis : madeleines, cookies et emballages à votre message ou à vos couleurs. Comptez quelques jours de délai en plus." },
    { q: 'Livrez-vous plusieurs sites le même jour ?', a: "Oui, à Paris et en Île-de-France. Prévenez-nous 48 h avant pour organiser les tournées." },
    { q: 'Le salé est-il halal ?', a: "Oui. Tout notre salé est halal et sans porc, sans alcool, sans supplément. Options végétariennes, vegan et sans gluten sur demande." },
  ],
  en: (liv, min) => [
    { q: 'How far ahead should you order?', a: "Until 2 pm the day before for delivery from 6:30 am. From 50 people or across several sites, allow 48 hours; for a live station (crêpes, barista, mocktail bar) or a personalised item, ask for the quote a few days ahead." },
    { q: 'What is the minimum budget?', a: `The minimum order is ${min}, and delivery is ${liv} in Paris and nearby towns. A small team orders just like a large one.` },
    { q: "Can the products be personalised in the company's colours?", a: 'Yes, on quote: madeleines, cookies and packaging with your message or in your colours. Allow a few extra days.' },
    { q: 'Do you deliver to several sites on the same day?', a: 'Yes, across Paris and Île-de-France. Give us 48 hours\' notice to plan the rounds.' },
    { q: 'Is the savoury food halal?', a: 'Yes. All our savoury food is halal and pork-free, with no alcohol, at no extra cost. Vegetarian, vegan and gluten-free options on request.' },
  ],
}

export default function HubView({ en = false }) {
  const lang = en ? 'en' : 'fr'
  const T = UI[lang]
  const L = H[lang]
  const pre = en ? '/en' : ''
  const url = `${BASE}${pre}${CHEMIN}`
  const auj = aujourdhui()
  const liv = prixHT(LIV, lang)
  const min = prixHT(MINIMUM, lang)

  const liste = evenementsPublies(en)
    .map(e => {
      const t = en ? { ...e, ...EN_EVENEMENTS[e.slug] } : e
      const occ = prochaineOccurrence(e.date, auj)
      return {
        slug: e.slug, img: e.img, imgPos: e.imgPos, nom: t.nom, descCourt: t.descCourt, imgAlt: t.imgAlt,
        occ, date: libelleOccurrence(occ, e.date, lang), des: prixDesTexte(e, lang),
        format: PRESTATIONS[e.prestations[0]][lang],
        prixFormat: prixHT(PRESTATIONS[e.prestations[0]].prix, lang),
        href: `${pre}${CHEMIN}/${e.slug}`,
      }
    })
    .sort((a, b) => a.occ.debut - b.occ.debut)

  const premier = liste[0]
  const enCours = premier.occ.debut <= auj

  // Groupes par mois de la prochaine édition : « octobre 2026 », « novembre 2026 »…
  const groupes = []
  for (const e of liste) {
    const cle = `${moisDe(e.occ.debut, lang)} ${e.occ.debut.getUTCFullYear()}`
    const g = groupes[groupes.length - 1]
    if (g && g.cle === cle) g.items.push(e)
    else groupes.push({ cle, items: [e] })
  }

  const anneeDebut = auj.getUTCFullYear()
  const phraseListe = liste.slice(0, 8).map(e => `${e.nom} (${e.date}, ${en ? 'from' : 'dès'} ${e.des})`)
  const reponse = L.reponse(`${phraseListe.slice(0, -1).join(', ')} ${en ? 'and' : 'et'} ${phraseListe[phraseListe.length - 1]}`, liv, min)
  const faq = [{ q: L.reponseTitre, a: reponse }, ...FAQ[lang](liv, min)]

  const guides = guidesPour(CHEMIN)
    .map(g => {
      const slug = g.href.replace('/journal/', '')
      if (!en) return g
      const a = enArticle(slug)
      return a && { href: `/en/journal/${slug}`, title: a.metaTitle || a.titre }
    })
    .filter(Boolean)

  const fil = [{ label: T.accueil, href: en ? '/en' : '/' }, { label: T.fil }]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${url}#webpage`,
        url,
        name: L.h1,
        inLanguage: en ? 'en-GB' : 'fr-FR',
        isPartOf: { '@id': `${BASE}/#website` },
        breadcrumb: { '@id': `${url}#breadcrumb` },
        mainEntity: { '@id': `${url}#liste` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: T.accueil, item: `${BASE}${en ? '/en' : ''}` },
          { '@type': 'ListItem', position: 2, name: T.fil, item: url },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `${url}#liste`,
        itemListOrder: 'https://schema.org/ItemListOrderAscending',
        itemListElement: liste.map((e, i) => ({ '@type': 'ListItem', position: i + 1, name: e.nom, url: `${BASE}${e.href}` })),
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

      <main className="ev-main">
        <Breadcrumb items={fil} jsonLd={false} maxWidth="1440px" />

        <section className="ev-hero">
          <div className="ev-hero-texte">
            <p className="ev-surtitre">{L.surtitre(anneeDebut)}</p>
            <h1 className="ev-h1">{L.h1}</h1>
            <p className="ev-chapo">{L.chapo}</p>
            <div className="ev-actions">
              <a className="ev-btn" href="#devis">{T.devis}</a>
              <a className="ev-btn-filet" href="#calendrier">{L.calendrier}</a>
            </div>
            <ReviewsBadge showCount />
          </div>
          <div className="ev-hero-img">
            <ParallaxImage priority sizes="(max-width: 900px) 100vw, 55vw" src="/maitre-hotel-petit-dejeuner-salon.webp" alt={L.alt}
              strength={0.05} style={{ position: 'absolute', inset: 0 }} imgStyle={{ objectPosition: 'center 60%' }} />
          </div>
        </section>

        {/* Prochain rendez-vous : rangée éditoriale */}
        <section className="ev-signature sais-prochain">
          <a href={premier.href} className="ev-signature-img sais-prochain-img" aria-hidden="true" tabIndex={-1}>
            <Image fill sizes="(max-width: 900px) 100vw, 45vw" src={premier.img} alt="" style={{ objectFit: 'cover', objectPosition: premier.imgPos || 'center' }} />
          </a>
          <div className="ev-signature-texte">
            <p className="ev-meta">{enCours ? T.enCours : T.prochain} · {premier.date}</p>
            <h2 className="ev-h2"><a href={premier.href} className="sais-titre-lien">{premier.nom}</a></h2>
            <p className="ev-texte">{premier.descCourt}</p>
            <p className="ev-texte">{en ? 'From' : 'Dès'} {premier.des} {T.personne}.</p>
            <a className="ev-btn-filet" href={premier.href}>{L.voir(premier.nom)}</a>
          </div>
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{L.reponseTitre}</h2>
          <p className="ev-texte">{reponse}</p>
        </section>

        {/* Calendrier en liste par mois */}
        <section id="calendrier" className="ev-bloc">
          <h2 className="ev-h2">{L.calTitre}</h2>
          <div className="sais-calendrier">
            {groupes.map(g => (
              <div key={g.cle} className="sais-mois">
                <p className="sais-mois-nom">{g.cle.charAt(0).toUpperCase() + g.cle.slice(1)}</p>
                <ul className="ev-liste">
                  {g.items.map(e => (
                    <li key={e.slug}>
                      <a href={e.href} className="ev-ligne">
                        <span className="ev-ligne-img"><Image fill sizes="160px" src={e.img} alt="" style={{ objectFit: 'cover', objectPosition: e.imgPos || 'center' }} /></span>
                        <span className="ev-ligne-corps">
                          <span className="ev-ligne-nom">{e.nom}</span>
                          <span className="ev-ligne-desc">{e.descCourt}</span>
                          <span className="ev-ligne-meta">{e.date.charAt(0).toUpperCase() + e.date.slice(1)} · {en ? 'from' : 'dès'} {e.des} {T.personne}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{L.tableTitre}</h2>
          <div className="ev-table-wrap">
            <table className="ev-table">
              <thead><tr>{L.entetes.map(h => <th key={h}>{h}</th>)}</tr></thead>
              <tbody>
                {liste.map(e => (
                  <tr key={e.slug}>
                    <td>{e.date.charAt(0).toUpperCase() + e.date.slice(1)}</td>
                    <td><a href={e.href}>{e.nom}</a></td>
                    <td>{e.format}</td>
                    <td className="ev-nowrap">{e.prixFormat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="ev-note">{T.noteExemples(liv, min)}</p>
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{L.faq}</h2>
          <div className="ev-faq">
            {faq.slice(1).map(f => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="devis" className="ev-devis">
          <div className="ev-devis-inner">
            <DevisRapide titre={H.fr.devisTitre} titreEn={H.en.devisTitre} sousTitre={UI.fr.devisSousTitre} sousTitreEn={UI.en.devisSousTitre} />
          </div>
        </section>

        {guides.length > 0 && (
          <section className="ev-bloc ev-etroit">
            <h2 className="ev-h2">{L.guides}</h2>
            <ul className="ev-liens">
              {guides.map(g => (
                <li key={g.href}><a href={g.href}>{g.title}</a>{g.meta && <span>{g.meta}</span>}</li>
              ))}
            </ul>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}
