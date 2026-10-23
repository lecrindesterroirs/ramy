import Image from 'next/image'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Breadcrumb from '../Breadcrumb'
import ParallaxImage from '../ParallaxImage'
import ReviewsBadge from '../ReviewsBadge'
import DevisRapide from '../DevisRapide'
import CategoryTabs from '../CategoryTabs'
import CategoryJsonLd from '../CategoryJsonLd'
import {
  formules, totalLivre, EFFECTIFS, guidesCocktail, lignesPratiques, faqCatalogue, prixHT, CHEMIN, MINIMUM, LIV, BASE,
} from '../../lib/cocktailsVue'

/*
  Page Cocktails, FR et /en, rendue côté serveur (refonte du 22/10/2026 sur le
  modèle des événements saisonniers ; version anglaise alignée le 23/10/2026,
  elle était restée une page de texte générique). Prix, pièces, livraison et
  minimum sont calculés (lib/cocktailsVue.js). La FAQ affichée est celle qui
  est balisée ici. Styles : globals.css, .ev- et .ckv-.
*/
export default function CocktailsIndexView({ en = false }) {
  const F = formules(en)
  const des = Math.min(...F.map(f => f.prixNum))
  const [I, R, C] = F
  const guides = guidesCocktail(en)
  const lignes = lignesPratiques(en)
  const faq = faqCatalogue(en)
  const pre = en ? '/en' : ''
  const ht = (x) => prixHT(x, en)
  const liste = (arr) => arr.join(', ').replace(/, ([^,]+)$/, en ? ' or $1' : ' ou $1')

  const T = en ? {
    accueil: 'Home', fil: 'Cocktails', surtitre: 'Corporate cocktail reception',
    h1: 'Corporate cocktail catering delivered in Paris',
    chapo: `Three menus of ${liste(F.map(f => f.pieces))} savoury and sweet pieces per person, delivered arranged to your venue, across Paris and Île-de-France.`,
    faits: `From ${ht(des)} per person · delivery ${ht(LIV)} · order by 2 pm the day before · minimum ${ht(MINIMUM)}`,
    devis: 'Ask for a quote', voir: 'See the menus',
    alt: "Board of savoury canapés for a corporate cocktail reception by L'Écrin Traiteur",
    brefTitre: 'At a glance',
    bref: `A corporate cocktail reception is counted in pieces per person: ${I.pieces} pieces for drinks of an hour and a half (${I.label}, ${ht(I.prixNum)}), ${R.pieces} pieces to replace a lunch (${R.label}, ${ht(R.prixNum)}), ${C.pieces} pieces for a standing dinner (${C.label}, ${ht(C.prixNum)}). The price per person does not change with the headcount. For 50 guests on ${R.label}, allow ${ht(totalLivre(50, R.prixNum))} delivery included, drinks extra.`,
    formulesTitre: 'The three menus',
    formulesIntro: 'Each menu links to its page: the pieces one by one, the price and the quantities.',
    carte: (f) => `${f.label} cocktail menu`,
    carteMeta: (f) => `${ht(f.prixNum)} per person · ${f.pieces} pieces`,
    combien: 'How much to allow',
    effectif: 'Headcount', pieces: 'pieces', personnes: 'people',
    note: `Totals excl. VAT with delivery (${ht(LIV)} in Paris and nearby towns), drinks not included.`,
    pratique: 'Ordering and delivery',
    occ: <>To choose by occasion, see also <a href="/en/occasions/cocktail-entreprise">organising a corporate cocktail reception</a> and <a href="/en/occasions/afterwork-entreprise">afterwork catering</a>.</>,
    faq: 'Frequently asked questions',
    devisTitre: 'A cocktail reception to organise?',
    devisSous: 'Answer in 30 seconds, a detailed quote within 24 hours, delivery across the Paris region.',
    guides: 'To help you prepare', guide: 'Guide',
  } : {
    accueil: 'Accueil', fil: 'Cocktails', surtitre: "Cocktail d'entreprise",
    h1: "Cocktail d'entreprise livré à Paris",
    chapo: `Trois formules de ${liste(F.map(f => f.pieces))} pièces salées et sucrées par personne, livrées dressées sur votre lieu de réception, à Paris et en Île-de-France.`,
    faits: `Dès ${ht(des)} par personne · livraison ${ht(LIV)} · commande jusqu'à la veille 14h · minimum ${ht(MINIMUM)}`,
    devis: 'Demander un devis', voir: 'Voir les formules',
    alt: "Planche de bouchées salées pour un cocktail d'entreprise L'Écrin Traiteur",
    brefTitre: "L'essentiel",
    bref: `Un cocktail d'entreprise se compte en pièces par personne : ${I.pieces} pièces pour un pot d'une heure et demie (${I.label}, ${ht(I.prixNum)}), ${R.pieces} pièces pour remplacer un déjeuner (${R.label}, ${ht(R.prixNum)}), ${C.pieces} pièces pour un dîner debout (${C.label}, ${ht(C.prixNum)}). Le prix par personne ne change pas avec l'effectif. Pour 50 personnes en ${R.label}, comptez ${ht(totalLivre(50, R.prixNum))} livraison comprise, boissons en plus.`,
    formulesTitre: 'Les trois formules',
    formulesIntro: 'Chaque formule renvoie à sa fiche : composition pièce par pièce, prix et quantités.',
    carte: (f) => `Cocktail ${f.label}`,
    carteMeta: (f) => `${ht(f.prixNum)} par personne · ${f.pieces} pièces`,
    combien: 'Combien prévoir',
    effectif: 'Effectif', pieces: 'pièces', personnes: 'personnes',
    note: `Totaux HT livraison comprise (${ht(LIV)} à Paris et dans les communes proches), boissons non comprises.`,
    pratique: 'Commande et livraison',
    occ: <>Pour choisir selon l&apos;occasion, voir aussi <a href="/occasions/cocktail-entreprise">organiser un cocktail d&apos;entreprise</a> et <a href="/occasions/afterwork-entreprise">traiteur afterwork d&apos;entreprise</a>.</>,
    faq: 'Questions fréquentes',
    devisTitre: 'Un cocktail à organiser ?',
    devisSous: "Répondez en 30 secondes, devis détaillé sous 24h, livraison dans toute l'Île-de-France.",
    guides: 'Pour préparer', guide: 'Guide',
  }

  const url = `${BASE}${pre}${CHEMIN}`
  const faqLd = {
    '@context': 'https://schema.org', '@type': 'FAQPage', '@id': `${url}#faq`, inLanguage: en ? 'en' : 'fr',
    mainEntity: faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }

  return (
    <>
      <Navbar showBanner />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <main className="ev-main">
        <Breadcrumb maxWidth="1440px" items={[{ label: T.accueil, href: en ? '/en' : '/' }, { label: T.fil }]} jsonLd={false} />

        <section className="ev-hero">
          <div className="ev-hero-texte">
            <p className="ev-surtitre">{T.surtitre}</p>
            <h1 className="ev-h1">{T.h1}</h1>
            <p className="ev-chapo">{T.chapo}</p>
            <p className="ev-faits">{T.faits}</p>
            <div className="ev-actions">
              <a className="ev-btn" href="#devis">{T.devis}</a>
              <a className="ev-btn-filet" href="#formules">{T.voir}</a>
            </div>
            <ReviewsBadge showCount />
          </div>
          <div className="ev-hero-img">
            <ParallaxImage priority sizes="(max-width: 900px) 100vw, 55vw" src="/hero-cocktail.webp" alt={T.alt}
              strength={0.05} style={{ position: 'absolute', inset: 0 }} imgStyle={{ objectPosition: 'center' }} />
          </div>
        </section>

        <CategoryTabs lang={en ? 'en' : 'fr'} />

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{T.brefTitre}</h2>
          <p className="ev-texte">{T.bref}</p>
        </section>

        <section id="formules" className="ev-bloc">
          <h2 className="ev-h2">{T.formulesTitre}</h2>
          <p className="ev-intro">{T.formulesIntro}</p>
          <div className="ev-cartes">
            {F.map(f => (
              <a key={f.key} href={`${pre}${CHEMIN}/${f.key}`} className="ev-carte">
                <span className="ev-carte-img">
                  <Image fill sizes="(max-width: 768px) 100vw, 33vw" src={f.img} alt={T.carte(f)} style={{ objectFit: 'cover' }} />
                </span>
                <span className="ev-carte-nom">{T.carte(f)}</span>
                <span className="ev-carte-prix">{T.carteMeta(f)}</span>
                <span className="ev-carte-unite">{f.accroche}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{T.combien}</h2>
          <div className="ev-table-wrap">
            <table className="ev-table">
              <thead>
                <tr>
                  <th>{T.effectif}</th>
                  {F.map(f => <th key={f.key}>{f.label} ({f.pieces} {T.pieces})</th>)}
                </tr>
              </thead>
              <tbody>
                {EFFECTIFS.map(n => (
                  <tr key={n}>
                    <td><strong>{n} {T.personnes}</strong></td>
                    {F.map(f => <td key={f.key} className="ev-nowrap">{ht(totalLivre(n, f.prixNum))}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="ev-note">{T.note}</p>
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{T.pratique}</h2>
          <ul className="ev-lignes">
            {lignes.map(([label, texte]) => <li key={label}><strong>{label}&nbsp;:</strong> {texte}</li>)}
          </ul>
          <p className="ev-texte ckv-liens-occ">{T.occ}</p>
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{T.faq}</h2>
          <div className="ev-faq">
            {faq.map(q => (
              <details key={q.q}>
                <summary>{q.q}</summary>
                <p>{q.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="devis" className="ev-devis">
          <div className="ev-devis-inner">
            <DevisRapide defaultPrestation="Cocktail / Buffet" titre={T.devisTitre} titreEn={T.devisTitre} sousTitre={T.devisSous} sousTitreEn={T.devisSous} />
          </div>
        </section>

        {guides.length > 0 && (
          <section className="ev-bloc ev-etroit">
            <h2 className="ev-h2">{T.guides}</h2>
            <ul className="ev-liens">
              {guides.map(g => <li key={g.href}><a href={g.href}>{g.titre}</a><span>{T.guide}</span></li>)}
            </ul>
          </section>
        )}
      </main>

      <CategoryJsonLd
        name="Cocktails"
        nameEn="Cocktails"
        path="/creations/cocktails"
        includeFaq={false}
        items={F.map(f => ({ name: T.carte(f), url: `/creations/cocktails/${f.key}` }))}
      />
      <Footer />
    </>
  )
}
