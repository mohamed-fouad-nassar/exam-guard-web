import type { LucideIcon } from "lucide-react";

export type ExamStatus = "active" | "scheduled" | "completed" | "flagged";

export interface ExamTopic {
  unit: string;
  title: string;
  description: string;
}

export interface ExamDetail {
  id: string;
  title: string;
  description: string;
  course: string;
  professor: string;
  status: ExamStatus;
  questionsCount: number;
  timeLimitMinutes: number;
  passingScore: number;
  topics: ExamTopic[];
  instructorNote: string;
  instructorNoteAuthor: string;
}

export type SystemStatus = "ready" | "warning" | "error";

export interface SystemCheckItem {
  icon: LucideIcon;
  label: string;
  detail: string;
}

export interface IntegrityItem {
  icon: LucideIcon;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
