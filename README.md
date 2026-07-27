# 🚀 Mission Control — Task Tracker

**Live app:** [https://basic-task-manager-smoky.vercel.app/](https://basic-task-manager-smoky.vercel.app/)

A gamified task manager built for team leads and anyone juggling multiple tasks across different deadlines. Tasks are framed as "missions" — with start dates, due dates, priority levels, and a playful sci-fi theme — and now sync automatically across every device you use.

---

## ✨ What it does

### 📡 Today's Briefing
The first thing you see when you open the app: every mission due today or overdue, front and center.

### 🚨 Overdue Alert Banner
A pulsing red banner appears automatically whenever any mission is overdue.

### 📅 This Week, by Day
A 7-day grid (Monday–Sunday) showing what's landing on each day of the current week, with Prev/Next navigation to look back or plan ahead. Tap any task directly here to mark it complete — great for a weekly check-in.

### 🗓️ Calendar Grid (Month View)
A full month calendar. Each date shows:
- 🟢 **Green dots** — missions that **start** that day
- 🔴 **Red dots** — missions **due** that day

Switch months using the tabs above the calendar, each showing a live task count.

### 🚀 Launch a New Mission (Add Task Form)
Add a task with:
- **Mission name**
- **Description** (optional notes, links, or context)
- **Start date**
- **Due date**
- **Thrust (priority)** — High 🔴 / Medium 🟡 / Low 🟢

Tasks auto-file into the correct month by due date. The form won't let you set a start date after the due date.

### 🌌 Mission Progress Runway
A rocket 🚀 that moves toward a planet 🪐 based on what percentage of the selected month's missions are complete.

### 📋 All Missions, by Due Date
A single list of every mission ever added, across every month, earliest due date first.

### ✅ Completed Missions
A dedicated list of everything already finished, most recently completed first.

### 🔥 Streaks & 🎮 XP / Levels
- Completing a mission earns **+10 XP**.
- **Level** increases as XP accumulates, shown with a progress bar.
- A **daily streak** tracks consecutive days with at least one completed mission.

---

## 🔗 Cross-device sync

The app now syncs your missions across every device — laptop, phone, tablet — using a **Sync Code**.

- On first open, you'll be asked to enter or generate a **Sync Code** (e.g. `orbit-7429`).
- Enter the **exact same code** on every device to see the same missions everywhere.
- This is **not a secure password** — it's just a shared key so your devices find the same data. Keep it reasonably private, but don't reuse a real account password.
- A small badge below the header shows sync status: a **green dot** means it's connected and synced; a **red dot** means it's temporarily offline and only saving to that device until connection returns.
- The app also keeps a local cache on each device, so it keeps working even with no internet — it re-syncs automatically once you're back online.

---

## 🎨 Design

A dark, cosmic "mission control" theme with a starfield background:
- **High priority** → red/coral
- **Medium priority** → amber
- **Low priority** → green
- **Start dates** → green
- **Due dates** → red
- **XP / streak / levels** → purple accents

---

## 🛠️ How it's built

### Frontend
- Pure **HTML, CSS, and JavaScript** — no frameworks, no build step.
- Fonts: Space Grotesk (headings), Inter (body text), JetBrains Mono (dates/data), via Google Fonts.

### Backend
- A serverless API function (`api/data.js`) running on **Vercel**, using Node.js and the official **MongoDB Node.js driver**.
- Handles two operations:
  - `GET /api/data?key=<synccode>` — fetches that sync code's tasks and progress.
  - `POST /api/data` — saves tasks and progress for a given sync code (upserts).

### Database
- **MongoDB Atlas** (free M0 tier).
- Database: `mission_control`, collection: `userdata`.
- Each document is keyed by `_id` = your Sync Code, and stores `tasks`, `progress`, and `updatedAt`.

---

## 📄 File structure

```
Basic-Task-Manager/
├── index.html        # the entire frontend — markup, styles, and logic in one file
├── package.json       # declares the mongodb dependency for the backend function
└── api/
    └── data.js         # serverless function: reads/writes task data to MongoDB
```

---

## 🚢 Deployment & infrastructure

- **Hosting:** Vercel, connected directly to this GitHub repository. Any push to `main` automatically redeploys the live site.
- **Database:** MongoDB Atlas, connected via a `MONGODB_URI` environment variable set in Vercel's Project Settings (never committed to this repo).
- **Network access:** MongoDB Atlas is configured to accept connections from any IP (`0.0.0.0/0`), which is required since Vercel's serverless functions don't use a fixed IP address. Actual security comes from the database username/password, not the IP restriction.

---

## ⚠️ Known limitations

- The Sync Code is a convenience key, not a secure login — anyone with your exact code could see the same task list. Keep it private.
- No push notifications — as a web app, it can't send background alerts like a native app. The "Today's Briefing" section guarantees anything due or overdue is surfaced the moment you open the page, and the daily streak is designed to build a habit of checking in regularly.
- Vercel Drop-style single-file deploys are no longer used; deployment is exclusively via this GitHub repo + Vercel Git integration.

---

## 🔮 Possible future improvements
- Real user accounts/authentication instead of a shared Sync Code
- Recurring tasks
- Sub-tasks / checklists within a mission
- Export/import as backup
