import { BookOpen, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

type ExamsEmptyStateProps = {
  message?: string
  onEnroll?: () => void
}

export default function ExamsEmptyState({
  message = "You are not enrolled in any exams yet.",
  onEnroll,
}: ExamsEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="size-16 rounded-full bg-surface-container border border-outline-variant/50 flex items-center justify-center mb-5">
        <BookOpen size={28} className="text-on-surface-variant" />
      </div>
      <p className="text-on-surface-variant text-sm mb-6 text-center max-w-xs">
        {message}
      </p>
      {onEnroll && (
        <Button onClick={onEnroll} className="gap-2">
          <Plus size={16} />
          Enroll in Exam
        </Button>
      )}
    </div>
  )
}
