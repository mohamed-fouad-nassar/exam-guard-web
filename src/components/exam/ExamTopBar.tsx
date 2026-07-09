import { cn } from "@/lib/utils";

type ExamTopBarProps = {
  title?: string;
  subtitle?: string;
  integrityStatus?: "secure" | "warning" | "critical";
  userName?: string;
  userId?: string;
};

const statusConfig = {
  secure: {
    dot: "bg-green-400",
    bg: "bg-green-900/30",
    border: "border-green-800",
    text: "text-green-400",
    label: "SECURE",
  },
  warning: {
    dot: "bg-amber-400",
    bg: "bg-amber-900/30",
    border: "border-amber-800",
    text: "text-amber-400",
    label: "WARNING",
  },
  critical: {
    dot: "bg-red-400",
    bg: "bg-red-900/30",
    border: "border-red-800",
    text: "text-red-400",
    label: "CRITICAL",
  },
};

export default function ExamTopBar({
  title = "Midterm — CS301",
  subtitle = "Data Structures & Algorithms",
  integrityStatus = "secure",
  userName = "Alex Rivera",
  userId = "240912-ST",
}: ExamTopBarProps) {
  const status = statusConfig[integrityStatus];

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-surface border-b border-outline-variant flex items-center justify-between px-6 z-50">
      <div className="flex items-center gap-4">
        <span className="font-heading text-lg font-bold tracking-tight text-primary">
          ExamGuard AI
        </span>
        <div className="h-6 w-px bg-outline-variant" />
        <div>
          <p className="font-heading text-sm font-semibold text-on-surface">
            {title}
          </p>
          <p className="font-mono text-[10px] text-on-surface-variant tracking-wider uppercase">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div
          className={cn(
            "flex items-center gap-2 px-3 py-1.5 rounded-full border",
            status.bg,
            status.border,
          )}
        >
          <span className={cn("size-2 rounded-full animate-pulse", status.dot)} />
          <span className={cn("font-mono text-[11px] font-semibold tracking-wider", status.text)}>
            {status.label}
          </span>
        </div>

        <div className="h-8 w-px bg-outline-variant" />

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-semibold text-on-surface">{userName}</p>
            <p className="font-mono text-[10px] text-on-surface-variant">ID: {userId}</p>
          </div>
          <div className="size-10 rounded-full border border-primary-container bg-surface-container-high overflow-hidden">
            <div className="size-full bg-surface-container-highest" />
          </div>
        </div>
      </div>
    </header>
  );
}