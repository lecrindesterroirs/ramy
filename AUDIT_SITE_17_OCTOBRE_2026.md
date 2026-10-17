# Audit complet de lecrin-traiteur.fr

**17 octobre 2026** — 344 pages passées au crible en production, plus un contrôle visuel sur mobile (375 px), tablette (768 px) et ordinateur (1440 px).

> **État au 17 octobre, fin de journée : tout est corrigé et en ligne, sauf les chiffres de confiance (A4), laissés en l'état sur décision de Ramy.**
>
> Deux points de la première version étaient de fausses alertes, levées en vérifiant le rendu réel plutôt que les fichiers sources. Ils sont barrés ci-dessous avec l'explication.

Tout ce qui suit est mesuré, pas estimé. Chaque chiffre vient d'un relevé fait aujourd'hui sur le site en ligne, dans PostHog ou dans l'OS.

---

## Ce qui est déjà impeccable

À dire d'abord, parce que c'est rare et que ça ne doit pas se perdre dans la liste des corrections.

| Contrôle | Résultat |
|---|---|
| Pages sans titre, sans description, sans H1, sans canonical | **0** sur 344 |
| Titres en double | **0** |
| Pages avec plusieurs H1, ou en `noindex` par accident | **0** |
| Images sans attribut `alt` | **0** sur 7 350 |
| Pages orphelines (aucun lien entrant) | **0** |
| Débordement horizontal à 375, 768 et 1440 px | **aucun** |
| Focus clavier visible | oui (`:focus-visible`, contour 2 px) |
| Formulaires : libellés, `autocomplete`, `inputmode` | corrects partout |
| Page 404 | répond bien en 404, avec deux issues |

**La cohérence des faits est parfaite.** Un seul numéro de téléphone sur tout le site (715 occurrences, aucune variante), une seule livraison (29 € HT), un seul minimum (50 € HT), un seul délai (veille 14h), une seule heure de départ (6h30, 1 085 occurrences). Aucune contradiction trouvée. Pas une seule occurrence de « ECRIN » ou « Écrin » sans le L'.

**Le balisage que lisent Google et les IA est riche** : `LocalBusiness` + `FoodEstablishment` avec horaires, zone desservie, fondateur et profils externes ; `FAQPage` sur 201 pages ; `Product` sur 52 ; `HowTo` et `Recipe`. Un `robots.txt` avec des règles nommées pour GPTBot, OAI-SearchBot et ClaudeBot. Un `llms.txt` de 20 Ko.

**La performance est excellente** : LCP au 75ᵉ centile de 682 ms sur mobile, 633 ms sur ordinateur (le seuil « bon » de Google est à 2 500 ms).

---

## A. Les quatre choses à corriger en priorité

### ~~A1. Le titre de l'accueil est illisible sur sa photo~~ — FAUSSE ALERTE

J'avais mesuré la luminance des photos de hero **brutes**, en supposant un titre blanc posé directement dessus. En vérifiant le rendu réel : **les onze hero ont tous un voile**. L'accueil porte un voile crème à 95 % et son titre est **sombre**, pas blanc, avec une ombre claire. Les pages de la carte portent un dégradé noir (0,3 → 0,55 ou 0,68 → 0,5) sous un titre blanc.

Recalculé sur le cas le plus défavorable — le sur-titre à 11 px, blanc à 65 % d'opacité, sur la photo la plus claire : **contraste de 4,9 à 6,3**, au-dessus du seuil de 4,5. Rien à corriger.

**Leçon** : mesurer le pixel affiché, pas le fichier source.

### A2. Sur mobile, le pied de page arrive avant la fin du formulaire de devis

Mesuré sur `/devis`, étape 1, écran de 812 px :

- les six cartes « Pour quelle occasion ? » se terminent à **386 px**
- puis **156 px de vide**
- le bandeau « Ils nous font confiance » commence à 542 px
- **le pied de page commence à 745 px**, donc dans le premier écran

Le visiteur qui ouvre le formulaire depuis son téléphone voit les cartes, puis un trou, puis les logos clients, puis le pied de page avec tous ses liens de sortie. Sur une page dont le seul travail est de faire remplir un formulaire, c'est une porte ouverte.

