// LOGIN FORM
let loginForm = document.querySelector('#loginForm');
if(loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Login successful! Welcome to Naija Political Watch');
        window.location.href = 'index.html';
    });
}

// REGISTER FORM
let registerForm = document.querySelector('#registerForm');
if(registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Account created! You can now login');
        window.location.href = 'login.html';
    });
}