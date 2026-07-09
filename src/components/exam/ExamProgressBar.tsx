import { cn } from "@/lib/utils";

type ExamProgressBarProps = {
  progress?: number;
  className?: string;
};

export default function ExamProgressBar({ progress = 0, className }: ExamProgressBarProps) {
  return (
    <div className={cn("h-1 bg-surface-container w-full shrink-0", className)}>
      <div
        className="h-full bg-primary-container transition-all duration-500"
        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
      />
    </div>
  );
}