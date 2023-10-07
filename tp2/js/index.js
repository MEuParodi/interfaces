document.addEventListener('DOMContentLoaded', function() {

    let menuSide = document.getElementById('menu-side');
    let btnOpen = document.getElementById('btn-open');
    let btnUser = document.getElementById('btn-user');
    let menuUser = document.getElementById('menu-user');
    let btnBuy = document.getElementById('btn-buy');
    let cart = document.getElementById('cart');
    let prev = document.querySelectorAll('img.prev');
    let next = document.querySelectorAll('img.next');
    let offerArrowPrev = document.getElementById('arrow-prev');
    let offerArrowNext = document.getElementById('arrow-next');
    let carrouselOffers = document.getElementById('container-cards-offers');


    function scrollCarousel(cant){
        //para scrollear el carrusel
        prev.forEach(e => {
            e.addEventListener('click', function() {
                e.nextElementSibling.scrollLeft -= cant
                e.nextElementSibling.classList.add('efect-scroll');
                setTimeout(function (){
                    e.nextElementSibling.classList.remove('efect-scroll');
                }, 1500);

            });
        });

        next.forEach(e => {
            e.addEventListener('click', function() {
                e.previousElementSibling.scrollLeft += cant
                e.previousElementSibling.classList.add('efect-scroll');
                console.log(e.previousElementSibling);
                setTimeout(function (){   
                    e.previousElementSibling.classList.remove('efect-scroll');
                }, 1500);
            });
        });
    }

    function carrouselCardsOffers(cant){
        offerArrowNext.addEventListener('click', function() {
            carrouselOffers.scrollLeft += cant;
        });

        offerArrowPrev.addEventListener('click', function() {
            carrouselOffers.scrollLeft -= cant;
        });
    }
    

    if(window.innerWidth < 400){
        scrollCarousel(200);
        carrouselCardsOffers(310)

    } else {
        scrollCarousel(350);
        carrouselCardsOffers(450)
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
    } else{
        menuSide.classList.remove('close');
    }

});