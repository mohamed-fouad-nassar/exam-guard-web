import {
  ClipboardList,
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
  FlaskConical,
  Terminal,
  FunctionSquare,
  GraduationCap,
  Timer,
} from "lucide-react";
import WelcomeSection from "@/components/shared/dashboard/WelcomeSection";
import StatsSection from "@/components/shared/dashboard/StatsSection";
import type { StatCardData } from "@/components/shared/dashboard/StatsSection";
import UpcomingExamsSection from "@/components/shared/dashboard/UpcomingExamsSection";
import type { UpcomingExam } from "@/components/shared/dashboard/UpcomingExamsSection";
import ExamHistorySection from "@/components/shared/dashboard/ExamHistorySection";
import type {
  HistoryRow,
  RecentResult,
} from "@/components/shared/dashboard/ExamHistorySection";

const statCards: StatCardData[] = [
  {
    icon: ClipboardList,
    label: "Upcoming",
    value: "3",
    subtitle: "Next in 2 days",
    mobileLabel: "PENDING",
    mobileValue: "02",
    mobileIcon: Timer,
  },
  {
    icon: TrendingUp,
    label: "Avg. Score",
    value: "84%",
    subtitle: "↑ +6% vs last month",
    subtitleClassName: "text-green-400",
    mobileLabel: "AVERAGE SCORE",
    mobileValue: "94.2%",
    mobileIcon: GraduationCap,
  },
  {
    icon: CheckCircle2,
    label: "Completed",
    value: "12",
    subtitle: "This semester",
  },
  {
    icon: ShieldCheck,
    label: "Integrity",
    value: "94",
    mobileLabel: "INTEGRITY RATE",
    mobileValue: "100%",
  },
];

const upcomingExams: UpcomingExam[] = [
  {
    icon: FlaskConical,
    title: "Midterm 2025 — Data Structures",
    date: "Jan 09",
    time: "14:00 PM",
    variant: "urgent",
  },
  {
    icon: Terminal,
    title: "Software Engineering Final",
    date: "Jan 15",
    time: "09:00 AM",
    variant: "future",
  },
  {
    icon: FunctionSquare,
    title: "Discrete Mathematics Quiz 4",
    date: "Jan 20",
    time: "11:30 AM",
    variant: "future",
  },
];

const examHistory: HistoryRow[] = [
  {
    title: "Algorithms Quiz 2",
    subtitle: "Advanced Computer Science",
    date: "Dec 22, 2024",
    score: "92%",
    integrityBar: 98,
    integrityVariant: "success",
    integrityLabel: "● Verified",
  },
  {
    title: "Network Security Midterm",
    subtitle: "Cybersecurity Track",
    date: "Dec 15, 2024",
    score: "88%",
    integrityBar: 95,
    integrityVariant: "success",
    integrityLabel: "● Verified",
  },
  {
    title: "Database Management Quiz 3",
    subtitle: "Information Systems",
    date: "Dec 08, 2024",
    score: "76%",
    integrityBar: 82,
    integrityVariant: "warning",
    integrityLabel: "● Reviewed",
  },
];

const recentResults: RecentResult[] = [
  {
    title: "Neural Networks I",
    subtitle: "AI & Machine Learning",
    date: "May 10, 2024",
    score: "98%",
    integrityVariant: "success",
    integrityLabel: "CLEAN INTEGRITY",
  },
  {
    title: "Ethics in AI",
    subtitle: "AI & Machine Learning",
    date: "May 04, 2024",
    score: "89%",
    integrityVariant: "warning",
    integrityLabel: "FLAGGED: EYE TRACK",
    integrityIcon: "warning",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <WelcomeSection />
      <StatsSection cards={statCards} />
      <UpcomingExamsSection exams={upcomingExams} />
      <ExamHistorySection rows={examHistory} mobileResults={recentResults} />
    </div>
  );
}
