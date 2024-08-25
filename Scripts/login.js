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
});
