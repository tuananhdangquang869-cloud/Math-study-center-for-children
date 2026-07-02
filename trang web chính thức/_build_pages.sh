#!/bin/bash
set -e
DIR="$(cd "$(dirname "$0")" && pwd)"

# ─── Shared nav + footer snippets ───────────────────────────
NAV='<nav class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
  <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
    <a href="index.html" class="flex items-center gap-2" style="text-decoration:none">
      <div class="w-9 h-9 rounded-xl flex items-center justify-center shadow" style="background:linear-gradient(135deg,#2563eb,#7c3aed)"><span style="color:#fbbf24;font-size:1.1rem">★</span></div>
      <div><div class="text-xl font-black text-gray-900">Toán Sao</div><div class="hidden sm:block text-xs text-gray-400">Trung tâm toán tư duy</div></div>
    </a>
    <div class="hidden md:flex items-center gap-1">
      <a href="index.html" class="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50" style="text-decoration:none">Trang chủ</a>
      <a href="gioi-thieu.html" class="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50" style="text-decoration:none">Giới thiệu</a>
      <a href="chuong-trinh-hoc.html" class="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50" style="text-decoration:none">Chương trình</a>
      <a href="hoc-phi.html" class="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50" style="text-decoration:none">Học phí</a>
      <div class="w-px h-5 bg-gray-200 mx-1"></div>
      <a href="phu-huynh.html" class="px-3 py-2 rounded-lg text-sm font-semibold text-blue-600 hover:bg-gray-50" style="text-decoration:none">Dành cho phụ huynh</a>
      <a href="giao-vien.html" class="px-3 py-2 rounded-lg text-sm font-semibold text-purple-600 hover:bg-gray-50" style="text-decoration:none">Dành cho giáo viên</a>
    </div>
    <a href="hoc-toan.html" class="hidden sm:inline-flex items-center gap-1 px-4 py-2 text-sm font-semibold text-white rounded-xl" style="background:linear-gradient(135deg,#2563eb,#7c3aed);text-decoration:none">📚 Học thử miễn phí</a>
    <button onclick="document.getElementById('"'"'mm'"'"').classList.toggle('"'"'hidden'"'"')" class="md:hidden p-2 rounded-lg hover:bg-gray-100 text-xl">☰</button>
  </div>
  <div id="mm" class="hidden md:hidden border-t border-gray-100 bg-white p-4 space-y-1">
    <a href="index.html" class="block px-4 py-3 rounded-xl text-gray-700" style="text-decoration:none">Trang chủ</a>
    <a href="gioi-thieu.html" class="block px-4 py-3 rounded-xl text-gray-700" style="text-decoration:none">Giới thiệu</a>
    <a href="chuong-trinh-hoc.html" class="block px-4 py-3 rounded-xl text-gray-700" style="text-decoration:none">Chương trình học</a>
    <a href="hoc-phi.html" class="block px-4 py-3 rounded-xl text-gray-700" style="text-decoration:none">Học phí</a>
    <a href="phu-huynh.html" class="block px-4 py-3 rounded-xl text-blue-600 font-semibold" style="text-decoration:none">Dành cho phụ huynh</a>
    <a href="giao-vien.html" class="block px-4 py-3 rounded-xl text-purple-600 font-semibold" style="text-decoration:none">Dành cho giáo viên</a>
    <a href="hoc-toan.html" class="block text-center py-3 rounded-xl text-white font-bold" style="background:linear-gradient(135deg,#2563eb,#7c3aed);text-decoration:none">Học thử miễn phí</a>
  </div>
</nav>'

