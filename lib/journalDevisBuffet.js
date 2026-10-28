// Guide « comparer des devis de traiteur pour un buffet d'entreprise : exemple chiffré pour 20 personnes »
// (28 octobre 2026). Complète « devis-traiteur-ce-qui-est-inclus » (liste des lignes à vérifier) par un devis
// complet lu ligne par ligne et une méthode de comparaison de trois devis.
// Chiffres vérifiés : menus à partager 34,90 à 37,90 € HT par personne (8 à 12 convives) ; cocktail de 12 pièces
// 40,90 € ; livraison 29 € HT (Paris et communes proches) ; boissons d'un repas d'une heure pour 20 personnes
// 121 € HT (4 thermos de 1 L, 2 L de jus, 5 eaux) et d'une soirée de 2 h 134,30 € HT (guide du buffet froid) ;
// maître d'hôtel 250 € HT les 6 h ; livraison avec reprise de vaisselle réutilisable 39 € HT (Paris, 92, 94) ;
// gobelets, serviettes et couverts jetables sans supplément ; vaisselle en dur, verrerie, nappage sur devis ;
// minimum 50 € HT ; modification jusqu'à la veille 10h ; annulation sans frais jusqu'à 2 jours ouvrés avant,
// avant 10h ; 4 h au froid, 2 h à température ambiante. Aucun prix de vaisselle en dur n'est donné : il est sur devis.

