// ==================================================================================
// CARA MENGAMBIL 550+ LINK INSTAGRAM REELS SECARA OTOMATIS
// ==================================================================================
// 1. Buka halaman https://www.instagram.com/huggspawly/reels/ di Google Chrome (Pastikan sudah Login)
// 2. Klik Kanan di sembarang tempat -> pilih "Inspect" atau "Inspeksi"
// 3. Masuk ke tab "Console" yang ada di sebelah tab "Elements"
// 4. Copy (Salin) SEMUA kode di bawah ini, Paste ke Console, lalu tekan ENTER
// 5. Tunggu script berjalan scrolldown sendiri sampai selesai.
// 6. Hasilnya akan otomatis tercopy, tinggal Paste ke notepad/file ini.
// ==================================================================================

async function scrapeReels() {
    let links = new Set();
    let previousHeight = 0;
    let noChangeCount = 0;

    console.log("🚀 Memulai proses pengambilan link...");
    console.log("Mohon jangan tutup tab ini. Scroll akan berjalan otomatis.");

    while (true) {
        // 1. Ambil link yang terlihat
        let elements = document.querySelectorAll('a[href*="/reel/"]');
        let newFound = 0;

        elements.forEach(a => {
            let cleanLink = a.href.split('?')[0]; // Hapus tracking code
            if (!links.has(cleanLink)) {
                links.add(cleanLink);
                newFound++;
            }
        });

        console.log(`⏳ Mengumpulkan... Total: ${links.size} video (${newFound} baru)`);

        // 2. Scroll ke bawah
        window.scrollTo(0, document.body.scrollHeight);

        // 3. Tunggu loading (random antara 2-3 detik biar aman)
        await new Promise(r => setTimeout(r, 2000 + Math.random() * 1000));

        // 4. Cek apakah sudah mentok bawah
        let currentHeight = document.body.scrollHeight;
        if (currentHeight === previousHeight) {
            noChangeCount++;
            if (noChangeCount >= 3) { // Coba 3x kalau mentok, berhenti
                console.log("✅ Halaman sudah mencapai paling bawah.");
                break;
            }
        } else {
            noChangeCount = 0; // Reset counter kalau masih jalan
        }
        previousHeight = currentHeight;

        // Limit safety (hapus baris di bawah jika ingin ambil SEMUA tanpa batas)
        if (links.size > 1000) break;
    }

    // 5. Output Data
    const result = Array.from(links);
    console.clear();
    console.log("🎉 SELESAI!");
    console.log("Total Video Ditemukan: " + result.length);

    // Format array string untuk langsung dipakai di code
    const jsonResult = JSON.stringify(result, null, 2);
    console.log(jsonResult);

    // Coba copy ke clipboard
    try {
        copy(jsonResult);
        console.log("📋 Link SUDAH DICOPY ke Clipboard otomatis! Tinggal Paste (Ctrl+V).");
    } catch (e) {
        console.log("⚠️ Gagal auto-copy. Silakan copy manual output di atas.");
    }
}

scrapeReels();
