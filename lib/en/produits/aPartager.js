/*
  Surcouche anglaise des menus à partager (app/creations/a-partager/data.js).
  Seuls les textes sont ici : les prix, les photos et l'ordre restent lus dans
  la donnée française. Les noms de menus (Le Méditerranéen, Le Parisien,
  Le Jardin) ne se traduisent pas : ce sont des noms de gamme.
*/
const EN_MENUS = {
  mediterraneen: {
    accroche: 'Sunshine in the middle of the table: freshness, herbs and olive oil.',
    salees: [
      'Greek salad',
      'Tabbouleh with fresh herbs & lemon',
      'Falafel skewer & lemony tahini cream',
      'Salmon & cream cheese roll',
      'Aubergine caviar & toasted breads',
      'Aged cheese platter',
    ],
    sucrees: [
      'Signature brownie',
      'Lemon & lemon curd pot',
    ],
  },
  parisien: {
    accroche: 'Bistro classics, in pieces to share.',
    salees: [
      'Pasta salad with pesto, confit tomatoes & mozzarella',
      "Roast potatoes, Isigny cream & chives",
      'Chicken breast club sandwich',
      'Mini baguette with curried chicken',
      'Artisan charcuterie platter',
      'Heritage tomato & basil salad',
    ],
    sucrees: [
      'Red berry panna cotta',
      'Fresh fruit skewers',
    ],
  },
  jardin: {
    accroche: '100% vegetarian, with no compromise on indulgence.',
    salees: [
      'Lentil salad, feta & roasted vegetables',
      'Mediterranean hummus & rosemary focaccia',
      'Mini baguette with egg & Emmental',
      'Tomato & mozzarella salad with basil',
      'Falafel & lemony tahini cream',
      'Aged cheese platter',
    ],
    sucrees: [
      'Artisan madeleines',
      'Fresh seasonal fruit',
    ],
  },
}

/** Menu français enrichi de son texte anglais ; null si non traduit. */
export const enMenu = (key) => EN_MENUS[key] || null

/** « 37,50 € / pers. » → « €37.50 / person ». */
export const prixMenuEn = (prix) => {
  const m = /(\d+)[,.](\d{2})/.exec(prix || '')
  return m ? `€${m[1]}.${m[2]} / person` : prix
}
