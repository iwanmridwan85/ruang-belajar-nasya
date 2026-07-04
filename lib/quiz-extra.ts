// Bank soal latihan bertingkat untuk IPS, Bahasa Indonesia, Bahasa Inggris,
// Informatika, dan Pendidikan Pancasila. Dipakai oleh lib/quiz.ts (LEVEL_SETS).
import type { QuizQ, Level } from "./quiz";

type BabLevels = Record<number, Record<Level, QuizQ[]>>;

// ================= IPS (4 Tema) =================
export const QUIZ_IPS_LEVEL: BabLevels = {
  1: {
    mudah: [
      { q: "Letak suatu tempat berdasarkan garis lintang dan garis bujur disebut letak…", options: ["Astronomis", "Geografis", "Geologis", "Strategis"], answer: "Astronomis", hint: "Ditentukan oleh koordinat lintang & bujur." },
      { q: "Indonesia memiliki iklim…", options: ["Tropis", "Subtropis", "Dingin", "Kutub"], answer: "Tropis", hint: "Berada di sekitar garis khatulistiwa." },
      { q: "Ilmu yang mempelajari peristiwa masa lampau adalah…", options: ["Sejarah", "Geografi", "Ekonomi", "Sosiologi"], answer: "Sejarah", hint: "Mempelajari kejadian di masa lalu." },
    ],
    menengah: [
      { q: "Indonesia terletak di antara dua benua, yaitu…", options: ["Asia dan Australia", "Asia dan Eropa", "Afrika dan Asia", "Amerika dan Australia"], answer: "Asia dan Australia", hint: "Asia di utara, Australia di selatan." },
      { q: "Hubungan saling membutuhkan antardaerah disebut…", options: ["Konektivitas antarruang", "Sosialisasi", "Mobilitas", "Urbanisasi"], answer: "Konektivitas antarruang", hint: "Antarruang saling terhubung & melengkapi." },
      { q: "Proses saling memengaruhi antarindividu atau kelompok disebut…", options: ["Interaksi sosial", "Akulturasi", "Migrasi", "Asimilasi"], answer: "Interaksi sosial", hint: "Terjadi hubungan timbal balik." },
    ],
    sulit: [
      { q: "Indonesia rawan gempa karena berada di pertemuan tiga…", options: ["Lempeng tektonik", "Samudra", "Benua", "Gunung"], answer: "Lempeng tektonik", hint: "Lempeng Eurasia, Indo-Australia, dan Pasifik." },
      { q: "Prasasti (batu bertulis) termasuk sumber sejarah…", options: ["Tertulis", "Lisan", "Benda tak bertulis", "Sekunder"], answer: "Tertulis", hint: "Berisi tulisan sebagai peninggalan." },
      { q: "Perpindahan penduduk dari desa ke kota disebut…", options: ["Urbanisasi", "Transmigrasi", "Emigrasi", "Imigrasi"], answer: "Urbanisasi", hint: "Desa → kota." },
    ],
  },
  2: {
    mudah: [
      { q: "Segala sesuatu yang diperlukan manusia untuk hidup disebut…", options: ["Kebutuhan", "Keinginan", "Kelangkaan", "Kemakmuran"], answer: "Kebutuhan", hint: "Harus dipenuhi untuk hidup layak." },
      { q: "Kebutuhan pokok seperti makanan, pakaian, dan tempat tinggal disebut kebutuhan…", options: ["Primer", "Sekunder", "Tersier", "Mewah"], answer: "Primer", hint: "Utama & wajib dipenuhi." },
      { q: "Lingkungan yang terbentuk secara alami disebut lingkungan…", options: ["Alam", "Buatan", "Sosial", "Budaya"], answer: "Alam", hint: "Bukan buatan manusia." },
    ],
    menengah: [
      { q: "Menanam kembali hutan yang gundul disebut…", options: ["Reboisasi", "Sengkedan", "Terasering", "Irigasi"], answer: "Reboisasi", hint: "Re = kembali, boisasi = penghutanan." },
      { q: "Perhiasan mewah termasuk kebutuhan…", options: ["Tersier", "Primer", "Sekunder", "Pokok"], answer: "Tersier", hint: "Barang mewah = tersier." },
      { q: "Contoh usaha melestarikan lingkungan adalah…", options: ["Membuang sampah pada tempatnya", "Menebang hutan", "Membakar sampah", "Membuang limbah ke sungai"], answer: "Membuang sampah pada tempatnya", hint: "Menjaga kebersihan lingkungan." },
    ],
    sulit: [
      { q: "Membuat terasering (sengkedan) di lereng bukit bertujuan mencegah…", options: ["Erosi tanah", "Banjir kota", "Kekeringan", "Gempa bumi"], answer: "Erosi tanah", hint: "Menahan tanah agar tidak terkikis air." },
      { q: "Kebutuhan yang pemenuhannya tidak dapat ditunda disebut kebutuhan…", options: ["Sekarang", "Akan datang", "Tersier", "Rohani"], answer: "Sekarang", hint: "Mis. obat saat sakit." },
      { q: "Contoh sumber daya alam yang dapat diperbarui adalah…", options: ["Air dan tumbuhan", "Minyak bumi", "Batu bara", "Emas"], answer: "Air dan tumbuhan", hint: "Bisa tersedia kembali secara alami." },
    ],
  },
  3: {
    mudah: [
      { q: "Kegiatan menghasilkan barang atau jasa disebut…", options: ["Produksi", "Distribusi", "Konsumsi", "Promosi"], answer: "Produksi", hint: "Membuat/menghasilkan." },
      { q: "Orang yang memakai atau menghabiskan barang disebut…", options: ["Konsumen", "Produsen", "Distributor", "Penjual"], answer: "Konsumen", hint: "Pengguna barang/jasa." },
      { q: "Menyalurkan barang dari produsen ke konsumen disebut…", options: ["Distribusi", "Produksi", "Konsumsi", "Ekspor"], answer: "Distribusi", hint: "Penyaluran barang." },
    ],
    menengah: [
      { q: "Contoh sumber daya alam yang TIDAK dapat diperbarui adalah…", options: ["Minyak bumi", "Air", "Angin", "Sinar matahari"], answer: "Minyak bumi", hint: "Akan habis jika terus dipakai." },
      { q: "Asal-usul penamaan suatu tempat dipelajari dalam…", options: ["Toponimi", "Ekonomi", "Geologi", "Demografi"], answer: "Toponimi", hint: "Ilmu tentang nama tempat." },
      { q: "Kegiatan menjual barang ke luar negeri disebut…", options: ["Ekspor", "Impor", "Distribusi", "Konsumsi"], answer: "Ekspor", hint: "Barang keluar dari negara." },
    ],
    sulit: [
      { q: "Salah satu ciri negara maju adalah…", options: ["Pendapatan per kapita tinggi", "Angka kemiskinan tinggi", "Pendidikan rendah", "Teknologi tertinggal"], answer: "Pendapatan per kapita tinggi", hint: "Kesejahteraan penduduknya tinggi." },
      { q: "Barang yang didatangkan dari luar negeri disebut barang…", options: ["Impor", "Ekspor", "Produksi", "Lokal"], answer: "Impor", hint: "Barang masuk dari luar negeri." },
      { q: "Memanfaatkan keindahan alam untuk wisata termasuk sektor…", options: ["Pariwisata", "Pertambangan", "Pertanian", "Industri"], answer: "Pariwisata", hint: "Kegiatan jasa wisata." },
    ],
  },
  4: {
    mudah: [
      { q: "Semboyan bangsa Indonesia yang berarti berbeda-beda tetapi tetap satu adalah…", options: ["Bhinneka Tunggal Ika", "Pancasila", "Garuda Pancasila", "Sumpah Pemuda"], answer: "Bhinneka Tunggal Ika", hint: "Tertulis pada lambang Garuda." },
      { q: "Keragaman suku, agama, dan budaya merupakan kekayaan…", options: ["Bangsa", "Individu", "Asing", "Daerah"], answer: "Bangsa", hint: "Milik seluruh bangsa Indonesia." },
      { q: "Sikap menghargai perbedaan disebut…", options: ["Toleransi", "Egois", "Diskriminasi", "Fanatik"], answer: "Toleransi", hint: "Menghormati perbedaan." },
    ],
    menengah: [
      { q: "Upaya meningkatkan kemampuan masyarakat agar mandiri disebut…", options: ["Pemberdayaan masyarakat", "Urbanisasi", "Modernisasi", "Globalisasi"], answer: "Pemberdayaan masyarakat", hint: "Memberdayakan agar berdaya/mandiri." },
      { q: "Kemiskinan dan pengangguran termasuk contoh…", options: ["Masalah sosial", "Kekayaan alam", "Keberagaman budaya", "Interaksi"], answer: "Masalah sosial", hint: "Masalah dalam kehidupan bermasyarakat." },
      { q: "Perkumpulan orang dengan minat atau tujuan yang sama disebut…", options: ["Komunitas", "Individu", "Negara", "Provinsi"], answer: "Komunitas", hint: "Mis. komunitas pecinta buku." },
    ],
    sulit: [
      { q: "Gotong royong membersihkan lingkungan mencerminkan nilai…", options: ["Kerja sama", "Persaingan", "Individualisme", "Permusuhan"], answer: "Kerja sama", hint: "Bekerja bersama-sama." },
      { q: "Salah satu cara mengatasi pengangguran adalah…", options: ["Membuka lapangan kerja & pelatihan", "Menambah pajak", "Menutup pabrik", "Melarang wirausaha"], answer: "Membuka lapangan kerja & pelatihan", hint: "Menyediakan pekerjaan & keterampilan." },
      { q: "Sikap yang harus DIHINDARI dalam masyarakat yang beragam adalah…", options: ["Diskriminasi", "Toleransi", "Kerukunan", "Kerja sama"], answer: "Diskriminasi", hint: "Membeda-bedakan/merugikan kelompok lain." },
    ],
  },
};

