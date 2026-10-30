#!/bin/sh
# Étape « ignorer la construction » de Vercel : 0 = rien à construire, 1 = construire.
# Si le commit déployé précédent est hors du clone superficiel (« bad object »), on construit.
P=${VERCEL_GIT_PREVIOUS_SHA:-HEAD^}
git cat-file -e "$P^{commit}" 2>/dev/null || exit 1
git diff --quiet "$P" HEAD -- app components lib context public scripts middleware.js next.config.mjs jsconfig.json package.json package-lock.json vercel.json
