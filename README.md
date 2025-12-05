# Groupe: Les zer0 skill
# Ecole: Université de Bretagne Occidentale 
# Documentation Technique

## Présentation

Zer0Skill est une interface de chat web interactive intégrant un avatar animé réactif. L'application combine une interface utilisateur front-end dynamique avec des appels API pour générer des réponses textuelles et vocales. Le projet est optimisé pour un déploiement cloud sur Netlify, utilisant des variables d'environnement pour sécuriser les identifiants d'accès.

## Fonctionnalités Principales

* **Avatar Interactif** : Un visage généré en CSS pur dont les yeux suivent le mouvement du curseur de la souris (Eye Tracking).
* **Réactivité Visuelle** : Le visage réagit aux clics et change d'émotion en fonction de l'analyse sémantique des réponses.
* **Synthèse Vocale (TTS)** : Conversion des réponses textuelles en audio via API, avec synchronisation labiale.
* **Interface Chat** : Fenêtre de conversation responsive avec historique des messages.
* **Sécurité** : Externalisation de la clé API via la configuration du serveur d'hébergement.

## Architecture du Code

Le projet repose sur une structure front-end standard :

### 1. Structure HTML
L'interface est divisée en trois blocs principaux :
* **Header** : Contient le bouton d'activation du son, l'avatar et les informations de profil.
* **Chat Box** : Conteneur pour l'historique des échanges.
* **Input Area** : Champ de saisie utilisateur.

### 2. Styles CSS
Le design utilise Flexbox pour la mise en page et les transitions CSS pour les animations (yeux, bouche, interface).

### 3. Logique JavaScript
Le script gère le cycle de vie de l'application :
* Gestion des événements DOM (souris, clavier).
* Récupération dynamique de la configuration depuis l'environnement.
* Appels asynchrones vers les points de terminaison de l'API.

## Déploiement et Configuration

Le déploiement est assuré par Netlify, qui permet d'injecter la clé API sans l'exposer dans le code source public.

## Personnalisation

### Comportement du Bot
Le caractère et les réponses de l'avatar sont définis par la variable système (`systemPrompt`) présente dans la logique JavaScript. Toute modification de la personnalité de "Zer0Skill" doit être effectuée directement dans cette variable avant le déploiement.

## Dépannage

* **Problème Audio** : L'audio nécessite une interaction utilisateur explicite. Assurez-vous d'activer le son via l'interface avant d'envoyer un message.