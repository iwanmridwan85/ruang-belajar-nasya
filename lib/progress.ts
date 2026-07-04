"use client";
import { useCallback, useEffect, useState } from "react";

const KEY = "rb.progress.v1";
const LAST_KEY = "rb.last.v1";

type ProgressMap = Record<string, number>; // "matematika/1.1" -> timestamp done

function read(): ProgressMap {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}

function write(map: ProgressMap) {
  localStorage.setItem(KEY, JSON.stringify(map));
  window.dispatchEvent(new Event("rb-progress"));
}

export function keyFor(subject: string, code: string) {
  return `${subject}/${code}`;
}

export type LastVisited = { subject: string; code: string; title: string; ts: number } | null;

export function setLastVisited(subject: string, code: string, title: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(LAST_KEY, JSON.stringify({ subject, code, title, ts: Date.now() }));
}

export function getLastVisited(): LastVisited {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(localStorage.getItem(LAST_KEY) || "null");
  } catch {
    return null;
  }
}

// ---------- Bintang (stars) & nilai terbaik kuis ----------
const STARS_KEY = "rb.stars.v1";
const BEST_KEY = "rb.quizbest.v1";

export function getStars(): number {
  if (typeof window === "undefined") return 0;
  return parseInt(localStorage.getItem(STARS_KEY) || "0", 10) || 0;
}

export function addStars(n: number): number {
  const total = getStars() + n;
  localStorage.setItem(STARS_KEY, String(total));
  window.dispatchEvent(new Event("rb-progress"));
  return total;
}

type BestMap = Record<string, number>; // "matematika/1.1" -> best score
export function getQuizBest(subject: string, id: string): number {
  if (typeof window === "undefined") return 0;
  try {
    const m = JSON.parse(localStorage.getItem(BEST_KEY) || "{}") as BestMap;
    return m[`${subject}/${id}`] || 0;
  } catch {
    return 0;
  }
}

export function setQuizBest(subject: string, id: string, score: number) {
  try {
    const m = JSON.parse(localStorage.getItem(BEST_KEY) || "{}") as BestMap;
    const k = `${subject}/${id}`;
    if (score > (m[k] || 0)) {
      m[k] = score;
      localStorage.setItem(BEST_KEY, JSON.stringify(m));
      window.dispatchEvent(new Event("rb-progress"));
    }
  } catch {
    /* ignore */
  }
}

// Hook: whole progress map, reactive to updates across the app.
export function useProgress() {
  const [map, setMap] = useState<ProgressMap>({});
  useEffect(() => {
    setMap(read());
    const h = () => setMap(read());
    window.addEventListener("rb-progress", h);
    window.addEventListener("storage", h);
    return () => {
      window.removeEventListener("rb-progress", h);
      window.removeEventListener("storage", h);
    };
  }, []);

  const isDone = useCallback((subject: string, code: string) => !!map[keyFor(subject, code)], [map]);

  const toggle = useCallback((subject: string, code: string) => {
    const m = read();
    const k = keyFor(subject, code);
    if (m[k]) delete m[k];
    else m[k] = Date.now();
    write(m);
  }, []);

  const countDone = useCallback(
    (subject: string, codes: string[]) => codes.filter((c) => map[keyFor(subject, c)]).length,
    [map]
  );

  return { map, isDone, toggle, countDone };
}
