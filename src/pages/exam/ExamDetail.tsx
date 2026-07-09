import { useParams, useNavigate } from "react-router";
import { Camera, Monitor, Keyboard, Mic, Wifi } from "lucide-react";
import type { IntegrityItem, SystemCheckItem, FaqItem } from "@/types/exam.types";

import BackButton from "@/components/shared/BackButton";
import ExamDetailHero from "@/components/exam/detail/ExamDetailHero";
import ExamActionCard from "@/components/exam/detail/ExamActionCard";
import IntegrityProtocolCard from "@/components/exam/detail/IntegrityProtocolCard";
import InstructorNotesCard from "@/components/exam/detail/InstructorNotesCard";
import CoveredTopicsSection from "@/components/exam/detail/CoveredTopicsSection";
import SystemReadinessCard from "@/components/exam/detail/SystemReadinessCard";
import ExamFaqSection from "@/components/exam/detail/ExamFaqSection";

const mockData = {
  title: "Advanced Computational Theory: Finals",
  description:
    "This examination is protected by AI-driven proctoring. Ensure your camera is visible and audio is enabled. Do not leave the browser window or attempt to use external resources.",
  questionsCount: 45,
  timeLimitMinutes: 120,
  passingScore: 75,
  topics: [
    { unit: "UNIT 01", title: "Turing Machines", description: "Decidability, Halting problem, and Universal Turing Machines." },
    { unit: "UNIT 02", title: "Complexity Theory", description: "Time and space complexity classes, Big O notation." },
    { unit: "UNIT 03", title: "NP-Completeness", description: "Reductions, Cook-Levin Theorem, and hard problems." },
  ],
  instructorNote:
    '"Focus heavily on the P vs NP complexity classes for the final section. Efficiency of algorithms is the core theme of this final assessment."',
  instructorNoteAuthor: "Dr. Aris Thorne",
};

const integrityItems: IntegrityItem[] = [
  { icon: Camera, label: "Continuous Webcam Monitoring" },
  { icon: Monitor, label: "Window Focus Enforcement" },
  { icon: Keyboard, label: "Keystroke Pattern Analysis" },
];

const systemChecks: SystemCheckItem[] = [
  { icon: Camera, label: "Camera", detail: "Connected" },
  { icon: Mic, label: "Microphone", detail: "Optimized" },
  { icon: Wifi, label: "Internet", detail: "Stable (24ms)" },
];

const faqs: FaqItem[] = [
  {
    question: "What happens if my internet disconnects during the exam?",
    answer:
      "ExamGuard AI saves your progress locally every 30 seconds. If disconnected, reconnect as quickly as possible. The AI will flag the interruption, and your professor will review the logs for any suspicious activity during the offline window.",
  },
  {
    question: "Can I use an external monitor?",
    answer:
      "No. Our security protocol prohibits the use of external or secondary monitors to prevent data sharing. Please ensure all extra screens are disconnected and powered off before the exam starts.",
  },
  {
    question: "Is bathroom break allowed?",
    answer:
      "Bathroom policies are set by your instructor. For this specific exam, no breaks are permitted. Leaving the camera's view for more than 60 seconds will result in an immediate automatic flag.",
  },
];

export default function ExamDetail() {
  const { examId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="space-y-8 pb-32">
      <BackButton title="Back to Exams" />

      <ExamDetailHero title={mockData.title} description={mockData.description} />

      <div className="flex flex-col gap-8">
        <ExamActionCard
          questionsCount={mockData.questionsCount}
          timeLimitMinutes={mockData.timeLimitMinutes}
          passingScore={mockData.passingScore}
          onStart={() => navigate(`/exams/${examId}/session`)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <IntegrityProtocolCard items={integrityItems} />
          <InstructorNotesCard
            note={mockData.instructorNote}
            author={mockData.instructorNoteAuthor}
          />
        </div>

        <CoveredTopicsSection topics={mockData.topics} />
      </div>

      <SystemReadinessCard checks={systemChecks} />
      <ExamFaqSection faqs={faqs} />
    </div>
  );
}
