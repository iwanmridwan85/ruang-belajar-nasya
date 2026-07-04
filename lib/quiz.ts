// Bank soal latihan interaktif Matematika Kelas 7 — per KEGIATAN (topik).
// Key = kode kegiatan (mis. "1.1"). Latihan per bab = gabungan semua kegiatannya.
export type QuizQ = { q: string; options: string[]; answer: string; hint: string };

export const QUIZ_BY_TOPIC: Record<string, QuizQ[]> = {
  // ---------- BAB 1 · Bilangan ----------
  "1.1": [
    { q: "Manakah yang lebih besar, -3 atau -8?", options: ["-3", "-8", "Sama besar", "Tidak bisa dibandingkan"], answer: "-3", hint: "Pada garis bilangan, makin ke kanan makin besar. -3 ada di kanan -8." },
    { q: "Urutan dari yang TERKECIL: 2, -5, 0, -1", options: ["-5, -1, 0, 2", "-1, -5, 0, 2", "2, 0, -1, -5", "0, -1, 2, -5"], answer: "-5, -1, 0, 2", hint: "Bilangan negatif makin besar angkanya justru makin kecil nilainya." },
    { q: "Tanda yang tepat untuk: -7 … 4", options: ["<", ">", "=", "≥"], answer: "<", hint: "Bilangan negatif selalu lebih kecil dari bilangan positif." },
  ],
  "1.2": [
    { q: "Hasil dari -5 + 8 = ?", options: ["3", "-3", "13", "-13"], answer: "3", hint: "Mulai dari -5 lalu maju 8 langkah ke kanan." },
    { q: "Hasil dari 4 - 9 = ?", options: ["-5", "5", "13", "-13"], answer: "-5", hint: "Dari 4 mundur 9 langkah, melewati nol ke daerah negatif." },
    { q: "Hasil dari -6 + (-3) = ?", options: ["-9", "9", "-3", "3"], answer: "-9", hint: "Keduanya negatif, jadi bergerak makin jauh ke kiri." },
  ],
  "1.3": [
    { q: "Hasil dari -6 × (-4) = ?", options: ["24", "-24", "10", "-10"], answer: "24", hint: "Negatif dikali negatif hasilnya positif." },
    { q: "Hasil dari -20 ÷ 5 = ?", options: ["-4", "4", "-15", "15"], answer: "-4", hint: "Negatif dibagi positif hasilnya negatif." },
    { q: "Hasil dari 7 × (-3) = ?", options: ["-21", "21", "-10", "10"], answer: "-21", hint: "Positif dikali negatif hasilnya negatif." },
  ],
  "1.4": [
    { q: "Manakah yang lebih besar, 2/3 atau 3/4?", options: ["3/4", "2/3", "Sama besar", "Tidak bisa"], answer: "3/4", hint: "Samakan penyebut: 8/12 vs 9/12." },
    { q: "Bentuk desimal dari 3/4 adalah…", options: ["0,75", "0,34", "0,43", "0,25"], answer: "0,75", hint: "Bagi 3 dengan 4." },
    { q: "Urutan dari yang TERKECIL: 1/2, 1/4, 3/4", options: ["1/4, 1/2, 3/4", "1/2, 1/4, 3/4", "3/4, 1/2, 1/4", "1/4, 3/4, 1/2"], answer: "1/4, 1/2, 3/4", hint: "Samakan penyebut jadi 4: 2/4, 1/4, 3/4." },
  ],
  "1.5": [
    { q: "Hasil dari 1/4 + 2/4 = ?", options: ["3/4", "3/8", "2/4", "1/2"], answer: "3/4", hint: "Penyebut sama, cukup jumlahkan pembilangnya." },
    { q: "Hasil dari 1/2 + 1/3 = ?", options: ["5/6", "2/5", "1/6", "2/6"], answer: "5/6", hint: "Samakan penyebut jadi 6: 3/6 + 2/6." },
    { q: "Hasil dari 3/5 - 1/5 = ?", options: ["2/5", "4/5", "2/10", "1/5"], answer: "2/5", hint: "Penyebut sama, kurangi pembilangnya." },
  ],
  "1.6": [
    { q: "Hasil dari 2/3 × 3/4 = ?", options: ["1/2", "6/7", "5/12", "6/8"], answer: "1/2", hint: "Kalikan pembilang & penyebut: 6/12 = 1/2." },
    { q: "Hasil dari 1/2 ÷ 1/4 = ?", options: ["2", "1/8", "4", "1/2"], answer: "2", hint: "Membagi pecahan = mengali kebalikannya: 1/2 × 4." },
    { q: "Hasil dari 2/5 × 10 = ?", options: ["4", "20", "5", "2"], answer: "4", hint: "2/5 dari 10 sama dengan (2 × 10) ÷ 5." },
  ],
  "1.7": [
    { q: "Nilai dari 2³ = ?", options: ["8", "6", "9", "5"], answer: "8", hint: "2 × 2 × 2." },
    { q: "Nilai dari 5² = ?", options: ["25", "10", "7", "52"], answer: "25", hint: "5 × 5." },
    { q: "Nilai dari 10⁴ = ?", options: ["10.000", "1.000", "40", "100"], answer: "10.000", hint: "10 × 10 × 10 × 10." },
  ],
  "1.8": [
    { q: "KPK dari 4 dan 6 adalah?", options: ["12", "24", "6", "2"], answer: "12", hint: "Kelipatan 4: 4,8,12… Kelipatan 6: 6,12… yang sama & terkecil = 12." },
    { q: "FPB dari 12 dan 18 adalah?", options: ["6", "3", "2", "12"], answer: "6", hint: "Faktor sekutu terbesar dari 12 dan 18." },
    { q: "KPK dari 3 dan 5 adalah?", options: ["15", "8", "30", "3"], answer: "15", hint: "Kelipatan pertama yang sama dari 3 dan 5." },
  ],

  // ---------- BAB 2 · Himpunan ----------
  "2.1": [
    { q: "A = {1, 2, 3, 4}. Banyak anggota A adalah?", options: ["4", "3", "5", "1"], answer: "4", hint: "Hitung banyak anggota di dalam kurung kurawal." },
    { q: "Lambang “anggota dari” adalah…", options: ["∈", "∉", "⊂", "∪"], answer: "∈", hint: "∈ berarti anggota, ∉ berarti bukan anggota." },
    { q: "Himpunan kosong dilambangkan dengan…", options: ["∅", "∞", "{0}", "U"], answer: "∅", hint: "Himpunan yang tidak punya anggota sama sekali." },
  ],
  "2.2": [
    { q: "Banyak himpunan bagian dari {a, b} adalah?", options: ["4", "2", "3", "1"], answer: "4", hint: "Rumusnya 2ⁿ. Di sini n = 2, jadi 2² = 4." },
    { q: "Himpunan semesta biasanya dilambangkan dengan…", options: ["S atau U", "∅", "∈", "A"], answer: "S atau U", hint: "Semesta memuat semua anggota yang dibicarakan." },
    { q: "{1, 2} ⊂ {1, 2, 3} berarti {1, 2} adalah … dari {1, 2, 3}.", options: ["Himpunan bagian", "Gabungan", "Irisan", "Semesta"], answer: "Himpunan bagian", hint: "Tanda ⊂ berarti himpunan bagian." },
  ],
  "2.3": [
    { q: "A = {1,2,3}, B = {3,4,5}. Maka A ∩ B = ?", options: ["{3}", "{1,2,3,4,5}", "{ }", "{1,2}"], answer: "{3}", hint: "Irisan (∩) = anggota yang ada di KEDUA himpunan." },
    { q: "A = {1,2,3}, B = {3,4,5}. Maka A ∪ B = ?", options: ["{1,2,3,4,5}", "{3}", "{1,2}", "{4,5}"], answer: "{1,2,3,4,5}", hint: "Gabungan (∪) = semua anggota, ditulis sekali." },
    { q: "Simbol untuk gabungan dua himpunan adalah…", options: ["∪", "∩", "∈", "⊂"], answer: "∪", hint: "∪ gabungan, ∩ irisan." },
  ],

  // ---------- BAB 3 · Bentuk Aljabar ----------
  "3.1": [
    { q: "Pada bentuk 5x, angka 5 disebut…", options: ["Koefisien", "Variabel", "Konstanta", "Pangkat"], answer: "Koefisien", hint: "Koefisien = angka di depan variabel." },
    { q: "Pada 3x + 7, angka 7 disebut…", options: ["Konstanta", "Koefisien", "Variabel", "Pangkat"], answer: "Konstanta", hint: "Konstanta = suku yang tidak punya variabel." },
    { q: "Suku yang sejenis dengan 3x adalah…", options: ["5x", "3y", "x²", "7"], answer: "5x", hint: "Sejenis jika variabel & pangkatnya sama." },
  ],
  "3.2": [
    { q: "Hasil dari 2x + 5x = ?", options: ["7x", "10x", "7", "7x²"], answer: "7x", hint: "Jumlahkan koefisien, variabel tetap: 2 + 5 = 7." },
    { q: "Bentuk sederhana dari 4a + 3b - 2a = ?", options: ["2a + 3b", "6a + 3b", "2a - 3b", "5ab"], answer: "2a + 3b", hint: "Gabungkan suku sejenis: 4a - 2a = 2a." },
    { q: "Hasil dari 8y - 3y = ?", options: ["5y", "11y", "5", "24y"], answer: "5y", hint: "8 - 3 = 5, variabel y tetap." },
  ],
  "3.3": [
    { q: "Hasil dari 3(x + 2) = ?", options: ["3x + 6", "3x + 2", "x + 6", "3x + 5"], answer: "3x + 6", hint: "Kalikan 3 ke SETIAP suku dalam kurung." },
    { q: "Hasil dari 2x × 3x = ?", options: ["6x²", "6x", "5x²", "6"], answer: "6x²", hint: "Kali angka (2×3) dan variabel (x·x = x²)." },
    { q: "Hasil dari 2(3a + 4) = ?", options: ["6a + 8", "5a + 6", "6a + 4", "3a + 8"], answer: "6a + 8", hint: "2 × 3a = 6a dan 2 × 4 = 8." },
  ],
  "3.4": [
    { q: "Hasil dari 6x ÷ 2 = ?", options: ["3x", "4x", "3", "12x"], answer: "3x", hint: "Bagi koefisien: 6 ÷ 2 = 3, variabel tetap." },
    { q: "Hasil dari 10a ÷ 5 = ?", options: ["2a", "5a", "15a", "2"], answer: "2a", hint: "10 ÷ 5 = 2." },
    { q: "Hasil dari 8x² ÷ 2x = ?", options: ["4x", "4x²", "6x", "4"], answer: "4x", hint: "8 ÷ 2 = 4, dan x² ÷ x = x." },
  ],
  "3.5": [
    { q: "Hasil dari x/2 + x/2 = ?", options: ["x", "x²", "2x", "x/4"], answer: "x", hint: "Penyebut sama: (x + x)/2 = 2x/2 = x." },
    { q: "Bentuk paling sederhana dari 2x/4 adalah…", options: ["x/2", "2x", "x/4", "4x"], answer: "x/2", hint: "Bagi pembilang & penyebut dengan 2." },
    { q: "Hasil dari 1/x + 2/x = ?", options: ["3/x", "3/2x", "2/x²", "3x"], answer: "3/x", hint: "Penyebut sama (x), jumlahkan pembilang." },
  ],

  // ---------- BAB 4 · Persamaan & Pertidaksamaan ----------
  "4.1": [
    { q: "Manakah yang merupakan Persamaan Linear Satu Variabel?", options: ["x + 3 = 7", "x² = 9", "2x + y = 5", "x³ = 8"], answer: "x + 3 = 7", hint: "Satu variabel dan pangkat tertingginya 1." },
    { q: "Pada x + 5 = 12, yang disebut variabel adalah…", options: ["x", "5", "12", "="], answer: "x", hint: "Variabel = huruf yang nilainya dicari." },
    { q: "Pangkat variabel tertinggi pada PLSV adalah…", options: ["1", "2", "3", "0"], answer: "1", hint: "Linear artinya berpangkat satu." },
  ],
  "4.2": [
    { q: "Nilai x dari x + 5 = 12 adalah?", options: ["7", "17", "5", "12"], answer: "7", hint: "Kurangi 5 di kedua ruas: x = 12 - 5." },
    { q: "Nilai x dari x - 4 = 10 adalah?", options: ["14", "6", "40", "-6"], answer: "14", hint: "Tambahkan 4 di kedua ruas: x = 10 + 4." },
    { q: "Nilai x dari x + 8 = 8 adalah?", options: ["0", "16", "8", "-8"], answer: "0", hint: "Kurangi 8 di kedua ruas." },
  ],
  "4.3": [
    { q: "Nilai x dari 3x = 15 adalah?", options: ["5", "45", "12", "3"], answer: "5", hint: "Bagi kedua ruas dengan 3." },
    { q: "Nilai x dari 2x = 8 adalah?", options: ["4", "16", "6", "10"], answer: "4", hint: "Bagi kedua ruas dengan 2." },
    { q: "Nilai x dari x/2 = 6 adalah?", options: ["12", "3", "8", "4"], answer: "12", hint: "Kalikan kedua ruas dengan 2." },
  ],
  "4.4": [
    { q: "Tanda “lebih dari” pada pertidaksamaan adalah…", options: [">", "<", "=", "≥"], answer: ">", hint: "Mulut tanda menghadap ke bilangan yang lebih besar." },
    { q: "“x kurang dari 5” ditulis sebagai…", options: ["x < 5", "x > 5", "x = 5", "x ≤ 5"], answer: "x < 5", hint: "Kurang dari = tanda <." },
    { q: "Tanda “≥” dibaca…", options: ["Lebih dari atau sama dengan", "Kurang dari", "Lebih dari", "Tidak sama dengan"], answer: "Lebih dari atau sama dengan", hint: "Garis di bawah tanda berarti 'atau sama dengan'." },
  ],
  "4.5": [
    { q: "Jika x + 3 > 7, maka x > …", options: ["4", "10", "3", "7"], answer: "4", hint: "Kurangi 3 di kedua ruas: x > 7 - 3." },
    { q: "Jika 2x < 10, maka x < …", options: ["5", "20", "8", "12"], answer: "5", hint: "Bagi kedua ruas dengan 2." },
    { q: "Jika x - 2 ≥ 3, maka x ≥ …", options: ["5", "1", "6", "3"], answer: "5", hint: "Tambahkan 2 di kedua ruas." },
  ],

  // ---------- BAB 5 · Perbandingan ----------
  "5.1": [
    { q: "Perbandingan 4 : 8 jika disederhanakan menjadi…", options: ["1 : 2", "2 : 4", "4 : 1", "1 : 4"], answer: "1 : 2", hint: "Bagi kedua bilangan dengan FPB-nya (4)." },
    { q: "Dari 10 siswa, 6 perempuan. Perbandingan perempuan : laki-laki adalah…", options: ["3 : 2", "2 : 3", "6 : 10", "3 : 5"], answer: "3 : 2", hint: "Perempuan 6, laki-laki 4 → 6 : 4 = 3 : 2." },
    { q: "Perbandingan 15 : 20 disederhanakan menjadi…", options: ["3 : 4", "4 : 3", "15 : 20", "5 : 4"], answer: "3 : 4", hint: "Bagi kedua bilangan dengan 5." },
  ],
  "5.2": [
    { q: "1 jam : 30 menit = … (samakan satuan dulu)", options: ["2 : 1", "1 : 30", "1 : 2", "30 : 1"], answer: "2 : 1", hint: "1 jam = 60 menit → 60 : 30 = 2 : 1." },
    { q: "1 m : 50 cm = …", options: ["2 : 1", "1 : 50", "1 : 2", "50 : 1"], answer: "2 : 1", hint: "1 m = 100 cm → 100 : 50 = 2 : 1." },
    { q: "2 kg : 500 g = …", options: ["4 : 1", "2 : 500", "1 : 4", "2 : 5"], answer: "4 : 1", hint: "2 kg = 2000 g → 2000 : 500 = 4 : 1." },
  ],
  "5.3": [
    { q: "2 pensil harganya Rp3.000. Harga 6 pensil adalah…", options: ["Rp9.000", "Rp6.000", "Rp12.000", "Rp3.000"], answer: "Rp9.000", hint: "6 pensil = 3 kali lipat dari 2 pensil." },
    { q: "5 buku harganya Rp20.000. Harga 1 buku adalah…", options: ["Rp4.000", "Rp5.000", "Rp20.000", "Rp2.000"], answer: "Rp4.000", hint: "Bagi total dengan banyak buku: 20.000 ÷ 5." },
    { q: "Ciri perbandingan senilai: jika satu bertambah, yang lain…", options: ["Ikut bertambah", "Berkurang", "Tetap", "Menjadi nol"], answer: "Ikut bertambah", hint: "Dua besaran naik/turun bersama-sama." },
  ],
  "5.4": [
    { q: "Skala 1 : 1.000. Jarak di peta 3 cm, jarak sebenarnya…", options: ["3.000 cm", "300 cm", "30 cm", "1.000 cm"], answer: "3.000 cm", hint: "Kalikan jarak peta dengan skala: 3 × 1.000." },
    { q: "Skala 1 : 500 artinya 1 cm di peta sama dengan … sebenarnya.", options: ["500 cm", "5 cm", "50 cm", "5.000 cm"], answer: "500 cm", hint: "Angka belakang skala = jarak sebenarnya untuk tiap 1 cm peta." },
    { q: "Jarak sebenarnya 2 km, skala 1 : 100.000. Jarak di peta…", options: ["2 cm", "20 cm", "200 cm", "0,2 cm"], answer: "2 cm", hint: "2 km = 200.000 cm, lalu bagi 100.000." },
  ],
  "5.5": [
    { q: "“Makin banyak pekerja, makin cepat selesai” termasuk perbandingan…", options: ["Berbalik nilai", "Senilai", "Sama", "Tidak ada"], answer: "Berbalik nilai", hint: "Satu naik, yang lain turun → berbalik nilai." },
    { q: "4 orang menyelesaikan pekerjaan dalam 6 hari. 8 orang selesai dalam…", options: ["3 hari", "12 hari", "6 hari", "2 hari"], answer: "3 hari", hint: "Pekerja 2 kali lipat → waktu menjadi setengahnya." },
    { q: "Pada perbandingan berbalik nilai, jika satu besaran naik, yang lain…", options: ["Turun", "Naik", "Tetap", "Nol"], answer: "Turun", hint: "Berlawanan arah." },
  ],

  // ---------- BAB 6 · Aritmetika Sosial ----------
  "6.1": [
    { q: "Beli Rp8.000, jual Rp10.000. Maka penjual…", options: ["Untung Rp2.000", "Rugi Rp2.000", "Impas", "Untung Rp18.000"], answer: "Untung Rp2.000", hint: "Untung = harga jual - harga beli." },
    { q: "Beli Rp10.000, jual Rp7.000. Maka penjual…", options: ["Rugi Rp3.000", "Untung Rp3.000", "Impas", "Rugi Rp7.000"], answer: "Rugi Rp3.000", hint: "Rugi jika harga jual lebih kecil dari harga beli." },
    { q: "Rumus untung yang benar adalah…", options: ["Harga jual - harga beli", "Harga beli - harga jual", "Harga jual + harga beli", "Harga beli ÷ 2"], answer: "Harga jual - harga beli", hint: "Selisih jual dikurangi beli, bila hasilnya positif." },
  ],
  "6.2": [
    { q: "Bunga 10% per tahun dari tabungan Rp100.000 adalah…", options: ["Rp10.000", "Rp1.000", "Rp110.000", "Rp100"], answer: "Rp10.000", hint: "Hitung 10/100 × 100.000." },
    { q: "Tabungan Rp200.000, bunga 5% per tahun. Bunga 1 tahun…", options: ["Rp10.000", "Rp5.000", "Rp20.000", "Rp210.000"], answer: "Rp10.000", hint: "5/100 × 200.000." },
    { q: "Bunga tunggal selalu dihitung dari…", options: ["Modal awal", "Bunga sebelumnya", "Total tiap bulan", "Diskon"], answer: "Modal awal", hint: "Ciri bunga tunggal: dasar perhitungan tetap = modal awal." },
  ],
  "6.3": [
    { q: "Hubungan yang benar adalah…", options: ["Bruto = neto + tara", "Bruto = neto - tara", "Neto = bruto + tara", "Tara = bruto + neto"], answer: "Bruto = neto + tara", hint: "Berat kotor = isi + wadah." },
    { q: "Neto adalah…", options: ["Berat isi", "Berat kotor", "Berat wadah", "Harga jual"], answer: "Berat isi", hint: "Neto = berat bersih isinya saja." },
    { q: "Bruto 25 kg, tara 1 kg. Maka neto…", options: ["24 kg", "26 kg", "25 kg", "1 kg"], answer: "24 kg", hint: "Neto = bruto - tara." },
  ],

  // ---------- BAB 7 · Garis dan Sudut ----------
  "7.1": [
    { q: "Dua garis yang tidak pernah berpotongan disebut…", options: ["Sejajar", "Berpotongan", "Tegak lurus", "Berimpit"], answer: "Sejajar", hint: "Selalu berjarak sama, tak pernah bertemu." },
    { q: "Dua garis yang berpotongan membentuk sudut 90° disebut…", options: ["Tegak lurus", "Sejajar", "Berimpit", "Sudut lurus"], answer: "Tegak lurus", hint: "Membentuk sudut siku-siku." },
    { q: "Simbol untuk dua garis sejajar adalah…", options: ["//", "⊥", "∠", "="], answer: "//", hint: "⊥ untuk tegak lurus, // untuk sejajar." },
  ],
  "7.2": [
    { q: "Ruas garis 12 cm dibagi 3 bagian sama panjang. Tiap bagian…", options: ["4 cm", "3 cm", "6 cm", "36 cm"], answer: "4 cm", hint: "12 ÷ 3." },
    { q: "Titik yang membagi ruas garis menjadi 2 bagian sama panjang disebut…", options: ["Titik tengah", "Titik ujung", "Titik potong", "Titik sudut"], answer: "Titik tengah", hint: "Berada tepat di tengah ruas garis." },
    { q: "Ruas garis 20 cm dibagi 4 bagian sama panjang. Tiap bagian…", options: ["5 cm", "4 cm", "16 cm", "80 cm"], answer: "5 cm", hint: "20 ÷ 4." },
  ],
  "7.3": [
    { q: "Sudut yang besarnya tepat 90° disebut sudut…", options: ["Siku-siku", "Lancip", "Tumpul", "Lurus"], answer: "Siku-siku", hint: "Seperti sudut pojok buku." },
    { q: "Sudut yang besarnya kurang dari 90° disebut sudut…", options: ["Lancip", "Tumpul", "Siku-siku", "Refleks"], answer: "Lancip", hint: "Lebih runcing dari sudut siku-siku." },
    { q: "Sudut yang besarnya antara 90° dan 180° disebut sudut…", options: ["Tumpul", "Lancip", "Siku-siku", "Lurus"], answer: "Tumpul", hint: "Lebih besar dari siku-siku, lebih kecil dari lurus." },
  ],
  "7.4": [
    { q: "Dua sudut yang saling berpelurus jumlahnya…", options: ["180°", "90°", "360°", "100°"], answer: "180°", hint: "Berpelurus = membentuk garis lurus." },
    { q: "Dua sudut yang saling berpenyiku jumlahnya…", options: ["90°", "180°", "45°", "360°"], answer: "90°", hint: "Berpenyiku = membentuk sudut siku-siku." },
    { q: "Pelurus dari sudut 120° adalah…", options: ["60°", "240°", "30°", "80°"], answer: "60°", hint: "180° - 120°." },
  ],
  "7.5": [
    { q: "Berikut yang termasuk sudut istimewa adalah…", options: ["60°", "57°", "110°", "23°"], answer: "60°", hint: "Sudut istimewa antara lain 30°, 45°, 60°, 90°." },
    { q: "Sudut 45° dapat diperoleh dari membagi dua sudut…", options: ["90°", "180°", "60°", "30°"], answer: "90°", hint: "45° adalah setengah dari sudut siku-siku." },
    { q: "Alat untuk MELUKIS sudut istimewa secara tepat adalah…", options: ["Jangka & penggaris", "Kalkulator", "Timbangan", "Meteran"], answer: "Jangka & penggaris", hint: "Melukis (bukan mengukur) memakai jangka dan penggaris." },
  ],

  // ---------- BAB 8 · Segiempat dan Segitiga ----------
  "8.1": [
    { q: "Bangun datar yang memiliki 3 sisi disebut…", options: ["Segitiga", "Segiempat", "Lingkaran", "Persegi"], answer: "Segitiga", hint: "Awalan 'segi-tiga' = tiga sisi." },
    { q: "Persegi termasuk bangun…", options: ["Segiempat", "Segitiga", "Lingkaran", "Segilima"], answer: "Segiempat", hint: "Punya 4 sisi." },
    { q: "Banyak sisi pada persegi panjang adalah…", options: ["4", "3", "5", "6"], answer: "4", hint: "Dua panjang dan dua lebar." },
  ],
  "8.2": [
    { q: "Bangun dengan 4 sisi sama panjang dan 4 sudut siku-siku adalah…", options: ["Persegi", "Persegi panjang", "Trapesium", "Jajargenjang"], answer: "Persegi", hint: "Semua sisi sama + semua sudut 90°." },
    { q: "Bangun dengan sisi berhadapan sejajar & sama serta bersudut siku-siku adalah…", options: ["Persegi panjang", "Belah ketupat", "Trapesium", "Layang-layang"], answer: "Persegi panjang", hint: "Panjang dan lebar berbeda, tapi semua sudut 90°." },
    { q: "Segiempat yang memiliki tepat sepasang sisi sejajar adalah…", options: ["Trapesium", "Persegi", "Jajargenjang", "Belah ketupat"], answer: "Trapesium", hint: "Hanya satu pasang sisi yang sejajar." },
  ],
  "8.3": [
    { q: "Luas persegi dengan sisi 5 cm adalah…", options: ["25 cm²", "10 cm²", "20 cm²", "15 cm²"], answer: "25 cm²", hint: "Luas persegi = sisi × sisi." },
    { q: "Keliling persegi panjang dengan p = 6, l = 4 adalah…", options: ["20", "24", "10", "48"], answer: "20", hint: "Keliling = 2 × (p + l)." },
    { q: "Luas persegi panjang dengan p = 8, l = 3 adalah…", options: ["24", "22", "11", "16"], answer: "24", hint: "Luas = p × l." },
  ],
  "8.4": [
    { q: "Segitiga yang ketiga sisinya sama panjang disebut segitiga…", options: ["Sama sisi", "Sama kaki", "Sembarang", "Siku-siku"], answer: "Sama sisi", hint: "Semua sisi (dan sudut) sama." },
    { q: "Segitiga yang salah satu sudutnya 90° disebut segitiga…", options: ["Siku-siku", "Lancip", "Tumpul", "Sama sisi"], answer: "Siku-siku", hint: "Punya satu sudut siku-siku." },
    { q: "Jumlah besar ketiga sudut segitiga adalah…", options: ["180°", "360°", "90°", "270°"], answer: "180°", hint: "Berlaku untuk semua jenis segitiga." },
  ],
  "8.5": [
    { q: "Luas segitiga dengan alas 8 cm dan tinggi 5 cm adalah…", options: ["20 cm²", "40 cm²", "13 cm²", "80 cm²"], answer: "20 cm²", hint: "Luas segitiga = ½ × alas × tinggi." },
    { q: "Keliling segitiga dengan sisi 3, 4, dan 5 adalah…", options: ["12", "60", "7", "20"], answer: "12", hint: "Keliling = jumlah semua sisi." },
    { q: "Luas segitiga dengan alas 10 cm dan tinggi 6 cm adalah…", options: ["30 cm²", "60 cm²", "16 cm²", "300 cm²"], answer: "30 cm²", hint: "½ × 10 × 6." },
  ],
  "8.6": [
    { q: "Garis dari titik sudut yang tegak lurus terhadap sisi di depannya disebut…", options: ["Garis tinggi", "Garis berat", "Garis bagi", "Garis sumbu"], answer: "Garis tinggi", hint: "Membentuk sudut siku-siku dengan sisi alas." },
    { q: "Garis yang membagi sudut menjadi dua sama besar disebut…", options: ["Garis bagi", "Garis tinggi", "Garis berat", "Garis sumbu"], answer: "Garis bagi", hint: "Membagi sudut jadi dua bagian sama." },
    { q: "Garis dari titik sudut ke tengah sisi di depannya disebut…", options: ["Garis berat", "Garis tinggi", "Garis bagi", "Garis sumbu"], answer: "Garis berat", hint: "Menuju titik tengah sisi seberang." },
  ],
  "8.7": [
    { q: "Untuk menaksir luas bangun tidak beraturan (mis. daun) biasanya digunakan…", options: ["Kertas berpetak", "Busur derajat", "Jangka", "Timbangan"], answer: "Kertas berpetak", hint: "Hitung banyak petak yang tertutup bangun." },
    { q: "Kata “menaksir” berarti…", options: ["Memperkirakan", "Menghitung pasti", "Menimbang", "Menggambar"], answer: "Memperkirakan", hint: "Hasilnya perkiraan, bukan nilai pasti." },
    { q: "Petak yang tertutup lebih dari setengah biasanya dihitung sebagai…", options: ["1 petak penuh", "0 petak", "½ petak", "2 petak"], answer: "1 petak penuh", hint: "Aturan pembulatan saat menaksir dengan petak." },
  ],

  // ---------- BAB 9 · Penyajian Data ----------
  "9.1": [
    { q: "Data tinggi badan siswa termasuk data berupa…", options: ["Angka (kuantitatif)", "Warna", "Nama", "Gambar"], answer: "Angka (kuantitatif)", hint: "Data berupa bilangan hasil pengukuran." },
    { q: "Kumpulan keterangan atau fakta disebut…", options: ["Data", "Diagram", "Grafik", "Tabel"], answer: "Data", hint: "Bahan mentah yang akan diolah dan disajikan." },
    { q: "Salah satu cara mengumpulkan data adalah…", options: ["Wawancara & angket", "Menggambar", "Menghitung sudut", "Menimbang berat"], answer: "Wawancara & angket", hint: "Bertanya langsung atau memberi kuesioner." },
  ],
  "9.2": [
    { q: "Banyaknya suatu nilai data muncul disebut…", options: ["Frekuensi", "Modus", "Rata-rata", "Median"], answer: "Frekuensi", hint: "Frekuensi = berapa kali data itu muncul." },
    { q: "Tabel yang mencatat data beserta banyak kemunculannya disebut tabel…", options: ["Frekuensi", "Perkalian", "Sudut", "Skala"], answer: "Frekuensi", hint: "Namanya sesuai isi kolomnya." },
    { q: "Jika nilai 8 muncul sebanyak 5 kali, maka frekuensinya…", options: ["5", "8", "40", "13"], answer: "5", hint: "Frekuensi = banyak kemunculan (5 kali)." },
  ],
  "9.3": [
    { q: "Diagram batang paling cocok digunakan untuk…", options: ["Membandingkan jumlah", "Menunjukkan bagian", "Data lokasi", "Menampilkan warna"], answer: "Membandingkan jumlah", hint: "Tinggi batang mudah dibandingkan." },
    { q: "Pada diagram batang, tinggi batang menunjukkan…", options: ["Banyaknya data", "Warna", "Nama", "Waktu"], answer: "Banyaknya data", hint: "Makin tinggi batang, makin banyak datanya." },
    { q: "Batang-batang pada diagram batang biasanya digambar…", options: ["Terpisah/berjarak", "Menyambung rapat", "Melingkar", "Miring"], answer: "Terpisah/berjarak", hint: "Ada jarak antar batang." },
  ],
  "9.4": [
    { q: "Diagram garis paling cocok untuk data yang…", options: ["Berubah terhadap waktu", "Berupa bagian", "Selalu tetap", "Berupa nama"], answer: "Berubah terhadap waktu", hint: "Contoh: suhu tiap jam, nilai tiap bulan." },
    { q: "Pada diagram garis, titik-titik data dihubungkan dengan…", options: ["Garis", "Batang", "Juring", "Lingkaran"], answer: "Garis", hint: "Sesuai namanya, diagram garis." },
    { q: "Contoh data yang cocok disajikan dengan diagram garis adalah…", options: ["Suhu badan tiap jam", "Warna favorit", "Jenis kelamin", "Nama hari"], answer: "Suhu badan tiap jam", hint: "Data yang berubah menurut waktu." },
  ],
  "9.5": [
    { q: "Diagram lingkaran paling tepat menunjukkan…", options: ["Bagian dari keseluruhan", "Perubahan waktu", "Jarak", "Berat"], answer: "Bagian dari keseluruhan", hint: "Menunjukkan proporsi/persentase tiap bagian." },
    { q: "Satu lingkaran penuh besar sudutnya adalah…", options: ["360°", "180°", "90°", "100°"], answer: "360°", hint: "Dipakai untuk menghitung sudut juring." },
    { q: "Jika suatu bagian bernilai 50% dari data, sudut juringnya…", options: ["180°", "90°", "360°", "50°"], answer: "180°", hint: "50% × 360° = 180°." },
  ],
};

