# Comptes clients — note de conception

Écrite le 30 octobre 2026, à la demande de Ramy. **Rien n'est codé.** Cette note
sert à décider avant de construire.

---

## 1. Pourquoi, et pourquoi maintenant

Ramy l'a demandé en une phrase : « que les user puissent voir leur ancienne
commande, que leurs infos soient déjà enregistrées, et qu'ils gagnent du temps ».

Derrière, l'objectif qui porte tout le chantier depuis le 29 octobre : **que
l'entreprise tourne sans lui**. Chaque information que le client ressaisit est une
occasion d'erreur, et chaque erreur finit en appel.

Les chiffres qui justifient l'effort, relevés dans l'OS :

- **47 % du chiffre accepté vient de clients qui recommandent** — 20 clients sur 151.
- Carglass et Coyote : **23 devis, 20 acceptés**, et **six ou sept références**
  reviennent à chaque fois (jus, livraison 92, brochettes, madeleines,
  mini-viennoiseries, chouquettes, thermos).
- **10 de ces 23 devis ont été créés le jour même de la livraison.**

Un client qui recommande à l'identique ne devrait avoir qu'un bouton à presser.

### Ce que cela change par rapport au cahier des charges du 29 octobre

Ce document disait, en non-objectif : « **Pas de compte à créer.** Aucune
inscription, aucun mot de passe. » Ramy revient sur cette décision le 30 octobre.
C'est son droit, mais il faut le dire explicitement : **le tunnel sans compte doit
continuer à fonctionner**. Un compte qui devient obligatoire ferait perdre les
clients de passage, et ceux-là paient comptant.

---

## 2. Ce que le compte apporte, par ordre de valeur

1. **Recommander à l'identique.** « Votre commande du 14 octobre » → tout le panier
   reconstitué, la date à changer, et c'est parti. C'est le gain le plus fort :
   il supprime les dix devis du jour même.
2. **Ne plus rien ressaisir.** Adresse, accès, contact sur place, entité de
   facturation, bon de commande. Aujourd'hui le navigateur s'en souvient
   (`lib/souvenirClient.js`), mais seulement sur le même appareil.
3. **Voir ses commandes passées et leurs factures.** Ce que la comptabilité du
   client réclame, et qui arrive aujourd'hui par mail à Ramy.
4. **Le paiement à 30 jours sans vérification manuelle.** Un compte reconnu, c'est
   un encours autorisé — la décision reste à Ramy, mais elle est portée une fois
   pour toutes au lieu d'être rejouée à chaque commande.

---

## 3. Ce qu'il faut trancher avant d'écrire une ligne

### 3.1 Comment on se connecte

**Recommandation : un lien de connexion envoyé par email, pas de mot de passe.**

Le client saisit son adresse, reçoit un lien valable vingt minutes, et il est
connecté. Pourquoi :

- aucun mot de passe à créer, à retenir, à réinitialiser — c'est le premier motif
  d'abandon sur un compte B2B utilisé six fois par an ;
- rien à stocker qui puisse fuiter : pas de base de mots de passe ;
- l'adresse professionnelle est déjà le pivot de tout le reste (devis, facture,
  OS), et elle est vérifiée par construction.

Le coût : un email à recevoir à chaque connexion sur un nouvel appareil. Acceptable
pour un service commandé depuis un poste de bureau, avec une session qui dure.

L'alternative — mot de passe classique — n'apporte ici aucun avantage et ajoute une
base de secrets à protéger.

### 3.2 Où vivent les comptes

C'est la question qui bloque, et elle n'est pas nouvelle : **le site n'a aujourd'hui
pas le droit de lire dans la base de l'OS.** Ramy a fermé l'accès du rôle anon à
deux reprises (migrations v35 et v63), et les routes de l'OS refusent l'origine
lecrin-traiteur.fr.

Trois chemins, du plus simple au plus propre :

