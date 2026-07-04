"use client";
import { useEffect, useRef, useState } from "react";
import { setLastVisited, useProgress } from "@/lib/progress";
import { STUDENT_NAME } from "@/lib/config";
import Icon from "./Icon";

type Msg = { role: "user" | "assistant"; content: string };

export default function ReaderClient({
  subject,
  code,
  title,
  suggestions,
}: {
  subject: string;
  code: string;
  title: string;
  suggestions: string[];
}) {
  const { isDone, toggle } = useProgress();
  const [open, setOpen] = useState(false);
  const done = isDone(subject, code);

  useEffect(() => {
    setLastVisited(subject, code, title);
  }, [subject, code, title]);

  return (
    <>
      <button
        className={`btn btn-block ${done ? "btn-ghost" : "btn-primary"}`}
        style={{ marginTop: 22 }}
        onClick={() => toggle(subject, code)}
      >
        <Icon name="check" size={18} />
        {done ? "Sudah dipelajari — tandai ulang" : "Tandai topik ini selesai"}
      </button>

      <button className="ask-fab" onClick={() => setOpen(true)} aria-label="Tanya Guru AI">
        <Icon name="teacher" size={20} /> Tanya Guru
      </button>

      <TutorSheet
        open={open}
        onClose={() => setOpen(false)}
        subject={subject}
        code={code}
        title={title}
        suggestions={suggestions}
      />
    </>
  );
}

function TutorSheet({
  open,
  onClose,
  subject,
  code,
  title,
  suggestions,
}: {
  open: boolean;
  onClose: () => void;
  subject: string;
  code: string;
  title: string;
  suggestions: string[];
}) {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const taRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, busy]);

  async function send(text: string) {
    const q = text.trim();
    if (!q || busy) return;
    setInput("");
    if (taRef.current) taRef.current.style.height = "auto";
    const next: Msg[] = [...messages, { role: "user", content: q }];
    setMessages([...next, { role: "assistant", content: "" }]);
    setBusy(true);

    try {
      const res = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, code, messages: next }),
      });

      if (!res.ok || !res.body) {
        const err = await res.text().catch(() => "");
        setMessages((m) => {
          const c = [...m];
          c[c.length - 1] = {
            role: "assistant",
            content: err || "Maaf, Guru AI sedang tidak bisa dihubungi. Coba lagi ya. 🙏",
          };
          return c;
        });
        setBusy(false);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((m) => {
          const c = [...m];
          c[c.length - 1] = { role: "assistant", content: acc };
          return c;
        });
      }
    } catch {
      setMessages((m) => {
        const c = [...m];
        c[c.length - 1] = {
          role: "assistant",
          content: "Maaf, koneksinya terputus. Coba tanya lagi ya. 🙏",
        };
        return c;
      });
    } finally {
      setBusy(false);
    }
  }

  const showThinking =
    busy && messages.length > 0 && messages[messages.length - 1].content === "";

  return (
    <>
      <div className={`sheet-backdrop ${open ? "open" : ""}`} onClick={onClose}
        style={{ pointerEvents: open ? "auto" : "none" }} />
      <div className={`sheet ${open ? "open" : ""}`}>
        <div className="sheet-head">
          <div className="avatar">
            <Icon name="teacher" size={22} />
          </div>
          <div>
            <div className="who">Guru AI</div>
            <div className="role">Menuntun caranya, bukan jawabannya</div>
          </div>
          <button className="close" onClick={onClose} aria-label="Tutup">
            <Icon name="close" size={18} />
          </button>
        </div>

        <div className="chat" ref={chatRef}>
          {messages.length === 0 && (
            <div className="msg bot">
              Halo{STUDENT_NAME ? `, ${STUDENT_NAME}` : ""}! 👋 Aku Guru AI-mu untuk topik <b>{title}</b>.
              Ceritakan bagian mana yang belum kamu mengerti, atau soal mana yang bikin bingung.
              Nanti kita pecahkan langkah demi langkah bersama. 💪
            </div>
          )}
          {messages.map((m, i) => {
            const isLast = i === messages.length - 1;
            if (m.role === "assistant" && m.content === "" && isLast && showThinking) {
              return (
                <div className="msg bot thinking dots" key={i}>
                  Guru AI sedang berpikir<span>.</span><span>.</span><span>.</span>
                </div>
              );
            }
            return (
              <div className={`msg ${m.role === "user" ? "user" : "bot"}`} key={i}>
                {m.content}
              </div>
            );
          })}
        </div>

        {messages.length === 0 && (
          <div className="suggestions">
            {suggestions.map((s, i) => (
              <button className="chip" key={i} onClick={() => send(s)}>
                {s}
              </button>
            ))}
          </div>
        )}

        <div className="tutor-note">
          Guru AI menuntun cara berpikir. Jawaban akhir tetap kamu yang temukan ✨
        </div>

        <div className="composer">
          <textarea
            ref={taRef}
            rows={1}
            placeholder="Tulis pertanyaanmu di sini…"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send(input);
              }
            }}
          />
          <button
            className="send"
            disabled={busy || !input.trim()}
            onClick={() => send(input)}
            aria-label="Kirim"
          >
            <Icon name="send" size={20} />
          </button>
        </div>
      </div>
    </>
  );
}
