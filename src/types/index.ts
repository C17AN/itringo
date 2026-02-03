export type QuestionType = 'multiple-choice' | 'fill-in-blank' | 'reorder';

export interface Option {
  id: string;
  text: string;
  text_ko?: string;
  isCorrect?: boolean;
}

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  question_ko?: string;
  codeSnippet?: string;
  options: Option[];
  correctAnswerId: string | string[];
  explanation: string;
  explanation_ko?: string;
  mdnUrl: string;
}

export interface Unit {
  id: string;
  title: string;
  title_ko?: string;
  description: string;
  description_ko?: string;
  questions: Question[];
}

export interface Chapter {
  id: string;
  title: string;
  title_ko?: string;
  units: Unit[];
}

export interface Course {
  id: string;
  role: 'frontend' | 'backend' | 'infra'; // Target audience
  title: string;
  title_ko?: string;
  icon: string; // lucide icon name or similar identifier
  chapters: Chapter[];
}

export interface QuizState {
  currentCourseId: string;
  currentUnitId: string | null;
  currentQuestionIndex: number;
  score: number;
  hearts: number;
  streak: number;
  completedUnits: string[]; // Stores unit IDs
  preferences: {
    language: 'en' | 'ko';
    fontSize: 'small' | 'medium' | 'large';
    jobRole: 'frontend' | 'backend' | 'infra';
  };
}
