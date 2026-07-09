import { useParams, useNavigate } from "react-router";

import AmbientBackground from "@/components/layout/AmbientBackground";
import SubmitSuccessIcon from "@/components/exam/submit/SubmitSuccessIcon";
import SubmitInfoGrid from "@/components/exam/submit/SubmitInfoGrid";
import SubmitActions from "@/components/exam/submit/SubmitActions";
import SecurityFootnote from "@/components/exam/submit/SecurityFootnote";
import { PATHS } from "@/router/paths";

export default function ExamSubmit() {
  const { examId } = useParams();
  const navigate = useNavigate();

  const now = new Date();
  const submissionTime = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  function handleReturnToDashboard() {
    navigate(PATHS.DASHBOARD);
  }

  function handleDownloadReceipt() {
    console.log("Download receipt for exam", examId);
  }

  return (
    <div className="relative min-h-screen bg-background text-on-surface overflow-hidden flex items-center justify-center">
      <AmbientBackground />

      <div className="relative z-10 w-full max-w-[800px] flex flex-col items-center text-center px-6 md:px-10 lg:px-gutter py-12 md:py-24">
        <SubmitSuccessIcon />

        <h1 className="font-heading text-[32px] md:text-[48px] font-bold text-on-surface mb-4 md:tracking-[-0.02em]">
          Exam Submitted Successfully
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8 md:mb-12">
          Your answers have been securely saved and your proctoring session has
          ended. A confirmation receipt has been sent to your registered
          institutional email.
        </p>

        <SubmitInfoGrid submissionTime={submissionTime} />

        <SubmitActions
          onReturnToDashboard={handleReturnToDashboard}
          onDownloadReceipt={handleDownloadReceipt}
        />

        <SecurityFootnote />
      </div>

      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full" />

      <div className="fixed bottom-0 right-0 p-gutter pointer-events-none opacity-40">
        <div className="h-48 w-48 border-r border-b border-outline-variant rounded-br-none rounded-tl-full opacity-20" />
      </div>
    </div>
  );
}
