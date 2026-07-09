import { Flag } from "lucide-react";
import { cn } from "@/lib/utils";

type SubmitExamButtonProps = {
  onClick?: () => void;
  className?: string;
};

export default function SubmitExamButton({ onClick, className }: SubmitExamButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center gap-2 bg-primary-container/20 text-primary border border-primary/40 rounded-lg hover:bg-primary-container/40 transition-colors font-button text-sm",
        className,
      )}
    >
      <Flag size={14} />
      SUBMIT EXAM
    </button>
  );
}
