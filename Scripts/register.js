document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const job = document.getElementById('job').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const addressError = document.getElementById('addressError');
    const jobError = document.getElementById('jobError');
    const passwordError = document.getElementById('passwordError');

    let isValid = true;

    if (name.trim() === '') {
        nameError.textContent = 'El nombre es obligatorio';
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    if (email.trim() === '') {
        emailError.textContent = 'El correo electrónico es obligatorio';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    if (phone.trim() === '') {
        phoneError.textContent = 'El teléfono es obligatorio';
        phoneError.style.display = 'block';
        isValid = false;
    } else {
        phoneError.style.display = 'none';
    }

    if (address.trim() === '') {
        addressError.textContent = 'La dirección es obligatoria';
        addressError.style.display = 'block';
        isValid = false;
    } else {
        addressError.style.display = 'none';
    }

    if (job.trim() === '') {
        jobError.textContent = 'El empleo es obligatorio';
        jobError.style.display = 'block';
        isValid = false;
    } else {
        jobError.style.display = 'none';
    }

    if (password !== confirmPassword) {
        passwordError.textContent = 'Las contraseñas no coinciden';
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    if (isValid) {
        
        const confirmationMessage = document.getElementById('confirmationMessage');
        confirmationMessage.style.display = 'block';
        setTimeout(function() {
            window.location.href = 'login.html';
        }, 2000);
        
    }
});

document.getElementById('phone').addEventListener('input', function(event) {
    const phone = event.target.value;
    const phoneError = document.getElementById('phoneError');
    const phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(phone)) {
        phoneError.textContent = 'El teléfono debe tener exactamente 10 dígitos y solo números';
        phoneError.style.display = 'block';
    } else {
        phoneError.style.display = 'none';
    }
});
