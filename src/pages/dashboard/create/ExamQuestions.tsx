import { useState } from "react";
import { useNavigate } from "react-router";
import { Sparkles, Shield } from "lucide-react";
import EmptyQuestionsState from "@/components/exam/builder/EmptyQuestionsState";
import QuestionList from "@/components/exam/builder/QuestionList";
import type { QuestionData } from "@/components/exam/builder/QuestionCard";
import ExamSummaryCard from "@/components/exam/builder/ExamSummaryCard";
import QuickActionsCard from "@/components/exam/builder/QuickActionsCard";
import type { QuickAction } from "@/components/exam/builder/QuickActionsCard";

const summaryStats = [
  { label: "Questions", value: "3" },
  { label: "Duration", value: "90 Min" },
  { label: "Total Points", value: "30 Points" },
];

const quickActions: QuickAction[] = [
  { label: "AI Question Gen", icon: Sparkles },
  { label: "Security Settings", icon: Shield },
];

const sampleQuestions: QuestionData[] = [
  {
    number: 1,
    type: "Multiple Choice",
    question:
      "Identify the primary reason for cryptographic nonce values in secure network handshakes?",
    points: 10,
  },
  {
    number: 2,
    type: "True/False",
    question:
      "In a Zero-Knowledge Proof system, the Prover must share their secret key with the Verifier.",
    points: 5,
  },
  {
    number: 3,
    type: "Multiple Choice",
    question:
      "Which of the following describes the 'Liveness' property in consensus protocols?",
    points: 15,
  },
];

export default function ExamQuestions() {
  const navigate = useNavigate();
  const [hasQuestions] = useState(true);

  function handleAddQuestion() {
    navigate("new", { relative: "route" });
  }

  function handleEditQuestion() {
    navigate("new", { relative: "route" });
  }

  function handleGenerateAI() {
    console.log("Generate with AI");
  }

  return (
    <div className="pt-8">
      {hasQuestions ? (
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-start">
          <div className="lg:col-span-7">
            <QuestionList
              questions={sampleQuestions}
              onAddQuestion={handleAddQuestion}
              onEditQuestion={handleEditQuestion}
            />
          </div>
          <aside className="lg:col-span-3 space-y-6">
            <ExamSummaryCard
              status="Draft"
              progressPercent={65}
              stats={summaryStats}
              lastSaved="2 mins ago"
            />
            <QuickActionsCard actions={quickActions} />
          </aside>
        </div>
      ) : (
        <EmptyQuestionsState
          onAddQuestion={handleAddQuestion}
          onGenerateAI={handleGenerateAI}
        />
      )}
    </div>
  );
}
