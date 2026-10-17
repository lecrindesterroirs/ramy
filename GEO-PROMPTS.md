# Suivi mensuel : est-ce que les IA citent L'Écrin ?

## Méthode (à refaire à l'identique vers le 10 de chaque mois)

- **Qui :** Ramy, à la main (décision du 13/10/2026). Les 4 premières questions avaient été passées par Claude depuis Chrome.
- **Outils :** ChatGPT, Perplexity, Gemini et Copilot (depuis le 17/10/2026). Pour ChatGPT : recherche web activée, en **chat éphémère** réglé sur **« Non personnalisé »**. Sans ce réglage, ChatGPT utilise la mémoire du compte de Ramy et les réponses sont faussées.
- **Adresse à ouvrir :** `https://chatgpt.com/?temporary-chat=true&hints=search&q=<question>`
- **À noter pour chaque question :** L'Écrin cité ou non, à quelle place, avec quel prix, qui est cité à la place, et pourquoi (ce que l'IA dit de chacun).
- Compléter avec Bing Webmaster Tools > AI Performance (citations Copilot), GA4 (visites depuis chatgpt.com) et l'OS (`demandes_entrantes.raw.attribution.referrer`).

## Relevé n° 1 : 13 octobre 2026 (4 questions testées sur 30)

| # | Question | L'Écrin cité ? | Place | Ce que ChatGPT dit de L'Écrin | Cités devant |
|---|---|---|---|---|---|
| 1 | Quel traiteur choisir pour un cocktail d'entreprise halal de 50 personnes à Paris ? Donne des noms et des prix. | ❌ Non | — | — | Innovation Traiteur, Dina Events, Traiteur Paris Halal, Bara K, Le Traiteur de la Bourse |
| 7 | Quel traiteur livre des petits-déjeuners d'entreprise à Boulogne-Billancourt et à La Défense ? Donne des noms et des prix par personne. | ✅ Oui | 5e sur 6 | « Sur devis ». Recommandé « pour un service plus premium et des réunions tôt le matin ». Cite 6h30, veille 14h, minimum 50 €, livraison 29 €. | Crozy Traiteur (11,90 €), D'un Passage à l'autre, Jetsaveurs (8 €), Mr Matin (5,80 à 11,70 €) |
| 13 | Je cherche un traiteur pour un cocktail dînatoire d'entreprise de 80 personnes à Paris, livré au bureau. Quels traiteurs recommandes-tu et à quel prix par personne ? | ❌ Non | — | — | Maison Alexandre (35 €), Fika Traiteur, Crozy Traiteur, The Brunch |
| 25 | Which caterer can deliver a halal breakfast or lunch to our office in Paris La Défense for 30 people? Give names and prices per person. | ✅ Oui | 2e sur 4 | « Halal by default ». Mais : « Request a quote; no reliable public halal-specific price found ». | Crozy Traiteur (« halal menus published online », prix par personne) |

### Ce que ce relevé apprend

1. **Le prix par personne décide du classement.** Sur les deux questions où L'Écrin est cité, ChatGPT écrit « sur devis » et place devant les traiteurs qui affichent un prix. Corrigé le 13/10 : tableau de prix par personne sur /traiteur-halal et /traiteur, prix dans les données structurées.
2. **Sur le cocktail, L'Écrin est absent.** Les 7 guides cocktail datent du 13/10 : à remesurer.
3. **Sur « halal » en français, ChatGPT pioche dans une carte d'établissements** (fiches avec note) dont le nom contient « halal ». Levier : la fiche Google et la fiche Bing (services, avis qui mentionnent le halal), pas le site.
4. **En anglais, L'Écrin sort 2e** alors qu'il n'y avait encore aucune page en anglais. La page /corporate-catering-paris (13/10) doit consolider.
5. **Concurrent à surveiller : Crozy Traiteur**, cité sur 3 questions sur 4.

## Les 10 questions du relevé mensuel (posées par Ramy, à la main)

Décidé le 13 octobre 2026 : c'est Ramy qui pose les questions, une fois par mois vers le 10. Depuis le 17 octobre 2026, **dans quatre assistants** : ChatGPT, Perplexity, Gemini et Copilot (Copilot = l'index Bing, celui que ChatGPT utilise aussi). Il colle les réponses dans la conversation, Claude remplit le tableau.

