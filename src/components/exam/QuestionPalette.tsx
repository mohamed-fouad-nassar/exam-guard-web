import { cn } from "@/lib/utils";

type QuestionStatus = "answered" | "current" | "not-visited" | "flagged" | "not-answered";

type QuestionPaletteProps = {
  totalQuestions?: number;
  duration?: string;
  questions?: { number: number; status: QuestionStatus }[];
};

const statusStyles: Record<QuestionStatus, string> = {
  answered:
    "bg-primary/20 text-primary border-primary/30 hover:bg-primary/30",
  current:
    "bg-primary-container text-on-primary-container border-primary-container ring-2 ring-primary/50 animate-pulse",
  "not-visited":
    "bg-surface-container-high text-on-surface-variant border-outline-variant hover:bg-surface-container-highest",
  flagged:
    "bg-amber-900/30 text-amber-400 border-amber-800 hover:bg-amber-900/50",
  "not-answered":
    "bg-surface-container text-on-surface-variant border border-dashed border-outline-variant/50 hover:bg-surface-container-high",
};

export default function QuestionPalette({
  totalQuestions = 40,
  duration = "60 min",
  questions,
}: QuestionPaletteProps) {
  const items = questions
    ? questions
    : Array.from({ length: totalQuestions }, (_, i) => ({
        number: i + 1,
        status: "not-visited" as QuestionStatus,
      }));

  return (
    <aside className="hidden lg:flex flex-col w-60 border-r border-outline-variant bg-surface-container-lowest shrink-0">
      <div className="px-4 py-4 border-b border-outline-variant">
        <h2 className="font-heading text-sm font-semibold text-on-surface tracking-tight">
          Question Palette
        </h2>
        <p className="font-mono text-[10px] text-on-surface-variant mt-0.5">
          {totalQuestions} Questions · {duration}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar p-4">
        <div className="grid grid-cols-5 gap-2">
          {items.map((q) => (
            <button
              key={q.number}
              className={cn(
                "aspect-square flex items-center justify-center rounded text-[11px] font-bold font-mono transition-colors",
                statusStyles[q.status],
              )}
            >
              {q.number}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-3 border-t border-outline-variant">
        <div className="flex flex-wrap gap-x-3 gap-y-1.5">
          <LegendItem color="bg-primary/20 border-primary/30" label="Answered" />
          <LegendItem color="bg-amber-900/30 border-amber-800" label="Flagged" />
          <LegendItem
            color="bg-surface-container border-dashed border-outline-variant/50"
            label="Not Visited"
          />
          <LegendItem
            color="bg-surface-container-high border-outline-variant"
            label="Unanswered"
          />
        </div>
      </div>
    </aside>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className={cn("w-2.5 h-2.5 rounded border", color)} />
      <span className="font-mono text-[10px] text-on-surface-variant">{label}</span>
    </div>
  );
}

