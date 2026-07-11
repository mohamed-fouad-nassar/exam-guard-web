import type { ReactNode } from "react"

type SectionHeaderProps = {
  title: string
  description?: string
  children?: ReactNode
}

export default function SectionHeader({ title, description, children }: SectionHeaderProps) {
  return (
    <section className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
      <div>
        <h1 className="font-heading text-2xl sm:text-3xl font-bold sm:font-semibold text-on-surface tracking-tight">
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
