import { useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { PATHS } from "@/router/paths";
import { BookOpen } from "lucide-react";
import Filter from "@/components/shared/Filter";
import type { FilterTab } from "@/components/shared/Filter";
import SearchModal from "@/components/shared/SearchModal";
import SortSelect from "@/components/shared/SortSelect";
import type { SearchItem } from "@/components/shared/SearchModal";
import type { ExamCardProps } from "@/components/student/ExamCard";
import EnrollCard from "@/components/student/EnrollCard";
import ExamsEmptyState from "@/components/student/ExamsEmptyState";
import ExamCard from "@/components/student/ExamCard";
import MobileExamCard from "@/components/student/MobileExamCard";
import MobileActiveExamCard from "@/components/student/MobileActiveExamCard";

const desktopTabs: FilterTab[] = [
  { label: "All" },
  { label: "Upcoming" },
  { label: "Active" },
  { label: "Completed" },
  { label: "Graded" },
  { label: "Missed" },
];

const allExamItems: SearchItem[] = [
  {
    id: "1",
    title: "Operating Systems Final",
    subtitle: "CS402 • Prof. Sarah Jenkins • Active",
    icon: <BookOpen size={16} className="text-primary" />,
  },
  {
    id: "2",
    title: "Data Structures Midterm",
    subtitle: "CS205 • Prof. Marcus Thorne • Oct 24",
    icon: <BookOpen size={16} className="text-primary" />,
  },
  {
    id: "3",
    title: "Introduction to AI",
    subtitle: "AI101 • Dr. Emily Watson • Passed",
    icon: <BookOpen size={16} className="text-primary" />,
  },
  {
    id: "4",
    title: "Discrete Mathematics",
    subtitle: "MATH202 • Prof. David Lee • Flagged",
    icon: <BookOpen size={16} className="text-primary" />,
  },
  {
    id: "5",
    title: "Network Security",
    subtitle: "CS450 • Dr. Aris Volkov • Oct 28",
    icon: <BookOpen size={16} className="text-primary" />,
  },
  {
    id: "6",
    title: "Advanced Systems Design: Midterm II",
    subtitle: "CS402 • Computer Architecture • Live",
    icon: <BookOpen size={16} className="text-primary" />,
  },
];

const examCards: (ExamCardProps & { id: string })[] = [
  {
    id: "active-1",
    status: "active",
    title: "Operating Systems Final",
    course: "CS402",
    professor: "Prof. Sarah Jenkins",
    timeRemaining: "00:42:17 remaining",
  },
  {
    id: "scheduled-1",
    status: "scheduled",
    title: "Data Structures Midterm",
    course: "CS205",
    professor: "Prof. Marcus Thorne",
    dateLabel: "OCT 24, 14:00",
    hasSystemCheck: true,
  },
  {
    id: "completed-1",
    status: "completed",
    title: "Introduction to AI",
    course: "AI101",
    professor: "Dr. Emily Watson",
    dateLabel: "COMPLETED OCT 15",
    score: "94/100",
    integrityPercent: 99,
  },
  {
    id: "flagged-1",
    status: "flagged",
    title: "Discrete Mathematics",
    course: "MATH202",
    professor: "Prof. David Lee",
    dateLabel: "COMPLETED OCT 12",
    integrityScore: 68,
    integrityWarning: "System detected multiple browser tab switches.",
  },
  {
    id: "scheduled-2",
    status: "scheduled",
    title: "Network Security",
    course: "CS450",
    professor: "Dr. Aris Volkov",
    dateLabel: "OCT 28, 09:00",
    duration: "120 Minutes",
  },
];

const mobileExamCards = [
  {
    id: "m-1",
    badge: "TOMORROW • 09:00 AM",
    badgeVariant: "accent" as const,
    title: "MTH-301: Discrete Mathematics Final",
    subtitle: "Duration: 180 Minutes • 15 Units",
    footerText: "Starts in 1 day",
  },
  {
    id: "m-2",
    badge: "OCT 24 • 02:00 PM",
    badgeVariant: "default" as const,
    title: "ENG-102: Modern Literature",
    subtitle: "Duration: 60 Minutes • 5 Units",
    footerText: "Open soon",
  },
  {
    id: "m-3",
    badge: "OCT 28 • 10:30 AM",
    badgeVariant: "default" as const,
    title: "PHY-200: Quantum Mechanics",
    subtitle: "Duration: 120 Minutes • Proctored",
    footerText: "Device check required",
  },
];

function filterItems(items: SearchItem[], q: string) {
  if (!q) return items;
  return items.filter(
    (item) =>
      item.title.toLowerCase().includes(q.toLowerCase()) ||
      item.subtitle?.toLowerCase().includes(q.toLowerCase()),
  );
}

export default function Exams() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const hasEnrolledExams = true; // toggle to false to test empty state

  const initialQuery = searchParams.get("q") ?? "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const searchItems = useMemo(
    () => filterItems(allExamItems, searchQuery),
    [searchQuery],
  );

  function handleSearch(q: string) {
    setSearchQuery(q);
    if (q) {
      setSearchParams({ q });
    } else {
      setSearchParams({});
    }
  }

  return (
    <div className="space-y-8">
      <section className="space-y-6">
        <h1 className="lg:hidden font-heading text-2xl font-semibold text-on-surface">
          Exams
        </h1>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Filter tabs={desktopTabs} />
          <div className="flex items-center gap-3">
            <SortSelect
              fields={[
                { value: "date_asc", label: "Date: Oldest" },
                { value: "date_desc", label: "Date: Newest" },
                { value: "title", label: "Title: A-Z" },
                { value: "title_desc", label: "Title: Z-A" },
              ]}
            />
            <SearchModal
              title="Search Exams"
              items={searchItems}
              onSearch={handleSearch}
              onSelect={(item) => navigate(PATHS.EXAM_DETAIL(item.id))}
              onSubmit={(q) =>
                navigate(`${PATHS.EXAM_SEARCH}?q=${encodeURIComponent(q)}`)
              }
              placeholder="Search exams..."
              notFoundText="No exams match your search."
            />
          </div>
        </div>
      </section>

      {/* ── Desktop View ──────────────────────────────── */}
      <div className="hidden lg:block space-y-8">
        {hasEnrolledExams ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <EnrollCard />
            {examCards.map((card) => {
              const { id, ...cardProps } = card;
              return (
                <ExamCard
                  key={id}
                  {...cardProps}
                  onDetails={() => navigate(PATHS.EXAM_DETAIL(id))}
                  onStart={() => navigate(PATHS.EXAM_SESSION(id))}
                  onEnterLobby={() => navigate(PATHS.EXAM_TAKE(id))}
                  onViewResults={() => navigate(PATHS.RESULT_DETAIL(id))}
                  onViewReport={() => navigate(PATHS.RESULT_DETAIL(id))}
                />
              );
            })}
          </div>
        ) : (
          <ExamsEmptyState onEnroll={() => navigate(PATHS.EXAMS)} />
        )}
      </div>

      {/* ── Mobile View ──────────────────────────────── */}
      <div className="lg:hidden space-y-6">
        <MobileActiveExamCard
          courseCode="CS-402"
          courseName="COMPUTER ARCHITECTURE"
          title="Advanced Systems Design: Midterm II"
          endsAt="11:45 AM"
          timeLeft="45m Left"
          onStart={() => navigate(PATHS.EXAM_SESSION("active-1"))}
        />

        {hasEnrolledExams ? (
          <div className="flex flex-col gap-4">
            {mobileExamCards.map((card) => (
              <MobileExamCard
                key={card.id}
                badge={card.badge}
                badgeVariant={card.badgeVariant}
                title={card.title}
                subtitle={card.subtitle}
                footerText={card.footerText}
                onClick={() => navigate(PATHS.EXAM_DETAIL(card.id))}
              />
            ))}
          </div>
        ) : (
          <ExamsEmptyState onEnroll={() => navigate(PATHS.EXAMS)} />
        )}
      </div>
    </div>
  );
}
