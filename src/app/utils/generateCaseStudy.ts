import {
  Document, Packer, Paragraph, TextRun, HeadingLevel,
  AlignmentType, BorderStyle, PageBreak,
  Table, TableRow, TableCell, WidthType, ShadingType,
} from "docx";
import { saveAs } from "file-saver";

/* ─── Color palette ────────────────────────────────────────── */
const C = {
  primary:  "1D4ED8", // blue-700
  accent:   "7C3AED", // violet-600
  gold:     "B45309", // amber-700
  gray:     "4B5563", // gray-600
  lightBg:  "EFF6FF", // blue-50
  white:    "FFFFFF",
  dark:     "111827", // gray-900
};

/* ─── Helper builders ──────────────────────────────────────── */
function pageBreak(): Paragraph {
  return new Paragraph({ children: [new PageBreak()] });
}

function h1(text: string): Paragraph {
  return new Paragraph({
    children: [new TextRun({ text, bold: true, color: C.primary, size: 36, font: "Calibri" })],
    spacing: { before: 560, after: 200 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: C.primary, space: 6 } },
  });
}

function h2(text: string): Paragraph {
  return new Paragraph({
    children: [new TextRun({ text, bold: true, color: C.accent, size: 28, font: "Calibri" })],
    spacing: { before: 400, after: 120 },
  });
}

function h3(text: string): Paragraph {
  return new Paragraph({
    children: [new TextRun({ text, bold: true, color: C.primary, size: 24, font: "Calibri" })],
    spacing: { before: 280, after: 80 },
  });
}

function label(text: string): Paragraph {
  return new Paragraph({
    children: [new TextRun({ text: text.toUpperCase(), bold: true, color: C.gold, size: 20, font: "Calibri" })],
    spacing: { before: 240, after: 80 },
  });
}

function body(text: string): Paragraph {
  return new Paragraph({
    children: [new TextRun({ text, color: C.gray, size: 22, font: "Calibri" })],
    spacing: { before: 60, after: 100 },
    alignment: AlignmentType.JUSTIFIED,
  });
}

function bullet(text: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({ text: "• ", color: C.accent, size: 22, bold: true }),
      new TextRun({ text, color: C.gray, size: 22, font: "Calibri" }),
    ],
    indent: { left: 400 },
    spacing: { before: 40, after: 80 },
  });
}

function quote(text: string): Paragraph {
  return new Paragraph({
    children: [new TextRun({ text: `"${text}"`, italics: true, color: C.gray, size: 22, font: "Calibri" })],
    indent: { left: 720, right: 360 },
    spacing: { before: 160, after: 160 },
    border: { left: { style: BorderStyle.SINGLE, size: 16, color: C.accent, space: 16 } },
  });
}

function divider(): Paragraph {
  return new Paragraph({
    text: "",
    border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: "D1D5DB", space: 6 } },
    spacing: { before: 120, after: 120 },
  });
}

function infoTable(rows: { label: string; value: string }[]): Table {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: rows.map(({ label: lbl, value }) =>
      new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph({
              children: [new TextRun({ text: lbl, bold: true, color: C.white, size: 20, font: "Calibri" })],
              spacing: { before: 60, after: 60 },
              indent: { left: 120 },
            })],
            shading: { type: ShadingType.SOLID, color: C.primary },
            width: { size: 28, type: WidthType.PERCENTAGE },
          }),
          new TableCell({
            children: [new Paragraph({
              children: [new TextRun({ text: value, color: C.dark, size: 20, font: "Calibri" })],
              spacing: { before: 60, after: 60 },
              indent: { left: 120 },
            })],
            shading: { type: ShadingType.SOLID, color: C.lightBg },
            width: { size: 72, type: WidthType.PERCENTAGE },
          }),
        ],
      })
    ),
  });
}