| | Comment | Avantage | Inconvénient |
|---|---|---|---|
| **A** | Le site lit l'OS avec une clé de service, côté serveur uniquement | Rien à dupliquer, les commandes passées sont déjà dans l'OS | Une clé qui ouvre toute la base dans l'environnement du site |
| **B** | L'OS expose des routes dédiées, authentifiées par la table `api_keys` (v48), et autorise le domaine | Portée limitée à ce qu'on expose, traçable | Du travail dans le dépôt de l'OS |
| **C** | Le site a sa propre base de comptes, et ne lit jamais l'OS | Cloisonné | Deux sources de vérité sur le même client — exactement ce que la règle « une entreprise, une fiche » interdit |

**Recommandation : B.** C'est le seul qui donne au site juste ce dont il a besoin —
« les commandes de ce client », « cette adresse email a-t-elle un compte » — sans
lui ouvrir la base entière, et sans créer un deuxième fichier client. C'est aussi le
seul compatible avec la règle du coffre : une entreprise = une fiche.

### 3.3 Qui est « le client »

Chez Carglass, cinq personnes peuvent commander. Sont-elles cinq comptes, ou cinq
accès au même compte ?

**Recommandation : cinq comptes, une seule fiche entreprise.** Chacun a son
historique et son adresse de livraison, mais la facturation, l'encours et les
tarifs négociés appartiennent à l'entreprise. C'est déjà la structure de l'OS
(`clients.contacts`), il suffit de la respecter.

À trancher : **un nouveau venu chez un client existant voit-il les commandes de ses
collègues ?** Utile pour reprendre une commande récurrente, gênant si les montants
ne le regardent pas. Proposition : il voit les commandes **de l'entreprise**, car
elles ont toutes été livrées au même endroit et payées par la même entité.

### 3.4 Ce qu'on ne fait pas

- **Pas de compte obligatoire.** Le tunnel sans compte reste la voie normale.
- **Pas de prix par client.** Les tarifs négociés (Bain : jus 8,50 €, thermos
  19,50 €) ne sont pas exposés, même connecté. Décision de Ramy du 29/10, et Bain
  ne commandera pas en ligne.
- **Pas d'ouverture de crédit automatique.** Le paiement à 30 jours reste accordé
  par Ramy, par écrit. Le compte ne fait que porter la décision, il ne la prend pas.

---

## 4. Les écrans, dans l'ordre où ils servent

1. **Se connecter** — une adresse email, un bouton. Rien d'autre sur la page.
2. **Mes commandes** — la liste, la plus récente en haut : date de livraison,
   montant, statut, et un bouton **« Recommander »** qui remplit le panier à
   l'identique. C'est l'écran qui justifie le projet.
3. **Une commande** — le détail, l'adresse, le créneau, et sa facture à télécharger.
4. **Mes informations** — adresses de livraison et de facturation, contacts sur
   place, bon de commande par défaut. Ce que le tunnel ira chercher tout seul.

Le tunnel, lui, ne change presque pas : une ligne discrète en haut, « Déjà client ?
Retrouvez vos informations », et tout le reste se pré-remplit.

---

## 5. Ce que ça coûte, honnêtement

Ce n'est pas une après-midi. En ordre de grandeur, et à condition que 3.2 soit
tranché :

- la connexion par lien email, les sessions, la déconnexion : **deux à trois jours** ;
- les routes de l'OS et leur authentification : **deux jours, dans le dépôt de l'OS** ;
- les quatre écrans : **trois à quatre jours** ;
- « Recommander » : **un jour**, le panier existe déjà ;
- les factures téléchargeables : dépend de Pennylane, **à chiffrer à part**.

Soit une à deux semaines de travail, dont une partie hors du dépôt du site.

---

## 6. Ce que je ferais en premier si le temps manque

**« Recommander » sans compte du tout.** Dans l'email de confirmation de chaque
commande, un lien signé qui remplit le panier à l'identique. Pas d'authentification,
pas de base, pas de décision de sécurité : le lien est dans la boîte du client, et
il ne donne accès qu'à sa propre commande.

Ça prend **une journée** et ça couvre le gain le plus fort — les dix devis du jour
même. Le compte complet peut suivre, sans rien jeter de ce travail.
