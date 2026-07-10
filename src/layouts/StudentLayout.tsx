import { useState } from "react";
import { Outlet, useLocation } from "react-router";
import {
  LayoutDashboard,
  ClipboardList,
  BarChart3,
  Settings,
  ShieldAlert,
} from "lucide-react";
import AmbientBackground from "@/components/layout/AmbientBackground";
import Sidebar from "@/components/layout/Sidebar";
import type { NavItem } from "@/components/layout/Sidebar";
import TopNav from "@/components/layout/TopNav";
import MobileDrawer from "@/components/layout/MobileDrawer";
import { PATHS } from "@/router/paths";
import { mockUser } from "@/lib/mock-user";

const navItems: NavItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, path: PATHS.STUDENT.DASHBOARD },
  { label: "My Exams", icon: ClipboardList, path: PATHS.STUDENT.EXAMS },
  { label: "My Results", icon: BarChart3, path: PATHS.STUDENT.RESULTS },
  { label: "Integrity Reports", icon: ShieldAlert, path: PATHS.STUDENT.FLAGS },
  { label: "Settings", icon: Settings, path: PATHS.STUDENT.SETTINGS },
];

const pageTitles: Record<string, string> = {
  [PATHS.STUDENT.DASHBOARD]: "Dashboard",
  [PATHS.STUDENT.EXAMS]: "My Exams",
  [PATHS.STUDENT.RESULTS]: "My Results",
  [PATHS.STUDENT.FLAGS]: "Integrity Reports",
  [PATHS.STUDENT.SETTINGS]: "Settings",
};

export default function StudentLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { pathname } = useLocation();
  const title = pageTitles[pathname] ?? "Dashboard";

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <AmbientBackground />
      <Sidebar navItems={navItems} portalLabel="Student Portal" homePath={PATHS.STUDENT.DASHBOARD} />
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
