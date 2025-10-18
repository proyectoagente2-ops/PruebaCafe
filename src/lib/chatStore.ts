import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Message = {
  id: string;
  text: string | JSX.Element;
  sender: 'user' | 'bot';
  timestamp: Date;
};

interface ChatSession {
  sessionId: string;
  startTime: Date;
  lastActivity: Date;
}

interface ChatStore {
  isOpen: boolean;
  messages: Message[];
  currentSession: ChatSession | null;
  setIsOpen: (isOpen: boolean) => void;
  addMessage: (message: Message) => void;
  clearMessages: () => void;
  initializeSession: () => void;
}

const MAX_MESSAGES = 50; // Límite de mensajes almacenados
const generateSessionId = () => Math.random().toString(36).substring(7);

export const useChatStore = create<ChatStore>()(
  persist(
    (set) => ({
      isOpen: false,
      messages: [],
      currentSession: null,
      setIsOpen: (isOpen) => {
        set((state) => {
          // Solo actualizar lastActivity si el chat se está abriendo y hay una sesión
          if (isOpen && state.currentSession) {
            return {
              isOpen,
              currentSession: {
                ...state.currentSession,
                lastActivity: new Date()
              }
            };
          }
          return { isOpen };
        });
      },
      addMessage: (message) =>
        set((state) => ({
          messages: [...state.messages.slice(-MAX_MESSAGES), message],
          currentSession: state.currentSession ? {
            ...state.currentSession,
            lastActivity: new Date(),
          } : state.currentSession,
        })),
      clearMessages: () => set({ messages: [] }),
      initializeSession: () => {
        set((state) => {
          // Solo inicializar si no hay sesión actual
          if (!state.currentSession) {
            return {
              currentSession: {
                sessionId: generateSessionId(),
                startTime: new Date(),
                lastActivity: new Date(),
              },
              messages: [], // Limpiar mensajes al iniciar nueva sesión
            };
          }
          return state;
        });
      },
    }),
    {
      name: 'chat-storage',
      version: 1,
    }
  )
);