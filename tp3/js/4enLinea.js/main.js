const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
/**@type{CanvasRenderingContext2D}*/

//en el dom habra para elegir 4 tipos de tableros, con botones pri,era opcion, ver!
let _4EnLinea = document.getElementById('4-en-linea');
let _5EnLinea = document.getElementById('5-en-linea');
let _6EnLinea = document.getElementById('6-en-linea');
let _7EnLinea = document.getElementById('7-en-linea');

//cuadrado del juego
let inicioGameX = 0;
let inicioGameY = 0;
let widthGame = 650;
let heightGame = 530;

drawGame();
//variables para crear tablero
let col = 7;
let rows =6;
let x;
let y;
let w = 55;
let h = 55;
let widthCorner = 80;

//creo tablero x defecto y lo dibujo
let tablero = new Tablero(col, rows, ctx, x, y, w, h, widthCorner);
tablero.centerBoard(widthGame,heightGame);
tablero.draw();

//distintos tipos de tableros, redefino la cantidad de filas y columnas
_4EnLinea.addEventListener('click', ()=>{
    drawGame();
    col = 7;
    rows =6;
    let tablero = new Tablero(col, rows, ctx, x, y, w, h, widthCorner);
    tablero.centerBoard(widthGame,heightGame);
    tablero.draw();
});

_5EnLinea.addEventListener('click', ()=>{
    drawGame();
    col = 8;
    rows =7;
    let tablero = new Tablero(col, rows, ctx, x, y, w, h, widthCorner);
    tablero.centerBoard(widthGame,heightGame);
    tablero.draw();
});

_6EnLinea.addEventListener('click', ()=>{
    drawGame();
    col = 9;
    rows =8;
    let tablero = new Tablero(col, rows, ctx, x, y, w, h, widthCorner);
    tablero.centerBoard(widthGame,heightGame);
    tablero.draw();
});

_7EnLinea.addEventListener('click', ()=>{
    drawGame();
    col = 10;
    rows =9;
    let tablero = new Tablero(col, rows, ctx, x, y, w, h, widthCorner);
    tablero.centerBoard(widthGame,heightGame);
    tablero.draw();
});

//dibuja el contenedor del tablero
function drawGame(){
    const grd = ctx.createLinearGradient(0, 0, 400, 0);
    grd.addColorStop(0, "#f6fdea");
    // grd.addColorStop(0.5, "#");
    grd.addColorStop(1, "#a7ef2b");
    ctx.rect(inicioGameX, inicioGameY, widthGame, heightGame);
    //ctx.lineWidth =1;
    ctx.fillStyle = grd;
    ctx.fill();
    //ctx.stroke();//fin
}








