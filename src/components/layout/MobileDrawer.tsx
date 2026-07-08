import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import type { NavItem } from "./Sidebar";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
};

export default function MobileDrawer({ open, onClose, navItems }: MobileDrawerProps) {
  const { pathname } = useLocation();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <div
      ref={drawerRef}
      className={cn(
        "fixed inset-0 z-[60]",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />
      <aside
        className={cn(
          "relative h-full w-64 border-r border-border bg-surface-container-lowest p-4 transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="font-heading text-lg font-bold tracking-tight text-primary">
            ExamGuard AI
          </span>
          <button
            onClick={onClose}
            className="text-on-surface-variant transition-colors hover:text-on-surface"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  isActive
                    ? "bg-primary-container text-on-primary-container"
                    : "text-on-surface-variant hover:text-on-surface",
                )}
              >
                <item.icon
                  size={18}
                  className={isActive ? "fill-current" : ""}
                />
                <span className="font-mono text-xs font-medium uppercase tracking-wider">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </div>
  );
}
