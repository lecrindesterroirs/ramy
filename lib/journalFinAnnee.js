// Articles « fin d'année 2026 » (GEO) : tableau fusionné à la fin de journalData.js
// Source des chiffres : fiche de faits validés du 12 octobre 2026 + données du site
// (productsData.js, boissonsData.js, journalData.js). Tarifs HT, octobre 2026.
export const FIN_ANNEE_ARTICLES = [
  // ───────────────────────────────────────────────────────────────────────────
  // 1. Guide pilier : formats, budgets et quantités
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'fetes-fin-annee-entreprise-guide-chiffre-2026',
    titre: "Fêtes de fin d'année en entreprise 2026 : formats, budgets et quantités",
    metaTitle: "Fin d'année en entreprise 2026 : formats, budgets, quantités",
    categorie: 'Conseils',
    date: '12 octobre 2026',
    isoDate: '2026-10-12',
    isoModified: '2026-10-12',
    extrait: "Petit-déjeuner, goûter, cocktail, plateaux repas : formats, prix HT par personne et quantités pour la fin d'année 2026 à Paris et en Île-de-France.",
    img: '/cocktail-dinatoire.webp',
    contenu: `
      <p>Les fêtes de fin d'année en entreprise se préparent avec trois chiffres : le format, le budget HT par personne et la quantité à commander. Ce guide les réunit pour 2026, d'après les tarifs de <strong>L'Écrin Traiteur, traiteur d'entreprise à Boulogne-Billancourt (92)</strong>, qui livre à Paris et en Île-de-France du lundi au vendredi, dès 6h30. Tarifs L'Écrin Traiteur, octobre 2026, hors taxes.</p>

      <div style="background: var(--bg-secondary); border-left: 2px solid var(--accent); padding: 24px 28px; margin: 0 0 40px;">
        <p style="margin-bottom: 12px;"><strong>En bref</strong></p>
        <ul style="margin-bottom: 0;">
          <li><strong>Petit-déjeuner de Noël</strong> : dès 8 € HT par personne, livré dès 6h30.</li>
          <li><strong>Cocktail</strong> : 29,90 € HT (8 pièces), 40,90 € HT (12 pièces) ou 51,90 € HT (16 pièces) par personne.</li>
          <li><strong>Pièces par personne</strong> : 6 à 8 en apéritif, 12 à 14 en déjeunatoire, 16 à 18 en dînatoire, plus 10 % de marge.</li>
          <li><strong>Livraison</strong> : 29 € HT à Paris et dans les communes proches, minimum de commande 50 € HT.</li>
          <li><strong>Commande</strong> : jusqu'à la veille 14h, préavis de 48 h recommandé à partir de 50 personnes.</li>
          <li><strong>Régimes</strong> : tout est halal, sans porc et sans alcool par défaut.</li>
        </ul>
      </div>

      <h2>Quel format choisir pour une fête de fin d'année en entreprise ?</h2>
      <p>Le format se choisit selon le temps dont dispose l'équipe : une heure le matin pour un petit-déjeuner de Noël, une pause l'après-midi pour un goûter, ou la soirée pour un cocktail. Le tableau compare les formats que nous livrons à Paris et en Île-de-France, avec le budget HT par personne et la quantité à prévoir.</p>
      <table>
        <thead>
          <tr><th>Format</th><th>Pour qui, quand</th><th>Budget HT par personne</th><th>Quantité par personne</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Petit-déjeuner de Noël</strong></td><td>Toute l'équipe, entre 9h et 10h, sans soirée à bloquer</td><td>Classique dès 8 € ; complet 12 à 16 €</td><td>2 viennoiseries (3 jusqu'à 10 personnes), 1 boisson chaude</td></tr>
          <tr><td><strong>Goûter de Noël</strong></td><td>Équipes ou CSE, l'après-midi, entre le 12 et le 20 décembre</td><td>Pause gourmande dès 6 € ; goûter de Noël de 8 à 28 € selon la formule</td><td>2/3 de sucré, 1/3 de salé</td></tr>
          <tr><td><strong>Pot, cocktail apéritif</strong></td><td>Équipes de 15 à 40 personnes, 1h30 à 2h</td><td>29,90 € (L'Invitation, 8 pièces)</td><td>6 à 8 pièces</td></tr>
          <tr><td><strong>Cocktail déjeunatoire</strong></td><td>Remplace le déjeuner, 1h30 à 2h</td><td>40,90 € (La Réception, 12 pièces)</td><td>12 à 14 pièces</td></tr>
          <tr><td><strong>Cocktail dînatoire</strong></td><td>Remplace le dîner, 2h30 à 3h</td><td>51,90 € (La Célébration, 16 pièces)</td><td>16 à 18 pièces</td></tr>
          <tr><td><strong>Plateaux repas de fête</strong></td><td>Place limitée ou équipe répartie sur plusieurs étages</td><td>28,90 à 35,90 € selon la collection</td><td>1 plateau</td></tr>
          <tr><td><strong>Coffrets cadeaux</strong></td><td>Clients, partenaires ou équipes à remercier</td><td>Coffret de 10 madeleines 24,90 € ; de 20, 49,00 €</td><td>1 coffret par destinataire</td></tr>
        </tbody>
      </table>
      <p>Chaque format a son guide détaillé : <a href="/journal/soiree-fin-annee-entreprise-paris">soirée de fin d'année en entreprise à Paris</a> pour le pot et le cocktail, <a href="/journal/gouter-noel-entreprise-paris">goûter de Noël en entreprise</a>, <a href="/journal/petit-dejeuner-noel-bureau-entreprise">petit-déjeuner de Noël au bureau</a> et <a href="/journal/menu-noel-livre-entreprise-paris">menu de Noël livré au bureau</a>.</p>

      <h2>Quel budget prévoir par personne pour une fête de fin d'année ?</h2>
      <p>Le budget va de 6 € HT par personne pour une pause gourmande à 51,90 € HT par personne pour un cocktail dînatoire de 16 pièces, auxquels s'ajoutent 29 € HT de livraison par commande à Paris et dans les communes proches. Le minimum de commande est de 50 € HT. Voici le total pour 20 et 50 personnes, livraison comprise.</p>
      <table>
        <thead>
          <tr><th>Format</th><th>Prix HT par personne</th><th>20 personnes</th><th>50 personnes</th></tr>
        </thead>
        <tbody>
          <tr><td>Pause gourmande</td><td>dès 6 €</td><td>149 € HT</td><td>329 € HT</td></tr>
          <tr><td>Petit-déjeuner Classique</td><td>dès 8 €</td><td>189 € HT</td><td>429 € HT</td></tr>
          <tr><td>Plateaux repas Essentiel</td><td>28,90 €</td><td>607 € HT</td><td>1 474 € HT</td></tr>
          <tr><td>Cocktail L'Invitation (8 pièces)</td><td>29,90 €</td><td>627 € HT</td><td>1 524 € HT</td></tr>
          <tr><td>Cocktail La Réception (12 pièces)</td><td>40,90 €</td><td>847 € HT</td><td>2 074 € HT</td></tr>
          <tr><td>Cocktail La Célébration (16 pièces)</td><td>51,90 €</td><td>1 067 € HT</td><td>2 624 € HT</td></tr>
        </tbody>
      </table>
      <p>Les cocktails s'entendent hors boissons. La grille complète est dans <a href="/journal/budget-cocktail-entreprise-paris">budget cocktail d'entreprise à Paris</a> et les postes souvent oubliés dans <a href="/journal/budget-repas-noel-entreprise">budget repas de Noël en entreprise</a>. Pour répartir une enveloppe restante avant la clôture, voir <a href="/journal/budget-fin-annee-entreprise-comment-utiliser">budget de fin d'année : comment l'utiliser</a>.</p>

      <h2>Combien de pièces par personne pour un cocktail de fin d'année ?</h2>
      <p>Comptez 6 à 8 pièces par personne pour un cocktail apéritif, 12 à 14 pour un cocktail déjeunatoire et 16 à 18 pour un cocktail dînatoire qui remplace le dîner, puis ajoutez 10 % de marge. Pour 50 personnes, cela donne 400, 600 ou 800 pièces selon la formule L'Invitation (8 pièces), La Réception (12) ou La Célébration (16).</p>
      <p>Répartissez les pièces en deux tiers de salé pour un tiers de sucré. Le calcul complet est dans <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">combien de pièces cocktail par personne</a>, et la préparation d'une réception dans <a href="/journal/organiser-cocktail-entreprise">organiser un cocktail d'entreprise</a>.</p>

      <h2>Quelle quantité de viennoiseries prévoir pour un petit-déjeuner de Noël ?</h2>
      <p>Prévoyez 2 viennoiseries par personne, et 3 par personne jusqu'à 10 personnes, avec 10 % de marge. Un plateau de 30 mini-viennoiseries couvre 10 à 15 personnes. Pour 20 personnes, cela représente 40 viennoiseries, auxquelles s'ajoute une boisson chaude par personne : un thermos de 1 litre sert 6 à 8 tasses et coûte 19,50 € HT.</p>
      <p>Le petit-déjeuner Classique démarre à 8 € HT par personne (viennoiseries, jus, café, fruits) et le petit-déjeuner complet va de 12 à 16 € HT. Le chocolat chaud, les viennoiseries de saison et une pièce sucrée de fête font le caractère de Noël, comme l'explique <a href="/journal/petit-dejeuner-noel-bureau-entreprise">petit-déjeuner de Noël au bureau</a>.</p>

      <h2>Quand organiser la fête de fin d'année en entreprise ?</h2>
      <p>Les dates qui réunissent le plus de monde sont la semaine du 8 au 15 décembre pour un petit-déjeuner et la période du 12 au 20 décembre pour un goûter. Une soirée se cale entre 18h et 20h30 ou entre 19h et 21h30, un jour de semaine, puisque les livraisons ont lieu du lundi au vendredi.</p>
      <p>Évitez le dernier jour avant les congés : une partie de l'équipe est déjà partie ou boucle ses dossiers. Un calendrier daté de J-45 à J-1 est détaillé dans <a href="/journal/retroplanning-soiree-fin-annee-entreprise">rétroplanning d'une soirée de fin d'année en entreprise</a>.</p>

      <h2>Jusqu'à quand peut-on commander pour une fête de fin d'année ?</h2>
      <p>La commande se passe jusqu'à la veille 14h, pour une livraison dès 6h30. Pour 50 personnes et plus, ou pour plusieurs sites, prévenez plus tôt : un préavis de 48 h est recommandé. L'Écrin Traiteur n'applique pas de date limite spéciale pour les fêtes : les règles de commande sont celles du reste de l'année, avec un devis sous 24 h.</p>

      <h2>Quelles boissons sans alcool servir à une fête d'entreprise ?</h2>
      <p>Toute l'offre de L'Écrin Traiteur est sans alcool : jus et nectars Alain Milliat à partir de 9,50 € HT le litre, infusions, eaux, et un Chardonnay 0 % à 16,90 € HT la bouteille de 75 cl pour trinquer. Comptez 3 à 4 boissons par personne pour un cocktail de 2 heures, avec au moins trois parfums différents. Le détail est dans <a href="/journal/cocktail-sans-alcool-entreprise-fin-annee">cocktail sans alcool en entreprise</a>.</p>

      <h2>Les régimes alimentaires sont-ils pris en compte ?</h2>
      <p>Oui. Tout est halal et sans porc par défaut, et sans alcool. Les options végétarien, vegan et sans gluten se précisent à la commande, avec le nombre de convives concernés. L'atelier manipule de la farine : des traces de gluten restent possibles. L'Écrin Traiteur ne revendique aucune certification halal : l'offre est halal-friendly.</p>

      <h2>Quel format choisir pour un repas de Noël à l'heure du déjeuner ?</h2>
      <p>Choisissez le buffet de Noël si vous avez une salle et 1h30 devant vous, à partir de 15 personnes, ou le plateau repas de fête si la place manque ou si l'équipe est répartie sur plusieurs étages, de 28,90 à 35,90 € HT par personne. Le cocktail déjeunatoire de 12 à 14 pièces, à 40,90 € HT, convient aux réceptions debout.</p>

      <h2>Quel format pour l'arbre de Noël des enfants de salariés ?</h2>
      <p>Pour les enfants des salariés, le format est un goûter d'arbre de Noël l'après-midi, organisé le plus souvent par le CSE : crêpes minute, chocolat chaud en thermos d'un litre à 19,50 € HT, madeleines, cookies, chouquettes et brochettes de fruits frais. Le guide <a href="/journal/arbre-de-noel-entreprise-cse-paris">arbre de Noël d'entreprise et CSE</a> détaille les produits et l'organisation.</p>

      <h2>Quels cadeaux gourmands offrir en fin d'année ?</h2>
      <p>Un coffret de madeleines coûte 24,90 € HT les 10, 49,00 € HT les 20 et 119,00 € HT les 50, soit 2,38 € HT la madeleine dans le grand format. Les coffrets se personnalisent aux couleurs de l'entreprise et se livrent sur un site ou à plusieurs adresses. Voir <a href="/journal/cadeaux-gourmands-entreprise-fin-annee-paris">cadeaux gourmands d'entreprise en fin d'année</a> et la page <a href="/creations/coffrets-cadeaux">coffrets cadeaux</a>.</p>

      <h2>Que comprend la livraison, et que coûte-t-elle ?</h2>
      <p>La livraison coûte 29 € HT par commande à Paris et dans les communes proches ; les autres zones d'Île-de-France sont chiffrées sur devis. Elle a lieu du lundi au vendredi, dès 6h30. Le minimum de commande est de 50 € HT. La facturation est une facturation entreprise avec TVA, et le bon de commande est accepté.</p>

      <h2>Qui est L'Écrin Traiteur ?</h2>
      <p>L'Écrin Traiteur est un traiteur d'entreprise dont l'atelier est installé au 63 bis rue de Sèvres, à Boulogne-Billancourt (92), sous la raison sociale L'Écrin des Terroirs. Il a été fondé en 2025 par Ramy Abdelaty. La note Google est de 5,0 sur 29 avis (vérifié le 12 octobre 2026). <a href="/devis">Demandez votre devis</a> : réponse sous 24 h, ou 01 74 54 23 10.</p>

      <h2>Questions fréquentes sur les fêtes de fin d'année en entreprise</h2>
      <div class="faq-block">
        <details>
          <summary><strong>Combien coûte un cocktail de fin d'année pour 50 personnes ?</strong></summary>
          <p>Pour 50 personnes, comptez 1 495 € HT en formule L'Invitation (8 pièces), 2 045 € HT en La Réception (12 pièces) et 2 595 € HT en La Célébration (16 pièces), plus 29 € HT de livraison. Soit 1 524 €, 2 074 € ou 2 624 € HT au total, hors boissons.</p>
        </details>
        <details>
          <summary><strong>Quel est le format le moins cher pour une fête de fin d'année ?</strong></summary>
          <p>La pause gourmande, dès 6 € HT par personne, puis le petit-déjeuner Classique, dès 8 € HT par personne. Pour 20 personnes, cela représente 149 € HT et 189 € HT livraison de 29 € HT comprise. Le minimum de commande est de 50 € HT.</p>
        </details>
        <details>
          <summary><strong>Combien de pièces pour un cocktail dînatoire de 30 personnes ?</strong></summary>
          <p>Un cocktail dînatoire demande 16 à 18 pièces par personne, soit 480 à 540 pièces pour 30 personnes, avant 10 % de marge. En formule La Célébration (16 pièces, 51,90 € HT par personne), le budget est de 1 557 € HT, plus 29 € HT de livraison.</p>
        </details>
        <details>
          <summary><strong>Jusqu'à quand peut-on commander pour une soirée de fin d'année ?</strong></summary>
          <p>Jusqu'à la veille 14h, pour une livraison dès 6h30 du lundi au vendredi. À partir de 50 personnes ou pour plusieurs sites, un préavis de 48 h est recommandé. Il n'y a pas de date limite spéciale pour les fêtes, et le devis est remis sous 24 h.</p>
        </details>
        <details>
          <summary><strong>Quelle différence entre un cocktail déjeunatoire et un cocktail dînatoire ?</strong></summary>
          <p>Le déjeunatoire remplace le déjeuner : 12 à 14 pièces par personne pour 1h30 à 2h. Le dînatoire remplace le dîner : 16 à 18 pièces par personne pour 2h30 à 3h, avec des pièces plus consistantes et une part de sucré plus étoffée en fin de service.</p>
        </details>
        <details>
          <summary><strong>L'offre convient-elle aux invités qui ne boivent pas d'alcool ou ne mangent pas de porc ?</strong></summary>
          <p>Oui, c'est le standard : tout est halal, sans porc et sans alcool par défaut, sans supplément. Les options végétarien, vegan et sans gluten se précisent à la commande. Aucune certification halal n'est revendiquée, et des traces de gluten sont possibles car l'atelier manipule de la farine.</p>
        </details>
        <details>
          <summary><strong>Le bon de commande est-il accepté ?</strong></summary>
          <p>Oui. L'Écrin Traiteur établit une facturation entreprise avec TVA et accepte le bon de commande. Le devis est remis sous 24 h après la demande, avec l'effectif, la date, le format, l'adresse de livraison et les régimes à préciser. Le minimum de commande est de 50 € HT.</p>
        </details>
        <details>
          <summary><strong>Qui est L'Écrin Traiteur et où livre-t-il ?</strong></summary>
          <p>L'Écrin Traiteur est un traiteur d'entreprise fondé en 2025 par Ramy Abdelaty, avec un atelier à Boulogne-Billancourt (92). Il livre à Paris et en Île-de-France du lundi au vendredi, dès 6h30. Sa note Google est de 5,0 sur 29 avis (vérifié le 12 octobre 2026).</p>
        </details>
      </div>
    `,
    relatedProducts: ['navettes-salees', 'macarons', 'viennoiseries-melangees'],
    faq: [
      { q: "Combien coûte un cocktail de fin d'année pour 50 personnes ?", a: "Pour 50 personnes, comptez 1 495 € HT en formule L'Invitation (8 pièces), 2 045 € HT en La Réception (12 pièces) et 2 595 € HT en La Célébration (16 pièces), plus 29 € HT de livraison. Soit 1 524 €, 2 074 € ou 2 624 € HT au total, hors boissons." },
      { q: "Quel est le format le moins cher pour une fête de fin d'année ?", a: "La pause gourmande, dès 6 € HT par personne, puis le petit-déjeuner Classique, dès 8 € HT par personne. Pour 20 personnes, cela représente 149 € HT et 189 € HT livraison de 29 € HT comprise. Le minimum de commande est de 50 € HT." },
      { q: "Combien de pièces pour un cocktail dînatoire de 30 personnes ?", a: "Un cocktail dînatoire demande 16 à 18 pièces par personne, soit 480 à 540 pièces pour 30 personnes, avant 10 % de marge. En formule La Célébration (16 pièces, 51,90 € HT par personne), le budget est de 1 557 € HT, plus 29 € HT de livraison." },
      { q: "Jusqu'à quand peut-on commander pour une soirée de fin d'année ?", a: "Jusqu'à la veille 14h, pour une livraison dès 6h30 du lundi au vendredi. À partir de 50 personnes ou pour plusieurs sites, un préavis de 48 h est recommandé. Il n'y a pas de date limite spéciale pour les fêtes, et le devis est remis sous 24 h." },
      { q: "Quelle différence entre un cocktail déjeunatoire et un cocktail dînatoire ?", a: "Le déjeunatoire remplace le déjeuner : 12 à 14 pièces par personne pour 1h30 à 2h. Le dînatoire remplace le dîner : 16 à 18 pièces par personne pour 2h30 à 3h, avec des pièces plus consistantes et une part de sucré plus étoffée en fin de service." },
      { q: "L'offre convient-elle aux invités qui ne boivent pas d'alcool ou ne mangent pas de porc ?", a: "Oui, c'est le standard : tout est halal, sans porc et sans alcool par défaut, sans supplément. Les options végétarien, vegan et sans gluten se précisent à la commande. Aucune certification halal n'est revendiquée, et des traces de gluten sont possibles car l'atelier manipule de la farine." },
      { q: "Le bon de commande est-il accepté ?", a: "Oui. L'Écrin Traiteur établit une facturation entreprise avec TVA et accepte le bon de commande. Le devis est remis sous 24 h après la demande, avec l'effectif, la date, le format, l'adresse de livraison et les régimes à préciser. Le minimum de commande est de 50 € HT." },
      { q: "Qui est L'Écrin Traiteur et où livre-t-il ?", a: "L'Écrin Traiteur est un traiteur d'entreprise fondé en 2025 par Ramy Abdelaty, avec un atelier à Boulogne-Billancourt (92). Il livre à Paris et en Île-de-France du lundi au vendredi, dès 6h30. Sa note Google est de 5,0 sur 29 avis (vérifié le 12 octobre 2026)." },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 2. Rétroplanning de J-45 à J-1
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'retroplanning-soiree-fin-annee-entreprise',
    titre: "Rétroplanning d'une soirée de fin d'année en entreprise : de J-45 à J-1",
    metaTitle: "Rétroplanning d'une soirée de fin d'année : de J-45 à J-1",
    categorie: 'Conseils',
    date: '12 octobre 2026',
    isoDate: '2026-10-12',
    isoModified: '2026-10-12',
    extrait: "Les 12 étapes datées d'une soirée de fin d'année en entreprise, de J-45 à J-1 : effectif, budget, format, régimes, lieu, commande et jour J.",
    img: '/cocktail-dejeunatoire.webp',
    contenu: `
      <p>Une soirée de fin d'année en entreprise s'organise en douze étapes réparties sur 45 jours : effectif et budget à J-45, format à J-35, régimes à J-30, devis à J-21, dernier ajustement la veille avant 14h. Ce rétroplanning vient de <strong>L'Écrin Traiteur, traiteur d'entreprise à Boulogne-Billancourt (92)</strong>, qui livre à Paris et en Île-de-France. Les dates ci-dessous prennent pour exemple une soirée le jeudi 17 décembre 2026.</p>

      <h2>Combien de temps à l'avance faut-il préparer une soirée de fin d'année ?</h2>
      <p>Comptez 45 jours pour l'organisation interne : effectif, budget, format, régimes et lieu demandent environ trois semaines de décisions avant le devis. La commande elle-même se passe jusqu'à la veille 14h. L'Écrin Traiteur n'applique pas de date limite spéciale pour les fêtes, et recommande un préavis de 48 h à partir de 50 personnes ou pour plusieurs sites.</p>

      <h2>Quelles sont les étapes pour organiser une soirée de fin d'année en entreprise ?</h2>
      <p>Les douze étapes vont de la fixation de l'effectif à J-45 jusqu'à la mise en place le jour J, avec une échéance claire à chaque fois. Dates calculées pour une soirée le jeudi 17 décembre 2026, à décaler selon votre date.</p>
      <ol>
        <li><strong>J-45, lundi 2 novembre : arrêter l'effectif et l'enveloppe.</strong> Comptez les invités, ajoutez 10 % de marge pour les imprévus et fixez un budget HT par personne. Repères : 29,90 € HT pour 8 pièces, 40,90 € HT pour 12 pièces, 51,90 € HT pour 16 pièces, plus 29 € HT de livraison par commande.</li>
        <li><strong>J-42, jeudi 5 novembre : fixer la date et l'horaire.</strong> Choisissez un jour de semaine, car les livraisons ont lieu du lundi au vendredi. Les créneaux qui fonctionnent le mieux sont 18h à 20h30 ou 19h à 21h30.</li>
        <li><strong>J-35, jeudi 12 novembre : choisir le format.</strong> Un pot de 1h30 à 2h demande 6 à 8 pièces par personne, un cocktail déjeunatoire 12 à 14, un cocktail dînatoire de 2h30 à 3h 16 à 18. Si personne ne dîne ailleurs, prenez le dînatoire.</li>
        <li><strong>J-30, mardi 17 novembre : recenser les régimes.</strong> Demandez à chaque invité ses contraintes. L'offre est halal, sans porc et sans alcool par défaut ; végétarien, vegan et sans gluten se précisent à la commande avec les effectifs concernés, et des traces de gluten restent possibles.</li>
        <li><strong>J-28, jeudi 19 novembre : vérifier le lieu, l'accès et le matériel.</strong> Prévoyez une table d'au moins 2 mètres pour 25 personnes, deux points de buffet au-delà de 25 personnes, un accès pour le livreur et de la glace pour les boissons. Les assiettes et couverts sont livrés sur demande.</li>
        <li><strong>J-21, jeudi 26 novembre : demander le devis et prévenir les invités.</strong> Envoyez l'effectif, la date, le format, l'adresse de livraison et les régimes : le devis revient sous 24 h, avec facturation entreprise et TVA, bon de commande accepté. Communiquez la date aux invités au moins trois semaines à l'avance.</li>
        <li><strong>J-14, jeudi 3 décembre : valider le devis et les boissons.</strong> Contrôlez chaque ligne, boissons comprises : comptez 3 à 4 boissons par personne pour 2 heures, avec au moins trois parfums. Toute l'offre est sans alcool ; le Chardonnay 0 % à 16,90 € HT la bouteille de 75 cl sert à trinquer.</li>
        <li><strong>J-7, jeudi 10 décembre : arrêter l'effectif et les régimes définitifs.</strong> Relancez les invités sans réponse, comptez les régimes confirmés et gardez 10 % de marge sur l'effectif final.</li>
        <li><strong>J-3, lundi 14 décembre : préparer le lieu et l'accueil.</strong> Désignez la personne qui réceptionne la livraison, avec son numéro de téléphone, et libérez la table et les points de buffet.</li>
        <li><strong>J-2, mardi 15 décembre : signaler tout changement important d'effectif.</strong> Pour 50 personnes et plus ou plusieurs sites, le préavis recommandé est de 48 h : c'est l'échéance pour modifier une grosse commande sans tension.</li>
        <li><strong>J-1, mercredi 16 décembre, avant 14h : faire le dernier ajustement.</strong> La commande se passe jusqu'à la veille 14h : confirmez l'effectif final, l'adresse et l'heure de livraison.</li>
        <li><strong>Jour J, jeudi 17 décembre : réceptionner et mettre en place.</strong> La livraison a lieu dès 6h30, à l'heure convenue. Les plateaux arrivent dressés et prêts à poser : installez les boissons au frais avec la glace et ouvrez les points de buffet à l'arrivée des invités.</li>
      </ol>

      <h2>Comment estimer l'effectif et le budget d'une soirée à J-45 ?</h2>
      <p>Partez du nombre d'invités confirmés, ajoutez 10 % de marge, puis multipliez par le prix de la formule : 29,90 € HT par personne pour 8 pièces, 40,90 € HT pour 12 pièces, 51,90 € HT pour 16 pièces. La livraison, 29 € HT par commande à Paris et communes proches, s'ajoute une fois. Pour 30 personnes :</p>
      <table>
        <thead>
          <tr><th>Formule</th><th>Pièces par personne</th><th>30 personnes (HT)</th><th>Avec livraison (HT)</th></tr>
        </thead>
        <tbody>
          <tr><td>L'Invitation</td><td>8 pièces, soit 240 pièces</td><td>897 €</td><td>926 €</td></tr>
          <tr><td>La Réception</td><td>12 pièces, soit 360 pièces</td><td>1 227 €</td><td>1 256 €</td></tr>
          <tr><td>La Célébration</td><td>16 pièces, soit 480 pièces</td><td>1 557 €</td><td>1 586 €</td></tr>
        </tbody>
      </table>
      <p>Tarifs L'Écrin Traiteur, octobre 2026, hors boissons. Le minimum de commande est de 50 € HT. Les autres effectifs sont chiffrés dans <a href="/journal/budget-cocktail-entreprise-paris">budget cocktail d'entreprise à Paris</a>.</p>

      <h2>Quel format et quel horaire choisir pour la soirée ?</h2>
      <p>Choisissez le cocktail dînatoire, de 16 à 18 pièces par personne sur 2h30 à 3h, si la soirée remplace le dîner ; le pot de 6 à 8 pièces suffit pour 1h30 à 2h. Le salé domine à raison de deux tiers pour un tiers de sucré. Les repères par format sont dans <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">combien de pièces cocktail par personne</a>.</p>

      <h2>Que vérifier sur le lieu avant la livraison ?</h2>
      <p>Vérifiez quatre points : une table d'au moins 2 mètres pour 25 personnes, deux points de buffet dès 25 personnes pour éviter la file, un accès praticable pour le livreur et de la glace pour les boissons, souvent oubliée sur les soirées de décembre dans des bureaux chauffés. Évitez de poser le buffet dans un couloir de passage.</p>

      <h2>Que faire le jour de la soirée ?</h2>
      <p>Le jour J, la livraison arrive à l'heure convenue, dès 6h30 au plus tôt, avec des plateaux dressés et prêts à poser. Réceptionnez, vérifiez les quantités avec la personne désignée, mettez les boissons au frais avec la glace et ouvrez les points de buffet à l'arrivée des premiers invités.</p>

      <h2>Où trouver les autres repères de la fête de fin d'année ?</h2>
      <p>Les formats, budgets et quantités pour toutes les fêtes de fin d'année (petit-déjeuner, goûter, cocktail, plateaux repas, coffrets) sont réunis dans le guide <a href="/journal/fetes-fin-annee-entreprise-guide-chiffre-2026">fêtes de fin d'année en entreprise 2026</a>. Les boissons sans alcool sont détaillées dans <a href="/journal/cocktail-sans-alcool-entreprise-fin-annee">cocktail sans alcool en entreprise</a>, et le format soirée dans <a href="/journal/soiree-fin-annee-entreprise-paris">soirée de fin d'année en entreprise à Paris</a>. <a href="/devis">Demandez votre devis</a>, réponse sous 24 h.</p>

      <h2>Questions fréquentes sur l'organisation d'une soirée de fin d'année</h2>
      <div class="faq-block">
        <details>
          <summary><strong>Combien de temps avant faut-il commencer à organiser une soirée de fin d'année ?</strong></summary>
          <p>Prévoyez 45 jours pour l'organisation interne : effectif, budget, format, régimes et lieu. Côté traiteur, la commande se passe jusqu'à la veille 14h, avec un préavis de 48 h recommandé à partir de 50 personnes ou pour plusieurs sites. Il n'y a pas de date limite spéciale pour les fêtes.</p>
        </details>
        <details>
          <summary><strong>Quelle marge prévoir sur le nombre d'invités ?</strong></summary>
          <p>Prévoyez 10 % de marge sur l'effectif et sur les pièces : un collègue qui passe en coup de vent reste souvent, et un léger surplus se partage alors qu'un manque se remarque tout de suite. Pour 30 invités, commandez donc pour 33 personnes.</p>
        </details>
        <details>
          <summary><strong>Combien de pièces par personne pour une soirée de fin d'année ?</strong></summary>
          <p>Comptez 6 à 8 pièces par personne pour un pot de 1h30 à 2h, 12 à 14 pour un cocktail déjeunatoire et 16 à 18 pour un cocktail dînatoire de 2h30 à 3h. Comptez environ deux tiers de pièces salées pour un tiers de sucrées.</p>
        </details>
        <details>
          <summary><strong>Quand informer les invités de la date de la soirée ?</strong></summary>
          <p>Au moins trois semaines à l'avance, soit à J-21 au plus tard. Cette échéance laisse le temps de recueillir les réponses et les régimes avant de caler l'effectif définitif à J-7. Le devis du traiteur est remis sous 24 h après la demande.</p>
        </details>
        <details>
          <summary><strong>Que contient une demande de devis pour une soirée ?</strong></summary>
          <p>Cinq informations suffisent : l'effectif, la date, le format (apéritif, déjeunatoire ou dînatoire), l'adresse de livraison et les régimes concernés avec leurs effectifs. Le minimum de commande est de 50 € HT. La réponse arrive sous 24 h, avec facturation entreprise et TVA, et le bon de commande est accepté.</p>
        </details>
        <details>
          <summary><strong>Que prévoir pour les invités qui ne boivent pas d'alcool ?</strong></summary>
          <p>Rien de spécial : toute l'offre est sans alcool. Comptez 3 à 4 boissons par personne pour 2 heures, au moins trois parfums, et un Chardonnay 0 % à 16,90 € HT la bouteille de 75 cl pour trinquer. Jus, nectars, infusions et eaux sont livrés avec les plateaux.</p>
        </details>
        <details>
          <summary><strong>Quel jour de la semaine choisir pour la soirée ?</strong></summary>
          <p>Un jour de semaine, du lundi au vendredi, car les livraisons ont lieu ces jours-là, dès 6h30. Les créneaux horaires qui fonctionnent le mieux pour la soirée sont 18h à 20h30 ou 19h à 21h30, ce qui laisse chacun rentrer à une heure raisonnable.</p>
        </details>
      </div>
    `,
    relatedProducts: ['navettes-salees', 'brochettes-fruits', 'macarons'],
    faq: [
      { q: "Combien de temps avant faut-il commencer à organiser une soirée de fin d'année ?", a: "Prévoyez 45 jours pour l'organisation interne : effectif, budget, format, régimes et lieu. Côté traiteur, la commande se passe jusqu'à la veille 14h, avec un préavis de 48 h recommandé à partir de 50 personnes ou pour plusieurs sites. Il n'y a pas de date limite spéciale pour les fêtes." },
      { q: "Quelle marge prévoir sur le nombre d'invités ?", a: "Prévoyez 10 % de marge sur l'effectif et sur les pièces : un collègue qui passe en coup de vent reste souvent, et un léger surplus se partage alors qu'un manque se remarque tout de suite. Pour 30 invités, commandez donc pour 33 personnes." },
      { q: "Combien de pièces par personne pour une soirée de fin d'année ?", a: "Comptez 6 à 8 pièces par personne pour un pot de 1h30 à 2h, 12 à 14 pour un cocktail déjeunatoire et 16 à 18 pour un cocktail dînatoire de 2h30 à 3h. Comptez environ deux tiers de pièces salées pour un tiers de sucrées." },
      { q: "Quand informer les invités de la date de la soirée ?", a: "Au moins trois semaines à l'avance, soit à J-21 au plus tard. Cette échéance laisse le temps de recueillir les réponses et les régimes avant de caler l'effectif définitif à J-7. Le devis du traiteur est remis sous 24 h après la demande." },
      { q: "Que contient une demande de devis pour une soirée ?", a: "Cinq informations suffisent : l'effectif, la date, le format (apéritif, déjeunatoire ou dînatoire), l'adresse de livraison et les régimes concernés avec leurs effectifs. Le minimum de commande est de 50 € HT. La réponse arrive sous 24 h, avec facturation entreprise et TVA, et le bon de commande est accepté." },
      { q: "Que prévoir pour les invités qui ne boivent pas d'alcool ?", a: "Rien de spécial : toute l'offre est sans alcool. Comptez 3 à 4 boissons par personne pour 2 heures, au moins trois parfums, et un Chardonnay 0 % à 16,90 € HT la bouteille de 75 cl pour trinquer. Jus, nectars, infusions et eaux sont livrés avec les plateaux." },
      { q: "Quel jour de la semaine choisir pour la soirée ?", a: "Un jour de semaine, du lundi au vendredi, car les livraisons ont lieu ces jours-là, dès 6h30. Les créneaux horaires qui fonctionnent le mieux pour la soirée sont 18h à 20h30 ou 19h à 21h30, ce qui laisse chacun rentrer à une heure raisonnable." },
    ],
    howto: {
      name: "Organiser une soirée de fin d'année en entreprise, de J-45 à J-1",
      description: "Douze étapes datées pour organiser une soirée de fin d'année en entreprise avec un traiteur à Paris ou en Île-de-France : effectif, budget, format, régimes, lieu, devis, commande et jour J.",
      totalTime: 'P45D',
      steps: [
        { name: "J-45 : arrêter l'effectif et l'enveloppe", text: "Comptez les invités, ajoutez 10 % de marge pour les imprévus et fixez un budget HT par personne. Repères : 29,90 € HT pour 8 pièces, 40,90 € HT pour 12 pièces, 51,90 € HT pour 16 pièces, plus 29 € HT de livraison par commande." },
        { name: "J-42 : fixer la date et l'horaire", text: "Choisissez un jour de semaine, car les livraisons ont lieu du lundi au vendredi. Les créneaux qui fonctionnent le mieux sont 18h à 20h30 ou 19h à 21h30." },
        { name: "J-35 : choisir le format", text: "Un pot de 1h30 à 2h demande 6 à 8 pièces par personne, un cocktail déjeunatoire 12 à 14, un cocktail dînatoire de 2h30 à 3h 16 à 18. Si personne ne dîne ailleurs, prenez le dînatoire." },
        { name: "J-30 : recenser les régimes", text: "Demandez à chaque invité ses contraintes. L'offre est halal, sans porc et sans alcool par défaut ; végétarien, vegan et sans gluten se précisent à la commande avec les effectifs concernés, et des traces de gluten restent possibles." },
        { name: "J-28 : vérifier le lieu, l'accès et le matériel", text: "Prévoyez une table d'au moins 2 mètres pour 25 personnes, deux points de buffet au-delà de 25 personnes, un accès pour le livreur et de la glace pour les boissons. Les assiettes et couverts sont livrés sur demande." },
        { name: "J-21 : demander le devis et prévenir les invités", text: "Envoyez l'effectif, la date, le format, l'adresse de livraison et les régimes : le devis revient sous 24 h, avec facturation entreprise et TVA, bon de commande accepté. Communiquez la date aux invités au moins trois semaines à l'avance." },
        { name: "J-14 : valider le devis et les boissons", text: "Contrôlez chaque ligne, boissons comprises : comptez 3 à 4 boissons par personne pour 2 heures, avec au moins trois parfums. Toute l'offre est sans alcool ; le Chardonnay 0 % à 16,90 € HT la bouteille de 75 cl sert à trinquer." },
        { name: "J-7 : arrêter l'effectif et les régimes définitifs", text: "Relancez les invités sans réponse, comptez les régimes confirmés et gardez 10 % de marge sur l'effectif final." },
        { name: "J-3 : préparer le lieu et l'accueil", text: "Désignez la personne qui réceptionne la livraison, avec son numéro de téléphone, et libérez la table et les points de buffet." },
        { name: "J-2 : signaler tout changement important d'effectif", text: "Pour 50 personnes et plus ou plusieurs sites, le préavis recommandé est de 48 h : c'est l'échéance pour modifier une grosse commande sans tension." },
        { name: "J-1, avant 14h : faire le dernier ajustement", text: "La commande se passe jusqu'à la veille 14h : confirmez l'effectif final, l'adresse et l'heure de livraison." },
        { name: "Jour J : réceptionner et mettre en place", text: "La livraison a lieu dès 6h30, à l'heure convenue. Les plateaux arrivent dressés et prêts à poser : installez les boissons au frais avec la glace et ouvrez les points de buffet à l'arrivée des invités." },
      ],
    },
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 3. Cocktail sans alcool : boissons du catalogue, quantités, prix
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'cocktail-sans-alcool-entreprise-fin-annee',
    titre: "Cocktail sans alcool en entreprise : quoi servir à une soirée de fin d'année",
    metaTitle: "Cocktail sans alcool en entreprise : quoi servir et combien",
    categorie: 'Conseils',
    date: '12 octobre 2026',
    isoDate: '2026-10-12',
    isoModified: '2026-10-12',
    extrait: "Jus, nectars, infusions, eaux et Chardonnay 0 % : les boissons sans alcool d'une soirée d'entreprise, la quantité par personne et le prix HT au catalogue.",
    img: '/bois-chardonnay-0.webp',
    contenu: `
      <p>Un cocktail sans alcool en entreprise tient en quatre familles de boissons : jus et nectars à partir de 9,50 € HT le litre, infusions à 10,50 € HT le litre, eaux à partir de 3,80 € HT la bouteille, et un Chardonnay 0 % à 16,90 € HT la bouteille de 75 cl pour trinquer. <strong>L'Écrin Traiteur, traiteur d'entreprise à Boulogne-Billancourt (92)</strong>, ne livre aucune boisson alcoolisée. Prix du catalogue, octobre 2026.</p>

      <h2>Quelles boissons sans alcool servir à une soirée de fin d'année en entreprise ?</h2>
      <p>Servez des jus et des nectars Alain Milliat pour la base, une infusion et de l'eau pour varier, un Chardonnay 0 % pour trinquer, et des thermos de boissons chaudes en hiver. Le tableau donne, pour chaque boisson du catalogue, la quantité d'un verre et le prix HT.</p>
      <table>
        <thead>
          <tr><th>Boisson</th><th>Quantité pour une personne</th><th>Prix catalogue HT</th><th>Prix par verre</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Jus de pomme, d'orange, de pomme-framboise, de tomate, de pomme du verger</strong></td><td>1 verre de 20 cl (1 litre = 5 verres)</td><td>9,50 € le litre</td><td>1,90 €</td></tr>
          <tr><td><strong>Jus d'orange pressé minute</strong></td><td>1 verre de 20 cl</td><td>9,90 € le litre</td><td>1,98 €</td></tr>
          <tr><td><strong>Nectars d'abricot, de pêche, de fraise, de mangue, de fruit de la passion, de mangue-passion</strong></td><td>1 verre de 20 cl</td><td>10,50 € le litre</td><td>2,10 €</td></tr>
          <tr><td><strong>Infusion citron vert et gingembre, infusion passion (bouteille en verre)</strong></td><td>1 verre de 20 cl</td><td>10,50 € le litre</td><td>2,10 €</td></tr>
          <tr><td><strong>Infusion citron vert et gingembre, infusion passion (jarre de 10 litres)</strong></td><td>1 verre de 20 cl (1 jarre = 50 verres)</td><td>59,90 € la jarre</td><td>environ 1,20 €</td></tr>
          <tr><td><strong>Blanc de Blancs Chardonnay 0 % alcool</strong></td><td>1 verre de 15 cl (1 bouteille = 5 verres)</td><td>16,90 € la bouteille de 75 cl</td><td>3,38 €</td></tr>
          <tr><td><strong>Evian, Badoit</strong></td><td>1 bouteille de 75 cl pour 3 à 4 verres</td><td>4,80 € la bouteille de 75 cl</td><td>1,20 à 1,60 €</td></tr>
          <tr><td><strong>Evian 33 cl</strong></td><td>1 bouteille individuelle</td><td>3,80 €</td><td>3,80 €</td></tr>
          <tr><td><strong>L'Eau Neuve (brique de 50 cl)</strong></td><td>1 brique pour 2 à 3 verres</td><td>4,50 € la brique</td><td>1,50 à 2,25 €</td></tr>
          <tr><td><strong>Thermos de café, de thé Mariage Frères, de chocolat chaud</strong></td><td>1 tasse (1 thermos de 1 litre = 6 à 8 tasses)</td><td>19,50 € le thermos</td><td>2,44 à 3,25 €</td></tr>
        </tbody>
      </table>
      <p>Prix du catalogue L'Écrin Traiteur, octobre 2026. Les jus Alain Milliat sont sans sucre ajouté, sans concentré et sans conservateur. Les boissons se commandent avec les plateaux, dans la même livraison, gobelets compris.</p>

      <h2>Combien de boissons sans alcool prévoir par personne ?</h2>
      <p>Comptez 3 à 4 boissons par personne pour un cocktail de 2 heures, avec au moins trois parfums différents pour que chacun trouve le sien. Un litre remplit 5 verres de 20 cl : pour 20 personnes, cela représente 60 à 80 boissons, soit 12 à 16 litres si tout est servi en verres de 20 cl.</p>
      <table>
        <thead>
          <tr><th>Effectif</th><th>Boissons au total (3 à 4 par personne)</th><th>Litres en verres de 20 cl</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>20 personnes</strong></td><td>60 à 80</td><td>12 à 16 litres</td></tr>
          <tr><td><strong>30 personnes</strong></td><td>90 à 120</td><td>18 à 24 litres</td></tr>
          <tr><td><strong>50 personnes</strong></td><td>150 à 200</td><td>30 à 40 litres</td></tr>
          <tr><td><strong>100 personnes</strong></td><td>300 à 400</td><td>60 à 80 litres</td></tr>
        </tbody>
      </table>
      <p>Deux parfums différents valent mieux qu'un seul en double : un jus classique que tout le monde boit, un nectar plus marqué pour ceux qui veulent autre chose. Voir aussi <a href="/journal/organiser-cocktail-entreprise">organiser un cocktail d'entreprise</a>.</p>

      <h2>Que servir à la place du champagne pour trinquer ?</h2>
      <p>Le Blanc de Blancs Chardonnay 0 % alcool, un jus de raisin Chardonnay sans alcool façon Blanc de Blancs, remplace les bulles pour 16,90 € HT la bouteille de 75 cl. Une bouteille sert 5 verres de 15 cl, donc une bouteille pour 5 invités quand chacun reçoit un verre pour le toast.</p>
      <table>
        <thead>
          <tr><th>Effectif</th><th>Bouteilles de 75 cl (1 verre par personne)</th><th>Budget HT</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>20 personnes</strong></td><td>4</td><td>67,60 €</td></tr>
          <tr><td><strong>50 personnes</strong></td><td>10</td><td>169,00 €</td></tr>
          <tr><td><strong>100 personnes</strong></td><td>20</td><td>338,00 €</td></tr>
        </tbody>
      </table>

      <h2>Quel budget boissons pour une soirée de 20 personnes ?</h2>
      <p>Pour 20 personnes et 3 boissons par personne, une composition du catalogue revient à 136,40 € HT, soit 6,82 € HT par personne, hors livraison de 29 € HT. C'est le bas de la fourchette de 3 à 4 boissons. Voici le détail.</p>
      <ul>
        <li><strong>Toast</strong> : 4 bouteilles de Chardonnay 0 % de 75 cl, soit 20 verres, 67,60 € HT.</li>
        <li><strong>Jus et nectars</strong> : 4 litres, soit 20 verres de 20 cl, avec 2 litres de jus de pomme à 9,50 € HT et 2 litres de nectar de pêche à 10,50 € HT, soit 40,00 € HT.</li>
        <li><strong>Eau</strong> : 6 bouteilles d'Evian de 75 cl, soit 4,5 litres, 28,80 € HT.</li>
      </ul>
      <p>Le minimum de commande est de 50 € HT et la livraison de 29 € HT par commande à Paris et dans les communes proches. Les quantités pour les petits-déjeuners sont dans <a href="/journal/boissons-petit-dejeuner-entreprise">boissons pour un petit-déjeuner d'entreprise</a>.</p>

      <h2>Quelle boisson choisir pour un grand groupe ?</h2>
      <p>Au-delà de 60 personnes, prenez des jarres de 10 litres d'infusion citron vert et gingembre ou d'infusion passion, à 59,90 € HT la jarre, soit environ 1,20 € HT le verre de 20 cl, servies en libre accès. Les thermos deviennent peu pratiques en grand nombre : il en faut trop, et ils refroidissent.</p>

      <h2>Faut-il prévoir des boissons chaudes à une soirée d'hiver ?</h2>
      <p>Oui, en complément des boissons fraîches : un thermos de 1 litre de café, de thé Mariage Frères ou de chocolat chaud sert 6 à 8 tasses et coûte 19,50 € HT. Le chocolat chaud, au même prix que le café, devient la boisson principale dès qu'il y a des enfants, sur un goûter ou un arbre de Noël.</p>

      <h2>Les boissons de L'Écrin Traiteur sont-elles halal et véganes ?</h2>
      <p>Oui. Toute l'offre est halal et sans porc par défaut, et il n'y a aucune boisson alcoolisée. Les boissons du catalogue sont véganes et sans gluten, à l'exception du chocolat chaud, végétarien et sans gluten. L'Écrin Traiteur ne revendique aucune certification halal : l'offre est halal-friendly.</p>

      <h2>Propose-t-on des mocktails ?</h2>
      <p>Des mocktails sont possibles sur demande, mais ils ne figurent pas au catalogue : les prix de cet article concernent uniquement les boissons listées dans le tableau. Pour un bar à mocktails, précisez-le dans la demande de devis, avec l'effectif et la date. Le devis est remis sous 24 h.</p>

      <h2>Comment commander les boissons d'une soirée de fin d'année ?</h2>
      <p>Les boissons se commandent avec les plateaux, jusqu'à la veille 14h, pour une livraison dès 6h30 du lundi au vendredi. La livraison coûte 29 € HT par commande à Paris et dans les communes proches, avec un minimum de commande de 50 € HT. Pour 50 personnes et plus, un préavis de 48 h est recommandé. <a href="/devis">Demandez votre devis</a>.</p>
      <p>Les formats et budgets de toutes les fêtes de fin d'année sont dans <a href="/journal/fetes-fin-annee-entreprise-guide-chiffre-2026">fêtes de fin d'année en entreprise 2026</a>, et le calendrier de préparation dans <a href="/journal/retroplanning-soiree-fin-annee-entreprise">rétroplanning d'une soirée de fin d'année</a>. La carte complète est sur la page <a href="/creations/boissons">boissons</a>.</p>

      <h2>Questions fréquentes sur le cocktail sans alcool en entreprise</h2>
      <div class="faq-block">
        <details>
          <summary><strong>Quelles boissons sans alcool servir à une soirée d'entreprise ?</strong></summary>
          <p>Des jus et nectars Alain Milliat (9,50 à 10,50 € HT le litre), des infusions citron vert et gingembre ou passion (10,50 € HT le litre), des eaux (à partir de 3,80 € HT), des thermos de boissons chaudes (19,50 € HT) et un Chardonnay 0 % à 16,90 € HT pour trinquer.</p>
        </details>
        <details>
          <summary><strong>Combien de boissons par personne pour un cocktail de 2 heures ?</strong></summary>
          <p>Comptez 3 à 4 boissons par personne, avec au moins trois parfums différents. Pour 20 personnes, cela donne 60 à 80 boissons, soit 12 à 16 litres en verres de 20 cl. Pour 50 personnes, comptez 150 à 200 boissons, soit 30 à 40 litres.</p>
        </details>
        <details>
          <summary><strong>Combien de bouteilles de Chardonnay 0 % pour 50 personnes ?</strong></summary>
          <p>Prévoyez 10 bouteilles de 75 cl pour 50 personnes, à raison d'un verre de 15 cl par personne pour le toast, soit 5 verres par bouteille. Le budget est de 169,00 € HT, à 16,90 € HT la bouteille. Pour 100 personnes, il faut 20 bouteilles, soit 338,00 € HT.</p>
        </details>
        <details>
          <summary><strong>Combien coûte un litre de jus ou de nectar ?</strong></summary>
          <p>Le litre de jus Alain Milliat coûte 9,50 € HT (pomme, orange, pomme-framboise, tomate, pomme du verger), le jus d'orange pressé minute 9,90 € HT et les nectars 10,50 € HT. Un litre remplit 5 verres de 20 cl, soit entre 1,90 et 2,10 € HT le verre.</p>
        </details>
        <details>
          <summary><strong>L'Écrin Traiteur livre-t-il de l'alcool ?</strong></summary>
          <p>Non. L'Écrin Traiteur ne livre aucune boisson alcoolisée : toute l'offre est sans alcool, halal et sans porc par défaut. Pour trinquer, le Blanc de Blancs Chardonnay 0 %, un jus de raisin sans alcool à 16,90 € HT la bouteille de 75 cl, remplace le champagne.</p>
        </details>
        <details>
          <summary><strong>Quelle boisson choisir pour plus de 60 personnes ?</strong></summary>
          <p>Les jarres de 10 litres d'infusion citron vert et gingembre ou d'infusion passion, à 59,90 € HT la jarre, soit environ 1,20 € HT le verre de 20 cl. Au-delà de 60 personnes, les thermos deviennent peu pratiques et refroidissent, alors que la jarre se sert en libre accès.</p>
        </details>
        <details>
          <summary><strong>Quel budget boissons pour 20 personnes ?</strong></summary>
          <p>Environ 136,40 € HT pour 3 boissons par personne : 4 bouteilles de Chardonnay 0 % (67,60 €), 4 litres de jus et nectars (40,00 €) et 6 bouteilles d'eau de 75 cl (28,80 €), soit 6,82 € HT par personne, plus 29 € HT de livraison.</p>
        </details>
        <details>
          <summary><strong>Les boissons sont-elles livrées avec les plateaux ?</strong></summary>
          <p>Oui, dans la même livraison, gobelets compris. La commande se passe jusqu'à la veille 14h, pour une livraison dès 6h30 du lundi au vendredi. La livraison coûte 29 € HT à Paris et dans les communes proches, avec un minimum de commande de 50 € HT.</p>
        </details>
      </div>
    `,
    relatedProducts: ['brochettes-fruits', 'macarons', 'chouquettes'],
    faq: [
      { q: "Quelles boissons sans alcool servir à une soirée d'entreprise ?", a: "Des jus et nectars Alain Milliat (9,50 à 10,50 € HT le litre), des infusions citron vert et gingembre ou passion (10,50 € HT le litre), des eaux (à partir de 3,80 € HT), des thermos de boissons chaudes (19,50 € HT) et un Chardonnay 0 % à 16,90 € HT pour trinquer." },
      { q: "Combien de boissons par personne pour un cocktail de 2 heures ?", a: "Comptez 3 à 4 boissons par personne, avec au moins trois parfums différents. Pour 20 personnes, cela donne 60 à 80 boissons, soit 12 à 16 litres en verres de 20 cl. Pour 50 personnes, comptez 150 à 200 boissons, soit 30 à 40 litres." },
      { q: "Combien de bouteilles de Chardonnay 0 % pour 50 personnes ?", a: "Prévoyez 10 bouteilles de 75 cl pour 50 personnes, à raison d'un verre de 15 cl par personne pour le toast, soit 5 verres par bouteille. Le budget est de 169,00 € HT, à 16,90 € HT la bouteille. Pour 100 personnes, il faut 20 bouteilles, soit 338,00 € HT." },
      { q: "Combien coûte un litre de jus ou de nectar ?", a: "Le litre de jus Alain Milliat coûte 9,50 € HT (pomme, orange, pomme-framboise, tomate, pomme du verger), le jus d'orange pressé minute 9,90 € HT et les nectars 10,50 € HT. Un litre remplit 5 verres de 20 cl, soit entre 1,90 et 2,10 € HT le verre." },
      { q: "L'Écrin Traiteur livre-t-il de l'alcool ?", a: "Non. L'Écrin Traiteur ne livre aucune boisson alcoolisée : toute l'offre est sans alcool, halal et sans porc par défaut. Pour trinquer, le Blanc de Blancs Chardonnay 0 %, un jus de raisin sans alcool à 16,90 € HT la bouteille de 75 cl, remplace le champagne." },
      { q: "Quelle boisson choisir pour plus de 60 personnes ?", a: "Les jarres de 10 litres d'infusion citron vert et gingembre ou d'infusion passion, à 59,90 € HT la jarre, soit environ 1,20 € HT le verre de 20 cl. Au-delà de 60 personnes, les thermos deviennent peu pratiques et refroidissent, alors que la jarre se sert en libre accès." },
      { q: "Quel budget boissons pour 20 personnes ?", a: "Environ 136,40 € HT pour 3 boissons par personne : 4 bouteilles de Chardonnay 0 % (67,60 €), 4 litres de jus et nectars (40,00 €) et 6 bouteilles d'eau de 75 cl (28,80 €), soit 6,82 € HT par personne, plus 29 € HT de livraison." },
      { q: "Les boissons sont-elles livrées avec les plateaux ?", a: "Oui, dans la même livraison, gobelets compris. La commande se passe jusqu'à la veille 14h, pour une livraison dès 6h30 du lundi au vendredi. La livraison coûte 29 € HT à Paris et dans les communes proches, avec un minimum de commande de 50 € HT." },
    ],
  },
]
