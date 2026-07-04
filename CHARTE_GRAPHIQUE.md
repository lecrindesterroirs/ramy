# Charte Graphique — L'Écrin Traiteur

> Document de référence officiel de l'identité visuelle de **L'Écrin Traiteur**.
> Source de vérité : le site en production `lecrin-traiteur.fr` (`app/globals.css`).
> Toute création (site, packaging, réseaux sociaux, documents) doit s'y conformer.

---

## 1. La marque

| | |
|---|---|
| **Nom officiel** | L'Écrin Traiteur |
| **Usage courant** | L'Écrin |
| **Activité** | Livraison de petits déjeuners, goûters, plateaux repas et buffets en entreprise |
| **Zone** | Paris et Île-de-France |
| **Cible** | Office managers, assistant·es de direction, RH et facilities en entreprise |
| **Positionnement** | Artisanal et terroir — sourcing identifié, présentation soignée, zéro industriel |

**Métaphore directrice.** Un écrin est la boîte qui protège et révèle un objet précieux. Chaque produit livré est présenté comme un trésor. Le site est l'écrin numérique : propre, chaleureux, qui révèle avec intention.

**Émotion cible.** Chaleur et authenticité — pas le luxe froid, le luxe vivant, avec des humains derrière.

---

## 2. Couleurs

Palette officielle telle qu'utilisée en production. Ne jamais inventer de couleur hors de ce système.

### Tokens principaux

| Rôle | Token CSS | HEX | Usage |
|---|---|---|---|
| Fond principal | `--bg-primary` | `#FFFFFF` | Fond de page par défaut |
| Fond secondaire | `--bg-secondary` | `#F8F5EF` | Sections alternantes, fonds « warm » |
| Blanc | `--white` | `#FFFFFF` | Surfaces, textes sur fond sombre |
| Texte principal | `--text-primary` | `#111111` | Titres, navigation, corps fort |
| Texte secondaire | `--text-secondary` | `#6E675F` | Paragraphes, captions, légendes |
| **Accent signature** | `--accent` | **`#E0A126`** | ⭐ CTA, labels, traits d'accent, ornements |
| Noir titre héros | _(hardcodé)_ | `#1C1614` | Couleur du titre héros (noir chaud) |

### Aperçu

```
#FFFFFF  ████████  Fond principal — blanc pur
#F8F5EF  ████████  Fond secondaire — crème chaud
#111111  ████████  Texte principal — presque noir
#6E675F  ████████  Texte secondaire — taupe chaud
#E0A126  ████████  ⭐ Accent signature — doré
#1C1614  ████████  Noir chaud — titres héros
```

### Règles d'usage des couleurs

- **`#E0A126` (accent doré)** — c'est la signature. À réserver aux : boutons/traits d'accent, labels (`.label`), petits ornements (`.accent-line`), bordures d'encart. **Jamais** sur de grandes surfaces de fond.
- **`#111111`** — tous les textes forts, la navigation, le bouton primaire plein.
- **`#6E675F`** — corps de texte et textes secondaires (jamais le noir pur pour les paragraphes).
- **`#F8F5EF`** — alternance de sections pour créer du rythme sans rupture agressive.
- **Contraste** — accent doré toujours avec texte/bordure sombre, jamais texte blanc sur doré (lisibilité).

---

## 3. Typographie

Le site utilise **4 polices propriétaires** (fichiers dans `public/fonts/`).

| Niveau | Police | Graisse / Style | Usage |
|---|---|---|---|
| **Titres** (héros, sections) | **Baskerville Display PT** | Regular 400 | `.hero-title`, `.section-title-xl`, `.section-title-md` |
| **Corps & UI** | **Neue Montreal** (PP Neue Montreal) | Regular 400 / Medium 500 | Tout le texte courant, labels, boutons, navigation |
| **Éditorial** | **PP Editorial New** | Regular 400 / Italic | Accents éditoriaux, citations |
| **Accent décoratif** | **PP Fragment Glare** | Regular Italic | Détails graphiques ponctuels |

> Fallbacks : `Baskerville Display PT, Georgia, serif` pour les titres · `Neue Montreal, 'Helvetica Neue', sans-serif` pour le corps.

### Échelle typographique (telle qu'en prod)

