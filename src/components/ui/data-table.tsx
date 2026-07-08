import * as React from "react"
import { cn } from "@/lib/utils"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table"

interface DataTableProps extends React.ComponentProps<typeof Table> {
  containerClassName?: string
  columns?: string[]
}

function DataTable({ className, containerClassName, columns, children, ...props }: DataTableProps) {
  return (
    <div
      className={cn(
        "bg-surface-container-low border border-outline-variant rounded-xl overflow-x-auto",
        containerClassName
      )}
    >
      <Table className={cn("w-full text-left border-collapse", className)} {...props}>
        {columns && (
          <DataTableHeader>
            <DataTableRow>
              {columns.map((col) => (
                <DataTableHead key={col}>{col}</DataTableHead>
              ))}
            </DataTableRow>
          </DataTableHeader>
        )}
        {children}
      </Table>
    </div>
  )
}

function DataTableHeader({ className, ...props }: React.ComponentProps<typeof TableHeader>) {
  return (
    <TableHeader
      className={cn(
        "bg-surface-container text-on-surface-variant uppercase font-mono text-[10px] tracking-widest",
        className
      )}
      {...props}
    />
  )
}

function DataTableBody({ className, ...props }: React.ComponentProps<typeof TableBody>) {
  return (
    <TableBody
      className={cn("divide-y divide-outline-variant", className)}
      {...props}
    />
  )
}

function DataTableRow({ className, ...props }: React.ComponentProps<typeof TableRow>) {
  return (
    <TableRow
      className={cn(
        "hover:bg-surface-container-high transition-colors border-none",
        className
      )}
      {...props}
    />
  )
}

function DataTableHead({ className, ...props }: React.ComponentProps<typeof TableHead>) {
  return (
    <TableHead
      className={cn("px-6 py-4 font-normal h-auto", className)}
      {...props}
    />
  )
}

function DataTableCell({ className, ...props }: React.ComponentProps<typeof TableCell>) {
  return (
    <TableCell
      className={cn("px-6 py-5", className)}
      {...props}
    />
  )
}

export {
  DataTable,
  DataTableHeader,
  DataTableBody,
  DataTableRow,
  DataTableHead,
  DataTableCell,
}
