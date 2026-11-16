
"use strict";

/* ---------- 1. TAHUN FOOTER ---------- */
function isiTahun() {
  const elemenTahun = document.getElementById("tahun");
  if (elemenTahun) {
    elemenTahun.textContent = new Date().getFullYear();
  }
}

/* ---------- 2. HAMBURGER MENU (bonus 1) ---------- */
function aktifkanHamburger() {
  const header = document.getElementById("header-situs");
  const tombol = document.getElementById("tombol-menu");
  const menu = document.getElementById("menu-utama");
  if (!header || !tombol || !menu) return;

  // Class ini memberi tahu CSS bahwa JavaScript aktif,
  // sehingga menu HP boleh disembunyikan.
  header.classList.add("js-aktif");

  function aturMenu(buka) {
    menu.classList.toggle("terbuka", buka);
    tombol.setAttribute("aria-expanded", String(buka));
    tombol.setAttribute("aria-label", buka ? "Tutup menu navigasi" : "Buka menu navigasi");
  }

  tombol.addEventListener("click", function () {
    aturMenu(!menu.classList.contains("terbuka"));
  });

  // Tutup menu dengan tombol Escape
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu.classList.contains("terbuka")) {
      aturMenu(false);
      tombol.focus();
    }
  });
}

/* ---------- 3. KATALOG DINAMIS (bonus 3) ---------- */
// Data contoh. Ganti dengan program resmi komunitas jika sudah ada.
const programs = [
  {
    id: 1,
    name: "Web Development",
    category: "Programming",
    description: "Pengenalan pengembangan website dengan HTML, CSS, dan JavaScript.",
    image: "img/program-web.svg",
    info: "[Build Your First Website]"
  },
  {
    id: 2,
    name: "Python Programming",
    category: "Programming",
    description: "Dasar logika pemrograman menggunakan bahasa Python.",
    image: "img/program-python.svg",
    info: "[Python Basic Challenge]"
  },
  {
    id: 3,
    name: "UI/UX Design",
    category: "Design",
    description: "Belajar merancang tampilan aplikasi yang mudah digunakan.",
    image: "img/program-ui.svg",
    info: "[Design Your First App]"
  },
  {
    id: 4,
    name: "Database Workshop",
    category: "Database",
    description: "Mengenal cara menyimpan dan mengelola data dengan database.",
    image: "img/program-database.svg",
    info: "[Database Practice Lab]"
  },
  {
    id: 5,
    name: "Mobile Development",
    category: "Programming",
    description: "Pengenalan pembuatan aplikasi untuk perangkat mobile.",
    image: "img/program-mobile.svg",
    info: "[Mini Mobile App Project]"
  },
  {
    id: 6,
    name: "Tech Sharing Session",
    category: "Technology",
    description: "Sesi berbagi pengetahuan seputar teknologi terbaru.",
    image: "img/program-sharing.svg",
    info: "[Ngobrol Teknologi & Career Talk]"
  }
];

// Membuat satu kartu program. Memakai textContent agar teks aman ditampilkan.
function buatKartu(program) {
  const kartu = document.createElement("article");
  kartu.className = "kartu kartu-program";

  const gambar = document.createElement("img");
  gambar.src = program.image;
  gambar.alt = "Ilustrasi program " + program.name;
  gambar.width = 400;
  gambar.height = 250;
  gambar.loading = "lazy";

  const isi = document.createElement("div");
  isi.className = "kartu-isi";

  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = program.category;

  const judul = document.createElement("h3");
  judul.textContent = program.name;

  const deskripsi = document.createElement("p");
  deskripsi.textContent = program.description;

  const info = document.createElement("p");
  info.className = "info-kegiatan";
  info.textContent = "Kegiatan: " + program.info;

  const tautan = document.createElement("a");
  tautan.className = "tautan";
  tautan.href = "kontak.html";
  tautan.textContent = "Tanya informasi lebih lanjut";

  isi.append(badge, judul, deskripsi, info, tautan);
  kartu.append(gambar, isi);
  return kartu;
}

