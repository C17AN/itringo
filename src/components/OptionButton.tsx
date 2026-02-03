import { clsx } from 'clsx';
import { motion } from 'framer-motion';

interface OptionButtonProps {
  text: string;
  selected: boolean;
  status: 'idle' | 'correct' | 'wrong';
  onClick: () => void;
  disabled: boolean;
  shortcut?: string;
}

export function OptionButton({ text, selected, status, onClick, disabled, shortcut }: OptionButtonProps) {
  const baseStyles = "w-full p-4 rounded-xl border-2 text-left text-lg font-medium transition-all relative";
  
  const variants = {
    idle: selected 
      ? "border-mdn-blue bg-blue-50 text-mdn-blue" 
      : "border-gray-200 hover:bg-gray-50 active:scale-[0.98]",
    correct: "border-quiz-success bg-green-50 text-quiz-success-dark",
    wrong: "border-quiz-error bg-red-50 text-quiz-error-dark",
  };

  return (
    <motion.button
      whileTap={!disabled && status === 'idle' ? { scale: 0.98 } : {}}
      className={clsx(baseStyles, variants[status])}
      onClick={onClick}
      disabled={disabled}
    >
      {shortcut && (
        <span className={clsx(
          "inline-flex items-center justify-center w-6 h-6 border rounded-md text-xs mr-3",
          selected ? "border-mdn-blue text-mdn-blue" : "border-gray-300 text-gray-400"
        )}>
          {shortcut}
        </span>
      )}
      {text}
    </motion.button>
  );
}
