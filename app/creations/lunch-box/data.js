// Données lunch-box, module plat (importable depuis le serveur comme depuis le client).
// Extraites de page.js : un `export const` dans un fichier 'use client' revient
// sous forme de proxy dans une route API, pas sous forme de tableau.

export const FILTRES = [
  { key: 'tous',       label: 'Tous' },
  { key: 'vegetarien', label: 'Végétarien' },
  { key: 'poulet',     label: 'Poulet' },
  { key: 'viande',     label: 'Viande' },
  { key: 'poisson',    label: 'Poisson' },
]

export const CATEGORIE_COLORS = {
  vegetarien: '#5A7247',
  poulet:     '#C08A3E',
  viande:     '#8A3A3A',
  poisson:    '#C4756B',
}

/* Box boulangerie de 18,90 à 21,90 € selon la garniture.
   Entrée / sandwich / dessert (+ boisson) alimentent la fiche produit. */
export const BOXES = [
  {
    seoTitle: `La Parisienne : la lunch box poulet mayonnaise pour vos déjeuners d'entreprise à Paris`,
    seoHtml: `<p>La Parisienne est notre lunch box la plus classique : un sandwich au poulet mayonnaise, simple et sûr, qui plaît à tout le monde. Le sandwich est préparé en baguette de notre boulanger partenaire ou en pain viennois, au choix, avec une salade de concombre à la ciboulette ou de tomate et mozzarella en entrée, et une part de cake ou une madeleine en dessert.</p><h2>Le grand classique du déjeuner</h2><p>Sandwich poulet mayonnaise, entrée et dessert au choix, serviette et couverts inclus. Préparée le matin même, prête à emporter en réunion ou à servir en salle.</p><h2>Commander vos lunch box à Paris et en Île-de-France</h2><p>Commande avant 14h la veille, livraison dès 6h30 sur site. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis personnalisé sous 24h.</p>`,
    id: "lb1",
    categorie: "poulet",
    nom: "La Parisienne",
    prix: "19,90",
    img: "/sandwich-lb1-parisienne-v2.webp",
    imgDetoure: true,
    sousTitre: "Poulet Mayonnaise · Baguette ou viennois",
    entree: "Au choix :\nSalade de concombre à la ciboulette\nSalade de tomate & mozzarella",
    plat: "Poulet Mayonnaise, au choix :\nEn baguette\nEn pain viennois",
    dessert: "Au choix :\nPart de cake marbré\nMadeleine framboise",
    description: "Un sandwich en baguette ou pain viennois, une entrée et un dessert au choix, serviette & couverts. Boisson en option.",
  },
  {
    seoTitle: `L'Épicée : la lunch box poulet curry pour vos déjeuners d'entreprise à Paris`,
    seoHtml: `<p>L'Épicée réveille le déjeuner avec un sandwich au poulet curry, parfumé et généreux. Le sandwich est préparé en baguette de notre boulanger partenaire ou en pain viennois, au choix, avec une salade de concombre à la ciboulette ou de tomate et mozzarella en entrée, et une part de cake ou une madeleine en dessert.</p><h2>Du poulet, un peu d'épices</h2><p>Sandwich poulet curry, entrée et dessert au choix, serviette et couverts inclus. Préparée le matin même, prête à emporter en réunion ou à servir en salle.</p><h2>Commander vos lunch box à Paris et en Île-de-France</h2><p>Commande avant 14h la veille, livraison dès 6h30 sur site. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis personnalisé sous 24h.</p>`,
    id: "lb2",
    categorie: "poulet",
    nom: "L'Épicée",
    prix: "19,90",
    img: "/sandwich-lb2-epicee.webp",
    imgDetoure: true,
    sousTitre: "Poulet Curry · Baguette ou viennois",
    entree: "Au choix :\nSalade de concombre à la ciboulette\nSalade de tomate & mozzarella",
    plat: "Poulet Curry, au choix :\nEn baguette\nEn pain viennois",
    dessert: "Au choix :\nPart de cake marbré\nMadeleine framboise",
    description: "Un sandwich en baguette ou pain viennois, une entrée et un dessert au choix, serviette & couverts. Boisson en option.",
  },
  {
    seoTitle: `La Fermière : la lunch box œuf & emmental pour vos déjeuners d'entreprise à Paris`,
    seoHtml: `<p>La Fermière est notre lunch box végétarienne : un sandwich œuf et emmental, simple, rassasiant et sans viande. Le sandwich est préparé en baguette de notre boulanger partenaire ou en pain viennois, au choix, avec une salade de concombre à la ciboulette ou de tomate et mozzarella en entrée, et une part de cake ou une madeleine en dessert.</p><h2>L'option végétarienne</h2><p>Sandwich œuf & emmental, entrée et dessert au choix, serviette et couverts inclus. Préparée le matin même, prête à emporter en réunion ou à servir en salle.</p><h2>Commander vos lunch box à Paris et en Île-de-France</h2><p>Commande avant 14h la veille, livraison dès 6h30 sur site. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis personnalisé sous 24h.</p>`,
    id: "lb3",
    categorie: "vegetarien",
    nom: "La Fermière",
    prix: "18,90",
    img: "/sandwich-lb3-fermiere.webp",
    imgDetoure: true,
    sousTitre: "Œuf & Emmental · Baguette ou viennois",
    entree: "Au choix :\nSalade de concombre à la ciboulette\nSalade de tomate & mozzarella",
    plat: "Œuf & Emmental, au choix :\nEn baguette\nEn pain viennois",
    dessert: "Au choix :\nPart de cake marbré\nMadeleine framboise",
    description: "Un sandwich en baguette ou pain viennois, une entrée et un dessert au choix, serviette & couverts. Boisson en option.",
  },
  {
    seoTitle: `La Nordique : la lunch box saumon & avocat pour vos déjeuners d'entreprise à Paris`,
    seoHtml: `<p>La Nordique apporte une touche plus fine : un sandwich au saumon et à l'avocat, frais et léger. Le sandwich est préparé en baguette de notre boulanger partenaire ou en pain viennois, au choix, avec une salade de concombre à la ciboulette ou de tomate et mozzarella en entrée, et une part de cake ou une madeleine en dessert.</p><h2>Saumon et avocat, frais et léger</h2><p>Sandwich saumon & avocat, entrée et dessert au choix, serviette et couverts inclus. Préparée le matin même, prête à emporter en réunion ou à servir en salle.</p><h2>Commander vos lunch box à Paris et en Île-de-France</h2><p>Commande avant 14h la veille, livraison dès 6h30 sur site. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis personnalisé sous 24h.</p>`,
    id: "lb4",
    categorie: "poisson",
    nom: "La Nordique",
    prix: "21,90",
    img: "/sandwich-lb4-nordique.webp",
    imgDetoure: true,
    sousTitre: "Saumon & Avocat · Baguette ou viennois",
    entree: "Au choix :\nSalade de concombre à la ciboulette\nSalade de tomate & mozzarella",
    plat: "Saumon & Avocat, au choix :\nEn baguette\nEn pain viennois",
    dessert: "Au choix :\nPart de cake marbré\nMadeleine framboise",
    description: "Un sandwich en baguette ou pain viennois, une entrée et un dessert au choix, serviette & couverts. Boisson en option.",
  },
  {
    seoTitle: `L'Océane : la lunch box thon mayonnaise pour vos déjeuners d'entreprise à Paris`,
    seoHtml: `<p>L'Océane joue la valeur sûre : un sandwich au thon mayonnaise, rassasiant et sans surprise. Le sandwich est préparé en baguette de notre boulanger partenaire ou en pain viennois, au choix, avec une salade de concombre à la ciboulette ou de tomate et mozzarella en entrée, et une part de cake ou une madeleine en dessert.</p><h2>Le thon mayonnaise, valeur sûre</h2><p>Sandwich thon mayonnaise, entrée et dessert au choix, serviette et couverts inclus. Préparée le matin même, prête à emporter en réunion ou à servir en salle.</p><h2>Commander vos lunch box à Paris et en Île-de-France</h2><p>Commande avant 14h la veille, livraison dès 6h30 sur site. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis personnalisé sous 24h.</p>`,
    id: "lb9",
    categorie: "poisson",
    nom: "L'Océane",
    prix: "20,90",
    img: "/sandwich-lb9-oceane-v2.webp",
    imgDetoure: true,
    sousTitre: "Thon Mayonnaise · Baguette ou viennois",
    entree: "Au choix :\nSalade de concombre à la ciboulette\nSalade de tomate & mozzarella",
    plat: "Thon Mayonnaise, au choix :\nEn baguette\nEn pain viennois",
    dessert: "Au choix :\nPart de cake marbré\nMadeleine framboise",
    description: "Un sandwich en baguette ou pain viennois, une entrée et un dessert au choix, serviette & couverts. Boisson en option.",
  },
]
