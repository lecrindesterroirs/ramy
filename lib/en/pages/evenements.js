/*
  Événements saisonniers, textes anglais.

  Surcouche de texte seulement : slug, photo, ordre et dates restent lus dans
  app/creations/evenements-saisonniers/evenementsData.js. La clé de chaque
  entrée est le slug français, qui ne change pas d'une langue à l'autre.

  Les montants cités dans les articles sont CALCULÉS depuis lib/prixEntree.js
  et lib/calculsPrix.js, jamais recopiés : petit-déjeuner, pause, livraison,
  minimum et formules cocktail. Attention, la version française les écrit
  encore en dur dans evenementsData.js : un changement de tarif demande donc
  une passe sur ce fichier-là, l'anglais suivra tout seul.

  Deux faits à ne pas inventer, tenus comme en français :
  - Octobre Rose : 1 € par convive reversé sur TOUTES les commandes d'octobre,
    pas seulement sur la Pause Rose, et le montant total publié en fin de mois.
  - Movember : les dons se collectent sur la page de l'équipe Movember, pas
    auprès du traiteur. La facture ne couvre que le petit-déjeuner ou le goûter.
*/
import { FORMULES, LIV } from '../../calculsPrix'
import { MINIMUM, PDJ_DES, PDJ_COMPLET, PAUSE_DES, euroEn } from '../../prixEntree'

const HT = 'excl. VAT'
const e = euroEn
/* « €8 excl. VAT » */
const px = (x) => `${e(x)} ${HT}`
/* Repère livré pour n personnes à un prix par tête */
const pour = (n, pu) => px(n * pu + LIV)
const COCKTAIL8 = FORMULES.invitation.prix

/* Libellés d'interface des deux pages événement. */
export const EN_EV_UI = {
  accueil: 'Home',
  fil: 'Seasonal events',
  programme: 'On the menu',
  organiser: 'Organise this event →',
  guide: 'Practical guide',
  ctaTitre: (nom) => `Planning ${nom} for your company? We will take care of it.`,
  ctaBouton: 'Get a quote →',
  ctaBas: 'Tell us your context, your date, your headcount. Quote within 24 hours.',
  introuvable: 'Event not found.',
  relatedEyebrow: 'Also worth a look',
  relatedTitre: 'Other dates in the year',

  /* ── Index ── */
  idxEyebrow: 'Our Creations, Seasonal Events',
  idxH1: 'Seasonal Events',
  idxDesc: 'Galette des Rois, Candlemas, Halloween, Christmas… Every moment in the year has its own products, its own codes, its own gestures.',
  idxHeroAlt: "Seasonal Events, L'Écrin Traiteur",
  idxVoir: 'See the event →',
  idxCtaTitre: 'Planning a seasonal event for your company?',
  idxCtaBouton: 'Get a quote →',
  idxJsonLdName: 'Seasonal events',
  retour: '← See every event',

  /* ── Page dédiée Octobre Rose ── */
  orEyebrow: 'A charity event',
  orH1a: 'Pink',
  orH1b: 'October',
  orDesc: 'A generous, committed moment to raise awareness of breast cancer screening among your teams.',
  orCta: 'Ask for a Pink October quote →',
  orDesc2: 'Through a selection of pink treats and seasonal products, we offer a sociable break with a cause behind it. €1 per guest is donated to breast cancer research, on every order we deliver in October.',
  orBadges: [
    { titre: '€1 per guest', sub: 'donated to research' },
    { titre: 'On every one of our orders', sub: 'in October' },
    { titre: 'A generous moment', sub: 'and a charitable one, for your teams' },
  ],
  orProgTitre: 'A selection in the\ncolours of Pink October',
  orProgDesc: 'Sweet and fresh creations, made specially for the occasion, bringing pleasure and commitment together. Every order contributes directly to breast cancer research.',
  orProgCta: 'Build my Pink October selection →',
  orProgrammeLabels: [
    'Personalised pink madeleines',
    'Macaron and raspberry cake platter',
    'Raspberry tartlets',
    'Apple and raspberry juice',
    'Mariage Frères red-fruit tea',
    'Packaging with a pink ribbon',
  ],
  orEngagementEyebrow: 'Our commitment',
  orEngagementTitre: '€1 per guest donated to breast cancer research',
  orEngagementNote: 'The total is published at the end of the month.',
}