export const DEVIS_BUFFET_ARTICLES = [
  {
    slug: 'comparer-devis-traiteur-buffet-entreprise-exemple-20-personnes',
    titre: "Comparer des devis de traiteur pour un buffet d'entreprise : exemple chiffré pour 20 personnes",
    metaTitle: "Comparer des devis de traiteur : exemple pour 20 personnes",
    categorie: 'Conseils',
    date: '28 octobre 2026',
    isoDate: '2026-10-28',
    extrait: "Un devis de buffet lu ligne par ligne pour 20 personnes (848 à 908 € HT), les 10 questions à poser et la méthode pour comparer trois traiteurs.",
    img: '/hero-a-partager.webp',
    enBref: [
      "Pour 20 personnes, un buffet en menu à partager revient de 848 à 908 € HT chez L'Écrin Traiteur, livraison de 29 € HT et boissons d'un repas d'une heure comprises, soit 42,40 à 45,40 € HT par personne.",
      "Pour comparer, ramenez chaque devis à un prix par personne tout compris : produits, livraison, boissons, vaisselle, service, reprise.",
      "Dix questions suffisent à rendre trois devis comparables : prix HT ou TTC, livraison, minimum, vaisselle, mise en place, boissons, régimes, délais, annulation, reprise du matériel.",
      "Un devis arrive sous 24 h ; la commande se modifie jusqu'à la veille 10h et s'annule sans frais jusqu'à 2 jours ouvrés avant la livraison, avant 10h.",
    ],
    contenu: `
      <p>Deux devis de buffet peuvent afficher le même prix par personne et couvrir des choses très différentes. La seule façon de les comparer est de les ramener à un <strong>prix par personne tout compris</strong>, ligne par ligne. Voici un devis complet lu ligne par ligne pour 20 personnes (de <strong>848 à 908 € HT</strong> chez L'Écrin Traiteur), les dix questions à poser à chaque traiteur, et la méthode pour comparer trois offres sans se tromper.</p>

      <h2>Un devis de buffet pour 20 personnes, ligne par ligne</h2>
      <p>Exemple : un déjeuner d'équipe d'une heure, en menu à partager, livré à Paris. Les prix sont ceux du catalogue de L'Écrin Traiteur.</p>
      <table>
        <thead>
          <tr><th>Ligne</th><th>Ce qu'elle couvre</th><th>Montant HT</th><th>Ce qu'il faut vérifier</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Menu à partager</strong></td><td>20 convives à 34,90 € (Le Jardin) ou 37,90 € (Le Parisien) par personne ; chaque menu est calibré pour 8 à 12 convives</td><td>698 à 758 €</td><td>Le nombre de recettes et de pièces par personne, pas seulement le prix</td></tr>
          <tr><td><strong>Livraison</strong></td><td>Forfait à Paris et dans les communes proches, dès 6h30</td><td>29 €</td><td>La zone, le créneau et le supplément hors zone</td></tr>
          <tr><td><strong>Boissons</strong></td><td>4 thermos de 1 L (café, thé), 2 L de jus, 5 bouteilles d'eau</td><td>121 €</td><td>Les quantités écrites, pas « boissons comprises »</td></tr>
          <tr><td><strong>Gobelets, serviettes, couverts jetables</strong></td><td>Fournis</td><td>0 €</td><td>Jetable ou réutilisable ?</td></tr>
          <tr><td><strong>Vaisselle en dur, verrerie, nappage</strong></td><td>Sur devis, en location chez un partenaire</td><td>Non chiffré</td><td>Lavage et reprise compris ?</td></tr>
          <tr><td><strong>Total</strong></td><td>Hors vaisselle en dur</td><td><strong>848 à 908 €</strong></td><td>Soit 42,40 à 45,40 € par personne</td></tr>
        </tbody>
      </table>
      <p>Les 29 € de livraison s'appliquent à Paris et aux communes proches ; les Yvelines et les zones plus lointaines sont chiffrées au devis selon la distance. Avec la reprise de la vaisselle réutilisable, la livraison passe à 39 € HT en une ligne à Paris, dans le 92 et le 94.</p>

      <h2>Le même exercice pour un cocktail de 12 pièces</h2>
      <table>
        <thead>
          <tr><th>Ligne</th><th>Calcul</th><th>Montant HT</th></tr>
        </thead>
        <tbody>
          <tr><td>Cocktail La Réception, 12 pièces</td><td>20 × 40,90 €</td><td>818 €</td></tr>
          <tr><td>Livraison</td><td>Forfait Paris et communes proches</td><td>29 €</td></tr>
          <tr><td>Boissons d'une soirée de 2 heures</td><td>4 Chardonnay 0 %, 5 L de jus, 4 bouteilles d'eau</td><td>134,30 €</td></tr>
          <tr><td>Total sans service</td><td></td><td><strong>981,30 €</strong> (49,07 € par personne)</td></tr>
          <tr><td>Maître d'hôtel, service de 6 heures</td><td>Pour un cocktail debout de 20 à 40 invités</td><td>250 €</td></tr>
          <tr><td>Total avec service</td><td></td><td><strong>1 231,30 €</strong> (61,57 € par personne)</td></tr>
        </tbody>
      </table>
      <p>Ce cocktail se compare à 3,41 € HT la pièce ; selon la formule, les cocktails de L'Écrin vont de 3,24 à 3,74 € HT la pièce (16 pièces à 51,90 €, 8 pièces à 29,90 €).</p>

      <h2>Les 10 questions à poser à chaque traiteur</h2>
      <p>Posez les mêmes dix questions à chacun : les réponses de L'Écrin Traiteur sont dans la colonne de droite, pour que vous voyiez à quoi ressemble une réponse claire.</p>
      <table>
        <thead>
          <tr><th>Poste</th><th>La question</th><th>Réponse de L'Écrin Traiteur</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>1. Prix</strong></td><td>HT ou TTC ? Par personne ou par menu ?</td><td>Prix HT par personne, publiés sur la <a href="/tarifs">page tarifs</a></td></tr>
          <tr><td><strong>2. Livraison</strong></td><td>Quel forfait, quelle zone, quel créneau ?</td><td>29 € HT à Paris et communes proches, dès 6h30 ; hors zone au devis</td></tr>
          <tr><td><strong>3. Minimum</strong></td><td>De commande ou de personnes ?</td><td>50 € HT de produits, sans minimum de personnes</td></tr>
          <tr><td><strong>4. Vaisselle</strong></td><td>Jetable, réutilisable ou en dur ? Lavage compris ?</td><td>Jetable sans supplément ; en dur, verrerie et nappage sur devis</td></tr>
          <tr><td><strong>5. Mise en place</strong></td><td>Livré dressé ou à installer ? Qui sert ?</td><td>Livré dressé, prêt à servir ; maître d'hôtel à 250 € HT les 6 heures</td></tr>
          <tr><td><strong>6. Boissons</strong></td><td>Comprises ou à la carte ? Quelles quantités ?</td><td>À la carte : thermos 19,50 € HT, jus dès 9,50 € HT le litre</td></tr>
          <tr><td><strong>7. Régimes et allergènes</strong></td><td>Au même prix ? Une fiche écrite ?</td><td>Halal et sans porc d'office ; végétarien, vegan et sans gluten au même prix ; fiche des allergènes avec le devis</td></tr>
          <tr><td><strong>8. Délais</strong></td><td>Jusqu'à quand commander et modifier ?</td><td>Jusqu'à la veille 10h ; 48 h à l'avance à partir de 50 personnes</td></tr>
          <tr><td><strong>9. Annulation</strong></td><td>À quelles conditions, et que devient la commande ?</td><td>Sans frais jusqu'à 2 jours ouvrés avant la livraison, avant 10h ; ensuite elle reste due</td></tr>
          <tr><td><strong>10. Reprise du matériel</strong></td><td>Qui reprend les plats et les thermos, et quand ?</td><td>Rendus propres sous 72 heures, ou récupérés avec la ligne livraison et reprise</td></tr>
        </tbody>
      </table>

      <h2>Comment comparer trois devis</h2>
      <ol>
        <li><strong>Donnez les mêmes données aux trois traiteurs :</strong> date, adresse, horaire, effectif confirmé, régimes, durée.</li>
        <li><strong>Remplissez un tableau de six colonnes</strong> pour chaque offre : produits, livraison, boissons, vaisselle, service, reprise.</li>
        <li><strong>Ramenez chaque total à un prix par personne tout compris,</strong> puis comparez-les entre eux, pas avec le prix affiché en gros sur la page.</li>
        <li><strong>Comparez les quantités :</strong> nombre de pièces ou de grammes par personne, boissons en litres. Un prix bas pour trop peu de pièces coûte plus cher.</li>
        <li><strong>Lisez les conditions :</strong> modification, annulation, délai de consommation, reprise. Elles pèsent autant que le prix quand un effectif change.</li>
      </ol>

      <h2>Les coûts qui s'ajoutent le plus souvent</h2>
      <ul>
        <li>La livraison hors zone, ou très tôt le matin.</li>
        <li>La vaisselle en dur, la verrerie et le nappage.</li>
        <li>Le personnel de service et la mise en place.</li>
        <li>Les boissons, quand elles ne sont pas dans la formule.</li>
        <li>Le mobilier (mange-debout, tables) loué à part.</li>
        <li>La reprise du matériel et le nettoyage.</li>
      </ul>
      <p>Les lignes à vérifier sont détaillées dans <a href="/journal/devis-traiteur-ce-qui-est-inclus">ce qui est inclus dans un devis traiteur</a>, et la façon de calculer les quantités dans <a href="/journal/buffet-froid-entreprise-quantites-par-personne">les quantités d'un buffet froid</a>.</p>

      <h2>Avec L'Écrin Traiteur</h2>
      <ul>
        <li>Prix HT publiés sur la <a href="/tarifs">page tarifs</a>, devis sous 24 h, facture d'entreprise avec TVA, paiement par virement ou par carte.</li>
        <li>Commande jusqu'à la veille 10h (48 h à l'avance à partir de 50 personnes), minimum de commande 50 € HT de produits.</li>
        <li>Menus à partager et cocktails livrés dressés, prêts à poser sur la table.</li>
      </ul>
      <p>Voir nos <a href="/creations/a-partager">menus à partager</a> et nos <a href="/creations/cocktails">cocktails</a>, ou <a href="/devis">demandez un devis</a> en indiquant la date, l'adresse, l'effectif et les régimes.</p>
    `,
    relatedProducts: [],
    faq: [
      { q: "Que doit contenir le devis d'un traiteur pour un buffet d'entreprise ?", a: "Les produits avec leurs quantités, le prix HT par personne, la livraison (zone, créneau, forfait), les boissons, la vaisselle (jetable, réutilisable ou en dur), le service éventuel, la reprise du matériel, les régimes et allergènes, et les conditions de modification et d'annulation." },
      { q: "Combien coûte un buffet d'entreprise pour 20 personnes, tout compris ?", a: "Chez L'Écrin Traiteur, de 848 à 908 € HT en menu à partager, livraison de 29 € HT et boissons d'un repas d'une heure comprises, soit 42,40 à 45,40 € HT par personne. La vaisselle en dur est sur devis, et les gobelets, serviettes et couverts jetables sont sans supplément." },
      { q: "Comment comparer trois devis de traiteurs ?", a: "Donnez les mêmes données aux trois traiteurs, ramenez chaque offre à un prix par personne tout compris (produits, livraison, boissons, vaisselle, service, reprise), comparez les quantités et lisez les conditions de modification et d'annulation." },
      { q: "Faut-il comparer le prix par personne ou le prix par pièce ?", a: "Les deux. Le prix par personne dit ce que vous payez, le prix par pièce dit ce que vous recevez : chez L'Écrin, un cocktail revient de 3,24 à 3,74 € HT la pièce selon la formule. Vérifiez aussi le nombre de pièces par personne." },
      { q: "La livraison est-elle comprise dans le prix ?", a: "Pas dans le prix par personne : elle est facturée à part. Chez L'Écrin, 29 € HT à Paris et dans les communes proches, dès 6h30 ; 39 € HT avec la reprise de la vaisselle réutilisable à Paris, dans le 92 et le 94 ; hors zone, au devis." },
      { q: "Qu'est-ce qui est facturé à part dans un devis de buffet ?", a: "Selon le traiteur : la livraison hors zone, la vaisselle en dur, la verrerie, le nappage, le personnel de service, les boissons, le mobilier et la reprise du matériel. Chez L'Écrin, le maître d'hôtel coûte 250 € HT les 6 heures." },
      { q: "En combien de temps reçoit-on un devis ?", a: "Sous 24 h chez L'Écrin Traiteur. Indiquez la date, l'adresse, l'horaire, l'effectif, les régimes et le budget pour qu'il soit juste du premier coup." },
      { q: "Peut-on modifier ou annuler une commande de buffet ?", a: "Chez L'Écrin, la commande se modifie jusqu'à la veille 10h. L'annulation est sans frais jusqu'à 2 jours ouvrés avant la livraison, avant 10h ; ensuite, la commande reste due." },
    ],
  },
]
