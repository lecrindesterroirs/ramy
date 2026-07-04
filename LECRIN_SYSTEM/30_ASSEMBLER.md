# L'Écrin — Assembleur de Prompts
## Formule · Exemples complets · Workflow Weavy production

> Ce fichier est la dernière étape avant de générer.
> Il montre comment assembler tous les modules en un prompt final.
> Il contient aussi le workflow Weavy complet et le système d'archivage.

---

## FORMULE D'ASSEMBLAGE (ordre = poids de traitement)

```
PROMPT FINAL =

  [DNA_MASTER]          ← 18 mots · identité émotionnelle
       +
  [LOCK_A ou B ou C]   ← 55-65 mots · lumière + matières + optique + film
       +
  [SCENE_CONTEXT]       ← 15-20 mots · ce qui se passe dans l'image
       +
  [REALISM_NODE_1]      ← 25-35 mots · Material en premier (Priorité 2)
       +
  [REALISM_NODE_2]      ← 25-35 mots · Food / Optical / Human selon scène
       +
  [FORMAT]              ← 10-15 mots · ratio + règle de composition

TOTAL CIBLE : 150-180 mots · MAXIMUM ABSOLU : 220 mots
```

**Negative Prompt (champ séparé dans Weavy) :**
```
[NEGATIVE_PROMPT] complet depuis 01_FIXED_NODES.md
```

---

## BUDGET DE TOKENS PAR SECTION

| Section | Mots cibles | Mots max | Rôle |
|---|---|---|---|
| [DNA_MASTER] | 18 | 20 | Ancre identité |
| [LOCK_X] | 60 | 70 | Lumière + matières + optique (P1+P2) |
| [SCENE_CONTEXT] | 15 | 25 | Ce qui se passe |
| [REALISM_NODE_1] | 28 | 35 | Matières réelles (P2) |
| [REALISM_NODE_2] | 28 | 35 | Node spécialisé (P3) |
| [FORMAT] | 12 | 15 | Ratio + composition |
| **TOTAL** | **161** | **200** | |

*Si le total dépasse 220 mots → couper dans [SCENE_CONTEXT] ou réduire un node.*

---

## EXEMPLE COMPLET — Scène 02 : Petit Déjeuner 9h

Voici un prompt final assemblé, prêt à coller dans Weavy :

```
L'Écrin: contemporary artisan B2B hospitality, warm Parisian morning,
lived-in quiet elegance — not a bakery, not a palace,

light ash wood tray on ecru linen textile,
ecru linen naturally wrinkled — visible weave texture, not ironed, not folded,
handmade off-white ceramic with irregular warm ivory glaze,
35mm equivalent focal length, top-down 90° flat lay, all elements in focus,
soft diffused north window light from left — single source, warm 4800K,
gentle light falloff toward right side, no fill light,
Kodak Portra 400 film — organic grain structure, slightly desaturated midtones,
warm cream dominant palette (#F5F0E6), yellow accent #E0A126 partially visible,
controlled imperfections: natural crumbs, slight drips, asymmetric placement,
real editorial food photographer — not CGI, not staged,

morning office breakfast flat lay, madeleines on ceramic plate,
small jam pot slightly open beside, simple coffee mug,
quiet 9am atmosphere, someone just arrived,

tactile matte textures throughout — every surface has real grain,
ceramic micro-glaze variation visible, linen weave fiber visible under light,
natural wood grain not uniform, no surface is perfectly smooth,

imperfect pastry surface, handmade browning variation,
realistic crumb structure — not uniform, not perfect,
non-commercial food styling, artisan inconsistency,

portrait format 4:5, subject upper portion, clean negative space at bottom
```

**Negative Prompt (champ séparé) :**
```
plastic synthetic packaging, cold colors steel chrome aluminum neon fluorescent,
CGI rendered too perfect, perfectly symmetrical perfectly aligned,
Pinterest staged stock photo aesthetic, everything spotlessly clean,
harsh shadows overexposed HDR, faces full body people colored nail polish,
industrial kitchen canteen cafeteria, watermark text overlay frame border,
digital noise JPEG artifacts, studio lighting flawless highly polished,
vibrant saturated colors ultra sharp ultra detailed 8k render unreal engine,
rustic french bakery aesthetic provençal market tabliers farinés
```

**Compte de mots :** 178 mots dans le prompt principal. ✓

---

## EXEMPLE COMPLET — Scène 04 : Ouverture du Coffret

```
L'Écrin: contemporary artisan B2B hospitality, warm Parisian morning,
lived-in quiet elegance — not a bakery, not a palace,

light oak wood surface — subtle natural grain, matte warm honey tone,
warm yellow gift box color #E0A126 — matte cardboard finish, noble tactile texture,
85mm equivalent focal length, 3/4 angle ~45°, f/2.8 selective focus,
soft diffused north window light from left — single source, warm 4800K, no fill,
Kodak Portra 400 film — organic grain, slightly desaturated,
cream and warm gold dominant palette,
controlled imperfections: slight corner bend on box, tissue paper not perfectly flat,
real editorial food photographer, quiet luxury feel — not CGI,

gift box lid being lifted mid-gesture, tissue paper half-folded inside,
madeleines visible within, discovery moment, quiet luxury reveal,

tactile matte textures throughout — every surface has real grain,
ceramic micro-glaze variation visible, natural wood grain not uniform,
organic material presence throughout, no surface perfectly smooth,

subtle chromatic aberration at frame edges,
natural focus falloff — corners 5-8% softer than center,
realistic bokeh transition, grain denser in shadow areas,
slight lens softness at edges,

portrait format 4:5, subject center-upper, clean negative space at bottom
```

**Compte de mots :** 182 mots. ✓

---

