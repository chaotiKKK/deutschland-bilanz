# Beitragen

## Erste Schritte

1. **Repository forken**
   ```bash
   gh repo fork USERNAME/deutschland-bilanz
   cd deutschland-bilanz
   ```

2. **Abhängigkeiten installieren**
   ```bash
   npm install
   ```

3. **Entwicklungsserver starten**
   ```bash
   npm run dev
   ```

4. **Änderungen testen**
   ```bash
   npm run test:all
   ```

## Daten hinzufügen

1. Ändern Sie `data/history_1981_2026.json` oder andere Datenbanken
2. Fügen Sie **immer** eine Quelle hinzu:
   ```json
   {"year":2026,"value":1360,"source":"Destatis VGR 2026"}
   ```
3. Validieren Sie die Daten:
   ```bash
   npm run data:validate
   ```

## Chart erstellen

1. Neue Datei in `sections/` erstellen
2. Verwenden Sie das `registerChart()`-Muster
3. Daten in `data/` ablegen
4. Chart-Tests hinzufügen

## Code-Style

```bash
npm run lint          # ESLint
npm run format        # Prettier
npm run format -- --check   # Nur prüfen
```

### Conventional Commits
- `feat:` – Neues Feature
- `fix:` – Bugfix
- `docs:` – Dokumentation
- `data:` – Datenänderung
- `style:` – Formatierung
- `refactor:` – Refactoring
- `test:` – Tests
- `chore:` – Sonstiges

## Testabdeckung
- Unit-Tests: ≥ 80% Abdeckung
- A11y: Keine Warnungen
- Lighthouse: ≥ 90 Performance

## Pull Request
1. Branch erstellen: `git checkout -b feat/mein-feature`
2. Änderungen committen
3. `npm run test:all` ausführen
4. `CHANGELOG.md` aktualisieren
5. Pull Request erstellen

## Lizenz
Alle Beiträge stehen unter CC-BY 4.0.
Quellenangaben sind Pflicht.
