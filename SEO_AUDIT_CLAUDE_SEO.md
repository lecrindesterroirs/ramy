# FULL-AUDIT-REPORT — L'Écrin Traiteur

**Site:** https://www.lecrin-traiteur.fr/ · **Audité le:** 2026-07-15
**Type détecté:** Local Service — traiteur d'entreprise B2B, livraison Paris / Île-de-France
**Moteur:** claude-seo v2.2.0 (`/seo audit`), 8 sous-agents parallèles · Next.js SSR · 251 URLs

---

## 🎯 SEO Health Score : **73 / 100**  — *bon socle, gains ciblés à fort effet de levier*

Site techniquement propre et honnête (SSR intégral, NAP cohérent, schema riche, 18 pages villes réelles). Les points faibles sont **concentrés et faciles** : la preuve sociale (5,0★/18 avis) n'est ni balisée ni exposée, les pages « hub » et « marque » sont trop maigres pour convertir et pour être citées par les IA, et 68 % des pages sont servies sans cache. Aucun problème bloquant l'indexation.

### Scorecard par catégorie

| Catégorie | Score | Poids | Verdict |
|---|---|---|---|
| Technical SEO | **90** | 22 % | Excellent — 1 point critique (cache) |
| Content / E-E-A-T | **64** | 23 % | Pages marque/histoire trop maigres, zéro auteur nommé |
| On-Page SEO | **76** | 20 % | Titres/canonical propres, hubs trop courts |
| Schema / Données structurées | **72** | 10 % | Solide, manque `aggregateRating` partout |
| Performance (CWV) | **72** | 10 % | Estimé (pas de données terrain — voir note) |
| AI Search / GEO | **58** | 10 % | Ouvert aux IA mais peu de faits citables hors home |
| Images | **68** | 5 % | Hero OK, `<img>` sans width/height (risque CLS) |
| **Local SEO** *(overlay métier)* | **72** | — | NAP parfait + pages villes fortes, avis non balisés |

> **Note données CWV :** l'API PageSpeed anonyme était saturée pendant l'audit et le site n'a pas de données CrUX (trafic sous le seuil). Aucun chiffre LCP/INP/CLS terrain n'est disponible — l'analyse perf est faite **par inspection du code** (fallback conçu dans le plugin). Relancer `pagespeed_check.py` avec une clé API Google (`/seo google setup`) pour des chiffres réels.

---

## Synthèse (framework 10 principes : PERCEIVE → ANALYZE → VALIDATE → ACT)

- **PERCEIVE** — Le site est une base Next.js SSR soignée : robots/sitemap/canonical/redirects/sécurité tous propres, 18 pages villes IDF réellement différenciées (landmarks, quartiers, schema par ville), page halal dédiée, FAQPage 10 Q&R + LocalBusiness complet sur la home. Ce n'est **pas** un site à problème de fond.
- **ANALYZE** — Le fil rouge des faiblesses : **la valeur existe mais n'est pas exposée là où elle compte**. La note 5,0★/18 avis vit dans un lien décoratif (ni schema `aggregateRating`, ni compteur visible). Les prix (min 50 € HT, livraison 29 € HT) et les faits d'entité vivent uniquement dans le JSON-LD FAQ de la home — absents de `/traiteur`, `/devis`, `/univers/notre-maison`. Résultat : les pages les plus stratégiques pour la requête (« traiteur entreprise Paris ») et pour la citation IA sont les plus pauvres en contenu extractible.
- **VALIDATE** — Deux hypothèses de départ ont été **réfutées par les données**, ce qui recadre le plan : (1) « 200+ fiches quasi-dupliquées » → faux, catalogue curé de 147 pages `/creations`, chevauchement madeleines-10/20 = 4,3 %, aucun quality-gate déclenché ; (2) « pages villes = doorway » → faux, 14,2 % de chevauchement, contenu local réel. Donc **pas de chantier de consolidation/noindex** — on enrichit, on ne coupe pas.
- **ACT** — Priorité aux gestes courts à fort levier : baliser + afficher les avis, épaissir 4 pages hub/marque, mettre en cache les routes dynamiques. Séquencé ci-dessous par dépendances.

---

## 🚦 Plan d'action priorisé (ordonné par dépendances)

