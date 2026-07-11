import { Monitor, Users, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import GlassCard from "@/components/shared/GlassCard"

type StatItem = {
  icon: React.ReactNode
  label: string
  value: string
  highlighted?: boolean
}

const defaultStats: StatItem[] = [
  {
    icon: <Monitor size={24} className="text-primary" />,
    label: "Active Proctors",
    value: "24",
  },
  {
    icon: <Users size={24} className="text-primary" />,
    label: "Students Testing",
    value: "1,402",
  },
  {
    icon: <ShieldCheck size={24} className="text-primary" />,
    label: "Integrity Score",
    value: "99.8%",
    highlighted: true,
  },
]

type ProfessorExamsStatsProps = {
  stats?: StatItem[]
}

export default function ProfessorExamsStats({ stats = defaultStats }: ProfessorExamsStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, i) => (
        <GlassCard
          key={i}
          className={cn(
            "p-5 flex items-center gap-4",
            stat.highlighted && "border-l-4 border-l-primary",
          )}
          as="div"
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            {stat.icon}
          </div>
          <div>
            <p className="font-mono text-[10px] text-outline uppercase tracking-wider">
              {stat.label}
            </p>
            <p className="font-heading text-2xl font-semibold text-on-surface">
              {stat.value}
            </p>
          </div>
        </GlassCard>
      ))}
    </div>
  )
}
