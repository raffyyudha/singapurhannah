# 📝 Panduan Cepat Edit Website Moon Pets

Panduan singkat untuk mengedit bagian-bagian penting website.

## 🎨 Mengubah Warna

### Warna Utama
Buka `assets/css/style.css` dan cari class berikut:
- `.brand-color-1` - Warna brand pertama
- `.brand-color-2` - Warna brand kedua
- `.brand-color-5` - Warna aksen

Contoh:
```css
.brand-color-2 {
    color: #your-color-here;
}
```

## 📝 Mengubah Teks Utama

### Judul Homepage
Buka `index.html`, cari baris ~284:
```html
<h1 class="headline tilt-left"><span class="spark-left">Everything you need </span></h1>
<h1 class="headline">under one <span class="underline-wavey brand-color-2">woof</span> </h1>
```

### Deskripsi "About Us"
Cari baris ~370-372:
```html
<h2 class="heading-4">A little bit <span class="underline-sketchy brand-color-5 h2">about</span> us.</h2>
<p class="paragraph">Our main goal at Bark Shop is to spoil your pet rotten...</p>
```

## 🖼️ Mengganti Gambar

### Logo di Header
Baris ~260, ganti path gambar:
```html
<img src="assets/images/63d5451f684108e227bfce7d_63cd49420760e73474435671_Bark-Shop-Logo.svg" />
```

### Foto Header (5 foto utama)
Baris ~291-300, ada 5 foto yang bisa diganti:
- `header-photo-left-2` - Foto kiri bawah
- `header-photo-left-1` - Foto kiri atas
- `header-photo-center` - Foto tengah
- `header-photo-right-1` - Foto kanan atas
- `header-photo-right-2` - Foto kanan bawah

## 🔗 Mengubah Link

### Link Booking
Cari semua link yang menuju:
```
https://barkshop.portal.gingrapp.com/#/public/login
```
Ganti dengan sistem booking baru jika ada.

### Link Menu Navigasi
Baris ~264-270:
```html
<a href="/grooming" class="nav-link">Grooming</a>
<a href="/dental" class="nav-link">Dental</a>
<a href="/training" class="nav-link">Training</a>
```

## 📱 Informasi Kontak

### Alamat
Baris ~347, link Google Maps:
```html
<a href="https://www.google.com/maps/place/Bark+Shop+2/..." target="_blank">
```

### Lokasi Baru
Baris ~354:
```html
<h3 class="heading-16-navy">ALTOONA LOCATION OPENS AUGUST 1ST!</h3>
```

## 🎯 Tips Cepat

### Mencari Teks Tertentu
1. Buka `index.html` di text editor (VS Code, Notepad++, dll)
2. Tekan `Ctrl + F` (Windows) atau `Cmd + F` (Mac)
3. Ketik teks yang ingin dicari
4. Edit langsung

### Preview Perubahan
1. Simpan file yang sudah diedit
2. Refresh browser (F5)
3. Lihat hasilnya

### Backup
Sebelum edit besar-besaran:
1. Copy folder `bark-shop-clean`
2. Rename jadi `bark-shop-clean-backup`
3. Edit di folder asli

## ⚠️ Yang TIDAK Boleh Dihapus

- Jangan hapus folder `assets/js/` - Website butuh JavaScript untuk animasi
- Jangan hapus `assets/css/style.css` - Semua styling ada di sini
- Jangan hapus tag `<script>` di HTML - Diperlukan untuk fungsi website

## 🆘 Troubleshooting

### Gambar Tidak Muncul
- Cek nama file di `assets/images/` sama dengan di HTML
- Cek huruf besar/kecil (case-sensitive)
- Pastikan path dimulai dengan `assets/images/`

### Style Tidak Berubah
- Pastikan sudah save file CSS
- Hard refresh browser: `Ctrl + Shift + R` (Windows) atau `Cmd + Shift + R` (Mac)
- Cek typo di class name

### Website Berantakan
- Restore dari backup
- Atau download ulang dari folder asli

## 📞 Butuh Bantuan?

Jika ada masalah:
1. Cek kembali panduan ini
2. Lihat README.md untuk info lebih detail
3. Restore dari backup jika perlu

---

**Selamat mengedit! 🎉**
