import { Copy, Trash2, PencilLine } from "lucide-react";

export type QuestionData = {
  number: number;
  type: string;
  question: string;
  points: number;
  accent?: "primary" | "tertiary";
};

type QuestionCardProps = QuestionData & {
  onEdit?: () => void;
  onCopy?: () => void;
  onDelete?: () => void;
};

const accentBorder = {
  primary: "border-l-primary-container",
  tertiary: "border-l-tertiary-container",
};

const accentText = {
  primary: "text-primary",
  tertiary: "text-tertiary",
};

const accentBg = {
  primary: "bg-primary-container/10",
  tertiary: "bg-tertiary-container/10",
};

export default function QuestionCard({
  number,
  type,
  question,
  points,
  accent = "primary",
  onEdit,
  onCopy,
  onDelete,
}: QuestionCardProps) {
  return (
    <div
      className={`bg-surface-container border border-outline-variant p-5 rounded-xl border-l-4 ${accentBorder[accent]} transition-all active:scale-[0.98]`}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <span
            className={`font-mono text-[12px] font-medium tracking-[0.05em] leading-none ${accentText[accent]} ${accentBg[accent]} px-2 py-1 rounded`}
          >
            Q{number}
          </span>
          <span className="text-[10px] uppercase tracking-wider font-bold text-secondary bg-secondary-container/30 px-2 py-1 rounded">
            {type}
          </span>
        </div>
        <div className="flex gap-2">
          {onCopy && (
            <button
              onClick={onCopy}
              className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
            >
              <Copy size={18} />
            </button>
          )}
          {onDelete && (
            <button
              onClick={onDelete}
              className="text-error hover:text-error/80 transition-colors cursor-pointer"
            >
              <Trash2 size={18} />
            </button>
          )}
        </div>
      </div>
      <p className="text-base leading-[1.6] text-foreground mb-4">
        {question}
      </p>
      <div className="flex justify-between items-center">
        <span className="font-mono text-[12px] font-medium tracking-[0.05em] leading-none text-on-surface-variant">
          {points} Points
        </span>
        {onEdit && (
          <button
            onClick={onEdit}
            className="flex items-center gap-1 text-primary font-sans text-sm font-semibold leading-none cursor-pointer"
          >
            Edit
            <PencilLine size={14} />
          </button>
        )}
      </div>
    </div>
  );
}
