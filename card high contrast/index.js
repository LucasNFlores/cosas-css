const mostrarColmenas = (boton) => {
    // Obtiene la sección a la que pertenece el botón.
    const seccion = boton.closest('.card');
    console.log('llegue a la funcion')

    // Obtiene el valor del parámetro apiary de la sección.
    const apiary = seccion.getAttribute('apiary');

    // Obtiene todos los div con clase hive que tengan el mismo valor de apiary.
    const colmenas = document.querySelectorAll('.hive[apiary="' + apiary + '"]');

    console.log(colmenas)
    // Muestra las colmenas.
    colmenas.forEach(colmena => colmena.classList.add('visible'));
};

// Obtiene todos los botones con clase btn-mostrar.
const botonesMostrar = document.getElementsByClassName('btn-mostrar');
Array.from(botonesMostrar).forEach(boton => boton.addEventListener('click', () => mostrarColmenas(boton)));
