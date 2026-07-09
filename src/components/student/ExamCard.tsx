import ExamCardActive from "./ExamCardActive"
import ExamCardScheduled from "./ExamCardScheduled"
import ExamCardCompleted from "./ExamCardCompleted"
import ExamCardFlagged from "./ExamCardFlagged"

type ExamCardCallbacks = {
  onStart?: () => void
  onEnterLobby?: () => void
  onDetails?: () => void
  onViewResults?: () => void
  onViewReport?: () => void
}

export type ExamCardProps = {
  title: string
  course: string
  professor: string
} & ExamCardCallbacks & (
  | { status: "active"; timeRemaining: string }
  | { status: "scheduled"; dateLabel: string; hasSystemCheck?: boolean; isLocked?: boolean; duration?: string; examId?: string }
  | { status: "completed"; dateLabel: string; score: string; integrityPercent: number }
  | { status: "flagged"; dateLabel: string; integrityScore: number; integrityWarning: string }
)

export default function ExamCard(props: ExamCardProps) {
  switch (props.status) {
    case "active":
      return (
        <ExamCardActive
          title={props.title}
          course={props.course}
          professor={props.professor}
          timeRemaining={props.timeRemaining}
          onStart={props.onStart}
        />
      )
    case "scheduled":
      return (
        <ExamCardScheduled
          title={props.title}
          course={props.course}
          professor={props.professor}
          dateLabel={props.dateLabel}
          hasSystemCheck={props.hasSystemCheck}
          isLocked={props.isLocked}
          duration={props.duration}
          examId={props.examId}
          onDetails={props.onDetails}
          onEnterLobby={props.onEnterLobby}
        />
      )
    case "completed":
      return (
        <ExamCardCompleted
          title={props.title}
          course={props.course}
          professor={props.professor}
          dateLabel={props.dateLabel}
          score={props.score}
          integrityPercent={props.integrityPercent}
          onViewResults={props.onViewResults}
        />
      )
    case "flagged":
      return (
        <ExamCardFlagged
          title={props.title}
          course={props.course}
          professor={props.professor}
          dateLabel={props.dateLabel}
          integrityScore={props.integrityScore}
          integrityWarning={props.integrityWarning}
          onViewReport={props.onViewReport}
        />
      )
  }
}
