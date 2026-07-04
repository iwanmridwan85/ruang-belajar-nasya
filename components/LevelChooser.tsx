"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LEVELS, type Level } from "@/lib/quiz";
import { getQuizBest } from "@/lib/progress";
import Icon from "./Icon";

export default function LevelChooser({
  subject,
  bab,
  counts,
}: {
  subject: string;
  bab: number;
  counts: Record<Level, number>;
}) {
  const [best, setBest] = useState<Record<string, number>>({});
  useEffect(() => {
    const b: Record<string, number> = {};
    for (const l of LEVELS) b[l.key] = getQuizBest(subject, `${bab}-${l.key}`);
    setBest(b);
  }, [subject, bab]);

  return (
    <>
      <div className="babhdr">Pilih Level Latihan</div>
      <div className="level-grid">
        {LEVELS.map((l) => {
          const total = counts[l.key];
          const score = best[l.key] || 0;
          return (
            <Link
              key={l.key}
              href={`/latihan/${subject}/${bab}-${l.key}`}
              className="level-card"
              style={{ "--ac": l.color } as React.CSSProperties}
            >
              <span className="lc-ic">
                <Icon name={l.icon} size={24} />
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="lc-t">{l.label}</div>
                <div className="lc-d">{l.desc}</div>
                <div className="lc-meta">
                  {total} soal
                  {score > 0 && (
                    <span className="lc-best">
                      <Icon name="star" size={12} /> Terbaik {score}/{total}
                    </span>
                  )}
                </div>
              </div>
              <Icon name="arrowR" size={18} />
            </Link>
          );
        })}
      </div>
    </>
  );
}
