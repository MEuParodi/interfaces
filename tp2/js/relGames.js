let related = document.getElementById('related-games');
let prev = document.querySelectorAll('img.prev');
let next = document.querySelectorAll('img.next');

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


related.addEventListener('click',scrollLeft(150));