import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

type Role = "parent" | "teacher" | "";

export function RegisterPage() {
  const [role, setRole] = useState<Role>("");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", school: "", grade: "", note: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-6">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-sm"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-2">Đăng ký thành công!</h2>
          <p className="text-gray-500 mb-6">
            Cảm ơn bạn đã đăng ký. Đội ngũ Toán Sao sẽ liên hệ trong vòng <strong>2 giờ</strong> qua số điện thoại bạn cung cấp.
          </p>
          <div className="bg-blue-50 rounded-2xl p-4 text-left space-y-2">
            <p className="text-sm font-bold text-blue-800">Trong khi chờ, bạn có thể:</p>
            <p className="text-sm text-blue-700">• Dùng thử app học toán miễn phí ngay bây giờ</p>
            <p className="text-sm text-blue-700">• Nhắn Zalo 0901 234 567 để tư vấn nhanh hơn</p>
          </div>
          <div className="flex gap-3 mt-6">
            <a href="/hoc-toan" className="flex-1">
              <Button className="w-full bg-blue-600 text-white rounded-xl border-0">Học thử ngay</Button>
            </a>
            <a href="https://zalo.me/0901234567" className="flex-1">
              <Button variant="outline" className="w-full rounded-xl gap-1">
                <MessageCircle className="w-4 h-4" /> Zalo
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 min-h-[70vh] bg-gray-50">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-gray-900 mb-2">Đăng ký học thử miễn phí</h1>
          <p className="text-gray-500">7 ngày trải nghiệm đầy đủ — không cần thẻ tín dụng</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8"
        >
          {/* Role selection */}
          <div className="mb-6">
            <p className="font-bold text-gray-700 mb-3">Bạn là:</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "parent", label: "Phụ huynh", emoji: "👨‍👩‍👧" },
                { value: "teacher", label: "Giáo viên / Nhà trường", emoji: "👩‍🏫" },
              ].map(({ value, label, emoji }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setRole(value as Role)}
                  className={`p-4 rounded-2xl border-2 text-center transition-all ${
                    role === value
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="text-2xl mb-1">{emoji}</div>
                  <div className="text-sm font-semibold">{label}</div>
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Họ và tên <span className="text-red-500">*</span>
              </label>
              <Input
                required
                placeholder="Nguyễn Thị Hương"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-xl h-11"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Số điện thoại (Zalo) <span className="text-red-500">*</span>
              </label>
              <Input
                required
                type="tel"
                placeholder="0901 234 567"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="rounded-xl h-11"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
              <Input
                type="email"
                placeholder="email@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="rounded-xl h-11"
              />
            </div>

            {role === "parent" && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Con đang học lớp mấy?</label>
                <select
                  className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={form.grade}
                  onChange={(e) => setForm({ ...form, grade: e.target.value })}
                >
                  <option value="">-- Chọn lớp --</option>
                  {[1, 2, 3, 4, 5].map((g) => (
                    <option key={g} value={g}>Lớp {g}</option>
                  ))}
                </select>
              </div>
            )}

            {role === "teacher" && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tên trường</label>
                <Input
                  placeholder="Trường Tiểu học Bình Chánh"
                  value={form.school}
                  onChange={(e) => setForm({ ...form, school: e.target.value })}
                  className="rounded-xl h-11"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Ghi chú thêm</label>
              <textarea
                placeholder="Bất kỳ điều gì bạn muốn chúng tôi biết trước khi tư vấn..."
                value={form.note}
                onChange={(e) => setForm({ ...form, note: e.target.value })}
                rows={3}
                className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl border-0 font-bold"
            >
              Đăng ký học thử miễn phí
            </Button>
          </form>

          {/* Zalo CTA */}
          <div className="mt-6 pt-5 border-t border-gray-100 text-center">
            <p className="text-gray-500 text-sm mb-3">Muốn được tư vấn nhanh hơn?</p>
            <a
              href="https://zalo.me/0901234567"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Nhắn Zalo ngay: 0901 234 567
            </a>
            <p className="text-gray-400 text-xs mt-2">Phản hồi trong vòng 30 phút (7:00–21:00)</p>
          </div>
        </motion.div>

        {/* Trust signals */}
        <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm text-gray-500">
          {[
            { icon: "🔒", text: "Bảo mật thông tin" },
            { icon: "✅", text: "Miễn phí 7 ngày" },
            { icon: "📞", text: "Hỗ trợ 24/7" },
          ].map(({ icon, text }) => (
            <div key={text} className="bg-white rounded-xl p-3 border border-gray-100">
              <div className="text-xl mb-1">{icon}</div>
              <div className="text-xs">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
