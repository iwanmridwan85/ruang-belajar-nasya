"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";

export default function BottomNav() {
  const path = usePathname() || "/";
  const onHome = path === "/";
  const onLearn =
    path.startsWith("/matematika") || path.startsWith("/ipa") || path.startsWith("/latihan");
  const onSched = path.startsWith("/jadwal");

  return (
    <nav className="nav">
      <Link href="/" className={onHome ? "on" : ""}>
        <Icon name="home" size={21} />
        Beranda
      </Link>
      <Link href="/matematika" className={onLearn ? "on" : ""}>
        <Icon name="book" size={21} />
        Pelajaran
      </Link>
      <Link href="/jadwal" className={onSched ? "on" : ""}>
        <Icon name="calendar" size={21} />
        Jadwal
      </Link>
    </nav>
  );
}