export function getTopicQuiz(code: string): QuizQ[] {
  return QUIZ_BY_TOPIC[code] || [];
}

export function hasTopicQuiz(code: string): boolean {
  return (QUIZ_BY_TOPIC[code]?.length || 0) > 0;
}

// ================= LATIHAN BERTINGKAT (3 LEVEL) PER BAB =================
export type Level = "mudah" | "menengah" | "sulit";

export const LEVELS: { key: Level; label: string; color: string; icon: string; desc: string }[] = [
  { key: "mudah", label: "Mudah", color: "#34e2a4", icon: "spark", desc: "Soal dasar untuk pemanasan" },
  { key: "menengah", label: "Menengah", color: "#22d3ee", icon: "star", desc: "Soal standar sesuai materi" },
  { key: "sulit", label: "Sulit", color: "#f472b6", icon: "trophy", desc: "Soal cerita & tantangan" },
];

export const QUIZ_BY_LEVEL: Record<number, Record<Level, QuizQ[]>> = {
  1: {
    mudah: [
      { q: "Manakah yang lebih besar, -3 atau -8?", options: ["-3", "-8", "Sama besar", "Tidak bisa"], answer: "-3", hint: "Makin ke kanan garis bilangan makin besar." },
      { q: "Nilai dari 2³ adalah…", options: ["8", "6", "9", "5"], answer: "8", hint: "2 × 2 × 2." },
      { q: "FPB dari 12 dan 18 adalah…", options: ["6", "3", "2", "12"], answer: "6", hint: "Faktor sekutu terbesar." },
      { q: "Lawan (invers) dari bilangan 5 adalah…", options: ["-5", "1/5", "0", "5"], answer: "-5", hint: "Lawan bilangan positif adalah negatifnya." },
    ],
    menengah: [
      { q: "Hasil dari -5 + 8 - 3 = ?", options: ["0", "-6", "6", "16"], answer: "0", hint: "Kerjakan urut: -5 + 8 = 3, lalu 3 - 3." },
      { q: "Hasil dari -6 × (-4) ÷ 2 = ?", options: ["12", "-12", "48", "3"], answer: "12", hint: "-6 × -4 = 24, lalu 24 ÷ 2." },
      { q: "KPK dari 4 dan 6 adalah…", options: ["12", "24", "6", "2"], answer: "12", hint: "Kelipatan sama yang terkecil." },
      { q: "Hasil dari 2/3 + 1/6 = ?", options: ["5/6", "3/9", "2/6", "3/6"], answer: "5/6", hint: "Samakan penyebut jadi 6: 4/6 + 1/6." },
    ],
    sulit: [
      { q: "Suhu mula-mula -4°C, naik 7°C, lalu turun 5°C. Suhu akhir…", options: ["-2°C", "2°C", "-16°C", "8°C"], answer: "-2°C", hint: "-4 + 7 - 5." },
      { q: "Penyelam di kedalaman -12 m, naik 5 m, lalu turun 8 m. Posisi akhir…", options: ["-15 m", "-1 m", "15 m", "-25 m"], answer: "-15 m", hint: "-12 + 5 - 8." },
      { q: "Bus lewat tiap 15 menit, kereta tiap 20 menit, bersamaan pukul 07:00. Bersamaan lagi pukul…", options: ["08:00", "07:35", "09:00", "07:30"], answer: "08:00", hint: "Cari KPK 15 & 20 = 60 menit." },
      { q: "Nilai dari 2³ + 3² = ?", options: ["17", "13", "25", "36"], answer: "17", hint: "8 + 9." },
    ],
  },
  2: {
    mudah: [
      { q: "A = {1,2,3,4}. Banyak anggota A…", options: ["4", "3", "5", "1"], answer: "4", hint: "Hitung anggota dalam kurung." },
      { q: "Lambang “anggota dari” adalah…", options: ["∈", "∉", "⊂", "∪"], answer: "∈", hint: "∈ = anggota." },
      { q: "Himpunan kosong dilambangkan…", options: ["∅", "∞", "{0}", "U"], answer: "∅", hint: "Tanpa anggota sama sekali." },
      { q: "Bilangan asli genap kurang dari 8 adalah…", options: ["{2,4,6}", "{0,2,4,6}", "{2,4,6,8}", "{1,3,5,7}"], answer: "{2,4,6}", hint: "Genap dan < 8." },
    ],
    menengah: [
      { q: "A={1,2,3}, B={3,4,5}. A ∩ B = ?", options: ["{3}", "{1,2,3,4,5}", "{ }", "{1,2}"], answer: "{3}", hint: "Irisan = anggota yang sama." },
      { q: "A={1,2,3}, B={3,4,5}. A ∪ B = ?", options: ["{1,2,3,4,5}", "{3}", "{1,2}", "{4,5}"], answer: "{1,2,3,4,5}", hint: "Gabungan = semua anggota." },
      { q: "Banyak himpunan bagian dari {a,b,c} adalah…", options: ["8", "6", "3", "9"], answer: "8", hint: "2ⁿ = 2³." },
      { q: "S = {1,2,…,10}, A = himpunan genap. Komplemen Aᶜ = ?", options: ["{1,3,5,7,9}", "{2,4,6,8,10}", "{ }", "{1,…,10}"], answer: "{1,3,5,7,9}", hint: "Anggota S yang bukan anggota A." },
    ],
    sulit: [
      { q: "Dari 30 siswa, 18 suka Matematika, 15 suka IPA, 8 suka keduanya. Yang suka Matematika SAJA…", options: ["10", "18", "26", "8"], answer: "10", hint: "18 - 8." },
      { q: "Data sama (30 siswa). Yang TIDAK suka keduanya…", options: ["5", "7", "3", "25"], answer: "5", hint: "Suka salah satu = 18 + 15 - 8 = 25; sisanya 30 - 25." },
      { q: "Dari 25 anak, 14 ikut basket, 11 ikut voli, 5 ikut keduanya. Ikut basket saja…", options: ["9", "14", "5", "6"], answer: "9", hint: "14 - 5." },
      { q: "Banyak himpunan bagian dari {a,b} yang memiliki tepat 1 anggota…", options: ["2", "1", "4", "3"], answer: "2", hint: "Yaitu {a} dan {b}." },
    ],
  },
  3: {
    mudah: [
      { q: "Hasil 2x + 5x = ?", options: ["7x", "10x", "7", "7x²"], answer: "7x", hint: "Jumlahkan koefisien." },
      { q: "Koefisien dari 7y adalah…", options: ["7", "y", "1", "0"], answer: "7", hint: "Angka di depan variabel." },
      { q: "Hasil 3(x + 2) = ?", options: ["3x + 6", "3x + 2", "x + 6", "3x + 5"], answer: "3x + 6", hint: "Kalikan 3 ke tiap suku." },
      { q: "Suku sejenis dengan 3x adalah…", options: ["5x", "3y", "x²", "7"], answer: "5x", hint: "Variabel & pangkat sama." },
    ],
    menengah: [
      { q: "Hasil 2x × 3x = ?", options: ["6x²", "6x", "5x²", "6"], answer: "6x²", hint: "2×3 dan x·x." },
      { q: "Sederhanakan 4a + 3b - 2a = ?", options: ["2a + 3b", "6a + 3b", "2a - 3b", "5ab"], answer: "2a + 3b", hint: "Gabungkan suku sejenis." },
      { q: "Hasil 8x² ÷ 2x = ?", options: ["4x", "4x²", "6x", "4"], answer: "4x", hint: "8÷2 dan x²÷x." },
      { q: "Sederhanakan 5x - 2 + 3x + 4 = ?", options: ["8x + 2", "8x + 6", "8x - 2", "7x + 2"], answer: "8x + 2", hint: "5x+3x dan -2+4." },
    ],
    sulit: [
      { q: "Hasil (2x + 3) + (x - 5) = ?", options: ["3x - 2", "3x + 8", "x - 2", "2x - 2"], answer: "3x - 2", hint: "2x+x dan 3-5." },
      { q: "Jika x = 3, nilai dari 2x² + 5 = ?", options: ["23", "41", "17", "11"], answer: "23", hint: "2 × 9 + 5." },
      { q: "Hasil 3(2x - 1) + 2(x + 4) = ?", options: ["8x + 5", "8x + 3", "6x + 5", "8x - 5"], answer: "8x + 5", hint: "6x - 3 + 2x + 8." },
      { q: "Keliling persegi panjang p = (x+3), l = (x-1). Kelilingnya…", options: ["4x + 4", "2x + 2", "4x + 2", "4x - 4"], answer: "4x + 4", hint: "2 × ((x+3) + (x-1)) = 2(2x+2)." },
    ],
  },
  4: {
    mudah: [
      { q: "Nilai x dari x + 5 = 12 adalah…", options: ["7", "17", "5", "12"], answer: "7", hint: "Kurangi 5." },
      { q: "Nilai x dari 3x = 15 adalah…", options: ["5", "45", "12", "3"], answer: "5", hint: "Bagi 3." },
      { q: "Tanda “lebih dari” adalah…", options: [">", "<", "=", "≥"], answer: ">", hint: "Mulut tanda ke bilangan besar." },
      { q: "Nilai x dari x - 4 = 10 adalah…", options: ["14", "6", "40", "-6"], answer: "14", hint: "Tambah 4." },
    ],
    menengah: [
      { q: "Nilai x dari 2x + 1 = 9 adalah…", options: ["4", "5", "3", "8"], answer: "4", hint: "2x = 8." },
      { q: "Nilai x dari 3x - 2 = 13 adalah…", options: ["5", "4", "6", "3"], answer: "5", hint: "3x = 15." },
      { q: "Nilai x dari x/2 = 6 adalah…", options: ["12", "3", "8", "4"], answer: "12", hint: "Kali 2." },
      { q: "Jika 2x < 10, maka x < …", options: ["5", "20", "8", "12"], answer: "5", hint: "Bagi 2." },
    ],
    sulit: [
      { q: "Umur Ani 3 tahun lebih tua dari Budi. Jumlah umur mereka 21. Umur Budi…", options: ["9", "12", "18", "6"], answer: "9", hint: "b + (b + 3) = 21 → 2b = 18." },
      { q: "Keliling persegi 32 cm. Panjang sisinya…", options: ["8 cm", "16 cm", "4 cm", "128 cm"], answer: "8 cm", hint: "4 × sisi = 32." },
      { q: "Nilai x dari 5x + 3 = 2x + 18 adalah…", options: ["5", "7", "3", "6"], answer: "5", hint: "Pindahkan: 3x = 15." },
      { q: "Suatu bilangan dikali 3 lalu ditambah 4, hasilnya 19. Bilangan itu…", options: ["5", "7", "6", "15"], answer: "5", hint: "3x + 4 = 19 → 3x = 15." },
    ],
  },
  5: {
    mudah: [
      { q: "Perbandingan 4 : 8 disederhanakan menjadi…", options: ["1 : 2", "2 : 4", "4 : 1", "1 : 4"], answer: "1 : 2", hint: "Bagi dengan 4." },
      { q: "2 pensil Rp3.000. Harga 6 pensil…", options: ["Rp9.000", "Rp6.000", "Rp12.000", "Rp3.000"], answer: "Rp9.000", hint: "3 kali lipat." },
      { q: "Skala 1 : 1.000, jarak peta 3 cm. Jarak asli…", options: ["3.000 cm", "300 cm", "30 cm", "1.000 cm"], answer: "3.000 cm", hint: "3 × 1.000." },
      { q: "Perbandingan 15 : 20 = …", options: ["3 : 4", "4 : 3", "15 : 20", "5 : 4"], answer: "3 : 4", hint: "Bagi 5." },
    ],
    menengah: [
      { q: "1 jam : 30 menit = …", options: ["2 : 1", "1 : 30", "1 : 2", "30 : 1"], answer: "2 : 1", hint: "1 jam = 60 menit." },
      { q: "5 buku Rp20.000. Harga 8 buku…", options: ["Rp32.000", "Rp25.000", "Rp40.000", "Rp16.000"], answer: "Rp32.000", hint: "1 buku Rp4.000 × 8." },
      { q: "4 pekerja selesai 6 hari. 8 pekerja selesai…", options: ["3 hari", "12 hari", "6 hari", "2 hari"], answer: "3 hari", hint: "Berbalik nilai: pekerja 2× → waktu ½." },
      { q: "2 kg : 500 g = …", options: ["4 : 1", "2 : 500", "1 : 4", "2 : 5"], answer: "4 : 1", hint: "2 kg = 2000 g." },
    ],
    sulit: [
      { q: "Resep 2 gelas tepung untuk 12 kue. Untuk 30 kue butuh…", options: ["5 gelas", "6 gelas", "4 gelas", "10 gelas"], answer: "5 gelas", hint: "(30 ÷ 12) × 2." },
      { q: "Mobil 60 km/jam menempuh 180 km dalam…", options: ["3 jam", "2 jam", "4 jam", "120 jam"], answer: "3 jam", hint: "180 ÷ 60." },
      { q: "Uang Adi : Budi = 3 : 5. Uang Budi Rp50.000. Uang Adi…", options: ["Rp30.000", "Rp50.000", "Rp15.000", "Rp80.000"], answer: "Rp30.000", hint: "1 bagian = Rp10.000, Adi 3 bagian." },
      { q: "6 orang membangun pagar 10 hari. Agar selesai 5 hari butuh…", options: ["12 orang", "3 orang", "15 orang", "30 orang"], answer: "12 orang", hint: "Berbalik: 6 × 10 = 60, lalu ÷ 5." },
    ],
  },
  6: {
    mudah: [
      { q: "Beli Rp8.000, jual Rp10.000. Penjual…", options: ["Untung Rp2.000", "Rugi Rp2.000", "Impas", "Untung Rp18.000"], answer: "Untung Rp2.000", hint: "Jual - beli." },
      { q: "Beli Rp10.000, jual Rp7.000. Penjual…", options: ["Rugi Rp3.000", "Untung Rp3.000", "Impas", "Rugi Rp7.000"], answer: "Rugi Rp3.000", hint: "Jual < beli." },
      { q: "Bruto = neto + …", options: ["Tara", "Untung", "Rugi", "Diskon"], answer: "Tara", hint: "Kotor = isi + wadah." },
      { q: "Neto adalah…", options: ["Berat isi", "Berat kotor", "Berat wadah", "Harga"], answer: "Berat isi", hint: "Berat bersih isi." },
    ],
    menengah: [
      { q: "Diskon 20% dari Rp50.000 adalah…", options: ["Rp10.000", "Rp20.000", "Rp40.000", "Rp30.000"], answer: "Rp10.000", hint: "20/100 × 50.000." },
      { q: "Bunga 10% per tahun dari Rp100.000…", options: ["Rp10.000", "Rp1.000", "Rp110.000", "Rp100"], answer: "Rp10.000", hint: "10/100 × 100.000." },
      { q: "Bruto 25 kg, tara 1 kg. Neto…", options: ["24 kg", "26 kg", "25 kg", "1 kg"], answer: "24 kg", hint: "Bruto - tara." },
      { q: "Untung Rp2.000 dari modal Rp8.000. Persentase untung…", options: ["25%", "20%", "2%", "10%"], answer: "25%", hint: "2.000/8.000 × 100%." },
    ],
    sulit: [
      { q: "Baju Rp80.000 diskon 25%. Harga yang dibayar…", options: ["Rp60.000", "Rp20.000", "Rp75.000", "Rp100.000"], answer: "Rp60.000", hint: "Diskon Rp20.000, bayar sisanya." },
      { q: "Tabungan Rp500.000 bunga 6% per tahun. Total setelah 2 tahun…", options: ["Rp560.000", "Rp530.000", "Rp600.000", "Rp620.000"], answer: "Rp560.000", hint: "Bunga Rp30.000/th × 2 = Rp60.000." },
      { q: "Beli 40 kg beras Rp400.000, dijual Rp12.000/kg. Untung total…", options: ["Rp80.000", "Rp120.000", "Rp480.000", "Rp40.000"], answer: "Rp80.000", hint: "Jual 40 × 12.000 = 480.000, lalu - 400.000." },
      { q: "Karung bruto 50 kg dengan tara 2%. Netonya…", options: ["49 kg", "48 kg", "51 kg", "45 kg"], answer: "49 kg", hint: "Tara = 2% × 50 = 1 kg." },
    ],
  },
  7: {
    mudah: [
      { q: "Sudut 90° disebut sudut…", options: ["Siku-siku", "Lancip", "Tumpul", "Lurus"], answer: "Siku-siku", hint: "Seperti pojok buku." },
      { q: "Sudut kurang dari 90° disebut…", options: ["Lancip", "Tumpul", "Siku-siku", "Refleks"], answer: "Lancip", hint: "Lebih runcing." },
      { q: "Dua garis yang tak pernah berpotongan disebut…", options: ["Sejajar", "Berpotongan", "Tegak lurus", "Berimpit"], answer: "Sejajar", hint: "Selalu berjarak sama." },
      { q: "Dua sudut berpelurus jumlahnya…", options: ["180°", "90°", "360°", "100°"], answer: "180°", hint: "Membentuk garis lurus." },
    ],
    menengah: [
      { q: "Pelurus dari sudut 120° adalah…", options: ["60°", "240°", "30°", "80°"], answer: "60°", hint: "180° - 120°." },
      { q: "Penyiku dari sudut 30° adalah…", options: ["60°", "150°", "70°", "30°"], answer: "60°", hint: "90° - 30°." },
      { q: "Ruas garis 12 cm dibagi 3 sama panjang, tiap bagian…", options: ["4 cm", "3 cm", "6 cm", "36 cm"], answer: "4 cm", hint: "12 ÷ 3." },
      { q: "Sudut antara 90° dan 180° disebut…", options: ["Tumpul", "Lancip", "Siku-siku", "Lurus"], answer: "Tumpul", hint: "Lebih dari siku-siku." },
    ],
    sulit: [
      { q: "Dua sudut berpelurus berbanding 3 : 2. Sudut yang kecil…", options: ["72°", "108°", "60°", "90°"], answer: "72°", hint: "5 bagian = 180° → 1 bagian 36°, yang kecil 2 bagian." },
      { q: "Sudut A dan B berpenyiku, A = 2 × B. Besar B…", options: ["30°", "60°", "45°", "20°"], answer: "30°", hint: "2B + B = 90° → 3B = 90°." },
      { q: "Pelurus suatu sudut = 4 kali sudut itu. Besar sudut itu…", options: ["36°", "45°", "30°", "144°"], answer: "36°", hint: "x + 4x = 180° → 5x = 180°." },
      { q: "Jarum jam menunjuk pukul 3 tepat. Sudut yang terbentuk…", options: ["90°", "60°", "120°", "45°"], answer: "90°", hint: "Tiap jam 30°, 3 × 30°." },
    ],
  },
  8: {
    mudah: [
      { q: "Luas persegi dengan sisi 5 cm…", options: ["25 cm²", "10 cm²", "20 cm²", "15 cm²"], answer: "25 cm²", hint: "Sisi × sisi." },
      { q: "Jumlah ketiga sudut segitiga…", options: ["180°", "360°", "90°", "270°"], answer: "180°", hint: "Berlaku untuk semua segitiga." },
      { q: "Keliling persegi panjang p = 6, l = 4…", options: ["20", "24", "10", "48"], answer: "20", hint: "2 × (p + l)." },
      { q: "Bangun 4 sisi sama & bersudut siku-siku…", options: ["Persegi", "Persegi panjang", "Trapesium", "Jajargenjang"], answer: "Persegi", hint: "Semua sisi sama + 90°." },
    ],
    menengah: [
      { q: "Luas segitiga alas 8 cm, tinggi 5 cm…", options: ["20 cm²", "40 cm²", "13 cm²", "80 cm²"], answer: "20 cm²", hint: "½ × alas × tinggi." },
      { q: "Luas persegi panjang p = 8, l = 3…", options: ["24 cm²", "22 cm²", "11 cm²", "16 cm²"], answer: "24 cm²", hint: "p × l." },
      { q: "Keliling segitiga dengan sisi 3, 4, 5…", options: ["12", "60", "7", "20"], answer: "12", hint: "Jumlah semua sisi." },
      { q: "Luas persegi yang kelilingnya 20 cm…", options: ["25 cm²", "20 cm²", "100 cm²", "5 cm²"], answer: "25 cm²", hint: "Sisi = 20 ÷ 4 = 5, lalu 5 × 5." },
    ],
    sulit: [
      { q: "Persegi panjang luas 48 cm², panjang 8 cm. Lebarnya…", options: ["6 cm", "40 cm", "384 cm", "12 cm"], answer: "6 cm", hint: "Lebar = luas ÷ panjang." },
      { q: "Segitiga siku-siku alas 6 cm, tinggi 8 cm. Luasnya…", options: ["24 cm²", "48 cm²", "14 cm²", "28 cm²"], answer: "24 cm²", hint: "½ × 6 × 8." },
      { q: "Taman persegi sisi 12 m akan dipagari kelilingnya. Panjang pagar…", options: ["48 m", "144 m", "24 m", "36 m"], answer: "48 m", hint: "Keliling = 4 × 12." },
      { q: "Luas jajargenjang alas 10 cm, tinggi 7 cm…", options: ["70 cm²", "35 cm²", "17 cm²", "140 cm²"], answer: "70 cm²", hint: "Alas × tinggi." },
    ],
  },
  9: {
    mudah: [
      { q: "Diagram lingkaran menunjukkan…", options: ["Bagian dari keseluruhan", "Perubahan waktu", "Jarak", "Berat"], answer: "Bagian dari keseluruhan", hint: "Proporsi tiap bagian." },
      { q: "Nilai yang paling sering muncul disebut…", options: ["Modus", "Mean", "Median", "Jangkauan"], answer: "Modus", hint: "Paling banyak muncul." },
      { q: "Diagram batang cocok untuk…", options: ["Membandingkan jumlah", "Menunjukkan bagian", "Data lokasi", "Warna"], answer: "Membandingkan jumlah", hint: "Tinggi batang dibandingkan." },
      { q: "Satu lingkaran penuh besarnya…", options: ["360°", "180°", "90°", "100°"], answer: "360°", hint: "Untuk hitung sudut juring." },
    ],
    menengah: [
      { q: "Rata-rata dari data 5, 6, 7, 8, 9 adalah…", options: ["7", "6", "8", "35"], answer: "7", hint: "Jumlah ÷ banyak data." },
      { q: "Bagian 50% pada diagram lingkaran sama dengan sudut juring…", options: ["180°", "90°", "360°", "50°"], answer: "180°", hint: "50% × 360°." },
      { q: "Modus dari data 4, 4, 5, 6 adalah…", options: ["4", "5", "6", "19"], answer: "4", hint: "Muncul paling sering." },
      { q: "Median dari data 3, 5, 7 adalah…", options: ["5", "3", "7", "15"], answer: "5", hint: "Nilai di tengah." },
    ],
    sulit: [
      { q: "Modus data 6, 7, 7, 8, 9, 9, 9 adalah…", options: ["9", "7", "8", "6"], answer: "9", hint: "9 muncul 3 kali." },
      { q: "Rata-rata nilai 5 siswa adalah 80. Jumlah semua nilainya…", options: ["400", "80", "16", "85"], answer: "400", hint: "Rata-rata × banyak data." },
      { q: "25% dari 40 siswa suka olahraga. Banyak siswa suka olahraga…", options: ["10", "25", "15", "4"], answer: "10", hint: "25% × 40." },
      { q: "Median dari data 2, 4, 6, 8, 10 adalah…", options: ["6", "5", "30", "4"], answer: "6", hint: "Nilai paling tengah." },
    ],
  },
};

