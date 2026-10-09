---
name: lecrin-traiteur
description: Skill maître pour construire et faire évoluer le site de L'Écrin Traiteur — traiteur artisanal B2B de livraison en entreprise (Paris / Île-de-France). Utilise ce skill pour toute tâche liée au site : création de composants React/Next.js, pages, sections, animations, formulaires, SEO, copywriting, refonte visuelle, ou évaluation d'un rendu existant. Déclenche obligatoirement pour toute mention du site L'Écrin, de ses pages, de ses composants, ou dès que le contexte implique le design, le code ou le contenu de ce projet.
---

# L'Écrin Traiteur — Skill Maître

## Identité de la marque

**Nom officiel :** L'Écrin Traiteur  
**Usage courant :** L'Écrin  
**Activité :** Livraison de petits déjeuners, goûters, plateaux repas et buffets en entreprise  
**Zone :** Paris et Île-de-France  
**Cible :** Office managers, assistantes de direction, responsables RH et facilities en entreprise  
**Différenciateur :** Produits artisanaux et du terroir — sourcing identifié, présentation soignée, pas d'industriel

**Métaphore directrice :** Un écrin est la boîte qui protège et révèle un objet précieux. Chaque produit livré est présenté comme un trésor. Le site est l'écrin numérique : propre, chaleureux, qui révèle avec intention.

**Émotion cible :** Chaleur et authenticité — pas le luxe froid, le luxe vivant avec des humains derrière.

---

## Système de couleurs

Variables réelles du site (`app/globals.css`). Ne pas inventer de couleur hors de ce système.

```css
:root {
  --bg-primary:     #FFFFFF;  /* fond de page */
  --bg-secondary:   #F8F5EF;  /* crème : sections alternées */
  --text-primary:   #111111;  /* titres, texte fort */
  --text-secondary: #605A4F;  /* corps de texte */
  --accent:         #E0A126;  /* ⭐ jaune signature : fonds, filets, bordures */
  --accent-deep:    #875E10;  /* jaune profond : l'accent en TEXTE sur fond clair */
}
```

**Règles d'usage des couleurs :**
- `--accent` : filets, bordure du bouton accent, un bloc d'appel à l'action. Jamais sur de grandes surfaces, jamais en texte sur fond clair.
- `--accent-deep` : labels et mots mis en avant sur fond clair (contraste WCAG AA).
- Sur fond jaune : texte sombre `#1A1A18`, jamais blanc.
- Bouton principal : fond `#111111`, texte blanc. Pas de vert de marque.

---

## Système typographique

```
Titres        → Baskerville Display PT, poids 400 (repli Georgia)
               JAMAIS d'italique. Fichier : public/fonts/BaskervilleDisplayPT.woff2
               Usage : titres héros, titres de section, titres de cartes

Corps         → Neue Montreal (PP Neue Montreal), 400
               Usage : tous les paragraphes, descriptions de produits

Labels / UI   → Neue Montreal 500, MAJUSCULES, interlettrage 0,10 à 0,12 em
               Usage : labels, boutons, navigation, formulaires
```

Polices chargées par `@font-face` dans `app/globals.css` (pas de Google Fonts).
Pas de petites capitales ni d'ornements « luxe générique » (losanges, filets en série).

**Échelle typographique (fluid, avec clamp) :**
```css
--text-display: clamp(3rem, 7vw, 6.5rem);    /* H1 héros */
--text-h2:      clamp(2rem, 4vw, 3.25rem);   /* Titres de section */
--text-h3:      clamp(1.4rem, 2.5vw, 2rem);  /* Sous-titres */
--text-body:    clamp(1rem, 1.2vw, 1.125rem);/* Corps de texte */
--text-small:   0.875rem;                    /* Labels, captions */
--text-ui:      0.9375rem;                   /* Boutons, nav */
```

---

## Règles UX / UI fondamentales

