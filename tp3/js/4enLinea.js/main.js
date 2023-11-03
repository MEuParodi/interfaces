const canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
const anchoCanvas = window.innerWidth;
const altoCanvas = window.innerHeight;

/**@type{CanvasRenderingContext2D}*/

//en el dom habra para elegir 4 tipos de tableros, con botones pri,era opcion, ver!
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

//variables para crear board
let col = 7;
let rows =6;
let x;
let y;
let w = 90;
let h = 90;


//variables para saber si esta clickeada una Chip
let chips = [];
let lastClickedFigure = null;
let isMouseDown = false;

//creo board x defecto y lo dibujo
const board = new Board(col, rows, ctx, x, y, w, h);
drawGame(board);
//dibuja las chips
createChips(imgChipPepsi, 21, 100, 100, 35);
createChips(imgChipCoca, 21, 1000, 100, 35);


//distintos tipos de tableros, redefino la cantidad de filas y columnas
_4EnLinea.addEventListener('click', ()=>{
    //drawGame();
    col = 7;
    rows =6;
    w = 90;
    h = 90;
    let board = new Board(col, rows, ctx, x, y, w, h);
    drawGame(board);
    chips = [];
    createChips(imgChipPepsi, 21, 40, 250, 35);
    createChips(imgChipCoca, 21, 900, 250, 35);

    _5EnLinea.disabled = true;
    _6EnLinea.disabled = true;
    _7EnLinea.disabled = true;
});

_5EnLinea.addEventListener('click', ()=>{
    col = 8;
    rows =7;
    w = 60;
    h = 60;
    let board = new Board(col, rows, ctx, x, y, w, h);
    drawGame(board);
    chips = [];
    createChips(imgChipPepsi, 28, 40, 250, 20);
    createChips(imgChipCoca, 28, 900, 250, 20);
    _4EnLinea.disabled = true;
    _6EnLinea.disabled = true;
    _7EnLinea.disabled = true;
});

_6EnLinea.addEventListener('click', ()=>{
    col = 9;
    rows =8;
    w = 55;
    h = 55;
    let board = new Board(col, rows, ctx, x, y, w, h);
    drawGame(board);
    _4EnLinea.disabled = true;
    _5EnLinea.disabled = true;
    _7EnLinea.disabled = true;
});

_7EnLinea.addEventListener('click', ()=>{
    col = 10;
    rows =9;
    w = 50;
    h = 50;
    let board = new Board(col, rows, ctx, x, y, w, h);
    drawGame(board);
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
    
    // ctx.beginPath();
    // ctx.arc(xActual, yActual, 4, 0, 2 * Math.PI);
    // ctx.stroke();
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
    //  console.log("buscar"+chips[i].getPosition());
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

 
function createChips(img, cant, x, y, r){
    let chip; 
    let star = y;
    let margin = r*2 + 10;
    for(let i = 0; i < cant/3; i++){
        chip = new Chip(x, y, r, ctx, img );
        chips.push(chip);
        y+=margin;
    }
    y = star;
    x+=margin;
    for(let i = 0; i < cant/3; i++){
        chip = new Chip(x, y, r, ctx, img );
        chips.push(chip);
        y+=margin;
    }
    y = star;
    x+=margin;
    for(let i = 0; i < cant/3; i++){
        chip = new Chip(x, y, r, ctx, img );
        chips.push(chip);
        y+=margin;
    }
    seeChips();
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








