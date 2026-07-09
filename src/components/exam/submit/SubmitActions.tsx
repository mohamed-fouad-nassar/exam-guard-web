import { ArrowRight, Download } from "lucide-react";

type SubmitActionsProps = {
  onReturnToDashboard?: () => void;
  onDownloadReceipt?: () => void;
};

export default function SubmitActions({
  onReturnToDashboard,
  onDownloadReceipt,
}: SubmitActionsProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <button
        onClick={onReturnToDashboard}
        className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-button text-button hover:opacity-90 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
      >
        Return to Dashboard
        <ArrowRight className="size-[18px]" />
      </button>
      <button
        onClick={onDownloadReceipt}
        className="border border-outline-variant text-on-surface-variant px-8 py-4 rounded-xl font-button text-button hover:bg-surface-variant transition-colors flex items-center gap-2 cursor-pointer"
      >
        <Download className="size-[18px]" />
        Download Receipt
      </button>
    </div>
  );
}
