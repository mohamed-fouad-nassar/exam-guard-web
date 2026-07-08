import { Bell, Menu } from "lucide-react";
import { ModeToggle } from "@/components/shared/ModeToggle";

type TopNavProps = {
  title: string;
  onMenuToggle: () => void;
  userName: string;
  userId: string;
  portalLabel: string;
};

export default function TopNav({ title, onMenuToggle, userName, userId }: TopNavProps) {
  return (
    <>
      <header className="hidden lg:flex fixed top-0 right-0 left-60 h-16 items-center justify-between border-b border-border bg-surface px-6 z-40">
        <h1 className="font-heading text-2xl font-bold text-primary">
          {title}
        </h1>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <button className="flex size-10 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:text-primary">
            <Bell size={20} />
          </button>
          <div className="h-8 w-px bg-border" />
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-semibold text-on-surface">
                {userName}
              </p>
              <p className="font-mono text-[10px] text-on-surface-variant">
                ID: {userId}
              </p>
            </div>
            <div className="size-10 overflow-hidden rounded-full border border-primary-container bg-surface-container-high" />
          </div>
        </div>
      </header>

      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 flex items-center justify-between border-b border-border bg-surface px-4 z-50">
        <button
          onClick={onMenuToggle}
          className="text-on-surface-variant transition-colors hover:text-primary"
        >
          <Menu size={24} />
        </button>
        <span className="font-heading text-lg font-bold tracking-tight text-primary">
          ExamGuard AI
        </span>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <button className="text-on-surface-variant transition-colors hover:text-primary">
            <Bell size={20} />
          </button>
          <div className="size-8 overflow-hidden rounded-full border border-border bg-surface-container-high" />
        </div>
      </header>
    </>
  );
}
