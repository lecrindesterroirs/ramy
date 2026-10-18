/*
  Pages Univers restantes, textes anglais : avis clients, cas clients,
  nos engagements. (Notre méthode porte ses textes dans sa propre page.)

  Les chiffres de confiance viennent de PROOF (lib/site.js), qui a déjà ses
  variantes fr et en : ils ne sont pas recopiés ici.

  Les témoignages sont les mots réels de personnes nommées : la mention
  « Translated from French » les accompagne, comme sur l'accueil.
*/

/* Témoignages, par nom de société : les citations sont les mêmes que sur
   l'accueil, traduites une seule fois là-bas puis reprises ici. */
export const EN_TEMOIGNAGES_UNIVERS = {
  'Le Monde': {
    role: 'Office Manager, Digital Division',
    context: 'Press breakfast',
    text: 'Every single product got excellent feedback — the yoghurts, the pastries, the fruit juices — with a special mention for the madeleines, which were delicious, and the strawberry nectar, which went down extremely well.',
  },
  'SIA Partners': {
    role: 'Office Manager',
    context: 'Company offsite',
    text: 'The madeleines are very good, a wide choice of flavours, pastries, juice, and the service was excellent. The driver even helped us set everything up.',
  },
  'Stellantis': {
    role: 'Marketing Manager',
    context: 'Open days',
    text: "I have used L'Écrin several times for our client events and our open days, and the experience is always flawless.",
  },
}

export const temoignageEn = (t) => {
  const en = EN_TEMOIGNAGES_UNIVERS[t.company]
  return en ? { ...t, ...en } : t
}

export const T_AVIS = {
  eyebrow: "L'Écrin · Client reviews",
  title: "What our clients say about L'Écrin Traiteur",
  traduit: 'Reviews translated from French.',
  noteH2: 'Our Google rating',
  parlentH2: 'In their own words',
  confianceH2: 'They trust us',
  releventH2: 'What clients pick out',
  tableHead: ['Point', 'What we do'],
  tableRows: [
    ['The food', 'Pure butter pastries, Mado Paris madeleines, Alain Milliat juices, yoghurts from la Ferme de Viltain: makers we name.'],
    ['Punctuality', 'Delivered from 6:30 am, at the exact time asked for, by our own team.'],
    ['Dietary needs', 'The whole menu is halal and pork-free, with no alcohol; vegetarian, vegan and gluten-free on request.'],
    ['Simplicity', 'Order until 2 pm the day before, quote within 24 hours, prices published.'],
  ],
  fil: ['Home', 'Client reviews'],
  faq: [
    { nameFr: "Que penser de L'Écrin Traiteur ?", name: "What is L'Écrin Traiteur like?" },
    { nameFr: "L'Écrin Traiteur est-il fiable pour un événement d'entreprise ?", name: "Is L'Écrin Traiteur reliable for a corporate event?", answer: 'Bain & Company trusted us with 46 deliveries between February and October 2026, and Sia Partners with 9 breakfasts for 100 people. The detail is in our client cases.' },
    { nameFr: "Où lire les avis sur L'Écrin Traiteur ?", name: "Where can we read reviews of L'Écrin Traiteur?" },
  ],
}

