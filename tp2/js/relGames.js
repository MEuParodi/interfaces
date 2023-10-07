let related = document.getElementById('related-games');
let prev = document.querySelectorAll('img.prev');
let next = document.querySelectorAll('img.next');
let shareIcon = document.getElementById('shareIcon');
let controls = document.getElementById('play-controls');
let shareSection = document.querySelector('.share');
let arrowClose = document.querySelectorAll('.arrow-close');
let instructionControls = document.querySelector('.instruction-controls');

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


function closePopUp(section){
    section.classList.toggle('open');
}

arrowClose.forEach(elem => {
    elem.addEventListener('click', (e) => {
        e.preventDefault();
        if(elem.offsetParent == shareSection){
            closePopUp(shareSection);
        }
        if(elem.offsetParent == instructionControls){
            closePopUp(instructionControls);
        }
        
    })
});

shareIcon.addEventListener('click', (e) => {
    e.preventDefault();
    closePopUp(shareSection)
});

controls.addEventListener('click', (e) => {
    e.preventDefault();
    closePopUp(instructionControls)
});


related.addEventListener('click', () => {scrollLeft(150)});