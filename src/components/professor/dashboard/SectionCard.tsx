import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionCardProps = {
  title: string
  children: ReactNode
  className?: string
}

export default function SectionCard({ title, children, className }: SectionCardProps) {
  return (
    <div className={cn("bg-surface-container border border-outline-variant rounded-2xl overflow-hidden min-h-[300px] lg:min-h-[400px] flex flex-col", className)}>
      <div className="px-5 lg:px-6 py-3.5 lg:py-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-high/50">
        <h3 className="font-heading text-lg lg:text-xl font-semibold text-on-surface">
          {title}
        </h3>
      </div>
      {children}
    </div>
  )
}