## PARAMÈTRES WEAVY — RÉGLAGES PAR DÉFAUT

```
Mode              : Photorealistic / Editorial Photography
Quality / Steps   : Maximum (ne jamais réduire)
CFG Guidance      : 7.5 — jamais en dessous de 7, jamais au-dessus de 8.5
                    < 7   = trop libre, dérive de la DA
                    > 8.5 = trop rigide, perd le naturel et la respiration
Seed              : seed verrouillé de la série (voir Lock A/B/C)
Style reference   : première image validée de la série (strength 30-40%)
Ratio             : selon format choisi (voir tableau dans 20_SCENES.md)
```

**Références images à joindre :**
- 2 images OUI (selon la scène — voir 20_SCENES.md)
- 1 image NON (selon la scène — voir 20_SCENES.md)
- 1-2 "photos moches" de tes matières réelles (voir LECRIN_CONTEXT.md)

---

## WORKFLOW DE PRODUCTION — GÉNÉRER UNE SÉRIE COMPLÈTE

**Phase 1 — Valider le Lock (faire une seule fois au début d'une nouvelle série)**

1. Choisir 3 sujets différents (ex : madeleine nature, madeleine chocolat, plateau viennoiseries)
2. Générer les 3 avec le même Lock et sans [SCENE_CONTEXT] (juste le Lock)
3. Vérifier que les 3 images semblent prises le même matin par le même photographe
4. Si oui → Lock validé → noter le seed → passer à la Phase 2
5. Si non → ajuster un paramètre du Lock → regénérer

**Phase 2 — Générer par batch de même série**

- D'abord toutes les scènes Série A (flat lay)
- Puis toutes les scènes Série B (bureau)
- Puis toutes les scènes Série C (coffret)
- Ne jamais mixer les séries dans un même batch → perte de cohérence

**Phase 3 — Itérer sur chaque scène**

1. Générer 4 variantes
2. Choisir la meilleure
3. Valider avec la checklist du Lock (5-8 points)
4. Si validée → archiver ci-dessous
5. Si non → utiliser les correctifs (section suivante)

---

## CORRECTIFS COURANTS

**Si trop "IA" ou trop parfait :**
```
imperfect premium: natural crumbs, crumpled linen, asymmetric composition,
this looks like a photo taken by a real photographer on a real morning
```

**Si couleurs trop froides :**
```
warm orange-yellow color cast in highlights, no cool blue shadows,
golden warmth in morning light — not neutral, not grey
```

**Si composition trop symétrique :**
```
slight visual imbalance, one element slightly off its natural position,
candid arrangement — naturally placed, not designed
```

**Si grain trop fort ou trop faible :**
- Trop fort : `very subtle film grain, barely visible, clean but not digital`
- Trop faible : `visible Kodak Portra 400 grain structure, grainy in shadows, textured highlights`

**Si sujet trop net partout (CGI) :**
```
realistic depth of field, natural focus falloff, imperfect edge sharpness,
slight lens softness in corners — not everything sharp
```

**Si trop chargé (trop d'éléments) :**
Couper [SCENE_CONTEXT] à 10 mots. Retirer le 3ème node si présent.

---

## TECHNIQUE DE VARIATION — CHANGER 1 VARIABLE À LA FOIS

Pour créer des variantes sans perdre la cohérence :

| Ce qu'on change | Ce qu'on garde | Résultat |
|---|---|---|
| Le produit ([SUBJECT]) | Lock + Nodes + Format | Même scène, produit différent |
| Le [SCENE_CONTEXT] | Lock + Nodes + Format | Même série, moment différent |
| Le [FORMAT] | Lock + Nodes + Subject | Même image, ratio différent |
| 1 des 2 Nodes | Lock + Subject + Format | Même scène, ambiance légèrement différente |

**Ne jamais changer** le Lock (serie perdue) ni le seed (cohérence perdue) pour des images d'une même série.

---

## ARCHIVE — PROMPTS VALIDÉS

*Coller ici chaque prompt validé. Un prompt archivé = une image qu'on peut regénérer à l'identique.*

---

### Tracker de Cohérence Série

| Série | Seed | Style ref image | Date validation | CFG | Notes |
|---|---|---|---|---|---|
| A — Flat lay | | | | | |
| B — Bureau | | | | | |
| C — Coffret | | | | | |

---

### Prompts Archivés

```
──────────────────────────────────────────
SCÈNE       : ____________________________
SÉRIE       : A / B / C
SEED        : ____________________________
CFG         : ____________________________
DATE        : ____________________________
STATUT      : ✓ Validé / ✗ Rejeté / ~ En cours
NOTES       :

PROMPT :
[coller ici le prompt complet]

NEGATIVE :
[coller ici le negative prompt utilisé]
──────────────────────────────────────────
```

*(Dupliquer ce bloc pour chaque prompt archivé)*

---

## RÈGLE DE SCALABILITÉ — 100 IMAGES, MÊME ADN

Pour produire 100 images qui semblent provenir du même univers :

1. **Lock = immuable** — les 3 Series Locks ne changent jamais
2. **Seed = verrouillé par série** — un seed par série, toujours le même
3. **2 realism nodes par image** — jamais 0, jamais 4+
4. **1 seule variable change à la fois** — sujet OU contexte OU format
5. **Générer par série** — jamais mélanger A, B, C dans la même session
6. **Valider avant de scaler** — valider le Lock avec 3 images test avant d'en faire 20

*Si ces 6 règles sont respectées : 100 images, 1 photographe, 1 matin, 1 marque.*

---

*Document d'assemblage · L'Écrin Système de Génération*  
*Référence DA : `LECRIN_DA_PHOTO.md` · Architecture : `00_PIPELINE.md`*
