import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type ExamCardFlaggedProps = {
  title: string
  course: string
  professor: string
  dateLabel: string
  integrityScore: number
  integrityWarning: string
  onViewReport?: () => void
}

export default function ExamCardFlagged({
  title,
  course,
  professor,
  dateLabel,
  integrityScore,
  integrityWarning,
  onViewReport,
}: ExamCardFlaggedProps) {
  return (
    <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant flex flex-col h-full opacity-90">
      <div className="flex justify-between items-start mb-4">
        <Badge variant="warning" className="uppercase tracking-wider font-bold text-[10px]">
          FLAGGED
        </Badge>
        <span className="text-[11px] font-mono font-medium text-outline">
          {dateLabel}
        </span>
      </div>

      <h4 className="font-heading text-xl font-semibold mb-1 text-on-surface">
        {title}
      </h4>
      <p className="text-sm text-on-surface-variant mb-6">
        {course} &bull; {professor}
      </p>

      <div className="mb-6">
        <div className="flex justify-between text-[11px] font-mono font-medium text-outline mb-2">
          <span>INTEGRITY SCORE</span>
          <span className="text-error font-bold">{integrityScore}%</span>
        </div>
        <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
          <div
            className="h-full bg-error rounded-full"
            style={{ width: `${integrityScore}%` }}
          />
        </div>
        <p className="mt-2 text-[11px] text-on-error-container bg-error-container/20 p-2 rounded border border-error/20 flex items-start gap-1.5">
          <AlertTriangle size={12} className="shrink-0 mt-0.5" />
          {integrityWarning}
        </p>
      </div>

      <Button
        variant="outline"
        onClick={onViewReport}
        className="mt-auto w-full"
      >
        View Integrity Report
      </Button>
    </div>
  )
}
