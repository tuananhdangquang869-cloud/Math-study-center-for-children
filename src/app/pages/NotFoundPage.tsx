import { Link } from "react-router";
import { Button } from "../components/ui/button";

export function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
      <div className="text-7xl mb-4">🔍</div>
      <h1 className="text-3xl font-black text-gray-900 mb-2">Trang không tìm thấy</h1>
      <p className="text-gray-500 mb-8 max-w-sm">
        Trang bạn đang tìm không tồn tại hoặc đã bị di chuyển.
      </p>
      <Link to="/">
        <Button className="h-11 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl border-0">
          Về trang chủ
        </Button>
      </Link>
    </div>
  );
}
