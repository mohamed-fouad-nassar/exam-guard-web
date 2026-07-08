import { useSearchParams } from "react-router"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type DataPaginationProps = {
  total: number
  perPage?: number
  paramName?: string
  className?: string
}

export default function DataPagination({
  total,
  perPage = 10,
  paramName = "page",
  className,
}: DataPaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const current = Math.max(1, Number(searchParams.get(paramName)) || 1)
  const totalPages = Math.max(1, Math.ceil(total / perPage))
  const start = (current - 1) * perPage + 1
  const end = Math.min(current * perPage, total)

  function go(page: number) {
    const next = new URLSearchParams(searchParams)
    if (page <= 1) {
      next.delete(paramName)
    } else {
      next.set(paramName, String(page))
    }
    setSearchParams(next)
  }

  if (totalPages <= 1) return null

  const pages: (number | "ellipsis")[] = []
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i)
  } else {
    pages.push(1)
    if (current > 3) pages.push("ellipsis")
    const startPage = Math.max(2, current - 1)
    const endPage = Math.min(totalPages - 1, current + 1)
    for (let i = startPage; i <= endPage; i++) pages.push(i)
    if (current < totalPages - 2) pages.push("ellipsis")
    pages.push(totalPages)
  }

  return (
    <div className={cn("mt-4 px-6 py-4 bg-surface-container-low border border-outline-variant rounded-xl flex items-center flex-col sm:flex-row justify-center sm:justify-between gap-4", className)}>
      <p className="text-on-surface-variant font-mono text-xs tracking-wider">
        Showing {start}–{end} of {total}
      </p>
      <div className="flex items-center gap-2">
        <button
          onClick={() => go(current - 1)}
          disabled={current <= 1}
          className="size-8 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-variant disabled:opacity-30 transition-colors"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="flex gap-1">
          {pages.map((page, i) =>
            page === "ellipsis" ? (
              <span
                key={`e-${i}`}
                className="size-8 flex items-center justify-center text-on-surface-variant text-xs"
              >
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => go(page)}
                className={cn(
                  "size-8 flex items-center justify-center rounded text-xs font-bold transition-colors",
                  page === current
                    ? "bg-primary text-white"
                    : "border border-outline-variant text-on-surface-variant hover:bg-surface-variant",
                )}
              >
                {page}
              </button>
            ),
          )}
        </div>
        <button
          onClick={() => go(current + 1)}
          disabled={current >= totalPages}
          className="size-8 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-variant disabled:opacity-30 transition-colors"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  )
}
