import { Plus } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { PATHS } from "@/router/paths";
import DashboardHeading from "@/components/shared/DashboardHeading";

export default function ProfessorExamsHeader() {
  return (
    <DashboardHeading
      title="My Exams"
      description="Manage all quizzes, midterms, finals, and assignments."
    >
      <Button
        asChild
        className="bg-primary-container text-on-primary-container hover:brightness-110 shadow-lg shadow-primary/10 px-6 py-5"
      >
        <Link to={PATHS.PROFESSOR.EXAM_BUILDER}>
          <Plus size={20} />
          <span className="font-semibold text-sm">Create Exam</span>
        </Link>
      </Button>
    </DashboardHeading>
  );
}
