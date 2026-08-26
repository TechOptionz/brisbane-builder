# Brisbane Builder

Construction-management web app for Brisbane Builder Group, built from the
**Brisbane Builder** Claude Design canvas (phases 1–8). Next.js App Router +
Tailwind CSS v4, mobile-first with desktop enhancements.

## Screens

| Route                    | Design source | Description                                            |
| ------------------------ | ------------- | ------------------------------------------------------ |
| `/login`                 | 1b            | Sign-in screen (standalone, outside the app shell)     |
| `/portfolio`             | 1c            | Portfolio — cross-project KPIs, needs-attention cards  |
| `/project`               | 1d            | Project home — stage journey, hold point, risks        |
| `/notifications`         | 1f            | Notification centre with unread accents                |
| `/`                      | 3a            | Today — site command center (gate, priorities, stats)  |
| `/stages`                | 2a            | Project stages list with gate/hold states              |
| `/stages/slab`           | 2b/2c/2v/2aa  | Stage workspace — blocked-by, dependencies, history    |
| `/stages/slab/checklist` | 2d/2e/2g/2h   | Before-work checklist + item detail + evidence types   |
| `/stages/slab/gate`      | 2k/2l/2m/2z   | Gate detail, release request, approval, exception flow |
| `/tasks`                 | 3b/3c/3d      | Task list, detail and create form                      |
| `/site-log`              | 3e            | Daily site log — trades, delays, deliveries            |
| `/evidence`              | 3f/3g         | Photo capture, annotation tools, evidence library      |
| `/inspections`           | 3h/3i/3j/3z   | Inspections, readiness package, outcome, certifier view |
| `/defects`               | 3k/3l/3m/3af  | Defects register, quick capture, rectify/verify flow   |
| `/rfis`                  | 3q/3r/3s/3u   | RFIs, response thread, decisions register              |
| `/assistant`             | 8a/8b/8r      | Builder AI — insights, chat, sources panel             |
| `/documents`             | 4a/4t         | Document centre — search, OCR results, register table  |
| `/drawings`              | 4c/4e/4k      | Drawing register, revision history, superseded states  |
| `/compliance`            | 4m/4n         | Compliance register, certificates, approvals           |
| `/commercial`            | 5a/5s/5·D     | Commercial dashboard, budget, POs, variations          |
| `/handover`              | 6a/6g/6w      | Handover readiness, pack, checklist, keys              |
| `/warranty`              | 6r            | Warranty period, claims, notifications                 |
| `/client`                | 6n            | Client portal — milestones, documents, accept handover |
| `/admin`                 | 7a/7y         | Administration — users, permissions, audit log         |
| `/more`                  | 1b/3ae        | Mobile navigation hub for all modules                  |

## Design system

Tokens live in `app/globals.css` (`@theme`): cream canvas `#EBE8DF`, surface
`#F6F4EF`, navy `#0F2038`, gold `#BFA05A` / bronze `#8A6B2E`, plus
good/warn/bad/info status palettes. Fonts: **Marcellus** (display) and
**Hanken Grotesk** (body) via `next/font`.

Shared primitives are in `components/ui.tsx` (Badge, Card, StatTile,
ProgressBar, FlowSteps, buttons…), icons in `components/icons.tsx`, and the
responsive shell (mobile bottom tab bar + desktop navy sidebar) in
`components/app-shell.tsx`.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

All data is currently mock/static, matching the design's sample project
(18 Rivergum Street · BR-2026-018).
