import { create } from "zustand"

interface ExamStepState {
  lobbyComplete: boolean
  systemCheckComplete: boolean
  submitted: boolean
}

interface ExamSessionStore {
  sessions: Record<string, ExamStepState>
  completeLobby: (examId: string) => void
  completeSystemCheck: (examId: string) => void
  submitExam: (examId: string) => void
  clearSession: (examId: string) => void
  getSession: (examId: string) => ExamStepState
}

const defaultState: ExamStepState = {
  lobbyComplete: false,
  systemCheckComplete: false,
  submitted: false,
}

export const useExamSessionStore = create<ExamSessionStore>((set, get) => ({
  sessions: {},
  completeLobby: (examId) =>
    set((state) => ({
      sessions: {
        ...state.sessions,
        [examId]: { ...defaultState, ...state.sessions[examId], lobbyComplete: true },
      },
    })),
  completeSystemCheck: (examId) =>
    set((state) => ({
      sessions: {
        ...state.sessions,
        [examId]: { ...defaultState, ...state.sessions[examId], systemCheckComplete: true },
      },
    })),
  submitExam: (examId) =>
    set((state) => ({
      sessions: {
        ...state.sessions,
        [examId]: { ...defaultState, ...state.sessions[examId], submitted: true },
      },
    })),
  clearSession: (examId) =>
    set((state) => {
      const { [examId]: _, ...rest } = state.sessions
      return { sessions: rest }
    }),
  getSession: (examId) => {
    const session = get().sessions[examId]
    return session ?? { ...defaultState }
  },
}))
