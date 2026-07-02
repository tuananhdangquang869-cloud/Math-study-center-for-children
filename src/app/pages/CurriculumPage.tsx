import { motion } from "motion/react";
import { Link } from "react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

const GRADES = [
  {
    grade: 1,
    label: "Lớp 1",
    emoji: "🌱",
    color: "from-pink-500 to-rose-600",
    lightBg: "bg-pink-50",
    border: "border-pink-200",
    textColor: "text-pink-700",
    goal: "Xây dựng nền tảng số học vững chắc, giúp trẻ tự tin làm toán cơ bản.",
    units: [
      { name: "Cộng trong phạm vi 10", topics: ["Nhận biết số 1–10", "Phép cộng đơn giản", "Bài tập điền số"] },
      { name: "Trừ trong phạm vi 10", topics: ["Phép trừ cơ bản", "So sánh số", "Bài tập thực tế"] },
      { name: "Cộng, trừ đến 20", topics: ["Cộng có nhớ", "Trừ có mượn", "Bài toán có lời"] },
    ],
  },
  {
    grade: 2,
    label: "Lớp 2",
    emoji: "🌿",
    color: "from-orange-500 to-amber-600",
    lightBg: "bg-orange-50",
    border: "border-orange-200",
    textColor: "text-orange-700",
    goal: "Mở rộng phạm vi số đến 100 và làm quen với phép nhân — nền tảng của toán học.",
    units: [
      { name: "Cộng, trừ trong 100", topics: ["Cộng nhiều chữ số", "Trừ có nhớ", "Ước tính kết quả"] },
      { name: "Bảng nhân 2, 3, 4, 5", topics: ["Ý nghĩa của phép nhân", "Bảng nhân thuộc lòng", "Vận dụng thực tế"] },
      { name: "Đo lường cơ bản", topics: ["Đọc giờ đồng hồ", "Đo độ dài", "Bài toán tiền"] },
    ],
  },
  {
    grade: 3,
    label: "Lớp 3",
    emoji: "🌳",
    color: "from-yellow-500 to-lime-600",
    lightBg: "bg-yellow-50",
    border: "border-yellow-200",
    textColor: "text-yellow-700",
    goal: "Thành thạo 4 phép tính cơ bản và tiếp cận hình học phẳng.",
    units: [
      { name: "Bảng nhân 6, 7, 8, 9", topics: ["Bảng nhân nâng cao", "Nhân với 0 và 1", "Tính nhẩm"] },
      { name: "Phép chia", topics: ["Chia hết", "Chia có dư", "Quan hệ nhân-chia"] },
      { name: "Hình học", topics: ["Chu vi hình chữ nhật", "Chu vi hình vuông", "Điểm, đoạn thẳng"] },
    ],
  },
  {
    grade: 4,
    label: "Lớp 4",
    emoji: "⭐",
    color: "from-green-500 to-teal-600",
    lightBg: "bg-green-50",
    border: "border-green-200",
    textColor: "text-green-700",
    goal: "Làm việc với số lớn, phân số và hình học không gian cơ bản.",
    units: [
      { name: "Số có nhiều chữ số", topics: ["Đọc, viết số lớn", "Nhân chia số lớn", "Bài toán nâng cao"] },
      { name: "Phân số", topics: ["Khái niệm phân số", "So sánh phân số", "Cộng trừ phân số cùng mẫu"] },
      { name: "Góc và đường thẳng", topics: ["Góc nhọn, tù, vuông", "Hai đường thẳng song song", "Đo góc"] },
    ],
  },
  {
    grade: 5,
    label: "Lớp 5",
    emoji: "🚀",
    color: "from-blue-500 to-indigo-600",
    lightBg: "bg-blue-50",
    border: "border-blue-200",
    textColor: "text-blue-700",
    goal: "Hoàn thiện kiến thức tiểu học, chuẩn bị nền tảng cho THCS.",
    units: [
      { name: "Số thập phân", topics: ["Đọc viết số thập phân", "Cộng trừ thập phân", "Nhân chia thập phân"] },
      { name: "Phần trăm", topics: ["Khái niệm %", "Tìm % của một số", "Bài toán % thực tế"] },
      { name: "Diện tích và thể tích", topics: ["Diện tích hình chữ nhật", "Diện tích hình tròn", "Thể tích hình hộp"] },
    ],
  },
];

export function CurriculumPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-blue-200 text-sm font-medium mb-2">CHƯƠNG TRÌNH HỌC</p>
          <h1 className="text-4xl font-black mb-4">Lộ trình từ Lớp 1 đến Lớp 5</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Bám sát chương trình Bộ GD&ĐT — mỗi khối lớp có mục tiêu rõ ràng và bài tập đa dạng.
          </p>
        </div>
      </section>

      {/* Grades */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          {GRADES.map(({ grade, label, emoji, color, lightBg, border, textColor, goal, units }, i) => (
            <motion.div
              key={grade}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-3xl overflow-hidden border-2 ${border} bg-white shadow-sm`}
            >
              {/* Grade header */}
              <div className={`bg-gradient-to-r ${color} p-6 text-white flex items-center gap-4`}>
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-3xl">
                  {emoji}
                </div>
                <div>
                  <h2 className="text-2xl font-black">{label}</h2>
                  <p className="text-white/80 text-sm mt-0.5">{goal}</p>
                </div>
              </div>

              {/* Units */}
              <div className="p-6 grid sm:grid-cols-3 gap-4">
                {units.map(({ name, topics }) => (
                  <div key={name} className={`${lightBg} rounded-2xl p-4`}>
                    <h3 className={`font-black text-sm ${textColor} mb-3`}>{name}</h3>
                    <ul className="space-y-1.5">
                      {topics.map((t) => (
                        <li key={t} className="flex items-start gap-2 text-xs text-gray-600">
                          <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${textColor}`} />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-12 text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-black mb-3">Sẵn sàng bắt đầu?</h2>
          <p className="text-blue-200 mb-6">Học thử miễn phí toàn bộ chương trình trong 7 ngày.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/hoc-toan">
              <Button className="h-12 px-8 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold rounded-xl border-0 gap-2">
                Học thử ngay <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/dang-ky">
              <Button variant="outline" className="h-12 px-8 rounded-xl border-white/40 text-white hover:bg-white/10 gap-2 bg-transparent">
                Đăng ký tài khoản
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
