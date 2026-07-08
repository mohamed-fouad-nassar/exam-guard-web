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
            <Route path="exams" element={<div>Exams</div>} />
            <Route path="exams/create" element={<div>Create Exam</div>} />
            <Route path="exams/:examId" element={<div>Exam Detail</div>} />
            <Route path="results" element={<div>Results</div>} />
            <Route path="results/:resultId" element={<div>Result Detail</div>} />
            <Route path="settings" element={<div>Settings</div>} />
            <Route path="users" element={<div>Users</div>} />
          </Route>
        </Route>

        {/* ── Protected: Exam Session (student only) ── */}
        <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
          <Route element={<ExamLayout />}>
            <Route path="/exams/:examId/take" element={<div>Take Exam</div>} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
