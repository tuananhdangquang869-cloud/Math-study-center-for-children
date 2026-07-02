export type Grade = 1 | 2 | 3 | 4 | 5;

export interface Topic {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Question {
  id: number;
  display: string;
  answer: number;
  choices: number[];
}

export const TOPICS_BY_GRADE: Record<Grade, Topic[]> = {
  1: [
    { id: "add10", name: "Cộng trong 10", description: "Các phép cộng từ 1 đến 10", icon: "➕" },
    { id: "sub10", name: "Trừ trong 10", description: "Các phép trừ từ 1 đến 10", icon: "➖" },
    { id: "add20", name: "Cộng trong 20", description: "Các phép cộng đến 20", icon: "🔢" },
  ],
  2: [
    { id: "add100", name: "Cộng trong 100", description: "Cộng các số đến 100", icon: "➕" },
    { id: "sub100", name: "Trừ trong 100", description: "Trừ các số đến 100", icon: "➖" },
    { id: "mul25", name: "Bảng nhân 2–5", description: "Nhân với 2, 3, 4, 5", icon: "✖️" },
  ],
  3: [
    { id: "add1000", name: "Cộng trong 1000", description: "Cộng các số đến 1000", icon: "➕" },
    { id: "sub1000", name: "Trừ trong 1000", description: "Trừ các số đến 1000", icon: "➖" },
    { id: "mul69", name: "Bảng nhân 6–9", description: "Nhân với 6, 7, 8, 9", icon: "✖️" },
    { id: "div", name: "Chia đơn giản", description: "Chia hết không dư", icon: "➗" },
  ],
  4: [
    { id: "mulbig", name: "Nhân số lớn", description: "Nhân với số có 2 chữ số", icon: "✖️" },
    { id: "divbig", name: "Chia số lớn", description: "Chia cho số có 1–2 chữ số", icon: "➗" },
    { id: "fraction", name: "Phân số", description: "So sánh và rút gọn phân số", icon: "½" },
  ],
  5: [
    { id: "decimal", name: "Số thập phân", description: "Cộng trừ số thập phân", icon: "🔢" },
    { id: "percent", name: "Phần trăm", description: "Tính phần trăm đơn giản", icon: "%" },
    { id: "area", name: "Diện tích", description: "Diện tích hình chữ nhật, hình vuông", icon: "📐" },
  ],
};

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeChoices(answer: number, count = 4, range = 10): number[] {
  const set = new Set<number>([answer]);
  while (set.size < count) {
    const delta = randInt(-range, range);
    const candidate = answer + delta;
    if (candidate !== answer && candidate >= 0) set.add(candidate);
  }
  return shuffle(Array.from(set));
}

function makeDecimalChoices(answer: number): number[] {
  const set = new Set<number>([answer]);
  while (set.size < 4) {
    const delta = (randInt(-5, 5)) * 0.1;
    const candidate = Math.round((answer + delta) * 10) / 10;
    if (candidate !== answer && candidate >= 0) set.add(candidate);
  }
  return shuffle(Array.from(set));
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateForTopic(topicId: string): Question {
  const id = Math.random();
  switch (topicId) {
    case "add10": {
      const a = randInt(1, 9), b = randInt(1, 10 - a);
      return { id, display: `${a} + ${b} = ?`, answer: a + b, choices: makeChoices(a + b, 4, 5) };
    }
    case "sub10": {
      const a = randInt(2, 10), b = randInt(1, a);
      return { id, display: `${a} - ${b} = ?`, answer: a - b, choices: makeChoices(a - b, 4, 5) };
    }
    case "add20": {
      const a = randInt(1, 15), b = randInt(1, 20 - a);
      return { id, display: `${a} + ${b} = ?`, answer: a + b, choices: makeChoices(a + b, 4, 6) };
    }
    case "add100": {
      const a = randInt(10, 80), b = randInt(5, 100 - a);
      return { id, display: `${a} + ${b} = ?`, answer: a + b, choices: makeChoices(a + b, 4, 15) };
    }
    case "sub100": {
      const a = randInt(20, 100), b = randInt(5, a);
      return { id, display: `${a} - ${b} = ?`, answer: a - b, choices: makeChoices(a - b, 4, 15) };
    }
    case "mul25": {
      const a = randInt(2, 5), b = randInt(1, 10);
      return { id, display: `${a} × ${b} = ?`, answer: a * b, choices: makeChoices(a * b, 4, 10) };
    }
    case "add1000": {
      const a = randInt(100, 800), b = randInt(50, 1000 - a);
      return { id, display: `${a} + ${b} = ?`, answer: a + b, choices: makeChoices(a + b, 4, 100) };
    }
    case "sub1000": {
      const a = randInt(200, 1000), b = randInt(50, a);
      return { id, display: `${a} - ${b} = ?`, answer: a - b, choices: makeChoices(a - b, 4, 100) };
    }
    case "mul69": {
      const a = randInt(6, 9), b = randInt(1, 10);
      return { id, display: `${a} × ${b} = ?`, answer: a * b, choices: makeChoices(a * b, 4, 15) };
    }
    case "div": {
      const b = randInt(2, 9), result = randInt(2, 10);
      const a = b * result;
      return { id, display: `${a} ÷ ${b} = ?`, answer: result, choices: makeChoices(result, 4, 5) };
    }
    case "mulbig": {
      const a = randInt(10, 50), b = randInt(2, 9);
      return { id, display: `${a} × ${b} = ?`, answer: a * b, choices: makeChoices(a * b, 4, 50) };
    }
    case "divbig": {
      const b = randInt(2, 12), result = randInt(5, 20);
      const a = b * result;
      return { id, display: `${a} ÷ ${b} = ?`, answer: result, choices: makeChoices(result, 4, 10) };
    }
    case "fraction": {
      const denom = randInt(2, 8);
      const numer = randInt(1, denom - 1);
      const denom2 = randInt(2, 8);
      const numer2 = randInt(1, denom2 - 1);
      const sum = numer * denom2 + numer2 * denom;
      const commonDenom = denom * denom2;
      return {
        id,
        display: `${numer}/${denom} + ${numer2}/${denom2} = ?/${commonDenom}`,
        answer: sum,
        choices: makeChoices(sum, 4, 5),
      };
    }
    case "decimal": {
      const a = Math.round(randInt(1, 50) * 10 + randInt(0, 9)) / 10;
      const b = Math.round(randInt(1, 30) * 10 + randInt(0, 9)) / 10;
      const ans = Math.round((a + b) * 10) / 10;
      return { id, display: `${a.toFixed(1)} + ${b.toFixed(1)} = ?`, answer: ans, choices: makeDecimalChoices(ans) };
    }
    case "percent": {
      const pct = [10, 20, 25, 50][randInt(0, 3)];
      const total = randInt(2, 10) * 100;
      const ans = (pct / 100) * total;
      return { id, display: `${pct}% của ${total} = ?`, answer: ans, choices: makeChoices(ans, 4, 30) };
    }
    case "area": {
      const w = randInt(2, 15), h = randInt(2, 15);
      return { id, display: `Hình chữ nhật ${w}cm × ${h}cm\nDiện tích = ? cm²`, answer: w * h, choices: makeChoices(w * h, 4, 20) };
    }
    default: {
      const a = randInt(1, 10), b = randInt(1, 10);
      return { id, display: `${a} + ${b} = ?`, answer: a + b, choices: makeChoices(a + b, 4, 5) };
    }
  }
}

export function generateQuestions(topicId: string, count = 10): Question[] {
  return Array.from({ length: count }, () => generateForTopic(topicId));
}

export const GRADE_COLORS: Record<Grade, { bg: string; text: string; border: string; light: string }> = {
  1: { bg: "bg-pink-500", text: "text-pink-600", border: "border-pink-400", light: "bg-pink-50" },
  2: { bg: "bg-orange-500", text: "text-orange-600", border: "border-orange-400", light: "bg-orange-50" },
  3: { bg: "bg-yellow-500", text: "text-yellow-600", border: "border-yellow-400", light: "bg-yellow-50" },
  4: { bg: "bg-green-500", text: "text-green-600", border: "border-green-400", light: "bg-green-50" },
  5: { bg: "bg-blue-500", text: "text-blue-600", border: "border-blue-400", light: "bg-blue-50" },
};
