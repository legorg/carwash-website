---
name: project-conventions
description: Use when writing or editing React components, Tailwind styles, or i18n translations for the carwash-website project. Covers component structure, styling rules, and translation patterns.
---

# Carwash Website — Projekt-Konventionen

## Komponenten-Struktur

- Funktionale React-Komponenten mit TypeScript (keine class components)
- Eine Komponente pro Datei, Dateiname = Komponentenname (PascalCase)
- Default export für die Komponente
- Kein prop-drilling über mehr als 2 Ebenen — bei Bedarf Context verwenden

```tsx
import { useTranslation } from 'react-i18next';

export default function MyComponent() {
  const { t } = useTranslation();

  return (
    <section id="section-id" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-primary-900 sm:text-4xl">{t('section.title')}</h2>
      </div>
    </section>
  );
}
```

## Tailwind CSS Regeln

- Ausschließlich Utility-Klassen — kein custom CSS, keine `@apply` Direktiven
- Mobile-first: Basis-Styles für Mobile, dann `sm:`, `md:`, `lg:` Breakpoints
- Farbpalette: `primary-50` bis `primary-900`, `primary` (Hauptfarbe), `primary-dark`
- Spacing: konsistente Werte (`py-20` für Sektionen, `px-4` für Container, `gap-6`/`gap-8` für Grids)
- Responsive Grids: `grid gap-6 md:grid-cols-2` oder `md:grid-cols-3`
- Buttons: `rounded-full` für primäre CTAs, `rounded-lg` für sekundäre
- Schatten: `shadow-sm` für subtil, `shadow-md` für Karten, `shadow-lg` für hervorgehobene Elemente

## i18n (react-i18next)

- Jeder sichtbare Text MUSS über `t('key')` kommen — keine hardcodierten Strings
- Verschachtelung: `section.subsection.key` (z.B. `pricing.programs.basic.name`)
- Arrays als Features-Listen: `t('key', { returnObjects: true }) as string[]`
- Neue Texte in ALLEN drei Dateien ergänzen: `de.json`, `en.json`, `bg.json`
- Deutsch ist die Fallback-Sprache
- Sprach-Dateien unter `src/i18n/locales/`

## Sektion-IDs (für Navigation)

| Sektion        | ID                 |
| -------------- | ------------------ |
| Hero           | `#hero`            |
| Öffnungszeiten | `#oeffnungszeiten` |
| Preise         | `#preise`          |
| Technologie    | `#technologie`     |
| Standort       | `#standort`        |
| Impressum      | `#impressum`       |

## Code-Sprache

- Variablen, Funktionen, Kommentare: **Englisch**
- Übersetzungsdateien (Inhalt): **Deutsch** (de.json), **Englisch** (en.json), **Bulgarisch** (bg.json)
- Commit-Messages: **Englisch** (Conventional Commits: `feat:`, `fix:`, `style:`, `chore:`)

## Testing

- Component-Tests: `ComponentName.test.tsx` neben der Komponente
- `renderWithI18n()` aus `src/test/test-utils.tsx` verwenden (nicht nacktes `render`)
- E2E-Tests: `e2e/` Verzeichnis mit `*.spec.ts` Dateien
- Vor jedem Commit: `pnpm test` muss grün sein

## Accessibility

- Interaktive Elemente brauchen `aria-label` wenn kein sichtbarer Text vorhanden
- Semantisches HTML: `<nav>`, `<section>`, `<footer>`, `<main>`
- Links zu externen Seiten: `target="_blank" rel="noopener noreferrer"`
- Bilder/SVGs: beschreibender `title` oder `aria-label`
