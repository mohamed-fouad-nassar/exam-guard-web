import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type ProfessorStatCardProps = {
  icon: LucideIcon
  label: string
  value: string
  subtitle: string
  iconColorClassName?: string
}

export default function ProfessorStatCard({
  icon: Icon,
  label,
  value,
  subtitle,
  iconColorClassName = "text-primary",
}: ProfessorStatCardProps) {
  return (
    <div className="bg-surface-container-high border border-outline-variant p-5 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.1)]">
      <div className="flex justify-between items-start mb-4">
        <span className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
          {label}
        </span>
        <Icon size={20} className={cn(iconColorClassName)} />
      </div>
      <div className="flex items-baseline gap-2">
        <span className="font-heading text-3xl sm:text-4xl font-bold text-on-surface tracking-tight">
          {value}
        </span>
      </div>
      <p className="text-sm text-on-surface-variant mt-2 italic">{subtitle}</p>
    </div>
  )
}
