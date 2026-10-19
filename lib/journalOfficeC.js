// Articles « office manager » (lot C) : fusionnés via lib/journalOffice.js
// Sources des chiffres : fiche de faits validés du 13 octobre 2026 + données du site
// (cocktails/data.js, productsData.js, boissonsData.js, animations-culinaires/data.js,
// pauses-gourmandes, a-partager, evenementsData.js). Tarifs HT, octobre 2026.
// Tous les budgets : prix par personne × effectif + livraison 29 € HT.

// Le bloc FAQ visible est généré à partir du tableau `faq` : les deux restent identiques.
const faqBlock = (faq) => `
      <div class="faq-block">
${faq.map(({ q, a }) => `        <details>
          <summary><strong>${q}</strong></summary>
          <p>${a}</p>
        </details>`).join('\n')}
      </div>`

const FAQ_DEPART = [
  { q: "Quel budget prévoir pour un pot de départ de 20 personnes ?", a: "Pour 20 personnes, comptez 761,30 € HT en cocktail de 8 pièces : 598 € de pièces, 67,60 € de Chardonnay 0 %, 47,50 € de jus, 19,20 € d'eau et 29 € de livraison, soit 38,07 € HT par personne. En pause gourmande, le même pot démarre à 149 € HT livraison comprise." },
  { q: "Combien de pièces par personne pour un pot de départ ?", a: "Comptez 6 à 8 pièces par personne pour un pot d'une heure en fin de journée, 12 à 14 s'il remplace le déjeuner et 16 à 18 s'il remplace le dîner. Ajoutez 10 % de marge sur l'effectif confirmé : pour 20 personnes en 8 pièces, 160 pièces, soit 176 avec la marge." },
  { q: "Combien de boissons commander pour un pot de départ de 30 personnes ?", a: "Pour 30 personnes, prévoyez 5 bouteilles de Chardonnay 0 % (une flûte par personne, 6 flûtes par bouteille), 8 litres de jus (1 litre pour 4 personnes) et 6 bouteilles d'eau de 75 cl (1 pour 5). Cela représente 189,30 € HT de boissons, soit 6,31 € HT par personne." },
  { q: "Jusqu'à quand commander pour un pot de départ ?", a: "La commande se passe jusqu'à la veille 14h, pour une livraison dès 6h30 du lundi au vendredi. À partir de 50 personnes ou pour plusieurs sites, un préavis de 48 h est recommandé. Le devis est remis sous 24 h, avec un minimum de commande de 50 € HT." },
  { q: "Peut-on organiser un pot de départ avec un gâteau seulement ?", a: "Oui. La grande tarte au citron meringuée sert 10 à 12 personnes pour 59,90 € HT : deux tartes couvrent 20 personnes pour 119,80 € HT, soit 148,80 € HT avec la livraison de 29 €. Ajoutez des boissons si le pot dure plus d'une demi-heure." },
  { q: "Le pot de départ convient-il aux invités qui ne boivent pas d'alcool ou ne mangent pas de porc ?", a: "Oui, c'est le standard : tout est halal et sans porc par défaut, sans alcool et sans supplément. Les options végétarien, vegan et sans gluten se précisent à la commande, avec le nombre de convives concernés. Des traces de gluten restent possibles, l'atelier manipulant de la farine." },
]

const FAQ_ANIMATIONS = [
  { q: "Quel est le tarif minimum d'une animation culinaire en entreprise ?", a: "Le plancher est de 600 € HT. Le tarif d'une animation se compose de la mise en place et des portions, et se chiffre sur devis selon la date, le lieu, l'effectif, la durée et l'accès. Le devis est remis sous 24 h, avec facturation entreprise et TVA." },
  { q: "Combien coûte une animation culinaire par personne ?", a: "Au plancher de 600 € HT, une animation coûte au minimum 30 € HT par personne pour 20 invités, 20 € pour 30, 12 € pour 50 et 6 € pour 100. Le prix réel dépend du nombre de portions, donc de l'animation choisie : il est fixé sur devis." },
  { q: "Pour combien d'invités organiser une animation culinaire ?", a: "À partir de 20 invités, car en dessous le plancher de 600 € HT dépasse 30 € HT par personne, soit le prix d'un cocktail de 8 pièces à 29,90 € HT. Au-delà de 50 invités, le plancher descend sous 12 € par personne et pèse peu dans le budget." },
  { q: "Quelle animation culinaire choisir pour un afterwork ?", a: "Les mini burgers, les tacos gourmet, les loaded fries et le bar à mocktails, 100 % sans alcool, sont les animations du soir : formats debout, montés à la minute. Les mini burgers et les tacos proposent une option végétarienne, au steak végétal sur demande ou au falafel." },
  { q: "Une animation culinaire remplace-t-elle le cocktail ?", a: "Elle en remplace une partie. Pour 50 invités, un cocktail de 8 pièces plus une animation au plancher coûte 2 124 € HT livraison comprise, contre 2 074 € HT pour un cocktail de 12 pièces : 50 € de plus pour échanger 4 pièces par personne contre une animation." },
  { q: "Quelle animation pour un petit-déjeuner d'entreprise ?", a: "Le barista (espresso, cappuccino, latte, flat white), le bar à jus pressés, les œufs brouillés minute et le bar à yaourts et granola. Le plancher de 600 € HT s'applique : à 50 invités, il représente au minimum 12 € HT par personne, en plus du petit-déjeuner." },
]

const FAQ_VOEUX = [
  { q: "Quel budget pour une cérémonie des vœux de 60 personnes ?", a: "Pour 60 personnes, comptez 509 € HT en petit-déjeuner Classique (8 € par personne), 749 à 989 € HT en petit-déjeuner complet, 1 823 € HT en cocktail de 8 pièces et 2 483 € HT en cocktail de 12 pièces, livraison de 29 € HT comprise. Les boissons du cocktail ajoutent 397 € HT." },
  { q: "Combien de pièces pour des vœux de 100 personnes ?", a: "Pour 100 personnes, comptez 800 pièces en formule 8 pièces, 1 200 en formule 12 pièces et 1 600 en formule 16 pièces, soit 2 990, 4 090 et 5 190 € HT avant la livraison de 29 € HT. Le prix par personne ne change pas avec l'effectif." },
  { q: "Combien de galettes pour une cérémonie des vœux de 60 personnes ?", a: "Comptez une galette de 6 parts pour 5 à 6 personnes, soit 10 à 12 galettes pour 60 personnes. Au-delà de 50 personnes, le prix est établi sur devis. Prévoyez 24 litres de jus de pomme à 9,50 € le litre, soit 228 € HT, pour deux verres par personne." },
  { q: "Quel est le format le moins cher pour une cérémonie des vœux ?", a: "Le petit-déjeuner Classique, dès 8 € HT par personne : viennoiseries, jus, café et fruits. Pour 30 personnes, il revient à 269 € HT livraison comprise, soit 8,97 € HT par personne, contre 926 € HT pour un cocktail de 8 pièces." },
  { q: "Combien de temps dure une cérémonie des vœux ?", a: "Prévoyez 1 h 30 : 15 minutes d'accueil, un discours de 5 à 10 minutes, un toast, puis le buffet et les échanges, et un sucré ou une galette dans le dernier quart d'heure. Un cocktail apéritif ou déjeunatoire est calibré pour 1h30 à 2h." },
  { q: "Peut-on trinquer sans alcool pour les vœux ?", a: "Oui. Une bouteille de Chardonnay Blanc de Blancs 0 % à 16,90 € HT sert environ 6 flûtes : 5 bouteilles pour 30 personnes, 10 pour 60, 17 pour 100. Toute la carte est sans alcool, et tout le monde lève le même verre." },
]

