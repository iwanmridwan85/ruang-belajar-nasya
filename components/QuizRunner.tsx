"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { QuizQ } from "@/lib/quiz";
import { addStars, getStars, setQuizBest } from "@/lib/progress";
import Icon from "./Icon";

function shuffle<T>(a: T[]): T[] {
  const b = a.slice();
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}
const praise = ["Hebat!", "Mantap!", "Benar!", "Pintar!"];

export default function QuizRunner({
  subject,
  quizId,
  questions,
  limit,
}: {
  subject: string;
  quizId: string;
  questions: QuizQ[];
  limit?: number;
}) {
  // Shuffle on the client only (after mount) to avoid hydration mismatch.
  const [qs, setQs] = useState<QuizQ[] | null>(null);
  const [round, setRound] = useState(0); // bump to reshuffle
  const [qi, setQi] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [totalStars, setTotalStars] = useState(0);

  useEffect(() => {
    const chosen = shuffle(questions).slice(0, limit && limit > 0 ? limit : questions.length);
    setQs(chosen.map((q) => ({ ...q, options: shuffle(q.options) })));
    setQi(0);
    setPicked(null);
    setShowHint(false);
    setScore(0);
    setFinished(false);
  }, [questions, round, limit]);

  const praiseWord = useMemo(() => praise[Math.floor(Math.random() * praise.length)], [qi]);

  if (!qs) return null;

  const q = qs[qi];
  const answered = picked !== null;
  const total = qs.length;

  function choose(opt: string) {
    if (picked !== null) return;
    setPicked(opt);
    if (opt === q.answer) setScore((s) => s + 1);
  }

  function next() {
    if (qi + 1 >= total) {
      const finalScore = score; // score already includes current if correct
      const t = addStars(finalScore);
      setTotalStars(t);
      setQuizBest(subject, quizId, finalScore);
      setFinished(true);
      return;
    }
    setQi((i) => i + 1);
    setPicked(null);
    setShowHint(false);
  }

  if (finished) {
    const r = score / total;
    let ic = "bulb";
    let msg = "Tidak apa-apa, coba lagi pasti bisa!";
    if (r === 1) {
      ic = "trophy";
      msg = "Sempurna! Kamu hebat banget!";
    } else if (r >= 0.6) {
      ic = "star";
      msg = "Keren! Sedikit lagi sempurna!";
    } else if (r >= 0.4) {
      ic = "spark";
      msg = "Bagus! Terus berlatih ya!";
    }
    return (
      <div className="result">
        <div className="rbig">
          <Icon name={ic} size={46} sw={1.6} />
        </div>
        <h2>{msg}</h2>
        <div className="sc">
          {score} / {total}
        </div>
        <div className="st">
          {Array.from({ length: total }, (_, k) => (
            <span key={k} className={`ic ${k < score ? "" : "off"}`}>
              <Icon name="star" size={20} />
            </span>
          ))}
        </div>
        <div className="sub">
          +{score} bintang · Total {totalStars || getStars()} ⭐
        </div>
        <div className="btnrow">
          <button
            className="btn btn-primary btn-block"
            onClick={() => setRound((x) => x + 1)}
          >
            <Icon name="reset" size={18} /> Ulangi Latihan
          </button>
          <Link className="btn btn-ghost btn-block" href={`/${subject}`}>
            Kembali ke Bab
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="progress">
        {qs.map((_, k) => (
          <div key={k} className={`pdot ${k < qi ? "done" : ""} ${k === qi ? "now" : ""}`} />
        ))}
      </div>

      <div className="qcard">
        <div className="qlabel">
          Soal {qi + 1} / {total}
        </div>
        <div className="qtext">{q.q}</div>
      </div>

      <div className="opts">
        {q.options.map((o) => {
          let cls = "opt";
          if (answered) {
            if (o === q.answer) cls += " correct";
            else if (o === picked) cls += " wrong";
            else cls += " dim";
          }
          return (
            <button key={o} className={cls} disabled={answered} onClick={() => choose(o)}>
              {o}
            </button>
          );
        })}
      </div>

      {answered ? (
        <>
          <div className="fb">
            <div className={`m ${picked === q.answer ? "good" : "bad"}`}>
              {picked === q.answer ? praiseWord : "Belum tepat"}
            </div>
            {picked !== q.answer && (
              <div className="h">
                Jawaban benar: <b>{q.answer}</b>. {q.hint}
              </div>
            )}
          </div>
          <button className="btn btn-primary btn-block" onClick={next}>
            {qi + 1 >= total ? "Lihat Hasil" : "Lanjut"} <Icon name="arrowR" size={18} />
          </button>
        </>
      ) : showHint ? (
        <div className="hintbox">{q.hint}</div>
      ) : (
        <button className="hintbtn" onClick={() => setShowHint(true)}>
          <Icon name="bulb" size={18} /> Butuh petunjuk?
        </button>
      )}
    </div>
  );
}
