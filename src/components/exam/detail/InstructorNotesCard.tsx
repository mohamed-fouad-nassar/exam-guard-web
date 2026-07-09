import GlassCard from "@/components/shared/GlassCard";
import { Badge } from "@/components/ui/badge";

type InstructorNotesCardProps = {
  note: string;
  author: string;
};

export default function InstructorNotesCard({ note, author }: InstructorNotesCardProps) {
  return (
    <GlassCard className="p-6 space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
        <h3 className="font-heading text-xl sm:text-2xl font-semibold text-on-surface">
          Instructor Notes
        </h3>
        <Badge
          variant="outline"
          className="font-mono text-[11px] uppercase tracking-wider text-primary bg-surface-container-highest border-0 rounded-full px-3 py-1"
        >
          {author}
        </Badge>
      </div>
      <div className="text-on-surface-variant italic border-l-2 border-outline-variant pl-4">
        {note}
      </div>
      <div className="pt-4">
        <div className="w-full h-24 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 opacity-60" />
      </div>
    </GlassCard>
  );
}
