let menuSide = document.getElementById('menu-side');
let btnOpen = document.getElementById('btn-open');
let btnUser = document.getElementById('btn-user');
let menuUser = document.getElementById('menu-user');
let btnBuy = document.getElementById('btn-buy');
let cart = document.getElementById('cart');
let carrousel = document.getElementById('carrousel-cards');
let related = document.getElementById('related-games');
// let prev = document.getElementById('prev');
// let next = document.getElementById('next');
let prev = document.querySelectorAll('img.prev');
let next = document.querySelectorAll('img.next');
let carrousels = document.querySelectorAll('carrousel-cards');
let general = document.getElementById('general');
let categ = document.getElementById('categorias');
let seguinos = document.getElementById('seguinos');
let drop1 = document.getElementById('drop-1');
let drop2 = document.getElementById('drop-2');
let drop3 = document.getElementById('drop-3');

function scrollCarousel(cant){
    //para scrollear el carrusel
    prev.forEach(e => {
        e.addEventListener('click', function() {
            e.nextElementSibling.scrollLeft -= cant
        });
    });

    next.forEach(e => {
        e.addEventListener('click', function() {
            e.previousElementSibling.scrollLeft += cant
        });
    });
}

if(window.innerWidth < 400){
    scrollCarousel(200);
} else {
    scrollCarousel(350);
}


//desplegar el carrito
btnBuy.addEventListener('click', function() {
    cart.classList.toggle('open');
});



//desplegar el menu de usuario
btnUser.addEventListener('click', function() {
    //menuSide.classList.toggle('menu-side-hidden');
    menuUser.classList.toggle('open');
});


//desplegar menu categorias
//agrandar el ancho menu categorias
btnOpen.addEventListener('click', function() {
    menuSide.classList.toggle('open');
    menuSide.classList.toggle('menu-side-move');

});

//en mobile no se ve menu categorias
if(window.innerWidth < 400) {
    menuSide.classList.toggle('close');
}

window.addEventListener('resize', function() {
    if(window.innerWidth < 400) {
        
        menuSide.classList.toggle('close');
    } else {
        menuSide.classList.remove('close');
    }
});


//desplegar opciones footer
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
related.addEventListener('click',scrollLeft(150));