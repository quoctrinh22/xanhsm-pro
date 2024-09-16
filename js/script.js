document.addEventListener('DOMContentLoaded', function () {
    var navbarTogglers = document.querySelectorAll('.navbar-toggler');

    navbarTogglers.forEach(function(navbarToggler) {
        var navbarToggleIcon = navbarToggler.querySelector('.fa-solid');
        var navbarCollapse = navbarToggler.nextElementSibling;

        // Thêm sự kiện click cho navbarToggler
        navbarToggler.addEventListener('click', function () {
            // Kiểm tra nếu navbarToggleIcon chứa class 'fa-bars'
            if (navbarToggleIcon.classList.contains('fa-bars')) {
                // Xóa class 'fa-bars' và thêm class 'fa-times'
                navbarToggleIcon.classList.remove('fa-bars');
                navbarToggleIcon.classList.add('fa-times');
                // Thêm class 'show' cho navbarCollapse
                navbarCollapse.classList.add('show');
            } else {
                // Nếu không, xóa class 'fa-times' và thêm class 'fa-bars'
                navbarToggleIcon.classList.remove('fa-times');
                navbarToggleIcon.classList.add('fa-bars');
                // Xóa class 'show' khỏi navbarCollapse
                navbarCollapse.classList.remove('show');
            }
        });
    });
});
