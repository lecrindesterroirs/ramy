/*
  Événements saisonniers, textes anglais. CÔTÉ SERVEUR SEULEMENT.

  Surcouche de texte seulement : slug, photo, date, produits liés et formats
  restent lus dans app/creations/evenements-saisonniers/evenementsData.js et
  evenementsIndex.js. La clé de chaque entrée est le slug français.

  Une page anglaise n'existe que si son entrée porte TOUS les champs de
  CHAMPS_EN (voir traductionComplete) : sinon pas de page /en, pas de
  hreflang, pas d'URL dans le sitemap. Jamais de texte français sur /en.

  Les montants sont CALCULÉS depuis lib/prixEntree.js et lib/calculsPrix.js,
  comme en français. Les dates passent par {{date}} et {{conseil}}, remplis
  au rendu par lib/evenementsCalendrier.js.

  Deux faits à ne pas inventer, tenus comme en français :
  - Octobre Rose : 1 € par convive reversé sur TOUTES les commandes d'octobre,
    pas seulement sur les goûters roses ; le total sera publié début novembre.
  - Movember : les dons se collectent sur la page de l'équipe Movember, pas
    auprès du traiteur. La facture ne couvre que le petit-déjeuner ou le goûter.
*/
import { FORMULES, LIV } from '../../calculsPrix'
import { MINIMUM, PDJ_DES, PAUSE_DES, LUNCHBOX_DES, PLATEAU_DES, euroEn } from '../../prixEntree'

/* « €8 excl. VAT » */
const px = (x) => `${euroEn(x)} excl. VAT`
/* Total delivered for n people at a price per head */
const pour = (n, pu) => px(n * pu + LIV)
const C8 = FORMULES.invitation.prix
const C12 = FORMULES.reception.prix
const C16 = FORMULES.celebration.prix
const REGLE = "Order until 10 am the day before, delivered from 6:30 am across Paris and Île-de-France; from 50 people, or across several sites, 48 hours' notice is recommended."

/* Champs sans lesquels une page anglaise n'est pas publiée. */
export const CHAMPS_EN = ['nom', 'h1', 'seoTitle', 'metaDescription', 'imgAlt', 'descCourt', 'desc', 'differentiateur', 'enBref', 'faq', 'article']