function siapkanKatalog() {
  const daftar = document.getElementById("daftar-program");
  const kolomCari = document.getElementById("cari-program");
  const pilihKategori = document.getElementById("filter-kategori");
  const tombolReset = document.getElementById("tombol-reset");
  const pesanKosong = document.getElementById("pesan-kosong");
  const jumlahHasil = document.getElementById("jumlah-hasil");
  if (!daftar || !kolomCari || !pilihKategori) return;

  // Menyaring data berdasarkan kata kunci DAN kategori, lalu menampilkannya.
  function tampilkanProgram() {
    const kataKunci = kolomCari.value.trim().toLowerCase();
    const kategori = pilihKategori.value;

    const hasil = programs.filter(function (program) {
      const cocokNama = program.name.toLowerCase().includes(kataKunci);
      const cocokKategori = kategori === "semua" || program.category === kategori;
      return cocokNama && cocokKategori;
    });

    daftar.replaceChildren();
    hasil.forEach(function (program) {
      daftar.appendChild(buatKartu(program));
    });

    pesanKosong.hidden = hasil.length > 0;
    jumlahHasil.textContent = "Menampilkan " + hasil.length + " dari " + programs.length + " program";
  }

  kolomCari.addEventListener("input", tampilkanProgram);
  pilihKategori.addEventListener("change", tampilkanProgram);
  tombolReset.addEventListener("click", function () {
    kolomCari.value = "";
    pilihKategori.value = "semua";
    tampilkanProgram();
    kolomCari.focus();
  });

  tampilkanProgram();
}

/* ---------- 4. VALIDASI FORM (bonus 2) ---------- */
// Validasi bawaan HTML5 (required, type, pattern, minlength) tetap aktif.
// Kode ini hanya mengganti gelembung bawaan browser dengan pesan di bawah input.
function ambilPesanError(input) {
  const v = input.validity;
  if (v.valid) return "";

  if (v.valueMissing) {
    const pesanKosong = {
      nama: "Nama lengkap wajib diisi.",
      email: "Email wajib diisi.",
      hp: "Nomor HP wajib diisi.",
      keperluan: "Pilih salah satu keperluan.",
      pesan: "Pesan wajib diisi."
    };
    return pesanKosong[input.id] || "Kolom ini wajib diisi.";
  }
  if (v.typeMismatch) return "Format email tidak valid. Contoh: nama@email.com";
  if (v.patternMismatch) return "Nomor HP harus berisi 10 sampai 13 angka, tanpa spasi atau tanda baca.";
  if (v.tooShort) return "Pesan terlalu pendek. Minimal " + input.minLength + " karakter.";
  if (v.tooLong) return "Pesan terlalu panjang. Maksimal " + input.maxLength + " karakter.";
  return "Isi kolom ini dengan benar.";
}

function tampilkanError(input) {
  const pesan = ambilPesanError(input);
  const elemenError = document.getElementById("error-" + input.id);
  if (elemenError) elemenError.textContent = pesan;
  input.classList.toggle("tidak-valid", pesan !== "");
  input.setAttribute("aria-invalid", pesan !== "" ? "true" : "false");
}

function siapkanForm() {
  const form = document.getElementById("form-kontak");
  if (!form) return;

  const kolom = form.querySelectorAll("input, select, textarea");
  const tombolKirim = document.getElementById("tombol-kirim");
  const pesanSukses = document.getElementById("pesan-sukses");

  kolom.forEach(function (input) {
    // Saat pengguna meninggalkan kolom, cek isinya.
    input.addEventListener("blur", function () {
      tampilkanError(input);
    });
    // Saat mengetik, pesan error hilang begitu isinya sudah benar.
    input.addEventListener("input", function () {
      if (input.classList.contains("tidak-valid")) tampilkanError(input);
      pesanSukses.hidden = true;
    });
    // Browser memicu "invalid" saat tombol kirim ditekan dan data salah.
    // preventDefault() hanya menyembunyikan gelembung bawaan; pengiriman tetap diblokir.
    input.addEventListener("invalid", function (event) {
      event.preventDefault();
      tampilkanError(input);
    });
  });

  // Fokuskan kolom pertama yang bermasalah.
  tombolKirim.addEventListener("click", function () {
    const pertama = form.querySelector(":invalid");
    if (pertama) pertama.focus();
  });

  // Event submit hanya berjalan jika semua data sudah valid.
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    kolom.forEach(function (input) {
      tampilkanError(input);
    });
    pesanSukses.textContent = "Terima kasih, data Anda sudah valid. Ini hanya simulasi: pesan belum dikirim ke server.";
    pesanSukses.hidden = false;
    form.reset();
    kolom.forEach(function (input) {
      input.classList.remove("tidak-valid");
      input.removeAttribute("aria-invalid");
    });
  });
}

/* ---------- MENJALANKAN SEMUA FUNGSI ---------- */
isiTahun();
aktifkanHamburger();
siapkanKatalog();
siapkanForm();
