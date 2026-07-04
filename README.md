# 📚 Ruang Belajar — Kelas 7 SMP

Aplikasi belajar interaktif untuk anak Kelas 7 SMP (Kurikulum Merdeka), lengkap dengan
**Guru AI** yang menuntun cara berpikir — **bukan memberi jawaban** — layaknya guru les privat.

- 📖 Materi lengkap **Matematika Semester 1 & 2** (9 bab, 57 topik) diambil dari Buku Siswa Kemdikbud.
- 🧑‍🏫 **Guru AI (Kak Pintar)** — menuntun langkah demi langkah, memuji usaha, tidak membocorkan jawaban.
- ✅ Penanda **topik selesai** & lanjutkan belajar (tersimpan di HP anak).
- 📱 Didesain untuk **HP**, bisa dijalankan di Mac lalu dibuka lewat WiFi rumah.

Mata pelajaran lain (IPA, IPS, dll.) tinggal ditambahkan menyusul.

---

## 1. Menyiapkan API Key (sekali saja)

Guru AI memerlukan API key Claude dari Anthropic.

```bash
cp .env.local.example .env.local
```

Lalu buka file `.env.local`, dan tempel API key Bapak setelah tanda `=`:

```
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxx
```

> API key **hanya disimpan di sisi server (Mac)** dan tidak pernah terlihat oleh anak.
> Kalau belum diisi, aplikasi tetap jalan dalam **Mode Demo**.

## 2. Menjalankan Aplikasi

```bash
npm install      # sekali saja
npm run dev
```

Untuk melihat alamat yang dibuka di HP anak (di terminal terpisah):

```bash
npm run lan
```

Buka alamat `http://192.168.x.x:3300` itu di browser HP anak.
**Pastikan HP dan Mac tersambung ke WiFi yang sama.**

Di Mac sendiri bisa dibuka di `http://localhost:3300`.

## 3. Menambah Aplikasi ke Layar Utama HP (opsional)

Di browser HP: menu **⋮ / Bagikan → "Tambah ke Layar Utama"**. Aplikasi akan
muncul seperti app biasa dengan ikonnya sendiri.

---

## Struktur Materi

- `content/matematika.json` — seluruh materi hasil ekstraksi dari buku (per topik).
  Untuk menambah pelajaran lain, buat file JSON serupa lalu daftarkan di `lib/content.ts`.

## Teknis

Next.js (App Router) + TypeScript. Guru AI memakai Claude (`@anthropic-ai/sdk`)
melalui route `app/api/tutor` dengan *system prompt* khusus mode "guru les".