Pour que les réponses ne dépendent pas de ton compte :
- **ChatGPT** : le lien ouvre un chat éphémère ; vérifier le réglage « Non personnalisé ».
- **Perplexity** : le lien ouvre la recherche avec la question ; le faire dans une fenêtre de navigation privée (sans compte).
- **Gemini** : ouvrir [gemini.google.com](https://gemini.google.com) dans une fenêtre privée et coller la question (Gemini ne se pré-remplit pas par un lien).
- **Copilot** : le lien ouvre la question ; fenêtre privée aussi.

| # | Question | ChatGPT | Perplexity | Copilot | Gemini |
|---|---|---|---|---|---|
| 1 | Combien coûte un cocktail d'entreprise pour 50 personnes à Paris ? | [ChatGPT](https://chatgpt.com/?temporary-chat=true&hints=search&q=Combien%20co%C3%BBte%20un%20cocktail%20d%27entreprise%20pour%2050%20personnes%20%C3%A0%20Paris%20%3F) | [Perplexity](https://www.perplexity.ai/search?q=Combien%20co%C3%BBte%20un%20cocktail%20d%27entreprise%20pour%2050%20personnes%20%C3%A0%20Paris%20%3F) | [Copilot](https://copilot.microsoft.com/?q=Combien%20co%C3%BBte%20un%20cocktail%20d%27entreprise%20pour%2050%20personnes%20%C3%A0%20Paris%20%3F) | copier la question |
| 2 | Quel traiteur pour un cocktail d'inauguration de bureaux à Paris ? | [ChatGPT](https://chatgpt.com/?temporary-chat=true&hints=search&q=Quel%20traiteur%20pour%20un%20cocktail%20d%27inauguration%20de%20bureaux%20%C3%A0%20Paris%20%3F) | [Perplexity](https://www.perplexity.ai/search?q=Quel%20traiteur%20pour%20un%20cocktail%20d%27inauguration%20de%20bureaux%20%C3%A0%20Paris%20%3F) | [Copilot](https://copilot.microsoft.com/?q=Quel%20traiteur%20pour%20un%20cocktail%20d%27inauguration%20de%20bureaux%20%C3%A0%20Paris%20%3F) | copier la question |
| 3 | Quel traiteur pour un petit-déjeuner d'entreprise de 30 personnes à Paris demain matin ? | [ChatGPT](https://chatgpt.com/?temporary-chat=true&hints=search&q=Quel%20traiteur%20pour%20un%20petit-d%C3%A9jeuner%20d%27entreprise%20de%2030%20personnes%20%C3%A0%20Paris%20demain%20matin%20%3F) | [Perplexity](https://www.perplexity.ai/search?q=Quel%20traiteur%20pour%20un%20petit-d%C3%A9jeuner%20d%27entreprise%20de%2030%20personnes%20%C3%A0%20Paris%20demain%20matin%20%3F) | [Copilot](https://copilot.microsoft.com/?q=Quel%20traiteur%20pour%20un%20petit-d%C3%A9jeuner%20d%27entreprise%20de%2030%20personnes%20%C3%A0%20Paris%20demain%20matin%20%3F) | copier la question |
| 4 | Quel traiteur d'entreprise halal à Paris ? | [ChatGPT](https://chatgpt.com/?temporary-chat=true&hints=search&q=Quel%20traiteur%20d%27entreprise%20halal%20%C3%A0%20Paris%20%3F) | [Perplexity](https://www.perplexity.ai/search?q=Quel%20traiteur%20d%27entreprise%20halal%20%C3%A0%20Paris%20%3F) | [Copilot](https://copilot.microsoft.com/?q=Quel%20traiteur%20d%27entreprise%20halal%20%C3%A0%20Paris%20%3F) | copier la question |
| 5 | Plateaux repas halal livrés au bureau à Paris : quels traiteurs ? | [ChatGPT](https://chatgpt.com/?temporary-chat=true&hints=search&q=Plateaux%20repas%20halal%20livr%C3%A9s%20au%20bureau%20%C3%A0%20Paris%20%3A%20quels%20traiteurs%20%3F) | [Perplexity](https://www.perplexity.ai/search?q=Plateaux%20repas%20halal%20livr%C3%A9s%20au%20bureau%20%C3%A0%20Paris%20%3A%20quels%20traiteurs%20%3F) | [Copilot](https://copilot.microsoft.com/?q=Plateaux%20repas%20halal%20livr%C3%A9s%20au%20bureau%20%C3%A0%20Paris%20%3A%20quels%20traiteurs%20%3F) | copier la question |
| 6 | Quel traiteur pour des plateaux repas d'entreprise à Paris, et à quel prix ? | [ChatGPT](https://chatgpt.com/?temporary-chat=true&hints=search&q=Quel%20traiteur%20pour%20des%20plateaux%20repas%20d%27entreprise%20%C3%A0%20Paris%2C%20et%20%C3%A0%20quel%20prix%20%3F) | [Perplexity](https://www.perplexity.ai/search?q=Quel%20traiteur%20pour%20des%20plateaux%20repas%20d%27entreprise%20%C3%A0%20Paris%2C%20et%20%C3%A0%20quel%20prix%20%3F) | [Copilot](https://copilot.microsoft.com/?q=Quel%20traiteur%20pour%20des%20plateaux%20repas%20d%27entreprise%20%C3%A0%20Paris%2C%20et%20%C3%A0%20quel%20prix%20%3F) | copier la question |
| 7 | Quel est le meilleur traiteur d'entreprise à Paris ? | [ChatGPT](https://chatgpt.com/?temporary-chat=true&hints=search&q=Quel%20est%20le%20meilleur%20traiteur%20d%27entreprise%20%C3%A0%20Paris%20%3F) | [Perplexity](https://www.perplexity.ai/search?q=Quel%20est%20le%20meilleur%20traiteur%20d%27entreprise%20%C3%A0%20Paris%20%3F) | [Copilot](https://copilot.microsoft.com/?q=Quel%20est%20le%20meilleur%20traiteur%20d%27entreprise%20%C3%A0%20Paris%20%3F) | copier la question |
| 8 | Meilleur traiteur d'entreprise à Boulogne-Billancourt ? | [ChatGPT](https://chatgpt.com/?temporary-chat=true&hints=search&q=Meilleur%20traiteur%20d%27entreprise%20%C3%A0%20Boulogne-Billancourt%20%3F) | [Perplexity](https://www.perplexity.ai/search?q=Meilleur%20traiteur%20d%27entreprise%20%C3%A0%20Boulogne-Billancourt%20%3F) | [Copilot](https://copilot.microsoft.com/?q=Meilleur%20traiteur%20d%27entreprise%20%C3%A0%20Boulogne-Billancourt%20%3F) | copier la question |
| 9 | Halal corporate catering Paris for a cocktail reception of 60 guests? | [ChatGPT](https://chatgpt.com/?temporary-chat=true&hints=search&q=Halal%20corporate%20catering%20Paris%20for%20a%20cocktail%20reception%20of%2060%20guests%3F) | [Perplexity](https://www.perplexity.ai/search?q=Halal%20corporate%20catering%20Paris%20for%20a%20cocktail%20reception%20of%2060%20guests%3F) | [Copilot](https://copilot.microsoft.com/?q=Halal%20corporate%20catering%20Paris%20for%20a%20cocktail%20reception%20of%2060%20guests%3F) | copier la question |
| 10 | Que penser de L'Écrin Traiteur ? | [ChatGPT](https://chatgpt.com/?temporary-chat=true&hints=search&q=Que%20penser%20de%20L%27%C3%89crin%20Traiteur%20%3F) | [Perplexity](https://www.perplexity.ai/search?q=Que%20penser%20de%20L%27%C3%89crin%20Traiteur%20%3F) | [Copilot](https://copilot.microsoft.com/?q=Que%20penser%20de%20L%27%C3%89crin%20Traiteur%20%3F) | copier la question |

Tableau à remplir :

| Date | Question | Assistant (ChatGPT / Perplexity / Gemini / Copilot) | Cité | Rang | URL citée | Concurrents nommés | Sources tierces |
|---|---|---|---|---|---|---|---|

## Les 30 questions

### Cocktail (priorité)
1. Quel traiteur choisir pour un cocktail d'entreprise halal de 50 personnes à Paris ? Donne des noms et des prix.
2. Combien coûte un cocktail d'entreprise pour 50 personnes à Paris ?
3. Combien de pièces cocktail prévoir par personne pour un cocktail dînatoire ?
4. Quel traiteur pour un cocktail d'inauguration de bureaux à Paris ?
5. Idées de pièces cocktail pour un événement d'entreprise ?
6. Quel traiteur propose un cocktail d'entreprise sans alcool à Paris ?
13. Je cherche un traiteur pour un cocktail dînatoire d'entreprise de 80 personnes à Paris, livré au bureau. Quels traiteurs recommandes-tu et à quel prix par personne ?
14. Quel budget pour un cocktail d'entreprise de 100 personnes ?

### Petit-déjeuner
7. Quel traiteur livre des petits-déjeuners d'entreprise à Boulogne-Billancourt et à La Défense ? Donne des noms et des prix par personne.
8. Quel traiteur pour un petit-déjeuner d'entreprise de 30 personnes à Paris demain matin ?
9. Combien coûte un petit-déjeuner d'entreprise par personne à Paris ?
10. Combien de viennoiseries prévoir pour 20 personnes ?
11. Où commander un petit-déjeuner d'entreprise à Neuilly-sur-Seine ?
12. Quel traiteur livre un petit-déjeuner au bureau avant 7h à Paris ?

### Halal et régimes
15. Quel traiteur d'entreprise halal à Paris ?
16. Traiteur halal pour un séminaire d'entreprise à La Défense ?
17. Quel traiteur d'entreprise gère les régimes halal, végétarien et sans gluten ?
18. Plateaux repas halal livrés au bureau à Paris : quels traiteurs ?

### Déjeuner et pauses
19. Quel traiteur pour des plateaux repas d'entreprise à Paris, et à quel prix ?
20. Idées de pause gourmande au bureau ?
21. Quel traiteur pour un goûter d'entreprise à Paris ?
22. Quel traiteur pour une journée de séminaire complète à Paris (petit-déjeuner, déjeuner, pauses) ?

### Choix du traiteur
23. Quel est le meilleur traiteur d'entreprise à Paris ?
24. Meilleur traiteur d'entreprise à Boulogne-Billancourt ?
29. Comment choisir un traiteur d'entreprise à Paris ?
30. Que penser de L'Écrin Traiteur ?

### En anglais
25. Which caterer can deliver a halal breakfast or lunch to our office in Paris La Défense for 30 people? Give names and prices per person.
26. Best corporate catering in Paris for an office breakfast?
27. Halal corporate catering Paris for a cocktail reception of 60 guests?
28. Office lunch delivery Paris for a team of 20, which caterers?