// ================= BAHASA INDONESIA (8 Bab) =================
export const QUIZ_BINDO_LEVEL: BabLevels = {
  1: {
    mudah: [
      { q: "Teks yang menggambarkan objek secara rinci sehingga pembaca seolah melihatnya disebut teks…", options: ["Deskripsi", "Prosedur", "Narasi", "Laporan"], answer: "Deskripsi", hint: "Menggambarkan (mendeskripsikan) objek." },
      { q: "Teks deskripsi banyak menggunakan kata yang menggambarkan…", options: ["Ciri-ciri objek", "Langkah-langkah", "Pendapat", "Rumus"], answer: "Ciri-ciri objek", hint: "Menjelaskan sifat & keadaan objek." },
      { q: "“Pantai itu indah dengan pasir putih” termasuk kalimat…", options: ["Deskripsi", "Perintah", "Tanya", "Ajakan"], answer: "Deskripsi", hint: "Menggambarkan keadaan objek." },
    ],
    menengah: [
      { q: "Struktur teks deskripsi terdiri atas identifikasi dan…", options: ["Deskripsi bagian", "Orientasi", "Reorientasi", "Koda"], answer: "Deskripsi bagian", hint: "Setelah gambaran umum, dijelaskan tiap bagian." },
      { q: "Kata yang menjelaskan sifat kata benda (indah, tinggi) disebut kata…", options: ["Sifat", "Kerja", "Benda", "Bilangan"], answer: "Sifat", hint: "Adjektiva = kata sifat." },
      { q: "Tujuan teks deskripsi adalah…", options: ["Menggambarkan objek sejelas mungkin", "Menceritakan kisah", "Memberi langkah", "Membujuk pembeli"], answer: "Menggambarkan objek sejelas mungkin", hint: "Agar pembaca seolah mengalami sendiri." },
    ],
    sulit: [
      { q: "“Ombak menari-nari di tepi pantai” menggunakan majas…", options: ["Personifikasi", "Hiperbola", "Metafora", "Ironi"], answer: "Personifikasi", hint: "Benda mati seolah bisa berbuat seperti manusia." },
      { q: "Bagian teks deskripsi yang berisi gambaran umum objek disebut…", options: ["Identifikasi", "Deskripsi bagian", "Penutup", "Simpulan"], answer: "Identifikasi", hint: "Pengenalan objek di awal." },
      { q: "Penggunaan kesan pancaindra dalam teks deskripsi bertujuan agar pembaca…", options: ["Seolah merasakan langsung", "Bingung", "Bosan", "Ragu"], answer: "Seolah merasakan langsung", hint: "Melibatkan indra pembaca." },
    ],
  },
  2: {
    mudah: [
      { q: "Cerita yang berisi khayalan/imajinasi yang tidak nyata disebut cerita…", options: ["Fantasi", "Deskripsi", "Prosedur", "Sejarah"], answer: "Fantasi", hint: "Penuh keajaiban & imajinasi." },
      { q: "Tokoh, latar, dan alur termasuk unsur…", options: ["Intrinsik", "Ekstrinsik", "Kebahasaan", "Struktur"], answer: "Intrinsik", hint: "Unsur dari dalam cerita." },
      { q: "Waktu dan tempat terjadinya cerita disebut…", options: ["Latar", "Tokoh", "Tema", "Amanat"], answer: "Latar", hint: "Setting cerita." },
    ],
    menengah: [
      { q: "Urutan peristiwa dalam cerita disebut…", options: ["Alur", "Latar", "Tema", "Tokoh"], answer: "Alur", hint: "Jalannya cerita." },
      { q: "Pesan moral yang ingin disampaikan penulis disebut…", options: ["Amanat", "Tema", "Alur", "Sudut pandang"], answer: "Amanat", hint: "Pelajaran dari cerita." },
      { q: "Struktur cerita fantasi: orientasi, komplikasi, dan…", options: ["Resolusi", "Identifikasi", "Deskripsi", "Prosedur"], answer: "Resolusi", hint: "Bagian penyelesaian masalah." },
    ],
    sulit: [
      { q: "Ciri cerita fantasi adalah adanya keajaiban dan tokoh dengan…", options: ["Kekuatan luar biasa", "Pekerjaan biasa", "Nama panjang", "Rumah mewah"], answer: "Kekuatan luar biasa", hint: "Sering ada tokoh berkekuatan gaib." },
      { q: "Bagian cerita tempat muncul masalah/konflik disebut…", options: ["Komplikasi", "Orientasi", "Resolusi", "Koda"], answer: "Komplikasi", hint: "Puncak masalah cerita." },
      { q: "Sudut pandang dengan tokoh “aku” sebagai pelaku disebut sudut pandang orang…", options: ["Pertama", "Kedua", "Ketiga", "Campuran"], answer: "Pertama", hint: "Penulis memakai kata “aku/saya”." },
    ],
  },
  3: {
    mudah: [
      { q: "Teks yang berisi langkah-langkah melakukan sesuatu disebut teks…", options: ["Prosedur", "Deskripsi", "Fantasi", "Laporan"], answer: "Prosedur", hint: "Berisi cara/tahapan." },
      { q: "Resep masakan termasuk contoh teks…", options: ["Prosedur", "Deskripsi", "Narasi", "Berita"], answer: "Prosedur", hint: "Berisi langkah memasak." },
      { q: "Kalimat “Tuangkan air ke dalam gelas” termasuk kalimat…", options: ["Perintah", "Tanya", "Berita", "Seru"], answer: "Perintah", hint: "Menyuruh melakukan sesuatu." },
    ],
    menengah: [
      { q: "Struktur teks prosedur: tujuan, alat/bahan, dan…", options: ["Langkah-langkah", "Orientasi", "Komplikasi", "Penutup"], answer: "Langkah-langkah", hint: "Tahapan yang harus dilakukan." },
      { q: "Kata yang menunjukkan urutan (pertama, kemudian, lalu) disebut konjungsi…", options: ["Temporal", "Sebab-akibat", "Pertentangan", "Pilihan"], answer: "Temporal", hint: "Menyatakan urutan waktu." },
      { q: "Kata kerja yang menyuruh melakukan sesuatu disebut kata kerja…", options: ["Imperatif", "Deklaratif", "Interogatif", "Pasif"], answer: "Imperatif", hint: "Kata kerja perintah." },
    ],
    sulit: [
      { q: "Ciri kebahasaan teks prosedur antara lain banyak menggunakan…", options: ["Kata kerja perintah", "Kata tanya", "Kata seru", "Nama orang"], answer: "Kata kerja perintah", hint: "Mis. potong, aduk, tuang." },
      { q: "Bagian teks prosedur yang menyebutkan hal yang diperlukan adalah…", options: ["Alat dan bahan", "Langkah", "Tujuan", "Simpulan"], answer: "Alat dan bahan", hint: "Daftar keperluan sebelum mulai." },
      { q: "Pada “Aduk hingga rata”, kata “hingga rata” menunjukkan…", options: ["Keterangan cara", "Tujuan utama", "Nama alat", "Bahan"], answer: "Keterangan cara", hint: "Menerangkan bagaimana mengaduknya." },
    ],
  },
  4: {
    mudah: [
      { q: "Teks yang berisi hasil pengamatan secara objektif disebut teks…", options: ["Laporan hasil observasi", "Deskripsi", "Prosedur", "Fantasi"], answer: "Laporan hasil observasi", hint: "Melaporkan hasil mengamati." },
      { q: "Teks laporan hasil observasi bersifat…", options: ["Fakta", "Khayalan", "Pendapat pribadi", "Perintah"], answer: "Fakta", hint: "Berdasarkan kenyataan." },
      { q: "Objek yang dilaporkan dalam teks observasi biasanya bersifat…", options: ["Umum", "Khusus satu benda", "Rahasia", "Fiktif"], answer: "Umum", hint: "Mis. jenis hewan, bukan satu ekor tertentu." },
    ],
    menengah: [
      { q: "Struktur teks laporan hasil observasi: pernyataan umum dan…", options: ["Deskripsi bagian", "Orientasi", "Komplikasi", "Langkah"], answer: "Deskripsi bagian", hint: "Rincian tiap bagian objek." },
      { q: "Data dalam teks laporan observasi harus…", options: ["Sesuai kenyataan", "Dilebih-lebihkan", "Dikhayalkan", "Dirahasiakan"], answer: "Sesuai kenyataan", hint: "Objektif & apa adanya." },
      { q: "Kata yang sering dipakai untuk mendefinisikan dalam teks LHO adalah…", options: ["adalah / merupakan", "tolong", "apakah", "wow"], answer: "adalah / merupakan", hint: "Menyatakan pengertian sesuatu." },
    ],
    sulit: [
      { q: "Berbeda dengan teks deskripsi yang khusus, teks laporan observasi bersifat…", options: ["Umum", "Khusus", "Fiktif", "Perintah"], answer: "Umum", hint: "Menggambarkan sesuatu secara umum." },
      { q: "Kalimat “Kucing adalah hewan mamalia pemakan daging” merupakan kalimat…", options: ["Definisi", "Perintah", "Tanya", "Ajakan"], answer: "Definisi", hint: "Menjelaskan pengertian/ciri umum." },
      { q: "Bahasa dalam teks laporan hasil observasi sebaiknya…", options: ["Baku dan jelas", "Gaul", "Berlebihan", "Puitis"], answer: "Baku dan jelas", hint: "Ilmiah dan mudah dipahami." },
    ],
  },
  5: {
    mudah: [
      { q: "Puisi lama empat baris dengan sampiran dan isi disebut…", options: ["Pantun", "Syair", "Gurindam", "Puisi bebas"], answer: "Pantun", hint: "Punya sampiran (2 baris) & isi (2 baris)." },
      { q: "Pantun terdiri atas berapa baris?", options: ["4", "2", "6", "8"], answer: "4", hint: "Dua sampiran + dua isi." },
      { q: "Baris pertama dan kedua pada pantun disebut…", options: ["Sampiran", "Isi", "Rima", "Bait"], answer: "Sampiran", hint: "Pembuka, belum berisi maksud." },
    ],
    menengah: [
      { q: "Rima (persamaan bunyi akhir) pada pantun adalah…", options: ["a-b-a-b", "a-a-a-a", "a-a-b-b", "bebas"], answer: "a-b-a-b", hint: "Baris 1 sama dengan 3, baris 2 sama dengan 4." },
      { q: "Puisi lama dua baris yang berisi nasihat disebut…", options: ["Gurindam", "Pantun", "Syair", "Soneta"], answer: "Gurindam", hint: "Terdiri atas dua baris berisi petuah." },
      { q: "Baris ketiga dan keempat pantun berisi…", options: ["Isi/maksud", "Sampiran", "Judul", "Nama pengarang"], answer: "Isi/maksud", hint: "Bagian inti pesan pantun." },
    ],
    sulit: [
      { q: "Setiap bait syair terdiri atas empat baris yang semuanya berupa…", options: ["Isi", "Sampiran", "Sampiran-isi", "Nasihat saja"], answer: "Isi", hint: "Syair tidak memiliki sampiran." },
      { q: "Rima akhir pada syair adalah…", options: ["a-a-a-a", "a-b-a-b", "a-b-b-a", "bebas"], answer: "a-a-a-a", hint: "Semua baris berbunyi akhir sama." },
      { q: "Pada gurindam, baris pertama berisi sebab/syarat, baris kedua berisi…", options: ["Akibat/jawaban", "Sampiran", "Judul", "Rima"], answer: "Akibat/jawaban", hint: "Hubungan sebab-akibat." },
    ],
  },
  6: {
    mudah: [
      { q: "Cerita yang tokohnya berupa hewan yang berperilaku seperti manusia disebut…", options: ["Fabel", "Legenda", "Mite", "Pantun"], answer: "Fabel", hint: "Tokohnya binatang." },
      { q: "Fabel biasanya mengandung pesan…", options: ["Moral", "Sejarah", "Ilmiah", "Berita"], answer: "Moral", hint: "Berisi nilai/pelajaran hidup." },
      { q: "Tokoh utama dalam fabel adalah…", options: ["Hewan", "Manusia", "Tumbuhan saja", "Benda mati"], answer: "Hewan", hint: "Binatang yang bisa berbicara." },
    ],
    menengah: [
      { q: "Struktur fabel: orientasi, komplikasi, resolusi, dan…", options: ["Koda", "Sampiran", "Tujuan", "Langkah"], answer: "Koda", hint: "Bagian akhir berisi pesan moral." },
      { q: "Tokoh yang berwatak baik dalam cerita disebut tokoh…", options: ["Protagonis", "Antagonis", "Figuran", "Narator"], answer: "Protagonis", hint: "Tokoh baik/utama." },
      { q: "Pesan moral dalam fabel biasanya terletak di bagian…", options: ["Akhir cerita", "Judul", "Awal", "Daftar tokoh"], answer: "Akhir cerita", hint: "Pada koda/penutup." },
    ],
    sulit: [
      { q: "Menggambarkan watak tokoh melalui tingkah laku dan dialog disebut penokohan secara…", options: ["Tidak langsung", "Langsung", "Deskriptif", "Naratif"], answer: "Tidak langsung", hint: "Pembaca menyimpulkan sendiri dari perbuatan tokoh." },
      { q: "Contoh latar suasana dalam fabel adalah…", options: ["Menegangkan", "Nama hewan", "Judul", "Amanat"], answer: "Menegangkan", hint: "Suasana yang dirasakan dalam cerita." },
      { q: "Fabel termasuk jenis cerita…", options: ["Fiksi", "Nonfiksi", "Berita", "Laporan"], answer: "Fiksi", hint: "Cerita rekaan/khayalan." },
    ],
  },
  7: {
    mudah: [
      { q: "Surat yang ditulis untuk keperluan pribadi (mis. kepada teman) disebut surat…", options: ["Pribadi", "Dinas", "Resmi", "Lamaran"], answer: "Pribadi", hint: "Bersifat personal." },
      { q: "Surat resmi dari instansi atau lembaga disebut surat…", options: ["Dinas", "Pribadi", "Cinta", "Kabar"], answer: "Dinas", hint: "Keperluan kedinasan/resmi." },
      { q: "Bahasa surat pribadi kepada teman umumnya bersifat…", options: ["Santai/akrab", "Sangat resmi", "Berupa angka", "Puisi"], answer: "Santai/akrab", hint: "Karena kepada orang dekat." },
    ],
    menengah: [
      { q: "Bahasa yang digunakan dalam surat dinas bersifat…", options: ["Resmi/baku", "Santai", "Gaul", "Puitis"], answer: "Resmi/baku", hint: "Karena bersifat kedinasan." },
      { q: "Surat dinas biasanya dilengkapi…", options: ["Kop dan nomor surat", "Emoji", "Gambar lucu", "Sampiran"], answer: "Kop dan nomor surat", hint: "Ciri surat resmi." },
      { q: "“Dengan hormat,” pada surat termasuk bagian…", options: ["Salam pembuka", "Salam penutup", "Isi", "Alamat"], answer: "Salam pembuka", hint: "Terletak di awal surat." },
    ],
    sulit: [
      { q: "Perbedaan utama surat pribadi dan surat dinas terletak pada…", options: ["Bahasa dan tujuannya", "Warna kertas", "Panjangnya", "Jenis pena"], answer: "Bahasa dan tujuannya", hint: "Resmi vs pribadi, tujuan berbeda." },
      { q: "Surat resmi dari sekolah kepada orang tua siswa termasuk surat…", options: ["Dinas", "Pribadi", "Cinta", "Iklan"], answer: "Dinas", hint: "Dikirim atas nama lembaga sekolah." },
      { q: "Bagian surat yang memuat inti/maksud surat disebut…", options: ["Isi surat", "Salam pembuka", "Alamat", "Tanggal"], answer: "Isi surat", hint: "Bagian tengah yang menjelaskan tujuan." },
    ],
  },
  8: {
    mudah: [
      { q: "Buku yang berisi cerita khayalan disebut buku…", options: ["Fiksi", "Nonfiksi", "Pelajaran", "Kamus"], answer: "Fiksi", hint: "Rekaan/imajinatif." },
      { q: "Buku yang berisi fakta atau ilmu pengetahuan disebut buku…", options: ["Nonfiksi", "Fiksi", "Novel", "Dongeng"], answer: "Nonfiksi", hint: "Berdasarkan kenyataan/ilmu." },
      { q: "Ringkasan isi buku disebut…", options: ["Rangkuman", "Judul", "Sampul", "Daftar isi"], answer: "Rangkuman", hint: "Isi buku yang dipadatkan." },
    ],
    menengah: [
      { q: "Contoh buku nonfiksi adalah…", options: ["Buku pelajaran", "Novel", "Kumpulan dongeng", "Komik fantasi"], answer: "Buku pelajaran", hint: "Berisi ilmu/fakta." },
      { q: "Tanggapan pembaca terhadap isi buku disebut…", options: ["Komentar", "Sampul", "Indeks", "Glosarium"], answer: "Komentar", hint: "Pendapat setelah membaca." },
      { q: "Unsur buku fiksi antara lain tema, tokoh, alur, dan…", options: ["Latar", "Daftar pustaka", "Rumus", "Indeks"], answer: "Latar", hint: "Waktu & tempat cerita." },
    ],
    sulit: [
      { q: "Bagian buku yang memuat daftar istilah beserta artinya disebut…", options: ["Glosarium", "Indeks", "Daftar isi", "Sampul"], answer: "Glosarium", hint: "Kamus kecil istilah di buku." },
      { q: "Komentar yang baik terhadap buku sebaiknya disertai…", options: ["Alasan", "Ejekan", "Emosi", "Kebohongan"], answer: "Alasan", hint: "Agar tanggapan bisa dipertanggungjawabkan." },
      { q: "Membaca cepat untuk mencari informasi tertentu disebut…", options: ["Memindai", "Menghafal", "Menyalin", "Menerjemahkan"], answer: "Memindai", hint: "Scanning: langsung mencari kata kunci." },
    ],
  },
};

