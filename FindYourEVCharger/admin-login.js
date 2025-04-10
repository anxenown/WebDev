// admin-login.js
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Hardcoded admin credentials (for demo purposes)
    const adminUsername = 'admin';
    const adminPassword = 'pass123';
    
    if (username === adminUsername && password === adminPassword) {
        // Set login flag in localStorage
        localStorage.setItem('isAdminLoggedIn', 'true');
        // Redirect to registration page
        window.location.href = 'register.html';
    } else {
        // Show error message
        document.getElementById('errorMessage').style.display = 'block';
    }
});