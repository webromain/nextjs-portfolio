# Portfolio — Romain POISSON

Portfolio personnel de développeur Full Stack, construit avec **Next.js 16** (App Router), **React 19**, **Tailwind CSS** et déployé via **Docker** + **Portainer** avec auto-déploiement sur push GitHub.

**Production** : [portfolio.romainpoisson.com](https://portfolio.romainpoisson.com)

---

## Stack technique

| Catégorie | Technologie |
|-----------|-------------|
| **Framework** | Next.js 16.2 (App Router, `output: export`) |
| **UI** | React 19.2 |
| **Bundler** | Turbopack (intégré Next.js) |
| **Routing** | File-based — dossier `app/` |
| **CSS** | Tailwind CSS 3.4 + CSS variables custom |
| **Linting** | ESLint 9 + eslint-plugin-react-hooks |
| **Conteneurisation** | Docker multi-stage (node:22-alpine + nginx:stable-alpine) |
| **Serveur prod** | nginx (fichiers statiques) |
| **Reverse proxy** | nginx-proxy + Let's Encrypt (HTTPS auto) |
| **Orchestration** | Docker Compose + Portainer |
| **CI/CD** | Git Poller (polling GitHub API toutes les 5 min) |

---

## Démarrage rapide

**Prérequis** : Node.js ≥ 20 LTS, npm ≥ 9

```bash
git clone https://github.com/webromain/react-portfolio.git
cd react-portfolio
npm install
npm run dev
```

L'app est accessible à **http://localhost:3000**

### Commandes

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement (Turbopack, HMR) |
| `npm run build` | Build statique → dossier `out/` |
| `npm run start` | Prévisualisation du build local |
| `npm run lint` | Vérification ESLint |

> En production, le git-poller lance `npm run build` dans Docker automatiquement à chaque push. Tu n'utilises que `npm run dev` en local.

---

## Fonctionnalités

- Affichage dynamique des projets avec galerie d'images interactive
- Routing file-based Next.js (App Router)
- SSG — pages pré-générées au build pour de meilleures performances et SEO
- Design responsive (mobile, tablette, desktop)
- Thème clair / sombre persisté sans flash au chargement
- Animation typewriter sur le header
- Page CV avec redirection PDF
- Formulaire de contact (backend en cours)
- Déploiement Docker avec rebuild auto sur push GitHub

---

## Structure des routes

```
app/
├── layout.jsx           → Layout global (thème, ThemeToggle)
├── page.jsx             → / (Header + Projets + Contact + Career + About)
├── projects/[slug]/
│   └── page.jsx         → /projects/:slug (détail projet)
└── cv/
    └── page.jsx         → /cv (redirection PDF)
```

---

## Guide développement

### Ajouter un projet

Éditer `src/modules/pfProjectsList/projects.json` et déposer les images dans `public/assets/img/projects/`.

### Ajouter une page

```bash
mkdir app/ma-page
```

```jsx
// app/ma-page/page.jsx
import Navigation from '../../src/modules/pfNavigation/navigation'
import Footer from '../../src/modules/pfFooter/footer'

export default function MaPage() {
  return (
    <>
      <Navigation />
      <section className="section">...</section>
      <Footer />
    </>
  )
}
```

### Ajouter un composant

```bash
mkdir src/modules/pfMonModule
```

```jsx
// src/modules/pfMonModule/monModule.jsx
'use client'              // ← si useState / useEffect / events
import './monModule.css'

export default function MonModule() {
  return <section id="mon-module" className="section">...</section>
}
```

### Règle "use client"

| Besoin | Directive |
|--------|-----------|
| `useState`, `useEffect`, événements DOM | `'use client'` obligatoire |
| Composant purement HTML / lecture de données | Aucune (Server Component par défaut) |

### Conventions

| Type | Convention | Exemple |
|------|-----------|---------|
| Composants React | camelCase (fichier) | `monModule.jsx` |
| Dossiers modules | camelCase prefixé `pf` | `pfMonModule/` |
| Fichiers CSS | même nom que le composant | `monModule.css` |
| Classes CSS | kebab-case | `.mon-module-title` |

---

## FAQ

| Problème | Solution |
|----------|----------|
| Le serveur ne démarre pas | `rm -rf node_modules .next && npm install` |
| Les projets ne s'affichent pas | Vérifier la syntaxe JSON de `projects.json` |
| Les images manquent | Vérifier le chemin dans `public/assets/img/projects/` |
| Le thème ne se sauvegarde pas | Vérifier que localStorage n'est pas bloqué |
| Le build Docker échoue | `docker build -t test .` + `docker logs portfolio-app` |
| Le git-poller ne détecte rien | `docker logs portfolio-git-poller` (rate-limit GitHub : 60 req/h) |

---

## Licence

Projet personnel — Romain POISSON © 2026

**Version** : 3.0.0 · **Dernière mise à jour** : Juin 2026
