import type { LucideIcon } from "lucide-react"
import { ChevronRight } from "lucide-react"
import { Link } from "react-router"

export type QuickAction = {
  icon: LucideIcon
  label: string
  href: string
}

type QuickActionsProps = {
  actions: QuickAction[]
}

export default function QuickActions({ actions }: QuickActionsProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-heading text-xl font-semibold text-on-surface px-1">
        Quick Actions
      </h3>
      {actions.map((action) => (
        <Link
          key={action.label}
          to={action.href}
          className="flex items-center justify-between p-4 bg-surface-container-highest border border-outline-variant rounded-xl hover:bg-primary-container/10 hover:border-primary transition-all text-left group"
        >
          <div className="flex items-center gap-3">
            <action.icon size={20} className="text-primary" />
            <span className="text-sm font-semibold text-on-surface">{action.label}</span>
          </div>
          <ChevronRight size={18} className="text-on-surface-variant group-hover:translate-x-0.5 transition-transform" />
        </Link>
      ))}
    </div>
  )
}
