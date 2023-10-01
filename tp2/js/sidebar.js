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

related.addEventListener('click',scrollLeft(150));
