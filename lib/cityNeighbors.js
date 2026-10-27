// Adjacence géographique des communes desservies, pour le maillage "Villes limitrophes".
// Chaque clé = slug d'une commune, valeur = slugs des communes voisines (dans notre couverture).
export const CITY_NEIGHBORS = {
  'paris':                ['boulogne-billancourt', 'neuilly-sur-seine', 'levallois-perret', 'vincennes', 'montreuil'],
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
  'asnieres-sur-seine':   ['clichy', 'courbevoie', 'levallois-perret', 'gennevilliers'],
  'clichy':               ['asnieres-sur-seine', 'levallois-perret', 'paris', 'gennevilliers'],
  'gennevilliers':        ['asnieres-sur-seine', 'clichy', 'courbevoie'],
  'suresnes':             ['puteaux', 'nanterre', 'rueil-malmaison', 'saint-cloud'],
  'montrouge':            ['paris', 'issy-les-moulineaux'],
  'massy':                ['velizy-villacoublay', 'versailles'],
  'velizy-villacoublay':  ['versailles', 'massy', 'saint-cloud'],
  'la-defense':           ['puteaux', 'courbevoie', 'nanterre'],
  'vincennes':            ['paris', 'montreuil', 'creteil'],
  'saint-cloud':          ['boulogne-billancourt', 'suresnes', 'rueil-malmaison', 'versailles'],
  'sevres':               ['boulogne-billancourt', 'saint-cloud', 'issy-les-moulineaux', 'versailles'],
  // Est parisien, ajouté le 28/10/2026. Montreuil touche bien Paris et
  // Vincennes ; Créteil n'est limitrophe d'aucune autre commune que nous
  // desservons, ses voisines listées sont les plus proches de notre couverture.
  'montreuil':            ['paris', 'vincennes', 'creteil'],
  'creteil':              ['vincennes', 'montreuil', 'paris'],
}
