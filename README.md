## Séquence 2 – Logique réactive du flux de données
### Points clés retenus
- **BehaviorSubject** permet de conserver l'état des données afin que celles-ci soient consultables par les composant, et ce, quel que soit leur cycle de vie
- **| async** est un binding asynchrone, qui permet de lire automatiquement la dernière valeur reçue
- Le service conserve l'état données (tâches) via BehaviorSubject
- Les composant vont lire le dernier état des données et mettent à jour la vue.