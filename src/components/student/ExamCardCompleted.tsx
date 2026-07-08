import { ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type ExamCardCompletedProps = {
  title: string
  course: string
  professor: string
  dateLabel: string
  score: string
  integrityPercent: number
  onViewResults?: () => void
}

export default function ExamCardCompleted({
  title,
  course,
  professor,
  dateLabel,
  score,
  integrityPercent,
  onViewResults,
}: ExamCardCompletedProps) {
  return (
    <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <Badge variant="success" className="uppercase tracking-wider font-bold text-[10px]">
          PASSED
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

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-3 bg-surface-container rounded-lg border border-outline-variant/30 text-center">
          <p className="text-[10px] font-mono font-medium text-outline uppercase mb-1">
            SCORE
          </p>
          <p className="font-heading text-2xl font-semibold text-primary">
            {score}
          </p>
        </div>
        <div className="p-3 bg-surface-container rounded-lg border border-outline-variant/30 text-center">
          <p className="text-[10px] font-mono font-medium text-outline uppercase mb-1">
            INTEGRITY
          </p>
          <div className="flex items-center justify-center gap-1.5">
            <span className="font-heading text-2xl font-semibold text-on-surface">
              {integrityPercent}%
            </span>
            <ShieldCheck size={18} className="text-green-400" />
          </div>
        </div>
      </div>

      <Button
        variant="outline"
        onClick={onViewResults}
        className="mt-auto w-full border-primary/20 text-primary hover:bg-primary/10"
      >
        View Results
      </Button>
    </div>
  )
}
