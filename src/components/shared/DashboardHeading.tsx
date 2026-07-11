import type { ReactNode } from "react"

type DashboardHeadingProps = {
  title: string
  description?: string
  children?: ReactNode
}

export default function DashboardHeading({ title, description, children }: DashboardHeadingProps) {
  return (
    <section className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
      <div>
        <h1 className="font-heading text-2xl sm:text-3xl font-semibold text-on-surface tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="text-sm sm:text-base text-on-surface-variant mt-1">
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  )
}
