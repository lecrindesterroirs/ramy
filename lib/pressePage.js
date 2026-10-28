/*
  Textes de la page « Presse » (kit média, FR et EN), côté serveur seulement.
  À propos et bio : PRESSE-PITCHS-25-OCTOBRE.md, section 4 (sans âge, lieu de naissance
  ni ancien employeur). Chiffres : lib/site.js (PROOF) et lib/prixEntree.js, jamais en dur.
  Photos : uniquement des photos réelles de L'Écrin Traiteur (aucun visuel généré,
  aucun logo de client, aucun visage), liste à valider par Ramy (25/10/2026).
*/
import { businessNode, BUSINESS_ID, PROOF } from './site'
import { PDJ_DES, euroFr, euroEn } from './prixEntree'

const BASE = 'https://www.lecrin-traiteur.fr'
const a = (href, t) => `<a href="${href}" style="color:var(--text-primary)">${t}</a>`
const dl = (href, t) => `<a href="${href}" download style="color:var(--text-primary)">${t}</a>`

const TRIPADVISOR = 'https://www.tripadvisor.fr/Restaurant_Review-g196560-d34760097-Reviews-L_Ecrin_Traiteur-Boulogne_Billancourt_Hauts_de_Seine_Ile_de_France.html'
const OM_SUMMIT = 'https://www.omsummit.fr/partenaires'
const PAGESJAUNES = 'https://www.pagesjaunes.fr/pros/64402938'
const ext = (href, t) => `<a href="${href}" target="_blank" rel="noopener" style="color:var(--text-primary)">${t}</a>`

export const PRESSE_MAJ = '2026-10-28'

const CLIENTS = 'Bain & Company, Sia Partners, Chanel, AbbVie, Carglass, Valtech, Ringover, Coyote, Le Monde, Stellantis'
const EMAIL = 'ramy@lecrin-traiteur.fr'
const TEL = '01 74 54 23 10'
const TEL_HREF = 'tel:+33760169620'

// Fichiers déjà présents dans public/ (aucune image créée pour cette page)
const LOGOS = [
  { href: '/identite/logo-lecrin-traiteur-complet.svg', fr: 'Logo complet, SVG', en: 'Full logo, SVG' },
  { href: '/identite/logo-lecrin-traiteur-complet.png', fr: 'Logo complet, PNG 2000 × 2000 px', en: 'Full logo, PNG 2000 × 2000 px' },
  { href: '/logo-lecrin.svg', fr: 'Logo seul, SVG', en: 'Logo only, SVG' },
  { href: '/icon-512.png', fr: 'Icône, PNG 512 × 512 px', en: 'Icon, PNG 512 × 512 px' },
]
const PHOTOS = [
  { href: '/presse/lecrin-traiteur-presse-1.webp', fr: "Petit-déjeuner d'entreprise dans un salon parisien (octobre 2026)", en: 'Corporate breakfast in a Paris reception room (October 2026)' },
  { href: '/presse/lecrin-traiteur-presse-2.webp', fr: 'Buffet de petit-déjeuner pour un séminaire (avril 2026)', en: 'Breakfast buffet for a seminar (April 2026)' },
  { href: '/presse/lecrin-traiteur-presse-3.webp', fr: 'Pièces cocktail salées (octobre 2026)', en: 'Savoury cocktail canapés (October 2026)' },
  { href: '/presse/lecrin-traiteur-presse-4.webp', fr: 'Petit-déjeuner buffet livré en entreprise (septembre 2026)', en: 'Breakfast buffet delivered to an office (September 2026)' },
  { href: '/octobre-rose-buffet-entreprise.webp', fr: "Buffet de petit-déjeuner Octobre Rose livré en entreprise (octobre 2026)", en: 'Pink October breakfast buffet delivered to an office (October 2026)' },
  { href: '/section-reception.webp', fr: 'Viennoiseries, cake et jus de fruits', en: 'Pastries, loaf cake and fruit juice' },
]