const FAQ_CALENDRIER = [
  { q: "Quels sont les temps forts d'une année d'office manager ?", a: "De novembre 2026 à juin 2027 : Noël et la fin d'année, les vœux et la galette, la Chandeleur le 2 février, la Saint-Valentin le 14 février, le 8 mars, Pâques le 28 mars, le 1er mai et les ponts, la fête de la musique le 21 juin." },
  { q: "Quel budget annuel prévoir par collaborateur ?", a: "Pour une équipe de 30 personnes, sept temps forts de novembre 2026 à juin 2027 représentent 2 957 € HT livraisons comprises, soit 98,57 € HT par collaborateur, hors boissons des cocktails. Avec les boissons sans alcool de deux cocktails, 3 335,60 € HT, soit 111,19 € HT par personne." },
  { q: "Combien coûte une pause de Chandeleur pour 30 personnes ?", a: "Une pause gourmande dès 6 € HT par personne revient à 209 € HT pour 30 personnes, livraison de 29 € HT comprise. Les crêpes livrées se commandent par 6 pour 18,90 € HT, soit 3,15 € HT la crêpe. L'atelier crêpes sur place est sur devis, plancher de 600 € HT." },
  { q: "Quand commander pour un temps fort de l'année ?", a: "Jusqu'à la veille 14h, pour une livraison dès 6h30 du lundi au vendredi. À partir de 50 personnes ou pour plusieurs sites, un préavis de 48 h est recommandé. Parlez-en en interne 3 semaines avant pour un cocktail, 1 semaine avant pour une pause ou un petit-déjeuner." },
  { q: "Quelles dates sont fixes dans le calendrier ?", a: "La Chandeleur le 2 février, la Saint-Valentin le 14 février, la journée des droits des femmes le 8 mars, Pâques le 28 mars 2027, la Fête du travail le 1er mai et la fête de la musique le 21 juin. Les autres dates, comme les ponts et les vœux, sont à vérifier." },
  { q: "Quel format pour un pont de mai avec une équipe réduite ?", a: "Le plateau repas individuel : 28,90 € HT en végétarien, 29,90 € HT au poulet, 30,90 € HT au saumon. Pour 10 personnes, comptez 289 à 309 € HT plus 29 € HT de livraison, soit 318 à 338 € HT. Le minimum de commande est de 50 € HT." },
]

