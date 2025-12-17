// script.js

// 1. Initialize Map
var map = L.map('map').setView([4.0, 100.0], 5);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO',
    maxZoom: 19
}).addTo(map);

// --- LAYER GROUPS ---
const cityLayer = L.layerGroup().addTo(map);
const landmarkLayer = L.layerGroup().addTo(map);

let geoJsonLayer = null;
let activeId = null;

// --- ZOOM LISTENER (Hide lines on zoom) ---
map.on('zoomend', function() {
    const currentZoom = map.getZoom();
    
    if (currentZoom > 9) {
        geoJsonLayer.setStyle({ opacity: 0, interactive: false });
    } else {
        geoJsonLayer.setStyle(styleFunc);
    }
});

// --- HELPER FUNCTIONS ---
function getFeatureId(feature) {
    if (feature.id !== undefined) return feature.id;
    if (feature.properties && feature.properties.id !== undefined) return feature.properties.id;
    return null;
}

function styleFunc(feature) {
    const featId = getFeatureId(feature);
    const isSelected = (activeId === featId);
    const isAnySelected = (activeId !== null);
    
    let opacity = 0.8; 
    if (isAnySelected && !isSelected) opacity = 0; 
    if (isAnySelected && isSelected) opacity = 1.0; 

    return {
        color: feature.properties.color || feature.properties.stroke, 
        weight: isSelected ? 6 : 4,
        opacity: opacity,
        interactive: opacity > 0 
    };
}

// --- DRILL DOWN LOGIC (Level 3) ---
function loadCityDetails(city) {
    landmarkLayer.clearLayers();
    map.flyTo(city.coords, 12, { duration: 1.5 }); 

    const pois = landmarks.filter(l => l.city_id === city.id);

    pois.forEach(poi => {
        let color = '#3498db'; // Default Blue
        if (poi.type === 'tourism') color = '#e74c3c'; // Red
        if (poi.type === 'port') color = '#9b59b6'; // Purple
        if (poi.type === 'transport') {
                if (poi.name.includes("Airport")) color = '#f39c12'; 
                else if (poi.name.includes("Bus")) color = '#16a085'; 
                else color = '#3498db'; 
        }

        const marker = L.circleMarker(poi.coords, {
            radius: 7, fillColor: color, color: "white", weight: 2, fillOpacity: 0.9
        });

        const popupContent = `
            <div style="text-align:center">
                <b>${poi.name}</b><br>
                <span style="font-size:10px; text-transform:uppercase; color:#666">${poi.type}</span><br>
                <a href="${poi.link}" target="_blank" 
                   style="display:inline-block; margin-top:5px; text-decoration:none; color:white; background:${color}; padding:4px 8px; border-radius:4px; font-size:11px;">
                   Open Google Maps
                </a>
            </div>
        `;
        marker.bindPopup(popupContent);
        landmarkLayer.addLayer(marker);
    });
}

// --- TOGGLE LOGIC (Level 2) ---
function toggleCorridor(clickedId, btn) {
    const allBtns = document.querySelectorAll('.corridor-btn');
    cityLayer.clearLayers();
    landmarkLayer.clearLayers(); 

    if (activeId === clickedId) {
        // Reset
        activeId = null;
        allBtns.forEach(b => b.classList.remove('active'));
        geoJsonLayer.setStyle(styleFunc); 
        map.setView([4.0, 100.0], 5);
        
    } else {
        // Activate
        activeId = clickedId;
        allBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const bounds = L.latLngBounds([]);
        let foundAny = false;

        geoJsonLayer.eachLayer(layer => {
            const layerId = getFeatureId(layer.feature);
            if (layerId === activeId && layer.getBounds) {
                bounds.extend(layer.getBounds());
                foundAny = true;
            }
        });

        // Load Cities
        const relevantCities = cities.filter(c => c.ec_id === activeId);
        relevantCities.forEach(city => {
            const marker = L.circleMarker(city.coords, {
                radius: 8, color: 'white', fillColor: '#333', fillOpacity: 1, weight: 2
            }).bindTooltip(`<b>${city.name}</b>`, {permanent: false, direction: 'top'});
            
            marker.on('click', () => loadCityDetails(city));
            cityLayer.addLayer(marker);
        });

        if (foundAny && bounds.isValid()) {
            map.fitBounds(bounds, { padding: [50, 50] });
        }
        geoJsonLayer.setStyle(styleFunc);
    }
}

// --- INITIALIZATION ---
function init() {
    // Check if data loaded correctly
    if (typeof imt_gt_data === 'undefined') {
        console.error("Error: imt_data.js not loaded!");
        return;
    }

    const container = document.getElementById('button-container');
    const features = imt_gt_data.features;
    const uniqueIds = new Set();
    
    features.sort((a, b) => getFeatureId(a) - getFeatureId(b));

    features.forEach(feat => {
        const id = getFeatureId(feat);
        const props = feat.properties;
        
        if (id !== null && !uniqueIds.has(id)) {
            uniqueIds.add(id);
            const btn = document.createElement('button');
            btn.className = 'corridor-btn';
            btn.innerText = props.name || "Corridor " + id; 
            btn.style.borderLeft = `5px solid ${props.color || props.stroke}`;
            btn.onclick = () => toggleCorridor(id, btn);
            container.appendChild(btn);
        }
    });

    geoJsonLayer = L.geoJSON(imt_gt_data, {
        style: styleFunc,
        onEachFeature: function (feature, layer) {
            layer.bindPopup(`<b>${feature.properties.name}</b>`);
        }
    }).addTo(map);
}

// Run initialization
init();