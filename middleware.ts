import { NextResponse, type NextRequest } from "next/server";

// Token cookie = SHA-256 dari kata sandi (kata sandi tidak disimpan mentah di cookie).
async function tokenFor(pw: string): Promise<string> {
  const data = new TextEncoder().encode(`rb::${pw}`);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function isPublic(p: string): boolean {
  return (
    p.startsWith("/_next/") ||
    p.startsWith("/materi/") ||
    p === "/manifest.json" ||
    p === "/sw.js" ||
    p === "/favicon.ico" ||
    p === "/robots.txt" ||
    p === "/apple-touch-icon.png" ||
    p.startsWith("/icon")
  );
}

export async function middleware(req: NextRequest) {
  const pw = process.env.APP_PASSWORD || "";
  if (!pw) return NextResponse.next(); // gerbang login mati jika kata sandi belum diatur

  const { pathname } = req.nextUrl;
  if (
    pathname === "/login" ||
    pathname === "/api/login" ||
    pathname === "/api/logout" ||
    isPublic(pathname)
  ) {
    return NextResponse.next();
  }

  const token = req.cookies.get("rb_auth")?.value;
  if (token && token === (await tokenFor(pw))) return NextResponse.next();

  if (pathname.startsWith("/api/")) {
    return new NextResponse("Perlu login.", { status: 401 });
  }
  const url = req.nextUrl.clone();
  url.pathname = "/login";
  url.searchParams.set("next", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
