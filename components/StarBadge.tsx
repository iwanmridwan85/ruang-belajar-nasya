"use client";
import { useEffect, useState } from "react";
import { getStars } from "@/lib/progress";
import Icon from "./Icon";

export default function StarBadge() {
  const [stars, setStars] = useState<number | null>(null);
  useEffect(() => {
    const read = () => setStars(getStars());
    read();
    window.addEventListener("rb-progress", read);
    return () => window.removeEventListener("rb-progress", read);
  }, []);

  return (
    <div className="starbig">
      <Icon name="star" size={18} />
      {stars && stars > 0 ? `${stars} bintang terkumpul` : "Semangat belajar hari ini"}
    </div>
  );
}
