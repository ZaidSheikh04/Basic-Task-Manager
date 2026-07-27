# 🚀 Mission Control — Task Tracker

**Live app:** [https://basic-task-manager-smoky.vercel.app/](https://basic-task-manager-smoky.vercel.app/)

A single-page, gamified task manager built for team leads and anyone juggling multiple tasks across different deadlines. Instead of a plain to-do list, tasks are framed as "missions" — with start dates, due dates, priority levels, and a playful sci-fi theme designed to keep you motivated and on top of everything, week over week.

---

## ✨ What it does

Mission Control organizes your tasks by month, week, and day, and makes sure nothing due or overdue ever slips past you unnoticed.

### 📡 Today's Briefing
The first thing you see when you open the app: every mission that's due today or overdue, front and center, so you always know what needs attention right now.

### 🚨 Overdue Alert Banner
A pulsing red banner appears automatically whenever any mission is overdue, so it can't be missed.

### 📅 This Week, by Day
A 7-day grid (Monday–Sunday) showing exactly what's landing on each day of the current week. Includes Prev/Next navigation to look back or plan ahead. Perfect for a weekly check-in — tap any task directly in this view to mark it complete.

### 🗓️ Calendar Grid (Month View)
A full month calendar grid. Each date shows:
- 🟢 **Green dots** — missions that **start** on that day
- 🔴 **Red dots** — missions **due** on that day

Switch between months using the month tabs above the calendar, each showing a live task count.

### 🚀 Launch a New Mission (Add Task Form)
Add a new task with:
- **Mission name** — the task title
- **Description** — optional notes, context, or links
- **Start date**
- **Due date**
- **Thrust (priority)** — High 🔴 / Medium 🟡 / Low 🟢

Tasks are automatically filed into the correct month based on their due date. Validation prevents a start date from being set after the due date.

### 🌌 Mission Progress Runway
A visual rocket 🚀 that moves along a runway toward a planet 🪐, based on what percentage of the selected month's missions are complete.

### 📋 All Missions, by Due Date
A single running list of every mission you've ever added, across every month, sorted with the earliest due date first.

### ✅ Completed Missions
A dedicated list of everything you've already finished, most recently completed first — a satisfying record of what's been knocked out.

### 🔥 Streaks & 🎮 XP / Levels
- Completing a mission earns **+10 XP**.
- Your **level** increases as XP accumulates, shown with a progress bar.
- A **daily streak** counter tracks consecutive days with at least one completed mission, encouraging a daily check-in habit.

---

## 🎨 Design

A dark, cosmic "mission control" theme with a starfield background, built to feel motivating and engaging rather than like a plain corporate tracker:
- **High priority** → red/coral
- **Medium priority** → amber
- **Low priority** → green
- **Start dates** → green
- **Due dates** → red
- **XP / streak / levels** → purple accents

---

## 🛠️ How it's built

- Pure **HTML, CSS, and JavaScript** — no frameworks, no build step.
- Fonts: Space Grotesk (headings), Inter (body text), JetBrains Mono (dates/data), loaded via Google Fonts.
- **Data storage:** Uses the browser's `localStorage` to save all tasks and progress automatically. Your data lives in the browser/device you use — it does not sync across different browsers or devices.

---

## ⚠️ Known limitations

- **No cross-device sync** — since it's `localStorage`-based, always open the app from the same browser and device to see your saved missions.
- **No push notifications** — as a static web page, it can't send background notifications like a native app. Instead, the "Today's Briefing" section guarantees that anything due or overdue is surfaced immediately the moment you open the page, and the daily streak mechanic is designed to build the habit of checking in regularly (e.g., every weekend).

---

## 🚢 Deployment

This app is deployed on **Vercel**, connected directly to this GitHub repository. Any update pushed to `index.html` in this repo automatically redeploys the live site at the link above — no manual redeployment needed.

---

## 📄 File structure

```
Basic-Task-Manager/
└── index.html   # the entire app — markup, styles, and logic in one file
```
