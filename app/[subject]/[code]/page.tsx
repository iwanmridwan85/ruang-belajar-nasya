import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopic, getAdjacentTopics, getSubjectMeta, loadTopics, SUBJECTS } from "@/lib/content";
import { pageImages } from "@/lib/format";
import { hasTopicQuiz, hasLevelQuiz } from "@/lib/quiz";
import ReaderClient from "@/components/ReaderClient";
import BookPages from "@/components/BookPages";
import Icon from "@/components/Icon";

export function generateStaticParams() {
  return SUBJECTS.filter((s) => s.available).flatMap((s) =>
    loadTopics(s.slug).map((t) => ({ subject: s.slug, code: t.code.toLowerCase() }))
  );
}

export default function TopicPage({ params }: { params: { subject: string; code: string } }) {
  const meta = getSubjectMeta(params.subject);
  const topic = getTopic(params.subject, params.code);
  if (!meta || !topic) notFound();

  const bookPages = pageImages(params.subject, topic.semester, topic.printedPages);
  const unitLabel =
    topic.label || (topic.type === "uji" ? "Latihan & Rangkuman" : `Kegiatan ${topic.code}`);
  const { prev, next } = getAdjacentTopics(params.subject, params.code);

  const isUji = topic.type === "uji";
  const suggestions = isUji
    ? [
        "Aku bingung soal nomor 1, tolong tuntun caranya",
        "Bagaimana cara memulai soal cerita ini?",
        "Rumus apa yang dipakai di bab ini?",
      ]
    : [
        `Jelaskan ${topic.title} dengan bahasa sederhana`,
        "Beri aku contoh soal yang mirip",
        "Aku belum paham, boleh pelan-pelan dari awal?",
      ];

  return (
    <main className="reader">
      <div className="topbar">
        <Link href={`/${params.subject}`} className="back">
          <Icon name="chevL" size={20} />
        </Link>
        <div>
          <div className="title">{meta.name}</div>
          <div className="sub">
            {topic.bab ? `Bab ${topic.bab} · ${topic.babTitle}` : topic.babTitle}
          </div>
        </div>
      </div>

      <h2 className="topic-title">{topic.title}</h2>
      <div className="topic-meta">
        {unitLabel} · Semester {topic.semester}
      </div>

      {bookPages.length === 0 ? (
        <div className="book-pages">
          <p className="para">Halaman buku belum tersedia untuk topik ini.</p>
        </div>
      ) : (
        <BookPages pages={bookPages} />
      )}

      {params.subject === "matematika" && hasTopicQuiz(topic.code) && (
        <Link href={`/latihan/${params.subject}/${topic.code.toLowerCase()}`} className="latihan-launch" style={{ marginTop: 18 }}>
          <span className="ll-ic">
            <Icon name="bulb" size={18} />
          </span>
          <div style={{ flex: 1 }}>
            <div className="ll-t">Latihan Soal Kegiatan {topic.code}</div>
            <div className="ll-s">Kuis pilihan ganda + petunjuk</div>
          </div>
          <Icon name="arrowR" size={18} />
        </Link>
      )}

      {!["matematika", "ipa"].includes(params.subject) && hasLevelQuiz(params.subject, topic.bab) && (
        <Link href={`/latihan/${params.subject}/${topic.bab}`} className="latihan-launch" style={{ marginTop: 18 }}>
          <span className="ll-ic">
            <Icon name="bulb" size={18} />
          </span>
          <div style={{ flex: 1 }}>
            <div className="ll-t">Latihan Bertingkat</div>
            <div className="ll-s">Pilih level: Mudah · Menengah · Sulit</div>
          </div>
          <Icon name="arrowR" size={18} />
        </Link>
      )}

      <ReaderClient
        subject={params.subject}
        code={topic.code}
        title={topic.title}
        suggestions={suggestions}
      />

      <div className="reader-nav">
        {prev ? (
          <Link className="btn btn-ghost" href={`/${params.subject}/${prev.code.toLowerCase()}`}>
            <Icon name="chevL" size={18} /> Sebelumnya
          </Link>
        ) : (
          <span style={{ flex: 1 }} />
        )}
        {next ? (
          <Link className="btn btn-ghost" href={`/${params.subject}/${next.code.toLowerCase()}`}>
            Berikutnya <Icon name="chevR" size={18} />
          </Link>
        ) : (
          <span style={{ flex: 1 }} />
        )}
      </div>

      <p className="footer-note">
        Materi dari Buku Siswa Matematika Kemdikbud Kelas VII · hlm. {topic.printedPages}
      </p>
    </main>
  );
}
