/*
  Comparatif des formats de buffet et budgets 20/50/100 (26/10/2026), repliés en bas de la page
  /creations/a-partager (components/BlocsSeoBas.js). Tous les montants sont calculés : prix des
  menus (app/creations/a-partager/data.js), formules cocktail (lib/calculsPrix.js), afterwork et
  plateaux repas (lib/prixEntree.js), livraison de 29 € HT. Composant serveur seulement.
*/
import { MENUS } from '../app/creations/a-partager/data'
import { FORMULES, LIV } from './calculsPrix'
import { AFTERWORK_PARTAGE, PLATEAU_DES, euroFr, euroEn } from './prixEntree'

const prixMenus = MENUS.map(m => Number(String(m.prix).replace(',', '.').match(/\d+(?:\.\d+)?/)[0]))
const MENU_MIN = Math.min(...prixMenus)
const MENU_MAX = Math.max(...prixMenus)
const tot = (n, p) => n * p + LIV
const fr = (x) => euroFr(x) + ' HT'
const en$ = (x) => euroEn(x) + ' excl. VAT'
const fourch = (n, f) => `${f(tot(n, MENU_MIN))} à ${f(tot(n, MENU_MAX))}`
const fourchEn = (n, f) => `${f(tot(n, MENU_MIN))} to ${f(tot(n, MENU_MAX))}`

