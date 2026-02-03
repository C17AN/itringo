import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';
import { useQuizStore } from '../store/quizStore';
import { useTranslation } from '../i18n/ui';

interface FeedbackModalProps {
  isOpen: boolean;
  isCorrect: boolean;
  correctAnswerText: string;
  explanation: string;
  onNext: () => void;
}

export function FeedbackModal({ isOpen, isCorrect, correctAnswerText, explanation, onNext }: FeedbackModalProps) {
  const { preferences } = useQuizStore();
  const t = useTranslation(preferences.language);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className={clsx(
            "fixed bottom-0 left-0 right-0 p-6 rounded-t-3xl shadow-2xl z-50 max-w-md mx-auto",
            isCorrect ? "bg-green-50 text-green-900" : "bg-red-50 text-red-900"
          )}
        >
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              {isCorrect ? (
                <CheckCircle2 className="w-8 h-8 text-quiz-success" />
              ) : (
                <XCircle className="w-8 h-8 text-quiz-error" />
              )}
              <h3 className="text-2xl font-bold">
                {isCorrect ? t.correct : t.incorrect}
              </h3>
            </div>
            
            {!isCorrect && (
              <div className="mb-4">
                <p className="text-sm font-semibold text-red-700 uppercase mb-1">{t.correctAnswer}</p>
                <p className="font-medium">{correctAnswerText}</p>
              </div>
            )}
            
            <div className="bg-white/60 p-4 rounded-lg">
               <p className="text-sm font-semibold opacity-70 mb-1">{t.explanation}</p>
               <p className="text-sm leading-relaxed">{explanation}</p>
            </div>
          </div>

          <button
            onClick={onNext}
            className={clsx(
              "w-full py-3 px-6 rounded-xl font-bold text-white text-lg flex items-center justify-center gap-2 transition-transform active:scale-95",
              isCorrect ? "bg-quiz-success hover:bg-quiz-success-dark" : "bg-quiz-error hover:bg-quiz-error-dark"
            )}
          >
            {isCorrect ? t.continue : t.gotIt}
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
