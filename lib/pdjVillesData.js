// Pages "Petit-déjeuner d'entreprise + Ville" — déclinaison ciblée du modèle
// /traiteur/[ville], focalisée sur le petit-déjeuner. Créées suite à l'audit
// GSC du 23/09/2026 : ~3000 impressions/90j à 0 clic sur "petit déjeuner
// entreprise + ville", captées par des pages non ciblées (home ou catégorie
// générique). Une seule source de vérité par ville, ajouter ici pour étendre
// à d'autres communes (mêmes champs que citiesData.js, focus petit-déj).

export const PDJ_VILLES = [
  {
    slug: 'gennevilliers',
    name: 'Gennevilliers',
    region: 'Hauts-de-Seine (92)',
    metaTitle: "Petit-déjeuner d'entreprise à Gennevilliers : livré dès 6h30",
    metaDescription: "Petit-déjeuner d'entreprise à Gennevilliers dès 12,50€/pers. Viennoiseries artisanales, jus Alain Milliat. Livraison 6h30. Devis en 24h.",
    heroDescription: "Viennoiseries pur beurre, madeleines Mado Paris, jus Alain Milliat et café, livrés dès 6h30 dans tout Gennevilliers : port, ZAC des Grésillons, Chandon, centre-ville.",
    cityHref: '/traiteur/gennevilliers',
    formules: [
      { nom: 'Classique', prix: '8€ HT/pers', desc: '2 viennoiseries, jus Alain Milliat, café, corbeille de fruits.' },
      { nom: 'Bio', prix: '10€ HT/pers', desc: 'Viennoiseries bio Maison Landemaine, jus bio, café bio, fruits bio.' },
    ],
    seoArticle: `
      <p>Que votre équipe soit installée près du port de Gennevilliers, dans la ZAC des Grésillons, au Chandon ou en centre-ville, nous livrons chaque matin dès <strong>6h30</strong> : viennoiseries pur beurre façonnées le matin même, madeleines <strong>Mado Paris</strong>, jus <strong>Alain Milliat</strong>, café et corbeille de fruits frais.</p>

      <h2>Formule Classique (8€ HT/pers)</h2>
      <p>2 viennoiseries pur beurre par personne, jus Alain Milliat, café chaud en thermos, corbeille de fruits frais. Pour 20 personnes : 160€ HT + 29€ HT de livraison, soit <strong>189€ HT</strong>.</p>

      <h2>Formule Bio (10€ HT/pers)</h2>
      <p>Viennoiseries bio Maison Landemaine, jus bio Alain Milliat, café bio torréfié local, fruits bio. Pour 20 personnes : 200€ HT + 29€ HT de livraison, soit <strong>229€ HT</strong>.</p>

      <h2>Livrer sur un site industriel ou logistique à Gennevilliers</h2>
      <p>Une partie des adresses de Gennevilliers ne se livre pas comme un immeuble de bureaux classique : quais de réception, horaires fixes, parfois un poste de garde à l'entrée. Précisez-le à la commande, nous calons le créneau en conséquence — nom du site, point de réception, contact sur place, horaires autorisés.</p>

      <h2>Commander votre petit-déjeuner d'entreprise à Gennevilliers</h2>
      <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30. Minimum de commande 50€ HT, livraison 29€ HT. Facturation entreprise avec TVA. <a href="/devis">Demandez votre devis</a>, réponse sous 24h. Retrouvez aussi nos <a href="/traiteur/gennevilliers">autres prestations à Gennevilliers</a> (plateaux repas, cocktails, buffets).</p>
    `,
    faq: [
      { name: "Livrez-vous avant 7h à Gennevilliers ?", answer: "Oui, 6h30 possible partout à Gennevilliers, sous réserve d'accès au bâtiment. Confirmez au moment du devis." },
      { name: "Quel est le budget pour 20 personnes ?", answer: "Formule Classique : 189€ HT (160€ + 29€ de livraison). Formule Bio : 229€ HT." },
      { name: "Livrez-vous sur les sites industriels du port ?", answer: "Oui. Précisez le point de réception (quai, poste de garde, accueil) et le contact sur place à la commande." },
    ],
  },
  {
    slug: 'boulogne-billancourt',
    name: 'Boulogne-Billancourt',
    region: 'Hauts-de-Seine (92)',
    metaTitle: "Petit-déjeuner d'entreprise à Boulogne-Billancourt : dès 6h30",
    metaDescription: "Petit-déjeuner d'entreprise à Boulogne-Billancourt dès 12,50€/pers. Notre atelier y est basé : livraison la plus rapide de notre zone. Devis 24h.",
    heroDescription: "Boulogne-Billancourt est notre commune d'attache, notre atelier est au 63 bis rue de Sèvres. C'est la ville où nous livrons le plus tôt et acceptons le plus facilement les commandes de dernière minute.",
    cityHref: '/traiteur/boulogne-billancourt',
    formules: [
      { nom: 'Classique', prix: '12,50€ HT/pers', desc: 'Viennoiseries pur beurre, jus, café, corbeille de fruits frais.' },
      { nom: 'Premium', prix: '18€ HT/pers', desc: 'Sélection élargie : madeleines Mado Paris, yaourts fermiers, pâtisseries.' },
    ],
    seoArticle: `
      <p>Boulogne-Billancourt est notre commune d'attache : notre atelier est au 63 bis rue de Sèvres. C'est la ville où nous livrons le plus tôt et le plus souvent, du Trapèze au Pont-de-Sèvres en passant par le centre-ville et la route de la Reine. Sur Boulogne, un oubli de dernière minute reste rattrapable, ce qui n'est pas vrai partout.</p>

      <h2>Formule Classique (12,50€ HT/pers)</h2>
      <p>Viennoiseries pur beurre façonnées le matin même par nos boulangers partenaires, jus Alain Milliat, café, corbeille de fruits frais découpés. Pour 20 personnes : 250€ HT + 29€ HT de livraison, soit <strong>279€ HT</strong>.</p>

      <h2>Formule Premium (18€ HT/pers)</h2>
      <p>Sélection élargie avec madeleines <strong>Mado Paris</strong>, yaourts fermiers, pâtisseries individuelles. Pour 20 personnes : 360€ HT + 29€ HT de livraison, soit <strong>389€ HT</strong>.</p>

      <h2>Livraison à Boulogne : Trapèze, Pont-de-Sèvres, centre-ville</h2>
      <p>Nous connaissons les accès du Trapèze immeuble par immeuble, les contraintes de stationnement du centre-ville et les procédures des tours de Pont-de-Sèvres. Livraison à partir de <strong>6h30</strong>, montée à l'étage quand c'est possible. Étant basés sur la commune, nous sommes aussi la ville où nous acceptons le plus facilement les commandes du matin même sur notre sélection disponible du jour, jusqu'à 10h.</p>

      <h2>Commander votre petit-déjeuner d'entreprise à Boulogne-Billancourt</h2>
      <p>Commande avant <strong>14h la veille</strong>, livraison dès 6h30, et jusqu'à 10h le matin même sur notre sélection du jour. Minimum de commande 50€ HT, livraison 29€ HT. Facturation entreprise avec TVA. <a href="/devis">Demandez votre devis</a>, réponse sous 24h. Retrouvez aussi nos <a href="/traiteur/boulogne-billancourt">autres prestations à Boulogne-Billancourt</a> (plateaux repas, cocktails, buffets).</p>
    `,
    faq: [
      { name: "Pourquoi la livraison est-elle plus rapide à Boulogne-Billancourt ?", answer: "Notre atelier est basé sur la commune (63 bis rue de Sèvres) : c'est la ville où nous acceptons le plus facilement les commandes du matin même, jusqu'à 10h sur notre sélection du jour." },
      { name: "Quel est le budget pour 20 personnes ?", answer: "Formule Classique : 279€ HT (250€ + 29€ de livraison). Formule Premium : 389€ HT." },
      { name: "Livrez-vous dans le Trapèze et à Pont-de-Sèvres ?", answer: "Oui, quotidiennement. Nous connaissons les accès immeuble par immeuble sur ces deux secteurs." },
    ],
  },
]
