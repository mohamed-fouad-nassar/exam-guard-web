import { useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { PATHS } from "@/router/paths";
import { BookOpen } from "lucide-react";
import type { SearchItem } from "@/components/shared/SearchModal";
import DataPagination from "@/components/shared/DataPagination";
import EmptySearch from "@/components/shared/EmptySearch";
import ProfessorExamsHeader from "@/components/teacher/exams/ProfessorExamsHeader";
import ProfessorExamsToolbar from "@/components/teacher/exams/ProfessorExamsToolbar";
import ProfessorExamsTable from "@/components/teacher/exams/ProfessorExamsTable";
import type { ProfessorExamRow } from "@/components/teacher/exams/ProfessorExamsTable";
import ProfessorExamCard from "@/components/teacher/exams/ProfessorExamCard";
import type { MobileExamData } from "@/components/teacher/exams/ProfessorExamCard";
import ProfessorExamsStats from "@/components/teacher/exams/ProfessorExamsStats";

const allSearchItems: SearchItem[] = [
  {
    id: "1",
    title: "Data Structures Midterm",
    subtitle: "CS301 • Published • 45 Questions",
    icon: <BookOpen size={16} className="text-primary" />,
  },
  {
    id: "2",
    title: "Algorithms Quiz 4",
    subtitle: "CS402 • Scheduled • 15 Questions",
    icon: <BookOpen size={16} className="text-primary" />,
  },
  {
    id: "3",
    title: "Operating Systems Final",
    subtitle: "CS305 • Draft • 60 Questions",
    icon: <BookOpen size={16} className="text-primary" />,
  },
  {
    id: "4",
    title: "Database Assignment",
    subtitle: "DB101 • Closed • 5 Questions",
    icon: <BookOpen size={16} className="text-primary" />,
  },
];

const desktopRows: ProfessorExamRow[] = [
  {
    id: "1",
    title: "Data Structures Midterm",
    examCode: "DS-MID-2024",
    course: "CS301",
    type: "Midterm",
    questions: 45,
    startDate: "Oct 24, 2024",
    duration: "120 Minutes",
    status: "Published",
  },
  {
    id: "2",
    title: "Algorithms Quiz 4",
    examCode: "ALGO-Q4-24",
    course: "CS402",
    type: "Quiz",
    questions: 15,
    startDate: "Oct 28, 2024",
    duration: "30 Minutes",
    status: "Scheduled",
  },
  {
    id: "3",
    title: "Operating Systems Final",
    examCode: "OS-FIN-2024",
    course: "CS305",
    type: "Final",
    questions: 60,
    startDate: "Nov 15, 2024",
    duration: "180 Minutes",
    status: "Draft",
  },
  {
    id: "4",
    title: "Database Assignment",
    examCode: "DB-ASG-03",
    course: "DB101",
    type: "Assignment",
    questions: 5,
    startDate: "Oct 20, 2024",
    duration: "N/A",
    status: "Closed",
  },
];

const mobileCards: MobileExamData[] = [
  {
    id: "m-1",
    title: "Advanced Algorithms Final",
    courseCode: "CS-402",
    section: "Section A",
    status: "active",
    typeLabel: "proctor",
    questions: 45,
    duration: "120 Minutes",
    date: "May 24, 2024",
    time: "09:00 AM",
    accentColor: true,
  },
  {
    id: "m-2",
    title: "Data Structures Midterm",
    courseCode: "CS-201",
    section: "Section B",
    status: "draft",
    typeLabel: "inperson",
    questions: 30,
    duration: "90 Minutes",
  },
  {
    id: "m-3",
    title: "Network Security Quiz 3",
    courseCode: "IT-505",
    section: "Section D",
    status: "scheduled",
    questions: 15,
    duration: "30 Minutes",
  },
  {
    id: "m-4",
    title: "Intro to Python Quiz",
    courseCode: "CS-101",
    section: "Section A",
    status: "completed",
    questions: 20,
    duration: "20 Questions",
    completed: true,
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

export default function ProfessorExams() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialQuery = searchParams.get("q") ?? "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [statusFilter, setStatusFilter] = useState("all");
  const [courseFilter, setCourseFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const searchItems = useMemo(
    () => filterItems(allSearchItems, searchQuery),
    [searchQuery],
  );

  const filteredDesktop = useMemo(() => {
    return desktopRows.filter((row) => {
      if (statusFilter !== "all" && row.status.toLowerCase() !== statusFilter)
        return false;
      if (courseFilter !== "all" && row.course !== courseFilter) return false;
      if (typeFilter !== "all" && row.type.toLowerCase() !== typeFilter)
        return false;
      return true;
    });
  }, [statusFilter, courseFilter, typeFilter]);

  const hasResults = searchQuery ? filteredDesktop.length > 0 : true;

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
      <ProfessorExamsHeader />

      <ProfessorExamsToolbar
        searchItems={searchItems}
        onSearch={handleSearch}
        onSelect={(item) => navigate(PATHS.PROFESSOR.EXAM_DETAIL(item.id))}
        onSubmit={(q) =>
          navigate(`${PATHS.PROFESSOR.EXAMS}?q=${encodeURIComponent(q)}`)
        }
        status={statusFilter}
        onStatusChange={setStatusFilter}
        course={courseFilter}
        onCourseChange={setCourseFilter}
        type={typeFilter}
        onTypeChange={setTypeFilter}
      />

      {!hasResults ? (
        <EmptySearch>
          <button
            onClick={() => handleSearch("")}
            className="px-4 py-2 bg-primary text-on-primary rounded-lg font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
          >
            Clear search
          </button>
        </EmptySearch>
      ) : (
        <>
          {/* Desktop View */}
          <div className="hidden lg:block space-y-8">
            <ProfessorExamsTable
              rows={filteredDesktop}
              onRowClick={(id) => navigate(PATHS.PROFESSOR.EXAM_DETAIL(id))}
            />
          </div>

          {/* Mobile View */}
          <div className="lg:hidden flex flex-col gap-4">
            {mobileCards.map((card) => (
              <ProfessorExamCard
                key={card.id}
                exam={card}
              />
            ))}
          </div>

          <DataPagination total={24} perPage={4} />

          <ProfessorExamsStats />
        </>
      )}
    </div>
  );
}