// ================= BAHASA INGGRIS (8 Chapter) =================
export const QUIZ_BING_LEVEL: BabLevels = {
  1: {
    mudah: [
      { q: "“Good morning” is used in the…", options: ["Morning", "Night", "Afternoon", "Evening"], answer: "Morning", hint: "Pagi hari." },
      { q: "A good reply to “How are you?” is…", options: ["I'm fine, thank you", "Good night", "My name is Ana", "See you"], answer: "I'm fine, thank you", hint: "Jawaban kabar." },
      { q: "“Terima kasih” in English is…", options: ["Thank you", "Sorry", "Please", "Goodbye"], answer: "Thank you", hint: "Ucapan terima kasih." },
    ],
    menengah: [
      { q: "We say “Good night” when we…", options: ["Go to sleep", "Wake up", "Eat lunch", "Start school"], answer: "Go to sleep", hint: "Menjelang tidur." },
      { q: "“Sampai jumpa” in English is…", options: ["See you", "Thank you", "How are you", "Good morning"], answer: "See you", hint: "Ucapan berpisah." },
      { q: "Someone says “Thank you”, you reply…", options: ["You're welcome", "Good morning", "I'm sorry", "Yes"], answer: "You're welcome", hint: "Balasan terima kasih." },
    ],
    sulit: [
      { q: "The polite word to ask for something is…", options: ["Please", "Thanks", "Bye", "Hi"], answer: "Please", hint: "Kata untuk meminta dengan sopan." },
      { q: "“Good afternoon” is used around…", options: ["12 pm – 6 pm", "Early morning", "Midnight", "Sunrise"], answer: "12 pm – 6 pm", hint: "Siang menjelang sore." },
      { q: "To apologize, we say…", options: ["I'm sorry", "Thank you", "Good bye", "You're welcome"], answer: "I'm sorry", hint: "Meminta maaf." },
    ],
  },
  2: {
    mudah: [
      { q: "“Nama saya Budi” in English is…", options: ["My name is Budi", "I am fine", "This is a book", "How old are you"], answer: "My name is Budi", hint: "Memperkenalkan nama." },
      { q: "“How old are you?” asks about…", options: ["Age", "Name", "Address", "Hobby"], answer: "Age", hint: "Menanyakan umur." },
      { q: "The word “I” refers to…", options: ["Myself", "You", "He", "They"], answer: "Myself", hint: "Diri sendiri (saya)." },
    ],
    menengah: [
      { q: "“Saya berumur 12 tahun” in English is…", options: ["I am twelve years old", "I am twelve books", "My name is twelve", "I have twelve"], answer: "I am twelve years old", hint: "Menyatakan umur." },
      { q: "To ask someone's name, we say…", options: ["What is your name?", "How are you?", "Where are you?", "How old?"], answer: "What is your name?", hint: "Menanyakan nama." },
      { q: "“Dia (laki-laki) adalah temanku” in English is…", options: ["He is my friend", "She is my friend", "It is my friend", "They are friends"], answer: "He is my friend", hint: "He = dia laki-laki." },
    ],
    sulit: [
      { q: "The possessive form of “I” is…", options: ["My", "Your", "His", "Their"], answer: "My", hint: "Milik saya = my." },
      { q: "“Alamat” in English is…", options: ["Address", "Age", "Hobby", "Name"], answer: "Address", hint: "Tempat tinggal." },
      { q: "In “They are students”, the word “they” is a…", options: ["Plural pronoun", "Singular pronoun", "Verb", "Adjective"], answer: "Plural pronoun", hint: "Kata ganti jamak." },
    ],
  },
  3: {
    mudah: [
      { q: "“What time is it?” asks about…", options: ["Time", "Day", "Name", "Age"], answer: "Time", hint: "Menanyakan waktu/jam." },
      { q: "“Jam tujuh” in English is…", options: ["Seven o'clock", "Seven day", "At seven year", "Hour seven"], answer: "Seven o'clock", hint: "Pukul tujuh tepat." },
      { q: "The tool that shows time is a…", options: ["Clock", "Ruler", "Book", "Bag"], answer: "Clock", hint: "Jam dinding." },
    ],
    menengah: [
      { q: "07:30 is read as…", options: ["Half past seven", "Seven o'clock", "Quarter to seven", "Seven day thirty"], answer: "Half past seven", hint: "Setengah delapan = lewat 30 menit dari 7." },
      { q: "“Hari ini hari Senin” in English is…", options: ["Today is Monday", "Today is January", "It is one o'clock", "Today is red"], answer: "Today is Monday", hint: "Monday = Senin." },
      { q: "The day after Sunday is…", options: ["Monday", "Saturday", "Friday", "Tuesday"], answer: "Monday", hint: "Setelah Minggu." },
    ],
    sulit: [
      { q: "08:15 can be read as…", options: ["Quarter past eight", "Quarter to eight", "Half past eight", "Eight fifteen day"], answer: "Quarter past eight", hint: "Lewat 15 menit (seperempat)." },
      { q: "The month after January is…", options: ["February", "March", "December", "June"], answer: "February", hint: "Bulan kedua." },
      { q: "“A.M.” is used for…", options: ["Morning hours", "Evening hours", "Night only", "Afternoon"], answer: "Morning hours", hint: "Jam sebelum siang (00.00–12.00)." },
    ],
  },
  4: {
    mudah: [
      { q: "“Ini adalah bukuku” in English is…", options: ["This is my book", "This is a pen", "I have book", "That is book"], answer: "This is my book", hint: "This = ini, my book = bukuku." },
      { q: "“Ayah” in English is…", options: ["Father", "Mother", "Sister", "Brother"], answer: "Father", hint: "Orang tua laki-laki." },
      { q: "“Ibu” in English is…", options: ["Mother", "Father", "Aunt", "Uncle"], answer: "Mother", hint: "Orang tua perempuan." },
    ],
    menengah: [
      { q: "“Saudara perempuan” in English is…", options: ["Sister", "Brother", "Mother", "Cousin"], answer: "Sister", hint: "Kakak/adik perempuan." },
      { q: "The plural of “book” is…", options: ["Books", "Bookes", "Book", "Bookies"], answer: "Books", hint: "Tambah -s." },
      { q: "“Ruang tamu” in English is…", options: ["Living room", "Bathroom", "Kitchen", "Bedroom"], answer: "Living room", hint: "Tempat menerima tamu." },
    ],
    sulit: [
      { q: "The plural of “child” is…", options: ["Children", "Childs", "Childes", "Child"], answer: "Children", hint: "Bentuk jamak tidak beraturan." },
      { q: "“Kamar mandi” in English is…", options: ["Bathroom", "Bedroom", "Garden", "Garage"], answer: "Bathroom", hint: "Tempat mandi." },
      { q: "In “My parents are teachers”, “parents” means…", options: ["Father and mother", "Sisters", "Friends", "Teachers only"], answer: "Father and mother", hint: "Kedua orang tua." },
    ],
  },
  5: {
    mudah: [
      { q: "“Hari yang cerah” in English is…", options: ["A sunny day", "A rainy day", "A cold night", "A book"], answer: "A sunny day", hint: "Sunny = cerah/berjemur." },
      { q: "“Hujan” (weather) in English is…", options: ["Rainy", "Sunny", "Windy", "Cloudy"], answer: "Rainy", hint: "Cuaca berhujan." },
      { q: "The opposite of “hot” is…", options: ["Cold", "Warm", "Big", "Fast"], answer: "Cold", hint: "Lawan panas = dingin." },
    ],
    menengah: [
      { q: "“Langit berawan” in English is…", options: ["Cloudy", "Sunny", "Rainy", "Snowy"], answer: "Cloudy", hint: "Cloud = awan." },
      { q: "The opposite of “big” is…", options: ["Small", "Tall", "Long", "Wide"], answer: "Small", hint: "Lawan besar = kecil." },
      { q: "In “It is very windy today”, “windy” describes the…", options: ["Weather", "Food", "Color", "Name"], answer: "Weather", hint: "Menggambarkan cuaca (berangin)." },
    ],
    sulit: [
      { q: "A word that describes a noun (beautiful, cold) is an…", options: ["Adjective", "Verb", "Noun", "Adverb"], answer: "Adjective", hint: "Kata sifat." },
      { q: "The opposite of “beautiful” is…", options: ["Ugly", "Nice", "Pretty", "Lovely"], answer: "Ugly", hint: "Lawan cantik/indah." },
      { q: "“The weather is cold, so I wear a…”", options: ["Jacket", "Swimsuit", "Hat only", "Sandals"], answer: "Jacket", hint: "Pakaian penghangat saat dingin." },
    ],
  },
  6: {
    mudah: [
      { q: "“Hobi saya membaca” in English is…", options: ["My hobby is reading", "I am reading now", "Read a book", "My book"], answer: "My hobby is reading", hint: "Menyebut hobi." },
      { q: "“Bermain sepak bola” in English is…", options: ["Playing football", "Reading a book", "Cooking rice", "Singing a song"], answer: "Playing football", hint: "Football = sepak bola." },
      { q: "“Menyanyi” in English is…", options: ["Singing", "Dancing", "Reading", "Writing"], answer: "Singing", hint: "Sing = menyanyi." },
    ],
    menengah: [
      { q: "“Saya suka berenang” in English is…", options: ["I like swimming", "I like a book", "I am a fish", "Swim I like"], answer: "I like swimming", hint: "Like + verb-ing." },
      { q: "The verb “to cook” means…", options: ["Memasak", "Membaca", "Menari", "Menulis"], answer: "Memasak", hint: "Cook = masak." },
      { q: "In “She dances every day”, the verb is…", options: ["Dances", "She", "Every", "Day"], answer: "Dances", hint: "Kata kerja = dances." },
    ],
    sulit: [
      { q: "In “I usually play basketball”, “usually” is an adverb of…", options: ["Frequency", "Place", "Time only", "Manner"], answer: "Frequency", hint: "Menyatakan seberapa sering." },
      { q: "The -ing form of “swim” is…", options: ["Swimming", "Swiming", "Swimmming", "Swims"], answer: "Swimming", hint: "Konsonan m digandakan." },
      { q: "In “They enjoy painting”, the word “painting” is a…", options: ["Gerund", "Main verb", "Adjective", "Pronoun"], answer: "Gerund", hint: "Verb-ing yang berfungsi seperti kata benda." },
    ],
  },
  7: {
    mudah: [
      { q: "“Saya bangga menjadi orang Indonesia” in English is…", options: ["I'm proud to be Indonesian", "I am from Japan", "I like pizza", "This is my book"], answer: "I'm proud to be Indonesian", hint: "Proud = bangga." },
      { q: "The capital city of Indonesia is…", options: ["Jakarta", "Bandung", "Bali", "Medan"], answer: "Jakarta", hint: "Ibu kota negara." },
      { q: "“Bendera” in English is…", options: ["Flag", "Book", "Table", "Door"], answer: "Flag", hint: "Sang Merah Putih = flag." },
    ],
    menengah: [
      { q: "“Rumah adat” in English is…", options: ["Traditional house", "Modern house", "Big house", "New house"], answer: "Traditional house", hint: "Traditional = adat/tradisional." },
      { q: "“Tarian tradisional” in English is…", options: ["Traditional dance", "Modern song", "Old book", "Folk food"], answer: "Traditional dance", hint: "Dance = tarian." },
      { q: "Batik is a traditional Indonesian…", options: ["Cloth", "Food", "Dance", "Building"], answer: "Cloth", hint: "Kain khas Indonesia." },
    ],
    sulit: [
      { q: "In “Indonesia has many islands”, “islands” means more than…", options: ["One island", "One country", "One city", "One book"], answer: "One island", hint: "Bentuk jamak = banyak pulau." },
      { q: "The national language of Indonesia is…", options: ["Bahasa Indonesia", "English", "Javanese only", "Arabic"], answer: "Bahasa Indonesia", hint: "Bahasa persatuan." },
      { q: "To describe your country, you can use adjectives like…", options: ["Beautiful, rich, diverse", "Run, jump, eat", "I, you, they", "Quickly, slowly"], answer: "Beautiful, rich, diverse", hint: "Kata sifat menggambarkan negara." },
    ],
  },
  8: {
    mudah: [
      { q: "“Teman” in English is…", options: ["Friend", "Enemy", "Teacher", "Stranger"], answer: "Friend", hint: "Sahabat/kawan." },
      { q: "“Tolong bantu saya” in English is…", options: ["Please help me", "Thank you", "Good night", "See you"], answer: "Please help me", hint: "Meminta bantuan dengan sopan." },
      { q: "A good friend is usually…", options: ["Helpful and kind", "Rude", "Selfish", "Lazy"], answer: "Helpful and kind", hint: "Suka menolong & baik hati." },
    ],
    menengah: [
      { q: "“Bolehkah saya meminjam pulpenmu?” in English is…", options: ["May I borrow your pen?", "Give me pen now", "I have a pen", "The pen is red"], answer: "May I borrow your pen?", hint: "May I…? = permintaan sopan." },
      { q: "To offer help, we can say…", options: ["Can I help you?", "Go away", "Not my problem", "I am busy"], answer: "Can I help you?", hint: "Menawarkan bantuan." },
      { q: "The opposite of “friend” is…", options: ["Enemy", "Buddy", "Pal", "Mate"], answer: "Enemy", hint: "Lawan dari teman." },
    ],
    sulit: [
      { q: "“Would you like some help?” is a polite way to…", options: ["Offer help", "Refuse", "Complain", "Command"], answer: "Offer help", hint: "Menawarkan bantuan dengan sopan." },
      { q: "In “She always helps her friends”, “always” shows it happens…", options: ["All the time", "Never", "Once", "Yesterday only"], answer: "All the time", hint: "Selalu = setiap saat." },
      { q: "Saying “sure” or “of course” when asked for help means you…", options: ["Agree to help", "Refuse", "Ignore", "Get angry"], answer: "Agree to help", hint: "Menyetujui untuk membantu." },
    ],
  },
};

