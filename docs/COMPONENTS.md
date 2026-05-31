# Modules et composants

## pfHeader — "use client"

**Chemin** : `src/modules/pfHeader/header.jsx`

Header affiché uniquement sur la page d'accueil. Inclut `pfNavigation` en interne.

- Animation typewriter progressive (titre → h3 → h4 → paragraphe)
- Liens sociaux (GitHub, LinkedIn, Contact, CV)
- Badges de compétences

**Props** : aucune

---

## pfNavigation — "use client"

**Chemin** : `src/modules/pfNavigation/navigation.jsx`

Navigation desktop + mobile (burger menu avec portal). Utilisée sur les pages secondaires et incluse dans pfHeader sur l'accueil.

- `usePathname()` (next/navigation) pour détecter les changements de route
- Bouton fullscreen + popup confirmation

---

## pfProjectsList — Server Component

**Chemin** : `src/modules/pfProjectsList/projectsList.jsx`

Lit `projects.json` directement (pas de `useState`/`useEffect`) et rend la grille de `ProjectCard`.

---

## ProjectCard — "use client"

**Chemin** : `src/modules/pfProjectsList/projectCard.jsx`

| Prop | Type | Description |
|------|------|-------------|
| `project` | `object` | Objet projet (voir [GALLERY.md](GALLERY.md)) |

Utilise `next/link` (`<Link href="/projects/{slug}">`).

---

## ProjectDetail — "use client"

**Chemin** : `src/modules/pfProjectsList/details/projectDetail.jsx`

Reçoit `slug` en prop depuis `app/projects/[slug]/page.jsx`.

| Prop | Type | Description |
|------|------|-------------|
| `slug` | `string` | Slug généré depuis le `name` du projet |

Utilise `useRouter()` (next/navigation) pour le bouton retour. Si `demoUrl` (HTTPS), affiche un iframe sandboxé.

---

## ImageGallery — "use client"

**Chemin** : `src/modules/pfProjectsList/imageGallery.jsx`

| Prop | Type | Description |
|------|------|-------------|
| `images` | `string[]` | URLs depuis `public/assets/img/projects/` |
| `projectName` | `string` | Attribut alt |

Navigation flèches, vignettes cliquables, compteur. Voir [GALLERY.md](GALLERY.md).

---

## ThemeToggle — "use client"

**Chemin** : `src/modules/themeToggle/themeToggle.jsx`

`<button>` fixe rendu via `createPortal(document.body)` — hors de `#root` pour contourner le `backdrop-filter` qui casse `position: fixed`. Guard `mounted` pour éviter l'erreur SSR.

---

## pfContact — "use client"

**Chemin** : `src/modules/pfContact/contact.jsx`

Formulaire désactivé (backend non connecté). Anti-spam : cooldown 5s + limite 3 msg/jour via `localStorage`.

---

## pfAbout — Server Component

**Chemin** : `src/modules/pfAbout/about.jsx`

Strip profil + stats + stack (badges globaux `.badge`) + objectifs + valeurs.

---

## pfCareer — Server Component

**Chemin** : `src/modules/pfCareer/career.jsx` + `experience.jsx`

Timeline d'expériences. Hover CSS `:has(.experience:hover)` swipe `--primary` → `--secondary`.

---

## pfFooter — Server Component

**Chemin** : `src/modules/pfFooter/footer.jsx`

---

## Graphe de dépendances

```
app/layout.jsx
├── ThemeToggle → createPortal(document.body)
└── {children}
    ├── app/page.jsx
    │   ├── pfHeader → pfNavigation
    │   ├── pfProjectsList → ProjectCard[] → next/link → /projects/:slug
    │   ├── pfContact
    │   ├── pfCareer → Experience[]
    │   ├── pfAbout
    │   └── pfFooter
    └── app/projects/[slug]/page.jsx
        ├── pfNavigation
        ├── ProjectDetail(slug) → ImageGallery
        └── pfFooter
```
