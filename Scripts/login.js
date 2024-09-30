document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username.length === 0 || password.length === 0) {
        errorMessage.textContent = 'Por favor, llena todos los campos';
        errorMessage.style.display = 'block';
        return;
    }

    errorMessage.style.display = 'none';

    loginUser();
    
    // Nueva lógica para redirigir al administrador
    if (username === 'admin' && password === '12345') {
        window.location.href = 'admin.html'; // Redirige a la página de administrador
    } else {
        errorMessage.textContent = 'Credenciales incorrectas. Inténtalo de nuevo.';
        errorMessage.style.display = 'block';
    }
});