import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { TrendingUp, Clock, Star, AlertCircle, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const PARENT_IMG = "https://images.unsplash.com/photo-1629359652978-a5d383151c4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";

const MOCK_CHILDREN = [
  {
    name: "Bé Minh",
    grade: 3,
    avatar: "🧒",
    totalStar: 87,
    todayMin: 25,
    streak: 7,
    weakTopics: ["Bảng nhân 9", "Chia có dư"],
    recentScores: [
      { topic: "Bảng nhân 6", score: 90, stars: 3, date: "Hôm nay" },
      { topic: "Cộng trong 1000", score: 80, stars: 2, date: "Hôm qua" },
      { topic: "Bảng nhân 7", score: 60, stars: 1, date: "2 ngày trước" },
    ],
  },
  {
    name: "Bé Lan",
    grade: 1,
    avatar: "👧",
    totalStar: 45,
    todayMin: 15,
    streak: 3,
    weakTopics: ["Trừ trong 10"],
    recentScores: [
      { topic: "Cộng trong 10", score: 100, stars: 3, date: "Hôm nay" },
      { topic: "Đếm số", score: 70, stars: 2, date: "2 ngày trước" },
    ],
  },
];

function StarRow({ stars }: { stars: number }) {
  return (
    <span className="flex gap-0.5">
      {[0, 1, 2].map((i) => (
        <Star key={i} className={`w-3.5 h-3.5 ${i < stars ? "fill-yellow-400 text-yellow-400" : "text-gray-200 fill-gray-200"}`} />
      ))}
    </span>
  );
}

export function ParentPage() {
  const [activeChild, setActiveChild] = useState(0);
  const child = MOCK_CHILDREN[activeChild];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-14">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-block bg-blue-500/40 rounded-full px-3 py-1 text-sm mb-4">
              Dành cho Phụ huynh
            </div>
            <h1 className="text-3xl font-black mb-3">Theo dõi con học mọi lúc</h1>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Dashboard phụ huynh cho bạn cái nhìn toàn diện về tiến độ học tập của con — điểm số, thời gian học, điểm mạnh/yếu và lịch sử học tập.
            </p>
            <Link to="/dang-ky">
              <Button className="h-11 px-6 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold rounded-xl border-0 gap-2">
                Tạo tài khoản phụ huynh <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback src={PARENT_IMG} alt="Phụ huynh theo dõi con học" className="w-full h-56 object-cover" />
          </div>
        </div>
      </section>

      {/* Dashboard preview */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-black text-gray-900">Xem trước Dashboard</h2>
              <p className="text-gray-500 text-sm">Dữ liệu minh họa — thực tế được cập nhật theo thời gian thực</p>
            </div>
            {/* Child switcher */}
            <div className="flex gap-2">
              {MOCK_CHILDREN.map(({ name, avatar }, i) => (
                <button
                  key={name}
                  onClick={() => setActiveChild(i)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm font-semibold transition-all ${
                    activeChild === i ? "bg-blue-600 text-white" : "bg-white border border-gray-200 text-gray-700 hover:border-blue-300"
                  }`}
                >
                  <span>{avatar}</span>{name}
                </button>
              ))}
            </div>
          </div>

          <motion.div key={activeChild} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {[
                { icon: Star, label: "Tổng sao", value: child.totalStar, color: "text-yellow-500 bg-yellow-50" },
                { icon: Clock, label: "Hôm nay", value: `${child.todayMin} phút`, color: "text-blue-500 bg-blue-50" },
                { icon: TrendingUp, label: "Streak", value: `${child.streak} ngày`, color: "text-green-500 bg-green-50" },
                { icon: BookOpen, label: "Lớp", value: `Lớp ${child.grade}`, color: "text-purple-500 bg-purple-50" },
              ].map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <div className={`w-9 h-9 rounded-xl ${color} flex items-center justify-center mb-2`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-xl font-black text-gray-900">{value}</p>
                  <p className="text-gray-500 text-xs">{label}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Recent scores */}
              <div className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <h3 className="font-black text-gray-900 mb-4">Kết quả gần đây</h3>
                <div className="space-y-3">
                  {child.recentScores.map(({ topic, score, stars, date }) => (
                    <div key={topic} className="flex items-center gap-3">
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-800">{topic}</p>
                        <p className="text-xs text-gray-400">{date}</p>
                      </div>
                      <StarRow stars={stars} />
                      <div className={`text-sm font-black w-10 text-right ${score >= 80 ? "text-green-600" : score >= 60 ? "text-yellow-600" : "text-red-500"}`}>
                        {score}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weak areas */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <h3 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-500" />
                  Cần luyện thêm
                </h3>
                <div className="space-y-2">
                  {child.weakTopics.map((topic) => (
                    <div key={topic} className="bg-orange-50 border border-orange-200 rounded-xl px-3 py-2.5">
                      <p className="text-sm text-orange-800 font-medium">{topic}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-400 text-xs mt-3 leading-relaxed">
                  Gợi ý: khuyến khích con luyện thêm các chủ đề này trong tuần tới.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features list */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-black text-gray-900 text-center mb-8">Tính năng dành cho phụ huynh</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { emoji: "📊", title: "Báo cáo tiến độ hàng tuần", desc: "Email tổng hợp mỗi Chủ nhật: con học gì, đạt bao nhiêu sao, cần luyện thêm ở đâu." },
              { emoji: "🔔", title: "Thông báo thành tích", desc: "Nhận ngay khi con đạt 3 sao, hoàn thành streak mới hoặc vượt qua mốc quan trọng." },
              { emoji: "👁️", title: "Xem lịch sử học tập", desc: "Xem chi tiết từng bài làm, từng câu trả lời của con để hiểu điểm yếu cụ thể." },
              { emoji: "📱", title: "Quản lý trên điện thoại", desc: "App responsive, xem được trên điện thoại mọi lúc — không cần mở máy tính." },
              { emoji: "👨‍👩‍👧‍👦", title: "Nhiều tài khoản con", desc: "Gói Gia đình hỗ trợ tối đa 3 tài khoản học sinh dưới một tài khoản phụ huynh." },
              { emoji: "🛡️", title: "Kiểm soát nội dung", desc: "Phụ huynh chọn lớp và chủ đề cho con học — không có quảng cáo hay nội dung ngoài luồng." },
            ].map(({ emoji, title, desc }) => (
              <div key={title} className="flex gap-4 p-4 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors">
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-12 text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-black mb-3">Tạo tài khoản phụ huynh ngay</h2>
          <p className="text-blue-200 mb-6">Miễn phí 7 ngày — theo dõi con học từ hôm nay.</p>
          <Link to="/dang-ky">
            <Button className="h-12 px-8 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold rounded-xl border-0">
              Đăng ký miễn phí
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
