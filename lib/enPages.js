// Pages en anglais (/en/[slug]) : mêmes faits et mêmes prix que les pages françaises.
// Un prix change en français : le corriger ici aussi. Gabarit : components/InfoPage.js.

import { EXEMPLES, eurEn } from './exemplesChiffres'

const a = (href, t) => `<a href="${href}" style="color:var(--text-primary)">${t}</a>`

const CONDITIONS = [
  "<strong>Delivery:</strong> €29 in Paris and nearby towns, from 6:30 am, at the exact time you choose, by our own team.",
  "<strong>Minimum order:</strong> €50 of products, no minimum number of guests.",
  "<strong>Lead time:</strong> order until 2 pm the day before; allow 48 hours for 50 guests or more. Quote within 24 hours, company invoice with VAT.",
]

export const EN_PAGES = {
  pricing: {
    fr: '/tarifs',
    title: 'Corporate Catering Prices in Paris (2026)',
    metaTitle: "Corporate Catering Prices in Paris 2026: Cost per Person | L'Écrin Traiteur",
    description: "2026 prices: office breakfast from €8 per person, afternoon break from €6, lunch box from €18.90, lunch tray from €28.90, cocktail reception €29.90 to €51.90. Delivery €29, quote within 24 hours.",
    eyebrow: '2026 prices · Paris & Île-de-France',
    intro: 'All our prices per person, budgets by group size and delivery terms. Prices exclude VAT, updated 17 October 2026.',
    sections: [
      {
        h2: 'Price per person, by service',
        before: ["At L'Écrin Traiteur, corporate catering costs from <strong>€6</strong> (afternoon break) to <strong>€51.90 per person</strong> (16-canapé cocktail reception), excluding VAT. The whole menu is halal and pork-free at no extra cost."],
        table: {
          head: ['Service', 'Price per person (excl. VAT)', 'What you get'],
          rows: [
            [a('/en/creations/petits-dejeuners-et-pauses', 'Classic breakfast'), '€8', 'Butter pastries, Alain Milliat juice, coffee, fresh fruit'],
            [a('/en/creations/petits-dejeuners-et-pauses', 'Full breakfast'), 'On quote', 'Classic plus madeleines or cakes, tea and fruit skewers'],
            ['Afternoon break', '€6 to €15', 'A pastry and a drink per person, up to a premium break with macarons and fruit'],
            [a('/en/creations/plateaux-repas', 'Lunch box'), '€18.90 to €21.90', 'Individual lunch, ready to eat'],
            [a('/en/creations/plateaux-repas', 'Lunch tray'), '€28.90 to €30.90', 'Starter, main course, dessert: €28.90 vegetarian, €29.90 chicken, €30.90 salmon'],
            [a('/en/creations/cocktails', 'Cocktail reception'), '€29.90 / €40.90 / €51.90', '8, 12 or 16 canapés per guest'],
          ],
        },
      },
      {
        h2: 'Classic breakfast budget by group size',
        before: ['Classic breakfast at €8 per person (butter pastries, juice, coffee, fresh fruit), delivery (€29) included. For pastries and coffee only: from €6.50 per person for 30 people, excluding delivery. The full breakfast is on quote.'],
        table: {
          head: ['Group size', 'Total excl. VAT', 'Per person'],
          rows: [
            ['10 people', '€109', '€10.90'],
            ['20 people', '€189', '€9.45'],
            ['30 people', '€269', '€8.97'],
            ['50 people', '€429', '€8.58'],
            ['100 people', '€829', '€8.29'],
          ],
        },
      },
      {
        h2: 'Other budget examples',
        table: {
          head: ['Example', 'Total excl. VAT'],
          rows: [
            ['Afternoon break for 20 people, delivery included', '€149'],
            ['20 vegetarian lunch trays, delivery included', '€607.00'],
            ['Cocktail reception for 50 guests, 12 canapés each, excluding drinks and delivery', '€2,045'],
          ],
        },
      },
      { h2: 'Delivery and terms', before: [...CONDITIONS, 'Collecting reusable tableware or equipment costs €19 on top of delivery.'] },
    ],
    faq: [
      { name: 'How much does corporate catering cost in Paris?', answer: "At L'Écrin Traiteur, from €6 per person (afternoon break) to €51.90 (16-canapé cocktail reception), excluding VAT. Office breakfast costs €8 per person (Classic; full breakfast on quote), lunch trays €28.90 to €30.90. Delivery is €29 in Paris and nearby towns." },
      { name: 'Are prices including VAT?', answer: 'No, all prices exclude VAT. You receive a company invoice with VAT.' },
      { name: 'Is there a minimum order?', answer: '€50 of products. There is no minimum number of guests.' },
    ],
  },

  'office-breakfast-paris': {
    fr: '/creations/petits-dejeuners-et-pauses',
    title: 'Office Breakfast Delivery in Paris',
    metaTitle: "Office Breakfast Delivery in Paris from €8 per Person | L'Écrin Traiteur",
    description: 'Corporate breakfast delivered to your office in Paris and La Défense from 6:30 am: butter pastries, Mado Paris madeleines, Alain Milliat juices, coffee. From €8 per person.',
    eyebrow: 'Breakfast · Paris & La Défense',
    intro: 'Butter pastries, Mado Paris madeleines, Alain Milliat juices and organic coffee, delivered from 6:30 am. From €8 per person, order until 2 pm the day before.',
    sections: [
      {
        h2: 'How much does an office breakfast cost?',
        before: ["At L'Écrin Traiteur, a Classic breakfast costs <strong>€8 per person</strong> (pastries, juice, coffee, fruit) and a full breakfast is on quote, plus €29 delivery. For 20 people, a Classic breakfast comes to €189 with delivery; for 100 people, €829."],
      },
      {
        h2: 'How much food per person?',
        table: {
          head: ['Item', 'Per person', 'How we count'],
          rows: [
            ['Mini pastries', '2 (3 for 10 people or fewer)', 'Trays of 30: croissants, pains au chocolat, raisin swirls'],
            ['Madeleine or cake', '1', 'Mado Paris madeleines; above 20 people, 1 or 2 homemade cakes'],
            ['Fruit', '1 skewer', 'From 16 people'],
            ['Hot drink', '1 cup', 'One 1-litre flask for 6 people, 4 coffee for 1 tea'],
            ['Juice', '1 glass (20 cl)', '1 litre = 5 glasses, Alain Milliat'],
          ],
        },
      },
      {
        h2: 'A real example: 100 people at 7:30 am',
        before: [`For Sia Partners, a consulting firm in Paris and a regular client, we set up large team breakfasts between 7:30 and 8:00 am. More in our ${a('/univers/cas-clients', 'case studies')} (in French).`],
      },
      { h2: 'Delivery and terms', before: CONDITIONS },
    ],
    faq: [
      { name: 'What time do you deliver breakfast?', answer: 'From 6:30 am, Monday to Friday, at the exact time you choose, in Paris and Île-de-France.' },
      { name: 'Can you deliver to La Défense?', answer: 'Yes. We deliver to La Défense, Puteaux, Courbevoie, Neuilly-sur-Seine, Boulogne-Billancourt and around twenty towns in Île-de-France.' },
      { name: 'Do you cater for dietary needs?', answer: 'Yes. Vegetarian, vegan and gluten-free options are available on request.' },
    ],
  },

  'cocktail-reception-paris': {
    fr: '/creations/cocktails',
    title: 'Corporate Cocktail Reception Catering in Paris',
    metaTitle: "Corporate Cocktail Catering in Paris: Halal, Alcohol-Free | L'Écrin Traiteur",
    description: 'Cocktail reception catering for companies in Paris: 8, 12 or 16 canapés per guest at €29.90, €40.90 or €51.90. Halal, pork-free and alcohol-free. Quote within 24 hours.',
    eyebrow: 'Cocktail reception · Paris & Île-de-France',
    intro: 'Savoury and sweet canapés for office parties, launches and inaugurations. 8, 12 or 16 pieces per guest, halal and alcohol-free.',
    sections: [
      {
        h2: 'How much does a corporate cocktail reception cost?',
        before: ["At L'Écrin Traiteur, a cocktail reception costs <strong>€29.90</strong> (8 canapés), <strong>€40.90</strong> (12) or <strong>€51.90 per guest</strong> (16), excluding VAT. For 50 guests with 12 canapés each, that is €2,045, excluding drinks and delivery."],
        table: {
          head: ['Package', 'Canapés per guest', 'Price per guest', 'Best for'],
          rows: [
            ["L'Invitation", '8', '€29.90', 'Afterwork, drinks of 1 to 2 hours'],
            ['La Réception', '12', '€40.90', 'Lunch reception'],
            ['La Célébration', '16', '€51.90', 'Dinner reception replacing a meal'],
          ],
        },
      },
      {
        h2: 'How many canapés and drinks per guest?',
        before: ['Plan 6 to 8 canapés per guest for drinks, 12 to 14 for a lunch reception and 16 to 18 for a dinner reception, and add 10% to the confirmed headcount. For drinks, we plan 1 litre of juice for 4 guests and one 75 cl bottle of water for 5. A 0% sparkling Chardonnay is available for toasts.'],
      },
      { h2: 'Delivery and terms', before: CONDITIONS },
    ],
    faq: [
      { name: 'Is the cocktail menu halal?', answer: 'Yes. Every canapé is halal and pork-free, and our drinks list is alcohol-free. We do not claim a halal certification.' },
      { name: 'How far in advance should I book a cocktail reception?', answer: 'Until 2 pm the day before; for 50 guests or more, allow at least 48 hours.' },
    ],
  },

  'halal-catering-paris': {
    fr: '/traiteur-halal',
    title: 'Halal Corporate Catering in Paris',
    metaTitle: "Halal Corporate Catering in Paris: Breakfast, Lunch, Cocktails | L'Écrin Traiteur",
    description: 'Halal and pork-free corporate catering in Paris and La Défense: breakfast from €8, lunch trays from €28.90, cocktail receptions from €29.90 per person. Alcohol-free menu, no extra cost.',
    eyebrow: 'Halal · Paris & La Défense',
    intro: 'The whole menu is halal and pork-free by default, with no alcohol: one menu for every guest, at no extra cost.',
    sections: [
      {
        h2: 'What does halal corporate catering cost in Paris?',
        before: ['Same prices as the rest of our menu, with no halal surcharge:'],
        table: {
          head: ['Service', 'Price per person (excl. VAT)'],
          rows: [
            ['Breakfast', 'from €8'],
            ['Afternoon break', 'from €6'],
            ['Lunch box', 'from €18.90'],
            ['Lunch tray', 'from €28.90'],
            ['Cocktail reception', '€29.90 to €51.90'],
          ],
        },
      },
      {
        h2: 'Halal budget examples, delivery included',
        before: ["What five typical orders cost at L'Écrin Traiteur, the whole menu being halal and pork-free at no extra cost (calculated from our price list, €29 delivery included):"],
        table: {
          head: ['Order', 'Total excl. VAT', 'Per person'],
          rows: [
            ['Classic breakfast, 20 people', eurEn(EXEMPLES[0].total), eurEn(EXEMPLES[0].parPersonne)],
            ['Classic breakfast, 50 people', eurEn(EXEMPLES[1].total), eurEn(EXEMPLES[1].parPersonne)],
            ['Lunch trays, 20 people', eurEn(EXEMPLES[2].total), eurEn(EXEMPLES[2].parPersonne)],
            ['Cocktail reception, 50 guests, 8 canapés, juice and water', eurEn(EXEMPLES[3].total), eurEn(EXEMPLES[3].parPersonne)],
            ['Cocktail reception, 100 guests, 12 canapés, juice and water', eurEn(EXEMPLES[4].total), eurEn(EXEMPLES[4].parPersonne)],
          ],
        },
      },
      {
        h2: 'What "halal" means at L\'Écrin Traiteur',
        before: ['Every dish is halal and pork-free, and no recipe contains alcohol. You have nothing to specify when ordering and no separate buffet to plan. We do not claim a halal certification: it is a halal-friendly menu, the same for every guest. Vegetarian, vegan and gluten-free options are prepared on request and labelled.'],
      },
      { h2: 'Delivery and terms', before: CONDITIONS },
    ],
    faq: [
      { name: 'Which caterer offers halal corporate catering in Paris?', answer: "L'Écrin Traiteur, based in Boulogne-Billancourt, serves a fully halal and pork-free menu with no alcohol: breakfast from €8 per person, lunch trays from €28.90, cocktail receptions from €29.90. Delivery from 6:30 am in Paris and La Défense." },
      { name: 'Is there an extra charge for halal?', answer: 'No. The whole menu is halal by default, at the same price.' },
    ],
  },

  'office-lunch-paris': {
    fr: '/creations/plateaux-repas',
    title: 'Office Lunch Delivery in Paris: Lunch Trays and Lunch Boxes',
    metaTitle: "Office Lunch Delivery in Paris: Trays from €28.90 | L'Écrin Traiteur",
    description: 'Working lunch delivered to your office in Paris: lunch trays from €28.90 and lunch boxes from €18.90 per person. Halal and pork-free, delivered at the exact time you choose.',
    eyebrow: 'Lunch · Paris & Île-de-France',
    intro: 'Individual lunch trays and lunch boxes for meetings, training days and seminars, delivered at the exact time you choose.',
    sections: [
      {
        h2: 'How much does an office lunch cost?',
        before: ["At L'Écrin Traiteur, a lunch tray costs <strong>€28.90</strong> (vegetarian), <strong>€29.90</strong> (chicken) or <strong>€30.90</strong> (salmon), and a lunch box <strong>€18.90 to €21.90</strong>, excluding VAT. 20 vegetarian trays come to €607.00 with delivery, or €30.35 per person."],
      },
      {
        h2: 'How to split dietary needs',
        before: ['If you do not know your team\'s exact split, plan one third vegetarian: 10 out of 30 people. The whole menu is halal and pork-free; vegan and gluten-free options are available on request.'],
      },
      {
        h2: 'A real example: a 3-day seminar',
        before: ['In June 2026, for a three-day seminar in Ermont (Val-d\'Oise), we delivered 59 to 71 lunch trays each day at 11:30 am in five menus (one vegetarian, two meat, two fish), plus breakfast every morning at 7:00 am.'],
      },
      { h2: 'Delivery and terms', before: CONDITIONS },
    ],
    faq: [
      { name: 'Can you deliver lunch at a precise time?', answer: 'Yes. You give us an exact time (12:30, 1:15 pm), not a time window, and we deliver to your meeting room or dining area.' },
      { name: 'Is the lunch halal?', answer: 'Yes. The whole menu is halal and pork-free by default. We do not claim a halal certification.' },
    ],
  },
}
