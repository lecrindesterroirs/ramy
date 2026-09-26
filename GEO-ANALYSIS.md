# GEO — L'Écrin Traiteur (23/09/2026)

Analyse faite sur le site en ligne (www.lecrin-traiteur.fr) en se faisant passer pour GPTBot, sur 9 pages : l'accueil, /traiteur, /traiteur-halal, les pages cocktails et petits-déj, Gennevilliers, Notre maison, le Journal et un article.

> Selon Google, optimiser pour l'IA reste du SEO. Ce qui compte : que la page soit bien classée, qu'elle contienne des passages qu'on peut citer tels quels, et que la marque existe en dehors du site. Le fichier llms.txt ne joue pas sur les citations.

## Score de préparation GEO : 72/100

| Critère | Poids | Note | Constat |
|---|---|---|---|
| Passages citables | 25 % | 18/25 | Prix chiffrés, délais, minimum de commande : très citables. Mais les réponses sont surtout dans les FAQ et pas assez en haut de page. |
| Structure | 20 % | 16/20 | Titres H1 → H3 propres. Encore peu de titres en forme de question sur /traiteur-halal, les pages villes et Notre maison. |
| Contenu multimédia | 15 % | 10/15 | Beaucoup de photos, mais aucune vidéo ni tableau comparatif sur les pages commerciales. |
| Autorité et marque | 20 % | 10/20 | Articles datés et signés. En revanche, rien sur Wikipedia, Wikidata, YouTube ou Reddit, et la fiche Person renvoie vers la page LinkedIn de l'entreprise, pas vers celle de Ramy. |
| Accès technique | 20 % | 18/20 | Tout le contenu est dans le HTML envoyé par le serveur (Next.js), les robots IA sont autorisés et llms.txt est complet. |

### Par plateforme
- **Google AI Overviews : 75.** Dépend du classement dans Google. Les FAQ et les prix aident beaucoup.
- **Google AI Mode : 68.** Récompense la fraîcheur et la notoriété de la marque. Le Journal est à jour, mais la marque est peu présente ailleurs.
- **ChatGPT : 62.** S'appuie surtout sur Wikipedia (48 %). L'Écrin n'y figure pas, ni sur Wikidata.
- **Perplexity : 58.** S'appuie surtout sur Reddit (47 %). Aucune présence repérée.
- **Bing Copilot : 70.** Dépend de l'index Bing. À vérifier que IndexNow et Bing Webmaster Tools sont bien en place.

## Accès des robots IA : ✅
GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot et Google-Extended sont autorisés, avec seulement /api, /panier et /commande-confirmee exclus. Aucun robot n'est bloqué. Il n'y a rien à changer.

## llms.txt : ✅ très complet
Il contient la présentation de l'entreprise, les infos pratiques, 8 réponses de FAQ, les pages clés, les créations, les pages villes et 18 guides. /llms-full.txt renvoie une erreur 404 : c'est facultatif. Pas de travail supplémentaire à y consacrer, puisque ce fichier n'influence pas les citations.

## Présence de la marque hors du site
| Plateforme | État |
|---|---|
| Wikipedia | ❌ Absent (normal pour une TPE, pas de fiche possible à ce stade) |
| Wikidata | ❌ Absent. **C'est faisable** : on peut créer une fiche pour L'Écrin Traiteur (SIREN, site web, LinkedIn, Instagram, adresse). |
| LinkedIn | ✅ Page entreprise, déjà reliée au site |
| YouTube | ❌ Aucune chaîne ni mention. C'est la présence la plus liée aux citations par l'IA (corrélation 0,74). |
| Reddit | ❌ Aucune mention trouvée (r/paris, r/vosfinances…) |
| Google Business Profile | ✅ Note de 5,0 |

## Passages citables
- **Points forts :** les prix des cocktails (29,90 / 40,90 / 51,90 € HT), le nombre de pièces par personne, la commande possible jusqu'à la veille 14h, le minimum de 50 € HT, et le « halal-friendly sans certification ». Ce sont des réponses courtes et vérifiables, exactement ce que l'IA reprend.
- **Points faibles :** sur les pages commerciales, ces faits sont surtout dans la FAQ, en bas de page. Or environ 44 % des citations viennent du premier tiers d'une page.
- **Notre maison** est trop mince (501 mots, 2 titres) alors que c'est la page qui dit « qui est L'Écrin ». C'est celle que l'IA lit pour décrire l'entreprise.

## Rendu serveur : ✅
Tout le texte est dans le HTML envoyé par le serveur (entre 650 et 3 600 mots selon la page). Un détail : les H1 utilisent un `<br/>` sans espace, et les outils qui lisent le HTML brut voient « Traiteur d'entreprise**à** Paris ». Il suffit d'ajouter une espace avant le `<br/>`, ou `{" "}` dans le code.

