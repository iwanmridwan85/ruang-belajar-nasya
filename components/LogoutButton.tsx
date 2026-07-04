"use client";

export default function LogoutButton() {
  async function logout() {
    await fetch("/api/logout", { method: "POST" }).catch(() => {});
    window.location.href = "/login";
  }
  return (
    <button className="logout-btn" onClick={logout}>
      Keluar
    </button>
  );
}
