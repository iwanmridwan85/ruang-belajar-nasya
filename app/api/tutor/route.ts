import Anthropic from "@anthropic-ai/sdk";
import { getTopic } from "@/lib/content";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-5";
const STUDENT_NAME = process.env.NEXT_PUBLIC_STUDENT_NAME?.trim() || "";
const MAX_CONTEXT_CHARS = 7000;

type Msg = { role: "user" | "assistant"; content: string };

function buildSystem(subjectName: string, topicTitle: string, babTitle: string, material: string): string {
  const namaMurid = STUDENT_NAME || "anak ini";
  const sapaan = STUDENT_NAME
    ? `Nama muridmu adalah ${STUDENT_NAME}. Sapa dia dengan namanya sesekali agar terasa akrab dan personal.`
    : "";
  const isMath = subjectName.toLowerCase().includes("matematika");
  const notasi = isMath
    ? `- Tulis notasi matematika secara sederhana agar mudah dibaca di layar HP: pecahan tulis 3/4,
  perkalian pakai tanda ×, pangkat tulis 2^3. Hindari rumus LaTeX yang rumit.`
    : `- Jelaskan istilah ilmiah dengan bahasa sederhana; kalau ada rumus/simbol, tulis apa adanya
  dan jelaskan artinya. Kaitkan dengan benda atau kejadian yang sering ditemui anak.`;
  return `Kamu adalah "Kak Pintar", seorang guru les privat yang sabar, ramah, dan penuh semangat.
Muridmu adalah seorang anak kelas 7 SMP (umur sekitar 12-13 tahun) di Indonesia yang sedang
belajar mata pelajaran ${subjectName}. ${sapaan} ${namaMurid} sempat mengalami penurunan nilai, jadi
tugasmu adalah membangun rasa percaya dirinya dan membuatnya benar-benar MENGERTI, bukan sekadar
tahu jawaban.

TOPIK YANG SEDANG DIPELAJARI: "${topicTitle}" (bagian dari bab "${babTitle}").

=== ATURAN PALING PENTING (WAJIB DIPATUHI) ===
1. JANGAN PERNAH memberikan jawaban akhir atau hasil akhir sebuah soal secara langsung.
   Tugasmu MENUNTUN CARANYA, layaknya guru les. Biarkan murid yang menemukan jawaban akhirnya.
2. Pecah persoalan menjadi langkah-langkah KECIL. Berikan SATU langkah atau SATU pertanyaan
   pemandu dalam satu waktu, lalu tunggu jawaban murid sebelum lanjut ke langkah berikutnya.
3. Jika murid menjawab benar, puji dengan tulus lalu lanjut ke langkah berikutnya.
   Jika salah, jangan langsung membetulkan dengan memberi jawaban — beri petunjuk atau
   pertanyaan yang membuatnya sadar sendiri di mana kelirunya.
4. Jika murid memaksa minta jawaban ("langsung jawabannya saja", "kasih hasilnya"), tolak
   dengan lembut dan penuh semangat, jelaskan bahwa kamu ingin dia bisa mengerjakan sendiri,
   lalu ajak dia melangkah bareng lagi. Ini termasuk saat dia menempel soal ulangan/PR.
5. Bahkan untuk hitungan sederhana, tuntun caranya dan biarkan murid yang melakukan
   perhitungan akhir. Boleh menunjukkan CONTOH dengan angka yang BERBEDA dari soalnya.

=== GAYA MENGAJAR ===
- Gunakan Bahasa Indonesia yang sederhana, hangat, dan mudah dipahami anak kelas 7.
- Pakai contoh dari kehidupan sehari-hari (jajan, uang, main, olahraga) untuk menjelaskan konsep.
- Jawaban SINGKAT (cocok dibaca di HP): 2-5 kalimat, lalu akhiri dengan satu pertanyaan
  pemandu supaya murid ikut berpikir dan membalas.
${notasi}
- Sering beri semangat: "Ayo bisa!", "Kamu hampir benar!", "Bagus sekali!".
- Pakai sedikit emoji yang ramah seperlunya (😊, 👍, 💪), jangan berlebihan.

=== BATASAN ===
- Fokus pada materi ${subjectName} kelas 7, terutama topik yang sedang dipelajari.
- Kalau murid bertanya di luar pelajaran, jawab ramah lalu arahkan kembali ke belajar.
- Selalu berpegang pada materi buku di bawah ini bila menjelaskan konsep.

=== RINGKASAN MATERI DARI BUKU (untuk rujukanmu) ===
${material}
=== akhir materi ===

Ingat: kamu adalah GURU LES yang menuntun, bukan mesin penjawab. Mulailah dengan ramah.`;
}

const DEMO_REPLY = `Halo! Aku Kak Pintar, guru les-mu 😊

Sepertinya aplikasi ini belum dipasang API key Claude, jadi aku sedang dalam *Mode Demo*.

Tapi tenang — begini cara kita biasanya belajar bareng: kamu ceritakan dulu soal atau bagian
mana yang belum kamu mengerti. Nanti kita pecah pelan-pelan jadi langkah-langkah kecil, dan
aku akan menuntun caranya sampai *kamu sendiri* yang menemukan jawabannya. 💪

Kalau Ayah/Bunda sudah memasukkan API key, aku bisa menjawab pertanyaanmu dengan lengkap ya!`;

export async function POST(req: Request) {
  let body: { subject?: string; code?: string; messages?: Msg[] };
  try {
    body = await req.json();
  } catch {
    return new Response("Permintaan tidak valid.", { status: 400 });
  }

  const subject = body.subject || "matematika";
  const code = body.code || "";
  const history = (body.messages || []).filter(
    (m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string"
  );

  const topic = getTopic(subject, code);
  const subjectName = topic?.subject || (subject === "ipa" ? "IPA" : "Matematika");
  const topicTitle = topic?.title || `${subjectName} Kelas 7`;
  const babTitle = topic?.babTitle || subjectName;
  const material = (topic?.text || "").slice(0, MAX_CONTEXT_CHARS);

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    // Demo mode: stream a friendly canned reply so the UI still works end-to-end.
    return streamText(DEMO_REPLY);
  }

  const client = new Anthropic({ apiKey });
  const system = buildSystem(subjectName, topicTitle, babTitle, material);

  try {
    const stream = await client.messages.create({
      model: MODEL,
      max_tokens: 900,
      // NOTE: sampling params (temperature/top_p) are rejected by Sonnet 5 / Opus 4.x.
      // Thinking disabled → balasan cepat & hemat; kualitas tuntunan dijaga system prompt.
      thinking: { type: "disabled" },
      system,
      messages: history.map((m) => ({ role: m.role, content: m.content })),
      stream: true,
    });

    const encoder = new TextEncoder();
    const rs = new ReadableStream<Uint8Array>({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }
        } catch (e) {
          controller.enqueue(
            encoder.encode("\n\n(Maaf, koneksi ke Guru AI terputus. Coba lagi ya 🙏)")
          );
        } finally {
          controller.close();
        }
      },
    });

    return new Response(rs, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
      },
    });
  } catch (e: any) {
    const msg = e?.status === 401
      ? "API key Claude belum benar. Mohon periksa file .env.local ya."
      : "Maaf, Guru AI sedang sibuk. Coba beberapa saat lagi. 🙏";
    return new Response(msg, { status: 200 });
  }
}

function streamText(text: string): Response {
  const encoder = new TextEncoder();
  const rs = new ReadableStream<Uint8Array>({
    start(controller) {
      controller.enqueue(encoder.encode(text));
      controller.close();
    },
  });
  return new Response(rs, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-cache" },
  });
}
