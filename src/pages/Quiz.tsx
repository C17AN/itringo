import { useState, useEffect } from "react";
import { useQuizStore } from "../store/quizStore";
import { Layout } from "../components/Layout";
import { ProgressBar } from "../components/ProgressBar";
import { OptionButton } from "../components/OptionButton";
import { FeedbackModal } from "../components/FeedbackModal";
import { TerminalModal } from "../components/TerminalModal";
import { X, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { clsx } from "clsx";
import { useTranslation } from "../i18n/ui";

export default function Quiz() {
  const navigate = useNavigate();
  const {
    getCurrentUnit,
    getCurrentQuestion,
    answerQuestion,
    nextQuestion,
    hearts,
    currentQuestionIndex,
  } = useQuizStore();

  const t = useTranslation();

  const unit = getCurrentUnit();
  const question = getCurrentQuestion();

  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "checked">("idle");
  const [isCorrect, setIsCorrect] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    if (!unit || hearts === 0) {
      navigate(hearts === 0 ? "/result?status=fail" : "/");
    }
  }, [unit, hearts, navigate]);

  if (!unit || !question) return null;

  // Translation helpers
  const questionText = question.question_ko || question.question;
  const explanationText = question.explanation_ko || question.explanation;

  const handleCheck = () => {
    if (!selectedOptionId) return;

    const correct = selectedOptionId === question.correctAnswerId;
    setIsCorrect(correct);
    setStatus("checked");
    answerQuestion(correct);
  };

  const handleNext = () => {
    if (currentQuestionIndex >= unit.questions.length - 1) {
      nextQuestion();
      navigate("/result?status=success");
    } else {
      setSelectedOptionId(null);
      setStatus("idle");
      setIsCorrect(false);
      nextQuestion();
    }
  };

  const getOptionStatus = (optId: string) => {
    if (status === "idle") return "idle";
    if (optId === question.correctAnswerId) return "correct";
    if (optId === selectedOptionId && !isCorrect) return "wrong";
    return "idle"; // Other unselected options remain idle (or could be dimmed)
  };

  const getOptionText = (opt: (typeof question.options)[0]) => {
    return opt.text_ko || opt.text;
  };

  const getCorrectAnswerText = () => {
    const correctOpt = question.options.find(
      (o) => o.id === question.correctAnswerId,
    );
    if (!correctOpt) return "";
    return getOptionText(correctOpt);
  };

  return (
    <Layout>
      {/* Header */}
      <div className="p-4 flex items-center gap-4">
        <button
          onClick={() => navigate("/")}
          className="text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="flex-1">
          <ProgressBar
            current={currentQuestionIndex}
            total={unit.questions.length}
          />
        </div>
        <div className="flex items-center gap-1 text-quiz-error">
          <Heart className="w-5 h-5 fill-current" />
          <span className="font-bold">{hearts}</span>
        </div>
      </div>

      {/* Quiz Content */}
      <div className="flex-1 p-6 flex flex-col overflow-y-auto pb-32">
        <h2 className="text-2xl font-bold mb-6">{questionText}</h2>

        {question.codeSnippet && (
          <div className="relative group">
            <div className="bg-mdn-black text-gray-200 p-4 rounded-xl font-mono text-sm mb-8 overflow-x-auto code-scroll shadow-lg border border-gray-700">
              <pre>{question.codeSnippet}</pre>
            </div>
            {/*             
            {preferences.jobRole === 'infra' && (
              <button
                onClick={() => setIsTerminalOpen(true)}
                className="absolute top-2 right-2 bg-gray-800/80 hover:bg-mdn-blue text-white p-2 rounded-lg backdrop-blur-sm border border-gray-600 transition-all flex items-center gap-2 text-xs font-bold shadow-xl"
              >
                <Terminal className="w-4 h-4" />
                터미널 실행
              </button>
            )} */}
          </div>
        )}

        <div className="space-y-3">
          {question.options.map((opt, idx) => (
            <OptionButton
              key={opt.id}
              text={getOptionText(opt)}
              shortcut={String(idx + 1)}
              selected={selectedOptionId === opt.id}
              status={getOptionStatus(opt.id)}
              disabled={status === "checked"}
              onClick={() => setSelectedOptionId(opt.id)}
            />
          ))}
        </div>
      </div>

      {/* Check Button (Fixed at bottom if not covered by modal) */}
      <div className="absolute bottom-0 w-full p-4 border-t bg-white">
        <button
          onClick={handleCheck}
          disabled={!selectedOptionId || status === "checked"}
          className={clsx(
            "w-full py-3 rounded-xl font-bold text-lg uppercase tracking-wide transition-all",
            !selectedOptionId || status === "checked"
              ? "bg-gray-200 text-gray-400 cursor-default"
              : "bg-quiz-success text-white shadow-[0_4px_0_0_#46a302] active:shadow-none active:translate-y-[4px] hover:bg-quiz-success-dark",
          )}
        >
          {t.check}
        </button>
      </div>

      <FeedbackModal
        isOpen={status === "checked"}
        isCorrect={isCorrect}
        correctAnswerText={getCorrectAnswerText()}
        explanation={explanationText}
        onNext={handleNext}
      />

      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </Layout>
  );
}
