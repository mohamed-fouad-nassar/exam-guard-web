import { History } from "lucide-react";

type StatRow = {
  label: string;
  value: string;
};

type ExamSummaryCardProps = {
  status: string;
  progressPercent: number;
  stats: StatRow[];
  lastSaved: string;
};

export default function ExamSummaryCard({
  status,
  progressPercent,
  stats,
  lastSaved,
}: ExamSummaryCardProps) {
  return (
    <div className="bg-surface-container border border-outline-variant rounded-xl overflow-hidden">
      <div className="p-6 border-b border-outline-variant bg-surface-container-high flex justify-between items-center">
        <h4 className="font-heading text-lg font-semibold text-on-surface">
          Exam Summary
        </h4>
        <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-amber-100 text-amber-700 border border-amber-300 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800 uppercase tracking-wider">
          {status}
        </span>
      </div>
      <div className="p-6 space-y-6">
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between items-end">
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
              Setup Progress
            </span>
            <span className="text-sm font-bold text-primary">
              {progressPercent}%
            </span>
          </div>
          <div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden">
            <div
              className="h-full bg-primary-container rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center justify-between text-sm leading-5"
            >
              <span className="text-on-surface-variant">{stat.label}</span>
              <span className="text-on-surface font-semibold">
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        {/* Last Saved */}
        <div className="pt-4 border-t border-outline-variant flex items-center gap-2 text-on-surface-variant text-xs font-mono font-medium tracking-wider">
          <History size={14} />
          Last Saved: {lastSaved}
        </div>
      </div>
    </div>
  );
}
