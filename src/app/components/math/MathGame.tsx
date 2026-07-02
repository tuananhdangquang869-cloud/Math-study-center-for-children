import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Flame, Zap } from "lucide-react";
import { Grade, Topic, GRADE_COLORS, generateQuestions, Question } from "./mathData";
import { QuestionCard } from "./QuestionCard";
import { Button } from "../ui/button";

interface GameResult {
  correct: number;
  total: number;
  streak: number;
}

interface MathGameProps {
  grade: Grade;
  topic: Topic;
  onFinish: (result: GameResult) => void;
  onBack: () => void;
}

const TOTAL = 10;
const FEEDBACK_DELAY = 1200;

export function MathGame({ grade, topic, onFinish, onBack }: MathGameProps) {
  const [questions] = useState<Question[]>(() => generateQuestions(topic.id, TOTAL));
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  const colors = GRADE_COLORS[grade];
  const question = questions[current];
  const progress = ((current) / TOTAL) * 100;

  const handleSelect = useCallback((choice: number) => {
    if (selected !== null) return;
    setSelected(choice);
    const isCorrect = choice === question.answer;

    if (isCorrect) {
      setCorrect((c) => c + 1);
      setStreak((s) => {
        const next = s + 1;
        setMaxStreak((m) => Math.max(m, next));
        return next;
      });
      setFeedback("correct");
    } else {
      setStreak(0);
      setFeedback("wrong");
    }

    setTimeout(() => {
      setFeedback(null);
      setSelected(null);
      if (current + 1 >= TOTAL) {
        onFinish({
          correct: isCorrect ? correct + 1 : correct,
          total: TOTAL,
          streak: isCorrect ? Math.max(maxStreak, streak + 1) : maxStreak,
        });
      } else {
        setCurrent((c) => c + 1);
      }
    }, FEEDBACK_DELAY);
  }, [selected, question, current, correct, streak, maxStreak, onFinish]);

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-indigo-50 to-purple-50">
      {/* Header */}
      <div className={`${colors.bg} p-4 safe-top`}>
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={onBack}
            className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <p className="text-white/80 text-xs">Lớp {grade} · {topic.name}</p>
            <p className="text-white font-black">Câu {current + 1} / {TOTAL}</p>
          </div>
          {streak >= 2 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1 bg-orange-400 rounded-full px-3 py-1"
            >
              <Flame className="w-4 h-4 text-white" />
              <span className="text-white font-black text-sm">{streak}</span>
            </motion.div>
          )}
        </div>

        {/* Progress bar */}
        <div className="w-full h-3 bg-white/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-yellow-400 rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </div>
      </div>

      {/* Score bar */}
      <div className="flex justify-around bg-white shadow px-4 py-2">
        <div className="text-center">
          <p className="text-xs text-gray-400">Đúng</p>
          <p className={`font-black ${colors.text}`}>{correct}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-400">Sai</p>
          <p className="font-black text-red-500">{current - correct}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-400">Còn lại</p>
          <p className="font-black text-gray-600">{TOTAL - current}</p>
        </div>
      </div>

      {/* Feedback overlay */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 flex items-center justify-center pointer-events-none z-10"
          >
            <div className={`rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-2xl ${feedback === "correct" ? "bg-green-500" : "bg-red-500"}`}>
              <span className="text-4xl">{feedback === "correct" ? "🎉" : "😢"}</span>
              <span className="text-white font-black text-sm mt-1">
                {feedback === "correct" ? "Đúng rồi!" : "Sai rồi!"}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Question area */}
      <div className="flex-1 p-4 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ type: "spring", duration: 0.4 }}
          >
            <QuestionCard
              question={question}
              selected={selected}
              onSelect={handleSelect}
              gradeColor={colors}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
