import { FileQuestion, Plus, Sparkles } from "lucide-react";

type EmptyQuestionsStateProps = {
  onAddQuestion?: () => void;
  onGenerateAI?: () => void;
};

export default function EmptyQuestionsState({
  onAddQuestion,
  onGenerateAI,
}: EmptyQuestionsStateProps) {
  return (
    <div className="flex items-center justify-center py-16 lg:py-24">
      <div className="max-w-md w-full text-center flex flex-col items-center">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 mb-8 group">
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 w-full h-full border border-outline-variant rounded-full flex items-center justify-center bg-surface-container-low overflow-hidden">
            <FileQuestion
              size={80}
              className="text-primary/40"
              strokeWidth={1.5}
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-surface-container-highest border border-outline-variant p-2.5 sm:p-3 rounded-xl shadow-lg shadow-black/20">
            <Plus size={20} className="text-primary" />
          </div>
        </div>

        <h3 className="font-heading text-2xl sm:text-[24px] font-semibold leading-[1.4] text-on-surface mb-3">
          No Questions Yet
        </h3>
        <p className="text-on-surface-variant text-base leading-[1.6] mb-8 max-w-sm">
          Start building your exam by adding your first question. You can create
          multiple choice, essay, or coding challenges.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            onClick={onAddQuestion}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary-container text-on-primary-container rounded-lg font-sans text-sm font-semibold leading-none hover:bg-primary transition-all shadow-lg shadow-black/20 active:scale-95 cursor-pointer"
          >
            <Plus size={18} />
            Add Question
          </button>
          <button
            onClick={onGenerateAI}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-outline-variant text-on-surface hover:bg-surface-container rounded-lg font-sans text-sm font-semibold leading-none transition-all cursor-pointer"
          >
            <Sparkles size={18} />
            Generate with AI
          </button>
        </div>
      </div>
    </div>
  );
}
