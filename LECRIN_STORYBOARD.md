# L'Écrin — Storyboard & Génération
## Storyboard · Scènes · Templates · Archive

> **Ce document = le planning et l'archivage des scènes.**  
> Pour la génération production optimisée, utiliser le dossier **`LECRIN_SYSTEM/`** (pipeline modulaire Weavy).  
> Ce document reste utile pour planifier les shoots et archiver les prompts validés.

> **Comment utiliser ce document :**
> 1. Charger `LECRIN_DA_PHOTO.md` + `LECRIN_CONTEXT.md` comme contexte
> 2. Joindre les références visuelles de la scène (voir tableau ci-dessous)
> 3. Choisir le Series Lock correspondant (A, B ou C)
> 4. Remplir le template de scène
> 5. Assembler le prompt final avec la structure ci-dessous
> 6. Valider avec la checklist 15 points de `LECRIN_DA_PHOTO.md`
> 7. Archiver le prompt validé en bas de ce document

---

## RÉFÉRENCES VISUELLES PAR TYPE DE SCÈNE

> Chaque type de scène appelle des références différentes. Joindre les bons visuels change radicalement le résultat — l'IA s'ancre dans un univers précis, pas un mood générique.

| Type de scène | Références OUI à joindre | Pourquoi |
|---|---|---|
| Flat lay petit déjeuner | Eric Kayser + Mariage Frères | Grain matinal + chaleur packaging |
| Plateau repas bureau | Aman + Polène | Hospitalité réelle + composition respirante |
| Coffret / cadeau | Mariage Frères + Aesop | Packaging ambiant + objet comme sculpture |
| Mains / geste artisanal | Eric Kayser + Jacquemus | Authenticité mains + énergie humaine vivante |
| Macro ingrédient / détail | Aesop + Polène | Texture comme star + silence entre objets |
| Goûter / pause bureau | Aman + Jacquemus | Sens du lieu + chaleur conviviale |
| Catalogue produits | Polène + Aesop | Espace négatif + discipline éditoriale |

**Anti-référence à toujours joindre (pour toutes les scènes) :**
→ `pinterest-food.jpg` annoté "REFUS — saturé, staged, zéro grain"
→ `ia-glossy.jpg` annoté "REFUS — perfection IA évidente"

---

## SERIES LOCKS — Blocs fixes à ne jamais modifier

Ces blocs définissent l'ADN visuel de chaque série. Ils sont **identiques** dans chaque prompt de la série — seul le sujet change autour.

### SERIES LOCK A — Petit déjeuner (flat lay sur lin)
```
[LOCK A]
light ash wood tray on ecru linen textile,
ecru linen naturally wrinkled with visible weave texture (not ironed, not folded),
handmade off-white ceramic with irregular warm ivory glaze,
soft diffused north window light from left, warm 4800K, single source only,
gentle light falloff toward right side, no fill light,
35mm equivalent focal length, top-down 90° view, all elements sharp,
Kodak Portra 400 film simulation, subtle analog grain, slightly desaturated midtones,
warm cream dominant palette (#F5F0E6 tones), yellow accent (#E0A126) partially visible background,
controlled imperfections throughout: crumbs, slight drips, asymmetric placement,
photographed by a real editorial food photographer
[/LOCK A]
```

### SERIES LOCK B — Plateau repas / bureau (3/4)
```
[LOCK B]
light natural wood surface (conference table or work surface), subtle wood grain, matte warm finish,
handmade off-white ceramic side plate with irregular warm ivory glaze,
ecru linen napkin loosely placed beside (not folded, natural compression folds),
soft diffused north window light from left, warm 4800K, single source,
gentle falloff toward right, blurred office or kitchen background,
50mm equivalent focal length, 3/4 overhead angle ~35°, f/2.8-4 bokeh on background,
Kodak Portra 400 film simulation, subtle analog grain, slightly desaturated midtones,
warm cream dominant palette, organic asymmetry throughout,
controlled imperfections: crumbs, items not perfectly aligned, linen wrinkled,
photographed by a real editorial food photographer, handheld realism
[/LOCK B]
```

