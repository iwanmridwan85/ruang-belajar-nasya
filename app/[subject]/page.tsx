import Link from "next/link";
import { notFound } from "next/navigation";
import { getBabGroups, getSubjectMeta, SUBJECTS } from "@/lib/content";
import BabList from "@/components/BabList";
import Icon from "@/components/Icon";

export function generateStaticParams() {
  return SUBJECTS.filter((s) => s.available).map((s) => ({ subject: s.slug }));
}

export default function SubjectPage({ params }: { params: { subject: string } }) {
  const meta = getSubjectMeta(params.subject);
  if (!meta || !meta.available) notFound();

  const groups = getBabGroups(params.subject).map((g) => ({
    bab: g.bab,
    babTitle: g.babTitle,
    semester: g.semester,
    topics: g.topics.map((t) => ({ code: t.code, title: t.title, type: t.type, label: t.label })),
  }));

  return (
    <main>
      <div className="topbar">
        <Link href="/" className="back">
          <Icon name="chevL" size={20} />
        </Link>
        <div>
          <div className="title">{meta.name}</div>
          <div className="sub">Kelas 7 SMP · pilih topik untuk mulai</div>
        </div>
      </div>

      <BabList subject={params.subject} groups={groups} />

      <p className="footer-note">Materi dari Buku Siswa {meta.name} Kemdikbud Kelas VII.</p>
    </main>
  );
}
