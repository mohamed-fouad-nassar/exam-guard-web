import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/shared/ModeToggle";
import SubmitExamButton from "./SubmitExamButton";

type ExamSessionHeaderProps = {
  title?: string;
  subtitle?: string;
  timer: string;
  onTimerClick?: () => void;
  onSubmit?: () => void;
  className?: string;
};

export default function ExamSessionHeader({
  title = "Midterm — CS301",
  subtitle = "Data Structures & Algorithms",
  timer,
  onTimerClick,
  onSubmit,
  className,
}: ExamSessionHeaderProps) {
  return (
    <header
      className={cn(
        "flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-4 md:px-12 py-3 md:py-4 border-b border-outline-variant bg-surface/80 backdrop-blur-sm sticky top-0 z-20",
        className,
      )}
    >
      <div className="flex items-center gap-3 min-w-0">
        <div className="min-w-0">
          <p className="font-heading text-xs md:text-sm font-semibold text-on-surface truncate">
            {title}
          </p>
          <p className="font-mono text-[10px] text-on-surface-variant tracking-wider uppercase truncate">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4 flex-wrap">
        <ModeToggle />
        <div className="h-6 w-px bg-outline-variant hidden sm:block" />
        <button
          onClick={onTimerClick}
          className="flex items-center gap-1 md:gap-2 font-mono text-label-mono text-amber-600 dark:text-amber-400 bg-amber-100/60 dark:bg-amber-900/20 border border-amber-300/60 dark:border-amber-800/50 px-3 md:px-4 py-1.5 md:py-2 rounded-lg hover:bg-amber-200/60 dark:hover:bg-amber-900/30 transition-colors tabular-nums"
        >
          <Clock size={14} />
          {timer}
        </button>

        <SubmitExamButton onClick={onSubmit} className="px-3 md:px-5 py-1.5 md:py-2 text-[11px] md:text-sm" />
      </div>
    </header>
  );
}
