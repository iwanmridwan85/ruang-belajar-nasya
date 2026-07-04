"use client";
import { useEffect, useState } from "react";
import Icon from "./Icon";

type BIPEvent = Event & { prompt: () => void; userChoice: Promise<{ outcome: string }> };

export default function InstallButton() {
  const [deferred, setDeferred] = useState<BIPEvent | null>(null);
  const [isIos, setIsIos] = useState(false);
  const [installed, setInstalled] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;
    if (standalone) {
      setInstalled(true);
      return;
    }
    const ua = window.navigator.userAgent.toLowerCase();
    setIsIos(/iphone|ipad|ipod/.test(ua));

    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BIPEvent);
    };
    const onInstalled = () => setInstalled(true);
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  if (installed) return null;

  // Android / Chrome: tombol pasang langsung
  if (deferred) {
    return (
      <button
        className="install-cta"
        onClick={async () => {
          deferred.prompt();
          await deferred.userChoice;
          setDeferred(null);
        }}
      >
        <Icon name="download" size={20} /> Pasang aplikasi ke HP
      </button>
    );
  }

  // iPhone/iPad (Safari): tampilkan cara menambah ke Layar Utama
  if (isIos) {
    return (
      <>
        <button className="install-cta" onClick={() => setShowHelp((v) => !v)}>
          <Icon name="download" size={20} /> Pasang ke Layar Utama
        </button>
        {showHelp && (
          <div className="install-help">
            Di Safari, ketuk ikon <b>Bagikan</b> (kotak dengan panah ke atas) di bawah, lalu pilih{" "}
            <b>“Tambah ke Layar Utama”</b>. Ikon aplikasi akan muncul di HP.
          </div>
        )}
      </>
    );
  }

  return null;
}
