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
import { PRIX as PRIX_AFW, PIECES_PAR_PERSONNE as PIECES_AFW, MIN_PERSONNES as MIN_AFW, CHEMIN as CHEMIN_AFW } from '../../lib/afterworkFiche'

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
  const [I, R, C, A] = F
  const guides = guidesCocktail(en)
  const lignes = lignesPratiques(en)
  const faq = faqCatalogue(en)
  const pre = en ? '/en' : ''
  const ht = (x) => prixHT(x, en)
  const liste = (arr) => arr.join(', ').replace(/, ([^,]+)$/, en ? ' or $1' : ' ou $1')

  const T = en ? {
    accueil: 'Home', fil: 'Cocktails', surtitre: 'Corporate cocktail reception',
    h1: 'Corporate cocktail catering delivered in Paris',
    chapo: `Four menus, from ${Math.min(...F.map(f => f.pieces))} to ${Math.max(...F.map(f => f.pieces))} savoury and sweet pieces per person, delivered arranged to your venue, across Paris and Île-de-France.`,
    faits: `From ${ht(des)} per person · delivery ${ht(LIV)} · order by 10 am the day before · minimum ${ht(MINIMUM)}`,
    devis: 'Ask for a quote', voir: 'See the menus',
    alt: "Board of savoury canapés for a corporate cocktail reception by L'Écrin Traiteur",
    occasionTitre: 'Which menu for which occasion?',
    occasions: [
      ['Product launch, welcome before an event', `${I.label} if the reception lasts under two hours, ${R.label} if you are hosting clients or partners.`],
      ['Leaving party, welcome drinks, afterwork', `${I.label} for drinks, ${A.label} if you want people to actually eat.`],
      ['Opening, partner evening, new-year greetings', `${R.label}, or ${C.label} if the cocktail replaces dinner.`],
      ['Offsite or convention', 'A closing cocktail at the end of the day, on top of the breaks and lunch.'],
    ],
    dureeTitre: 'How long does a corporate cocktail last?',
    dureeIntro: 'Duration follows from the number of pieces, not the other way round: eight pieces last one to two hours, sixteen replace dinner.',
    dureeCols: ['Menu', 'Pieces per person', 'How long it lasts'],
    durees: ['1 to 2 h, as drinks', '1.5 to 2 h, as a standing lunch', '2.5 to 3 h, the cocktail replaces dinner', '2 to 3 h, pieces substantial enough to count as a meal'],
    planTitre: 'How do you organise a corporate cocktail?',
    planCols: ['When', 'What is decided'],
    plan: [
      ['3 to 4 weeks before', 'For a large reception: the quote request, the date and the venue.'],
      ['1 to 2 weeks before', 'Expected headcount, exact address, floor, on-site contact and the time the pieces must be on the table.'],
      ['48 h before', 'Required from 50 people or for several sites: confirmed headcount and dietary needs listed.'],
      ['The day before, by 2 pm', 'The last headcount adjustment. After that, the order goes into production.'],
      ['On the day', 'Delivery at the agreed time, plated and ready to set out. Set-up on request.'],
    ],
    afwTitre: 'A simpler, more generous afterwork',
    afwTexte: `The sharing afterwork brings a halal charcuterie board, a cheese board and ${PIECES_AFW} mini sandwiches per person, from ${MIN_AFW} people, at ${ht(PRIX_AFW)} per person.`,
    afwLien: 'See the sharing afterwork',
    brefTitre: 'At a glance',
    bref: `At L'Écrin Traiteur, a corporate cocktail reception is counted in pieces per person: ${I.pieces} pieces for drinks of an hour and a half (${I.label}, ${ht(I.prixNum)}), ${R.pieces} pieces to replace a lunch (${R.label}, ${ht(R.prixNum)}), ${C.pieces} pieces for a standing dinner (${C.label}, ${ht(C.prixNum)}). ${A.label} keeps the ${A.pieces} pieces of ${R.label} but swaps canapés for burgers, rolls and wraps, at ${ht(A.prixNum)}. The price per person does not change with the headcount. For 50 guests on ${R.label}, L'Écrin Traiteur charges ${ht(totalLivre(50, R.prixNum))} delivery included, drinks extra.`,
    carteSurtitre: 'Cocktail menu',
    sale: 'Savoury',
    sucre: 'Sweet',
    enPlus: 'To share, on top',
    voirFormule: 'See the menu',
    formulesTitre: 'Four cocktail menus, four ways to host',
    formulesIntro: 'From a leaving party to a partner evening: you choose the number of pieces per person, we set everything out on site.',
    carte: (f) => `${f.label} cocktail menu`,
    carteMeta: (f) => `${ht(f.prixNum)} per person · ${f.pieces} pieces`,
    combien: 'How much to allow',
    effectif: 'Headcount', pieces: 'pieces', personnes: 'people',
    note: `Totals excl. VAT with delivery (${ht(LIV)} in Paris and nearby towns), drinks not included.`,
    pratique: 'Ordering and delivery',
    occ: <>For a leaving party or an afterwork, see also <a href="/en/occasions/afterwork-entreprise">afterwork catering</a>.</>,
    faq: 'Frequently asked questions',
    devisTitre: 'A cocktail reception to organise?',
    devisSous: 'Answer in 30 seconds, a detailed quote within 24 hours, delivery across the Paris region.',
    guides: 'To help you prepare', guide: 'Guide',
  } : {
    accueil: 'Accueil', fil: 'Cocktails', surtitre: "Cocktail d'entreprise",
    h1: "Cocktail d'entreprise livré à Paris",
    chapo: `Quatre formules, de ${Math.min(...F.map(f => f.pieces))} à ${Math.max(...F.map(f => f.pieces))} pièces salées et sucrées par personne, livrées dressées sur votre lieu de réception, à Paris et en Île-de-France.`,
    faits: `Dès ${ht(des)} par personne · livraison ${ht(LIV)} · commande jusqu'à la veille 10h · minimum ${ht(MINIMUM)}`,
    devis: 'Demander un devis', voir: 'Voir les formules',
    alt: "Planche de bouchées salées pour un cocktail d'entreprise L'Écrin Traiteur",
    occasionTitre: 'Quelle formule pour quelle occasion ?',
    occasions: [
      ['Lancement de produit, accueil avant un événement', `${I.label} si le cocktail dure moins de deux heures, ${R.label} si vous recevez des clients ou des partenaires.`],
      ['Pot de départ, pot de bienvenue, afterwork', `${I.label} pour un apéritif, ${A.label} si vous voulez que les gens mangent vraiment.`],
      ['Inauguration, soirée partenaires, vœux', `${R.label}, ou ${C.label} si le cocktail remplace le dîner.`],
      ['Séminaire ou convention', 'Un cocktail de clôture en fin de journée, en complément des pauses et du déjeuner.'],
    ],
    dureeTitre: "Combien de temps dure un cocktail d'entreprise ?",
    dureeIntro: "La durée se déduit du nombre de pièces, pas l'inverse : huit pièces tiennent une à deux heures, seize remplacent un dîner.",
    dureeCols: ['Formule', 'Pièces par personne', 'Durée tenue'],
    durees: ['1 à 2 h, en apéritif', '1h30 à 2h, en déjeunatoire', '2h30 à 3h, le cocktail remplace le dîner', '2h à 3h, des pièces assez nourrissantes pour tenir lieu de repas'],
    planTitre: "Comment organiser un cocktail d'entreprise ?",
    planCols: ['Quand', 'Ce qui se décide'],
    plan: [
      ['3 à 4 semaines avant', "Pour une réception d'envergure : la demande de devis, la date et le lieu."],
      ['1 à 2 semaines avant', "L'effectif prévisionnel, l'adresse exacte, l'étage, le contact sur place et l'heure à laquelle les pièces doivent être sur la table."],
      ['48 h avant', "Obligatoire à partir de 50 personnes ou pour plusieurs sites : l'effectif confirmé et les régimes recensés."],
      ['La veille avant 10h', "Le dernier ajustement d'effectif. Au-delà, la commande est lancée en production."],
      ['Le jour J', "Livraison à l'heure fixée, dressage prêt à disposer. Installation sur demande."],
    ],
    afwTitre: 'Un afterwork plus simple et plus généreux',
    afwTexte: `L'afterwork à partager réunit une planche de charcuteries halal, une planche de fromages et ${PIECES_AFW} mini-sandwichs par personne, dès ${MIN_AFW} personnes, à ${ht(PRIX_AFW)} par personne.`,
    afwLien: "Voir l'afterwork à partager",
    brefTitre: "L'essentiel",
    bref: `Chez L'Écrin Traiteur, un cocktail d'entreprise se compte en pièces par personne : ${I.pieces} pièces pour un pot d'une heure et demie (${I.label}, ${ht(I.prixNum)}), ${R.pieces} pièces pour remplacer un déjeuner (${R.label}, ${ht(R.prixNum)}), ${C.pieces} pièces pour un dîner debout (${C.label}, ${ht(C.prixNum)}). ${A.label} garde les ${A.pieces} pièces de ${R.label} mais remplace les bouchées par des burgers, des pains briochés, des clubs et des wraps, à ${ht(A.prixNum)}. Le prix par personne ne change pas avec l'effectif. Pour 50 personnes en ${R.label}, L'Écrin Traiteur facture ${ht(totalLivre(50, R.prixNum))} livraison comprise, boissons en plus.`,
    carteSurtitre: 'Formule cocktail',
    sale: 'Salé',
    sucre: 'Sucré',
    enPlus: 'À partager, en plus',
    voirFormule: 'Voir la formule',
    formulesTitre: 'Quatre cocktails, quatre façons de recevoir',
    formulesIntro: "Du pot de départ à la soirée partenaires : vous choisissez le nombre de pièces par personne, nous dressons tout sur place.",
    carte: (f) => `Cocktail ${f.label}`,
    carteMeta: (f) => `${ht(f.prixNum)} par personne · ${f.pieces} pièces`,
    combien: 'Combien prévoir',
    effectif: 'Effectif', pieces: 'pièces', personnes: 'personnes',
    note: `Totaux HT livraison comprise (${ht(LIV)} à Paris et dans les communes proches), boissons non comprises.`,
    pratique: 'Commande et livraison',
    occ: <>Pour un pot de départ ou un afterwork, voir aussi <a href="/occasions/afterwork-entreprise">traiteur afterwork d&apos;entreprise</a>.</>,
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
      <Navbar sansBandeau />
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
            <ParallaxImage priority sizes="(max-width: 900px) 100vw, 55vw" src="/hero-cocktail-reception.webp" alt={T.alt}
              strength={0.05} style={{ position: 'absolute', inset: 0 }} imgStyle={{ objectPosition: 'center' }} />
          </div>
        </section>

        <CategoryTabs lang={en ? 'en' : 'fr'} />

        {/* Les formules passent devant le texte (28/10/2026) : priorité au
            visuel en haut, le SEO descend. Même forme que les menus à partager
            — grandes cartes sur deux colonnes, composition visible. */}
        <section id="formules" className="ev-bloc ckf-section">
          <h2 className="ev-h2">{T.formulesTitre}</h2>
          <p className="ev-intro">{T.formulesIntro}</p>
          <div className="ckf-cartes">
            {F.map(f => (
              <article key={f.key} className="ckf-carte">
                <a href={`${pre}${CHEMIN}/${f.key}`} className="ckf-photo">
                  <Image fill sizes="(max-width: 860px) 100vw, 50vw" src={f.img} alt={T.carte(f)}
                    style={{ objectFit: 'cover' }} />
                </a>
                <div className="ckf-corps">
                  <p className="ckf-surtitre">{T.carteSurtitre}</p>
                  <h3 className="ckf-nom">{f.label}</h3>
                  <p className="ckf-prix">{T.carteMeta(f)}</p>
                  <p className="ckf-accroche">{f.accroche}</p>
                  {(f.sale?.length > 0 || f.sucre?.length > 0) && (
                    <div className="ckf-compo">
                      {f.sale?.length > 0 && (
                        <div>
                          <p className="ckf-compo-titre">{T.sale} · {f.sale.length}</p>
                          <ul>{f.sale.map(x => <li key={x}>{x}</li>)}</ul>
                        </div>
                      )}
                      {f.sucre?.length > 0 && (
                        <div>
                          <p className="ckf-compo-titre">{T.sucre} · {f.sucre.length}</p>
                          <ul>{f.sucre.map(x => <li key={x}>{x}</li>)}</ul>
                        </div>
                      )}
                    </div>
                  )}
                  {f.enPlus?.length > 0 && (
                    <p className="ckf-enplus">{T.enPlus} : {f.enPlus.join(' · ')}</p>
                  )}
                  <div className="ckf-liens">
                    <a href={`${pre}${CHEMIN}/${f.key}`} className="ckf-lien">{T.voirFormule}</a>
                    <a href="#devis" className="ckf-lien ckf-lien-2" data-formule={`Cocktail ${f.label}`}>{T.devis}</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="devis" className="ev-devis">
          <div className="ev-devis-inner">
            <DevisRapide defaultPrestation="Cocktail / Buffet" titre={T.devisTitre} titreEn={T.devisTitre} sousTitre={T.devisSous} sousTitreEn={T.devisSous} />
          </div>
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{T.afwTitre}</h2>
          <p className="ev-texte">{T.afwTexte} <a href={`${pre}${CHEMIN_AFW}`}>{T.afwLien}</a>.</p>
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
          <h2 className="ev-h2">{T.brefTitre}</h2>
          <p className="ev-texte">{T.bref}</p>
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{T.occasionTitre}</h2>
          <ul className="ev-lignes">
            {T.occasions.map(([label, texte]) => <li key={label}><strong>{label}&nbsp;:</strong> {texte}</li>)}
          </ul>
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{T.dureeTitre}</h2>
          <p className="ev-texte">{T.dureeIntro}</p>
          <div className="ev-table-wrap">
            <table className="ev-table">
              <thead>
                <tr>{T.dureeCols.map(c => <th key={c}>{c}</th>)}</tr>
              </thead>
              <tbody>
                {F.map((f, i) => (
                  <tr key={f.key}>
                    <td><strong>{f.label}</strong></td>
                    <td>{f.pieces}</td>
                    <td>{T.durees[i]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{T.planTitre}</h2>
          <div className="ev-table-wrap">
            <table className="ev-table">
              <thead>
                <tr>{T.planCols.map(c => <th key={c}>{c}</th>)}</tr>
              </thead>
              <tbody>
                {T.plan.map(([quand, quoi]) => (
                  <tr key={quand}><td><strong>{quand}</strong></td><td>{quoi}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
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

        <section className="ev-bloc ev-etroit" style={{ textAlign: 'center' }}>
          <a className="ev-btn" href="#devis">{T.devis}</a>
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
