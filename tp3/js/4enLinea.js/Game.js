class Game {
    constructor(canvas, modes, ctx, chipImages, divMsg) {
        this.modes = modes;
        this.inicioGameX = 0;
        this.inicioGameY = 0;
        this.board = new Board(modes.col, modes.row, ctx, this.inicioGameX, this.inicioGameY, modes.width, modes.height, chipImages.imgTablero, modes.marginBottom);
       // this.players = ['Pepsi', 'Coca']; // Nombres de los jugadores
        this.currentPlayer = 'Pepsi'; // jugador actual
        this.chips = []; // Array para almacenar las fichas en el tablero
        this.lastClickedChip = null;
        let isMouseDown = false;
        this.isGameOver = false;
        this.canvas = canvas;
        this.ctx = ctx;
        this.chipImages = chipImages;
        this.divMsg = divMsg;
        this.anchoCanvas = this.canvas.width;
        this.altoCanvas = this.canvas.height;

        this.gameState = []; // Matriz con estado del juego
        this.initializeGameState(modes.col, modes.row);
    }

    init() {
        this.canvas.addEventListener('mousedown', (e) => this.onMouseDown(e), false);
        this.canvas.addEventListener('mouseup', (e) => this.onMouseUp(e), false);
        this.canvas.addEventListener('mousemove', (e) => this.onMouseMove(e), false);
        this.canvas.addEventListener('mouseleave', (e) => this.onMouseLeave(e), false);
        this.drawGame();
        //crear fichas
        this.createChips(this.chipImages.imgPepsi, this.modes.cantChips, this.getInitialXY().xPepsi, this.getInitialXY().yInitial, this.modes.sizeChip, 'Pepsi');
        this.createChips(this.chipImages.imgCoca, this.modes.cantChips, this.getInitialXY().xCoca, this.getInitialXY().yInitial, this.modes.sizeChip, 'Coca');
        this.drawChips();
        this.showMsg("Turno Jugador 1")
   
    }

    //calcula el x e y inicial a partir del cual se crearan las fichas
    getInitialXY(){
        let xPepsi = parseInt(this.inicioGameX + 100);
        let yInitial = parseInt(this.altoCanvas - this.modes.marginBottom);
        let xCoca = parseInt(this.anchoCanvas - 290);
        return { xPepsi, yInitial, xCoca}
    }

    onMouseLeave(e){
            this.lastClickedChip.setPosition(this.lastClickedChip.getPositionInitial().posX, this.lastClickedChip.getPositionInitial().posY);
            this.lastClickedChip.setResaltado(false);
            this.lastClickedChip = null;
            this.drawChips();
    }

    onMouseDown(e){
        e.preventDefault();
        this.isMouseDown = true;
        if(this.isGameOver){
            return;
        }
        let actualValues = this.getMousePosition(e);
        let xActual = actualValues.xActual;
        let yActual = actualValues.yActual;
    
        if(this.lastClickedChip != null){
            this.lastClickedChip.setResaltado(false);
            this.lastClickedChip = null;
        }
        let clickChip = this.findClickedChip(xActual, yActual);
      
        if(clickChip != null && clickChip.getPlayer() == this.currentPlayer && clickChip.getUsed() == false){
            clickChip.setResaltado(true);
            this.lastClickedChip = clickChip;
        }
        this.drawChips();
    }
    
    onMouseMove(e){
        let actualValues = this.getMousePosition(e);
        let xActual = actualValues.xActual;
        let yActual = actualValues.yActual;
        if(this.isMouseDown && this.lastClickedChip != null && this.lastClickedChip.getPlayer() == this,this.currentPlayer){
            this.lastClickedChip.setPosition(xActual, yActual);
            this.drawChips();
        }
    }

    onMouseUp(e){
        this.isMouseDown = false;
        let actualValues = this.getMousePosition(e);
        let xActual = actualValues.xActual;
        let yActual = actualValues.yActual;
        const column = this.getColumnFromCoordinates(xActual);
        
        
        //mensaje de columna llena
        if (!this.isValidArea(xActual, yActual) || this.isColumnFull(column)) {
            this.lastClickedChip.setPosition(this.lastClickedChip.getPositionInitial().posX, this.lastClickedChip.getPositionInitial().posY);
            this.lastClickedChip.setResaltado(false);
            this.lastClickedChip = null;
            this.drawChips();
            return;
        }
        const row = this.findLowestEmptyRow(column);
        // Calcula las coordenadas x e y para dibujar la ficha en la fila vacía
        const xToDraw = this.board.x + column*this.modes.width + this.modes.width/2;
        const yToDraw = this.board.y + row * this.modes.height+this.modes.height/2;

        // Actualiza la posición de la ficha
        this.lastClickedChip.setPosition(xToDraw, yToDraw);
        this.lastClickedChip.setResaltado(false);
        this.saveChip(column, row, xToDraw, yToDraw);
        this.drawChips();
        let rdo = this.checkForWin(column, row);
        
       if (rdo.result === true) {
        //if (false) {
            console.log('resultadi', rdo);
            this.showMsg(`¡Jugador ${this.currentPlayer} ha ganado!`);
            console.log(`¡Jugador ${this.currentPlayer} ha ganado!`);
            this.lastClickedChip = null;
            this.chipShowAsWinner(rdo.winners);
            this.drawChips();
            this.isGameOver = true;
        } else {
            // Encuentra la fila vacía más baja en la columna
            
            
             // Cambiar al siguiente jugador.
            this.switchPlayer();
            
            //podria mostrar un msj que ahora es el turno del otro jugador
            this.lastClickedChip = null;
           // this.currentPlayer = 1 - this.currentPlayer; // Alternar entre 0 y 1.
        
        }
    } 
    
    //pinto como ganadoras las fichas
    chipShowAsWinner(chipWinners){
        console.log('ganadoras', chipWinners);
        for(let i = 0; i < chipWinners.length; i++){
            chipWinners[i].setResaltadoEstilo("#F69B12");
            chipWinners[i].setResaltado(true);
        }
    }

    //dibujar juego
    drawGame() {
        this.ctx.drawImage(this.chipImages.imgFondo, this.inicioGameX, this.inicioGameY, this.anchoCanvas, this.altoCanvas);   
        this.board.centerBoard(this.anchoCanvas, this.altoCanvas);
        this.board.draw(); 
    }

    clearCanvas() {
        this.drawGame(); 
    }
    //limpio el canvas y dibujo las fichas
    drawChips() {
        this.clearCanvas();  
        for(let i = 0; i < this.chips.length; i ++){
            this.chips[i].drawChip();
        }
        //this.chips.forEach(chip => chip.drawChip());
    }

    //dibujo las fichas iniaciales
    createChips(img, cant, x, y, r, player) {
        let chip;
        let starY = y;
        let starX = x;
        let margin = r * 2 + 10;
        let finalY;
        let columns = 4; // Inicialmente, 4 columnas
    
        if (cant > 28) {
            columns = 5; // Más de 28 fichas, cambia a 5 columnas
        }
        
        let chipsPerColumn = Math.floor(cant / columns);
        let remainder = cant % columns;
        
        for (let i = 0; i < columns; i++) {
            
            for (let j = 0; j < chipsPerColumn; j++) {
                chip = new Chip(x, y, player, r, this.ctx, img);
                this.chips.push(chip);
                y -= margin;
            }
            finalY = y;
            y = starY;
            x += margin;
        }
        
        for (let i = 0; i < remainder; i++) {
            chip = new Chip(starX, finalY, player, r, this.ctx, img);
            this.chips.push(chip);
            y -= margin;
        }
        
        console.log("chips:" + this.chips.length);
    }

    //define el area valida donde se soltara la ficha
    isValidArea(xActual, yActual){
        if(xActual >= this.board.x && xActual <= this.board.x + this.modes.col * this.modes.width
             && yActual >= this.inicioGameY && yActual <= this.board.y){
                 return true;
         }
         return false;
     }
 
     //verifico q sea una columna valida
     getColumnFromCoordinates(xActual){
         //xactual - inicio tabl / ancho  de mi ficha
         //busco cuantas veces entra el ancho de mi col, en la diferencia, redondeo para abajo 
         const column = Math.floor((xActual - this.board.x) / this.modes.width);
         //si esa cant es menor a 1 o mayor q mi cant de col no me interesa, no es una col valida
         if(column < 0 || column > this.modes.col){
             return -1;
         }
         return column;
     }
    
     getMousePosition(e) {
         // Obtener la posición del clic en el tablero
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
     
     findClickedChip(x, y){    
         for(let i =0; i < this.chips.length; i++){    
         const element = this.chips[i];
             if(element.isPointerInside(x, y)){
                 return element;
             }
         }
     }

    findLowestEmptyRow(col) {
        // Encontrar la fila más baja vacía en la columna
        for (let row = this.modes.row - 1; row >= 0; row--) {
            if (!this.gameState[col][row]) {
                return row;
            }
        }
        return -1; // La columna está llena
    }

    // Verificar si la columna está llena dentro de la matriz
    isColumnFull(col) {
       
        return this.gameState[col].every(row => row !== null);
    }
    
    //logica de juego

    initializeGameState(col, row) {
        //inicializa la matriz con celdas vacias
        for (let i = 0; i < col; i++) {
            this.gameState[i] = [];
            for (let j = 0; j < row; j++) {
                this.gameState[i][j] = null;
            }
        }
    }

    // Colocar una ficha en la columna y actualiza la matriz del tablero
    saveChip(col, row, x, y) {
        if (row !== -1) {    
           //setear la ficha
            this.lastClickedChip.setPosition(x, y);
            //para que no se mueva una vez dentro del tablero
            this.lastClickedChip.setUsed(true);
            // Actualiza la matriz del tablero
            this.gameState[col][row] = this.lastClickedChip;
        }
    }

    //chequear ganador
    checkForWin(col, row){
        return this.checkVerticalWin(col, row)
    }

    checkVerticalWin(col, row) {
        let chipsWinners = [];
        //guardo la primer ficha
        chipsWinners.push(this.gameState[col][row]);
        //hacia arriba
        let count = 1; 
        //fila actual
        let currentRow = row - 1;
        
        while (currentRow >= 0 && this.gameState[col][currentRow] && this.gameState[col][currentRow].getPlayer() === this.currentPlayer) {
            chipsWinners.push(this.gameState[col][currentRow]);
            count++;
            currentRow--;
        }
        
        if(count >= this.modes.line){
            return{
                result: true,
                winners: chipsWinners
            }
        } else{
            chipsWinners = [];
        }
        //hacia abajo
        chipsWinners.push(this.gameState[col][row]);
        currentRow = row + 1;
    
        while (currentRow < this.modes.row && this.gameState[col][currentRow].getPlayer() === this.currentPlayer) {
            chipsWinners.push(this.gameState[col][currentRow]);
            count++;
            currentRow++;
        }
        //console.log('check vert', count);
        if(count >= this.modes.line){
            return{
                result: true,
                winners: chipsWinners
            }
        } else {
            return{
                result: false,
            }
        }
        //return count >= this.modes.line;
    }
    

     //mostrar mensajes
     showMsg(msg){
        console.log("hola msj");
        this.divMsg.spanPlayer.innerHTML = msg;

    }

    //cambiar jugador
    switchPlayer() {
        if (this.currentPlayer === 'Pepsi') {
            this.showMsg("Turno Jugador 2")
            this.currentPlayer = 'Coca';
        } else {
            this.showMsg("Turno Jugador 1")
            this.currentPlayer = 'Pepsi';
        }
    } 
}
