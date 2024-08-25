document.getElementById('next-step-1').addEventListener('click', function (event) {
    // Obtener los valores de los campos
    const subject = document.getElementsByName('subject')[0].value.trim();
    const location = document.getElementsByName('location')[0].value.trim();
    const description = document.getElementsByName('description')[0].value.trim();
    const reward = document.getElementsByName('reward')[0].value;
    const importance = document.getElementsByName('importance')[0].value;

    if (!subject || !/[a-zA-Z]/.test(subject)) {
        alert('El Asunto no puede estar vacío y debe contener al menos una letra.');
        return;
    }

    if (!location) {
        alert('Por favor ingresa la ubicación.');
        return;
    }

    if (!description) {
        alert('Por favor ingresa la descripción.');
        return;
    }

    if (reward <= 0) {
        alert('La recompensa debe ser mayor que 0.');
        return;
    }

    if (!importance) {
        alert('Por favor selecciona una importancia.');
        return;
    }

    document.getElementById('step-1').style.display = 'none';
    document.getElementById('step-2').style.display = 'block';
});


document.getElementById('form-step-2').addEventListener('submit', function (event) {
    event.preventDefault();

    const cardholderName = document.getElementsByName('cardholder_name')[0].value.trim();
    const cardNumber = document.getElementsByName('card_number')[0].value.trim();
    const expiryDate = document.getElementsByName('expiry_date')[0].value.trim();
    const cvv = document.getElementsByName('cvv')[0].value.trim();

    // Validar que el campo Nombre en la tarjeta no esté vacío
    if (!cardholderName) {
        alert('Por favor ingresa el nombre en la tarjeta.');
        return;
    }

    // Validar que el Número de tarjeta contenga exactamente 16 dígitos
    if (!/^\d{16}$/.test(cardNumber)) {
        alert('El número de tarjeta debe contener exactamente 16 dígitos.');
        return;
    }

    // Validar que la Fecha de expiración tenga el formato MM/AA y sea una fecha válida
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
        alert('La fecha de expiración debe tener el formato MM/AA.');
        return;
    }

    const [month, year] = expiryDate.split('/');
    const currentDate = new Date();
    const expiryDateObj = new Date(`20${year}`, month - 1);

    if (expiryDateObj <= currentDate) {
        alert('La fecha de expiración debe ser una fecha futura.');
        return;
    }

    // Validar que el CVV contenga exactamente 3 o 4 dígitos
    if (!/^\d{3,4}$/.test(cvv)) {
        alert('El CVV debe contener 3 o 4 dígitos.');
        return;
    }
    document.getElementById('comic-alert').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});


function closeAlert() {
    document.getElementById('comic-alert').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    window.location.href = 'requestbase.html';
}
