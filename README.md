# Cetak Tegak Bersambung

Aplikasi web untuk membuat dan mencetak lembar latihan menulis tegak bersambung (buku halus kasar / garis lima) untuk siswa dan anak-anak. Dibangun dengan Next.js.

## Fitur

- **Pratinjau langsung** — setiap perubahan teks atau pengaturan langsung terlihat
- **18+ font cursive** — Cedarville Cursive, Dancing Script, Sacramento, Caveat, Kalam, Playwrite ID, dan masih banyak lagi
- **3 mode tulisan**: Hitam Jelas, Jiplak (tracing), dan Garis Tepi (outline)
- **Kustomisasi garis panduan** — tema warna garis (Klasik, Biru, Abu, Ungu, Hijau, Jingga, Pelangi, Sepia, Kustom), arsir kolom huruf kecil, ketebalan garis, dan garis bantu kustom
- **Header lembar tugas** — Nama, Kelas, Tanggal, dan kolom Nilai/Paraf
- **Garis pinggir merah** — sesuai format buku tulis klasik Indonesia
- **Baris kosong bergaris** — sediakan baris latihan mandiri di bawah
- **3 ukuran kertas** — A4, Letter, Legal
- **Import teks** dari file .txt dan .docx (Word)
- **Auto-wrap** — potong baris otomatis jika teks melebihi lebar
- **Cetak langsung** (Print) dari browser
- **Persistensi** — semua pengaturan tersimpan otomatis di localStorage

## Cara Memulai

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Perintah Lain

| Perintah | Kegunaan |
|----------|----------|
| `npm run build` | Build production |
| `npm start` | Jalankan production server |
| `npm run lint` | Jalankan ESLint |

## Cara Penggunaan

1. **Tab Isi Teks** — Pilih preset teks (Pancasila, Sumpah Pemuda, puisi, pantun, dll.) atau ketik teks sendiri. Bisa juga import dari file .txt/.docx.
2. **Tab Desain Huruf** — Pilih font cursive, ukuran huruf, jarak antar huruf, warna tinta, dan mode tulisan. Gunakan slider **Penyelarasan Vertikal** agar huruf kecil tepat di dalam kolom arsir.
3. **Tab Garis & Kertas** — Atur ukuran kertas, tinggi baris, warna garis, arsir kolom, jumlah baris kosong, ketebalan garis, garis bantu kustom, dan fitur lainnya.
4. Klik **Cetak Lembar Latihan** (Print) untuk mencetak.

## Teknologi

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Mammoth.js](https://github.com/mwilliamson/mammoth.js) — konversi .docx ke teks
- [Next/font/google](https://nextjs.org/docs/app/api-reference/components/font) — font Google

## Lisensi

Hak cipta © 2026. Tidak dilisensikan — proyek pribadi.
