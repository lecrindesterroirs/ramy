// Articles « cocktail d'entreprise » (GEO, 13 octobre 2026) : fusionnés à la fin de journalData.js.
// Construits sur le modèle des guides les plus cités par les IA (idées, quantités, budget).
import { FORMULES } from './calculsPrix'

// Prix d'une pièce cocktail selon la formule (prix par personne ÷ nombre de pièces), format « 3,74 € ».
const prixPiece = (k) => `${(FORMULES[k].prix / FORMULES[k].pieces).toFixed(2).replace('.', ',')} €`

export const COCKTAIL_ARTICLES = [
  {
    slug: 'cocktail-entreprise-50-personnes',
    enBref: [
      "Chez L'Écrin Traiteur, un cocktail d'entreprise pour 50 personnes coûte 1 495 € HT en 8 pièces, 2 045 € HT en 12 pièces et 2 595 € HT en 16 pièces, soit 29,90 à 51,90 € HT par personne.",
      "Avec la livraison à 29 € HT, le cocktail 12 pièces de L'Écrin Traiteur pour 50 personnes revient à 2 074 € HT ; avec jus, eau et Chardonnay 0 %, il revient à 2 397,60 € HT, soit 47,95 € HT par personne.",
      "L'Écrin Traiteur compte 400, 600 ou 800 pièces pour 50 personnes selon le format, dont deux tiers à trois quarts de salé, et prend la commande au moins 48 h avant.",
    ],
    titre: "Cocktail d'entreprise pour 50 personnes : menu, quantités et budget",
    metaTitle: "Cocktail d'entreprise 50 personnes : menu et budget",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    extrait: "Pour 50 personnes, comptez 400 à 800 pièces et de 1 495 à 2 595 € HT selon le format. Menu, répartition salé et sucré, boissons sans alcool et budget complet, ligne par ligne.",
    img: '/cocktail-signature.webp',
    contenu: `
      <p>Pour un <strong>cocktail d'entreprise de 50 personnes</strong>, comptez <strong>400 pièces</strong> pour un apéritif, <strong>600 pièces</strong> pour un cocktail déjeunatoire et <strong>800 pièces</strong> pour un cocktail dînatoire, soit de <strong>1 495 à 2 595 € HT</strong> chez L'Écrin Traiteur. Voici le menu, les quantités et le budget complet, boissons comprises.</p>

      <h2>Combien de pièces pour 50 personnes ?</h2>
      <table>
        <thead>
          <tr><th>Formule</th><th>Pièces par personne</th><th>Total pour 50 personnes</th><th>dont salées / sucrées</th><th>Budget HT</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>L'Invitation</strong></td><td>8</td><td>400 pièces</td><td>300 / 100</td><td>1 495 €</td></tr>
          <tr><td><strong>La Réception</strong></td><td>12</td><td>600 pièces</td><td>450 / 150</td><td>2 045 €</td></tr>
          <tr><td><strong>La Célébration</strong></td><td>16</td><td>800 pièces</td><td>600 / 200</td><td>2 595 €</td></tr>
        </tbody>
      </table>
      <p>La règle : deux tiers à trois quarts de pièces salées, le reste en sucré. Le salé part deux fois plus vite en début de réception ; le sucré clôt le moment.</p>

      <h2>Quel menu pour un cocktail de 50 personnes ?</h2>
      <p>Exemple avec La Réception, notre formule la plus demandée en devis : 12 pièces par personne, entre terre et mer.</p>
      <ul>
        <li><strong>Salé (9 pièces)</strong> : gougères au fromage ; tartelette pissaladière ; millefeuille de betterave au chèvre ; millefeuille de patate douce, feta et olive ; brochette de poulet tandoori ; mini cheeseburger ; saumon mariné et betterave jaune ; ratte au saumon fumé ; navette de légumes grillés.</li>
        <li><strong>Sucré (3 pièces)</strong> : douceur vanille, dôme praliné, tartelette aux myrtilles.</li>
      </ul>
      <p>Toutes les pièces sont halal et sans porc, sans alcool dans les recettes. Le détail des trois formules est sur la page de notre <a href="/creations/cocktails">traiteur cocktail pour entreprise à Paris</a>.</p>

      <h2>Quel budget total, boissons comprises ?</h2>
      <table>
        <thead>
          <tr><th>Poste</th><th>Détail</th><th>Montant HT</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Pièces cocktail</strong></td><td>50 × La Réception à 40,90 €</td><td>2 045,00 €</td></tr>
          <tr><td><strong>Pour trinquer</strong></td><td>9 bouteilles de Chardonnay Blanc de Blancs 0 % (1 flûte par personne)</td><td>152,10 €</td></tr>
          <tr><td><strong>Jus</strong></td><td>13 L de jus Alain Milliat (1 L pour 4 personnes)</td><td>123,50 €</td></tr>
          <tr><td><strong>Eaux</strong></td><td>10 bouteilles d'Evian 75 cl (1 pour 5 personnes)</td><td>48,00 €</td></tr>
          <tr><td><strong>Livraison</strong></td><td>Paris et communes proches</td><td>29,00 €</td></tr>
          <tr><td><strong>Total</strong></td><td>Soit 47,95 € HT par personne</td><td>2 397,60 €</td></tr>
        </tbody>
      </table>
      <p>Prix 2026. Les boissons sont sans alcool : un Chardonnay 0 % pour trinquer et des jus Alain Milliat. Notre guide du <a href="/journal/cocktail-entreprise-sans-alcool">cocktail d'entreprise sans alcool</a> détaille les quantités.</p>

      <h2>Et pour 30, 80 ou 100 personnes ?</h2>
      <table>
        <thead>
          <tr><th>Effectif</th><th>L'Invitation (8 pièces)</th><th>La Réception (12 pièces)</th><th>La Célébration (16 pièces)</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>30 personnes</strong></td><td>240 pièces · 897 € HT</td><td>360 pièces · 1 227 € HT</td><td>480 pièces · 1 557 € HT</td></tr>
          <tr><td><strong>50 personnes</strong></td><td>400 pièces · 1 495 € HT</td><td>600 pièces · 2 045 € HT</td><td>800 pièces · 2 595 € HT</td></tr>
          <tr><td><strong>80 personnes</strong></td><td>640 pièces · 2 392 € HT</td><td>960 pièces · 3 272 € HT</td><td>1 280 pièces · 4 152 € HT</td></tr>
          <tr><td><strong>100 personnes</strong></td><td>800 pièces · 2 990 € HT</td><td>1 200 pièces · 4 090 € HT</td><td>1 600 pièces · 5 190 € HT</td></tr>
        </tbody>
      </table>
      <p>Budgets hors boissons et hors livraison (29 € HT à Paris et dans les communes proches). Le prix par personne ne change pas avec l'effectif.</p>

      <h2>Comment organiser le service pour 50 personnes ?</h2>
      <p>Prévoyez deux points de buffet plutôt qu'un : à 50, une seule table crée une file et la moitié des invités ne s'en approche pas. Posez le salé en deux temps, la moitié à l'ouverture et l'autre trente minutes plus tard, puis le sucré dans la dernière demi-heure. Les plateaux arrivent dressés, prêts à poser.</p>

      <h2>Quand commander ?</h2>
      <table>
        <thead>
          <tr><th>Quand</th><th>Ce qu'il faut faire</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>3 semaines avant</strong></td><td>Fixer la date, le lieu et un effectif estimé ; demander un devis</td></tr>
          <tr><td><strong>2 semaines avant</strong></td><td>Choisir la formule selon l'horaire : 8, 12 ou 16 pièces</td></tr>
          <tr><td><strong>1 semaine avant</strong></td><td>Recenser les régimes (végétarien, sans gluten, allergies)</td></tr>
          <tr><td><strong>2 jours avant</strong></td><td>Confirmer l'effectif, avec 10 % de marge</td></tr>
          <tr><td><strong>48 h avant</strong></td><td>Dernier ajustement des quantités (délai minimum à partir de 50 personnes)</td></tr>
        </tbody>
      </table>

      <h2>Demander un devis pour 50 personnes</h2>
      <p>Donnez-nous la date, le lieu et l'horaire : nous vous envoyons un devis détaillé sous 24h, avec une facture entreprise et la TVA. Livraison à Paris et en Île-de-France. <a href="/devis">Demander un devis cocktail</a>.</p>
    `,
    relatedProducts: ['brochettes-fruits'],
    faq: [
      { q: "Combien de pièces cocktail pour 50 personnes ?", a: "L'Écrin Traiteur compte 400 pièces pour un cocktail apéritif (8 par personne), 600 pour un cocktail déjeunatoire (12 par personne) et 800 pour un cocktail dînatoire (16 par personne), dont deux tiers à trois quarts de pièces salées." },
      { q: "Quel budget pour un cocktail d'entreprise de 50 personnes ?", a: "De 1 495 à 2 595 € HT chez L'Écrin Traiteur : 1 495 € en 8 pièces, 2 045 € en 12 pièces, 2 595 € en 16 pièces. Avec les boissons sans alcool et la livraison, un cocktail 12 pièces pour 50 personnes revient à environ 2 398 € HT, soit 48 € HT par personne." },
      { q: "Combien de boissons prévoir pour 50 personnes ?", a: "Une flûte pour trinquer par personne, 1 litre de jus pour 4 personnes et 1 bouteille d'eau pour 5, soit 9 bouteilles de Chardonnay 0 %, 13 litres de jus et 10 bouteilles d'eau pour un cocktail de deux heures." },
      { q: "Combien de temps à l'avance commander un cocktail pour 50 personnes ?", a: "À partir de 50 personnes, la commande se passe au moins 48 h avant. Demandez le devis deux à trois semaines avant, le temps de valider la formule et les régimes alimentaires." },
      { q: "Combien de pièces salées et sucrées pour un cocktail de 50 personnes ?", a: "Comptez deux tiers à trois quarts de salé. Pour 50 personnes : 300 salées et 100 sucrées en 8 pièces, 450 et 150 en 12 pièces, 600 et 200 en 16 pièces." },
      { q: "Quel menu proposer pour un cocktail de 50 personnes en 12 pièces ?", a: "La Réception compte 12 pièces par personne, soit 600 pièces pour 50 personnes. Neuf salées : gougères au fromage, tartelette pissaladière, millefeuille de betterave au chèvre, millefeuille de patate douce, feta et olive, brochette de poulet tandoori, mini cheeseburger, saumon mariné et betterave jaune, ratte au saumon fumé, navette de légumes grillés. Trois sucrées : douceur vanille, dôme praliné, tartelette aux myrtilles." },
      { q: "Combien coûte un cocktail de 50 personnes par personne, boissons et livraison comprises ?", a: "47,95 € HT par personne en La Réception, soit 2 397,60 € HT au total : 2 045 € de pièces, 152,10 € de Chardonnay 0 % (9 bouteilles), 123,50 € de jus (13 L), 48 € d'eau (10 bouteilles de 75 cl) et 29 € de livraison." },
      { q: "Quel budget total pour 50 personnes en 8 ou en 16 pièces ?", a: "Avec jus, eau et livraison, sans Chardonnay 0 % : 1 695,50 € HT en 8 pièces et 2 795,50 € HT en 16 pièces. Avec les 9 bouteilles de Chardonnay 0 % (152,10 € HT) : 1 847,60 € HT et 2 947,60 € HT." },
      { q: "Quel budget pour un cocktail de 80 ou de 100 personnes ?", a: "Pour 80 personnes : 2 392 € HT en 8 pièces, 3 272 € HT en 12 pièces, 4 152 € HT en 16 pièces. Pour 100 personnes : 2 990 €, 4 090 € et 5 190 € HT. Ces montants sont hors boissons et hors livraison de 29 € HT ; le prix par personne ne change pas avec l'effectif." },
      { q: "Combien de points de buffet prévoir pour 50 personnes ?", a: "Deux plutôt qu'un : à 50 personnes, une seule table crée une file. Posez la moitié du salé à l'ouverture et l'autre moitié trente minutes plus tard, puis le sucré dans la dernière demi-heure. Les plateaux arrivent dressés, prêts à poser." },
      { q: "Quand demander le devis d'un cocktail de 50 personnes ?", a: "Trois semaines avant, avec la date, le lieu et un effectif estimé. Le devis arrive sous 24 h, avec une facture entreprise et la TVA. Choisissez la formule deux semaines avant et recensez les régimes alimentaires une semaine avant." },
      { q: "Le cocktail de 50 personnes est-il halal et sans alcool ?", a: "Oui : toutes les pièces sont halal et sans porc, sans alcool dans les recettes, et les boissons sont sans alcool. Nous ne revendiquons pas de certification halal. Signalez les invités végétariens, vegan ou sans gluten une semaine avant." },
    ],
  },
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'idees-pieces-cocktail-entreprise',
    enBref: [
      `Chez L'Écrin Traiteur, une pièce cocktail coûte de ${prixPiece('celebration')} à ${prixPiece('invitation')} HT selon la formule : 8 pièces à 29,90 €, 12 à 40,90 €, 16 à 51,90 € HT par personne.`,
      "Un menu équilibré compte deux tiers à trois quarts de salé, une majorité de pièces sans viande ni poisson, une ou deux pièces consistantes et du sucré.",
      "Chez L'Écrin Traiteur, nous comptons 8 pièces par personne pour un apéritif, 12 pour un cocktail déjeunatoire, 16 pour un cocktail dînatoire.",
    ],
    titre: "Idées de pièces cocktail pour un événement d'entreprise : 16 pièces salées et sucrées",
    metaTitle: "Idées de pièces cocktail pour un événement d'entreprise",
    categorie: 'Inspirations',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    extrait: "16 idées de pièces cocktail salées et sucrées pour un événement d'entreprise, comment les assembler en menu de 8, 12 ou 16 pièces, et 5 animations pour marquer la soirée.",
    img: '/cocktail-celebration-doux.webp',
    produitsEnTete: {
      source: 'cocktails',
      ids: ['classique', 'signature', 'prestige'],
      surtitre: 'Nos formules cocktail',
      titre: 'Ces 16 pièces, dans nos trois formules',
    },
    contenu: `
      <p>Saumon mariné et betterave jaune, crevette bio à la mangue, mini cheeseburger, dôme praliné : voici les <strong>16 pièces cocktail</strong> que nous dressons chez L'Écrin Traiteur, et la façon de les assembler en menu de 8, 12 ou 16 pièces par personne. Un bon cocktail d'entreprise mélange <strong>trois familles de pièces</strong> : des bouchées sans viande que tout le monde mange, une ou deux pièces de viande ou de la mer plus consistantes, et du sucré pour finir. Comptez <strong>${prixPiece('celebration')} à ${prixPiece('invitation')} HT la pièce</strong> selon la formule, de 8 pièces à 29,90 € HT par personne à 16 pièces à 51,90 € HT.</p>

      <h2>16 idées de pièces cocktail, salées et sucrées</h2>
      <table>
        <thead>
          <tr><th>Pièce</th><th>Type</th><th>L'Invitation</th><th>La Réception</th><th>La Célébration</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Saumon mariné et betterave jaune</strong></td><td>Salé, mer</td><td>—</td><td>✓</td><td>✓</td></tr>
          <tr><td><strong>Pomme de terre ratte, crème d'oignons et saumon fumé</strong></td><td>Salé, mer</td><td>✓</td><td>✓</td><td>✓</td></tr>
          <tr><td><strong>Crevette bio, mangue et radis noir</strong></td><td>Salé, mer</td><td>—</td><td>—</td><td>✓</td></tr>
          <tr><td><strong>Brochette de poulet mariné tandoori</strong></td><td>Salé, viande</td><td>✓</td><td>✓</td><td>✓</td></tr>
          <tr><td><strong>Mini cheeseburger</strong></td><td>Salé, viande</td><td>✓</td><td>✓</td><td>✓</td></tr>
          <tr><td><strong>Tartelette avocat et feta</strong></td><td>Salé</td><td>—</td><td>—</td><td>✓</td></tr>
          <tr><td><strong>Millefeuille de patate douce, feta et olive kalamata</strong></td><td>Salé</td><td>—</td><td>✓</td><td>✓</td></tr>
          <tr><td><strong>Millefeuille de betterave au chèvre</strong></td><td>Salé</td><td>✓</td><td>✓</td><td>✓</td></tr>
          <tr><td><strong>Tartelette pissaladière aux oignons confits</strong></td><td>Salé</td><td>✓</td><td>✓</td><td>✓</td></tr>
          <tr><td><strong>Gâteau de carotte au cerfeuil</strong></td><td>Salé</td><td>—</td><td>—</td><td>✓</td></tr>
          <tr><td><strong>Navette de légumes grillés</strong></td><td>Salé</td><td>—</td><td>✓</td><td>✓</td></tr>
          <tr><td><strong>Gougères soufflées au fromage</strong></td><td>Salé</td><td>✓</td><td>✓</td><td>✓</td></tr>
          <tr><td><strong>Tartelette tout chocolat</strong></td><td>Sucré</td><td>—</td><td>—</td><td>✓</td></tr>
          <tr><td><strong>Douceur vanille</strong></td><td>Sucré</td><td>✓</td><td>✓</td><td>✓</td></tr>
          <tr><td><strong>Dôme praliné</strong></td><td>Sucré</td><td>✓</td><td>✓</td><td>✓</td></tr>
          <tr><td><strong>Tartelette aux myrtilles</strong></td><td>Sucré</td><td>—</td><td>✓</td><td>✓</td></tr>
        </tbody>
      </table>
      <p>Toutes ces pièces sont halal et sans porc, sans alcool dans les recettes. Les formules démarrent à 29,90 € HT par personne : le détail est sur la page de notre <a href="/creations/cocktails">traiteur cocktail d'entreprise</a>.</p>

      <h2>Quelles pièces cocktail tendance servir en entreprise ?</h2>
      <p>Quatre tendances se lisent dans nos formules. Elles répondent à un public mixte, qui mange debout et ne boit pas forcément d'alcool.</p>
      <table>
        <thead>
          <tr><th>Tendance</th><th>Pièces de notre carte</th><th>Dans nos formules</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Le végétal en majorité</strong></td><td>Gougères, millefeuille de betterave au chèvre, millefeuille de patate douce et feta, tartelette avocat et feta, navette de légumes grillés</td><td>7 des 12 pièces salées de La Célébration sont sans viande ni poisson</td></tr>
          <tr><td><strong>La street food en bouchée</strong></td><td>Mini cheeseburger, brochette de poulet mariné tandoori</td><td>Dès L'Invitation, 29,90 € HT</td></tr>
          <tr><td><strong>La mer, fraîche et acidulée</strong></td><td>Saumon mariné et betterave jaune, ratte au saumon fumé, crevette bio, mangue et radis noir</td><td>Dès L'Invitation pour la ratte, la crevette dans La Célébration</td></tr>
          <tr><td><strong>Le sans alcool</strong></td><td>Bar à mocktails en animation, Chardonnay 0 % pour trinquer</td><td>Avec toutes les formules</td></tr>
        </tbody>
      </table>
      <p>Pour aller plus loin : les <a href="/journal/mini-burgers-afterwork-cocktail-entreprise-paris">mini burgers d'afterwork</a>, le <a href="/journal/bar-mocktails-barman-evenement-entreprise">bar à mocktails avec barman</a> et le <a href="/journal/cocktail-entreprise-sans-alcool">cocktail d'entreprise sans alcool</a>.</p>

      <h2>Comment composer un menu équilibré ?</h2>
      <ul>
        <li><strong>Deux tiers à trois quarts de salé</strong>, le reste en sucré.</li>
        <li><strong>Une ou deux pièces consistantes</strong> : brochette de poulet tandoori, mini cheeseburger. Ce sont elles qui nourrissent.</li>
        <li><strong>Une pièce de la mer</strong> dès que le cocktail remplace un repas : saumon mariné, ratte au saumon fumé, crevette bio à la mangue.</li>
        <li><strong>Une majorité de pièces sans viande ni poisson</strong> : betterave et chèvre, patate douce et feta, gougères. Elles conviennent au plus grand nombre.</li>
        <li><strong>Un sucré léger et un sucré gourmand</strong> : douceur vanille et dôme praliné.</li>
      </ul>

      <h2>Combien de pièces choisir ?</h2>
      <table>
        <thead>
          <tr><th>Formule</th><th>Pièces par personne</th><th>Prix HT par personne</th><th>Prix HT par pièce</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>L'Invitation</strong></td><td>8</td><td>29,90 €</td><td>${prixPiece('invitation')}</td></tr>
          <tr><td><strong>La Réception</strong></td><td>12</td><td>40,90 €</td><td>${prixPiece('reception')}</td></tr>
          <tr><td><strong>La Célébration</strong></td><td>16</td><td>51,90 €</td><td>${prixPiece('celebration')}</td></tr>
        </tbody>
      </table>
      <p>8 pièces par personne pour un apéritif ou un afterwork, 12 pour un cocktail déjeunatoire, 16 pour un cocktail dînatoire qui remplace le dîner. Pour un budget serré, voir le <a href="/journal/cocktail-dinatoire-pas-cher-entreprise-budget">cocktail dînatoire pas cher</a>. Notre guide <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">combien de pièces cocktail par personne</a> détaille le calcul, et celui du <a href="/journal/cocktail-entreprise-50-personnes">cocktail pour 50 personnes</a> donne les quantités et le budget.</p>

      <h2>5 idées d'animations pour marquer la soirée</h2>
      <table>
        <thead>
          <tr><th>Animation</th><th>Ce que voient vos invités</th><th>Pour quel moment</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Atelier mini burgers</strong></td><td>Des mini burgers montés à la minute</td><td>Afterwork, soirée d'équipe</td></tr>
          <tr><td><strong>Découpe de saumon frais</strong></td><td>Un saumon tranché devant les invités</td><td>Soirée partenaires, inauguration</td></tr>
          <tr><td><strong>Atelier sushi et maki</strong></td><td>Des pièces roulées à la demande</td><td>Cocktail dînatoire</td></tr>
          <tr><td><strong>Bar à mocktails</strong></td><td>Des cocktails sans alcool préparés par un barman</td><td>Toute réception</td></tr>
          <tr><td><strong>Fontaine au chocolat</strong></td><td>Fruits et douceurs à tremper</td><td>Fin de soirée, fêtes de fin d'année</td></tr>
        </tbody>
      </table>
      <p>Une animation remplace une partie des pièces et donne aux invités une raison de circuler. Toutes sont présentées sur la page <a href="/creations/animations-culinaires">animations culinaires</a>.</p>

      <h2>Et pour les régimes alimentaires ?</h2>
      <p>Indiquez à la commande le nombre d'invités végétariens, véganes ou sans gluten : nous identifions les pièces adaptées et préparons le complément à part, étiqueté. Pour un événement où le halal compte, notre guide du <a href="/journal/cocktail-entreprise-halal-paris">cocktail d'entreprise halal</a> liste les points à vérifier.</p>

      <h2>Commander votre cocktail d'entreprise</h2>
      <p>Commande jusqu'à la veille 10h, plateaux livrés dressés et prêts à poser, à Paris et en Île-de-France. <a href="/devis">Demander un devis</a>, réponse sous 24h.</p>
    `,
    relatedProducts: ['brochettes-fruits'],
    faq: [
      { q: "Quelles pièces servir à un cocktail d'entreprise ?", a: "Une ou deux pièces consistantes (brochette de poulet tandoori, mini cheeseburger), une à trois pièces de la mer (saumon mariné et betterave jaune, ratte au saumon fumé, crevette bio à la mangue), des bouchées sans viande (millefeuille de betterave au chèvre, patate douce et feta, gougères) et du sucré (douceur vanille, dôme praliné)." },
      { q: "Combien de pièces différentes prévoir ?", a: "Chez L'Écrin Traiteur, 8 pièces différentes pour un apéritif, 12 pour un cocktail déjeunatoire, 16 pour un cocktail dînatoire, dont deux tiers à trois quarts de salé." },
      { q: "Quelle animation ajouter à un cocktail d'entreprise ?", a: "Un atelier mini burgers, une découpe de saumon frais, un atelier sushi et maki, un bar à mocktails ou une fontaine au chocolat. Une animation remplace une partie des pièces et fait circuler les invités." },
      { q: "Quelles sont les pièces cocktail tendance en entreprise ?", a: "Dans nos formules : le végétal en majorité (7 des 12 pièces salées de La Célébration sont sans viande ni poisson), la street food en bouchée (mini cheeseburger, brochette de poulet tandoori), la mer fraîche (saumon mariné, ratte au saumon fumé, crevette bio à la mangue) et le sans alcool, avec un bar à mocktails en animation." },
      { q: "Combien coûte une pièce cocktail ?", a: `Chez L'Écrin Traiteur, ${prixPiece('invitation')} HT en formule L'Invitation (29,90 € pour 8 pièces), ${prixPiece('reception')} HT en La Réception (40,90 € pour 12) et ${prixPiece('celebration')} HT en La Célébration (51,90 € pour 16), plus 29 € HT de livraison par commande.` },
      { q: "Quelles pièces de la mer proposer dans un cocktail ?", a: "Trois pièces : le saumon mariné et betterave jaune (La Réception et La Célébration), la pomme de terre ratte, crème d'oignons et saumon fumé (les trois formules) et la crevette bio, mangue et radis noir (La Célébration). Prévoyez-en une dès que le cocktail remplace un repas." },
      { q: "Quelles pièces sucrées servir à la fin d'un cocktail ?", a: "Quatre pièces : la douceur vanille et le dôme praliné (dans les trois formules), la tartelette aux myrtilles (La Réception et La Célébration) et la tartelette tout chocolat (La Célébration). Cela fait 2 pièces sucrées en 8 pièces, 3 en 12 et 4 en 16." },
      { q: "Quelles pièces choisir pour qu'un cocktail nourrisse vraiment ?", a: "La brochette de poulet mariné tandoori et le mini cheeseburger, présents dans les trois formules dès 29,90 € HT par personne. Comptez-en une ou deux : ce sont elles qui nourrissent, avec une pièce de la mer quand le cocktail remplace un repas." },
      { q: "Que contient la formule à 8 pièces ?", a: "L'Invitation, à 29,90 € HT par personne, compte six pièces salées (pomme de terre ratte et saumon fumé, brochette de poulet tandoori, mini cheeseburger, millefeuille de betterave au chèvre, tartelette pissaladière, gougères) et deux pièces sucrées (douceur vanille, dôme praliné)." },
      { q: "Combien de pièces salées et sucrées dans chaque formule ?", a: "Dans les trois formules, trois quarts de salé : 6 salées et 2 sucrées en 8 pièces, 9 salées et 3 sucrées en 12 pièces, 12 salées et 4 sucrées en 16 pièces. La règle générale est de deux tiers à trois quarts de salé, le reste en sucré." },
      { q: "Comment prévoir des invités végétariens, vegan ou sans gluten ?", a: "Indiquez le nombre de convives concernés à la demande de devis : les options végétariennes, vegan et sans gluten se précisent au devis. Comptez ces convives et donnez-leur autant de pièces qu'aux autres, plus 10 % de marge." },
      { q: "Les pièces cocktail sont-elles halal et sans alcool ?", a: "Oui : toutes les pièces salées sont halal et sans porc, sans alcool dans les recettes. Nous ne revendiquons pas de certification halal délivrée par un organisme." },
      { q: "Quelle formule choisir selon le moment de la journée ?", a: "8 pièces (L'Invitation, 29,90 € HT par personne) pour un apéritif ou un afterwork, 12 pièces (La Réception, 40,90 € HT) pour un cocktail déjeunatoire, 16 pièces (La Célébration, 51,90 € HT) pour un dînatoire qui remplace le dîner. La livraison de 29 € HT s'ajoute à chaque commande." },
    ],
  },
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'cocktail-entreprise-sans-alcool',
    titre: "Cocktail d'entreprise sans alcool : boissons, mocktails et quantités",
    metaTitle: "Cocktail d'entreprise sans alcool : boissons et quantités",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    extrait: "Que servir à un cocktail d'entreprise sans alcool ? Un pétillant 0 % pour trinquer, des jus et nectars, un bar à mocktails. Les boissons, les quantités et le budget de 20 à 100 personnes.",
    img: '/prod-bar-mocktails.webp',
    contenu: `
      <p>Pour un <strong>cocktail d'entreprise sans alcool</strong>, prévoyez <strong>une flûte de pétillant 0 % par personne</strong> pour trinquer puis <strong>1 litre de jus pour 4 personnes</strong> et <strong>1 bouteille d'eau pour 5</strong>, les quantités que commandent nos clients, soit environ 6,50 € HT de boissons par invité. Un bar sans alcool convient à tous les invités et règle la question de l'alcool sur un événement professionnel.</p>

      <h2>Quelles boissons servir à un cocktail sans alcool ?</h2>
      <table>
        <thead>
          <tr><th>Boisson</th><th>Format</th><th>Prix HT</th><th>Pour quoi faire</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Chardonnay Blanc de Blancs 0 %</strong></td><td>Bouteille 75 cl, environ 6 flûtes</td><td>16,90 €</td><td>Trinquer, à la place du champagne</td></tr>
          <tr><td><strong>Jus orange et pomme Alain Milliat, jus pomme-framboise</strong></td><td>Bouteille 1 L, 5 verres</td><td>9,50 €</td><td>La base du bar</td></tr>
          <tr><td><strong>Nectars Alain Milliat (pêche, fraise, mangue, passion, abricot)</strong></td><td>Bouteille 1 L, 5 verres</td><td>10,50 €</td><td>Le parfum plus marqué</td></tr>
          <tr><td><strong>Infusion bio citron vert et gingembre</strong></td><td>Bouteille 1 L, 5 verres</td><td>10,50 €</td><td>L'option vive, moins sucrée</td></tr>
          <tr><td><strong>Thé Mariage Frères ou café bio</strong></td><td>Thermos 1 L, 6 tasses</td><td>19,50 €</td><td>Fin de soirée, saison froide</td></tr>
          <tr><td><strong>Bar à mocktails</strong></td><td>Animation avec barman</td><td>Sur devis</td><td>Le moment fort de la réception</td></tr>
        </tbody>
      </table>
      <p>La carte complète est sur la page <a href="/creations/boissons">boissons</a>.</p>

      <h2>Combien de boissons prévoir ?</h2>
      <table>
        <thead>
          <tr><th>Effectif</th><th>Chardonnay 0 % (1 flûte / pers.)</th><th>Jus (1 L pour 4)</th><th>Eaux 75 cl (1 pour 5)</th><th>Budget boissons HT</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>20 personnes</strong></td><td>4 bouteilles</td><td>5 L</td><td>4</td><td>134,30 €</td></tr>
          <tr><td><strong>30 personnes</strong></td><td>5 bouteilles</td><td>8 L</td><td>6</td><td>189,30 €</td></tr>
          <tr><td><strong>50 personnes</strong></td><td>9 bouteilles</td><td>13 L</td><td>10</td><td>323,60 €</td></tr>
          <tr><td><strong>100 personnes</strong></td><td>17 bouteilles</td><td>25 L</td><td>20</td><td>620,80 €</td></tr>
        </tbody>
      </table>
      <p>Calcul pour un cocktail de deux heures : une bouteille de Chardonnay 0 % sert environ 6 flûtes ; pour le jus et l'eau, ce sont les quantités moyennes de nos commandes cocktail. Budget calculé avec des jus à 9,50 € HT le litre et de l'Evian 75 cl à 4,80 € HT. Prévoyez davantage si la réception dépasse deux heures.</p>

      <h2>Par quoi remplacer le champagne ?</h2>
      <p>Par un pétillant sans alcool servi en flûte, bien frais. Notre Chardonnay Blanc de Blancs 0 % est un jus de raisin Chardonnay travaillé façon Blanc de Blancs : le geste de trinquer reste le même, et tout le monde lève le même verre. C'est ce détail qui évite de séparer les invités en deux groupes.</p>

      <h2>Le bar à mocktails : l'animation qui fait la soirée</h2>
      <p>Un barman prépare les cocktails sans alcool devant vos invités, à la minute : agrumes, fruits frais, herbes et sirops maison. C'est l'équivalent du bar à cocktails, sans alcool, et souvent le moment dont on se souvient. Voir notre <a href="/creations/animations-culinaires">bar à mocktails et nos animations</a>.</p>

      <h2>Trois erreurs à éviter</h2>
      <ul>
        <li><strong>Un seul parfum de jus</strong> : prévoyez-en au moins trois, dont un peu sucré.</li>
        <li><strong>Des boissons tièdes</strong> : prévoyez de la glace ou un espace réfrigéré dès la livraison.</li>
        <li><strong>Un coin « sans alcool » à part</strong> : quand tout le bar est sans alcool, personne n'a à se signaler.</li>
      </ul>

      <h2>Commander un cocktail d'entreprise sans alcool</h2>
      <p>Nos pièces cocktail sont halal et sans porc, sans alcool dans les recettes, à partir de 29,90 € HT par personne. Commande jusqu'à la veille 10h, livraison à Paris et en Île-de-France. Voir notre <a href="/creations/cocktails">traiteur de cocktail d'entreprise à Paris</a>, le guide du <a href="/journal/cocktail-entreprise-halal-paris">cocktail d'entreprise halal</a>, nos idées pour un <a href="/journal/cocktail-sans-alcool-entreprise-fin-annee">cocktail sans alcool de fin d'année</a>, ou <a href="/devis">demander un devis</a>.</p>
    `,
    relatedProducts: ['brochettes-fruits'],
    faq: [
      { q: "Quelles boissons servir à un cocktail d'entreprise sans alcool ?", a: "Un pétillant sans alcool pour trinquer (Chardonnay Blanc de Blancs 0 %), des jus et nectars Alain Milliat, une infusion citron vert et gingembre, des eaux plates et pétillantes, et un bar à mocktails pour animer la réception." },
      { q: "Combien de boissons prévoir par personne ?", a: "Une flûte de pétillant 0 % par personne, 1 litre de jus pour 4 personnes et 1 bouteille d'eau pour 5, pour un cocktail de deux heures. Pour 50 personnes : 9 bouteilles de Chardonnay 0 %, 13 litres de jus et 10 bouteilles d'eau, soit environ 324 € HT." },
      { q: "Par quoi remplacer le champagne à un événement d'entreprise ?", a: "Par un pétillant sans alcool servi en flûte, comme un Chardonnay Blanc de Blancs 0 %. Tous les invités trinquent avec le même verre." },
      { q: "Quelles boissons prévoir pour un cocktail sans alcool de 20 personnes ?", a: "Prévoyez 4 bouteilles de Chardonnay 0 % (une flûte par personne), 5 litres de jus et 4 bouteilles d'eau de 75 cl. Ces boissons représentent 134,30 € HT, pour un cocktail de deux heures." },
      { q: "Quelles boissons prévoir pour un cocktail sans alcool de 30 personnes ?", a: "Prévoyez 5 bouteilles de Chardonnay 0 %, 8 litres de jus et 6 bouteilles d'eau de 75 cl, soit 189,30 € HT de boissons pour un cocktail de deux heures." },
      { q: "Quelles boissons prévoir pour un cocktail sans alcool de 100 personnes ?", a: "Prévoyez 17 bouteilles de Chardonnay 0 %, 25 litres de jus et 20 bouteilles d'eau de 75 cl, soit 620,80 € HT de boissons pour un cocktail de deux heures." },
      { q: "Combien coûte le Chardonnay Blanc de Blancs 0 % et combien de flûtes sert une bouteille ?", a: "La bouteille de 75 cl coûte 16,90 € HT et sert environ 6 flûtes, soit environ 2,82 € HT la flûte. Il remplace le champagne pour trinquer." },
      { q: "Combien coûtent les jus, les nectars et l'infusion pour un cocktail sans alcool ?", a: "Les jus d'orange, de pomme et de pomme-framboise coûtent 9,50 € HT la bouteille d'1 litre (5 verres). Les nectars (pêche, fraise, mangue, passion, abricot) et l'infusion bio citron vert et gingembre coûtent 10,50 € HT la bouteille d'1 litre (5 verres)." },
      { q: "Quel budget de boissons prévoir par invité pour un cocktail sans alcool ?", a: "Environ 6,50 € HT de boissons par invité. Pour 50 personnes, 323,60 € HT soit 6,47 € HT par invité ; pour 100 personnes, 620,80 € HT soit 6,21 € HT par invité." },
      { q: "Faut-il prévoir plus de boissons si la réception dépasse deux heures ?", a: "Oui. Les quantités indiquées sont calculées pour un cocktail de deux heures : prévoyez davantage de boissons si la réception dure plus longtemps." },
      { q: "Combien de parfums de jus proposer et comment garder les boissons fraîches ?", a: "Prévoyez au moins trois parfums de jus, dont un peu sucré. Pour éviter les boissons tièdes, prévoyez de la glace ou un espace réfrigéré dès la livraison." },
      { q: "Les pièces du cocktail sont-elles sans alcool et jusqu'à quand commander ?", a: "Les pièces cocktail sont halal et sans porc, sans alcool dans les recettes, à partir de 29,90 € HT par personne. Commande jusqu'à la veille 10h, 48 h à l'avance dès 50 personnes ; livraison de 29 € HT à Paris et communes proches." },
    ],
  },
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'cocktail-dinatoire-entreprise-paris',
    enBref: [
      "Chez L'Écrin Traiteur, un cocktail dînatoire compte 16 à 18 pièces par personne sur 2 h 30 à 3 h, contre 6 à 8 pour un apéritif et 12 à 14 pour un déjeunatoire.",
      "L'Écrin Traiteur facture 51,90 € HT par personne en 16 pièces (La Célébration) et 40,90 € HT en 12 pièces (La Réception), soit 2 076 € HT pour 40 personnes en 16 pièces, hors boissons et livraison.",
      "Pour une soirée de plus de 3 heures, L'Écrin Traiteur ajoute des pièces à La Célébration sur devis ; les pièces salées sont halal et sans porc.",
    ],
    titre: "Cocktail dînatoire d'entreprise à Paris : nombre de pièces, menu et prix",
    metaTitle: "Cocktail dînatoire d'entreprise à Paris : pièces et prix",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    extrait: "Un cocktail dînatoire d'entreprise remplace le dîner : 16 à 18 pièces par personne, 51,90 € HT en 16 pièces (40,90 € HT en 12 pièces pour une soirée courte). Différence avec l'apéritif et le déjeunatoire, menu type et budget de 20 à 100 personnes.",
    img: '/cocktail-prestige.webp',
    contenu: `
      <p>Chez L'Écrin Traiteur, un <strong>cocktail dînatoire d'entreprise</strong>, qui remplace le dîner, compte <strong>16 à 18 pièces par personne</strong> sur 2 h 30 à 3 h, soit <strong>51,90 € HT par personne</strong> en La Célébration (16 pièces), ou 40,90 € HT en 12 pièces si la soirée est courte. Toutes les pièces sont halal et sans porc, livrées dressées à Paris et en Île-de-France.</p>

      <h2>Cocktail apéritif, déjeunatoire ou dînatoire : quelle différence ?</h2>
      <table>
        <thead>
          <tr><th>Format</th><th>Horaire</th><th>Durée</th><th>Pièces par personne</th><th>Remplace un repas ?</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Cocktail apéritif</strong></td><td>17h30 - 19h30</td><td>1 à 2 h</td><td>6 à 8</td><td>Non</td></tr>
          <tr><td><strong>Cocktail déjeunatoire</strong></td><td>12h - 14h</td><td>1 h 30 à 2 h</td><td>12 à 14</td><td>Oui, le déjeuner</td></tr>
          <tr><td><strong>Cocktail dînatoire</strong></td><td>19h - 22h</td><td>2 h 30 à 3 h</td><td>16 à 18</td><td>Oui, le dîner</td></tr>
        </tbody>
      </table>
      <p>La question à se poser : vos invités auront-ils mangé avant, ou mangeront-ils après ? Si la réponse est non, c'est un dînatoire, et il faut nourrir pour de bon.</p>

      <h2>Quel menu pour un cocktail dînatoire ?</h2>
      <p>La Célébration compte 16 pièces par personne, 12 salées et 4 sucrées.</p>
      <ul>
        <li><strong>Le consistant</strong> : saumon mariné et betterave jaune, ratte au saumon fumé, crevette bio à la mangue, brochette de poulet tandoori, mini cheeseburger.</li>
        <li><strong>Le frais</strong> : millefeuille de betterave au chèvre, tartelette avocat feta, gâteau de carotte au cerfeuil, millefeuille de patate douce, feta et olive.</li>
        <li><strong>Pour accompagner</strong> : tartelette pissaladière, navette de légumes grillés, gougères au fromage.</li>
        <li><strong>Le sucré</strong> : dôme praliné, douceur vanille, tartelette tout chocolat, tartelette aux myrtilles.</li>
      </ul>
      <p>Les compositions complètes sont sur la page <a href="/creations/cocktails">cocktail d'entreprise livré à Paris</a>.</p>

      <h2>Combien coûte un cocktail dînatoire d'entreprise ?</h2>
      <table>
        <thead>
          <tr><th>Effectif</th><th>La Réception (12 pièces)</th><th>La Célébration (16 pièces)</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>20 personnes</strong></td><td>818 € HT</td><td>1 038 € HT</td></tr>
          <tr><td><strong>40 personnes</strong></td><td>1 636 € HT</td><td>2 076 € HT</td></tr>
          <tr><td><strong>60 personnes</strong></td><td>2 454 € HT</td><td>3 114 € HT</td></tr>
          <tr><td><strong>100 personnes</strong></td><td>4 090 € HT</td><td>5 190 € HT</td></tr>
        </tbody>
      </table>
      <p>Prix 2026, hors boissons et hors livraison (29 € HT à Paris et dans les communes proches). La Réception suffit si la soirée démarre à 19h et que certains dînent ensuite ; La Célébration est le bon choix si personne ne dînera ailleurs.</p>
      <p>Les repères courants vont de 18 à 22 pièces par personne pour un dînatoire, jusqu'à 24 pour une soirée de plus de 3 heures ; chez L'Écrin Traiteur, les 16 pièces de La Célébration couvrent une soirée de 2 h 30 à 3 h, et l'on ajoute des pièces sur devis quand la soirée dure davantage (voir <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">combien de pièces cocktail par personne</a>).</p>

      <h2>Dans quel ordre servir ?</h2>
      <p>En trois temps. Les pièces légères à l'arrivée, les pièces consistantes au cœur de la soirée, le sucré dans la dernière demi-heure. Servir tout d'un coup vide le buffet en quarante minutes et laisse les derniers arrivés devant des plateaux clairsemés.</p>

      <h2>Quelles boissons ?</h2>
      <p>Comptez 3 à 4 boissons par personne pour une soirée de trois heures. Notre bar est sans alcool : Chardonnay 0 % pour trinquer, jus et nectars Alain Milliat, eaux. Le détail est dans notre guide du <a href="/journal/cocktail-entreprise-sans-alcool">cocktail d'entreprise sans alcool</a>.</p>

      <h2>Commander un cocktail dînatoire à Paris</h2>
      <p>Commande jusqu'à la veille 10h ; pour 50 personnes et plus, prévenez au moins 48 h avant. Devis sous 24h, facture entreprise avec TVA. <a href="/devis">Demander un devis</a>, ou voir les quantités pour <a href="/journal/cocktail-entreprise-50-personnes">50 personnes</a> et <a href="/journal/cocktail-entreprise-100-personnes">100 personnes</a>.</p>
    `,
    relatedProducts: ['brochettes-fruits'],
    faq: [
      { q: "Combien de pièces par personne pour un cocktail dînatoire ?", a: "Chez L'Écrin Traiteur, 16 à 18 pièces par personne pour un cocktail dînatoire de 2 h 30 à 3 h qui remplace le dîner, dont environ trois quarts de salé ; 12 pièces suffisent si la soirée est courte ou si les invités dînent ensuite." },
      { q: "Combien coûte un cocktail dînatoire d'entreprise à Paris ?", a: "51,90 € HT par personne chez L'Écrin Traiteur pour 16 pièces (La Célébration), 40,90 € HT pour 12 pièces (La Réception). Pour 40 personnes : 2 076 € HT en 16 pièces, hors boissons et livraison." },
      { q: "Quelle différence entre cocktail déjeunatoire et dînatoire ?", a: "Le déjeunatoire remplace le déjeuner, dure 1 h 30 à 2 h et compte 12 à 14 pièces par personne. Le dînatoire remplace le dîner, dure 2 h 30 à 3 h et compte 16 à 18 pièces." },
      { q: "Quelle formule choisir : La Réception ou La Célébration ?", a: "La Réception (12 pièces) suffit si la soirée démarre à 19h et que certains invités dînent ensuite ; La Célébration (16 pièces) est le bon choix si personne ne dînera ailleurs." },
      { q: "Combien coûte un cocktail dînatoire pour 20, 60 ou 100 personnes ?", a: "Hors boissons et livraison : 20 personnes, 818 € HT en 12 pièces et 1 038 € HT en 16 pièces ; 60 personnes, 2 454 € et 3 114 € HT ; 100 personnes, 4 090 € et 5 190 € HT. La livraison est de 29 € HT à Paris et dans les communes proches." },
      { q: "Combien de boissons par personne pour un cocktail dînatoire ?", a: "3 à 4 boissons par personne pour une soirée de trois heures. Le bar est sans alcool : Chardonnay 0 % pour trinquer, jus, eaux." },
      { q: "Dans quel ordre servir les pièces ?", a: "En trois temps : les pièces légères à l'arrivée, les pièces consistantes au cœur de la soirée, le sucré dans la dernière demi-heure. Tout servir d'un coup vide le buffet en quarante minutes." },
      { q: "Combien de pièces pour une soirée de plus de 3 heures ?", a: "Les 16 pièces de La Célébration couvrent une soirée de 2 h 30 à 3 h ; au-delà, L'Écrin Traiteur ajoute des pièces sur devis. Les repères courants vont de 18 à 22 pièces par personne, jusqu'à 24 pour une soirée de plus de 3 heures." },
      { q: "Que contient La Célébration ?", a: "16 pièces par personne, 12 salées et 4 sucrées : saumon mariné et betterave jaune, ratte au saumon fumé, crevette bio à la mangue, brochette de poulet tandoori, mini cheeseburger, millefeuilles, tartelettes, gougères, puis dôme praliné, douceur vanille et tartelettes pour le sucré." },
      { q: "Les pièces du cocktail dînatoire sont-elles halal ?", a: "Oui : toutes les pièces salées sont halal et sans porc, livrées dressées à Paris et en Île-de-France." },
      { q: "Jusqu'à quand commander un cocktail dînatoire ?", a: "Jusqu'à la veille à 10h. Pour 50 personnes et plus, prévenez au moins 48 h avant. Le devis arrive sous 24 h." },
      { q: "Combien de pièces pour un cocktail apéritif ?", a: "6 à 8 pièces par personne pour un cocktail apéritif de 1 à 2 heures, par exemple de 17h30 à 19h30. Il ne remplace pas un repas." },
      { q: "La livraison est-elle comprise dans le prix ?", a: "Non : les prix par personne sont hors livraison. La livraison coûte 29 € HT à Paris et dans les communes proches, et le minimum de commande est de 50 € HT." },
    ],
  },
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'cocktail-entreprise-100-personnes',
    enBref: [
      "Chez L'Écrin Traiteur, un cocktail d'entreprise pour 100 personnes compte 1 200 pièces à 12 pièces par personne (La Réception, 40,90 € HT) ou 1 600 pièces en dînatoire (La Célébration, 51,90 € HT).",
      "Boissons sans alcool et livraison comprises, L'Écrin Traiteur le livre pour 4 739,80 € HT, soit 47,40 € HT par personne, ou 5 839,80 € HT en dînatoire, soit 58,40 € HT par personne.",
      "Pour 100 personnes, L'Écrin Traiteur prévoit 4 points de buffet et demande de confirmer l'effectif au moins 48 h avant.",
    ],
    titre: "Cocktail d'entreprise pour 100 personnes : quantités, organisation et budget",
    metaTitle: "Cocktail d'entreprise 100 personnes : quantités et budget",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    extrait: "Pour 100 personnes : 1 200 à 1 600 pièces, 4 points de buffet et de 4 740 à 5 840 € HT boissons et livraison comprises. Les quantités, l'organisation et le budget ligne par ligne.",
    img: '/hero-cocktail.webp',
    contenu: `
      <p>Un <strong>cocktail d'entreprise pour 100 personnes</strong> demande <strong>1 200 pièces</strong> en format 12 pièces ou <strong>1 600 pièces</strong> en dînatoire, soit de <strong>4 740 à 5 840 € HT</strong> chez L'Écrin Traiteur, boissons sans alcool et livraison comprises. À cet effectif, l'organisation du service compte autant que le menu.</p>

      <h2>Quel budget pour 100 personnes ?</h2>
      <table>
        <thead>
          <tr><th>Poste</th><th>Cocktail 12 pièces</th><th>Cocktail dînatoire 16 pièces</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Pièces cocktail</strong></td><td>1 200 pièces · 4 090,00 €</td><td>1 600 pièces · 5 190,00 €</td></tr>
          <tr><td><strong>Pétillant 0 % pour trinquer</strong></td><td>17 bouteilles · 287,30 €</td><td>17 bouteilles · 287,30 €</td></tr>
          <tr><td><strong>Jus</strong></td><td>25 L · 237,50 €</td><td>25 L · 237,50 €</td></tr>
          <tr><td><strong>Eaux</strong></td><td>20 bouteilles · 96,00 €</td><td>20 bouteilles · 96,00 €</td></tr>
          <tr><td><strong>Livraison</strong></td><td>29,00 €</td><td>29,00 €</td></tr>
          <tr><td><strong>Total HT</strong></td><td>4 739,80 €</td><td>5 839,80 €</td></tr>
          <tr><td><strong>Par personne</strong></td><td>47,40 € HT</td><td>58,40 € HT</td></tr>
        </tbody>
      </table>
      <p>Prix 2026. Pour un simple apéritif en 8 pièces, comptez 2 990 € HT de pièces, soit 800 pièces.</p>

      <h2>Quelles quantités prévoir ?</h2>
      <table>
        <thead>
          <tr><th>Élément</th><th>Quantité pour 100 personnes</th><th>Repère</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Pièces salées</strong></td><td>900 (12 pièces) ou 1 200 (16 pièces)</td><td>Trois quarts du total</td></tr>
          <tr><td><strong>Pièces sucrées</strong></td><td>300 (12 pièces) ou 400 (16 pièces)</td><td>Un quart du total</td></tr>
          <tr><td><strong>Points de buffet</strong></td><td>4</td><td>Un pour 25 à 30 invités</td></tr>
          <tr><td><strong>Flûtes pour trinquer</strong></td><td>100</td><td>17 bouteilles de 75 cl</td></tr>
          <tr><td><strong>Jus</strong></td><td>25 litres</td><td>1 L pour 4 invités</td></tr>
          <tr><td><strong>Eaux</strong></td><td>20 bouteilles de 75 cl</td><td>1 pour 5 invités</td></tr>
        </tbody>
      </table>

      <h2>Comment organiser le service ?</h2>
      <ul>
        <li><strong>Quatre points de buffet</strong> répartis dans la salle : un seul buffet pour 100 invités crée une file d'un quart d'heure.</li>
        <li><strong>Le même contenu partout</strong> : si un point propose une pièce que les autres n'ont pas, tout le monde s'y presse.</li>
        <li><strong>Un service en trois vagues</strong> : léger à l'arrivée, consistant au milieu, sucré à la fin.</li>
        <li><strong>Un bar séparé des buffets</strong>, pour que la file des boissons ne bloque pas l'accès aux pièces.</li>
      </ul>

      <h2>Sur combien d'invités compter ?</h2>
      <p>Pour un événement interne, comptez sur l'effectif inscrit. Pour une réception avec des invités externes, une partie des inscrits ne vient pas : demandez une confirmation deux jours avant et commandez sur le nombre confirmé, avec 10 % de marge.</p>

      <h2>Combien de temps à l'avance ?</h2>
      <p>Pour 100 personnes, demandez le devis trois à quatre semaines avant et confirmez l'effectif au moins 48 h avant. Indiquez l'accès au lieu, l'étage et l'heure à laquelle la salle est disponible : l'installation, si vous la demandez au devis, se fait avant l'arrivée des invités.</p>

      <h2>Demander un devis pour 100 personnes</h2>
      <p>Toutes nos pièces sont halal et sans porc, sans alcool dans les recettes. Devis détaillé sous 24h, facture entreprise avec TVA, livraison à Paris et en Île-de-France. <a href="/devis">Demander un devis cocktail</a>, ou voir notre <a href="/creations/cocktails">livraison de cocktail d'entreprise</a> et nos <a href="/creations/animations-culinaires">animations culinaires</a>.</p>
    `,
    relatedProducts: ['brochettes-fruits'],
    faq: [
      { q: "Combien de pièces cocktail pour 100 personnes ?", a: "800 pièces pour un apéritif (8 par personne), 1 200 pour un cocktail déjeunatoire (12 par personne), 1 600 pour un cocktail dînatoire (16 par personne), dont environ trois quarts de salé." },
      { q: "Quel budget pour un cocktail de 100 personnes ?", a: "Chez L'Écrin Traiteur : 4 090 € HT en 12 pièces et 5 190 € HT en 16 pièces. Avec les boissons sans alcool et la livraison, comptez 4 740 € HT (47,40 € par personne) ou 5 840 € HT (58,40 € par personne)." },
      { q: "Combien de buffets pour 100 invités ?", a: "Quatre points de buffet, soit un pour 25 à 30 invités, avec le même contenu sur chacun, et un bar séparé." },
    ],
  },
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'cocktail-inauguration-entreprise',
    titre: "Cocktail d'inauguration : organiser la réception de vos nouveaux bureaux",
    metaTitle: "Cocktail d'inauguration d'entreprise : organisation et budget",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    extrait: "Inauguration de bureaux, lancement, emménagement : quel format de cocktail choisir, comment dérouler la soirée et quel budget prévoir pour 40, 80 ou 150 invités.",
    img: '/cocktail-signature.webp',
    contenu: `
      <p>Pour un <strong>cocktail d'inauguration</strong> de bureaux, le format le plus adapté est un cocktail de <strong>8 à 12 pièces par personne sur deux heures</strong>, de 18h à 20h, soit <strong>de 29,90 à 40,90 € HT par invité</strong> chez L'Écrin Traiteur. Vos invités viennent voir les lieux et vous rencontrer : le cocktail doit accompagner la visite, pas l'interrompre.</p>

      <h2>Comment dérouler une inauguration ?</h2>
      <table>
        <thead>
          <tr><th>Heure</th><th>Moment</th><th>Ce qui est servi</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>18h00</strong></td><td>Arrivée des invités</td><td>Boissons, premières pièces salées</td></tr>
          <tr><td><strong>18h30</strong></td><td>Discours et visite des locaux</td><td>Le buffet reste en libre-service</td></tr>
          <tr><td><strong>19h00</strong></td><td>Cœur de la réception</td><td>Pièces salées consistantes, pièces de la mer, animation</td></tr>
          <tr><td><strong>19h45</strong></td><td>Fin de soirée</td><td>Pièces sucrées, boissons chaudes</td></tr>
        </tbody>
      </table>
      <p>Gardez le buffet en libre-service pendant le discours : c'est le moment où la moitié des invités arrive encore.</p>

      <p>Pour la liste d'invités, les invitations et le rétroplanning, voir notre guide <a href="/journal/organiser-inauguration-entreprise-deroule-budget-traiteur">organiser une inauguration d'entreprise</a>. Ici, on se concentre sur le cocktail.</p>

      <h2>Quel format choisir ?</h2>
      <ul>
        <li><strong>8 pièces</strong> si l'inauguration dure une heure, en fin d'après-midi.</li>
        <li><strong>12 pièces</strong> pour le format classique de deux heures : c'est le plus demandé en devis.</li>
        <li><strong>16 pièces</strong> si la soirée se prolonge et tient lieu de dîner.</li>
      </ul>

      <h2>Quel budget pour une inauguration ?</h2>
      <table>
        <thead>
          <tr><th>Invités</th><th>L'Invitation (8 pièces)</th><th>La Réception (12 pièces)</th><th>La Célébration (16 pièces)</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>40 invités</strong></td><td>1 196 € HT</td><td>1 636 € HT</td><td>2 076 € HT</td></tr>
          <tr><td><strong>80 invités</strong></td><td>2 392 € HT</td><td>3 272 € HT</td><td>4 152 € HT</td></tr>
          <tr><td><strong>150 invités</strong></td><td>4 485 € HT</td><td>6 135 € HT</td><td>7 785 € HT</td></tr>
        </tbody>
      </table>
      <p>Prix 2026, hors boissons et hors livraison (29 € HT à Paris et dans les communes proches).</p>

      <h2>Comment répartir les buffets dans des bureaux ?</h2>
      <p>Placez-les là où vous voulez que les invités aillent : un point à l'entrée, un autre au fond des locaux. Les invités suivent les buffets, et la visite se fait toute seule. Évitez les couloirs et les abords de l'ascenseur.</p>

      <h2>Quelle animation pour marquer l'événement ?</h2>
      <p>Une animation donne un point de rendez-vous à la soirée : une découpe de saumon frais, un atelier mini burgers ou un bar à mocktails tenu par un barman. Voir nos <a href="/creations/animations-culinaires">animations culinaires</a> et nos <a href="/journal/idees-pieces-cocktail-entreprise">idées de pièces cocktail</a>.</p>

      <h2>Des invités de tous horizons</h2>
      <p>Une inauguration réunit clients, partenaires, voisins et équipes : vous ne connaissez pas leurs habitudes alimentaires. Toute notre carte est halal et sans porc, et notre bar est sans alcool, avec un pétillant 0 % pour trinquer. Personne n'a à se signaler. Voir le guide du <a href="/journal/cocktail-entreprise-sans-alcool">cocktail sans alcool</a>.</p>

      <h2>Demander un devis</h2>
      <p>Donnez-nous la date, l'adresse et le nombre d'invités attendus : devis sous 24h, livraison et plateaux dressés à Paris et en Île-de-France. <a href="/devis">Demander un devis</a> ou voir nos <a href="/creations/cocktails">cocktails d'entreprise livrés à Paris</a>.</p>
    `,
    relatedProducts: ['brochettes-fruits'],
    faq: [
      { q: "Quel cocktail prévoir pour une inauguration de bureaux ?", a: "Un cocktail de 8 à 12 pièces par personne sur deux heures, en fin de journée, avec le buffet en libre-service pendant le discours. Chez L'Écrin Traiteur, comptez de 29,90 à 40,90 € HT par invité." },
      { q: "Quel budget pour un cocktail d'inauguration de 80 invités ?", a: "2 392 € HT en 8 pièces, 3 272 € HT en 12 pièces et 4 152 € HT en 16 pièces, hors boissons et livraison." },
      { q: "À quelle heure organiser une inauguration ?", a: "De 18h à 20h : assez tard pour que les invités aient fini leur journée, assez tôt pour qu'ils ne comptent pas sur un dîner." },
    ],
  },
]
