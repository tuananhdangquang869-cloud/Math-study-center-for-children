import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Grade, Topic, TOPICS_BY_GRADE, GRADE_COLORS } from "./mathData";

interface TopicSelectorProps {
  grade: Grade;
  onSelect: (topic: Topic) => void;
  onBack: () => void;
}

export function TopicSelector({ grade, onSelect, onBack }: TopicSelectorProps) {
  const topics = TOPICS_BY_GRADE[grade];
  const colors = GRADE_COLORS[grade];

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
          <h2 className="text-2xl font-black text-gray-800">Lớp {grade} — Chọn Chủ Đề</h2>
          <p className="text-gray-500 text-sm">Em muốn luyện tập gì hôm nay?</p>
        </div>
      </div>

      {/* Topic cards */}
      <div className="grid grid-cols-1 gap-3">
        {topics.map((topic, i) => (
          <motion.button
            key={topic.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12, type: "spring" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelect(topic)}
            className={`w-full flex items-center gap-4 p-5 rounded-2xl bg-white shadow-md border-2 ${colors.border} hover:shadow-lg transition-shadow`}
          >
            <div className={`w-14 h-14 rounded-2xl ${colors.light} ${colors.border} border-2 flex items-center justify-center flex-shrink-0`}>
              <span className="text-3xl">{topic.icon}</span>
            </div>
            <div className="text-left flex-1">
              <p className={`text-lg font-black ${colors.text}`}>{topic.name}</p>
              <p className="text-gray-500 text-sm">{topic.description}</p>
            </div>
            <div className={`${colors.bg} rounded-full w-8 h-8 flex items-center justify-center`}>
              <span className="text-white text-sm font-bold">▶</span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Fun tip */}
      <div className="mt-6 bg-white rounded-2xl p-4 shadow text-center">
        <p className="text-gray-500 text-sm">💡 Mỗi bài có <strong>10 câu hỏi</strong> — cố gắng đạt 3 sao nhé!</p>
      </div>
    </div>
  );
}
