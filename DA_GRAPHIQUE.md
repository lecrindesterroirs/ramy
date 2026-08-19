# DA graphique & catalogues — L'Écrin Traiteur

Base de travail pour reprendre les catalogues PDF. Tout est **en local**, rien à régénérer de zéro.

---

## 1. Les deux catalogues existants

| Livrable | Fichier | Pages | Date | Génération |
|---|---|---|---|---|
| ⭐ **Catalogue produits 2026** — *fait foi* | `catalogue/Catalogue-Lecrin-2026.pdf` (+ `-web.pdf`) | 27 | 13 juil. 2026 | sources `c3-*` |
| **Notre Maison 2026** (catalogue de marque) | `catalogue/Lecrin-Notre-Maison-2026.pdf` (+ `-web.pdf` allégé) | 13 | 17 juil. 2026 | sources `b3-*` |

**La référence de travail est le catalogue produits** (celui servi par le site et diffusé aux clients).
Ses sources `c3-*` sont parfaitement synchro : un remontage reproduit les 27 pages à l'identique — on peut
donc éditer n'importe quelle page en confiance.

`-web.pdf` = version compressée pour l'envoi par mail ; le fichier sans suffixe est la version pleine qualité.
Une copie du catalogue produits est servie par le site : `public/catalogue-lecrin-2026.pdf`.

### Sommaire de « Notre Maison 2026 » (marque, pas produits)

| Page | Source | Contenu |
|---|---|---|
| 1 | `b3-cover` | Couverture — « Notre Maison 2026 · L'art de recevoir en entreprise » |
| 2 | `b3-02` | Manifeste — « Chez nous, ce ne sont pas les produits. Ce sont les personnes. » |
| 3 | `b3-03` | Histoire / naissance de la maison |
| 4 | `b3-04` | Le mot du fondateur |
| 5 | `b3-05` | « Une carte qui n'exclut personne » (régimes) |
| 6 | `b3-06` | Nos artisans |
| 7 | `b3-07` | « Ce qu'il y a à l'intérieur, c'est un moment » |
| 8 | `b3-08` | Nos engagements |
| 9 | `b3-09` | Année de… (repères / chiffres) |
| 10 | `b3-10` | Preuve sociale — note Google, 18 avis |
| 11 | `b3-11` | L'expérience L'Écrin |
| 12 | `b3-12` | Contact — commande avant 14 h la veille |
| 13 | `c3-dos` | Dos (réutilisé de la génération produits) |

### ⭐ Sommaire de « Catalogue produits 2026 » (la référence)

Ordre vérifié page par page contre le PDF diffusé :

| Page | Source | Contenu |
|---|---|---|
| 1 | `c3-cover` | Couverture — « L'art de recevoir en entreprise · Catalogue 2026 » |
| 2 | `c3-sommaire` | Sommaire — « L'exigence au service… » |
| 3 | `c3-pd-01` | Ouverture Petit-déjeuner & pauses |
| 4 | `c3-pd-02` | Les viennoiseries |
| 5 | `c3-pd-03` | Notre signature — les madeleines |
| 6 | `c3-pd-04` | Les fruits frais |
| 7 | `c3-pd-05` | Les cakes maison |
| 8 | `c3-pd-06` | Les verrines |
| 9 | `c3-pd-07` | Nos douceurs |
| 10 | `c3-plateaux-01` | Ouverture Plateaux repas |
| 11 | `c3-plateaux-02` | Menu « La Romaine » |
| 12 | `c3-plateaux-03` | Menu « La Toscane » |
| 13 | `c3-lunch-01` | Ouverture Lunch box |
| 14 | `c3-lunch-02` | Le détail des lunch box |
| 15 | `c3-buffets-01` | Ouverture Buffets à partager |
| 16 | `c3-buffets-02` | Les trois menus buffet |
| 17 | `c3-cocktails-00` | Ouverture Cocktails |
| 18 | `c3-cocktails-01` | Les cocktails d'entreprise |
| 19 | `c3-aperitifs-01` | Ouverture Plateaux apéritifs |
| 20 | `c3-aperitifs-02` | Le détail des plateaux apéritifs |
| 21 | `c3-boissons-01` | Ouverture Boissons |
| 22 | `c3-boissons-02` | Jus artisanaux, cafés et thés |
| 23 | `c3-fin-01` | Nos engagements |
| 24 | `c3-fin-02` | Ils nous font confiance |
| 25 | `c3-fin-03` | Commander simplement |
| 26 | `c3-fin-04` | Nous contacter |
| 27 | `c3-dos` | Dos |

Le motif est régulier : chaque univers = **une page d'ouverture pleine photo + une ou plusieurs pages
de carte**. C'est le gabarit à respecter si on ajoute un univers.

`c3-recap-01` et `c3-recap-02` existent mais sont **volontairement hors montage** (≈ 30 Mo pièce).

---

## 2. Comment c'est fabriqué

Pas d'InDesign : **une page = un fichier HTML** imprimé en PDF par Chrome headless.

```
catalogue/xxx.src.html   ← LA source qu'on édite (avec placeholders)
        │  python3 build-c2.py xxx.src.html
        ▼
catalogue/xxx.html       ← auto-généré (fonts + images inlinées en base64), NE PAS éditer
catalogue/xxx.pdf        ← la page finale
catalogue/xxx.png        ← aperçu de contrôle
```

