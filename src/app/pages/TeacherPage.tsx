import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Users, BookOpen, BarChart2, Download, ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const TEACHER_IMG = "https://images.unsplash.com/photo-1577896851231-70ef18881754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";

const MOCK_CLASS = [
  { name: "Nguyễn Minh", score: 92, stars: 3, done: true, weak: null },
  { name: "Trần Lan Anh", score: 76, stars: 2, done: true, weak: "Bảng nhân 8" },
  { name: "Lê Quang Khải", score: 55, stars: 1, done: true, weak: "Chia có dư" },
  { name: "Phạm Thị Hoa", score: 88, stars: 3, done: true, weak: null },
  { name: "Vũ Đức Thắng", score: 0, stars: 0, done: false, weak: null },
  { name: "Hoàng Bảo An", score: 64, stars: 2, done: true, weak: "Bảng nhân 9" },
  { name: "Đỗ Thị Thu", score: 95, stars: 3, done: true, weak: null },
  { name: "Ngô Văn Tú", score: 0, stars: 0, done: false, weak: null },
];

const ASSIGNMENTS = [
  { name: "Bảng nhân 6–9", deadline: "30/06/2026", submitted: 6, total: 8, status: "active" },
  { name: "Chia có dư", deadline: "25/06/2026", submitted: 8, total: 8, status: "done" },
  { name: "Cộng trong 1000", deadline: "18/06/2026", submitted: 8, total: 8, status: "done" },
];

