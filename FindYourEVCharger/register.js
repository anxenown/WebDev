// register.js
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const newCharger = {
        id: Date.now().toString(), 
        name: document.getElementById('name').value,
        address: document.getElementById('address').value,
        lat: parseFloat(document.getElementById('latitude').value),
        lng: parseFloat(document.getElementById('longitude').value),
        status: document.getElementById('status').value
    };
    
    // Get existing user-added chargers from localStorage
    let userChargers = JSON.parse(localStorage.getItem('userChargers')) || [];
    
    // Add new charger
    userChargers.push(newCharger);
    
    // Save back to localStorage
    localStorage.setItem('userChargers', JSON.stringify(userChargers));
    
    // Redirect to index.html
    window.location.href = 'index.html';

});
document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
});
document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newCharger = {
        id: Date.now().toString(), // Simple unique ID
        name: document.getElementById('name').value,
        address: document.getElementById('address').value,
        latitude: parseFloat(document.getElementById('latitude').value),
        longitude: parseFloat(document.getElementById('longitude').value),
        type: document.getElementById('status').value
    };
    
    try {
        let chargers = JSON.parse(localStorage.getItem('chargers') || '[]');
        chargers.push(newCharger);
        localStorage.setItem('chargers', JSON.stringify(chargers));
        alert('Charger added successfully');
        document.getElementById('registerForm').reset();
        // Refresh delete dropdown
        populateChargerDropdown();
        
        // Redirect to index.html
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Error adding charger:', error);
        alert('Error adding charger. Please try again.');
    }
});