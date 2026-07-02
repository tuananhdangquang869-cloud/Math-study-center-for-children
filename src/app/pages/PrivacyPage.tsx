import { Shield } from "lucide-react";

const SECTIONS = [
  {
    title: "1. Thông tin chúng tôi thu thập",
    content: `Chúng tôi thu thập các thông tin sau khi bạn sử dụng dịch vụ Toán Sao:
- Thông tin tài khoản: họ tên, email, số điện thoại của phụ huynh/giáo viên đăng ký.
- Thông tin học sinh: tên (có thể là biệt danh), khối lớp, dữ liệu học tập (điểm số, thời gian học, câu trả lời trong bài tập).
- Dữ liệu sử dụng: thiết bị, trình duyệt, địa chỉ IP, thời gian truy cập — phục vụ mục đích cải thiện sản phẩm.

Chúng tôi KHÔNG thu thập ảnh, vị trí GPS, hay thông tin nhận dạng sinh trắc học của trẻ em.`,
  },
  {
    title: "2. Mục đích sử dụng dữ liệu",
    content: `Dữ liệu được thu thập để:
- Cung cấp và cải thiện dịch vụ học tập cá nhân hóa.
- Tạo báo cáo tiến độ gửi đến phụ huynh và giáo viên.
- Gửi thông báo học tập, thành tích và nhắc nhở (nếu người dùng đồng ý).
- Tuân thủ nghĩa vụ pháp lý theo quy định của pháp luật Việt Nam.

Chúng tôi KHÔNG bán, cho thuê hay chia sẻ dữ liệu cá nhân của trẻ em cho bên thứ ba vì mục đích thương mại.`,
  },
  {
    title: "3. Bảo vệ dữ liệu trẻ em",
    content: `Toán Sao tuân thủ Nghị định 13/2023/NĐ-CP về Bảo vệ Dữ liệu Cá nhân và các quy định hiện hành của pháp luật Việt Nam về bảo vệ thông tin trẻ em:
- Tài khoản học sinh luôn được tạo và quản lý bởi phụ huynh hoặc giáo viên (người giám hộ hợp pháp).
- Phụ huynh có quyền xem, chỉnh sửa hoặc xóa toàn bộ dữ liệu của con mình bất kỳ lúc nào.
- Dữ liệu học sinh được mã hóa khi lưu trữ và truyền tải.
- Chúng tôi không hiển thị quảng cáo nhắm mục tiêu đến trẻ em.`,
  },
  {
    title: "4. Lưu trữ và bảo mật dữ liệu",
    content: `- Dữ liệu được lưu trữ trên máy chủ đặt tại Việt Nam hoặc tại các nhà cung cấp dịch vụ đám mây uy tín (AWS, Google Cloud) có chứng chỉ bảo mật ISO 27001.
- Chúng tôi áp dụng mã hóa SSL/TLS cho mọi kết nối.
- Mật khẩu được băm (hashed) và không bao giờ được lưu dạng plaintext.
- Dữ liệu được sao lưu định kỳ để đảm bảo tính liên tục của dịch vụ.
- Thời gian lưu trữ: dữ liệu tài khoản được giữ trong suốt thời gian sử dụng dịch vụ và tối đa 12 tháng sau khi tài khoản bị xóa.`,
  },
  {
    title: "5. Quyền của người dùng",
    content: `Theo Nghị định 13/2023/NĐ-CP, bạn có các quyền sau:
- Quyền truy cập: yêu cầu bản sao dữ liệu cá nhân của bạn/con bạn.
- Quyền chỉnh sửa: cập nhật thông tin không chính xác.
- Quyền xóa: yêu cầu xóa tài khoản và toàn bộ dữ liệu liên quan.
- Quyền phản đối: từ chối một số cách thức xử lý dữ liệu nhất định.
- Quyền khiếu nại: gửi khiếu nại đến Cục An toàn thông tin, Bộ TT&TT nếu bạn cho rằng quyền lợi bị vi phạm.

Để thực hiện các quyền trên, vui lòng liên hệ: privacy@toansao.vn`,
  },
  {
    title: "6. Cookie và công nghệ theo dõi",
    content: `Chúng tôi sử dụng cookie và công nghệ tương tự để:
- Duy trì phiên đăng nhập của bạn.
- Ghi nhớ tùy chọn ngôn ngữ và cài đặt.
- Phân tích cách người dùng tương tác với sản phẩm (dữ liệu ẩn danh).

Bạn có thể tắt cookie trong cài đặt trình duyệt, tuy nhiên một số tính năng có thể không hoạt động đúng.`,
  },
  {
    title: "7. Thay đổi chính sách",
    content: `Chúng tôi có thể cập nhật chính sách này định kỳ. Khi có thay đổi quan trọng, chúng tôi sẽ thông báo qua email đã đăng ký và hiển thị thông báo nổi bật trên ứng dụng ít nhất 30 ngày trước khi thay đổi có hiệu lực.`,
  },
  {
    title: "8. Liên hệ",
    content: `Nếu có bất kỳ câu hỏi hoặc lo ngại nào về chính sách bảo mật này, vui lòng liên hệ:

Trung tâm Toán Sao
Địa chỉ: 123 Đường Nguyễn Văn Linh, Quận 7, TP.HCM
Email: privacy@toansao.vn
Điện thoại: 0901 234 567
Giờ làm việc: 7:00 – 21:00, Thứ Hai – Chủ Nhật`,
  },
];

export function PrivacyPage() {
  return (
    <div className="py-12 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Shield className="w-7 h-7 text-blue-600" />
          </div>
          <h1 className="text-3xl font-black text-gray-900">Chính sách Bảo mật Dữ liệu</h1>
          <p className="text-gray-500 mt-2 text-sm">
            Cập nhật lần cuối: 30/06/2026 · Phiên bản 2.1
          </p>
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-2xl p-4 text-left">
            <p className="text-blue-800 text-sm font-semibold mb-1">📋 Tuân thủ pháp lý</p>
            <p className="text-blue-700 text-sm">
              Chính sách này được xây dựng theo Nghị định <strong>13/2023/NĐ-CP</strong> về Bảo vệ Dữ liệu Cá nhân của Việt Nam và các quy định quốc tế về bảo vệ dữ liệu trẻ em.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {SECTIONS.map(({ title, content }) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="font-black text-gray-900 mb-3">{title}</h2>
              <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{content}</div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs mt-8">
          © 2026 Trung tâm Toán Sao · Bảo lưu mọi quyền
        </p>
      </div>
    </div>
  );
}
