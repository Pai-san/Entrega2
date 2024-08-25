document.addEventListener('DOMContentLoaded', function () {

    const acceptButtons = document.querySelectorAll('.accept-button');

    acceptButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const isAuthenticated = checkAuth();

            if (isAuthenticated) {
                openAlert("comic-alert-logged");

            } else {
                openAlert('comic-alert-notlogged')
            }
        });
    });
});



function openAlert(id) {
    document.getElementById(id).style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closeAlert(id, redirect) {
    document.getElementById(id).style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    if (redirect) {
        redirectToLogin();
    }
}