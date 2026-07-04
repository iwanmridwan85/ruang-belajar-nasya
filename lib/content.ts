import fs from "node:fs";
import path from "node:path";
import type { Topic, BabGroup, SubjectMeta } from "./types";
import { SUBJECTS } from "./subjects";

export { SUBJECTS };

const cache = new Map<string, Topic[]>();

export function getSubjectMeta(slug: string): SubjectMeta | undefined {
  return SUBJECTS.find((s) => s.slug === slug);
}

export function loadTopics(slug: string): Topic[] {
  const meta = getSubjectMeta(slug);
  if (!meta || !meta.file) return [];
  if (cache.has(slug)) return cache.get(slug)!;
  const filePath = path.join(process.cwd(), "content", meta.file);
  const raw = fs.readFileSync(filePath, "utf-8");
  const topics = JSON.parse(raw) as Topic[];
  cache.set(slug, topics);
  return topics;
}

export function getBabGroups(slug: string): BabGroup[] {
  const topics = loadTopics(slug);
  const map = new Map<string, BabGroup>();
  for (const t of topics) {
    const key = `${t.semester}-${t.bab}`;
    if (!map.has(key)) {
      map.set(key, { bab: t.bab, babTitle: t.babTitle, semester: t.semester, topics: [] });
    }
    map.get(key)!.topics.push(t);
  }
  const rank = (g: BabGroup) => g.semester * 100 + (g.bab === 0 ? 99 : g.bab);
  return [...map.values()].sort((a, b) => rank(a) - rank(b));
}

// Count of real chapters (excludes the semester-final review groups, bab 0).
export function getBabCount(slug: string): number {
  return getBabGroups(slug).filter((g) => g.bab > 0).length;
}

export function getTopic(slug: string, code: string): Topic | undefined {
  return loadTopics(slug).find((t) => t.code.toLowerCase() === code.toLowerCase());
}

export function getAdjacentTopics(slug: string, code: string) {
  const topics = loadTopics(slug);
  const i = topics.findIndex((t) => t.code.toLowerCase() === code.toLowerCase());
  return {
    prev: i > 0 ? topics[i - 1] : undefined,
    next: i >= 0 && i < topics.length - 1 ? topics[i + 1] : undefined,
  };
}
