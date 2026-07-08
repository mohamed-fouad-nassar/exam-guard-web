import { Timer, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

type ExamCardActiveProps = {
  title: string
  course: string
  professor: string
  timeRemaining: string
  onStart?: () => void
}

export default function ExamCardActive({
  title,
  course,
  professor,
  timeRemaining,
  onStart,
}: ExamCardActiveProps) {
  return (
    <div className="relative group bg-surface-container p-6 rounded-xl border border-primary/40 flex flex-col h-full overflow-hidden">
      <div className="absolute -right-4 -top-4 opacity-5 pointer-events-none">
        <Timer size={120} />
      </div>

      <div className="flex justify-between items-start mb-4">
        <div className="px-2.5 py-1 rounded bg-green-900/30 border border-green-800 flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] font-bold text-green-400 uppercase tracking-wider">
            LIVE
          </span>
        </div>
        <span className="text-sm font-mono font-medium text-primary">
          {timeRemaining}
        </span>
      </div>

      <h4 className="font-heading text-2xl font-semibold mb-1 text-on-surface">
        {title}
      </h4>
      <p className="text-sm text-on-surface-variant mb-6">
        {course} &bull; {professor}
      </p>

      <div className="mt-auto">
        <Button onClick={onStart} className="w-full" size="lg">
          <Play size={20} fill="currentColor" />
          Start Exam
        </Button>
      </div>
    </div>
  )
}