export const OFFICE_C = [
  // ───────────────────────────────────────────────────────────────────────────
  // 1. Pot de départ : budget, quantités, déroulé et mail type
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'organiser-pot-de-depart-entreprise-budget-quantites',
    titre: "Organiser un pot de départ en entreprise : budget, quantités et déroulé",
    metaTitle: "Pot de départ en entreprise : budget, quantités, déroulé",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    isoModified: '2026-10-13',
    extrait: "Pot de départ en entreprise : 29,90 € HT par personne en cocktail, quantités de 15 à 50 personnes, déroulé d'une heure et mail d'annonce à copier.",
    img: '/cocktail-sucre.webp',
    contenu: `
      <p>Un pot de départ pour 20 personnes revient à 761,30 € HT en cocktail de 8 pièces, boissons sans alcool et livraison comprises, soit 38,07 € HT par personne, et démarre à 149 € HT en pause gourmande. Voici le format, les quantités, le déroulé et le mail d'annonce à copier. Pour les afterworks en général, voir le <a href="/journal/traiteur-afterwork-pot-depart-entreprise-paris">guide afterwork et pot de départ</a>.</p>

      <h2>Quel format choisir pour un pot de départ ?</h2>
      <p>Choisissez le format selon l'heure : une pause gourmande dès 6 € HT par personne l'après-midi, un cocktail de 8 pièces à 29,90 € HT en fin de journée, un cocktail de 12 pièces à 40,90 € HT s'il remplace le déjeuner. Le tableau donne le total pour 20 personnes, livraison de 29 € HT comprise.</p>
      <table>
        <thead>
          <tr><th>Format</th><th>Moment</th><th>Prix HT par personne</th><th>Total HT pour 20 personnes</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Grande tarte au citron meringuée</strong>, 2 tartes de 10 à 12 personnes</td><td>Fin d'après-midi</td><td>5,99 €</td><td>148,80 €</td></tr>
          <tr><td><strong><a href="/creations/pauses-gourmandes">Pause gourmande</a></strong></td><td>Après-midi, 20 à 30 minutes</td><td>dès 6 €</td><td>149 €</td></tr>
          <tr><td><strong>Cocktail L'Invitation</strong>, 8 pièces</td><td>Fin de journée, 1h30 à 2h</td><td>29,90 €</td><td>627 €</td></tr>
          <tr><td><strong>Cocktail La Réception</strong>, 12 pièces</td><td>Midi ou début de soirée</td><td>40,90 €</td><td>847 €</td></tr>
          <tr><td><strong>Menu à partager Le Jardin</strong>, végétarien</td><td>Déjeuner</td><td>34,90 €</td><td>727 €</td></tr>
        </tbody>
      </table>
      <p>Les formules cocktail sont détaillées sur la page <a href="/creations/cocktails">cocktails d'entreprise</a>.</p>

      <h2>Quel budget prévoir pour un pot de départ en cocktail ?</h2>
      <p>Comptez de 37 à 39 € HT par personne pour un cocktail de 8 pièces avec une flûte de Chardonnay 0 %, du jus et de l'eau, livraison comprise. Le tableau donne les quantités et le total de 15 à 50 personnes.</p>
      <table>
        <thead>
          <tr><th>Effectif</th><th>Pièces (8 par personne)</th><th>Chardonnay 0 % (1 flûte par personne)</th><th>Jus (1 L pour 4 personnes)</th><th>Eau (75 cl, 1 pour 5)</th><th>Total HT</th><th>Par personne</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>15</strong></td><td>120</td><td>3 bouteilles</td><td>4 L</td><td>3 bouteilles</td><td>580,60 €</td><td>38,71 €</td></tr>
          <tr><td><strong>20</strong></td><td>160</td><td>4 bouteilles</td><td>5 L</td><td>4 bouteilles</td><td>761,30 €</td><td>38,07 €</td></tr>
          <tr><td><strong>30</strong></td><td>240</td><td>5 bouteilles</td><td>8 L</td><td>6 bouteilles</td><td>1 115,30 €</td><td>37,18 €</td></tr>
          <tr><td><strong>50</strong></td><td>400</td><td>9 bouteilles</td><td>13 L</td><td>10 bouteilles</td><td>1 847,60 €</td><td>36,95 €</td></tr>
        </tbody>
      </table>
      <p>Calcul pour 20 personnes : 20 × 29,90 € = 598 € ; 4 × 16,90 € = 67,60 € ; 5 × 9,50 € = 47,50 € ; 4 × 4,80 € = 19,20 € ; livraison 29 € ; total 761,30 €. Une bouteille de 75 cl sert environ 6 flûtes, un litre de jus sert 4 personnes, une bouteille d'eau de 75 cl en sert 5. Le détail est dans le guide du <a href="/journal/cocktail-entreprise-sans-alcool">cocktail d'entreprise sans alcool</a>.</p>

      <h2>Combien de pièces par personne pour un pot de départ ?</h2>
      <p>Comptez 6 à 8 pièces par personne pour un pot d'une heure en fin de journée, 12 à 14 s'il remplace le déjeuner et 16 à 18 s'il remplace le dîner. Ajoutez 10 % de marge sur l'effectif confirmé : pour 20 présents attendus, commandez pour 22 personnes. Le prix par personne ne change pas, seule la quantité s'ajuste.</p>

      <h2>Quelles pièces servir à un pot de départ ?</h2>
      <p>La formule L'Invitation compte 6 pièces salées et 2 sucrées par personne : pour 20 personnes, 120 pièces salées et 40 sucrées, avant la marge de 10 %. Les salées sont les gougères au fromage, le chou craquelin à la tapenade, la tartelette pissaladière, le millefeuille de betterave au chèvre, la brochette de poulet tandoori et le mini cheeseburger ; les sucrées, la tartelette tout chocolat et la brochette de fruits frais.</p>

      <h2>Quel déroulé pour un pot de départ d'une heure ?</h2>
      <p>Un pot de départ tient en une heure : 15 minutes d'accueil, un mot du manager et la remise du cadeau avant la minute 25, puis le toast, le buffet et les échanges. Le tableau donne le minutage et la personne en charge de chaque étape.</p>
      <table>
        <thead>
          <tr><th>Minute</th><th>Étape</th><th>Qui</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Avant</strong></td><td>Livraison dès 6h30 ; plateaux posés et boissons au frais. La livraison ne comprend pas l'installation</td><td>Office manager</td></tr>
          <tr><td><strong>0 à 15</strong></td><td>Accueil, boissons servies à l'arrivée</td><td>Office manager</td></tr>
          <tr><td><strong>15 à 25</strong></td><td>Mot du manager (3 à 5 minutes), remise du cadeau commun</td><td>Manager</td></tr>
          <tr><td><strong>25 à 30</strong></td><td>Toast avec le Chardonnay 0 % ou un verre de jus</td><td>Tous</td></tr>
          <tr><td><strong>30 à 55</strong></td><td>Buffet salé, échanges, la personne qui part circule</td><td>Tous</td></tr>
          <tr><td><strong>55 à 60</strong></td><td>Sucré, café, photo de groupe</td><td>Tous</td></tr>
        </tbody>
      </table>

      <h2>Qui commande, et à quel moment ?</h2>
      <p>L'office manager commande une fois le budget validé par le manager : le devis est remis sous 24 h, et la commande ferme se fait jusqu'à la veille 14h. Voici le calendrier le plus simple.</p>
      <ul>
        <li><strong>Dès que la date est connue</strong> : demande de devis avec l'effectif estimé.</li>
        <li><strong>3 jours avant</strong> : relance des réponses et recensement des régimes.</li>
        <li><strong>La veille avant 14h</strong> : commande ferme avec l'effectif confirmé plus 10 %.</li>
        <li><strong>À partir de 50 personnes ou pour plusieurs sites</strong> : préavis de 48 h recommandé.</li>
      </ul>
      <p>La check-list complète est dans <a href="/journal/checklist-office-manager-commander-traiteur">la check-list de l'office manager pour commander un traiteur</a>.</p>

      <h2>Quel mail d'annonce envoyer pour un pot de départ ?</h2>
      <p>Un mail d'annonce tient en cinq lignes : la raison, la date, le lieu, la date limite de réponse et le référent du cadeau. Copiez le modèle et remplacez les crochets.</p>
      <div style="background: var(--bg-secondary); border-left: 2px solid var(--accent); padding: 24px 28px; margin: 0 0 40px;">
        <p style="margin-bottom: 12px;"><strong>Objet : Pot de départ de [Prénom], le [jour] à [heure]</strong></p>
        <p style="margin-bottom: 12px;">Bonjour à tous,</p>
        <p style="margin-bottom: 12px;">[Prénom] quitte l'entreprise le [date]. Nous organisons un pot de départ le [jour] à [heure], en [lieu], pour le remercier et lui souhaiter une bonne continuation.</p>
        <p style="margin-bottom: 12px;">Merci de répondre avant le [date limite] pour nous permettre de commander : présence oui ou non, et régime alimentaire éventuel (végétarien, sans gluten, allergie).</p>
        <p style="margin-bottom: 12px;">Une cagnotte est ouverte pour le cadeau commun : [référent ou lien]. Chacun donne ce qu'il souhaite, [montant indicatif] € est un bon repère.</p>
        <p style="margin-bottom: 0;">Cordialement,<br>[Prénom, fonction]</p>
      </div>

      <h2>Comment organiser le cadeau commun ?</h2>
      <p>Nommez un seul référent pour la collecte, indiquez un montant indicatif dans le mail et fixez une date de clôture quatre jours avant le pot. Un montant indicatif de 5 € donne 150 € avec 30 contributeurs. Le référent achète le cadeau et prépare une carte signée, remise après le mot du manager.</p>

      <h2>Que changer pour un départ en retraite ?</h2>
      <p>Pour un départ en retraite, comptez plus d'invités (anciens collègues, autres services) et montez en gamme : 50 personnes en cocktail de 12 pièces, boissons comprises, représentent 2 416,10 € HT, soit 48,32 € HT par personne. Le calcul : 50 × 40,90 € = 2 045 € ; 9 × 16,90 € = 152,10 € ; 20 × 9,50 € = 190 € ; livraison 29 €. Les quantités sont détaillées dans le guide du <a href="/journal/cocktail-entreprise-50-personnes">cocktail d'entreprise pour 50 personnes</a>.</p>

      <h2>Quelles erreurs fréquentes éviter pour un pot de départ ?</h2>
      <ul>
        <li><strong>Commander sur la liste d'invités</strong> plutôt que sur les réponses reçues : relancez à J-3 et commandez sur l'effectif confirmé plus 10 %.</li>
        <li><strong>Oublier les régimes</strong> : végétarien, vegan et sans gluten se précisent à la commande, pas sur place.</li>
        <li><strong>Laisser le buffet ouvert pendant le mot du manager</strong> : accueillez d'abord, servez ensuite.</li>
        <li><strong>Ne désigner personne pour la mise en place</strong> : la livraison ne comprend ni installation ni reprise.</li>
        <li><strong>Prévoir des boissons à part pour ceux qui ne boivent pas d'alcool</strong> : une carte entièrement sans alcool évite la distinction.</li>
      </ul>

      <h2>Questions fréquentes sur le pot de départ en entreprise</h2>${faqBlock(FAQ_DEPART)}

      <h2>Comment demander un devis pour votre pot de départ ?</h2>
      <p>Indiquez la date, l'effectif et l'adresse : le devis est remis sous 24 h, avec facturation entreprise, TVA et bon de commande accepté. <a href="/devis">Demandez votre devis</a>. Tarifs L'Écrin Traiteur, octobre 2026.</p>
    `,
    relatedProducts: ['tarte-citron-meringuee-grande', 'brochettes-fruits', 'macarons'],
    faq: FAQ_DEPART,
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 2. Animations culinaires : idées, nombre d'invités, budget
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'animations-culinaires-entreprise-idees-budget',
    titre: "Animations culinaires en entreprise : idées, nombre d'invités et budget",
    metaTitle: "Animation culinaire en entreprise : idées et budget",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    isoModified: '2026-10-13',
    extrait: "Animation culinaire en entreprise : idées par moment, plancher de 600 € HT, coût minimum par personne selon l'effectif et ce qui est inclus.",
    img: '/hero-animations.webp',
    contenu: `
      <p>Une animation culinaire en entreprise se chiffre en deux postes, la mise en place et les portions, avec un plancher de 600 € HT : à 20 invités, cela représente au minimum 30 € HT par personne, à 50 invités 12 €, à 100 invités 6 €. Cet article classe les animations par moment, donne ce que vos invités reçoivent et montre comment les ajouter à un cocktail. Pour un panorama de formats, voir les <a href="/journal/animation-culinaire-entreprise-paris">idées d'animations culinaires</a>.</p>

      <h2>Combien coûte une animation culinaire en entreprise ?</h2>
      <p>Le tarif d'une animation traiteur est la somme de la mise en place et des portions, avec un plancher de 600 € HT : le prix exact est fixé sur devis, car chaque animation se chiffre selon la date, le lieu, l'effectif, la durée et l'accès. Le tableau montre ce que le plancher représente par personne.</p>
      <table>
        <thead>
          <tr><th>Invités</th><th>Coût minimum par personne (600 € HT ÷ invités)</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>15</strong></td><td>40,00 € HT</td></tr>
          <tr><td><strong>20</strong></td><td>30,00 € HT</td></tr>
          <tr><td><strong>30</strong></td><td>20,00 € HT</td></tr>
          <tr><td><strong>50</strong></td><td>12,00 € HT</td></tr>
          <tr><td><strong>100</strong></td><td>6,00 € HT</td></tr>
        </tbody>
      </table>
      <p>Ces montants sont des planchers, pas des prix : le coût réel dépend du nombre de portions.</p>

      <h2>Pour combien d'invités organiser une animation culinaire ?</h2>
      <p>Visez 20 invités au minimum : en dessous, le plancher de 600 € HT dépasse 30 € HT par personne, soit le prix d'un cocktail de 8 pièces, sans mettre en scène un moment. Au-delà de 50 invités, le plancher descend sous 12 € par personne et se dilue dans le budget. Cadence, quantités et durée du service se calent sur le nombre d'invités au devis.</p>

      <h2>Quelle animation culinaire choisir selon le moment ?</h2>
      <p>Choisissez l'animation selon le moment de la journée : le chaud et le liquide le matin, le sucré à la pause, le salé à midi, les formats debout le soir. Le tableau associe chaque moment aux animations de notre <a href="/creations/animations-culinaires">catalogue d'animations culinaires</a> et à leur contenu.</p>
      <table>
        <thead>
          <tr><th>Moment</th><th>Animations adaptées</th><th>Ce que vos invités reçoivent</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Petit-déjeuner d'accueil, séminaire</strong></td><td>Barista ; bar à jus pressés ; œufs minute ; bar à yaourts et granola</td><td>Espresso, cappuccino, latte, flat white, thés ; jus d'orange, pamplemousse, citronnade ; œufs brouillés, au plat, omelettes ; skyr, granola maison, fruits</td></tr>
          <tr><td><strong>Pause de l'après-midi, semaine QVT</strong></td><td>Crêpes et pancakes ; gaufres belges ; bar à fruits frais ; pop corn sucré</td><td>Sirop d'érable, chocolat, caramel beurre salé, fruits frais, chantilly ; fruits de saison découpés minute</td></tr>
          <tr><td><strong>Déjeuner d'équipe</strong></td><td>Pasta minute ; bagels ; wrap et pita libanais ; mini baguettes</td><td>Trofie au pesto, burrata ; bagels saumon, poulet César, avocat feta ; chawarma, falafel, houmous ; jambon de dinde, thon, pastrami</td></tr>
          <tr><td><strong>Afterwork, soirée d'équipe</strong></td><td>Mini burgers ; tacos gourmet ; loaded fries ; bar à mocktails</td><td>Hamburger, cheeseburger, steak végétal ; poulet mariné, bœuf effiloché, falafel ; mocktails 100 % sans alcool</td></tr>
          <tr><td><strong>Cocktail, inauguration, soirée partenaires</strong></td><td>Découpe de saumon ; fromages affinés ; charcuterie halal sans porc ; sushi et maki ; focaccia et burrata</td><td>Blinis, crème citron-aneth ; fromages affinés et pains ; bœuf séché, dinde fumée, bresaola ; makis, nigiris, gyozas</td></tr>
          <tr><td><strong>Fête des collaborateurs, arbre de Noël</strong></td><td>Bar à glaces ; barbe à papa ; fontaine au chocolat</td><td>Six parfums de glace et toppings ; sucres colorés ; fruits et douceurs à tremper</td></tr>
        </tbody>
      </table>

      <h2>Que comprend une animation traiteur ?</h2>
      <p>Une animation comprend l'intervenant qui prépare devant vos invités, la mise en place, les denrées calées sur l'effectif, et selon la fiche l'installation et le démontage ou la reprise du matériel. Les points à confirmer au devis :</p>
      <ul>
        <li><strong>Barista</strong> : machine et comptoir installés puis démontés. <strong>Machine expresso en location</strong> : livraison, installation et reprise, capsules premium, gobelets, sucres et touillettes.</li>
        <li><strong>Ateliers chauds</strong> (crêpes, gaufres, œufs, pasta) : accès électrique et espace à prévoir de votre côté.</li>
        <li><strong>Vaisselle réutilisable</strong> : la récupération du matériel est facturée 19 € HT en plus de la livraison.</li>
      </ul>

      <h2>Combien budgéter une animation ajoutée à un cocktail ?</h2>
      <p>Pour 50 invités, un cocktail de 8 pièces plus une animation au plancher coûte au minimum 2 124 € HT livraison comprise, soit 42,48 € HT par personne. Le tableau compare les effectifs courants, avec la livraison de la partie cocktail à 29 € HT.</p>
      <table>
        <thead>
          <tr><th>Invités</th><th>Cocktail 8 pièces</th><th>Animation au plancher</th><th>Livraison</th><th>Total minimum HT</th><th>Par personne</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>30</strong></td><td>897 €</td><td>600 €</td><td>29 €</td><td>1 526 €</td><td>50,87 €</td></tr>
          <tr><td><strong>50</strong></td><td>1 495 €</td><td>600 €</td><td>29 €</td><td>2 124 €</td><td>42,48 €</td></tr>
          <tr><td><strong>100</strong></td><td>2 990 €</td><td>600 €</td><td>29 €</td><td>3 619 €</td><td>36,19 €</td></tr>
        </tbody>
      </table>
      <p>À 50 invités, le cocktail de 12 pièces coûte 2 074 € HT livré : l'animation au plancher revient à 50 € HT de plus, pour échanger 4 pièces par personne contre un moment mis en scène. Les boissons s'ajoutent, voir <a href="/journal/idees-pieces-cocktail-entreprise">les idées de pièces cocktail</a> et la page <a href="/creations/cocktails">cocktails d'entreprise</a>.</p>

      <h2>Quel budget pour une animation sur trois moments courants ?</h2>
      <p>Trois exemples calculés au plancher de 600 € HT, avec le prix catalogue du reste de la prestation ; le prix réel de l'animation est fixé sur devis.</p>
      <ul>
        <li><strong>Petit-déjeuner d'accueil, 30 personnes</strong> : petit-déjeuner Classique 30 × 8 € + 29 € = 269 €, plus un barista au plancher de 600 €, soit 869 € HT au minimum et 28,97 € par personne.</li>
        <li><strong>Déjeuner d'équipe, 20 personnes</strong> : 20 plateaux repas végétariens à 28,90 € livrés coûtent 607 € ; un atelier pasta part déjà de 600 €, le plateau repas sert donc de repère et l'atelier se chiffre au devis.</li>
        <li><strong>Fête des collaborateurs, 50 personnes</strong> : pause gourmande 50 × 6 € + 29 € = 329 €, plus un bar à glaces au plancher de 600 €, soit 929 € HT au minimum et 18,58 € par personne.</li>
      </ul>

      <h2>Les animations conviennent-elles aux régimes alimentaires ?</h2>
      <p>Oui : tout est halal et sans porc par défaut, sans alcool, et le bar à mocktails est 100 % sans alcool. Les mini burgers (steak végétal sur demande), les tacos et les wraps (falafel) ont une option végétarienne, et le sushi une option sans poisson cru. Les options sans gluten se précisent à la commande, l'atelier manipulant de la farine.</p>

      <h2>Quelles erreurs fréquentes éviter avec une animation ?</h2>
      <ul>
        <li><strong>Choisir l'animation avant l'effectif</strong> : sous 20 invités, le plancher pèse plus de 30 € HT par personne.</li>
        <li><strong>Oublier les contraintes techniques</strong> : accès, électricité et espace se donnent dès la demande de devis.</li>
        <li><strong>Cumuler animation et cocktail complet</strong> : l'animation remplace une partie des pièces, demandez ce qui peut être retiré.</li>
        <li><strong>Demander le devis trop tard</strong> : une animation se chiffre sur devis, sous 24 h, avec un préavis de 48 h recommandé à partir de 50 personnes.</li>
        <li><strong>Placer l'animation loin du passage</strong> : un poste au fond d'une salle reste inutilisé.</li>
      </ul>

      <h2>Questions fréquentes sur les animations culinaires en entreprise</h2>${faqBlock(FAQ_ANIMATIONS)}

      <h2>Comment demander un devis pour une animation culinaire ?</h2>
      <p>Indiquez la date, le lieu, l'effectif, la durée et l'accès (électricité, espace) : le devis est remis sous 24 h, avec facturation entreprise et TVA. Pour le petit-déjeuner, voir aussi les <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a> et l'offre <a href="/occasions/afterwork-entreprise">afterwork en entreprise</a>. <a href="/devis">Demandez votre devis</a>. Tarifs L'Écrin Traiteur, octobre 2026.</p>
    `,
    relatedProducts: ['crepes', 'brochettes-fruits', 'macarons'],
    faq: FAQ_ANIMATIONS,
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 3. Cérémonie des vœux en janvier
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'ceremonie-voeux-entreprise-janvier-traiteur',
    titre: "Cérémonie des vœux en entreprise : format, budget et quantités (janvier)",
    metaTitle: "Cérémonie des vœux en entreprise : format, budget",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    isoModified: '2026-10-13',
    extrait: "Cérémonie des vœux en entreprise : petit-déjeuner dès 8 € HT, cocktail dès 29,90 € HT par personne, budgets et quantités pour 30, 60 et 100 personnes.",
    img: '/cocktail-prestige.webp',
    contenu: `
      <p>Une cérémonie des vœux se budgète de 269 à 1 256 € HT pour 30 personnes, de 509 à 2 483 € HT pour 60 et de 829 à 4 119 € HT pour 100, livraison comprise, selon que vous choisissez un petit-déjeuner Classique ou un cocktail de 12 pièces. Voici les formats, les quantités et un déroulé de 1 h 30 pour janvier. La galette a son propre guide : <a href="/journal/galette-des-rois-entreprise-paris">galette des rois en entreprise</a>.</p>

      <h2>Quel format choisir pour une cérémonie des vœux ?</h2>
      <p>Choisissez le petit-déjeuner pour des vœux le matin sans bloquer la journée, le cocktail pour des vœux en fin de journée ou à midi, la galette en complément ou comme format court. Le tableau compare les formats avec leur prix HT par personne.</p>
      <table>
        <thead>
          <tr><th>Format</th><th>Moment</th><th>Prix HT par personne</th><th>À choisir quand</th></tr>
        </thead>
        <tbody>
          <tr><td><strong><a href="/creations/petits-dejeuners-et-pauses">Petit-déjeuner Classique</a></strong></td><td>Entre 9h et 10h</td><td>dès 8 €</td><td>L'équipe reprend, sans soirée à bloquer</td></tr>
          <tr><td><strong>Petit-déjeuner complet</strong></td><td>Entre 9h et 10h</td><td>12 à 16 €</td><td>La direction ou des invités sont présents</td></tr>
          <tr><td><strong>Galette et boissons</strong></td><td>Fin de matinée ou pause de l'après-midi</td><td>Galettes sur devis</td><td>Un moment court, ou en complément</td></tr>
          <tr><td><strong>Cocktail L'Invitation</strong>, 8 pièces</td><td>Fin de journée</td><td>29,90 €</td><td>Les vœux se prolongent en échanges</td></tr>
          <tr><td><strong>Cocktail La Réception</strong>, 12 pièces</td><td>Midi ou début de soirée</td><td>40,90 €</td><td>Les vœux remplacent le déjeuner</td></tr>
        </tbody>
      </table>

      <h2>Quel budget prévoir pour 30, 60 ou 100 personnes ?</h2>
      <p>Pour 60 personnes, comptez 509 € HT en petit-déjeuner Classique et 1 823 € HT en cocktail de 8 pièces, livraison de 29 € HT comprise. Le calcul est toujours prix par personne × effectif + 29 € HT : 60 × 29,90 € = 1 794 €, plus 29 €.</p>
      <table>
        <thead>
          <tr><th>Format</th><th>30 personnes</th><th>60 personnes</th><th>100 personnes</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Petit-déjeuner Classique (8 €)</strong></td><td>269 €</td><td>509 €</td><td>829 €</td></tr>
          <tr><td><strong>Petit-déjeuner complet (12 à 16 €)</strong></td><td>389 à 509 €</td><td>749 à 989 €</td><td>1 229 à 1 629 €</td></tr>
          <tr><td><strong>Cocktail 8 pièces (29,90 €)</strong></td><td>926 €</td><td>1 823 €</td><td>3 019 €</td></tr>
          <tr><td><strong>Cocktail 12 pièces (40,90 €)</strong></td><td>1 256 €</td><td>2 483 €</td><td>4 119 €</td></tr>
          <tr><td><strong>Boissons du cocktail</strong></td><td>189,30 €</td><td>369,10 €</td><td>620,80 €</td></tr>
        </tbody>
      </table>
      <p>Les montants sont en euros HT. Le petit-déjeuner Classique comprend viennoiseries, jus, café et fruits. Les boissons du cocktail se comptent à une flûte de Chardonnay 0 % par personne à 16,90 € la bouteille, 1 litre de jus pour 4 personnes à 9,50 € et 1 bouteille d'eau de 75 cl pour 5 à 4,80 € : pour 60 personnes, 10 bouteilles de Chardonnay, 15 litres de jus et 12 bouteilles d'eau. Le cocktail de 8 pièces avec boissons revient alors à 2 192,10 € HT, soit 36,54 € HT par personne. Voir le <a href="/journal/budget-cocktail-entreprise-paris">budget d'un cocktail d'entreprise à Paris</a> et, pour 50 personnes, le <a href="/journal/cocktail-entreprise-50-personnes">menu et le budget ligne par ligne</a>.</p>

      <h2>Quelles quantités commander pour 30, 60 et 100 personnes ?</h2>
      <p>Pour 60 personnes, comptez 480 pièces en formule 8 pièces, 132 viennoiseries ou 10 à 12 galettes de 6 parts. Le tableau reprend les règles : 6 à 8 pièces par personne en apéritif, 12 à 14 en déjeunatoire, 2 viennoiseries par personne, une galette pour 5 à 6 personnes, et 10 % de marge.</p>
      <table>
        <thead>
          <tr><th>Effectif</th><th>Pièces, 8 par personne</th><th>Pièces, 12 par personne</th><th>Viennoiseries (2 par personne + 10 %)</th><th>Plateaux de 30 mini-viennoiseries</th><th>Galettes de 6 parts</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>30</strong></td><td>240</td><td>360</td><td>66</td><td>2 à 3</td><td>5 à 6</td></tr>
          <tr><td><strong>60</strong></td><td>480</td><td>720</td><td>132</td><td>4 à 6</td><td>10 à 12</td></tr>
          <tr><td><strong>100</strong></td><td>800</td><td>1 200</td><td>220</td><td>7 à 10</td><td>17 à 20</td></tr>
        </tbody>
      </table>
      <p>Un plateau de 30 mini-viennoiseries sert 10 à 15 personnes. Le prix des galettes est établi sur devis. Le nombre de pièces par formule est détaillé dans le guide <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">combien de pièces cocktail par personne</a>.</p>

      <h2>Comment budgéter des vœux pour un autre effectif ?</h2>
      <p>Pour tout autre effectif, appliquez prix par personne × effectif + 29 € HT de livraison : pour 45 personnes, 45 × 29,90 € + 29 € = 1 374,50 € HT en cocktail de 8 pièces, et 45 × 8 € + 29 € = 389 € HT en petit-déjeuner Classique. Le prix par personne ne change pas avec l'effectif, seule la livraison est fixe.</p>

      <h2>Quel déroulé pour une cérémonie des vœux de 1 h 30 ?</h2>
      <p>Une cérémonie des vœux de 1 h 30 se déroule en cinq temps : 15 minutes d'accueil, un discours de 5 à 10 minutes, un toast, le buffet et les échanges, puis le sucré ou la galette dans le dernier quart d'heure. Un cocktail est calibré pour 1h30 à 2h.</p>
      <ol>
        <li><strong>0 à 15 minutes</strong> : accueil, boissons servies, buffet encore couvert.</li>
        <li><strong>15 à 30 minutes</strong> : discours de vœux de 5 à 10 minutes, par la direction.</li>
        <li><strong>30 minutes</strong> : toast avec le Chardonnay 0 % ou un verre de jus.</li>
        <li><strong>30 à 75 minutes</strong> : buffet salé, échanges.</li>
        <li><strong>75 à 90 minutes</strong> : galette ou desserts, café, retour aux postes.</li>
      </ol>

      <h2>Quel message envoyer pour inviter les équipes aux vœux ?</h2>
      <p>Un message d'invitation tient en trois phrases : le format, le créneau et la date limite de réponse. Modèle à copier : « Bonjour à tous, la direction vous invite à la cérémonie des vœux le [jour] à [heure], en [lieu], autour d'un [petit-déjeuner ou cocktail]. Merci de confirmer votre présence avant le [date] et de signaler un régime alimentaire (végétarien, sans gluten, allergie). Cordialement, [Prénom] »</p>

      <h2>Comment choisir entre petit-déjeuner, cocktail et galette ?</h2>
      <p>Choisissez selon l'heure et la durée : le petit-déjeuner avant 10h, le cocktail de 8 pièces si l'équipe reste après 17h, celui de 12 pièces si les vœux remplacent le déjeuner. Si le budget est contraint, le petit-déjeuner Classique à 8 € HT par personne divise le coût du cocktail de 8 pièces par plus de trois : 269 € contre 926 € pour 30 personnes. Les boissons sans alcool sont détaillées dans le guide du <a href="/journal/cocktail-entreprise-sans-alcool">cocktail d'entreprise sans alcool</a>.</p>

      <h2>Quand organiser et commander les vœux de janvier ?</h2>
      <p>Organisez les vœux en janvier, à une date à vérifier dans votre calendrier interne : l'Épiphanie et la reprise des équipes sont à confirmer. La commande se passe jusqu'à la veille 14h, pour une livraison dès 6h30 du lundi au vendredi, avec un préavis de 48 h recommandé à partir de 50 personnes ou pour plusieurs sites. Demandez le devis en décembre pour caler le budget.</p>

      <h2>Quelles erreurs fréquentes éviter pour les vœux ?</h2>
      <ul>
        <li><strong>Fixer le budget avant l'effectif</strong> : chaque personne en plus coûte 29,90 € HT en cocktail 8 pièces.</li>
        <li><strong>Commander sur la liste complète</strong> plutôt que sur les présents confirmés plus 10 %.</li>
        <li><strong>Oublier les régimes</strong> : végétarien, vegan et sans gluten se précisent à la commande.</li>
        <li><strong>Laisser le buffet découvert pendant le discours</strong> : découvrez les plateaux après les vœux.</li>
        <li><strong>Ne désigner personne pour l'installation</strong> : la livraison ne comprend ni mise en place ni reprise.</li>
      </ul>

      <h2>Questions fréquentes sur la cérémonie des vœux en entreprise</h2>${faqBlock(FAQ_VOEUX)}

      <h2>Comment demander un devis pour vos vœux ?</h2>
      <p>Indiquez le format, l'effectif, la date et l'adresse : le devis est remis sous 24 h, avec facturation entreprise, TVA et bon de commande accepté. <a href="/devis">Demandez votre devis</a>. Tarifs L'Écrin Traiteur, octobre 2026.</p>
    `,
    relatedProducts: ['viennoiseries-melangees', 'madeleines-20', 'macarons'],
    faq: FAQ_VOEUX,
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 4. Calendrier de l'office manager 2026-2027
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'calendrier-office-manager-2026-2027-temps-forts',
    titre: "Calendrier de l'office manager 2026-2027 : les temps forts de l'année et le budget type par personne",
    metaTitle: "Calendrier office manager 2026-2027 : temps forts, budget",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    isoModified: '2026-10-13',
    extrait: "De novembre 2026 à juin 2027 : 8 temps forts, le format conseillé, le budget HT par personne et le bon moment pour en parler en interne.",
    img: '/hero-pauses-gourmandes.webp',
    contenu: `
      <p>Le calendrier de l'office manager de novembre 2026 à juin 2027 compte huit temps forts, pour un budget type de 98,57 € HT par collaborateur dans une équipe de 30 personnes, livraisons comprises et hors boissons des cocktails. Voici pour chacun le format, le budget par personne calculé sur le catalogue et le moment d'en parler en interne.</p>

      <h2>Quels sont les temps forts de l'année pour un office manager ?</h2>
      <p>De novembre 2026 à juin 2027, huit temps forts rythment l'année : la fin d'année, les vœux, la Chandeleur le 2 février, la Saint-Valentin le 14 février, le 8 mars, Pâques le 28 mars, le pont de mai et la fête de la musique le 21 juin. Le tableau donne le format conseillé et le budget par personne.</p>
      <table>
        <thead>
          <tr><th>Période</th><th>Temps fort</th><th>Format conseillé</th><th>Budget HT par personne</th><th>À lancer en interne</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Novembre et décembre 2026</strong></td><td>Noël et fin d'année (dates à vérifier)</td><td>Petit-déjeuner de Noël ou cocktail 8 pièces</td><td>dès 8 € ou 29,90 €</td><td>J-45</td></tr>
          <tr><td><strong>Janvier 2027</strong></td><td>Vœux et galette (date à vérifier)</td><td>Petit-déjeuner des vœux, galette en complément</td><td>dès 8 €</td><td>En décembre, devis 3 semaines avant</td></tr>
          <tr><td><strong>2 février 2027</strong></td><td>Chandeleur</td><td>Crêpes livrées, ou atelier crêpes sur place</td><td>Pause gourmande dès 6 €</td><td>1 semaine avant</td></tr>
          <tr><td><strong>14 février 2027</strong></td><td>Saint-Valentin</td><td>Coffret de 24 macarons à 64,00 € (8 à 12 personnes)</td><td>5,33 à 8,00 €</td><td>1 semaine avant</td></tr>
          <tr><td><strong>8 mars 2027</strong></td><td>Journée des droits des femmes</td><td>Petit-déjeuner ou goûter, madeleines personnalisées</td><td>dès 6 € ; coffret de 20 madeleines : 4,08 à 6,13 €</td><td>1 semaine avant, annonce à l'équipe</td></tr>
          <tr><td><strong>28 mars 2027</strong></td><td>Pâques</td><td>Pause chocolatée la semaine précédente</td><td>Pause gourmande dès 6 €</td><td>1 semaine avant</td></tr>
          <tr><td><strong>Mai 2027</strong></td><td>1er mai et ponts (dates à vérifier)</td><td>Plateaux repas pour l'équipe présente</td><td>28,90 à 30,90 €</td><td>Dès que l'effectif présent est connu</td></tr>
          <tr><td><strong>21 juin 2027</strong></td><td>Fête de la musique, afterwork</td><td>Cocktail L'Invitation, 8 pièces</td><td>29,90 €</td><td>3 semaines avant</td></tr>
        </tbody>
      </table>
      <p>Les guides détaillés : <a href="/journal/fetes-fin-annee-entreprise-guide-chiffre-2026">fêtes de fin d'année en entreprise 2026</a> et <a href="/journal/galette-des-rois-entreprise-paris">galette des rois en entreprise</a>. Pour les vœux, un guide chiffré pour 30, 60 et 100 personnes est dans <a href="/journal/ceremonie-voeux-entreprise-janvier-traiteur">cérémonie des vœux en entreprise</a>.</p>

      <h2>Quel budget prévoir par collaborateur sur l'année ?</h2>
      <p>Pour une équipe de 30 personnes, sept temps forts représentent 2 957 € HT livraisons comprises, soit 98,57 € HT par collaborateur, hors boissons des cocktails. Le pont de mai n'y figure pas : son coût dépend de l'effectif présent. Chaque ligne se calcule en prix par personne × 30 + 29 € HT de livraison.</p>
      <table>
        <thead>
          <tr><th>Temps fort</th><th>Format</th><th>Calcul</th><th>Total HT</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Noël, fin d'année</strong></td><td>Cocktail 8 pièces</td><td>30 × 29,90 € + 29 €</td><td>926 €</td></tr>
          <tr><td><strong>Vœux</strong></td><td>Petit-déjeuner Classique</td><td>30 × 8 € + 29 €</td><td>269 €</td></tr>
          <tr><td><strong>Chandeleur</strong></td><td>Pause gourmande</td><td>30 × 6 € + 29 €</td><td>209 €</td></tr>
          <tr><td><strong>Saint-Valentin</strong></td><td>Pause gourmande</td><td>30 × 6 € + 29 €</td><td>209 €</td></tr>
          <tr><td><strong>8 mars</strong></td><td>Pause gourmande</td><td>30 × 6 € + 29 €</td><td>209 €</td></tr>
          <tr><td><strong>Pâques</strong></td><td>Pause gourmande</td><td>30 × 6 € + 29 €</td><td>209 €</td></tr>
          <tr><td><strong>Fête de la musique</strong></td><td>Cocktail 8 pièces</td><td>30 × 29,90 € + 29 €</td><td>926 €</td></tr>
          <tr><td><strong>Total</strong></td><td></td><td>98,57 € par personne</td><td>2 957 €</td></tr>
        </tbody>
      </table>
      <p>Les deux cocktails représentent 63 % du budget. Réparti sur les huit mois de novembre à juin, le budget revient à 369,63 € HT par mois. Ajoutez 189,30 € HT par cocktail pour les boissons sans alcool de 30 personnes (5 bouteilles de Chardonnay 0 %, 8 litres de jus et 6 bouteilles d'eau) : le total passe à 3 335,60 € HT, soit 111,19 € HT par personne. Le détail est dans le guide du <a href="/journal/cocktail-entreprise-sans-alcool">cocktail d'entreprise sans alcool</a>.</p>

      <h2>Que prévoir en pratique pour chaque temps fort ?</h2>
      <p>Chaque temps fort a un produit et une quantité de référence. Les chiffres ci-dessous valent pour une équipe de 30 personnes, en euros HT.</p>
      <ul>
        <li><strong>Chandeleur</strong> : 6 crêpes pour 18,90 €, pots de confiture Alain Milliat et pâte à tartiner inclus.</li>
        <li><strong>Saint-Valentin</strong> : 3 à 4 coffrets de 24 macarons à 64,00 €, soit 192 à 256 €.</li>
        <li><strong>8 mars</strong> : 3 à 4 coffrets de 20 madeleines à 49,00 €, soit 147 à 196 €, pour toute l'équipe et pas seulement les femmes.</li>
        <li><strong>Pâques</strong> : 80 à 100 g de chocolat par personne, soit 2,4 à 3 kg, la semaine précédente.</li>
        <li><strong>Fête de la musique</strong> : cocktail 8 pièces, 5 bouteilles de Chardonnay 0 %, 8 litres de jus et 6 bouteilles d'eau, soit 1 115,30 € et 37,18 € par personne.</li>
      </ul>

      <h2>Quand en parler en interne pour chaque temps fort ?</h2>
      <p>Parlez-en en interne 3 semaines avant pour un cocktail, 1 semaine avant pour un petit-déjeuner ou une pause gourmande, et 45 jours avant pour la fête de fin d'année. Cette règle se décline en quatre étapes.</p>
      <ul>
        <li><strong>J-45 pour la fin d'année</strong> : budget, format et date, avec le rétroplanning du guide de fin d'année.</li>
        <li><strong>3 semaines avant un cocktail</strong> : date, lieu, effectif estimé et demande de devis.</li>
        <li><strong>1 semaine avant une pause</strong> : effectif, régimes et heure de livraison.</li>
        <li><strong>La veille avant 14h</strong> : commande ferme ; préavis de 48 h à partir de 50 personnes.</li>
      </ul>
      <p>La liste des points à vérifier avant chaque commande est dans <a href="/journal/checklist-office-manager-commander-traiteur">la check-list de l'office manager</a>.</p>

      <h2>Comment répartir le budget entre grands et petits moments ?</h2>
      <p>Gardez deux grands moments, la fin d'année et l'afterwork de juin, et quatre pauses à 6 € HT par personne : les deux cocktails pèsent 1 852 € sur 2 957 €, soit 63 %, et les quatre pauses 836 €. La page <a href="/creations/pauses-gourmandes">pauses gourmandes</a> liste les produits des quatre pauses.</p>

      <h2>Quelles dates faut-il vérifier avant de les communiquer ?</h2>
      <p>Six dates sont fixes : la Chandeleur le 2 février, la Saint-Valentin le 14 février, le 8 mars, Pâques le 28 mars 2027, le 1er mai et la fête de la musique le 21 juin. Les dates de Noël et de fin d'année, des vœux, de l'Épiphanie et des ponts de mai sont à vérifier. Contrôlez aussi le jour de la semaine : les livraisons ont lieu du lundi au vendredi.</p>

      <h2>Quelles erreurs fréquentes éviter dans le calendrier ?</h2>
      <ul>
        <li><strong>Tout concentrer en décembre</strong> : un seul grand moment coûte plus cher que quatre pauses à 209 € HT pour 30 personnes.</li>
        <li><strong>Oublier les ponts</strong> : l'effectif présent baisse, les plateaux repas individuels s'ajustent mieux qu'un buffet.</li>
        <li><strong>Commander sur l'effectif total</strong> plutôt que sur les présents confirmés plus 10 %.</li>
        <li><strong>Choisir une date sans livraison</strong> : vérifiez qu'elle tombe du lundi au vendredi.</li>
        <li><strong>Oublier le minimum de commande</strong> : 50 € HT, avec la livraison à 29 € HT à Paris et communes proches.</li>
      </ul>

      <h2>Questions fréquentes sur le calendrier de l'office manager</h2>${faqBlock(FAQ_CALENDRIER)}

      <h2>Comment demander un devis pour votre calendrier ?</h2>
      <p>Indiquez les temps forts retenus, l'effectif et les adresses de livraison : le devis est remis sous 24 h, avec facturation entreprise, TVA et bon de commande accepté. <a href="/devis">Demandez votre devis</a>. Tarifs L'Écrin Traiteur, octobre 2026.</p>
    `,
    relatedProducts: ['crepes', 'macarons', 'madeleines-20'],
    faq: FAQ_CALENDRIER,
  },
]
