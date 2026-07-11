import {
  Plus,
  FileText,
  Radio,
  Scale,
  Database,
  PlusCircle,
  Upload,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { PATHS } from "@/router/paths";
import DashboardHeading from "@/components/shared/DashboardHeading";
import ProfessorStatCard from "@/components/professor/dashboard/ProfessorStatCard";
import QuickActions from "@/components/professor/dashboard/QuickActions";
import type { QuickAction } from "@/components/professor/dashboard/QuickActions";
import SectionCard from "@/components/professor/dashboard/SectionCard";
import RecentExamsEmpty from "@/components/professor/dashboard/RecentExamsEmpty";

const today = new Date();
const formattedDate = today.toLocaleDateString("en-US", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});
const hour = today.getHours();
const greeting =
  hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

const statCards = [
  {
    icon: FileText,
    label: "Total Exams",
    value: "0",
    subtitle: "No exams recorded",
  },
  {
    icon: Radio,
    label: "Active Now",
    value: "0",
    subtitle: "Idle",
    iconColorClassName: "text-secondary",
  },
  {
    icon: Scale,
    label: "Flagged Today",
    value: "0",
    subtitle: "Clean slate",
    iconColorClassName: "text-error",
  },
  {
    icon: Database,
    label: "Question Bank",
    value: "0",
    subtitle: "Library empty",
    iconColorClassName: "text-tertiary",
  },
];

const quickActions: QuickAction[] = [
  { icon: PlusCircle, label: "Create Exam", href: "/professor/exams/create" },
  { icon: Upload, label: "Import Students", href: "/professor/students" },
  { icon: BarChart3, label: "View Analytics", href: "#" },
];

export default function ProfessorDashboard() {
  return (
    <div className="space-y-6 lg:space-y-8">
      <DashboardHeading
        title={`${greeting}, Dr. Ahmed Mahmoud`}
        description={`${formattedDate} — Welcome back to the Proctor Command Center. Everything is quiet.`}
      >
        <Button
          asChild
          className="bg-primary-container text-on-primary-container hover:brightness-110 shadow-lg shadow-primary/10 px-6 py-5"
        >
          <Link to={PATHS.PROFESSOR.EXAM_BUILDER}>
            <Plus size={20} />
            <span className="font-semibold">Start New Session</span>
          </Link>
        </Button>
      </DashboardHeading>

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
        {statCards.map((card) => (
          <ProfessorStatCard key={card.label} {...card} />
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
        <div className="lg:col-span-3">
          <QuickActions actions={quickActions} />
        </div>

        <div className="lg:col-span-9">
          <SectionCard title="Recent Exams">
            <RecentExamsEmpty />
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
