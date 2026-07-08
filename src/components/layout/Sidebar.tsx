import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";
import { Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PATHS } from "@/router/paths";

export type NavItem = {
  label: string;
  icon: LucideIcon;
  path: string;
};

type SidebarProps = {
  navItems: NavItem[];
  portalLabel: string;
};

export default function Sidebar({ navItems, portalLabel }: SidebarProps) {
  const { pathname } = useLocation();

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-60 flex-col border-r border-border bg-surface-container-lowest px-4 py-6 z-50">
      <Link to={PATHS.DASHBOARD} className="mb-10 flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded bg-primary-container text-on-primary-container">
          <Shield className="fill-current" size={20} />
        </div>
        <div>
          <h2 className="font-heading text-lg font-bold leading-tight text-primary">
            ExamGuard AI
          </h2>
          <p className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
            {portalLabel}
          </p>
        </div>
      </Link>

      <nav className="flex flex-1 flex-col gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-2 rounded-lg transition-all active:scale-95",
                isActive
                  ? "bg-primary-container text-on-primary-container"
                  : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface",
              )}
            >
              <item.icon size={18} />
              <span className="font-mono text-xs font-medium uppercase tracking-wider">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
