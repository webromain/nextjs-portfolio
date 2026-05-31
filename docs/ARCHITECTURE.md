# Architecture du projet

## Arborescence

```
react-portfolio/
├── next.config.mjs                # Next.js (output: export, images unoptimized)
├── package.json                   # Dépendances et scripts
├── tailwind.config.js             # Tailwind CSS (content: app/** + src/**)
├── postcss.config.js              # PostCSS
├── eslint.config.js               # ESLint 9 flat config
├── Dockerfile                     # multi-stage: node:22-alpine + nginx:stable-alpine
├── docker-compose.yml             # git-poller uniquement
├── .gitignore                     # Exclusions (.next, out)
│
├── app/                           # Next.js App Router
│   ├── layout.jsx                 # Root layout (thème, ThemeToggle)
│   ├── page.jsx                   # Route "/"
│   ├── projects/[slug]/
│   │   └── page.jsx               # Route "/projects/:slug"
│   └── cv/
│       └── page.jsx               # Route "/cv" → redirect PDF
│
├── public/                        # Assets servis à la racine
│   ├── favicon.png
│   ├── romain-poisson-cv.pdf
│   └── assets/img/
│       ├── logos/                 # Logo navigation
│       └── projects/              # Images projets (un dossier par projet)
│
├── src/
│   ├── index.css                  # Variables CSS + Tailwind + classes globales
│   └── modules/
│       ├── pfHeader/              # Header typewriter — "use client"
│       ├── pfNavigation/          # Navigation desktop/mobile — "use client"
│       ├── pfFooter/              # Footer — Server Component
│       ├── pfAbout/               # Section About — Server Component
│       ├── pfCareer/              # Section Career — Server Component
│       ├── pfContact/             # Formulaire contact — "use client"
│       ├── pfProjectsList/
│       │   ├── projectsList.jsx   # Grille — Server Component
│       │   ├── projectCard.jsx    # Carte — "use client"
│       │   ├── imageGallery.jsx   # Galerie — "use client"
│       │   ├── imageLoader.js     # Résolution URLs images
│       │   ├── projects.json      # Données projets
│       │   └── details/
│       │       └── projectDetail.jsx  # Détail — "use client"
│       └── themeToggle/           # Toggle thème — "use client" + Portal
│
├── scripts/
│   ├── setup.ps1
│   ├── git-poller.sh
│   └── webhook-server.js
└── docs/
```

---

## Flux de données

```
app/layout.jsx
├── <Script strategy="beforeInteractive"> → applique thème avant rendu
├── <div id="root">
│   └── {children}
│       ├── app/page.jsx → pfHeader + pfProjectsList + pfContact + pfCareer + pfAbout + pfFooter
│       └── app/projects/[slug]/page.jsx → pfNavigation + projectDetail(slug) + pfFooter
└── <ThemeToggle> via createPortal(document.body)  ← hors #root pour position:fixed
```

---

## Routing

Next.js **App Router** — file-based, génération statique complète.

| Route             | Fichier                        | Description        |
|-------------------|--------------------------------|--------------------|
| `/`               | `app/page.jsx`                 | Page d'accueil     |
| `/projects/:slug` | `app/projects/[slug]/page.jsx` | Détail projet      |
| `/cv`             | `app/cv/page.jsx`              | Redirect PDF       |

Les slugs sont générés via `generateStaticParams()` depuis `projects.json`. Output 100 % statique (`out/`).

---

## Thème clair / sombre

1. `app/layout.jsx` injecte un script `beforeInteractive` qui lit `localStorage('theme')` et ajoute la classe `light` sur `<html>` avant hydration → zéro flash
2. `ThemeToggle` bascule `.light` au clic et persiste dans `localStorage`
3. `ThemeToggle` est rendu via `createPortal(document.body)` — hors de `#root` qui a `backdrop-filter`, ce qui préserve `position: fixed`
4. Variables CSS dans `:root` et `:root.light` gèrent tous les changements de couleur automatiquement

---

## Styles et design

### Variables CSS (src/index.css)

| Variable | Dark | Light |
|----------|------|-------|
| `--white` | `#f0f0f0` | `#1a1a1a` |
| `--primary` | `#0285be` | `#0285be` |
| `--secondary` | `#c3324f` | `#b03654` |
| `--primary-darker` | `#000f17` | `#e8edf0` |
| `--text-muted` | `rgba(240,240,240,.85)` | `rgba(30,30,30,.75)` |
| `--input-bg` | `rgba(255,255,255,.05)` | `rgba(255,255,255,.7)` |

### Classes globales partagées

| Classe | Usage |
|--------|-------|
| `.section` | Padding standardisé |
| `.section-title` | Titre `$ Titre` |
| `.card` / `.card--soft` | Glassmorphism |
| `.badge` | Pill technologies |
| `.auto-grid` | Grille responsive |

### Breakpoints

| Taille   | Breakpoint |
|----------|------------|
| Mobile   | < 768px    |
| Tablette | < 1024px   |
