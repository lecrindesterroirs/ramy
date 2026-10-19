/*
  Page /traiteur-healthy, textes anglais.

  Surcouche de texte seulement : photos et liens restent lus dans la page
  française. Aucun prix n'apparaît sur cette page, rien à tenir côté montants.

  Point de prudence tenu mot pour mot comme en français : le sans gluten est
  une « adaptation sur demande », jamais une garantie. On ne rajoute pas ici
  l'avertissement sur la farine qui n'est pas dans la version française, et on
  n'en retire aucun : les deux langues disent la même chose, ni plus ni moins.

  Les href gardent leur chemin français et passent par reecrireLiensEnDans().
*/

export const EN_HEALTHY = {
  /* ── Hero ── */
  eyebrow: 'Corporate catering · Paris & Île-de-France',
  heroAlt: "Healthy corporate catering, a platter of fresh seasonal fruit, L'Écrin Traiteur",
  h1a: 'Healthy Catering',
  h1b: 'Vegan & Vegetarian',
  heroDesc: 'A corporate caterer that does people good: seasonal fruit, farm yoghurts, pressed juices and lighter options, without ever giving up the pleasure. Delivered to your offices from 6:30 am.',
  ctaDevis: 'Get a quote →',
  ctaPdj: 'See our breakfasts',
  badges: ['Fresh & seasonal', 'Vegetarian, vegan, gluten-free', "Artisan juices & yoghurts", 'Rated 5/5 on Google'],

  /* ── Les 3 piliers ── */
  piliersEyebrow: 'Wholesome without being joyless',
  piliersTitre: 'Fresh food that is\nactually a pleasure',
  piliers: [
    { label: 'Freshness', titre: 'Fresh & seasonal',
      desc: 'Seasonal fruit cut to order, fruit baskets, farm yoghurts from the Ferme de Viltain: products that change with the season and keep their real freshness, prepared as close to delivery as possible.' },
    { label: 'Balance', titre: 'Light, without losing the taste',
      desc: 'Alain Milliat pressed juices, compotes with no added sugar, lighter alternatives to pastries: enough to build a break that does you good without being bland or joyless.' },
    { label: 'For everyone', titre: 'Vegetarian, vegan, gluten-free',
      desc: 'Breakfasts, lunch trays and buffets all come in vegetarian and vegan versions, with gluten-free adaptations on request. Nobody is left out.' },
  ],

  /* ── Prestations ── */
  prestationsEyebrow: 'Our services',
  prestationsTitre: 'Fresh food, from\nmorning to lunch',
  prestationsCta: 'Explore →',
  prestations: [
    { label: 'Breakfasts & Breaks', desc: 'Seasonal fruit, farm yoghurts, pressed juices and lighter pastries, delivered from 6:30 am.' },
    { label: 'Lunch Trays', desc: 'Balanced working lunches, with vegetarian and vegan options on every menu.' },
    { label: 'Drinks & Juices', desc: 'Alain Milliat juices and nectars, waters and hot drinks to go with your breaks.' },
  ],

  /* ── FAQ ── */
  faqEyebrow: 'Frequently asked questions',
  faqTitre: 'Healthy catering, answered',
  faq: [
    { q: 'Do you offer healthy, balanced options?',
      a: 'Yes: seasonal fruit cut to order, farm yoghurts from the Ferme de Viltain, Alain Milliat pressed juices, compotes with no added sugar and lighter pastries. Enough to build a break that does your teams good.' },
    { q: 'Can we put together a balanced breakfast at the office?',
      a: 'Of course. We adjust the selection to lighten the sweet side and give the fresh produce pride of place: fruit, dairy, juices and wholemeal breads, to suit what you want and your headcount.' },
    { q: 'Do you handle vegetarian, vegan and gluten-free diets?',
      a: 'Yes. Our services come in vegetarian and vegan versions, and we make gluten-free adaptations on request, so that everyone has a place at the table.' },
    { q: 'Where does your fresh produce come from?',
      a: 'From growers we identify: yoghurts from the Ferme de Viltain, juices from Alain Milliat, seasonal fruit. We favour short supply chains when being close genuinely improves the product.' },
  ],

  /* ── Liens connexes ── */
  relatedEyebrow: 'Explore our services',
  relatedTitre: 'Build a wholesome, generous break',
  related: [
    { href: '/creations/petits-dejeuners-et-pauses', title: 'Breakfasts & Breaks', meta: 'Delivered from 6:30 am' },
    { href: '/creations/boissons', title: 'Drinks & Juices', meta: 'Alain Milliat juices' },
    { href: '/creations/plateaux-repas', title: 'Lunch Trays', meta: 'Working lunches' },
    { href: '/devis', title: 'Ask for a quote', meta: 'A quick answer' },
  ],

  /* ── Clôture ── */
  closingEyebrow: 'Healthy corporate catering',
  closingTitre: 'Fresh food that is\nactually a pleasure.',
  closingBody: 'Seasonal fruit, farm yoghurts, pressed juices and lighter options, available in vegetarian, vegan and gluten-free versions: every service does your teams good without ever giving up on taste, across Paris and Île-de-France.',
  closingCta: 'A wholesome break to organise?',
  args: [
    { icon: 'quality',  titre: 'Fresh & seasonal',     desc: 'Fruit cut to order, farm yoghurts, products that follow the season and keep their freshness.' },
    { icon: 'custom',   titre: 'Light, not bland',     desc: 'Pressed juices, compotes with no added sugar, lighter alternatives that genuinely taste of something.' },
    { icon: 'support',  titre: 'Every diet',           desc: 'Vegetarian, vegan, gluten-free on request: everyone has a place at the table.' },
    { icon: 'delivery', titre: 'Delivered from 6:30 am', desc: 'Delivered and set up by our own team across Paris and Île-de-France, every weekday morning.' },
  ],

  /* ── Article SEO ── */
  seoArticle: `
    <h2>A healthy corporate caterer, without giving up the pleasure</h2>
    <p>Eating well at the office should not mean eating dully. At <strong>L'Écrin Traiteur</strong>, the healthy version means <strong>fresh and seasonal</strong> food that tastes of something: fruit cut to order, farm yoghurts from the Ferme de Viltain, Alain Milliat pressed juices, compotes with no added sugar. We lighten the sweet side and keep the pleasure.</p>
    <h2>Fresh, seasonal, sourced from named growers</h2>
    <p>Our fresh produce comes from growers we name, in short supply chains when being close genuinely improves the product. The fruit changes with the season, the dairy is from the farm, the juices are pressed: a break that does your teams good without going through the industrial route.</p>
    <h2>A vegan and vegetarian caterer, adapted to every diet</h2>
    <p>Beyond the fresh produce, our services come in <strong>vegetarian and vegan</strong> versions, with <strong>gluten-free adaptations on request</strong>. A morning meeting, a team breakfast or a working lunch, for 10 to 300 people, delivered from 6:30 am across Paris and Île-de-France. <a href="/devis">Ask for your free quote</a> and build a break that is both wholesome and generous.</p>
  `,

  /* ── Schéma ── */
  breadcrumb: [{ name: 'Home' }, { name: 'Healthy catering' }],
  schemaDesc: 'Healthy corporate caterer in Paris and Île-de-France: seasonal fruit, farm yoghurts, pressed juices, vegetarian, vegan and gluten-free options. Balanced breakfasts delivered from 6:30 am.',
}
