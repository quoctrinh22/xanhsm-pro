document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarToggleIcon = document.getElementById('navbarToggleIcon');
    var navbarCollapse = document.getElementById('navbarNav');

    navbarToggler.addEventListener('click', function () {
        if (navbarToggleIcon.classList.contains('fa-bars')) {
            navbarToggleIcon.classList.remove('fa-bars');
            navbarToggleIcon.classList.add('fa-times');
            navbarCollapse.classList.add('show');
        } else {
            navbarToggleIcon.classList.remove('fa-times');
            navbarToggleIcon.classList.add('fa-bars');
            navbarCollapse.classList.remove('show');
        }
    });
});
