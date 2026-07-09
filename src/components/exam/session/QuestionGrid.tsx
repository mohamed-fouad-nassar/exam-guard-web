import { cn } from "@/lib/utils";

type QuestionStatus =
  | "answered"
  | "current"
  | "marked"
  | "skipped"
  | "unanswered";

type GridQuestion = {
  number: number;
  status: QuestionStatus;
};

type QuestionGridProps = {
  questions: GridQuestion[];
  onSelect?: (number: number) => void;
  className?: string;
};

const statusStyles: Record<QuestionStatus, string> = {
  answered: "bg-primary-container text-on-primary-container hover:opacity-80",
  current:
    "border-2 border-primary bg-secondary-container/20 text-primary shadow-[0_0_10px_rgba(180,197,255,0.3)]",
  marked: "bg-amber-400 text-on-error hover:opacity-80",
  skipped: "border-2 border-error/50 text-error hover:bg-surface-variant",
  unanswered:
    "border border-outline-variant text-on-surface-variant hover:bg-surface-variant",
};

export default function QuestionGrid({
  questions,
  onSelect,
  className,
}: QuestionGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-5 xl:grid-cols-7 gap-1.5 pb-4 border-b border-outline-variant",
        className,
      )}
    >
      {questions.map((q) => (
        <button
          key={q.number}
          onClick={() => onSelect?.(q.number)}
          className={cn(
            "aspect-square flex items-center justify-center rounded font-mono text-[10px] cursor-pointer transition-colors",
            statusStyles[q.status],
          )}
        >
          {q.number}
        </button>
      ))}
    </div>
  );
}
