
const canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");


/**@type{CanvasRenderingContext2D}*/

//en el dom habra para elegir 4 tipos de tableros, con botones primera opcion, ver!
let _4EnLinea = document.getElementById('4-en-linea');
let _5EnLinea = document.getElementById('5-en-linea');
let _6EnLinea = document.getElementById('6-en-linea');
let _7EnLinea = document.getElementById('7-en-linea');

//carga imagenes necesarias
let chipImages = {
    imgFondo : document.getElementById("fondo-tablero"),
//pepsi
    imgPepsi : document.getElementById('ficha-pepsi'),
//coca
    imgCoca : document.getElementById('ficha-coca'),

    imgTablero: document.getElementById('img-fija')
}

let modes = {
    "beginner":{
        "line": 4,
        "col" : 7,
        "row" : 6,
        "cantChips": 21,
        "sizeChip": 32, 
        "width": 80,
        "height": 85
    },
    "normal": {
        "line": 5,
        "col": 8,
        "row": 7,
        "cantChips": 28,
        "sizeChip": 27,
        "width": 70,
        "height": 75
    },
    "hard": {
        "line": 6,
        "col": 9,
        "row": 8,
        "cantChips": 36,
        "sizeChip": 25,
        "width": 60,
        "height": 65
    },
    "pro": {
        "line": 7,
        "col": 10,
        "row": 9,
        "cantChips": 45,
        "sizeChip": 22,
        "width": 55,
        "height": 60
    }
}
//elegir modo x defecto es 4 en linea
let chosenMode = modes.beginner;
const game = new Game(canvas, chosenMode, ctx, chipImages);

_4EnLinea.addEventListener('click', ()=>{
    chosenMode = modes.beginner;
    _5EnLinea.disabled = true;
    _6EnLinea.disabled = true;
    _7EnLinea.disabled = true;
});

_5EnLinea.addEventListener('click', ()=>{
    console.log('hola 5 en linea')
    chosenMode = modes.normal;
    const game = new Game(canvas, chosenMode, ctx, chipImages);
    game.init();
    _4EnLinea.disabled = true;
    _6EnLinea.disabled = true;
    _7EnLinea.disabled = true;
});

_6EnLinea.addEventListener('click', ()=>{
    chosenMode = modes.hard;
    const game = new Game(canvas, chosenMode, ctx, chipImages);
    game.init();
    _4EnLinea.disabled = true;
    _5EnLinea.disabled = true;
    _7EnLinea.disabled = true;
});

_7EnLinea.addEventListener('click', ()=>{
    chosenMode = modes.pro;
    const game = new Game(canvas, chosenMode, ctx, chipImages);
    game.init();
    _4EnLinea.disabled = true;
    _5EnLinea.disabled = true;
    _6EnLinea.disabled = true;
});

game.init();