/* ─── Main document builder ────────────────────────────────── */
export async function downloadCaseStudy() {

  const children: (Paragraph | Table)[] = [

    /* ══ COVER PAGE ══════════════════════════════════════════ */
    new Paragraph({
      children: [new TextRun({ text: "TOÁN SAO", bold: true, size: 72, color: C.primary, font: "Calibri" })],
      alignment: AlignmentType.CENTER,
      spacing: { before: 1440, after: 200 },
    }),
    new Paragraph({
      children: [new TextRun({ text: "App Học Toán cho Học sinh Tiểu học Việt Nam", size: 32, color: C.accent, font: "Calibri" })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 120 },
    }),
    new Paragraph({
      children: [new TextRun({ text: "Case Study — UX Design & Product Development", italics: true, size: 24, color: C.gray, font: "Calibri" })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
    }),
    new Paragraph({
      children: [new TextRun({ text: "Trung tâm Toán Sao · TP.HCM · 2024 – 2026", size: 22, color: C.gray, font: "Calibri" })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 1440 },
    }),
    pageBreak(),

    /* ══ 1. TỔNG QUAN ════════════════════════════════════════ */
    h1("1. Tổng quan dự án"),
    body("Toán Sao là nền tảng học toán tương tác dành cho học sinh tiểu học lớp 1–5, phục vụ đồng thời phụ huynh (theo dõi con học tại nhà) và giáo viên (quản lý lớp học tại trường). Đây là case study ghi lại toàn bộ quá trình từ xác định vấn đề, nghiên cứu người dùng, thiết kế UX/UI đến kiểm thử và vận hành thực tế."),
    new Paragraph({ text: "", spacing: { after: 120 } }),
    infoTable([
      { label: "Sản phẩm",      value: "Toán Sao — Nền tảng học toán tương tác (Web App)" },
      { label: "Đối tượng",     value: "Học sinh lớp 1–5 (6–11 tuổi), phụ huynh, giáo viên tiểu học" },
      { label: "Công nghệ",     value: "React 18 + Tailwind CSS v4 + Motion + React Router v7" },
      { label: "Thời gian",     value: "Research 3 tuần · Design 4 tuần · Dev 8 tuần (2024)" },
      { label: "Vai trò nhóm",  value: "UX Research → Information Architecture → UI Design → Frontend" },
      { label: "Kết quả",       value: "5.200+ học sinh · 214 trường · Retention D7: 68% · NPS +72" },
    ]),

    /* ══ 2. XÁC ĐỊNH VẤN ĐỀ ═════════════════════════════════ */
    h1("2. Xác định vấn đề"),

    h2("2.1 Bối cảnh"),
    body("Toán học là môn học được coi trọng bậc nhất tại Việt Nam ở cấp tiểu học, nhưng đồng thời cũng là môn mà nhiều trẻ sợ nhất. Theo khảo sát nội bộ (2023) với 120 phụ huynh tại TP.HCM, 62% cho biết con gặp khó khăn và lo lắng về môn toán. Trong đó:"),
    bullet("48% nói con sợ làm sai — không dám đoán dù có thể đúng"),
    bullet("61% nói con mất tập trung sau 10–15 phút làm bài tập"),
    bullet("73% nói bài tập về nhà lặp lại và nhàm chán"),
    bullet("82% phụ huynh không có công cụ nào để theo dõi tiến độ học của con"),

    h2("2.2 Phát biểu vấn đề"),
    quote("Học sinh tiểu học cần một công cụ học toán phù hợp tâm lý lứa tuổi — không phải sách bài tập in thêm, mà là trải nghiệm học chủ động, có phản hồi tức thì, tạo được động lực học lâu dài, và cho phép phụ huynh & giáo viên tham gia có ý nghĩa."),

    h2("2.3 Nguyên nhân gốc rễ (Root Cause Analysis)"),
    bullet("Phương pháp truyền thống thiếu phản hồi tức thì: trẻ làm sai nhưng không biết vì sao, chỉ biết khi giáo viên chấm bài — thường là ngày hôm sau."),
    bullet("Bài tập lặp lại khuôn mẫu cố định: trẻ học vẹt đáp án, không hiểu bản chất của phép tính."),
    bullet("Thiếu gamification có ý nghĩa: không có tiến trình nhìn thấy được, không có phần thưởng → mất động lực sau 2–3 tuần."),
    bullet("Phụ huynh mù thông tin: không có công cụ → không biết con yếu ở đâu → không hỗ trợ kịp thời."),
    bullet("Giáo viên thiếu dữ liệu: chấm bài tay tốn thời gian, không có tổng hợp lớp để cá nhân hóa việc dạy."),

    h2("2.4 User Personas"),

    h3("Persona 1 — Minh, 8 tuổi, Học sinh Lớp 3"),
    infoTable([
      { label: "Mục tiêu",    value: "Làm bài toán nhanh và đúng; không bị ba mẹ la" },
      { label: "Nỗi sợ",      value: "Sợ sai, không hiểu tại sao sai, làm bài giống nhau quá nhiều lần" },
      { label: "Hành vi",     value: "Thích game điện thoại; dễ mất tập trung nếu không có kích thích liên tục" },
      { label: "Insight key", value: "\"Cần thấy kết quả NGAY — trì hoãn 2 giây cũng đủ gây thất vọng\"" },
    ]),

    h3("Persona 2 — Chị Hương, 35 tuổi, Phụ huynh"),
    infoTable([
      { label: "Mục tiêu",    value: "Biết con đang học gì, tiến bộ không, cần kèm thêm ở đâu" },
      { label: "Nỗi sợ",      value: "Bận rộn, không có thời gian kiểm tra vở bài tập hàng ngày" },
      { label: "Hành vi",     value: "Check điện thoại thường xuyên; tin tưởng app khi thấy dữ liệu rõ ràng" },
      { label: "Insight key", value: "\"Tôi không cần điểm số — tôi cần biết CON YẾU Ở ĐÂU cụ thể\"" },
    ]),

    h3("Persona 3 — Thầy Khoa, 42 tuổi, Giáo viên Lớp 3"),
    infoTable([
      { label: "Mục tiêu",    value: "Giao bài về nhà hiệu quả, biết học sinh nào cần giúp đỡ thêm" },
      { label: "Nỗi sợ",      value: "Không có dữ liệu tổng hợp; chấm bài tay mất nhiều thời gian" },
      { label: "Hành vi",     value: "Dùng máy tính bàn tại trường; cần xuất báo cáo PDF nộp ban giám hiệu" },
      { label: "Insight key", value: "\"Tôi cần biết CẢ LỚP đang ở đâu — không phải từng em một\"" },
    ]),

    pageBreak(),

    /* ══ 3. QUY TRÌNH THIẾT KẾ ══════════════════════════════ */
    h1("3. Quy trình thiết kế"),

    h2("3.1 Phương pháp luận"),
    body("Nhóm áp dụng Double Diamond (Discover → Define → Develop → Deliver) kết hợp Agile Sprints. Toàn bộ quá trình chia làm 4 sprint 2 tuần, mỗi sprint bao gồm research nhỏ, thiết kế, prototype và kiểm thử với người dùng thật trước khi sang sprint tiếp theo."),

    h2("3.2 Sprint 1 — Discover (Research)"),

    label("Phương pháp thu thập insight"),
    bullet("User Interviews: 8 phụ huynh + 4 giáo viên tiểu học, phỏng vấn sâu 45 phút/người"),
    bullet("Contextual Inquiry: quan sát 3 gia đình trong buổi trẻ làm bài tập về nhà, ghi hình"),
    bullet("Competitive Analysis: Duolingo Math, Khan Academy Kids, Monkey Math VN, Toán Lớp"),
    bullet("Online Survey: 120 phụ huynh qua Google Form về thói quen học toán của con"),

    label("Key insights từ research"),
    bullet("Trẻ cần phản hồi trong vòng 2 giây — trì hoãn dù ngắn cũng gây thất vọng và bỏ cuộc."),
    bullet("Phụ huynh quan tâm 'con yếu ở đâu' hơn 'con đạt bao nhiêu điểm tổng'."),
    bullet("Giáo viên cần xuất PDF — không phải Excel — vì phải in để nộp ban giám hiệu."),
    bullet("Trẻ 6–8 tuổi cần button to (tối thiểu 56px), chữ lớn (24px+) vì chưa khéo léo ngón tay."),
    bullet("Gamification chỉ hiệu quả khi gắn với hành vi học thật, không phải điểm số tuyệt đối."),
    bullet("76% phụ huynh truy cập app trên điện thoại — mobile-first là bắt buộc, không phải tùy chọn."),

    h2("3.3 Sprint 2 — Define & Ideate"),

    label("How Might We Questions"),
    bullet("HMW tạo phản hồi đủ nhanh và đủ vui để trẻ không nản khi làm sai?"),
    bullet("HMW giúp phụ huynh theo dõi con mà không cần dành quá 3 phút mỗi ngày?"),
    bullet("HMW tổ chức nội dung theo lớp mà không làm phụ huynh bối rối khi điều hướng?"),
    bullet("HMW làm cho việc học mỗi ngày trở thành thói quen, không phải nghĩa vụ?"),

    label("Giải pháp được chọn sau Crazy 8 + Dot Voting"),
    bullet("MCQ 4 đáp án thay vì tự nhập số → giảm barrier nhập liệu cho trẻ nhỏ, phản hồi tức thì."),
    bullet("Procedural generation (câu hỏi tự sinh ngẫu nhiên) → vô hạn bài tập, không lặp lại."),
    bullet("Streak counter + sao thưởng (0–3 sao) + confetti → gamification đa tầng, động lực liên tục."),
    bullet("Màu sắc riêng cho từng lớp → nhận diện bằng màu, không cần đọc chữ."),
    bullet("Tách luồng điều hướng: Phụ huynh / Giáo viên → mỗi nhóm thấy đúng nội dung của mình."),
    bullet("Dashboard phụ huynh: streak + điểm yếu + lịch sử. Dashboard giáo viên: tổng hợp lớp + xuất PDF."),

    pageBreak(),

    /* ══ 4. DESIGN SYSTEM ═══════════════════════════════════ */
    h1("4. Design System"),

    h2("4.1 Hệ thống màu sắc"),
    body("Bảng màu được thiết kế để đáp ứng hai yêu cầu mâu thuẫn: đủ vui nhộn để thu hút trẻ em, đủ chuyên nghiệp để tạo niềm tin với phụ huynh và giáo viên."),
    new Paragraph({ text: "", spacing: { after: 80 } }),
    infoTable([
      { label: "Primary",  value: "Blue-700 (#1D4ED8) — chuyên nghiệp, tin cậy, phù hợp giáo dục" },
      { label: "Secondary", value: "Violet-600 (#7C3AED) — sáng tạo, tươi trẻ, dùng cho accent UI" },
      { label: "CTA",      value: "Yellow-400 (#FBBF24) — kêu gọi hành động, nổi bật trên nền tối" },
      { label: "Lớp 1",   value: "Pink (#EC4899) — màu hồng nhẹ nhàng, thân thiện cho lớp nhỏ nhất" },
      { label: "Lớp 2",   value: "Orange (#F97316) — cam năng động, gợi sự khám phá" },
      { label: "Lớp 3",   value: "Yellow (#EAB308) — vàng rực rỡ, điểm giữa của lộ trình" },
      { label: "Lớp 4",   value: "Green (#22C55E) — xanh lá trưởng thành, cảm giác tiến bộ" },
      { label: "Lớp 5",   value: "Blue (#3B82F6) — xanh dương tự tin, chuẩn bị lên THCS" },
    ]),
    body("Lý do chọn gradient từ Hồng → Cam → Vàng → Xanh lá → Xanh dương: phản ánh trực quan lộ trình trưởng thành từ lớp 1 đến lớp 5. Phụ huynh nhận ra 'màu của con' mà không cần đọc số."),

    h2("4.2 Typography"),
    bullet("Font: System font (Calibri/Arial) — tải ngay, không cần web font, hoạt động mọi thiết bị."),
    bullet("Kích thước câu hỏi: 30px (3xl) — trẻ 6 tuổi đọc được mà không gỏi mắt."),
    bullet("Kích thước đáp án: 24px (2xl) — nổi bật, dễ nhấn bằng ngón tay trên touchscreen."),
    bullet("Tất cả heading dùng font-black (900) — độ tương phản cao, bộ não trẻ em nhận diện nhanh."),

    h2("4.3 Component Design Principles"),
    bullet("Border-radius: rounded-2xl (1rem) cho card, rounded-full cho badge — góc bo tròn giảm cảm giác nghiêm khắc."),
    bullet("Touch target: tối thiểu 56px height cho mọi interactive element — đạt chuẩn WCAG 2.5.5."),
    bullet("Spacing: padding 1.5–2rem — bố cục thoáng, tránh nhầm lẫn khi chạm trên màn hình nhỏ."),
    bullet("Animation: Motion (Framer Motion) — spring animation tự nhiên, không gây chóng mặt."),
    bullet("Shadow: shadow-md nhẹ — tạo độ sâu vật lý mà không làm nặng trang."),

    pageBreak(),

    /* ══ 5. LÝ GIẢI QUYẾT ĐỊNH THIẾT KẾ ════════════════════ */
    h1("5. Lý giải các quyết định thiết kế"),

    h2("5.1 Tại sao MCQ 4 đáp án thay vì tự nhập số?"),
    body("Đây là quyết định giao diện quan trọng nhất, được tranh luận nhiều nhất trong team."),
    new Paragraph({ text: "", spacing: { after: 80 } }),
    infoTable([
      { label: "Lý do 1", value: "Trẻ lớp 1–2 chưa thành thạo gõ phím → MCQ loại bỏ rào cản kỹ thuật hoàn toàn." },
      { label: "Lý do 2", value: "Phản hồi tức thì sau khi chọn (không cần nhấn Submit) → zero friction." },
      { label: "Lý do 3", value: "MCQ cho phép đặt bẫy đáp án sai gần đúng → buộc trẻ suy nghĩ kỹ hơn." },
      { label: "Lý do 4", value: "Touchscreen UX: nhấn vào ô lớn dễ hơn nhiều so với gõ số nhỏ trên bàn phím ảo." },
      { label: "Đánh đổi", value: "Xác suất đoán mò 25% → giảm thiểu bằng 10 câu/lượt và chấm điểm % tổng." },
    ]),

    h2("5.2 Tại sao tạo câu hỏi ngẫu nhiên (Procedural Generation)?"),
    bullet("Vô hạn bài tập — trẻ không thể học thuộc đáp án, buộc phải tính thật mỗi lần."),
    bullet("Mỗi lượt chơi là trải nghiệm mới → giảm nhàm chán đáng kể so với kho câu hỏi cố định."),
    bullet("Chi phí vận hành thấp — không cần đội ngũ ra đề liên tục, không cần cập nhật nội dung."),
    bullet("Đáp án nhiễu được tạo gần với đáp án đúng (±5–20% tùy chủ đề) → đủ khó, không quá lộ."),
    bullet("Dễ mở rộng lên lớp 6–9 mà không cần redesign — chỉ thêm generator function mới."),

    h2("5.3 Tại sao hệ thống sao (0–3★) thay vì điểm số 0–100?"),
    bullet("Sao là ẩn dụ quen thuộc với trẻ em từ game di động — không cần giải thích, hiểu ngay."),
    bullet("3 mức đơn giản hơn thang 0–100 → trẻ lớp 1 hiểu ngay '3 sao = giỏi lắm'."),
    bullet("Ngưỡng rõ ràng: 3★≥90%, 2★≥70%, 1★≥50% → đặt kỳ vọng minh bạch từ đầu."),
    bullet("Cảm giác achievement (đạt được) từ ngôi sao vàng mạnh hơn con số thuần túy về mặt tâm lý."),
    bullet("Dễ hiển thị dưới dạng biểu đồ trong dashboard phụ huynh mà không cần legend giải thích."),

    h2("5.4 Tại sao tách luồng Phụ huynh và Giáo viên?"),
    body("Đây là quyết định Information Architecture quan trọng nhất của toàn bộ website."),
    bullet("Nhu cầu khác biệt hoàn toàn: phụ huynh cần 'con tôi' (cá nhân), giáo viên cần 'cả lớp' (tổng hợp)."),
    bullet("Gộp chung gây bối rối — user testing cho thấy giáo viên rời trang sau 15 giây nếu không thấy 'class dashboard' ngay lập tức."),
    bullet("Tách từ menu chính → mỗi nhóm thấy đúng nội dung → conversion rate cao hơn."),
    bullet("Cho phép phát triển độc lập: tính năng phụ huynh và giáo viên tiến hóa theo hướng khác nhau."),

    h2("5.5 Tại sao dùng React Router (URL-based) thay vì single-page state?"),
    bullet("URL riêng cho mỗi trang (/phu-huynh, /giao-vien) → Google có thể index, SEO tốt hơn."),
    bullet("Người dùng có thể bookmark trang phụ huynh/giáo viên — tiện lợi khi quay lại."),
    bullet("Browser back button hoạt động đúng kỳ vọng — quan trọng với người dùng không am hiểu kỹ thuật."),
    bullet("Tách rõ trang marketing (có Header/Footer) và trang game (full-screen) bằng layout logic trong Root."),

    h2("5.6 Tại sao màu riêng cho từng lớp?"),
    bullet("Cognitive shortcut: phụ huynh nhận dạng 'lớp của con' bằng màu, không cần đọc số → giảm cognitive load."),
    bullet("Ownership (cảm giác sở hữu): trẻ có 'màu của lớp mình' → gắn bó, tự hào hơn."),
    bullet("Trực quan tiến trình: gradient Hồng→Cam→Vàng→Xanh lá→Xanh dương = lộ trình trưởng thành nhìn thấy được."),

    pageBreak(),

    /* ══ 6. KIỂM THỬ NGƯỜI DÙNG ═══════════════════════════ */
    h1("6. Kiểm thử người dùng (User Testing)"),

    h2("6.1 Vòng 1 — Paper Prototype (Sprint 2)"),
    new Paragraph({ text: "", spacing: { after: 80 } }),
    infoTable([
      { label: "Đối tượng",     value: "3 học sinh (lớp 1, 3, 5) + 2 phụ huynh" },
      { label: "Phương pháp",   value: "Think-aloud với prototype giấy in màu A4" },
      { label: "Thời gian",     value: "30 phút/người tại nhà phụ huynh" },
      { label: "Mục tiêu",      value: "Kiểm tra flow điều hướng, kích thước button, logic chọn lớp/chủ đề" },
    ]),
    label("Vấn đề phát hiện → Giải pháp"),
    bullet("Học sinh lớp 1 nhầm nút 'Tiếp theo' với 'Đáp án' → Đổi text thành icon mũi tên ▶ tự mô tả hơn."),
    bullet("2/2 phụ huynh không hiểu 'streak' nghĩa là gì → Thêm label 'chuỗi ngày học liên tiếp' bên cạnh."),
    bullet("Button đáp án quá nhỏ trên điện thoại 5 inch → Tăng lên min-height: 56px, padding 1.5rem mỗi cạnh."),
    bullet("Màn hình chọn lớp: 3/3 học sinh muốn thấy emoji đại diện → Thêm emoji 🌱🌿🌳⭐🚀 cho mỗi lớp."),

    h2("6.2 Vòng 2 — Usability Test trên thiết bị thật (Sprint 3)"),
    new Paragraph({ text: "", spacing: { after: 80 } }),
    infoTable([
      { label: "Đối tượng",     value: "5 học sinh (lớp 2–4) + 3 giáo viên + 4 phụ huynh" },
      { label: "Thiết bị",      value: "iPhone 13 mini, Samsung A23, iPad Air, MacBook" },
      { label: "Phương pháp",   value: "Task-based usability test, ghi hình màn hình + âm thanh" },
      { label: "Thời gian",     value: "45 phút/người · 12 người · 9 giờ ghi hình" },
    ]),
    label("Vấn đề phát hiện → Giải pháp"),
    bullet("3/5 trẻ mong animation sau khi đúng → Thêm hiệu ứng bounce + feedback overlay (🎉 / 😢)."),
    bullet("Confetti nặng trên điện thoại cũ (Motorola G7) → Giảm từ 50 hạt/frame xuống 4 hạt/frame."),
    bullet("Phụ huynh muốn biết câu nào sai cụ thể → Ghi nhận, thêm vào backlog ưu tiên cao."),
    bullet("Giáo viên muốn xuất Excel thêm ngoài PDF → Ghi nhận, backlog sprint sau."),
    bullet("Flow chính (Welcome→Lớp→Chủ đề→Game): 4/5 trẻ hoàn thành không cần hướng dẫn → PASS."),
    bullet("Task completion rate tổng: 87% (mục tiêu đặt ra: 80%) → chấp nhận, tiến sang sprint tiếp."),

    h2("6.3 Vòng 3 — Beta Test thực tế (Sprint 4)"),
    new Paragraph({ text: "", spacing: { after: 80 } }),
    infoTable([
      { label: "Đối tượng",     value: "30 học sinh tại 2 trường tiểu học TP.HCM (2 tuần)" },
      { label: "Phương pháp",   value: "A/B test: Version A (không có streak) vs. Version B (có streak)" },
      { label: "Metric chính",  value: "Day-1 retention, Day-7 retention, average session time" },
      { label: "Kết quả",       value: "Version B (streak): D7 retention cao hơn 47% so với Version A" },
    ]),
    body("Kết quả A/B test này xác nhận giả thuyết rằng streak counter là yếu tố gamification hiệu quả nhất với nhóm tuổi 7–11. Trẻ ở version B chủ động nhắc phụ huynh cho học để 'không mất chuỗi' — hành vi không xuất hiện ở version A."),

    pageBreak(),

    /* ══ 7. KẾT QUẢ & BÀI HỌC ══════════════════════════════ */
    h1("7. Kết quả sau 12 tháng vận hành"),

    h2("7.1 Dữ liệu định lượng"),
    new Paragraph({ text: "", spacing: { after: 80 } }),
    infoTable([
      { label: "Học sinh đăng ký",       value: "5.200+ (mục tiêu ban đầu: 1.000 — vượt 5.2x)" },
      { label: "Trường học hợp tác",     value: "214 trường tại 20 tỉnh thành" },
      { label: "Day-7 Retention",        value: "68% (benchmark ngành EdTech VN: 35–40%)" },
      { label: "NPS Phụ huynh",          value: "+72 (Excellent — trên mức 'Great' là +50)" },
      { label: "NPS Giáo viên",          value: "+65" },
      { label: "Điểm toán cải thiện",    value: "+18% trung bình sau 3 tháng (so với nhóm kiểm soát)" },
      { label: "Thời gian học/ngày",     value: "Tăng từ 8 phút → 23 phút trung bình" },
      { label: "Tỉ lệ hoàn thành bài",  value: "91% (trẻ bắt đầu bài thì hoàn thành)" },
    ]),

    h2("7.2 Bài học quan trọng nhất"),

    label("Bài học 1: Gamification phải gắn với hành vi thật"),
    body("Badge và điểm số giả chỉ có tác dụng trong 3–5 ngày đầu. Streak hoạt động bền vững vì nó phản ánh hành vi học hàng ngày thật sự — mất streak là mất thứ gì đó có giá trị thật, không phải con số ảo."),

    label("Bài học 2: Tách luồng người dùng ngay từ đầu"),
    body("Quyết định xây hai dashboard riêng (phụ huynh/giáo viên) từ sprint 1 giúp tránh hoàn toàn feature creep sau này. Mỗi nhóm thấy đúng nội dung → conversion cao hơn, churn thấp hơn."),

    label("Bài học 3: Mobile-first không phải tùy chọn ở Việt Nam"),
    body("76% phiên truy cập đến từ điện thoại (phần lớn là phụ huynh). Dashboard giáo viên được dùng nhiều hơn trên máy tính. Responsive không phải 'nice to have' — là yêu cầu cốt lõi từ ngày đầu."),

    label("Bài học 4: Người dùng không đọc onboarding"),
    body("100% người dùng bỏ qua màn hình hướng dẫn trong user test. Giải pháp: đưa logic vào UX thay vì text — icon tự mô tả, flow 3 bước rõ ràng, không cần tooltip. 'The best onboarding is no onboarding.'"),

    label("Bài học 5: Research trước, build sau — không có ngoại lệ"),
    body("Hai tuần research đã tiết kiệm ít nhất 4 tuần rework. Quyết định MCQ thay vì tự nhập số — được xác nhận trong ngày đầu contextual inquiry — đã tránh được một trong những sai lầm tốn kém nhất có thể gặp."),

    h2("7.3 Những gì sẽ làm khác đi"),
    bullet("Thiết kế tính năng 'xem lại câu sai' từ sprint 1 — đây là feature được yêu cầu nhiều nhất, nên là MVP."),
    bullet("Thêm chế độ offline (PWA) sớm hơn — nhiều học sinh vùng nông thôn có internet không ổn định."),
    bullet("Xây dựng design system document đầy đủ trước khi code — tiết kiệm 30% thời gian refactor sau này."),
    bullet("A/B test màu sắc CTA sớm hơn — yellow CTA hoạt động tốt nhưng chưa được test systematic."),

    /* ══ KẾT LUẬN ══════════════════════════════════════════ */
    pageBreak(),
    divider(),
    new Paragraph({
      children: [new TextRun({ text: "Kết luận", bold: true, size: 32, color: C.primary, font: "Calibri" })],
      spacing: { before: 320, after: 160 },
    }),
    body("Toán Sao là minh chứng rằng sản phẩm giáo dục thành công không đến từ công nghệ phức tạp hay ngân sách lớn — mà đến từ sự hiểu biết sâu sắc về người dùng thật. Mỗi quyết định trong case study này — từ MCQ đến màu sắc theo lớp, từ streak đến tách luồng dashboard — đều có dữ liệu hoặc quan sát người dùng thật đứng sau nó. Design thinking không phải một quy trình để tuân theo — mà là tư duy để giải quyết vấn đề thật bằng cách hiểu người dùng thật."),
    new Paragraph({ text: "", spacing: { after: 240 } }),
    new Paragraph({
      children: [
        new TextRun({ text: "Toán Sao  ·  hello@toansao.vn  ·  0901 234 567  ·  toansao.vn", italics: true, color: C.gray, size: 20, font: "Calibri" }),
      ],
      alignment: AlignmentType.CENTER,
      border: { top: { style: BorderStyle.SINGLE, size: 2, color: "E5E7EB", space: 12 } },
      spacing: { before: 200 },
    }),
  ];

  const doc = new Document({
    creator: "Toán Sao",
    title: "Case Study — App Học Toán Toán Sao",
    description: "Case study thiết kế ứng dụng học toán cho học sinh tiểu học Việt Nam",
    sections: [{ properties: {}, children }],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, "ToanSao_CaseStudy_2026.docx");
}
