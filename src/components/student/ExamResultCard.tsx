import { FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type ExamResultCardProps = {
  title: string;
  subtitle: string;
  date: string;
  score: string;
  integrityVariant: "success" | "warning";
  integrityLabel: string;
  integrityIcon?: "verified" | "warning";
};

export default function ExamResultCard({
  title,
  subtitle,
  date,
  score,
  integrityVariant,
  integrityLabel,
  integrityIcon,
}: ExamResultCardProps) {
  return (
    <div className="p-4 bg-surface-container border border-outline-variant rounded-xl flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h4 className="font-heading text-lg font-bold text-on-surface leading-tight">
            {title}
          </h4>
          <p className="text-xs text-on-surface-variant">{subtitle}</p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
            {date}
          </p>
        </div>
        <div className="text-right">
          <p className="font-heading text-lg font-bold text-primary">{score}</p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-outline">
            SCORE
          </p>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap">
        <Badge variant={integrityVariant}>
          {integrityIcon === "warning" ? "⚠" : "✓"} {integrityLabel}
        </Badge>
        <Badge variant="ghost" className="border border-border">
          <FileText size={12} /> REPORT READY
        </Badge>
      </div>
    </div>
  );
}