export const BUFFET_FR = `
  <h2>Quel buffet d'entreprise choisir à Paris ?</h2>
  <p>« Buffet » recouvre plusieurs formats. L'Écrin Traiteur les livre tous dressés et prêts à servir, dès 6h30, par son équipe :</p>
  <ul>
    <li><strong>Buffet à partager</strong> (cette page) : salades, planches et douceurs au centre de la table pour un déjeuner d'équipe, dès ${fr(MENU_MIN)} par personne.</li>
    <li><strong><a href="/creations/cocktails">Cocktail déjeunatoire ou dînatoire</a></strong> : 8, 12 ou 16 pièces par personne, de ${fr(FORMULES.invitation.prix)} à ${fr(FORMULES.celebration.prix)}, pour un buffet debout.</li>
    <li><strong><a href="/creations/cocktails/afterwork-partage">Afterwork à partager</a></strong> : deux planches (charcuteries halal, fromages) et 6 mini-sandwichs par personne, ${fr(AFTERWORK_PARTAGE)} par personne dès 10 personnes.</li>
    <li><strong><a href="/creations/plateaux-aperitifs">Plateaux apéritifs</a></strong> : mini burgers, clubs, mini wraps, fromages, à composer, dès 64,90 € HT le plateau de 24 pièces.</li>
    <li><strong><a href="/creations/plateaux-repas">Plateaux repas individuels</a></strong> : si chacun mange à son poste, dès ${fr(PLATEAU_DES)} par personne.</li>
  </ul>

  <h2>Combien coûte un buffet d'entreprise à Paris ?</h2>
  <p>Budget HT, livraison de ${fr(LIV)} comprise, sans les boissons :</p>
  <table>
    <thead><tr><th>Formule</th><th>20 personnes</th><th>50 personnes</th><th>100 personnes</th></tr></thead>
    <tbody>
      <tr><td><strong>Buffet à partager</strong></td><td>${fourch(20, fr)}</td><td>${fourch(50, fr)}</td><td>${fourch(100, fr)}</td></tr>
      <tr><td><strong>Afterwork à partager</strong></td><td>${fr(tot(20, AFTERWORK_PARTAGE))}</td><td>${fr(tot(50, AFTERWORK_PARTAGE))}</td><td>${fr(tot(100, AFTERWORK_PARTAGE))}</td></tr>
      <tr><td><strong>Cocktail ${FORMULES.invitation.nom} (8 pièces)</strong></td><td>${fr(tot(20, FORMULES.invitation.prix))}</td><td>${fr(tot(50, FORMULES.invitation.prix))}</td><td>${fr(tot(100, FORMULES.invitation.prix))}</td></tr>
      <tr><td><strong>Cocktail ${FORMULES.reception.nom} (12 pièces)</strong></td><td>${fr(tot(20, FORMULES.reception.prix))}</td><td>${fr(tot(50, FORMULES.reception.prix))}</td><td>${fr(tot(100, FORMULES.reception.prix))}</td></tr>
    </tbody>
  </table>
  <p>Pour un déjeuner assis, comptez un menu à partager par personne ; pour un buffet debout, 8 pièces par personne tiennent une heure et demie à deux heures, 12 pièces remplacent un déjeuner. Les quantités détaillées sont dans notre <a href="/journal/buffet-entreprise-guide-complet-paris">guide complet du buffet d'entreprise</a> et le <a href="/calculateur-quantites">calculateur de quantités</a>.</p>
`
export const BUFFET_EN = `
  <h2>Which corporate buffet should you choose in Paris?</h2>
  <p>“Buffet” covers several formats. L'Écrin Traiteur delivers them all plated and ready to serve, from 6:30 am, by its own team:</p>
  <ul>
    <li><strong>Sharing buffet</strong> (this page): salads, boards and sweet pieces in the middle of the table for a team lunch, from ${en$(MENU_MIN)} per person.</li>
    <li><strong><a href="/en/creations/cocktails">Lunchtime or evening cocktail</a></strong>: 8, 12 or 16 pieces per person, from ${en$(FORMULES.invitation.prix)} to ${en$(FORMULES.celebration.prix)}, for a standing buffet.</li>
    <li><strong><a href="/en/creations/cocktails/afterwork-partage">Sharing afterwork</a></strong>: two boards (halal charcuterie, cheese) and 6 mini sandwiches per person, ${en$(AFTERWORK_PARTAGE)} per person from 10 people.</li>
    <li><strong><a href="/en/creations/plateaux-aperitifs">Aperitif platters</a></strong>: mini burgers, clubs, mini wraps, cheese, to mix and match, from €64.90 excl. VAT for a platter of 24 pieces.</li>
    <li><strong><a href="/en/creations/plateaux-repas">Individual lunch trays</a></strong>: when everyone eats at their desk, from ${en$(PLATEAU_DES)} per person.</li>
  </ul>

  <h2>How much does a corporate buffet cost in Paris?</h2>
  <p>Budget excluding VAT, with the ${en$(LIV)} delivery included, drinks not included:</p>
  <table>
    <thead><tr><th>Format</th><th>20 people</th><th>50 people</th><th>100 people</th></tr></thead>
    <tbody>
      <tr><td><strong>Sharing buffet</strong></td><td>${fourchEn(20, en$)}</td><td>${fourchEn(50, en$)}</td><td>${fourchEn(100, en$)}</td></tr>
      <tr><td><strong>Sharing afterwork</strong></td><td>${en$(tot(20, AFTERWORK_PARTAGE))}</td><td>${en$(tot(50, AFTERWORK_PARTAGE))}</td><td>${en$(tot(100, AFTERWORK_PARTAGE))}</td></tr>
      <tr><td><strong>${FORMULES.invitation.nom} cocktail (8 pieces)</strong></td><td>${en$(tot(20, FORMULES.invitation.prix))}</td><td>${en$(tot(50, FORMULES.invitation.prix))}</td><td>${en$(tot(100, FORMULES.invitation.prix))}</td></tr>
      <tr><td><strong>${FORMULES.reception.nom} cocktail (12 pieces)</strong></td><td>${en$(tot(20, FORMULES.reception.prix))}</td><td>${en$(tot(50, FORMULES.reception.prix))}</td><td>${en$(tot(100, FORMULES.reception.prix))}</td></tr>
    </tbody>
  </table>
  <p>For a seated lunch, allow one sharing menu per person; for a standing buffet, 8 pieces per person last an hour and a half to two hours, 12 pieces replace a lunch. Detailed quantities are in our <a href="/journal/buffet-entreprise-guide-complet-paris">complete guide to the company buffet</a> and the <a href="/en/calculateur-quantites">quantity calculator</a>.</p>
`


/*
  Vue partagée par /creations/a-partager et /en/creations/a-partager, rendue côté serveur
  (refonte du 23/10/2026, audit design chantier 5). Avant, une page client
  lisait sa langue dans le chemin ; la langue passe maintenant en paramètre.
  Données et prix : lib/categoriesVue.js.
*/
