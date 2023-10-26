
let offerArrowPrev = document.querySelector('.offer-arrow-prev');
let offerArrowNext = document.querySelector('.offer-arrow-next');
let carrouselOffers = document.getElementById('container-cards-offers');

function carrouselCardsOffers(cant){
    offerArrowNext.addEventListener('click', function() {
        carrouselOffers.scrollLeft += cant;
    });

    offerArrowPrev.addEventListener('click', function() {
        carrouselOffers.scrollLeft -= cant;
    });
}

if(window.innerWidth < 400){
    carrouselCardsOffers(310)

} else {
    carrouselCardsOffers(450)
}

