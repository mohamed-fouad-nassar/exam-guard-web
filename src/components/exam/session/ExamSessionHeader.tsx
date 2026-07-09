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
        "flex items-center justify-between px-12 py-4 border-b border-outline-variant bg-surface/80 backdrop-blur-sm sticky top-0 z-20",
        className,
      )}
    >
      <div className="flex items-center gap-4">
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
        <ModeToggle />
        <div className="h-6 w-px bg-outline-variant" />
        <button
          onClick={onTimerClick}
          className="flex items-center gap-2 font-mono text-label-mono text-amber-600 dark:text-amber-400 bg-amber-100/60 dark:bg-amber-900/20 border border-amber-300/60 dark:border-amber-800/50 px-4 py-2 rounded-lg hover:bg-amber-200/60 dark:hover:bg-amber-900/30 transition-colors tabular-nums"
        >
          <Clock size={14} />
          {timer}
        </button>

        <SubmitExamButton onClick={onSubmit} className="px-5 py-2" />
      </div>
    </header>
  );
}