export const T_CAS = {
  eyebrow: "L'Écrin · Client cases",
  title: 'Three jobs, exactly as we delivered them',
  intro: 'The quantities and the times below come from the orders we have delivered, checked on 15 October 2026. The clients named here agreed to be named; the others stay anonymous.',
  labels: { contexte: 'Context.', demande: 'The ask.', livraison: 'What we deliver.', chiffres: 'In numbers.' },
  votre: 'Your own job',
  votreTexte1: 'Give us your headcount, your date and your constraints: we apply the same quantity rules and send you a ',
  votreLien1: 'quote within 24 hours',
  votreTexte2: '. The quantities by headcount are set out in our ',
  votreLien2: 'guide to the breakfast budget',
  votreTexte3: '.',
  fil: ['Home', 'Client cases'],
  cas: [
    {
      titre: 'Bain & Company: the weekly breakfast',
      contexte: 'A consulting firm with offices in Paris. The teams run meeting breakfasts several times a month.',
      demande: 'A breakfast ready before the teams arrive, for 8 to 40 people depending on the meeting, sometimes from 6:30 am.',
      livraison: ['Mini pastries, madeleines, house loaf cakes, fruit skewers, coffee and Alain Milliat juices, usually delivered at 7:45 am.', 'Depending on the week, afternoon breaks, and at the end of August, three days of offsite lunches.'],
      chiffres: '46 deliveries between 23 February and 14 October 2026: 38 breakfasts, 3 afternoon breaks, 3 offsite days and 2 lunches.',
      lecon: 'A breakfast caterer is mostly there so you stop thinking about it: same time, same quantities, without having to ask for everything again each week.',
    },
    {
      titre: 'Sia Partners: 100 people at 7:30 am',
      contexte: 'A consulting firm with offices in Paris. Team mornings of around a hundred people, coming back regularly since April.',
      demande: 'A breakfast for 100 people, set up between 7:30 and 8:00 am.',
      livraison: ['7 platters of 30 mini pastries, which is 210 pieces.', '3 platters of 30 mini chouquettes.', '2 boxes of 50 madeleines.', '60 fruit skewers.'],
      chiffres: '9 breakfasts delivered between 16 April and 7 October 2026.',
      lecon: '"The driver even helped us set everything up." Rose Jean, Office Manager, Sia Partners. (Translated from French.)',
    },
    {
      titre: "A three-day offsite in the Val-d'Oise",
      contexte: 'An offsite organiser, for a three-day event in Ermont (95), from 16 to 18 June 2026.',
      demande: 'Breakfast and lunch for the participants, three days running, outside Paris.',
      livraison: ['Each morning at 7:00 am: 250 to 350 mini pastries, 5 coffee urns and 1 of tea.', 'Each midday at 11:30 am: 59 to 71 lunch trays across five menus (one vegetarian, two meat, two fish), with coffee and tea.'],
      chiffres: '6 deliveries in 3 days, including 193 lunch trays. Earlier that month the same client had trusted us with two mornings of 150 and 100 people in Nanterre.',
      lecon: 'An offsite is planned like a delivery round: one menu per diet, the same times every day, and a team that also delivers outside Paris.',
    },
  ],
}

export const T_ENGAGEMENTS = {
  eyebrow: "L'Écrin · Our Commitments",
  titreA: "At L'Écrin,",
  titreB: 'we commit to…',
  signature: "L'Écrin Traiteur · Paris",
  fil: ['Home', 'Our commitments'],
  engagements: [
    {
      titre: 'A selection with no compromise',
      texte: 'listing only what we have tasted, tested and questioned. Never a catalogue handed to us. A maker gets in because they do it better than the others. For no other reason.',
    },
    {
      titre: 'Ingredients we can name',
      texte: 'being able to name every ingredient: French flours, organic products, no palm oil, single-origin chocolate, whole fruit, zero artificial flavouring.',
    },
    {
      titre: 'Short supply chains, when they serve the food',
      texte: 'favouring local growers when being close genuinely makes the product better: the orchard in the Yvelines, la Ferme de Viltain, the bakery in Boulogne. Not as an argument — as a fact.',
    },
    {
      titre: 'Packaging we know the origin of',
      texte: 'serving on untreated French poplar wood, PEFC certified, made in Carcassonne by a company that has worked with four sheltered workshops in the Aude since 1994. A container gets seen and thrown away: we may as well know where it came from.',
    },
    {
      titre: 'A delivery that is part of the service',
      texte: 'delivery from 6:30 am by our own team, trained to our standards, with setup on request. Never subcontracted. The last gesture counts as much as the first.',
    },
  ],
}
