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


    const allButton = document.querySelector('.all-button');
    const highButton = document.querySelector('.high-button');
    const mediumButton = document.querySelector('.medium-button');
    const lowButton = document.querySelector('.low-button');



    allButton.addEventListener('click', () => filterPosts('post'));
    highButton.addEventListener('click', () => filterPosts('high'));
    mediumButton.addEventListener('click', () => filterPosts('medium'));
    lowButton.addEventListener('click', () => filterPosts('low'));
});

function filterPosts(filter) {
    const posts = document.querySelectorAll('.post');
    console.log(filter);
    posts.forEach(post => {
        if (filter === 'all' || post.classList.contains(filter)) {
            post.style.display = 'inline-block';
        } else {
            post.style.display = 'none';
        }
    });
}






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