/* Animations avec de la viande : seules celles-là disent « halal » (demande de Ramy du
   29/10/2026 : sur les animations, ni « sans porc » ni « sans alcool », et « halal »
   seulement là où il y a de la viande ou de la charcuterie). Lu dans la composition de
   chaque fiche (dinde, poulet, bœuf, pastrami, bresaola). Module minuscule, partagé par
   lib/ficheAsavoir.js et lib/animationsPratique.js sans tirer l'un dans le bundle de l'autre. */
export const ANIM_VIANDE = new Set(['b5', 'b8', 'd2', 'd6', 's3', 's5', 's6', 's7', 's9'])
export const ANIM_SANS_HALAL = { has: (id) => !ANIM_VIANDE.has(id) }
