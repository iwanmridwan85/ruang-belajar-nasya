// Nama anak untuk sapaan personal. Diatur lewat NEXT_PUBLIC_STUDENT_NAME di .env.local.
export const STUDENT_NAME = process.env.NEXT_PUBLIC_STUDENT_NAME?.trim() || "";

// Sapaan yang aman dipakai walau nama kosong.
export function greetName(fallback = "kamu"): string {
  return STUDENT_NAME || fallback;
}
