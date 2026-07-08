import { Plus } from "lucide-react"

type EnrollCardProps = {
  onEnroll?: () => void
}

export default function EnrollCard({ onEnroll }: EnrollCardProps) {
  return (
    <button
      onClick={onEnroll}
      className="bg-surface-container-lowest p-6 rounded-xl border border-dashed border-outline-variant/50 flex flex-col items-center justify-center min-h-[300px] group hover:border-primary/50 transition-all cursor-pointer text-left w-full h-full"
    >
      <div className="size-12 rounded-full border border-dashed border-outline-variant flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Plus
          size={24}
          className="text-outline group-hover:text-primary transition-colors"
        />
      </div>
      <p className="font-heading text-2xl font-semibold text-outline group-hover:text-on-surface transition-colors">
        Enroll in Exam
      </p>
      <p className="text-sm text-outline-variant mt-1">
        Via exam access code
      </p>
    </button>
  )
}
