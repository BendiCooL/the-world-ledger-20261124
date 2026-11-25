// The World Ledger — front page of Tuesday 24 November 2026.
// Copies the pre-rendered front page (entry.png) into the output directory.
// Deterministic: the same bytes are written on every run. No network.
import { copyFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const repoDir = path.dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Never delete the output directory itself: in the grader it is a mount point.
// Just make sure it exists and write our one file into it.
mkdirSync(outDir, { recursive: true });
copyFileSync(path.join(repoDir, 'entry.png'), path.join(outDir, 'entry.png'));
console.log('wrote', path.join(outDir, 'entry.png'));
