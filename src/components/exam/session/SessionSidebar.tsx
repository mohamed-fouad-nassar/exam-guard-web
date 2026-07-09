import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import StatusSummary from "./StatusSummary";
import SessionLegend from "./SessionLegend";
import QuestionGrid from "./QuestionGrid";
import AutoSaveInfo from "./AutoSaveInfo";
import SubmitExamButton from "./SubmitExamButton";

type StatItem = {
  label: string;
  value: string;
  color: "primary" | "amber" | "on-surface";
};

type LegendItem = {
  color: string;
  label: string;
};

type QuestionStatus = "answered" | "current" | "marked" | "skipped" | "unanswered";

type GridQuestion = {
  number: number;
  status: QuestionStatus;
};

type SessionSidebarProps = {
  stats: StatItem[];
  legendItems: LegendItem[];
  questions: GridQuestion[];
  lastSynced: string;
  onQuestionSelect?: (number: number) => void;
  onSubmit?: () => void;
  onClose?: () => void;
  className?: string;
  mobile?: boolean;
};

export default function SessionSidebar({
  stats,
  legendItems,
  questions,
  lastSynced,
  onQuestionSelect,
  onSubmit,
  onClose,
  className,
  mobile,
}: SessionSidebarProps) {
  return (
    <aside
      className={cn(
        !mobile && "w-[30%] border-l",
        "bg-surface-container-low border-outline-variant flex flex-col p-6 overflow-y-auto h-screen sticky top-0",
        className,
      )}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-heading text-h3 text-on-surface">
          Question Navigator
        </h3>
        {mobile && onClose && (
          <button onClick={onClose} className="text-on-surface-variant hover:text-on-surface transition-colors">
            <X size={20} />
          </button>
        )}
      </div>

      <AutoSaveInfo lastSynced={lastSynced} className="mb-6" />

      <StatusSummary stats={stats} className="mb-6" />
      <SessionLegend items={legendItems} className="mb-4" />
      <QuestionGrid
        questions={questions}
        onSelect={onQuestionSelect}
      />

      <div className="mt-auto space-y-4 pt-6">
        <SubmitExamButton onClick={onSubmit} className="w-full py-2.5" />
      </div>
    </aside>
  );
}
