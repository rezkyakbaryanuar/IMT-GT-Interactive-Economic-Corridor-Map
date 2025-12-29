// =========================================================
// PENGOLAHAN DATA (AUTO-FIX)
// =========================================================

// 1. Cek apakah data mentah sudah dimuat?
if (typeof ec1_features === 'undefined') console.error("CRITICAL: ec1.js belum dimuat!");
if (typeof ec2_features === 'undefined') console.error("CRITICAL: ec2.js belum dimuat!");
if (typeof ec3_features === 'undefined') console.error("CRITICAL: ec3.js belum dimuat!");

// 2. FUNGSI PENORMALISASI (Memberi ID & Warna Otomatis)
// Ini memastikan setiap potongan garis punya ID yang benar agar tombol muncul.
function normalizeFeatures(features, id, name, color) {
    if (!Array.isArray(features)) return []; // Safety check
    
    return features.map(f => {
        // Pastikan properties ada
        f.properties = f.properties || {};
        
        // Paksa set ID dan Warna yang konsisten
        f.id = id; 
        f.properties.id = id;
        f.properties.name = name;
        f.properties.color = color;
        f.properties.stroke = color; // Untuk jaga-jaga
        
        return f;
    });
}

// 3. TERAPKAN PERBAIKAN KE DATA
// Kita "cuci" data mentah dari ec1.js, ec2.js, dll di sini.
const fixed_ec1 = normalizeFeatures(ec1_features, 0, "EC1", "#e9dd15");
const fixed_ec2 = normalizeFeatures(ec2_features, 1, "EC2", "#00a54f");
const fixed_ec3 = normalizeFeatures(ec3_features, 2, "EC3", "#ef59a1");

// 4. GABUNGKAN DATA (MERGE)
const imt_gt_data = {
  "type": "FeatureCollection",
  "features": [
      ...fixed_ec1,
      ...fixed_ec2,
      ...fixed_ec3
  ]
};

// =========================================================
// DATA KOTA & PROVINSI (HUB)
// =========================================================
const cities = [
    // === EC 1 HUBS ===
    { id: 101, name: "North Sumatra (ID)", coords: [3.5952, 98.6722], ec_id: 0 },
    { id: 102, name: "Penang (MY)", coords: [5.4141, 100.3288], ec_id: 0 },
    { id: 103, name: "Kedah (MY)", coords: [6.1184, 100.3685], ec_id: 0 },
    { id: 104, name: "Perlis (MY)", coords: [6.4414, 100.1986], ec_id: 0 },
    { id: 105, name: "Songkhla (TH)", coords: [7.1988, 100.5951], ec_id: 0 },
    { id: 106, name: "Nakhon Si Thammarat (TH)", coords: [8.4304, 99.9631], ec_id: 0 },
    { id: 107, name: "Chumphon (TH)", coords: [10.4930, 99.1800], ec_id: 0 },
    { id: 108, name: "Surat Thani (TH)", coords: [9.1389, 99.3126], ec_id: 0 },
    { id: 109, name: "Phatthalung (TH)", coords: [7.6167, 100.0740], ec_id: 0 },

    // === EC 2 HUBS ===
    { id: 201, name: "Perak (MY)", coords: [4.5921, 101.0901], ec_id: 1 },
    { id: 202, name: "Selangor (MY)", coords: [3.0738, 101.5183], ec_id: 1 },
    { id: 203, name: "Malacca (MY)", coords: [2.1896, 102.2501], ec_id: 1 },
    { id: 204, name: "Krabi (TH)", coords: [8.0863, 98.9063], ec_id: 1 },
    { id: 205, name: "Phang Nga (TH)", coords: [8.4501, 98.5255], ec_id: 1 },
    { id: 206, name: "Trang (TH)", coords: [7.5645, 99.6084], ec_id: 1 },
    { id: 207, name: "Yala (TH)", coords: [6.5400, 101.2800], ec_id: 1 },
    { id: 208, name: "Satun (TH)", coords: [6.6238, 100.0674], ec_id: 1 },

    // === EC 3 HUBS (SUMATRA) ===
    { id: 301, name: "Aceh (ID)", coords: [5.5483, 95.3238], ec_id: 2 },
    { id: 302, name: "North Sumatra (ID)", coords: [3.5952, 98.6722], ec_id: 2 }, 
    { id: 303, name: "Riau (ID)", coords: [0.5071, 101.4478], ec_id: 2 },
    { id: 304, name: "West Sumatra (ID)", coords: [-0.9492, 100.4172], ec_id: 2 },
    { id: 305, name: "Jambi (ID)", coords: [-1.6099, 103.6131], ec_id: 2 },
    { id: 306, name: "South Sumatra (ID)", coords: [-2.9761, 104.7754], ec_id: 2 },
    { id: 307, name: "Bengkulu (ID)", coords: [-3.8004, 102.2655], ec_id: 2 },
    { id: 308, name: "Lampung (ID)", coords: [-5.3971, 105.2668], ec_id: 2 }
];

