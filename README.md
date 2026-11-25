# The World Ledger — Tuesday 24 November 2026

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/BendiCooL/the-world-ledger-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/BendiCooL/the-world-ledger-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

Entry for the [make.fun competition "Sum up 24 November's world news in one image"](https://make.fun/bounty/news-image-20261124) (news-image-20261124, $100 prize pool).

## The front page

A fresh 1024×1024 broadsheet, **The World Ledger**, summing up the world news of
Tuesday 24 November 2026 — every main story first reported that day, verified
against Reuters, Associated Press and Just Security's Early Edition:

- **Lead — Riyadh:** a Houthi drone hits the capital's tallest tower, the PIF
  headquarters in the King Abdullah Financial District; eleven hurt, the second
  strike on the tower in five days.
- **Gaza:** an Israeli strike kills Hamas internal security chief Naeem Abu Nahel.
- **Ukraine:** a Russian overnight strike on Zaporizhzhia kills two and wounds forty.
- **Markets:** Nvidia slides as Congress probes the White House's role in Jensen
  Huang's return as chief executive.
- **Sport:** Senegal win back the Africa Cup of Nations title in court (CAS).
- **Iraq:** Baghdad orders the takeover of Kurdish oilfields after a smuggling inquiry.

A dated "Earlier this week" panel carries the big stories of 21–23 November
(the sinking of the Russian corvette *Merkury* off Libya, Huang's reinstatement,
NATO's space-defence vow, the COP31 collapse, BepiColombo reaching Mercury) —
never as the day's news.

## How it is built

- `front.html` — the front page, written by hand (HTML + CSS + one original SVG
  illustration of the Riyadh skyline). No AI image generation.
- `render.mjs` — renders `front.html` to `entry.png` with Playwright chromium.
- `main.ts` — the entrypoint (Node 22, standard library only). It copies the
  pre-rendered `entry.png` into the output directory, deterministically: two runs
  write byte-identical files. It never deletes the output directory itself.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/entry.png` is a 1024×1024 PNG, well under the 1 MiB limit.
