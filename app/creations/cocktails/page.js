import Image from 'next/image'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Breadcrumb from '../../../components/Breadcrumb'
import ParallaxImage from '../../../components/ParallaxImage'
import ReviewsBadge from '../../../components/ReviewsBadge'
import DevisRapide from '../../../components/DevisRapide'
import CategoryTabs from '../../../components/CategoryTabs'
import CategoryJsonLd from '../../../components/CategoryJsonLd'
import { FAQ_CATALOGUE } from './data'
import {
  formules, totalLivre, EFFECTIFS, guidesCocktail, lignesPratiques, prixHT, CHEMIN, MINIMUM, LIV,
} from '../../../lib/cocktailsVue'

/*
  Page Cocktails, rendue côté serveur (refonte du 22/10/2026 sur le modèle des
  événements saisonniers). Prix, pièces, livraison et minimum sont calculés
  (lib/cocktailsVue.js → data.js → lib/calculsPrix.js). La FAQ affichée est
  celle que balise layout.js (FAQ_CATALOGUE). Styles : globals.css, .ev- et .ckv-.
*/
export default function Cocktails() {
  const F = formules(false)
  const des = Math.min(...F.map(f => f.prixNum))
  const [I, R, C] = F
  const guides = guidesCocktail(false)
  const lignes = lignesPratiques(false)

  return (
    <>
      <Navbar showBanner />
      <main className="ev-main">
        <Breadcrumb maxWidth="1440px" items={[{ label: 'Accueil', href: '/' }, { label: 'Cocktails' }]} jsonLd={false} />

        <section className="ev-hero">
          <div className="ev-hero-texte">
            <p className="ev-surtitre">Cocktail d&apos;entreprise</p>
            <h1 className="ev-h1">Cocktail d&apos;entreprise livré à Paris</h1>
            <p className="ev-chapo">
              Trois formules de {F.map(f => f.pieces).join(', ').replace(/, (\d+)$/, ' ou $1')} pièces salées et sucrées par personne, livrées dressées sur votre lieu de réception, à Paris et en Île-de-France.
            </p>
            <p className="ev-faits">Dès {prixHT(des)} par personne · livraison {prixHT(LIV)} · commande jusqu&apos;à la veille 14h · minimum {prixHT(MINIMUM)}</p>
            <div className="ev-actions">
              <a className="ev-btn" href="#devis">Demander un devis</a>
              <a className="ev-btn-filet" href="#formules">Voir les formules</a>
            </div>
            <ReviewsBadge showCount />
          </div>
          <div className="ev-hero-img">
            <ParallaxImage priority sizes="(max-width: 900px) 100vw, 55vw" src="/hero-cocktail.webp" alt="Planche de bouchées salées pour un cocktail d'entreprise L'Écrin Traiteur"
              strength={0.05} style={{ position: 'absolute', inset: 0 }} imgStyle={{ objectPosition: 'center' }} />
          </div>
        </section>

        <CategoryTabs />

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">L&apos;essentiel</h2>
          <p className="ev-texte">
            Un cocktail d&apos;entreprise se compte en pièces par personne : {I.pieces} pièces pour un pot d&apos;une heure et demie ({I.label}, {prixHT(I.prixNum)}), {R.pieces} pièces pour remplacer un déjeuner ({R.label}, {prixHT(R.prixNum)}), {C.pieces} pièces pour un dîner debout ({C.label}, {prixHT(C.prixNum)}). Le prix par personne ne change pas avec l&apos;effectif. Pour 50 personnes en {R.label}, comptez {prixHT(totalLivre(50, R.prixNum))} livraison comprise, boissons en plus.
          </p>
        </section>

        <section id="formules" className="ev-bloc">
          <h2 className="ev-h2">Les trois formules</h2>
          <p className="ev-intro">Chaque formule renvoie à sa fiche : composition pièce par pièce, prix et quantités.</p>
          <div className="ev-cartes">
            {F.map(f => (
              <a key={f.key} href={`${CHEMIN}/${f.key}`} className="ev-carte">
                <span className="ev-carte-img">
                  <Image fill sizes="(max-width: 768px) 100vw, 33vw" src={f.img} alt={`Cocktail ${f.label}`} style={{ objectFit: 'cover' }} />
                </span>
                <span className="ev-carte-nom">Cocktail {f.label}</span>
                <span className="ev-carte-prix">{prixHT(f.prixNum)} par personne · {f.pieces} pièces</span>
                <span className="ev-carte-unite">{f.accroche}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">Combien prévoir</h2>
          <div className="ev-table-wrap">
            <table className="ev-table">
              <thead>
                <tr>
                  <th>Effectif</th>
                  {F.map(f => <th key={f.key}>{f.label} ({f.pieces} pièces)</th>)}
                </tr>
              </thead>
              <tbody>
                {EFFECTIFS.map(n => (
                  <tr key={n}>
                    <td><strong>{n} personnes</strong></td>
                    {F.map(f => <td key={f.key} className="ev-nowrap">{prixHT(totalLivre(n, f.prixNum))}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="ev-note">Totaux HT livraison comprise ({prixHT(LIV)} à Paris et dans les communes proches), boissons non comprises.</p>
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">Commande et livraison</h2>
          <ul className="ev-lignes">
            {lignes.map(([label, texte]) => <li key={label}><strong>{label}&nbsp;:</strong> {texte}</li>)}
          </ul>
          <p className="ev-texte ckv-liens-occ">
            Pour choisir selon l&apos;occasion, voir aussi <a href="/occasions/cocktail-entreprise">organiser un cocktail d&apos;entreprise</a> et <a href="/occasions/afterwork-entreprise">traiteur afterwork d&apos;entreprise</a>.
          </p>
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">Questions fréquentes</h2>
          <div className="ev-faq">
            {FAQ_CATALOGUE.map(q => (
              <details key={q.name}>
                <summary>{q.name}</summary>
                <p>{q.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="devis" className="ev-devis">
          <div className="ev-devis-inner">
            <DevisRapide defaultPrestation="Cocktail / Buffet" titre="Un cocktail à organiser ?" sousTitre="Répondez en 30 secondes, devis détaillé sous 24h, livraison dans toute l'Île-de-France." />
          </div>
        </section>

        {guides.length > 0 && (
          <section className="ev-bloc ev-etroit">
            <h2 className="ev-h2">Pour préparer</h2>
            <ul className="ev-liens">
              {guides.map(g => <li key={g.href}><a href={g.href}>{g.titre}</a><span>Guide</span></li>)}
            </ul>
          </section>
        )}
      </main>

      <CategoryJsonLd
        name="Cocktails"
        path="/creations/cocktails"
        includeFaq={false}
        items={F.map(f => ({ name: `Cocktail ${f.label}`, url: `/creations/cocktails/${f.key}` }))}
      />
      <Footer />
    </>
  )
}
