import { MoreVertical, Clock, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export type CardStatus = "active" | "draft" | "scheduled" | "completed"

export type MobileExamData = {
  id: string
  title: string
  courseCode: string
  section?: string
  status: CardStatus
  typeLabel?: string
  questions: number
  duration: string
  date?: string
  time?: string
  completed?: boolean
  accentColor?: boolean
}

type ProfessorExamCardProps = {
  exam: MobileExamData
  onMenuClick?: () => void
}

const statusBadge: Record<CardStatus, {
  label: string
  variant: "success" | "secondary" | "outline"
  dot?: boolean
  muted?: boolean
}> = {
  active:    { label: "ACTIVE",    variant: "success",   dot: true },
  draft:     { label: "DRAFT",     variant: "secondary" },
  scheduled: { label: "SCHEDULED", variant: "outline" },
  completed: { label: "COMPLETED", variant: "outline",  muted: true },
}

const typeBadge: Record<string, { label: string; variant: "secondary" | "outline" }> = {
  proctor:  { label: "REMOTE PROCTOR", variant: "secondary" },
  inperson: { label: "IN-PERSON",      variant: "outline" },
}

export default function ProfessorExamCard({
  exam,
  onMenuClick,
}: ProfessorExamCardProps) {
  const { title, courseCode, section, status, typeLabel, questions, duration, date, time, completed, accentColor } = exam
  const sb = statusBadge[status]
  const tb = typeLabel ? typeBadge[typeLabel] : null
  const isCompleted = completed

  return (
    <div
      className={cn(
        "w-full text-left bg-surface-container-low border border-outline-variant rounded-xl p-4 flex flex-col gap-3 relative overflow-hidden",
        isCompleted && "bg-surface-container-low/50 border-outline-variant/50 grayscale-[0.5]",
      )}
    >
      {accentColor && (
        <div className="absolute top-0 left-0 w-1 h-full bg-primary/50" />
      )}

      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h3 className={cn(
            "font-heading text-[18px] text-on-surface leading-tight",
            isCompleted && "text-on-surface-variant line-through",
          )}>
            {title}
          </h3>
          <p className="font-mono text-xs text-primary uppercase">
            {courseCode}{section ? ` • ${section}` : ""}
          </p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onMenuClick?.()
          }}
          className="p-1 text-on-surface-variant hover:bg-surface-variant rounded-lg transition-colors shrink-0"
        >
          <MoreVertical size={18} />
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mt-1">
        <Badge
          variant={sb.variant}
          className={cn(
            "rounded-full px-2.5 py-0.5 text-[11px] font-bold h-auto flex items-center gap-1",
            sb.muted && "opacity-60",
          )}
        >
          {sb.dot && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
          {sb.label}
        </Badge>
        {tb && (
          <Badge
            variant={tb.variant}
            className="rounded-full px-2.5 py-0.5 text-[11px] font-bold h-auto"
          >
            {tb.label}
          </Badge>
        )}
      </div>

      <div className={cn(
        "grid grid-cols-2 gap-4 mt-2 pt-3 border-t border-outline-variant/30",
        isCompleted && "opacity-50",
      )}>
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-on-surface-variant">
            {questions} Questions
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={18} className="text-on-surface-variant shrink-0" />
          <span className="font-mono text-xs text-on-surface-variant">
            {duration}
          </span>
        </div>
        {date && (
          <div className="flex items-center gap-2 col-span-2">
            <Calendar size={18} className="text-on-surface-variant shrink-0" />
            <span className="font-mono text-xs text-on-surface-variant">
              {date}{time ? ` • ${time}` : ""}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
