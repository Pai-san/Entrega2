document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".btn-toggle-perfil");
    const nombreUsuario = document.querySelector(".nombre-usuario");
    const tipoUsuario = document.querySelector(".tipo-usuario");
    const descripcionUsuario = document.querySelector(".descripcion-usuario");
    const fotoPerfil = document.querySelector(".foto-perfil");
    const heroPromotionBtn = document.getElementById('hero-promotion-btn');

    let isHero = false;

    function updateHeroPromotionButton() {
        if (isHero) {
            heroPromotionBtn.disabled = true;  // Deshabilitar el botón en modo Héroe
            heroPromotionBtn.classList.add('disabled');
        } else {
            heroPromotionBtn.disabled = false;  // Habilitar el botón en modo Civil
            heroPromotionBtn.classList.remove('disabled');
        }
    }

    function showPromotionMessage() {
        alert('Su Hero promotion request está siendo tramitada');
    }

    heroPromotionBtn.addEventListener("click", function() {
        if (!isHero) {
            showPromotionMessage();
        }
    });

    toggleButton.addEventListener("click", function() {
        if (isHero) {
            nombreUsuario.textContent = "Pepito Rodriguez";
            tipoUsuario.textContent = "Tipo: Civil";
            descripcionUsuario.textContent = "Esta es una breve descripción del usuario en modo civil.";
            fotoPerfil.src = "resources/perfil_2.png";
        } else {
            nombreUsuario.textContent = "Lolero Extremo!";
            tipoUsuario.textContent = "Tipo: Héroe";
            descripcionUsuario.textContent = "Esta es una breve descripción del usuario en modo héroe.";
            fotoPerfil.src = "resources/hero_profile.jpg";
        }
        isHero = !isHero;
        updateHeroPromotionButton();
    });

    // Configuración inicial del botón de promoción
    updateHeroPromotionButton();
});


function recargarSaldo() {
    let saldoElement = document.getElementById("saldo");
    let saldoActual = parseFloat(saldoElement.textContent.replace('$', ''));
    let montoRecarga = parseFloat(document.getElementById("monto").value);

    if (!isNaN(montoRecarga) && montoRecarga > 0) {
        let nuevoSaldo = saldoActual + montoRecarga;
        saldoElement.textContent = `$${nuevoSaldo.toFixed(2)}`;
        document.getElementById("monto").value = '';
    } else {
        alert("Por favor, ingresa un monto válido.");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const estrellas = document.querySelectorAll('.estrella');
    estrellas.forEach(estrella => {
        estrella.addEventListener('click', function() {
            const valor = parseInt(this.getAttribute('data-value'));
            estrellas.forEach(e => e.classList.remove('seleccionada'));
            for (let i = 0; i < valor; i++) {
                estrellas[i].classList.add('seleccionada');
            }
            document.getElementById('calificacion').value = valor;
        });
    });
});

function agregarReseña() {
    var textoReseña = document.getElementById('nuevo-comentario').value;
    var calificacion = document.getElementById('calificacion').value || 0;

    if (textoReseña.trim() !== '') {
        var nuevaReseña = document.createElement('div');
        nuevaReseña.className = 'reseña';

        var contenidoReseña = document.createElement('p');
        contenidoReseña.textContent = textoReseña;
        nuevaReseña.appendChild(contenidoReseña);

        var contenidoCalificacion = document.createElement('div');
        contenidoCalificacion.className = 'calificacion';
        for (let i = 0; i < 5; i++) {
            let estrella = document.createElement('span');
            estrella.className = 'estrella';
            estrella.innerHTML = '&#9733;';
            if (i < calificacion) {
                estrella.classList.add('seleccionada');
            }
            contenidoCalificacion.appendChild(estrella);
        }
        nuevaReseña.appendChild(contenidoCalificacion);

        var listaReseñas = document.getElementById('lista-reseñas');
        listaReseñas.appendChild(nuevaReseña);

        document.getElementById('nuevo-comentario').value = '';
        document.getElementById('calificacion').value = '';

        var mensajeInicial = listaReseñas.querySelector('p');
        if (mensajeInicial) {
            listaReseñas.removeChild(mensajeInicial);
        }
    } else {
        alert('Por favor, escribe un comentario.');
    }
}

document.getElementById('agregar-comentario').addEventListener('click', agregarReseña);

document.addEventListener('DOMContentLoaded', () => {
    const reseñas = [
        'Reseña 1...',
        'Reseña 2...',
        'Reseña 3...',
        'Reseña 4...',
        'Reseña 5...',
        'Reseña 6...',
        'Reseña 7...',

    ];
    const reseñasPorPagina = 5;
    let paginaActual = 1;

    function mostrarReseñas() {
        const inicio = (paginaActual - 1) * reseñasPorPagina;
        const fin = inicio + reseñasPorPagina;
        const reseñasMostradas = reseñas.slice(inicio, fin);

        const listaReseñas = document.getElementById('lista-reseñas');
        listaReseñas.innerHTML = '';

        reseñasMostradas.forEach(reseña => {
            const divReseña = document.createElement('div');
            divReseña.classList.add('reseña');
            divReseña.textContent = reseña;
            listaReseñas.appendChild(divReseña);
        });
    }

    function actualizarPaginacion() {
        document.getElementById('prev-page').disabled = paginaActual === 1;
        document.getElementById('next-page').disabled = paginaActual * reseñasPorPagina >= reseñas.length;
    }

    document.getElementById('prev-page').addEventListener('click', () => {
        if (paginaActual > 1) {
            paginaActual--;
            mostrarReseñas();
            actualizarPaginacion();
        }
    });

    document.getElementById('next-page').addEventListener('click', () => {
        if (paginaActual * reseñasPorPagina < reseñas.length) {
            paginaActual++;
            mostrarReseñas();
            actualizarPaginacion();
        }
    });

    mostrarReseñas();
    actualizarPaginacion();
});






