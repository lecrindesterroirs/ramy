# Audit SEO complet — L'Écrin Traiteur

**Site audité :** https://www.lecrin-traiteur.fr
**Code :** `/Users/ramy/Desktop/claude site web` (Next.js App Router, Vercel)
**Date :** 06/07/2026
**Méthode :** analyse croisée code + site live (curl), findings re-vérifiés en adversarial.

---

## 1. Synthèse exécutive

Le site est **techniquement bien construit et éditorialement soigné**, mais il n'est **pas prêt à absorber du trafic payant ni à "écraser le marché"** en l'état : trois défauts bloquants doivent tomber avant toute campagne. **(1) Le tunnel de conversion secondaire est cassé** — le mini-formulaire DevisRapide, présent sur ~7 pages, renvoie un HTTP 400 et n'envoie aucun email (100 % des leads perdus, confirmé en live). **(2) Le NAP est incohérent** : le site affiche partout le 07 60 16 96 20 alors que le Google Business Profile (5,0★/18 avis) indique le 01 74 54 23 10 — divergence propagée jusque dans les données structurées, poison direct pour le SEO local d'un domaine jeune. **(3) Les données structurées émettent des signaux invalides** : offres à `price:"0"` (produit "gratuit") sur cocktails/animations, avis auto-attribués (`aggregateRating` de 3 alors que Google en compte 18, risque de flag Rich Results), et une page À-propos peuplée de personas fictifs incohérents avec l'éditeur réel.

S'ajoutent une accessibilité gravement déficiente (contraste sous WCAG AA, formulaires sans `<label>`, focus clavier invisible, date-picker inutilisable au clavier), l'absence totale d'en-têtes de sécurité, et l'absence de cache navigateur sur tous les assets `/public`. **Score qualitatif : 6/10** — socle solide (crawl propre, canonicalisation cohérente, profondeur de clic saine, balisage riche là où il existe) mais sabordé par des défauts factuels graves et faciles à corriger. La bonne nouvelle : **l'essentiel du blocage est en quick wins** (1 fichier `next.config.mjs`, 1 constante téléphone, 1 garde d'API).

**Compteurs :** 🔴 8 critiques · 🟠 21 majeurs · 🟡 24 mineurs · ⚪ 12 info.

---

## 2. Top priorités — quick wins (fort impact / faible effort)

Classés par ratio impact ÷ effort. **À faire avant tout lancement d'ads.**