`catalogue/build-c2.py` remplace trois placeholders dans le `.src.html` :

| Placeholder | Remplacé par |
|---|---|
| `{{FONT:NomFichier.woff2}}` | la police de `public/fonts/` en base64 |
| `{{IMG:nom.jpg}}` | l'image de `public/` en base64 |
| `{{MONO}}` | le monogramme (`catalogue/mono.datauri`) |

Tout est inliné → le PDF est autonome, aucun lien externe, aucune police manquante chez l'imprimeur.

**Prérequis :** Google Chrome installé (chemin en dur dans `build-c2.py`), Python 3.

### Workflow

```bash
cd catalogue

# 1. éditer la page voulue
#    (ex. b3-04.src.html)

# 2. régénérer cette page uniquement
python3 build-c2.py b3-04.src.html

# 3. contrôler visuellement b3-04.png, puis réassembler le PDF complet
python3 merge.py notre-maison
```

`merge.py` (à la racine `catalogue/`) recolle les pages dans le bon ordre.

### ⚠️ Réserve — uniquement sur « Notre Maison », pas sur le catalogue de référence

Le `Lecrin-Notre-Maison-2026.pdf` actuel a été assemblé le 17 juil. à **00:59**, mais 5 pages ont été
retravaillées **après**, à 01:45 : `b3-02`, `b3-03`, `b3-06`, `b3-07`, `b3-09`.

Le PDF livré contient donc l'**ancienne** version de ces pages :

| Page | Dans le PDF livré | Dans les sources (plus récent) |
|---|---|---|
| 2 | « Manifeste — dix produits remarquables… » | « Notre maison — on offre un écrin à ce qui est précieux » |
| 3 | « …avec une conviction » | « …d'une idée » |
| 6 | « Des mois à chercher les pépites » | « Nous collectionnons les femmes et les hommes » |
| 7 | « Une maison de sélection » | « Ce n'est pas une madeleine, c'est un moment » |
| 9 | variante de fin de page | version retouchée |

Un `python3 merge.py notre-maison` régénère le PDF **avec les textes à jour** — c'est probablement
ce qu'on veut, mais ça écrase le fichier livré : dupliquer l'ancien avant si on tient à le garder.

Le catalogue produits, lui, est parfaitement synchro : le remontage reproduit les 27 pages livrées à l'identique.

---

## 3. Le socle graphique

### Polices — `public/fonts/`

| Rôle | Police | Fichier |
|---|---|---|
| Titres, chiffres, nom de marque | **Baskerville Display PT** | `BaskervilleDisplayPT.woff2` |
| Textes, labels, tout le reste | **Neue Montreal** (400 / 500) | `PPNeueMontreal-Regular.woff2`, `-Medium.woff2` |

> Ce sont les **vraies** polices de la marque, identiques au site.
> La `brand.md` du skill qui mentionne Cormorant / Jost est obsolète — ne pas s'y fier.

### Couleurs

| Usage | Hex | Variable |
|---|---|---|
| Or (filets, monogramme, accents) | `#C79A45` — variante `#B0872F` sur fond papier | `--gold` |
| Crème (texte sur photo) | `#F4EEE6` | `--cream` |
| Papier (fond des pages produits) | `#F1E7DF` | `--paper` |
| Encre (texte sur papier) | `#2A2318` | `--ink` |

L'or du site (`#E0A126`) est plus vif : en print on utilise les valeurs ci-dessus, plus sourdes.

### Règles de mise en page

- Format **A4 portrait**, `@page{size:210mm 297mm;margin:0}` — tout est positionné en **mm**, en absolu.
- **Filet or à 7 mm** du bord sur les pages photo (`.frame`, 0.3 mm, or à 75 % d'opacité).
- Texte sur photo : **jamais de bloc de couleur derrière**. On pose un dégradé sombre sur la photo
  (`linear-gradient` haut/bas) et le texte vit dessus.
- **Jamais d'italique.** Pas d'ornements génériques (volutes, séparateurs décoratifs).
- Hiérarchie : titre Baskerville en capitales avec `letter-spacing` large (0.06 → 0.2 em),
  sur-titres/labels en Neue Montreal 500 capitales très espacées (0.3 → 0.5 em, 8–9 pt).
- Toujours compenser le `letter-spacing` par un `text-indent` égal, sinon le texte centré part à gauche.

### Ton

Direct et concret, pas poétique. Pas de « bio / local » en boucle, jamais le mot « pro ».
Les hooks gourmands sont bienvenus. Ne jamais nommer « Mado » dans un titre.

---

## 4. Images

Toutes dans `public/`, appelées par `{{IMG:...}}` :
`brand-cover.jpg`, `brand-fondateur.jpg`, `brand-histoire.jpg`, `brand-modele.jpg`,
`brand-quote-band.jpg`, `mono-gold.png` (monogramme), et la série `cat-*` / `catalogue-*` pour les univers produits.

DA photo : produits sur **planches bois**, **lumière naturelle**. Les visuels madeleines,
viennoiseries, corbeille et brochettes sont considérés comme définitifs — ne pas les retoucher.
