import { useEffect } from "react"
import { useSearchParams } from "react-router"
import { ArrowUpDown } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export type SortField = {
  value: string
  label: string
}

type SortSelectProps = {
  fields: SortField[]
  paramName?: string
  placeholder?: string
  onSortChange?: (value: string) => void
}

export default function SortSelect({
  fields,
  paramName = "sort",
  placeholder = "Sort by",
  onSortChange,
}: SortSelectProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentValue = searchParams.get(paramName) || ""

  useEffect(() => {
    if (currentValue) {
      onSortChange?.(currentValue)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleValueChange(value: string) {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev)
      next.set(paramName, value)
      return next
    })
    onSortChange?.(value)
  }

  return (
    <Select value={currentValue} onValueChange={handleValueChange}>
      <SelectTrigger className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-low border border-outline-variant rounded-lg text-sm font-medium hover:bg-surface-container-high transition-colors h-auto [&_svg]:text-on-surface-variant">
        <ArrowUpDown size={18} className="text-on-surface-variant" />
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {fields.map((field) => (
          <SelectItem key={field.value} value={field.value}>
            {field.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
