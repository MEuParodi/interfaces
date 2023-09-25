let menuSide = document.getElementById('menu-side');
let btnOpen = document.getElementById('btn-open');

btnOpen.addEventListener('click', function() {
    menuSide.classList.toggle('menu-side-hidden');
    menuSide.classList.toggle('menu-side-move');

});

if(window.innerWidth < 400) {
    menuSide.classList.toggle('menu-side-hidden');
}

window.addEventListener('resize', function() {
    if(window.innerWidth < 400) {
        menuSide.classList.toggle('menu-side-hidden');
    } else {
        menuSide.classList.remove('menu-side-hidden');
    }
});