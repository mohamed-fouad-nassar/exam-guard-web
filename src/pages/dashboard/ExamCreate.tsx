import { useLocation, useNavigate } from "react-router";
import { Outlet } from "react-router";
import {
  Save,
  Eye,
  FileText,
  ListChecks,
  SlidersHorizontal,
  Monitor,
} from "lucide-react";
import ExamBuilderHeader from "@/components/exam/builder/ExamBuilderHeader";
import type { BuilderAction } from "@/components/exam/builder/ExamBuilderHeader";
import ExamBuilderTabs from "@/components/exam/builder/ExamBuilderTabs";
import type { BuilderTab } from "@/components/exam/builder/ExamBuilderTabs";

const tabRoutes: Record<string, string> = {
  "Basic Information": "",
  Questions: "questions",
  Settings: "settings",
  Preview: "preview",
};

const routeToLabel: Record<string, string> = {
  "": "Basic Information",
  questions: "Questions",
  settings: "Settings",
  preview: "Preview",
};

const builderTabs: BuilderTab[] = [
  { label: "Basic Information", icon: FileText },
  { label: "Questions", icon: ListChecks },
  { label: "Settings", icon: SlidersHorizontal },
  { label: "Preview", icon: Monitor },
];

export default function ExamCreate() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const currentSegment = pathname.split("/").pop() ?? "";
  const activeTab = routeToLabel[currentSegment] ?? "Basic Information";

  const primaryAction: BuilderAction = {
    label: "Save",
    icon: <Save size={18} />,
  };

  const secondaryAction: BuilderAction = {
    label: "Preview",
    icon: <Eye size={18} />,
  };

  function handleTabChange(label: string) {
    const route = tabRoutes[label];
    navigate(route, { relative: "route" });
  }

  return (
    <div className="min-h-full flex flex-col">
      <div className="sticky top-16 z-10 -mx-6 px-6 pb-px space-y-4 backdrop-blur-xl">
        <ExamBuilderHeader
          title="Create New Exam"
          subtitle="Configure exam parameters and integrity settings."
          primaryAction={primaryAction}
          secondaryAction={secondaryAction}
        />

        <ExamBuilderTabs
          tabs={builderTabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      </div>

      <Outlet />
    </div>
  );
}
