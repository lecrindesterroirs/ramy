/*
  Prix du marché des animations d'entreprise que L'Écrin Traiteur ne propose pas (29/10/2026).
  Source : ANIMATIONS-PRIX-MARCHE-2026.md. Seuls les chiffres marqués « P » (page ouverte et relue
  le 29/10/2026) sont repris ici ; les chiffres lus seulement dans un extrait de moteur de recherche
  sont écartés. Prix d'appel publics, hors taxes, souvent hors déplacement. Aucun traiteur cité.
  Utilisé par le guide lib/journalIdeesAnimation.js et sa surcouche anglaise.
*/
export const MARCHE_LU_LE = '29 octobre 2026'
export const MARCHE_LU_LE_EN = '29 October 2026'

const FB = (chemin) => ({ nom: 'Funbooker', url: `https://www.funbooker.com/fr/${chemin}` })
const WCD = { nom: 'Wecandoo', url: 'https://wecandoo.fr/ateliers/teambuilding-paris' }

export const MARCHE = [
  {
    cle: 'quiz', nom: 'Quiz ou blind test animé', nomEn: 'Hosted quiz or music quiz', court: 'quiz ou blind test', courtEn: 'quiz or music quiz',
    prix: "1 050 € HT pour 30 personnes, ou 18 à 36 € HT par personne selon l'effectif", prixEn: '€1,050 excl. VAT for 30 people, or €18 to €36 excl. VAT per person depending on headcount',
    effectif: '10 à 1 000', effectifEn: '10 to 1,000', duree: '1 h 30 à 2 h', dureeEn: '1.5 to 2 hours',
    contraintes: 'Sono et écran fournis, les téléphones des joueurs servent de buzzers', contraintesEn: "Sound system and screen supplied, players' phones used as buzzers",
    sources: [FB('annonce/animation-quiz-et-blind-test-en-ile-de-france/voir'), FB('annonce/team-building-blind-test-musical/voir')],
  },
  {
    cle: 'escape', nom: 'Escape game mobile, dans vos locaux', nomEn: 'Mobile escape game, at your premises', court: 'escape game', courtEn: 'escape game',
    prix: '500 € HT (15 à 19 personnes) à 1 250 € HT (46 à 55 personnes)', prixEn: '€500 excl. VAT (15 to 19 people) to €1,250 excl. VAT (46 to 55 people)',
    effectif: '15 à 55', effectifEn: '15 to 55', duree: '1 h 30 à 2 h 30, plus l\'accueil', dureeEn: '1.5 to 2.5 hours, plus welcome',
    contraintes: 'Une salle, décor installé par le prestataire', contraintesEn: 'One room, set installed by the provider',
    sources: [FB('annonce/team-building-escape-game-mobile-idf/voir')],
  },
  {
    cle: 'photobooth', nom: 'Borne photo (photobooth)', nomEn: 'Photo booth', court: 'borne photo', courtEn: 'photo booth',
    prix: '150 à 300 € la borne avec impressions ; 890 à 2 100 € avec animateur ou borne IA', prixEn: '€150 to €300 for a booth with prints; €890 to €2,100 with a host or an AI booth',
    effectif: 'Sans limite', effectifEn: 'No limit', duree: 'La soirée', dureeEn: 'The evening',
    contraintes: 'Installation sur place, accessoires et lumière souvent inclus', contraintesEn: 'Set up on site, props and lighting often included',
    sources: [{ nom: '1001 Salles', url: 'https://www.1001salles.com/pro/location-de-materiel/69240-to-event-france.aspx' }, FB('category/animation-location-borne-photo')],
  },
  {
    cle: 'dj', nom: "DJ de soirée d'entreprise", nomEn: 'DJ for a company party', court: 'DJ', courtEn: 'DJ',
    prix: 'Dès 350 € ; 1 000 € HT relevé hors Île-de-France', prixEn: 'From €350; €1,000 excl. VAT found outside the Paris region',
    effectif: "Jusqu'à 100 et plus", effectifEn: 'Up to 100 and more', duree: 'La soirée, environ 2 h d\'installation', dureeEn: 'The evening, about 2 hours of set-up',
    contraintes: 'Matériel fourni, horaires de la salle', contraintesEn: 'Equipment supplied, venue opening hours',
    sources: [{ nom: '1001 Salles', url: 'https://www.1001salles.com/pro/dj-animation-musicale/26092-dj-setto.aspx' }, FB('annonce/animation-dj/voir')],
  },
  {
    cle: 'magicien', nom: 'Magicien close-up', nomEn: 'Close-up magician', court: 'magicien', courtEn: 'magician',
    prix: '475 à 1 690 € par animation', prixEn: '€475 to €1,690 per performance',
    effectif: 'Cocktail ou dîner', effectifEn: 'Cocktail reception or dinner', duree: 'Selon la formule', dureeEn: 'Depends on the package',
    contraintes: 'Peu ou pas de technique', contraintesEn: 'Little or no technical set-up',
    sources: [FB('annonce/animation-magie-et-close-up/voir')],
  },
  {
    cle: 'caricaturiste', nom: 'Caricaturiste', nomEn: 'Caricaturist', court: 'caricaturiste', courtEn: 'caricaturist',
    prix: '300 € (2 h, hors Paris) à 850 € HT (2 h 30 à 3 h, Paris)', prixEn: '€300 (2 hours, outside Paris) to €850 excl. VAT (2.5 to 3 hours, Paris)',
    effectif: 'Environ 10 caricatures par heure', effectifEn: 'About 10 caricatures per hour', duree: '2 à 3 h', dureeEn: '2 to 3 hours',
    contraintes: 'Un emplacement dans la salle', contraintesEn: 'A spot in the room',
    sources: [FB('annonce/animation-caricaturiste-a-paris-et-en-idf/voir'), { nom: '1001 Salles', url: 'https://www.1001salles.com/animation-spectacle/caricaturiste-betty.aspx' }],
  },
  {
    cle: 'cuisine', nom: 'Atelier cuisine où les invités cuisinent', nomEn: 'Cooking class where guests cook', court: 'atelier cuisine participatif', courtEn: 'hands-on cooking class',
    prix: '57,50 à 95,83 € HT par personne à Paris', prixEn: '€57.50 to €95.83 excl. VAT per person in Paris',
    effectif: 'Petits groupes', effectifEn: 'Small groups', duree: '2 à 3 h', dureeEn: '2 to 3 hours',
    contraintes: 'Cuisine équipée, le plus souvent chez le prestataire', contraintesEn: "Equipped kitchen, usually at the provider's",
    sources: [WCD],
  },
  {
    cle: 'mixologie', nom: 'Atelier mixologie sans alcool', nomEn: 'Alcohol-free mixology class', court: 'atelier mixologie sans alcool', courtEn: 'alcohol-free mixology class',
    prix: '59,90 € HT par personne (Paris 11e)', prixEn: '€59.90 excl. VAT per person (Paris 11th)',
    effectif: "Jusqu'à 15", effectifEn: 'Up to 15', duree: '1 h 30 à 3 h', dureeEn: '1.5 to 3 hours',
    contraintes: 'Tables et point d\'eau', contraintesEn: 'Tables and a water point',
    sources: [FB('annonce/team-building-atelier-de-mixologie-sans-alcool-a-paris-11eme/voir')],
  },
  {
    cle: 'rallye', nom: 'Chasse au trésor, rallye urbain', nomEn: 'Treasure hunt, city rally', court: 'rallye urbain', courtEn: 'city rally',
    prix: '15 à 100 € par personne selon le format', prixEn: '€15 to €100 per person depending on the format',
    effectif: "Jusqu'à 100, en équipes", effectifEn: 'Up to 100, in teams', duree: '2 h à la demi-journée', dureeEn: '2 hours to half a day',
    contraintes: 'En extérieur, selon la météo', contraintesEn: 'Outdoors, weather permitting',
    sources: [FB('annonce/team-building-chasse-au-tresor-dans-le-marais-a-paris/voir')],
  },
  {
    cle: 'atelier', nom: 'Atelier créatif (bougie, terrarium, céramique, fresque)', nomEn: 'Creative workshop (candle, terrarium, ceramics, mural)', court: 'atelier créatif', courtEn: 'creative workshop',
    prix: '28,33 à 65 € HT par personne ; fresque collective 65 à 90 € HT', prixEn: '€28.33 to €65 excl. VAT per person; group mural €65 to €90 excl. VAT',
    effectif: '5 à 60 selon l\'atelier', effectifEn: '5 to 60 depending on the workshop', duree: '1 h 30 à 2 h 30', dureeEn: '1.5 to 2.5 hours',
    contraintes: 'Grandes tables', contraintesEn: 'Large tables',
    sources: [WCD, FB('annonce/team-building-atelier-bougies-parfumees-ou-fleuries-a-paris-11eme/voir'), FB('annonce/team-building-fresque-collective-en-origamis-a-paris-10eme/voir')],
  },
  {
    cle: 'casino', nom: 'Casino (jeux factices)', nomEn: 'Fun casino (play money)', court: 'casino', courtEn: 'fun casino',
    prix: '1 250 € HT les 2 tables, 590 € HT la table en plus', prixEn: '€1,250 excl. VAT for 2 tables, €590 excl. VAT per extra table',
    effectif: '20 à 500', effectifEn: '20 to 500', duree: '2 h', dureeEn: '2 hours',
    contraintes: 'Place pour les tables', contraintesEn: 'Room for the tables',
    sources: [FB('annonce/animation-casino-en-ile-de-france-1/voir')],
  },
  {
    cle: 'karaoke', nom: 'Karaoké animé', nomEn: 'Hosted karaoke', court: 'karaoké', courtEn: 'karaoke',
    prix: '900 € HT (Paris 11e)', prixEn: '€900 excl. VAT (Paris 11th)',
    effectif: '40 à 100', effectifEn: '40 to 100', duree: 'Environ 3 h', dureeEn: 'About 3 hours',
    contraintes: 'Animateur, micros et enceinte fournis', contraintesEn: 'Host, microphones and speaker supplied',
    sources: [FB('annonce/team-building-karaoke-a-paris-11eme-1/voir')],
  },
  {
    cle: 'bienetre', nom: 'Massage assis', nomEn: 'Seated massage', court: 'massage assis', courtEn: 'seated massage',
    prix: '330 € HT (2 h) à 850 € HT (journée) par praticien', prixEn: '€330 excl. VAT (2 hours) to €850 excl. VAT (full day) per therapist',
    effectif: 'Environ 20 personnes par jour et par praticien', effectifEn: 'About 20 people per day per therapist', duree: 'Séances de 20 min', dureeEn: '20-minute sessions',
    contraintes: 'Un coin calme ; réserver deux semaines avant', contraintesEn: 'A quiet corner; book two weeks ahead',
    sources: [FB('annonce/animation-massage-en-entreprise-en-idf/voir')],
  },
  {
    cle: 'degustation', nom: 'Dégustation (café, thé, chocolat)', nomEn: 'Tasting (coffee, tea, chocolate)', court: 'dégustation', courtEn: 'tasting',
    prix: 'Café 75 €, thé 70 €, chocolat 33,33 à 58,33 € HT par personne', prixEn: 'Coffee €75, tea €70, chocolate €33.33 to €58.33 excl. VAT per person',
    effectif: '5 à 15', effectifEn: '5 to 15', duree: '1 h 30 à 2 h 30', dureeEn: '1.5 to 2.5 hours',
    contraintes: 'Grande table', contraintesEn: 'Large table',
    sources: [FB('annonce/team-building-degustation-cafes-mets-en-3-temps-a-paris/voir'), FB('annonce/team-building-atelier-degustation-de-the-a-paris/voir'), WCD],
  },
]

/* Repères de budget publiés (pages relues le 29/10/2026). */
export const REPERES = {
  teamBuilding: { montant: 67.5, sourceNom: 'baromètre IFTM x Kactus 2025, cité par Tendance Hôtellerie', url: 'https://www.tendancehotellerie.fr/articles-breves/communique-de-presse/24978-article/barometre-iftm-kactus-2025-l-evenementiel-d-entreprise-budgets-sous-tension-evenements-plus-responsables-pratiques-plus-matures' },
  restauration: { part: 35, sourceNom: '1001 Salles, guide du séminaire à Paris (mai 2026)', url: 'https://www.1001salles.com/pro/blog/article/2664/organisation-d-un-seminaire-a-paris-le-guide-complet-pour-les-professionnels' },
}
