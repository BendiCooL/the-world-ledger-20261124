// Render front.html to entry.png (1024x1024) with Playwright chromium.
// Usage: node render.mjs [html-path] [png-path]
import { chromium } from '/home/hatch/workspace/makefun/shots-tool/node_modules/playwright/index.mjs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = process.argv[2] ?? path.join(here, 'front.html');
const pngPath = process.argv[3] ?? path.join(here, 'entry.png');

const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1024, height: 1024 }, deviceScaleFactor: 1 });
  await page.goto('file://' + htmlPath, { waitUntil: 'load' });
  await page.waitForTimeout(300);
  await page.screenshot({ path: pngPath });
  console.log('wrote', pngPath);
} finally {
  await browser.close();
}
