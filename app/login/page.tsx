"use client";
import { useState } from "react";
import Icon from "@/components/Icon";

export default function LoginPage() {
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!pw || busy) return;
    setBusy(true);
    setErr("");
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pw }),
      });
      if (res.ok) {
        const next = new URLSearchParams(window.location.search).get("next");
        window.location.href = next && next.startsWith("/") ? next : "/";
      } else {
        const d = await res.json().catch(() => ({}));
        setErr(d.error || "Kata sandi salah");
        setBusy(false);
      }
    } catch {
      setErr("Gagal masuk. Coba lagi.");
      setBusy(false);
    }
  }

  return (
    <main className="login-wrap">
      <div className="login-card">
        <div className="login-logo">
          <Icon name="teacher" size={30} />
        </div>
        <h1>Ruang Belajar</h1>
        <p>Masukkan kata sandi untuk mulai belajar</p>
        <form onSubmit={submit}>
          <input
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="Kata sandi"
            autoFocus
            autoComplete="current-password"
          />
          {err && <div className="login-err">{err}</div>}
          <button className="btn btn-primary btn-block" type="submit" disabled={busy || !pw}>
            {busy ? "Memeriksa…" : "Masuk"}
          </button>
        </form>
      </div>
      <p className="login-foot">Kelas 7 SMP · Kurikulum Merdeka</p>
    </main>
  );
}
