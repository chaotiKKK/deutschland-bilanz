# Die Bilanz der Republik

**Die Bilanz der Republik** — Haushaltsbuch über Ausgaben, Steuern, Schulden, Soziales und Energie Deutschlands 2014–2026. Alle Zahlen mit Quellen.

[![CI](https://github.com/chaotiKKK/deutschland-bilanz/actions/workflows/ci.yml/badge.svg)](https://github.com/chaotiKKK/deutschland-bilanz/actions)
[![APK](https://github.com/chaotiKKK/deutschland-bilanz/actions/workflows/build-apk.yml/badge.svg)](https://github.com/chaotiKKK/deutschland-bilanz/actions/workflows/build-apk.yml)
[![License: CC-BY 4.0](https://img.shields.io/badge/License-CC--BY%204.0-blue.svg)](LICENSE)

## 📥 Download

| Format | Datei | Größe | Beschreibung |
|--------|-------|-------|--------------|
| **HTML** | [index.html](https://raw.githubusercontent.com/chaotiKKK/deutschland-bilanz/main/index.html) | ~245 KB | Komplette Webseite, offline-fähig |
| **APK** | [Releases](https://github.com/chaotiKKK/deutschland-bilanz/releases) | ~5 MB | Android-App (API 24+) |
| **Download-Seite** | [download.html](https://github.com/chaotiKKK/deutschland-bilanz/blob/main/download.html) | — | Auswahl HTML oder APK |

## Schnellstart

```bash
git clone https://github.com/chaotiKKK/deutschland-bilanz.git
cd deutschland-bilanz
npm install
npm run dev
```

## Features

- 51 interaktive SVG-Charts
- Geschichte 1981–2026 (46 Datenpunkte)
- Steuerrechner, EU-Vergleich, Inflationsrechner, Sektorszenario-Engine
- Terminologie-Farbkodierung
- 6 Themes (Papier, Dunkel, Kontrast, Sepia, Ozean, Tanne)
- Offline-fähig (Service Worker + PWA)
- Android APK (WebView mit Web-Engine)
- Barrierefrei (WCAG 2.2 AA)
- GitHub Pages Deployment

## Downloads

- **HTML**: `index.html` direkt herunterladen
- **APK**: [GitHub Releases](https://github.com/chaotiKKK/deutschland-bilanz/releases)
- **Download-Seite**: `download.html` besuch

## Technologie

- Vanilla HTML/CSS/JS (kein Framework)
- Custom SVG Rendering
- Vite (Development), GitHub Pages (Deployment)
- Android WebView (APK Build)
- Jest, axe-core, Lighthouse CI (Testing)
- GitHub Actions (CI/CD)

## Build

```bash
# Android APK bauen
cd android
chmod +x gradlew
./gradlew assembleRelease
```

## Lizenz

Alle Inhalte stehen unter **CC-BY 4.0**. Quellenangaben sind Pflicht.
Siehe [LICENSE](LICENSE).

## Beitragen

Siehe [CONTRIBUTING.md](CONTRIBUTING.md).

## Datenschutz

Kein Drittanbieter-Tracking. Kein Cookie-Banner. Privacy-first Analytics.
Siehe [PRIVACY.md](PRIVACY.md).