export const EN_EVENEMENTS = {
  'galette-des-rois': {
    nom: 'Galette des Rois',
    ctaNom: 'the Galette des Rois',
    h1: 'Galette des Rois at work',
    seoTitle: 'Galette des Rois for the office in Paris',
    metaDescription: 'Galettes des rois made by our partner bakers, delivered to your office in Paris and Île-de-France with drinks and coffee. On quote, in January.',
    imgAlt: "An L'Écrin Traiteur box of butter pastries on an office table",
    descCourt: 'Galettes made by our partner bakers, charm and crown included, with juice, coffee and tea. On quote.',
    desc: 'The January ritual, done properly. Our galettes are made by our partner bakers in pure butter puff pastry, with a charm and a paper crown in every one. They are offered on quote, with the drinks and coffee of a breakfast.',
    differentiateur: {
      label: 'Made by our partner bakers',
      text: 'Four flavours to choose from, charm and crown included. Tell us your headcount and we work out how many galettes you need.',
    },
    enBref: "L'Écrin Traiteur delivers galettes des rois made by our partner bakers, with Alain Milliat apple juice, coffee and tea, for a team moment in January.",
    horsCatalogue: ['Galettes des rois: frangipane, apple, chocolate and hazelnut or pistachio, charm and crown included'],
    faq: [
      { q: 'How many galettes for a team?', a: 'Allow one 6-portion galette for 5 to 6 people. For 20 people, four galettes, in two different flavours if possible. We adjust the number on the quote to your headcount.' },
      { q: "Are the galettes made by L'Écrin Traiteur?", a: 'No. They are made by our partner bakers in pure butter puff pastry, and delivered by our team with the drinks. They are offered on quote.' },
    ],
    article: {
      titre: 'How do you organise the Galette des Rois at work?',
      sections: [
        { heading: 'A ritual that brings people together at the start of the year',
          texte: 'The galette des rois is one of the few rituals in the year that naturally gathers people around a table. No pretext needed: everyone knows what it is, everyone is waiting for the charm. A baker\'s galette in pure butter puff pastry, well presented, changes the moment compared with a supermarket one on the meeting-room table.' },
        { heading: 'How much should you order for your team?',
          texte: 'Allow one 6-portion galette for 5 to 6 people, so everyone gets a decent slice. For a breakfast of 10 to 15 people, two galettes in different flavours keep it interesting. For drinks: Alain Milliat apple juice or a 0% Chardonnay, so everyone raises the same glass, and a thermos of coffee. For larger teams, hold several moments of 10 to 15 people rather than one big gathering.' },
        { heading: 'Which flavour should you choose?',
          texte: 'Frangipane is still the reference, but offering an alternative changes the experience: an apple galette for those who like things less sweet, a chocolate and hazelnut one for chocolate lovers, a pistachio one for anyone after something different. Avoid ordering several identical galettes: variety creates the surprise and gets people talking.' },
        { heading: 'Ordering in time',
          texte: `${REGLE} As the galettes are made by our partner bakers, ask for the quote a few days ahead. A slot between 9:30 and 10:30 mid-week works well; avoid the Monday of the first week of January, which is usually busy.` },
      ],
    },
  },
  'dry-january': {
    nom: 'Dry January',
    ctaNom: 'Dry January',
    h1: 'Dry January at work: an alcohol-free after-work',
    seoTitle: 'Dry January at work: an alcohol-free after-work',
    metaDescription: `An alcohol-free after-work for Dry January: mocktail bar, 0% Chardonnay, canapé reception from ${px(C8)} per person. Delivered in Paris and Île-de-France.`,
    imgAlt: "An alcohol-free mocktail bar run by an L'Écrin Traiteur bartender: citrus, fresh fruit and herbs",
    descCourt: 'A mocktail bar with a bartender, 0% Chardonnay, infusions and Alain Milliat juices. A January after-work with no alcohol.',
    desc: "In January, some of your teams take on the challenge of a month without alcohol. At L'Écrin Traiteur that is no constraint: we never serve alcohol. A bartender makes mocktails to order with citrus, fresh fruit and herbs, alongside a reception of savoury canapés. Nobody has to explain why they are not drinking.",
    differentiateur: {
      label: 'Alcohol-free all year round',
      text: 'Our whole menu is alcohol-free, all year round. Dry January changes nothing about how we serve: it just puts it in the spotlight.',
    },
    enBref: "L'Écrin Traiteur serves entirely alcohol-free after-works: savoury and sweet canapés, a mocktail bar with a bartender, 0% Chardonnay and infusions.",
    horsCatalogue: [],
    faq: [
      { q: 'Is the mocktail bar included in the reception?', a: 'No, it is quoted separately, set-up and clearing away included. The number of bartenders depends on your headcount.' },
    ],
    article: {
      titre: 'Dry January at work: an alcohol-free after-work that holds up',
      sections: [
        { heading: 'Dry January in brief',
          texte: `Dry January, known in France as the Défi de janvier, invites people not to drink alcohol for the whole of January. At work, it is the right moment for an after-work where nobody has to justify themselves. An 8-canapé reception, savoury and sweet, costs ${px(C8)} per person, which is ${pour(20, C8)} delivery included for 20 people. The mocktail bar is quoted on request, set-up and clearing away included.` },
        { heading: 'What we serve instead of alcohol',
          texte: 'The trap is replacing the wine with a bottle of water and an orange juice. What works: a mocktail bar, where a bartender makes every glass to order with citrus, fresh fruit, herbs and house syrups. For the toast, a 0% Blanc de Blancs Chardonnay. On self-service, a 10-litre dispenser of lime and ginger infusion, and Alain Milliat nectars: apricot, peach, mango.' },
        { heading: 'Why it is simple with us',
          texte: "At L'Écrin Traiteur the menu is alcohol-free all year round, and the savoury food is halal and pork-free. Dry January needs no adjustment: the same canapés, the same drinks, the same service. An alcohol-free drinks party includes everyone: those who never drink, those who are driving and those who would rather not discuss it." },
        { heading: 'Organisation and timing',
          texte: `Avoid the first week of January, usually taken up by new-year speeches and the galette. The second or third week, between 6 and 8 pm, works well. ${REGLE} For the mocktail bar, ask for the quote a few days ahead.` },
      ],
    },
  },
  'nouvel-an-chinois': {
    nom: 'Chinese New Year',
    ctaNom: 'Chinese New Year',
    h1: 'Chinese New Year at the office',
    seoTitle: 'Chinese New Year at work, delivered in Paris',
    metaDescription: `Mark Chinese New Year at the office: Asian-style platter, sushi station, Mariage Frères tea. Canapé reception from ${px(C8)} per person, delivered in Île-de-France.`,
    imgAlt: 'An Asian-style aperitif platter: maki, california rolls, spring rolls, gyozas and yakitori skewers',
    descCourt: 'A platter of maki, spring rolls, gyozas and yakitori, Mariage Frères tea. To mark the lunar new year at the office.',
    desc: 'Chinese New Year follows the lunar calendar: the next one falls on {{date}}. At the office, a platter of Asian-inspired bites, maki, california rolls, spring rolls, gyozas and yakitori skewers, is picked at standing up. Mariage Frères tea in a thermos, fresh fruit skewers to finish.',
    differentiateur: {
      label: 'Pork-free, like all our savoury food',
      text: 'Gyozas, spring rolls and yakitori skewers are pork-free, like all our savoury food. Everyone can eat everything.',
    },
    enBref: "L'Écrin Traiteur delivers a platter of Asian-inspired bites, a sushi station on request and Mariage Frères tea for Chinese New Year.",
    horsCatalogue: [],
    faq: [
      { q: 'Do you serve traditional Chinese food?', a: 'No. We offer Asian-inspired bites you can eat with one hand: maki, california rolls, spring rolls, gyozas and yakitori skewers, pork-free.' },
    ],
    article: {
      titre: 'Chinese New Year at the office: simple and done properly',
      sections: [
        { heading: 'Chinese New Year in brief',
          texte: `Chinese New Year, or the Spring Festival, follows the lunar calendar: its date changes every year, between late January and mid-February. Next edition: {{date}}. An 8-canapé reception costs ${px(C8)} per person, a Classic breakfast ${px(PDJ_DES)}, with delivery at ${px(LIV)} on top.` },
        { heading: 'What should you serve?',
          texte: 'We do not claim to cook traditional Chinese food. Our Asian platter brings together Asian-inspired bites you can eat with one hand: maki, california rolls, spring rolls, gyozas, yakitori skewers, with soy sauce, ginger and wasabi. For a larger team, the sushi and maki station makes the pieces continuously in front of your guests. For drinks, Mariage Frères tea in a thermos and a lime and ginger infusion.' },
        { heading: 'The right format for a team',
          texte: 'Chinese New Year suits a standing lunch or a short after-work. The Asian platter is shared alongside a canapé reception, and fresh fruit skewers end the moment. If colleagues celebrate it with their families, ask them what they would like to see on the table: it is the best way to make it a team moment.' },
        { heading: 'Ordering and timing',
          texte: `${REGLE} For the sushi and maki station, ask for the quote a few days ahead. Between 12 and 2 pm, or at the end of the day, 45 minutes to an hour is enough. Tell us the team's dietary needs: vegetarian, gluten-free.` },
      ],
    },
  },
  chandeleur: {
    nom: 'Candlemas',
    ctaNom: 'Candlemas',
    h1: 'Candlemas at work: crêpes delivered or a live station',
    seoTitle: 'Candlemas at work: crêpes at the office, Paris',
    metaDescription: `Crêpes made in-house delivered to the office for Candlemas, or a crêpe station on site. Breaks from ${px(PAUSE_DES)} per person, delivered in Paris.`,
    imgAlt: 'Soft crêpes made in-house, folded on a board and ready to serve',
    descCourt: 'Crêpes made in-house delivered ready to serve, or a crêpe station in your offices. For 2 February.',
    desc: 'Crêpes made in-house, generous, made to share. And for teams that want to experience it live, our crêpe and pancake station is set up in your offices: the crêpes are made in front of your teams.',
    differentiateur: {
      label: 'The crêpe station in your offices',
      text: 'Your teams help themselves and pick their own toppings. A real moment together, not just another snack.',
    },
    enBref: "L'Écrin Traiteur delivers crêpes made in-house, ready to serve, for Candlemas, or sets up a crêpe and pancake station in your offices.",
    horsCatalogue: ['Toppings: jams, chocolate spread, whipped cream'],
    faq: [
      { q: 'Delivered crêpes or a station on site: which should you choose?', a: 'Delivery is the simplest: crêpes made that morning, delivered ready to serve. The crêpe and pancake station creates more of an occasion but needs a little space and is quoted on request.' },
    ],
    article: {
      titre: 'Organising Candlemas at the office: our advice',
      sections: [
        { heading: 'Why Candlemas works so well at work',
          texte: 'Candlemas has something few events have: everyone has a childhood memory involving a crêpe. At the office the atmosphere relaxes straight away. No need to explain the idea, and it is not tied to any one exclusive tradition: it is a moment that includes everyone.' },
        { heading: 'Delivered ready to serve, or a crêpe station?',
          texte: 'Two formats are possible. Delivery: crêpes made that morning, delivered with the drinks. Simple, quick, easy to manage. The crêpe and pancake station: our team makes the crêpes in front of your colleagues. The second creates more of an occasion but needs a little more space and notice.' },
        { heading: 'The toppings',
          texte: 'Allow four or five toppings so everyone finds theirs: lemon and sugar, jam, chocolate spread, whipped cream. Tell us which when you ask for the quote. For those who prefer savoury, add a platter of savoury brioche rolls.' },
        { heading: 'What time should you hold the crêpe break?',
          texte: `Candlemas falls on {{date}}. It works well mid-morning (10 to 11 am) or as an afternoon break (4 to 5 pm). Avoid lunchtime. Thirty to forty-five minutes is enough for everyone to come through. ${REGLE}` },
      ],
    },
  },
  'saint-valentin': {
    nom: "Valentine's Day",
    ctaNom: "Valentine's Day",
    h1: "Valentine's Day at the office: an afternoon break for the team",
    seoTitle: "Valentine's Day at the office: a team break",
    metaDescription: `A Valentine's Day afternoon break to thank your teams: strawberry cake, macarons, personalised madeleines. From ${px(PAUSE_DES)} per person, delivered in Paris.`,
    imgAlt: 'A strawberry cake to share: light sponge, mousseline cream and fresh strawberries',
    descCourt: 'An afternoon break to say thank you to your teams: a strawberry cake to share, macarons, personalised madeleines.',
    desc: "Valentine's Day, office version, is not a candlelit dinner: it is an afternoon break to tell your teams they matter. A strawberry cake or a large raspberry tart to share, macarons, madeleines carrying your message.",
    differentiateur: {
      label: 'A written thank you, not a declaration',
      text: "Madeleines, macarons or cookies carrying your message, in the company's colours, on quote.",
    },
    enBref: "L'Écrin Traiteur delivers a Valentine's Day afternoon break designed for the whole team: a strawberry cake or raspberry tart to share, macarons and personalised madeleines.",
    horsCatalogue: [],
    faq: [
      { q: "How do you mark Valentine's Day at the office without making people uncomfortable?", a: "With a thank-you break for the whole team, without hearts everywhere. A cake to share, a word from the manager, madeleines with a message: nobody is left out." },
    ],
    article: {
      titre: "Valentine's Day at the office: an afternoon break for your teams, not for couples",
      sections: [
        { heading: 'Why mark it at work?',
          texte: "Valentine's Day is a celebration for couples, which is exactly why it feels awkward at work if you take it literally. The right angle is elsewhere: use the date to thank the team. An afternoon break, a word from the manager, pastries chosen with care. Nobody is left out." },
        { heading: 'What should you serve?',
          texte: 'A large cake to share makes the centre of the table: the strawberry cake, light sponge, mousseline cream and fresh strawberries, or the large raspberry tart, each for 10 to 12 people. Around it, a box of 24 macarons by Pierre Morel, a raspberry loaf cake made in-house, apple and raspberry juice. The personalised madeleines carry your message: a thank you, the team name.' },
        { heading: 'Budget',
          texte: `An afternoon break starts at ${px(PAUSE_DES)} per person, which is ${pour(20, PAUSE_DES)} delivery included for 20 people. The minimum order is ${px(MINIMUM)}. Personalised madeleines are quoted on request, according to the message and the quantity.` },
        { heading: 'Timing',
          texte: `The next Valentine's Day falls on {{date}}: choose {{conseil}}, late afternoon, between 4 and 5 pm. ${REGLE} Thirty minutes is enough: the point is to mark the moment.` },
      ],
    },
  },
  'ramadan-aid': {
    nom: 'Ramadan and Eid',
    ctaNom: 'an iftar or an Eid breakfast',
    h1: 'An iftar at the office and an Eid breakfast',
    seoTitle: 'Company iftar and Eid: halal caterer in Paris',
    metaDescription: `An iftar at the office delivered a quarter of an hour before the fast is broken, an Eid breakfast. Halal, pork-free savoury food, receptions from ${px(C8)} per person.`,
    imgAlt: 'A Lebanese wrap and pita station: shawarma, falafel, houmous and tabbouleh prepared in front of the guests',
    descCourt: 'An iftar at the office at the end of the day, and an Eid breakfast. All our savoury food is halal and pork-free, at no extra cost.',
    desc: 'Ramadan follows the lunar calendar: its date moves forward by about eleven days each year. Next edition: {{date}}. For an iftar at the office, we deliver a dinner-style reception or a savoury buffet a quarter of an hour before the fast is broken. For Eid, a team breakfast.',
    differentiateur: {
      label: 'Halal and pork-free, no separate menu',
      text: 'All our savoury food is halal and pork-free, alcohol-free, at no extra cost. Fasting or not, everyone eats the same food.',
    },
    enBref: "L'Écrin Traiteur delivers company iftars a quarter of an hour before the fast is broken, and breakfasts for Eid. The savoury food is halal and pork-free, at no extra cost.",
    horsCatalogue: ['Dates, set on the table for the breaking of the fast'],
    faq: [
      { q: 'What time do you deliver an iftar?', a: 'A quarter of an hour before the time the fast is broken that day, which you give us when you order. The buffet is in place with water and juices from the very first minute.' },
      { q: 'Do I need to order a separate halal menu?', a: 'No. All our savoury food is halal and pork-free, alcohol-free, at no extra cost. Just tell us the team\'s other dietary needs, vegetarian or gluten-free.' },
    ],
    article: {
      titre: 'Ramadan and Eid at work: an iftar at the office and a celebration breakfast',
      sections: [
        { heading: 'Ramadan in brief',
          texte: 'Ramadan follows the lunar calendar: its dates move forward by about eleven days each year and are confirmed on the Night of Doubt. Next edition: {{date}}. Eid al-Fitr marks the end of the fast, the day after the last day.' },
        { heading: 'An iftar at the office: savoury, and on time',
          texte: `A company iftar brings the team together when the fast is broken, whether people are fasting or not. Everything depends on the time: the buffet must be in place a quarter of an hour before, with water and juices from the very first minute. Then, savoury food that fills you up: a 16-canapé reception at ${px(C16)} per person, which is ${pour(30, C16)} delivery included for 30 people, or a sharing buffet such as Le Méditerranéen, with tabbouleh, falafel and aubergine caviar. For a larger team, the Lebanese station prepares chicken or beef shawarma, falafel, houmous and tabbouleh in front of the guests.` },
        { heading: 'Halal and pork-free: nothing to ask for',
          texte: "At L'Écrin Traiteur, all the savoury food is halal and pork-free, alcohol-free, all year round and at no extra cost. You do not need to order a separate menu for colleagues who are fasting. Just tell us the team's other dietary needs and the time the fast is broken on the day of your iftar: we schedule the delivery a quarter of an hour before." },
        { heading: 'The Eid breakfast',
          texte: `On the day of Eid, many colleagues take the day off. A breakfast on the day itself or the day after lets the whole team mark the celebration. The Classic breakfast is ${px(PDJ_DES)} per person, which is ${pour(20, PDJ_DES)} delivery included for 20 people; add a platter of savoury brioche rolls for those who prefer something savoury in the morning. ${REGLE}` },
      ],
    },
  },
  'journee-des-femmes': {
    nom: "International Women's Day",
    ctaNom: "International Women's Day",
    h1: "International Women's Day at work",
    seoTitle: "International Women's Day at work, Paris",
    metaDescription: `A breakfast or afternoon break for International Women's Day, 8 March: personalised madeleines, macarons. From ${px(PAUSE_DES)} per person, delivered in Paris.`,
    imgAlt: 'A loaf cake and pastries served on a round platter, with a bottle of juice',
    descCourt: 'Personalised madeleines, fine tartlets, Alain Milliat juices and Mariage Frères tea. For 8 March.',
    desc: 'A moment for the whole team, with a few words to go with it. Personalised madeleines, fine tartlets, macarons, a carefully laid table. Simple, and it means something.',
    differentiateur: {
      label: 'Personalisation',
      text: "Madeleines in your colours, careful packaging, the company's message. On quote.",
    },
    enBref: "L'Écrin Traiteur delivers a breakfast or an afternoon break for International Women's Day, with personalised madeleines, macarons and Mariage Frères tea.",
    horsCatalogue: [],
    faq: [
      { q: 'Breakfast or afternoon break for 8 March?', a: 'Both work. Breakfast opens the day; a late-afternoon break lets everyone be there, including those who come in later.' },
    ],
    article: {
      titre: 'How do you mark 8 March at work without falling into clichés?',
      sections: [
        { heading: 'A sincere gesture rather than a communications exercise',
          texte: "International Women's Day is a sensitive moment at work. Done well, it is a gesture that counts. Done badly, it rings hollow. The difference is in how sincere the gesture is and in what comes with it: a few words, some information, a concrete commitment." },
        { heading: 'The ideas that register',
          texte: "Forget generic bunches of flowers or supermarket chocolates. What registers is the care taken: personalised madeleines with packaging in the company's colours, a selection of macarons and fine tartlets, Mariage Frères tea. The point is not to spend a lot, but to show that someone thought about this moment." },
        { heading: 'Which format should you choose?',
          texte: 'Breakfast or an afternoon break? Both work. For 10 to 50 people, a help-yourself buffet in the break room works well. For a larger team, several serving points avoid queues.' },
        { heading: 'The mistakes to avoid',
          texte: `Do not limit the moment to women only: it is something the whole team shares. Do not announce it at the last minute. And do not settle for a symbolic gesture: a word from a manager or a few simple remarks give the break its meaning. The next edition falls on {{date}}. ${REGLE}` },
      ],
    },
  },
  paques: {
    nom: 'Easter',
    ctaNom: 'Easter',
    h1: 'Easter at work: a sweet break before the holidays',
    seoTitle: 'Easter at work: an afternoon break, Paris',
    metaDescription: `An Easter break at the office: chocolate mousse, chocolate loaf cake, macarons, pastries. From ${px(PAUSE_DES)} per person, delivered in Paris and Île-de-France.`,
    imgAlt: 'A box of assorted macarons in a wooden crate',
    descCourt: 'Chocolate mousse, chocolate loaf cake, macarons and pastries. A sweet break to mark the spring before the holidays.',
    desc: 'A sweet break to mark the spring with your teams before the holidays. Chocolate mousse, chocolate loaf cake, macarons, pastries and orange juice, presented simply.',
    differentiateur: {
      label: 'Chocolate, without overdoing it',
      text: 'Chocolate pastries from our menu, and on request Easter chocolates chosen from our partner makers.',
    },
    enBref: "L'Écrin Traiteur delivers an Easter break to the office: chocolate mousse, chocolate loaf cake, macarons and pastries.",
    horsCatalogue: ['Easter chocolates, chocolate eggs and bells'],
    faq: [
      { q: 'When should you hold the Easter break at the office?', a: 'The week before Easter, ideally on the Thursday or Friday morning, before the teams leave on holiday. Twenty to thirty minutes is enough.' },
    ],
    article: {
      titre: 'Organising Easter at work: the ideas that work',
      sections: [
        { heading: 'Easter at the office, a moment people forget',
          texte: 'Between the galette in January and the June events, Easter is often forgotten. Yet it is a good moment for a sweet break before the holidays: chocolate pleases almost everyone, and in late March or early April, after several weeks without a highlight, teams appreciate getting together.' },
        { heading: 'Chocolate, as pastry',
          texte: 'A selection of chocolate pastries makes a real break: chocolate mousse in individual pots, a sliced chocolate chip loaf cake, macarons. On request, we add Easter chocolates chosen from our partner makers.' },
        { heading: 'The simplest format',
          texte: 'A help-yourself buffet in the break room with the pastries, a few viennoiseries and fruit juices. A 20 to 30 minute break mid-morning is enough. Add pastries for anyone who does not eat chocolate.' },
        { heading: 'Timing',
          texte: `The next Easter Sunday falls on {{date}}. Hold the break the week before, on the Thursday or Friday morning. ${REGLE}` },
      ],
    },
  },
  'semaine-qvt': {
    nom: 'Quality of Working Life Week',
    ctaNom: 'Quality of Working Life Week',
    h1: 'Quality of Working Life Week: a wellbeing breakfast',
    seoTitle: 'Quality of Working Life Week: a wellbeing breakfast',
    metaDescription: `A wellbeing breakfast for the French Quality of Working Life Week: fresh fruit, pressed juice, farm yoghurts, juice bar. From ${px(PDJ_DES)} per person.`,
    imgAlt: 'A fresh juice bar: fruit and vegetables pressed to order in front of the guests',
    descCourt: 'Wellbeing breakfasts, freshly pressed juice, fresh fruit, farm yoghurts. For the French quality of working life week.',
    desc: 'Every June, the French Quality of Working Life Week puts the subject on the table. A well-thought-out breakfast is a concrete way to take part: freshly pressed orange juice, fresh fruit skewers, yoghurts from the Ferme de Viltain, compotes with no added sugar. Or a fresh juice bar set up in your offices.',
    differentiateur: {
      label: 'The fresh juice bar',
      text: 'Orange, grapefruit, carrot-orange-ginger, cucumber-mint-lime, pressed to order in your offices. On quote.',
    },
    enBref: "L'Écrin Traiteur delivers wellbeing breakfasts for the Quality of Working Life Week: fresh fruit, pressed juice, farm yoghurts, and a fresh juice bar on request.",
    horsCatalogue: [],
    faq: [
      { q: 'Who organises the Quality of Working Life Week?', a: 'The Anact-Aract network, every June. Companies plan workshops, talks and team moments; a breakfast often opens the week.' },
    ],
    article: {
      titre: 'Quality of Working Life Week: a breakfast that matches the message',
      sections: [
        { heading: 'The week in brief',
          texte: `The Semaine pour la qualité de vie et des conditions de travail is organised every June by the Anact-Aract network. Companies plan workshops, talks and team moments. A breakfast to open the week costs ${px(PDJ_DES)} per person on the Classic format, which is ${pour(20, PDJ_DES)} delivery included for 20 people.` },
        { heading: 'What goes on the table',
          texte: 'Fresh fruit, as skewers or in a basket, rather than a platter of pastries on its own. Farm yoghurts from the Ferme de Viltain and granola yoghurts. Apple compotes with no added sugar. Freshly pressed orange juice rather than a nectar. Keep a few pastries: a wellbeing breakfast nobody fancies misses its point.' },
        { heading: 'The fresh juice bar',
          texte: 'To mark the week, the fresh juice bar is set up in your offices: orange, grapefruit, apple, fresh lemonade, and blends such as carrot-orange-ginger or cucumber-mint-lime, pressed in front of each colleague. It is quoted on request, set-up and clearing away included.' },
        { heading: 'Organisation',
          texte: `Open the week with the breakfast, on the Monday or Tuesday between 8:30 and 9:30, and keep the juice bar for a high point mid-week. ${REGLE} The fruit skewers are vegan and gluten-free, the banana bread is gluten-free.` },
      ],
    },
  },
  'fete-de-la-musique': {
    nom: 'Fête de la Musique',
    ctaNom: 'the Fête de la Musique',
    h1: 'Fête de la Musique at the office: a summer after-work',
    seoTitle: 'Fête de la Musique: a company after-work in Paris',
    metaDescription: `A 21 June after-work at the office: mini burgers, canapé reception, mocktail bar, 0% Chardonnay. From ${px(C8)} per person, delivered in Paris.`,
    imgAlt: 'A platter of mini burgers on skewers, ready to serve for a summer after-work',
    descCourt: 'An alcohol-free summer after-work: mini burgers, a canapé reception, a mocktail bar, 0% Chardonnay.',
    desc: 'On 21 June, the city takes to the streets at the end of the day. At the office, it is the moment for an after-work before everyone heads off to the concerts. Mini burgers, wraps, an 8-canapé reception, and for drinks a mocktail bar, 0% Chardonnay and a dispenser of chilled infusion.',
    differentiateur: {
      label: 'Everyone raises a glass',
      text: 'Mocktails, 0% Chardonnay, infusions: no bottles of alcohol to manage, and the same glass for everyone.',
    },
    enBref: "L'Écrin Traiteur delivers alcohol-free 21 June after-works: mini burgers, mini wraps, a canapé reception and a mocktail bar.",
    horsCatalogue: [],
    faq: [
      { q: 'What time should the 21 June after-work be?', a: 'Between 5:30 and 7:30 pm: everyone then has time to join the concerts.' },
    ],
    article: {
      titre: 'Fête de la Musique at the office: a summer after-work, alcohol-free',
      sections: [
        { heading: 'Fête de la Musique in brief',
          texte: `The Fête de la Musique takes place every 21 June; the next one falls on {{date}}. An after-work at the office between 5:30 and 7:30 pm leaves everyone time to join the concerts. An 8-canapé reception costs ${px(C8)} per person, which is ${pour(30, C8)} delivery included for 30 people.` },
        { heading: 'What should you serve?',
          texte: `Savoury food eaten standing, with one hand: a platter of 24 mini burgers, mini rolled wraps with chicken or smoked salmon, club sandwiches. The 8-canapé reception adds finer bites and a few sweet things. For a longer after-work, move up to the 12-canapé format, at ${px(C12)} per person.` },
        { heading: 'Cold drinks, alcohol-free',
          texte: 'In June it is hot and people drink a lot: allow plenty. A 10-litre dispenser of passion fruit or lime and ginger infusion, Alain Milliat juices, sparkling water, and a 0% Blanc de Blancs Chardonnay for the toast. To make the after-work an occasion, add a mocktail bar, on quote. The whole menu is alcohol-free, and the savoury food is halal and pork-free.' },
        { heading: 'Ordering and organisation',
          texte: `${REGLE} If you have a terrace or a courtyard, serve outside. The music is up to you: a speaker and a team playlist are enough.` },
      ],
    },
  },
  'fete-de-fin-dannee': {
    nom: 'End-of-year party',
    ctaNom: 'the end-of-year party',
    h1: 'A company end-of-year party in June',
    seoTitle: 'A company end-of-year party in June, Paris',
    metaDescription: `Close the season in June: dinner-style reception from ${px(C8)} per person, cheese and salmon platters, desserts. Delivered in Paris and Île-de-France.`,
    imgAlt: 'Dinner-style reception canapés on a round platter: glass pots, tartlets and mini sandwiches',
    descCourt: 'A dinner-style reception, sharing platters or lunch trays. To close the season before the summer break.',
    desc: 'The moment to close a season with a proper table. A dinner-style reception, aged cheese and salmon platters to share, or lunch trays. Before people leave on holiday.',
    differentiateur: {
      label: 'Your choice of format',
      text: 'A dinner-style reception, sharing platters or lunch trays: we work to your headcount and your format.',
    },
    enBref: "L'Écrin Traiteur delivers company end-of-year parties in June: dinner-style reception, sharing platters and desserts, alcohol-free.",
    horsCatalogue: [],
    faq: [
      { q: 'Why hold the end-of-year party in June rather than December?', a: 'December is crowded and diaries are full. In June, first-half projects close and the team is still complete before people leave on holiday.' },
    ],
    article: {
      titre: "Organising your company's end-of-year party in June",
      sections: [
        { heading: 'Why June and not December?',
          texte: 'December is crowded: diaries are full and family and friends\' parties pile up. June is different: first-half projects close, and the team is still complete before people leave on holiday. It is also the start of summer, a more relaxed time.' },
        { heading: 'A dinner-style reception, platters or a seated meal?',
          texte: 'A dinner-style reception encourages conversation: everyone moves around and mixes. Sharing platters are more generous and sociable. A seated meal creates a genuine collective pause, but needs more logistics. For a team of fewer than 30, the dinner-style reception is the simplest; beyond that, a mix of seated and standing areas works well.' },
        { heading: 'What makes a good celebration table',
          texte: `Variety: aged cheese and salmon platters to start, savoury bites, fresh glass pots for the summer, then desserts to share. A 12-canapé reception costs ${px(C12)} per person. For drinks, Alain Milliat juices, sparkling water and a 0% Blanc de Blancs Chardonnay for the toast, alcohol-free so everyone raises the same glass.` },
        { heading: 'Practical arrangements',
          texte: `Plan the event between 6 and 9 pm and announce the date at least three weeks ahead. A terrace or an outdoor space is a real plus in June. Think about a few high and low tables to make conversation easier. ${REGLE}` },
      ],
    },
  },
  ete: {
    nom: 'Summer',
    ctaNom: 'a summer get-together',
    h1: 'Summer at the office: cool breaks and small teams',
    seoTitle: 'Summer catering for companies: cool breaks, Paris',
    metaDescription: `Cool breaks, lunch boxes from ${px(LUNCHBOX_DES)}, an ice cream bar for the drinks before the holidays. Minimum order ${px(MINIMUM)}, delivered in Paris and Île-de-France.`,
    imgAlt: 'An artisan ice cream bar: tubs of ice cream and toppings served by the scoop',
    descCourt: 'Cool breaks, lunch boxes for smaller teams, an ice cream bar for the drinks before the holidays.',
    desc: 'In July and August, offices are half empty and it is hot. The formats change: cool breaks rather than pastries, lunch boxes for a small team, an ice cream bar for a drinks party before the holidays.',
    differentiateur: {
      label: 'Small teams too',
      text: `A minimum order of ${px(MINIMUM)}: a team of five orders just like a team of fifty.`,
    },
    enBref: "L'Écrin Traiteur delivers cool breaks in summer, lunch boxes for smaller teams and an artisan ice cream bar for the drinks before the holidays.",
    horsCatalogue: [],
    faq: [
      { q: 'Do you deliver to small teams in summer?', a: `Yes. The minimum order is ${px(MINIMUM)}, all year round: lunch boxes for five to eight people still at the office are enough.` },
    ],
    article: {
      titre: 'Summer at the office: cool breaks, after-works and smaller teams',
      sections: [
        { heading: 'What changes in summer',
          texte: 'Between mid-July and the end of August, part of the team is on holiday and the rest is working through the heat. Pastry platters and hot drinks go down less well. What works: fresh fruit, plenty of cold drinks, individual formats for small teams, and one last drinks party before people leave.' },
        { heading: 'Cool breaks',
          texte: `Fresh fruit skewers, a panna cotta with red fruit or a lemon curd pot. For drinks, a 10-litre dispenser of lime and ginger or passion fruit infusion, or water infused with fruit and fresh herbs. An afternoon break starts at ${px(PAUSE_DES)} per person, which is ${pour(20, PAUSE_DES)} delivery included for 20 people.` },
        { heading: 'Smaller teams',
          texte: `For five to eight people still at the office, the lunch box is the simplest format: a sandwich, a starter and a dessert per person, from ${px(LUNCHBOX_DES)}. For eight people, allow ${pour(8, LUNCHBOX_DES)} delivery included. The minimum order is ${px(MINIMUM)}, and the rule is the same all year: order until 10 am the day before, delivered from 6:30 am.` },
        { heading: 'The drinks party before the holidays',
          texte: `In mid-July, before the big departures, an after-work on the terrace brings the team together one last time. The artisan ice cream bar is set up on site: vanilla, chocolate, pistachio, strawberry, lemon, coffee, with coulis, salted butter caramel and red fruit. It is quoted on request, set-up and collection of the equipment included. For something savoury, an 8-canapé reception at ${px(C8)} per person.` },
      ],
    },
  },
  rentree: {
    nom: 'Back to work',
    ctaNom: 'the return to work',
    h1: 'A back-to-work breakfast at the office',
    seoTitle: 'A back-to-work breakfast for companies, Paris',
    metaDescription: `A back-to-work breakfast delivered from ${px(PDJ_DES)} per person: pastries, organic coffee, Mariage Frères tea, fruit. Delivery ${px(LIV)} in Paris, from 6:30 am.`,
    imgAlt: 'Butter croissants and pains au chocolat laid out on a board',
    descCourt: 'Pastries from our partner bakers, organic coffee, Mariage Frères tea and a personalised welcome message.',
    desc: 'A return to the office that sets the tone. Bakery pastries, organic coffee and tea in thermoses, fresh fruit, and on request a chocolate plaque carrying the welcome message. A way of saying that the year beginning matters.',
    differentiateur: {
      label: 'A welcome message',
      text: "A chocolate plaque carrying a message or the company's logo, made to order: allow a few extra days.",
    },
    enBref: "L'Écrin Traiteur delivers back-to-work breakfasts to the office: butter pastries, organic coffee, Mariage Frères tea, juice and fresh fruit.",
    horsCatalogue: ['Personalised chocolate plaque (message or logo)'],
    faq: [
      { q: 'How much coffee for 20 people?', a: 'A one-litre thermos serves six to eight cups. For twenty people coming back from holiday, allow two to three thermoses of coffee and one of tea.' },
    ],
    article: {
      titre: 'A back-to-work breakfast: how do you welcome your teams properly?',
      sections: [
        { heading: 'September, a pivotal moment',
          texte: 'After the summer, your teams come back with a fresh view of their work. The first days back set the tone for the year. A carefully made back-to-work breakfast sends a clear message: the company is thinking about its teams.' },
        { heading: 'What makes a good back-to-work breakfast',
          texte: "Pastries from a real bakery, pure butter, shaped that same morning. Organic coffee in a thermos and a Mariage Frères tea. And one element of personalisation, such as a chocolate plaque carrying the team's message: something that marks the return as a moment chosen." },
        { heading: 'New joiners',
          texte: 'September is often a time for new arrivals. A back-to-work breakfast is the occasion to bring them into the team: an informal moment over a coffee allows the introductions that meetings do not create. If people are starting in September, hold it in the first week of the month.' },
        { heading: 'How much to allow per person',
          texte: 'Two pastries per person if they are served on their own, one and a half if there is also fruit and yoghurt. One thermos holds a litre, which is six to eight cups: for twenty people, allow two to three thermoses of coffee, not one. Allow one litre of juice for six to seven glasses, so two litres for twenty people.' },
        { heading: 'The budget',
          texte: `A back-to-work breakfast on the Classic format starts at ${px(PDJ_DES)} per person: pastries, a basket of freshly cut fruit, coffee and juice, which is ${pour(20, PDJ_DES)} delivery included for 20 people. A full breakfast is quoted on request, as is the personalised chocolate plaque. Delivery is ${px(LIV)} in Paris and nearby towns, and the minimum order is ${px(MINIMUM)}.` },
        { heading: 'When to order, and what time to serve',
          texte: `${REGLE} For the chocolate plaque, made to order, allow a few extra days. The Tuesday or Wednesday morning of the first full week of September, between 8:30 and 9:30, is the best moment. Allow 45 minutes to an hour.` },
      ],
    },
  },
  'journee-mondiale-du-cafe': {
    nom: 'International Coffee Day',
    ctaNom: 'International Coffee Day',
    h1: 'International Coffee Day: a barista at the office',
    seoTitle: 'International Coffee Day: a barista at work',
    metaDescription: `On 1 October, a barista in your offices or thermoses of coffee with madeleines and cookies. Breakfast from ${px(PDJ_DES)} per person, delivered in Paris.`,
    imgAlt: 'A barista making coffee at a counter set up in an office',
    descCourt: 'A barista in your offices, or thermoses of coffee with madeleines and cookies. For 1 October.',
    desc: 'On 1 October it is International Coffee Day. At the office, the most-drunk drink of the day deserves a moment of its own. A barista makes espresso, cappuccino, latte and flat white to order. For a simpler format, thermoses of coffee with madeleines, cookies and babka.',
    differentiateur: {
      label: 'The barista and their machine',
      text: 'Everyone orders their drink and watches it being made, with plant-based milks. On quote.',
    },
    enBref: "L'Écrin Traiteur sets up a barista in your offices for International Coffee Day, or delivers thermoses of organic coffee with madeleines and cookies.",
    horsCatalogue: [],
    faq: [
      { q: 'How many thermoses of coffee for 20 people?', a: 'A one-litre thermos serves six to eight cups. For twenty people, allow three thermoses of coffee and one of Mariage Frères tea.' },
    ],
    article: {
      titre: 'International Coffee Day: a barista at the office, on 1 October',
      sections: [
        { heading: 'International Coffee Day in brief',
          texte: `International Coffee Day takes place every 1 October, at the initiative of the International Coffee Organization. The next one falls on {{date}}. At the office, it is a simple excuse for a breakfast built around coffee: the Classic format is ${px(PDJ_DES)} per person, which is ${pour(20, PDJ_DES)} delivery included for 20 people.` },
        { heading: 'A barista in your offices',
          texte: 'The format people remember: a barista sets up their machine and makes espresso, cappuccino, latte, flat white and teas to order, with plant-based milks. It is quoted according to headcount, duration and power access; set-up and clearing away are included. For a full day of self-service, hiring a professional espresso machine is an alternative.' },
        { heading: 'How much coffee to allow',
          texte: 'If you stick to thermoses: a one-litre thermos serves six to eight cups, and many come back for a second cup. For twenty people, allow three thermoses of coffee and one of Mariage Frères tea.' },
        { heading: 'What goes with the coffee',
          texte: `Madeleines baked that day, cookies by Laura Todd, a sliced chocolate babka, a marble loaf cake made in-house. Things you hold in one hand, with a cup in the other. ${REGLE}` },
      ],
    },
  },
  'octobre-rose': {
    nom: 'Pink October',
    ctaNom: 'Pink October',
    h1: 'Pink October at work',
    seoTitle: 'Pink October at work: a charity break, Paris',
    metaDescription: `Pink October at the office: pink madeleines, macarons, raspberry loaf cake. €1 per guest donated on every October order. From ${px(PAUSE_DES)} per person.`,
    imgAlt: "A Pink October buffet delivered to a company by L'Écrin Traiteur: pastries, pink madeleines, fruit skewers and pink decorations",
    descCourt: 'Pink madeleines, macarons, raspberry loaf cake and apple and raspberry juice. €1 per guest donated on every October order.',
    desc: 'An afternoon break to raise awareness of breast cancer screening among your teams. Pink madeleines, macarons, raspberry loaf cake and tart. And a commitment with a figure attached: on every order we deliver in October, we donate €1 per guest to breast cancer research.',
    differentiateur: {
      label: '€1 donated per guest',
      text: 'On every October order, not only on the pink breaks. The total will be published on this page in early November.',
    },
    enBref: "In October, L'Écrin Traiteur donates €1 per guest served to breast cancer research, on every order, and delivers pink afternoon breaks to the office: madeleines, macarons, raspberry loaf cake.",
    horsCatalogue: ['Packaging with a pink ribbon', 'Red-fruit smoothie'],
    faq: [
      { q: 'Does the donation only apply to the pink breaks?', a: 'No. In October we donate €1 per guest served on every order: a breakfast for 40 people means a €40 donation. The donation receipt is available on request.' },
    ],
    article: {
      titre: 'Pink October at work: how do you commit in practice?',
      sections: [
        { heading: 'Why act as a company?',
          texte: 'Pink October is the annual campaign to raise awareness of breast cancer screening. At work, taking part shows your teams that the organisation pays attention to things beyond the daily job. Your teams are concerned, personally or through someone close to them. A collective gesture, even a simple one, creates a space for solidarity.' },
        { heading: 'A charity afternoon break',
          texte: 'The idea is simple: an afternoon break in the colours of the cause. Pink madeleines, macarons, raspberry loaf cake and tart, apple and raspberry juice. This format makes it possible to raise a serious subject in a sociable moment, without slipping into something heavy.' },
        { heading: 'Keeping it consistent with the cause',
          texte: 'A Pink October break gains meaning when it comes with real information. Put up the screening recommendations, offer a link to the resources of the Ligue contre le cancer, encourage the women on your teams to book an appointment. The break creates the occasion, the information does the rest.' },
        { heading: 'The details',
          texte: 'Madeleines with pink packaging in your company colours, a ribbon on every pack, careful presentation. Announce the event in advance on your internal channels so your teams can look forward to it.' },
        { heading: 'Our commitment: €1 per guest donated',
          texte: 'Throughout the month of October, we donate €1 for every guest served to breast cancer research. Every order counts, not only the pink breaks: a breakfast for 40 people means a €40 donation. The total will be published on this page in early November, and the donation receipt is available on request.' },
      ],
    },
  },
  'semaine-du-gout': {
    nom: 'Taste Week',
    ctaNom: 'Taste Week',
    h1: 'Taste Week: a tasting at the office',
    seoTitle: 'Taste Week at work: an office tasting, Paris',
    metaDescription: `An office tasting for France's Semaine du goût: aged cheese station, Alain Milliat juices tasted blind, artisan pastries. Breaks from ${px(PAUSE_DES)} per person.`,
    imgAlt: 'An aged cheese station: cheeses, artisan breads, fresh fruit and dried fruit laid out in front of the guests',
    descCourt: "A tasting at the office: aged cheeses, Alain Milliat juices, pastries from artisans. For France's Taste Week, in mid-October.",
    desc: "France's Semaine du goût comes round every year in mid-October. At the office, it is the occasion for a real tasting rather than one more buffet: an aged cheese station, a comparison of Alain Milliat juices, pastries signed by artisans. You taste, you compare, you talk about it.",
    differentiateur: {
      label: 'Our artisans',
      text: 'Macarons by Pierre Morel, cream puffs by Philippe Urraca, Meilleur Ouvrier de France, cookies by Laura Todd, Alain Milliat juices. Names worth discovering.',
    },
    enBref: "L'Écrin Traiteur runs office tastings for Taste Week: an aged cheese station, Alain Milliat juices compared blind, artisan pastries.",
    horsCatalogue: [],
    faq: [
      { q: 'How do you run a juice tasting at the office?', a: 'Line up four or five Alain Milliat juices and nectars, taste them blind in small glasses, then reveal the names. A litre of each goes round a team of twenty.' },
    ],
    article: {
      titre: 'Taste Week at work: organising a tasting at the office',
      sections: [
        { heading: 'Taste Week in brief',
          texte: `The Semaine du goût takes place every year in mid-October and invites people to discover products and craft. At the office, a tasting break starts at ${px(PAUSE_DES)} per person, which is ${pour(20, PAUSE_DES)} delivery included for 20 people; the cheese station is quoted on request.` },
        { heading: 'A juice tasting',
          texte: 'The simplest format: line up four or five Alain Milliat juices and nectars, apple, orange, apricot, peach, tomato, alongside the orchard apple juice from the Yvelines, and taste them blind. Everyone notes their favourites, and the names are revealed at the end. Small glasses are enough: a litre of each goes round a team of twenty.' },
        { heading: 'The aged cheese station',
          texte: 'To go further, the cheese station is set up in your offices: comté, goat cheeses, blue cheeses and bloomy rinds cut to order and explained to anyone who wants to know more, with artisan breads, honey and seasonal fruit. Set-up and clearing away included.' },
        { heading: 'Sweet things from artisans',
          texte: `For the sweet side, go for signed pieces: macarons by Pierre Morel, with Italian meringue shells, cream puffs by Philippe Urraca, Meilleur Ouvrier de France, very thin cookies by Laura Todd. ${REGLE}` },
      ],
    },
  },
  halloween: {
    nom: 'Halloween',
    ctaNom: 'Halloween',
    h1: 'Halloween at work: an afternoon break or an after-work',
    seoTitle: 'Halloween catering for companies in Paris',
    metaDescription: `A Halloween break at the office from ${px(PAUSE_DES)} per person: black macaron, pumpkin madeleine, cookies. After-works from ${px(C8)}. Delivered in Paris.`,
    imgAlt: 'A black Halloween macaron, cocoa shell and spiced vanilla pumpkin centre',
    descCourt: 'The black vanilla macaron with a spiced pumpkin centre, the pumpkin madeleine, cookies, or an alcohol-free canapé reception for an after-work.',
    desc: 'An afternoon break out of the ordinary, led by the black vanilla macaron with a spiced pumpkin centre. Around it: the pumpkin madeleine in white chocolate and orange, cookies, fresh fruit skewers. Or an 8-canapé reception for after-work drinks.',
    differentiateur: {
      label: "The season's black macaron",
      text: 'By Pierre Morel: a cocoa shell, a vanilla ganache and a pumpkin centre with cinnamon. Served as it comes on an afternoon platter, or at the end of a reception.',
    },
    enBref: "L'Écrin Traiteur delivers Halloween afternoon breaks to the office, with the black pumpkin macaron and the pumpkin madeleine, and orange and black after-works with no alcohol.",
    horsCatalogue: ['Black macaron, vanilla with a spiced pumpkin centre, by Pierre Morel', 'Pumpkin madeleine, white chocolate and orange'],
    faq: [
      { q: 'Should fancy dress be compulsory?', a: 'No. Offer it as an option, never as an obligation. A small competition with a prize creates fun without forcing anyone.' },
    ],
    article: {
      titre: 'Halloween at work: what if we dared?',
      sections: [
        { heading: 'Halloween in brief',
          texte: `The next Halloween falls on {{date}}: hold it on {{conseil}}. An afternoon break costs from ${px(PAUSE_DES)} per person, an 8-canapé reception ${px(C8)} per person, with delivery at ${px(LIV)} on top. Order until 10 am the day before, delivered from 6:30 am. The savoury reception is halal and pork-free, with no alcohol.` },
        { heading: 'The black macaron, vanilla with a spiced pumpkin centre',
          texte: 'By Pierre Morel, pastry chef in La Gacilly: a cocoa shell, almost black, a vanilla ganache, and at the centre a pumpkin filling lifted with cinnamon. The pumpkin brings a roundness that balances the vanilla, and the spice wakes the whole thing up. It is served as it comes on an afternoon platter, or at the end of a reception.' },
        { heading: 'The pumpkin madeleine, white chocolate and orange',
          texte: 'A soft white chocolate madeleine, lifted with a touch of orange, moulded as a pumpkin and drawn on in dark chocolate. It holds in one hand, shares without cutlery, and makes its effect on an afternoon table without anyone having to decorate the room. It arrives ready, does not melt, and waits for break time.',
          imgAlt: 'A Halloween madeleine shaped like a pumpkin, white chocolate and orange, with a face drawn in dark chocolate' },
        { heading: 'What works, and what is better avoided',
          texte: 'The most common mistake: putting supermarket sweets on a table and calling it an event. What works is a real afternoon break: madeleines in the colours of the day, cookies, fresh fruit, a table that hangs together. Your teams can tell straight away whether the moment was prepared.' },
        { heading: 'Should fancy dress be compulsory?',
          texte: 'No, and making it so is often counterproductive. Some of your teams will be enthusiastic, others less so. Offer fancy dress as an option, never as an obligation. A competition with a small prize creates fun without forcing anyone.' },
        { heading: 'Budget and timing',
          texte: `An afternoon break starts at ${px(PAUSE_DES)} per person, which is ${pour(20, PAUSE_DES)} delivery included for 20 people; the Classic breakfast is ${px(PDJ_DES)} and the 8-canapé reception ${px(C8)} per person. Hold it mid-afternoon, on {{conseil}}. Thirty to forty-five minutes is enough for everyone to take part.` },
      ],
    },
  },
  movember: {
    nom: 'Movember',
    ctaNom: 'Movember',
    h1: 'Movember at work: a launch and a close at the office',
    seoTitle: 'Movember catering for companies in Paris',
    metaDescription: `Movember at the office: a launch breakfast and a closing afternoon break, from ${px(PAUSE_DES)} per person, delivery ${px(LIV)}. Delivered from 6:30 am in Paris.`,
    imgAlt: "A marble loaf cake made in-house, vanilla and chocolate, sliced on a wooden board: an afternoon break delivered to a company by L'Écrin Traiteur",
    descCourt: `Launching and closing Movember at the office: a breakfast and an afternoon break delivered from ${px(PAUSE_DES)} per person.`,
    desc: `Movember runs for the whole of November. For the launch, a breakfast on the first working day of the month; for the close, an afternoon break with the prize-giving in the last week. Delivered from 6:30 am across Paris and Île-de-France, from ${px(PAUSE_DES)} per person, with delivery at ${px(LIV)} on top.`,
    differentiateur: {
      label: 'Two dates are enough',
      text: 'A launch at the start of the month and a close at the end. Donations are collected on your Movember team page, not through the caterer.',
    },
    enBref: "L'Écrin Traiteur delivers the Movember launch breakfast and closing afternoon break to the office.",
    horsCatalogue: [],
    faq: [
      { q: "Can we donate to Movember through the caterer's invoice?", a: 'No. Donations are collected on the Movember team page. The invoice covers only the breakfast or the afternoon break delivered.' },
    ],
    article: {
      titre: 'Movember at work: two dates are enough',
      sections: [
        { heading: 'Movember in brief',
          texte: `Movember runs through the whole of November: participants start clean-shaven on 1 November and grow a moustache. At the office, allow a launch breakfast on the first working day of the month, at ${px(PDJ_DES)} per person, and a closing afternoon break in the last week, from ${px(PAUSE_DES)} per person. For 20 people, that comes to ${pour(20, PDJ_DES)} and ${pour(20, PAUSE_DES)}, delivery included each time.` },
        { heading: 'What Movember supports',
          texte: 'Movember supports three causes: mental health and suicide prevention, prostate cancer and testicular cancer. A company can sign up on its own, create a team, or start a competition between several offices. Donations are collected on the Movember team page, not through the caterer: the invoice covers only the breakfast or the afternoon break delivered.' },
        { heading: 'What can you organise at the office?',
          texte: 'The Movember guide suggests a collective shave for the launch, a quiz with neighbouring companies, health conversations, a donation box in the break room and a prize-giving at the end of the month. Anyone who does not want a moustache can walk or run 60 km over the month, or invent their own challenge. Taking part stays voluntary.' },
        { heading: 'Ordering and dietary needs',
          texte: `${REGLE} Tell us the team's dietary needs when you ask for the quote: vegetarian, vegan, gluten-free. The madeleines can be personalised in the colours of the event, on quote.` },
      ],
    },
  },
  thanksgiving: {
    nom: 'Thanksgiving',
    ctaNom: 'Thanksgiving',
    h1: 'Thanksgiving in Paris: the team meal',
    seoTitle: 'Thanksgiving catering for companies in Paris',
    metaDescription: `Thanksgiving for American teams in Paris: dinner-style reception from ${px(C8)} per person, sharing buffets, a bagel station, carrot cake.`,
    imgAlt: 'A carrot cake made in-house, sliced on a wooden board',
    descCourt: 'For American companies in Paris: a sharing buffet, a dinner-style reception, a bagel station, carrot cake.',
    desc: 'Thanksgiving falls on the fourth Thursday of November. For an American company in Paris, it is the team meal of the autumn. A sharing buffet or a dinner-style reception, a New York bagel station, and for dessert a carrot cake and a pear loaf cake made in-house.',
    differentiateur: {
      label: 'Your choice of format',
      text: 'A sharing lunch, a dinner-style reception at the end of the day, or lunch trays. The savoury food is halal and pork-free, and everything is alcohol-free.',
    },
    enBref: "L'Écrin Traiteur delivers the Thanksgiving meal for American teams in Paris: sharing buffets, a dinner-style reception, a bagel station and autumn desserts.",
    horsCatalogue: [],
    faq: [
      { q: 'Do you serve a roast turkey?', a: 'No, a whole turkey and pumpkin pie are not on our menu. We offer sharing buffets, a dinner-style reception and a bagel station, with carrot cake and pear loaf cake for dessert.' },
    ],
    article: {
      titre: 'Thanksgiving in Paris: the team meal for American companies',
      sections: [
        { heading: 'Thanksgiving in brief',
          texte: `Thanksgiving is celebrated on the fourth Thursday of November; the next one falls on {{date}}. In the United States it is a public holiday; in Paris, subsidiaries and American teams often mark it with a lunch or an end-of-day reception. A 12-canapé reception costs ${px(C12)} per person, which is ${pour(40, C12)} delivery included for 40 people.` },
        { heading: 'What we serve',
          texte: `A whole roast turkey and pumpkin pie are not on our menu. We offer what we do well: sharing buffets, a dinner-style reception of 12 or 16 canapés, lunch trays from ${px(PLATEAU_DES)}. For an American touch, the New York bagel station fills bagels in front of your guests: salmon and cream cheese, chicken Caesar, avocado and feta.` },
        { heading: 'An autumn dessert',
          texte: 'To finish, the carrot cake made in-house, grated carrot and gentle spices, and the pear loaf cake made in-house, served sliced on a platter. With a thermos of coffee and orchard apple juice from the Yvelines, it is a seasonal dessert that recalls the autumn.' },
        { heading: 'Ordering and organisation',
          texte: `${REGLE} A lunch between 12:30 and 2 pm, or a reception between 5 and 7 pm, works well. The savoury food is halal and pork-free, everything is alcohol-free: just tell us about the team's vegetarian or gluten-free needs.` },
      ],
    },
  },
  noel: {
    nom: 'Christmas',
    ctaNom: 'Christmas',
    h1: 'A company Christmas meal: reception, buffet or afternoon break',
    seoTitle: 'Christmas catering for companies in Paris',
    metaDescription: `Christmas at the office: dinner-style reception from ${px(C8)} per person, salmon platter, panettone, a festive afternoon break. Delivered in Paris and Île-de-France.`,
    imgAlt: 'A Christmas buffet laid out in front of a decorated tree: pastries, sweet jars and gift boxes',
    descCourt: "A dinner-style reception, a salmon platter, panettone and cakes to share. For the team's Christmas meal or afternoon break.",
    desc: 'The most anticipated moment of the year. A festive dinner-style reception, a smoked salmon and gravlax platter, an artisan panettone and cakes to share, pastries for a Christmas breakfast. A festive buffet or lunch trays, depending on your format and your headcount.',
    differentiateur: {
      label: 'Your choice of format',
      text: 'A dinner-style reception, a festive afternoon break or Christmas lunch trays. We work the format to your headcount and your budget.',
    },
    enBref: "L'Écrin Traiteur delivers company Christmas meals and afternoon breaks: a festive dinner-style reception, a salmon platter, panettone and cakes to share, alcohol-free.",
    horsCatalogue: ['Foie gras and toasts', 'Artisan Christmas log (bûche)', 'Christmas chocolates'],
    faq: [
      { q: 'When should we order the company Christmas meal?', a: 'Ordering stays possible until 10 am the day before, but December dates fill up fast: confirm the budget, headcount and address in November, especially above 50 people.' },
    ],
    article: {
      titre: 'A Christmas meal at work: how do you do it properly?',
      sections: [
        { heading: 'A moment that counts for the team',
          texte: 'The Christmas meal is often the most anticipated company moment of the year, and the one where expectations are highest. One that lands leaves a shared memory that strengthens team bonds well beyond December. It deserves to be prepared, not ordered in a panic on 20 December.' },
        { heading: 'A dinner-style reception, an afternoon break or lunch trays?',
          texte: 'The dinner-style reception is the most sociable format for a team that is physically together: everyone moves around and helps themselves at their own pace. The festive afternoon break, with panettone and cakes to share, suits a late afternoon. The individual lunch tray suits teams working remotely or spread over several sites.' },
        { heading: 'The menu',
          texte: `A smoked salmon and gravlax platter with blinis and lemon-dill cream to begin, festive hot bites, then an artisan panettone and a rolled cake to share. On request, we add foie gras, an artisan Christmas log and Christmas chocolates. A 12-canapé reception costs ${px(C12)} per person. For drinks, everything alcohol-free: a 0% Blanc de Blancs Chardonnay for the toast and Alain Milliat juices.` },
        { heading: 'Ordering ahead',
          texte: `${REGLE} Ordering ahead mainly buys you time to confirm the budget, the headcount and the addresses internally, and to choose the menu. Block the date in diaries as soon as the format is decided.` },
      ],
    },
  },
}

/* Une page anglaise n'existe que si tous les champs de CHAMPS_EN sont là. */
export const traductionComplete = (slug) => {
  const e = EN_EVENEMENTS[slug]
  return !!e && CHAMPS_EN.every(k => e[k] != null)
}
export const slugsEvenementsEn = () => Object.keys(EN_EVENEMENTS).filter(traductionComplete)
