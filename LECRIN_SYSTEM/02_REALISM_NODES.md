# L'Écrin — Realism Nodes
## 7 modules spécialisés · Injecter exactement 2-3 par image · Jamais tous

> **Règle fondamentale :** 2 nodes bien choisis valent mieux que 7 injectés d'un coup.
> Au-delà de 3 nodes, l'IA dilue les priorités et génère du compromis mou.
> Choisir selon le type de scène — tableau de sélection en bas de page.

---

## LES 7 NODES

### [REALISM_MATERIAL] — Priorité 2
*Textures matières réelles · Le signal de réalisme le plus fort · Toujours en premier des nodes*

```
tactile matte textures throughout — every surface has real grain,
ceramic micro-glaze variation visible, linen weave fiber visible under light,
natural wood grain not uniform, organic material presence throughout,
no surface is perfectly smooth or perfectly uniform — real materials only
```

**Utiliser pour :** toutes les scènes avec céramique, lin, bois, packaging.

---

### [REALISM_OPTICAL] — Priorité 3
*Comportement réel de l'objectif photographique*

```
subtle chromatic aberration at frame edges,
natural focus falloff — not abrupt, corners 5-8% softer than center,
realistic bokeh transition (not perfect circles),
grain denser in shadow areas, slight lens softness at frame edges,
realistic dynamic range — not everything sharp, not everything blown
```

**Utiliser pour :** toutes les scènes 3/4 ou macro où la profondeur de champ joue un rôle.

---

### [REALISM_FOOD] — Priorité 2 si produit alimentaire visible
*Réalisme alimentaire artisanal · Le signal anti-CGI le plus efficace pour les produits*

```
imperfect pastry surface, handmade browning variation,
realistic crumb structure — not uniform, not perfect,
natural moisture variation on surface, non-commercial food styling,
artisan inconsistency — no two pieces identical, real bakery irregularity
```

**Utiliser pour :** toute scène où les madeleines ou produits alimentaires sont visibles.

---

### [REALISM_HUMAN] — Pour scènes avec mains ou présence humaine implicite
*Traces de présence humaine récente*

```
recently touched objects, gently disturbed composition,
used but clean aesthetic — not staged, not pristine,
subtle asymmetry from human handling, candid arrangement,
someone was just here — the scene has been lived in
```

**Utiliser pour :** scènes avec mains, scènes "après passage", goûters, pauses.

---

### [REALISM_PHYSICAL] — Pour scènes avec tissu, poids, props
*Physique réaliste des objets et de la gravité*

```
realistic object weight implied by surface compression,
fabric compression folds where ceramic or tray sits on linen,
crumbs scattered unevenly — not in a neat pile, not perfectly distributed,
natural gravity on linen edge, objects settled — not placed, not floating
```

**Utiliser pour :** flat lay avec lin, scènes avec plusieurs props, plateau composé.

---

### [REALISM_ENVIRONMENTAL] — Pour scènes avec contexte de lieu
*Le monde réel au-delà du cadre*

```
faint window frame or curtain shadow on background wall,
ambient warmth implies a real kitchen or office environment,
one element at frame edge suggests a larger scene beyond,
image feels like an excerpt of a real morning — not a constructed studio set
```

**Utiliser pour :** scènes bureau, réunion, contexte hospitalité — où le lieu compte.

---

### [REALISM_EMOTIONAL] — Priorité 4 · Maximum 1 fois par image · Utiliser avec retenue
*Cohérence émotionnelle et temporalité*

```
quiet Parisian morning moment, slow hospitality feeling,
before-the-meeting calm — a specific instant in time,
restrained luxury, understated realism,
not a timeless product image — a real moment that happened
```

**Utiliser pour :** scènes qui doivent raconter un moment précis. Ne pas combiner avec ENVIRONMENTAL (surcharge sémantique).

---

## TABLEAU DE SÉLECTION — 2 nodes obligatoires par type de scène

| Type de scène | Node 1 (obligatoire) | Node 2 (obligatoire) | Node 3 (optionnel si justifié) |
|---|---|---|---|
| Flat lay petit déjeuner | MATERIAL | FOOD | PHYSICAL |
| Plateau repas bureau | MATERIAL | ENVIRONMENTAL | FOOD |
| Coffret cadeau | MATERIAL | OPTICAL | EMOTIONAL |
| Mains / geste artisanal | HUMAN | MATERIAL | OPTICAL |
| Macro détail / ingrédient | MATERIAL | OPTICAL | FOOD |
| Goûter / pause bureau | HUMAN | ENVIRONMENTAL | FOOD |
| Catalogue produit | MATERIAL | OPTICAL | PHYSICAL |

---

## RÈGLES D'USAGE

**Règle des 2+1 :** 2 nodes obligatoires selon le tableau + 1 optionnel si la scène le demande vraiment.

**Ne jamais combiner :** EMOTIONAL + ENVIRONMENTAL → surcharge sémantique, l'IA choisit l'un ou l'autre et ignore le second.

**FOOD est obligatoire** si un produit alimentaire est visible → c'est le signal anti-CGI le plus efficace pour les pastries.

**MATERIAL en premier** parmi les nodes → c'est la Priorité 2 du système, donc elle doit apparaître avant OPTICAL, FOOD, etc.

**EMOTIONAL en dernier** si utilisé → c'est la touche finale, pas l'ancrage. Placé trop tôt, il domine et sur-romantise.

---

*7 modules · 2-3 par image · Toujours choisir · Jamais tout injecter*  
*Voir 00_PIPELINE.md pour le workflow complet · Voir 30_ASSEMBLER.md pour l'assemblage*
