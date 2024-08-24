document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".btn-toggle-perfil");
    const nombreUsuario = document.querySelector(".nombre-usuario");
    const tipoUsuario = document.querySelector(".tipo-usuario");
    const descripcionUsuario = document.querySelector(".descripcion-usuario");
    const fotoPerfil = document.querySelector(".foto-perfil");

    let isHero = false;

    toggleButton.addEventListener("click", function() {
        if (isHero) {
            nombreUsuario.textContent = "Pepito Rodriguez";
            tipoUsuario.textContent = "Tipo: Civil";
            descripcionUsuario.textContent = "Esta es una breve descripción del usuario en modo civil. SAPOHIFUEPUTA";
            fotoPerfil.src = "resources/perfil_2.png";
        } else {
            nombreUsuario.textContent = "Lolero Extremo!";
            tipoUsuario.textContent = "Tipo: Héroe";
            descripcionUsuario.textContent = "Esta es una breve descripción del usuario en modo héroe.";
            fotoPerfil.src = "resources/hero_profile.jpg";
        }
        isHero = !isHero;
    });
});