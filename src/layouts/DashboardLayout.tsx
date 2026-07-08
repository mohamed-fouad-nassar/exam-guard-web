import { useState } from "react";
import { Outlet, useLocation } from "react-router";
import {
  LayoutDashboard,
  ClipboardList,
  BarChart3,
  Settings,
  FilePlus,
  Users,
} from "lucide-react";
import AmbientBackground from "@/components/layout/AmbientBackground";
import Sidebar from "@/components/layout/Sidebar";
import type { NavItem } from "@/components/layout/Sidebar";
import TopNav from "@/components/layout/TopNav";
import MobileDrawer from "@/components/layout/MobileDrawer";
import { PATHS } from "@/router/paths";
import type { Role } from "@/types/common.types";
import { mockUser } from "@/lib/mock-user";

const navItemsByRole: Record<Role, NavItem[]> = {
  student: [
    { label: "Dashboard", icon: LayoutDashboard, path: PATHS.DASHBOARD },
    { label: "My Exams", icon: ClipboardList, path: PATHS.EXAMS },
    { label: "My Results", icon: BarChart3, path: PATHS.RESULTS },
    { label: "Settings", icon: Settings, path: PATHS.SETTINGS },
  ],
  teacher: [
    { label: "Dashboard", icon: LayoutDashboard, path: PATHS.DASHBOARD },
    { label: "My Exams", icon: ClipboardList, path: PATHS.EXAMS },
    { label: "Create Exam", icon: FilePlus, path: PATHS.EXAM_CREATE },
    { label: "Results", icon: BarChart3, path: PATHS.RESULTS },
    { label: "Settings", icon: Settings, path: PATHS.SETTINGS },
  ],
  admin: [
    { label: "Dashboard", icon: LayoutDashboard, path: PATHS.DASHBOARD },
    { label: "Users", icon: Users, path: PATHS.USERS },
    { label: "Exams", icon: ClipboardList, path: PATHS.EXAMS },
    { label: "Settings", icon: Settings, path: PATHS.SETTINGS },
  ],
};

const portalLabelByRole: Record<Role, string> = {
  student: "Student Portal",
  teacher: "Teacher Portal",
  admin: "Admin Portal",
};

const pageTitles: Record<string, string> = {
  [PATHS.DASHBOARD]: "Dashboard",
  [PATHS.EXAMS]: "Exams",
  [PATHS.EXAM_CREATE]: "Create Exam",
  [PATHS.RESULTS]: "Results",
  [PATHS.SETTINGS]: "Settings",
  [PATHS.USERS]: "Users",
};

export default function DashboardLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { pathname } = useLocation();
  const role = mockUser.role;
  const navItems = navItemsByRole[role];
  const portalLabel = portalLabelByRole[role];
  const title = pageTitles[pathname] ?? "Dashboard";

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <AmbientBackground />
      <Sidebar navItems={navItems} portalLabel={portalLabel} />
      <TopNav
        title={title}
        onMenuToggle={() => setDrawerOpen(true)}
        userName={mockUser.name}
        userId={mockUser.id}
        portalLabel={portalLabel}
      />
      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        navItems={navItems}
      />
      <main className="lg:ml-60 pt-24 pb-12 px-6">
        <Outlet />
      </main>
    </div>
  );
}
