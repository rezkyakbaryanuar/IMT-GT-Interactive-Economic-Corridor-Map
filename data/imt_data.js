// =========================================================
// IMT-GT DATA REPOSITORY (EC1, EC2, EC3)
// =========================================================

// --- 1. GEOJSON CORRIDOR LINES (MERGED) ---
// Pastikan file ec1.js, ec2.js, ec3.js sudah dimuat di index.html sebelum file ini!
if (typeof ec1_features === 'undefined') console.error("CRITICAL: ec1.js belum dimuat!");
if (typeof ec2_features === 'undefined') console.error("CRITICAL: ec2.js belum dimuat!");
if (typeof ec3_features === 'undefined') console.error("CRITICAL: ec3.js belum dimuat!");

// Fungsi normalisasi (Otomatis memberi ID & Warna agar tombol muncul)
function normalizeFeatures(features, id, name, color) {
    if (!Array.isArray(features)) return [];
    return features.map(f => {
        f.properties = f.properties || {};
        f.id = id;
        f.properties.id = id;
        f.properties.name = name;
        f.properties.color = color;
        f.properties.stroke = color;
        return f;
    });
}

const imt_gt_data = {
  "type": "FeatureCollection",
  "features": [
      ...normalizeFeatures(ec1_features, 0, "EC1: Extended Songkhla-Penang-Medan", "#e9dd15"),
      ...normalizeFeatures(ec2_features, 1, "EC2: Straits of Malacca", "#00a54f"),
      ...normalizeFeatures(ec3_features, 2, "EC3: Sumatra Corridor", "#ef59a1")
  ]
};

// --- 2. REGIONAL HUBS (States & Provinces) ---
// Titik-titik besar (Kota/Provinsi) yang akan muncul saat tombol EC ditekan.
const cities = [
    // === EC 1 (ID: 0) ===
    { id: 101, name: "North Sumatra", coords: [2.8952, 98.9722], ec_id: 0 },
    { id: 102, name: "Penang", coords: [5.4141, 100.3288], ec_id: 0 },
    { id: 103, name: "Kedah", coords: [6.1184, 100.3685], ec_id: 0 },
    { id: 104, name: "Perlis", coords: [6.4414, 100.1986], ec_id: 0 },
    { id: 105, name: "Songkhla", coords: [7.1988, 100.5951], ec_id: 0 },
    { id: 106, name: "Nakhon Si Thammarat", coords: [8.4304, 99.9631], ec_id: 0 },
    { id: 107, name: "Chumphon", coords: [10.4930, 99.1800], ec_id: 0 },
    { id: 108, name: "Surat Thani", coords: [9.1389, 99.3126], ec_id: 0 },
    { id: 109, name: "Phatthalung", coords: [7.6167, 100.0740], ec_id: 0 },

    // === EC 2 (ID: 1) ===
    { id: 201, name: "Perak", coords: [4.5921, 101.0901], ec_id: 1 },
    { id: 202, name: "Selangor", coords: [3.0738, 101.5183], ec_id: 1 },
    { id: 203, name: "Malacca", coords: [2.1896, 102.2501], ec_id: 1 },
    { id: 204, name: "Krabi", coords: [8.0863, 98.9063], ec_id: 1 },
    { id: 205, name: "Phang Nga", coords: [8.4501, 98.5255], ec_id: 1 },
    { id: 206, name: "Trang", coords: [7.5645, 99.6084], ec_id: 1 },
    { id: 207, name: "Yala", coords: [6.5400, 101.2800], ec_id: 1 },
    { id: 208, name: "Satun", coords: [6.6238, 100.0674], ec_id: 1 },

    // === EC 3 (ID: 2) ===
    { id: 301, name: "Aceh", coords: [5.5483, 95.3238], ec_id: 2 },
    { id: 302, name: "North Sumatra (EC3)", coords: [2.8952, 98.9722], ec_id: 2 }, // Khusus EC3
    { id: 303, name: "Riau", coords: [0.5071, 101.4478], ec_id: 2 },
    { id: 304, name: "West Sumatra", coords: [-0.9492, 100.4172], ec_id: 2 },
    { id: 305, name: "Jambi", coords: [-1.6099, 103.6131], ec_id: 2 },
    { id: 306, name: "South Sumatra", coords: [-2.9761, 104.7754], ec_id: 2 },
    { id: 307, name: "Bengkulu", coords: [-3.8004, 102.2655], ec_id: 2 },
    { id: 308, name: "Lampung", coords: [-5.3971, 105.2668], ec_id: 2 }
];

