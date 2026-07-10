import { Play, Download, Eye, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

type PreviewHeroCardProps = {
  onLaunchPreview?: () => void;
  onExportPDF?: () => void;
};

export default function PreviewHeroCard({
  onLaunchPreview,
  onExportPDF,
}: PreviewHeroCardProps) {
  return (
    <div className="md:col-span-2 bg-surface-container/70 backdrop-blur-md border border-outline-variant/50 rounded-xl p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4">
        <Eye size={128} className="text-on-surface-variant/20" />
      </div>
      <div className="relative z-10 space-y-6">
        <div className="flex items-center gap-2 text-primary">
          <BookOpen size={18} />
          <span className="font-mono text-[11px] tracking-[0.05em] uppercase">
            Examination Content Review
          </span>
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-semibold max-w-xl leading-tight text-on-surface">
          Preview the student experience before the session begins.
        </h2>
        <div className="flex flex-wrap gap-4 pt-4">
          <Button onClick={onLaunchPreview}>
            <Play size={18} fill="currentColor" />
            Launch Preview Session
          </Button>
          <Button variant="outline" onClick={onExportPDF}>
            <Download size={18} />
            Export PDF Copy
          </Button>
        </div>
      </div>
    </div>
  );
}
