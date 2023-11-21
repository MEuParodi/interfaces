let card1 = document.getElementById('section-4-card1');
let card2 = document.getElementById('section-4-card2');
let card3 = document.getElementById('section-4-card3');

let section4 = document.getElementById('section4');

window.addEventListener('scroll', function(e){
    let rect = section4.getBoundingClientRect();
    if (rect.top+100 <= window.innerHeight && rect.bottom-400 >= 0) {
        // Obtener el valor de desplazamiento vertical (scroll)
        let scroll = window.scrollY;
        card1.style.transform = 'translate(0, calc(-50% + ' + scroll / 12 + 'px))';
        card2.style.transform = 'translate(0, calc(-50% + ' + scroll / 12 + 'px))';
        card3.style.transform = 'translate(0, calc(-50% + ' + scroll / 12 + 'px))';
 }
});