## Avancement (26/09/2026)
- ✅ Espace ajoutée avant les `<br/>` des titres (Hero, /traiteur, /traiteur-halal, pages villes)
- ✅ Fiche Person du fondateur (`#founder`) reliée à `#business` (founder) et aux articles (author). `sameAs` reste vide en attendant le LinkedIn personnel.
- ✅ `<time datetime>` ajouté sur les articles
- ✅ /traiteur-halal : le LocalBusiness sans @id est remplacé par un Service rattaché à `#business`, et un bloc-réponse « Vos prestations sont-elles halal ? » est ajouté sous la photo
- ✅ Pages villes petit-déj : Service avec `areaServed` = la ville
- ✅ Cocktails : l'intro donne les 3 formules chiffrées. Petits-déj : le sous-titre donne les faits (heure, prix de départ, délai).
- ℹ️ /traiteur avait déjà son bloc-réponse en haut de page (correction du constat initial)
- ✅ Prix petit-déj Classique aligné partout sur 8 € HT/pers (pages villes, catégorie, données structurées, llms.txt, Journal)
- ✅ Notre maison : 5 sections en questions-réponses (~630 mots), italique retiré ; fondateur en 2025 + LinkedIn perso dans les données structurées
- ⏳ Côté Ramy : créer la fiche Wikidata (voir GEO-TEXTES.md), puis me donner l'identifiant Q… ; vidéos YouTube Shorts

## Les 5 changements les plus utiles
1. **Mettre un bloc « En bref » en haut des pages /traiteur, /traiteur-halal, cocktails et petits-déj.** Il fait 2 à 4 phrases factuelles, visibles juste sous le H1 : prix de départ, délai, zone, minimum, régimes. C'est ce que l'IA reprendra mot pour mot.
2. **Réécrire Notre maison comme une page d'identité** d'environ 600 mots. Elle répond à des titres en forme de question : qui a fondé L'Écrin et quand, comment fonctionne le travail avec les artisans (sans nommer Mado dans les titres), quelle zone et quels volumes sont couverts, et quelles preuves on peut avancer (5,0★, clients servis, halal, sans porc).
3. **Enrichir la fiche Person de Ramy** dans les données structurées, avec son LinkedIn personnel dans `sameAs`, `url` vers Notre maison et `knowsAbout` (traiteur d'entreprise, restauration B2B). Même chose dans l'Organization : ajouter `founder`, `foundingDate` et `sameAs` (Instagram et Wikidata une fois la fiche créée).
4. **Créer la fiche Wikidata de l'entreprise**, puis la relier au site dans `sameAs`. C'est gratuit, ça prend environ 30 minutes, et c'est le seul moyen accessible d'entrer dans le graphe d'entités qu'utilise ChatGPT.
5. **Obtenir des mentions hors du site** : 2 ou 3 vidéos courtes sur YouTube Shorts (une livraison de petit-déj, un montage de cocktail) avec « L'Écrin Traiteur Paris » dans le titre, plus des citations dans des annuaires ou comparatifs de traiteurs d'entreprise (Kactus, pages « meilleurs traiteurs Paris »). Il ne s'agit pas de publier en masse sur Reddit : Google considère cette pratique comme inefficace.

## Données structurées recommandées
- **Pages villes** (/petit-dejeuner-entreprise/…) : elles n'ont que FAQPage et Breadcrumb. Il faut y ajouter un `Service` avec `areaServed` = la ville, et `provider` → `#business`.
- **/traiteur-halal** : ajouter un `Service` avec les `Offer` correspondantes, comme sur /traiteur.
- **Articles** : le balisage est bon (Article, dates, auteur). Il manque une balise `<time datetime>` visible dans le HTML et un `image`.
- **Notre maison** : passer en `AboutPage` avec `mainEntity` → `#business`.

## Passages à reformuler
- **/traiteur-halal** : aucun titre en forme de question. Remplacer par exemple « Nos engagements » par « Vos plateaux sont-ils halal ? », avec une réponse de 40 à 60 mots en première ligne : tout halal, sans porc, sans alcool, sans certification revendiquée, options végé, vegan et sans gluten.
- **Pages villes** : 659 mots et aucun titre en question. Ajouter « Livrez-vous à [ville] demain matin ? » avec une réponse concrète : frais, délai, horaire.
- **Accueil** : une seule question dans les titres. Ajouter « Combien coûte un petit-déjeuner d'entreprise à Paris ? » en haut de page, avec le prix de départ à 12,50 € HT par personne.
