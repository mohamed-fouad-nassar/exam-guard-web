import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import { PATHS } from "./paths";

import GuestGuard from "./guards/GuestGuard";
import ProfessorGuard from "./guards/ProfessorGuard";
import StudentGuard from "./guards/StudentGuard";
import AdminGuard from "./guards/AdminGuard";
import ExamFlowGuard from "./guards/ExamFlowGuard";

import ProfessorLayout from "@/layouts/ProfessorLayout";
import StudentLayout from "@/layouts/StudentLayout";
import AdminLayout from "@/layouts/AdminLayout";
import ExamLayout from "@/layouts/ExamLayout";
import AuthLayout from "@/layouts/AuthLayout";

const LandingPage = lazy(() => import("@/pages/landing/Landing"));
const LoginPage = lazy(() => import("@/pages/auth/Login"));
const RegisterPage = lazy(() => import("@/pages/auth/Register"));

const DashboardPage = lazy(() => import("@/pages/dashboard/Dashboard"));
const ExamsPage = lazy(() => import("@/pages/dashboard/Exams"));
const ResultsPage = lazy(() => import("@/pages/dashboard/Results"));
const ProfessorExamsPage = lazy(
  () => import("@/pages/dashboard/ProfessorExams"),
);
const ProfessorDashboardPage = lazy(
  () => import("@/pages/dashboard/ProfessorDashboard"),
);

const ExamCreatePage = lazy(() => import("@/pages/dashboard/ExamCreate"));
const ExamBasicInfoPage = lazy(
  () => import("@/pages/dashboard/create/ExamBasicInfo"),
);
const ExamQuestionsPage = lazy(
  () => import("@/pages/dashboard/create/ExamQuestions"),
);
const ExamCreateQuestionPage = lazy(
  () => import("@/pages/dashboard/create/ExamCreateQuestion"),
);
const ExamSettingsPage = lazy(
  () => import("@/pages/dashboard/create/ExamSettings"),
);
const ExamPreviewPage = lazy(
  () => import("@/pages/dashboard/create/ExamPreview"),
);

const ExamLobbyPage = lazy(() => import("@/pages/exam/ExamLobby"));
const ExamSessionPage = lazy(() => import("@/pages/exam/ExamSession"));
const ExamSubmitPage = lazy(() => import("@/pages/exam/ExamSubmit"));

const NotFoundPage = lazy(() => import("@/pages/NotFound"));

const Placeholder = lazy(() =>
  Promise.resolve({
    default: () => (
      <div className="p-8 text-black/60 dark:text-white/60">Coming Soon</div>
    ),
  }),
);

function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-on-surface-variant font-mono text-sm">
        Loading...
      </div>
    </div>
  );
}

