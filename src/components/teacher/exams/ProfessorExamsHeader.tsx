import { Plus } from "lucide-react"
import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { PATHS } from "@/router/paths"

export default function ProfessorExamsHeader() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
      <div>
        <h1 className="font-heading text-2xl sm:text-3xl font-semibold text-on-surface tracking-tight">
          My Exams
        </h1>
        <p className="text-sm sm:text-base text-on-surface-variant mt-1">
          Manage all quizzes, midterms, finals, and assignments.
        </p>
      </div>

      <Button asChild className="bg-primary-container text-on-primary-container hover:brightness-110 shadow-lg shadow-primary-container/20 sm:px-6 sm:py-2.5 sm:h-auto sm:rounded-lg sm:gap-2 w-12 h-12 rounded-xl sm:w-auto">
        <Link to={PATHS.PROFESSOR.EXAM_BUILDER}>
          <Plus size={20} />
          <span className="hidden sm:inline font-semibold text-sm">Create Exam</span>
        </Link>
      </Button>
    </div>
  )
}
