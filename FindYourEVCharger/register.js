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
    document.getElementById('registerForm').reset();
    populateChargerDropdown();
});
document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
});