import { createBrowserRouter } from "react-router";
import { Root } from "./components/layout/Root";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { CurriculumPage } from "./pages/CurriculumPage";
import { PricingPage } from "./pages/PricingPage";
import { ParentPage } from "./pages/ParentPage";
import { TeacherPage } from "./pages/TeacherPage";
import { RegisterPage } from "./pages/RegisterPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { MathGamePage } from "./pages/MathGamePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { CaseStudyPage } from "./pages/CaseStudyPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "gioi-thieu", Component: AboutPage },
      { path: "chuong-trinh-hoc", Component: CurriculumPage },
      { path: "hoc-phi", Component: PricingPage },
      { path: "phu-huynh", Component: ParentPage },
      { path: "giao-vien", Component: TeacherPage },
      { path: "dang-ky", Component: RegisterPage },
      { path: "bao-mat", Component: PrivacyPage },
      { path: "hoc-toan", Component: MathGamePage },
      { path: "case-study", Component: CaseStudyPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
