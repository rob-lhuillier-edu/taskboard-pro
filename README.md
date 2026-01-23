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

- **Composants dynamiques**: Possibilité d'afficher des composants qui ne sont pas dans le template avec l'utilisation d'un conteneur (<div #container>) et d'une référence vers celui-ci :
```
@ViewChild('container', { read: ViewContainerRef })
container!: ViewContainerRef;
```

Le composant est ensuite initié avec :
```
this.container.createComponent(AlertComponent);
```

- **Opérateurs RxJS**: transformation des données fournies par les observables via stream (paradigme fonctionnel) :

| Fonctionnalité                                    | Fonction   |
|:-------------------------------------------------|:-----------|
| transformer ces valeurs                           | map()      |
| filtrer certaines valeurs                         | filter()   |
| observer sans modifier                            | tap()      |
| attendre un délai                                 | delay()    |
| enchaîner des actions                             | concatMap()|
| annuler l'ancienne valeur pour en garder une nouvelle | switchMap()|
| lancer plusieurs flux en parallèle                | mergeMap() |

### Tests
- **AAA Pattern** : Arrange, Act, Assert
- **Mocks** : Objets simulés qui sont destinés à être injectés dans les éléments à tester lors des test unitaires
- **Spies** : Fonction qui vérifie qu'une methode a bien été appelée
- **Fixture & detectChanges()** : Fixture est l'enveloppe créée par testBed qui contient le composant, son DOM et ses méthodes, detectChanges force la mise à jour du template, afin que le DOM relfete l'état actuel des composanst

### Mesure de performances

- **DevTools Components**: Permet de visualiser l’arbre des composants et comprendre pourquoi un composant se met à jour (débuggage grace à la vision de l'évolution des valeurs en direct)

- **DevTools Injector Tree**: Permet de vérifier l'origine d'un service (root / composant) et éviter la duplication des instances.

- **LightHouse**: Outils d'analyse du temps de chargement initial, du poids des bundles et ressources, de la stabilité visuelle et de l'accessibilité de la page.


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

- **Lancer des tests unitaires**:
```bash
ng test                   
ng test --code-coverage   
```

## Definitions

- **SPA** : Single Page Application, application reposant sur un chanrgement de page unique, dont lala vue se met à jour coté client. Permet une navigation plus fluide, une modularité du code permettant une réutilisation des composants et de limiter les aller-retours coté serveur.

-**Programmation réactive** : Un programme réagitautomatiquement aux changements de données ou d'évennements au lieu de les interroger activeùent.
```
Le service fournit les données sous forme de flux --> Le composant s'abonne à ces données, pour être notifié à chaque changement -> Le template affiche automatiquement la dernière valeur reçue grâce au | async
```

- **Inhection de dépendances**: Pattern basé sur l'inversion de contrôle (principe Hollywood) consistant à exprimer les dépendances en paramètre afin qu'elles soient déterminées directement à l'exécution (exemple: Expression des dépendances dans les constructeurs, ou avec inject() en Angular)

- **Lazy loading**: Chargement des différentes partie d'une application uniquement lorsque cela est nécessaire -> meilleures performances et fluidité.

- **Jasmine** : Framework pour les tests unitaires
- **Karma** : Runner des tests (permet de les executer)
- **TestBed** : Environnement de tests

- **XSS**: Cross-Site-Scripting -> Execution de code JS malveillant dans l'application -> Angular est protégé par l'échapement systematique du HTML, mais attention à innerHTML !

- **CSRF**: Pousse le navigateur à executer des actions à un utilisateur ayant des droits spécifiques (authentification...) -> Configurer les cookies (SameSite, ), Token CSRF, Vérifier l'origine des requêtes...

- **CSP**: règle de sécurité appliquée par le navigateur pour limiter ce que la page a le droit de charger/exécuter.