let general = document.getElementById('general');
let categ = document.getElementById('categorias');
let seguinos = document.getElementById('seguinos');
let drop1 = document.getElementById('drop-1');
let drop2 = document.getElementById('drop-2');
let drop3 = document.getElementById('drop-3');

general.addEventListener('click', function() {
    if (drop1.classList.contains('show')) {
        drop1.classList.remove('show');
        drop1.classList.add('no-show');

    } else {
        // Si no está presente, agrega la clase "show" para mostrar el contenido
        drop1.classList.add('show');
        drop1.classList.remove('no-show');
    }
});

categ.addEventListener('click', function() {
    if (drop2.classList.contains('show')) {
        drop2.classList.remove('show');
        drop2.classList.add('no-show');

    } else {
        // Si no está presente, agrega la clase "show" para mostrar el contenido
        drop2.classList.add('show');
        drop2.classList.remove('no-show');        
    }
});

seguinos.addEventListener('click', function() {
    if (drop3.classList.contains('show')) {
        drop3.classList.remove('show');
        drop3.classList.add('no-show');

    } else {
        // Si no está presente, agrega la clase "show" para mostrar el contenido
        drop3.classList.add('show');
        drop3.classList.remove('no-show');
    }
});
