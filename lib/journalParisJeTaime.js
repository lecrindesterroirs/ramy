// Annonce : adhésion à Paris je t'aime – Office de Tourisme (28/10/2026), fusionnée via lib/journalOffice.js
// Faits : adhésion « Jeune entreprise » validée et réglée les 27 et 28/10/2026 (mails du service Adhérents),
// référencement prévu sur parisjetaime.com/convention (fiche de renseignements du 27/10/2026).
// La fiche L'Écrin sur leur site n'existe pas encore : pas de lien direct vers elle tant qu'elle n'est pas en ligne.
// Chiffres L'Écrin : Classique 8 € HT/pers., cocktail 8 pièces 29,90 € HT/pers., livraison 29 € HT (Paris et communes proches).

const faqHtml = (faq) => `
      <div class="faq-block">
${faq.map(({ q, a }) => `        <details>
          <summary><strong>${q}</strong></summary>
          <p>${a}</p>
        </details>`).join('\n')}
      </div>`

const SRC_CONVENTION = 'https://parisjetaime.com/convention'

const FAQ_PJTM = [
  {
    q: "Qu'est-ce que Paris je t'aime ?",
    a: "Paris je t'aime est la marque de l'Office de Tourisme et des Congrès de Paris. Son espace Convention s'adresse aux organisateurs de congrès, de séminaires et d'événements d'entreprise qui cherchent des lieux et des prestataires à Paris.",
  },
  {
    q: "Qu'est-ce que l'adhésion change pour un organisateur d'événements ?",
    a: "L'Écrin Traiteur est référencé parmi les prestataires présentés aux organisateurs d'événements. Pour un séminaire, un congrès ou une soirée d'entreprise, vous trouvez un traiteur qui livre dans tout Paris et en Île-de-France, avec devis sous 24 h.",
  },
  {
    q: "Pouvez-vous travailler avec une entreprise ou une agence étrangère ?",
    a: "Oui. Le site existe en anglais, les devis et les échanges peuvent se faire en anglais, et la facture est établie avec la TVA française, qui s'applique à une prestation de traiteur réalisée à Paris, même pour une société basée hors de France.",
  },
  {
    q: "Quelles prestations proposez-vous pour un événement à Paris ?",
    a: "Petits-déjeuners dès 8 € HT par personne, pauses gourmandes, plateaux repas, buffets à partager et cocktails dès 29,90 € HT par personne pour 8 pièces. Toute la carte est halal et sans porc, avec des options végétariennes, vegan et sans gluten.",
  },
]

export const PARIS_JE_TAIME = [
  {
    slug: 'lecrin-traiteur-partenaire-officiel-paris-je-taime',
    titre: "L'Écrin Traiteur devient partenaire officiel de Paris je t'aime – Office de Tourisme",
    metaTitle: "L'Écrin Traiteur, partenaire officiel Paris je t'aime",
    categorie: 'Inspirations',
    date: '28 octobre 2026',
    isoDate: '2026-10-28',
    isoModified: '2026-10-28',
    enBref: [
      "Depuis octobre 2026, L'Écrin Traiteur est adhérent de Paris je t'aime, l'Office de Tourisme et des Congrès de Paris.",
      "Nous sommes référencés comme traiteur auprès des organisateurs de congrès, de séminaires et d'événements d'entreprise.",
      "Livraison dès 6h30 dans tout Paris et en Île-de-France, devis sous 24 h, échanges possibles en anglais.",
      "Toute la carte est halal et sans porc, avec des options végétariennes, vegan et sans gluten.",
    ],
    about: ["Paris je t'aime", "Office de Tourisme et des Congrès de Paris", "Traiteur événementiel à Paris"],
    extrait: "L'Écrin Traiteur rejoint le réseau Paris je t'aime – Office de Tourisme et des Congrès de Paris : ce que cela change pour les organisateurs d'événements et les entreprises étrangères.",
    img: '/presse/lecrin-traiteur-presse-1.webp',
    relatedProducts: ['plateau-clubs-signature', 'plateau-mini-wraps', 'madeleines-20'],
    faq: FAQ_PJTM,
    contenu: `
      <p>L'Écrin Traiteur est désormais <strong>partenaire officiel de Paris je t'aime</strong>, la marque de l'Office de Tourisme et des Congrès de Paris. Notre adhésion a été validée en octobre 2026 : nous rejoignons le réseau des professionnels qui accueillent les visiteurs et les événements de la capitale.</p>

      <img src="/partenaires/paris-je-taime-partenaire-officiel-2026.webp" width="320" height="161" alt="Partenaire officiel Paris je t'aime – Office de Tourisme 2026" loading="lazy" style="display:block;max-width:320px;height:auto;margin:24px 0" />

      <h2>Pourquoi rejoindre Paris je t'aime ?</h2>
      <p>Une grande partie de notre activité se fait déjà pour des événements : séminaires, réunions de direction, journées portes ouvertes, soirées de fin d'année. Paris je t'aime présente aux organisateurs de congrès et d'événements d'entreprise des lieux et des prestataires, dans son <a href="${SRC_CONVENTION}" target="_blank" rel="noopener">espace Convention</a>. Y être référencé, c'est permettre aux agences et aux entreprises qui préparent un événement à Paris de trouver plus facilement un traiteur qui livre partout dans la ville.</p>

      <h2>Ce que nous proposons aux organisateurs d'événements</h2>
      <ul>
        <li><strong>Petits-déjeuners et cafés d'accueil</strong> livrés dès 6h30, pour l'arrivée des participants.</li>
        <li><strong>Pauses gourmandes</strong> du matin et de l'après-midi, pour les journées de séminaire.</li>
        <li><strong>Plateaux repas et buffets à partager</strong> pour le déjeuner, avec un choix végétarien, viande ou poisson.</li>
        <li><strong>Cocktails</strong> de 8, 12 ou 16 pièces par personne, et <a href="/creations/animations-culinaires">animations culinaires</a> préparées devant les invités.</li>
      </ul>
      <p>Toute la carte est halal et sans porc, avec des options végétariennes, vegan et sans gluten. Nous travaillons avec des artisans : viennoiseries pur beurre, madeleines de Mado, jus Alain Milliat, yaourts de la Ferme de Viltain.</p>

      <h2>Pour les entreprises et les agences étrangères</h2>
      <p>Beaucoup d'événements organisés à Paris sont préparés depuis l'étranger. Notre <a href="/en">site existe en anglais</a>, les devis et les échanges peuvent se faire en anglais, et nous facturons avec la TVA française, qui s'applique à une prestation de traiteur réalisée à Paris, même pour une société basée hors de France.</p>

      <h2>Comment nous contacter ?</h2>
      <p>Demandez un <a href="/devis">devis</a> en indiquant l'effectif, la date et l'adresse : nous répondons sous 24 h. Commande jusqu'à la veille à 14h, livraison dans tout Paris et en Île-de-France, facture entreprise avec TVA.</p>

      <h2>Questions fréquentes</h2>
${faqHtml(FAQ_PJTM)}
    `,
  },
]
