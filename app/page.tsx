import Link from "next/link";
import { SUBJECTS, getBabCount, loadTopics } from "@/lib/content";
import { STUDENT_NAME } from "@/lib/config";
import ContinueCard from "@/components/ContinueCard";
import TodaySchedule from "@/components/TodaySchedule";
import StarBadge from "@/components/StarBadge";
import InstallButton from "@/components/InstallButton";
import Icon from "@/components/Icon";

export default function Home() {
  const counts: Record<string, string> = {};
  for (const s of SUBJECTS) {
    if (!s.available) continue;
    const bc = getBabCount(s.slug);
    const tc = loadTopics(s.slug).length;
    counts[s.slug] = tc > bc ? `${bc} bab · ${tc} topik` : `${bc} bab`;
  }

  return (
    <main>
      <div className="topbar">
        <div className="back" style={{ background: "transparent", border: "none" }}>
          <Icon name="spark" size={24} style={{ color: "var(--cy)" }} />
        </div>
        <div>
          <div className="title">Ruang Belajar</div>
          <div className="sub">Kelas 7 SMP · Kurikulum Merdeka</div>
        </div>
      </div>

      <section className="hero">
        <h1>{STUDENT_NAME ? `Halo, ${STUDENT_NAME}!` : "Selamat datang!"}</h1>
        <StarBadge />
      </section>

      <ContinueCard />

      <InstallButton />

      <TodaySchedule />

      <div className="section-label">
        <Icon name="book" size={16} /> Mata Pelajaran
      </div>
      <div className="grid">
        {SUBJECTS.map((s) => {
          const inner = (
            <>
              <span className="cic">
                <Icon name={s.icon} size={24} />
              </span>
              <div>
                <div className="name">{s.name}</div>
                <div className="meta">{s.available ? counts[s.slug] : s.desc}</div>
              </div>
              {!s.available && <div className="badge-soon">Menyusul</div>}
            </>
          );
          return s.available ? (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="subject-card"
              style={{ "--ac": s.color } as React.CSSProperties}
            >
              {inner}
            </Link>
          ) : (
            <div
              key={s.slug}
              className="subject-card locked"
              style={{ "--ac": s.color } as React.CSSProperties}
            >
              {inner}
            </div>
          );
        })}
      </div>

      <p className="footer-note">
        Dibuat khusus untuk belajar di rumah 💜
        <br />
        Materi dari Buku Siswa Kemdikbud Kelas VII.
      </p>
    </main>
  );
}
