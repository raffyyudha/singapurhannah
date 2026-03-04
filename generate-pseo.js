const fs = require('fs');
const path = require('path');

// =============================================================================
// CONFIGURATION
// =============================================================================
const DOMAIN = "https://huggspawly.com"; // Ganti dengan domain asli nanti
const BASE_URL = DOMAIN;
const OUTPUT_SITEMAP = "sitemap-pseo.xml";
const OUTPUT_LOCATIONS_JSON = "assets/js/pseo-generated-locations.js"; // Untuk dipanggil di frontend

// =============================================================================
// DATA SEED (LOKASI SEKITAR YISHUN, SEMBAWANG, CANBERRA)
// =============================================================================
const TOWNS = ["Yishun", "Sembawang", "Canberra", "Khatib", "Admiralty", "Woodlands"];
const PLACES = [
    "Northpoint City", "Junction 9", "Wisteria Mall", "Chong Pang Market",
    "Yishun Park", "Yishun Pond", "Lower Seletar Reservoir", "Sembawang Park",
    "Sembawang Hot Spring", "Canberra Plaza", "Bukit Canberra", "Khatib MRT",
    "Yishun MRT", "Canberra MRT", "Sembawang MRT", "Admiralty MRT", "Woodlands MRT"
];

const STREET_PREFIXES = [
    "Yishun Avenue 1", "Yishun Avenue 2", "Yishun Avenue 3", "Yishun Avenue 4",
    "Yishun Avenue 5", "Yishun Avenue 6", "Yishun Avenue 7", "Yishun Avenue 8", "Yishun Avenue 9",
    "Yishun Ring Road", "Yishun Central", "Yishun Street 11", "Yishun Street 20",
    "Yishun Street 21", "Yishun Street 22", "Yishun Street 31", "Yishun Street 41",
    "Yishun Street 51", "Yishun Street 61", "Yishun Street 71", "Yishun Street 81",
    "Sembawang Road", "Canberra Drive", "Canberra Link", "Canberra Walk",
    "Montreal Drive", "Wellington Circle"
];

const SERVICES = [
    "Dog Grooming", "Cat Grooming", "Rabbit Grooming", "Pet Spa",
    "Dog Wash", "Pet Grooming", "Mobile Dog Grooming", "House Call Grooming"
];

// =============================================================================
// GENERATOR FUNCTIONS
// =============================================================================

function generateLocations() {
    let locations = [];

    // 1. General Town & Places
    TOWNS.forEach(t => locations.push(t));
    PLACES.forEach(p => locations.push(p));
    STREET_PREFIXES.forEach(s => locations.push(s));

    // 2. Block Numbers (Yishun 100-900) - Massive Generator
    // Kita buat sampling block realistik (101-900)
    for (let i = 101; i <= 999; i++) {
        locations.push(`Blk ${i} Yishun`);
        // Variasi: "Block [XXX]"
        locations.push(`Block ${i} Yishun`);
    }

    // 3. Block Numbers (Sembawang/Canberra 300-500)
    for (let i = 300; i <= 599; i++) {
        locations.push(`Blk ${i} Sembawang`);
        locations.push(`Blk ${i} Canberra`);
    }

    // 4. Street Combinations (Specific Blocks on Streets)
    // E.g., "Blk 148 Yishun Street 11"
    STREET_PREFIXES.forEach(street => {
        // Generate random blocks for each street to simulate density
        for (let b = 1; b <= 50; b++) {
            let blkNum = 100 + Math.floor(Math.random() * 800);
            locations.push(`Blk ${blkNum} ${street}`);
        }
    });

    return locations;
}

function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

async function run() {
    console.log("🚀 Starting PSEO Generation...");

    const rawLocations = generateLocations();
    console.log(`📍 Generated ${rawLocations.length} base locations.`);

    let urls = [];
    let frontendData = {};

    // Generate Cartesian Product: Service + Location
    SERVICES.forEach(service => {
        rawLocations.forEach(loc => {
            const slug = slugify(`${service} Near ${loc}`);
            const url = `${BASE_URL}/${slug}`;

            urls.push({
                loc: url,
                lastmod: new Date().toISOString().split('T')[0],
                changefreq: 'weekly',
                priority: '0.8'
            });

            // Simpan mapping slug -> Readable Name untuk Frontend
            // Agar nanti pas user buka /dog-grooming-near-yishun, 
            // halaman bisa tahu judulnya apa ("Dog Grooming Near Yishun")
            frontendData[slug] = {
                title: `${service} Near ${loc}`,
                location: loc, // Untuk trigger map/WA bubble
                service: service
            };
        });
    });

    console.log(`✨ Total Pages Generated: ${urls.length}`);

    // Ensure public directory exists
    if (!fs.existsSync('public')) {
        fs.mkdirSync('public');
    }

    // 1. WRITE SITEMAP.XML
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    fs.writeFileSync('public/' + OUTPUT_SITEMAP, sitemapContent);
    console.log(`✅ Sitemap written to: public/${OUTPUT_SITEMAP}`);

    // 2. WRITE FRONTEND DATA (JSON)
    const jsContent = `
// GENERATED FILE - DO NOT EDIT MANUALLY
export const pseoLocations = ${JSON.stringify(rawLocations)};
`;
    // assets/js is already handled in the config
    fs.writeFileSync(OUTPUT_LOCATIONS_JSON, jsContent);
    console.log(`✅ Frontend data written to: ${OUTPUT_LOCATIONS_JSON}`);

    // 3. Create Routing Instructions (Netlify _redirects)
    const redirectsContent = `
# PSEO Wildcard Routing
# Tangkap semua URL yang tidak ada file fisiknya, arahkan ke template.html
/dog-grooming-*  /pseo-template.html  200
/cat-grooming-*  /pseo-template.html  200
/pet-*           /pseo-template.html  200
/rabbit-*        /pseo-template.html  200

# Fix common underscores typos
/grooming_packages.html  /grooming-packages.html  301
`;
    fs.writeFileSync('public/_redirects', redirectsContent); // For Netlify
    console.log(`✅ Redirect rules created in public folder.`);

}

run();
