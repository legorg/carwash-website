# Carwash Website

Statische One-Pager-Website für eine Waschstraße.

## Tech Stack

- **Framework:** React 19 mit TypeScript
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS 4 (via Vite-Plugin)
- **Linting:** ESLint mit React Hooks & React Refresh Plugins
- **Formatting:** Prettier
- **Git Hooks:** Husky + lint-staged (Pre-commit)
- **Container:** Docker (Multi-Stage Build mit Nginx)
- **CI/CD:** GitHub Actions (CI, GitHub Pages Deploy, Docker Image Push)

## Befehle

| Befehl              | Beschreibung                                         |
| ------------------- | ---------------------------------------------------- |
| `pnpm dev`          | Entwicklungsserver starten                           |
| `pnpm build`        | TypeScript kompilieren & Produktions-Build erstellen |
| `pnpm preview`      | Produktions-Build lokal ansehen                      |
| `pnpm lint`         | ESLint ausführen                                     |
| `pnpm format`       | Code mit Prettier formatieren                        |
| `pnpm format:check` | Formatierung prüfen (ohne Änderungen)                |

## Docker

```bash
# Image bauen
docker build -t carwash-website .

# Container starten (Port 8080)
docker run -p 8080:80 carwash-website
```

## Projektstruktur

```
src/
  main.tsx              # Entry Point
  App.tsx               # Haupt-Komponente
  index.css             # Globale Styles / Tailwind Directives
  assets/               # Statische Assets (Bilder, Icons etc.)
public/                 # Öffentliche statische Dateien
index.html              # HTML-Template
.github/workflows/
  ci.yml                # CI: Lint, Format-Check, Build
  deploy.yml            # Deploy zu GitHub Pages
  docker.yml            # Docker Image bauen & nach ghcr.io pushen
```

## CI/CD

- **CI** läuft bei jedem Push und PR auf `main` (Lint, Format-Check, Build)
- **Deploy** läuft bei Push auf `main` und deployed zu GitHub Pages
- **Docker** läuft bei Push auf `main` und bei Tags (`v*`), pushed nach `ghcr.io`

## Konventionen

- Komponenten als funktionale React-Komponenten mit TypeScript
- Styling ausschließlich über Tailwind CSS Utility-Klassen
- Deutsche Inhalte, Code und Kommentare auf Englisch
- Alles in einer Single-Page-Struktur (kein Routing)
- Code muss vor dem Commit formatiert sein (wird durch Husky erzwungen)
