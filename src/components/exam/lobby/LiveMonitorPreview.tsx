import { cn } from "@/lib/utils";

type LiveMonitorPreviewProps = {
  className?: string;
};

export default function LiveMonitorPreview({ className }: LiveMonitorPreviewProps) {
  return (
    <div
      className={cn(
        "bg-surface-container border border-outline-variant overflow-hidden rounded-lg relative aspect-video max-h-[260px] max-w-[400px] mx-auto",
        className,
      )}
    >
      <div className="w-full h-full bg-surface-container-high flex items-center justify-center opacity-60">
        <svg className="size-16 text-on-surface-variant/30" viewBox="0 0 24 24">
          <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v11z" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent pointer-events-none" />
      <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur px-2 py-1 rounded">
        <span className="size-2 rounded-full bg-red-500 animate-pulse" />
        <span className="font-mono text-[10px] text-white tracking-wider">LIVE_FEED</span>
      </div>
      <div className="absolute bottom-4 left-4">
        <span className="font-mono text-[10px] text-green-400 bg-green-950/50 border border-green-800 px-2 py-1 rounded">
          FACE DETECTED
        </span>
      </div>
    </div>
  );
}