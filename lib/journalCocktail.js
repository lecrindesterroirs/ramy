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
      <p>Nos pièces cocktail sont halal et sans porc, sans alcool dans les recettes, à partir de 29,90 € HT par personne. Commande jusqu'à la veille 14h, livraison à Paris et en Île-de-France. Voir les <a href="/creations/cocktails">formules cocktail</a>, le guide du <a href="/journal/cocktail-entreprise-halal-paris">cocktail d'entreprise halal</a>, nos idées pour un <a href="/journal/cocktail-sans-alcool-entreprise-fin-annee">cocktail sans alcool de fin d'année</a>, ou <a href="/devis">demander un devis</a>.</p>
    `,
    relatedProducts: ['brochettes-fruits'],
    faq: [
      { q: "Quelles boissons servir à un cocktail d'entreprise sans alcool ?", a: "Un pétillant sans alcool pour trinquer (Chardonnay Blanc de Blancs 0 %), des jus et nectars Alain Milliat, une citronnade au gingembre, des eaux plates et pétillantes, et un bar à mocktails pour animer la réception." },
      { q: "Combien de boissons prévoir par personne ?", a: "Une flûte de pétillant 0 % et deux verres de jus par personne pour un cocktail de deux heures. Pour 50 personnes : 9 bouteilles de Chardonnay 0 % et 20 litres de jus, soit environ 342 € HT." },
      { q: "Par quoi remplacer le champagne à un événement d'entreprise ?", a: "Par un pétillant sans alcool servi en flûte, comme un Chardonnay Blanc de Blancs 0 %. Tous les invités trinquent avec le même verre." },
    ],
  },
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'cocktail-dinatoire-entreprise-paris',
    titre: "Cocktail dînatoire d'entreprise à Paris : nombre de pièces, menu et prix",
    metaTitle: "Cocktail dînatoire d'entreprise à Paris : pièces et prix",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    extrait: "Un cocktail dînatoire d'entreprise remplace le dîner : 16 à 18 pièces par personne, de 40,90 à 51,90 € HT. Différence avec l'apéritif et le déjeunatoire, menu type et budget de 20 à 100 personnes.",
    img: '/cocktail-prestige.webp',
    contenu: `
      <p>Un <strong>cocktail dînatoire d'entreprise</strong> remplace le dîner : comptez <strong>16 à 18 pièces par personne</strong> sur 2 h 30 à 3 h, soit <strong>51,90 € HT par personne</strong> pour notre formule La Célébration (16 pièces), ou 40,90 € HT en 12 pièces si la soirée est courte. Toutes les pièces sont halal et sans porc, livrées dressées à Paris et en Île-de-France.</p>

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
        <li><strong>Pour ouvrir</strong> : gougères au fromage, chou craquelin à la tapenade, tartelette pissaladière, focaccia au romarin et caviar d'aubergine.</li>
        <li><strong>Le frais</strong> : millefeuille de betterave au chèvre, melon, feta et menthe, moelleux de carotte au cerfeuil, bouchée de patate douce, feta et olive.</li>
        <li><strong>Le consistant</strong> : brochette de poulet tandoori, mini cheeseburger, saumon mariné et betterave jaune, crevette bio à la mangue.</li>
        <li><strong>Le sucré</strong> : dôme praliné, tartelette tout chocolat, tartelette aux myrtilles, brochette de fruits frais.</li>
      </ul>
      <p>Les compositions complètes sont sur la page <a href="/creations/cocktails">cocktails d'entreprise</a>.</p>

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

      <h2>Dans quel ordre servir ?</h2>
      <p>En trois temps. Les pièces légères à l'arrivée, les pièces consistantes au cœur de la soirée, le sucré dans la dernière demi-heure. Servir tout d'un coup vide le buffet en quarante minutes et laisse les derniers arrivés devant des plateaux clairsemés.</p>

      <h2>Quelles boissons ?</h2>
      <p>Comptez 3 à 4 boissons par personne pour une soirée de trois heures. Notre bar est sans alcool : Chardonnay 0 % pour trinquer, jus et nectars Alain Milliat, eaux. Le détail est dans notre guide du <a href="/journal/cocktail-entreprise-sans-alcool">cocktail d'entreprise sans alcool</a>.</p>

      <h2>Commander un cocktail dînatoire à Paris</h2>
      <p>Commande jusqu'à la veille 14h ; pour 50 personnes et plus, prévenez au moins 48 h avant. Devis sous 24h, facture entreprise avec TVA. <a href="/devis">Demander un devis</a>, ou voir les quantités pour <a href="/journal/cocktail-entreprise-50-personnes">50 personnes</a> et <a href="/journal/cocktail-entreprise-100-personnes">100 personnes</a>.</p>
    `,
    relatedProducts: ['brochettes-fruits'],
    faq: [
      { q: "Combien de pièces par personne pour un cocktail dînatoire ?", a: "16 à 18 pièces par personne pour un cocktail dînatoire de 2 h 30 à 3 h qui remplace le dîner, dont environ trois quarts de salé. 12 pièces suffisent si la soirée est courte ou si les invités dînent ensuite." },
      { q: "Combien coûte un cocktail dînatoire d'entreprise à Paris ?", a: "51,90 € HT par personne chez L'Écrin Traiteur pour 16 pièces (La Célébration), 40,90 € HT pour 12 pièces (La Réception). Pour 40 personnes : 2 076 € HT en 16 pièces, hors boissons et livraison." },
      { q: "Quelle différence entre cocktail déjeunatoire et dînatoire ?", a: "Le déjeunatoire remplace le déjeuner, dure 1 h 30 à 2 h et compte 12 à 14 pièces par personne. Le dînatoire remplace le dîner, dure 2 h 30 à 3 h et compte 16 à 18 pièces." },
    ],
  },
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'cocktail-entreprise-100-personnes',
    titre: "Cocktail d'entreprise pour 100 personnes : quantités, organisation et budget",
    metaTitle: "Cocktail d'entreprise 100 personnes : quantités et budget",
    categorie: 'Conseils',
    date: '13 octobre 2026',
    isoDate: '2026-10-13',
    extrait: "Pour 100 personnes : 1 200 à 1 600 pièces, 4 points de buffet et de 4 786 à 5 886 € HT boissons et livraison comprises. Les quantités, l'organisation et le budget ligne par ligne.",
    img: '/hero-cocktail.webp',
    contenu: `
      <p>Un <strong>cocktail d'entreprise pour 100 personnes</strong> demande <strong>1 200 pièces</strong> en format 12 pièces ou <strong>1 600 pièces</strong> en dînatoire, soit de <strong>4 786 à 5 886 € HT</strong> chez L'Écrin Traiteur, boissons sans alcool et livraison comprises. À cet effectif, l'organisation du service compte autant que le menu.</p>

      <h2>Quel budget pour 100 personnes ?</h2>
      <table>
        <thead>
          <tr><th>Poste</th><th>Cocktail 12 pièces</th><th>Cocktail dînatoire 16 pièces</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Pièces cocktail</strong></td><td>1 200 pièces · 4 090,00 €</td><td>1 600 pièces · 5 190,00 €</td></tr>
          <tr><td><strong>Pétillant 0 % pour trinquer</strong></td><td>17 bouteilles · 287,30 €</td><td>17 bouteilles · 287,30 €</td></tr>
          <tr><td><strong>Jus et nectars</strong></td><td>40 L · 380,00 €</td><td>40 L · 380,00 €</td></tr>
          <tr><td><strong>Livraison</strong></td><td>29,00 €</td><td>29,00 €</td></tr>
          <tr><td><strong>Total HT</strong></td><td>4 786,30 €</td><td>5 886,30 €</td></tr>
          <tr><td><strong>Par personne</strong></td><td>47,86 € HT</td><td>58,86 € HT</td></tr>
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
          <tr><td><strong>Verres de jus</strong></td><td>200</td><td>40 bouteilles d'un litre</td></tr>
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
      <p>Pour 100 personnes, demandez le devis trois à quatre semaines avant et confirmez l'effectif au moins 48 h avant. Indiquez l'accès au lieu, l'étage et l'heure à laquelle la salle est disponible : l'installation des buffets se fait avant l'arrivée des invités.</p>

      <h2>Demander un devis pour 100 personnes</h2>
      <p>Toutes nos pièces sont halal et sans porc, sans alcool dans les recettes. Devis détaillé sous 24h, facture entreprise avec TVA, livraison à Paris et en Île-de-France. <a href="/devis">Demander un devis cocktail</a>, ou voir nos <a href="/creations/cocktails">formules</a> et nos <a href="/creations/animations-culinaires">animations culinaires</a>.</p>
    `,
    relatedProducts: ['brochettes-fruits'],
    faq: [
      { q: "Combien de pièces cocktail pour 100 personnes ?", a: "800 pièces pour un apéritif (8 par personne), 1 200 pour un cocktail déjeunatoire (12 par personne), 1 600 pour un cocktail dînatoire (16 par personne), dont environ trois quarts de salé." },
      { q: "Quel budget pour un cocktail de 100 personnes ?", a: "Chez L'Écrin Traiteur : 4 090 € HT en 12 pièces et 5 190 € HT en 16 pièces. Avec les boissons sans alcool et la livraison, comptez 4 786 € HT (47,86 € par personne) ou 5 886 € HT (58,86 € par personne)." },
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
      <p>Pour un <strong>cocktail d'inauguration</strong> de bureaux, le format le plus adapté est un cocktail de <strong>12 pièces par personne sur deux heures</strong>, de 18h à 20h, soit <strong>40,90 € HT par invité</strong> chez L'Écrin Traiteur. Vos invités viennent voir les lieux et vous rencontrer : le cocktail doit accompagner la visite, pas l'interrompre.</p>

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

      <h2>Quel format choisir ?</h2>
      <ul>
        <li><strong>8 pièces</strong> si l'inauguration dure une heure, en fin d'après-midi.</li>
        <li><strong>12 pièces</strong> pour le format classique de deux heures : c'est le plus choisi.</li>
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
      <p>Donnez-nous la date, l'adresse et le nombre d'invités attendus : devis sous 24h, livraison et plateaux dressés à Paris et en Île-de-France. <a href="/devis">Demander un devis</a> ou voir les <a href="/creations/cocktails">formules cocktail</a>.</p>
    `,
    relatedProducts: ['brochettes-fruits'],
    faq: [
      { q: "Quel cocktail prévoir pour une inauguration de bureaux ?", a: "Un cocktail de 12 pièces par personne sur deux heures, en fin de journée, avec le buffet en libre-service pendant le discours. Chez L'Écrin Traiteur, cette formule coûte 40,90 € HT par invité." },
      { q: "Quel budget pour un cocktail d'inauguration de 80 invités ?", a: "2 392 € HT en 8 pièces, 3 272 € HT en 12 pièces et 4 152 € HT en 16 pièces, hors boissons et livraison." },
      { q: "À quelle heure organiser une inauguration ?", a: "De 18h à 20h : assez tard pour que les invités aient fini leur journée, assez tôt pour qu'ils ne comptent pas sur un dîner." },
    ],
  },
]
