window.onscroll = function(){cardsFaceIn()};


const cardOne = document.querySelector(".card1");
const cardTwo = document.querySelector(".card2");
const cardThree = document.querySelector(".card3");


let distanciaCardOne;
//let scroll = window.scrollY;
function cardsFaceIn(){
    distanciaCardOne = window.innerHeight - cardOne.getBoundingClientRect().top;

    if(distanciaCardOne >= 180){
       // console.log("hola",distanciaCardOne);
        // cards.forEach(elem =>{
        //     elem.classList.add("efecto-card");
        // })
        cardOne.classList.add("efecto-card1");
        cardTwo.classList.add("efecto-card2");
        cardThree.classList.add("efecto-card3");


    } else{
        cardOne.classList.remove("efecto-card1");
        cardTwo.classList.remove("efecto-card2");
        cardThree.classList.remove("efecto-card3");
        cardOne.classList.add("efecto-card1-remove");
        cardTwo.classList.add("efecto-card2-remove");
        cardThree.classList.add("efecto-card3-remove");

        // cards.forEach(elem =>{
        //     elem.classList.remove("efecto-card");
        // })
       // cardOne.classList.remove("efecto-card1");
    }
}
