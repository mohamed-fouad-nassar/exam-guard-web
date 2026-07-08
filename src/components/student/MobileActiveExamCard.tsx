import { Clock, Timer } from "lucide-react"
import { Button } from "@/components/ui/button"

type MobileActiveExamCardProps = {
  courseCode: string
  courseName: string
  title: string
  endsAt: string
  timeLeft: string
  onStart?: () => void
}

export default function MobileActiveExamCard({
  courseCode,
  courseName,
  title,
  endsAt,
  timeLeft,
  onStart,
}: MobileActiveExamCardProps) {
  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-mono text-xs font-medium text-primary flex items-center gap-2">
          <span className="relative flex size-2">
            <span className="animate-ping absolute inline-flex size-full rounded-full bg-error opacity-75" />
            <span className="relative inline-flex rounded-full size-2 bg-error" />
          </span>
          LIVE NOW
        </h2>
      </div>
      <div className="bg-surface-container-highest border border-primary/30 rounded-xl overflow-hidden relative shadow-lg">
        <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
          <Timer size={64} className="text-primary" />
        </div>
        <div className="p-5 relative z-10">
          <p className="font-mono text-[10px] text-primary-fixed mb-1 uppercase tracking-widest">
            {courseCode} &bull; {courseName}
          </p>
          <h3 className="font-heading text-2xl font-semibold text-on-surface mb-4 leading-tight">
            {title}
          </h3>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1.5 text-on-surface-variant text-sm">
              <Clock size={14} />
              <span>Ends {endsAt}</span>
            </div>
            <div className="flex items-center gap-1.5 text-on-surface-variant text-sm">
              <Timer size={14} />
              <span>{timeLeft}</span>
            </div>
          </div>
          <Button
            onClick={onStart}
            className="w-full py-4 text-base shadow-lg shadow-primary-container/20"
          >
            Start Exam
          </Button>
        </div>
      </div>
    </section>
  )
}