export const EN_EVENEMENTS = {
  'galette-des-rois': {
    mois: 'January',
    nom: 'Galette des Rois',
    tags: ['Breakfasts', 'Afternoon breaks'],
    descCourt: 'Galettes made in-house by our partner bakers. Charm and crown included, four flavours to choose from.',
    desc: 'The January ritual, done properly. Our galettes are made by our partner bakers with genuine in-house puff pastry. A charm and a paper crown come with every galette. Four flavours available, so every taste at the office is covered.',
    produits: [
      'Traditional frangipane galette',
      'Apple galette',
      'Chocolate and hazelnut galette',
      'Pistachio galette',
      'Alain Milliat apple juice',
      'Alain Milliat apple juice',
    ],
    differentiateur: {
      label: 'Our signature',
      text: 'Puff pastry made in-house by our partner bakers. Charm and crown included, carefully presented.',
    },
    article: {
      titre: 'How do you organise the Galette des Rois at work?',
      sections: [
        { heading: 'A ritual that brings people together at the start of the year',
          texte: "The galette des rois is one of the few rituals in the year that naturally gathers people around a table. At work that is a rare thing: no pretext needed, everyone knows what it is, everyone is waiting for the charm. A good caterer makes the difference. Putting a supermarket galette on the meeting-room table is not the same as serving a real galette in in-house puff pastry, carefully presented, with a charm worth finding." },
        { heading: 'How much should you order for your team?',
          texte: "Allow one 6-portion galette for 5 to 6 people, so everyone gets a decent slice. For a breakfast of 10 to 15 people, two galettes in different flavours keep it interesting. Think about the drinks too: Alain Milliat apple juice or a 0% Chardonnay, alcohol-free, so everyone raises the same glass. For larger teams, run several sessions of 10 to 15 people rather than one big gathering: the moment is warmer that way." },
        { heading: 'Which flavour should you choose?',
          texte: "Frangipane is still the reference, but offering an alternative genuinely changes the experience. An apple galette for those who like things less sweet, a chocolate-hazelnut one for the chocolate lovers, a pistachio one for anyone after something more unusual. Avoid ordering several identical galettes: variety is what creates the surprise and gets people talking. Some teams even run a vote beforehand to pick the flavours, which builds the anticipation in itself." },
        { heading: 'Ordering ahead: why it matters',
          texte: "On ordering, the rule is the same all year: until 2 pm the day before, with 48 hours' notice recommended from 50 people or across several sites. Have it delivered the same morning so the galette is fresh. For the office side, a slot between 9:30 and 10:30 mid-week works well: the teams are in, and not yet in the end-of-week rush. Avoid the Monday of the first week of January, which is usually chaotic." },
      ],
    },
  },
  chandeleur: {
    mois: 'February',
    nom: 'Candlemas',
    tags: ['Afternoon breaks', 'Afternoon treats'],
    descCourt: 'Crêpes made in-house with toppings, Alain Milliat jams. A live crêpe stand on request.',
    desc: "Crêpes made in-house with all the toppings. Generous, made to share, no fuss. And for teams that want to experience it live, we can set up a crêpe stand right in your offices. A real moment, not just an afternoon snack.",
    produits: [
      'Crêpes made in-house',
      'Alain Milliat jams',
      'Artisan chocolate spread',
      'Lemon and sugar',
      'Whipped cream made in-house',
      'Live crêpe stand on site (on request)',
    ],
    differentiateur: {
      label: 'On request',
      text: 'A live crêpe stand in your offices. Your teams help themselves and pick their own toppings. A genuinely sociable moment.',
    },
    article: {
      titre: 'Organising Candlemas at the office: our advice',
      sections: [
        { heading: 'Why Candlemas works so well at work',
          texte: "Candlemas has something few events have: everyone has a childhood memory involving a crêpe. At the office that creates a relaxed atmosphere straight away. No need to explain the idea, no need to persuade anyone. And unlike other calendar events, it is not tied to any one exclusive tradition, which makes it inclusive by nature. Ideal in a diverse team." },
        { heading: 'Delivered ready to serve, or a live crêpe stand?',
          texte: "Two formats are possible. The classic delivery: crêpes made that morning, delivered with toppings and drinks. Simple, quick, easy to manage. The live crêpe stand: an artisan crêpe maker comes to your offices and makes the crêpes in front of your teams. The second creates far more of an occasion, but needs a little more space and notice. For a team of fewer than 30 people, the crêpe stand is genuinely worth it." },
        { heading: 'The toppings that make the difference',
          texte: "Everyone knows plain jam. But adding an Alain Milliat artisan jam, an artisan chocolate spread and whipped cream made in-house genuinely changes the experience. Offer a savoury option too: ham and cheese is still a classic that suits anyone who does not like sweet things. Four or five toppings is about right, so everyone finds something and conversation starts naturally around the table." },
        { heading: 'What time should you hold the crêpe break?',
          texte: "Candlemas works very well mid-morning (10 to 11 am) or as an afternoon break (4 to 5 pm). Avoid lunchtime, where the event would get lost in the logistics of the meal. Thirty to forty-five minutes is ideal: everyone comes through, talks, and gets back to work without the event dragging. Put the break in shared calendars ahead of time to get the most people along." },
      ],
    },
  },
  'journee-des-femmes': {
    mois: '8 March',
    nom: "International Women's Day",
    tags: ['Breakfasts', 'Afternoon breaks', 'Afternoon treats'],
    descCourt: 'Personalised pink madeleines, fine pastries, Alain Milliat juices and Mariage Frères teas.',
    desc: 'A genuine gesture for the women on your teams. Not a generic buffet. Personalised pink madeleines, fine pastries, careful presentation. Simple, elegant, and it actually means something.',
    produits: [
      'Personalised pink madeleines',
      'Assorted macarons',
      'Fine pastries',
      'Alain Milliat juices',
      'Mariage Frères tea',
    ],
    differentiateur: {
      label: 'Personalisation',
      text: 'Pink madeleines in your colour, careful packaging, a matching ribbon. A gesture people notice.',
    },
    article: {
      titre: "How do you mark 8 March at work without falling into clichés?",
      sections: [
        { heading: 'A sincere gesture rather than a communications exercise',
          texte: "International Women's Day is a sensitive moment at work. Done well, it is a gesture that genuinely counts for the women on your teams. Done badly, it can ring hollow or land awkwardly. The difference is in how sincere the gesture is. Madeleines personalised in the colours of the day, attention to detail in the presentation: these are the things that show the initiative was thought about, not thrown together at the last minute." },
        { heading: 'The ideas that actually register',
          texte: "Forget generic bunches of flowers or supermarket chocolates. What registers is the care taken and the personalisation. Pink madeleines with packaging in the company's colours. A platter with a real selection: macarons, fine pastries, Mariage Frères tea. The point is not to spend a lot, but to show that someone thought about this moment and gave it some time." },
        { heading: 'Which format should you choose?',
          texte: "Breakfast or an afternoon break? Both work. Breakfast has the advantage of starting the day on a good note. A late-afternoon break lets everyone be there, including those who come in later. For 10 to 50 people, a help-yourself buffet in the break room works very well. For a larger team, individual platters handed out at each desk can be an effective alternative." },
        { heading: 'The mistakes to avoid',
          texte: "Do not limit the event to women only: a moment of awareness is something a whole team shares. Do not announce it at the last minute: tell people in advance so the team knows the company has thought about it. And above all, do not settle for a symbolic gesture without saying anything: a word from a manager, a few simple remarks, can turn an afternoon break into a genuine moment of team cohesion." },
      ],
    },
  },
  paques: {
    mois: 'March / April',
    nom: 'Easter',
    tags: ['Breakfasts', 'Afternoon breaks'],
    descCourt: 'Artisan chocolates, seasonal pastries, fruit juices. A sweet break to mark the spring.',
    desc: 'Artisan chocolates, seasonal pastries, fruit juices. A sweet break to mark the spring with your teams before the holidays. A carefully presented spring table, to mark the moment without overdoing it.',
    produits: [
      'Artisan chocolates',
      'Chocolate eggs and bells',
      'Seasonal pastries',
      'Alain Milliat fruit juices',
      'Mariage Frères tea',
    ],
    differentiateur: {
      label: 'Our selection',
      text: 'Chocolates chosen from our partner makers. A carefully presented spring table, to mark the moment.',
    },
    article: {
      titre: 'Organising Easter at work: the ideas that work',
      sections: [
        { heading: 'Easter at the office: an opportunity people often forget',
          texte: "Between the Galette des Rois in January and the spring events, Easter is often the one the corporate calendar overlooks. Yet it is an ideal moment for a sweet break before the holidays. Chocolate is universal, and carries no risk. And in late March or early April, after several weeks without anything notable, your teams particularly appreciate a sociable break." },
        { heading: 'Artisan chocolates: why they change everything',
          texte: "A bag of mass-produced chocolates on a table does not create a moment. A selection of artisan chocolates, well presented, with good small chocolate eggs and bells, creates a real break. The difference in taste is real and your teams notice it. Choose serious chocolate makers and let the presentation speak for itself. How much care you put into choosing the products says something about your company." },
        { heading: 'The ideal format',
          texte: "A help-yourself buffet in the break room with the chocolates, a few seasonal pastries and fruit juices is probably the simplest and most effective format. There is no need to stage anything large: a 20 to 30 minute break mid-morning is enough. If there are children in the room at a family event, a small egg hunt can make the moment more memorable." },
        { heading: 'Timing and quantities',
          texte: "Hold the event the week before Easter, ideally on the Thursday or Friday morning, before the teams leave on holiday. On quantities, allow roughly 80 to 100 g of chocolate per person for a break, and add pastries for anyone who does not eat chocolate. Order until 2 pm the day before; from 50 people, or across several sites, 48 hours' notice is recommended." },
      ],
    },
  },
  'fete-de-fin-dannee': {
    mois: 'June',
    nom: 'End-of-year party',
    tags: ['Cocktail Receptions & Buffets', 'Lunch Trays'],
    descCourt: 'A dinner-style reception, a generous buffet or a summer lunch tray. To close the season with some style.',
    desc: 'The moment to close a season with a proper table. A dinner-style reception, a generous buffet or a summer lunch tray. A format that matches the year your teams have just had. Before the summer break.',
    produits: [
      'Cured meats and cheese board',
      'Savoury bites made in-house',
      'Glass pots and open sandwiches',
      'Alain Milliat juices',
      '0% Chardonnay or sparkling water',
      'Seasonal desserts',
    ],
    differentiateur: {
      label: 'Your choice of format',
      text: 'A dinner-style reception, a French-style buffet or lunch trays. We work to your headcount and your format.',
    },
    article: {
      titre: "Organising your company's end-of-year party in June",
      sections: [
        { heading: 'Why hold the end-of-year party in June rather than December?',
          texte: "December is crowded. Your teams already have personal commitments, diaries are full, and the competition with family and friends is strong. June is different: the school year ends, first-half projects close, and the team is still complete before people leave on holiday. It is also the start of summer, a naturally more relaxed time. An event in June often lands better than a rushed Christmas meal." },
        { heading: 'A dinner-style reception, a buffet or a seated meal?',
          texte: "Each format has its advantages. A dinner-style reception encourages informal conversation: everyone moves around and mixes naturally. A classic buffet is more sociable and more generous. A seated meal creates a genuine collective pause, but needs more logistics. For a team of fewer than 30, the dinner-style reception is still the most popular. For larger teams, a buffet with a mix of seated and standing areas works very well." },
        { heading: 'The menu: what makes a good celebration table',
          texte: "A good company celebration table means variety and quality. Cured meats and cheeses for the aperitif, hot bites, fresh glass pots for the summer. Desserts that register. And above all, drinks that have been thought about: Alain Milliat juices, sparkling water and a 0% Blanc de Blancs Chardonnay for the toast, alcohol-free so everyone raises the same glass. Avoid over-standardised platters: your teams notice when products have been chosen with care, and it changes the atmosphere of the evening." },
        { heading: 'Practical arrangements',
          texte: "Plan the event between 6 and 9 pm, a window that suits everyone. Announce the date at least 3 weeks ahead to get the most people there. If you can use a terrace or an outdoor space in June, that is a real plus. Think about background music, and a few high and low tables to make conversation easier. The logistical details do as much for the quality of the evening as the menu does." },
      ],
    },
  },
  rentree: {
    mois: 'September',
    nom: 'Back to work',
    tags: ['Breakfasts', 'Meetings'],
    descCourt: 'A personalised chocolate bar, pastries from our partner bakers, coffee and tea.',
    desc: 'A return to the office that sets the right tone. A personalised chocolate bar carrying the welcome message, pastries from the baker, coffee. A way of saying that the year beginning matters. A simple gesture that creates a real atmosphere.',
    produits: [
      'Personalised chocolate bar',
      'Pastries from our partner bakers',
      'Thermos of organic coffee',
      'Thermos of Mariage Frères tea',
      'Alain Milliat fruit juices',
    ],
    differentiateur: {
      label: 'Personalisation',
      text: "A chocolate bar carrying a first name, a message or your company's logo. Made to order.",
    },
    article: {
      titre: 'A back-to-work breakfast: how do you welcome your teams properly?',
      sections: [
        { heading: 'September at work: a pivotal moment',
          texte: "September is not just any month. After the summer, your teams come back with a fresh view of their work and their expectations. The first days back set the tone for the year ahead. A carefully made back-to-work breakfast sends a clear message: the company is thinking about its teams, and the return is something to look forward to. It is not an HR gimmick, it is a genuine signal from management." },
        { heading: 'What makes a good back-to-work breakfast',
          texte: "Pastries from a real bakery, pure butter, shaped that same morning, not industrial croissants out of the freezer. Organic coffee in a thermos and a Mariage Frères tea. And one element of personalisation: a chocolate bar carrying the team's message, something that marks the return as a moment chosen rather than endured. These small details count far more than the budget spent. Your teams remember them." },
        { heading: 'New joiners deserve particular attention',
          texte: "September is often a period of hiring and onboarding. A back-to-work breakfast is the perfect occasion to bring new arrivals into the team's rhythm. An informal moment over a coffee allows the natural introductions that formal meetings never really create. If you have people starting in September, hold the event in the first week of the month." },
        { heading: 'How much to allow per person',
          texte: 'Two pastries per person if they are served on their own, one and a half if there is also fruit and yoghurt. On coffee, the figure that matters: one thermos holds a litre, which is six to eight cups. For a team of twenty coming back from holiday, allow two to three thermoses, not one. Seven people in ten have a coffee in the morning, and many come back for a second cup when the moment lasts. Finally, allow one litre of juice for six to seven glasses, so two litres for twenty people.' },
        { heading: 'The budget for a good return',
          texte: `A back-to-work breakfast on the Classique format starts at ${px(PDJ_DES)} per person: pastries, a basket of freshly cut fruit, coffee and juice. A full breakfast is quoted on request. A simpler format, two mini pastries and coffee per person, comes to around ${px(6.5)}. The personalised chocolate bar is added to the order according to the message and the format you want. On top of that come delivery, ${px(LIV)} in Paris and nearby towns, and a minimum order of ${px(MINIMUM)}.` },
        { heading: 'When to order for September',
          texte: 'The rule is the same in every season: order until 2 pm the day before, delivered Monday to Friday from 6:30 am. From 50 people, or across several sites, 48 hours’ notice is recommended. For the personalised chocolate bar, which is made to order, allow a few days more.' },
        { heading: 'Format and timing',
          texte: 'The Tuesday or Wednesday morning of the first full week of September is generally the best timing. Not the Monday, which is often complicated after the weekend. Between 8:30 and 9:30, breakfast lets everyone catch up before diving into the day. Allow 45 minutes to an hour, no more: the point is to start well, not to stretch the morning out. Announce the date in August to get the most people there.' },
      ],
    },
  },
  'octobre-rose': {
    mois: 'October',
    nom: 'Pink October',
    tags: ['Afternoon treats', 'Afternoon breaks'],
    descCourt: 'The Pink Break: a pink and red-fruit platter, personalised madeleines. €1 per guest donated to breast cancer research.',
    desc: 'An afternoon break to raise awareness of breast cancer screening among your teams. A pink and red-fruit platter, personalised madeleines, a ribbon on the packaging. And a commitment with a figure attached: on every order we deliver in October, we donate €1 per guest to breast cancer research. The total is published at the end of the month.',
    produits: [
      'Personalised pink madeleines',
      'Macaron and red-fruit loaf cake platter',
      'Raspberry tartlets',
      'Packaging with a pink ribbon',
      'Red-fruit smoothie',
      'Mariage Frères tea',
    ],
    differentiateur: {
      label: 'Our commitment',
      text: '€1 per guest donated on every one of our October orders, not only on the Pink Break. The total published at the end of the month.',
    },
    article: {
      titre: 'Pink October at work: how do you commit in practice?',
      sections: [
        { heading: 'Why act as a company?',
          texte: 'Pink October has become, in a few years, a fixture. At work, taking part in the campaign sends a strong message to your teams: the organisation pays attention to things beyond the daily job. One woman in eight will be affected by breast cancer in her lifetime. Your teams are directly concerned, either personally or through someone close to them. A collective gesture, even a simple one, creates a space for solidarity that is rare in a professional setting.' },
        { heading: 'A charity afternoon break: the idea that brings people together',
          texte: 'The idea of a Pink October charity break is simple and effective: offer an afternoon break in the colours of the cause. Personalised pink madeleines, macarons, red-fruit loaf cakes, a red-fruit smoothie. A platter built around the colours of the pink ribbon. This sociable format makes it possible to raise a serious subject in a positive, warm setting, without slipping into something heavy or guilt-inducing.' },
        { heading: 'How to keep it consistent with the cause',
          texte: 'A Pink October break gains meaning when it comes with real information. Put up the screening recommendations, offer a link to the resources of the Ligue contre le cancer, encourage the women on your teams to book a screening appointment. The break creates the occasion, the information does the rest. Some companies also run a collection for charity on the day of the event.' },
        { heading: 'The details that make the difference',
          texte: 'Personalising the products is what separates a genuine commitment from a symbolic gesture. Madeleines with pink packaging in your company colours, a ribbon on every pack, careful presentation: these details show the event was prepared with care. Announce it in advance on your internal channels so your teams can look forward to it and take an active part.' },
        { heading: 'Our commitment: €1 per guest donated',
          texte: 'Throughout the month of October, we donate €1 for every guest served to breast cancer research. Every order counts, not only the pink breaks: a breakfast for 40 people means a €40 donation. The total raised is published at the end of the month, and the donation receipt is available on request. For your teams, it is a concrete way to connect a break to a cause, without changing anything about how you organise it.' },
      ],
    },
  },
  halloween: {
    mois: 'October',
    nom: 'Halloween',
    tags: ['Afternoon treats', 'Afternoon breaks'],
    descCourt: 'The black vanilla macaron with a spiced pumpkin centre, the pumpkin madeleine in white chocolate and orange, cookies made in-house, an alcohol-free cocktail.',
    desc: 'A festive afternoon break out of the ordinary, led by our black vanilla macaron with a spiced pumpkin centre. Around it: the pumpkin madeleine in white chocolate and orange, cookies made in-house, fresh fruit skewers, or an 8-canapé reception for after-work drinks. Halal and pork-free, delivered from 6:30 am. An offbeat moment, properly executed.',
    produits: [
      'Black macaron, vanilla with a spiced pumpkin centre',
      'Pumpkin madeleine, white chocolate and orange',
      'Cookies made in-house',
      'Fresh fruit skewers',
      'Carrot cake and loaf cakes made in-house',
      'An 8-canapé reception, alcohol-free',
    ],
    differentiateur: {
      label: 'Our signature',
      text: 'The black vanilla macaron with a spiced pumpkin centre, created for the season: a cocoa shell, a vanilla ganache and a pumpkin centre with cinnamon.',
    },
    article: {
      titre: 'Halloween at work: what if we dared?',
      sections: [
        { heading: 'Halloween 2026 in brief',
          texte: `Halloween 2026 falls on a Saturday: hold it on Thursday 29 or Friday 30 October. An afternoon break costs from ${px(PAUSE_DES)} per person, an 8-canapé reception ${px(COCKTAIL8)} per person, with delivery at ${px(LIV)} on top. Order until 2 pm the day before, delivered from 6:30 am. The whole menu is halal and pork-free, with no alcohol.` },
        { heading: 'The black macaron, vanilla with a spiced pumpkin centre',
          texte: 'This is the piece we created for the season. A cocoa shell, almost black, a vanilla ganache, and at the centre a pumpkin filling lifted with cinnamon. The pumpkin is not there for decoration: it brings a roundness that balances the vanilla, and the spice wakes the whole thing up. It is served as it comes on an afternoon platter, or at the end of a reception. Like everything else on the menu, it is pork-free and alcohol-free.' },
        { heading: 'The pumpkin madeleine, white chocolate and orange',
          texte: 'A soft white chocolate madeleine, lifted with a touch of orange, moulded as a pumpkin and drawn on in dark chocolate. It holds in one hand, it shares without cutlery, and it makes its effect on an afternoon table without anyone having to decorate the room. It is the easiest thing to serve on our whole Halloween menu: it arrives ready, it does not melt, it waits for break time.' },
        { heading: 'Halloween at the office: a habit that is taking hold',
          texte: 'Halloween was long seen as a children’s festival. But over the last few years it has gained ground at work, particularly in younger teams and in company cultures that value cohesion and a bit of lightness. A well-organised Halloween break is one of the few events where humour and playfulness are valued. That is not nothing in working environments that are often too serious.' },
        { heading: 'What really works (and what is better avoided)',
          texte: 'The most common mistake: putting supermarket sweets on a table and calling it an event. What works is a real afternoon break with carefully made products: madeleines personalised in the colours of the day, cookies made in-house, fresh fruit, a table that hangs together. The key is the quality and the consistency of the whole thing. Your teams can tell immediately whether someone genuinely took care over the moment or whether it was a box ticked in a hurry.' },
        { heading: 'Should fancy dress be compulsory?',
          texte: 'No, and making it so is often counterproductive. Some of your teams will be enthusiastic, others less so. Offer fancy dress as an option, never as an obligation. A costume competition with a small prize, on the other hand, can create a lot of fun without forcing anyone. The essential thing is that the event feels like a pleasure, not a social obligation.' },
        { heading: 'Budget and timing',
          texte: `An afternoon break starts at ${px(PAUSE_DES)} per person, which is ${pour(20, PAUSE_DES)} delivery included for 20 people; the Classique breakfast is ${px(PDJ_DES)} and the 8-canapé reception ${px(COCKTAIL8)} per person. Hold it mid-afternoon on 31 October if that is a working day. In 2026, 31 October falls on a Saturday: choose Thursday 29 or Friday 30. Thirty to forty-five minutes works well, so everyone takes part before heading home.` },
      ],
    },
  },
  movember: {
    mois: 'November',
    nom: 'Movember',
    tags: ['Breakfasts', 'Afternoon breaks'],
    descCourt: `Launching and closing Movember at the office: a breakfast and an afternoon break delivered from ${px(PAUSE_DES)} per person.`,
    desc: `Movember runs for the whole of November. For the launch, a breakfast on Monday 2 November; for the close, an afternoon break with the prize-giving on Friday 27 or Monday 30. Delivered from 6:30 am across Paris and Île-de-France, from ${px(PAUSE_DES)} per person, with delivery at ${px(LIV)} on top.`,
    produits: [
      `Classique breakfast, ${px(PDJ_DES)} per person`,
      `Afternoon break, from ${px(PAUSE_DES)} per person`,
      'Madeleines that can be personalised, on quote',
      'Fresh fruit skewers',
      'A basket of seasonal fruit',
      'Gluten-free banana bread',
    ],
    differentiateur: {
      label: 'Our format',
      text: 'Two set-piece moments pinned to the Movember calendar: a launch on Monday 2 November and a close on the 27th or the 30th. Donations are collected on your Movember team page.',
    },
    article: {
      titre: 'Movember at work: two dates are enough',
      sections: [
        { heading: 'Movember 2026 in brief',
          texte: `Movember runs through the whole of November: participants start clean-shaven on 1 November, a Sunday in 2026, and grow a moustache. At the office, allow a launch breakfast on Monday 2 November, at ${px(PDJ_DES)} per person, and a closing afternoon break on Friday 27 or Monday 30 November, from ${px(PAUSE_DES)} per person. For 20 people, that comes to ${pour(20, PDJ_DES)} and ${pour(20, PAUSE_DES)}, delivery at ${px(LIV)} included each time.` },
        { heading: 'What Movember supports',
          texte: 'Movember supports three causes: mental health and suicide prevention, prostate cancer and testicular cancer. A company can sign up on its own, create a team, or start a competition between several offices. Donations are collected on the Movember team page, not through the caterer: the invoice covers only the breakfast or the afternoon break delivered.' },
        { heading: 'What can you organise at the office?',
          texte: 'The Movember guide suggests a collective shave for the launch, a quiz with neighbouring companies, health conversations, a donation box in the break room and a prize-giving at the end of the month. Anyone who does not want a moustache can walk or run 60 km over the month, or invent their own challenge. Taking part stays voluntary.' },
        { heading: 'Budget and timing',
          texte: 'Order until 2 pm the day before, delivered from 6:30 am; from 50 people, allow 48 hours. Tell us the team’s dietary needs when you ask for the quote: vegetarian, vegan, gluten-free. The madeleines can be personalised in the colours of the event, on quote.' },
      ],
    },
  },
  noel: {
    mois: 'December',
    nom: 'Christmas',
    tags: ['Breakfasts', 'Cocktail Receptions & Buffets', 'Afternoon breaks'],
    descCourt: 'A full festive menu. Foie gras, smoked salmon, an artisan bûche, artisan hot chocolate as an option.',
    desc: 'The most anticipated service of the year. A full festive menu with the great seasonal classics. Foie gras, smoked salmon, an artisan bûche, Christmas pastries, artisan hot chocolate as an option. A festive buffet or a lunch tray, depending on your format and your headcount.',
    produits: [
      'Foie gras and toasts',
      'Smoked salmon',
      'Artisan bûche',
      'Christmas chocolates',
      'Seasonal pastries',
      'Artisan hot chocolate (as an option)',
      '0% Chardonnay or sparkling juice',
    ],
    differentiateur: {
      label: 'Your choice of format',
      text: 'A festive buffet, a dinner-style reception or a Christmas lunch tray. We work the format to your headcount and your budget.',
    },
    article: {
      titre: 'A Christmas meal at work: how do you do it properly?',
      sections: [
        { heading: 'Christmas at work: a moment that shapes team culture',
          texte: 'The Christmas meal is often the most anticipated company moment of the year. But it is also the one where expectations are highest. A Christmas meal that misses leaves a lasting bad impression. One that lands creates a shared positive memory that strengthens team bonds well beyond December. The investment deserves to be thought about seriously, not ordered in a panic on 20 December.' },
        { heading: 'A festive buffet, a dinner-style reception or a lunch tray: which format?',
          texte: 'The festive buffet is the most sociable format: everyone moves around, helps themselves at their own pace, and informal conversation comes naturally. The dinner-style reception is more elegant and suits larger headcounts. The individual lunch tray suits teams working remotely, or companies that want to mark the event even at a distance. For a team that is physically together, the buffet or the reception are still the most popular.' },
        { heading: 'The ideal menu for a company Christmas meal',
          texte: 'A company Christmas menu that works combines the great classics with a few things out of the ordinary. Foie gras and toasts to begin, smoked salmon, hot bites with a festive accent. An artisan bûche for dessert, a long way from the industrial ones everyone recognises at the first mouthful. On the drinks, everything alcohol-free: a 0% Blanc de Blancs Chardonnay for the toast, Alain Milliat juices, and as an option a thermos of artisan hot chocolate to finish.' },
        { heading: 'Ordering ahead: what it changes',
          texte: 'Ordering stays possible until 2 pm the day before for delivery from 6:30 am. For 50 people or more, or several delivery addresses, give us at least 48 hours. Ordering ahead mainly buys you time to confirm the budget, the headcount and the addresses internally, and to choose the menu and the formats. Block the date in diaries as soon as the format is decided.' },
      ],
    },
  },
}
