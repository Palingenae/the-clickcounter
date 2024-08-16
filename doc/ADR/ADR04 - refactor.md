# ADR issue #4 : Refactorisation de l'application

Le refactor s'accomplira si le but est de supprimer le `HomeContainer` original et changer la structure complète de l'application pour qu'elle n'utilise plus ce *Design Pattern* basé sur les containers.

En effet, comme la responsabilité de l'application est unique, il semblerait que `HomeContainer` présente une couche logiciel qui semble désormais superflue.

Sur cette base, tout le refactor se centrera à terme sur les Hooks, présents dans cette version de React (16.9.0).

