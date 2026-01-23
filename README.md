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

- **Routing**: Permet à Angular d'afficher la bonne page selon l'URL sans recharger l'application (gestion coté client)

- **Asynchrone**: L'app n'attend PAS que les données arrivent pour continuer, et met à jour la vue automatiquement

- **RxJS**: Reactive Extensions for JavaScript - utilisée par Angular pour gérer les flux de données et tout ce qui change dans le temps (HTTP, routing, formulaires, interractions utilisateurs)

- **Observable**: Nouvelle structure de données permettant à différentes partie de l'app d'écouter les evennements et d'y réagir automatiquement.

- **BehaviorSubjet**: Flux actif qui garde en mémoire la dernière valeur émise (pas besoin d'initier les abonnés avant) et notifie tous les abonnés à chaque changement de la variable.

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
- **Créer un service** : 
```
ng generate service core/services/task
# ou
ng g s core/services/task
```
Fichiers générés : 
```
src/app/core/services/
├── task.service.ts        // Service
└── task.service.spec.ts   // Tests
```
## Definitions

- **SPA** : Single Page Application, application reposant sur un chanrgement de page unique, dont lala vue se met à jour coté client. Permet une navigation plus fluide, une modularité du code permettant une réutilisation des composants et de limiter les aller-retours coté serveur.

-**Programmation réactive** : Un programme réagitautomatiquement aux changements de données ou d'évennements au lieu de les interroger activeùent.
```
Le service fournit les données sous forme de flux --> Le composant s'abonne à ces données, pour être notifié à chaque changement -> Le template affiche automatiquement la dernière valeur reçue grâce au | async
```

