import { cn } from "@/lib/utils";

type Instruction = {
  number: string;
  title: string;
  description: string;
};

type ExamInstructionsProps = {
  instructions?: Instruction[];
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
};

const defaultInstructions: Instruction[] = [
  {
    number: "01",
    title: "No External Materials",
    description:
      "Physical notes, textbooks, and mobile devices are strictly prohibited within the testing area.",
  },
  {
    number: "02",
    title: "Focus Maintenance",
    description:
      "Leaving the browser window or turning your head away for extended periods will trigger a flag.",
  },
  {
    number: "03",
    title: "Progress Auto-Save",
    description:
      "Your answers are synced in real-time. In case of disconnection, re-join immediately.",
  },
  {
    number: "04",
    title: "Submission Window",
    description:
      "Once the timer reaches zero, your exam will automatically submit regardless of status.",
  },
];

export default function ExamInstructions({
  instructions = defaultInstructions,
  checked = false,
  onCheckedChange,
  className,
}: ExamInstructionsProps) {
  return (
    <div
      className={cn(
        "bg-surface-container border border-outline-variant p-4 md:p-8 rounded-lg flex-grow",
        className,
      )}
    >
      <h3 className="font-heading text-lg md:text-h3 text-on-surface mb-4 md:mb-6">
        Final Instructions
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
        {instructions.map((inst) => (
          <div key={inst.number} className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
              <span className="font-mono text-[12px] text-on-secondary-container">
                {inst.number}
              </span>
            </div>
            <div>
              <h4 className="text-button text-on-surface">{inst.title}</h4>
              <p className="text-on-surface-variant text-body-sm">
                {inst.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {onCheckedChange && (
        <div className="p-4 md:p-6 bg-surface-dim border border-outline-variant rounded-lg">
          <label className="flex items-start gap-3 md:gap-4 cursor-pointer group">
            <div className="relative mt-0.5">
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onCheckedChange(e.target.checked)}
                className="peer sr-only"
              />
              <div
                className={cn(
                  "w-6 h-6 border-2 rounded flex items-center justify-center transition-colors",
                  checked
                    ? "bg-primary border-primary text-on-primary"
                    : "border-primary group-hover:border-primary/70",
                )}
              >
                {checked && (
                  <svg className="size-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                )}
              </div>
            </div>
            <span className="text-on-surface font-body-md leading-tight">
              I have read and understood the examination rules and the Institutional Integrity
              Guidelines. I confirm that I am in a private environment and am prepared to begin
              the assessment.
            </span>
          </label>
        </div>
      )}
    </div>
  );
}