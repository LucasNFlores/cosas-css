document.addEventListener('DOMContentLoaded', function () {
    const btns = document.querySelectorAll('.btn-menu');

    btns.forEach(btn => {
        btn.addEventListener('click', function (event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace
            btns.forEach(otherBtn => {
                otherBtn.classList.remove('activate');
            });
            btn.classList.add('activate');
        });
    });
});
