# Toko Digital Indonesia

Website company profile dan katalog layanan berbasis Next.js 16.4.5 App Router, React 19.3.1, dan Tailwind CSS 4.3.5. Proyek ini menggunakan JavaScript dan siap dikembangkan maupun di-deploy ke Vercel.

## Kebutuhan sistem

- Node.js 20.9.0 atau lebih baru (disarankan Node.js 22 LTS)
- npm 10 atau lebih baru
- Git (opsional, untuk push ke GitHub)

## Menjalankan di komputer lokal

1. Ekstrak ZIP proyek ini.
2. Buka terminal pada folder `toko-digital-indonesia`.
3. Salin `.env.example` menjadi `.env.local`.
4. Edit `NEXT_PUBLIC_SITE_URL` menjadi alamat website yang akan digunakan. Saat pengembangan lokal, nilai `http://localhost:3000` juga dapat digunakan.
5. Jalankan perintah berikut:

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` di browser.

## Build produksi

```bash
npm run build
npm run start
```

Perintah `npm run build` harus berhasil sebelum deployment. Jalankan `npm run start` untuk menguji hasil build secara lokal.

## Deploy ke Vercel

### Cara melalui GitHub

1. Buat repository baru di GitHub.
2. Upload seluruh isi folder proyek (termasuk `package.json`, `src`, dan `public`) ke repository tersebut.
3. Masuk ke Vercel dan pilih **Add New → Project**.
4. Import repository GitHub yang baru dibuat.
5. Framework akan terdeteksi sebagai Next.js. Biarkan Build Command menggunakan `next build` dan Output Directory mengikuti pengaturan bawaan Next.js.
6. Pada **Environment Variables**, tambahkan:
   - `NEXT_PUBLIC_SITE_URL` = URL produksi Anda, misalnya `https://www.domainanda.com`.
   - `GOOGLE_SITE_VERIFICATION` = kode verifikasi Google Search Console (opsional, dapat ditambahkan setelah verifikasi).
7. Klik **Deploy**.
8. Setelah domain terhubung, pastikan `NEXT_PUBLIC_SITE_URL` menggunakan domain produksi yang benar, lalu lakukan redeploy.

### Cara melalui CLI Vercel

```bash
npm install
npm run build
npx vercel
```

Ikuti instruksi CLI. Untuk deployment produksi:

```bash
npx vercel --prod
```

Set `NEXT_PUBLIC_SITE_URL` dan `GOOGLE_SITE_VERIFICATION` melalui pengaturan Environment Variables proyek Vercel.

## SEO dan Google Search Console

File berikut disediakan melalui Next.js Metadata Routes:

- `src/app/robots.js` → `https://domainanda.com/robots.txt`
- `src/app/sitemap.js` → `https://domainanda.com/sitemap.xml`

Metadata di `src/app/layout.js` mencakup title, description, keywords, canonical, Open Graph, Twitter Cards, robots, dan Google verification. `src/app/page.js` menyediakan structured data JSON-LD untuk Organization, WebSite, dan ItemList layanan.

Langkah konfigurasi Search Console:

1. Pastikan domain dan HTTPS sudah aktif.
2. Buka Google Search Console: https://search.google.com/search-console
3. Tambahkan properti domain atau URL prefix website.
4. Lakukan verifikasi sesuai metode yang dipilih. Untuk metode HTML tag, masukkan nilai meta verification ke `GOOGLE_SITE_VERIFICATION` tanpa menambahkan tag HTML secara manual.
5. Buka menu **Sitemaps**, lalu kirim `sitemap.xml`.
6. Gunakan **URL Inspection** untuk meminta pengindeksan halaman utama.

Pengindeksan dan peringkat pencarian ditentukan oleh Google; pengiriman sitemap bukan jaminan halaman langsung terindeks.

## Kustomisasi data bisnis

Informasi resmi website dipusatkan di `src/lib/site-config.js`:

- Nama brand
- Email
- Nomor telepon dan WhatsApp
- Link Saluran WhatsApp
- Deskripsi website

Daftar layanan, harga, deskripsi, serta benefit berada di `src/lib/services.js`. Ubah data di file tersebut untuk memperbarui katalog dan structured data layanan.

## Catatan domain dan harga

Fallback URL metadata disiapkan sebagai `https://tokodigitalindonesia.vercel.app`. Ganti `NEXT_PUBLIC_SITE_URL` dengan URL deployment atau domain resmi sebelum website dipublikasikan agar canonical, sitemap, robots, dan structured data mengarah ke alamat yang benar.

Harga di katalog mengikuti informasi awal yang diberikan dan dapat diperbarui di `src/lib/services.js`. Harga domain, layanan custom, dan integrasi pihak ketiga dapat bergantung pada ekstensi, spesifikasi, ruang lingkup, serta kebijakan penyedia terkait.

## Struktur folder

```text
toko-digital-indonesia/
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   └── site.webmanifest
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── robots.js
│   │   └── sitemap.js
│   ├── components/
│   │   ├── about.jsx
│   │   ├── contact.jsx
│   │   ├── hero.jsx
│   │   ├── section-heading.jsx
│   │   ├── services.jsx
│   │   ├── site-footer.jsx
│   │   ├── site-header.jsx
│   │   └── whatsapp-float.jsx
│   └── lib/
│       ├── services.js
│       └── site-config.js
├── .env.example
├── .gitignore
├── .nvmrc
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
└── README.md
```
