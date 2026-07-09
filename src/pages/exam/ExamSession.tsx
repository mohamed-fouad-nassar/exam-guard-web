import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { ClipboardList } from "lucide-react";

import AmbientBackground from "@/components/layout/AmbientBackground";
import ExamSessionHeader from "@/components/exam/session/ExamSessionHeader";
import QuestionHeader from "@/components/exam/session/QuestionHeader";
import QuestionOptionsList from "@/components/exam/session/QuestionOptionsList";
import QuestionNavigation from "@/components/exam/session/QuestionNavigation";
import SessionSidebar from "@/components/exam/session/SessionSidebar";

const mockQuestion = {
  number: 7,
  total: 50,
  points: 5,
  difficulty: "medium" as const,
  title:
    "Identify the primary reason for cryptographic nonce values in secure network handshakes?",
  context:
    "Consider a standard Diffie-Hellman exchange or a TLS 1.3 handshake. The inclusion of a unique, randomly generated nonce serves a critical architectural purpose in the protocol's lifecycle.",
  options: [
    {
      value: "a",
      label: "To increase the length of the private key without overhead.",
    },
    {
      value: "b",
      label:
        "To prevent replay attacks by ensuring each session token is unique.",
    },
    {
      value: "c",
      label: "To serve as a salt for the client-side password hashing.",
    },
    {
      value: "d",
      label: "To facilitate the recovery of lost encryption keys.",
    },
  ],
  selected: "b",
  isMarked: false,
};

const mockStats = [
  { label: "Answered", value: "24", color: "primary" as const },
  { label: "Remaining", value: "26", color: "on-surface" as const },
  { label: "Marked", value: "03", color: "amber" as const },
  { label: "Attempted", value: "48%", color: "on-surface" as const },
];

const mockLegendItems = [
  { color: "bg-primary-container", label: "Answered" },
  { color: "border-2 border-primary", label: "Current" },
  { color: "bg-amber-400", label: "Marked" },
  { color: "border-2 border-error/50", label: "Skipped" },
];

const mockGridQuestions = Array.from({ length: 50 }, (_, i) => {
  const num = i + 1;
  let status: "answered" | "current" | "marked" | "skipped" | "unanswered" =
    "unanswered";

  if ([1, 2, 3, 5, 6, 15, 24, 31].includes(num)) status = "answered";
  else if (num === 7) status = "current";
  else if ([4, 42].includes(num)) status = "marked";
  else if (num === 10) status = "skipped";

  return { number: num, status };
});

function useTimer(initialSeconds: number) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds <= 0) return;
    const id = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [seconds]);

  const pad = (n: number) => n.toString().padStart(2, "0");
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

export default function ExamSession() {
  const { examId } = useParams();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(mockQuestion.selected);
  const [isMarked, setIsMarked] = useState(mockQuestion.isMarked);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const timer = useTimer(42 * 60 + 17);

  function handlePrevious() {
    console.log("Previous question");
  }

  function handleNext() {
    console.log("Next question");
  }

  function handleMarkReview() {
    setIsMarked((prev) => !prev);
  }

  function handleQuestionSelect(number: number) {
    console.log("Navigate to question", number);
    setDrawerOpen(false);
  }

  function handleSubmit() {
    navigate(`/exams/${examId}/submit`);
  }

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col">
      <AmbientBackground />

      <main className="flex flex-1">
        <section className="flex flex-col relative z-10 min-w-0 flex-1">
          <ExamSessionHeader
            title="Midterm — CS301"
            subtitle="Data Structures & Algorithms"
            timer={timer}
            onSubmit={handleSubmit}
          />

          <div className="px-6 md:px-12 py-6 md:py-8 flex justify-center">
          <div className="w-full flex flex-col gap-6 md:gap-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <QuestionHeader
                  number={mockQuestion.number}
                  total={mockQuestion.total}
                  points={mockQuestion.points}
                  difficulty={mockQuestion.difficulty}
                />
              </div>
              <button
                onClick={() => setDrawerOpen(true)}
                className="lg:hidden flex items-center gap-2 shrink-0 bg-surface-container-high border border-outline-variant px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface transition-colors"
              >
                <ClipboardList size={16} />
                <span className="font-mono text-[11px]">NAV</span>
              </button>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-heading text-xl md:text-h2 text-on-surface">
                {mockQuestion.title}
              </h2>
              <p className="text-body-sm md:text-body-lg text-on-surface-variant leading-relaxed">
                {mockQuestion.context}
              </p>
            </div>

            <QuestionOptionsList
              name={`q${mockQuestion.number}`}
              options={mockQuestion.options}
              selected={selected}
              onSelect={setSelected}
            />

            <QuestionNavigation
              onPrevious={handlePrevious}
              onNext={handleNext}
              onMarkReview={handleMarkReview}
              isMarked={isMarked}
            />
            </div>
          </div>
        </section>

        <SessionSidebar
          stats={mockStats}
          legendItems={mockLegendItems}
          questions={mockGridQuestions}
          lastSynced="14:02:41"
          onQuestionSelect={handleQuestionSelect}
          onSubmit={handleSubmit}
          className="hidden lg:flex"
        />

        {drawerOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setDrawerOpen(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-[85vw] max-w-sm">
              <SessionSidebar
                stats={mockStats}
                legendItems={mockLegendItems}
                questions={mockGridQuestions}
                lastSynced="14:02:41"
                onQuestionSelect={handleQuestionSelect}
                onSubmit={handleSubmit}
                onClose={() => setDrawerOpen(false)}
                mobile
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
