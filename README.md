# 📚 Aide Devoirs Collège

Site web d'accompagnement scolaire pour aider les élèves en difficulté à faire leurs devoirs, s'organiser et avoir des repères clairs dans les différentes matières au collège.

## 🎯 Objectifs du projet

Ce projet vise à fournir un espace numérique bienveillant et structurant pour les collégiens qui rencontrent des difficultés dans leur scolarité. L'objectif est de leur offrir :

- 📝 **Aide aux devoirs** : Explications claires et méthodologie
- 🗓️ **Organisation** : Outils de planification et suivi des devoirs
- 📖 **Repères clairs** : Fiches synthétiques par matière et niveau
- 💡 **Méthodologie** : Techniques d'apprentissage et de mémorisation

## ✨ Fonctionnalités prévues

### Phase 1 - MVP
- [ ] Page d'accueil accueillante et motivante
- [ ] Système de navigation par matière (Maths, Français, Histoire-Géo, etc.)
- [ ] Fiches de cours synthétiques par chapitre
- [ ] Exercices types avec corrections détaillées
- [ ] Conseils méthodologiques

### Phase 2 - Personnalisation
- [ ] Système d'inscription/connexion élève
- [ ] Suivi personnalisé des devoirs
- [ ] Planning de révisions
- [ ] Historique de progression

### Phase 3 - Interactivité
- [ ] Quiz interactifs
- [ ] Espace de questions-réponses
- [ ] Ressources téléchargeables (PDF)
- [ ] Système de badges de progression

## 🛠️ Technologies utilisées

- **Frontend** : HTML5, CSS3, JavaScript (Vanilla ou framework léger)
- **Hébergement** : Netlify
- **Base de données** : Neon (PostgreSQL serverless)
- **Versionning** : Git / GitHub
- **Authentification** : À définir (JWT, Supabase Auth, ou autre)

## 📁 Structure du projet

```
aide-devoirs-college/
├── index.html                 # Page d'accueil
├── css/
│   ├── style.css             # Styles principaux
│   └── responsive.css        # Adaptations mobile
├── js/
│   ├── main.js               # Scripts principaux
│   └── utils.js              # Fonctions utilitaires
├── matieres/
│   ├── mathematiques/
│   ├── francais/
│   ├── histoire-geo/
│   └── ...
├── assets/
│   ├── images/
│   └── icons/
├── netlify.toml              # Configuration Netlify
├── _redirects                # Règles de redirection
└── README.md                 # Ce fichier
```

## 🚀 Installation et déploiement

### Prérequis
- Node.js (v18+) si utilisation de frameworks
- Un compte GitHub
- Un compte Netlify
- Un compte Neon (pour la base de données)

### Installation locale

```bash
# Cloner le dépôt
git clone https://github.com/votre-username/aide-devoirs-college.git
cd aide-devoirs-college

# Si utilisation de dépendances npm
npm install

# Lancer le serveur local
npm run dev
# ou simplement ouvrir index.html dans un navigateur
```

### Déploiement sur Netlify

#### Option 1 : Via l'interface Netlify
1. Se connecter à [Netlify](https://netlify.com)
2. Cliquer sur "Add new site" > "Import an existing project"
3. Connecter votre dépôt GitHub
4. Netlify détectera automatiquement les paramètres via `netlify.toml`
5. Cliquer sur "Deploy"

#### Option 2 : Via Netlify CLI
```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter
netlify login

# Initialiser le projet
netlify init

# Déployer
netlify deploy --prod
```

## 🔐 Variables d'environnement

Pour la connexion à la base de données Neon, ajouter dans l'interface Netlify (Site settings > Environment variables) :

```
DATABASE_URL=votre_url_neon_postgresql
NEON_API_KEY=votre_clé_api_neon
```

Pour le développement local, créer un fichier `.env` :
```env
DATABASE_URL=votre_url_neon_postgresql
NEON_API_KEY=votre_clé_api_neon
```

> ⚠️ **Important** : Ne jamais commiter le fichier `.env` (ajouté dans `.gitignore`)

## 🎨 Charte graphique

### Couleurs
- **Primaire** : Bleu apaisant (#3B82F6) - Confiance et sérieux
- **Secondaire** : Vert encourageant (#10B981) - Progression et succès
- **Accent** : Orange motivant (#F59E0B) - Énergie et créativité
- **Neutre** : Gris doux (#6B7280) - Clarté et lisibilité

### Principes de design
- Interface claire et épurée
- Typographie lisible (OpenDyslexic en option pour dyslexiques)
- Navigation intuitive
- Design responsive (mobile-first)
- Accessibilité WCAG AA

## 👥 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs via les Issues
- Proposer des améliorations
- Soumettre des Pull Requests

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📧 Contact

Pour toute question ou suggestion : [votre-email@example.com]

---

**Fait avec ❤️ pour aider les collégiens à réussir**
