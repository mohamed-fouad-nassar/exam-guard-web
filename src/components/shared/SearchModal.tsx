import { useState, useRef, useEffect } from "react"
import { Search, SearchX, X } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type SearchItem = {
  id: string
  title: string
  subtitle?: string
  icon?: React.ReactNode
}

type SearchModalProps = {
  title?: string
  items: SearchItem[]
  onSearch: (query: string) => void
  onSelect: (item: SearchItem) => void
  onSubmit?: (query: string) => void
  placeholder?: string
  notFoundText?: string
  className?: string
}

export default function SearchModal({
  title = "Search",
  items,
  onSearch,
  onSelect,
  onSubmit,
  placeholder = "Search...",
  notFoundText = "No results found.",
  className,
}: SearchModalProps) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100)
      setQuery("")
    }
  }, [open])

  function handleChange(value: string) {
    setQuery(value)
    onSearch(value)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <button
        onClick={() => setOpen(true)}
        className={cn("flex items-center gap-2 px-3 py-2 bg-surface-container-low border border-outline-variant rounded-lg text-sm font-medium hover:bg-surface-container-high transition-colors", className)}
      >
        <Search size={18} />
        Search
      </button>

      <DialogContent className="sm:max-w-lg gap-0 p-0 overflow-hidden" showCloseButton={false}>
        <div className="flex items-center justify-between px-6 pt-6 pb-2">
          <DialogTitle className="font-heading text-lg font-semibold text-on-surface">
            {title}
          </DialogTitle>
          <DialogClose asChild>
            <Button variant="ghost" size="icon-sm">
              <X />
            </Button>
          </DialogClose>
        </div>

        <div className="px-6 pb-3">
          <div className="flex items-center bg-surface-container-low rounded-lg border border-outline-variant px-3 py-2 gap-2">
            <Search size={16} className="text-on-surface-variant shrink-0" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => handleChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && query && onSubmit) {
                  onSubmit(query)
                  setOpen(false)
                }
              }}
              placeholder={placeholder}
              className="flex-1 bg-transparent text-sm text-on-surface placeholder:text-on-surface-variant outline-none"
            />
            {query && (
              <button
                onClick={() => handleChange("")}
                className="text-on-surface-variant hover:text-on-surface transition-colors shrink-0"
              >
                <SearchX size={16} />
              </button>
            )}
          </div>
        </div>

        <div className="max-h-[300px] overflow-y-auto p-2">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <p className="text-sm text-on-surface-variant">{notFoundText}</p>
            </div>
          ) : (
            <div className="space-y-1">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelect(item)
                    setOpen(false)
                  }}
                  className={cn(
                    "flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-left transition-colors",
                    "hover:bg-surface-container-high focus-visible:bg-surface-container-high focus-visible:outline-none"
                  )}
                >
                  {item.icon && (
                    <div className="size-8 rounded-md bg-surface-container flex items-center justify-center shrink-0 border border-outline-variant/30">
                      {item.icon}
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-on-surface truncate">
                      {item.title}
                    </p>
                    {item.subtitle && (
                      <p className="text-xs text-on-surface-variant truncate">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
