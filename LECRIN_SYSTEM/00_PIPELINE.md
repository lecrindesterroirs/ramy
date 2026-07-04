# L'Écrin — Système de Génération Modulaire
## Point d'entrée unique · Architecture · Workflow production

> Commencer ici. Toujours. Ce document est le chef d'orchestre du système.

---

## ARCHITECTURE DU SYSTÈME

```
╔══════════════════════════════════════════════════════════╗
║                    FIXED SYSTEM                         ║
║  01_FIXED_NODES.md     → DNA · Couleur · Négatif        ║
║  02_REALISM_NODES.md   → 7 modules réalisme (pick 2-3)  ║
╚══════════════════════════════════════════════════════════╝
                          ↓
╔══════════════════════════════════════════════════════════╗
║                    SERIES LOCK                          ║
║  10_LOCK_A.md  → Flat lay petit déjeuner (35mm)         ║
║  11_LOCK_B.md  → Plateau repas bureau (50mm)            ║
║  12_LOCK_C.md  → Coffrets cadeaux (85mm)                ║
╚══════════════════════════════════════════════════════════╝
                          ↓
╔══════════════════════════════════════════════════════════╗
║                  VARIABLE SYSTEM                        ║
║  20_SCENES.md  → 8 scènes pré-construites               ║
║  [PRODUCT]     → ta photo produit fournie à Weavy       ║
║  [FORMAT]      → ratio selon usage (16:9 / 4:5 / 1:1)  ║
╚══════════════════════════════════════════════════════════╝
                          ↓
╔══════════════════════════════════════════════════════════╗
║                     ASSEMBLY                            ║
║  30_ASSEMBLER.md → formule + Weavy complet + exemples   ║
╚══════════════════════════════════════════════════════════╝
```

---

## PRIORITÉ ABSOLUE — CE QUI EST DIT EN PREMIER A PLUS DE POIDS

```
PRIORITÉ 1  Lumière réaliste          → contenue dans le Lock (position 2)
PRIORITÉ 2  Matières / textures       → REALISM_MATERIAL (injecter en premier des nodes)
PRIORITÉ 3  Comportement optique réel → REALISM_OPTICAL
PRIORITÉ 4  Cohérence émotionnelle    → REALISM_EMOTIONAL (1 seul par image)
PRIORITÉ 5  Composition               → contenue dans le Lock
PRIORITÉ 6  Produit                   → [SUBJECT] (en première position)
PRIORITÉ 7  Stylisation               → [FORMAT] (en dernière position)
```

**La lumière est dans le Lock. Le Lock est en position 2 du prompt. C'est correct.**

---

## FORMULE D'ASSEMBLAGE (ordre = poids)

```
[SUBJECT] + [LOCK_X] + [SCENE_CONTEXT] + [REALISM_NODE_1] + [REALISM_NODE_2] + [FORMAT]
```

Negative prompt (champ séparé dans Weavy) :
```
[NEGATIVE_PROMPT] depuis 01_FIXED_NODES.md
```

---

## WORKFLOW — UNE IMAGE EN 6 ÉTAPES

**1. Choisir la série**
- Vue de dessus flat lay → **Lock A** (`10_LOCK_A.md`)
- Plateau bureau 3/4 → **Lock B** (`11_LOCK_B.md`)
- Coffret cadeau → **Lock C** (`12_LOCK_C.md`)

**2. Choisir la scène**
- Ouvrir `20_SCENES.md` → sélectionner une scène existante
- Ou rédiger son [SCENE_CONTEXT] en 15-20 mots

**3. Sélectionner 2 realism nodes (jamais plus de 3)**
- Ouvrir `02_REALISM_NODES.md` → tableau de sélection
- Choisir selon le type de scène
- Si hésitation : MATERIAL + FOOD pour 80% des cas

**4. Assembler le prompt**
- Suivre la formule dans `30_ASSEMBLER.md`
- Vérifier : budget 150-180 mots max

**5. Configurer Weavy**
- CFG : **7-8** (pas 9+ — laisser de la respiration)
- Seed : seed verrouillé de la série
- Style reference : première image validée de la série (30-40% strength)
- Référence images : 2 OUI + 1 NON (voir fiche scène dans `20_SCENES.md`)
- Negative prompt : coller [NEGATIVE_PROMPT] complet

**6. Générer + valider + archiver**
- Générer 4 variantes
- Valider avec les 5 points ci-dessous
- Si validé : noter le seed et archiver dans `30_ASSEMBLER.md`

---

## 5 POINTS DE VALIDATION RAPIDE

- [ ] La lumière vient d'un seul côté, n'est pas uniforme
- [ ] Au moins 2 micro-imperfections visibles (miettes, lin froissé, désalignement)
- [ ] Composition asymétrique (rien parfaitement centré)
- [ ] L'image appartient clairement à la série (même matières, même lumière que les autres)
- [ ] Montrée sans contexte, personne ne devinerait que c'est de l'IA

---

## RÈGLE ANTI-OVER-DIRECTION

**150 mots ciblés > 400 mots qui couvrent tout.**

Le Lock gère 60% du travail. Les 2 realism nodes gèrent 30%. Le reste : laisser l'IA interpréter. L'over-direction produit paradoxalement des images plus "IA" — l'outil moyenne et aplatit.

**Signe d'alerte :** prompt > 220 mots → couper.  
**Signe d'alerte :** plus de 3 realism nodes injectés → couper.  
**Signe d'alerte :** [DNA_MASTER] + références + anti-références + lock + nodes + format tous ensemble → couper.

---

## FICHIERS DU SYSTÈME

| Fichier | Type | Fréquence d'utilisation |
|---|---|---|
| `00_PIPELINE.md` | Guide | Lire une fois, référencer si doute |
| `01_FIXED_NODES.md` | Fixe | Copier [DNA_MASTER] et [NEGATIVE] dans chaque session |
| `02_REALISM_NODES.md` | Semi-fixe | Ouvrir à chaque génération pour choisir 2 nodes |
| `10_LOCK_A.md` | Série | Ouvrir uniquement pour les générations flat lay |
| `11_LOCK_B.md` | Série | Ouvrir uniquement pour les générations bureau |
| `12_LOCK_C.md` | Série | Ouvrir uniquement pour les générations coffret |
| `20_SCENES.md` | Variable | Ouvrir à chaque génération pour le contexte de scène |
| `30_ASSEMBLER.md` | Assembly | Ouvrir à chaque génération pour assembler le prompt final |

---

*Référence DA complète et philosophie : `LECRIN_DA_PHOTO.md` (contexte, vision, principes)*  
*Ce système : production uniquement*
