# Moon Pets Website

Website untuk Moon Pets - salon hewan peliharaan modern yang menawarkan layanan grooming, training, dan dental.

## 📁 Struktur Folder

```
bark-shop-clean/
├── index.html          # File HTML utama
├── assets/
│   ├── css/           # File stylesheet
│   │   └── style.css
│   ├── js/            # File JavaScript
│   │   ├── webflow.b66b3f86.c3fd2b64c19ec686.js
│   │   └── webflow.schunk.*.js (file lainnya)
│   └── images/        # Semua gambar, logo, dan icon
│       ├── *.jpg      # Foto-foto
│       ├── *.png      # Gambar PNG
│       ├── *.svg      # Icon dan logo
│       └── *.json     # Animasi Lottie
└── README.md          # File ini
```

## 🚀 Cara Menggunakan

### Membuka Website Secara Lokal

1. Buka file `index.html` dengan browser favorit Anda
2. Atau gunakan local server untuk hasil yang lebih baik:
   ```bash
   # Jika punya Python 3
   python -m http.server 8000
   
   # Atau gunakan Live Server di VS Code
   ```

### Mengedit Website

#### Mengubah Teks
- Buka `index.html` di text editor
- Cari teks yang ingin diubah
- Edit langsung di dalam tag HTML

#### Mengubah Style/Tampilan
- Buka `assets/css/style.css`
- Cari class atau selector yang ingin diubah
- Modifikasi properti CSS sesuai kebutuhan

#### Mengganti Gambar
1. Letakkan gambar baru di folder `assets/images/`
2. Buka `index.html`
3. Cari tag `<img src="assets/images/nama-file-lama.jpg">`
4. Ganti dengan nama file baru Anda

## 📝 Informasi Penting

### Fitur Website
- **Responsive Design** - Tampil baik di desktop, tablet, dan mobile
- **Animasi Lottie** - Animasi interaktif untuk tombol-tombol utama
- **Google Analytics** - Tracking pengunjung website
- **Google Fonts** - Font: DM Sans, Mulish, Mali, Indie Flower

### Link Eksternal yang Digunakan
- Booking system: `https://barkshop.portal.gingrapp.com`
- Google Maps untuk lokasi
- Google Analytics untuk tracking
- Google Fonts untuk typography

### Halaman-halaman
- `/` - Homepage
- `/grooming` - Layanan grooming
- `/dental` - Layanan dental
- `/training` - Layanan training
- `/about` - Tentang kami
- `/reviews` - Review pelanggan
- `/contact` - Kontak
- `/pay` - Pembayaran online

## 🛠️ Tips Editing

### Mengubah Warna Brand
Cari di `style.css` untuk class yang mengandung `brand-color` dan ubah nilai warnanya.

### Mengubah Logo
Ganti file logo di `assets/images/` dengan nama yang sama, atau update path di `index.html` pada baris yang mengandung `Bark-Shop-Logo.svg`.

### Menambah Section Baru
Copy paste section yang sudah ada di `index.html` dan modifikasi kontennya.

## 📞 Kontak

**Moon Pets**
- Lokasi: 9325 Bishop Dr Suite 105, Waukee, IA 50263
- Website: www.moonpets.com

## 📄 Lisensi

Website ini dibuat dengan Webflow dan telah diorganisir untuk kemudahan editing.

---

**Catatan:** File-file di folder ini sudah dirapikan dan siap untuk diedit. Semua path sudah diupdate ke struktur folder lokal.
