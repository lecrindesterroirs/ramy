// Données a-partager, module plat (importable depuis le serveur comme depuis le client).
// Extraites de page.js : un `export const` dans un fichier 'use client' revient
// sous forme de proxy dans une route API, pas sous forme de tableau.

export const MENUS = [
  {
    key: 'mediterraneen',
    nom: 'Le Méditerranéen',
    accroche: 'Le soleil au centre de la table : fraîcheur, herbes et huile d\'olive.',
    img: '/apartager-mediterraneen.webp',
    prix: '37,50 € / pers.',
    featured: false,
    salees: [
      'Salade grecque',
      'Taboulé aux herbes fraîches & citron',
      'Falafels en brochette & crème tahini citronnée',
      'Navette saumon & cream cheese',
      "Caviar d'aubergine & pains grillés",
      'Plateau de fromages affinés',
    ],
    sucrees: [
      'Brownie Signature',
      'Verrine citron & lemon curd',
    ],
  },
  {
    key: 'parisien',
    nom: 'Le Parisien',
    accroche: 'Les classiques du bistrot, en pièces à partager.',
    img: '/hero-a-partager.webp',
    prix: '37,90 € / pers.',
    featured: false,
    salees: [
      'Salade de torti au pesto, tomates confites & mozzarella',
      "Pommes de terre rôties, crème d'Isigny & ciboulette",
      'Club sandwich blanc de poulet',
      'Mini baguette poulet curry',
      'Plateau de charcuteries artisanales',
      'Salade de tomates anciennes & basilic',
    ],
    sucrees: [
      'Panna cotta fruits rouges',
      'Brochettes de fruits frais',
    ],
  },
  {
    key: 'jardin',
    nom: 'Le Jardin',
    accroche: '100 % végétarien, sans concession sur la gourmandise.',
    img: '/apartager-jardin.webp',
    prix: '34,90 € / pers.',
    featured: false,
    salees: [
      'Salade de lentilles, feta & légumes rôtis',
      'Houmous méditerranéen & focaccia romarin',
      'Mini baguette œuf & emmental',
      'Salade de tomates & mozzarella au basilic',
      'Falafels & crème tahini citronnée',
      'Plateau de fromages affinés',
    ],
    sucrees: [
      'Madeleines artisanales',
      'Fruits frais de saison',
    ],
  },
]

/* Exports conservés pour compatibilité avec l'ancienne fiche détail [slug]. */
export const SALADES = []
export const FILTRES = []
