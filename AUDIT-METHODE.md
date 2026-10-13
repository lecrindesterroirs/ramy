# Audit selon la méthode SEO / IA : 13 octobre 2026

Lecture seule, sauf le retrait des étoiles d'avis du balisage, validé par Ramy ce jour (commit ff88fc4). Chaque constat porte sa preuve.

## Point zéro (étape 1)

| Mesure | Valeur | Source et date |
|---|---|---|
| Clics Google, 28 jours | 434 | Search Console, propriété domaine, 14/09 au 11/10/2026 |
| Affichages Google, 28 jours | 15 917, position moyenne 16,8 | idem |
| **Clics hors marque, 28 jours** | **30** (9 426 affichages) | idem, filtre « ne contient pas ecrin / écrin » |
| Clics Google, 90 jours | 848 (36 307 affichages) | Search Console, 14/07 au 11/10/2026 |
| Pages dans le sitemap | 342, toutes en code 200 | Crawl du 13/10/2026 |
| Citations IA Microsoft, 3 mois | 554 | Bing Webmaster Tools, AI Performance, lu le 13/10/2026 |
| Visites depuis ChatGPT, 90 jours | 159 sur 2 746 (5,8 %) | Google Analytics, lu le 13/10/2026 |
| Questions tests | 4 posées sur 30 : cité 2 fois, sans prix | GEO-PROMPTS.md |