### SERIES LOCK C — Coffrets & cadeaux (3/4 sur bois)
```
[LOCK C]
light oak wood surface, subtle natural grain, matte warm honey tone,
warm yellow gift box (color #E0A126), matte cardboard finish,
soft diffused north window light from left, warm 4800K, single source,
85mm equivalent focal length, 3/4 angle ~45°, f/2.8 selective focus,
Kodak Portra 400 film simulation, subtle analog grain, slightly desaturated,
cream and warm gold dominant palette,
controlled imperfections: slight corner bend on box, tissue paper not perfectly flat,
photographed by a real editorial food photographer, quiet luxury feel
[/LOCK C]
```

---

## STYLE LOCK WEAVY — Nœud fixe de cohérence série

> Le style lock est la technique pour que toutes les images d'une série semblent prises par le même photographe le même matin. Sans lui, même avec le bon prompt, les images dérivent.

**Méthode 1 — Seed verrouillé (recommandée)**
Générer 4 variantes de la première image de la série. Choisir la meilleure. Copier son seed. Utiliser **exactement ce seed** pour toutes les images suivantes de la même série.

```
Seed série A (flat lay lin)      : [noter ici après validation]
Seed série B (plateau bureau)    : [noter ici après validation]
Seed série C (coffrets bois)     : [noter ici après validation]
```

**Méthode 2 — Image de référence style (img2img)**
Une fois la première image validée, l'utiliser comme référence style pour les suivantes :
- Strength de référence : **30-40%** (on veut le style, pas la composition)
- Ajouter dans le prompt : `same lighting conditions, same photographer, same morning, same series`

**Méthode 3 — Bloc de style identique dans chaque prompt**
Ce bloc à coller mot pour mot dans chaque prompt de la série :
```
same editorial food photographer, same morning session, same camera settings,
same north window light from left, same 4800K warmth,
same Kodak Portra 400 film simulation, same controlled imperfection level
```

**Checklist style lock — ce qui doit être identique dans toute la série :**
- [ ] Le seed (ou image de référence style)
- [ ] Le Series Lock complet (A, B ou C)
- [ ] La focale (35 / 50 / 85mm selon la série)
- [ ] Le bloc grain (mot pour mot identique)
- [ ] La description de lumière (même formulation)
- [ ] Le niveau d'imperfection (calibré une fois, appliqué partout)

---

## STRUCTURE D'UN PROMPT (ordre = poids)

L'outil IA lit les prompts dans l'ordre — ce qui est dit en premier a plus de poids.

```
1. SUJET          → ce qu'on photographie (référence photo fournie)
2. SERIES LOCK    → le bloc fixe de la série (A, B ou C)
3. CONTEXTE       → ce qu'il y a autour du sujet
4. BLOC MAÎTRE    → le bloc anti-IA complet (copier depuis DA_PHOTO.md)
```

**Modèle d'assemblage :**
```
[description courte du sujet principal, ex : "artisan pastry box with products inside"],
[COLLER ICI LE SERIES LOCK CORRESPONDANT],
[description du contexte autour : props supplémentaires, position dans le cadre, action si mains],
[COLLER ICI LE BLOC MAÎTRE ANTI-IA]
```

---

## TEMPLATES DE SCÈNES — À REMPLIR

Dupliquer ce template pour chaque image à générer.

---

### SCÈNE [ ] — ________________________

