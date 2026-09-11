# CHANGELOG

## [2.3.0] - 2026-09-11
### Added
- Neues Kapitel XIV „Staat & Politik" (Sanktions-Timeline Pakete 6–21, Schuldenbremse 2009–2026, EZB-Leitzins 1999–2026, Rentenstruktur, Länderfinanzausgleich) + Inline-Verweise aus III/IV/VII/Verträge
- 46-Jahre-Timeline 1981–2026: History-Slider über alle 46 Jahre einzeln (HIST_DATA_46, Intl.NumberFormat de-DE, Scroll-Dot-Navigation)
- Neues Kapitel XV „Staatsaufbau": 5 Organigramme (Bundesregierung, Bund→Länder→Gemeinden, EU, NATO, BMF-Ketten) + Inline-Links
- 4 neue Themes = 10 total (hochkontrast-hell, neutralgrau, solarized, solarized-dark), voll verdrahtet (THEME_ORDER, Labels, Buttons, Sanitizer)
- Web Component `<bilanz-chart>` (Custom Element, kein Shadow DOM, Fallback)
- CSS: `:has()`-Varianten, `color-mix()`-Hover (mit @supports-Fallback), `text-wrap: balance`
- `<dialog>` für Art. 115 GG Volltext (mit Fallback)
- View Transitions beim Theme-Wechsel (mit Fallback)
- Speculation Rules für interne Anker
- Selftest: 9 neue Checks (XIV/XV, 4 Staat-Charts, 5 Organigramme, HIST-46, Timeline-Dots, 10 Themes, Dialog, Custom Element)

### Fixed
- Selftest-Label Vertrags-Accordions (13) → (15)

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
