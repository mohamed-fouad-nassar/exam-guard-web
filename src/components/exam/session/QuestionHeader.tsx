import { Signal, SignalHigh, SignalMedium } from "lucide-react";
import { cn } from "@/lib/utils";

type QuestionHeaderProps = {
  number: number;
  total?: number;
  points: number;
  difficulty: "easy" | "medium" | "hard";
  className?: string;
};

const difficultyConfig = {
  easy: { icon: Signal, text: "EASY", color: "text-green-400" },
  medium: { icon: SignalMedium, text: "MEDIUM DIFFICULTY", color: "text-amber-400" },
  hard: { icon: SignalHigh, text: "HARD", color: "text-red-400" },
};

export default function QuestionHeader({
  number,
  total,
  points,
  difficulty,
  className,
}: QuestionHeaderProps) {
  const diff = difficultyConfig[difficulty];
  const Icon = diff.icon;

  return (
    <div className={cn("flex justify-between items-center", className)}>
      <div className="flex items-center gap-3">
        <span className="bg-secondary-container text-on-secondary-container font-mono text-[12px] px-3 py-1 rounded">
          QUESTION {number.toString().padStart(2, "0")}
        </span>
        <span className="text-on-surface-variant border border-outline-variant px-3 py-1 rounded font-mono text-[12px]">
          {points} POINTS
        </span>
      </div>
      <span className={cn("flex items-center gap-1 font-mono text-[12px]", diff.color)}>
        <Icon size={14} />
        {diff.text}
      </span>
    </div>
  );
}
