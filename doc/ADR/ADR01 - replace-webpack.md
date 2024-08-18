# ADR issue [#1](https://github.com/Palingenae/eonix-clickcounter/issues/1) : Remplacement de Webpack par Vite

> [!NOTE]
> **Cette décision est structurante**. En mon sens, c'est le type de décision à prendre après concertation avec l'équipe de son projet après avalisation des personnes en charge et potentiellement du client de celui-ci. J'aurais tendance à procéder à ce changement de façon progressive.

## Contexte
L'application Click Counter a été récupérée dans une ancienne version, tel que stipulé dans l'[ADR de migration de version](./ADR01%20-%20migrate-version.md). Celle-ci comportait Webpack en version 1, qui est en fait très lourd et comportait énormément de configuration, bien que cela puisse être un avantage, notamment dans les applications plus conséquentes avec des besoins spécifiques.

## Décision
Au regard du nombre de changements d'API entre la v1 de Webpack à sa v5, la migration de Webpack s'en retrouve laborieuse et très longue. Par conséquent, la décision d'utiliser Vite au lieu de Webpack est plus judicieuse.

Dans le cas de cette petite application, Vite se révèle plus avantageux que Webpack[^1][^2] : 
- Support natif de React ;
- Configuration simplifiée ;
- Utilisation des Modules EcmaScript ce qui a pour conséquence des temps de développement réduits ;
- Écrit avec la compatibilité des Frameworks Javascript en priorité ;
- Builds de production plus "légers" ;
- etc.

## Conséquences
Il y a deux conséquences à ce changement :
- Le support des anciens navigateurs web risque de se faire plus difficilement suite à l'abandon de Webpack ;
- Le développement et les migrations de l'application se retrouvent simplifiés et accélérés.

-----
[^1]: **Vite vs Webpack: A Comparative Analysis** : https://dev.to/debajit13/vite-vs-webpack-a-comparative-analysis-851

[^2]: **Switching from WebPack to Vite: How to power up frontend development** : https://medium.com/@softverysolutions/switching-from-webpack-to-vite-how-to-power-up-frontend-development-8d09a35d39f5