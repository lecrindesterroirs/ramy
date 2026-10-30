'use client'

/*
  Le pré-remplissage du tunnel depuis le COMPTE CLIENT (30/10/2026).

  Le souvenir du navigateur ne suit pas le client : il remplit ses
  informations sur son ordinateur, commande depuis son téléphone, et retape
  tout. Son compte, lui, vit dans l'OS, donc le suit partout.

  Deux règles :
  - on ne remplit que les trous, jamais ce qu'il vient de saisir ;
  - rien n'est demandé à l'OS pour un visiteur non connecté : la route répond
    401 et on n'en parle pas.
*/

import { useEffect } from 'react'
import { lireBrouillon, ecrireBrouillon } from '@/lib/brouillonCommande'
import { completerAvec, depuisProfil } from '@/lib/souvenirClient'

export function usePreRemplirCompte(setB, setPreRempli) {
  useEffect(() => {
    let vivant = true
    fetch('/api/compte/moi')
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!vivant || !d?.connecte) return
        // On relit le brouillon plutôt que l'état : il a pu bouger pendant
        // que l'OS répondait.
        const avant = lireBrouillon()
        const source = depuisProfil(d.profil)
        const { brouillon, complete } = completerAvec(avant, source)
        if (complete) setB(ecrireBrouillon(brouillon))
        /*
          La phrase « reprises de votre compte » doit s'afficher même quand il
          n'y avait plus rien à remplir : l'écran précédent avait déjà posé le
          profil dans le brouillon. Sans ce test, le client arrivait devant un
          formulaire rempli tout seul, sans explication.
        */
        const dejaPose = Object.keys(source).length > 0 &&
          Object.entries(source).every(([c, v]) => String(avant[c] ?? '').trim() === String(v).trim())
        if (complete || dejaPose) setPreRempli?.('compte')
      })
      .catch(() => { /* hors ligne : le tunnel marche sans */ })
    return () => { vivant = false }
  }, [setB, setPreRempli])
}
