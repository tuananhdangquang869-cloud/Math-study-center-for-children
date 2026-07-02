import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Grade, Topic } from "../components/math/mathData";
import { WelcomeScreen } from "../components/math/WelcomeScreen";
import { GradeSelector } from "../components/math/GradeSelector";
import { TopicSelector } from "../components/math/TopicSelector";
import { MathGame } from "../components/math/MathGame";
import { ResultScreen } from "../components/math/ResultScreen";

type Screen = "welcome" | "grade" | "topic" | "game" | "result";

interface GameResult {
  correct: number;
  total: number;
  streak: number;
}

export function MathGamePage() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [grade, setGrade] = useState<Grade>(1);
  const [topic, setTopic] = useState<Topic | null>(null);
  const [result, setResult] = useState<GameResult | null>(null);

  return (
    <div className="min-h-screen relative">
      {/* Back to site link (only on welcome) */}
      {screen === "welcome" && (
        <Link
          to="/"
          className="absolute top-4 left-4 z-20 flex items-center gap-1.5 text-white/80 hover:text-white text-sm font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Về trang chủ
        </Link>
      )}

      {screen === "welcome" && (
        <WelcomeScreen onStart={() => setScreen("grade")} />
      )}
      {screen === "grade" && (
        <GradeSelector
          onSelect={(g) => { setGrade(g); setScreen("topic"); }}
          onBack={() => setScreen("welcome")}
        />
      )}
      {screen === "topic" && (
        <TopicSelector
          grade={grade}
          onSelect={(t) => { setTopic(t); setScreen("game"); }}
          onBack={() => setScreen("grade")}
        />
      )}
      {screen === "game" && topic && (
        <MathGame
          key={`${grade}-${topic.id}-${result ? "replay" : "new"}`}
          grade={grade}
          topic={topic}
          onFinish={(r) => { setResult(r); setScreen("result"); }}
          onBack={() => setScreen("topic")}
        />
      )}
      {screen === "result" && topic && result && (
        <ResultScreen
          grade={grade}
          topic={topic}
          result={result}
          onReplay={() => { setResult(null); setScreen("game"); }}
          onHome={() => { setResult(null); setTopic(null); setScreen("welcome"); }}
        />
      )}
    </div>
  );
}