// ===== IPA (12 bab: sem1 bab 1-6, sem2 bab 7-12) =====
export const QUIZ_IPA_LEVEL: Record<number, Record<Level, QuizQ[]>> = {
  1: {
    mudah: [
      { q: "Cabang IPA yang mempelajari makhluk hidup adalah…", options: ["Biologi", "Fisika", "Kimia", "Astronomi"], answer: "Biologi", hint: "Bio = hidup." },
      { q: "Satuan panjang dalam Sistem Internasional (SI) adalah…", options: ["Meter", "Kilogram", "Sekon", "Liter"], answer: "Meter", hint: "Panjang → meter." },
      { q: "Alat untuk mengukur massa benda adalah…", options: ["Neraca", "Penggaris", "Stopwatch", "Termometer"], answer: "Neraca", hint: "Neraca/timbangan mengukur massa." },
      { q: "Kegiatan mengumpulkan informasi memakai pancaindra disebut…", options: ["Pengamatan", "Inferensi", "Prediksi", "Komunikasi"], answer: "Pengamatan", hint: "Melihat, mencium, meraba = mengamati." },
    ],
    menengah: [
      { q: "Berikut yang termasuk besaran POKOK adalah…", options: ["Panjang", "Luas", "Kecepatan", "Volume"], answer: "Panjang", hint: "Besaran pokok tidak diturunkan dari besaran lain." },
      { q: "Satuan massa dalam SI adalah…", options: ["Kilogram", "Gram", "Newton", "Meter"], answer: "Kilogram", hint: "Massa → kilogram." },
      { q: "Luas termasuk besaran…", options: ["Turunan", "Pokok", "Baku", "Tidak baku"], answer: "Turunan", hint: "Diturunkan dari panjang × panjang." },
      { q: "Satuan waktu dalam SI adalah…", options: ["Sekon", "Jam", "Menit", "Hari"], answer: "Sekon", hint: "Satuan baku waktu." },
    ],
    sulit: [
      { q: "Panjang 200 cm sama dengan … meter.", options: ["2", "20", "0,2", "2.000"], answer: "2", hint: "100 cm = 1 m." },
      { q: "Besaran turunan yang merupakan panjang dibagi waktu adalah…", options: ["Kecepatan", "Luas", "Massa jenis", "Gaya"], answer: "Kecepatan", hint: "Satuannya m/s." },
      { q: "Massa 2 kg sama dengan … gram.", options: ["2.000", "200", "20", "0,002"], answer: "2.000", hint: "1 kg = 1.000 g." },
      { q: "Waktu 2 menit sama dengan … sekon.", options: ["120", "60", "20", "200"], answer: "120", hint: "1 menit = 60 sekon." },
    ],
  },
  2: {
    mudah: [
      { q: "Ciri makhluk hidup yang menghasilkan keturunan disebut…", options: ["Berkembang biak", "Bergerak", "Bernapas", "Tumbuh"], answer: "Berkembang biak", hint: "Menghasilkan individu baru." },
      { q: "Ilmu mengelompokkan makhluk hidup disebut…", options: ["Klasifikasi", "Ekologi", "Genetika", "Anatomi"], answer: "Klasifikasi", hint: "Menggolongkan berdasarkan ciri." },
      { q: "Hewan yang menyusui anaknya termasuk kelompok…", options: ["Mamalia", "Reptil", "Amfibi", "Aves"], answer: "Mamalia", hint: "Mama = menyusui." },
      { q: "Tumbuhan hijau membuat makanan sendiri melalui…", options: ["Fotosintesis", "Respirasi", "Ekskresi", "Reproduksi"], answer: "Fotosintesis", hint: "Memakai cahaya matahari." },
    ],
    menengah: [
      { q: "Setelah Kingdom, urutan takson berikutnya adalah…", options: ["Filum", "Spesies", "Genus", "Ordo"], answer: "Filum", hint: "Kingdom-Filum-Kelas-Ordo-Famili-Genus-Spesies." },
      { q: "Contoh makhluk hidup bersel satu yang mikroskopis adalah…", options: ["Bakteri", "Kucing", "Mangga", "Katak"], answer: "Bakteri", hint: "Hanya terlihat dengan mikroskop." },
      { q: "Sistem penamaan ilmiah dua kata disebut…", options: ["Binomial nomenklatur", "Kunci dikotomi", "Takson", "Kingdom"], answer: "Binomial nomenklatur", hint: "Nama genus + spesies." },
      { q: "Katak yang hidup di air dan di darat termasuk kelompok…", options: ["Amfibi", "Reptil", "Mamalia", "Ikan"], answer: "Amfibi", hint: "Amfi = dua alam." },
    ],
    sulit: [
      { q: "Nama ilmiah padi Oryza sativa. Kata “Oryza” menunjukkan…", options: ["Genus", "Spesies", "Famili", "Kingdom"], answer: "Genus", hint: "Kata pertama = nama genus." },
      { q: "Alat mengidentifikasi makhluk hidup lewat ciri berpasangan disebut…", options: ["Kunci determinasi", "Mikroskop", "Teleskop", "Neraca"], answer: "Kunci determinasi", hint: "Berisi pilihan ciri bercabang dua." },
      { q: "Tumbuhan berbiji berkeping dua disebut…", options: ["Dikotil", "Monokotil", "Paku", "Lumut"], answer: "Dikotil", hint: "Di = dua keping biji." },
      { q: "Hewan yang tidak memiliki tulang belakang disebut…", options: ["Avertebrata", "Vertebrata", "Mamalia", "Aves"], answer: "Avertebrata", hint: "A = tanpa, vertebra = ruas tulang belakang." },
    ],
  },
  3: {
    mudah: [
      { q: "Segala sesuatu yang menempati ruang dan bermassa disebut…", options: ["Materi", "Energi", "Gaya", "Suhu"], answer: "Materi", hint: "Punya massa & volume." },
      { q: "Air pada suhu ruang berwujud…", options: ["Cair", "Padat", "Gas", "Plasma"], answer: "Cair", hint: "Mengikuti bentuk wadah." },
      { q: "Zat yang tersusun dari satu jenis atom disebut…", options: ["Unsur", "Campuran", "Larutan", "Koloid"], answer: "Unsur", hint: "Mis. emas, besi, oksigen." },
      { q: "Contoh perubahan wujud mencair adalah…", options: ["Es menjadi air", "Air menjadi uap", "Air menjadi es", "Kapur barus menghilang"], answer: "Es menjadi air", hint: "Padat → cair." },
    ],
    menengah: [
      { q: "Gabungan dua zat atau lebih yang masih memiliki sifat asli disebut…", options: ["Campuran", "Senyawa", "Unsur", "Atom"], answer: "Campuran", hint: "Sifat penyusunnya masih tampak." },
      { q: "Air (H₂O) tergolong…", options: ["Senyawa", "Unsur", "Campuran", "Larutan"], answer: "Senyawa", hint: "Gabungan unsur H dan O secara kimia." },
      { q: "Memisahkan campuran air dan pasir dilakukan dengan cara…", options: ["Penyaringan", "Penyulingan", "Menyublim", "Kromatografi"], answer: "Penyaringan", hint: "Pasir tertahan di saringan." },
      { q: "Larutan yang bersifat asam memiliki nilai pH…", options: ["Kurang dari 7", "Sama dengan 7", "Lebih dari 7", "Tepat 14"], answer: "Kurang dari 7", hint: "Asam pH < 7, basa pH > 7." },
    ],
    sulit: [
      { q: "Memisahkan garam dari air laut paling tepat dengan cara…", options: ["Penguapan", "Penyaringan", "Menyublim", "Penyulingan"], answer: "Penguapan", hint: "Air diuapkan, garam tersisa." },
      { q: "Perubahan yang menghasilkan zat baru disebut perubahan…", options: ["Kimia", "Fisika", "Wujud", "Bentuk"], answer: "Kimia", hint: "Mis. besi berkarat, kayu terbakar." },
      { q: "Kertas dibakar menjadi abu termasuk perubahan…", options: ["Kimia", "Fisika", "Wujud", "Sementara"], answer: "Kimia", hint: "Terbentuk zat baru (abu) yang tak bisa kembali." },
      { q: "Larutan yang mengubah lakmus merah menjadi biru bersifat…", options: ["Basa", "Asam", "Netral", "Garam"], answer: "Basa", hint: "Basa membirukan lakmus merah." },
    ],
  },
  4: {
    mudah: [
      { q: "Alat untuk mengukur suhu adalah…", options: ["Termometer", "Barometer", "Higrometer", "Neraca"], answer: "Termometer", hint: "Thermo = panas." },
      { q: "Satuan suhu dalam SI adalah…", options: ["Kelvin", "Celsius", "Fahrenheit", "Reamur"], answer: "Kelvin", hint: "Satuan baku suhu." },
      { q: "Ukuran derajat panas atau dinginnya benda disebut…", options: ["Suhu", "Kalor", "Energi", "Massa"], answer: "Suhu", hint: "Diukur dengan termometer." },
      { q: "Zat cair yang biasa dipakai mengisi termometer adalah…", options: ["Raksa", "Air", "Minyak", "Cuka"], answer: "Raksa", hint: "Raksa (atau alkohol) mudah memuai." },
    ],
    menengah: [
      { q: "Suhu air mendidih pada skala Celsius adalah…", options: ["100°C", "0°C", "37°C", "212°C"], answer: "100°C", hint: "Titik didih air." },
      { q: "Suhu es mencair (titik beku air) pada Celsius adalah…", options: ["0°C", "100°C", "32°C", "-100°C"], answer: "0°C", hint: "Titik beku air." },
      { q: "Ketika suhunya naik, umumnya benda akan…", options: ["Memuai", "Menyusut", "Membeku", "Tetap"], answer: "Memuai", hint: "Partikel bergerak lebih cepat, benda membesar." },
      { q: "Rel kereta diberi celah sambungan agar tidak melengkung ketika…", options: ["Memuai karena panas", "Menyusut", "Berkarat", "Basah"], answer: "Memuai karena panas", hint: "Siang hari rel memanjang." },
    ],
    sulit: [
      { q: "Suhu 27°C sama dengan … Kelvin.", options: ["300 K", "27 K", "246 K", "3 K"], answer: "300 K", hint: "K = °C + 273." },
      { q: "Suhu 0°C sama dengan … Kelvin.", options: ["273 K", "0 K", "32 K", "100 K"], answer: "273 K", hint: "K = °C + 273." },
      { q: "Termometer menunjukkan 50°C. Berapa dalam skala Reamur?", options: ["40°R", "62°R", "50°R", "122°R"], answer: "40°R", hint: "°R = 4/5 × °C." },
      { q: "Alkohol dipakai untuk termometer suhu sangat rendah karena…", options: ["Titik bekunya rendah", "Berwarna cerah", "Harganya murah", "Berbau harum"], answer: "Titik bekunya rendah", hint: "Alkohol baru membeku pada suhu sangat dingin." },
    ],
  },
  5: {
    mudah: [
      { q: "Kalor merupakan salah satu bentuk…", options: ["Energi", "Gaya", "Massa", "Suhu"], answer: "Energi", hint: "Energi panas." },
      { q: "Kalor berpindah dari benda bersuhu…", options: ["Tinggi ke rendah", "Rendah ke tinggi", "Sama ke sama", "Acak"], answer: "Tinggi ke rendah", hint: "Panas mengalir ke yang lebih dingin." },
      { q: "Perpindahan kalor melalui zat padat tanpa perpindahan zatnya disebut…", options: ["Konduksi", "Konveksi", "Radiasi", "Evaporasi"], answer: "Konduksi", hint: "Mis. sendok logam terasa panas." },
      { q: "Satuan kalor adalah…", options: ["Joule", "Watt", "Newton", "Meter"], answer: "Joule", hint: "Kalor = energi → joule." },
    ],
    menengah: [
      { q: "Perpindahan kalor pada zat cair/gas disertai perpindahan zatnya disebut…", options: ["Konveksi", "Konduksi", "Radiasi", "Isolasi"], answer: "Konveksi", hint: "Mis. air mendidih berputar." },
      { q: "Perpindahan kalor tanpa memerlukan zat perantara disebut…", options: ["Radiasi", "Konduksi", "Konveksi", "Kondensasi"], answer: "Radiasi", hint: "Mis. panas api unggun terasa dari jauh." },
      { q: "Panas matahari sampai ke bumi melalui peristiwa…", options: ["Radiasi", "Konduksi", "Konveksi", "Aliran"], answer: "Radiasi", hint: "Melewati ruang hampa tanpa perantara." },
      { q: "Benda yang mudah menghantarkan kalor disebut…", options: ["Konduktor", "Isolator", "Radiator", "Reflektor"], answer: "Konduktor", hint: "Mis. logam." },
    ],
    sulit: [
      { q: "Kalor dihitung dengan Q = m × c × Δt. Δt artinya…", options: ["Perubahan suhu", "Massa benda", "Kalor jenis", "Waktu"], answer: "Perubahan suhu", hint: "Selisih suhu akhir dan awal." },
      { q: "Air 1 kg (kalor jenis 4.200 J/kg°C) suhunya naik 10°C. Kalor yang diperlukan…", options: ["42.000 J", "4.200 J", "420 J", "42 J"], answer: "42.000 J", hint: "Q = 1 × 4.200 × 10." },
      { q: "Perubahan wujud yang MENYERAP kalor adalah…", options: ["Menguap", "Membeku", "Mengembun", "Mengkristal"], answer: "Menguap", hint: "Cair → gas membutuhkan panas." },
      { q: "Gagang panci dibuat dari kayu/plastik karena bersifat…", options: ["Isolator", "Konduktor", "Radiator", "Penghantar"], answer: "Isolator", hint: "Tidak menghantarkan panas ke tangan." },
    ],
  },
  6: {
    mudah: [
      { q: "Kemampuan untuk melakukan usaha atau kerja disebut…", options: ["Energi", "Gaya", "Massa", "Kalor"], answer: "Energi", hint: "Sumbernya antara lain makanan & matahari." },
      { q: "Sumber energi utama bagi kehidupan di bumi adalah…", options: ["Matahari", "Bulan", "Angin", "Air"], answer: "Matahari", hint: "Sumber energi hampir semua makhluk." },
      { q: "Makanan sumber energi utama (karbohidrat) contohnya…", options: ["Nasi", "Air", "Garam", "Vitamin"], answer: "Nasi", hint: "Nasi, roti, kentang = karbohidrat." },
      { q: "Energi yang dimiliki benda karena geraknya disebut energi…", options: ["Kinetik", "Potensial", "Kimia", "Bunyi"], answer: "Kinetik", hint: "Kinetik = gerak." },
    ],
    menengah: [
      { q: "Energi yang tersimpan pada makanan dan baterai disebut energi…", options: ["Kimia", "Kinetik", "Cahaya", "Bunyi"], answer: "Kimia", hint: "Tersimpan dalam ikatan zat." },
      { q: "Proses tumbuhan mengubah energi cahaya menjadi energi kimia disebut…", options: ["Fotosintesis", "Respirasi", "Fermentasi", "Pencernaan"], answer: "Fotosintesis", hint: "Terjadi di daun berhijau daun." },
      { q: "Zat makanan yang menjadi sumber tenaga utama adalah…", options: ["Karbohidrat", "Vitamin", "Air", "Mineral"], answer: "Karbohidrat", hint: "Sumber energi cepat." },
      { q: "Pada lampu senter, energi kimia baterai berubah menjadi energi…", options: ["Cahaya", "Bunyi", "Gerak", "Kimia"], answer: "Cahaya", hint: "Senter menghasilkan cahaya (dan sedikit panas)." },
    ],
    sulit: [
      { q: "Organ pencernaan tempat penyerapan sari makanan terbesar adalah…", options: ["Usus halus", "Lambung", "Mulut", "Usus besar"], answer: "Usus halus", hint: "Dindingnya berjonjot untuk menyerap." },
      { q: "Enzim di mulut yang mengubah amilum menjadi gula adalah…", options: ["Amilase", "Pepsin", "Lipase", "Insulin"], answer: "Amilase", hint: "Disebut juga ptialin, ada di air liur." },
      { q: "Respirasi (pernapasan) sel menghasilkan energi berupa…", options: ["ATP", "DNA", "Oksigen", "Air"], answer: "ATP", hint: "ATP = mata uang energi sel." },
      { q: "Zat makanan yang berfungsi sebagai zat pembangun tubuh adalah…", options: ["Protein", "Karbohidrat", "Lemak", "Air"], answer: "Protein", hint: "Untuk pertumbuhan & memperbaiki sel." },
    ],
  },
  7: {
    mudah: [
      { q: "Unit (bagian) terkecil penyusun makhluk hidup adalah…", options: ["Sel", "Jaringan", "Organ", "Organisme"], answer: "Sel", hint: "Tingkat paling dasar." },
      { q: "Kumpulan sel yang sama bentuk & fungsinya membentuk…", options: ["Jaringan", "Organ", "Sistem organ", "Sel"], answer: "Jaringan", hint: "Setingkat di atas sel." },
      { q: "Bagian sel yang mengatur seluruh kegiatan sel adalah…", options: ["Inti sel", "Membran", "Sitoplasma", "Dinding sel"], answer: "Inti sel", hint: "Nukleus = pusat kendali." },
      { q: "Urutan yang benar dari kecil ke besar adalah…", options: ["Sel – Jaringan – Organ", "Organ – Sel – Jaringan", "Jaringan – Sel – Organ", "Organ – Jaringan – Sel"], answer: "Sel – Jaringan – Organ", hint: "Mulai dari yang terkecil." },
    ],
    menengah: [
      { q: "Bagian yang hanya dimiliki sel tumbuhan (tidak ada pada sel hewan) adalah…", options: ["Dinding sel", "Inti sel", "Membran sel", "Sitoplasma"], answer: "Dinding sel", hint: "Membuat sel tumbuhan kaku." },
      { q: "Organel tempat berlangsungnya fotosintesis adalah…", options: ["Kloroplas", "Mitokondria", "Ribosom", "Vakuola"], answer: "Kloroplas", hint: "Mengandung klorofil (zat hijau)." },
      { q: "Kumpulan beberapa organ yang bekerja sama membentuk…", options: ["Sistem organ", "Jaringan", "Sel", "Organel"], answer: "Sistem organ", hint: "Mis. sistem pencernaan." },
      { q: "Organel “pembangkit tenaga” tempat respirasi sel adalah…", options: ["Mitokondria", "Kloroplas", "Inti sel", "Vakuola"], answer: "Mitokondria", hint: "Menghasilkan energi (ATP)." },
    ],
    sulit: [
      { q: "Jaringan tumbuhan yang mengangkut air dari akar ke daun adalah…", options: ["Xilem", "Floem", "Epidermis", "Stomata"], answer: "Xilem", hint: "Xilem = pembuluh kayu, mengangkut air." },
      { q: "Jaringan tumbuhan yang mengangkut hasil fotosintesis adalah…", options: ["Floem", "Xilem", "Akar", "Batang"], answer: "Floem", hint: "Floem = pembuluh tapis." },
      { q: "Berikut yang merupakan contoh ORGAN pada manusia adalah…", options: ["Jantung", "Sel darah", "Otot polos", "Neuron"], answer: "Jantung", hint: "Organ tersusun dari beberapa jaringan." },
      { q: "Sistem organ yang berfungsi mengedarkan darah ke seluruh tubuh adalah…", options: ["Sistem peredaran darah", "Sistem pencernaan", "Sistem pernapasan", "Sistem saraf"], answer: "Sistem peredaran darah", hint: "Melibatkan jantung & pembuluh darah." },
    ],
  },
  8: {
    mudah: [
      { q: "Tempat hidup suatu makhluk hidup disebut…", options: ["Habitat", "Populasi", "Komunitas", "Ekosistem"], answer: "Habitat", hint: "Lingkungan tempat tinggalnya." },
      { q: "Hubungan timbal balik makhluk hidup dengan lingkungannya dipelajari dalam…", options: ["Ekologi", "Genetika", "Anatomi", "Fisiologi"], answer: "Ekologi", hint: "Eko = lingkungan." },
      { q: "Kumpulan individu sejenis di suatu tempat disebut…", options: ["Populasi", "Komunitas", "Ekosistem", "Habitat"], answer: "Populasi", hint: "Mis. sekumpulan ikan mas di kolam." },
      { q: "Makhluk hidup yang dapat membuat makanannya sendiri disebut…", options: ["Produsen", "Konsumen", "Pengurai", "Predator"], answer: "Produsen", hint: "Mis. tumbuhan hijau." },
    ],
    menengah: [
      { q: "Komponen tak hidup dalam ekosistem (air, tanah, cahaya) disebut…", options: ["Abiotik", "Biotik", "Produsen", "Konsumen"], answer: "Abiotik", hint: "A = tanpa, bios = hidup." },
      { q: "Organisme pengurai seperti bakteri dan jamur disebut…", options: ["Dekomposer", "Produsen", "Herbivora", "Karnivora"], answer: "Dekomposer", hint: "Menguraikan sisa makhluk mati." },
      { q: "Peristiwa makan dan dimakan dalam satu garis lurus disebut…", options: ["Rantai makanan", "Jaring makanan", "Piramida", "Simbiosis"], answer: "Rantai makanan", hint: "Mis. rumput → belalang → katak." },
      { q: "Hewan pemakan tumbuhan disebut…", options: ["Herbivora", "Karnivora", "Omnivora", "Dekomposer"], answer: "Herbivora", hint: "Herba = tumbuhan." },
    ],
    sulit: [
      { q: "Hubungan kupu-kupu dengan bunga (dua-duanya untung) adalah simbiosis…", options: ["Mutualisme", "Parasitisme", "Komensalisme", "Netral"], answer: "Mutualisme", hint: "Sama-sama diuntungkan." },
      { q: "Hubungan benalu dengan pohon inangnya adalah simbiosis…", options: ["Parasitisme", "Mutualisme", "Komensalisme", "Predasi"], answer: "Parasitisme", hint: "Satu untung, satu dirugikan." },
      { q: "Anggrek yang menempel pada pohon (satu untung, satu tak terpengaruh) adalah simbiosis…", options: ["Komensalisme", "Mutualisme", "Parasitisme", "Kompetisi"], answer: "Komensalisme", hint: "Anggrek untung, pohon tak dirugikan." },
      { q: "Rantai makanan: rumput → belalang → katak → ular. Belalang berperan sebagai…", options: ["Konsumen I", "Produsen", "Konsumen II", "Pengurai"], answer: "Konsumen I", hint: "Pemakan produsen = konsumen tingkat 1." },
    ],
  },
  9: {
    mudah: [
      { q: "Masuknya zat berbahaya ke lingkungan sehingga menurunkan kualitasnya disebut…", options: ["Pencemaran", "Pelestarian", "Reboisasi", "Daur ulang"], answer: "Pencemaran", hint: "Lingkungan menjadi kotor/rusak." },
      { q: "Pencemaran air dapat disebabkan oleh…", options: ["Limbah pabrik", "Menanam pohon", "Menyaring air", "Air hujan"], answer: "Limbah pabrik", hint: "Buangan pabrik ke sungai." },
      { q: "Asap kendaraan bermotor menyebabkan pencemaran…", options: ["Udara", "Air", "Tanah", "Suara"], answer: "Udara", hint: "Mengotori udara yang kita hirup." },
      { q: "Zat yang menyebabkan pencemaran disebut…", options: ["Polutan", "Nutrien", "Vitamin", "Oksigen"], answer: "Polutan", hint: "Zat pencemar." },
    ],
    menengah: [
      { q: "Cara mengurangi sampah plastik yang tepat adalah…", options: ["Mengurangi & mendaur ulang", "Membakar semua", "Membuang ke sungai", "Menimbun di taman"], answer: "Mengurangi & mendaur ulang", hint: "Prinsip 3R." },
      { q: "Pencemaran tanah dapat disebabkan oleh…", options: ["Sampah plastik & pestisida berlebih", "Menanam pohon", "Pupuk kompos", "Air hujan"], answer: "Sampah plastik & pestisida berlebih", hint: "Zat yang sulit terurai." },
      { q: "Gas beracun hasil pembakaran yang mencemari udara adalah…", options: ["Karbon monoksida (CO)", "Oksigen (O₂)", "Nitrogen (N₂)", "Uap air"], answer: "Karbon monoksida (CO)", hint: "Keluar dari knalpot kendaraan." },
      { q: "Prinsip 3R adalah Reduce, Reuse, dan…", options: ["Recycle", "Repair", "Remove", "Return"], answer: "Recycle", hint: "Recycle = mendaur ulang." },
    ],
    sulit: [
      { q: "Air sungai yang tercemar limbah organik berlebih menyebabkan kadar oksigen terlarut…", options: ["Menurun", "Meningkat", "Tetap", "Tak berubah"], answer: "Menurun", hint: "Pembusukan menghabiskan oksigen dalam air." },
      { q: "Pertumbuhan ganggang berlebihan akibat pupuk yang terbawa ke perairan disebut…", options: ["Eutrofikasi", "Reboisasi", "Filtrasi", "Kondensasi"], answer: "Eutrofikasi", hint: "Air jadi hijau tertutup ganggang." },
      { q: "Hujan asam terutama disebabkan oleh gas…", options: ["Belerang & nitrogen oksida", "Oksigen", "Uap air", "Helium"], answer: "Belerang & nitrogen oksida", hint: "SO₂ dan NOₓ dari asap pabrik/kendaraan." },
      { q: "Cara menjaga ketersediaan air tanah adalah dengan membuat…", options: ["Lubang biopori / sumur resapan", "Membuang sampah ke sungai", "Menebang pohon", "Menutup tanah dengan beton"], answer: "Lubang biopori / sumur resapan", hint: "Agar air hujan meresap ke tanah." },
    ],
  },
  10: {
    mudah: [
      { q: "Meningkatnya suhu rata-rata permukaan bumi disebut…", options: ["Pemanasan global", "Efek rumah kaca", "Hujan asam", "Gerhana"], answer: "Pemanasan global", hint: "Global warming." },
      { q: "Gas utama penyebab efek rumah kaca adalah…", options: ["Karbon dioksida (CO₂)", "Oksigen", "Nitrogen", "Helium"], answer: "Karbon dioksida (CO₂)", hint: "Dari pembakaran & kendaraan." },
      { q: "Salah satu dampak pemanasan global adalah…", options: ["Es kutub mencair", "Suhu turun drastis", "Laut membeku", "Bumi mendingin"], answer: "Es kutub mencair", hint: "Suhu naik → es meleleh." },
      { q: "Kegiatan yang memperparah pemanasan global adalah…", options: ["Pembakaran bahan bakar fosil", "Menanam pohon", "Bersepeda", "Menghemat listrik"], answer: "Pembakaran bahan bakar fosil", hint: "Menghasilkan banyak CO₂." },
    ],
    menengah: [
      { q: "Efek rumah kaca terjadi karena gas-gas di atmosfer menahan…", options: ["Panas", "Cahaya bulan", "Air", "Angin"], answer: "Panas", hint: "Panas terperangkap seperti di rumah kaca." },
      { q: "Usaha mengurangi pemanasan global antara lain…", options: ["Menanam pohon & hemat energi", "Menebang hutan", "Menambah kendaraan", "Membakar sampah"], answer: "Menanam pohon & hemat energi", hint: "Pohon menyerap CO₂." },
      { q: "Energi terbarukan yang ramah lingkungan contohnya…", options: ["Tenaga surya", "Batu bara", "Minyak bumi", "Bensin"], answer: "Tenaga surya", hint: "Dari matahari, tidak menghasilkan CO₂." },
      { q: "Naiknya permukaan air laut akibat pemanasan global disebabkan oleh…", options: ["Mencairnya es di kutub", "Hujan deras", "Gempa bumi", "Angin kencang"], answer: "Mencairnya es di kutub", hint: "Air es masuk ke laut." },
    ],
    sulit: [
      { q: "Lapisan atmosfer yang melindungi bumi dari sinar ultraviolet adalah lapisan…", options: ["Ozon", "Karbon", "Nitrogen", "Air"], answer: "Ozon", hint: "Berada di stratosfer." },
      { q: "Gas rumah kaca yang banyak dihasilkan dari peternakan dan sawah adalah…", options: ["Metana (CH₄)", "Oksigen", "Ozon", "Nitrogen"], answer: "Metana (CH₄)", hint: "Dari kotoran ternak & sawah tergenang." },
      { q: "Perilaku hemat energi yang benar di rumah adalah…", options: ["Mematikan lampu saat tidak dipakai", "Menyalakan semua lampu", "Membuka kulkas lama-lama", "Menyalakan AC terus-menerus"], answer: "Mematikan lampu saat tidak dipakai", hint: "Mengurangi pemakaian listrik." },
      { q: "Gas CFC dari pendingin lama berbahaya karena merusak lapisan…", options: ["Ozon", "Air", "Tanah", "Batuan"], answer: "Ozon", hint: "Membuat lubang ozon." },
    ],
  },
  11: {
    mudah: [
      { q: "Lapisan udara yang menyelimuti bumi disebut…", options: ["Atmosfer", "Litosfer", "Hidrosfer", "Biosfer"], answer: "Atmosfer", hint: "Atmo = udara." },
      { q: "Lapisan bumi paling luar yang berupa batuan disebut…", options: ["Litosfer", "Atmosfer", "Hidrosfer", "Inti bumi"], answer: "Litosfer", hint: "Lito = batu." },
      { q: "Lapisan air di bumi (laut, sungai, danau) disebut…", options: ["Hidrosfer", "Litosfer", "Atmosfer", "Biosfer"], answer: "Hidrosfer", hint: "Hidro = air." },
      { q: "Getaran permukaan bumi akibat pergerakan lempeng disebut…", options: ["Gempa bumi", "Petir", "Angin", "Pelangi"], answer: "Gempa bumi", hint: "Terjadi di kerak bumi." },
    ],
    menengah: [
      { q: "Lapisan atmosfer paling bawah tempat terjadinya cuaca adalah…", options: ["Troposfer", "Stratosfer", "Mesosfer", "Termosfer"], answer: "Troposfer", hint: "Tempat awan & hujan." },
      { q: "Lapisan atmosfer tempat lapisan ozon berada adalah…", options: ["Stratosfer", "Troposfer", "Mesosfer", "Eksosfer"], answer: "Stratosfer", hint: "Di atas troposfer." },
      { q: "Alat pencatat kekuatan gempa bumi disebut…", options: ["Seismograf", "Barometer", "Termometer", "Anemometer"], answer: "Seismograf", hint: "Seismo = gempa." },
      { q: "Bagian bumi paling dalam dan paling panas adalah…", options: ["Inti bumi", "Kerak bumi", "Atmosfer", "Hidrosfer"], answer: "Inti bumi", hint: "Terdiri dari logam sangat panas." },
    ],
    sulit: [
      { q: "Pusat gempa yang berada di dalam bumi disebut…", options: ["Hiposentrum", "Episentrum", "Magma", "Kawah"], answer: "Hiposentrum", hint: "Hipo = di bawah." },
      { q: "Titik di permukaan bumi tepat di atas pusat gempa disebut…", options: ["Episentrum", "Hiposentrum", "Kawah", "Kaldera"], answer: "Episentrum", hint: "Epi = di atas/permukaan." },
      { q: "Gelombang laut sangat besar akibat gempa di dasar laut disebut…", options: ["Tsunami", "Ombak biasa", "Pasang surut", "Arus laut"], answer: "Tsunami", hint: "Bahaya setelah gempa bawah laut." },
      { q: "Pada daur air, penguapan air laut oleh panas matahari disebut…", options: ["Evaporasi", "Presipitasi", "Kondensasi", "Infiltrasi"], answer: "Evaporasi", hint: "Air → uap air." },
    ],
  },
  12: {
    mudah: [
      { q: "Pusat dari tata surya adalah…", options: ["Matahari", "Bumi", "Bulan", "Mars"], answer: "Matahari", hint: "Semua planet mengelilinginya." },
      { q: "Planet tempat kita tinggal adalah…", options: ["Bumi", "Mars", "Venus", "Jupiter"], answer: "Bumi", hint: "Planet ketiga dari matahari." },
      { q: "Satelit alami bumi adalah…", options: ["Bulan", "Matahari", "Mars", "Komet"], answer: "Bulan", hint: "Mengelilingi bumi." },
      { q: "Planet terbesar dalam tata surya adalah…", options: ["Jupiter", "Bumi", "Mars", "Merkurius"], answer: "Jupiter", hint: "Planet raksasa gas." },
    ],
    menengah: [
      { q: "Planet yang paling dekat dengan matahari adalah…", options: ["Merkurius", "Venus", "Bumi", "Mars"], answer: "Merkurius", hint: "Planet pertama dari matahari." },
      { q: "Perputaran bumi pada porosnya disebut…", options: ["Rotasi", "Revolusi", "Gravitasi", "Orbit"], answer: "Rotasi", hint: "Menyebabkan siang dan malam." },
      { q: "Perputaran bumi mengelilingi matahari disebut…", options: ["Revolusi", "Rotasi", "Gerhana", "Orbit"], answer: "Revolusi", hint: "Satu kali = 1 tahun." },
      { q: "Benda langit yang memiliki ekor saat mendekati matahari adalah…", options: ["Komet", "Planet", "Bintang", "Satelit"], answer: "Komet", hint: "Disebut bintang berekor." },
    ],
    sulit: [
      { q: "Rotasi bumi menyebabkan terjadinya…", options: ["Siang dan malam", "Pergantian musim", "Gerhana bulan", "Pasang surut"], answer: "Siang dan malam", hint: "Bumi berputar pada porosnya." },
      { q: "Gerhana matahari terjadi ketika … berada di antara matahari dan bumi.", options: ["Bulan", "Bumi", "Mars", "Komet"], answer: "Bulan", hint: "Bulan menutupi cahaya matahari." },
      { q: "Gerhana bulan terjadi ketika … berada di antara matahari dan bulan.", options: ["Bumi", "Bulan", "Matahari", "Venus"], answer: "Bumi", hint: "Bumi menghalangi cahaya matahari ke bulan." },
      { q: "Peristiwa pasang surut air laut terutama dipengaruhi oleh gravitasi…", options: ["Bulan", "Mars", "Jupiter", "Komet"], answer: "Bulan", hint: "Tarikan gravitasi bulan pada air laut." },
    ],
  },
};

