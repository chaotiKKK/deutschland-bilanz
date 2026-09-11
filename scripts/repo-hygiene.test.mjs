import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = rel => fs.readFileSync(path.join(ROOT, rel), 'utf8');
const exists = rel => fs.existsSync(path.join(ROOT, rel));

// Extrahiert Datei-Referenzen aus einem npm-Skript (Pfade, keine Binaries/Flags/URLs/Globs).
function scriptPathTokens(script) {
  return String(script)
    .split(/[\s;&|]+/)
    .map(t => t.replace(/^["']|["']$/g, '').replace(/[;,)]+$/g, ''))
    .filter(t => t.length > 0)
    .filter(t => !t.startsWith('-'))
    .filter(t => !t.includes('*'))
    .filter(t => !/^https?:/i.test(t))
    .filter(t => !/^\.[a-z0-9]+$/i.test(t)) // reine Extension wie ".js" ist kein Pfad
    .filter(t =>
      t.startsWith('./') || t.startsWith('/') || t.endsWith('/') ||
      t.includes('/') || /\.(m?js|cjs|json|ya?ml|html|css|ts)$/i.test(t)
    );
}

test('package.json-Skripte verweisen nur auf existierende Repo-Dateien', () => {
  const pkg = JSON.parse(read('package.json'));
  const missing = [];
  for (const [name, cmd] of Object.entries(pkg.scripts || {})) {
    for (const tok of scriptPathTokens(cmd)) {
      const rel = tok.replace(/^\.\//, '').replace(/\/$/, '');
      if (!exists(rel)) missing.push(`${name}: ${tok}`);
    }
  }
  assert.deepEqual(missing, [], `Skripte mit fehlenden Dateien:\n${missing.join('\n')}`);
});

test('kein USERNAME-Platzhalter in package.json, README.md, workflows', () => {
  const wfDir = path.join(ROOT, '.github', 'workflows');
  const files = ['package.json', 'README.md',
    ...fs.readdirSync(wfDir).filter(f => f.endsWith('.yml')).map(f => `.github/workflows/${f}`)];
  const hits = files.filter(f => read(f).includes('USERNAME'));
  assert.deepEqual(hits, [], `USERNAME-Platzhalter gefunden in: ${hits.join(', ')}`);
});

test('package.json-Version stimmt mit neuester CHANGELOG-Version überein', () => {
  const pkg = JSON.parse(read('package.json'));
  const m = read('CHANGELOG.md').match(/^## \[(\d+\.\d+\.\d+)\]/m);
  assert.ok(m, 'keine Version der Form "## [x.y.z]" in CHANGELOG.md gefunden');
  assert.equal(pkg.version, m[1], `package.json=${pkg.version}, CHANGELOG=${m[1]}`);
});
