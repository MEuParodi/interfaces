let btn = document.getElementById('btn-registro');
let bubbles = document.getElementById ("bubbles");
let message = document.getElementById('message');

btn.addEventListener('click', function(){
    bubbles.classList.remove('no-show');
    message.classList.remove('no-show');
    setTimeout(function() {
        window.location.href = './index.html';
}, 3000); 

});