| # | Problème | Correction concrète | Où |
|---|----------|---------------------|-----|
| 1 | **DevisRapide cassé** : POST → HTTP 400, aucun email, lead perdu à 100 % sur ~7 pages | Assouplir la garde serveur `if (!email \|\| !prestation)` **OU** envoyer `nom` depuis le composant ; ajouter fallback `nom \|\| 'Prospect'` dans le sujet email | `app/api/devis/route.js:19-21` + `components/DevisRapide.js:16-39` |
| 2 | **NAP incohérent** : 07 60 16 96 20 (site) ≠ 01 74 54 23 10 (GBP), y compris dans les schemas | Trancher UN numéro (le fixe GBP = signal B2B) et le propager à l'octet près sur les 12 occurrences | `components/Footer.js:111,114` · `Hero.js:181,184` · `MobileCTA.js:63,67` · `contact/page.js:164` · `traiteur/[ville]/page.js:47` · `[quartier]/page.js:76` · mentions/cgv/confidentialité |
| 3 | **Offer `price:"0"`** (produit déclaré gratuit) sur cocktails + animations → Offer invalide | Supprimer entièrement `offers` (prestation sur devis) OU basculer en `@type:'Service'` sans prix | `app/creations/cocktails/[slug]/page.js:69` · `animations-culinaires/[slug]/page.js:46` · nettoyer fallback `GalleryFiche.js:66` |
| 4 | **Avis auto-attribués** : `aggregateRating` de 3 (au lieu de 18), `review` hardcodés → violation policy, risque flag | Retirer `aggregateRating` + `review` de l'entité Organization ; garder les témoignages en HTML sans JSON-LD Review | `components/TestimonialsSection.js:59-78` |
| 5 | **Aucun cache navigateur** sur `/public` (`max-age=0` sur polices, images, SVG, OG) | Ajouter `async headers()` posant `Cache-Control: public, max-age=31536000, immutable` sur `/fonts/*` + extensions image | `next.config.mjs` (pas de `headers()`) |
| 6 | **Aucun en-tête de sécurité** applicatif (X-Content-Type, X-Frame, Referrer-Policy, Permissions-Policy) | Dans le même `headers()` : `nosniff`, `SAMEORIGIN`, `strict-origin-when-cross-origin`, `Permissions-Policy` restrictive ; puis CSP en Report-Only | `next.config.mjs` |
| 7 | **~118 pages sans `og:image`** (aperçus sociaux cassés) — merge superficiel de `openGraph` | Helper `lib/buildMetadata.js` réinjectant `openGraph.images` par défaut dans tous les layouts enfants | 33 layouts (`app/traiteur/*`, `journal/*`, `occasions/*`, `creations/*`…) |
| 8 | **Lien interne → 404** : carte "Coffret de chocolats" pointe vers `/petits-dejeuners-et-pauses/chocolat` (n'existe pas) | Remplacer l'id `'chocolat'` par un slug 200 (`cake-chocolat`) ou retirer la carte | `app/creations/coffrets-cadeaux/page.js:34` |
| 9 | **3 fiches madeleines = doublons parfaits** (title + H1 + og:title identiques) | Utiliser `product.seoTitle` (déjà différencié) au lieu de `product.name` ; différencier le H1 par quantité | `app/creations/petits-dejeuners-et-pauses/[slug]/layout.js` |
| 10 | **Signaux d'indexation contradictoires** sur `/creations/coffrets-cadeaux` (Disallow + sitemap + meta index + canonical + liens) | Trancher : si à indexer, retirer le `Disallow` de robots.js ; sinon `noindex` + retrait sitemap/liens | `app/robots.js:10` · `sitemap.js:38` · `layout.js` · `Footer.js:61` |
| 11 | **Pas de H1** sur cocktails/[tier] et /devis | Rendre `Cocktail ${f.label}` en `<h1>` ; ajouter un `<h1>` "Demander un devis…" | `cocktails/[slug]/page.js` · `devis/page.js` |
| 12 | **Redirect non-www → www en 307** (temporaire) | Passer en permanent (Vercel Settings > Domains, ou `redirects()` avec `permanent:true`) | Vercel / `next.config.mjs` |
| 13 | **Cache court sur `/_next/image`** | `images.minimumCacheTTL: 2678400` | `next.config.mjs` |
| 14 | **Aucun anti-spam** sur `/api/devis` et `/api/contact` | Honeypot caché + rate-limit IP (ou Turnstile invisible) | `app/api/*/route.js` |
| 15 | **Injection HTML** non échappée dans l'email de notification | `escapeHtml()` sur chaque champ avant interpolation | `app/api/contact/route.js` · `devis/route.js` |
| 16 | **Preuve sociale 5,0★/18 avis jamais affichée** | Badge "5,0★ · 18 avis Google" cliquable vers GBP dans Hero, /devis, /contact | `Hero.js`, `devis/page.js`, `contact/page.js` |
| 17 | **Hub /occasions absent du sitemap** (indexable + lié) | Ajouter `url('/occasions', 0.85, 'monthly')` | `app/sitemap.js` |

---

## 3. Chantiers majeurs (fort impact, effort moyen/élevé)

1. **Accessibilité (WCAG AA) — refonte transverse.** Contraste blanc/#E0A126 = 2,26:1 (échec) ; formulaire contact sans `<label>`/`for`/`aria-label` (placeholder-as-label) ; date-picker custom inutilisable au clavier (`<div onClick>` sans rôle/tabindex) ; méga-menu hover-only sans `aria-expanded`/ouverture clavier ; aucune règle `:focus-visible` dans tout le dépôt. → Assombrir l'accent (#9A6B12 ou texte #111), lier tous les labels, remplacer le date-picker par `<input type="date">`, ajouter `onClick`+ARIA sur la nav, style `:focus-visible` global. *(Findings a11y 1-6.)*

2. **Données structurées — consolidation d'entité.** Aucun `@id` dans tout le site → Organization + LocalBusiness se dupliquent ; pages catégories/hubs/contact/devis/journal sans aucun JSON-LD ; Article avec image relative + publisher sans logo + `dateModified` absent ; villes clonant un LocalBusiness complet par ville (risque spam local). → `@id` canonique unique réutilisé partout, BreadcrumbList+ItemList sur catégories, LocalBusiness complet sur /contact et /devis, Service+areaServed sur les villes plutôt qu'un LocalBusiness cloné. *(Structured data 4-9.)*

3. **Refonte de la page À-propos (E-E-A-T).** Personas fictifs (Édouard Marchand "chef de palace", etc.), genèse "boutique du 11e" contredite par les données villes (Boulogne), stats invérifiables ("10 ans", "+500 événements", "98 %") sur un domaine jeune. → Réécrire sur des faits vérifiables (vrai fondateur Ramy ABDELATY, genèse Boulogne, modèle sourcing+logistique aligné sur /univers/nos-artisans). *(E-E-A-T 6-7.)*

4. **Maillage interne latéral.** Aucun cross-linking article→article (25 articles isolés) ; fiches produits/cocktails sans liens sœurs ; villes non maillées entre elles (culs-de-sac) ; méga-menu rendu client-only (liens absents du HTML serveur) ; sitemap contredit le maillage réel (fiches leaf + hub /occasions absents). → Blocs "à lire aussi" / "produits similaires" / "villes limitrophes", rendu server-side du méga-menu (CSS au lieu de montage conditionnel), complétion du sitemap. *(Maillage 2-7.)*

5. **Titres & descriptions on-page.** Majorité des titres > 60 car. (jusqu'à 128) ; double suffixe marque sur /traiteur ; marque absente sur villes/journal ; descriptions > 160 car. → Réécrire ≤ 60 car. mot-clé en tête, uniformiser la marque via le template root. *(On-page 5-8.)*

6. **Îlots de composants "use client".** 71/133 fichiers en `use client` (le SSR fonctionne, mais coût d'hydratation TBT/INP) + ~14 photos en `<img>` brut court-circuitant l'optimiseur (~570 Ko évitables sur l'accueil). → Pattern îlots (interactivité isolée dans de petits enfants client) + migration des `<img>` raster vers `next/image`. *(Perf 2, 4.)*

---

## 4. Détail par dimension

### 4.1 Technique — crawl & indexation
*Deux findings majeurs confirmés : signaux d'indexation contradictoires sur /coffrets-cadeaux, et redirect non-www en 307 temporaire. Canonicalisation par ailleurs cohérente, aucun contenu dupliqué détecté.*

| Sév. | Impact | Effort | Problème | Correction | Emplacement |
|------|--------|--------|----------|-----------|-------------|
| 🟠 | Fort | Faible | 4 signaux d'indexation contradictoires sur /coffrets-cadeaux | Trancher une intention unique (retirer Disallow OU noindex+retrait sitemap/liens) | `robots.js:10`, `sitemap.js:38`, `layout.js`, `Footer.js:61`, `ProductsPageTemplate.js:96` |
| 🟠 | Moyen | Moyen | Redirect non-www→www en 307 (temporaire) | Passer en 308/301 permanent (Vercel Domains ou `redirects()`) | Vercel / `next.config.mjs` |
| 🟡 | Faible | Moyen | Chaîne 2 sauts depuis http://non-www | Combiner upgrade https + www en un seul 301 | Edge Vercel |
| 🟡 | Moyen | Faible | Hub /occasions absent du sitemap | `url('/occasions', 0.85, 'monthly')` | `sitemap.js` |
| 🟡 | Faible | Moyen | `lastmod` = NOW recalculé à chaque build sur 130+ pages | Vraie date de modif par page, NOW en fallback | `sitemap.js:9` |
| 🟡 | Faible | Faible | `<title>` 404 identique à l'accueil | Metadata dédié "Page introuvable (404)" | `app/not-found.js` |
| ⚪ | Faible | — | Absence hreflang (conforme, site FR) | Aucune action | `app/layout.js` |
| ⚪ | Faible | — | Canonicalisation cohérente, 0 duplication | Maintenir | Tous types de pages |

### 4.2 Données structurées (JSON-LD)
*Balisage riche sur home/fiches, mais 3 défauts graves live : Offer price 0, avis auto-attribués, NAP triple. Pages entières sans JSON-LD, aucun `@id` pour consolider l'entité.*

| Sév. | Impact | Effort | Problème | Correction | Emplacement |
|------|--------|--------|----------|-----------|-------------|
| 🔴 | Fort | Moyen | Offer `price:"0"` (produit gratuit) sur cocktails/animations | Supprimer `offers` ou `@type:'Service'` sans prix | `cocktails/[slug]/page.js:69`, `animations-culinaires/[slug]/page.js:46`, `GalleryFiche.js:66` |
| 🔴 | Fort | Moyen | Avis auto-attribués sur Organization (self-serving) | Retirer `aggregateRating`+`review` du JSON-LD | `TestimonialsSection.js:59-78` |
| 🔴 | Fort | Faible | NAP incohérent (home sans tél/adresse ; 3 NAP divergents) | NAP unique = GBP sur toutes les entités ; corriger geo home | `app/page.js`, `traiteur/[ville]/page.js:47-53` |
| 🟠 | Fort | Faible | Article : image relative + publisher sans logo + `dateModified` absent | Image absolue, `publisher.logo`, `dateModified`, `@id` | `journal/[slug]/page.js:344-377` |
| 🟠 | Fort | Moyen | Pages catégories sans BreadcrumbList ni ItemList | Injecter Breadcrumb + ItemList via composant serveur | `creations/plateaux-repas\|cocktails\|plateaux-aperitifs/page.js` |
| 🟠 | Moyen | Moyen | Hubs + /devis + /contact : 0 JSON-LD | LocalBusiness+ContactPoint sur contact/devis ; Blog/ItemList sur hubs | `traiteur`, `journal`, `occasions`, `devis`, `contact` |
| 🟠 | Moyen | Moyen | Aucun `@id` → entités dupliquées | `@id` canonique unique réutilisé partout | `app/page.js` + `TestimonialsSection.js` |
| 🟡 | Faible | Faible | `sameAs` auto-référent, pas de logo | Vrais profils (GBP, LinkedIn, Insta) + logo | `app/page.js:85` |
| 🟡 | Moyen | Faible | LocalBusiness cloné par ville sans `@id` | `@id` unique + `areaServed` (Service) au lieu de cloner | `traiteur/[ville]/page.js:43-68` |
| 🟡 | Faible | Faible | Fiches Product (plateaux-repas…) hors sitemap | Ajouter les fiches au sitemap | sitemap vs `creations/*/[slug]` |
| ⚪ | Faible | Moyen | `hasMenu`/Menu non exploité (FoodEstablishment) | Ajouter `hasMenu` structurant les formules | `traiteur/[ville]/page.js` |
| ⚪ | Faible | Moyen | Service schema absent pour les prestations | `@type:'Service'` + provider + areaServed | pages catégories |
| ⚪ | Faible | Faible | FAQPage potentiellement dupliqué entre pages | Auditer unicité Q/R par URL | `FAQSection.js`, occasions, quartiers |

### 4.3 On-page — titres & contenu
*~118 pages sans og:image (cause : merge superficiel de openGraph), H1 manquants, doublons madeleines, double suffixe marque, titres trop longs.*

| Sév. | Impact | Effort | Problème | Correction | Emplacement |
|------|--------|--------|----------|-----------|-------------|
| 🔴 | Fort | Moyen | ~118 pages sans `og:image` | Helper réinjectant `openGraph.images` | 33 layouts |
| 🔴 | Fort | Faible | Cocktails/[tier] : aucun H1 | `<h1>Cocktail ${f.label}` | `cocktails/[slug]/page.js` |
| 🔴 | Fort | Faible | 3 fiches madeleines = doublons parfaits | Utiliser `seoTitle` + H1 différencié | `petits-dejeuners-et-pauses/[slug]/layout.js` |
| 🟠 | Moyen | Faible | /devis : aucun H1 | Ajouter `<h1>` "Demander un devis…" | `devis/page.js` |
| 🟠 | Moyen | Faible | /traiteur : marque dupliquée ×2 dans le title | Retirer le suffixe en dur | `traiteur/layout.js:2` |
| 🟠 | Moyen | Moyen | Titres villes/journal sans marque (incohérence) | Uniformiser la marque via template root | `traiteur/[ville]/layout.js`, `journal/[slug]/layout.js` |
| 🟠 | Moyen | Moyen | Majorité des titres > 60 car. (jusqu'à 128) | Réécrire ≤ 60 car., mot-clé en tête | `citiesData.js`, `occasionsData.js`, `creations/*` |
| 🟡 | Moyen | Faible | Descriptions > 160 car. (jusqu'à 220) | Raccourcir ≤ 155 car. + CTA | cocktails, quartiers, occasions |
| 🟡 | Faible | Moyen | twitter:title/description génériques | Aligner twitter:* sur openGraph dans le helper | `layout.js` + enfants |
| 🟡 | Faible | Faible | Alt galerie génériques ("Réception L'Écrin" ×9) | Alt descriptifs uniques | `cocktails/[slug]/page.js:105` |
| ⚪ | Faible | Faible | og:title variantes non différencié | Intégrer la quantité dans og:title | `petits-dejeuners-et-pauses/[slug]/layout.js` |

### 4.4 Maillage interne
*Lien cassé vers 404, 3 pages orphelines, méga-menu client-only, sitemap contredit le maillage. NAP footer divergent propagé sur 141 pages.*

| Sév. | Impact | Effort | Problème | Correction | Emplacement |
|------|--------|--------|----------|-----------|-------------|
| 🔴 | Fort | Faible | Lien interne → 404 (`/petits-dejeuners-et-pauses/chocolat`) | Corriger l'id `'chocolat'` → slug 200 | `coffrets-cadeaux/page.js:34` |
| 🟠 | Moyen | Moyen | 0 cross-linking article→article | Bloc "3 articles liés" par tags | `journal/[slug]/page.js` |
| 🟠 | Fort | Faible | 3 pages orphelines (/a-propos, notre-philosophie, notre-savoir-faire) | Ajouter au footer/nav | `Footer.js`, `Navbar.js:42-44` |
| 🟠 | Fort | Moyen | Fiches leaf + /occasions absents du sitemap | Générer les fiches leaf + entrée /occasions | `sitemap.js` |
| 🟠 | Moyen | Moyen | Méga-menu rendu client-only (liens hors HTML serveur) | Masquer en CSS au lieu de montage conditionnel | `Navbar.js:215,358,429` |
| 🟠 | Moyen | Moyen | Fiches sans liens sœurs | Bloc "produits/formules similaires" | `petits-dejeuners-et-pauses/[slug]`, `cocktails-et-buffets/[slug]` |
| 🟠 | Fort | Faible | NAP footer ≠ GBP (propagé 141 pages) | Aligner tél footer sur GBP | `Footer.js:111` |
| 🟡 | Moyen | Moyen | Villes non maillées entre elles (culs-de-sac) | Bloc "villes limitrophes" | `traiteur/[ville]/page.js` |
| 🟡 | Moyen | Faible | Événements saisonniers isolés (inbound=1) | Liens croisés événement↔article | `evenements-saisonniers/[slug]/page.js` |
| ⚪ | Faible | Faible | Breadcrumb sans `<nav aria-label>`/`<ol>` | Encapsuler dans nav+ol sémantique | composant fil d'Ariane |
| ⚪ | Faible | Faible | 5 hubs catégorie en depth 3 | Remonter via footer/nav server-side | `pauses-gourmandes`, `lunch-box`, etc. |
| ⚪ | Faible | — | Profondeur de clic saine + ancres descriptives | Maintenir | Ensemble du site |

### 4.5 Performance & Web Vitals
*Absence de cache navigateur sur /public (plus grave, plus facile), photos en `<img>` brut, cache court sur /_next/image, coût d'hydratation use client.*

| Sév. | Impact | Effort | Problème | Correction | Emplacement |
|------|--------|--------|----------|-----------|-------------|
| 🔴 | Fort | Faible | Assets /public sans cache (`max-age=0`) | `headers()` : `max-age=31536000, immutable` sur fonts+images | `next.config.mjs` |
| 🔴 | Fort | Moyen | ~14 photos en `<img>` brut (AVIF/srcset absents, ~570 Ko évitables) | Migrer vers `next/image` (prioriser les 4 de l'accueil) | `DetailSection.js:41`, `SelectionSection.js:47`, `ExperiencesSection.js:97`, `MadeleinesSection.js:29`… |
| 🟠 | Moyen | Faible | /_next/image cache court (`max-age=0`) | `images.minimumCacheTTL: 2678400` | `next.config.mjs` |
| 🟠 | Moyen | Élevé | 71 fichiers use client (coût hydratation TBT/INP) | Pattern îlots (interactivité isolée) | `creations/*/page.js`, `journal/page.js`, etc. |
| 🟡 | Faible | Faible | Parallax JS sur le Hero (LCP en client) | Remplacer par CSS | `Hero.js:1-18` |
| 🟡 | Faible | Faible | Police Neue Montreal Medium non préchargée | Preload si above-the-fold | `globals.css:30`, `layout.js:59` |
| ⚪ | Faible | Faible | og-image.jpg 142 Ko | Recompresser ~60-80 Ko | `public/og-image.jpg` |

### 4.6 Mobile / responsive
*Dimension non auditée en profondeur (retour de format minimal). À couvrir dans une passe dédiée : viewport, tap targets ≥ 48px, absence de scroll horizontal, lisibilité mobile.*

| Sév. | Impact | Effort | Problème | Correction | Emplacement |
|------|--------|--------|----------|-----------|-------------|
| ⚪ | Faible | Faible | Dimension non couverte (placeholder) | Lancer un audit mobile dédié (Lighthouse mobile, tap targets, viewport) | `app/layout.js` |

### 4.7 Accessibilité (a11y)
*6 findings critiques/majeurs confirmés code + live, 0 faux positif. Accessibilité clavier et lecteur d'écran gravement déficiente.*

| Sév. | Impact | Effort | Problème | Correction | Emplacement |
|------|--------|--------|----------|-----------|-------------|
| 🔴 | Fort | Moyen | Contraste blanc/#E0A126 = 2,26:1 (échec AA) | Accent #9A6B12 sur blanc, ou texte #111 sur accent (8,36:1) | `globals.css:54`, `DevisRapide.js:160`, `Navbar.js:580` |
| 🔴 | Fort | Moyen | Formulaire contact sans label programmatique | `<label htmlFor>` + `aria-required` par champ | `contact/page.js:215-238` |
| 🔴 | Moyen | Élevé | Date-picker custom inutilisable au clavier | `<input type="date">` natif ou pattern ARIA complet | `contact/page.js:58-91` |
| 🟠 | Fort | Élevé | Méga-menu hover-only sans ARIA/ouverture clavier | `onClick` + `aria-haspopup`/`expanded`/`controls` + Échap | `Navbar.js:187-540` |
| 🟠 | Moyen | Faible | Focus clavier invisible (`outline:none` sans focus-visible) | `:focus-visible` global (2px solid #111) | `globals.css`, `DevisRapide.js:200`, `contact/page.js:266` |
| 🟠 | Moyen | Faible | DevisRapide : labels non liés (pas de `htmlFor`/`id`) | Ajouter `id`+`htmlFor` | `DevisRapide.js:100-145` |
| 🟡 | Faible | Faible | Glyphes décoratifs lus par lecteurs d'écran | `aria-hidden="true"` sur ▾ → › | `Navbar.js:208,355,426…` |
| 🟡 | Moyen | Faible | Pas de skip link | Lien "Aller au contenu" + `id="main"` | `layout.js:55-66` |
| 🟡 | Faible | Faible | Nav hors `<header>`, `<nav>` sans nom | `<header>` + `aria-label` | `Navbar.js:135` |
| 🟡 | Faible | Faible | Accordéon FAQ sans ARIA | `aria-expanded`/`aria-controls` | `FAQSection.js:124-149` |
| 🟡 | Faible | Faible | Feedback formulaires sans `aria-live` | `role="status"`/`role="alert"` | `DevisRapide.js`, `contact/page.js` |
| 🟡 | Faible | Faible | Placeholders/micro-textes gris sous seuil | Foncer à ≥ rgba(17,17,17,0.6) | `DevisRapide.js:199`, `contact/page.js:254` |

### 4.8 Contenu, E-E-A-T & SEO local
*Socle NAP/E-E-A-T avec défauts factuels graves : tél divergent (12 occurrences), schema home incomplet, double adresse, avis sous-déclarés, À-propos fictive.*

| Sév. | Impact | Effort | Problème | Correction | Emplacement |
|------|--------|--------|----------|-----------|-------------|
| 🔴 | Fort | Faible | Tél site (07…) ≠ GBP (01…) sur 12 occurrences | UN numéro canonique partout | `Footer.js`, `Hero.js`, `MobileCTA.js`, `contact`, schemas ville/quartier |
| 🟠 | Fort | Faible | LocalBusiness home sans tél ni adresse, contredit villes | Compléter NAP complet + `sameAs` GBP | `app/page.js:47-86` |
| 🟠 | Moyen | Faible | Double adresse Suresnes vs Boulogne | Boulogne = NAP public ; Suresnes = éditeur légal only | `mentions-legales`, `cgv`, `confidentialite` |
| 🟠 | Fort | Moyen | `aggregateRating` = 3 avis (vs 18 GBP) | Refléter 18 + flux avis vérifiables, ou retirer | `TestimonialsSection.js:56-78` |
| 🟠 | Moyen | Faible | Aucun lien vers la fiche GBP (`sameAs` auto-référent) | URL courte GBP dans `sameAs` + lien "18 avis Google" | `app/page.js:85`, `Footer.js:119-126` |
| 🟠 | Moyen | Moyen | À-propos : personas fictifs, genèse incohérente | Réécrire sur faits vérifiables (vrai fondateur, Boulogne) | `a-propos/page.js:13-35,143` |
| 🟡 | Faible | Faible | Stats invérifiables ("10 ans", "+500", "98 %") | Chiffres réels/sourçables ou retirer | `a-propos/page.js:7-11` |
| 🟡 | Moyen | Moyen | Articles signés Organization, sans auteur | `author` Person + bio + `dateModified` | `journal/[slug]/page.js:352`, `journalData.js` |
| 🟡 | Faible | Faible | Pas de ContactPoint ni horaires structurés | `contactPoint` + bloc horaires clarifié | `contact/page.js`, `app/page.js` |
| 🟡 | Moyen | Élevé | Gaps sémantiques (régimes vegan/halal/sans-gluten, abonnements) | Cluster "régimes" + pages intentions B2B à volume | sitemap / nouveau contenu |
| ⚪ | Faible | Faible | Logos clients : vérifier autorisation d'usage | Confirmer accord ou anonymiser | `TestimonialsSection.js:40-50` |

### 4.9 Conversion & UX
*Tunnel secondaire cassé (aggravé en live), NAP divergent, preuve sociale inexploitée, aucun anti-spam.*

| Sév. | Impact | Effort | Problème | Correction | Emplacement |
|------|--------|--------|----------|-----------|-------------|
| 🔴 | Fort | Faible | DevisRapide → HTTP 400, lead perdu 100 % (~7 pages) | Corriger garde API + envoyer `nom` + champs Prénom/Tél | `DevisRapide.js:16-39`, `api/devis/route.js:19-21` |
| 🔴 | Fort | Faible | NAP tél site ≠ GBP (schemas inclus) | UN numéro de référence partout | `Footer`, `Hero`, `MobileCTA`, schemas ville/quartier |
| 🟠 | Fort | Moyen | Preuve sociale 5,0★/18 avis affichée nulle part | Badge avis Google cliquable près des CTA | Hero, /devis, /contact |
| 🟠 | Fort | Faible | `aggregateRating` = 3 au lieu de 18 (risque flag) | Refléter le réel ou retirer | `TestimonialsSection.js:59-78` |
| 🟠 | Moyen | Faible | Aucun anti-spam sur /api/devis et /api/contact | Honeypot + rate-limit IP | `api/*/route.js` |
| 🟡 | Moyen | Faible | Pas d'email de confirmation au prospect | `resend.emails.send` vers le prospect | `api/devis/route.js`, `api/contact/route.js` |
| 🟡 | Moyen | Faible | Pas de validation format email/tél serveur | Regex email + normalisation tél | `api/*/route.js` |
| 🟡 | Moyen | Faible | Tél absent de la navbar sticky desktop | Lien `tel:` dans la navbar | `Navbar.js` |
| 🟡 | Moyen | Faible | LocalBusiness home incomplet | Compléter tél + adresse | `app/page.js` |
| ⚪ | Faible | Moyen | /devis en `height:100vh`+overflow hidden (laptops) | `min-height:100vh` + overflow naturel | `devis/page.js:621` |

### 4.10 Sécurité, en-têtes & config
*Aucun en-tête de sécurité applicatif hormis HSTS. Points transport/cache par ailleurs conformes.*

| Sév. | Impact | Effort | Problème | Correction | Emplacement |
|------|--------|--------|----------|-----------|-------------|
| 🟠 | Moyen | Faible | Aucun en-tête sécurité (X-Content-Type, X-Frame, Referrer, Permissions) | `headers()` : nosniff, SAMEORIGIN, referrer-policy, permissions-policy + CSP Report-Only | `next.config.mjs` |
| 🟡 | Faible | Faible | HSTS sans `includeSubDomains`/`preload` | Définir explicitement HSTS complet | `headers()` |
| 🟡 | Faible | Faible | Manifest `use-credentials` + ACAO `*` → bloqué | Retirer `crossorigin` (same-origin) | `<link rel=manifest>` |
| 🟡 | Faible | Faible | Injection HTML non échappée dans email notif | `escapeHtml()` sur chaque champ | `api/contact/route.js`, `devis/route.js` |
| ⚪ | Faible | Faible | favicon-16/32 en 404 (non référencés) | Optionnel : ajouter les 2 PNG | `/favicon-16x16.png` |
| ⚪ | Faible | — | Transport/cache/secrets conformes | Maintenir (base de non-régression) | multiples endpoints |

---

## 5. Ce qui est déjà excellent (à ne pas casser)

- **Crawl & canonicalisation propres** : trailing-slash → 308, URL majuscules → 404 (pas de doublon casse), canonical auto-référent sur tous les types de pages, 0 contenu dupliqué détecté. `<html lang="fr">` correct, absence de hreflang justifiée.
- **Profondeur de clic saine** : 41 pages depth 1, 91 depth 2, 5 depth 3, 0 au-delà. Ancres descriptives (aucun "cliquez ici"). Ratio interne/externe très favorable.
- **Balisage riche là où il existe** : BreadcrumbList + Product exacts sur les fiches, FAQPage, hasOfferCatalog. Le socle JSON-LD est bon, il faut juste l'assainir et l'étendre.
- **404 réel** (pas de soft-404), **statut HTTP correct**, page 404 soignée côté UX.
- **Sécurité transport/config** : HTTP→HTTPS en 308, Brotli actif, `/_next/static/*` en `immutable`, `poweredByHeader:false` (pas de fuite `x-powered-by`), aucun fichier sensible exposé (.env/.git/config → 404), aucun secret hardcodé, API POST-only (GET → 405), aucun mixed-content.
- **Accueil en Server Component** avec preload LCP (`fetchPriority=high`), fiches produits avec vrais prix (37/37).
- **Contenu éditorial soigné** : 25+ articles de journal, copywriting travaillé, aucun alt manquant sur le site.
- **Fiche GBP forte** : 5,0★/18 avis — un actif précieux, aujourd'hui sous-exploité.

---

## 6. Feuille de route — 3 vagues pour "écraser le marché"

### 🚨 Vague 1 — Semaine 1 : débloquer (avant tout ad)
Objectif : **plus aucun lead perdu, NAP cohérent, signaux Google valides.** Presque tout est faible effort.
1. **Réparer DevisRapide** (garde API + champs) — le tunnel doit convertir. *(P1)*
2. **Trancher et propager le NAP** (un seul téléphone = GBP, une seule adresse publique = Boulogne) sur les 12 occurrences + schemas. *(P2, P8-conv, P8-eeat)*
3. **Assainir les données structurées** : retirer `price:"0"`, retirer `aggregateRating`/`review` auto-attribués (ou refléter 18). *(P3, P4)*
4. **`next.config.mjs`** : `headers()` (cache immutable /public + en-têtes sécurité) + `minimumCacheTTL`. *(P5, P6, P13)*
5. **Corriger le lien 404** + trancher /coffrets-cadeaux + hub /occasions au sitemap. *(P8, P10, P17)*
6. **Ajouter les H1 manquants** + corriger les doublons madeleines + double suffixe /traiteur. *(P9, P11)*
7. **Anti-spam** + échappement HTML sur les endpoints. *(P14, P15)*
8. **Redirect non-www → permanent** (Vercel). *(P12)*

### 🔧 Vague 2 — Semaines 2-3 : crédibiliser & optimiser
Objectif : **E-E-A-T solide, aperçus sociaux, accessibilité, conversion.**
1. **Refonte À-propos** sur faits vérifiables + auteurs nommés sur les articles. *(Chantier 3)*
2. **Helper metadata** réinjectant og:image sur les ~118 pages + alignement twitter:*. *(P7)*
3. **Accessibilité prioritaire** : contraste accent, labels formulaires, focus-visible, date-picker natif. *(Chantier 1)*
4. **Preuve sociale** : badge "5,0★ · 18 avis Google" cliquable sur Hero/devis/contact + lien fiche GBP. *(P16)*
5. **Consolidation `@id`** + JSON-LD sur catégories/hubs/contact/devis + Article (image absolue, logo, dateModified). *(Chantier 2)*
6. **Titres/descriptions** ≤ 60/155 car., marque uniformisée. *(On-page 6-8)*
7. **Maillage** : pages orphelines au footer, méga-menu server-side, sitemap complété (fiches leaf). *(Chantier 4)*
8. **Email de confirmation** prospect + validation format. *(Conv. 6-7)*

### 🌱 Vague 3 — Continu : dominer le marché
Objectif : **autorité thématique et locale, prêt à scaler les ads.**
1. **Cross-linking latéral** : blocs "à lire aussi" (articles), "produits similaires", "villes limitrophes", croisement événement↔article. *(Chantier 4)*
2. **Cluster de contenu "régimes"** (vegan, sans gluten, halal) + pages intentions B2B à volume (abonnement corbeille, traiteur événementiel). *(E-E-A-T 10)*
3. **Îlots de composants** : migrer les pages de contenu en Server Components + `<img>` → `next/image`. *(Chantier 6, Perf 2)*
4. **Audit mobile dédié** (Lighthouse mobile, tap targets, viewport) — dimension non couverte ici. *(§4.6)*
5. **CSP durcie** (passer de Report-Only à enforce) + HSTS preload. *(Sécu 1-2)*
6. **hasMenu / Service schema** pour renforcer la pertinence "traiteur". *(Structured data 11-12)*
7. **Finitions a11y** (skip link, aria-hidden glyphes, aria-live, accordéon FAQ) + `lastmod` fiable + parallax CSS.

---

*Chaque finding a été prouvé (code + live). Priorité = impact SEO ÷ effort. La Vague 1 est le prérequis non négociable avant toute dépense publicitaire.*
