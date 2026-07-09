import { BrowserRouter, Route, Routes } from "react-router";

import { PATHS } from "./paths";

import AuthLayout from "@/layouts/AuthLayout";
import ExamLayout from "@/layouts/ExamLayout";
import DashboardLayout from "@/layouts/DashboardLayout";

import GuestRoute from "@/components/shared/GuestRoute";
import ProtectedRoute from "@/components/shared/ProtectedRoute";

import Landing from "@/pages/landing/Landing";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";

import Dashboard from "@/pages/dashboard/Dashboard";
import Exams from "@/pages/dashboard/Exams";
import Results from "@/pages/dashboard/Results";

import ExamLobby from "@/pages/exam/ExamLobby";
import ExamSession from "@/pages/exam/ExamSession";
import ExamSubmit from "@/pages/exam/ExamSubmit";
import ExamDetail from "@/pages/exam/ExamDetail";
import NotFound from "@/pages/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ── Public Landing ─────────────────────────── */}
        <Route path={PATHS.LANDING} element={<Landing />} />

        {/* ── Guest only (Auth) ─────────────────────── */}
        <Route element={<GuestRoute />}>
          <Route element={<AuthLayout />}>
            <Route path={PATHS.LOGIN} element={<Login />} />
            <Route path={PATHS.REGISTER} element={<Register />} />
          </Route>
        </Route>

        {/* ── Protected Dashboard (all roles) ───────── */}
        <Route element={<ProtectedRoute />}>
          <Route path={PATHS.DASHBOARD} element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="exams" element={<Exams />} />
            <Route path="exams/search" element={<Exams />} />
            <Route path="exams/create" element={<div>Create Exam</div>} />
            <Route path="exams/:examId" element={<ExamDetail />} />
            <Route path="results" element={<Results />} />
            <Route
              path="results/:resultId"
              element={<div>Result Detail</div>}
            />
            <Route path="settings" element={<div>Settings</div>} />
            <Route path="users" element={<div>Users</div>} />
          </Route>
        </Route>

        {/* ── Protected: Exam Taking (student only) ── */}
        <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
          <Route element={<ExamLayout />}>
            <Route path="/exams/:examId/take" element={<ExamLobby />} />
          </Route>
        </Route>

        {/* ── Protected: Exam Session / Questions (student only) ── */}
        <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
          <Route path="/exams/:examId/session" element={<ExamSession />} />
          <Route path="/exams/:examId/submit" element={<ExamSubmit />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
