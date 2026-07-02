import { motion, AnimatePresence } from "motion/react";
import { Question } from "./mathData";

interface QuestionCardProps {
  question: Question;
  selected: number | null;
  onSelect: (choice: number) => void;
  gradeColor: { bg: string; text: string; border: string; light: string };
}

export function QuestionCard({ question, selected, onSelect, gradeColor }: QuestionCardProps) {
  const isAnswered = selected !== null;

  return (
    <div className="flex flex-col gap-5">
      {/* Question display */}
      <motion.div
        key={question.id}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`bg-white rounded-3xl shadow-lg p-6 text-center border-2 ${gradeColor.border}`}
      >
        <p className="text-gray-500 text-sm mb-2">Câu hỏi:</p>
        {question.display.split("\n").map((line, i) => (
          <p key={i} className="text-3xl font-black text-gray-800 leading-tight">
            {line}
          </p>
        ))}
      </motion.div>

      {/* Answer choices */}
      <div className="grid grid-cols-2 gap-3">
        <AnimatePresence>
          {question.choices.map((choice, i) => {
            const isSelected = selected === choice;
            const isCorrect = choice === question.answer;
            let style = "bg-white border-gray-200 text-gray-800 hover:border-gray-400 hover:shadow";
            if (isAnswered && isCorrect) {
              style = "bg-green-500 border-green-500 text-white shadow-lg";
            } else if (isAnswered && isSelected && !isCorrect) {
              style = "bg-red-500 border-red-500 text-white";
            } else if (!isAnswered) {
              style = `bg-white border-gray-200 text-gray-800 hover:${gradeColor.light} hover:${gradeColor.border} hover:shadow`;
            } else {
              style = "bg-gray-100 border-gray-200 text-gray-400";
            }

            return (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08 }}
                whileHover={!isAnswered ? { scale: 1.04 } : {}}
                whileTap={!isAnswered ? { scale: 0.96 } : {}}
                disabled={isAnswered}
                onClick={() => !isAnswered && onSelect(choice)}
                className={`rounded-2xl border-2 p-4 text-2xl font-black transition-all ${style} relative overflow-hidden`}
              >
                {isAnswered && isCorrect && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-1 right-1 text-base"
                  >
                    ✓
                  </motion.span>
                )}
                {isAnswered && isSelected && !isCorrect && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-1 right-1 text-base"
                  >
                    ✗
                  </motion.span>
                )}
                {choice}
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
