import { useState } from "react"
import { Filter } from "lucide-react"
import GlassCard from "@/components/shared/GlassCard"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import SortSelect from "@/components/shared/SortSelect"
import SearchModal from "@/components/shared/SearchModal"
import type { SearchItem } from "@/components/shared/SearchModal"

type ProfessorExamsToolbarProps = {
  searchItems: SearchItem[]
  onSearch: (q: string) => void
  onSelect: (item: SearchItem) => void
  onSubmit?: (q: string) => void
  status: string
  onStatusChange: (value: string) => void
  course: string
  onCourseChange: (value: string) => void
  type: string
  onTypeChange: (value: string) => void
}

const statusOptions = [
  { value: "all", label: "Status: All" },
  { value: "published", label: "Published" },
  { value: "draft", label: "Draft" },
  { value: "scheduled", label: "Scheduled" },
  { value: "closed", label: "Closed" },
]

const courseOptions = [
  { value: "all", label: "Course: All" },
  { value: "CS301", label: "CS301" },
  { value: "CS402", label: "CS402" },
  { value: "CS305", label: "CS305" },
  { value: "DB101", label: "DB101" },
]

const typeOptions = [
  { value: "all", label: "Type: All" },
  { value: "midterm", label: "Midterm" },
  { value: "final", label: "Final" },
  { value: "quiz", label: "Quiz" },
  { value: "assignment", label: "Assignment" },
]

export default function ProfessorExamsToolbar({
  searchItems,
  onSearch,
  onSelect,
  onSubmit,
  status,
  onStatusChange,
  course,
  onCourseChange,
  type,
  onTypeChange,
}: ProfessorExamsToolbarProps) {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <GlassCard className="p-4">
      <div className="flex flex-wrap items-center gap-3">
        <SearchModal
          title="Search Exams"
          items={searchItems}
          onSearch={onSearch}
          onSelect={onSelect}
          onSubmit={onSubmit}
          placeholder="Search exams by title or code..."
          notFoundText="No exams match your search."
          className="flex-1"
        />

        <div className="hidden md:flex items-center gap-2 flex-wrap">
          <Select value={status} onValueChange={onStatusChange}>
            <SelectTrigger className="bg-surface-container-low border-outline-variant text-on-surface-variant font-mono text-xs h-auto py-2 px-3 min-w-[130px]">
              <SelectValue placeholder="Status: All" />
            </SelectTrigger>
            <SelectContent>
              {statusOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={course} onValueChange={onCourseChange}>
            <SelectTrigger className="bg-surface-container-low border-outline-variant text-on-surface-variant font-mono text-xs h-auto py-2 px-3 min-w-[130px]">
              <SelectValue placeholder="Course: All" />
            </SelectTrigger>
            <SelectContent>
              {courseOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={type} onValueChange={onTypeChange}>
            <SelectTrigger className="bg-surface-container-low border-outline-variant text-on-surface-variant font-mono text-xs h-auto py-2 px-3 min-w-[120px]">
              <SelectValue placeholder="Type: All" />
            </SelectTrigger>
            <SelectContent>
              {typeOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="h-8 w-px bg-outline-variant mx-1" />

          <SortSelect
            fields={[
              { value: "newest", label: "Sort: Newest" },
              { value: "oldest", label: "Date Asc" },
              { value: "title", label: "Title A-Z" },
            ]}
          />
        </div>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden bg-surface-container-low border border-outline-variant px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-variant transition-colors"
        >
          <Filter size={18} />
        </button>
      </div>

      {showFilters && (
        <div className="md:hidden flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-outline-variant">
          <Select value={status} onValueChange={onStatusChange}>
            <SelectTrigger className="bg-surface-container-low border-outline-variant text-on-surface-variant font-mono text-xs h-auto py-2 px-3 flex-1 min-w-0">
              <SelectValue placeholder="Status: All" />
            </SelectTrigger>
            <SelectContent>
              {statusOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={course} onValueChange={onCourseChange}>
            <SelectTrigger className="bg-surface-container-low border-outline-variant text-on-surface-variant font-mono text-xs h-auto py-2 px-3 flex-1 min-w-0">
              <SelectValue placeholder="Course: All" />
            </SelectTrigger>
            <SelectContent>
              {courseOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={type} onValueChange={onTypeChange}>
            <SelectTrigger className="bg-surface-container-low border-outline-variant text-on-surface-variant font-mono text-xs h-auto py-2 px-3 flex-1 min-w-0">
              <SelectValue placeholder="Type: All" />
            </SelectTrigger>
            <SelectContent>
              {typeOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <SortSelect
            fields={[
              { value: "newest", label: "Sort: Newest" },
              { value: "oldest", label: "Date Asc" },
              { value: "title", label: "Title A-Z" },
            ]}
          />
        </div>
      )}
    </GlassCard>
  )
}
