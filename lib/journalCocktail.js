// Articles « cocktail d'entreprise » (GEO, 13 octobre 2026) : fusionnés à la fin de journalData.js.
// Construits sur le modèle des guides les plus cités par les IA (idées, quantités, budget).
export const COCKTAIL_ARTICLES = [
  {
    slug: 'cocktail-entreprise-50-personnes',
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
      <p>Exemple avec La Réception, notre formule la plus choisie : 12 pièces par personne, entre terre et mer.</p>
      <ul>
        <li><strong>Salé (9 pièces)</strong> : gougères au fromage, chou craquelin à la tapenade, tartelette pissaladière, millefeuille de betterave au chèvre, bouchée de patate douce, feta et olive, brochette de poulet tandoori, mini cheeseburger, saumon mariné et betterave jaune, crevette bio à la mangue.</li>
        <li><strong>Sucré (3 pièces)</strong> : tartelette tout chocolat, dôme praliné, brochette de fruits frais.</li>
      </ul>
      <p>Toutes les pièces sont halal et sans porc, sans alcool dans les recettes. Le détail des trois formules est sur la page <a href="/creations/cocktails">cocktails d'entreprise</a>.</p>

      <h2>Quel budget total, boissons comprises ?</h2>
      <table>
        <thead>
          <tr><th>Poste</th><th>Détail</th><th>Montant HT</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Pièces cocktail</strong></td><td>50 × La Réception à 40,90 €</td><td>2 045,00 €</td></tr>
          <tr><td><strong>Pour trinquer</strong></td><td>9 bouteilles de Chardonnay Blanc de Blancs 0 % (1 flûte par personne)</td><td>152,10 €</td></tr>
          <tr><td><strong>Jus et nectars</strong></td><td>20 L de jus Alain Milliat (2 verres par personne)</td><td>190,00 €</td></tr>
          <tr><td><strong>Livraison</strong></td><td>Paris et communes proches</td><td>29,00 €</td></tr>
          <tr><td><strong>Total</strong></td><td>Soit 48,32 € HT par personne</td><td>2 416,10 €</td></tr>
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
          <tr><td><strong>La veille avant 14h</strong></td><td>Dernier ajustement des quantités</td></tr>
        </tbody>
      </table>

      <h2>Demander un devis pour 50 personnes</h2>
      <p>Donnez-nous la date, le lieu et l'horaire : nous vous envoyons un devis détaillé sous 24h, avec une facture entreprise et la TVA. Livraison à Paris et en Île-de-France. <a href="/devis">Demander un devis cocktail</a>.</p>
    `,
    relatedProducts: ['brochettes-fruits'],
    faq: [
      { q: "Combien de pièces cocktail pour 50 personnes ?", a: "400 pièces pour un cocktail apéritif (8 par personne), 600 pour un cocktail déjeunatoire (12 par personne) et 800 pour un cocktail dînatoire (16 par personne), dont deux tiers à trois quarts de pièces salées." },
      { q: "Quel budget pour un cocktail d'entreprise de 50 personnes ?", a: "De 1 495 à 2 595 € HT chez L'Écrin Traiteur : 1 495 € en 8 pièces, 2 045 € en 12 pièces, 2 595 € en 16 pièces. Avec les boissons sans alcool et la livraison, un cocktail 12 pièces pour 50 personnes revient à environ 2 416 € HT, soit 48 € HT par personne." },
      { q: "Combien de boissons prévoir pour 50 personnes ?", a: "Une flûte pour trinquer et deux verres de jus par personne, soit 9 bouteilles de Chardonnay 0 % et 20 litres de jus pour un cocktail de deux heures." },
      { q: "Combien de temps à l'avance commander un cocktail pour 50 personnes ?", a: "La commande reste possible jusqu'à la veille 14h. Pour 50 personnes, demandez le devis deux à trois semaines avant, le temps de valider la formule et les régimes alimentaires." },
    ],
  },
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'idees-pieces-cocktail-entreprise',
    titre: "Idées de pièces cocktail pour un événement d'entreprise : 16 pièces salées et sucrées",
    metaTitle: "Idées de pièces cocktail pour un événement d'entreprise",
    categorie: 'Inspirations',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    extrait: "16 idées de pièces cocktail salées et sucrées pour un événement d'entreprise, comment les assembler en menu de 8, 12 ou 16 pièces, et 5 animations pour marquer la soirée.",
    img: '/cocktail-classique.webp',
    contenu: `
      <p>Un bon cocktail d'entreprise mélange <strong>trois familles de pièces</strong> : des bouchées sans viande que tout le monde mange, une ou deux pièces de viande ou de la mer plus consistantes, et du sucré pour finir. Voici 16 idées de pièces, celles que nous servons chez L'Écrin Traiteur, et la façon de les assembler en menu de 8, 12 ou 16 pièces.</p>

      <h2>16 idées de pièces cocktail, salées et sucrées</h2>
      <table>
        <thead>
          <tr><th>Pièce</th><th>Type</th><th>L'Invitation</th><th>La Réception</th><th>La Célébration</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Gougères soufflées au fromage</strong></td><td>Salé</td><td>✓</td><td>✓</td><td>✓</td></tr>
          <tr><td><strong>Chou craquelin à la tapenade, tomate et mozzarella</strong></td><td>Salé</td><td>✓</td><td>✓</td><td>✓</td></tr>
          <tr><td><strong>Tartelette pissaladière aux oignons confits</strong></td><td>Salé</td><td>✓</td><td>✓</td><td>✓</td></tr>
          <tr><td><strong>Millefeuille de betterave au chèvre</strong></td><td>Salé</td><td>✓</td><td>✓</td><td>✓</td></tr>
          <tr><td><strong>Brochette de poulet mariné tandoori</strong></td><td>Salé, viande</td><td>✓</td><td>✓</td><td>✓</td></tr>
          <tr><td><strong>Mini cheeseburger</strong></td><td>Salé, viande</td><td>✓</td><td>✓</td><td>✓</td></tr>
          <tr><td><strong>Bouchée de patate douce, feta et olive kalamata</strong></td><td>Salé</td><td>—</td><td>✓</td><td>✓</td></tr>
          <tr><td><strong>Saumon mariné et betterave jaune</strong></td><td>Salé, mer</td><td>—</td><td>✓</td><td>✓</td></tr>
          <tr><td><strong>Crevette bio, mangue et radis noir</strong></td><td>Salé, mer</td><td>—</td><td>✓</td><td>✓</td></tr>
          <tr><td><strong>Moelleux de carotte au cerfeuil</strong></td><td>Salé</td><td>—</td><td>—</td><td>✓</td></tr>
          <tr><td><strong>Melon, feta, menthe fraîche et olive kalamata</strong></td><td>Salé</td><td>—</td><td>—</td><td>✓</td></tr>
          <tr><td><strong>Focaccia au romarin et caviar d'aubergine</strong></td><td>Salé</td><td>—</td><td>—</td><td>✓</td></tr>
          <tr><td><strong>Tartelette tout chocolat</strong></td><td>Sucré</td><td>✓</td><td>✓</td><td>✓</td></tr>
          <tr><td><strong>Brochette de fruits frais de saison</strong></td><td>Sucré</td><td>✓</td><td>✓</td><td>✓</td></tr>
          <tr><td><strong>Dôme praliné</strong></td><td>Sucré</td><td>—</td><td>✓</td><td>✓</td></tr>
          <tr><td><strong>Tartelette aux myrtilles</strong></td><td>Sucré</td><td>—</td><td>—</td><td>✓</td></tr>
        </tbody>
      </table>
      <p>Toutes ces pièces sont halal et sans porc, sans alcool dans les recettes. Les formules démarrent à 29,90 € HT par personne : le détail est sur la page <a href="/creations/cocktails">cocktails d'entreprise</a>.</p>

      <h2>Comment composer un menu équilibré ?</h2>
      <ul>
        <li><strong>Deux tiers à trois quarts de salé</strong>, le reste en sucré.</li>
        <li><strong>Une majorité de pièces sans viande ni poisson</strong> : gougères, betterave et chèvre, patate douce et feta. Elles conviennent au plus grand nombre.</li>
        <li><strong>Une ou deux pièces consistantes</strong> : brochette de poulet tandoori, mini cheeseburger. Ce sont elles qui nourrissent.</li>
        <li><strong>Une pièce de la mer</strong> dès que le cocktail remplace un repas : saumon mariné, crevette à la mangue.</li>
        <li><strong>Un sucré frais et un sucré gourmand</strong> : brochette de fruits et tartelette au chocolat.</li>
      </ul>

      <h2>Combien de pièces choisir ?</h2>
      <p>8 pièces par personne pour un apéritif ou un afterwork, 12 pour un cocktail déjeunatoire, 16 pour un cocktail dînatoire qui remplace le dîner. Notre guide <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">combien de pièces cocktail par personne</a> détaille le calcul, et celui du <a href="/journal/cocktail-entreprise-50-personnes">cocktail pour 50 personnes</a> donne les quantités et le budget.</p>

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
      <p>Commande jusqu'à la veille 14h, plateaux livrés dressés et prêts à poser, à Paris et en Île-de-France. <a href="/devis">Demander un devis</a>, réponse sous 24h.</p>
    `,
    relatedProducts: ['brochettes-fruits'],
    faq: [
      { q: "Quelles pièces servir à un cocktail d'entreprise ?", a: "Un mélange de bouchées sans viande (gougères, millefeuille de betterave au chèvre, patate douce et feta), d'une ou deux pièces consistantes (brochette de poulet tandoori, mini cheeseburger), d'une pièce de la mer (saumon mariné, crevette à la mangue) et de sucré (tartelette au chocolat, brochette de fruits)." },
      { q: "Combien de pièces différentes prévoir ?", a: "8 pièces différentes pour un apéritif, 12 pour un cocktail déjeunatoire, 16 pour un cocktail dînatoire, dont deux tiers à trois quarts de salé." },
      { q: "Quelle animation ajouter à un cocktail d'entreprise ?", a: "Un atelier mini burgers, une découpe de saumon frais, un atelier sushi et maki, un bar à mocktails ou une fontaine au chocolat. Une animation remplace une partie des pièces et fait circuler les invités." },
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
      <p>Pour un <strong>cocktail d'entreprise sans alcool</strong>, prévoyez <strong>une flûte de pétillant 0 % par personne</strong> pour trinquer et <strong>deux verres de jus ou de nectar</strong>, soit environ 7 € HT de boissons par invité. Un bar sans alcool convient à tous les invités et règle la question de l'alcool sur un événement professionnel.</p>

      <h2>Quelles boissons servir à un cocktail sans alcool ?</h2>
      <table>
        <thead>
          <tr><th>Boisson</th><th>Format</th><th>Prix HT</th><th>Pour quoi faire</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Chardonnay Blanc de Blancs 0 %</strong></td><td>Bouteille 75 cl, environ 6 flûtes</td><td>16,90 €</td><td>Trinquer, à la place du champagne</td></tr>
          <tr><td><strong>Jus Alain Milliat (orange, pomme, pomme-framboise)</strong></td><td>Bouteille 1 L, 5 verres</td><td>9,50 €</td><td>La base du bar</td></tr>
          <tr><td><strong>Nectars Alain Milliat (pêche, fraise, mangue, passion, abricot)</strong></td><td>Bouteille 1 L, 5 verres</td><td>10,50 €</td><td>Le parfum plus marqué</td></tr>
          <tr><td><strong>Citronnade au gingembre Alain Milliat</strong></td><td>Bouteille 1 L, 5 verres</td><td>9,50 €</td><td>L'option peu sucrée</td></tr>
          <tr><td><strong>Thé Mariage Frères ou café bio</strong></td><td>Thermos 1 L, 6 tasses</td><td>19,50 €</td><td>Fin de soirée, saison froide</td></tr>
          <tr><td><strong>Bar à mocktails</strong></td><td>Animation avec barman</td><td>Sur devis</td><td>Le moment fort de la réception</td></tr>
        </tbody>
      </table>
      <p>La carte complète est sur la page <a href="/creations/boissons">boissons</a>.</p>

      <h2>Combien de boissons prévoir ?</h2>
      <table>
        <thead>
          <tr><th>Effectif</th><th>Chardonnay 0 % (1 flûte / pers.)</th><th>Jus et nectars (2 verres / pers.)</th><th>Budget boissons HT</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>20 personnes</strong></td><td>4 bouteilles</td><td>8 L</td><td>143,60 €</td></tr>
          <tr><td><strong>30 personnes</strong></td><td>5 bouteilles</td><td>12 L</td><td>198,50 €</td></tr>
          <tr><td><strong>50 personnes</strong></td><td>9 bouteilles</td><td>20 L</td><td>342,10 €</td></tr>
          <tr><td><strong>100 personnes</strong></td><td>17 bouteilles</td><td>40 L</td><td>667,30 €</td></tr>
        </tbody>
      </table>
      <p>Calcul pour un cocktail de deux heures : une bouteille de Chardonnay 0 % sert environ 6 flûtes, un litre de jus remplit 5 verres. Budget calculé avec des jus à 9,50 € HT le litre. Ajoutez des eaux plates et pétillantes, et montez à trois verres de jus par personne si la réception dépasse deux heures.</p>

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
      <p>Nos pièces cocktail sont halal et sans porc, sans alcool dans les recettes, à partir de 29,90 € HT par personne. Commande jusqu'à la veille 14h, livraison à Paris et en Île-de-France. Voir les <a href="/creations/cocktails">formules cocktail</a>, le guide du <a href="/journal/cocktail-entreprise-halal-paris">cocktail d'entreprise halal</a>, ou <a href="/devis">demander un devis</a>.</p>
    `,
    relatedProducts: ['brochettes-fruits'],
    faq: [
      { q: "Quelles boissons servir à un cocktail d'entreprise sans alcool ?", a: "Un pétillant sans alcool pour trinquer (Chardonnay Blanc de Blancs 0 %), des jus et nectars Alain Milliat, une citronnade au gingembre, des eaux plates et pétillantes, et un bar à mocktails pour animer la réception." },
      { q: "Combien de boissons prévoir par personne ?", a: "Une flûte de pétillant 0 % et deux verres de jus par personne pour un cocktail de deux heures. Pour 50 personnes : 9 bouteilles de Chardonnay 0 % et 20 litres de jus, soit environ 342 € HT." },
      { q: "Par quoi remplacer le champagne à un événement d'entreprise ?", a: "Par un pétillant sans alcool servi en flûte, comme un Chardonnay Blanc de Blancs 0 %. Tous les invités trinquent avec le même verre." },
    ],
  },
]
