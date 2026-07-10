import { Plus } from "lucide-react";
import QuestionCard from "./QuestionCard";
import type { QuestionData } from "./QuestionCard";

type QuestionListProps = {
  questions: QuestionData[];
  onAddQuestion?: () => void;
  onEditQuestion?: (index: number) => void;
  onCopyQuestion?: (index: number) => void;
  onDeleteQuestion?: (index: number) => void;
};

export default function QuestionList({
  questions,
  onAddQuestion,
  onEditQuestion,
  onCopyQuestion,
  onDeleteQuestion,
}: QuestionListProps) {
  const accentForIndex = (i: number): "primary" | "tertiary" =>
    i % 2 === 0 ? "primary" : "tertiary";

  return (
    <div className="space-y-4">
      <button
        onClick={onAddQuestion}
        className="w-full py-8 rounded-xl border-2 border-dashed border-outline-variant/40 flex flex-col items-center justify-center gap-2 hover:bg-surface-container transition-all group cursor-pointer"
      >
        <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Plus size={20} className="text-primary" />
        </div>
        <span className="font-sans text-sm font-semibold leading-none text-on-surface-variant">
          Add New Question
        </span>
      </button>

      {questions.map((q, i) => (
        <QuestionCard
          key={i}
          number={q.number}
          type={q.type}
          question={q.question}
          points={q.points}
          accent={accentForIndex(i)}
          onEdit={() => onEditQuestion?.(i)}
          onCopy={() => onCopyQuestion?.(i)}
          onDelete={() => onDeleteQuestion?.(i)}
        />
      ))}
    </div>
  );
}
