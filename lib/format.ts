// Pure helpers (safe on client & server) to turn raw book text into
// readable, structured blocks for the mobile reader.

export type Block =
  | { kind: "callout"; label: string; icon: string; text: string }
  | { kind: "para"; text: string };

// Section markers used in the Kemdikbud book, with a friendly icon + label.
const CALLOUTS: { re: RegExp; label: string; icon: string }[] = [
  { re: /^Ayo\s*Kita\s*Amati\b/i, label: "Ayo Kita Amati", icon: "\u{1F440}" },
  { re: /^Ayo\s*Kita\s*Menanya\b/i, label: "Ayo Kita Menanya", icon: "\u{2753}" },
  { re: /^Ayo\s*Kita\s*Menggali\s*Informasi\b/i, label: "Ayo Kita Menggali Informasi", icon: "\u{1F50E}" },
  { re: /^Ayo\s*Kita\s*Mencoba\b/i, label: "Ayo Kita Mencoba", icon: "\u{270D}\u{FE0F}" },
  { re: /^Ayo\s*Kita\s*Berbagi\b/i, label: "Ayo Kita Berbagi", icon: "\u{1F91D}" },
  { re: /^Ayo\s*Kita\s*Berlatih[\s\d.]*/i, label: "Ayo Kita Berlatih", icon: "\u{1F4DD}" },
  { re: /^Ayo\s*Kita\s*Merangkum[\s\d.]*/i, label: "Rangkuman", icon: "\u{1F4CC}" },
  { re: /^Ayo\s*Kita\s*Mengerjakan\s*(Tugas\s*)?(Projek|Proyek)[\s\d.]*/i, label: "Tugas Projek", icon: "\u{1F4E6}" },
  { re: /^Sedikit\s*Informasi\b/i, label: "Sedikit Informasi", icon: "\u{1F4A1}" },
  { re: /^Uji\s*Kompetensi[\s\d.]*/i, label: "Uji Kompetensi", icon: "\u{1F3AF}" },
  { re: /^Contoh\s*\d+(\.\d+)?\b/i, label: "Contoh", icon: "\u{1F4D8}" },
  { re: /^(Alternatif\s*)?Penyelesaian\b/i, label: "Penyelesaian", icon: "\u{2705}" },
];

function matchMarker(line: string) {
  const s = line.trim();
  for (const c of CALLOUTS) {
    if (c.re.test(s)) return c;
  }
  return null;
}

// Re-join labels the PDF split across lines, e.g. "Ayo\nKita Amati".
function preprocess(text: string): string {
  let t = text.replace(/\bAyo\s*\n\s*Kita/g, "Ayo Kita");
  t = t.replace(/[ \t]+\n/g, "\n");
  return t;
}

// Strip a leading repetition of the topic title (the book prints it as a heading).
function stripLeadingTitle(lines: string[], title?: string): string[] {
  if (!title) return lines;
  const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "");
  const target = norm(title);
  let acc = "";
  let cut = 0;
  for (let i = 0; i < Math.min(lines.length, 6); i++) {
    const l = lines[i].trim();
    if (!l) {
      if (cut > 0) cut = i + 1;
      continue;
    }
    acc += norm(l);
    if (target.startsWith(acc) && acc.length > 3) {
      cut = i + 1;
      if (acc === target) break;
    } else {
      break;
    }
  }
  return cut > 0 ? lines.slice(cut) : lines;
}

const LIST_RE = /^(\d+[.)]|[a-z][.)])\s+/;
const FIG_RE = /^(Gambar|Tabel|Sumber|Contoh)\b/i;

// Rejoin PDF hard-wrapped lines into flowing prose, but keep numbered exercise
// items, figure captions, and short standalone lines on their own line.
function reflow(text: string): string {
  return text
    .split(/\n\s*\n/)
    .map((para) => {
      const lines = para.split("\n").map((l) => l.trim()).filter(Boolean);
      const out: string[] = [];
      for (const l of lines) {
        const standalone = LIST_RE.test(l) || FIG_RE.test(l);
        const prev = out[out.length - 1];
        const prevStandalone = prev !== undefined && (LIST_RE.test(prev) || FIG_RE.test(prev));
        if (out.length === 0 || standalone || prevStandalone) {
          out.push(l);
        } else {
          out[out.length - 1] = prev + " " + l;
        }
      }
      return out.join("\n");
    })
    .join("\n\n");
}

export function toBlocks(text: string, title?: string): Block[] {
  const t = preprocess(text);
  let lines = t.split("\n");
  lines = stripLeadingTitle(lines, title);

  const blocks: Block[] = [];
  let cur: { label: string; icon: string } | null = null;
  let buf: string[] = [];

  const flush = () => {
    const body = reflow(buf.join("\n").replace(/\n{3,}/g, "\n\n").trim());
    if (cur) {
      blocks.push({ kind: "callout", label: cur.label, icon: cur.icon, text: body });
    } else if (body) {
      // split intro text into paragraphs on blank lines
      for (const p of body.split(/\n\s*\n/)) {
        const pt = p.trim();
        if (pt) blocks.push({ kind: "para", text: pt });
      }
    }
    buf = [];
  };

  for (const line of lines) {
    const marker = matchMarker(line);
    if (marker) {
      flush();
      cur = { label: marker.label, icon: marker.icon };
      // keep any text on the same line after the marker word
      const rest = line.trim().replace(CALLOUTS.find((c) => c.label === marker.label)!.re, "").replace(/^[\s:.]+/, "");
      if (rest) buf.push(rest);
    } else {
      buf.push(line);
    }
  }
  flush();
  return blocks;
}

// Build the list of scanned book-page image URLs for a topic's printed page range.
export function pageImages(subject: string, semester: number, printedPages: string): string[] {
  const m = printedPages.match(/^(\d+)-(\d+)$/);
  if (!m) return [];
  const a = parseInt(m[1], 10);
  const b = parseInt(m[2], 10);
  const urls: string[] = [];
  for (let p = a; p <= b; p++) {
    urls.push(`/materi/${subject}/sem${semester}/p${String(p).padStart(3, "0")}.jpg`);
  }
  return urls;
}

// A short plain-text preview for cards / AI grounding.
export function excerpt(text: string, max = 220): string {
  const clean = preprocess(text).replace(/\s+/g, " ").trim();
  return clean.length > max ? clean.slice(0, max).trimEnd() + "…" : clean;
}
