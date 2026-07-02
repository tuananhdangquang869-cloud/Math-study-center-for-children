import { Link } from "react-router";
import { Star, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              </div>
              <span className="text-white font-black text-lg">Toán Sao</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Trung tâm toán tư duy hàng đầu — giúp mỗi học sinh tiểu học yêu thích và giỏi toán.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <a
                href="https://zalo.me/0901234567"
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-2 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Zalo tư vấn
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-3 text-sm">Về chúng tôi</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Giới thiệu", to: "/gioi-thieu" },
                { label: "Chương trình học", to: "/chuong-trinh-hoc" },
                { label: "Học phí & Gói học", to: "/hoc-phi" },
                { label: "Đăng ký học thử", to: "/dang-ky" },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Audience */}
          <div>
            <h4 className="text-white font-bold mb-3 text-sm">Dành cho</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Phụ huynh", to: "/phu-huynh" },
                { label: "Giáo viên & Nhà trường", to: "/giao-vien" },
                { label: "Học toán ngay", to: "/hoc-toan" },
                { label: "Chính sách bảo mật", to: "/bao-mat" },
                { label: "Case Study", to: "/case-study" },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-3 text-sm">Liên hệ</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" />
                <span>123 Đường Nguyễn Văn Linh, Q.7, TP.HCM</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:0901234567" className="hover:text-white">0901 234 567</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:hello@toansao.vn" className="hover:text-white">hello@toansao.vn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© 2026 Trung tâm Toán Sao. Bảo lưu mọi quyền.</p>
          <div className="flex gap-4">
            <Link to="/bao-mat" className="hover:text-gray-300">Chính sách bảo mật</Link>
            <Link to="/dang-ky" className="hover:text-gray-300">Đăng ký học thử</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