Rappel du relevé PostHog : sur 41 visites de `/devis` en 60 jours, environ la moitié n'a jamais dépassé la première étape.

**✅ Corrigé et en ligne.** Pied de page et bandeau logos masqués sous 768 px, remplacés par une ligne de trois liens légaux. Les 96 px qui dégageaient la barre fixe du bas sont retirés à l'étape 1, où cette barre est masquée. Vérifié en production : la page passe de **2 422 px à 517 px**, les cartes finissent à 386 px et la ligne légale est à 442 px — tout tient dans le premier écran. L'événement `devis_etape` dira dans une semaine si c'était bien là que ça cassait.

### A3. 34 pages en ligne sont absentes du sitemap

Elles répondent toutes en 200, elles sont liées depuis le site, mais Google n'est pas prévenu de leur existence.

- **les 10 fiches artisans** : Philippe Urraca, Mariage Frères, Alain Milliat, Pierre Morel, Maison Marques, Laura Todd, La Ferme de Viltain, Les Vergers de Plaisirs, Un Passage à l'Autre, Mado Paris
- **23 fiches produits de la pause goûter** : madeleines Octobre Rose, tartes, cakes, compotes, crêpes, babka…
- `/contact/rendez-vous`

La fiche `madeleines-octobre-rose` reçoit **17 liens internes** et n'est pas dans le sitemap.

C'est dommage deux fois. Les fiches artisans sont exactement le contenu que Google et les moteurs d'IA valorisent le plus : des fournisseurs nommés, vérifiables, un Meilleur Ouvrier de France parmi eux. C'est ce qui distingue un vrai traiteur d'un site de photos.

**✅ Corrigé et en ligne. Sitemap : 344 → 391 URLs.** Les fiches pause goûter étaient déclarées par une liste tenue à la main qui n'en connaissait que 12 sur 35 ; les données sont sorties de `page.js` (un `export const` dans un fichier `'use client'` revient en proxy côté serveur) vers un `data.js` dont le layout dérive slugs et métadonnées. Les 10 fiches artisans et `/contact/rendez-vous` ont été ajoutées. Au passage, 13 pages que le sitemap en ligne ignorait encore sont revenues, dont **les cinq pages anglaises** `/en/…` et `/tarifs`.

### A4. Les chiffres de confiance ne correspondent pas à l'OS

Le site annonce, dans la description de chaque page, dans les partages sociaux, sur `/univers/notre-maison` et dans `llms.txt` :

> « Plus de 100 entreprises clientes et plus de 10 000 personnes servies »

Relevé dans l'OS le 17 octobre 2026 :

| | Site | OS |
|---|---|---|
| Entreprises ayant commandé | plus de 100 | **67** |
| Convives servis | plus de 10 000 | **3 879** (sur 171 commandes) |

L'OS compte 173 fiches clients, mais 67 seulement ont une commande — les autres sont des prospects.

Je ne touche à rien : tu comptes peut-être autrement (devis envoyés, personnes touchées, événements d'avant l'OS). Mais ces chiffres sont repris tels quels par ChatGPT et Copilot quand on leur demande qui tu es, et une allégation commerciale doit pouvoir être justifiée. Les vrais chiffres — 67 entreprises, près de 4 000 convives, Bain, Sia Partners, Chanel, AbbVie — sont déjà très bons pour une maison fondée en 2025.

Ils sont centralisés dans `lib/site.js` (`PROOF`), un seul endroit à changer.

**⏸ Laissé en l'état sur ta décision du 17 octobre.**

---

## B. Incohérences

### B1. ~~Le téléphone est obligatoire sur `/contact`~~ — ✅ corrigé

Il est désormais facultatif des deux côtés, avec le même libellé. Le serveur n'exigeait déjà que le nom et l'email. « Société » reste obligatoire sur les deux.

### B2. `llms.txt` ne porte que 3 des 10 prix de départ

Depuis aujourd'hui, chaque page de la carte affiche son prix de départ. `llms.txt` n'en cite que trois (petit-déjeuner 8 €, goûter 6 €, cocktails 29,90/40,90/51,90). Manquent : plateaux repas 28,90, lunch box 18,90, buffets 34,90, plateaux apéritifs 63,90, coffrets 17,90, boissons 3,80, animations 600.

