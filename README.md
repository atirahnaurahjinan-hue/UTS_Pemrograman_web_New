# CodeCommunity

Website profil komunitas programmer kampus. Dibuat untuk UTS mata kuliah Pemrograman Web Dasar.

## Identitas

| Keterangan | Isi |
|---|---|
| Nama mahasiswa | [NAMA MAHASISWA] |
| NIM | [NIM] |
| Mata kuliah | Pemrograman Web Dasar |
| Nama proyek | CodeCommunity |
| Tema | B. Profil Organisasi Kampus |
| Objek organisasi | [NAMA KOMUNITAS] di [NAMA KAMPUS] |

## Deskripsi dan Tujuan

CodeCommunity adalah website statis yang memperkenalkan komunitas programmer kampus kepada mahasiswa. Tujuannya:

- memperkenalkan komunitas dan tujuannya,
- menampilkan program dan jadwal kegiatan,
- menampilkan pengurus dan dokumentasi,
- mempermudah pengunjung menghubungi komunitas.

## Fitur

- 4 halaman saling terhubung: Beranda, Tentang, Program & Kegiatan, Kontak.
- Header, navigasi (penanda halaman aktif), dan footer yang sama di semua halaman.
- Hamburger menu untuk HP (`classList.toggle()`), dapat dipakai dengan keyboard.
- Katalog 6 program yang dirender JavaScript dari array objek, dengan pencarian nama dan filter kategori.
- Tabel jadwal kegiatan (`thead` dan `tbody`).
- Formulir kontak dengan validasi HTML5 dan pesan error JavaScript di bawah input.
- Tampilan responsif untuk HP, tablet, dan desktop.

Catatan: formulir hanya simulasi di browser. Pesan tidak dikirim ke server karena tidak ada backend.

## Teknologi

HTML5, CSS3 (Flexbox, Grid, CSS Variables, Media Query), Vanilla JavaScript, Google Fonts (Poppins dan Inter). Tidak memakai framework atau library pihak ketiga.

## Struktur Folder

```text
NIM-Nama-UTS/
├── index.html
├── tentang.html
├── katalog.html
├── kontak.html
├── css/style.css
├── js/script.js
├── img/          (ilustrasi SVG buatan sendiri)
├── bukti/        (screenshot validasi W3C)
└── README.md
```

## Cara Menjalankan

1. Buka folder proyek di Visual Studio Code.
2. Buka `index.html` di browser (klik dua kali, atau pakai ekstensi Live Server).
3. Pindah halaman lewat menu navigasi.

Koneksi internet hanya dibutuhkan untuk memuat Google Fonts. Tanpa internet, website tetap tampil dengan font cadangan.

## Sumber Gambar

Semua gambar di folder `img/` adalah ilustrasi SVG sederhana buatan sendiri. Gambar bertema galeri di halaman Tentang adalah ilustrasi, bukan dokumentasi kegiatan asli. Font dari Google Fonts.

## Kendala dan Cara Mengatasi

| Kendala | Cara mengatasi |
|---|---|
| [ISI KENDALA 1] | [ISI SOLUSI 1] |
| [ISI KENDALA 2] | [ISI SOLUSI 2] |

## Validasi HTML

Status: [BELUM DIPERIKSA]. Isi setelah keempat halaman dicek di https://validator.w3.org/. Screenshot hasil disimpan di folder `bukti/`:

- `validasi-beranda.png`
- `validasi-tentang.png`
- `validasi-katalog.png`
- `validasi-kontak.png`

## Link Website

[BELUM DI-HOSTING]. Isi jika sudah memakai GitHub Pages atau Netlify.
