/*
  Textes de la page « Calculateur de quantités » (FR et EN), côté serveur seulement.
  Le calcul lui-même vit dans lib/calculateurQuantites.js (léger, importé par le composant client).
  Les repères cités ici sont ceux des guides du Journal (voir l'en-tête de lib/calculateurQuantites.js).
*/
import { businessNode, BUSINESS_ID } from './site'
import { FORMULES, LIV } from './calculsPrix'
import { PDJ_DES, MINIMUM, euroFr, euroEn } from './prixEntree'

const BASE = 'https://www.lecrin-traiteur.fr'
const a = (href, t) => `<a href="${href}" style="color:var(--text-primary)">${t}</a>`
const { invitation: INV, reception: REC, celebration: CEL } = FORMULES

export const CALC_MAJ = '2026-10-25'

export const CALC = {
  fr: {
    path: '/calculateur-quantites',
    metaTitle: "Calculateur de quantités traiteur : viennoiseries, pièces cocktail | L'Écrin",
    description: `Combien de viennoiseries, de litres de café ou de pièces cocktail par personne ? Le calculateur gratuit de L'Écrin Traiteur donne les quantités et un budget indicatif HT (petit-déjeuner Classique dès ${euroFr(PDJ_DES)}, cocktail de ${euroFr(INV.prix)} à ${euroFr(CEL.prix)}).`,
    eyebrow: 'Outil gratuit · Quantités par personne',
    title: 'Calculateur de quantités pour un petit-déjeuner, une pause, un cocktail ou des plateaux repas',
    intro: "Choisissez le format et le nombre de personnes : le calculateur donne les quantités à commander et, quand nos prix le permettent, un budget indicatif HT livraison comprise.",
    sections: [
      {
        h2: 'Les repères utilisés par le calculateur',
        before: ['Ce sont les mêmes chiffres que dans nos guides du Journal, pour que le calcul et les articles disent la même chose.'],
        table: {
          head: ['Format', 'Repère par personne', 'Guide'],
          rows: [
            ['Petit-déjeuner', "2 mini-viennoiseries (3 jusqu'à 10 personnes), 1 mignardise, 1 verre de jus de 20 cl, 1 thermos d'1 L pour 6, brochette de fruits au-delà de 15 personnes", a('/journal/combien-viennoiseries-par-personne', 'Viennoiseries par personne')],
            ['Pause / goûter', '1,5 à 2 pièces sucrées pour 20 à 30 minutes, 1 boisson', a('/journal/combien-desserts-par-personne-buffet-cocktail-gouter', 'Desserts par personne')],
            ['Cocktail', `${INV.pieces} pièces pour 1 h 30 à 2 h, ${REC.pieces} pour 2 h à 2 h 30, ${CEL.pieces} à la place du dîner, 18 au-delà de 3 h ; 1 L de jus pour 4, 1 eau de 75 cl pour 5`, a('/journal/combien-pieces-cocktail-par-personne-entreprise', 'Pièces cocktail par personne')],
            ['Plateaux repas', "1 par personne présente, + 10 % si la liste n'est pas nominative ; 2 au poulet pour 1 végétarien sans information sur les régimes", a('/journal/combien-plateaux-repas-commander-reunion-entreprise', 'Combien de plateaux commander')],
          ],
        },
        after: [`Le tableau complet, format par format, est dans ${a('/journal/combien-prevoir-par-personne-traiteur-entreprise', 'combien prévoir par personne')}. Les boissons sont détaillées dans ${a('/journal/combien-boissons-par-personne-reunion-seminaire-cocktail', 'combien de boissons par personne')}.`],
      },
      {
        h2: "D'où viennent les prix",
        before: [
          `Le budget n'est calculé que pour ce dont le prix est publié : le petit-déjeuner Classique, à partir de ${euroFr(PDJ_DES)} HT par personne (le complet se chiffre sur devis), et les trois formules cocktail, ${INV.nom} à ${euroFr(INV.prix)}, ${REC.nom} à ${euroFr(REC.prix)} et ${CEL.nom} à ${euroFr(CEL.prix)} HT par personne, avec les jus et l'eau. La livraison est de ${euroFr(LIV)} HT à Paris et dans les communes proches, le minimum de commande de ${euroFr(MINIMUM)} HT.`,
          `Pour la pause et les plateaux repas, voir la page ${a('/tarifs', 'tarifs 2026')} ou demander un ${a('/devis', 'devis')}, envoyé sous 24 h.`,
        ],
      },
      {
        h2: 'Régimes alimentaires',
        before: [`Le salé est halal et sans porc, la carte sans alcool. Les options végétarien, vegan et sans gluten se demandent au devis, avec le nombre de personnes concernées. Voir notre page ${a('/traiteur-halal', 'traiteur halal')} et le guide du ${a('/journal/menu-inclusif-entreprise-halal-vegetarien-sans-gluten', 'menu inclusif en entreprise')}.`],
      },
    ],
    faq: [
      { name: 'Combien de viennoiseries par personne pour un petit-déjeuner ?', answer: "2 mini-viennoiseries par personne, 3 pour un groupe de 10 ou moins, avec 1 mignardise, 1 verre de jus et 1 thermos d'1 litre de café ou de thé pour 6." },
      { name: 'Combien de pièces cocktail par personne ?', answer: `${INV.pieces} pièces pour un cocktail d'1 h 30 à 2 h, ${REC.pieces} pour 2 h à 2 h 30 ou à la place du déjeuner, ${CEL.pieces} à la place du dîner, 18 au-delà de 3 heures.` },
      { name: 'Le budget affiché est-il un devis ?', answer: "Non, c'est un ordre de grandeur HT, livraison à Paris comprise. Le devis, envoyé sous 24 h, tient compte de l'adresse, de l'heure et des régimes." },
      { name: 'Puis-je intégrer le calculateur sur mon site ?', answer: "Oui, gratuitement : copiez le code d'intégration en bas du calculateur. Le lien « Calculateur proposé par L'Écrin Traiteur » doit rester visible." },
    ],
    breadcrumb: [{ name: 'Accueil', path: '' }, { name: 'Calculateur de quantités', path: '/calculateur-quantites' }],
    appName: 'Calculateur de quantités traiteur',
  },
  en: {
    path: '/en/calculateur-quantites',
    metaTitle: "Catering Quantity Calculator: Pastries, Canapés per Person | L'Écrin",
    description: `How many pastries, litres of coffee or canapés per person? L'Écrin Traiteur's free calculator gives the quantities and an indicative budget excl. VAT (Classique breakfast from ${euroEn(PDJ_DES)}, cocktail from ${euroEn(INV.prix)} to ${euroEn(CEL.prix)}).`,
    eyebrow: 'Free tool · Quantities per person',
    title: 'Quantity calculator for a breakfast, a break, a cocktail or lunch trays',
    intro: 'Pick the format and the number of people: the calculator gives the quantities to order and, where our prices allow it, an indicative budget excl. VAT with delivery.',
    sections: [
      {
        h2: 'The benchmarks the calculator uses',
        before: ['They are the same figures as in our Journal guides, so the calculator and the articles say the same thing.'],
        table: {
          head: ['Format', 'Per person', 'Guide'],
          rows: [
            ['Breakfast', '2 mini pastries (3 up to 10 people), 1 small sweet, one 20 cl glass of juice, one 1-litre flask per 6, fruit skewer above 15 people', a('/en/journal/combien-viennoiseries-par-personne', 'Pastries per person')],
            ['Afternoon break', '1.5 to 2 sweet bites for 20 to 30 minutes, 1 drink', a('/en/journal/combien-desserts-par-personne-buffet-cocktail-gouter', 'Desserts per person')],
            ['Cocktail', `${INV.pieces} canapés for 1.5 to 2 hours, ${REC.pieces} for 2 to 2.5 hours, ${CEL.pieces} instead of dinner, 18 beyond 3 hours; 1 L of juice per 4, one 75 cl water per 5`, a('/en/journal/combien-pieces-cocktail-par-personne-entreprise', 'Canapés per person')],
            ['Lunch trays', '1 per person present, + 10% if the list is not named; 2 chicken for 1 vegetarian without dietary information', a('/en/journal/combien-plateaux-repas-commander-reunion-entreprise', 'How many trays')],
          ],
        },
        after: [`The full table is in ${a('/en/journal/combien-prevoir-par-personne-traiteur-entreprise', 'how much to plan per person')}.`],
      },
      {
        h2: 'Where the prices come from',
        before: [
          `A budget is only calculated where the price is published: the Classique breakfast, from ${euroEn(PDJ_DES)} excl. VAT per person (the full breakfast is on quote), and the three cocktail packages, ${INV.nom} at ${euroEn(INV.prix)}, ${REC.nom} at ${euroEn(REC.prix)} and ${CEL.nom} at ${euroEn(CEL.prix)} excl. VAT per person, with juice and water. Delivery is ${euroEn(LIV)} excl. VAT in Paris and nearby towns; the minimum order is ${euroEn(MINIMUM)} excl. VAT.`,
          `For breaks and lunch trays, see the ${a('/en/tarifs', '2026 prices')} page or ask for a ${a('/en/devis', 'quote')}, sent within 24 hours.`,
        ],
      },
      {
        h2: 'Dietary needs',
        before: [`Savoury food is halal and pork-free, and the menu is alcohol-free. Vegetarian, vegan and gluten-free options are requested with the quote, along with the number of people concerned. See our ${a('/en/traiteur-halal', 'halal catering')} page.`],
      },
    ],
    faq: [
      { name: 'How many pastries per person for a breakfast?', answer: '2 mini pastries per person, 3 for a group of 10 or fewer, with 1 small sweet, 1 glass of juice and one 1-litre flask of coffee or tea per 6.' },
      { name: 'How many canapés per person?', answer: `${INV.pieces} canapés for a 1.5 to 2-hour cocktail, ${REC.pieces} for 2 to 2.5 hours or instead of lunch, ${CEL.pieces} instead of dinner, 18 beyond 3 hours.` },
      { name: 'Is the budget shown a quote?', answer: 'No, it is an order of magnitude excl. VAT, with delivery in Paris. The quote, sent within 24 hours, accounts for the address, time and dietary needs.' },
      { name: 'Can I embed the calculator on my site?', answer: 'Yes, for free: copy the embed code below the calculator. The "Calculator by L\'Écrin Traiteur" link must stay visible.' },
    ],
    breadcrumb: [{ name: 'Home', path: '/en' }, { name: 'Quantity calculator', path: '/en/calculateur-quantites' }],
    appName: 'Catering quantity calculator',
  },
}

export function calcJsonLd(lang) {
  const c = CALC[lang]
  const url = `${BASE}${c.path}`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#page`,
        url,
        name: c.title,
        inLanguage: lang,
        dateModified: CALC_MAJ,
        about: { '@id': BUSINESS_ID },
        mainEntity: { '@id': `${url}#app` },
      },
      {
        '@type': 'WebApplication',
        '@id': `${url}#app`,
        name: c.appName,
        url,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'All',
        browserRequirements: 'Requires JavaScript',
        inLanguage: lang,
        isAccessibleForFree: true,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
        description: c.description,
        provider: { '@id': BUSINESS_ID },
      },
      businessNode(),
    ],
  }
}