FOOTER='<footer class="pt-12 pb-6" style="background:#111827;color:#d1d5db">
  <div class="max-w-6xl mx-auto px-4">
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
      <div>
        <div class="flex items-center gap-2 mb-3"><div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background:linear-gradient(135deg,#3b82f6,#7c3aed)"><span style="color:#fbbf24">★</span></div><span style="color:#fff;font-weight:900;font-size:1.1rem">Toán Sao</span></div>
        <p class="text-sm" style="color:#9ca3af">Trung tâm toán tư duy — giúp mỗi học sinh tiểu học yêu thích và giỏi toán.</p>
        <a href="https://zalo.me/0901234567" class="inline-flex items-center gap-2 mt-4 text-white text-sm px-3 py-2 rounded-lg" style="background:#3b82f6;text-decoration:none">💬 Zalo tư vấn</a>
      </div>
      <div>
        <h4 class="font-bold mb-3 text-sm" style="color:#fff">Về chúng tôi</h4>
        <ul class="space-y-2 text-sm"><li><a href="gioi-thieu.html" style="color:#d1d5db;text-decoration:none">Giới thiệu</a></li><li><a href="chuong-trinh-hoc.html" style="color:#d1d5db;text-decoration:none">Chương trình học</a></li><li><a href="hoc-phi.html" style="color:#d1d5db;text-decoration:none">Học phí</a></li><li><a href="dang-ky.html" style="color:#d1d5db;text-decoration:none">Đăng ký học thử</a></li></ul>
      </div>
      <div>
        <h4 class="font-bold mb-3 text-sm" style="color:#fff">Dành cho</h4>
        <ul class="space-y-2 text-sm"><li><a href="phu-huynh.html" style="color:#d1d5db;text-decoration:none">Phụ huynh</a></li><li><a href="giao-vien.html" style="color:#d1d5db;text-decoration:none">Giáo viên &amp; Nhà trường</a></li><li><a href="hoc-toan.html" style="color:#d1d5db;text-decoration:none">Học toán ngay</a></li><li><a href="bao-mat.html" style="color:#d1d5db;text-decoration:none">Chính sách bảo mật</a></li></ul>
      </div>
      <div>
        <h4 class="font-bold mb-3 text-sm" style="color:#fff">Liên hệ</h4>
        <ul class="space-y-3 text-sm"><li>📍 123 Nguyễn Văn Linh, Q.7, TP.HCM</li><li>📞 <a href="tel:0901234567" style="color:#d1d5db;text-decoration:none">0901 234 567</a></li><li>✉️ <a href="mailto:hello@toansao.vn" style="color:#d1d5db;text-decoration:none">hello@toansao.vn</a></li></ul>
      </div>
    </div>
    <div class="border-t pt-5 flex flex-col sm:flex-row justify-between gap-2 text-xs" style="border-color:#374151;color:#6b7280">
      <p>© 2026 Trung tâm Toán Sao. Bảo lưu mọi quyền.</p>
      <div class="flex gap-4"><a href="bao-mat.html" style="color:#6b7280;text-decoration:none">Chính sách bảo mật</a><a href="case-study.html" style="color:#6b7280;text-decoration:none">Case Study</a></div>
    </div>
  </div>
</footer>'

HEAD='<!DOCTYPE html><html lang="vi"><head>
<meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<script src="https://cdn.tailwindcss.com"></script>
<style>
body{font-family:system-ui,-apple-system,sans-serif}
.g1{background:linear-gradient(135deg,#ec4899,#f43f5e)}.g2{background:linear-gradient(135deg,#f97316,#f59e0b)}
.g3{background:linear-gradient(135deg,#eab308,#84cc16)}.g4{background:linear-gradient(135deg,#22c55e,#14b8a6)}
.g5{background:linear-gradient(135deg,#3b82f6,#6366f1)}
.btn-y{background:#fbbf24;color:#78350f;font-weight:800;border-radius:.75rem;padding:.7rem 1.4rem;display:inline-flex;align-items:center;gap:.4rem;text-decoration:none;transition:background .2s}
.btn-y:hover{background:#f59e0b}
.btn-w{border:2px solid rgba(255,255,255,.4);color:#fff;font-weight:600;border-radius:.75rem;padding:.7rem 1.4rem;display:inline-flex;align-items:center;gap:.4rem;text-decoration:none;transition:background .2s}
.btn-w:hover{background:rgba(255,255,255,.1)}
</style>'

echo "Snippets ready. Building pages..."

# ─── gioi-thieu.html ─────────────────────────────────────────
cat > "$DIR/gioi-thieu.html" << HTML
${HEAD}
<title>Giới thiệu — Toán Sao</title></head><body class="bg-white">
${NAV}
<section class="py-14 text-white text-center" style="background:linear-gradient(135deg,#1d4ed8,#7c3aed)">
  <p class="text-sm mb-2" style="color:#a5b4fc">VỀ CHÚNG TÔI</p>
  <h1 class="text-4xl font-black mb-4">Nơi mỗi em đều tỏa sáng</h1>
  <p class="max-w-2xl mx-auto text-lg" style="color:#c4b5fd">Toán Sao ra đời năm 2020 với sứ mệnh đơn giản: giúp mọi học sinh tiểu học yêu thích và giỏi toán.</p>
</section>
<section class="py-16 bg-white">
  <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
    <div>
      <h2 class="text-2xl font-black text-gray-900 mb-4">Câu chuyện của chúng tôi</h2>
      <div class="space-y-4 text-gray-600 leading-relaxed">
        <p>Toán Sao bắt đầu từ một lớp dạy thêm nhỏ tại quận 7, TP.HCM năm 2020. Nhận thấy nhiều trẻ sợ toán không phải vì thiếu năng lực mà vì phương pháp học không phù hợp, chúng tôi quyết tâm xây dựng một nền tảng học tập khác biệt.</p>
        <p>Sau 4 năm nghiên cứu và phát triển, Toán Sao đã trở thành nền tảng học toán phục vụ hơn <strong>5.000 học sinh</strong> tại 200+ trường tiểu học trên cả nước.</p>
        <p>Chúng tôi tin rằng công nghệ, khi được dùng đúng cách, có thể làm cho việc học toán trở nên vui vẻ và hiệu quả hơn bao giờ hết.</p>
      </div>
    </div>
    <div class="rounded-3xl overflow-hidden shadow-xl">
      <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" alt="Đội ngũ Toán Sao" style="width:100%;height:300px;object-fit:cover">
    </div>
  </div>
</section>
<section class="py-16 bg-gray-50">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-2xl font-black text-gray-900 text-center mb-10">Giá trị cốt lõi</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"><div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 text-2xl">🎯</div><h3 class="font-black text-gray-900 mb-2">Hiệu quả đo được</h3><p class="text-gray-500 text-sm">Mọi hoạt động học đều được ghi nhận và phân tích để đưa ra phản hồi có giá trị.</p></div>
      <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"><div class="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-4 text-2xl">👁️</div><h3 class="font-black text-gray-900 mb-2">Minh bạch với phụ huynh</h3><p class="text-gray-500 text-sm">Phụ huynh luôn nắm rõ con đang học gì, tiến độ thế nào, cần hỗ trợ ở đâu.</p></div>
      <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"><div class="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center mb-4 text-2xl">🏆</div><h3 class="font-black text-gray-900 mb-2">Chất lượng giáo viên</h3><p class="text-gray-500 text-sm">100% giáo viên có bằng sư phạm tiểu học và được đào tạo phương pháp tư duy.</p></div>
      <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"><div class="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4 text-2xl">🤝</div><h3 class="font-black text-gray-900 mb-2">Cộng đồng học tập</h3><p class="text-gray-500 text-sm">Kết nối phụ huynh, giáo viên và học sinh trong một hệ sinh thái giáo dục.</p></div>
    </div>
  </div>
</section>
<section class="py-16 bg-white">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-2xl font-black text-gray-900 text-center mb-10">Đội ngũ của chúng tôi</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <div class="text-center p-6 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors"><div class="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4" style="background:linear-gradient(135deg,#dbeafe,#ede9fe)">👩‍🎓</div><h3 class="font-black text-gray-900 text-sm">ThS. Nguyễn Thị Lan</h3><p class="text-blue-600 text-xs font-medium mt-1 mb-2">Giám đốc học thuật</p><p class="text-gray-500 text-xs">15 năm kinh nghiệm giảng dạy tiểu học, chuyên gia phát triển chương trình.</p></div>
      <div class="text-center p-6 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors"><div class="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4" style="background:linear-gradient(135deg,#dbeafe,#ede9fe)">👨‍💻</div><h3 class="font-black text-gray-900 text-sm">ThS. Trần Văn Hùng</h3><p class="text-blue-600 text-xs font-medium mt-1 mb-2">Trưởng phòng Công nghệ</p><p class="text-gray-500 text-xs">Kỹ sư phần mềm với niềm đam mê EdTech, thiết kế hệ thống học tập thích nghi.</p></div>
      <div class="text-center p-6 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors"><div class="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4" style="background:linear-gradient(135deg,#dbeafe,#ede9fe)">👩‍🏫</div><h3 class="font-black text-gray-900 text-sm">Cô Phạm Minh Châu</h3><p class="text-blue-600 text-xs font-medium mt-1 mb-2">Chuyên gia Tâm lý trẻ em</p><p class="text-gray-500 text-xs">Tư vấn học đường 10 năm, đảm bảo phương pháp phù hợp tâm lý lứa tuổi.</p></div>
      <div class="text-center p-6 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors"><div class="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4" style="background:linear-gradient(135deg,#dbeafe,#ede9fe)">👨‍🏫</div><h3 class="font-black text-gray-900 text-sm">Thầy Lê Quang Trung</h3><p class="text-blue-600 text-xs font-medium mt-1 mb-2">Giáo viên cốt cán</p><p class="text-gray-500 text-xs">Giáo viên xuất sắc cấp thành phố, thiết kế kho 10.000+ câu hỏi.</p></div>
    </div>
  </div>
</section>
<section class="py-12 text-white text-center" style="background:linear-gradient(135deg,#1d4ed8,#7c3aed)">
  <div class="max-w-xl mx-auto px-4">
    <h2 class="text-2xl font-black mb-3">Hãy cùng xây dựng tương lai của con</h2>
    <p class="mb-6" style="color:#c4b5fd">Dùng thử miễn phí 7 ngày — không cần thẻ tín dụng.</p>
    <a href="dang-ky.html" class="btn-y">Đăng ký học thử miễn phí</a>
  </div>
</section>
${FOOTER}
</body></html>
HTML

echo "gioi-thieu.html done"
