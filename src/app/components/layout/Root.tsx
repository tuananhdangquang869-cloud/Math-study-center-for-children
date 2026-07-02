import { Outlet, useLocation } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Root() {
  const location = useLocation();
  const isGamePage = location.pathname === "/hoc-toan";

  return (
    <div className="min-h-screen flex flex-col">
      {!isGamePage && <Header />}
      <main className="flex-1">
        <Outlet />
      </main>
      {!isGamePage && <Footer />}
    </div>
  );
}
