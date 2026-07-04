// Jadwal pelajaran — data default + penyimpanan di localStorage.
export type Entry = { t: string; s: string };
export type Schedule = Record<string, Entry[]>;

export const DAYS = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

// Mata pelajaran tambahan (di luar 6 mapel utama) untuk pilihan jadwal.
export const EXTRAS = [
  "Upacara",
  "Pendidikan Agama",
  "Bahasa Sunda",
  "Seni Budaya",
  "Informatika",
  "PJOK",
  "Prakarya",
  "Bimbingan Konseling",
  "Ekstrakurikuler",
  "Istirahat",
];

export const DEFAULT_SCHEDULE: Schedule = {
  Senin: [
    { t: "07:00", s: "Upacara" },
    { t: "07:45", s: "Matematika" },
    { t: "08:30", s: "Matematika" },
    { t: "09:30", s: "IPA" },
    { t: "10:15", s: "Bahasa Indonesia" },
    { t: "11:00", s: "Pendidikan Pancasila" },
  ],
  Selasa: [
    { t: "07:00", s: "Bahasa Inggris" },
    { t: "07:45", s: "IPA" },
    { t: "08:30", s: "IPS" },
    { t: "09:30", s: "Matematika" },
    { t: "10:15", s: "Seni Budaya" },
  ],
  Rabu: [
    { t: "07:00", s: "Bahasa Indonesia" },
    { t: "07:45", s: "Bahasa Indonesia" },
    { t: "08:30", s: "IPS" },
    { t: "09:30", s: "Informatika" },
    { t: "10:15", s: "PJOK" },
  ],
  Kamis: [
    { t: "07:00", s: "Matematika" },
    { t: "07:45", s: "IPA" },
    { t: "08:30", s: "Bahasa Inggris" },
    { t: "09:30", s: "Pendidikan Agama" },
    { t: "10:15", s: "Pendidikan Pancasila" },
  ],
  Jumat: [
    { t: "07:00", s: "PJOK" },
    { t: "07:45", s: "IPS" },
    { t: "08:30", s: "Bahasa Sunda" },
    { t: "09:30", s: "Prakarya" },
  ],
  Sabtu: [
    { t: "07:00", s: "Bahasa Indonesia" },
    { t: "07:45", s: "Informatika" },
    { t: "08:30", s: "Seni Budaya" },
    { t: "09:30", s: "Ekstrakurikuler" },
  ],
};

const KEY = "rb.jadwal.v1";

export function loadSchedule(): Schedule {
  if (typeof window === "undefined") return clone(DEFAULT_SCHEDULE);
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Schedule) : clone(DEFAULT_SCHEDULE);
  } catch {
    return clone(DEFAULT_SCHEDULE);
  }
}

export function saveSchedule(s: Schedule) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(s));
}

export function clone<T>(x: T): T {
  return JSON.parse(JSON.stringify(x));
}

export function todayName(): string {
  const map: Record<number, string> = {
    0: "Minggu",
    1: "Senin",
    2: "Selasa",
    3: "Rabu",
    4: "Kamis",
    5: "Jumat",
    6: "Sabtu",
  };
  return map[new Date().getDay()];
}