export const PRESSE = {
  fr: {
    path: '/presse',
    metaTitle: "Presse : kit média et contact | L'Écrin Traiteur",
    description: `Kit média de L'Écrin Traiteur : à propos, bio du fondateur, chiffres clés, clients, ressources citables, logos, photos et contact presse.`,
    eyebrow: 'Presse · Kit média',
    title: "L'Écrin Traiteur pour la presse",
    intro: `Textes, chiffres, logos et photos à reprendre librement pour parler de L'Écrin Traiteur. Une question, une interview : ${a(`mailto:${EMAIL}`, EMAIL)}.`,
    sections: [
      {
        h2: "À propos de L'Écrin Traiteur",
        before: [`L'Écrin Traiteur livre les entreprises de Paris et d'Île-de-France dès 6h30 : petits-déjeuners, plateaux repas, lunch box, goûters et cocktails. Toute la carte est halal et sans porc, avec des options végétariennes, vegan et sans gluten. Produits d'artisans, vaisselle reprise. Fondée en 2025, incubée à Incub'ESSCA, l'entreprise a déjà servi ${PROOF.entreprises.fr} entreprises et ${PROOF.personnes.fr} personnes.`],
      },
      {
        h2: 'Le fondateur, Ramy Abdelaty',
        before: ["Ramy Abdelaty a fondé L'Écrin Traiteur en 2025. Commercial de formation, diplômé d'un master en développement commercial, il a construit avec l'IA l'outil qui pilote devis, commandes, tournées et facturation."],
      },
      {
        h2: 'Chiffres clés',
        table: {
          head: ['Repère', 'Valeur'],
          rows: [
            ['Entreprises clientes', PROOF.entreprises.fr],
            ['Personnes servies', PROOF.personnes.fr],
            ['Livraison', 'Dès 6h30, Paris et Île-de-France'],
            ['Petit-déjeuner', `À partir de ${euroFr(PDJ_DES)} HT par personne`],
            ['Régimes', 'Toute la carte halal et sans porc ; options végétariennes, vegan et sans gluten'],
            ['Création', '2025'],
            ['Équipe', '3 personnes'],
            ['Incubateur', "Incub'ESSCA (Boulogne-Billancourt)"],
          ],
        },
      },
      {
        h2: 'Ils nous font confiance',
        before: [`${CLIENTS}.`],
      },
      {
        h2: 'Partenaires et réseaux',
        before: [
          `Depuis octobre 2026, L'Écrin Traiteur est adhérent de Paris je t'aime – Office de Tourisme et des Congrès de Paris, et référencé comme traiteur auprès des organisateurs d'événements. ${a('/journal/lecrin-traiteur-partenaire-officiel-paris-je-taime', "Lire l'annonce")}.`,
          `<img src="/partenaires/paris-je-taime-partenaire-officiel-2026.webp" width="240" height="121" alt="Partenaire officiel Paris je t'aime – Office de Tourisme 2026" style="display:block;max-width:240px;height:auto;margin:8px 0" loading="lazy" />`,
          `<ul><li><strong>Paris je t'aime – Office de Tourisme et des Congrès de Paris</strong> : adhérent depuis octobre 2026.</li><li><strong>${ext(OM_SUMMIT, 'Office Manager Summit')}</strong> : partenaire exposant de la 11e édition, le 17 novembre 2026 au Ground Control (Paris 12e).</li><li><strong>Incub'ESSCA</strong> : l'incubateur de l'ESSCA à Boulogne-Billancourt.</li></ul>`,
          `Nous trouver aussi sur ${ext(TRIPADVISOR, 'Tripadvisor')} et ${ext(PAGESJAUNES, 'PagesJaunes')}.`,
        ],
      },
      {
        h2: 'Ressources à citer',
        before: ['Outils et guides chiffrés, en accès libre, que vous pouvez citer avec un lien :'],
        table: {
          head: ['Ressource', 'Ce qu’on y trouve'],
          rows: [
            [a('/calculateur-quantites', 'Calculateur de quantités'), 'Viennoiseries, café, pièces cocktail et plateaux repas selon le nombre de personnes ; intégrable sur un autre site'],
            [a('/journal/combien-prevoir-par-personne-traiteur-entreprise', 'Combien prévoir par personne'), 'Le tableau des quantités, format par format'],
            [a('/journal/combien-viennoiseries-par-personne', 'Combien de viennoiseries par personne'), 'Repères pour un petit-déjeuner de 10 à 30 personnes'],
            [a('/journal/combien-pieces-cocktail-par-personne-entreprise', 'Combien de pièces cocktail par personne'), 'Selon la durée du cocktail'],
            [a('/journal/combien-plateaux-repas-commander-reunion-entreprise', 'Combien de plateaux repas commander'), 'Pour une réunion, avec la marge à prévoir'],
            [a('/journal/budget-traiteur-entreprise-paris', "Budget traiteur d'entreprise à Paris"), 'Prix par personne et par format'],
            [a('/journal/budget-petit-dejeuner-equipe-personnes', "Budget d'un petit-déjeuner d'équipe"), "Combien prévoir selon l'effectif"],
            [a('/tarifs', 'Tarifs 2026'), 'Prix par personne de chaque prestation'],
            [a('/traiteur-halal', 'Traiteur halal'), 'La carte halal et sans porc, et ce que cela veut dire chez nous'],
          ],
        },
      },
      {
        h2: 'Comment nous citer',
        before: [
          "Phrase type : « L'Écrin Traiteur, traiteur d'entreprise à Paris et en Île-de-France, livre petits-déjeuners, plateaux repas et cocktails dès 6h30, avec une carte entièrement halal et sans porc. »",
          `Lien recommandé : ${a(BASE, 'https://www.lecrin-traiteur.fr')}. Pour un chiffre tiré d'un guide, merci de lier directement le guide cité.`,
        ],
      },
      {
        h2: 'Téléchargements',
        before: [
          `<strong>Logos</strong> : ${LOGOS.map(l => dl(l.href, l.fr)).join(' · ')}.`,
          `<strong>Photos</strong> (photos réelles de nos prestations, libres de droits pour un article sur L'Écrin Traiteur, crédit « L'Écrin Traiteur ») : ${PHOTOS.map(p => dl(p.href, p.fr)).join(' · ')}.`,
        ],
      },
      {
        h2: 'Contact presse',
        before: [`Ramy Abdelaty, fondateur<br>${a(`mailto:${EMAIL}`, EMAIL)}<br>${a(TEL_HREF, TEL)}`],
      },
    ],
    breadcrumb: [{ name: 'Accueil', path: '' }, { name: 'Presse', path: '/presse' }],
  },
  en: {
    path: '/en/presse',
    metaTitle: "Press Kit: Key Facts, Logos and Contact | L'Écrin Traiteur",
    description: "L'Écrin Traiteur press kit, corporate caterer in Paris: about, founder bio, key facts, clients, citable resources, logos, photos and press contact.",
    eyebrow: 'Press · Media kit',
    title: "L'Écrin Traiteur for the press",
    intro: `Texts, figures, logos and photos you are free to use when writing about L'Écrin Traiteur. Questions or interviews: ${a(`mailto:${EMAIL}`, EMAIL)}.`,
    sections: [
      {
        h2: "About L'Écrin Traiteur",
        before: [`L'Écrin Traiteur delivers to companies in Paris and the Île-de-France region from 6:30 am: breakfasts, lunch trays, lunch boxes, afternoon breaks and cocktail receptions. The whole menu is halal and pork-free, with vegetarian, vegan and gluten-free options. Products from craft makers, tableware collected after the event. Founded in 2025 and incubated at Incub'ESSCA, the company has already served ${PROOF.entreprises.en} companies and ${PROOF.personnes.en} people.`],
      },
      {
        h2: 'The founder, Ramy Abdelaty',
        before: ["Ramy Abdelaty founded L'Écrin Traiteur in 2025. A salesman by training, with a master's degree in business development, he built with AI the tool that runs quotes, orders, delivery rounds and invoicing."],
      },
      {
        h2: 'Key facts',
        table: {
          head: ['Fact', 'Value'],
          rows: [
            ['Corporate clients', PROOF.entreprises.en],
            ['People served', PROOF.personnes.en],
            ['Delivery', 'From 6:30 am, Paris and Île-de-France'],
            ['Breakfast', `From ${euroEn(PDJ_DES)} excl. VAT per person`],
            ['Dietary needs', 'Whole menu halal and pork-free; vegetarian, vegan and gluten-free options'],
            ['Founded', '2025'],
            ['Team', '3 people'],
            ['Incubator', "Incub'ESSCA (Boulogne-Billancourt)"],
          ],
        },
      },
      {
        h2: 'They trust us',
        before: [`${CLIENTS}.`],
      },
      {
        h2: 'Partners and networks',
        before: [
          `Since October 2026, L'Écrin Traiteur has been a member of Paris je t'aime, the Paris Tourist and Convention Office, and is listed as a caterer for event organisers. ${a('/en/journal/lecrin-traiteur-partenaire-officiel-paris-je-taime', 'Read the announcement')}.`,
          `<img src="/partenaires/paris-je-taime-partenaire-officiel-2026.webp" width="240" height="121" alt="Official partner of Paris je t'aime, Paris Tourist Office, 2026" style="display:block;max-width:240px;height:auto;margin:8px 0" loading="lazy" />`,
          `<ul><li><strong>Paris je t'aime, Paris Tourist and Convention Office</strong>: member since October 2026.</li><li><strong>${ext(OM_SUMMIT, 'Office Manager Summit')}</strong>: exhibiting partner of the 11th edition, on 17 November 2026 at Ground Control (Paris 12th).</li><li><strong>Incub'ESSCA</strong>: the ESSCA business school incubator in Boulogne-Billancourt.</li></ul>`,
          `You can also find us on ${ext(TRIPADVISOR, 'Tripadvisor')} and ${ext(PAGESJAUNES, 'PagesJaunes')}.`,
        ],
      },
      {
        h2: 'Resources to cite',
        before: ['Free tools and guides with figures, which you can cite with a link:'],
        table: {
          head: ['Resource', 'What it covers'],
          rows: [
            [a('/en/calculateur-quantites', 'Quantity calculator'), 'Pastries, coffee, canapés and lunch trays for any headcount; can be embedded on another site'],
            [a('/en/journal/combien-prevoir-par-personne-traiteur-entreprise', 'How much to plan per person'), 'The quantity table, format by format'],
            [a('/en/journal/combien-viennoiseries-par-personne', 'How many pastries per person'), 'Benchmarks for a breakfast of 10 to 30 people'],
            [a('/en/journal/combien-pieces-cocktail-par-personne-entreprise', 'How many canapés per person'), 'By length of the reception'],
            [a('/en/journal/combien-plateaux-repas-commander-reunion-entreprise', 'How many lunch trays to order'), 'For a meeting, with the margin to plan'],
            [a('/en/journal/budget-traiteur-entreprise-paris', 'Corporate catering budget in Paris'), 'Price per person and per format'],
            [a('/en/journal/budget-petit-dejeuner-equipe-personnes', 'Office breakfast budget'), 'How much to plan by headcount'],
            [a('/en/tarifs', '2026 prices'), 'Price per person for every service'],
            [a('/en/traiteur-halal', 'Halal catering'), 'The halal, pork-free menu and what it means for us'],
          ],
        },
      },
      {
        h2: 'How to cite us',
        before: [
          "Suggested sentence: “L'Écrin Traiteur, a corporate caterer in Paris and Île-de-France, delivers breakfasts, lunch trays and cocktail receptions from 6:30 am, with a fully halal, pork-free menu.”",
          `Recommended link: ${a(BASE, 'https://www.lecrin-traiteur.fr')}. When quoting a figure from a guide, please link to that guide directly.`,
        ],
      },
      {
        h2: 'Downloads',
        before: [
          `<strong>Logos</strong>: ${LOGOS.map(l => dl(l.href, l.en)).join(' · ')}.`,
          `<strong>Photos</strong> (real photos of our services, free to use in an article about L'Écrin Traiteur, credit “L'Écrin Traiteur”): ${PHOTOS.map(p => dl(p.href, p.en)).join(' · ')}.`,
        ],
      },
      {
        h2: 'Press contact',
        before: [`Ramy Abdelaty, founder<br>${a(`mailto:${EMAIL}`, EMAIL)}<br>${a(TEL_HREF, '+33 7 60 16 96 20')}`],
      },
    ],
    breadcrumb: [{ name: 'Home', path: '/en' }, { name: 'Press', path: '/en/presse' }],
  },
}

// WebPage + entité Organization consolidée (même @id que le reste du site, sameAs compris)
export function presseJsonLd(lang) {
  const c = PRESSE[lang]
  const url = `${BASE}${c.path}`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#page`,
        url,
        name: c.title,
        description: c.description,
        inLanguage: lang,
        dateModified: PRESSE_MAJ,
        isPartOf: { '@id': `${BASE}/#website` },
        about: { '@id': BUSINESS_ID },
      },
      businessNode(),
    ],
  }
}
