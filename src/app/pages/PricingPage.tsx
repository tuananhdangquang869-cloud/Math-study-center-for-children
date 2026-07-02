import { motion } from "motion/react";
import { Link } from "react-router";
import { CheckCircle2, X, Star, Phone } from "lucide-react";
import { Button } from "../components/ui/button";

const PLANS = [
  {
    name: "Miễn phí",
    price: "0đ",
    period: "mãi mãi",
    highlight: false,
    color: "border-gray-200",
    btnClass: "bg-gray-900 hover:bg-gray-800 text-white border-0",
    features: [
      { text: "Truy cập 3 chủ đề cơ bản", ok: true },
      { text: "10 câu hỏi / ngày", ok: true },
      { text: "Xem điểm và sao", ok: true },
      { text: "Báo cáo tiến độ chi tiết", ok: false },
      { text: "Tài khoản phụ huynh", ok: false },
      { text: "Tải báo cáo PDF", ok: false },
    ],
    cta: "Học thử ngay",
    to: "/hoc-toan",
  },
  {
    name: "Cá nhân",
    price: "79.000đ",
    period: "/ tháng",
    highlight: true,
    color: "border-blue-500",
    btnClass: "bg-blue-600 hover:bg-blue-700 text-white border-0",
    tag: "Phổ biến nhất",
    features: [
      { text: "Toàn bộ chương trình lớp 1–5", ok: true },
      { text: "Bài tập không giới hạn", ok: true },
      { text: "Báo cáo tiến độ chi tiết", ok: true },
      { text: "Tài khoản phụ huynh theo dõi", ok: true },
      { text: "Tải báo cáo PDF", ok: false },
      { text: "Dashboard giáo viên", ok: false },
    ],
    cta: "Đăng ký ngay",
    to: "/dang-ky",
  },
  {
    name: "Gia đình",
    price: "129.000đ",
    period: "/ tháng",
    highlight: false,
    color: "border-purple-300",
    btnClass: "bg-purple-600 hover:bg-purple-700 text-white border-0",
    features: [
      { text: "Tất cả tính năng Cá nhân", ok: true },
      { text: "Tối đa 3 tài khoản học sinh", ok: true },
      { text: "Báo cáo tiến độ chi tiết", ok: true },
      { text: "Tải báo cáo PDF hàng tháng", ok: true },
      { text: "Hỗ trợ ưu tiên qua Zalo", ok: true },
      { text: "Dashboard giáo viên", ok: false },
    ],
    cta: "Đăng ký ngay",
    to: "/dang-ky",
  },
  {
    name: "Nhà trường",
    price: "Liên hệ",
    period: "theo hợp đồng",
    highlight: false,
    color: "border-green-300",
    btnClass: "bg-green-600 hover:bg-green-700 text-white border-0",
    features: [
      { text: "Không giới hạn học sinh", ok: true },
      { text: "Dashboard giáo viên đầy đủ", ok: true },
      { text: "Giao bài tập theo lớp", ok: true },
      { text: "Báo cáo tổng hợp xuất PDF", ok: true },
      { text: "Tích hợp hệ thống nhà trường", ok: true },
      { text: "Hỗ trợ onsite & training", ok: true },
    ],
    cta: "Liên hệ tư vấn",
    to: "/dang-ky",
  },
];

const FAQS = [
  { q: "Có thể hủy gói bất cứ lúc nào không?", a: "Có. Bạn có thể hủy đăng ký bất cứ lúc nào và sẽ không bị tính phí thêm từ kỳ tiếp theo." },
  { q: "Dùng thử miễn phí có cần thẻ tín dụng không?", a: "Không cần. Bạn chỉ cần email để đăng ký và có thể dùng thử 7 ngày đầy đủ tính năng Cá nhân mà không cần thông tin thanh toán." },
  { q: "Một tài khoản dùng cho mấy thiết bị?", a: "Không giới hạn thiết bị. Bạn có thể dùng trên điện thoại, máy tính bảng và máy tính cùng lúc." },
  { q: "Gói Nhà trường có hỗ trợ triển khai không?", a: "Có. Đội ngũ của chúng tôi sẽ hỗ trợ onsite, đào tạo giáo viên và tích hợp với hệ thống hiện có của nhà trường." },
];

export function PricingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-blue-200 text-sm font-medium mb-2">HỌC PHÍ</p>
          <h1 className="text-4xl font-black mb-4">Gói dịch vụ rõ ràng, minh bạch</h1>
          <p className="text-blue-100 text-lg">Bắt đầu miễn phí — nâng cấp khi sẵn sàng. Không ràng buộc.</p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLANS.map(({ name, price, period, highlight, color, btnClass, tag, features, cta, to }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-white rounded-3xl p-6 border-2 ${color} shadow-sm ${highlight ? "shadow-lg scale-105" : ""}`}
              >
                {tag && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-300 text-yellow-300" />
                    {tag}
                  </div>
                )}
                <h3 className="font-black text-gray-900 text-lg mb-1">{name}</h3>
                <div className="mb-4">
                  <span className="text-2xl font-black text-gray-900">{price}</span>
                  <span className="text-gray-500 text-sm"> {period}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {features.map(({ text, ok }) => (
                    <li key={text} className="flex items-start gap-2 text-sm">
                      {ok
                        ? <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        : <X className="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5" />}
                      <span className={ok ? "text-gray-700" : "text-gray-400"}>{text}</span>
                    </li>
                  ))}
                </ul>
                <Link to={to}>
                  <Button className={`w-full rounded-xl h-10 ${btnClass}`}>{cta}</Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-black text-gray-900 text-center mb-10">Câu hỏi thường gặp</h2>
          <div className="space-y-4">
            {FAQS.map(({ q, a }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-gray-50 rounded-2xl p-5"
              >
                <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-12 text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-black mb-3">Cần tư vấn thêm?</h2>
          <p className="text-blue-200 mb-6">Đội ngũ của chúng tôi sẵn sàng hỗ trợ qua điện thoại hoặc Zalo.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:0901234567">
              <Button className="h-12 px-8 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold rounded-xl border-0 gap-2">
                <Phone className="w-4 h-4" />
                0901 234 567
              </Button>
            </a>
            <Link to="/dang-ky">
              <Button variant="outline" className="h-12 px-8 rounded-xl border-white/40 text-white hover:bg-white/10 bg-transparent">
                Đặt lịch tư vấn
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