export function TeacherPage() {
  const [tab, setTab] = useState<"overview" | "assignments" | "reports">("overview");

  const avgScore = Math.round(
    MOCK_CLASS.filter((s) => s.done).reduce((a, s) => a + s.score, 0) / MOCK_CLASS.filter((s) => s.done).length
  );

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-800 text-white py-14">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-block bg-purple-500/40 rounded-full px-3 py-1 text-sm mb-4">
              Dành cho Giáo viên & Nhà trường
            </div>
            <h1 className="text-3xl font-black mb-3">Quản lý lớp học thông minh</h1>
            <p className="text-purple-100 mb-6 leading-relaxed">
              Dashboard giáo viên: giao bài tập, theo dõi từng học sinh, xem báo cáo tổng hợp và xuất kết quả để báo cáo nhà trường.
            </p>
            <Link to="/dang-ky">
              <Button className="h-11 px-6 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold rounded-xl border-0 gap-2">
                Đăng ký tài khoản giáo viên <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback src={TEACHER_IMG} alt="Giáo viên quản lý lớp học" className="w-full h-56 object-cover" />
          </div>
        </div>
      </section>

      {/* Dashboard preview */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-6">
            <h2 className="text-xl font-black text-gray-900">Xem trước Dashboard Giáo viên</h2>
            <p className="text-gray-500 text-sm">Dữ liệu minh họa — Lớp 3A · Trường Tiểu học Bình Chánh</p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 bg-white rounded-xl p-1 w-fit shadow-sm border border-gray-100">
            {[
              { key: "overview", label: "Tổng quan", icon: BarChart2 },
              { key: "assignments", label: "Bài tập", icon: BookOpen },
              { key: "reports", label: "Báo cáo học sinh", icon: Users },
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setTab(key as typeof tab)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  tab === key ? "bg-purple-600 text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Icon className="w-4 h-4" />{label}
              </button>
            ))}
          </div>

          <motion.div key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            {tab === "overview" && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: "Tổng học sinh", value: "8", icon: Users, color: "text-blue-500 bg-blue-50" },
                    { label: "Đã nộp bài", value: "6/8", icon: CheckCircle2, color: "text-green-500 bg-green-50" },
                    { label: "Điểm TB lớp", value: `${avgScore}%`, icon: TrendingUp, color: "text-purple-500 bg-purple-50" },
                    { label: "Bài đang mở", value: "1", icon: BookOpen, color: "text-orange-500 bg-orange-50" },
                  ].map(({ label, value, icon: Icon, color }) => (
                    <div key={label} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                      <div className={`w-9 h-9 rounded-xl ${color} flex items-center justify-center mb-2`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <p className="text-xl font-black text-gray-900">{value}</p>
                      <p className="text-gray-500 text-xs">{label}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <h3 className="font-black text-gray-900 mb-3">Điểm yếu phổ biến của lớp</h3>
                  <div className="space-y-2">
                    {[
                      { topic: "Bảng nhân 9", count: 3 },
                      { topic: "Chia có dư", count: 2 },
                      { topic: "Bảng nhân 8", count: 2 },
                    ].map(({ topic, count }) => (
                      <div key={topic} className="flex items-center gap-3">
                        <div className="flex-1 bg-gray-100 rounded-full h-2">
                          <div
                            className="bg-orange-400 rounded-full h-2"
                            style={{ width: `${(count / 8) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-700 w-32 flex-shrink-0">{topic}</span>
                        <span className="text-sm font-bold text-gray-500">{count} HS</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {tab === "assignments" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-gray-900">Bài tập đã giao</h3>
                  <Button size="sm" className="bg-purple-600 text-white rounded-xl border-0 gap-1">
                    <BookOpen className="w-3.5 h-3.5" /> Giao bài mới
                  </Button>
                </div>
                {ASSIGNMENTS.map(({ name, deadline, submitted, total, status }) => (
                  <div key={name} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4">
                    <div className="flex-1">
                      <p className="font-bold text-gray-900">{name}</p>
                      <p className="text-gray-400 text-xs">Hạn: {deadline}</p>
                    </div>
                    <div className="text-center">
                      <p className="font-black text-gray-900">{submitted}/{total}</p>
                      <p className="text-gray-400 text-xs">đã nộp</p>
                    </div>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                      {status === "active" ? "Đang mở" : "Đã kết thúc"}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {tab === "reports" && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                  <h3 className="font-black text-gray-900">Báo cáo từng học sinh</h3>
                  <Button size="sm" variant="outline" className="rounded-xl gap-1">
                    <Download className="w-3.5 h-3.5" /> Xuất PDF
                  </Button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left px-4 py-3 text-gray-500 font-semibold">Học sinh</th>
                        <th className="text-center px-4 py-3 text-gray-500 font-semibold">Điểm</th>
                        <th className="text-center px-4 py-3 text-gray-500 font-semibold">Sao</th>
                        <th className="text-left px-4 py-3 text-gray-500 font-semibold">Điểm yếu</th>
                        <th className="text-center px-4 py-3 text-gray-500 font-semibold">Trạng thái</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {MOCK_CLASS.map(({ name, score, stars, done, weak }) => (
                        <tr key={name} className="hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium text-gray-900">{name}</td>
                          <td className="px-4 py-3 text-center">
                            {done ? (
                              <span className={`font-bold ${score >= 80 ? "text-green-600" : score >= 60 ? "text-yellow-600" : "text-red-500"}`}>
                                {score}%
                              </span>
                            ) : "—"}
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex justify-center gap-0.5">
                              {[0, 1, 2].map((i) => (
                                <span key={i} className={`text-xs ${i < stars ? "text-yellow-400" : "text-gray-200"}`}>★</span>
                              ))}
                            </div>
                          </td>
                          <td className="px-4 py-3 text-gray-500 text-xs">{weak ?? "—"}</td>
                          <td className="px-4 py-3 text-center">
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${done ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                              {done ? "Đã nộp" : "Chưa làm"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-black text-gray-900 text-center mb-8">Tính năng dành cho giáo viên</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { emoji: "📋", title: "Giao bài tập theo chủ đề", desc: "Chọn chủ đề, đặt hạn nộp và giao cho toàn lớp — học sinh nhận thông báo ngay lập tức." },
              { emoji: "📊", title: "Báo cáo chi tiết từng học sinh", desc: "Xem điểm số, thời gian làm bài, câu trả lời sai cụ thể của từng em." },
              { emoji: "📥", title: "Xuất báo cáo PDF", desc: "Tải báo cáo tổng hợp lớp hoặc từng học sinh để nộp cho ban giám hiệu." },
              { emoji: "🔔", title: "Nhắc nhở tự động", desc: "Hệ thống tự gửi nhắc nhở đến học sinh chưa làm bài trước hạn nộp." },
              { emoji: "📈", title: "Phân tích xu hướng lớp", desc: "Xem điểm mạnh/yếu của cả lớp theo từng chủ đề để điều chỉnh kế hoạch dạy học." },
              { emoji: "🤝", title: "Hỗ trợ triển khai", desc: "Đội ngũ Toán Sao đào tạo và hỗ trợ onsite cho nhà trường trong 30 ngày đầu." },
            ].map(({ emoji, title, desc }) => (
              <div key={title} className="flex gap-4 p-4 rounded-2xl border border-gray-100 hover:border-purple-200 transition-colors">
                <div className="text-2xl">{emoji}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 py-12 text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-black mb-3">Đưa Toán Sao vào lớp học của bạn</h2>
          <p className="text-purple-200 mb-6">Liên hệ để được tư vấn gói Nhà trường phù hợp.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/dang-ky">
              <Button className="h-12 px-8 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold rounded-xl border-0">
                Đăng ký dùng thử
              </Button>
            </Link>
            <a href="tel:0901234567">
              <Button variant="outline" className="h-12 px-8 rounded-xl border-white/40 text-white hover:bg-white/10 bg-transparent">
                Gọi: 0901 234 567
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
