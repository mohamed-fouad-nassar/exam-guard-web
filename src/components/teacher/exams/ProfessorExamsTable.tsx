import { MoreVertical } from "lucide-react"
import {
  DataTable,
  DataTableBody,
  DataTableRow,
  DataTableCell,
} from "@/components/ui/data-table"
import { Badge } from "@/components/ui/badge"

export type ExamStatus = "Published" | "Scheduled" | "Draft" | "Closed"
export type ExamType = "Midterm" | "Final" | "Quiz" | "Assignment"

export type ProfessorExamRow = {
  id: string
  title: string
  examCode: string
  course: string
  type: ExamType
  questions: number
  startDate: string
  duration: string
  status: ExamStatus
}

const statusBadgeVariant: Record<ExamStatus, "success" | "secondary" | "outline"> = {
  Published: "success",
  Scheduled: "secondary",
  Draft: "outline",
  Closed: "outline",
}

const statusBadgeClass: Record<ExamStatus, string> = {
  Published: "",
  Scheduled: "",
  Draft: "",
  Closed: "opacity-60",
}

type ProfessorExamsTableProps = {
  rows: ProfessorExamRow[]
  onRowClick?: (id: string) => void
  onMenuClick?: (id: string) => void
}

export default function ProfessorExamsTable({ rows, onRowClick, onMenuClick }: ProfessorExamsTableProps) {
  return (
    <DataTable
      columns={["Exam", "Course", "Type", "Questions", "Start Date", "Status", ""]}
    >
      <DataTableBody>
        {rows.map((row) => (
          <DataTableRow
            key={row.id}
            className="group cursor-pointer"
            onClick={() => onRowClick?.(row.id)}
          >
            <DataTableCell className="font-semibold text-on-surface">
              <p className="font-semibold text-on-surface text-sm">
                {row.title}
              </p>
              <p className="font-mono text-[10px] text-outline">
                ID: {row.examCode}
              </p>
            </DataTableCell>
            <DataTableCell className="font-mono text-sm text-on-surface-variant">
              {row.course}
            </DataTableCell>
            <DataTableCell className="text-sm text-on-surface-variant">
              {row.type}
            </DataTableCell>
            <DataTableCell className="text-sm text-on-surface-variant">
              {row.questions}
            </DataTableCell>
            <DataTableCell>
              <p className="text-sm text-on-surface">{row.startDate}</p>
              <p className="font-mono text-[10px] text-outline">{row.duration}</p>
            </DataTableCell>
            <DataTableCell>
              <Badge
                variant={statusBadgeVariant[row.status]}
                className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold h-auto ${statusBadgeClass[row.status]}`}
              >
                {row.status}
              </Badge>
            </DataTableCell>
            <DataTableCell className="text-right">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onMenuClick?.(row.id)
                }}
                className="text-outline hover:text-on-surface transition-colors p-1"
              >
                <MoreVertical size={18} />
              </button>
            </DataTableCell>
          </DataTableRow>
        ))}
      </DataTableBody>
    </DataTable>
  )
}
