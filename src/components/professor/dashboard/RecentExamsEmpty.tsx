import { Shield, Plus } from "lucide-react"
import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { PATHS } from "@/router/paths"

export default function RecentExamsEmpty() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
      <div className="relative mb-6">
        <div className="w-24 h-24 rounded-full bg-primary-container/20 border border-primary/20 flex items-center justify-center">
          <Shield size={48} className="text-primary" />
        </div>
        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-10" />
      </div>
      <h3 className="font-heading text-xl font-semibold text-on-surface mb-2">
        No exams yet
      </h3>
      <p className="text-on-surface-variant max-w-sm mb-8 text-sm">
        Create your first exam to get started with automated proctoring and clinical grade assessment integrity.
      </p>
      <Button asChild variant="outline" className="gap-2">
        <Link to={PATHS.PROFESSOR.EXAM_BUILDER}>
          <Plus size={18} />
          Create New Exam
        </Link>
      </Button>
    </div>
  )
}
