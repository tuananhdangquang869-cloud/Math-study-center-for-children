import { motion } from "motion/react";
import { Target, Eye, Award, Users } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const TEACHER_IMG = "https://images.unsplash.com/photo-1577896851231-70ef18881754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";

const TEAM = [
  { name: "ThS. Nguyễn Thị Lan", role: "Giám đốc học thuật", emoji: "👩‍🎓", desc: "15 năm kinh nghiệm giảng dạy tiểu học, chuyên gia phát triển chương trình toán tư duy." },
  { name: "Ths. Trần Văn Hùng", role: "Trưởng phòng Công nghệ", emoji: "👨‍💻", desc: "Kỹ sư phần mềm với niềm đam mê EdTech, thiết kế hệ thống học tập thích nghi." },
  { name: "Cô Phạm Minh Châu", role: "Chuyên gia Tâm lý trẻ em", emoji: "👩‍🏫", desc: "Tư vấn học đường 10 năm, đảm bảo phương pháp học phù hợp tâm lý lứa tuổi." },
  { name: "Thầy Lê Quang Trung", role: "Giáo viên cốt cán", emoji: "👨‍🏫", desc: "Giáo viên tiểu học xuất sắc cấp thành phố, thiết kế kho bài tập 10.000+ câu hỏi." },
];

const VALUES = [
  { icon: Target, color: "text-blue-600 bg-blue-50", title: "Hiệu quả đo được", desc: "Mọi hoạt động học tập đều được ghi nhận và phân tích để đưa ra phản hồi có giá trị." },
  { icon: Eye, color: "text-purple-600 bg-purple-50", title: "Minh bạch với phụ huynh", desc: "Phụ huynh luôn nắm rõ con đang học gì, tiến độ thế nào, và cần hỗ trợ ở đâu." },
  { icon: Award, color: "text-yellow-600 bg-yellow-50", title: "Chất lượng giáo viên", desc: "100% giáo viên có bằng sư phạm tiểu học và được đào tạo phương pháp dạy toán tư duy." },
  { icon: Users, color: "text-green-600 bg-green-50", title: "Cộng đồng học tập", desc: "Kết nối phụ huynh, giáo viên và học sinh trong một hệ sinh thái giáo dục hỗ trợ nhau." },
];

export function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-blue-200 text-sm font-medium mb-2">VỀ CHÚNG TÔI</p>
            <h1 className="text-4xl font-black mb-4">Nơi mỗi em đều tỏa sáng</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
              Toán Sao ra đời năm 2020 với sứ mệnh đơn giản: giúp mọi học sinh tiểu học yêu thích và giỏi toán — bất kể xuất phát điểm.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Câu chuyện của chúng tôi</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Toán Sao bắt đầu từ một lớp dạy thêm nhỏ tại quận 7, TP.HCM năm 2020. Nhận thấy nhiều trẻ sợ toán không phải vì thiếu năng lực mà vì phương pháp học không phù hợp, chúng tôi quyết tâm xây dựng một nền tảng học tập khác biệt.
              </p>
              <p>
                Sau 4 năm nghiên cứu và phát triển, Toán Sao đã trở thành nền tảng học toán trực tuyến phục vụ hơn <strong>5.000 học sinh</strong> tại 200+ trường tiểu học trên cả nước.
              </p>
              <p>
                Chúng tôi tin rằng công nghệ, khi được dùng đúng cách, có thể làm cho việc học toán trở nên vui vẻ và hiệu quả hơn bao giờ hết.
              </p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <ImageWithFallback src={TEACHER_IMG} alt="Đội ngũ giảng viên Toán Sao" className="w-full h-72 object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-gray-900">Giá trị cốt lõi</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, color, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-black text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-gray-900">Đội ngũ của chúng tôi</h2>
            <p className="text-gray-500 mt-2">Những người xây dựng Toán Sao</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map(({ name, role, emoji, desc }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  {emoji}
                </div>
                <h3 className="font-black text-gray-900 text-sm">{name}</h3>
                <p className="text-blue-600 text-xs font-medium mt-0.5 mb-2">{role}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-12 text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-black mb-3">Hãy cùng xây dựng tương lai của con</h2>
          <p className="text-blue-200 mb-6">Dùng thử miễn phí 7 ngày — không cần thẻ tín dụng.</p>
          <Link to="/dang-ky">
            <Button className="h-12 px-8 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold rounded-xl border-0">
              Đăng ký học thử miễn phí
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
