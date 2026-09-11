# CHANGELOG

## [2.2.0] - 2026-09-11
### Added
- Variable Fonts (Inter, Source Serif 4) mit Typografie-Skala
- Container Queries für responsive Karten
- Scroll-Linked Animations (fadeInUp via animation-timeline)
- Share-URL-System (serializeState, restoreState, shareLink)
- Keyboard-Shortcuts (Alt+1-13, Alt+t/c/s/h)
- Code-Splitting via dynamische Imports
- IndexedDB (BilanzDB) für Offline-Caching
- Privacy-Analytics Klasse (kein Drittanbieter)
- Service Worker Registrierung mit Update-Benachrichtigung
- PWA Manifest (manifest.json) mit Icons
- Skeleton Loading für Chart-Boxen
- High-Contrast-Modus (prefers-contrast: more)
- View Transitions API
- Verbessertes Selftest (12 neue Checks)

### Changed
- Typography-Scale von statisch auf clamp()-basiert
- CSS: Container Queries ergänzt
- JavaScript: Modularisiert mit lazy sections

### Fixed
- Service Worker Cache-Fallback
- Share-URL Encoding für Sonderzeichen

## [2.1.0] - 2026-09-11
### Added
- Geschichte 1981–2026 (46 Datenpunkte)
- Steuerrechner (Brutto-Netto)
- EU-Vergleich (27 Mitgliedsstaaten)
- Inflationsrechner (Kaufkraft seit 1981)
- Sektorszenario-Engine (Monte-Carlo-Simulation)
- Regierungs-Zeitstrahl (seit 1949)
- Terminologie-Farbkodierung (.term-source, .term-loaded, .term-correction)

## [2.0.0] - 2026-09-11
### Added
- 51 interaktive SVG-Charts
- 6 Themes
- Zoom, Textgröße, Schriftart
- CSV-Export
- Selbsttest-System (?selftest)
- Dark Mode mit smooth transition
- content-visibility: auto
- IntersectionObserver Lazy Loading
- requestIdleCallback
- svgAccessible() A11y-Helper

## [1.0.0] - 2026-08-25
### Initial Release
- Erste Version
- 13 Sektionen mit Daten
- Responsive Design
- GitHub Pages Deployment
