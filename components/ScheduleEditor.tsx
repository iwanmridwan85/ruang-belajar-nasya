"use client";
import { useEffect, useState } from "react";
import {
  DAYS,
  EXTRAS,
  DEFAULT_SCHEDULE,
  clone,
  loadSchedule,
  saveSchedule,
  todayName,
  type Schedule,
} from "@/lib/schedule";
import { subjectByName, MAIN_SUBJECT_NAMES } from "@/lib/subjects";
import Icon from "./Icon";

const ALL_OPTIONS = [...MAIN_SUBJECT_NAMES, ...EXTRAS];

function EntryVisual({ name }: { name: string }) {
  const s = subjectByName(name);
  const color = s?.color || "var(--soft)";
  return (
    <span className="sdot" style={{ color }}>
      <Icon name={s?.icon || "calendar"} size={18} />
    </span>
  );
}

export default function ScheduleEditor() {
  const [sched, setSched] = useState<Schedule | null>(null);
  const [edit, setEdit] = useState(false);
  const [toast, setToast] = useState("");
  const today = typeof window !== "undefined" ? todayName() : "";

  useEffect(() => {
    setSched(loadSchedule());
  }, []);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(""), 1800);
  }

  function toggleEdit() {
    if (edit && sched) {
      saveSchedule(sched);
      showToast("Jadwal tersimpan ✓");
    }
    setEdit((e) => !e);
  }

  function setEntry(day: string, i: number, field: "t" | "s", value: string) {
    setSched((s) => {
      if (!s) return s;
      const c = clone(s);
      c[day][i][field] = value;
      return c;
    });
  }
  function delRow(day: string, i: number) {
    setSched((s) => {
      if (!s) return s;
      const c = clone(s);
      c[day].splice(i, 1);
      return c;
    });
  }
  function addRow(day: string) {
    setSched((s) => {
      if (!s) return s;
      const c = clone(s);
      const last = c[day][c[day].length - 1];
      c[day].push({ t: last ? last.t : "07:00", s: "Matematika" });
      return c;
    });
  }
  function reset() {
    const d = clone(DEFAULT_SCHEDULE);
    setSched(d);
    saveSchedule(d);
    showToast("Jadwal dikembalikan");
  }

  if (!sched) return null;

  return (
    <>
      <button
        className={`btn btn-block ${edit ? "btn-primary" : "btn-ghost"}`}
        style={{ marginTop: 14 }}
        onClick={toggleEdit}
      >
        <Icon name={edit ? "save" : "pencil"} size={18} />
        {edit ? "Simpan Jadwal" : "Ubah Jadwal"}
      </button>
      {edit && (
        <button className="btn btn-ghost btn-block" style={{ marginTop: 10 }} onClick={reset}>
          <Icon name="reset" size={18} /> Kembalikan ke jadwal awal
        </button>
      )}

      <div style={{ marginTop: 16 }}>
        {DAYS.map((day) => {
          const list = sched[day] || [];
          return (
            <div className="daycard" key={day}>
              <div className="dh">
                {day}
                {day === today && <span className="badge">HARI INI</span>}
              </div>
              {edit ? (
                <>
                  {list.map((e, i) => (
                    <div className="erow" key={i}>
                      <input
                        type="time"
                        value={e.t}
                        onChange={(ev) => setEntry(day, i, "t", ev.target.value)}
                      />
                      <select value={e.s} onChange={(ev) => setEntry(day, i, "s", ev.target.value)}>
                        {ALL_OPTIONS.map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                      <button className="del" onClick={() => delRow(day, i)} aria-label="Hapus">
                        <Icon name="trash" size={18} />
                      </button>
                    </div>
                  ))}
                  <button className="addrow" onClick={() => addRow(day)}>
                    <Icon name="plus" size={16} /> Tambah pelajaran
                  </button>
                </>
              ) : list.length ? (
                list.map((e, i) => (
                  <div className="srow" key={i}>
                    <EntryVisual name={e.s} />
                    <span className="stime">{e.t}</span>
                    <span className="sname">{e.s}</span>
                  </div>
                ))
              ) : (
                <div className="empty">Belum ada jadwal — libur.</div>
              )}
            </div>
          );
        })}
      </div>

      <div className={`toast ${toast ? "show" : ""}`}>
        <Icon name="check" size={16} /> {toast}
      </div>
    </>
  );
}
