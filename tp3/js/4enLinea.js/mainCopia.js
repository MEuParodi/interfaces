const canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
const anchoCanvas = window.innerWidth;
const altoCanvas = window.innerHeight;

/**@type{CanvasRenderingContext2D}*/

//en el dom habra para elegir 4 tipos de tableros, con botones primera opcion, ver!
let _4EnLinea = document.getElementById('4-en-linea');
let _5EnLinea = document.getElementById('5-en-linea');
let _6EnLinea = document.getElementById('6-en-linea');
let _7EnLinea = document.getElementById('7-en-linea');

//escucho los eventos del mouse
canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);

//imagen fondo
const imgFondo = document.getElementById("fondo-tablero");
//pepsi
const imgChipPepsi = document.getElementById('ficha-pepsi');
//coca
const imgChipCoca = document.getElementById('ficha-coca');
//cuadrado del juego
const inicioGameX = 0;
const inicioGameY = 0;
const widthGame = anchoCanvas;
const heightGame = altoCanvas;

//dibujo el fondo del juego
let modes = {
    "beginner":{
        "line": 4,
        "col" : 7,
        "row" : 6,
        "chips": 21,
        "sizeChip": 32, 
        "width": 80,
        "height": 85
    },
    "normal": {
        "line": 5,
        "col": 8,
        "row": 7,
        "chips": 28,
        "sizeChip": 27,
        "width": 70,
        "height": 75
    },
    "hard": {
        "line": 6,
        "col": 9,
        "row": 8,
        "chips": 36,
        "sizeChip": 25,
        "width": 60,
        "height": 55
    },
    "pro": {
        "line": 7,
        "col": 10,
        "row": 9,
        "chips": 45,
        "sizeChip": 22,
        "width": 55,
        "height": 60
    }
}


//variables para crear board
let col = 7;
let rows =6;
let x = inicioGameX;
let y = inicioGameY;
let w = 80;
let h = 85;


//variables para saber si esta clickeada una Chip
let chips = [];
let lastClickedFigure = null;
let isMouseDown = false;

//creo board x defecto y lo dibujo
const board = new Board(col, rows, ctx, x, y, w, h);
drawGame(board);
//dibuja las chips
createChips(imgChipPepsi, 21, 70, 550, 32);
createChips(imgChipCoca, 21, 980, 550, 32);
seeChips();

//distintos tipos de tableros, redefino la cantidad de filas y columnas
_4EnLinea.addEventListener('click', ()=>{
    //drawGame();
    col = 7;
    rows =6;
    w = 80;
    h = 85;
    board.setCantCols(col);
    board.setCantRows(rows);
    board.setH(h);
    board.setW(w);
    drawGame(board);
    chips = [];
    createChips(imgChipPepsi, 21, 70, 550, 32);
    createChips(imgChipCoca, 21, 980, 550, 32);
    seeChips();
    _5EnLinea.disabled = true;
    _6EnLinea.disabled = true;
    _7EnLinea.disabled = true;
});

_5EnLinea.addEventListener('click', ()=>{
    col = 8;
    rows = 7;
    w = 70;
    h = 75;
    board.setCantCols(col);
    board.setCantRows(rows);
    board.setH(h);
    board.setW(w);
    chips = [];

    createChips(imgChipPepsi, 28, 80, 565, 27);
    createChips(imgChipCoca, 28, 990, 565, 27);
    drawGame(board);
    seeChips();
    _4EnLinea.disabled = true;
    _6EnLinea.disabled = true;
    _7EnLinea.disabled = true;
});

_6EnLinea.addEventListener('click', ()=>{
    col = 9;
    rows =8;
    w = 60;
    h = 65;
    board.setCantCols(col);
    board.setCantRows(rows);
    board.setH(h);
    board.setW(w);
    chips = [];
    createChips(imgChipPepsi, 36, 80, 565, 25);
    createChips(imgChipCoca, 36, 980, 565, 25);
    drawGame(board);
    seeChips();
    _4EnLinea.disabled = true;
    _5EnLinea.disabled = true;
    _7EnLinea.disabled = true;
});

