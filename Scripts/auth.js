
function loginUser() {
    sessionStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'Perfil_Heroe.html';
}

function checkAuth() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    return isLoggedIn
}

function redirectToLogin() {
    window.location.replace('login.html');
}


function logoutUser() {
    sessionStorage.removeItem('isLoggedIn');
    window.location.replace('login.html');
}
