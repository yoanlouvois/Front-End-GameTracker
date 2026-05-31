# GameTracker Frontend

## Présentation

GameTracker est une plateforme web full-stack dédiée aux jeux HTML5 en ligne. L'application permet aux utilisateurs de créer un compte, gérer leur profil joueur, découvrir et lancer des jeux directement depuis leur navigateur, interagir avec leurs amis et débloquer des trophées.

<p align="center">
  <img width="75%" alt="Capture d&#39;écran 2026-05-08 001001" src="https://github.com/user-attachments/assets/e62a24cb-662f-494f-b5b5-d082151dedbe" />
/p>


Le frontend est développé avec **Angular**, **HTML** et **SCSS**, tandis que le backend repose sur **Spring Boot** et **MySQL**.

### Dépôt Backend

Lien vers le dépôt backend : https://github.com/MorganPhlp/GameTrackerProject

---

## Fonctionnalités

L'application est composée de plusieurs vues et modules :

### Authentification

* Création de compte
* Connexion utilisateur
* Gestion sécurisée des comptes

<p align="center">
  <img width="50%" alt="Capture d’écran (48)" src="https://github.com/user-attachments/assets/bd4ae7cb-6937-4ce2-bed2-ace1fd129d5c" />
/p>

### Profil Joueur

* Gestion du profil personnel
* Consultation des statistiques
* Suivi des trophées débloqués

### Gestion des Amis

* Ajout et suppression d'amis
* Consultation des profils des amis
* Interactions sociales entre joueurs

### Catalogue de Jeux

* Parcourir les jeux disponibles / jeux récents
* Lancer des jeux HTML5 directement dans le navigateur

<p align="center">
  <img width="50%" alt="Capture d’écran (47)" src="https://github.com/user-attachments/assets/621f85d3-0333-47c5-b605-f56866d470b3" />
/p>

### Recommandations

* Recommander des jeux à ses amis
* Découvrir les recommandations reçues

---


## Lancer le projet

### Installation des dépendances

```bash
npm install
```

### Démarrage du serveur de développement

```bash
ng serve
```

L'application sera accessible à l'adresse :

```text
http://localhost:4200
```

Le rechargement est automatique lors des modifications du code source.

---

## Génération d'un build de production

```bash
ng build
```

Les fichiers compilés seront générés dans le dossier `dist/`.
