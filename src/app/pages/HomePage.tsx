import image_ChatGPT_Image_Jun_30__2026__11_31_49_PM from '@/imports/ChatGPT_Image_Jun_30__2026__11_31_49_PM.png'
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Star, BookOpen, BarChart2, Users, CheckCircle2,
  ArrowRight, Quote, Phone, ChevronRight
} from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const HERO_IMG = "https://images.unsplash.com/photo-1761208662734-fb46f1398551?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const STUDENT_IMG = "https://images.unsplash.com/photo-1758685733395-dba201403b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const PARENT_IMG = "https://images.unsplash.com/photo-1629360021730-3d258452c425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const TEACHER_IMG = "https://images.unsplash.com/photo-1577896851231-70ef18881754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";

const FEATURES = [
  { icon: "🎯", title: "Học theo lộ trình", desc: "Nội dung được thiết kế theo từng lớp (1–5), bám sát chương trình Bộ GD&ĐT." },
  { icon: "🤖", title: "Câu hỏi thông minh", desc: "Hệ thống tự tạo bài tập mới mỗi lần học, không lặp lại, không nhàm chán." },
  { icon: "📊", title: "Theo dõi tiến độ", desc: "Phụ huynh xem điểm số, thời gian học và điểm yếu của con theo thời gian thực." },
  { icon: "🏆", title: "Game hóa học tập", desc: "Hệ thống sao thưởng, streak liên tiếp, pháo hoa — học vui như chơi game." },
  { icon: "👩‍🏫", title: "Công cụ giáo viên", desc: "Giao bài tập, xem báo cáo cả lớp, xuất kết quả báo cáo nhà trường." },
  { icon: "📱", title: "Mọi thiết bị", desc: "Dùng tốt trên điện thoại, máy tính bảng và máy tính — học mọi lúc mọi nơi." },
];

const CURRICULUM = [
  { grade: "Lớp 1", color: "from-pink-400 to-rose-500", topics: ["Cộng, trừ trong 10", "Đếm số đến 100", "Nhận biết hình"] },
  { grade: "Lớp 2", color: "from-orange-400 to-amber-500", topics: ["Cộng trừ đến 100", "Bảng nhân 2–5", "Đọc giờ đồng hồ"] },
  { grade: "Lớp 3", color: "from-yellow-400 to-lime-500", topics: ["Bảng nhân 6–9", "Chia hết", "Chu vi hình học"] },
  { grade: "Lớp 4", color: "from-green-400 to-teal-500", topics: ["Nhân chia số lớn", "Phân số cơ bản", "Góc và đường thẳng"] },
  { grade: "Lớp 5", color: "from-blue-400 to-indigo-500", topics: ["Số thập phân", "Phần trăm", "Diện tích và thể tích"] },
];

const TESTIMONIALS = [
  {
    name: "Chị Nguyễn Thanh Hương",
    role: "Phụ huynh học sinh lớp 3",
    avatar: "👩",
    text: "Con tôi từ chỗ sợ toán nay đã thích học mỗi tối. App thiết kế rất đẹp và dễ dùng, điểm số cũng cải thiện rõ ràng sau 2 tháng.",
  },
  {
    name: "Thầy Trần Minh Khoa",
    role: "Giáo viên tiểu học — Trường TH Bình Chánh",
    avatar: "👨‍🏫",
    text: "Tôi dùng dashboard giáo viên để giao bài tập hàng tuần. Báo cáo tổng hợp lớp rất chi tiết, giúp tôi biết học sinh nào cần hỗ trợ thêm.",
  },
  {
    name: "Anh Lê Văn Thành",
    role: "Phụ huynh học sinh lớp 1",
    avatar: "👨",
    text: "Giao diện vui nhộn, con tự học mà không cần nhắc. Tính năng streak tạo động lực rất tốt — con cứ muốn duy trì chuỗi ngày học liên tiếp.",
  },
];

const STATS = [
  { value: "5.000+", label: "Học sinh" },
  { value: "200+", label: "Trường hợp tác" },
  { value: "98%", label: "Phụ huynh hài lòng" },
  { value: "4.9★", label: "Đánh giá trung bình" },
];