// ================= INFORMATIKA (5 Bab) =================
export const QUIZ_INFO_LEVEL: BabLevels = {
  1: {
    mudah: [
      { q: "Cara menyelesaikan masalah secara bertahap dan logis seperti komputer disebut…", options: ["Berpikir komputasional", "Menghafal", "Menggambar", "Menyanyi"], answer: "Berpikir komputasional", hint: "Computational thinking." },
      { q: "Urutan langkah untuk menyelesaikan suatu masalah disebut…", options: ["Algoritma", "Data", "Program", "Menu"], answer: "Algoritma", hint: "Langkah-langkah berurutan." },
      { q: "Memecah masalah besar menjadi bagian-bagian kecil disebut…", options: ["Dekomposisi", "Abstraksi", "Pengenalan pola", "Algoritma"], answer: "Dekomposisi", hint: "Membagi masalah jadi lebih sederhana." },
    ],
    menengah: [
      { q: "Mengenali kesamaan atau pola pada masalah disebut…", options: ["Pengenalan pola", "Dekomposisi", "Abstraksi", "Algoritma"], answer: "Pengenalan pola", hint: "Pattern recognition." },
      { q: "Mengambil informasi penting dan mengabaikan yang tidak perlu disebut…", options: ["Abstraksi", "Perulangan", "Percabangan", "Data"], answer: "Abstraksi", hint: "Menyederhanakan, fokus ke yang penting." },
      { q: "Resep memasak yang berisi urutan langkah adalah contoh dari…", options: ["Algoritma", "Data", "Hoaks", "Pola"], answer: "Algoritma", hint: "Langkah berurutan seperti algoritma." },
    ],
    sulit: [
      { q: "Empat pilar berpikir komputasional: dekomposisi, pengenalan pola, abstraksi, dan…", options: ["Algoritma", "Data", "Internet", "Aplikasi"], answer: "Algoritma", hint: "Pilar keempat." },
      { q: "Perintah yang dijalankan berulang-ulang dalam program disebut…", options: ["Perulangan", "Percabangan", "Variabel", "Fungsi"], answer: "Perulangan", hint: "Loop." },
      { q: "Struktur program yang memilih tindakan berdasarkan kondisi disebut…", options: ["Percabangan", "Perulangan", "Urutan", "Data"], answer: "Percabangan", hint: "Jika…maka… (if)." },
    ],
  },
  2: {
    mudah: [
      { q: "Kumpulan fakta atau angka yang belum diolah disebut…", options: ["Data", "Informasi", "Program", "Gambar"], answer: "Data", hint: "Bahan mentah yang akan diolah." },
      { q: "Aplikasi untuk mengolah angka dalam bentuk tabel (lembar kerja) contohnya…", options: ["Microsoft Excel", "Microsoft Word", "Paint", "Notepad"], answer: "Microsoft Excel", hint: "Spreadsheet." },
      { q: "Pertemuan antara baris dan kolom pada lembar kerja disebut…", options: ["Sel", "Menu", "Baris judul", "Ikon"], answer: "Sel", hint: "Cell." },
    ],
    menengah: [
      { q: "Baris pada lembar kerja (spreadsheet) ditandai dengan…", options: ["Angka", "Huruf", "Simbol", "Warna"], answer: "Angka", hint: "1, 2, 3, …" },
      { q: "Kolom pada lembar kerja ditandai dengan…", options: ["Huruf", "Angka", "Tanda baca", "Gambar"], answer: "Huruf", hint: "A, B, C, …" },
      { q: "Rumus di Excel selalu diawali dengan tanda…", options: ["= (sama dengan)", "+ (tambah)", "? (tanya)", "# (pagar)"], answer: "= (sama dengan)", hint: "Mis. =A1+B1" },
    ],
    sulit: [
      { q: "Fungsi untuk menjumlahkan sederet angka di Excel adalah…", options: ["SUM", "MAX", "IF", "COUNT"], answer: "SUM", hint: "=SUM(...)" },
      { q: "Fungsi untuk mencari nilai rata-rata di Excel adalah…", options: ["AVERAGE", "SUM", "MIN", "MAX"], answer: "AVERAGE", hint: "Rata-rata." },
      { q: "Data yang sudah diolah sehingga bermakna disebut…", options: ["Informasi", "Data mentah", "Angka", "Grafik"], answer: "Informasi", hint: "Hasil pengolahan data." },
    ],
  },
  3: {
    mudah: [
      { q: "Program untuk mencari informasi di internet disebut…", options: ["Mesin pencari", "Kalkulator", "Permainan", "Kamera"], answer: "Mesin pencari", hint: "Search engine." },
      { q: "Contoh mesin pencari adalah…", options: ["Google", "Excel", "Paint", "Word"], answer: "Google", hint: "Digunakan untuk mencari." },
      { q: "Informasi bohong yang disebarkan seolah benar disebut…", options: ["Hoaks", "Fakta", "Data", "Berita resmi"], answer: "Hoaks", hint: "Berita palsu." },
    ],
    menengah: [
      { q: "Pernyataan yang dapat dibuktikan kebenarannya disebut…", options: ["Fakta", "Opini", "Hoaks", "Rumor"], answer: "Fakta", hint: "Sesuai kenyataan." },
      { q: "Pendapat pribadi seseorang tentang sesuatu disebut…", options: ["Opini", "Fakta", "Data", "Bukti"], answer: "Opini", hint: "Belum tentu benar untuk semua orang." },
      { q: "Sumber informasi yang dapat dipercaya disebut sumber yang…", options: ["Kredibel", "Palsu", "Anonim", "Hoaks"], answer: "Kredibel", hint: "Terpercaya." },
    ],
    sulit: [
      { q: "Sebelum mempercayai berita di internet, sebaiknya kita…", options: ["Memeriksa kebenarannya", "Langsung menyebarkan", "Mengabaikan", "Menghapus HP"], answer: "Memeriksa kebenarannya", hint: "Cek fakta dulu." },
      { q: "Ciri berita hoaks antara lain judulnya…", options: ["Provokatif/berlebihan", "Netral", "Ilmiah", "Singkat biasa"], answer: "Provokatif/berlebihan", hint: "Memancing emosi." },
      { q: "Menyimpan alamat halaman web agar mudah dibuka lagi disebut…", options: ["Bookmark", "Download", "Upload", "Delete"], answer: "Bookmark", hint: "Menandai halaman." },
    ],
  },
  4: {
    mudah: [
      { q: "Perilaku sopan dan bertanggung jawab saat menggunakan teknologi disebut…", options: ["Etika digital", "Hoaks", "Virus", "Iklan"], answer: "Etika digital", hint: "Sopan santun di dunia digital." },
      { q: "Kata sandi untuk melindungi akun disebut…", options: ["Password", "Username", "Email", "Ikon"], answer: "Password", hint: "Kunci akun." },
      { q: "Terlalu lama bermain gadget dapat mengganggu…", options: ["Kesehatan", "Baterai saja", "Sinyal", "Warna layar"], answer: "Kesehatan", hint: "Mis. mata & pola tidur." },
    ],
    menengah: [
      { q: "Perundungan (mengejek/mengancam) yang dilakukan di internet disebut…", options: ["Cyberbullying", "Chatting", "Browsing", "Gaming"], answer: "Cyberbullying", hint: "Bully secara online." },
      { q: "Data pribadi seperti alamat dan nomor HP sebaiknya…", options: ["Dijaga kerahasiaannya", "Disebar luas", "Ditulis di status", "Dijual"], answer: "Dijaga kerahasiaannya", hint: "Tidak dibagikan sembarangan." },
      { q: "Agar hidup seimbang, waktu bermain gadget sebaiknya…", options: ["Dibatasi", "Sepanjang hari", "Tanpa henti", "Saat belajar"], answer: "Dibatasi", hint: "Ada batas waktu yang wajar." },
    ],
    sulit: [
      { q: "Jejak atau rekam aktivitas kita di internet disebut…", options: ["Jejak digital", "Password", "Sinyal", "Baterai"], answer: "Jejak digital", hint: "Digital footprint." },
      { q: "Password yang kuat sebaiknya terdiri atas…", options: ["Kombinasi huruf, angka, dan simbol", "Tanggal lahir saja", "123456", "Nama sendiri"], answer: "Kombinasi huruf, angka, dan simbol", hint: "Sulit ditebak." },
      { q: "Jika menerima pesan mencurigakan dari orang tak dikenal, sebaiknya…", options: ["Tidak menanggapi & lapor orang tua", "Membalasnya", "Mengirim data diri", "Membuka semua tautan"], answer: "Tidak menanggapi & lapor orang tua", hint: "Waspada penipuan." },
    ],
  },
  5: {
    mudah: [
      { q: "Perangkat keras komputer yang bisa disentuh disebut…", options: ["Hardware", "Software", "Brainware", "Internet"], answer: "Hardware", hint: "Perangkat fisik." },
      { q: "Program atau aplikasi komputer disebut…", options: ["Software", "Hardware", "Monitor", "Keyboard"], answer: "Software", hint: "Perangkat lunak." },
      { q: "Alat untuk mengetik pada komputer disebut…", options: ["Keyboard", "Monitor", "Printer", "Speaker"], answer: "Keyboard", hint: "Papan tik." },
    ],
    menengah: [
      { q: "Perangkat untuk menampilkan gambar/layar disebut…", options: ["Monitor", "Keyboard", "Mouse", "CPU"], answer: "Monitor", hint: "Layar komputer." },
      { q: "Manusia yang mengoperasikan komputer disebut…", options: ["Brainware", "Hardware", "Software", "Malware"], answer: "Brainware", hint: "Pengguna komputer." },
      { q: "Alat untuk mencetak dokumen ke kertas disebut…", options: ["Printer", "Scanner", "Monitor", "Mouse"], answer: "Printer", hint: "Mencetak." },
    ],
    sulit: [
      { q: "Otak komputer yang memproses data disebut…", options: ["CPU (Prosesor)", "Monitor", "Keyboard", "Printer"], answer: "CPU (Prosesor)", hint: "Central Processing Unit." },
      { q: "Aplikasi untuk membuat dokumen atau surat adalah…", options: ["Pengolah kata", "Pengolah angka", "Pemutar musik", "Peramban"], answer: "Pengolah kata", hint: "Mis. Microsoft Word." },
      { q: "Program untuk membuat presentasi (slide) adalah…", options: ["PowerPoint", "Excel", "Notepad", "Paint"], answer: "PowerPoint", hint: "Untuk tampilan slide." },
    ],
  },
};

