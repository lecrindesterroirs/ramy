# Audit complet de lecrin-traiteur.fr

**17 octobre 2026** — 344 pages passées au crible en production, plus un contrôle visuel sur mobile (375 px), tablette (768 px) et ordinateur (1440 px).

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

### A1. Le titre de l'accueil est illisible sur sa photo

Mesuré sur chaque image de hero, en calculant le contraste du texte blanc sur la zone exacte où le titre se pose.

| Image | Contraste du titre blanc | Verdict |
|---|---|---|
| `hero-bg2.webp` (**accueil**) | **2,34** | sous le minimum de 3,0 |
| `hero-plateaux-essentiel.webp` | 3,06 | passe pour le gros titre, pas pour le sur-titre |
| `hero-petitdej.webp` | 3,08 | idem |
| `img-reception.webp` | 3,31 | idem |
| `hero-pauses-gourmandes.webp` | 3,45 | idem |
| `hero-a-partager.webp` | 3,69 | idem |
| `buffet-mediterraneen.webp` | 3,76 | idem |
| Les 4 autres | 4,8 à 9,4 | bon |

Le sur-titre (« DÉJEUNER · PARIS & ÎLE-DE-FRANCE », 11 px blanc) demande 4,5 de contraste : **sept pages sur onze ne l'atteignent pas**. Sur l'accueil, même le grand titre est en dessous du seuil.

**Correction** : un dégradé sombre discret au bas des images de hero (de transparent à `rgba(0,0,0,0.45)`), ou une ombre portée sur le texte. Invisible à l'œil sur les photos déjà sombres, décisif sur les claires.

### A2. Sur mobile, le pied de page arrive avant la fin du formulaire de devis

Mesuré sur `/devis`, étape 1, écran de 812 px :

- les six cartes « Pour quelle occasion ? » se terminent à **386 px**
- puis **156 px de vide**
- le bandeau « Ils nous font confiance » commence à 542 px
- **le pied de page commence à 745 px**, donc dans le premier écran

Le visiteur qui ouvre le formulaire depuis son téléphone voit les cartes, puis un trou, puis les logos clients, puis le pied de page avec tous ses liens de sortie. Sur une page dont le seul travail est de faire remplir un formulaire, c'est une porte ouverte.

Rappel du relevé PostHog : sur 41 visites de `/devis` en 60 jours, environ la moitié n'a jamais dépassé la première étape.

**Correction** : retirer le pied de page et le bandeau de confiance de `/devis` sur mobile, resserrer l'espace sous les cartes. L'événement `devis_etape` posé ce matin dira dans une semaine si c'est bien là que ça casse.

### A3. 34 pages en ligne sont absentes du sitemap

Elles répondent toutes en 200, elles sont liées depuis le site, mais Google n'est pas prévenu de leur existence.

- **les 10 fiches artisans** : Philippe Urraca, Mariage Frères, Alain Milliat, Pierre Morel, Maison Marques, Laura Todd, La Ferme de Viltain, Les Vergers de Plaisirs, Un Passage à l'Autre, Mado Paris
- **23 fiches produits de la pause goûter** : madeleines Octobre Rose, tartes, cakes, compotes, crêpes, babka…
- `/contact/rendez-vous`

La fiche `madeleines-octobre-rose` reçoit **17 liens internes** et n'est pas dans le sitemap.

C'est dommage deux fois. Les fiches artisans sont exactement le contenu que Google et les moteurs d'IA valorisent le plus : des fournisseurs nommés, vérifiables, un Meilleur Ouvrier de France parmi eux. C'est ce qui distingue un vrai traiteur d'un site de photos.

**Correction** : ajouter ces deux familles de routes au générateur de sitemap.

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

---

## B. Incohérences

### B1. Le téléphone est obligatoire sur `/contact`, facultatif sur `/devis`

Deux formulaires, deux règles. Le champ téléphone a été rendu facultatif sur `/devis` pour réduire la friction ; `/contact` l'exige toujours. Même remarque pour « Société », obligatoire des deux côtés.

### B2. `llms.txt` ne porte que 3 des 10 prix de départ

Depuis aujourd'hui, chaque page de la carte affiche son prix de départ. `llms.txt` n'en cite que trois (petit-déjeuner 8 €, goûter 6 €, cocktails 29,90/40,90/51,90). Manquent : plateaux repas 28,90, lunch box 18,90, buffets 34,90, plateaux apéritifs 63,90, coffrets 17,90, boissons 3,80, animations 600.

C'est précisément ce qu'une IA cherche quand on lui demande « combien coûte un plateau repas livré à Paris ».

### B3. Une image étirée sur tablette

`prod-cake-marbre.webp` est affichée sur 736 px alors que le fichier n'en fait que 491 : elle est floue à cette largeur.

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
