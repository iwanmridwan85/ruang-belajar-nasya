import Link from "next/link";
import { notFound } from "next/navigation";
import { getBabGroups, getTopic, getSubjectMeta, SUBJECTS } from "@/lib/content";
import {
  QUIZ_BY_TOPIC,
  LEVELS,
  getTopicQuiz,
  getLevelQuiz,
  levelSoalCounts,
  hasLevelQuiz,
  babsWithLevelQuiz,
  type Level,
} from "@/lib/quiz";
import QuizRunner from "@/components/QuizRunner";
import LevelChooser from "@/components/LevelChooser";
import Icon from "@/components/Icon";

export function generateStaticParams() {
  const params: { subject: string; code: string }[] = [];
  // Matematika: kuis per-kegiatan
  for (const code of Object.keys(QUIZ_BY_TOPIC)) params.push({ subject: "matematika", code });
  // Semua mapel dengan kuis bertingkat
  for (const s of SUBJECTS.filter((x) => x.available)) {
    for (const bab of babsWithLevelQuiz(s.slug)) {
      params.push({ subject: s.slug, code: String(bab) });
      for (const l of LEVELS) params.push({ subject: s.slug, code: `${bab}-${l.key}` });
    }
  }
  return params;
}

const LEVEL_RE = /^(\d+)-(mudah|menengah|sulit)$/;

export default function QuizPage({ params }: { params: { subject: string; code: string } }) {
  const subject = params.subject;
  const meta = getSubjectMeta(subject);
  if (!meta || !meta.available) notFound();
  const raw = decodeURIComponent(params.code);
  const babName = (bab: number) =>
    getBabGroups(subject).find((x) => x.bab === bab)?.babTitle || "";

  // 1) Kuis per-kegiatan (hanya Matematika, kode "1.1")
  if (raw.includes(".")) {
    const questions = getTopicQuiz(raw);
    if (!questions.length) notFound();
    const t = getTopic(subject, raw);
    return (
      <QuizScreen subject={subject} title="Latihan Soal" sub={t ? `Kegiatan ${t.code} · ${t.title}` : `Kegiatan ${raw}`}>
        <QuizRunner subject={subject} quizId={raw} questions={questions} />
      </QuizScreen>
    );
  }

  // 2) Kuis per-level (kode "1-mudah")
  const lm = raw.match(LEVEL_RE);
  if (lm) {
    const bab = parseInt(lm[1], 10);
    const level = lm[2] as Level;
    const questions = getLevelQuiz(subject, bab, level);
    if (!questions.length) notFound();
    const info = LEVELS.find((l) => l.key === level)!;
    return (
      <QuizScreen subject={subject} title={`Latihan · ${info.label}`} sub={`Bab ${bab} · ${babName(bab)}`}>
        <QuizRunner subject={subject} quizId={raw} questions={questions} />
      </QuizScreen>
    );
  }

  // 3) Layar pilih level untuk sebuah bab (kode "1")
  const bab = parseInt(raw, 10);
  if (!bab || !hasLevelQuiz(subject, bab)) notFound();
  return (
    <QuizScreen subject={subject} title="Latihan Bertingkat" sub={`Bab ${bab} · ${babName(bab)}`}>
      <LevelChooser subject={subject} bab={bab} counts={levelSoalCounts(subject, bab)} />
    </QuizScreen>
  );
}

function QuizScreen({
  subject,
  title,
  sub,
  children,
}: {
  subject: string;
  title: string;
  sub: string;
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="topbar">
        <Link href={`/${subject}`} className="back">
          <Icon name="chevL" size={20} />
        </Link>
        <div>
          <div className="title">{title}</div>
          <div className="sub">{sub}</div>
        </div>
      </div>
      {children}
    </main>
  );
}