C'est précisément ce qu'une IA cherche quand on lui demande « combien coûte un plateau repas livré à Paris ».

**✅ Corrigé** : les sept prix manquants sont dans `llms.txt`, et les six familles concernées ont leur `Offer` dans le balisage `LocalBusiness`.

### ~~B3. Une image étirée sur tablette~~ — FAUSSE ALERTE

Ma sonde avait attrapé l'image **en cours de chargement** : le navigateur affichait une variante basse définition le temps que la bonne arrive. Recontrôlé après chargement complet : **zéro image étirée** sur la page. Le fichier source fait 1024 × 1024, largement assez.

---

## C. Détails

| | Constat | Où |
|---|---|---|
| C1 | Bouton « fermer le bandeau » de **23 × 23 px** (minimum recommandé 44 × 44) | bandeau Octobre Rose |
| C2 | Textes à **10 px** (bandeau Octobre Rose) et 11 px (sur-titres), 49 éléments concernés sur l'accueil | tout le site |
| C3 | **15 titres de plus de 65 caractères** : ils seront coupés dans Google | fiches produits, articles |
| C4 | **5 meta descriptions de plus de 165 caractères** | `/corporate-catering-paris`, `/univers/cas-clients`, `/univers/notre-methode`, Halloween, un article |
| C5 | `BreadcrumbList` sur **71 pages sur 344** alors que le fil d'Ariane est affiché partout | gabarits de page |
| C6 | **239 pages partagent la même image de partage** sur LinkedIn et WhatsApp | `og:image` |
| C7 | **9 images sources entre 1,6 et 2,9 Mo**, dont 8 en PNG (popcorn, barbe à papa, cookie géant, crêpes…) | `/public` |
| C8 | Balisage sans `vatID`, `taxID`, `paymentAccepted`, `knowsLanguage` | `LocalBusiness` |
| C9 | Contraste à 4,48 pour 4,5 requis sur les descriptions de catégorie (12 px) | accueil |

**Fait** : C1 (zone tactile portée à 44 × 44), C2 (bandeau à 11 px), C3 (après décodage des entités HTML, 2 titres dépassaient, pas 15 — corrigés), C4 (4 descriptions ramenées sous 165), C5 (**71 → 382 pages sur 394**, zéro doublon), C7 (**19,9 Mo → 1,6 Mo**), C8 (`vatID`, `taxID`, `legalName`, `paymentAccepted`, `currenciesAccepted`, `knowsLanguage` + les 6 offres manquantes ; au passage le minimum lunch box passe de 19,90 à **18,90 €**, le vrai prix).

**Reste** : C6, les 239 pages qui partagent la même image de partage — il faut produire des visuels, ce n'est pas qu'une ligne de code. C9, un contraste à 4,48 pour 4,5 requis : c'est le gris de la charte, à trancher avec toi.

### Trouvé pendant les corrections : Leadfeeder était bloqué

La console de production renvoyait une erreur de Content-Security-Policy à chaque page : le script de Leadfeeder est servi depuis `cdn.ldnfrpl.com`, un domaine absent de la politique. **Il était bloqué à chaque chargement, sans rien signaler au visiteur — l'outil ne collectait rien.** Domaine autorisé, vérifié en production : le script se charge et la balise de suivi part.

---

## D. Ce que l'audit ne couvre pas encore

Les cartes de chaleur et les clics morts tournent depuis ce matin seulement : dans une semaine on saura **où les gens cliquent réellement** et sur quoi ils cliquent en vain. L'événement `devis_etape` dira **à quelle étape du formulaire ils partent**. Deux questions que je ne peux pas trancher aujourd'hui sans inventer.

---

## Ordre que je propose

1. **A1** le voile sur les hero — une demi-heure, effet immédiat sur toutes les pages
2. **A2** `/devis` sans pied de page sur mobile — c'est la page qui transforme
3. **A3** le sitemap — 34 pages rendues visibles à Google d'un coup
4. **A4** ta décision sur les chiffres de confiance
5. **B1, B2** cohérence des formulaires et des prix dans `llms.txt`
6. **C** le reste, par lots
