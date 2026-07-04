export type Topic = {
  id: string;
  subject: string;
  semester: number;
  bab: number;
  babTitle: string;
  code: string; // "1.1" | "U1" | "1.A" (IPA)
  type: "kegiatan" | "uji";
  label?: string; // tampilan, mis. "Bagian A" (IPA). Default: "Kegiatan {code}"
  title: string;
  printedPages: string;
  text: string;
  chars: number;
};

export type BabGroup = {
  bab: number;
  babTitle: string;
  semester: number;
  topics: Topic[];
};

export type SubjectMeta = {
  slug: string;
  name: string;
  emoji: string;
  icon: string; // line-icon name (see components/Icon)
  color: string; // accent color
  desc: string; // short uppercase subtitle
  available: boolean;
  file?: string;
};
