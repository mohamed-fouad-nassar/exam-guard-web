import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import ScoreDisplay from "@/components/shared/ScoreDisplay"

type MobileResultCardProps = {
  title: string
  subtitle: string
  status: "passed" | "flagged" | "failed" | "review"
  examDate: string
  score: number
  totalScore?: number
  integrityScore: number
}

const statusConfig = {
  passed: {
    label: "Passed",
    badgeVariant: "success" as const,
    integrityColor: "text-green-400",
    integrityBar: "bg-green-500",
    borderColor: "",
  },
  flagged: {
    label: "Review Required",
    badgeVariant: "warning" as const,
    integrityColor: "text-amber-400",
    integrityBar: "bg-amber-500",
    borderColor: "border-l-4 border-l-amber-500",
  },
  failed: {
    label: "Failed",
    badgeVariant: "destructive" as const,
    integrityColor: "text-green-400",
    integrityBar: "bg-green-500",
    borderColor: "",
  },
  review: {
    label: "Review Required",
    badgeVariant: "warning" as const,
    integrityColor: "text-amber-400",
    integrityBar: "bg-amber-500",
    borderColor: "border-l-4 border-l-amber-500",
  },
}

export default function MobileResultCard({
  title,
  subtitle,
  status,
  examDate,
  score,
  totalScore = 100,
  integrityScore,
}: MobileResultCardProps) {
  const cfg = statusConfig[status]
  const isFlagged = status === "flagged" || status === "review"
  const isFailed = status === "failed"

  return (
    <div
      className={cn(
        "bg-surface-container border border-outline-variant rounded-lg p-4 transition-all active:scale-[0.98]",
        cfg.borderColor,
        isFailed && "opacity-80 grayscale-[0.2]",
      )}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex flex-col">
          <h2 className="font-heading text-lg leading-tight mb-1 text-on-surface">
            {title}
          </h2>
          <span className="text-on-surface-variant text-xs uppercase tracking-wider font-bold">
            {subtitle}
          </span>
        </div>
        <Badge variant={cfg.badgeVariant} className="uppercase text-[10px] font-bold rounded">
          {cfg.label}
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col gap-1">
          <span className="text-on-surface-variant font-mono text-[10px] uppercase tracking-wider">
            Exam Date
          </span>
          <span className="font-mono text-sm text-primary">{examDate}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-on-surface-variant font-mono text-[10px] uppercase tracking-wider">
            Final Score
          </span>
          <ScoreDisplay score={score} total={totalScore} className="text-sm" />
        </div>
      </div>

      <div
        className={cn(
          "flex items-center justify-between p-3 bg-background rounded border mb-4",
          isFlagged ? "border-amber-800/20" : "border-outline-variant/30",
        )}
      >
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "text-[18px] font-bold",
              isFlagged ? "text-amber-400" : "text-green-400",
            )}
          >
            ✓
          </span>
          <span className="text-xs text-on-surface">Integrity Score</span>
        </div>
        <span className={cn("font-mono text-sm", cfg.integrityColor)}>
          {integrityScore}/100
        </span>
      </div>

      {isFlagged ? (
        <button className="w-full py-2 bg-amber-900/40 border border-amber-800/50 hover:bg-amber-800/60 text-amber-200 text-button font-semibold rounded transition-all flex items-center justify-center gap-2">
          <span>Investigate Flag</span>
          <span>→</span>
        </button>
      ) : isFailed ? (
        <button className="w-full py-2 bg-surface border border-outline-variant hover:bg-surface-variant text-on-surface-variant text-button font-semibold rounded transition-all flex items-center justify-center gap-2">
          <span>View Breakdown</span>
          <span>→</span>
        </button>
      ) : (
        <button className="w-full py-2 bg-secondary-container hover:bg-secondary-container/80 text-on-secondary-container text-button font-semibold rounded transition-all flex items-center justify-center gap-2">
          <span>View Details</span>
          <span>→</span>
        </button>
      )}
    </div>
  )
}
