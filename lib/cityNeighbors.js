// Adjacence géographique des communes desservies, pour le maillage "Villes limitrophes".
// Chaque clé = slug d'une commune, valeur = slugs des communes voisines (dans notre couverture).
export const CITY_NEIGHBORS = {
  'paris':                ['boulogne-billancourt', 'neuilly-sur-seine', 'levallois-perret', 'vincennes'],
  'boulogne-billancourt': ['issy-les-moulineaux', 'saint-cloud', 'suresnes', 'paris'],
  'neuilly-sur-seine':    ['levallois-perret', 'puteaux', 'courbevoie', 'paris'],
  'levallois-perret':     ['neuilly-sur-seine', 'clichy', 'courbevoie', 'asnieres-sur-seine'],
  'courbevoie':           ['la-defense', 'puteaux', 'nanterre', 'asnieres-sur-seine'],
  'puteaux':              ['la-defense', 'courbevoie', 'nanterre', 'suresnes'],
  'issy-les-moulineaux':  ['boulogne-billancourt', 'montrouge', 'paris', 'saint-cloud'],
  'versailles':           ['velizy-villacoublay', 'saint-cloud', 'rueil-malmaison'],
  'saint-denis':          ['paris', 'asnieres-sur-seine', 'clichy'],
  'nanterre':             ['la-defense', 'courbevoie', 'puteaux', 'rueil-malmaison'],
  'rueil-malmaison':      ['nanterre', 'suresnes', 'saint-cloud', 'puteaux'],
  'asnieres-sur-seine':   ['clichy', 'courbevoie', 'levallois-perret'],
  'clichy':               ['asnieres-sur-seine', 'levallois-perret', 'paris'],
  'suresnes':             ['puteaux', 'nanterre', 'rueil-malmaison', 'saint-cloud'],
  'montrouge':            ['paris', 'issy-les-moulineaux'],
  'massy':                ['velizy-villacoublay', 'versailles'],
  'velizy-villacoublay':  ['versailles', 'massy', 'saint-cloud'],
  'la-defense':           ['puteaux', 'courbevoie', 'nanterre'],
  'vincennes':            ['paris'],
  'saint-cloud':          ['boulogne-billancourt', 'suresnes', 'rueil-malmaison', 'versailles'],
}
