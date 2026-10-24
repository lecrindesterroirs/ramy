/*
  Pages Occasions, textes anglais.

  Surcouche de texte seulement : photos, produits liés, villes liées et
  catégorie produit restent lus dans lib/occasionsData.js.

  Les LIENS gardent leur chemin français : la page les fait passer par
  reecrireLiensEn(), qui les bascule vers /en seulement quand une version
  anglaise existe. Comme ça, un lien suit automatiquement la traduction d'une
  page sans qu'on y revienne.

  Les noms de formules, L'Invitation, La Réception, La Célébration, La
  Romaine, La Boréale, ne sont pas traduits : ce sont ceux du devis.

  Les témoignages sont les mots réels de personnes nommées : la page affiche
  « Translated from French » sous la signature en anglais.
*/

export const EN_OCCASIONS = {
  'petit-dejeuner-codir': {
    name: 'Board & exec meetings',
    heroTitle: 'Lunch trays for board and exec meetings in Paris',
    heroDescription: "A board meeting deserves lunch that holds up. L'Écrin Traiteur delivers artisan lunch trays straight into the room, at the time you choose.",
    piliers: [
      { title: 'Presentation that holds up', text: 'Careful packing, the tray served straight into the room, starter, main, dessert, bread. Nothing for you to organise.' },
      { title: 'Worth the moment', text: 'Products sourced from named makers, recipes developed in house. A lunch your board will remember.' },
      { title: 'On time, without fail', text: 'Delivered at the time you choose, straight into the meeting room. Secured entrances, filtered receptions: we know what Paris head offices are like.' },
    ],
    seoArticle: `
      <p>A <strong>board lunch</strong> is not an ordinary lunch. It is where the strategic decisions get made, where outside directors are sometimes received, and where the leadership's image is built in the details. The caterer you choose for that moment says something about your company.</p>
      <h2>Board and exec committee: two formats, one standard</h2>
      <p>A <strong>board of directors</strong> usually brings together 8 to 15 people. An <strong>executive committee</strong> is smaller: 5 to 8 members at most, often the most strategic circle in the organisation. In both cases, a complete lunch tray, starter, main, dessert, bread, is the most professional and the most efficient answer.</p>
      <h2>The lunch trays we recommend for a board meeting</h2>
      <p>Our collections are built for eating seated in a meeting: a complete individual portion, clean packaging, a sober and elegant presentation. For a leadership meeting, <strong>La Romaine</strong> (chicken fillet with roast potatoes, {{ht:poulet}}) and <strong>La Boréale</strong> (celeriac remoulade, sautéed potatoes and pan-fried salmon, {{ht:poisson}}) are the easiest to serve; <strong>La Solaire</strong> and <strong>La Provençale</strong> cover the vegetarians at {{ht:veg}}.</p>
      <h2>Lunch trays delivered straight into the room, across Paris</h2>
      <p>Order until <strong>2 pm the day before</strong>. Give us the delivery time, the exact address and the number of people. We take care of the rest: your room is ready before the first member walks in. Secured entrances, filtered receptions, office towers, we know what Paris head offices are like.</p>
      <h2>Seated meal or individual tray: which one for your meeting?</h2>
      <p>For a board or exec meeting, the <strong>individual lunch tray</strong> is the right answer: each member gets a complete tray without standing up or serving themselves. It keeps the meeting intact and avoids the interruptions. L'Écrin Traiteur delivers trays ready to be put down in front of each person.</p>
      <h2>Named makers, products your board will recognise</h2>
      <p>Every L'Écrin collection is built around a signature product and a named source. Recipes developed in house, chosen ingredients, a careful presentation: that is the difference between a "catering tray" and an <strong>artisan lunch</strong> people are still talking about after the meeting.</p>`,
    faq: [
      {
        q: 'What is the difference between a board and an exec committee for your service?',
        a: 'An exec committee is usually smaller (5-8 people) and more strategic than a board (8-15 people). In both cases we deliver complete individual lunch trays, starter, main, dessert, bread, straight into the meeting room.',
      },
      {
        q: 'What is the minimum number of people for a board lunch tray?',
        a: 'We deliver from 2 people, with no minimum number of guests. An exec committee of 6 and a board of 14 are both standard orders for us. The minimum order is {{ht:min}}.',
      },
      {
        q: 'What budget should we allow for a board lunch?',
        a: 'Our lunch trays (starter, main, dessert and bread) cost {{ht:veg}} per person vegetarian, {{ht:poulet}} with chicken and {{ht:poisson}} with salmon. For 10 people, that is {{htn:veg:10}} to {{htn:poisson:10}}, plus {{ht:liv}} delivery in Paris and nearby towns.',
      },
      {
        q: 'Can the presentation be personalised for a board meeting with outside directors?',
        a: 'Our trays arrive in careful professional packaging, ready to serve as they are. For something more personalised, a name card, a message, get in touch and we will quote for it.',
      },
    ],
    testimonial: {
      quote: 'Every single product got excellent feedback, the yoghurts, the pastries, the fruit juices, with a special mention for the madeleines, which were delicious, and the strawberry nectar, which went down extremely well.',
      author: 'Claire Renard',
      role: 'Office Manager, Digital Division',
      company: 'Le Monde',
    },
  },

  'seminaire-entreprise': {
    name: 'Company offsites',
    heroTitle: 'Offsite catering in Paris & Île-de-France',
    heroDescription: "An offsite is won in the details. L'Écrin Traiteur delivers your artisan coffee breaks and breakfasts for the whole day, anywhere in Île-de-France.",
    piliers: [
      { title: 'Volume without compromise', text: 'From 20 to 500 people, the same quality, the same freshness.' },
      { title: 'Morning and afternoon breaks', text: 'We handle both services if you need them, with products suited to each moment.' },
      { title: 'There when the room stops', text: 'Your break is ready when your speakers stop. No delay, no stress.' },
    ],
    seoArticle: `
      <p>A <strong>company offsite</strong> plays out across the whole day: the morning welcome, the 11 o'clock break, lunch, and the one at four. That is four appointments to get right, usually in a venue you do not know, with a headcount that moves until the last week. We deliver all of it in a single order, across <strong>Paris and Île-de-France</strong>.</p>
      <h2>The four moments of an offsite, and what to serve at each</h2>
      <ul>
      <li><strong>The welcome, between 8 and 9 am.</strong> Butter pastries, cut fresh fruit, coffee and juice. This is the moment that sets the tone, and the one where everybody is in the room. See our <a href="/creations/petits-dejeuners-et-pauses">breakfasts</a>.</li>
      <li><strong>The morning break.</strong> Mostly it exists to top up the coffee. Keep the sweet things light, this is not a second breakfast.</li>
      <li><strong>Lunch.</strong> Individual lunch trays if the work continues, a buffet if you want people to move around. See our <a href="/creations/plateaux-repas">lunch trays</a> and our <a href="/creations/lunch-box">lunch boxes</a>.</li>
      <li><strong>The four o'clock break.</strong> This is the real dip in the day. Madeleines, cookies, loaf cakes and large cakes to share hold up better than anything savoury. See our <a href="/creations/pauses-gourmandes">afternoon treats</a>.</li>
      </ul>
      <h2>Two services, one order</h2>
      <p>We deliver both breaks at once, with different products for each, or in two visits if your venue has nowhere to store things. Say which at the quote stage: the first saves you a delivery charge, the second gives you something hot at four.</p>
      <h2>How much to allow per person</h2>
      <p>On an offsite, people eat more than at the office: the day is long and the breaks are the only time anyone draws breath. Count <strong>2 pastries per person</strong> at the welcome rather than 1.5, and be generous on coffee. One flask covers six to eight cups only, which means 4 flasks for 30 people. The detail is in our guide to <a href="/journal/boissons-petit-dejeuner-entreprise">drinks for a corporate breakfast</a>.</p>
      <h2>Hotels, conference centres, a client's offices</h2>
      <p>An offsite is rarely held at your own address. A hotel in <a href="/traiteur/versailles">Versailles</a>, a conference centre at <a href="/traiteur/la-defense">La Défense</a>, a client's offices in <a href="/traiteur/boulogne-billancourt">Boulogne-Billancourt</a>: each venue has its own delivery entrance, its kitchen contact and its setup time. Some hotels have their own catering service and ask for clearance first, which we usually get without difficulty as long as we ask early.</p>
      <p>Give us the name of the venue and the on-site contact when we quote: that is what stops a driver circling a building while the break starts without him.</p>
      <h2>From 20 to 500 people</h2>
      <p>An offsite for 20 gets exactly the same products as an offsite for 500: our pastries and our Mado Paris madeleines are made the same morning whatever the quantity. Above 60 people we switch the hot drinks to 10-litre dispensers rather than flasks, which are easier to serve yourself from.</p>
      <h2>The whole menu halal and pork-free</h2>
      <p>As standard, at no extra cost. On an offsite that brings several teams together, and sometimes outside speakers, it saves having to survey everyone's constraints. Vegetarian, vegan and gluten-free options to specify on the quote with the headcount.</p>
      <h2>When to order</h2>
      <p>For an offsite, allow <strong>48 hours</strong> on large volumes, or until 2 pm the day before up to 50 people. Delivered from 6:30 am, minimum {{ht:min}}, company invoice showing VAT. For organising a full day, we have put our reference points together in our guide to <a href="/journal/traiteur-seminaire-entreprise-paris">offsite catering in Paris</a>. <a href="/devis">Ask for your quote</a>, answer within 24 hours.</p>`,
    faq: [
      {
        q: 'What budget should we allow for a full-day offsite?',
        a: 'It depends how many services you want. A welcome breakfast starts at {{ht:pdj}} per person (full breakfast on quote), an afternoon break from {{ht:pause}} and a lunch tray at {{ht:veg}}. For a full day with a welcome, two breaks and lunch, ask for a quote: we price it service by service so you can decide what to keep.',
      },
      {
        q: 'How many pastries and how much coffee should we allow on an offsite?',
        a: 'Count 2 pastries per person at the welcome, against 1.5 for a standard office breakfast: the day is long. On coffee, one flask covers six to eight cups, so 4 flasks for 30 people. It is the item people most often underestimate.',
      },
      {
        q: 'Do you deliver for groups of more than 50 people?',
        a: 'Yes, we handle orders up to 500 people. For large groups we recommend a personalised quote so we can guarantee the products are available. Above 60 people we switch hot drinks to 10-litre dispensers rather than flasks.',
      },
      {
        q: 'Can we have two breaks in the same day, morning and afternoon?',
        a: 'Absolutely. We can arrange two separate deliveries or a single delivery with two clearly separated lots, depending on how your venue is set up.',
      },
      {
        q: 'Do you deliver to hotels that have their own catering service?',
        a: 'Yes, subject to clearance with the hotel. We recommend checking with your hotel contact in advance. We deliver regularly to hotels and conference centres across Île-de-France.',
      },
    ],
    testimonial: {
      quote: 'The madeleines are very good, a wide choice of flavours, pastries, juice, and the service was excellent. The driver even helped us set everything up.',
      author: 'Anaïs Launoy',
      role: 'Office Manager',
      company: 'Vitalliance',
    },
  },

  'accueil-client': {
    name: 'Client welcome & receptions',
    heroTitle: 'Client welcome catering in Paris',
    heroDescription: "First impressions are built in the details. L'Écrin Traiteur delivers macarons, pastries and artisan juices for your client welcomes, receptions and business meetings.",
    piliers: [
      { title: 'Your brand, reinforced', text: 'Products that say something about you: artisan, chosen, memorable.' },
      { title: 'Careful presentation', text: 'Everything arrives in packaging built to be laid out in a couple of minutes.' },
      { title: 'Completely flexible', text: 'From 2 to 20 people, with or without notice, for a regular meeting or a one-off.' },
    ],
    seoArticle: `
      <p>Receiving a client at your own offices is a chance to strengthen the relationship through the details. A <strong>client welcome that works</strong> starts well before the meeting, the moment your visitor walks into the room and sees what is waiting on the table.</p>
      <h2>Client welcome catering in Paris: products people remark on</h2>
      <p>For a client welcome, the selection matters. Colourful <strong>macarons</strong>, <strong>madeleines</strong> and sliced <strong>loaf cakes</strong> make a change from the usual pastries and go on the meeting table in a few minutes.</p>
      <h2>Delivered to Paris offices between 6:30 and 10 am</h2>
      <p>Our delivery slots cover the usual morning hours. Whether your meeting starts at 8:30 or at 10, we work to it. For late-morning receptions we can also deliver later on request.</p>
      <h2>A caterer who understands what is at stake with a client</h2>
      <p>Receiving an important client is not the moment for uncertainty. At L'Écrin Traiteur the model rests on reliability: order placed by <strong>2 pm</strong> the day before, delivery confirmed, fresh products made the same morning. You concentrate on the meeting; we handle the rest.</p>
      <h2>Named artisan products, because your clients notice</h2>
      <p>An <strong>Alain Milliat</strong> juice on the table, butter pastries from that morning, macarons set out on a platter: the welcome is ready in a few minutes, and your client sees you were expecting them.</p>
      <h2>Order by 2 pm the day before, delivered from 6:30 am to the exact address</h2>
      <p>Secured building, filtered reception, access badge required: L'Écrin Traiteur knows what Paris offices are like. Give us the exact address, the access instructions and the time you want: we deliver by hand, to the floor if needed, before your client arrives.</p>`,
    faq: [
      {
        q: 'Can we order the day before for a client welcome the next morning?',
        a: 'Yes, that is our standard model. Order by 2 pm the day before, delivered from 6:30 am the next day at the time you choose.',
      },
      {
        q: 'What do you recommend to impress an important client?',
        a: 'We recommend macarons plus pure butter pastries plus Alain Milliat juice: products your guests recognise, set out in a few minutes.',
      },
    ],
    testimonial: {
      quote: "I have used L'Écrin several times for our client events and our open days, and the experience is always flawless.",
      author: 'Sara Molto',
      role: 'Marketing Manager',
      company: 'Stellantis',
    },
  },

  'journee-formation': {
    name: 'Training days',
    heroTitle: 'Training day catering in Paris',
    heroDescription: "A training day that works is partly a matter of managing people's energy. L'Écrin Traiteur delivers artisan breaks that keep the room with you from morning to evening.",
    piliers: [
      { title: 'Energy all day', text: 'A mix of sweet and savoury, fresh fruit, things that feed people without flattening them.' },
      { title: 'Built for mixed diets', text: 'Organic, vegan and gluten-free products available depending on what you need.' },
      { title: 'Simpler logistics', text: 'One order, one delivery. You run your programme, we run the breaks.' },
    ],
    seoArticle: `
      <p>A <strong>training day</strong> asks something of people from 9 am to 5 or 6 pm. The quality of the breaks has a direct effect on how much attention the room gives you. A bad coffee or a thin break, and you lose the audience before the session restarts.</p>
      <h2>Training catering in Paris: breaks built for concentration</h2>
      <p>For training days we recommend light, varied things: <strong>fresh fruit skewers</strong> for a lift, <strong>mini savoury rolls</strong> for the people who cannot keep eating sweet things, <strong>artisan cookies</strong> for the afternoon. Food that gives energy without weighing anyone down.</p>
      <h2>Delivered to training providers, companies and conference centres</h2>
      <p>Whether your training is in your own offices, a coworking space or a dedicated training centre, L'Écrin Traiteur delivers anywhere in Île-de-France. We handle the logistics so you can concentrate on the content.</p>
      <h2>How to organise the breaks of a training day with us</h2>
      <p>Order by <strong>2 pm</strong> the day before. Tell us the number of people, any dietary constraints and your break times. We deliver once, with the products separated by moment, morning break, afternoon break, so your day is easier to run.</p>
      <h2>Morning break AND afternoon break: one order, everything planned</h2>
      <p>For full training days we pack the two lots separately and label them clearly: <strong>10:30 break</strong> and <strong>3 pm break</strong>. You have one delivery to receive and one order to sign off. The rest of the logistics is ours. You run the programme, we run the energy in the room.</p>
      <h2>Light in the morning, reviving in the afternoon</h2>
      <p>A good morning break leans on pastries and fine patisserie. An effective afternoon break plays on freshness: fruit skewers, artisan cookies, juice with no added sugar. We fit the two breaks to the length and the rhythm of your training, just tell us when you order.</p>`,
    faq: [
      {
        q: 'Do you deliver for a morning break AND an afternoon break on the same day?',
        a: 'Yes. We can make two separate deliveries, or one delivery with two clearly separated and labelled lots so your day is easier to run.',
      },
      {
        q: 'Do you have gluten-free or vegan products for training days?',
        a: 'Yes, several: fruit skewers (vegan), house compotes (vegan), and some loaf cakes gluten-free on request. Tell us your constraints when you order.',
      },
    ],
  },

  'team-building': {
    name: 'Team building',
    heroTitle: 'Team building catering in Paris & Île-de-France',
    heroDescription: "Starting or finishing a team day around a shared artisan breakfast is already a way of building something. L'Écrin Traiteur delivers across Île-de-France for your team events.",
    piliers: [
      { title: 'Made to be shared', text: 'Food built for passing around: chouquettes, crêpes, fruit skewers, cookies.' },
      { title: 'Any size of team', text: 'From 5 to 500 people, we fit the quantities and the format.' },
      { title: 'Anywhere in Île-de-France', text: 'A karting track, an event space, a park, your own offices: we deliver where the day is happening.' },
    ],
    seoArticle: `
      <p><strong>Team building</strong> is one of the rare days when a team steps out of the routine and meets each other differently. What happens around the table is part of whether the day works, and part of what people remember about it.</p>
      <h2>Team building catering in Paris: food that creates a moment</h2>
      <p>For a team day we lean on things made to be shared: <strong>chouquettes</strong> because they are cheerful and generous, <strong>house crêpes</strong> because they feel like an occasion, <strong>fruit skewers</strong> for freshness, <strong>artisan cookies</strong> for the friendly break. Food that makes people smile.</p>
      <h2>Delivered to unusual venues and event spaces</h2>
      <p>Team building rarely happens at the office. A karting track, an unconventional coworking space, a business park, a seminar room outside Paris: L'Écrin Traiteur delivers across Île-de-France, including to the less standard addresses. Give us the address and we will confirm we can do it.</p>
      <h2>How to organise the breakfast of your team day</h2>
      <p>Order by <strong>2 pm the day before</strong>, delivered from 6:30 am. For events with unusual venue constraints, get in touch beforehand so we can check the logistics. A personalised quote is available for groups of more than 30. See also our <a href="/creations/petits-dejeuners-et-pauses">breakfasts and breaks</a> and our <a href="/creations/a-partager">sharing menus</a>.</p>
      <h2>A karting track, a forest, an unusual space: we deliver across Île-de-France</h2>
      <p>Team building rarely happens at the office. A business park, a seminar lodge, an event space in the suburbs, the karting track at Buchelay: L'Écrin Traiteur delivers across Île-de-France, including to the least standard places. Give us the exact address and any access constraints when you order. We confirm it is possible within 24 hours.</p>
      <h2>Food that creates something between people, not just a meal</h2>
      <p><strong>Chouquettes</strong> get passed from hand to hand. <strong>Laura Todd cookies</strong> start conversations. A colourful <strong>fruit skewer</strong> gets noticed. These things are made to be shared, talked about and remembered. That is the difference between a tray to get through and an artisan selection that becomes part of the day.</p>`,
    faq: [
      {
        q: 'Do you deliver to team building venues away from the usual offices?',
        a: 'Yes, we deliver across Île-de-France, including to unusual venues. Give us the exact address when you order and we will confirm it is possible.',
      },
      {
        q: 'Do you only deliver for team building on weekdays?',
        a: 'We deliver Monday to Friday. For a weekday team event, order by 2 pm the day before. For a weekend project, contact us in advance so we can look at it.',
      },
    ],
  },

  'gouter-entreprise': {
    name: 'Corporate afternoon break',
    heroTitle: 'Afternoon break catering in Paris',
    heroDescription: "The four o'clock break is the one people look forward to most. L'Écrin Traiteur delivers artisan treats, patisserie and fruit straight to your offices across Paris and Île-de-France.",
    piliers: [
      { title: 'The right thing at the right time', text: 'Cookies, financiers, macarons, fruit skewers: a selection built for the afternoon.' },
      { title: 'Small teams and large ones', text: 'From 5 to 500 people, with quantities and packing to match.' },
      { title: 'Delivered when you want it', text: 'Order by 2 pm the day before, delivered at 3:30, 4 pm or whenever suits you.' },
    ],
    seoArticle: `
      <p>The <strong>corporate afternoon break</strong> is the most underrated moment of the day. After six or seven hours of work the energy drops and so does the concentration. A break that is thought through gets the team back on their feet to finish the day properly, without the weight of a full meal.</p>
      <h2>Why the afternoon break brings people together more than anything else</h2>
      <p>Unlike breakfast, which is often eaten alone, or lunch, which is sometimes taken outside, the <strong>team afternoon break</strong> is collective by nature. People leave their desks, meet around a table and talk without an agenda. For a lot of managers it has become a weekly ritual that does what a formal team-building day was supposed to do.</p>
      <h2>What works for an afternoon break</h2>
      <p>The things that work best for a <strong>break at the office</strong> are the ones you eat in two bites, without needing a plate:</p>
      <ul>
      <li><strong>Macarons</strong>, the piece people notice on the break table. Colourful, good to look at, they make a moment of it.</li>
      <li><strong>Artisan cookies</strong>, generous and fragrant, chocolate, hazelnut, salted caramel, liked by absolutely everyone.</li>
      <li><strong>Mado Paris financiers</strong>, light, soft, in several flavours. Right for the people who prefer delicate to indulgent.</li>
      <li><strong>Seasonal fruit skewers</strong>, the fresh note that balances the sugar and suits every diet.</li>
      <li><strong>House chouquettes</strong>, light and cheerful, the Sunday-morning bakery in the middle of a working afternoon.</li>
      </ul>
      <h2>What an afternoon break costs in Paris</h2>
      <p>The afternoon break starts at <strong>{{ht:pause}} per person</strong>: one pastry and one drink. The budget goes up with macarons, fruit and the number of drinks; the quote sets out every line. For a weekly order, ask us for a recurring quote.</p>
      <h2>How to order</h2>
      <p>Order by <strong>2 pm the day before</strong>. Choose your delivery time: we deliver from 6:30 am and through to late afternoon for a 3:30 or 4 pm break. Give us the number of people, any dietary constraints, gluten-free, halal, vegan, and the exact address. Delivered across Paris and Île-de-France, Monday to Friday.</p>
      <p>To build your selection and see everything available, go to our <a href="/creations/pauses-gourmandes">afternoon treats</a> page.</p>`,
    faq: [
      {
        q: 'Do you deliver for an afternoon break after 3 pm?',
        a: 'Yes, we fit the delivery time to what you need. Give us the time you want, 3:30, 4 or 5 pm, when you order. Order by 2 pm the day before.',
      },
      {
        q: 'What do you recommend for a team break for 20 people?',
        a: 'For 20 people we recommend one box of 24 macarons, 4 boxes of 6 cookies, one platter of 20 fruit skewers (or one seasonal fruit basket) and cold drinks. The afternoon break starts at {{ht:pause}} per person; the quote gives the exact total.',
      },
      {
        q: 'Do you do gluten-free or vegan afternoon breaks?',
        a: 'Yes. The fruit skewers and the fruit basket are vegan and gluten-free. Some loaf cakes and financiers are available gluten-free on request. Tell us your constraints when you order.',
      },
      {
        q: 'Can we set up a weekly afternoon break?',
        a: 'Absolutely. Several of our clients run a weekly team break. For a standing order, get in touch for a better rate and a simpler process.',
      },
    ],
  },

  'petit-dejeuner-entreprise': {
    name: 'Corporate breakfast',
    heroTitle: 'Corporate breakfast catering in Paris',
    heroDescription: "A team breakfast, a first morning back, a weekly meeting: L'Écrin Traiteur delivers fresh artisan pastries and patisserie every morning, anywhere in Île-de-France.",
    piliers: [
      { title: 'Made that morning', text: 'Pastries and patisserie made each morning by our partner bakers. Never frozen.' },
      { title: 'Easy to repeat', text: 'A weekly standing order or a one-off, with the same quality every delivery.' },
      { title: 'Delivered from 6:30 am', text: 'Ready before your team arrives, anywhere in Paris and Île-de-France.' },
    ],
    seoArticle: `
      <p>The <strong>corporate breakfast</strong> is often the first collective moment of the day: welcoming new joiners, a weekly team meeting, or simply a ritual that sets the tone. A good artisan breakfast is a simple signal, and an effective one.</p>
      <h2>Corporate breakfast catering in Paris: products people recognise</h2>
      <p>Our <strong>duo pastry platter</strong>, croissants and pains au chocolat, pure butter, is still the safe bet. For variety, our <strong>chouquettes</strong> and our <strong>Mado Paris madeleines</strong> add something more indulgent, while a <strong>house loaf cake</strong> rounds out a breakfast table.</p>
      <h2>Delivered across Paris and Île-de-France from 6:30 am</h2>
      <p>Whether it is for 6 people or 60, we deliver straight to your offices, ready to put on the meeting table or in the break area. Order by <strong>2 pm the day before</strong> for delivery from 6:30 am the next day.</p>
      <h2>A ritual that is easy to set up, one-off or recurring</h2>
      <p>Some teams order an artisan breakfast every Monday morning, others occasionally for a welcome or a project launch. Either way the order is the same: simple, no volume commitment, the same quality each time.</p>
      <p>To build your selection and see everything available, go to our <a href="/creations/petits-dejeuners-et-pauses">corporate breakfast</a> page.</p>`,
    faq: [
      {
        q: 'How much should we order for a team breakfast?',
        a: 'On average, count 2 to 3 pastries per person, with a hot drink or a juice alongside. We will advise you on your exact headcount when you order.',
      },
      {
        q: 'Can we set up a standing weekly order?',
        a: 'Yes, people ask for this often. Get in touch and we will set up a weekly or monthly order with a simplified process.',
      },
    ],
  },

  'dejeuner-entreprise': {
    name: 'Corporate lunch',
    heroTitle: 'Corporate lunch catering in Paris',
    heroDescription: "A meeting that runs into lunch, an intense working day, an unplanned team meal: L'Écrin Traiteur delivers complete, balanced lunch trays straight to your offices.",
    piliers: [
      { title: 'A complete meal', text: 'Starter, main, dessert and bread in an individual tray, ready to serve.' },
      { title: 'For every taste', text: 'Vegetarian, chicken, meat, fish: a varied collection for the whole team.' },
      { title: 'Delivered at lunchtime', text: 'An exact time slot, straight into the room or the eating area.' },
    ],
    seoArticle: `
      <p>Some days, going out for lunch is not an option: a meeting that overruns, a tight deadline, a training day. A <strong>corporate lunch</strong> delivered to the office lets the team stay together and stay focused, without anyone losing forty minutes looking for a table.</p>
      <h2>Our lunch trays for eating at the office</h2>
      <p>Each tray is individual and complete: starter, main, dessert and bread, wrapped and labelled.</p>
      <p>Our menus start at <strong>{{ht:veg}}</strong> and cover both the regular working lunch and the day you are receiving someone: <strong>La Romaine</strong> and <strong>La Champêtre</strong> with chicken, <strong>La Boréale</strong> with fish, <strong>La Solaire</strong>, <strong>La Provençale</strong> and <strong>La Potagère</strong> vegetarian. The full compositions are on the <a href="/creations/plateaux-repas">lunch trays</a> page.</p>
      <h2>How many trays to order, and which ones?</h2>
      <p>One tray per person, that is the simple rule. For the mix, the reference point we give our clients: allow roughly <strong>one third vegetarian</strong> on a team whose preferences you do not know. It is almost always the right proportion, and it avoids the tray that sits on the table untouched.</p>
      <p>You can mix the collections and the categories freely in one order: just tell us the breakdown when we quote.</p>
      <h2>Delivered into the room, at the time you set</h2>
      <p>You give us a time, not a window. We deliver straight into the meeting room or the eating area, trays ready to put in front of each person. No service to organise, no washing up, nothing to lay out. Order by <strong>2 pm the day before</strong>, delivered across Paris and Île-de-France.</p>
      <h2>Meeting lunches, training days, leadership meetings</h2>
      <p>The individual tray is the format that keeps the working frame intact: everyone gets their own, nobody stands up, the meeting continues. That is what makes it the standard for training days, closing lunches and <a href="/occasions/petit-dejeuner-codir">leadership meetings</a>.</p>
      <h2>The whole menu halal and pork-free</h2>
      <p>As standard, across every tray, at no extra cost and with no separate order to manage. Vegan and gluten-free options to specify on the quote, with the numbers concerned.</p>
      <h2>Ordering your corporate lunches</h2>
      <p>Minimum order {{ht:min}}, delivery {{ht:liv}} in Paris and nearby towns, company invoice showing VAT. <a href="/devis">Ask for your quote</a>, answer within 24 hours.</p>`,
    faq: [
      {
        q: 'What does a corporate lunch tray cost?',
        a: 'Our lunch trays start at {{ht:veg}} per person, starter, main, dessert and bread included. Delivery is on top: {{ht:liv}} in Paris and nearby towns. The minimum order is {{ht:min}}.',
      },
      {
        q: 'How many vegetarian trays should we allow for a team?',
        a: 'Allow roughly one third vegetarian on a team whose preferences you do not know. It is almost always the right proportion, and it avoids trays sitting on the table untouched.',
      },
      {
        q: 'Can we mix different trays in one order?',
        a: 'Yes, and we recommend it so everyone is covered. You can mix the categories, vegetarian, chicken, fish, just tell us the breakdown when you order.',
      },
      {
        q: 'Do you deliver at a precise time for lunch?',
        a: 'Yes, you give us a time rather than a window. We deliver at the agreed time, straight into the meeting room or the eating area, trays ready to put in front of each person.',
      },
    ],
  },

  'cocktail-entreprise': {
    name: 'Corporate cocktail reception',
    heroTitle: 'Organising a corporate cocktail reception in Paris',
    heroDescription: "A product launch, a leaving party, an end-of-year reception: L'Écrin Traiteur delivers savoury and sweet cocktail menus, ready to share with colleagues or with your guests.",
    piliers: [
      { title: 'Savoury and sweet, in balance', text: 'Every menu mixes savoury canapés and sweet things, all shaped by hand.' },
      { title: 'Three formats', text: "L'Invitation, La Réception or La Célébration, from an informal drink to a standing dinner." },
      { title: 'Ready to serve', text: 'Delivered on platters, with nothing to prepare or lay out on your side.' },
    ],
    seoArticle: `
      <p><strong>A corporate cocktail reception delivered in Paris costs {{ht:inv}} to {{ht:cel}} per person</strong> at L'Écrin Traiteur, depending on the menu: L'Invitation (8 pieces per person), La Réception (12 pieces) or La Célébration (16 pieces). Each one mixes savoury and sweet canapés shaped by hand, delivered ready to serve across Paris and Île-de-France. Order until 2 pm the day before, minimum order {{ht:min}}, delivery {{ht:liv}} in Paris and nearby towns, quote within 24 hours.</p>
      <p>A <strong>corporate cocktail reception</strong> marks something: a product launch, an opening, a leaving party, a new year reception, receiving partners. Standing, your guests move and talk, without the constraint of table service. What is on the platters feeds directly into the atmosphere and into the impression you leave, and that is what the three menus below are built to carry.</p>
      <h2>The three cocktail menus</h2>
      <div class="tbl-wrap"><table>
      <thead><tr><th>Menu</th><th>Pieces per person</th><th>Savoury and sweet</th><th>Price per person excl. VAT</th><th>The moment it suits</th></tr></thead>
      <tbody>
      <tr><td><strong>L'Invitation</strong></td><td>8</td><td>6 savoury, 2 sweet</td><td>{{e:inv}}</td><td>Drinks: afterwork, a leaving party, a welcome before an event (1 to 2 hrs)</td></tr>
      <tr><td><strong>La Réception</strong></td><td>12</td><td>9 savoury, 3 sweet</td><td>{{e:rec}}</td><td>Light lunch, partner evening, an opening (1.5 to 2 hrs)</td></tr>
      <tr><td><strong>La Célébration</strong></td><td>16</td><td>12 savoury, 4 sweet</td><td>{{e:cel}}</td><td>Standing dinner: the reception replaces dinner (2.5 to 3 hrs)</td></tr>
      </tbody>
      </table></div>
      <p>La Réception is the one chosen most often: it covers land and sea without going as far as a full dinner. The compositions, piece by piece, are on the <a href="/creations/cocktails">cocktail menus</a> page.</p>
      <h2>How many pieces per person, by format</h2>
      <div class="tbl-wrap"><table>
      <thead><tr><th>Format</th><th>Length</th><th>Pieces per person</th><th>Our menu</th></tr></thead>
      <tbody>
      <tr><td><strong>Drinks, afterwork</strong></td><td>1 to 2 hrs</td><td>6 to 8</td><td>L'Invitation, 8 pieces</td></tr>
      <tr><td><strong>Light lunch, replaces lunch</strong></td><td>1.5 to 2 hrs</td><td>12 to 14</td><td>La Réception, 12 pieces</td></tr>
      <tr><td><strong>Standing dinner, replaces dinner</strong></td><td>2.5 to 3 hrs</td><td>16 to 18</td><td>La Célébration, 16 pieces</td></tr>
      </tbody>
      </table></div>
      <p>When in doubt, go generous: add 10% to the confirmed headcount. A small surplus gets shared; a shortfall gets noticed. The full reasoning is in our guide to <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">how many canapés per person</a>.</p>
      <h2>What it costs: examples for 20 and 50 people</h2>
      <div class="tbl-wrap"><table>
      <thead><tr><th>People</th><th>L'Invitation, 8 pieces</th><th>La Réception, 12 pieces</th><th>La Célébration, 16 pieces</th></tr></thead>
      <tbody>
      <tr><td><strong>20 people</strong></td><td>{{pc:inv:20}} pieces, {{htn:inv:20}}</td><td>{{pc:rec:20}} pieces, {{htn:rec:20}}</td><td>{{pc:cel:20}} pieces, {{htn:cel:20}}</td></tr>
      <tr><td><strong>50 people</strong></td><td>{{pc:inv:50}} pieces, {{htn:inv:50}}</td><td>{{pc:rec:50}} pieces, {{htn:rec:50}}</td><td>{{pc:cel:50}} pieces, {{htn:cel:50}}</td></tr>
      </tbody>
      </table></div>
      <p>Totals exclude delivery ({{ht:liv}} in Paris and nearby towns). The price per person is the same whatever the headcount.</p>
      <p><strong>For 20 people.</strong> A product launch at 6 pm in your offices, two hours of reception, clients and partners among the guests: La Réception, {{pc:rec:20}} pieces, {{htn:rec:20}}, or {{htl:rec:20}} with delivery.</p>
      <p><strong>For 50 people.</strong> A new year reception or an opening: La Réception, {{pc:rec:50}} pieces, {{htn:rec:50}}, or {{htl:rec:50}} with delivery. If the reception replaces dinner, La Célébration comes to {{htn:cel:50}}, or {{htl:cel:50}} with delivery.</p>
      <h2>Which menu for which occasion?</h2>
      <ul>
      <li><strong>A product launch, a welcome before an event.</strong> L'Invitation if the reception runs under two hours, La Réception if you are receiving clients or partners.</li>
      <li><strong>A leaving party, a welcome drink, an afterwork.</strong> L'Invitation, with a large cake to share. See our page on <a href="/occasions/afterwork-entreprise">afterwork catering in Paris</a>.</li>
      <li><strong>An opening, a partner evening, a new year reception.</strong> La Réception, or La Célébration if the reception replaces dinner.</li>
      <li><strong>An offsite or a convention.</strong> A closing reception at the end of the day, on top of the breaks and lunch: see <a href="/occasions/seminaire-entreprise">offsite catering</a>.</li>
      </ul>
      <h2>How do you organise a corporate cocktail reception?</h2>
      <p>A corporate cocktail reception is planned backwards from the date. The schedule below uses our real lead times: there is nothing to settle earlier than this, and nothing that can wait longer.</p>
      <div class="tbl-wrap"><table>
        <thead><tr><th>When</th><th>What gets decided</th></tr></thead>
        <tbody>
          <tr><td><strong>3 to 4 weeks ahead</strong></td><td>For a large reception: the quote request, the date and the venue. This is when the format is chosen, not the recipes.</td></tr>
          <tr><td><strong>1 to 2 weeks ahead</strong></td><td>The expected headcount, the exact address, the floor, the contact on site and the time the canapés must be on the table. This is when the maître d'hôtel is booked.</td></tr>
          <tr><td><strong>48 hours ahead</strong></td><td>Required from 50 people, or across several sites: the confirmed headcount and the dietary needs, with the number of people concerned.</td></tr>
          <tr><td><strong>By 2 pm the day before</strong></td><td>The last change to the headcount. After that, the order goes into production.</td></tr>
          <tr><td><strong>On the day</strong></td><td>Delivered at the agreed time, plated and ready to set down. Setting up on request, equipment collected afterwards.</td></tr>
        </tbody>
      </table></div>

      <h2>How long does a corporate cocktail reception last?</h2>
      <p>The length follows from the number of canapés, not the other way round: that is the most common mistake. Eight canapés carry one to two hours; sixteen replace a dinner and carry an evening.</p>
      <div class="tbl-wrap"><table>
        <thead><tr><th>Package</th><th>Canapés per person</th><th>Length it carries</th></tr></thead>
        <tbody>
          <tr><td><strong>L'Invitation</strong></td><td>8</td><td>1 to 2 hours, as drinks</td></tr>
          <tr><td><strong>La Réception</strong></td><td>12</td><td>1.5 to 2 hours, as a standing lunch</td></tr>
          <tr><td><strong>La Célébration</strong></td><td>16</td><td>2.5 to 3 hours, the reception replaces dinner</td></tr>
        </tbody>
      </table></div>
      <p>If the reception has to run longer than the package allows, move up a format rather than doubling the quantities of a shorter one: the savoury-to-sweet balance is calculated per package.</p>

      <h2>Do you need staff on site?</h2>
      <p>Not for a reception delivered ready to set down: the canapés arrive plated and there is nothing to prepare. A maître d'hôtel earns their place when you are hosting clients or partners and someone needs to restock, clear and keep the table clean while you are with your guests. Allow <strong>€250 excl. VAT for a 6-hour service</strong>. When we collect the reusable tableware and the thermoses after the event, delivery and collection come to {{ht:livrecup}} on one line in Paris, the 92 and the 94; elsewhere, the zone price plus {{ht:recup}}.</p>

      <h2>Drinks and dietary needs</h2>
      <p>A good reception does not need alcohol. We deliver Alain Milliat juices, waters and, for the toast, a 0% Blanc de Blancs Chardonnay, all in the same order. Count 3 to 4 drinks per person for a two-hour reception, with at least three different flavours: see our <a href="/creations/boissons">drinks</a>. The whole menu is halal and pork-free as standard, at no extra cost; vegetarian, vegan and gluten-free options to specify on the quote. The detail is on our <a href="/traiteur-halal">halal corporate catering</a> page.</p>
      <h2>Delivery, setup and lead times</h2>
      <p>We deliver to your venue, at the time of your event, presented ready to lay out; setup is available on request. Order until 2 pm the day before. From 50 people, or for several sites, give us at least 48 hours, and ask for the quote three to four weeks ahead for a large reception. Company invoice showing VAT. We deliver to <a href="/traiteur/paris">Paris</a>, <a href="/traiteur/la-defense">La Défense</a>, <a href="/traiteur/boulogne-billancourt">Boulogne-Billancourt</a>, <a href="/traiteur/neuilly-sur-seine">Neuilly-sur-Seine</a>, <a href="/traiteur/versailles">Versailles</a> and across Île-de-France.</p>
      <h2>Cocktail reception or sharing buffet?</h2>
      <p>A cocktail reception is eaten standing, piece by piece, and lets guests move around. A sharing buffet suits a team that stays seated, or a collective lunch. We have compared the two in our guide <a href="/journal/buffet-a-partager-ou-cocktail-entreprise-paris">sharing buffet or cocktail reception</a>. To organise a reception end to end, see <a href="/journal/organiser-cocktail-entreprise">organising a corporate cocktail reception</a>, then <a href="/devis">ask for your quote</a>: answer within 24 hours.</p>`,
    faq: [
      {
        q: 'What does a corporate cocktail reception cost in Paris?',
        a: "From {{ht:inv}} per person for L'Invitation (8 pieces) to {{ht:cel}} for La Célébration (16 pieces), with La Réception (12 pieces) at {{ht:rec}}. For 20 people, {{htn:inv:20}} to {{htn:cel:20}}; for 50 people, {{htn:inv:50}} to {{htn:cel:50}}. Delivery is on top: {{ht:liv}} in Paris and nearby towns. Quote within 24 hours.",
      },
      {
        q: 'How many pieces per person for a corporate reception?',
        a: 'Count 6 to 8 pieces for a one to two hour drinks reception, 12 to 14 for one that replaces lunch and 16 to 18 for a standing dinner. Add 10% to the confirmed headcount.',
      },
      {
        q: 'Which menu for a reception of 30 people?',
        a: "For an end-of-day drink among colleagues, L'Invitation is enough: {{pc:inv:30}} pieces for {{htn:inv:30}}. With clients or partners, choose La Réception: {{pc:rec:30}} pieces for {{htn:rec:30}}. If the reception replaces dinner, La Célébration is {{pc:cel:30}} pieces for {{htn:cel:30}}. Delivery on top: {{ht:liv}}.",
      },
      {
        q: 'How much notice do you need for a cocktail reception?',
        a: 'You can order until 2 pm the day before. From 50 people, or for several sites, give us at least 48 hours. For a large reception, ask for the quote three to four weeks ahead: we answer within 24 hours.',
      },
      {
        q: 'Can the composition be adapted to dietary needs?',
        a: 'The whole menu is halal and pork-free as standard. Vegetarian, vegan and gluten-free options are specified on the quote, with the numbers concerned. The three menus have a fixed composition, balanced between savoury and sweet: for anything specific, allergies, preferences, contact us before you order.',
      },
    ],
  },

  'afterwork-entreprise': {
    name: 'Afterwork',
    heroTitle: 'Afterwork catering in Paris',
    heroDescription: "End of the week, end of a project, or simply wanting to be together differently: L'Écrin Traiteur delivers relaxed cocktail menus for your team afterworks, with nothing to organise.",
    piliers: [
      { title: 'Relaxed by design', text: 'Things to pick at, built for a friendly hour between colleagues.' },
      { title: 'Ready in a few clicks', text: 'A simple order, no minimum number of people, for an afterwork planned or improvised.' },
      { title: 'There before the drinks', text: 'Delivered at the end of the day, at whatever time suits you.' },
    ],
    seoArticle: `
      <p><strong>An afterwork delivered in Paris costs {{ht:inv}} to {{ht:cel}} per person</strong>, depending on the menu: L'Invitation (8 savoury and sweet pieces), La Réception (12 pieces) or La Célébration (16 pieces). The platters arrive ready to put down, just before people gather. There is no minimum number of people, only a minimum order of {{ht:min}}, and delivery is {{ht:liv}} in Paris and nearby towns. Order until 2 pm the day before.</p>
      <p>The <strong>afterwork</strong> has settled into the habits of Paris companies: the end of a project, the close of a quarter, a new joiner arriving, or simply a heavy week that deserves people seeing each other differently. L'Écrin Traiteur delivers a buffet to pick at in your offices, across Paris and Île-de-France: nobody on your team has anything to lay out or arrange.</p>
      <h2>The three afterwork menus, with the price for 20 and 50 people</h2>
      <div class="tbl-wrap"><table>
      <thead><tr><th>Menu</th><th>Pieces per person</th><th>Price per person excl. VAT</th><th>For 20 people</th><th>For 50 people</th><th>Format we suggest</th></tr></thead>
      <tbody>
      <tr><td><strong>L'Invitation</strong></td><td>8</td><td>{{e:inv}}</td><td>{{en:inv:20}}</td><td>{{en:inv:50}}</td><td>A team afterwork, 1.5 to 2 hrs</td></tr>
      <tr><td><strong>La Réception</strong></td><td>12</td><td>{{e:rec}}</td><td>{{en:rec:20}}</td><td>{{en:rec:50}}</td><td>An afterwork over 2 hrs, or with outside guests</td></tr>
      <tr><td><strong>La Célébration</strong></td><td>16</td><td>{{e:cel}}</td><td>{{en:cel:20}}</td><td>{{en:cel:50}}</td><td>An afterwork that replaces dinner</td></tr>
      </tbody>
      </table></div>
      <p>Totals exclude delivery ({{ht:liv}} in Paris and nearby towns). The price per person is the same whatever the headcount: for 20 people on L'Invitation, the order comes to {{htl:inv:20}} with delivery.</p>
      <p>L'Invitation brings together cheese gougères, craquelin choux with tapenade, a pissaladière tartlet, a beetroot and goat's cheese millefeuille, a tandoori chicken skewer, a mini cheeseburger, then an all-chocolate tartlet and a fresh fruit skewer. La Réception adds a sweet potato, feta and Kalamata olive bite, marinated salmon with yellow beetroot, an organic prawn with mango and a praline dome. La Célébration adds a carrot cake with chervil, an avocado and feta tartlet, a grilled vegetable navette roll and a blueberry tartlet. The compositions are detailed on the <a href="/creations/cocktails">cocktail menus</a> page.</p>
      <h2>How many pieces per person for an afterwork?</h2>
      <p>The reference point we give our clients: <strong>8 pieces per person</strong> for an afterwork of 1.5 to 2 hours, <strong>12 pieces</strong> if it runs longer than two hours or if your guests are not eating dinner first, <strong>16 pieces</strong> when it replaces dinner. Keep roughly two thirds savoury to one third sweet, and add 10% to the confirmed headcount: a small surplus gets shared, a shortfall gets noticed. The savoury pieces go twice as fast as the sweet ones early in the evening, do not cut back on them. The full calculation by duration is in our guide to <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">how many canapés per person</a>.</p>
      <h2>How a 1.5 to 2 hour afterwork runs</h2>
      <div class="tbl-wrap"><table>
      <thead><tr><th>When</th><th>What happens</th></tr></thead>
      <tbody>
      <tr><td><strong>30 to 45 min before</strong></td><td>Platters delivered, put on the table, drinks chilled. Nothing else to prepare.</td></tr>
      <tr><td><strong>0 to 20 min</strong></td><td>Guests arrive, drinks go round, the first savoury pieces go. Leave the savoury platters for people to help themselves.</td></tr>
      <tr><td><strong>20 min to 1 hr</strong></td><td>The bulk of the service. This is the right moment for a word from the team or a toast, while everyone is there.</td></tr>
      <tr><td><strong>1 hr to 1.5 hrs</strong></td><td>The sweet pieces come to the front. For a leaving party, this is when the cake comes out.</td></tr>
      <tr><td><strong>After 1.5 hrs</strong></td><td>The platters stay out until the end, with no service to run.</td></tr>
      </tbody>
      </table></div>
      <p>Above 30 people, split the platters across two tables to avoid a queue at the start.</p>
      <h2>Drinks: alcohol-free, in the same order</h2>
      <p>We deliver the Alain Milliat juices, the waters and the glasses with the platters. Everything is alcohol-free: for the toast, our 0% Blanc de Blancs Chardonnay stands in for the bubbles, and nobody is left out. Count 3 to 4 drinks per person for two hours, with at least three different flavours. The whole selection is on the <a href="/creations/boissons">drinks</a> page.</p>
      <h2>Afterwork, leaving party, welcome drink</h2>
      <p>The format suits anything celebrated standing up. For a leaving party or an arrival, we often add a large cake to share alongside the savoury platters: see our <a href="/creations/pauses-gourmandes">cakes to share</a>. For an afterwork with something made in front of people, our <a href="/creations/animations-culinaires">live food stations</a> work alongside the platters. The organising reference points, format, budget, drinks, are gathered in our guide to <a href="/journal/traiteur-afterwork-pot-depart-entreprise-paris">organising an afterwork or a leaving party</a>. For a larger reception, a launch, an opening, a new year party, the <a href="/creations/cocktails">corporate cocktail reception</a> page covers the formats, the quantities and the budgets.</p>
      <h2>Halal and pork-free, at no extra cost</h2>
      <p>The whole menu is halal and pork-free as standard. Vegetarian, vegan and gluten-free options are specified on the quote with the numbers concerned, and the fresh fruit skewers are vegan and gluten-free. See our <a href="/traiteur-halal">halal corporate catering</a> page.</p>
      <h2>Delivery, lead times and area</h2>
      <p>You tell us the time of your afterwork and we deliver just before. The platters arrive arranged, wrapped, ready to put down. We deliver central Paris and the Hauts-de-Seine: <a href="/traiteur/la-defense">La Défense</a>, <a href="/traiteur/boulogne-billancourt">Boulogne-Billancourt</a>, <a href="/traiteur/levallois-perret">Levallois-Perret</a>, <a href="/traiteur/neuilly-sur-seine">Neuilly-sur-Seine</a>, as well as <a href="/traiteur">the whole of Île-de-France</a>, with the further towns priced on the quote. Order until 2 pm the day before; from 50 people, give us 48 hours. An afterwork for ten colleagues or for sixty: minimum order {{ht:min}}, company invoice showing VAT, <a href="/devis">quote within 24 hours</a>.</p>`,
    faq: [
      {
        q: 'What does afterwork catering cost in Paris?',
        a: "Count {{ht:inv}} per person for L'Invitation (8 pieces), {{ht:rec}} for La Réception (12 pieces) and {{ht:cel}} for La Célébration (16 pieces). For 20 people that is {{htn:inv:20}}, {{htn:rec:20}} or {{htn:cel:20}}; for 50 people, {{htn:inv:50}}, {{htn:rec:50}} or {{htn:cel:50}}. Delivery is on top: {{ht:liv}} in Paris and nearby towns. Quote within 24 hours.",
      },
      {
        q: 'How many pieces per person for an afterwork?',
        a: '8 pieces per person for an afterwork of 1.5 to 2 hours, 12 beyond two hours, 16 if it replaces dinner. Allow roughly two thirds savoury to one third sweet and 10% margin on the confirmed headcount: the savoury pieces go twice as fast as the sweet ones.',
      },
      {
        q: 'Which menu for an afterwork of 30 people?',
        a: "For a team afterwork of 1.5 to 2 hours, L'Invitation is enough: {{pc:inv:30}} pieces for {{htn:inv:30}}. If it runs past two hours or there are outside guests, La Réception ({{pc:rec:30}} pieces, {{htn:rec:30}}) is the one chosen most. La Célébration ({{pc:cel:30}} pieces, {{htn:cel:30}}) replaces dinner. Delivery on top: {{ht:liv}}.",
      },
      {
        q: 'What time do you deliver an afterwork, and how much notice do you need?',
        a: 'You give us the time of your drinks and we deliver just before, platters ready to put down. Order until 2 pm the day before; from 50 people, give us 48 hours. For a same-day request, contact us: we do what we can depending on what is available.',
      },
      {
        q: 'Is there a minimum number of people for an afterwork?',
        a: "No, no minimum number of guests. Only the {{ht:min}} minimum order applies, and that is reached at 2 people on L'Invitation ({{htn:inv:2}}). We deliver for ten colleagues as readily as for sixty.",
      },
    ],
  },
}

export const enOccasion = (slug) => EN_OCCASIONS[slug] || null
export const slugsOccasionsEn = () => Object.keys(EN_OCCASIONS).filter(s => s !== 'cocktail-entreprise') // fusionnée dans /en/creations/cocktails (24/10/2026)

/* Question commune à toutes les pages Occasions, en anglais. */
export const FAQ_DERNIERE_MINUTE_EN = {
  q: 'Do you take last-minute orders?',
  a: "The rule is still to order by 2 pm the day before. For a same-morning request, call 01 74 54 23 10: we do what we can depending on what is available that day. In Boulogne-Billancourt, where our kitchen is, we take same-morning orders until 10 am from that day's selection.",
}
