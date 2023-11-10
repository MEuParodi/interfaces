let spiderWhite = document.getElementById('spider-white');
let spiderRed = document.getElementById('spider-red');
let spiderBlack = document.getElementById('spider-black');

let popupStacy = document.getElementById("popupStacy");
let popupPeter = document.getElementById("popupPeter");
let popupMorales = document.getElementById("popupMorales");

let closePopup1 = document.getElementById("close1");
let closePopup2 = document.getElementById("close2");
let closePopup3 = document.getElementById("close3");

spiderWhite.addEventListener('click', function(){
   popupStacy.classList.add('show');
});

spiderRed.addEventListener('click', function(){
    popupPeter.classList.add('show');
});

spiderBlack.addEventListener('click', function(){
    popupMorales.classList.add('show');
});
 

closePopup1.addEventListener('click', function(){
    popupStacy.classList.remove('show');
});

closePopup2.addEventListener('click', function(){
    popupPeter.classList.remove('show');
});

closePopup3.addEventListener('click', function(){
    popupMorales.classList.remove('show');
        
});