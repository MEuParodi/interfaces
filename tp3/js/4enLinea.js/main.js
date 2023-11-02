
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
/**@type{CanvasRenderingContext2D}*/

//en el dom habra para elegir 4 tipos de tableros, con botones pri,era opcion, ver!
let _4EnLinea = document.getElementById('4-en-linea');
let _5EnLinea = document.getElementById('5-en-linea');
let _6EnLinea = document.getElementById('6-en-linea');
let _7EnLinea = document.getElementById('7-en-linea');

//escucho los eventos del mouse
canvas.addEventListener('mousedown', onMouseDown, false);
//canvas.addEventListener('mouseup', onMouseUp, false);
//canvas.addEventListener('mousemove', onMouseMove, false);


let imgFondo = document.getElementById("fondo-tablero");

//cuadrado del juego
let inicioGameX = 0;
let inicioGameY = 0;
let widthGame = 1080;
let heightGame = 530;

//dibujo el fondo del juego

//variables para crear tablero
let col = 7;
let rows =6;
let x;
let y;
let w = 65;
let h = 65;


//variables para saber si esta clickeada una ficha
let fichas = [];
let lastClickedFigure = null;
let isMouseDown = false;

//creo tablero x defecto y lo dibujo
let tablero = new Tablero(col, rows, ctx, x, y, w, h);
drawGame(tablero);



function verFicha(){ 
  //  clearCanvas();    
    for(let i = 0; i < fichas.length; i ++){
        console.log(fichas[i]);
        fichas[i].drawFicha();
    }
}
function findClickedFigure(x, y){
   
    for(let i =0; i < fichas.length; i++){
      //  console.log("buscar"+fichas[i].getPosition());
        const element = fichas[i];
        if(element.isPointerInside(x, y)){
            return element;
        }
    }
}

function clearCanvas(){
    drawGame(tablero);

}
//dibuja las fichas
function crearFichas(img, cant, x, y, r){
    let ficha; 
    let inicio = x;
    for(let i = 0; i < cant/2; i++){

        ficha = new Ficha(x, y, r, ctx, img );
        fichas.push(ficha);
       // y-=10;
        x+=60
    }
    y-=60;
    x = inicio;
    for(let i = 0; i < cant/2; i++){
        ficha = new Ficha(x, y, r, ctx, img );
        fichas.push(ficha);
        x+=60;
        
    }

    verFicha();

}

//distintos tipos de tableros, redefino la cantidad de filas y columnas
_4EnLinea.addEventListener('click', ()=>{
    //drawGame();
    col = 7;
    rows =6;
    w = 65;
    h = 65;
    let tablero = new Tablero(col, rows, ctx, x, y, w, h);
    drawGame(tablero);
    //tablero.centerBoard(widthGame,heightGame);
    //tablero.draw();
    _5EnLinea.disabled = true;
    _6EnLinea.disabled = true;
    _7EnLinea.disabled = true;
});

_5EnLinea.addEventListener('click', ()=>{
    col = 8;
    rows =7;
    w = 60;
    h = 60;
    let tablero = new Tablero(col, rows, ctx, x, y, w, h);
    drawGame(tablero);
    // tablero.centerBoard(widthGame,heightGame);
    // tablero.draw();
    _4EnLinea.disabled = true;
    _6EnLinea.disabled = true;
    _7EnLinea.disabled = true;
});

_6EnLinea.addEventListener('click', ()=>{
    col = 9;
    rows =8;
    w = 55;
    h = 55;
    let tablero = new Tablero(col, rows, ctx, x, y, w, h);
    drawGame(tablero);
    _4EnLinea.disabled = true;
    _5EnLinea.disabled = true;
    _7EnLinea.disabled = true;
});

_7EnLinea.addEventListener('click', ()=>{
    col = 10;
    rows =9;
    w = 50;
    h = 50;
    let tablero = new Tablero(col, rows, ctx, x, y, w, h);
    drawGame(tablero);
    _4EnLinea.disabled = true;
    _5EnLinea.disabled = true;
    _6EnLinea.disabled = true;
});

//dibuja el contenedor del tablero, con el tablero y las fichas
function drawGame(tablero){
    //pepsi
    let imgFichaPepsi = document.getElementById('ficha-pepsi');
    //coca
    let imgFichaCoca = document.getElementById('ficha-coca');
    
    ctx.drawImage(imgFondo,inicioGameX, inicioGameY, widthGame, heightGame);
    crearFichas(imgFichaPepsi, 10, 40, 350, 25);
    crearFichas(imgFichaCoca, 10, 800, 350, 25);
    tablero.centerBoard(widthGame,heightGame);
    tablero.draw();
    
}

function onMouseDown(e){
    isMouseDown = true;
    console.log(e);
    const rect = canvas.getBoundingClientRect(); // Obtener el rectángulo del canvas
    const x = parseInt(e.clientX) - rect.left; // Coordenada X relativa al canvas
    const y = parseInt(e.clientY) - rect.top;
    
    // ctx.beginPath();
    // ctx.arc(x, y, 4, 0, 2 * Math.PI);
    // ctx.fillStyle = "red";
    // ctx.stroke();
    if(lastClickedFigure != null){
        lastClickedFigure.setResaltado(false);
        lastClickedFigure = null;
    }

    let clickFig = findClickedFigure(x, y);
    if(clickFig != null){
        clickFig.setResaltado(true);
        lastClickedFigure = clickFig;
    }
    verFicha();
}









