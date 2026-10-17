/*
  Plateaux repas, textes anglais.

  Surcouche de texte seulement : prix, collection, catégorie et photo restent
  lus dans app/creations/plateaux-repas/data.js. Les noms — La Romaine,
  La Solaire — ne sont pas traduits : ce sont ceux du devis et de la commande.
*/

export const EN_PLATEAUX_REPAS = {
  e1: {
    plat: 'Hearty quinoa, falafel and tahini sauce',
    dessert: 'Signature cookie',
    seoTitle: 'La Solaire: the vegetarian lunch tray for corporate lunches in Paris',
    seoHtml: `
      <p>La Solaire is the vegetarian tray that no one treats as a fallback: hearty quinoa, falafel and a tahini sauce, finished with our signature cookie. A complete menu from the Essentiel collection, put together the same morning.</p>
      <h2>A vegetarian tray that holds its own</h2>
      <p>No meat, and nothing missing either. Quinoa, chickpeas, herbs and a tahini sauce make a dish that fills you up without weighing you down — the one to order when part of the room does not eat meat.</p>
      <h2>Delivered across Paris and Île-de-France</h2>
      <p>Order until 2 pm the day before, delivered on site from 6:30 am, cutlery and napkin included. Company invoice showing VAT, personalised quote within 24 hours.</p>`,
  },
  e2: {
    entree: 'Heritage tomato and basil salad',
    plat: 'Caesar salad with roast chicken',
    dessert: 'Brownie',
    seoTitle: 'La Romaine: the Caesar chicken lunch tray for corporate lunches in Paris',
    seoHtml: `
      <p>La Romaine puts the Caesar salad back where it belongs: a generous roast chicken salad, opened by a heritage tomato and basil salad and closed with a brownie. A complete, filling menu from the Essentiel collection, put together the same morning. Right for a lunch meeting or a committee with no time to go out.</p>
      <h2>A classic done properly, prepared the same day</h2>
      <p>Roast chicken, crisp lettuce, shaved cheese and croutons, dressed at the last moment so nothing goes soft on the way.</p>
      <h2>Delivered across Paris and Île-de-France</h2>
      <p>Order until 2 pm the day before, delivered on site from 6:30 am, cutlery and napkin included. Company invoice showing VAT, personalised quote within 24 hours.</p>`,
  },
  e3: {
    entree: 'Cucumber salad with yoghurt and chives',
    plat: 'Pasta with pesto, mozzarella and semi-dried tomatoes',
    dessert: 'Red berry panna cotta',
    seoTitle: 'La Provençale: the vegetarian pasta lunch tray for corporate lunches in Paris',
    seoHtml: `
      <p>La Provençale smells of the south: aubergine caviar and rosemary focaccia to start, pasta with pesto, mozzarella and semi-dried tomatoes, then a red berry panna cotta. Vegetarian, generous, and one of the trays our clients reorder most.</p>
      <h2>The south, without the heaviness</h2>
      <p>Pesto made with fresh basil, mozzarella, semi-dried tomatoes: a dish that is just as good cold, which matters when lunch slips by half an hour.</p>
      <h2>Delivered across Paris and Île-de-France</h2>
      <p>Order until 2 pm the day before, delivered on site from 6:30 am, cutlery and napkin included. Company invoice showing VAT, personalised quote within 24 hours.</p>`,
  },
  e4: {
    entree: 'Cucumber salad with yoghurt and chives',
    plat: 'Sliced chicken and tabbouleh',
    dessert: 'Fresh fruit salad',
    seoTitle: 'La Champêtre: the chicken and tabbouleh lunch tray for corporate lunches in Paris',
    seoHtml: `
      <p>La Champêtre is the light one: sliced chicken and tabbouleh, a cucumber salad with yoghurt and chives to start, a fresh fruit salad to finish. The tray to order when the afternoon is long and nobody wants to feel heavy.</p>
      <h2>Light does not mean small</h2>
      <p>Herb tabbouleh, chicken sliced the same morning, and fruit cut on the day rather than a sugary dessert.</p>
      <h2>Delivered across Paris and Île-de-France</h2>
      <p>Order until 2 pm the day before, delivered on site from 6:30 am, cutlery and napkin included. Company invoice showing VAT, personalised quote within 24 hours.</p>`,
  },
  e5: {
    entree: 'Celeriac remoulade',
    plat: 'Sautéed potatoes with pan-fried salmon',
    dessert: 'Apple and strawberry compote',
    seoTitle: 'La Boréale: the salmon lunch tray for corporate lunches in Paris',
    seoHtml: `
      <p>La Boréale is the fish option, and the most substantial of the Essentiel collection: sautéed potatoes with pan-fried salmon, a celeriac remoulade to start, an apple and strawberry compote to finish.</p>
      <h2>Fish that is actually a meal</h2>
      <p>Salmon pan-fried and potatoes sautéed the same morning: a warm, filling dish, for the days when a salad will not do.</p>
      <h2>Delivered across Paris and Île-de-France</h2>
      <p>Order until 2 pm the day before, delivered on site from 6:30 am, cutlery and napkin included. Company invoice showing VAT, personalised quote within 24 hours.</p>`,
  },
  e6: {
    entree: 'Lentil and feta salad',
    plat: 'Summer vegetable tart',
    dessert: 'Fromage blanc with granola',
    seoTitle: 'La Potagère: the vegetable tart lunch tray for corporate lunches in Paris',
    seoHtml: `
      <p>La Potagère is vegetarian and vegetable-led: a summer vegetable tart, a lentil and feta salad to start, fromage blanc with granola to finish. The tray for people who want vegetables as the dish, not as a side.</p>
      <h2>Vegetables as the main event</h2>
      <p>A tart baked the same morning, lentils for substance, feta for salt: a balanced plate that does not rely on meat to be satisfying.</p>
      <h2>Delivered across Paris and Île-de-France</h2>
      <p>Order until 2 pm the day before, delivered on site from 6:30 am, cutlery and napkin included. Company invoice showing VAT, personalised quote within 24 hours.</p>`,
  },
}

export const enPlateauRepas = (id) => EN_PLATEAUX_REPAS[id] || null
export const slugsPlateauxRepasEn = () => Object.keys(EN_PLATEAUX_REPAS)
