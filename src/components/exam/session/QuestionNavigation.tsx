import { ArrowLeft, Bookmark, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type QuestionNavigationProps = {
  onPrevious?: () => void;
  onNext?: () => void;
  onMarkReview?: () => void;
  isMarked?: boolean;
  className?: string;
};

export default function QuestionNavigation({
  onPrevious,
  onNext,
  onMarkReview,
  isMarked = false,
  className,
}: QuestionNavigationProps) {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-outline-variant mt-auto",
        className,
      )}
    >
      <button
        onClick={onPrevious}
        className="flex items-center gap-2 font-button text-on-surface-variant hover:text-on-surface px-4 py-2 transition-colors w-full sm:w-auto justify-center"
      >
        <ArrowLeft size={16} />
        PREVIOUS
      </button>

      <button
        onClick={onMarkReview}
        className={cn(
          "flex items-center gap-2 border font-button px-6 py-2 rounded transition-all w-full sm:w-auto justify-center",
          isMarked
            ? "border-amber-400 bg-amber-400/10 text-amber-400"
            : "border-amber-400/50 text-amber-400 hover:bg-amber-400/10",
        )}
      >
        <Bookmark size={14} className={isMarked ? "fill-amber-400" : ""} />
        {isMarked ? "MARKED" : "MARK FOR REVIEW"}
      </button>

      <button
        onClick={onNext}
        className="flex items-center gap-2 bg-primary-container text-on-primary-container font-button px-8 py-2 rounded-lg hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary-container/20 w-full sm:w-auto justify-center"
      >
        NEXT
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
