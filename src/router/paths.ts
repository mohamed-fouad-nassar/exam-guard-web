export const PATHS = {

  // ── Public ──────────────────────────────────────────
  LANDING:    "/",
  LOGIN:      "/login",
  REGISTER:   "/register",

  // ── Professor ────────────────────────────────────────
  PROFESSOR: {
    DASHBOARD:        "/professor/dashboard",
    EXAMS:            "/professor/exams",
    EXAM_BUILDER:     "/professor/exams/create",
    EXAM_CREATE:      {
      UPLOAD:         "/professor/exams/create/upload",
      GENERATE:       "/professor/exams/create/generate",
      REVIEW:         "/professor/exams/create/review",
    },
    EXAM_DETAIL:      (examId: string) => `/professor/exams/${examId}`,
    EXAM_MONITOR:     (examId: string) => `/professor/exams/${examId}/monitor`,
    EXAM_RESULTS:     (examId: string) => `/professor/exams/${examId}/results`,
    FLAG_REVIEW:      (examId: string, studentId: string) =>
                        `/professor/exams/${examId}/flags/${studentId}`,
    QUESTION_BANK:    "/professor/question-bank",
    STUDENTS:         "/professor/students",
    COURSES:          "/professor/courses",
    SETTINGS:         "/professor/settings",
  },

  // ── Student ──────────────────────────────────────────
  STUDENT: {
    DASHBOARD:        "/student/dashboard",
    EXAMS:            "/student/exams",
    RESULTS:          "/student/results",
    RESULT_DETAIL:    (examId: string) => `/student/results/${examId}`,
    FLAGS:            "/student/flags",
    REBUTTAL:         (flagId: string) => `/student/flags/${flagId}/rebuttal`,
    SETTINGS:         "/student/settings",
  },

  // ── Admin ────────────────────────────────────────────
  ADMIN: {
    DASHBOARD:        "/admin/dashboard",
    USERS:            "/admin/users",
    EXAMS:            "/admin/exams",
    VIOLATIONS:       "/admin/violations",
    SYSTEM:           "/admin/system",
    BIAS_AUDIT:       "/admin/bias-audit",
  },

  // ── Exam Flow (isolated, fullscreen) ─────────────────
  EXAM: {
    LOBBY:            (examId: string) => `/exam/${examId}/lobby`,
    SYSTEM_CHECK:     (examId: string) => `/exam/${examId}/system-check`,
    TAKE:             (examId: string) => `/exam/${examId}/take`,
    SUBMITTED:        (examId: string) => `/exam/${examId}/submitted`,
  },

  // ── Utility ──────────────────────────────────────────
  UNAUTHORIZED:   "/403",
  NOT_FOUND:      "/404",

} as const
