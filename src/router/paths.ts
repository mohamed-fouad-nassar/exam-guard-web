export const PATHS = {
  LANDING: "/",

  LOGIN: "/login",
  REGISTER: "/register",

  DASHBOARD: "/dashboard",
  EXAMS: "/dashboard/exams",
  EXAM_CREATE: "/dashboard/exams/create",
  EXAM_DETAIL: (examId: string) => `/dashboard/exams/${examId}`,
  EXAM_TAKE: (examId: string) => `/exams/${examId}/take`,

  RESULTS: "/dashboard/results",
  RESULT_DETAIL: (resultId: string) => `/dashboard/results/${resultId}`,

  SETTINGS: "/dashboard/settings",
  USERS: "/dashboard/users",
} as const;