function SuspenseBoundary({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PATHS.LANDING}
          element={
            <SuspenseBoundary>
              <LandingPage />
            </SuspenseBoundary>
          }
        />

        <Route element={<GuestGuard />}>
          <Route element={<AuthLayout />}>
            <Route
              path={PATHS.LOGIN}
              element={
                <SuspenseBoundary>
                  <LoginPage />
                </SuspenseBoundary>
              }
            />
            <Route
              path={PATHS.REGISTER}
              element={
                <SuspenseBoundary>
                  <RegisterPage />
                </SuspenseBoundary>
              }
            />
          </Route>
        </Route>

        <Route element={<ProfessorGuard />}>
          <Route element={<ProfessorLayout />}>
            <Route
              path={PATHS.PROFESSOR.DASHBOARD}
              element={
                <SuspenseBoundary>
                  <ProfessorDashboardPage />
                </SuspenseBoundary>
              }
            />
            <Route
              path={PATHS.PROFESSOR.EXAMS}
              element={
                <SuspenseBoundary>
                  <ProfessorExamsPage />
                </SuspenseBoundary>
              }
            />
            <Route
              path={PATHS.PROFESSOR.EXAM_BUILDER}
              element={
                <SuspenseBoundary>
                  <ExamCreatePage />
                </SuspenseBoundary>
              }
            >
              <Route
                index
                element={
                  <SuspenseBoundary>
                    <ExamBasicInfoPage />
                  </SuspenseBoundary>
                }
              />
              <Route
                path="questions"
                element={
                  <SuspenseBoundary>
                    <ExamQuestionsPage />
                  </SuspenseBoundary>
                }
              />
              <Route
                path="questions/new"
                element={
                  <SuspenseBoundary>
                    <ExamCreateQuestionPage />
                  </SuspenseBoundary>
                }
              />
              <Route
                path="settings"
                element={
                  <SuspenseBoundary>
                    <ExamSettingsPage />
                  </SuspenseBoundary>
                }
              />
              <Route
                path="preview"
                element={
                  <SuspenseBoundary>
                    <ExamPreviewPage />
                  </SuspenseBoundary>
                }
              />
            </Route>
            <Route
              path={PATHS.PROFESSOR.EXAM_CREATE.UPLOAD}
              element={
                <SuspenseBoundary>
                  <Placeholder />
                </SuspenseBoundary>
              }
            />
            <Route
              path={PATHS.PROFESSOR.EXAM_CREATE.GENERATE}
              element={
                <SuspenseBoundary>
                  <Placeholder />
                </SuspenseBoundary>
              }
            />
            <Route
              path={PATHS.PROFESSOR.EXAM_CREATE.REVIEW}
              element={
                <SuspenseBoundary>
                  <Placeholder />
                </SuspenseBoundary>
              }
            />
            <Route
              path={PATHS.PROFESSOR.EXAM_DETAIL(":examId")}
              element={
                <SuspenseBoundary>
                  <Placeholder />
                </SuspenseBoundary>
              }
            />
            <Route
              path={PATHS.PROFESSOR.EXAM_MONITOR(":examId")}
              element={
                <SuspenseBoundary>
                  <Placeholder />
                </SuspenseBoundary>
              }
            />
            <Route
              path={PATHS.PROFESSOR.EXAM_RESULTS(":examId")}
              element={
                <SuspenseBoundary>
                  <Placeholder />
                </SuspenseBoundary>
              }
            />
            <Route
              path={PATHS.PROFESSOR.QUESTION_BANK}
              element={
                <SuspenseBoundary>
                  <Placeholder />
                </SuspenseBoundary>
              }
            />
            <Route
              path={PATHS.PROFESSOR.STUDENTS}
              element={
                <SuspenseBoundary>
                  <Placeholder />
                </SuspenseBoundary>
              }
            />
            <Route
              path={PATHS.PROFESSOR.COURSES}
              element={
                <SuspenseBoundary>
                  <Placeholder />
                </SuspenseBoundary>
              }
            />
            <Route
              path={PATHS.PROFESSOR.SETTINGS}
              element={
                <SuspenseBoundary>
                  <Placeholder />
                </SuspenseBoundary>
              }
            />
          </Route>
        </Route>

        <Route element={<StudentGuard />}>
          <Route element={<StudentLayout />}>
            <Route
              path={PATHS.STUDENT.DASHBOARD}
              element={
                <SuspenseBoundary>
                  <DashboardPage />
                </SuspenseBoundary>
              }
            />
            <Route
              path={PATHS.STUDENT.EXAMS}
              element={
                <SuspenseBoundary>
                  <ExamsPage />
                </SuspenseBoundary>
              }
            />
            <Route
              path={PATHS.STUDENT.RESULTS}
              element={
                <SuspenseBoundary>
                  <ResultsPage />
                </SuspenseBoundary>
              }
            />
            <Route
              path={PATHS.STUDENT.RESULT_DETAIL(":examId")}
              element={
                <SuspenseBoundary>
                  <Placeholder />
                </SuspenseBoundary>
              }
            />
            <Route
              path={PATHS.STUDENT.FLAGS}
              element={
                <SuspenseBoundary>
                  <Placeholder />
                </SuspenseBoundary>
              }
            />
            <Route
              path={PATHS.STUDENT.REBUTTAL(":flagId")}
              element={
                <SuspenseBoundary>
                  <Placeholder />
                </SuspenseBoundary>
              }
            />
            <Route
              path={PATHS.STUDENT.SETTINGS}
              element={
                <SuspenseBoundary>
                  <Placeholder />
                </SuspenseBoundary>
              }
            />
          </Route>
        </Route>

        <Route element={<AdminGuard />}>
          <Route element={<AdminLayout />}>
            <Route
              path={PATHS.ADMIN.DASHBOARD}
              element={
                <SuspenseBoundary>
                  <Placeholder />
                </SuspenseBoundary>
              }
            />
            <Route
              path={PATHS.ADMIN.USERS}
              element={
                <SuspenseBoundary>
                  <Placeholder />
                </SuspenseBoundary>
              }
            />
            <Route
              path={PATHS.ADMIN.EXAMS}
              element={
                <SuspenseBoundary>
                  <Placeholder />
                </SuspenseBoundary>
              }
            />
            <Route
              path={PATHS.ADMIN.VIOLATIONS}
              element={
                <SuspenseBoundary>
                  <Placeholder />
                </SuspenseBoundary>
              }
            />
            <Route
              path={PATHS.ADMIN.SYSTEM}
              element={
                <SuspenseBoundary>
                  <Placeholder />
                </SuspenseBoundary>
              }
            />
            <Route
              path={PATHS.ADMIN.BIAS_AUDIT}
              element={
                <SuspenseBoundary>
                  <Placeholder />
                </SuspenseBoundary>
              }
            />
          </Route>
        </Route>

        <Route element={<ExamFlowGuard />}>
          <Route element={<ExamLayout />}>
            <Route
              path={PATHS.EXAM.LOBBY(":examId")}
              element={
                <SuspenseBoundary>
                  <ExamLobbyPage />
                </SuspenseBoundary>
              }
            />
            <Route
              path={PATHS.EXAM.SYSTEM_CHECK(":examId")}
              element={
                <SuspenseBoundary>
                  <Placeholder />
                </SuspenseBoundary>
              }
            />
            <Route
              path={PATHS.EXAM.TAKE(":examId")}
              element={
                <SuspenseBoundary>
                  <ExamSessionPage />
                </SuspenseBoundary>
              }
            />
            <Route
              path={PATHS.EXAM.SUBMITTED(":examId")}
              element={
                <SuspenseBoundary>
                  <ExamSubmitPage />
                </SuspenseBoundary>
              }
            />
          </Route>
        </Route>

        <Route
          path={PATHS.UNAUTHORIZED}
          element={
            <SuspenseBoundary>
              <Placeholder />
            </SuspenseBoundary>
          }
        />
        <Route
          path={PATHS.NOT_FOUND}
          element={
            <SuspenseBoundary>
              <NotFoundPage />
            </SuspenseBoundary>
          }
        />
        <Route path="*" element={<Navigate to={PATHS.NOT_FOUND} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