| Classe | Police | Taille (fluid `clamp`) | Détails |
|---|---|---|---|
| `.hero-title` | Baskerville Display PT | `clamp(54px, 6.4vw, 92px)` | `line-height: 1.08` · `letter-spacing: -0.02em` · couleur `#1C1614` |
| `.section-title-xl` | Baskerville Display PT | `clamp(40px, 4vw, 64px)` | `line-height: 0.97` · `letter-spacing: 0.01em` |
| `.section-title-md` | Baskerville Display PT | `clamp(28px, 3vw, 44px)` | `line-height: 1.0` · `letter-spacing: 0.008em` |
| `.label` | Neue Montreal 500 | `11px` | UPPERCASE · `letter-spacing: 0.12em` · couleur accent `#E0A126` |
| `.body-lg` | Neue Montreal 400 | `18px` | `line-height: 1.65` · couleur `#6E675F` |
| `.body` | Neue Montreal 400 | `16px` | `line-height: 1.7` · couleur `#6E675F` |
| `.caption` | Neue Montreal 400 | `12px` | `letter-spacing: 0.06em` · couleur `#6E675F` |

**Réglage global du corps :** `font-size: 16px` · `line-height: 1.7` · antialiasing activé.

---

## 4. Boutons & composants d'accent

| Composant | Fond | Texte | Bordure | Détails |
|---|---|---|---|---|
| `.btn-primary` | `#111111` | `#FFFFFF` | `1px #111111` | UPPERCASE · `13px` · `letter-spacing: 0.1em` · padding `16px 32px` · hover `opacity: 0.82` |
| `.btn-secondary` | transparent | `#FFFFFF` | `1px rgba(255,255,255,.6)` | Sur fond sombre/image · hover `rgba(255,255,255,.1)` |
| `.btn-accent` | transparent | `#E0A126` | `1px #E0A126` | padding `18px 48px` · hover `rgba(224,161,38,.06)` |
| `.accent-line` | `#E0A126` | — | — | Trait `40px × 1px`, ornement de section |

Tous les boutons : police **Neue Montreal 500**, UPPERCASE, `letter-spacing: 0.1em`.

---

## 5. Mise en page & espacements

| Élément | Valeur |
|---|---|
| Largeur max conteneur | `1280px` centré |
| Padding conteneur (desktop) | `0 80px` |
| Padding conteneur (≤1024px) | `0 48px` |
| Padding conteneur (≤768px) | `0 24px` |
| Hauteur nav (desktop) | `72px` · (mobile) `52px` |
| Bandeau promo | `36px` desktop · `40px` mobile |
| **Coins** | `border-radius: 0` partout — angles vifs, jamais d'arrondi |

**Breakpoints :** `sm 640` · `md 768` · `lg 1024` (pivot) · `xl 1280` · `2xl 1536`.

---

## 6. Animations & micro-interactions

Subtil et fonctionnel : on révèle sans distraire.

| Interaction | Réglage |
|---|---|
| Fade-up au scroll | `opacity 0→1` + `translateY(24px→0)`, `~0.65s`, ease doux |
| Zoom image | `transform`, `0.8s cubic-bezier(0.22, 1, 0.36, 1)` |
| Hover bouton primaire | `opacity: 0.82`, `0.3s` |
| Hover lien nav | soulignement glissant gauche→droite, `0.3s` |
| Curseur | curseur personnalisé (`cursor: none` sur les CTA) |

**Interdit :** parallaxe agressif, bounce/spring, animation lettre-par-lettre, chargements élaborés.

---

## 7. Règles de marque (rappel)

1. **Preuve du terroir** — citer un producteur/origine dans chaque offre (« Beurre Bordier, Saint-Malo »).
2. **Pas de prix publics** — B2B, tout se fait sur devis.
3. **CTA unique par page** — « Demander un devis » / « Nous contacter ». Jamais « Commander ».
4. **L'humain apparaît** — photo équipe/fondateur sur la page Histoire.
5. **Espace blanc généreux** — ne pas compresser pour « mettre plus de contenu ».
6. **Layout éditorial alterné** — pas de grille de cards identiques.

---

*Charte générée à partir de `app/globals.css` (site en production). En cas d'évolution du CSS, mettre ce document à jour.*
