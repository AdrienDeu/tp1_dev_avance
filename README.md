# TP1 Développement avancé

## Introduction

Ce TP concerne le développement de fonctionnalités d'ajout de **blocs de données** au format **JSON** et de la récupération des chaînes, dans le cadre d'une **API** déjà développée.

## Développement

### Les 4 étapes
Le développement de ce programme est scindé en 4 étapes :
- La 1ère étape a consisté à tester le serveur de l'API, en générant des requêtes GET et POST.
- La 2ème étape a consisté à implémenter la 1ère fonctionnalité, qui consiste à afficher un message personnalisé lu dans un fichier *blockchain.json* dans le cadre d'une requête GET.
- La 3ème étape a consisté à implémenter la fonction *createBlock()*, qui permet d'ajouter un objet JSON avec différents champs, dont 1 **ID auto-généré** au fichier *blockchain.json*.
- La 4ème étape a consisté à modifier la fonction *createBlock()* afin stocker le bloc précédent **crypté**, ainsi que programmer la fonction permettant de récupérer le dernier block appelé *findLastBlock*.
- Finalement, pour aller plus loin, j'ai programmé la fonction permettant de récupérer un bloc à partir de son ID.
### Difficultés rencontrées
Durant le TP, j'ai eu des difficultés à programmer, car je n'avais pas bien compris ce qu'était une **promesse**. De plus, je me suis heurté à la différence syntaxique de **JAVA** et **JS** notamment pour la manipulation des objets JSON.

### Compétences acquises
J'ai acquis une bonne compréhension de ce qu'est une promesse et je suis maintenant âpte à les manipuler. De plus, je suis désormais à l'aise avec la manipulation d'objets JSON en JavaScript.
Cependant, la compétence la plus importante que j'ai acquise est l'utilisation de **Node JS** pour **gérer les dépendances** de mon projet, la manipulation de fichiers avec node **:js** et l'utilisation de node **:crypto**.

## Conclusion
Je suis extrèmement enthousiaste à l'idée de continuer cette série de TP. En effet, Node Js est une technologie qui **m'intéresse particulièrement**. De plus, je pense avoir énormément progressé en JavaScript durant ce TP qui était très intéressant et pédagogique.


**Adrien Deü - Groupe 302 - IUT Pars Cité**
