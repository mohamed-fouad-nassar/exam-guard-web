import { cn } from "@/lib/utils"

type IntegrityBarProps = {
  score: number
  className?: string
}

export default function IntegrityBar({ score, className }: IntegrityBarProps) {
  const isHigh = score >= 80
  return (
    <div className={cn("flex flex-col items-center gap-1", className)}>
      <span
        className={cn(
          "font-mono font-bold",
          isHigh ? "text-green-400" : "text-amber-400",
        )}
      >
        {score}
      </span>
      <div className="w-12 h-1 bg-surface-variant rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full",
            isHigh ? "bg-green-500" : "bg-amber-500",
          )}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  )
}
