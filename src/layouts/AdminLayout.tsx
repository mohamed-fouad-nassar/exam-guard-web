import { useState } from "react";
import { Outlet, useLocation } from "react-router";
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  ShieldAlert,
  Activity,
  Scale,
} from "lucide-react";
import AmbientBackground from "@/components/layout/AmbientBackground";
import Sidebar from "@/components/layout/Sidebar";
import type { NavItem } from "@/components/layout/Sidebar";
import TopNav from "@/components/layout/TopNav";
import MobileDrawer from "@/components/layout/MobileDrawer";
import { PATHS } from "@/router/paths";
import { mockUser } from "@/lib/mock-user";

const navItems: NavItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, path: PATHS.ADMIN.DASHBOARD },
  { label: "Users", icon: Users, path: PATHS.ADMIN.USERS },
  { label: "All Exams", icon: ClipboardList, path: PATHS.ADMIN.EXAMS },
  { label: "Violations", icon: ShieldAlert, path: PATHS.ADMIN.VIOLATIONS },
  { label: "System", icon: Activity, path: PATHS.ADMIN.SYSTEM },
  { label: "Bias Audit", icon: Scale, path: PATHS.ADMIN.BIAS_AUDIT },
];

const pageTitles: Record<string, string> = {
  [PATHS.ADMIN.DASHBOARD]: "Dashboard",
  [PATHS.ADMIN.USERS]: "Users",
  [PATHS.ADMIN.EXAMS]: "All Exams",
  [PATHS.ADMIN.VIOLATIONS]: "Violations",
  [PATHS.ADMIN.SYSTEM]: "System Health",
  [PATHS.ADMIN.BIAS_AUDIT]: "Bias Audit",
};

export default function AdminLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { pathname } = useLocation();
  const title = pageTitles[pathname] ?? "Dashboard";

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <AmbientBackground />
      <Sidebar navItems={navItems} portalLabel="Admin Portal" homePath={PATHS.ADMIN.DASHBOARD} />
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
