
const canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");


/**@type{CanvasRenderingContext2D}*/

//elegir 4 tipos de tableros
let _4EnLinea = document.getElementById('4-en-linea');
let _5EnLinea = document.getElementById('5-en-linea');
let _6EnLinea = document.getElementById('6-en-linea');
let _7EnLinea = document.getElementById('7-en-linea');

//carga imagenes
let chipImages = {
    imgFondo : document.getElementById("fondo-tablero"),
    imgPepsi : document.getElementById('ficha-pepsi'),
    imgCoca : document.getElementById('ficha-coca'),
    imgTablero: document.getElementById('img-fija')
}

//elegir ficha
let coca1 = document.getElementById("ficha-coca-1");
let coca2 = document.getElementById("ficha-coca-2");
let coca3 = document.getElementById("ficha-coca-3");
let pepsi1 = document.getElementById("ficha-pepsi-1");
let pepsi2 = document.getElementById("ficha-pepsi-2");
let pepsi3 = document.getElementById("ficha-pepsi-3");




ctx.drawImage(chipImages.imgFondo, 0,0, canvas.width, canvas.height);
//div para mensajes
let divMsg = {
    spanPlayer : document.querySelector(".player-turn")
}

let modes = {
    "beginner":{
        "line": 4,
        "col" : 7,
        "row" : 6,
        "cantChips": 21,
        "sizeChip": 25, 
        "width": 65,
        "height": 70,
        "marginBottom": 85
    },
    "normal": {
        "line": 5,
        "col": 8,
        "row": 7,
        "cantChips": 28,
        "sizeChip": 24,
        "width": 60,
        "height": 65,
        "marginBottom": 70
    },
    "hard": {
        "line": 6,
        "col": 9,
        "row": 8,
        "cantChips": 36,
        "sizeChip": 22,
        "width": 55,
        "height": 60,
        "marginBottom": 55
    },
    "pro": {
        "line": 7,
        "col": 10,
        "row": 9,
        "cantChips": 45,
        "sizeChip": 20,
        "width": 50,
        "height": 55,
        "marginBottom": 50
    }
}

let chosenMode;
_4EnLinea.addEventListener('click', ()=>{
    chosenMode = modes.beginner;
});

_5EnLinea.addEventListener('click', ()=>{
    chosenMode = modes.normal;
});

_6EnLinea.addEventListener('click', ()=>{
    chosenMode = modes.hard;
});

_7EnLinea.addEventListener('click', ()=>{
    chosenMode = modes.pro;
});

let popUp = document.getElementById("game-msg2");
let play = document.getElementById("btn-play");

//cuando clickea play
play.addEventListener('click', ()=>{
    checkSelectedOptions();
    popUp.classList.add('close');
    //choiceChip();
    const game = new Game(canvas, chosenMode, ctx, chipImages, divMsg);
    game.init();
})
// document.addEventListener("DOMContentLoaded", function () {

//     function choiceChip (){   
//     const playerOneForm = document.getElementById("form-coca");
//     const playerTwoForm = document.querySelector("form-pepsi");
//     let selectedImage;
//     let selectedImage2;
//     console.log("hola choice option", playerOneForm, playerTwoForm);
//     // Evento 'change' en el formulario del jugador 1, sucede cuando se elige una opcion
//     playerOneForm.addEventListener("change", (e) => {
//         const selectedOption = document.querySelector('#form-coca input[name="opcion-ficha');
//         console.log("Jugador 1 seleccionó: ", selectedOption);
        
//         if (selectedOption) {
//             const selectedValue = selectedOption.value;
//             selectedImage = document.querySelector(`#ficha-${selectedValue}`);
//            console.log("Jugador 1 seleccionó: " + selectedValue);
//             if (selectedImage) {
//                 // Aquí puedes hacer algo con la imagen seleccionada, por ejemplo, mostrarla o almacenarla en una variable.
                
//             }
//         }
//     });

//     //Evento 'change' en el formulario del jugador 2
//     playerTwoForm.addEventListener("change", (e) => {
//         const selectedOption = document.querySelector('#form-pepsi input[name="opcion-ficha');
//         if (selectedOption) {
//             const selectedValue = selectedOption.value;
//             selectedImage2 = document.querySelector(`#ficha-${selectedValue}`);
//             if (selectedImage2) {
//                 // Aquí puedes hacer algo con la imagen seleccionada, por ejemplo, mostrarla o almacenarla en una variable.
//                 console.log("Jugador 2 seleccionó: " + selectedValue);
//             }
//         }
//     });
// }
// });

//verifica que se elijan todas las opciones antes de jugar
const checkSelectedOptions = () =>{
    const boardSelected = document.querySelector('input[name="opcion"]:checked');
    const chipPlayer1Selected = document.querySelector('input[name="opcion-ficha"]:checked');
    const chipPlayer2Selected = document.querySelector('input[name="opcion-ficha2"]:checked');

    // Verificar si se seleccionaron opciones en forms
   if (!boardSelected) {
        showMsg("Elige un tipo de tablero!")
        e.preventDefault(); 
    } else if (!chipPlayer1Selected) {
        showMsg("Elige una ficha para el Jugador 1!")
        e.preventDefault(); 
    } else if (!chipPlayer2Selected) {
        showMsg("Elige una ficha para el Jugador 2!")
        e.preventDefault(); 
    }
}

function showMsg(text){
    let msg = document.getElementById("msg-options");
    msg.innerHTML = text;
    
    setTimeout(function() {
        msg.innerHTML = "";
    }, 1000);
}








