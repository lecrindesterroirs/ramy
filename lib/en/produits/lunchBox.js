/*
  Lunch box, textes anglais.

  Surcouche de texte seulement : prix, photos, allergènes et régimes restent
  lus dans app/creations/lunch-box/data.js, qui est la seule source. Un prix
  ne doit jamais se corriger à deux endroits.

  Les NOMS de produits ne sont pas traduits : « La Parisienne » reste
  « La Parisienne ». C'est le nom qui figurera sur le devis et sur la
  commande du client — le traduire créerait un écart entre ce qu'il lit sur
  le site et ce qu'il reçoit par mail.
*/

const ENTREE = 'Your choice of:\nCucumber and chive salad\nTomato and mozzarella salad'
const DESSERT = 'Your choice of:\nSlice of marble cake\nRaspberry madeleine'
const DESCRIPTION = 'A sandwich on baguette or brioche bread, a starter and a dessert of your choice, napkin and cutlery included. Drink optional.'

const seo = (nom, garniture, texte) => ({
  seoTitle: `${nom}: the ${garniture.toLowerCase()} lunch box for corporate lunches in Paris`,
  seoHtml: `<p>${texte}</p><h2>Delivered across Paris and Île-de-France</h2><p>Order until 2 pm the day before, delivered on site from 6:30 am. Any headcount, dietary needs catered for, company invoice showing VAT. Personalised quote within 24 hours.</p>`,
})

export const EN_LUNCH_BOX = {
  lb1: {
    sousTitre: 'Chicken mayonnaise · Baguette or brioche bread',
    entree: ENTREE,
    plat: 'Chicken mayonnaise, your choice of:\nOn baguette\nOn brioche bread',
    dessert: DESSERT,
    description: DESCRIPTION,
    ...seo('La Parisienne', 'chicken mayonnaise',
      "La Parisienne is the one everyone eats: shredded chicken, mayonnaise, lettuce and tomato in a baguette from our partner baker. The one you order when you don't know the room."),
  },
  lb2: {
    sousTitre: 'Curried chicken · Baguette or brioche bread',
    entree: ENTREE,
    plat: 'Curried chicken, your choice of:\nOn baguette\nOn brioche bread',
    dessert: DESSERT,
    description: DESCRIPTION,
    ...seo("L'Épicée", 'curried chicken',
      "L'Épicée wakes lunch up: curried chicken, fragrant and generous, on a baguette from our partner baker or on brioche bread."),
  },
  lb3: {
    sousTitre: 'Egg and emmental · Baguette or brioche bread',
    entree: ENTREE,
    plat: 'Egg and emmental, your choice of:\nOn baguette\nOn brioche bread',
    dessert: DESSERT,
    description: DESCRIPTION,
    ...seo('La Fermière', 'egg and emmental',
      'La Fermière is the vegetarian option that does not feel like a fallback: egg, emmental, lettuce and tomato, simple and filling.'),
  },
  lb4: {
    sousTitre: 'Salmon and avocado · Baguette or brioche bread',
    entree: ENTREE,
    plat: 'Salmon and avocado, your choice of:\nOn baguette\nOn brioche bread',
    dessert: DESSERT,
    description: DESCRIPTION,
    ...seo('La Nordique', 'salmon and avocado',
      'La Nordique is the finest of the range: smoked salmon, avocado and a herb cream, for a lunch that feels a little more considered.'),
  },
  lb9: {
    sousTitre: 'Tuna mayonnaise · Baguette or brioche bread',
    entree: ENTREE,
    plat: 'Tuna mayonnaise, your choice of:\nOn baguette\nOn brioche bread',
    dessert: DESSERT,
    description: DESCRIPTION,
    ...seo("L'Océane", 'tuna mayonnaise',
      "L'Océane is the classic that never disappoints: tuna, mayonnaise, lettuce and tomato, generous without being heavy."),
  },
}

/** Fiche anglaise d'une lunch box, ou null si elle n'est pas traduite. */
export const enLunchBox = (id) => EN_LUNCH_BOX[id] || null
export const slugsLunchBoxEn = () => Object.keys(EN_LUNCH_BOX)
