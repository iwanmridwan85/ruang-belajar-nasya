"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "./Icon";

// Menampilkan halaman-halaman buku (gambar). Ketuk sebuah halaman untuk
// membukanya di layar penuh, lalu cubit untuk memperbesar & geser — hanya
// halaman materinya yang bisa di-zoom, sedangkan tombol & menu tetap normal.

type Pt = { x: number; y: number };

function ZoomViewer({
  pages,
  start,
  onClose,
  crop,
}: {
  pages: string[];
  start: number;
  onClose: () => void;
  crop?: boolean;
}) {
  const [idx, setIdx] = useState(start);
  const imgRef = useRef<HTMLImageElement>(null);
  const st = useRef({ scale: 1, x: 0, y: 0 });
  const ptrs = useRef(new Map<number, Pt>());
  const pinch = useRef<{ d: number; s: number; m: Pt; x: number; y: number } | null>(null);
  const pan = useRef<{ sx: number; sy: number; x: number; y: number } | null>(null);
  const lastTap = useRef(0);
  const moved = useRef(false);

  const apply = useCallback(() => {
    const el = imgRef.current;
    if (el) {
      const s = st.current;
      el.style.transform = `translate(${s.x}px, ${s.y}px) scale(${s.scale})`;
    }
  }, []);

  const reset = useCallback(() => {
    st.current = { scale: 1, x: 0, y: 0 };
    apply();
  }, [apply]);

  // Kunci scroll latar selama pembaca terbuka.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Reset zoom tiap ganti halaman.
  useEffect(() => {
    reset();
  }, [idx, reset]);

  const dist = (a: Pt, b: Pt) => Math.hypot(a.x - b.x, a.y - b.y);
  const mid = (a: Pt, b: Pt) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });

  const zoomTo = (scale: number) => {
    st.current.scale = Math.min(5, Math.max(1, scale));
    if (st.current.scale === 1) {
      st.current.x = 0;
      st.current.y = 0;
    }
    apply();
  };

  const onDown = (e: React.PointerEvent) => {
    try {
      (e.target as Element).setPointerCapture?.(e.pointerId);
    } catch {
      /* pointer sudah tak aktif — abaikan */
    }
    ptrs.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    moved.current = false;
    if (ptrs.current.size === 2) {
      const [a, b] = [...ptrs.current.values()];
      pinch.current = { d: dist(a, b), s: st.current.scale, m: mid(a, b), x: st.current.x, y: st.current.y };
      pan.current = null;
    } else if (ptrs.current.size === 1) {
      pan.current = { sx: e.clientX, sy: e.clientY, x: st.current.x, y: st.current.y };
    }
  };

  const onMove = (e: React.PointerEvent) => {
    if (!ptrs.current.has(e.pointerId)) return;
    ptrs.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (ptrs.current.size >= 2 && pinch.current) {
      const [a, b] = [...ptrs.current.values()];
      const p = pinch.current;
      st.current.scale = Math.min(5, Math.max(1, (p.s * dist(a, b)) / p.d));
      const m = mid(a, b);
      st.current.x = p.x + (m.x - p.m.x);
      st.current.y = p.y + (m.y - p.m.y);
      moved.current = true;
      apply();
    } else if (ptrs.current.size === 1 && pan.current && st.current.scale > 1) {
      st.current.x = pan.current.x + (e.clientX - pan.current.sx);
      st.current.y = pan.current.y + (e.clientY - pan.current.sy);
      if (Math.abs(e.clientX - pan.current.sx) + Math.abs(e.clientY - pan.current.sy) > 6) moved.current = true;
      apply();
    }
  };

  const onUp = (e: React.PointerEvent) => {
    ptrs.current.delete(e.pointerId);
    pinch.current = null;
    if (ptrs.current.size === 1) {
      const [p] = [...ptrs.current.values()];
      pan.current = { sx: p.x, sy: p.y, x: st.current.x, y: st.current.y };
    } else {
      pan.current = null;
    }
    if (ptrs.current.size === 0) {
      if (st.current.scale <= 1.02) reset();
      // Ketuk dua kali cepat = perbesar / kembali.
      if (!moved.current) {
        const now = e.timeStamp;
        if (now - lastTap.current < 300) {
          zoomTo(st.current.scale > 1 ? 1 : 2.5);
          lastTap.current = 0;
        } else {
          lastTap.current = now;
        }
      }
    }
  };

  return (
    <div className={`viewer${crop ? " crop-top" : ""}`} role="dialog" aria-modal="true">
      <button className="viewer-close" onClick={onClose} aria-label="Tutup">
        <Icon name="close" size={22} />
      </button>
      <div
        className="viewer-stage"
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onClick={(e) => {
          // Ketuk area gelap di luar gambar untuk menutup.
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img ref={imgRef} src={pages[idx]} alt={`Halaman buku ${idx + 1}`} className="viewer-img" draggable={false} />
      </div>
      {idx > 0 && (
        <button className="viewer-nav left" onClick={() => setIdx(idx - 1)} aria-label="Halaman sebelumnya">
          <Icon name="chevL" size={24} />
        </button>
      )}
      {idx < pages.length - 1 && (
        <button className="viewer-nav right" onClick={() => setIdx(idx + 1)} aria-label="Halaman berikutnya">
          <Icon name="chevR" size={24} />
        </button>
      )}
      <div className="viewer-count">
        {idx + 1} / {pages.length}
      </div>
    </div>
  );
}

export default function BookPages({ pages, crop }: { pages: string[]; crop?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <div className={`book-pages${crop ? " crop-top" : ""}`}>
        {pages.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt={`Halaman buku ${i + 1}`}
            loading={i < 2 ? "eager" : "lazy"}
            className="book-page"
            onClick={() => setOpen(i)}
          />
        ))}
        <p className="book-hint">
          <Icon name="zoom" size={15} /> Ketuk halaman untuk memperbesar
        </p>
      </div>
      {open !== null && <ZoomViewer pages={pages} start={open} onClose={() => setOpen(null)} crop={crop} />}
    </>
  );
}
