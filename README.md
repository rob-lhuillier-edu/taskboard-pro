## Séquence 2 – Logique réactive du flux de données
### Points clés retenus
- **BehaviorSubject** permet de conserver l'état des données afin que celles-ci soient consultables par les composant, et ce, quel que soit leur cycle de vie
- **| async** est un binding asynchrone, qui permet de lire automatiquement la dernière valeur reçue
- Le service conserve l'état données (tâches) via BehaviorSubject
- Les composant vont lire le dernier état des données et mettent à jour la vue.

## Séquence 3 — Lazy Loading & Composants dynamiques
### Points clés
- Le **Lazy Loading** permet de charger chaque fonctionnalité à l'accès du composant au lieu de le faire au chargement de l'applciation (plus dynamique et rapide)
- Organiser le code par **features** (fonctionnalités) permet de le rendre plus clair et maintenable
- **Un composant dynamique** est un composant créé à la demande, il n'est pas présent dans l'HTML de départ
- **ViewContainerRef** permet de définir l'emplaczement du composant dynamique à afficher
- **createComponent()** est la méthode permettant de le créer dynamiquement à cet emplacement

 #### 1. Pourquoi tester ?
        - Les tests permettent de vérifier que le code fonctionne comme attendu (eviter les bugs et regressions)
        - Sans tests, le risque est de se retrouver avec un code non fontionnel

#### 2. Outils utilisés
- **Jasmine** : Framework pour les tests unitaires
- **Karma** : Runner des tests (permet de les executer)
- **TestBed** : Environnement de tests

#### 3. Concepts clés maîtrisés
- **AAA Pattern** : Arrange, Act, Assert
- **Mocks** : Objets simulés qui sont destinés à être injectés dans les éléments à tester lors des test unitaires
- **Spies** : Fonction qui vérifie qu'une methode a bien été appelée
- **Fixture & detectChanges()** : Fixture est l'enveloppe créée par testBed qui contient le composant, son DOM et ses méthodes, detectChanges force la mise à jour du template, afin que le DOM relfete l'état actuel des composanst

#### 4. Erreurs courantes rencontrées
- Oublier `detectChanges()` : le template ne se met pas à jour
- `No provider for...` : ajouter provideRouter([{ path: '', component: ... }])
- Tests qui dépendent les uns des autres : Attention à réinitialiser les données avant chaque nouveau test

#### 6. Commandes importantes
```bash
ng test                   
ng test --code-coverage  
```

#### 7. Code Coverage atteint
- Objectif : 70-80%
- Mon résultat : =============================== Coverage summary ===============================
                Statements   : 64.06% ( 41/64 )
                Branches     : 33.33% ( 2/6 )
                Functions    : 50% ( 13/26 )
                Lines        : 62.96% ( 34/54 )

#### 8. Difficultés rencontrées et solutions
| Difficulté | Solution trouvée |
|------------|------------------|
| Le test de taks renvoyait systematiquement un timeout | Passage du test en synchrone |