// --- 3. LANDMARKS (FULL DATA) ---
// Titik detail (Pariwisata, Transportasi, Pelabuhan)
const landmarks = [
    // === EC 1: NORTH SUMATRA ===
    { name: "Lake Toba", coords: [2.6147, 98.8302], type: "tourism", city_id: 101, link: "https://www.google.com/maps/search/Lake+Toba+North+Sumatra" },
    { name: "Samosir Island", coords: [2.6378, 98.7056], type: "tourism", city_id: 101, link: "https://www.google.com/maps/search/Samosir+Island+North+Sumatra" },
    { name: "Sipiso-Piso Waterfall", coords: [2.9178, 98.5233], type: "tourism", city_id: 101, link: "https://www.google.com/maps/search/Sipiso-Piso+Waterfall+North+Sumatra" },
    { name: "Holbung Hill", coords: [2.5317, 98.6667], type: "tourism", city_id: 101, link: "https://www.google.com/maps/search/Holbung+Hill+North+Sumatra" },
    { name: "Sibea-Bea Jesus Statue", coords: [2.5186, 98.6475], type: "tourism", city_id: 101, link: "https://www.google.com/maps/search/Sibea-Bea+Jesus+Statue+North+Sumatra" },
    { name: "Maimun Palace", coords: [3.5752, 98.6838], type: "tourism", city_id: 101, link: "https://www.google.com/maps/search/Maimun+Palace+North+Sumatra" },
    { name: "Al-Mashun Grand Mosque", coords: [3.5786, 98.6869], type: "tourism", city_id: 101, link: "https://www.google.com/maps/search/Al-Mashun+Grand+Mosque+North+Sumatra" },
    { name: "Lumbini Natural Park", coords: [3.1972, 98.5308], type: "tourism", city_id: 101, link: "https://www.google.com/maps/search/Lumbini+Natural+Park+North+Sumatra" },
    { name: "Mount Sibayak", coords: [3.2300, 98.5050], type: "tourism", city_id: 101, link: "https://www.google.com/maps/search/Mount+Sibayak+North+Sumatra" },
    { name: "Efrata Waterfall", coords: [2.5383, 98.6472], type: "tourism", city_id: 101, link: "https://www.google.com/maps/search/Efrata+Waterfall+North+Sumatra" },
    { name: "Lake Sidihoni", coords: [2.6078, 98.7417], type: "tourism", city_id: 101, link: "https://www.google.com/maps/search/Lake+Sidihoni+North+Sumatra" },
    { name: "Rahmat International Wildlife Museum", coords: [3.5769, 98.6664], type: "tourism", city_id: 101, link: "https://www.google.com/maps/search/Rahmat+International+Wildlife+Museum+North+Sumatra" },
    // Transport
    { name: "Kualanamu Int. Airport (KNO)", coords: [3.6422, 98.8852], type: "transport", city_id: 101, link: "http://google.com/maps/search/KNO+Airport" },
    { name: "Port of Belawan", coords: [3.7858, 98.6857], type: "port", city_id: 101, link: "http://google.com/maps/search/Port+of+Belawan" },
    { name: "Medan Train Station", coords: [3.5931, 98.6806], type: "transport", city_id: 101, link: "http://google.com/maps/search/Medan+Railway+Station" },
    { name: "Amplas Bus Terminal", coords: [3.5387, 98.7185], type: "transport", city_id: 101, link: "http://google.com/maps/search/Terminal+Amplas" },

    // === EC 1: PENANG ===
    { name: "George Town UNESCO Heritage Area", coords: [5.4164, 100.3364], type: "tourism", city_id: 102, link: "https://www.google.com/maps/search/George+Town+UNESCO+Heritage+Area+Penang" },
    { name: "Penang Hill (Bukit Bendera)", coords: [5.4085, 100.2773], type: "tourism", city_id: 102, link: "https://www.google.com/maps/search/Penang+Hill+Penang" },
    { name: "Kek Lok Si Temple", coords: [5.3996, 100.2737], type: "tourism", city_id: 102, link: "https://www.google.com/maps/search/Kek+Lok+Si+Temple+Penang" },
    { name: "Street Art George Town", coords: [5.4146, 100.3375], type: "tourism", city_id: 102, link: "https://www.google.com/maps/search/Street+Art+George+Town+Penang" },
    { name: "Batu Ferringhi Beach", coords: [5.4740, 100.2480], type: "tourism", city_id: 102, link: "https://www.google.com/maps/search/Batu+Ferringhi+Beach+Penang" },
    { name: "Gurney Drive", coords: [5.4390, 100.3130], type: "tourism", city_id: 102, link: "https://www.google.com/maps/search/Gurney+Drive+Penang" },
    { name: "Penang National Park", coords: [5.4590, 100.2010], type: "tourism", city_id: 102, link: "https://www.google.com/maps/search/Penang+National+Park+Penang" },
    { name: "Entopia Butterfly Farm", coords: [5.4475, 100.2135], type: "tourism", city_id: 102, link: "https://www.google.com/maps/search/Entopia+Butterfly+Farm+Penang" },
    { name: "Cheong Fatt Tze (Blue Mansion)", coords: [5.4215, 100.3350], type: "tourism", city_id: 102, link: "https://www.google.com/maps/search/Cheong+Fatt+Tze+Penang" },
    { name: "Wat Chayamangkalaram", coords: [5.4319, 100.3139], type: "tourism", city_id: 102, link: "https://www.google.com/maps/search/Wat+Chayamangkalaram+Penang" },
    { name: "Penang Botanic Gardens", coords: [5.4370, 100.2890], type: "tourism", city_id: 102, link: "https://www.google.com/maps/search/Penang+Botanic+Gardens+Penang" },
    { name: "Khoo Kongsi Clan House", coords: [5.4145, 100.3370], type: "tourism", city_id: 102, link: "https://www.google.com/maps/search/Khoo+Kongsi+Clan+House+Penang" },
    // Transport
    { name: "Penang Int. Airport (PEN)", coords: [5.2924, 100.2655], type: "transport", city_id: 102, link: "http://google.com/maps/search/Penang+Airport" },
    { name: "Swettenham Pier Cruise Terminal", coords: [5.4190, 100.3440], type: "port", city_id: 102, link: "http://google.com/maps/search/Swettenham+Pier" },
    { name: "Butterworth Railway Station", coords: [5.3934, 100.3683], type: "transport", city_id: 102, link: "http://google.com/maps/search/Butterworth+Station" },
    { name: "Sungai Nibong Bus Terminal", coords: [5.3422, 100.2995], type: "transport", city_id: 102, link: "http://google.com/maps/search/Sungai+Nibong+Bus" },

    // === EC 1: KEDAH ===
    { name: "Langkawi Island", coords: [6.3500, 99.8000], type: "tourism", city_id: 103, link: "https://www.google.com/maps/search/Langkawi+Island+Kedah" },
    { name: "Pantai Cenang", coords: [6.2917, 99.7288], type: "tourism", city_id: 103, link: "https://www.google.com/maps/search/Pantai+Cenang+Kedah" },
    { name: "Langkawi Sky Bridge", coords: [6.3863, 99.6617], type: "tourism", city_id: 103, link: "https://www.google.com/maps/search/Langkawi+Sky+Bridge+Kedah" },
    { name: "Langkawi SkyCab", coords: [6.3711, 99.6713], type: "tourism", city_id: 103, link: "https://www.google.com/maps/search/Langkawi+SkyCab+Kedah" },
    { name: "Telaga Tujuh Waterfall", coords: [6.3820, 99.6730], type: "tourism", city_id: 103, link: "https://www.google.com/maps/search/Telaga+Tujuh+Waterfall+Kedah" },
    { name: "Underwater World Langkawi", coords: [6.2877, 99.7286], type: "tourism", city_id: 103, link: "https://www.google.com/maps/search/Underwater+World+Langkawi+Kedah" },
    { name: "Gunung Raya", coords: [6.3700, 99.8160], type: "tourism", city_id: 103, link: "https://www.google.com/maps/search/Gunung+Raya+Kedah" },
    { name: "Pantai Merdeka", coords: [5.6833, 100.3667], type: "tourism", city_id: 103, link: "https://www.google.com/maps/search/Pantai+Merdeka+Kedah" },
    { name: "Menara Alor Setar", coords: [6.1240, 100.3670], type: "tourism", city_id: 103, link: "https://www.google.com/maps/search/Menara+Alor+Setar+Kedah" },
    { name: "Masjid Zahir", coords: [6.1190, 100.3650], type: "tourism", city_id: 103, link: "https://www.google.com/maps/search/Masjid+Zahir+Kedah" },
    { name: "Ulu Muda Forest Reserve", coords: [6.0000, 100.9000], type: "tourism", city_id: 103, link: "https://www.google.com/maps/search/Ulu+Muda+Forest+Reserve+Kedah" },
    // Transport
    { name: "Alor Setar Airport (AOR)", coords: [6.1947, 100.3986], type: "transport", city_id: 103, link: "http://google.com/maps/search/Alor+Setar+Airport" },
    { name: "Kuala Kedah Ferry Terminal", coords: [6.1095, 100.2863], type: "port", city_id: 103, link: "http://google.com/maps/search/Kuala+Kedah+Ferry" },
    { name: "Alor Setar Railway Station", coords: [6.1158, 100.3664], type: "transport", city_id: 103, link: "http://google.com/maps/search/Alor+Setar+Railway" },
    { name: "Shahab Perdana Bus Terminal", coords: [6.1360, 100.3640], type: "transport", city_id: 103, link: "http://google.com/maps/search/Shahab+Perdana" },

    // === EC 1: PERLIS ===
    { name: "Gua Kelam", coords: [6.6433, 100.2033], type: "tourism", city_id: 104, link: "https://www.google.com/maps/search/Gua+Kelam+Perlis" },
    { name: "Kota Kayang Museum", coords: [6.4170, 100.1550], type: "tourism", city_id: 104, link: "https://www.google.com/maps/search/Kota+Kayang+Museum+Perlis" },
    { name: "Tasik Melati", coords: [6.4800, 100.2500], type: "tourism", city_id: 104, link: "https://www.google.com/maps/search/Tasik+Melati+Perlis" },
    { name: "Perlis State Park", coords: [6.7022, 100.1966], type: "tourism", city_id: 104, link: "https://www.google.com/maps/search/Perlis+State+Park+Perlis" },
    { name: "Wang Kelian Viewpoint", coords: [6.6778, 100.1836], type: "tourism", city_id: 104, link: "https://www.google.com/maps/search/Wang+Kelian+Viewpoint+Perlis" },
    { name: "Padang Besar Market", coords: [6.6620, 100.3200], type: "tourism", city_id: 104, link: "https://www.google.com/maps/search/Padang+Besar+Market+Perlis" },
    { name: "Arau Palace", coords: [6.4300, 100.2700], type: "tourism", city_id: 104, link: "https://www.google.com/maps/search/Arau+Palace+Perlis" },
    { name: "Kuala Perlis Jetty", coords: [6.4000, 100.1333], type: "port", city_id: 104, link: "https://www.google.com/maps/search/Kuala+Perlis+Jetty+Perlis" },
    { name: "Snake & Reptile Farm", coords: [6.4700, 100.2000], type: "tourism", city_id: 104, link: "https://www.google.com/maps/search/Snake+and+Reptile+Farm+Perlis" },
    { name: "Bukit Ayer", coords: [6.5200, 100.1700], type: "tourism", city_id: 104, link: "https://www.google.com/maps/search/Bukit+Ayer+Perlis" },
    // Transport
    { name: "Alor Setar Airport (Nearest)", coords: [6.1947, 100.3986], type: "transport", city_id: 104, link: "http://google.com/maps/search/Alor+Setar+Airport" }, // No Airport in Perlis
    { name: "Kuala Perlis Ferry Terminal", coords: [6.4000, 100.1333], type: "port", city_id: 104, link: "http://google.com/maps/search/Kuala+Perlis+Ferry" },
    { name: "Arau Railway Station", coords: [6.4328, 100.2747], type: "transport", city_id: 104, link: "http://google.com/maps/search/Arau+Railway" },
    { name: "Kangar Bus Terminal", coords: [6.4385, 100.1932], type: "transport", city_id: 104, link: "http://google.com/maps/search/Kangar+Bus+Terminal" },

    // === EC 1: SONGKHLA ===
    { name: "Samila Beach", coords: [7.2154, 100.5947], type: "tourism", city_id: 105, link: "https://www.google.com/maps/search/Samila+Beach+Songkhla" },
    { name: "Songkhla Old Town", coords: [7.1970, 100.5910], type: "tourism", city_id: 105, link: "https://www.google.com/maps/search/Songkhla+Old+Town+Songkhla" },
    { name: "Hat Yai Municipal Park", coords: [7.0397, 100.5056], type: "tourism", city_id: 105, link: "https://www.google.com/maps/search/Hat+Yai+Municipal+Park+Songkhla" },
    { name: "Tang Kuan Hill", coords: [7.2083, 100.5917], type: "tourism", city_id: 105, link: "https://www.google.com/maps/search/Tang+Kuan+Hill+Songkhla" },
    { name: "Songkhla National Museum", coords: [7.2030, 100.5890], type: "tourism", city_id: 105, link: "https://www.google.com/maps/search/Songkhla+National+Museum+Songkhla" },
    { name: "Ko Yor Island", coords: [7.1500, 100.5500], type: "tourism", city_id: 105, link: "https://www.google.com/maps/search/Ko+Yor+Island+Songkhla" },
    { name: "Thale Noi Waterfowl Park", coords: [7.7801, 100.1205], type: "tourism", city_id: 105, link: "https://www.google.com/maps/search/Thale+Noi+Waterfowl+Park+Songkhla" },
    { name: "Songkhla Zoo", coords: [7.1400, 100.6000], type: "tourism", city_id: 105, link: "https://www.google.com/maps/search/Songkhla+Zoo+Songkhla" },
    { name: "Central Festival Hat Yai", coords: [6.9950, 100.4850], type: "tourism", city_id: 105, link: "https://www.google.com/maps/search/Central+Festival+Hat+Yai+Songkhla" },
    { name: "Tinsulanonda Bridge", coords: [7.1800, 100.5500], type: "tourism", city_id: 105, link: "https://www.google.com/maps/search/Tinsulanonda+Bridge+Songkhla" },
    // Transport
    { name: "Hat Yai Int. Airport (HDY)", coords: [6.9333, 100.3933], type: "transport", city_id: 105, link: "http://google.com/maps/search/Hat+Yai+Airport" },
    { name: "Songkhla Deep Sea Port", coords: [7.2185, 100.5786], type: "port", city_id: 105, link: "http://google.com/maps/search/Songkhla+Port" },
    { name: "Hat Yai Junction Railway", coords: [7.0033, 100.4682], type: "transport", city_id: 105, link: "http://google.com/maps/search/Hat+Yai+Junction" },
    { name: "Hat Yai Bus Terminal 1", coords: [6.9933, 100.4852], type: "transport", city_id: 105, link: "http://google.com/maps/search/Hat+Yai+Bus+Terminal" },

    // === EC 1: NAKHON SI THAMMARAT ===
    { name: "Wat Phra Mahathat Woramahawihan", coords: [8.4111, 99.9664], type: "tourism", city_id: 106, link: "https://www.google.com/maps/search/Wat+Phra+Mahathat+Woramahawihan+Nakhon+Si+Thammarat" },
    { name: "Khao Luang National Park", coords: [8.5300, 99.7700], type: "tourism", city_id: 106, link: "https://www.google.com/maps/search/Khao+Luang+National+Park+Nakhon+Si+Thammarat" },
    { name: "Hat Khanom Beach", coords: [9.1822, 99.8442], type: "tourism", city_id: 106, link: "https://www.google.com/maps/search/Hat+Khanom+Beach+Nakhon+Si+Thammarat" },
    { name: "Mu Ko Thale Tai National Park", coords: [9.1500, 99.8500], type: "tourism", city_id: 106, link: "https://www.google.com/maps/search/Mu+Ko+Thale+Tai+National+Park+Nakhon+Si+Thammarat" },
    { name: "Wat Chedi (Ai Khai Temple)", coords: [8.8000, 99.9000], type: "tourism", city_id: 106, link: "https://www.google.com/maps/search/Wat+Chedi+Ai+Khai+Temple+Nakhon+Si+Thammarat" },
    { name: "Old City Wall", coords: [8.4304, 99.9631], type: "tourism", city_id: 106, link: "https://www.google.com/maps/search/Old+City+Wall+Nakhon+Si+Thammarat" },
    { name: "National Museum", coords: [8.4200, 99.9600], type: "tourism", city_id: 106, link: "https://www.google.com/maps/search/Nakhon+Si+Thammarat+National+Museum+Nakhon+Si+Thammarat" },
    { name: "Dolphin Watching", coords: [9.2000, 99.8500], type: "tourism", city_id: 106, link: "https://www.google.com/maps/search/Dolphin+Watching+Nakhon+Si+Thammarat" },
    { name: "Phlai Dam Waterfall", coords: [9.1000, 99.8000], type: "tourism", city_id: 106, link: "https://www.google.com/maps/search/Phlai+Dam+Waterfall+Nakhon+Si+Thammarat" },
    { name: "Night Market", coords: [8.4300, 99.9600], type: "tourism", city_id: 106, link: "https://www.google.com/maps/search/Night+Market+Nakhon+Si+Thammarat" },
    // Transport
    { name: "Nakhon Si Thammarat Airport (NST)", coords: [8.5401, 99.9439], type: "transport", city_id: 106, link: "http://google.com/maps/search/NST+Airport" },
    { name: "Khanom Port", coords: [9.2084, 99.8622], type: "port", city_id: 106, link: "http://google.com/maps/search/Khanom+Port" },
    { name: "Nakhon Si Thammarat Station", coords: [8.4326, 99.9575], type: "transport", city_id: 106, link: "http://google.com/maps/search/NST+Station" },
    { name: "Borokoso Bus Terminal", coords: [8.4230, 99.9400], type: "transport", city_id: 106, link: "http://google.com/maps/search/Borokoso+Bus" },

    // === EC 1: CHUMPHON ===
    { name: "Hat Thung Wua Laen Beach", coords: [10.5626, 99.2739], type: "tourism", city_id: 107, link: "https://www.google.com/maps/search/Hat+Thung+Wua+Laen+Beach+Chumphon" },
    { name: "Mu Ko Chumphon National Park", coords: [10.3794, 99.2394], type: "tourism", city_id: 107, link: "https://www.google.com/maps/search/Mu+Ko+Chumphon+National+Park+Chumphon" },
    { name: "Sairee Beach", coords: [10.4000, 99.2500], type: "tourism", city_id: 107, link: "https://www.google.com/maps/search/Sairee+Beach+Chumphon" },
    { name: "Khao Dinsor Viewpoint", coords: [10.6000, 99.3000], type: "tourism", city_id: 107, link: "https://www.google.com/maps/search/Khao+Dinsor+Viewpoint+Chumphon" },
    { name: "Wat Chao Fa Sala Loi", coords: [10.5200, 99.1500], type: "tourism", city_id: 107, link: "https://www.google.com/maps/search/Wat+Chao+Fa+Sala+Loi+Chumphon" },
    { name: "Chumphon National Museum", coords: [10.4800, 99.1700], type: "tourism", city_id: 107, link: "https://www.google.com/maps/search/Chumphon+National+Museum+Chumphon" },
    { name: "Ao Thung Makham Noi", coords: [10.3500, 99.2200], type: "tourism", city_id: 107, link: "https://www.google.com/maps/search/Ao+Thung+Makham+Noi+Chumphon" },
    { name: "Sai Ree Sawi Beach", coords: [10.3000, 99.2000], type: "tourism", city_id: 107, link: "https://www.google.com/maps/search/Sai+Ree+Sawi+Beach+Chumphon" },
    { name: "Chumphon Night Market", coords: [10.4900, 99.1800], type: "tourism", city_id: 107, link: "https://www.google.com/maps/search/Chumphon+Night+Market+Chumphon" },
    { name: "Thung Wua Laen Viewpoint", coords: [10.5700, 99.2800], type: "tourism", city_id: 107, link: "https://www.google.com/maps/search/Thung+Wua+Laen+Viewpoint+Chumphon" },
    // Logistics
    { name: "Chumphon Airport (CJM)", coords: [10.7093, 99.3621], type: "transport", city_id: 107, link: "http://google.com/maps/search/Chumphon+Airport" },
    { name: "Mattaphon Pier", coords: [10.4390, 99.2450], type: "port", city_id: 107, link: "http://google.com/maps/search/Mattaphon+Pier" },
    { name: "Chumphon Train Station", coords: [10.5015, 99.1764], type: "transport", city_id: 107, link: "http://google.com/maps/search/Chumphon+Station" },
    { name: "Chumphon Bus Terminal", coords: [10.4680, 99.1415], type: "transport", city_id: 107, link: "http://google.com/maps/search/Chumphon+Bus" },

    // === EC 1: SURAT THANI ===
    { name: "Koh Samui", coords: [9.5120, 100.0136], type: "tourism", city_id: 108, link: "https://www.google.com/maps/search/Koh+Samui+Surat+Thani" },
    { name: "Ang Thong Marine National Park", coords: [9.6333, 99.6667], type: "tourism", city_id: 108, link: "https://www.google.com/maps/search/Ang+Thong+Marine+National+Park+Surat+Thani" },
    { name: "Khao Sok National Park", coords: [8.9136, 98.5301], type: "tourism", city_id: 108, link: "https://www.google.com/maps/search/Khao+Sok+National+Park+Surat+Thani" },
    { name: "Ratchaprapa Dam (Cheow Lan Lake)", coords: [8.9700, 98.8200], type: "tourism", city_id: 108, link: "https://www.google.com/maps/search/Ratchaprapa+Dam+Surat+Thani" },
    { name: "Big Buddha Temple", coords: [9.5700, 100.0600], type: "tourism", city_id: 108, link: "https://www.google.com/maps/search/Big+Buddha+Temple+Surat+Thani" },
    { name: "Wat Plai Laem", coords: [9.5710, 100.0670], type: "tourism", city_id: 108, link: "https://www.google.com/maps/search/Wat+Plai+Laem+Surat+Thani" },
    { name: "Na Muang Waterfall", coords: [9.4660, 99.9830], type: "tourism", city_id: 108, link: "https://www.google.com/maps/search/Na+Muang+Waterfall+Surat+Thani" },
    { name: "Koh Taen", coords: [9.3700, 99.9500], type: "tourism", city_id: 108, link: "https://www.google.com/maps/search/Koh+Taen+Surat+Thani" },
    { name: "Koh Madsum (Pig Island)", coords: [9.3600, 99.9700], type: "tourism", city_id: 108, link: "https://www.google.com/maps/search/Koh+Madsum+Surat+Thani" },
    { name: "Surat Thani Night Market", coords: [9.1400, 99.3300], type: "tourism", city_id: 108, link: "https://www.google.com/maps/search/Surat+Thani+Night+Market+Surat+Thani" },
    // Logistics
    { name: "Surat Thani Airport (URT)", coords: [9.1325, 99.1356], type: "transport", city_id: 108, link: "http://google.com/maps/search/Surat+Thani+Airport" },
    { name: "Donsak Pier", coords: [9.3142, 99.6974], type: "port", city_id: 108, link: "http://google.com/maps/search/Donsak+Pier" },
    { name: "Phunphin (Surat Thani) Station", coords: [9.1052, 99.2312], type: "transport", city_id: 108, link: "http://google.com/maps/search/Phunphin+Station" },
    { name: "Surat Thani Bus Terminal", coords: [9.1170, 99.2990], type: "transport", city_id: 108, link: "http://google.com/maps/search/Surat+Thani+Bus" },

    // === EC 1: PHATTHALUNG ===
    { name: "Thale Noi Waterfowl Reserve", coords: [7.7801, 100.1205], type: "tourism", city_id: 109, link: "https://www.google.com/maps/search/Thale+Noi+Waterfowl+Reserve+Phatthalung" },
    { name: "Lotus Lake", coords: [7.7800, 100.1300], type: "tourism", city_id: 109, link: "https://www.google.com/maps/search/Lotus+Lake+Phatthalung" },
    { name: "Khao Ok Thalu", coords: [7.6253, 100.0931], type: "tourism", city_id: 109, link: "https://www.google.com/maps/search/Khao+Ok+Thalu+Phatthalung" },
    { name: "Wat Wang", coords: [7.5800, 100.0500], type: "tourism", city_id: 109, link: "https://www.google.com/maps/search/Wat+Wang+Phatthalung" },
    { name: "Khao Pu-Khao Ya National Park", coords: [7.5500, 99.8500], type: "tourism", city_id: 109, link: "https://www.google.com/maps/search/Khao+Pu+Khao+Ya+National+Park+Phatthalung" },
    { name: "Phatthalung Old Town", coords: [7.6100, 100.0700], type: "tourism", city_id: 109, link: "https://www.google.com/maps/search/Phatthalung+Old+Town+Phatthalung" },
    { name: "Manora Cultural Village", coords: [7.6500, 100.1000], type: "tourism", city_id: 109, link: "https://www.google.com/maps/search/Manora+Cultural+Village+Phatthalung" },
    { name: "Ban Khok Sathon", coords: [7.6000, 100.0800], type: "tourism", city_id: 109, link: "https://www.google.com/maps/search/Ban+Khok+Sathon+Phatthalung" },
    { name: "Sampaothai", coords: [7.7000, 100.0500], type: "tourism", city_id: 109, link: "https://www.google.com/maps/search/Sampaothai+Phatthalung" },
    { name: "Klong Hua Chang", coords: [7.4000, 100.0000], type: "tourism", city_id: 109, link: "https://www.google.com/maps/search/Klong+Hua+Chang+Phatthalung" },
   { name: "Trang Airport (Nearest)", coords: [7.5096, 99.6151], type: "transport", city_id: 109, link: "http://google.com/maps/search/Trang+Airport" }, // No Airport
    { name: "Phatthalung Train Station", coords: [7.6158, 100.0768], type: "transport", city_id: 109, link: "http://google.com/maps/search/Phatthalung+Station" },
    { name: "Phatthalung Bus Terminal", coords: [7.6105, 100.0521], type: "transport", city_id: 109, link: "http://google.com/maps/search/Phatthalung+Bus" },
    { name: "Pak Payun Pier", coords: [7.3486, 100.3169], type: "port", city_id: 109, link: "http://google.com/maps/search/Pak+Payun+Pier" },

    // ==========================================
    // EC 2: TOURISM & TRANSPORT
    // ==========================================

    // 1. Perak
    { name: "Kellie's Castle", coords: [4.4745, 101.0877], type: "tourism", city_id: 201, link: "https://www.google.com/maps/search/Kellie's+Castle+Perak" },
    { name: "Royal Belum Rainforest", coords: [5.6667, 101.4500], type: "tourism", city_id: 201, link: "https://www.google.com/maps/search/Royal+Belum+Rainforest+Perak" },
    { name: "Ipoh Old Town", coords: [4.5975, 101.0779], type: "tourism", city_id: 201, link: "https://www.google.com/maps/search/Ipoh+Old+Town+Perak" },
    { name: "Pangkor Island", coords: [4.2250, 100.5610], type: "tourism", city_id: 201, link: "https://www.google.com/maps/search/Pangkor+Island+Perak" },
    { name: "Tempurung Cave", coords: [4.4170, 101.1870], type: "tourism", city_id: 201, link: "https://www.google.com/maps/search/Tempurung+Cave+Perak" },
    { name: "Lost World of Tambun", coords: [4.6260, 101.1550], type: "tourism", city_id: 201, link: "https://www.google.com/maps/search/Lost+World+of+Tambun+Perak" },
    { name: "Taiping Lake Gardens", coords: [4.8550, 100.7450], type: "tourism", city_id: 201, link: "https://www.google.com/maps/search/Taiping+Lake+Gardens+Perak" },
    { name: "Perak Cave Temple", coords: [4.6360, 101.1000], type: "tourism", city_id: 201, link: "https://www.google.com/maps/search/Perak+Cave+Temple+Perak" },
    { name: "Kuala Kangsar Royal Town", coords: [4.7700, 100.9300], type: "tourism", city_id: 201, link: "https://www.google.com/maps/search/Kuala+Kangsar+Royal+Town+Perak" },
    { name: "Bukit Merah Laketown", coords: [5.0300, 100.6500], type: "tourism", city_id: 201, link: "https://www.google.com/maps/search/Bukit+Merah+Laketown+Perak" },
    // Transport
    { name: "Sultan Azlan Shah Airport (IPH)", coords: [4.5678, 101.0917], type: "transport", city_id: 201, link: "http://google.com/maps/search/IPH+Airport" },
    { name: "Lumut Port", coords: [4.2467, 100.6272], type: "port", city_id: 201, link: "http://google.com/maps/search/Lumut+Port" },
    { name: "Ipoh Railway Station", coords: [4.5969, 101.0717], type: "transport", city_id: 201, link: "http://google.com/maps/search/Ipoh+Station" },
    { name: "Amanjaya Bus Terminal", coords: [4.6644, 101.0784], type: "transport", city_id: 201, link: "http://google.com/maps/search/Amanjaya+Bus" },

    // 2. Selangor
    { name: "Batu Caves", coords: [3.2379, 101.6841], type: "tourism", city_id: 202, link: "https://www.google.com/maps/search/Batu+Caves+Selangor" },
    { name: "Sunway Lagoon", coords: [3.0714, 101.6053], type: "tourism", city_id: 202, link: "https://www.google.com/maps/search/Sunway+Lagoon+Selangor" },
    { name: "i-City Shah Alam", coords: [3.0650, 101.4830], type: "tourism", city_id: 202, link: "https://www.google.com/maps/search/i-City+Shah+Alam+Selangor" },
    { name: "Sepang Gold Coast", coords: [2.6000, 101.6800], type: "tourism", city_id: 202, link: "https://www.google.com/maps/search/Sepang+Gold+Coast+Selangor" },
    { name: "Sky Mirror Kuala Selangor", coords: [3.3000, 101.2000], type: "tourism", city_id: 202, link: "https://www.google.com/maps/search/Sky+Mirror+Kuala+Selangor+Selangor" },
    { name: "Sekinchan Paddy Fields", coords: [3.5000, 101.1000], type: "tourism", city_id: 202, link: "https://www.google.com/maps/search/Sekinchan+Paddy+Fields+Selangor" },
    { name: "National Zoo of Malaysia", coords: [3.2100, 101.7600], type: "tourism", city_id: 202, link: "https://www.google.com/maps/search/National+Zoo+of+Malaysia+Selangor" },
    { name: "Sultan Salahuddin Abdul Aziz Mosque", coords: [3.0780, 101.5200], type: "tourism", city_id: 202, link: "https://www.google.com/maps/search/Sultan+Salahuddin+Abdul+Aziz+Mosque+Selangor" },
    { name: "Mitsui Outlet Park", coords: [2.7600, 101.6700], type: "tourism", city_id: 202, link: "https://www.google.com/maps/search/Mitsui+Outlet+Park+Selangor" },
    { name: "Forest Research Institute Malaysia", coords: [3.2300, 101.6300], type: "tourism", city_id: 202, link: "https://www.google.com/maps/search/Forest+Research+Institute+Malaysia+Selangor" },
    // Transport
    { name: "Kuala Lumpur Int. Airport (KLIA)", coords: [2.7456, 101.7072], type: "transport", city_id: 202, link: "http://google.com/maps/search/KLIA" },
    { name: "Port Klang", coords: [3.0000, 101.4000], type: "port", city_id: 202, link: "http://google.com/maps/search/Port+Klang" },
    { name: "KL Sentral Station", coords: [3.1342, 101.6865], type: "transport", city_id: 202, link: "http://google.com/maps/search/KL+Sentral" },
    { name: "TBS Bus Terminal", coords: [3.0763, 101.7118], type: "transport", city_id: 202, link: "http://google.com/maps/search/TBS" },

    // 3. Malacca
    { name: "A Famosa & Stadthuys", coords: [2.1923, 102.2492], type: "tourism", city_id: 203, link: "https://www.google.com/maps/search/A+Famosa+and+Stadthuys+Malacca" },
    { name: "Jonker Street", coords: [2.1963, 102.2466], type: "tourism", city_id: 203, link: "https://www.google.com/maps/search/Jonker+Street+Malacca" },
    { name: "Melaka River Cruise", coords: [2.1950, 102.2480], type: "tourism", city_id: 203, link: "https://www.google.com/maps/search/Melaka+River+Cruise+Malacca" },
    { name: "Baba & Nyonya Heritage Museum", coords: [2.1960, 102.2450], type: "tourism", city_id: 203, link: "https://www.google.com/maps/search/Baba+and+Nyonya+Heritage+Museum+Malacca" },
    { name: "Christ Church Melaka", coords: [2.1930, 102.2490], type: "tourism", city_id: 203, link: "https://www.google.com/maps/search/Christ+Church+Melaka+Malacca" },
    { name: "Melaka Sultanate Palace", coords: [2.1920, 102.2510], type: "tourism", city_id: 203, link: "https://www.google.com/maps/search/Melaka+Sultanate+Palace+Malacca" },
    { name: "Taming Sari Tower", coords: [2.1900, 102.2480], type: "tourism", city_id: 203, link: "https://www.google.com/maps/search/Taming+Sari+Tower+Malacca" },
    { name: "Cheng Hoon Teng Temple", coords: [2.1980, 102.2460], type: "tourism", city_id: 203, link: "https://www.google.com/maps/search/Cheng+Hoon+Teng+Temple+Malacca" },
    { name: "Klebang Beach", coords: [2.2160, 102.1960], type: "tourism", city_id: 203, link: "https://www.google.com/maps/search/Klebang+Beach+Malacca" },
    { name: "The Shore Sky Tower", coords: [2.2030, 102.2500], type: "tourism", city_id: 203, link: "https://www.google.com/maps/search/The+Shore+Sky+Tower+Malacca" },
    // Transport
    { name: "Malacca Int. Airport (MKZ)", coords: [2.2634, 102.2522], type: "transport", city_id: 203, link: "http://google.com/maps/search/MKZ+Airport" },
    { name: "Tanjung Bruas Port", coords: [2.2222, 102.1481], type: "port", city_id: 203, link: "http://google.com/maps/search/Tanjung+Bruas" },
    { name: "Batang Melaka Station", coords: [2.4720, 102.4172], type: "transport", city_id: 203, link: "http://google.com/maps/search/Batang+Melaka" },
    { name: "Melaka Sentral Bus Terminal", coords: [2.2155, 102.2407], type: "transport", city_id: 203, link: "http://google.com/maps/search/Melaka+Sentral" },

    // 4. Krabi
    { name: "Railay Beach", coords: [8.0119, 98.8374], type: "tourism", city_id: 204, link: "https://www.google.com/maps/search/Railay+Beach+Krabi" },
    { name: "Phi Phi Islands", coords: [7.7407, 98.7784], type: "tourism", city_id: 204, link: "https://www.google.com/maps/search/Phi+Phi+Islands+Krabi" },
    { name: "Thung Teao Forest Natural Park", coords: [7.9300, 99.2500], type: "tourism", city_id: 204, link: "https://www.google.com/maps/search/Thung+Teao+Forest+Natural+Park+Krabi" },
    { name: "Tiger Cave Temple", coords: [8.1200, 98.9200], type: "tourism", city_id: 204, link: "https://www.google.com/maps/search/Tiger+Cave+Temple+Krabi" },
    { name: "Maya Bay", coords: [7.6770, 98.7650], type: "tourism", city_id: 204, link: "https://www.google.com/maps/search/Maya+Bay+Krabi" },
    { name: "Klong Thom Hot Springs", coords: [7.9300, 99.2100], type: "tourism", city_id: 204, link: "https://www.google.com/maps/search/Klong+Thom+Hot+Springs+Krabi" },
    { name: "Hong Island", coords: [8.0700, 98.6700], type: "tourism", city_id: 204, link: "https://www.google.com/maps/search/Hong+Island+Krabi" },
    { name: "Ao Nang Beach", coords: [8.0300, 98.8200], type: "tourism", city_id: 204, link: "https://www.google.com/maps/search/Ao+Nang+Beach+Krabi" },
    { name: "Koh Lanta", coords: [7.5800, 99.0300], type: "tourism", city_id: 204, link: "https://www.google.com/maps/search/Koh+Lanta+Krabi" },
    { name: "Krabi Town Night Market", coords: [8.0600, 98.9100], type: "tourism", city_id: 204, link: "https://www.google.com/maps/search/Krabi+Town+Night+Market+Krabi" },
    // Transport
    { name: "Krabi Airport (KBV)", coords: [8.0974, 98.9817], type: "transport", city_id: 204, link: "http://google.com/maps/search/KBV+Airport" },
    { name: "Klong Jilad Pier", coords: [8.0464, 98.9036], type: "port", city_id: 204, link: "http://google.com/maps/search/Klong+Jilad+Pier" },
    { name: "Trang Station (Nearest Rail)", coords: [7.5562, 99.6094], type: "transport", city_id: 204, link: "http://google.com/maps/search/Trang+Station" }, // No train in Krabi
    { name: "Krabi Bus Terminal", coords: [8.1105, 98.8953], type: "transport", city_id: 204, link: "http://google.com/maps/search/Krabi+Bus" },

    // 5. Phang Nga
    { name: "James Bond Island", coords: [8.2746, 98.5012], type: "tourism", city_id: 205, link: "https://www.google.com/maps/search/James+Bond+Island+Phang+Nga" },
    { name: "Similan Islands", coords: [8.6548, 97.6433], type: "tourism", city_id: 205, link: "https://www.google.com/maps/search/Similan+Islands+Phang+Nga" },
    { name: "Ao Phang Nga National Park", coords: [8.3000, 98.5000], type: "tourism", city_id: 205, link: "https://www.google.com/maps/search/Ao+Phang+Nga+National+Park+Phang+Nga" },
    { name: "Surin Islands", coords: [9.4100, 97.8600], type: "tourism", city_id: 205, link: "https://www.google.com/maps/search/Surin+Islands+Phang+Nga" },
    { name: "Samet Nangshe Viewpoint", coords: [8.2300, 98.4400], type: "tourism", city_id: 205, link: "https://www.google.com/maps/search/Samet+Nangshe+Viewpoint+Phang+Nga" },
    { name: "Koh Panyee", coords: [8.3300, 98.5000], type: "tourism", city_id: 205, link: "https://www.google.com/maps/search/Koh+Panyee+Phang+Nga" },
    { name: "Ton Pariwat Wildlife Sanctuary", coords: [8.6000, 98.5500], type: "tourism", city_id: 205, link: "https://www.google.com/maps/search/Ton+Pariwat+Wildlife+Sanctuary+Phang+Nga" },
    { name: "Phung Chang Cave", coords: [8.4400, 98.5200], type: "tourism", city_id: 205, link: "https://www.google.com/maps/search/Phung+Chang+Cave+Phang+Nga" },
    { name: "Khao Lak-Lam Ru National Park", coords: [8.6200, 98.2400], type: "tourism", city_id: 205, link: "https://www.google.com/maps/search/Khao+Lak+Lam+Ru+National+Park+Phang+Nga" },
    { name: "Raman Waterfall", coords: [8.5000, 98.4500], type: "tourism", city_id: 205, link: "https://www.google.com/maps/search/Raman+Waterfall+Phang+Nga" },
    // Logistics
    { name: "Phuket Airport (Nearest)", coords: [8.1116, 98.3065], type: "transport", city_id: 205, link: "http://google.com/maps/search/HKT+Airport" }, // No Airport
    { name: "Kuraburi Pier", coords: [9.2272, 98.3842], type: "port", city_id: 205, link: "http://google.com/maps/search/Kuraburi+Pier" },
    { name: "Phunphin Station (Nearest)", coords: [9.1052, 99.2312], type: "transport", city_id: 205, link: "http://google.com/maps/search/Phunphin+Station" }, // No Train
    { name: "Phang Nga Bus Terminal", coords: [8.4419, 98.5283], type: "transport", city_id: 205, link: "http://google.com/maps/search/Phang+Nga+Bus" },

    // 6. Trang
    { name: "Koh Muk & Emerald Cave", coords: [7.3718, 99.2863], type: "tourism", city_id: 206, link: "https://www.google.com/maps/search/Koh+Muk+and+Emerald+Cave+Trang" },
    { name: "Koh Kradan", coords: [7.3000, 99.2500], type: "tourism", city_id: 206, link: "https://www.google.com/maps/search/Koh+Kradan+Trang" },
    { name: "Koh Ngai", coords: [7.4100, 99.2000], type: "tourism", city_id: 206, link: "https://www.google.com/maps/search/Koh+Ngai+Trang" },
    { name: "Had Chao Mai National Park", coords: [7.4200, 99.3500], type: "tourism", city_id: 206, link: "https://www.google.com/maps/search/Had+Chao+Mai+National+Park+Trang" },
    { name: "Thum Le Khao Kob", coords: [7.7900, 99.5700], type: "tourism", city_id: 206, link: "https://www.google.com/maps/search/Thum+Le+Khao+Kob+Trang" },
    { name: "Pak Meng Beach", coords: [7.5000, 99.3200], type: "tourism", city_id: 206, link: "https://www.google.com/maps/search/Pak+Meng+Beach+Trang" },
    { name: "Trang Clock Tower", coords: [7.5500, 99.6100], type: "tourism", city_id: 206, link: "https://www.google.com/maps/search/Trang+Clock+Tower+Trang" },
    { name: "Kantang Railway Station", coords: [7.4000, 99.5100], type: "tourism", city_id: 206, link: "https://www.google.com/maps/search/Kantang+Railway+Station+Trang" },
    { name: "Phraya Ratsadanupradit Monument", coords: [7.5600, 99.6000], type: "tourism", city_id: 206, link: "https://www.google.com/maps/search/Phraya+Ratsadanupradit+Monument+Trang" },
    { name: "Koh Libong", coords: [7.2500, 99.3800], type: "tourism", city_id: 206, link: "https://www.google.com/maps/search/Koh+Libong+Trang" },
    // Logistics
    { name: "Trang Airport (TST)", coords: [7.5096, 99.6151], type: "transport", city_id: 206, link: "http://google.com/maps/search/TST+Airport" },
    { name: "Kantang Port", coords: [7.4069, 99.5133], type: "port", city_id: 206, link: "http://google.com/maps/search/Kantang+Port" },
    { name: "Trang Railway Station", coords: [7.5562, 99.6094], type: "transport", city_id: 206, link: "http://google.com/maps/search/Trang+Station" },
    { name: "Trang Bus Terminal", coords: [7.5615, 99.6200], type: "transport", city_id: 206, link: "http://google.com/maps/search/Trang+Bus" },

    // 7. Yala
    { name: "Betong Hot Springs", coords: [5.8500, 101.0700], type: "tourism", city_id: 207, link: "https://www.google.com/maps/search/Betong+Hot+Springs+Yala" },
    { name: "Nok Nam Lake", coords: [6.5367, 101.2721], type: "tourism", city_id: 207, link: "https://www.google.com/maps/search/Nok+Nam+Lake+Yala" },
    { name: "Piyamit Tunnels", coords: [5.8000, 101.0500], type: "tourism", city_id: 207, link: "https://www.google.com/maps/search/Piyamit+Tunnels+Yala" },
    { name: "Ayerweng Skywalk", coords: [5.9700, 101.1800], type: "tourism", city_id: 207, link: "https://www.google.com/maps/search/Ayerweng+Skywalk+Yala" },
    { name: "Bang Lang Dam", coords: [6.1500, 101.2600], type: "tourism", city_id: 207, link: "https://www.google.com/maps/search/Bang+Lang+Dam+Yala" },
    { name: "Winter Flower Garden", coords: [5.8200, 101.0600], type: "tourism", city_id: 207, link: "https://www.google.com/maps/search/Winter+Flower+Garden+Yala" },
    { name: "Yala Central Mosque", coords: [6.5400, 101.2800], type: "tourism", city_id: 207, link: "https://www.google.com/maps/search/Yala+Central+Mosque+Yala" },
    { name: "Phra Mahathat Chedi Phra Phutthathammaprakat", coords: [5.7700, 101.0700], type: "tourism", city_id: 207, link: "https://www.google.com/maps/search/Phra+Mahathat+Chedi+Yala" },
    { name: "Than To Waterfall", coords: [6.1300, 101.1800], type: "tourism", city_id: 207, link: "https://www.google.com/maps/search/Than+To+Waterfall+Yala" },
    { name: "Sakai Village", coords: [6.1200, 101.2000], type: "tourism", city_id: 207, link: "https://www.google.com/maps/search/Sakai+Village+Yala" },
    // Logistics
    { name: "Betong Airport (BTZ)", coords: [5.7892, 101.1472], type: "transport", city_id: 207, link: "http://google.com/maps/search/Betong+Airport" },
    { name: "Pattani Port (Nearest)", coords: [6.8667, 101.2500], type: "port", city_id: 207, link: "http://google.com/maps/search/Pattani+Port" }, // Landlocked
    { name: "Yala Railway Station", coords: [6.5513, 101.2858], type: "transport", city_id: 207, link: "http://google.com/maps/search/Yala+Station" },
    { name: "Yala Bus Terminal", coords: [6.5444, 101.2850], type: "transport", city_id: 207, link: "http://google.com/maps/search/Yala+Bus" },

    // 8. Satun
    { name: "Tarutao National Marine Park", coords: [6.6500, 99.6500], type: "tourism", city_id: 208, link: "https://www.google.com/maps/search/Tarutao+National+Marine+Park+Satun" },
    { name: "Ko Lipe", coords: [6.4900, 99.3000], type: "tourism", city_id: 208, link: "https://www.google.com/maps/search/Ko+Lipe+Satun" },
    { name: "Thale Ban National Park", coords: [6.7100, 100.1700], type: "tourism", city_id: 208, link: "https://www.google.com/maps/search/Thale+Ban+National+Park+Satun" },
    { name: "Phetra National Park", coords: [6.9500, 99.7600], type: "tourism", city_id: 208, link: "https://www.google.com/maps/search/Phetra+National+Park+Satun" },
    { name: "Satun Central Mosque", coords: [6.6100, 100.0600], type: "tourism", city_id: 208, link: "https://www.google.com/maps/search/Satun+Central+Mosque+Satun" },
    { name: "Phu Pha Phet Cave", coords: [7.1200, 99.9900], type: "tourism", city_id: 208, link: "https://www.google.com/maps/search/Phu+Pha+Phet+Cave+Satun" },
    { name: "Wang Saiphot Waterfall", coords: [6.7500, 100.1000], type: "tourism", city_id: 208, link: "https://www.google.com/maps/search/Wang+Saiphot+Waterfall+Satun" },
    { name: "Prasat Hin Panyod", coords: [6.8500, 99.7800], type: "tourism", city_id: 208, link: "https://www.google.com/maps/search/Prasat+Hin+Panyod+Satun" },
    { name: "Pak Bara Beach", coords: [6.8400, 99.7700], type: "tourism", city_id: 208, link: "https://www.google.com/maps/search/Pak+Bara+Beach+Satun" },
    { name: "Monkey Mountain", coords: [6.6200, 100.0700], type: "tourism", city_id: 208, link: "https://www.google.com/maps/search/Monkey+Mountain+Satun" },
    // Logistics
    { name: "Hat Yai Airport (Nearest)", coords: [6.9333, 100.3933], type: "transport", city_id: 208, link: "http://google.com/maps/search/HDY+Airport" }, // No Airport
    { name: "Tammalang Pier", coords: [6.5333, 100.0667], type: "port", city_id: 208, link: "http://google.com/maps/search/Tammalang+Pier" },
    { name: "Hat Yai Junction (Nearest)", coords: [7.0033, 100.4682], type: "transport", city_id: 208, link: "http://google.com/maps/search/Hat+Yai+Station" }, // No Train
    { name: "Satun Bus Terminal", coords: [6.6238, 100.0674], type: "transport", city_id: 208, link: "http://google.com/maps/search/Satun+Bus" },

    // ==========================================
    // EC 3: SUMATRA CORRIDOR
    // ==========================================

    // 1. Aceh (ID: 301)
    { name: "Masjid Raya Baiturrahman", coords: [5.5536, 95.3170], type: "tourism", city_id: 301, link: "https://www.google.com/maps/search/Masjid+Raya+Baiturrahman+Aceh" },
    { name: "Museum Tsunami Aceh", coords: [5.5480, 95.3147], type: "tourism", city_id: 301, link: "https://www.google.com/maps/search/Museum+Tsunami+Aceh+Aceh" },
    { name: "PLTD Apung 1", coords: [5.5460, 95.3060], type: "tourism", city_id: 301, link: "https://www.google.com/maps/search/PLTD+Apung+1+Aceh" },
    { name: "Lampuuk Beach", coords: [5.5340, 95.2300], type: "tourism", city_id: 301, link: "https://www.google.com/maps/search/Lampuuk+Beach+Aceh" },
    { name: "Rubiah Island", coords: [5.8800, 95.2600], type: "tourism", city_id: 301, link: "https://www.google.com/maps/search/Rubiah+Island+Aceh" },
    { name: "Gunongan Historical Park", coords: [5.5500, 95.3100], type: "tourism", city_id: 301, link: "https://www.google.com/maps/search/Gunongan+Historical+Park+Aceh" },
    { name: "Aceh State Museum", coords: [5.5490, 95.3180], type: "tourism", city_id: 301, link: "https://www.google.com/maps/search/Aceh+State+Museum+Aceh" },
    { name: "Lhoknga Beach", coords: [5.4800, 95.2400], type: "tourism", city_id: 301, link: "https://www.google.com/maps/search/Lhoknga+Beach+Aceh" },
    { name: "Kherkhof Peucut Dutch Cemetery", coords: [5.5470, 95.3130], type: "tourism", city_id: 301, link: "https://www.google.com/maps/search/Kherkhof+Peucut+Aceh" },
    { name: "Zero Kilometer Monument Indonesia", coords: [5.9000, 95.2100], type: "tourism", city_id: 301, link: "https://www.google.com/maps/search/Zero+Kilometer+Monument+Indonesia+Aceh" },
    // Logistics
    { name: "Sultan Iskandar Muda Airport (BTJ)", coords: [5.5224, 95.4170], type: "transport", city_id: 301, link: "http://google.com/maps/search/BTJ+Airport" },
    { name: "Pelabuhan Ulee Lheue", coords: [5.5600, 95.2800], type: "port", city_id: 301, link: "http://google.com/maps/search/Ulee+Lheue" },
    { name: "Stasiun Bungkah (Pioneer)", coords: [5.1833, 97.0333], type: "transport", city_id: 301, link: "http://google.com/maps/search/Stasiun+Bungkah" }, // Pioneer Rail
    { name: "Terminal Batoh", coords: [5.5400, 95.3400], type: "transport", city_id: 301, link: "http://google.com/maps/search/Terminal+Batoh" },

    // 2. North Sumatra (EC3 Context - ID: 302)
    { name: "Lake Toba (Parapat)", coords: [2.6667, 98.9333], type: "tourism", city_id: 302, link: "https://www.google.com/maps/search/Lake+Toba+Parapat+North+Sumatra" },
    { name: "Sipiso-Piso Waterfall", coords: [2.9178, 98.5233], type: "tourism", city_id: 302, link: "https://www.google.com/maps/search/Sipiso-Piso+Waterfall+North+Sumatra" },
    { name: "Berastagi", coords: [3.1853, 98.5049], type: "tourism", city_id: 302, link: "https://www.google.com/maps/search/Berastagi+North+Sumatra" },
    { name: "Bukit Lawang", coords: [3.5500, 98.1100], type: "tourism", city_id: 302, link: "https://www.google.com/maps/search/Bukit+Lawang+North+Sumatra" },
    { name: "Tangahan", coords: [3.7000, 98.0800], type: "tourism", city_id: 302, link: "https://www.google.com/maps/search/Tangahan+North+Sumatra" },
    { name: "Nias Island", coords: [1.1300, 97.5500], type: "tourism", city_id: 302, link: "https://www.google.com/maps/search/Nias+Island+North+Sumatra" },
    { name: "Maimun Palace", coords: [3.5752, 98.6838], type: "tourism", city_id: 302, link: "https://www.google.com/maps/search/Maimun+Palace+North+Sumatra" },
    { name: "Tjong A Fie Mansion", coords: [3.5900, 98.6700], type: "tourism", city_id: 302, link: "https://www.google.com/maps/search/Tjong+A+Fie+Mansion+North+Sumatra" },
    { name: "Graha Maria Annai Velangkanni", coords: [3.5500, 98.6000], type: "tourism", city_id: 302, link: "https://www.google.com/maps/search/Graha+Maria+Annai+Velangkanni+North+Sumatra" },
    { name: "Siantar Zoo", coords: [2.9600, 99.0600], type: "tourism", city_id: 302, link: "https://www.google.com/maps/search/Siantar+Zoo+North+Sumatra" },
    // Logistics
    { name: "Kualanamu Int. Airport (KNO)", coords: [3.6422, 98.8852], type: "transport", city_id: 302, link: "http://google.com/maps/search/KNO+Airport" },
    { name: "Pelabuhan Kuala Tanjung", coords: [3.3600, 99.4500], type: "port", city_id: 302, link: "http://google.com/maps/search/Kuala+Tanjung" },
    { name: "Medan Train Station", coords: [3.5931, 98.6806], type: "transport", city_id: 302, link: "http://google.com/maps/search/Medan+Station" },
    { name: "Terminal Amplas", coords: [3.5387, 98.7185], type: "transport", city_id: 302, link: "http://google.com/maps/search/Terminal+Amplas" },

    // 3. Riau (ID: 303)
    { name: "Istana Siak Sri Indrapura", coords: [0.7947, 102.0486], type: "tourism", city_id: 303, link: "https://www.google.com/maps/search/Istana+Siak+Sri+Indrapura+Riau" },
    { name: "Candi Muara Takus", coords: [0.3347, 100.6403], type: "tourism", city_id: 303, link: "https://www.google.com/maps/search/Candi+Muara+Takus+Riau" },
    { name: "Tesso Nilo National Park", coords: [0.1000, 101.6000], type: "tourism", city_id: 303, link: "https://www.google.com/maps/search/Tesso+Nilo+National+Park+Riau" },
    { name: "Pekanbaru Great Mosque", coords: [0.5300, 101.4500], type: "tourism", city_id: 303, link: "https://www.google.com/maps/search/Pekanbaru+Great+Mosque+Riau" },
    { name: "Alam Mayang Recreational Park", coords: [0.5000, 101.5000], type: "tourism", city_id: 303, link: "https://www.google.com/maps/search/Alam+Mayang+Recreational+Park+Riau" },
    { name: "Sang Nila Utama Museum", coords: [0.4900, 101.4600], type: "tourism", city_id: 303, link: "https://www.google.com/maps/search/Sang+Nila+Utama+Museum+Riau" },
    { name: "Soeman HS Library", coords: [0.5100, 101.4400], type: "tourism", city_id: 303, link: "https://www.google.com/maps/search/Soeman+HS+Library+Riau" },
    { name: "Okura Tourism Village", coords: [0.6000, 101.5000], type: "tourism", city_id: 303, link: "https://www.google.com/maps/search/Okura+Tourism+Village+Riau" },
    { name: "Asia Heritage", coords: [0.6200, 101.4000], type: "tourism", city_id: 303, link: "https://www.google.com/maps/search/Asia+Heritage+Riau" },
    { name: "Rainbow Hills Rumbai", coords: [0.6500, 101.4200], type: "tourism", city_id: 303, link: "https://www.google.com/maps/search/Rainbow+Hills+Rumbai+Riau" },
    // Logistics
    { name: "Sultan Syarif Kasim II Airport (PKU)", coords: [0.4608, 101.4442], type: "transport", city_id: 303, link: "http://google.com/maps/search/PKU+Airport" },
    { name: "Pelabuhan Dumai", coords: [1.6850, 101.4460], type: "port", city_id: 303, link: "http://google.com/maps/search/Pelabuhan+Dumai" },
    { name: "Terminal BRPS (Bus)", coords: [0.4800, 101.3900], type: "transport", city_id: 303, link: "http://google.com/maps/search/Terminal+BRPS" },
    { name: "Terminal BRPS (Rail connection point)", coords: [0.4810, 101.3910], type: "transport", city_id: 303, link: "http://google.com/maps/search/Terminal+BRPS" }, // No Train yet

    // 4. West Sumatra (ID: 304)
    { name: "Jam Gadang (Bukittinggi)", coords: [-0.3050, 100.3692], type: "tourism", city_id: 304, link: "https://www.google.com/maps/search/Jam+Gadang+West+Sumatra" },
    { name: "Istano Basa Pagaruyung", coords: [-0.4711, 100.6214], type: "tourism", city_id: 304, link: "https://www.google.com/maps/search/Istano+Basa+Pagaruyung+West+Sumatra" },
    { name: "Kelok 9", coords: [-0.0714, 100.6975], type: "tourism", city_id: 304, link: "https://www.google.com/maps/search/Kelok+9+West+Sumatra" },
    { name: "Lake Maninjau", coords: [-0.3100, 100.1800], type: "tourism", city_id: 304, link: "https://www.google.com/maps/search/Lake+Maninjau+West+Sumatra" },
    { name: "Sianok Canyon", coords: [-0.3000, 100.3600], type: "tourism", city_id: 304, link: "https://www.google.com/maps/search/Sianok+Canyon+West+Sumatra" },
    { name: "Air Manis Beach", coords: [-0.9600, 100.3500], type: "tourism", city_id: 304, link: "https://www.google.com/maps/search/Air+Manis+Beach+West+Sumatra" },
    { name: "Mentawai Islands", coords: [-1.4000, 99.0000], type: "tourism", city_id: 304, link: "https://www.google.com/maps/search/Mentawai+Islands+West+Sumatra" },
    { name: "Lake Singkarak", coords: [-0.6000, 100.5500], type: "tourism", city_id: 304, link: "https://www.google.com/maps/search/Lake+Singkarak+West+Sumatra" },
    { name: "Harau Valley", coords: [-0.1000, 100.6600], type: "tourism", city_id: 304, link: "https://www.google.com/maps/search/Harau+Valley+West+Sumatra" },
    { name: "Padang Old Town", coords: [-0.9500, 100.3600], type: "tourism", city_id: 304, link: "https://www.google.com/maps/search/Padang+Old+Town+West+Sumatra" },
    // Logistics
    { name: "Minangkabau Int. Airport (PDG)", coords: [-0.7865, 100.2922], type: "transport", city_id: 304, link: "http://google.com/maps/search/PDG+Airport" },
    { name: "Teluk Bayur Port", coords: [-0.9996, 100.3752], type: "port", city_id: 304, link: "http://google.com/maps/search/Teluk+Bayur" },
    { name: "Stasiun Padang", coords: [-0.9420, 100.3710], type: "transport", city_id: 304, link: "http://google.com/maps/search/Stasiun+Padang" },
    { name: "Terminal Anak Air", coords: [-0.8500, 100.3300], type: "transport", city_id: 304, link: "http://google.com/maps/search/Terminal+Anak+Air" },

    // 5. Jambi (ID: 305)
    { name: "Candi Muaro Jambi", coords: [-1.4775, 103.6667], type: "tourism", city_id: 305, link: "https://www.google.com/maps/search/Candi+Muaro+Jambi+Jambi" },
    { name: "Mount Kerinci", coords: [-1.6967, 101.2642], type: "tourism", city_id: 305, link: "https://www.google.com/maps/search/Mount+Kerinci+Jambi" },
    { name: "Lake Kerinci", coords: [-2.1500, 101.5000], type: "tourism", city_id: 305, link: "https://www.google.com/maps/search/Lake+Kerinci+Jambi" },
    { name: "Gentala Arasy Bridge", coords: [-1.5900, 103.6100], type: "tourism", city_id: 305, link: "https://www.google.com/maps/search/Gentala+Arasy+Bridge+Jambi" },
    { name: "Telun Berasap Waterfall", coords: [-1.6800, 101.3000], type: "tourism", city_id: 305, link: "https://www.google.com/maps/search/Telun+Berasap+Waterfall+Jambi" },
    { name: "Bukit Khayangan", coords: [-2.0500, 101.4000], type: "tourism", city_id: 305, link: "https://www.google.com/maps/search/Bukit+Khayangan+Jambi" },
    { name: "Danau Kaco", coords: [-2.2000, 101.5500], type: "tourism", city_id: 305, link: "https://www.google.com/maps/search/Danau+Kaco+Jambi" },
    { name: "Mount Tujuh", coords: [-1.7000, 101.4000], type: "tourism", city_id: 305, link: "https://www.google.com/maps/search/Mount+Tujuh+Jambi" },
    { name: "Batanghari River", coords: [-1.6000, 103.6000], type: "tourism", city_id: 305, link: "https://www.google.com/maps/search/Batanghari+River+Jambi" },
    { name: "Tanggo Rajo Tourism Area", coords: [-1.5900, 103.6100], type: "tourism", city_id: 305, link: "https://www.google.com/maps/search/Tanggo+Rajo+Tourism+Area+Jambi" },
    // Logistics
    { name: "Sultan Thaha Airport (DJB)", coords: [-1.6375, 103.6425], type: "transport", city_id: 305, link: "http://google.com/maps/search/DJB+Airport" },
    { name: "Pelabuhan Talang Duku", coords: [-1.5500, 103.7000], type: "port", city_id: 305, link: "http://google.com/maps/search/Talang+Duku" },
    { name: "Terminal Alam Barajo", coords: [-1.6400, 103.5800], type: "transport", city_id: 305, link: "http://google.com/maps/search/Terminal+Alam+Barajo" },
    { name: "Terminal Alam Barajo (No Train)", coords: [-1.6410, 103.5810], type: "transport", city_id: 305, link: "http://google.com/maps/search/Terminal+Alam+Barajo" },

    // 6. South Sumatra (ID: 306)
    { name: "Ampera Bridge", coords: [-2.9917, 104.7634], type: "tourism", city_id: 306, link: "https://www.google.com/maps/search/Ampera+Bridge+South+Sumatra" },
    { name: "Kemaro Island", coords: [-2.9772, 104.8322], type: "tourism", city_id: 306, link: "https://www.google.com/maps/search/Kemaro+Island+South+Sumatra" },
    { name: "Musi River", coords: [-2.9900, 104.7600], type: "tourism", city_id: 306, link: "https://www.google.com/maps/search/Musi+River+South+Sumatra" },
    { name: "Sultan Mahmud Badaruddin II Museum", coords: [-2.9800, 104.7600], type: "tourism", city_id: 306, link: "https://www.google.com/maps/search/Sultan+Mahmud+Badaruddin+II+Museum+South+Sumatra" },
    { name: "Kuto Besak Fortress", coords: [-2.9900, 104.7500], type: "tourism", city_id: 306, link: "https://www.google.com/maps/search/Kuto+Besak+Fortress+South+Sumatra" },
    { name: "Punti Kayu Nature Park", coords: [-2.9400, 104.7200], type: "tourism", city_id: 306, link: "https://www.google.com/maps/search/Punti+Kayu+Nature+Park+South+Sumatra" },
    { name: "Lake Ranau", coords: [-4.8500, 103.9500], type: "tourism", city_id: 306, link: "https://www.google.com/maps/search/Lake+Ranau+South+Sumatra" },
    { name: "Bumi Ayu Temple Site", coords: [-3.2500, 103.8000], type: "tourism", city_id: 306, link: "https://www.google.com/maps/search/Bumi+Ayu+Temple+Site+South+Sumatra" },
    { name: "Dempo Mountain", coords: [-4.0300, 103.1300], type: "tourism", city_id: 306, link: "https://www.google.com/maps/search/Dempo+Mountain+South+Sumatra" },
    { name: "Curup Embun Waterfall", coords: [-4.0500, 103.2000], type: "tourism", city_id: 306, link: "https://www.google.com/maps/search/Curup+Embun+Waterfall+South+Sumatra" },
    // Logistics
    { name: "Sultan Mahmud Badaruddin II (PLM)", coords: [-2.8983, 104.7003], type: "transport", city_id: 306, link: "http://google.com/maps/search/PLM+Airport" },
    { name: "Boom Baru Port", coords: [-2.9750, 104.7800], type: "port", city_id: 306, link: "http://google.com/maps/search/Boom+Baru" },
    { name: "Kertapati Railway Station", coords: [-3.0030, 104.7470], type: "transport", city_id: 306, link: "http://google.com/maps/search/Kertapati+Station" },
    { name: "Terminal Alang-Alang Lebar", coords: [-2.9300, 104.6800], type: "transport", city_id: 306, link: "http://google.com/maps/search/Terminal+Alang+Lebar" },

    // 7. Bengkulu (ID: 307)
    { name: "Fort Marlborough", coords: [-3.7878, 102.2536], type: "tourism", city_id: 307, link: "https://www.google.com/maps/search/Fort+Marlborough+Bengkulu" },
    { name: "Rumah Bung Karno", coords: [-3.7967, 102.2611], type: "tourism", city_id: 307, link: "https://www.google.com/maps/search/Rumah+Bung+Karno+Bengkulu" },
    { name: "Panjang Beach", coords: [-3.8300, 102.2700], type: "tourism", city_id: 307, link: "https://www.google.com/maps/search/Panjang+Beach+Bengkulu" },
    { name: "Tapak Paderi Beach", coords: [-3.7900, 102.2500], type: "tourism", city_id: 307, link: "https://www.google.com/maps/search/Tapak+Paderi+Beach+Bengkulu" },
    { name: "Lake Dendam Tak Sudah", coords: [-3.8100, 102.3000], type: "tourism", city_id: 307, link: "https://www.google.com/maps/search/Lake+Dendam+Tak+Sudah+Bengkulu" },
    { name: "Rafflesia Arnoldii Conservation Area", coords: [-3.6000, 102.5000], type: "tourism", city_id: 307, link: "https://www.google.com/maps/search/Rafflesia+Arnoldii+Conservation+Area+Bengkulu" },
    { name: "Enggano Island", coords: [-5.3500, 102.2500], type: "tourism", city_id: 307, link: "https://www.google.com/maps/search/Enggano+Island+Bengkulu" },
    { name: "Suban Hot Spring", coords: [-3.4500, 102.5500], type: "tourism", city_id: 307, link: "https://www.google.com/maps/search/Suban+Hot+Spring+Bengkulu" },
    { name: "Curug Embun Waterfall", coords: [-3.4000, 102.5000], type: "tourism", city_id: 307, link: "https://www.google.com/maps/search/Curug+Embun+Waterfall+Bengkulu" },
    { name: "Bukit Kaba Volcano", coords: [-3.5000, 102.6000], type: "tourism", city_id: 307, link: "https://www.google.com/maps/search/Bukit+Kaba+Volcano+Bengkulu" },
    // Logistics
    { name: "Fatmawati Soekarno Airport (BKS)", coords: [-3.8625, 102.3392], type: "transport", city_id: 307, link: "http://google.com/maps/search/BKS+Airport" },
    { name: "Pelabuhan Pulau Baai", coords: [-3.9000, 102.3000], type: "port", city_id: 307, link: "http://google.com/maps/search/Pulau+Baai" },
    { name: "Terminal Betungan", coords: [-3.8800, 102.3500], type: "transport", city_id: 307, link: "http://google.com/maps/search/Terminal+Betungan" },
    { name: "Lubuk Linggau Station (Nearest Rail)", coords: [-3.2950, 102.8600], type: "transport", city_id: 307, link: "http://google.com/maps/search/Lubuk+Linggau+Station" }, // Serving Bengkulu via land

    // 8. Lampung (ID: 308)
    { name: "Way Kambas National Park", coords: [-4.9333, 105.7000], type: "tourism", city_id: 308, link: "https://www.google.com/maps/search/Way+Kambas+National+Park+Lampung" },
    { name: "Pahawang Island", coords: [-5.6722, 105.2239], type: "tourism", city_id: 308, link: "https://www.google.com/maps/search/Pahawang+Island+Lampung" },
    { name: "Kiluan Bay", coords: [-5.7500, 105.1000], type: "tourism", city_id: 308, link: "https://www.google.com/maps/search/Kiluan+Bay+Lampung" },
    { name: "Krakatoa Volcano", coords: [-6.1022, 105.4230], type: "tourism", city_id: 308, link: "https://www.google.com/maps/search/Krakatoa+Volcano+Lampung" },
    { name: "Tanjung Setia Beach", coords: [-5.3000, 104.0000], type: "tourism", city_id: 308, link: "https://www.google.com/maps/search/Tanjung+Setia+Beach+Lampung" },
    { name: "Gigi Hiu Beach", coords: [-5.7000, 105.0000], type: "tourism", city_id: 308, link: "https://www.google.com/maps/search/Gigi+Hiu+Beach+Lampung" },
    { name: "Lembah Hijau", coords: [-5.4200, 105.2400], type: "tourism", city_id: 308, link: "https://www.google.com/maps/search/Lembah+Hijau+Lampung" },
    { name: "Mutun Beach", coords: [-5.5000, 105.2800], type: "tourism", city_id: 308, link: "https://www.google.com/maps/search/Mutun+Beach+Lampung" },
    { name: "Siger Tower", coords: [-5.8600, 105.7500], type: "tourism", city_id: 308, link: "https://www.google.com/maps/search/Siger+Tower+Lampung" },
    { name: "Puncak Mas", coords: [-5.4000, 105.2300], type: "tourism", city_id: 308, link: "https://www.google.com/maps/search/Puncak+Mas+Lampung" },
    // Logistics
    { name: "Radin Inten II Airport (TKG)", coords: [-5.2417, 105.1764], type: "transport", city_id: 308, link: "http://google.com/maps/search/TKG+Airport" },
    { name: "Pelabuhan Bakauheni", coords: [-5.8711, 105.7533], type: "port", city_id: 308, link: "http://google.com/maps/search/Bakauheni" },
    { name: "Tanjung Karang Station", coords: [-5.4080, 105.2630], type: "transport", city_id: 308, link: "http://google.com/maps/search/Tanjung+Karang+Station" },
    { name: "Terminal Rajabasa", coords: [-5.3600, 105.2300], type: "transport", city_id: 308, link: "http://google.com/maps/search/Terminal+Rajabasa" }
];