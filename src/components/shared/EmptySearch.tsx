import { SearchX } from "lucide-react"

type EmptySearchProps = {
  message?: string
  children?: React.ReactNode
}

export default function EmptySearch({
  message = "Try adjusting your search query",
  children,
}: EmptySearchProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <div className="size-16 rounded-full bg-surface-container flex items-center justify-center">
        <SearchX size={28} className="text-on-surface-variant" />
      </div>
      <div className="text-center">
        <h3 className="font-heading text-lg font-semibold text-on-surface">
          No results found
        </h3>
        <p className="text-sm text-on-surface-variant mt-1">{message}</p>
      </div>
      {children}
    </div>
  )
}
