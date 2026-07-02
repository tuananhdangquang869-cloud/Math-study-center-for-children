import { useState } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Star, BookOpen } from "lucide-react";
import { Button } from "../ui/button";

const NAV_LINKS = [
  { label: "Trang chủ", to: "/" },
  { label: "Giới thiệu", to: "/gioi-thieu" },
  { label: "Chương trình", to: "/chuong-trinh-hoc" },
  { label: "Học phí", to: "/hoc-phi" },
];

const AUDIENCE_LINKS = [
  { label: "Dành cho phụ huynh", to: "/phu-huynh", color: "text-blue-600" },
  { label: "Dành cho giáo viên", to: "/giao-vien", color: "text-purple-600" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow">
            <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
          </div>
          <div><span className="text-xl font-black text-gray-900">Toán Sao </span><span className="hidden sm:inline text-xs text-gray-400 block -mt-1">Trung tâm toán tư duy</span></div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive(to)
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="w-px h-5 bg-gray-200 mx-1" />
          {AUDIENCE_LINKS.map(({ label, to, color }) => (
            <Link
              key={to}
              to={to}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${color} hover:bg-gray-50 ${
                isActive(to) ? "bg-blue-50" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-2">
          <Link to="/hoc-toan" className="hidden sm:block">
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl gap-1 border-0 hover:opacity-90">
              <BookOpen className="w-4 h-4" />
              Học thử miễn phí
            </Button>
          </Link>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-gray-100 bg-white"
          >
            <nav className="flex flex-col p-4 gap-1">
              {NAV_LINKS.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium ${
                    isActive(to) ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <div className="h-px bg-gray-100 my-1" />
              {AUDIENCE_LINKS.map(({ label, to, color }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold ${color} hover:bg-gray-50`}
                >
                  {label}
                </Link>
              ))}
              <div className="h-px bg-gray-100 my-1" />
              <Link to="/hoc-toan" onClick={() => setOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl border-0">
                  Học thử miễn phí
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