Non relevé : le détail « pages indexées / non indexées » et le rapport IA générative de Search Console (pas d'accès par l'API, à lire dans l'interface).

**Le chiffre à retenir : 93 % des clics Google viennent de gens qui tapent déjà « L'Écrin ».** Hors marque, le site est affiché 9 426 fois en 28 jours pour 30 clics. Le problème n'est pas d'être indexé, c'est la position (16,8 en moyenne).

## Déjà en place

| Étape | Constat | Preuve |
|---|---|---|
| 3. Accès des robots | Aucun robot de recherche bloqué ; code 200 pour OAI-SearchBot, Applebot, PerplexityBot, Claude-SearchBot, bingbot | robots.txt et curl du 13/10/2026 (test indicatif : il imite le nom, pas l'adresse) |
| 3. Texte dans le HTML | Toutes les pages ont leur texte dans le HTML servi (une seule sous 300 mots : /devis) | Crawl des 342 pages |
| 4. Une adresse par page | http et sans-www redirigent vers https://www ; 342 canonicals égales à leur URL | curl -I et crawl |
| 4. Index propre | Aucun noindex dans le sitemap, un seul H1 partout, aucun titre en double ni vide, aucun titre de plus de 65 caractères | Crawl |
| 4. Bing et IndexNow | Site enregistré dans Bing Webmaster Tools ; clé IndexNow en place, envoi à chaque mise en ligne | package.json (postbuild), envois du 13/10 acceptés (200) |
| 5. Données structurées | Aucun JSON-LD invalide, aucun @id en double, Article avec auteur et dates sur les 107 articles | Crawl |
| 7. Dates | Date visible égale à datePublished ; « mis à jour le » affiché quand l'article a changé | Crawl et app/journal/[slug]/page.js ligne 96 |
| 10. Autorité | Fiche Google à jour, Bing Places synchronisée, Wikidata Q141715270 | Vérifié le 13/10/2026 |
| 2. Cohérence des prix et délais | Aucune ancienne valeur trouvée (12,50 €, livraison incluse, 22,90 €, dès 7h, citronnade) | grep sur app, lib, components, llms.txt |

## Constats

| # | Étape | Constat | Preuve | Gravité |
|---|---|---|---|---|
| 1 | 2 | **Chiffre faux** : « Plus de 100 entreprises » | app/univers/notre-maison ; OS : 54 clients livrés (13/10 à 19h56) | Forte |
| 2 | 8 | **Deux pages se disputent « cocktail entreprise »** | Search Console 28 j : /creations/cocktails (293 affichages, position 38) et /occasions/cocktail-entreprise (193, position 69) | Forte |
| 3 | 8 | Deux pages se disputent « traiteur afterwork » | /occasions/afterwork-entreprise (position 15,6) et l'article du Journal (position 11,4) | Moyenne |
| 4 | 8 | 10 pages affichées plus de 200 fois sans aucun clic | /creations/cocktails (606), /occasions/cocktail-entreprise (599), /occasions/afterwork-entreprise (498), /traiteur/courbevoie (482), /traiteur/nanterre (347), /traiteur (274)… | Moyenne |
| 5 | 7 | Aucune section « Sources » dans les 107 articles | grep « <h2>Sources » : 0 | Moyenne |
| 6 | 7 | Pas de page « Notre méthode » (qui écrit, avec quelle aide d'IA, quelles sources) | Aucun dossier dans app/ | Moyenne |
| 7 | 6 | Pas de page « L'Écrin en bref » ; Notre maison en tient lieu en partie | app/ | Faible |
| 8 | 6 | llms.txt tenu à la main (185 lignes) ; une phrase s'adresse aux IA (« réutilisables telles quelles ») | public/llms.txt ligne 24 | Faible |
| 9 | 4 | Sitemap : les articles modifiés gardent leur date de publication en lastmod ; 233 pages figées au 06/07/2026 alors que plusieurs ont changé | app/sitemap.js lignes 21 et 116 | Faible |
| 10 | 5 | FAQPage sur 234 pages, dont une en double (/creations/petits-dejeuners-et-pauses) ; plus de résultat enrichi depuis mai 2026 selon la méthode | Crawl | Faible |
| 11 | 2 | Faits à confirmer : macarons Pierre Morel (aucune commande dans l'OS), « ingrédients bio » des madeleines, recette de La Champêtre | FICHE-VERITE.md | À trancher |
| 12 | 9 | Les 20 pages publiées dans la nuit du 12 au 13 octobre n'ont pas eu de relecture adverse dans une autre conversation | Historique de la session | Moyenne |
| 13 | 10 | PagesJaunes vide ; absent d'Aleou et de l'annuaire de la Région | ANNUAIRES.md | Moyenne |

## Plan priorisé (à valider avant toute action)

| Ordre | Action | Page | Effet | Effort | Risque | Qui | Accord |
|---|---|---|---|---|---|---|---|
| 1 | Remplacer « Plus de 100 entreprises » par « plus de 50 » | Notre maison | Fort (un fait faux repris tel quel par les IA) | 5 min | Nul | Claude | Oui |
| 2 | Trancher les faits « à confirmer » | Articles concernés | Fort | 10 min de Ramy | Nul | Ramy | — |
| 3 | Une seule page pour « cocktail entreprise » : /occasions/cocktail-entreprise redirigée vers /creations/cocktails, ou réécrite sur un angle distinct | 2 pages | Fort | 1 h | Moyen (redirection) | Claude | Oui, ligne par ligne |
| 4 | Afterwork : l'article du Journal renvoie plus nettement vers la page commerciale, sans redirection | 2 pages | Moyen | 30 min | Faible | Claude | Oui |
| 5 | Réécrire title et description des 10 pages sans clic, d'après leurs requêtes réelles | 10 pages | Moyen | 2 h | Faible | Claude | Oui, par lot |
| 6 | Faire relire par une autre conversation les 20 pages de la nuit du 12 au 13 | 20 pages | Moyen | 2 h | Nul | Autre session | Oui |
| 7 | Section « Sources » sur les 10 articles les plus cités par Copilot | 10 articles | Moyen | 2 h | Faible | Claude | Oui, par lot |
| 8 | Page « Notre méthode » | Nouvelle page | Faible à moyen | 1 h | Nul | Claude, texte validé par Ramy | Oui |
| 9 | llms.txt : retirer la phrase adressée aux IA | llms.txt | Faible | 2 min | Nul | Claude | Oui |
| 10 | Sitemap : lastmod = date de modification réelle | sitemap.js | Faible | 20 min | Faible | Claude | Oui (sitemap) |
| 11 | Annuaires : PagesJaunes, Aleou, Apple Plans | Hors site | Moyen | 45 min de Ramy | Nul | Ramy | — |
| 12 | Questions tests : 10 questions, posées par Ramy une fois par mois | Hors site | Mesure | 15 min par mois | Nul | Ramy | — |

Non retenu : un lexique (étape 6). Les clients ne cherchent pas de définitions, et le Journal couvre déjà les questions réelles.

## Délais avant de juger

Les 20 pages publiées le 13 octobre ne se jugent pas avant le 10 novembre. D'ici là, on ne remodifie pas leurs titres.
