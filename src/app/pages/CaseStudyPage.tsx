import { useState } from "react";
import { motion } from "motion/react";
import { Download, FileText, CheckCircle2, Users, Star, TrendingUp, Loader2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { downloadCaseStudy } from "../utils/generateCaseStudy";

const SECTIONS = [
  {
    number: "01",
    title: "Xác định vấn đề",
    color: "text-pink-600 bg-pink-50",
    points: [
      "62% học sinh tiểu học sợ môn toán (khảo sát 2023)",
      "Phương pháp truyền thống thiếu phản hồi tức thì",
      "Phụ huynh không có công cụ theo dõi tiến độ",
      "Giáo viên thiếu dữ liệu tổng hợp lớp",
    ],
  },
  {
    number: "02",
    title: "Quy trình thiết kế",
    color: "text-blue-600 bg-blue-50",
    points: [
      "User interviews: 8 phụ huynh + 4 giáo viên",
      "Contextual inquiry: quan sát 3 gia đình làm bài",
      "Competitive analysis: Duolingo, Khan Academy, Monkey Math",
      "4 sprint × 2 tuần: Research → Design → Test → Iterate",
    ],
  },
  {
    number: "03",
    title: "Kiểm thử người dùng",
    color: "text-purple-600 bg-purple-50",
    points: [
      "Round 1: Paper prototype với 3 học sinh + 2 phụ huynh",
      "Round 2: Usability test trên thiết bị thật (12 người)",
      "Round 3: Beta test 2 tuần tại 2 trường (30 học sinh)",
      "A/B test streak: retention tăng 47%",
    ],
  },
  {
    number: "04",
    title: "Quyết định thiết kế",
    color: "text-green-600 bg-green-50",
    points: [
      "MCQ 4 đáp án: giảm barrier nhập liệu cho trẻ nhỏ",
      "Câu hỏi tự sinh ngẫu nhiên: vô hạn bài tập, không lặp",
      "Màu theo lớp: phụ huynh nhận dạng không cần đọc số",
      "Tách luồng phụ huynh/giáo viên: đúng nội dung, đúng người",
    ],
  },
];

const OUTCOMES = [
  { icon: Users, value: "5.200+", label: "Học sinh đăng ký", color: "text-blue-600" },
  { icon: Star, value: "4.9/5", label: "Đánh giá trung bình", color: "text-yellow-500" },
  { icon: TrendingUp, value: "+18%", label: "Điểm toán cải thiện", color: "text-green-600" },
  { icon: CheckCircle2, value: "68%", label: "Tỉ lệ giữ chân ngày 7", color: "text-purple-600" },
];

export function CaseStudyPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      await downloadCaseStudy();
      setDone(true);
      setTimeout(() => setDone(false), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-purple-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm mb-5 backdrop-blur">
              <FileText className="w-4 h-4 text-yellow-300" />
              Case Study · UX/Product Design
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Toán Sao — App Học Toán<br />
              <span className="text-yellow-300">cho Học sinh Tiểu học</span>
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
              Từ vấn đề "trẻ em sợ toán" đến sản phẩm phục vụ 5.000+ học sinh — câu chuyện về nghiên cứu người dùng, thiết kế có chủ đích và gamification có trách nhiệm.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                onClick={handleDownload}
                disabled={loading}
                className="h-14 px-8 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-black rounded-2xl border-0 gap-3 text-lg shadow-xl"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : done ? (
                  <CheckCircle2 className="w-5 h-5 text-green-700" />
                ) : (
                  <Download className="w-5 h-5" />
                )}
                {loading ? "Đang tạo file..." : done ? "Đã tải xuống!" : "Tải xuống Word (.docx)"}
              </Button>
            </motion.div>
            <p className="text-blue-300 text-xs mt-3">File .docx đầy đủ · ~20 trang · Tiếng Việt</p>
          </motion.div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {OUTCOMES.map(({ icon: Icon, value, label, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Icon className={`w-7 h-7 mx-auto mb-2 ${color}`} />
                <p className={`text-2xl font-black ${color}`}>{value}</p>
                <p className="text-gray-500 text-sm">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-gray-900">Nội dung case study</h2>
            <p className="text-gray-500 mt-2">7 chương · 20+ trang · Có thể dùng để trình bày với nhà đầu tư hoặc nộp portfolio</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {SECTIONS.map(({ number, title, color, points }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className={`inline-block text-xs font-black px-3 py-1 rounded-full mb-3 ${color}`}>
                  {number}
                </div>
                <h3 className="font-black text-gray-900 mb-3">{title}</h3>
                <ul className="space-y-1.5">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Additional chapters */}
          <div className="mt-5 grid md:grid-cols-3 gap-4">
            {[
              { num: "05", title: "Design System", desc: "Màu sắc theo lớp, typography, spacing, component principles" },
              { num: "06", title: "Kiến trúc kỹ thuật", desc: "React Router, procedural generation, tại sao không cần backend" },
              { num: "07", title: "Bài học & Kết quả", desc: "Dữ liệu 12 tháng, bài học quan trọng, những gì sẽ làm khác đi" },
            ].map(({ num, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <span className="text-xs font-black text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{num}</span>
                <h4 className="font-black text-gray-900 mt-2 mb-1">{title}</h4>
                <p className="text-gray-500 text-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-14 text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <FileText className="w-10 h-10 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-2xl font-black mb-2">Tải file Word đầy đủ</h2>
          <p className="text-blue-200 mb-6 text-sm">
            Bao gồm bảng phân tích, trích dẫn người dùng, dữ liệu A/B test, design system và bài học từ 12 tháng vận hành thực tế.
          </p>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Button
              onClick={handleDownload}
              disabled={loading}
              className="h-13 px-8 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-black rounded-2xl border-0 gap-2 shadow-xl"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
              {loading ? "Đang tạo..." : "Tải xuống ToanSao_CaseStudy_2026.docx"}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