// ================= PENDIDIKAN PANCASILA (5 Bab) =================
export const QUIZ_PPKN_LEVEL: BabLevels = {
  1: {
    mudah: [
      { q: "Dasar negara Republik Indonesia adalah…", options: ["Pancasila", "UUD 1945", "Bhinneka Tunggal Ika", "Sumpah Pemuda"], answer: "Pancasila", hint: "Lima dasar negara." },
      { q: "Pancasila terdiri atas berapa sila?", options: ["5", "3", "4", "6"], answer: "5", hint: "Panca = lima." },
      { q: "Hari Lahir Pancasila diperingati setiap tanggal…", options: ["1 Juni", "17 Agustus", "28 Oktober", "10 November"], answer: "1 Juni", hint: "Pidato Soekarno 1945." },
    ],
    menengah: [
      { q: "Badan yang merumuskan dasar negara sebelum kemerdekaan disebut…", options: ["BPUPK", "PPKI", "MPR", "DPR"], answer: "BPUPK", hint: "Badan Penyelidik Usaha Persiapan Kemerdekaan." },
      { q: "Tokoh yang mengusulkan istilah “Pancasila” adalah…", options: ["Ir. Soekarno", "Moh. Hatta", "Soepomo", "Moh. Yamin"], answer: "Ir. Soekarno", hint: "Dalam sidang BPUPK 1 Juni 1945." },
      { q: "Sila pertama Pancasila berbunyi…", options: ["Ketuhanan Yang Maha Esa", "Persatuan Indonesia", "Keadilan sosial", "Kemanusiaan yang adil"], answer: "Ketuhanan Yang Maha Esa", hint: "Sila ke-1." },
    ],
    sulit: [
      { q: "Panitia yang menyempurnakan rumusan dasar negara disebut…", options: ["Panitia Sembilan", "Panitia Kecil", "BPUPK", "PPKI"], answer: "Panitia Sembilan", hint: "Beranggotakan sembilan orang." },
      { q: "Rumusan Pancasila yang sah tercantum dalam…", options: ["Pembukaan UUD 1945", "Batang tubuh UUD", "Sumpah Pemuda", "Teks Proklamasi"], answer: "Pembukaan UUD 1945", hint: "Alinea keempat." },
      { q: "Sila keempat Pancasila berkaitan dengan…", options: ["Musyawarah/demokrasi", "Ketuhanan", "Keadilan sosial", "Persatuan"], answer: "Musyawarah/demokrasi", hint: "Kerakyatan yang dipimpin hikmat kebijaksanaan." },
    ],
  },
  2: {
    mudah: [
      { q: "Beribadah sesuai agama masing-masing adalah pengamalan sila ke…", options: ["1", "2", "3", "4"], answer: "1", hint: "Ketuhanan Yang Maha Esa." },
      { q: "Menghargai teman yang berbeda suku adalah pengamalan sila ke…", options: ["3", "1", "4", "5"], answer: "3", hint: "Persatuan Indonesia." },
      { q: "Lambang sila kelima Pancasila adalah…", options: ["Padi dan kapas", "Bintang", "Rantai", "Pohon beringin"], answer: "Padi dan kapas", hint: "Keadilan sosial (pangan & sandang)." },
    ],
    menengah: [
      { q: "Musyawarah untuk mencapai mufakat adalah pengamalan sila ke…", options: ["4", "1", "2", "3"], answer: "4", hint: "Kerakyatan/permusyawaratan." },
      { q: "Lambang sila pertama Pancasila adalah…", options: ["Bintang", "Rantai", "Kepala banteng", "Padi dan kapas"], answer: "Bintang", hint: "Cahaya Ketuhanan." },
      { q: "Membantu korban bencana alam mencerminkan sila ke…", options: ["2", "1", "4", "5"], answer: "2", hint: "Kemanusiaan yang adil dan beradab." },
    ],
    sulit: [
      { q: "Tidak memaksakan kehendak dalam musyawarah termasuk pengamalan sila ke…", options: ["4", "1", "2", "5"], answer: "4", hint: "Menghargai pendapat orang lain." },
      { q: "Lambang sila ketiga (Persatuan Indonesia) adalah…", options: ["Pohon beringin", "Bintang", "Rantai", "Kepala banteng"], answer: "Pohon beringin", hint: "Tempat berteduh/berlindung bersama." },
      { q: "Berlaku adil kepada semua orang tanpa membeda-bedakan mencerminkan sila ke…", options: ["5", "1", "2", "3"], answer: "5", hint: "Keadilan sosial bagi seluruh rakyat." },
    ],
  },
  3: {
    mudah: [
      { q: "Aturan atau kaidah yang menjadi pedoman perilaku disebut…", options: ["Norma", "Hobi", "Cita-cita", "Data"], answer: "Norma", hint: "Pedoman bertingkah laku." },
      { q: "Norma yang bersumber dari Tuhan disebut norma…", options: ["Agama", "Hukum", "Kesopanan", "Kesusilaan"], answer: "Agama", hint: "Berasal dari ajaran agama." },
      { q: "Norma yang dibuat negara dan bersifat memaksa disebut norma…", options: ["Hukum", "Kesopanan", "Agama", "Adat"], answer: "Hukum", hint: "Ada sanksi tegas dari negara." },
    ],
    menengah: [
      { q: "Norma yang bersumber dari hati nurani tentang baik-buruk disebut norma…", options: ["Kesusilaan", "Hukum", "Agama", "Kesopanan"], answer: "Kesusilaan", hint: "Dari nurani manusia." },
      { q: "Mengucapkan salam dan bersikap sopan termasuk norma…", options: ["Kesopanan", "Hukum", "Agama", "Kesusilaan"], answer: "Kesopanan", hint: "Tata krama dalam pergaulan." },
      { q: "Sanksi bagi pelanggar norma hukum bersifat…", options: ["Tegas/memaksa", "Tidak ada", "Sukarela", "Rahasia"], answer: "Tegas/memaksa", hint: "Mis. denda atau penjara." },
    ],
    sulit: [
      { q: "Tujuan adanya norma dalam masyarakat adalah…", options: ["Menciptakan ketertiban", "Membuat kekacauan", "Menguntungkan satu orang", "Menghukum semua"], answer: "Menciptakan ketertiban", hint: "Agar hidup tertib & damai." },
      { q: "Membayar pajak dan menaati lampu lalu lintas adalah contoh menaati norma…", options: ["Hukum", "Kesopanan", "Agama", "Adat"], answer: "Hukum", hint: "Diatur oleh negara." },
      { q: "Norma kesopanan bersumber dari…", options: ["Pergaulan/kebiasaan masyarakat", "Kitab suci", "Undang-undang", "Hati nurani"], answer: "Pergaulan/kebiasaan masyarakat", hint: "Adat kebiasaan setempat." },
    ],
  },
  4: {
    mudah: [
      { q: "Semboyan “Bhinneka Tunggal Ika” berarti…", options: ["Berbeda-beda tetapi tetap satu", "Satu untuk semua", "Bersatu kita teguh", "Merdeka atau mati"], answer: "Berbeda-beda tetapi tetap satu", hint: "Persatuan dalam perbedaan." },
      { q: "Keberagaman di Indonesia meliputi suku, agama, ras, dan…", options: ["Antargolongan", "Negara", "Benua", "Planet"], answer: "Antargolongan", hint: "SARA." },
      { q: "Sikap menghormati perbedaan agama disebut…", options: ["Toleransi", "Egois", "Rasisme", "Fanatik"], answer: "Toleransi", hint: "Menghargai perbedaan." },
    ],
    menengah: [
      { q: "Jumlah agama yang diakui resmi di Indonesia ada…", options: ["6", "3", "5", "10"], answer: "6", hint: "Islam, Kristen, Katolik, Hindu, Buddha, Konghucu." },
      { q: "Keberagaman budaya bangsa harus kita…", options: ["Lestarikan", "Hilangkan", "Abaikan", "Larang"], answer: "Lestarikan", hint: "Dijaga agar tidak punah." },
      { q: "Semboyan Bhinneka Tunggal Ika tertulis pada lambang negara…", options: ["Garuda Pancasila", "Bendera", "Peta", "Uang"], answer: "Garuda Pancasila", hint: "Pada pita yang dicengkeram Garuda." },
    ],
    sulit: [
      { q: "Faktor penyebab keberagaman masyarakat Indonesia antara lain…", options: ["Letak wilayah kepulauan", "Hanya satu suku", "Iklim kutub", "Tidak memiliki laut"], answer: "Letak wilayah kepulauan", hint: "Banyak pulau → beragam budaya." },
      { q: "Konflik akibat perbedaan dapat dicegah dengan sikap…", options: ["Saling menghormati", "Memaksakan kehendak", "Merendahkan orang lain", "Bermusuhan"], answer: "Saling menghormati", hint: "Menjaga kerukunan." },
      { q: "Keberagaman bangsa Indonesia merupakan…", options: ["Kekayaan yang harus disyukuri", "Kelemahan", "Ancaman", "Beban"], answer: "Kekayaan yang harus disyukuri", hint: "Modal persatuan bangsa." },
    ],
  },
  5: {
    mudah: [
      { q: "NKRI adalah singkatan dari…", options: ["Negara Kesatuan Republik Indonesia", "Negara Kepulauan Republik Indonesia", "Nusantara Kita Republik Indonesia", "Negeri Kaya Raya Indonesia"], answer: "Negara Kesatuan Republik Indonesia", hint: "Bentuk negara kita." },
      { q: "Indonesia disebut negara kepulauan karena terdiri atas banyak…", options: ["Pulau", "Gunung", "Danau", "Kota"], answer: "Pulau", hint: "Ribuan pulau." },
      { q: "Ibu kota Negara Republik Indonesia adalah…", options: ["Jakarta", "Surabaya", "Bandung", "Medan"], answer: "Jakarta", hint: "Pusat pemerintahan." },
    ],
    menengah: [
      { q: "Wilayah Indonesia terdiri atas daratan, lautan, dan…", options: ["Udara", "Luar angkasa", "Bawah tanah dalam", "Negara lain"], answer: "Udara", hint: "Wilayah darat, laut, dan udara." },
      { q: "Menjaga keutuhan wilayah NKRI adalah kewajiban…", options: ["Seluruh warga negara", "TNI saja", "Presiden saja", "Anak-anak saja"], answer: "Seluruh warga negara", hint: "Tanggung jawab bersama." },
      { q: "Alat pemersatu bangsa yang berupa bahasa adalah…", options: ["Bahasa Indonesia", "Bahasa daerah", "Bahasa asing", "Bahasa gaul"], answer: "Bahasa Indonesia", hint: "Bahasa persatuan." },
    ],
    sulit: [
      { q: "Konsep yang memandang wilayah laut sebagai pemersatu pulau-pulau Indonesia disebut Wawasan…", options: ["Nusantara", "Kebangsaan", "Global", "Daerah"], answer: "Nusantara", hint: "Cara pandang kesatuan wilayah." },
      { q: "Salah satu cara menjaga keutuhan NKRI adalah…", options: ["Menjaga persatuan & bela negara", "Memecah belah bangsa", "Tawuran antarwarga", "Mementingkan daerah sendiri"], answer: "Menjaga persatuan & bela negara", hint: "Bersatu & rela membela negara." },
      { q: "Negara Indonesia berbentuk…", options: ["Kesatuan", "Serikat", "Federasi", "Kerajaan"], answer: "Kesatuan", hint: "Sesuai nama NKRI." },
    ],
  },
};
