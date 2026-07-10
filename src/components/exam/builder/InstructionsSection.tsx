import { FileText } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const defaultMessage =
  "Students will read these instructions in the Exam Lobby before starting. Please ensure your camera is positioned correctly and your room is well-lit. No external materials are permitted.";

export default function InstructionsSection() {
  return (
    <section className="bg-surface-container border border-outline-variant rounded-xl p-6 shadow-sm">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-on-surface mb-6 flex items-center gap-2">
        <FileText size={24} className="text-primary" />
        Instructions
      </h2>
      <div className="flex flex-col gap-2">
        <Label className="font-mono text-[12px] font-semibold tracking-[0.05em] leading-none text-on-surface-variant uppercase">
          EXAM LOBBY MESSAGE
        </Label>
        <Textarea
          className="bg-surface-container-low border-outline-variant text-on-surface focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30 resize-none"
          rows={4}
          defaultValue={defaultMessage}
        />
      </div>
    </section>
  );
}
