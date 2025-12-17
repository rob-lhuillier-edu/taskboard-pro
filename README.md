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