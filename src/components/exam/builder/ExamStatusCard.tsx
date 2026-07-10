import { Shield } from "lucide-react";

type ExamStatusCardProps = {
  status?: string;
  title?: string;
  scheduledDate?: string;
  monitoringLevel?: string;
};

export default function ExamStatusCard({
  status = "Published",
  title = "Advanced Algorithms Final (CS-402)",
  scheduledDate = "Oct 24, 2024 • 09:00 AM EST",
  monitoringLevel = "AI-High (Strict)",
}: ExamStatusCardProps) {
  return (
    <div className="bg-surface-container/70 backdrop-blur-md border border-outline-variant/50 rounded-xl p-6 space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-on-surface-variant font-mono text-[12px] font-medium tracking-[0.05em] uppercase">
          Status
        </span>
        <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-green-100 text-green-700 border border-green-300 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800 uppercase tracking-widest">
          {status}
        </span>
      </div>
      <div className="h-px bg-outline-variant/30" />
      <div className="space-y-3">
        <div className="flex flex-col">
          <span className="text-on-surface-variant text-[11px] uppercase opacity-60">
            Exam Title
          </span>
          <span className="font-heading text-lg text-on-surface">
            {title}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-on-surface-variant text-[11px] uppercase opacity-60">
            Scheduled Date
          </span>
          <span className="text-sm text-on-surface">{scheduledDate}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-on-surface-variant text-[11px] uppercase opacity-60">
            Monitoring Level
          </span>
          <span className="text-sm text-primary flex items-center gap-1">
            <Shield size={14} fill="currentColor" />
            {monitoringLevel}
          </span>
        </div>
      </div>
    </div>
  );
}