export function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {["12%", "35%", "58%", "78%", "92%"].map((left, i) => (
            <div
              key={i}
              className="absolute text-6xl animate-bounce"
              style={{ left, top: `${[20, 60, 15, 50, 30][i]}%`, animationDelay: `${i * 0.3}s` }}
            >
              {["⭐", "🔢", "➕", "🎯", "🏆"][i]}
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm mb-4 backdrop-blur">
                <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                Trung tâm toán tư duy #1 TP.HCM
              </div>
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
                Giúp con yêu thích<br />
                <span className="text-yellow-300">môn Toán</span> từ sớm
              </h1>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                Nền tảng học toán tương tác dành cho học sinh lớp 1–5. Kết hợp game hóa và lộ trình cá nhân hóa — học vui, tiến nhanh, phụ huynh yên tâm.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/dang-ky">
                  <Button className="h-12 px-6 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold rounded-xl border-0 gap-2">
                    Đăng ký học thử miễn phí
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/hoc-toan">
                  <Button variant="outline" className="h-12 px-6 rounded-xl border-white/40 text-white hover:bg-white/10 gap-2 bg-transparent">
                    <BookOpen className="w-4 h-4" />
                    Học thử ngay
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4 mt-6 text-sm text-blue-200">
                {["Miễn phí 7 ngày", "Không cần thẻ", "Hủy bất cứ lúc nào"].map((t) => (
                  <span key={t} className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />{t}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <ImageWithFallback
                  src={image_ChatGPT_Image_Jun_30__2026__11_31_49_PM}
                  alt="Học sinh đang học toán vui vẻ"
                  className="w-full h-72 md:h-96 object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center text-xl">🏆</div>
                  <div>
                    <p className="font-black text-gray-900 text-sm">98% hài lòng</p>
                    <p className="text-gray-500 text-xs">từ phụ huynh & giáo viên</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="text-2xl">⭐</div>
                  <div>
                    <p className="font-black text-gray-900 text-sm">4.9 / 5</p>
                    <p className="text-gray-500 text-xs">5.000+ học sinh</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-3xl font-black text-blue-700">{value}</p>
                <p className="text-gray-500 text-sm mt-1">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Two audiences ────────────────────────────────────── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900">Toán Sao dành cho ai?</h2>
            <p className="text-gray-500 mt-2">Hai luồng trải nghiệm riêng biệt — phụ huynh và giáo viên</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Parent */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md border border-blue-100"
            >
              <div className="h-48 overflow-hidden">
                <ImageWithFallback src={PARENT_IMG} alt="Phụ huynh hướng dẫn con học" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="inline-block bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm font-semibold mb-3">
                  Dành cho Phụ huynh
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">Theo dõi con học mọi lúc</h3>
                <p className="text-gray-500 text-sm mb-4">Xem điểm số theo từng chủ đề, thời gian học mỗi ngày và kỹ năng con cần cải thiện — ngay trên điện thoại.</p>
                <ul className="space-y-1.5 mb-5">
                  {["Báo cáo tiến độ hàng tuần", "Thông báo khi con đạt thành tích", "Gợi ý bài tập phù hợp"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <Link to="/phu-huynh">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl border-0 gap-2">
                    Xem tính năng phụ huynh <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Teacher */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md border border-purple-100"
            >
              <div className="h-48 overflow-hidden">
                <ImageWithFallback src={TEACHER_IMG} alt="Giáo viên hướng dẫn lớp học" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="inline-block bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm font-semibold mb-3">
                  Dành cho Giáo viên
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">Quản lý lớp học dễ dàng</h3>
                <p className="text-gray-500 text-sm mb-4">Dashboard giáo viên: giao bài tập, xem báo cáo tổng hợp cả lớp và xuất kết quả để báo cáo nhà trường.</p>
                <ul className="space-y-1.5 mb-5">
                  {["Giao bài theo chủ đề & lớp", "Báo cáo chi tiết từng học sinh", "Xuất PDF kết quả học kỳ"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <Link to="/giao-vien">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl border-0 gap-2">
                    Xem tính năng giáo viên <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900">Tại sao chọn Toán Sao?</h2>
            <p className="text-gray-500 mt-2">Nền tảng học toán toàn diện nhất cho học sinh tiểu học</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-black text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Curriculum preview ───────────────────────────────── */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900">Chương trình học</h2>
            <p className="text-gray-500 mt-2">Bám sát chương trình Bộ GD&ĐT — từ lớp 1 đến lớp 5</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {CURRICULUM.map(({ grade, color, topics }, i) => (
              <motion.div
                key={grade}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              >
                <div className={`bg-gradient-to-br ${color} p-4 text-white text-center`}>
                  <p className="font-black text-lg">{grade}</p>
                </div>
                <div className="bg-white p-4">
                  <ul className="space-y-1.5">
                    {topics.map((t) => (
                      <li key={t} className="text-xs text-gray-600 flex items-start gap-1.5">
                        <span className="text-green-500 mt-0.5">✓</span>{t}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/chuong-trinh-hoc">
              <Button variant="outline" className="rounded-xl gap-2">
                Xem chi tiết chương trình <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="bg-blue-700 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white">Phụ huynh & giáo viên nói gì?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ name, role, avatar, text }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur rounded-2xl p-6 text-white"
              >
                <Quote className="w-6 h-6 text-yellow-300 mb-3" />
                <p className="text-sm leading-relaxed text-blue-100 mb-4">"{text}"</p>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{avatar}</span>
                  <div>
                    <p className="font-bold text-sm">{name}</p>
                    <p className="text-blue-300 text-xs">{role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Demo section ─────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-block bg-yellow-100 text-yellow-800 rounded-full px-3 py-1 text-sm font-semibold mb-4">
                🎮 Thử ngay — Miễn phí
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Học toán vui như chơi game
              </h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Hệ thống tạo bài tập thông minh, câu hỏi trắc nghiệm 4 đáp án, phản hồi ngay lập tức và hệ thống sao thưởng — tất cả được thiết kế để trẻ tự học mà không cần thúc giục.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "10 câu hỏi mỗi bài, tự tạo ngẫu nhiên",
                  "Phản hồi đúng/sai tức thì",
                  "Hệ thống streak & sao thưởng",
                  "Hiệu ứng pháo hoa khi hoàn thành tốt",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/hoc-toan">
                <Button className="h-12 px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl border-0 gap-2">
                  <BookOpen className="w-5 h-5" />
                  Học thử ngay — Miễn phí
                </Button>
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src={STUDENT_IMG}
                alt="Học sinh vui vẻ học toán trên máy tính"
                className="w-full h-80 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-16 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-3">Bắt đầu hành trình học toán hôm nay</h2>
          <p className="text-blue-200 mb-8">Dùng thử miễn phí 7 ngày — không cần thẻ tín dụng.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/dang-ky">
              <Button className="h-12 px-8 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold rounded-xl border-0 gap-2">
                Đăng ký học thử miễn phí
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a href="tel:0901234567">
              <Button variant="outline" className="h-12 px-8 rounded-xl border-white/40 text-white hover:bg-white/10 gap-2 bg-transparent">
                <Phone className="w-4 h-4" />
                Gọi tư vấn: 0901 234 567
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
