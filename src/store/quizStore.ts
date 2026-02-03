import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Question, Unit, Course } from '../types';
import { courses, findUnit, getRandomQuestions } from '../data/index';

interface QuizStore {
  // State
  currentCourseId: string;
  currentUnitId: string | null;
  currentQuestionIndex: number;
  hearts: number;
  score: number;
  streak: number;
  completedUnits: string[];
  activeQuestions: Question[]; // Questions for the current session (shuffled or random)
  homeScrollPositions: Record<string, number>;
  preferences: {
    fontSize: 'small' | 'medium' | 'large';
    jobRole: 'frontend' | 'backend' | 'infra';
  };
  
  // Computed
  getCurrentCourse: () => Course | undefined;
  getCurrentUnit: () => Unit | undefined;
  getCurrentQuestion: () => Question | undefined;
  
  // Actions
  setCourse: (courseId: string) => void;
  startUnit: (unitId: string) => void;
  startRandomQuiz: () => void;
  answerQuestion: (isCorrect: boolean) => void;
  nextQuestion: () => void;
  resetProgress: () => void;
  resetHearts: () => void;
  setHomeScrollPosition: (courseId: string, position: number) => void;
  setFontSize: (size: 'small' | 'medium' | 'large') => void;
  setJobRole: (role: 'frontend' | 'backend' | 'infra') => void;
}

export const useQuizStore = create<QuizStore>()(
  persist(
    (set, get) => ({
      currentCourseId: 'js', // Default course
      currentUnitId: null,
      currentQuestionIndex: 0,
      hearts: 5,
      score: 0,
      streak: 0,
      completedUnits: [],
      activeQuestions: [],
      homeScrollPositions: {},
      preferences: {
        fontSize: 'medium',
        jobRole: 'frontend',
      },

      getCurrentCourse: () => {
        const { currentCourseId } = get();
        return courses.find(c => c.id === currentCourseId);
      },

      getCurrentUnit: () => {
        const { currentUnitId, activeQuestions } = get();
        if (!currentUnitId) return undefined;
        if (currentUnitId === 'random') {
           return {
             id: 'random',
             title: 'Quick Practice',
             title_ko: '빠른 연습',
             description: 'Random questions from all courses',
             description_ko: '모든 코스에서 무작위로 추출된 문제',
             questions: activeQuestions
           } as Unit;
        }
        const data = findUnit(currentUnitId);
        if (!data) return undefined;
        return { ...data.unit, questions: activeQuestions };
      },

      getCurrentQuestion: () => {
        const { activeQuestions, currentQuestionIndex } = get();
        return activeQuestions[currentQuestionIndex];
      },

      setCourse: (courseId) => set({ currentCourseId: courseId }),

      startUnit: (unitId) => {
        const data = findUnit(unitId);
        if (data) {
          // Shuffle questions for the selected unit
          const shuffled = [...data.unit.questions].sort(() => Math.random() - 0.5);
          set({
            currentUnitId: unitId,
            currentQuestionIndex: 0,
            streak: 0,
            activeQuestions: shuffled
          });
        }
      },

      startRandomQuiz: () => {
        const { preferences } = get();
        const questions = getRandomQuestions(10, preferences.jobRole);
        set({
          currentUnitId: 'random',
          currentQuestionIndex: 0,
          streak: 0,
          activeQuestions: questions
        });
      },

      answerQuestion: (isCorrect) => set((state) => {
        if (isCorrect) {
          return {
            score: state.score + 10 + (state.streak * 2), // Bonus points for streak
            streak: state.streak + 1,
          };
        } else {
          return {
            hearts: Math.max(0, state.hearts - 1),
            streak: 0,
          };
        }
      }),

      nextQuestion: () => {
        const unit = get().getCurrentUnit();
        const { currentQuestionIndex, completedUnits, currentUnitId } = get();
        
        if (unit && currentQuestionIndex < unit.questions.length - 1) {
          set({ currentQuestionIndex: currentQuestionIndex + 1 });
        } else if (unit && currentUnitId) {
          // Unit Completed
          if (!completedUnits.includes(currentUnitId)) {
            set({ completedUnits: [...completedUnits, currentUnitId] });
          }
          // The component will handle navigation to Result page
        }
      },

      resetProgress: () => set({
        currentUnitId: null,
        currentQuestionIndex: 0,
        hearts: 5,
        score: 0,
        streak: 0,
        completedUnits: []
      }),
      
      resetHearts: () => set({ hearts: 5 }),
      
      setHomeScrollPosition: (courseId, position) => set((state) => ({
        homeScrollPositions: { ...state.homeScrollPositions, [courseId]: position }
      })),
      
      setFontSize: (size) => set((state) => ({ 
        preferences: { ...state.preferences, fontSize: size } 
      })),

      setJobRole: (role) => set((state) => {
        // Find first course for this role to avoid empty state
        const firstCourseForRole = courses.find(c => c.role === role);
        return { 
          preferences: { ...state.preferences, jobRole: role },
          currentCourseId: firstCourseForRole ? firstCourseForRole.id : state.currentCourseId
        };
      }),
    }),
    {
      name: 'mdn-quiz-storage-v2', // Changed version to avoid conflicts
      partialize: (state) => ({ 
        score: state.score, 
        completedUnits: state.completedUnits,
        hearts: state.hearts,
        currentCourseId: state.currentCourseId,
        preferences: state.preferences,
      }),
    }
  )
);
