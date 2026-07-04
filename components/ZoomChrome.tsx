"use client";
import { useEffect } from "react";

// Saat halaman di-pinch zoom (untuk membaca halaman buku), elemen "fixed"
// seperti tombol Tanya Guru & menu bawah ikut membesar/bergeser (perilaku
// bawaan browser). Di sini kita sembunyikan sementara elemen itu selama zoom,
// dan tampilkan lagi begitu zoom kembali normal.
export default function ZoomChrome() {
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;
    let raf = 0;
    const apply = () => {
      const zoomed = vv.scale > 1.1;
      document.body.classList.toggle("zoomed", zoomed);
    };
    const onChange = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(apply);
    };
    vv.addEventListener("resize", onChange);
    vv.addEventListener("scroll", onChange);
    apply();
    return () => {
      cancelAnimationFrame(raf);
      vv.removeEventListener("resize", onChange);
      vv.removeEventListener("scroll", onChange);
    };
  }, []);
  return null;
}