**Sujet :** *(décrire le produit / l'action principale — la photo de référence produit est fournie séparément)*

**Série :**  
- [ ] A — Flat lay petit déj / lin  
- [ ] B — Plateau bureau / 3/4  
- [ ] C — Coffret / bois clair

**Format de sortie :**  
- [ ] Hero site 16:9 (sujet à droite, espace gauche pour texte)  
- [ ] Card produit 4:5 (sujet centré haut, espace bas)  
- [ ] Instagram 1:1 (composition centrée, rien coupé)  
- [ ] Story / mobile 9:16 (sujet centre-haut, espace bas)  
- [ ] Email header 3:1 (panoramique, sujet à droite)

**Angle :**  
- [ ] Flat lay 90° (tout net)  
- [ ] 3/4 ~35° (bokeh fond)  
- [ ] Macro ~45° (très serré, 85mm)

**Références visuelles à joindre :**  
*(voir tableau ci-dessus — choisir 2 OUI + 1-2 NON systématiquement)*
- OUI 1 : _______________  → ce qu'on prend : _______________
- OUI 2 : _______________  → ce qu'on prend : _______________
- NON 1 : _______________  → ce qu'on refuse : _______________
- NON 2 : _______________  → ce qu'on refuse : _______________

**Props autour du sujet :**  
*(vaisselle, linge, ingrédients, packaging)*

**Moment / émotion de la scène :**  
*(ex : "calme du matin avant la réunion", "geste artisanal", "découverte du coffret")*

**Imperfections spécifiques à cette scène :**  
*(ex : "miettes autour du produit", "légère coulure sur le pot", "mains en mouvement")*

**Prompt assemblé :**
```
[sujet + référence produit fournie],
[LOCK A / B / C],
[contexte et props],
[BLOC MAÎTRE ANTI-IA]
```

**Statut :** [ ] À générer  [ ] En cours  [ ] Validé  [ ] Rejeté

**Notes / ajustements après test :**

---

### SCÈNE [ ] — ________________________

**Sujet :**

**Série :**  
- [ ] A — Flat lay  [ ] B — Bureau 3/4  [ ] C — Coffret

**Format :**  
- [ ] Hero 16:9  [ ] Card 4:5  [ ] Instagram 1:1  [ ] Story 9:16  [ ] Email 3:1

**Angle :**  
- [ ] Flat lay 90°  [ ] 3/4 ~35°  [ ] Macro ~45°

**Références à joindre :**
- OUI 1 : _______________
- OUI 2 : _______________
- NON : _______________

**Props :**

**Moment / émotion :**

**Imperfections :**

**Prompt :**
```

```

**Statut :** [ ] À générer  [ ] En cours  [ ] Validé  [ ] Rejeté

**Notes :**

---

*(Dupliquer ce bloc pour chaque nouvelle scène)*

---

## FORMATS — RATIOS & RÈGLES DE COMPOSITION

| Format | Ratio | Usage | Règle de composition |
|---|---|---|---|
| Hero site | 16:9 | Bannière principale des pages | Sujet à droite (60%), espace vide à gauche pour texte |
| Card produit | 4:5 | Cards des offres, catalogue | Sujet centré haut, espace bas pour titre |
| Instagram | 1:1 | Posts réseaux sociaux | Composition centrée, rien coupé aux bords |
| Story / mobile | 9:16 | Stories, bannières mobiles | Sujet centre-haut, espace bas pour texte |
| Email header | 3:1 | Header emails commerciaux | Panoramique, sujet à droite, décor qui s'étale |

**Phrases à ajouter selon le format :**
```
Hero 16:9  → "wide landscape format, subject right two-thirds, generous empty left space for text"
Card 4:5   → "portrait format, subject upper portion, clean negative space at bottom"
Square 1:1 → "square format, centered composition, nothing cropped at edges"
Story 9:16 → "vertical portrait format, subject center-upper, space below for text"
Email 3:1  → "ultra-wide panoramic, subject right side, wide establishing scene"
```

---

## PARAMÈTRES WEAVY (ou autre outil)

```
Mode              : Photorealistic / Editorial Photography
Quality / Steps   : Maximum — ne pas réduire la qualité
Guidance (CFG)    : 7 à 9
                    < 7 = trop libre, dérive de la DA
                    > 9 = trop rigide, perd le naturel
Seed              : noter le seed de la première image réussie et le réutiliser
Ratio             : voir tableau formats ci-dessus
```

**Structure du prompt Weavy — ordre optimal :**
```
1. Sujet principal (avec référence photo)
2. Series Lock (A, B ou C)
3. Contexte et props
4. Bloc Maître Anti-IA
5. Format (ratio et composition)
```

**Negative prompt à coller systématiquement :**
```
plastic, synthetic packaging, any logos except L'Écrin,
cold colors, steel, chrome, aluminum, neon, fluorescent light,
cluttered background, food waste, unappetizing presentation,
CGI, rendered, too perfect, perfectly symmetrical, perfectly aligned,
Pinterest staged, stock photo aesthetic, everything spotlessly clean,
harsh shadows, overexposed, blown highlights, HDR,
full body people, faces, colored nail polish, rings,
industrial kitchen, canteen, cafeteria,
watermark, text overlay, frame, border,
blurry main subject, motion blur, digital noise, JPEG artifacts,
ultra detailed, hyper realistic CGI, 8k render, unreal engine,
octane render, perfect composition, flawless, highly polished,
vibrant colors, sharp everywhere, professional studio lighting
```

---

## WORKFLOW DE GÉNÉRATION

**Étape 1 — Valider le Series Lock (une fois, au début)**
Générer 3 images test avec des sujets différents mais le même Lock. Vérifier qu'elles semblent prises le même jour par le même photographe. Si non — ajuster le Lock avant de continuer.

**Étape 2 — Générer par batch de même série**
Ne jamais mixer les séries dans un même batch.
- D'abord toutes les scènes Série A
- Puis toutes les scènes Série B
- Puis toutes les scènes Série C

**Étape 3 — Tester avec 4 variantes**
Pour chaque scène : générer 4 variantes, choisir la meilleure, noter le seed.

**Étape 4 — Affiner si besoin**
Ajouter 1-2 éléments précis au prompt pour corriger ce qui ne va pas. Regénérer 2 variantes.

**Étape 5 — Validation checklist**
Appliquer la checklist 15 points de `LECRIN_DA_PHOTO.md`.

**Étape 6 — Archiver**
Coller le prompt validé dans la section Archive ci-dessous.

---

## CORRECTIFS COURANTS

**Si le résultat est trop générique ou trop "IA" :**
```
NOT a stock photo, NOT Pinterest staged, NOT CGI,
imperfect premium: natural crumbs, crumpled linen, asymmetric composition,
this looks like a photo taken by a real photographer on a real morning
```

**Si les couleurs sont trop froides :**
```
warm orange-yellow color cast in highlights, no cool blue shadows,
shadows warm brown not grey-blue, golden warmth applied to morning light
```

**Si le grain est trop fort :**
```
very subtle film grain, barely visible, clean but not digital
```

**Si le grain est trop faible :**
```
visible analog film grain, Kodak Portra 400 grain structure,
grainy in shadow areas, textured highlights
```

**Si tout est trop net (effet CGI) :**
```
realistic depth of field, not everything sharp, natural focus falloff,
imperfect edge sharpness, slight lens softness in corners
```

**Si la composition est trop parfaite :**
```
slight visual imbalance, one element slightly off-center,
candid arrangement, not designed — naturally placed
```

---

## ARCHIVE — PROMPTS VALIDÉS

*(Coller ici chaque prompt validé avec le nom de la scène et le seed si disponible)*

---

### Prompts validés

```
[À remplir au fur et à mesure]

SCÈNE : _______________
SEED : ________________
DATE : ________________
PROMPT :
...
```

---

*Document de travail — L'Écrin Traiteur*  
*Référence DA : voir LECRIN_DA_PHOTO.md*