// =========================================================
// DATA LANDMARK & TRANSPORT (POIs)
// =========================================================
const landmarks = [
    // --- EC1: PENANG ---
    { name: "George Town UNESCO Site", coords: [5.4164, 100.3364], type: "tourism", city_id: 102, link: "https://goo.gl/maps/xyz" },
    { name: "Penang Hill", coords: [5.4085, 100.2773], type: "tourism", city_id: 102, link: "https://goo.gl/maps/xyz" },
    { name: "Kek Lok Si Temple", coords: [5.3996, 100.2737], type: "tourism", city_id: 102, link: "https://goo.gl/maps/xyz" },
    { name: "Penang Int. Airport", coords: [5.2924, 100.2655], type: "transport", city_id: 102, link: "https://goo.gl/maps/xyz" },
    
    // --- EC1: KEDAH ---
    { name: "Langkawi Geopark", coords: [6.3865, 99.8252], type: "tourism", city_id: 103, link: "https://goo.gl/maps/xyz" },
    { name: "Pantai Cenang", coords: [6.2917, 99.7288], type: "tourism", city_id: 103, link: "https://goo.gl/maps/xyz" },
    { name: "SkyBridge", coords: [6.3863, 99.6617], type: "tourism", city_id: 103, link: "https://goo.gl/maps/xyz" },

    // --- EC1: PERLIS ---
    { name: "Gua Kelam", coords: [6.6433, 100.2033], type: "tourism", city_id: 104, link: "https://goo.gl/maps/xyz" },
    { name: "Wang Kelian Viewpoint", coords: [6.6778, 100.1836], type: "tourism", city_id: 104, link: "https://goo.gl/maps/xyz" },

    // --- EC1: SONGKHLA ---
    { name: "Samila Beach", coords: [7.2154, 100.5947], type: "tourism", city_id: 105, link: "https://goo.gl/maps/xyz" },
    { name: "Songkhla Old Town", coords: [7.1970, 100.5910], type: "tourism", city_id: 105, link: "https://goo.gl/maps/xyz" },

    // --- EC2: PERAK ---
    { name: "Kellie's Castle", coords: [4.4745, 101.0877], type: "tourism", city_id: 201, link: "https://goo.gl/maps/xyz" },
    { name: "Royal Belum Rainforest", coords: [5.6667, 101.4500], type: "tourism", city_id: 201, link: "https://goo.gl/maps/xyz" },
    { name: "Ipoh Old Town", coords: [4.5975, 101.0779], type: "tourism", city_id: 201, link: "https://goo.gl/maps/xyz" },

    // --- EC2: SELANGOR ---
    { name: "Batu Caves", coords: [3.2379, 101.6841], type: "tourism", city_id: 202, link: "https://goo.gl/maps/xyz" },
    { name: "KLIA Airport", coords: [2.7456, 101.7072], type: "transport", city_id: 202, link: "https://goo.gl/maps/xyz" },

    // --- EC3: NORTH SUMATRA ---
    { name: "Danau Toba", coords: [2.6147, 98.8302], type: "tourism", city_id: 302, link: "https://goo.gl/maps/xyz" },
    { name: "Pulau Samosir", coords: [2.6378, 98.7056], type: "tourism", city_id: 302, link: "https://goo.gl/maps/xyz" },
    { name: "Berastagi", coords: [3.1853, 98.5049], type: "tourism", city_id: 302, link: "https://goo.gl/maps/xyz" },
    { name: "Kualanamu Airport", coords: [3.6422, 98.8852], type: "transport", city_id: 302, link: "https://goo.gl/maps/xyz" },

    // --- EC3: ACEH ---
    { name: "Museum Tsunami", coords: [5.5480, 95.3147], type: "tourism", city_id: 301, link: "https://goo.gl/maps/xyz" },
    { name: "Masjid Baiturrahman", coords: [5.5536, 95.3170], type: "tourism", city_id: 301, link: "https://goo.gl/maps/xyz" },
    { name: "Sultan Iskandar Muda Airport", coords: [5.5224, 95.4170], type: "transport", city_id: 301, link: "https://goo.gl/maps/xyz" },

    // --- EC3: WEST SUMATRA ---
    { name: "Jam Gadang", coords: [-0.3050, 100.3692], type: "tourism", city_id: 304, link: "https://goo.gl/maps/xyz" },
    { name: "Istano Pagaruyung", coords: [-0.4711, 100.6214], type: "tourism", city_id: 304, link: "https://goo.gl/maps/xyz" },
    { name: "Minangkabau Airport", coords: [-0.7865, 100.2922], type: "transport", city_id: 304, link: "https://goo.gl/maps/xyz" },

    // --- EC3: LAMPUNG ---
    { name: "Way Kambas NP", coords: [-4.9333, 105.7000], type: "tourism", city_id: 308, link: "https://goo.gl/maps/xyz" },
    { name: "Pelabuhan Bakauheni", coords: [-5.8711, 105.7533], type: "port", city_id: 308, link: "https://goo.gl/maps/xyz" }
];