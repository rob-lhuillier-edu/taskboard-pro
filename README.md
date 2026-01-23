# TaskBoardPro

## Caractéristiques d'Angular

- **SPA**
- **Typage statique** : Typescript natiuf, permettant de détecter une grande partie des erreurs avant l'exécution. En revanche, le typescript doit être transpilé avant exécution dans le navigateur.
- **Structure d'un projet Angular** : 
Cette organisation n'est pas  obligatoire mais c'est une convention
```
taskboard-pro/
├── src/
│   ├── app/
│   │   ├── app.component.ts      // Composant racine
│   │   ├── app.component.html    // Template
│   │   ├── app.component.css     // Styles
│   │   ├── app.routes.ts         // Configuration routing
│   │   └── app.config.ts         // Configuration app
│   ├── index.html                // Point d'entrée HTML
│   └── main.ts                   // Point d'entrée TypeScript
├── angular.json                  // Configuration Angular CLI
├── package.json                  // Dépendances npm
└── tsconfig.json                 // Configuration TypeScript
```
- **Les composant** sont des briques indé&pendante, avec leur propre code, template et style :
```
src/app/header/
├── heade.ts      // Logique TypeScript
├── header.html    // Template HTML
├── header.css     // Styles CSS
└── header.spec.ts // Tests unitaires
```

- **Piliers du Angular moderne**: TypeScript, Standalone components, structure standardisée.

-**Les hooks** : Méthodes appelées automatiquement à différentes moments du cycle de vie d'un composant
|Hook  |	Quand ?|	Usage|
|:-----|:--------------|:------------|
|ngOnInit()	|Après création du composant	|Initialisation, appels HTTP, abonnements|
|ngOnDestroy() |	Juste avant destruction|	Nettoyage, unsubscribe, clearInterval|
|ngOnChanges()|	Quand un @Input change|	Réagir aux changements d'@Input|
|ngDoCheck()|	À chaque détection de changement|	Détection personnalisée (rare)|
|ngAfterViewInit()|	Après initialisation de la vue	|Accéder aux éléments DOM via @ViewChild|
|ngAfterViewChecked()|	Après chaque vérification de la vue|	Vérifications post-rendu (rare)|
|ngAfterContentInit()	|Après projection du contenu	|Accéder au contenu projeté (ng-content)|
|ngAfterContentChecked()|	Après chaque vérification du contenu|	Vérifications du contenu projeté (rare)|

-**Routing**: Permet à Angular d'afficher la bonne page selon l'URL sans recharger l'application (gestion coté client)
## Commandes:
- **Créer un projet Angular** :
```
ng new taskboard-pro --routing --style=css
cd taskboard-pro
ng serve
```
- **Générer des composants** :
```
ng generate component <nom>
```
- **Créer un composant** :
```
ng generate component header
# ou plus court :
ng g c header
```
## Definitions

- **SPA** : Single Page Application, application reposant sur un chanrgement de page unique, dont lala vue se met à jour coté client. Permet une navigation plus fluide, une modularité du code permettant une réutilisation des composants et de limiter les aller-retours coté serveur.

