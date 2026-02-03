/**
 * PSEO Tools for SingapurHannah / Huggs Pawly
 * Created for Raffy Yudha's PSEO Strategy
 */

const PSEO_CONFIG = {
    whatsappNumber: "6588556677", // Ganti dengan nomor asli
    baseLocation: "148 Yishun Street 11, Singapore 760148",
    defaultMessage: "Hi, I'm interested in dog grooming services. I want to claim the promo from Raffy Yudha."
};

/**
 * 1. INSTAGRAM VIDEO ROTATOR
 * Memasukkan video Instagram secara acak ke dalam container target.
 * @param {Array} videoLinks - Array berisi link video Instagram (e.g., https://www.instagram.com/reel/Crtxxxxx/)
 * @param {String} targetSelector - ID atau Class elemen tempat video akan muncul (default: #ig-video-container)
 */
function initInstagramRotator(videoLinks, targetSelector = '#ig-video-container') {
    const container = document.querySelector(targetSelector);
    if (!container || !videoLinks || videoLinks.length === 0) return;

    // Pilih video secara acak (atau bisa diubah based on hash nama file agar konsisten)
    // Menggunakan Math.random() agar setiap refresh bisa beda, bagus untuk user experience
    const randomIndex = Math.floor(Math.random() * videoLinks.length);
    const selectedLink = videoLinks[randomIndex];

    // 4. ROBUST EXTRACT ID & BUILD EMBED URL
    // Regex matches /reel/CODE or /p/CODE regardless of username
    // Example: https://www.instagram.com/huggspawly/reel/DRE2yO9kRN3/ -> DRE2yO9kRN3
    const reelIdMatch = selectedLink.match(/\/(?:reel|p)\/([a-zA-Z0-9_-]+)/);

    // Fallback logic if regex fails (though unrelated links shouldn't be here)
    let finalEmbedUrl = "";
    if (reelIdMatch && reelIdMatch[1]) {
        // Standard Cleaner Embed URL
        finalEmbedUrl = `https://www.instagram.com/reel/${reelIdMatch[1]}/embed/`;
    } else {
        // Fallback: simple append if structure is weird but valid
        finalEmbedUrl = selectedLink.split('?')[0];
        if (!finalEmbedUrl.endsWith('/')) finalEmbedUrl += '/';
        finalEmbedUrl += 'embed';
    }

    const iframeHtml = `
        <div style="display: flex; justify-content: center; margin: 20px 0; width: 100%;">
            <iframe 
                src="${finalEmbedUrl}" 
                width="100%" 
                height="600" 
                frameborder="0" 
                scrolling="no" 
                allowtransparency="true"
                allow="encrypted-media"
                title="Instagram Video"
                loading="lazy" 
                style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); max-width: 400px; background: white; min-height: 550px;">
            </iframe>
        </div>
    `;

    container.innerHTML = iframeHtml;
}

/**
 * 2. WHATSAPP BUBBLE CHAT
 * Menambahkan widget WA melayang di pojok kanan bawah.
 * Mengambil lokasi dari halaman jika ada elemen dengan ID 'location-name'
 */
function initWhatsAppBubble() {
    // Cek apakah ada lokasi spesifik di halaman ini (untuk PSEO)
    const locationEl = document.getElementById('pseo-location-name');
    let locationName = locationEl ? locationEl.textContent.trim() : "";

    let message = PSEO_CONFIG.defaultMessage;
    if (locationName) {
        message = `Hi, I'm interested in dog grooming near ${locationName}. I want to claim the promo from Raffy Yudha.`;
    }

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${PSEO_CONFIG.whatsappNumber}?text=${encodedMessage}`;

    const bubbleHtml = `
        <div id="wa-bubble-container" style="position: fixed; bottom: 20px; right: 20px; z-index: 99999; font-family: 'Montserrat', sans-serif;">
            <a href="${waUrl}" target="_blank" style="text-decoration: none; display: flex; align-items: center; gap: 10px;">
                <div style="background: white; padding: 10px 15px; border-radius: 20px 20px 5px 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); display: none; transition: all 0.3s;" id="wa-bubble-text">
                    <p style="margin: 0; color: #333; font-size: 14px; font-weight: 500;">Chat with us!</p>
                    <span style="font-size: 10px; color: #888;">Claim Promo from Raffy Yudha</span>
                </div>
                <div style="background: #25D366; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(37, 211, 102, 0.4); position: relative;">
                    <svg width="35" height="35" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-0.867-2.03-0.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                </div>
            </a>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', bubbleHtml);

    // Animasi text bubble muncul setelah 1 detik
    setTimeout(() => {
        const textBubble = document.getElementById('wa-bubble-text');
        if (textBubble) {
            textBubble.style.display = 'block';
            textBubble.style.opacity = '0';
            setTimeout(() => { textBubble.style.opacity = '1'; }, 100);
        }
    }, 1500);
}

/**
 * 3. CONTENT SPINNER (Simple)
 * Mengganti teks di dalam elemen dengan class 'spin-text' secara acak dari opsi yang disediakan.
 * Contoh HTML: <span class="spin-text" data-options="Amazing|Fantastic|Great|Superb">Great</span>
 */
function initContentSpinner() {
    const elements = document.querySelectorAll('.spin-text');
    elements.forEach(el => {
        const options = el.getAttribute('data-options').split('|');
        if (options.length > 0) {
            const randomOption = options[Math.floor(Math.random() * options.length)];
            el.textContent = randomOption;
        }
    });
}

// Auto-init jika dipanggil
document.addEventListener('DOMContentLoaded', () => {
    // DISABLED FOR MAIN PAGE:
    // initWhatsAppBubble(); 

    initContentSpinner();

    // Tools are ready to be used by sitemap generator or specific page scripts
});

// Expose functions globally
window.Pseotools = {
    initVideos: initInstagramRotator,
    initWA: initWhatsAppBubble
};
