// Client-safe subject metadata (no fs imports) — usable in client components.
import type { SubjectMeta } from "./types";

export const SUBJECTS: SubjectMeta[] = [
  { slug: "matematika", name: "Matematika", emoji: "\u{1F522}", icon: "math", color: "#8b5cf6", desc: "Buku Kelas 7 · Sem 1 & 2", available: true, file: "matematika.json" },
  { slug: "ipa", name: "IPA", emoji: "\u{1F52C}", icon: "flask", color: "#22d3ee", desc: "Buku Kelas 7 · Sem 1 & 2", available: true, file: "ipa.json" },
  { slug: "ips", name: "IPS", emoji: "\u{1F30F}", icon: "globe", color: "#fb923c", desc: "Buku Kelas 7", available: true, file: "ips.json" },
  { slug: "bahasa-indonesia", name: "Bahasa Indonesia", emoji: "\u{1F4D6}", icon: "book", color: "#38bdf8", desc: "Buku Kelas 7", available: true, file: "bahasa-indonesia.json" },
  { slug: "bahasa-inggris", name: "Bahasa Inggris", emoji: "\u{1F1EC}\u{1F1E7}", icon: "chat", color: "#2dd4bf", desc: "Buku Kelas 7", available: true, file: "bahasa-inggris.json" },
  { slug: "informatika", name: "Informatika", emoji: "\u{1F4BB}", icon: "code", color: "#6366f1", desc: "Buku Kelas 7", available: true, file: "informatika.json" },
  { slug: "ppkn", name: "Pendidikan Pancasila", emoji: "\u{1F1EE}\u{1F1E9}", icon: "shield", color: "#f43f5e", desc: "Buku Kelas 7", available: true, file: "ppkn.json" },
];

export function subjectByName(name: string): SubjectMeta | undefined {
  return SUBJECTS.find((s) => s.name.toLowerCase() === name.toLowerCase());
}

// All selectable subject names for the schedule (6 main + extras filled by caller).
export const MAIN_SUBJECT_NAMES = SUBJECTS.map((s) => s.name);
