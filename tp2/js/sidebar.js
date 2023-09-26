let menuSide = document.getElementById('menu-side');
let btnOpen = document.getElementById('btn-open');
let btnUser = document.getElementById('btn-user');
let menuUser = document.getElementById('menu-user');
let btnBuy = document.getElementById('btn-buy');
let cart = document.getElementById('cart');

btnBuy.addEventListener('click', function() {
    cart.classList.toggle('open');
});

btnUser.addEventListener('click', function() {
    //menuSide.classList.toggle('menu-side-hidden');
    menuUser.classList.toggle('open');
});

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