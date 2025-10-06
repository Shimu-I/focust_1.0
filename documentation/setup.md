## 🧠 Development Log — Focust_1.0

### 🗓️ **Date:** October 6, 2025

**Author:** Shimu

---

### 🧩 **Environment Setup**

**System Info**

- **OS:** Linux (Ubuntu)
- **Node.js:** `v20.19.5`
- **npm:** `v10.8.2`

---

### ⚙️ **Project Initialization**

**Command executed:**

```bash
npm create vite@latest focust

```

**Setup Details:**

- **Framework Selected:** React
- **Variant:** TypeScript + React Compiler
- **Rolldown Vite:** No
- **Install and Start Automatically:** Yes

**Result:**

- Project scaffolded successfully in:
    
    `/media/shimu/Darkrai0491/Fat_Man/Projects/focust_1.0/focust`
    
- 191 packages installed (0 vulnerabilities)
- Vite development server started at:
    
    ➜ Local: `http://localhost:5173/`
    

---

### 📦 **Dependencies Installed**

Added React Router DOM:

```bash
npm install react-router-dom

```

✅ Installed successfully (7 packages added)

---

### 🧱 **Current Folder Structure**

```
Focust_1.0/
│
├── focust/
│   └── node_modules/
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── assets/
│   │   └── react.svg
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── PomodoroTimer.tsx
│   │   ├── Sidebar.tsx
│   │   └── ThemeToggle.tsx
│   │
│   ├── context/
│   │   ├── ProgressContext.tsx
│   │   ├── ThemeContext.tsx
│   │   └── TimerContext.tsx
│   │
│   ├── features/
│   │   ├── clocks/
│   │   │   └── FlipClock.tsx
│   │   │
│   │   ├── customization/
│   │   │   ├── theme.css
│   │   │   ├── ThemeManager.tsx
│   │   │   └── WallpaperPicker.tsx
│   │   │
│   │   ├── flashcards/
│   │   │   ├── FlashcardList.tsx
│   │   │   ├── FlashcardReview.tsx
│   │   │   └── flashcardsData.ts
│   │   │
│   │   ├── notes/
│   │   │   ├── NoteEditor.tsx
│   │   │   ├── NoteList.tsx
│   │   │   ├── notes.css
│   │   │   └── ...
│   │   │
│   │   ├── pomodoro/
│   │   │   ├── pomodoro.css
│   │   │   ├── PomodoroSettings.tsx
│   │   │   └── PomodoroTimer.tsx
│   │   │
│   │   ├── progress/
│   │   │   ├── ProgressChart.tsx
│   │   │   └── ProgressTracker.tsx
│   │   │
│   │   └── syllabus/
│   │       ├── syllabusData.ts
│   │       ├── SyllabusList.tsx
│   │       └── SyllabusTracker.tsx
│   │
│   ├── hooks/
│   │   ├── useProgress.ts
│   │   ├── useTheme.ts
│   │   └── useTimer.ts
│   │
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Settings.tsx
│   │   └── StudyMode.tsx
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── variables.css
│   │   ├── App.css
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
│
├── node_modules/
└── reference photos/

```

### 🧩 Notes

- **src/** contains all React components, hooks, contexts, and pages.
- **features/** organizes modular sections like pomodoro, flashcards, and notes.
- **context/** manages global state (theme, timer, progress).
- **pages/** holds top-level routes (Dashboard, Study Mode, etc.).
- **styles/** includes global and modular CSS.

---

### 📝 **Next Steps / To-Do**

- [ ]  Add routing setup (`BrowserRouter`, routes for Dashboard, StudyMode, etc.)
- [ ]  Integrate Context Providers (Timer, Progress, Theme)
- [ ]  Create UI for Pomodoro & Focus Timer
- [ ]  Implement Notes, Flashcards, and Syllabus tracking features
- [ ]  Write README sections for:
    - Overview
    - Setup instructions
    - Features list
    - Screenshots / Demo (after initial UI)

---

🧭 **Notes**

> Keep this log updated after each development session.
> 
> 
> Add sections for “Features Added”, “Bugs Fixed”, or “Refactor Changes” as you progress.
> 

---

📚 **Log Format Example for Future Updates**

```
### 🗓️ Date: YYYY-MM-DD
**Change Summary:**
- Added ...
- Updated ...
- Fixed ...

**Commands:**
npm install ...
git commit -m "..."

```