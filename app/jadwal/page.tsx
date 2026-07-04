import ScheduleEditor from "@/components/ScheduleEditor";
import Icon from "@/components/Icon";

export default function JadwalPage() {
  return (
    <main>
      <div className="topbar">
        <div className="back" style={{ background: "transparent", border: "none" }}>
          <Icon name="calendar" size={24} style={{ color: "var(--cy)" }} />
        </div>
        <div>
          <div className="title">Jadwal Pelajaran</div>
          <div className="sub">Senin–Sabtu · bisa diubah kapan saja</div>
        </div>
      </div>

      <section
        className="hero"
        style={{
          background: "linear-gradient(135deg, rgba(251,146,60,.16), rgba(244,63,94,.16))",
          borderColor: "var(--line2)",
        }}
      >
        <h1>Jadwal Sekolah</h1>
        <p>Atur jadwal pelajaran Nasya di sini supaya tidak lupa. Ketuk “Ubah Jadwal” untuk menyesuaikan jam & mata pelajaran.</p>
      </section>

      <ScheduleEditor />

      <p className="footer-note">Jadwal tersimpan otomatis di HP ini.</p>
    </main>
  );
}
