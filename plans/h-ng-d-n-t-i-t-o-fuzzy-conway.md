# Kế hoạch: App Học Toán Cho Trẻ Em Cấp 1 (Lớp 1–5)

## Context

Người dùng muốn xây dựng một ứng dụng học toán tương tác, vui nhộn, dành cho học sinh tiểu học Việt Nam (lớp 1–5). App cần có giao diện thân thiện với trẻ em, nội dung bằng tiếng Việt, và cơ chế game hóa để tạo động lực học tập.

## Phạm vi tính năng

### Màn hình chính
- Màn hình chào (WelcomeScreen): logo, tên app, nút bắt đầu
- Chọn lớp (GradeSelector): lớp 1 → 5, mỗi lớp có màu và icon riêng
- Chọn chủ đề (TopicSelector): danh sách chủ đề phù hợp theo lớp
- Màn hình luyện tập (MathGame): hiển thị câu hỏi, nhập đáp án
- Màn hình kết quả (ResultScreen): điểm sao, nút thử lại / về menu

### Nội dung theo lớp (tiếng Việt)
| Lớp | Chủ đề |
|-----|--------|
| 1 | Cộng trong phạm vi 10, Trừ trong phạm vi 10, Đếm số |
| 2 | Cộng trừ trong 100, Bảng nhân 2–5, Đọc số |
| 3 | Bốn phép tính trong 1000, Bảng nhân 6–9, Phân số đơn giản |
| 4 | Nhân chia số lớn, Phân số, Chu vi hình học |
| 5 | Số thập phân, Phần trăm, Diện tích hình chữ nhật |

### Cơ chế game
- 10 câu hỏi mỗi lượt, dạng trắc nghiệm 4 lựa chọn
- Phản hồi ngay lập tức (đúng = xanh + âm thanh / sai = đỏ + giải thích)
- Thanh tiến trình câu hỏi (1/10 → 10/10)
- Chấm điểm sao: 3 sao (≥90%), 2 sao (≥70%), 1 sao (≥50%), 0 sao (<50%)
- Hiệu ứng pháo hoa (canvas-confetti) khi hoàn thành
- Hiển thị chuỗi streak liên tiếp trả lời đúng

## Kiến trúc Components

```
src/app/
├── App.tsx                          ← Router state machine (màn hình hiện tại)
└── components/
    ├── math/
    │   ├── WelcomeScreen.tsx        ← Màn hình chào
    │   ├── GradeSelector.tsx        ← Chọn lớp học
    │   ├── TopicSelector.tsx        ← Chọn chủ đề
    │   ├── MathGame.tsx             ← Màn hình luyện tập (state machine)
    │   ├── QuestionCard.tsx         ← Hiển thị câu hỏi + 4 đáp án
    │   ├── ResultScreen.tsx         ← Kết quả + sao + confetti
    │   └── mathData.ts              ← Logic tạo câu hỏi theo lớp/chủ đề
    └── figma/
        └── ImageWithFallback.tsx    ← (đã có, không thay đổi)
```

## Chi tiết kỹ thuật

### State management (App.tsx)
```ts
type Screen = 'welcome' | 'grade' | 'topic' | 'game' | 'result'
```
Truyền `selectedGrade`, `selectedTopic`, `gameResult` qua props.

### mathData.ts — Tạo câu hỏi động
- Hàm `generateQuestion(grade, topic)` → `{ question, answer, choices[4] }`
- Choices được tạo ngẫu nhiên gần với đáp án đúng (tránh trùng)
- Mỗi lần play, 10 câu mới được tạo ngẫu nhiên

### UI Components tái sử dụng (từ /src/app/components/ui/)
- `Button` — các nút bấm
- `Card`, `CardContent` — khung câu hỏi
- `Progress` — thanh tiến trình (nếu có, hoặc tự build)
- `Badge` — hiển thị streak

### Thư viện cần dùng (đã có trong package.json)
- `canvas-confetti` — hiệu ứng pháo hoa
- `motion` (motion/react) — animation mượt
- `lucide-react` — icon
- `sonner` — toast thông báo

### Styling
- Màu sắc tươi sáng, phù hợp trẻ em (dùng Tailwind)
- Font lớn, dễ đọc
- Responsive (mobile-first, vì trẻ thường dùng tablet/điện thoại)
- Mỗi lớp học có accent color riêng

## Files cần tạo/chỉnh sửa

| File | Hành động |
|------|-----------|
| `src/app/App.tsx` | Chỉnh sửa — thêm screen routing logic |
| `src/app/components/math/WelcomeScreen.tsx` | Tạo mới |
| `src/app/components/math/GradeSelector.tsx` | Tạo mới |
| `src/app/components/math/TopicSelector.tsx` | Tạo mới |
| `src/app/components/math/MathGame.tsx` | Tạo mới |
| `src/app/components/math/QuestionCard.tsx` | Tạo mới |
| `src/app/components/math/ResultScreen.tsx` | Tạo mới |
| `src/app/components/math/mathData.ts` | Tạo mới |

## Verification

Sau khi implement:
1. Chạy app và kiểm tra flow: Chào → Chọn lớp → Chọn chủ đề → Chơi → Kết quả
2. Test với lớp 1 (cộng trong 10) và lớp 5 (số thập phân)
3. Kiểm tra hiệu ứng confetti khi hoàn thành
4. Kiểm tra responsive trên màn hình nhỏ
5. Kiểm tra streak counter và hệ thống sao
