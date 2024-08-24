document.getElementById('forgot-password').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('comic-alert').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});

function closeAlert() {
    document.getElementById('comic-alert').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function sendRecoveryEmail() {
    const email = document.getElementById('email').value;
    if (validateEmail(email)) {
        alert(`Se ha enviado un enlace de recuperación a ${email}`);
        closeAlert();
    } else {
        alert('Por favor, introduce un correo electrónico válido.');
    }
}

function validateEmail(email) {
    // Expresión regular para validar el formato del correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}