Chaque item : **observation → correctif → test de réfutation (« comment on saurait que c'est raté ») → indicateur avancé**.

### 🔴 CRITICAL

**C1 — 68 % des pages servies sans cache (SSR MISS, `no-store`)**
- *Obs.* : `/creations/**/[slug]` (134) et `/traiteur/[ville]` (37) renvoient `cache-control: no-store` + `x-vercel-cache: MISS` à chaque requête ; les pages statiques sont, elles, en `HIT`/`PRERENDER`. TTFB ~185 ms vs ~60 ms.
- *Fix* : passer ces routes dynamiques en génération statique + ISR (`generateStaticParams` + `export const revalidate = 3600`, ou `force-static`), comme les pages catégories. Revalidation à la demande (`revalidatePath`) si la donnée change.
- *Test* : `curl -sD - -o /dev/null <url-produit>` deux fois → `x-vercel-cache` doit passer à `HIT`. S'il reste `MISS`, raté.
- *Indicateur* : header `x-vercel-cache` sur un échantillon + TTFB dans Vercel Analytics.

### 🟠 HIGH

**H1 — Aucun `aggregateRating` nulle part malgré 5,0★ / 18 avis Google** *(le geste le plus rentable du site)*
- *Obs.* : le seul signal est un lien décoratif « 5,0 · Avis Google » ; ni schema `aggregateRating`, ni nombre d'avis visible (home, /contact, pages villes).
- *Fix* : ajouter `aggregateRating` (5.0 / 18) au nœud `#business` **et** afficher « 5,0 · 18 avis Google » en texte visible dans le hero. (JSON-LD prêt plus bas — snippet A.)
- *Test* : grep `aggregateRating` sur la home = présent ; `reviewCount` = compte GBP réel (ouvrir le CID Maps). Prévoir un rafraîchissement quand le nombre d'avis grimpe (pas de valeur figée éternellement).
- *Indicateur* : éligibilité « extrait avis » dans GSC (Search Appearance) ; étoile en SERP sur requêtes de marque sous 2-4 sem.

**H2 — `/traiteur` (hub « traiteur entreprise Paris ») = 173 mots, aucun contenu ni schema Service/FAQ**
- *Obs.* : 6 H2 = noms de départements, corps = liste de villes, schema = BreadcrumbList seul. C'est la page la plus stratégique pour la requête cœur et la plus vide.
- *Fix* : bloc-réponse 150-300 mots sous le H1 (offre, zone, min 50 € HT, livraison 29 € HT, délai veille 14h / dès 6h30, devis 24h) + FAQ 3-4 Q&R logistique + JSON-LD `Service`/`LocalBusiness` référençant `#business`.
- *Test* : `parse_html.py` → word_count 400+ et schema contient `Service`/`FAQPage`.
- *Indicateur* : impressions/CTR GSC sur « traiteur entreprise paris » vers `/traiteur` ; citation de l'URL dans réponses IA sous 4-6 sem.

**H3 — Pages marque/histoire critiquement maigres + zéro auteur nommé**
- *Obs.* : `/univers/notre-maison` 109 mots, `/nos-artisans` 111, `/nos-engagements` 126 (plancher About = 400) ; matière E-E-A-T réelle présente (Ferme de Viltain, « zéro arôme artificiel », équipe de livraison interne) mais réduite à des slogans. Aucun `Person`/auteur/fondateur sur les 251 URLs (articles /journal en `author: Organization`) — à contre-courant du core update déc. 2025.
- *Fix* : passer les 3 pages à 400+ mots (histoire datée, artisans nommés — Mado Paris, fournisseurs sourcés) ; ajouter un bloc « Fondateur » nommé + byline/`Person` sur /journal.
- *Test* : `content_quality.py` → flag `thin-content` levé ; grep `"@type":"Person"` > 0.
- *Indicateur* : durée de session /univers/* (GA4) ; CTR /journal après auteur.

**H4 — Formulaire `/devis` rendu vide en HTML brut (hydraté client)** — *page money*
- *Obs.* : 0 `<input>/<select>` en SSR (les boutons étape 1 sont SSR, OK) ; champs profonds uniquement post-JS.
- *Fix* : vérifier qu'il n'y a ni CLS ni blank-paint avant hydratation ; tester JS désactivé + 3G throttlé. Fallback noscript si besoin.
- *Test* : Lighthouse sur `/devis` spécifiquement (CLS/TTI) ; `/devis` reste indexée dans GSC.
- *Indicateur* : score PageSpeed mobile + CLS de `/devis`.

### 🟡 MEDIUM

**M1 — Prix / minimum de commande invisibles (uniquement dans le JSON-LD FAQ de la home)**
- *Fix* : afficher « Commande min. 50 € HT · Livraison 29 € HT à Paris » en texte visible près du CTA devis et en intro `/devis`.
- *Test* : « 50€ »/« 29€ » présents en nœuds texte visibles (pas seulement dans `<script ld+json>`).
- *Indicateur* : taux de rebond `/devis` avant début de formulaire (GA4) ; volume d'emails « combien ça coûte ».

**M2 — Schema `WebSite` absent du site entier** — ajouter une fois dans le layout racine (snippet B). `SearchAction` seulement si un endpoint de recherche réel existe (aucun trouvé — ne pas inventer).

**M3 — `hasMerchantReturnPolicy` + `shippingDetails` manquants sur les Offres produit** (2 High du validateur e-commerce, répétés sur ~147 fiches via le template). Refléter la vraie politique (denrées périssables → `MerchantReturnNotPermitted`, 29 € HT / J+1). Snippet C.

**M4 — `LocalBusiness` générique + horaires type « walk-in »** — le nœud est complet mais (a) générique et (b) `openingHoursSpecification` 06:30-14:00 laisse croire à un accueil sur place alors que le modèle est livraison seule. Basculer vers `FoodEstablishment` (pas de sous-type « Caterer » supporté) **et** relabéliser/retirer les horaires pour exprimer une fenêtre commande/livraison, pas une ouverture au public. Aligner avec les horaires réels du GBP.

**M5 — `sameAs` GBP incohérent** — présent sur /contact et /traiteur-halal, absent de la home alors que le même `@id #business` est réutilisé. Harmoniser le tableau `sameAs` sur toutes les pages.

**M6 — Empreinte citations = Google seul** — réclamer Apple Business Connect (Siri/Plans) et Bing Places (source de ChatGPT/Copilot) avec le NAP exact. Ajouter halal en attribut/description **côté GBP** (pas seulement sur le site) — c'est ce que lisent AI Overviews / Ask Maps.

**M7 — Pas de CTA primaire above-the-fold en mobile sur pages catégorie/produit** — le devis n'existe que dans le tiroir hamburger. Ajouter une barre CTA collante (devis + tel:) en bas des pages `/creations/*`.

**M8 — Avis sous-exposés en preuve sociale** — afficher le compteur « 18 avis », rendre le carrousel témoignages en SSR (actuellement client-only, invisible aux crawlers/IA), et faire apparaître la raison sociale « L'Écrin des Terroirs » en texte près du footer (validation fournisseur par les achats).

### 🟢 LOW

- **L1 — 5 `<loc>` dupliqués dans sitemap.xml** (cocktails/classique·signature·prestige, plateau-clubs-signature, plateau-fromages-affines → 251 brut / 246 uniques). Dédupliquer le générateur.
- **L2 — Cluster quantités madeleines-10/20/50** : H1 identiques, ~35 % de texte unique. Différencier le H1 + 100-150 mots par page (intention distincte : cadeau / équipe / volume — ne pas noindex).
- **L3 — Fiches produit ~170-200 mots** : viser 300-400 (un paragraphe différenciant : sourcing, accord, note allergène/régime — sert aussi le positionnement halal/vegan). **Vérifier** les 7 autres sous-catégories `/creations` avant d'extrapoler.
- **L4 — Pas de `/llms.txt`** (404 confirmé) : déposer un `public/llms.txt` (modèle plus bas). Hedge à faible coût, pas un KPI.
- **L5 — Pas d'IndexNow** : ping Bing/Yandex à la publication (journal, prix).
- **L6 — Crawlers IA en `Allow: /` générique** : ajouter des blocs nommés GPTBot / OAI-SearchBot / ClaudeBot / PerplexityBot / Google-Extended (défensif, évite un blocage réflexe futur).
- **L7 — `<img>` de contenu sans width/height** (81 home / 42 cat / 26 produit) : confirmer un `aspect-ratio`/hauteur fixe sur chaque conteneur, ou migrer vers `next/image`. Barre d'annonce tronquée mobile + cibles tactiles < 44px = cosmétique.

---

## 📌 Séquencement recommandé (dépendances)

1. **Semaine 1 — quick wins schema/preuve** : H1 (aggregateRating + compteur visible) → M2 (WebSite) → M5 (sameAs) → M4 (type + horaires). *Un seul chantier « schema d'entité », tout se tient.*
2. **Semaine 1-2 — contenu à levier** : H2 (`/traiteur`) + H3 (pages marque + auteur) + M1/M8 (prix + avis visibles). *Sert SEO, conversion et citation IA en même temps.*
3. **Semaine 2 — technique** : C1 (cache ISR) — indépendant, peut se faire en parallèle. Puis M3 (return/shipping) + M7 (CTA mobile).
4. **Backlog** : L1-L7 + citations Apple/Bing (M6, action hors-code).

---

## 🧩 JSON-LD prêt à coller

**A — `aggregateRating` (fusionner dans le nœud `#business` existant de la home — ne pas dupliquer le nœud)**
```json
{
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  "@id": "https://www.lecrin-traiteur.fr/#business",
  "name": "L'Écrin Traiteur",
  "legalName": "L'Écrin des Terroirs",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "18",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

**B — `WebSite` (une seule fois, layout racine)**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.lecrin-traiteur.fr/#website",
  "url": "https://www.lecrin-traiteur.fr",
  "name": "L'Écrin Traiteur",
  "publisher": { "@id": "https://www.lecrin-traiteur.fr/#business" },
  "inLanguage": "fr-FR"
}
```

**C — `hasMerchantReturnPolicy` + `shippingDetails` sur l'Offre produit (template)**
```json
{
  "@type": "Offer",
  "priceCurrency": "EUR",
  "price": "49.00",
  "availability": "https://schema.org/InStock",
  "areaServed": { "@type": "State", "name": "Île-de-France" },
  "hasMerchantReturnPolicy": {
    "@type": "MerchantReturnPolicy",
    "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted",
    "applicableCountry": "FR"
  },
  "shippingDetails": {
    "@type": "OfferShippingDetails",
    "shippingRate": { "@type": "MonetaryAmount", "value": "29.00", "currency": "EUR" },
    "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "FR", "addressRegion": "Île-de-France" },
    "deliveryTime": {
      "@type": "ShippingDeliveryTime",
      "handlingTime": { "@type": "QuantitativeValue", "minValue": 0, "maxValue": 1, "unitCode": "DAY" },
      "transitTime": { "@type": "QuantitativeValue", "minValue": 0, "maxValue": 0, "unitCode": "DAY" }
    }
  }
}
```
> Vérifier `returnPolicyCategory` contre les vraies CGV avant déploiement. Valeurs 29 € HT / J+1 reprises de la FAQ existante, non inventées.

## 📄 Modèle `public/llms.txt`
```markdown
# L'Écrin Traiteur (L'Écrin des Terroirs)
> Traiteur d'entreprise artisanal, halal / sans porc de base. Livraison à Paris et en Île-de-France.

## Faits
- Zone : Paris + ~20 villes d'Île-de-France
- Commande minimum : 50 € HT · Livraison : 29 € HT à Paris
- Délai : commande jusqu'à la veille 14h, livraison dès 6h30
- Devis sous 24h

## Pages clés
- [Traiteur d'entreprise](https://www.lecrin-traiteur.fr/traiteur)
- [Demander un devis](https://www.lecrin-traiteur.fr/devis)
- [Notre maison](https://www.lecrin-traiteur.fr/univers/notre-maison)
- [Contact](https://www.lecrin-traiteur.fr/contact)
```

---

## Détail complet par agent
`section_technical.md` · `section_content.md` · `section_schema.md` · `section_local.md` · `section_geo.md` · `section_sitemap.md` · `section_sxo.md` · `section_visual.md` — captures dans `shots/`.

---
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel — Join the AI Marketing Hub community
🆓 Free  → https://www.skool.com/ai-marketing-hub
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
