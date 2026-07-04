"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { loadSchedule, todayName, type Entry } from "@/lib/schedule";
import { subjectByName } from "@/lib/subjects";
import Icon from "./Icon";

export default function TodaySchedule() {
  const [list, setList] = useState<Entry[] | null | undefined>(undefined);
  const [day, setDay] = useState("");

  useEffect(() => {
    const d = todayName();
    setDay(d);
    const s = loadSchedule();
    setList(s[d] ?? null);
  }, []);

  if (list === undefined) return null; // not mounted yet

  return (
    <>
      <div className="section-label">
        <Icon name="calendar" size={16} /> Jadwal hari {day}
      </div>
      <Link href="/jadwal" className="today">
        <div className="th">
          <b>{day}</b>
          <span className="chip-today">HARI INI</span>
        </div>
        {!list || list.length === 0 ? (
          <div className="empty">Hari ini libur — waktunya belajar santai 🌤️</div>
        ) : (
          list.map((e, i) => {
            const s = subjectByName(e.s);
            return (
              <div className="srow" key={i}>
                <span className="sdot" style={{ color: s?.color || "var(--soft)" }}>
                  <Icon name={s?.icon || "calendar"} size={18} />
                </span>
                <span className="stime">{e.t}</span>
                <span className="sname">{e.s}</span>
              </div>
            );
          })
        )}
      </Link>
    </>
  );
}
