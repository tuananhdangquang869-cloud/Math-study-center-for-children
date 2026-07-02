import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Grade, GRADE_COLORS } from "./mathData";
import { Button } from "../ui/button";

interface GradeSelectorProps {
  onSelect: (grade: Grade) => void;
  onBack: () => void;
}

const GRADE_INFO: { grade: Grade; emoji: string; label: string; desc: string }[] = [
  { grade: 1, emoji: "🌱", label: "Lớp 1", desc: "Cộng, trừ trong 20" },
  { grade: 2, emoji: "🌿", label: "Lớp 2", desc: "Cộng trừ 100, bảng nhân" },
  { grade: 3, emoji: "🌳", label: "Lớp 3", desc: "4 phép tính, chia" },
  { grade: 4, emoji: "⭐", label: "Lớp 4", desc: "Số lớn, phân số" },
  { grade: 5, emoji: "🚀", label: "Lớp 5", desc: "Thập phân, phần trăm" },
];

export function GradeSelector({ onSelect, onBack }: GradeSelectorProps) {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-indigo-50 to-purple-50 p-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div>
          <h2 className="text-2xl font-black text-gray-800">Chọn Lớp</h2>
          <p className="text-gray-500 text-sm">Em đang học lớp mấy?</p>
        </div>
      </div>

      {/* Grade cards */}
      <div className="flex flex-col gap-3 flex-1">
        {GRADE_INFO.map(({ grade, emoji, label, desc }, i) => {
          const colors = GRADE_COLORS[grade];
          return (
            <motion.button
              key={grade}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, type: "spring" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onSelect(grade)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl bg-white shadow-md border-2 ${colors.border} hover:shadow-lg transition-shadow`}
            >
              <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center shadow-inner flex-shrink-0`}>
                <span className="text-3xl">{emoji}</span>
              </div>
              <div className="text-left flex-1">
                <p className={`text-xl font-black ${colors.text}`}>{label}</p>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
              <div className={`w-8 h-8 rounded-full ${colors.bg} flex items-center justify-center`}>
                <span className="text-white font-bold text-sm">▶</span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
