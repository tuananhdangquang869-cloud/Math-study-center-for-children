import { useEffect } from "react";
import { motion } from "motion/react";
import { Star, RotateCcw, Home, Trophy } from "lucide-react";
import { Grade, Topic, GRADE_COLORS } from "./mathData";
import { Button } from "../ui/button";
import confetti from "canvas-confetti";

interface GameResult {
  correct: number;
  total: number;
  streak: number;
}

interface ResultScreenProps {
  grade: Grade;
  topic: Topic;
  result: GameResult;
  onReplay: () => void;
  onHome: () => void;
}

function getStars(correct: number, total: number): number {
  const pct = correct / total;
  if (pct >= 0.9) return 3;
  if (pct >= 0.7) return 2;
  if (pct >= 0.5) return 1;
  return 0;
}

function getMessage(stars: number): { emoji: string; text: string } {
  switch (stars) {
    case 3: return { emoji: "🏆", text: "Xuất sắc! Em thật tuyệt vời!" };
    case 2: return { emoji: "😊", text: "Giỏi lắm! Cố gắng thêm nhé!" };
    case 1: return { emoji: "💪", text: "Cố lên! Luyện tập thêm nào!" };
    default: return { emoji: "🌱", text: "Đừng nản! Thử lại em nhé!" };
  }
}

export function ResultScreen({ grade, topic, result, onReplay, onHome }: ResultScreenProps) {
  const stars = getStars(result.correct, result.total);
  const colors = GRADE_COLORS[grade];
  const { emoji, text } = getMessage(stars);
  const pct = Math.round((result.correct / result.total) * 100);

  useEffect(() => {
    if (stars >= 2) {
      const duration = stars === 3 ? 3000 : 1500;
      const end = Date.now() + duration;
      const frame = () => {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ["#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff"],
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ["#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff"],
        });
        if (Date.now() < end) requestAnimationFrame(frame);
      };
      frame();
    }
  }, [stars]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-indigo-50 to-purple-50 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0.7 }}
        className="w-full max-w-sm flex flex-col items-center gap-5"
      >
        {/* Result emoji */}
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-7xl"
        >
          {emoji}
        </motion.div>

        <div className="text-center">
          <h2 className="text-2xl font-black text-gray-800">{text}</h2>
          <p className="text-gray-500 text-sm mt-1">{topic.name} · Lớp {grade}</p>
        </div>

        {/* Stars */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3 + i * 0.2, type: "spring", stiffness: 200 }}
            >
              <Star
                className={`w-12 h-12 ${i < stars ? "text-yellow-400 fill-yellow-400 drop-shadow" : "text-gray-200 fill-gray-200"}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Score card */}
        <div className={`w-full rounded-3xl ${colors.light} border-2 ${colors.border} p-5`}>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className={`text-3xl font-black ${colors.text}`}>{result.correct}</p>
              <p className="text-gray-500 text-xs">Câu đúng</p>
            </div>
            <div>
              <p className="text-3xl font-black text-red-500">{result.total - result.correct}</p>
              <p className="text-gray-500 text-xs">Câu sai</p>
            </div>
            <div>
              <p className={`text-3xl font-black ${colors.text}`}>{pct}%</p>
              <p className="text-gray-500 text-xs">Tỉ lệ đúng</p>
            </div>
          </div>

          {result.streak >= 3 && (
            <div className="mt-3 bg-orange-100 rounded-2xl px-4 py-2 flex items-center justify-center gap-2">
              <span>🔥</span>
              <p className="text-orange-700 font-bold text-sm">Streak tốt nhất: {result.streak} câu liên tiếp!</p>
            </div>
          )}
        </div>

        {/* Star rating text */}
        <div className="flex items-center gap-2 text-gray-400 text-xs">
          <Trophy className="w-3 h-3" />
          <span>3 sao ≥ 90% · 2 sao ≥ 70% · 1 sao ≥ 50%</span>
        </div>

        {/* Action buttons */}
        <div className="w-full flex gap-3">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="flex-1">
            <Button
              onClick={onHome}
              variant="outline"
              className="w-full h-12 rounded-2xl border-2 flex gap-2 items-center justify-center"
            >
              <Home className="w-5 h-5" />
              Về trang chủ
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="flex-1">
            <Button
              onClick={onReplay}
              className={`w-full h-12 rounded-2xl ${colors.bg} text-white flex gap-2 items-center justify-center border-0`}
            >
              <RotateCcw className="w-5 h-5" />
              Chơi lại
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
