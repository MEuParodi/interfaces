// @type{CanvasRenderingContext2D}
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

const CANT_FIG = 700;

let figures = [];
let lastClickedFigure = null;
let isMouseDown = false;

function addFigure(){
    console.log("hola")
    addCircle();
    
    drawFigure();
}

function drawFigure(){
   
    for(let i = 0; i < figures.length; i++){
        figures[i].draw();
    }
    
}



function addCircle(){
    let posX = Math.round(Math.random() * canvasWidth);
    let posY = Math.round(Math.random() * canvasHeight);
    let color = '#000';

    let circle = new Circle(posX, posY, 2, color, ctx);
    figures.push(circle);
}


//#region util
function clearCanvas(){
    ctx.fillStyle = "#6f1f91";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

function randomRGBA(){
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let a = Math.round(Math.random() * 255);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}




function addFigures(){
    console.log("hola2")
    addFigure();
    if(figures.length < CANT_FIG){
        setTimeout(addFigures, 1);
    }
}

setTimeout(()=>{
    addFigures();
}, 1);