import {
  QUIZ_IPS_LEVEL,
  QUIZ_BINDO_LEVEL,
  QUIZ_BING_LEVEL,
  QUIZ_INFO_LEVEL,
  QUIZ_PPKN_LEVEL,
} from "./quiz-extra";

const LEVEL_SETS: Record<string, Record<number, Record<Level, QuizQ[]>>> = {
  matematika: QUIZ_BY_LEVEL,
  ipa: QUIZ_IPA_LEVEL,
  ips: QUIZ_IPS_LEVEL,
  "bahasa-indonesia": QUIZ_BINDO_LEVEL,
  "bahasa-inggris": QUIZ_BING_LEVEL,
  informatika: QUIZ_INFO_LEVEL,
  ppkn: QUIZ_PPKN_LEVEL,
};

export function getLevelQuiz(subject: string, bab: number, level: Level): QuizQ[] {
  return LEVEL_SETS[subject]?.[bab]?.[level] || [];
}

export function hasLevelQuiz(subject: string, bab: number): boolean {
  return !!LEVEL_SETS[subject]?.[bab];
}

export function babsWithLevelQuiz(subject: string): number[] {
  return Object.keys(LEVEL_SETS[subject] || {}).map((n) => parseInt(n, 10));
}

export function levelSoalCounts(subject: string, bab: number): Record<Level, number> {
  const g = LEVEL_SETS[subject]?.[bab];
  return {
    mudah: g?.mudah.length || 0,
    menengah: g?.menengah.length || 0,
    sulit: g?.sulit.length || 0,
  };
}
