"use client";
import Link from "next/link";
import { useState } from "react";
import { useProgress } from "@/lib/progress";
import { hasLevelQuiz } from "@/lib/quiz";
import Icon from "./Icon";

type TopicLite = { code: string; title: string; type: string; label?: string };
type Group = { bab: number; babTitle: string; semester: number; topics: TopicLite[] };

export default function BabList({ subject, groups }: { subject: string; groups: Group[] }) {
  const { isDone, countDone } = useProgress();
  const [open, setOpen] = useState<Record<string, boolean>>({ [`${groups[0]?.semester}-${groups[0]?.bab}`]: true });
  const semesters = [1, 2];

  const toggle = (k: string) => setOpen((o) => ({ ...o, [k]: !o[k] }));

  return (
    <>
      {semesters.map((sem) => {
        const semGroups = groups.filter((g) => g.semester === sem);
        if (!semGroups.length) return null;
        return (
          <div key={sem}>
            <div className="babhdr">Semester {sem}</div>
            {semGroups.map((g) => {
              const key = `${g.semester}-${g.bab}`;
              const codes = g.topics.map((t) => t.code);
              const done = countDone(subject, codes);
              const pct = Math.round((done / codes.length) * 100);
              const isOpen = !!open[key];
              // Buku satu-topik-per-bab (mis. Bahasa, IPS): tautkan langsung, tanpa accordion.
              if (codes.length === 1 && g.bab > 0) {
                const t = g.topics[0];
                const dn = isDone(subject, t.code);
                return (
                  <Link key={key} href={`/${subject}/${t.code.toLowerCase()}`} className="bab">
                    <div className="bab-head">
                      <div className="bab-num">{g.bab}</div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div className="t">
                          {t.label ? `${t.label} · ` : ""}
                          {g.babTitle}
                        </div>
                        <div className="s">{dn ? "Sudah dibaca ✓" : "Ketuk untuk membaca"}</div>
                      </div>
                      <div className={`dot ${dn ? "done" : ""}`}>
                        {dn ? <Icon name="check" size={15} /> : ""}
                      </div>
                      <span className="chev">
                        <Icon name="chevR" size={20} />
                      </span>
                    </div>
                  </Link>
                );
              }
              return (
                <div className={`bab ${isOpen ? "open" : ""}`} key={key}>
                  <button className="bab-head" onClick={() => toggle(key)}>
                    <div className="bab-num">{g.bab || "★"}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="t">
                        {g.bab ? `Bab ${g.bab} · ` : ""}
                        {g.babTitle}
                      </div>
                      <div className="s">
                        {done}/{codes.length} topik selesai
                      </div>
                      <div className="progressbar">
                        <span style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                    <span className="chev">
                      <Icon name="chevR" size={20} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="topic-list">
                      {g.topics.map((t) => (
                        <Link
                          key={t.code}
                          href={`/${subject}/${t.code.toLowerCase()}`}
                          className={`topic-row ${t.type === "uji" ? "uji" : ""}`}
                        >
                          <div className={`dot ${isDone(subject, t.code) ? "done" : ""}`}>
                            {isDone(subject, t.code) ? (
                              <Icon name="check" size={15} />
                            ) : t.type === "uji" ? (
                              "★"
                            ) : (
                              ""
                            )}
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div className="tt">{t.title}</div>
                            <div className="code">
                              {t.label || (t.type === "uji" ? "Latihan Bab" : `Kegiatan ${t.code}`)}
                            </div>
                          </div>
                          <span className="chev">
                            <Icon name="chevR" size={18} />
                          </span>
                        </Link>
                      ))}

                      {g.bab > 0 && hasLevelQuiz(subject, g.bab) && (
                        <Link href={`/latihan/${subject}/${g.bab}`} className="latihan-launch">
                          <span className="ll-ic">
                            <Icon name="bulb" size={18} />
                          </span>
                          <div style={{ flex: 1 }}>
                            <div className="ll-t">Latihan Bertingkat Bab {g.bab}</div>
                            <div className="ll-s">Pilih level: Mudah · Menengah · Sulit</div>
                          </div>
                          <Icon name="arrowR" size={18} />
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
