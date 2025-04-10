// script.js
let map = L.map('map').setView([19.0760, 72.8777], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

async function fetchChargers() {
    try {
        const response = await fetch('chargers.json'); // Fetch static data
        const staticChargers = await response.json();
        
        // Get user-added chargers from localStorage
        const userChargers = JSON.parse(localStorage.getItem('userChargers')) || [];
        
        // Combine static and user-added chargers
        return [...staticChargers, ...userChargers];
    } catch (error) {
        console.error('Error fetching chargers:', error);
        // Fallback to user-added chargers if fetch fails
        return JSON.parse(localStorage.getItem('userChargers')) || [];
    }
}

function addMarkers(chargers) {
    chargers.forEach(charger => {
        L.marker([charger.lat, charger.lng])
            .addTo(map)
            .bindPopup(`<b>${charger.name}</b><br>${charger.address}<br>Status: ${charger.status}`);
    });
}

function displayChargers(chargers) {
    const chargerList = document.getElementById('chargerList');
    chargerList.innerHTML = '';
    
    chargers.forEach(charger => {
        const div = document.createElement('div');
        div.className = 'charger-item';
        div.innerHTML = `
            <h3>${charger.name}</h3>
            <p>${charger.address}</p>
            <p>Status: ${charger.status}</p>
            <button class="directions-btn" onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${charger.lat},${charger.lng}', '_blank')">
                Get Directions
            </button>
        `;
        chargerList.appendChild(div);
    });
}

function searchChargers() {
    const searchTerm = document.getElementById('locationInput').value.toLowerCase();
    fetchChargers().then(chargers => {
        const filteredChargers = chargers.filter(charger => 
            charger.address.toLowerCase().includes(searchTerm)
        );
        
        if (filteredChargers.length > 0) {
            map.setView([filteredChargers[0].lat, filteredChargers[0].lng], 12);
        }
        
        map.eachLayer(layer => {
            if (layer instanceof L.Marker) {
                map.removeLayer(layer);
            }
        });
        
        addMarkers(filteredChargers);
        displayChargers(filteredChargers);
    });
}

async function init() {
    const chargers = await fetchChargers();
    addMarkers(chargers);
    displayChargers(chargers);
}

init();