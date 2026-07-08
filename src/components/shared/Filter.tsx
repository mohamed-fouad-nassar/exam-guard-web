import { useEffect } from "react"
import { useSearchParams } from "react-router"
import { cn } from "@/lib/utils"

export type FilterTab = {
  label: string
  count?: number
}

type FilterProps = {
  tabs: FilterTab[]
  paramName?: string
  className?: string
  onTabChange?: (label: string) => void
}

export default function Filter({
  tabs,
  paramName = "tab",
  className,
  onTabChange,
}: FilterProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeTab = searchParams.get(paramName) || tabs[0]?.label || ""

  function handleTabClick(label: string) {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev)
      if (label === tabs[0]?.label) {
        next.delete(paramName)
      } else {
        next.set(paramName, label)
      }
      return next
    })
    onTabChange?.(label)
  }

  // notify parent on mount with initial value if callback provided
  useEffect(() => {
    onTabChange?.(activeTab)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={cn("flex flex-col md:flex-row md:items-center justify-between gap-4", className)}>
      <div className="flex flex-wrap bg-surface-container-low p-1 rounded-lg border border-outline-variant">
        {tabs.map((tab) => {
          const isActive = tab.label === activeTab
          return (
            <button
              key={tab.label}
              onClick={() => handleTabClick(tab.label)}
              className={cn(
                "px-4 py-1.5 rounded-md text-sm font-medium transition-all",
                isActive
                  ? "bg-primary-container text-on-primary-container shadow-sm"
                  : "text-on-surface hover:text-primary"
              )}
            >
              {tab.label}
              {tab.count !== undefined && (
                <span
                  className={cn(
                    "ml-1.5 px-1.5 py-0.5 rounded text-[10px]",
                    isActive
                      ? "bg-white/20"
                      : "bg-surface-container-high border border-outline-variant"
                  )}
                >
                  {tab.count}
                </span>
              )}
            </button>
          )
        })}
      </div>

    </div>
  )
}
