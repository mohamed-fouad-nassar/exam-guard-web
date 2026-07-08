import { cn } from "@/lib/utils"

type ScoreDisplayProps = {
  score: number
  total?: number
  className?: string
}

const scoreColor = (pct: number) => {
  if (pct >= 90) return "text-sky-400"
  if (pct >= 70) return "text-green-400"
  if (pct >= 50) return "text-amber-400"
  return "text-red-400"
}

export default function ScoreDisplay({
  score,
  total = 100,
  className,
}: ScoreDisplayProps) {
  const pct = total > 0 ? (score / total) * 100 : 0
  return (
    <span className={cn("font-mono", className)}>
      <span className={cn("font-bold", scoreColor(pct))}>{score}</span>
      <span className="text-on-surface-variant"> / {total}</span>
    </span>
  )
}
