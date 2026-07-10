import { useState } from "react";
import { Outlet, useLocation } from "react-router";
import {
  LayoutDashboard,
  ClipboardList,
  Settings,
  FilePlus,
  BookOpen,
  Users,
  GraduationCap,
} from "lucide-react";
import AmbientBackground from "@/components/layout/AmbientBackground";
import Sidebar from "@/components/layout/Sidebar";
import type { NavItem } from "@/components/layout/Sidebar";
import TopNav from "@/components/layout/TopNav";
import MobileDrawer from "@/components/layout/MobileDrawer";
import { PATHS } from "@/router/paths";
import { mockUser } from "@/lib/mock-user";

const navItems: NavItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, path: PATHS.PROFESSOR.DASHBOARD },
  { label: "Exams", icon: ClipboardList, path: PATHS.PROFESSOR.EXAMS },
  {
    label: "Create Exam",
    icon: FilePlus,
    path: PATHS.PROFESSOR.EXAM_BUILDER,
    matchSubPaths: true,
  },
  { label: "Question Bank", icon: BookOpen, path: PATHS.PROFESSOR.QUESTION_BANK },
  { label: "Students", icon: Users, path: PATHS.PROFESSOR.STUDENTS },
  { label: "Courses", icon: GraduationCap, path: PATHS.PROFESSOR.COURSES },
  { label: "Settings", icon: Settings, path: PATHS.PROFESSOR.SETTINGS },
];

const pageTitles: Record<string, string> = {
  [PATHS.PROFESSOR.DASHBOARD]: "Dashboard",
  [PATHS.PROFESSOR.EXAMS]: "Exams",
  [PATHS.PROFESSOR.EXAM_BUILDER]: "Create Exam",
  [PATHS.PROFESSOR.QUESTION_BANK]: "Question Bank",
  [PATHS.PROFESSOR.STUDENTS]: "Students",
  [PATHS.PROFESSOR.COURSES]: "Courses",
  [PATHS.PROFESSOR.SETTINGS]: "Settings",
};

export default function ProfessorLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { pathname } = useLocation();
  const title =
    pageTitles[pathname] ??
    (pathname.startsWith(PATHS.PROFESSOR.EXAM_BUILDER)
      ? "Create Exam"
      : "Dashboard");

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <AmbientBackground />
      <Sidebar navItems={navItems} portalLabel="Professor Portal" homePath={PATHS.PROFESSOR.DASHBOARD} />
      <TopNav
        title={title}
        onMenuToggle={() => setDrawerOpen(true)}
        userName={mockUser.name}
        userId={mockUser.id}
      />
      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        navItems={navItems}
      />
      <main className="lg:ml-60 pt-20 pb-8 px-6">
        <Outlet />
      </main>
    </div>
  );
}
