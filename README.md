<div align="center">

<img src="https://img.shields.io/badge/ExamGuard-Frontend-2563EB?style=for-the-badge&logoColor=white" height="36"/>

# examguard-frontend

### React 19 client application for the ExamGuard AI platform

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-000000?style=flat-square)](https://ui.shadcn.com)

[Getting Started](#-getting-started) · [Project Structure](#-project-structure) · [Pages](#-pages--routes) · [Tech Stack](#-tech-stack) · [Scripts](#-scripts) · [Contributing](#-contributing)

</div>

---

## 📋 Overview

This repository contains the frontend client for **ExamGuard AI** — an intelligent university exam platform. It serves three user roles:

- **Professors** — Create AI-powered exams, monitor live proctoring, and review flagged incidents
- **Students** — Take exams in a secure fullscreen environment with real-time integrity monitoring
- **Admins** — Oversee the entire platform, manage users, and review escalated violations

The frontend communicates with the [`examguard-backend`](https://github.com/examguard-ai/examguard-backend) via REST API and WebSocket (Socket.io) for real-time proctoring events.

---

## ⚡ Getting Started

### Prerequisites

Make sure you have the following installed:

| Tool | Version | Download |
|---|---|---|
| Node.js | v20 LTS | [nodejs.org](https://nodejs.org) |
| pnpm | v9+ | `npm install -g pnpm` |
| Git | latest | [git-scm.com](https://git-scm.com) |

> The backend must be running locally for API calls to work.  
> See [`examguard-backend`](https://github.com/examguard-ai/examguard-backend) setup instructions.

---

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/examguard-ai/examguard-frontend.git
cd examguard-frontend
```

**2. Install dependencies**

```bash
pnpm install
```

**3. Set up environment variables**

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in the values:

```bash
# API
VITE_API_URL=http://localhost:3000
VITE_WS_URL=ws://localhost:3000

# App
VITE_APP_ENV=development
VITE_APP_NAME=ExamGuard AI
```

**4. Start the development server**

```bash
pnpm dev
```

The app will be available at **http://localhost:5173**

---

### Quick Start with Docker

If you prefer Docker for the full stack:

```bash
# From the project root
docker-compose up -d

# Frontend only
docker-compose up frontend
```

---

## 📁 Project Structure

```
examguard-frontend/
│
├── public/                         # Static assets (favicon, fonts)
│
├── designs/                        # Stitch exported design references (READ-ONLY)
│   ├── professor-dashboard/
│   ├── exam-builder/
│   ├── live-monitor/
│   ├── student-dashboard/
│   ├── exam-taking/
│   └── ...
│
├── src/
│   │
│   ├── components/
│   │   ├── ui/                     # shadcn/ui auto-generated — NEVER edit manually
│   │   └── layout/
│   │       ├── AppShell.tsx        # Main authenticated layout wrapper
│   │       ├── Sidebar.tsx         # Role-aware navigation sidebar
│   │       └── Topbar.tsx          # Top navigation bar
│   │
│   ├── features/                   # Feature-based modules
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   └── types/
│   │   ├── dashboard/
│   │   ├── exams/
│   │   ├── proctoring/
│   │   ├── results/
│   │   ├── question-bank/
│   │   └── admin/
│   │
│   ├── hooks/                      # Shared custom hooks
│   │   ├── useAuth.ts
│   │   ├── useExamSession.ts
│   │   └── useProctoring.ts
│   │
│   ├── lib/                        # Core configuration
│   │   ├── axios.ts                # Axios instance + interceptors
│   │   ├── queryClient.ts          # TanStack Query client config
│   │   └── utils.ts                # cn() and shared utilities
│   │
│   ├── pages/                      # Route-level page components
│   │   ├── public/
│   │   │   ├── LandingPage.tsx
│   │   │   ├── LoginPage.tsx
│   │   │   └── RegisterPage.tsx
│   │   ├── professor/
│   │   ├── student/
│   │   ├── admin/
│   │   └── utility/
│   │
│   ├── routes/
│   │   ├── index.tsx               # Root router config
│   │   ├── ProfessorRoutes.tsx     # Protected professor routes
│   │   ├── StudentRoutes.tsx       # Protected student routes
│   │   └── AdminRoutes.tsx         # Protected admin routes
│   │
│   ├── store/                      # Zustand global stores
│   │   ├── authStore.ts            # Auth state (user, token, role)
│   │   └── examSessionStore.ts     # Active exam state (answers, timer, flags)
│   │
│   ├── types/                      # Global TypeScript types
│   │   ├── api.types.ts            # API response wrappers
│   │   ├── auth.types.ts
│   │   └── index.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                   # Tailwind directives + CSS variables
│
├── .env.example
├── .env.local                      # Your local env (git-ignored)
├── .eslintrc.json
├── .prettierrc
├── components.json                 # shadcn/ui config
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🗺️ Pages & Routes

### 🔓 Public — No Auth Required

| Page | File | Route |
|---|---|---|
| Landing / Marketing | `pages/public/LandingPage.tsx` | `/` |
| Login | `pages/public/LoginPage.tsx` | `/login` |
| Register | `pages/public/RegisterPage.tsx` | `/register` |
| Forgot Password | `pages/public/ForgotPasswordPage.tsx` | `/forgot-password` |
| Reset Password | `pages/public/ResetPasswordPage.tsx` | `/reset-password/:token` |
| Email Verification | `pages/public/VerifyEmailPage.tsx` | `/verify-email/:token` |

---

### 👨‍🏫 Professor — Role: `professor`

| Page | File | Route |
|---|---|---|
| Dashboard | `pages/professor/DashboardPage.tsx` | `/professor/dashboard` |
| Exam List | `pages/professor/ExamsPage.tsx` | `/professor/exams` |
| Create Exam — Upload | `pages/professor/CreateExamUploadPage.tsx` | `/professor/exams/create/upload` |
| Create Exam — Generate | `pages/professor/CreateExamGeneratePage.tsx` | `/professor/exams/create/generate` |
| Create Exam — Review | `pages/professor/CreateExamReviewPage.tsx` | `/professor/exams/create/review` |
| Exam Detail / Edit | `pages/professor/ExamDetailPage.tsx` | `/professor/exams/:examId` |
| Question Bank | `pages/professor/QuestionBankPage.tsx` | `/professor/question-bank` |
| Live Proctoring Monitor | `pages/professor/LiveMonitorPage.tsx` | `/professor/exams/:examId/monitor` |
| Exam Results & Analytics | `pages/professor/ExamResultsPage.tsx` | `/professor/exams/:examId/results` |
| Flag / Incident Review | `pages/professor/FlagReviewPage.tsx` | `/professor/exams/:examId/flags/:studentId` |
| Student Management | `pages/professor/StudentsPage.tsx` | `/professor/students` |
| Course Management | `pages/professor/CoursesPage.tsx` | `/professor/courses` |
| Settings | `pages/professor/SettingsPage.tsx` | `/professor/settings` |

---

### 👨‍🎓 Student — Role: `student`

| Page | File | Route |
|---|---|---|
| Dashboard | `pages/student/DashboardPage.tsx` | `/student/dashboard` |
| Upcoming Exams | `pages/student/ExamsPage.tsx` | `/student/exams` |
| Exam Lobby | `pages/student/ExamLobbyPage.tsx` | `/student/exams/:examId/lobby` |
| System Check | `pages/student/SystemCheckPage.tsx` | `/student/exams/:examId/system-check` |
| Exam Taking *(fullscreen)* | `pages/student/ExamTakingPage.tsx` | `/student/exams/:examId/take` |
| Exam Submitted | `pages/student/ExamSubmittedPage.tsx` | `/student/exams/:examId/submitted` |
| My Results | `pages/student/ResultsPage.tsx` | `/student/results` |
| Result Detail | `pages/student/ResultDetailPage.tsx` | `/student/results/:examId` |
| Integrity Reports | `pages/student/FlagsPage.tsx` | `/student/flags` |
| Submit Rebuttal | `pages/student/RebuttalPage.tsx` | `/student/flags/:flagId/rebuttal` |
| Profile & Settings | `pages/student/SettingsPage.tsx` | `/student/settings` |

---

### 🛡️ Admin — Role: `admin`

| Page | File | Route |
|---|---|---|
| Admin Dashboard | `pages/admin/DashboardPage.tsx` | `/admin/dashboard` |
| User Management | `pages/admin/UsersPage.tsx` | `/admin/users` |
| All Exams Overview | `pages/admin/ExamsPage.tsx` | `/admin/exams` |
| Escalated Violations | `pages/admin/ViolationsPage.tsx` | `/admin/violations` |
| System Health / Logs | `pages/admin/SystemPage.tsx` | `/admin/system` |
| Bias Audit Reports | `pages/admin/BiasAuditPage.tsx` | `/admin/bias-audit` |

---

### ⚠️ Utility

| Page | File | Route |
|---|---|---|
| 404 Not Found | `pages/utility/NotFoundPage.tsx` | `*` |
| 403 Unauthorized | `pages/utility/UnauthorizedPage.tsx` | `/403` |
| Maintenance | `pages/utility/MaintenancePage.tsx` | `/maintenance` |

---

## 🛠️ Tech Stack

### Core

| Library | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| TypeScript | 5.x | Type safety |
| Vite | 5.x | Build tool & dev server |

### Routing & Data

| Library | Version | Purpose |
|---|---|---|
| React Router | v6 | Client-side routing |
| TanStack Query | v5 | Server state, caching, background sync |
| Axios | v1 | HTTP client with interceptors |
| Zustand | v4 | Global client state (auth, exam session) |

### UI & Styling

| Library | Version | Purpose |
|---|---|---|
| shadcn/ui | latest | Component primitives (Radix UI based) |
| Tailwind CSS | v3 | Utility-first styling |
| Lucide React | latest | Icon system (1.5px stroke) |
| React Hot Toast | v2 | Toast notifications |

### Forms & Validation

| Library | Version | Purpose |
|---|---|---|
| React Hook Form | v7 | Performant form management |
| Zod | v3 | Schema validation |
| @hookform/resolvers | v3 | Zod ↔ React Hook Form bridge |

### Data Display

| Library | Version | Purpose |
|---|---|---|
| TanStack Table | v8 | Headless data tables |
| Recharts | v2 | Score charts & analytics |

### Proctoring & AI

| Library | Version | Purpose |
|---|---|---|
| TensorFlow.js | v4 | In-browser gaze detection model |
| MediaPipe | latest | Face landmark detection |
| React Webcam | latest | Camera feed access |
| Screenfull | v6 | Fullscreen enforcement during exam |
| Socket.io Client | v4 | Real-time proctoring events |

### File Handling

| Library | Version | Purpose |
|---|---|---|
| React Dropzone | v14 | Drag-and-drop file upload |
| pdfjs-dist | latest | PDF preview rendering |

### Utilities

| Library | Version | Purpose |
|---|---|---|
| date-fns | v3 | Date formatting, exam timers |
| clsx | latest | Conditional className merging |
| tailwind-merge | latest | Tailwind class conflict resolution |

---

## 📜 Scripts

```bash
# Start development server (http://localhost:5173)
pnpm dev

# Type-check without building
pnpm type-check

# Lint all files
pnpm lint

# Lint and auto-fix
pnpm lint:fix

# Format with Prettier
pnpm format

# Production build
pnpm build

# Preview production build locally
pnpm preview

# Run all checks (type-check + lint + format)
pnpm check
```

---

## 🎨 Design System

The UI is built on a custom design system implemented via shadcn/ui + Tailwind CSS.

### Color Tokens

```css
/* Dark surfaces (default) */
--navy-950: #0A1628   /* sidebar */
--navy-900: #0F1F3D   /* dashboard background */
--navy-800: #162847   /* elevated cards */

/* Actions */
--blue-600: #2563EB   /* primary CTA */

/* Integrity status */
--green-500: #22C55E  /* clear (score 85–100) */
--amber-500: #F59E0B  /* at risk (score 60–84) */
--red-600:   #DC2626  /* flagged (score < 60) */
```

### Typography

```
Outfit      → headings (text-2xl and above)
Inter       → body text and UI labels
JetBrains Mono → timestamps, IDs, integrity scores
```

### Adding shadcn Components

```bash
# Add a new shadcn component
pnpm dlx shadcn@latest add [component-name]

# Examples
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add data-table
pnpm dlx shadcn@latest add dialog
```

> ⚠️ Never manually edit files inside `src/components/ui/` — they are managed by shadcn CLI.

---

## 🔐 Auth & Route Guards

Routes are protected by role-based guards in `src/routes/`:

```
/professor/* → requires auth + role === "professor"
/student/*   → requires auth + role === "student"
/admin/*     → requires auth + role === "admin"
```

Unauthenticated users are redirected to `/login`.  
Wrong-role users are redirected to `/403`.

Token storage and refresh logic lives in `src/lib/axios.ts` via request interceptors.

---

## 🌐 Environment Variables

| Variable | Required | Description |
|---|---|---|
| `VITE_API_URL` | ✅ | Backend REST API base URL |
| `VITE_WS_URL` | ✅ | WebSocket server URL (Socket.io) |
| `VITE_APP_ENV` | ✅ | `development` \| `staging` \| `production` |
| `VITE_APP_NAME` | ❌ | Displayed app name (default: ExamGuard AI) |

> All env variables must be prefixed with `VITE_` to be accessible in the browser.

---

## 🧩 Feature Flags

Certain features can be toggled during development via `.env.local`:

```bash
# Disable in-browser proctoring agents (useful for UI development)
VITE_DISABLE_PROCTORING=true

# Use mock API responses instead of real backend
VITE_USE_MOCK_API=true

# Skip system check before exam (dev shortcut)
VITE_SKIP_SYSTEM_CHECK=true
```

---

## 📐 Code Conventions

### File Naming
```
PascalCase   → components, pages  (DashboardPage.tsx)
camelCase    → hooks, utilities    (useDashboardQuery.ts)
kebab-case   → config files        (tailwind.config.ts)
```

### Import Order
```ts
// 1. React
import { useState, useEffect } from "react"

// 2. Third-party libraries
import { useNavigate } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

// 3. Internal absolute imports (@/)
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// 4. Relative imports
import { ExamCard } from "./ExamCard"
```

### Component Structure
```tsx
// 1. Props interface
interface ExamCardProps {
  exam: Exam
  isLoading: boolean
}

// 2. Named export (for tree-shaking)
export function ExamCard({ exam, isLoading }: ExamCardProps) {
  // 3. Hooks
  const navigate = useNavigate()

  // 4. Derived state
  const isAtRisk = exam.integrityScore < 85

  // 5. Handlers
  function handleClick() {
    navigate(`/professor/exams/${exam.id}`)
  }

  // 6. JSX
  return (
    <Card
      className={cn("cursor-pointer", isAtRisk && "border-amber-500")}
      onClick={handleClick}
      data-testid="exam-card"
    >
      ...
    </Card>
  )
}

// 7. Default export
export default ExamCard
```

---

## 🤝 Contributing

### Branch Naming

```
feature/[feature-name]     → new page or feature
fix/[bug-description]      → bug fixes
chore/[task-description]   → config, deps, tooling
design/[page-name]         → design implementation from Stitch
```

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org):

```
feat(exams): add exam builder drag-and-drop reordering
fix(proctoring): resolve gaze tracker false positive on scroll
chore(deps): upgrade TanStack Query to v5.x
design(dashboard): implement professor dashboard from Stitch export
```

### Pull Request Checklist

Before opening a PR, confirm:

- [ ] `pnpm type-check` passes with no errors
- [ ] `pnpm lint` passes with no warnings
- [ ] All 4 states implemented: loading, empty, error, populated
- [ ] Responsive behavior verified at 375px, 768px, and 1280px
- [ ] No `console.log` statements in the code
- [ ] No `any` types without an explanatory comment
- [ ] New shadcn components added via CLI, not manually
- [ ] `designs/` folder is not imported in any production code

---

## 👥 Team

| Name | Role | GitHub |
|---|---|---|
| Mahmoud Abdelhalim Ahmed Isa | Team Lead & Full-Stack | [@mahmoud-isa](https://github.com) |
| Mahmoud Ismael Mohamed Elfiky | Backend & AI Pipeline | [@mahmoud-elfiky](https://github.com) |
| Mohamed Fouad Mohamed Nassar | Frontend & UI/UX | [@mohamed-nassar](https://github.com) |
| Mostafa Safwat Mohamed Soliman | Proctoring Agents & ML | [@mostafa-safwat](https://github.com) |
| Amir Ahmed Said Soliman | DevOps & Database | [@amir-soliman](https://github.com) |

---

## 🔗 Related Repositories

| Repository | Description |
|---|---|
| [`examguard-backend`](https://github.com/examguard-ai/examguard-backend) | NestJS REST API & WebSocket server |
| [`examguard-ai`](https://github.com/examguard-ai/examguard-ai) | LangChain.js agents & RAG pipeline |
| [`examguard-docs`](https://github.com/examguard-ai/examguard-docs) | Architecture docs & API reference |

---

<div align="center">

Part of the **ExamGuard AI** platform · Built with ❤️ · ITI OS 46 · 2025

</div>
