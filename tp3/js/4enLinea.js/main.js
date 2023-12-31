
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
    imgFondo : document.getElementById("fondo-tablero2"),
    imgTablero: document.getElementById('img-fija'),
    imgArrow : document.getElementById('img-arrow')
}
//elegir ficha
let imgCoca =  null;
let imgPepsi = null;
let optionsCoca = document.querySelectorAll(".chip-coca");
let optionsPepsi = document.querySelectorAll(".chip-pepsi"); 
//elegir ficha de coca
optionsCoca.forEach(elem => {
    elem.addEventListener('click', function() {
        imgCoca = elem.nextElementSibling;
    })
});
//elegir ficha de pepsi
optionsPepsi.forEach(elem => {
    elem.addEventListener('click', function() {
        imgPepsi = elem.nextElementSibling;
    })
});

//dibujar fondo antes de jugar
ctx.drawImage(document.getElementById("fondo-tablero"), 0,0, canvas.width, canvas.height);

//div para mensajes
let divMsg = {
    spanPlayer : document.querySelector(".player-turn"),
    spanWin : document.getElementById("span-win"),
    imgWin : document.getElementById("img-win"),
    msgWin : document.getElementById("game-msg-win"),
    divMsgPlayer : document.getElementById("game-msj"),
    divMsgReload : document.getElementById("game-msg-reload"),
    divTimer : document.getElementById("game-timer"),
    divTie : document.getElementById("game-msg-tie"),
    msgTie : document.getElementById("msg-tie")
}

let btns ={
    btnReplay : document.getElementById("btn-replay"),
    btnReload : document.getElementById("btn-reload"),
    btnReloadYes: document.getElementById("btn-reload-yes"),
    btnReloadNo: document.getElementById("btn-reload-no"),
    btnTie : document.getElementById("btn-tie")
}

//distintos modos cada uno con su configuracion necesaria
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
let msgPlayer = document.getElementById("game-msj");
let play = document.getElementById("btn-play");

//cuando clickea play
play.addEventListener('click', ()=>{
    checkSelectedOptions();
    popUp.classList.add('close');
    btns.btnReload.classList.remove('close');
    divMsg.divTimer.classList.remove('close');
    msgPlayer.classList.remove('close');
    msgPlayer.classList.add('open');
    
    const game = new Game(canvas, chosenMode, ctx, chipImages, divMsg, imgCoca, imgPepsi, btns);
    game.init();
})



//chequeos del form de inicio
const checkSelectedOptions = (e) =>{
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

//mensajes de error del form
function showMsg(text){
    let msg = document.getElementById("msg-options");
    msg.innerHTML = text;
    
    setTimeout(function() {
        msg.innerHTML = "";
    }, 1000);
}