_7EnLinea.addEventListener('click', ()=>{
    col = 10;
    rows =9;
    w = 55;
    h = 60;
    board.setCantCols(col);
    board.setCantRows(rows);
    board.setH(h);
    board.setW(w);
    chips = [];
    createChips(imgChipPepsi, 45, 80, 570, 22);
    createChips(imgChipCoca, 45, 980, 570, 22);
    drawGame(board);
    seeChips();
    _4EnLinea.disabled = true;
    _5EnLinea.disabled = true;
    _6EnLinea.disabled = true;
});

function calculateXeY(e){
    //se obtiene objeto DOMRect que luego puedes utilizar para calcular la posición del elemento
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width; // Factor de escala X
    const scaleY = canvas.height / rect.height; // Factor de escala Y
    const xActual = (e.clientX - rect.left) * scaleX; // Coordenada X relativa al canvas
    const yActual = (e.clientY - rect.top) * scaleY;
    return {
        xActual,
        yActual
    }
}

function onMouseDown(e){
    e.preventDefault();
    isMouseDown = true;
    let actualValues = calculateXeY(e);
    let xActual = actualValues.xActual;
    let yActual = actualValues.yActual;

    if(lastClickedFigure != null){
        lastClickedFigure.setResaltado(false);
        lastClickedFigure = null;
    }

    let clickFig = findClickedFigure(xActual, yActual);
    if(clickFig != null){
        clickFig.setResaltado(true);
        lastClickedFigure = clickFig;
    }
    seeChips();
}
function onMouseUp(e){
    isMouseDown = false;
    //recorre el arreglo de fichas buscansu pos inicial y setea la pos 
    // for (let i = 0; i < chips.length; i++) {
    //     const chip = chips[i];
    //     const posicionInicial = chip.getPositionInitial();
    //     chip.setPosition(posicionInicial.posX, posicionInicial.posY);
    // }

    lastClickedFigure.setPosition(lastClickedFigure.getPositionInitial().posX, lastClickedFigure.getPositionInitial().posY)
    seeChips();
}

function onMouseMove(e){
    let actualValues = calculateXeY(e);
    let xActual = actualValues.xActual;
    let yActual = actualValues.yActual;
    if(isMouseDown && lastClickedFigure != null){
        lastClickedFigure.setPosition(xActual, yActual);
        seeChips();
    }
}


function findClickedFigure(x, y){    
    for(let i =0; i < chips.length; i++){    
    const element = chips[i];
        if(element.isPointerInside(x, y)){
            return element;
        }
    }
}

  //dibuja el contenedor del board, con el board y las chips
function drawGame(board){   
    ctx.drawImage(imgFondo,inicioGameX, inicioGameY, widthGame, heightGame);   
    board.centerBoard(widthGame,heightGame);
    board.draw(); 
}


function createChips(img, cant, x, y, r) {
    let chip;
    let starY = y;
    let starX = x;
    let margin = r * 2 + 10;
    let finalY;
    let columns = 4; // Inicialmente, 4 columnas

    if (cant > 28) {
        columns = 5; // Más de 28 fichas, cambia a 5 columnas
    }
    
    // if (cant > 40) {
    //     columns = 6; // Más de 40 fichas, cambia a 6 columnas
    // }
    
    let chipsPerColumn = Math.floor(cant / columns);
    let remainder = cant % columns;
    
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < chipsPerColumn; j++) {
            chip = new Chip(x, y, r, ctx, img);
            chips.push(chip);
            y -= margin;
        }
        finalY = y;
        y = starY;
        x += margin;
    }
    
    for (let i = 0; i < remainder; i++) {
        chip = new Chip(starX, finalY, r, ctx, img);
        chips.push(chip);
        y -= margin;
    }
    
    console.log("chips:" + chips.length);
}


function seeChips(){ 
    clearCanvas();  
    for(let i = 0; i < chips.length; i ++){
        chips[i].drawChip();
    }
      
}
function clearCanvas(){
    drawGame(board);  
}