1. **Preuve du terroir obligatoire.** Chaque section offre doit citer au moins un producteur ou une origine (ex : "Beurre de la Maison Bordier, Saint-Malo"). Pas de promesse sans preuve.
2. **Aucune grille de cards identiques.** Les offres sont présentées en layout éditorial alterné (image gauche/droite), pas en grille 3 colonnes.
3. **CTA unique par page.** Le CTA principal est toujours "Demander un devis" ou "Nous contacter". Pas de "Commander", "Réserver", "S'inscrire".
4. **Pas de prix publics.** L'Écrin est en B2B — les tarifs se discutent sur devis. Aucun chiffre de prix sur le site.
5. **La photographie est un enjeu.** Les photos actuelles sont "maison". Prescrire systématiquement un traitement CSS/overlay : grain warm + légère correction de saturation. Préférer les recadrages serrés qui cachent les défauts de fond.
6. **L'humain doit apparaître.** La page À Propos inclut obligatoirement une photo de l'équipe ou du fondateur. Pas que des valeurs abstraites.
7. **Le formulaire de devis est en 3 étapes.** Type de repas → Effectif + date → Coordonnées. Jamais un bloc unique de 10 champs.
8. **Navigation simple.** Maximum 2 niveaux. Items : Accueil · Nos offres · Notre histoire · Contact.
9. **Footer sobre.** Pas 4 colonnes de liens. Logo + navigation principale + contact + réseaux. Point.
10. **Espace blanc généreux.** Padding vertical de section : `96px` desktop, `64px` tablette, `48px` mobile. Ne pas compresser pour "mettre plus de contenu".

---

## Règles d'animation

La métaphore de l'écrin est **conceptuelle**, pas animatoire. Les animations sont subtiles et fonctionnelles — elles révèlent sans distraire.

```
fade-up au scroll   → opacity: 0→1 + translateY(24px→0), duration: 0.65s, ease: cubic-bezier(0.25, 0.1, 0.25, 1)
stagger de liste    → Framer Motion, délai de 120ms entre chaque élément
hover nav link      → underline qui glisse gauche→droite, 0.3s ease
hover bouton CTA    → fond légèrement assombri (filter: brightness(0.92)), 0.2s
hover carte offre   → translateY(-5px), 0.3s ease — pas de box-shadow exagérée
image reveal        → clip-path mask slide au scroll, 0.85s — optionnel si coûteux en perf
transition de page  → fade simple, 0.3s — pas de slide cinématique
```

**Interdit :** parallaxe agressif, bounce/spring, curseur personnalisé, animations de texte lettre par lettre, effets de chargement élaborés.

---

## Règles responsive

**Paradigme :** Desktop-first. La cible B2B consulte principalement sur desktop. Mobile doit être excellent mais n'est pas le cas d'usage principal.

```
Breakpoints Tailwind :
  sm  → 640px
  md  → 768px
  lg  → 1024px  ← pivot principal
  xl  → 1280px
  2xl → 1536px

Grille :
  desktop (lg+) → 12 colonnes
  tablette (md) → 6 colonnes
  mobile (< md) → 1 colonne pleine largeur

Navigation mobile → Sheet shadcn/ui (sidebar), jamais hamburger-menu DOM classique
Typographie → fluid via clamp() — pas de media queries pour les tailles de texte
Images → next/image avec sizes adaptatifs par breakpoint
Layout offres → horizontal (image 40% / texte 60%) desktop → empilé vertical mobile
Formulaire → 2 colonnes desktop → 1 colonne mobile
```

**Règle absolue :** Aucun contenu essentiel masqué sur mobile avec `hidden md:block`. Si c'est important sur desktop, c'est important partout.

---

## Stack technique

```
Framework   → Next.js 14 (App Router), React 18
Langage     → JavaScript (.js), pas de TypeScript
Styling     → classes CSS de app/globals.css + styles en ligne (pas de Tailwind, pas de shadcn/ui)
Animations  → Lenis (défilement fluide global) + composants Reveal / ParallaxImage ; jamais scroll-behavior: smooth
Images      → next/image obligatoire (optimisation + lazy loading)
Polices     → @font-face locales : Baskerville Display PT (titres), Neue Montreal (corps et UI)
Formulaire  → React Hook Form + Zod (validation)
SEO         → Next.js Metadata API (generateMetadata par page)
```

---

## Références à charger selon le contexte

| Tâche | Fichier à lire |
|---|---|
| Palette, typo, tokens CSS détaillés | `references/brand.md` |
| Inventaire des composants réels, conventions de code, gabarit de section | `references/components.md` |
| SEO — title, meta, schema, URLs | `references/seo.md` |
| Vérifier qu'un rendu n'est pas générique | `references/anti-patterns.md` |
| Construire ou réviser une page | `references/pages.md` |
| Écrire ou évaluer un texte | `references/copywriting.md` |

Charger le fichier de référence pertinent **avant** de produire du code ou du contenu.
