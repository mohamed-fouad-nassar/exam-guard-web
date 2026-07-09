import { Lock } from "lucide-react";

export default function SecurityFootnote() {
  return (
    <div className="mt-12 md:mt-16 flex items-center gap-2 text-outline-variant">
      <Lock className="size-4" />
      <span className="font-mono text-[10px] uppercase tracking-widest">
        End-to-End Encryption Protocol v4.2 Active
      </span>
    </div>
  );
}
