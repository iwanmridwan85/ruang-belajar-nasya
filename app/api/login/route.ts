import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function tokenFor(pw: string): Promise<string> {
  const data = new TextEncoder().encode(`rb::${pw}`);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function POST(req: Request) {
  const pw = process.env.APP_PASSWORD || "";
  if (!pw) return NextResponse.json({ ok: true }); // gerbang mati

  let password = "";
  try {
    password = (await req.json())?.password ?? "";
  } catch {
    password = "";
  }
  if (typeof password !== "string" || password !== pw) {
    return NextResponse.json({ ok: false, error: "Kata sandi salah" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set("rb_auth", await tokenFor(pw), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 180, // 180 hari
  });
  return res;
}
