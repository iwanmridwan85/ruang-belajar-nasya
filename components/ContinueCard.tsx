"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getLastVisited, type LastVisited } from "@/lib/progress";
import Icon from "./Icon";

export default function ContinueCard() {
  const [last, setLast] = useState<LastVisited>(null);
  useEffect(() => {
    setLast(getLastVisited());
  }, []);

  if (!last) return null;
  return (
    <Link href={`/${last.subject}/${last.code.toLowerCase()}`} className="continue">
      <div className="play">
        <Icon name="play" size={22} />
      </div>
      <div>
        <div className="label">Lanjutkan belajar</div>
        <div className="t">{last.title}</div>
      </div>
    </Link>
  );
}
