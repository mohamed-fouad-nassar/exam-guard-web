import { Calendar, Info, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type ExamCardScheduledProps = {
  title: string
  course: string
  professor: string
  dateLabel: string
  hasSystemCheck?: boolean
  isLocked?: boolean
  duration?: string
  examId?: string
  onDetails?: () => void
  onEnterLobby?: () => void
}

export default function ExamCardScheduled({
  title,
  course,
  professor,
  dateLabel,
  hasSystemCheck,
  isLocked,
  duration,
  examId,
  onDetails,
  onEnterLobby,
}: ExamCardScheduledProps) {
  return (
    <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant flex flex-col h-full hover:border-outline transition-colors">
      <div className="flex justify-between items-start mb-4">
        <Badge variant="outline" className="uppercase tracking-wider font-bold text-[10px]">
          SCHEDULED
        </Badge>
        <div className="flex items-center gap-1 text-outline">
          <Calendar size={16} />
          <span className="text-[11px] font-mono font-medium">{dateLabel}</span>
        </div>
      </div>

      <h4 className="font-heading text-xl font-semibold mb-1 text-on-surface">
        {title}
      </h4>
      <p className="text-sm text-on-surface-variant mb-6">
        {course} &bull; {professor}
      </p>

      {hasSystemCheck && (
        <div className="flex items-center gap-3 p-3 bg-surface-container rounded-lg border border-outline-variant/30 mb-6">
          <div className="size-8 rounded bg-surface-variant flex items-center justify-center shrink-0">
            <Info size={18} className="text-outline" />
          </div>
          <p className="text-[12px] text-on-surface-variant leading-relaxed">
            System check required 15 mins before start time.
          </p>
        </div>
      )}

      {duration && !hasSystemCheck && (
        <div className="flex justify-between text-sm text-outline mb-2 mt-auto">
          <span>Duration:</span>
          <span className="text-on-surface font-medium">{duration}</span>
        </div>
      )}

      <div className={hasSystemCheck ? "mt-auto grid grid-cols-2 gap-3" : "mt-auto flex flex-col gap-2"}>
        {hasSystemCheck ? (
          <>
            <Button variant="outline" onClick={onDetails}>
              Details
            </Button>
            <Button
              variant="outline"
              disabled={isLocked}
              onClick={onEnterLobby}
              className={isLocked ? "cursor-not-allowed" : ""}
            >
              {isLocked && <Lock size={18} />}
              Enter Lobby
            </Button>
          </>
        ) : duration ? (
          <Button variant="outline" onClick={onDetails} className="w-full">
            View Details
          </Button>
        ) : null}
      </div>

      {examId && (
        <div className="flex items-center justify-between pt-4 mt-4 border-t border-outline-variant">
          {examId && (
            <span className="text-xs font-mono font-medium text-on-surface-variant uppercase tracking-wider">
              Exam ID: {examId}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
