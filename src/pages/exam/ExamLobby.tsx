import { useState } from "react";
import { useParams, useNavigate } from "react-router";

import BackButton from "@/components/shared/BackButton";
import CountdownTimer from "@/components/exam/lobby/CountdownTimer";
import SystemChecksCard from "@/components/exam/lobby/SystemChecksCard";
import LiveMonitorPreview from "@/components/exam/lobby/LiveMonitorPreview";
import ExamInstructions from "@/components/exam/lobby/ExamInstructions";
import FinalActionBar from "@/components/exam/lobby/FinalActionBar";
import IdentityCheckCard from "@/components/exam/lobby/IdentityCheckCard";

export default function ExamLobby() {
  const { examId } = useParams();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  function handleStart() {
    if (!checked) return;
    navigate(`/exams/${examId}/session`);
  }

  return (
    <>
      <BackButton title="Back to Exams" />
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-2 w-full">
            <span className="font-mono text-[12px] text-primary uppercase tracking-[0.2em]">
              Ready to Begin
            </span>
            <h1 className="font-heading text-2xl md:text-[48px] font-bold text-on-surface md:leading-[1.2] md:tracking-[-0.02em]">
              Advanced Data Structures & Algorithms
            </h1>
            <p className="text-on-surface-variant text-body-sm md:text-body-lg max-w-2xl">
              Final Assessment &bull; Time Allotted: 120 Minutes &bull; 45
              Questions
            </p>
          </div>
          <CountdownTimer className="min-w-fit w-full md:w-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4 space-y-6">
            <IdentityCheckCard />
            <SystemChecksCard />
            <LiveMonitorPreview />
          </div>
          <div className="md:col-span-8 flex flex-col gap-6">
            <ExamInstructions checked={checked} onCheckedChange={setChecked} />
            <FinalActionBar allChecksPassed={checked} onStart={handleStart} />
          </div>
        </div>
      </div>
    </>
  );
}
