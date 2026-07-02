import { motion } from "motion/react";
import { Star, BookOpen } from "lucide-react";
import { Button } from "../ui/button";

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 p-6">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.8 }}
        className="flex flex-col items-center gap-6 max-w-sm w-full"
      >
        {/* Icon */}
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-2xl"
        >
          <span className="text-6xl">🧮</span>
        </motion.div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-5xl font-black text-white drop-shadow-lg">Toán Sao</h1>
          <p className="text-white/90 mt-2 text-lg font-medium">
            Học toán thật thú vị!
          </p>
        </div>

        {/* Decorative stars */}
        <div className="flex gap-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.3, 1], rotate: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
            >
              <Star className="w-8 h-8 text-yellow-300 fill-yellow-300 drop-shadow" />
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-white/20 backdrop-blur rounded-2xl p-4 w-full text-white text-center space-y-2">
          <p className="font-semibold">✨ Dành cho học sinh lớp 1 – 5</p>
          <p className="font-semibold">🎯 Luyện tập theo chủ đề</p>
          <p className="font-semibold">🏆 Kiếm sao và phần thưởng</p>
        </div>

        {/* Start button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full"
        >
          <Button
            onClick={onStart}
            className="w-full h-14 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 rounded-2xl shadow-lg flex items-center justify-center gap-2 border-b-4 border-yellow-600"
          >
            <BookOpen className="w-6 h-6" />
            <span className="text-xl font-black">Bắt Đầu Học!</span>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
