class Game {
    constructor(canvas, modes, ctx, chipImages) {
        this.modes = modes;
        this.inicioGameX = 0;
        this.inicioGameY = 0;
        this.board = new Board(modes.col, modes.row, ctx, this.inicioGameX, this.inicioGameY, modes.width, modes.height, chipImages.imgTablero);
        this.players = ['Pepsi', 'Coca']; // Nombres de los jugadores
        this.currentPlayer = 0; // Índice del jugador actual
        this.chips = []; // Array para almacenar las fichas en el tablero
        this.lastClickedFigure = null;
        let isMouseDown = false;
        this.isGameOver = false;
        this.canvas = canvas;
        this.ctx = ctx;
        this.chipImages = chipImages;
        this.anchoCanvas = this.canvas.width;
        this.altoCanvas = this.canvas.height;

        this.gameState = []; // Matriz con estado del juego
        this.initializeGameState(modes.col, modes.row);
    }



    init() {
       // this.canvas.addEventListener('click', this.onCanvasClick.bind(this));
        this.canvas.addEventListener('mousedown', (e) => this.onMouseDown(e), false);
        this.canvas.addEventListener('mouseup', (e) => this.onMouseUp(e), false);
        this.drawGame();
        //crear fichas pepsi
        console.log('img', )
        this.createChips(this.chipImages.imgPepsi, this.modes.cantChips, 70, 550, this.modes.sizeChip);
        this.createChips(this.chipImages.imgCoca, this.modes.cantChips, 980, 550, this.modes.sizeChip);
        this.drawChips();
        //crear fichas coca
    }

    initializeGameState(col, row) {
        //inicializa la matriz
        for (let i = 0; i < col; i++) {
            this.gameState[i] = [];
            for (let j = 0; j < row; j++) {
                this.gameState[i][j] = null; // Celda vacía
            }
        }
    }

    drawGame() {
        this.ctx.drawImage(this.chipImages.imgFondo, this.inicioGameX, this.inicioGameY, this.anchoCanvas, this.altoCanvas);   
        this.board.centerBoard(this.anchoCanvas, this.altoCanvas);
        this.board.draw(); 
    }

    onCanvasClick(e) {
        if (this.isGameOver) return;

        // Obtener la posición del clic en el tablero
        const { x, y } = this.getMousePosition(e);

        // Verificar si la columna está llena
        //if (this.isColumnFull(x)) return;
        
        // Calcula la posición de la columna en la que se hizo clic
        const column = Math.floor((xActual - this.board.x) / this.modes.width);
    // Verifica si la columna está dentro de los límites válidos del tablero
        if (column >= 0 && column < this.modes.col) {
            // La columna es válida, puedes proceder a colocar la ficha en esa columna
            // y realizar otras operaciones de juego.
            if (!this.isColumnFull(column)) {
                this.placeChip(column);
                this.drawGame();
                
                if (this.checkForWin()) {
                    this.isGameOver = true;
                    console.log('¡Jugador ' + this.players[this.currentPlayer] + ' ha ganado!');
                } else {
                    // Cambiar al siguiente jugador
                    this.currentPlayer = 1 - this.currentPlayer;
                }
            }
        }
    }

   

    onMouseDown(e){
        e.preventDefault();
        this.isMouseDown = true;
        let actualValues = this.getMousePosition(e);
        let xActual = actualValues.xActual;
        let yActual = actualValues.yActual;
    
        if(this.lastClickedFigure != null){
            this.lastClickedFigure.setResaltado(false);
            this.lastClickedFigure = null;
        }
    
        let clickFig = this.findClickedFigure(xActual, yActual);
        if(clickFig != null){
            clickFig.setResaltado(true);
            this.lastClickedFigure = clickFig;
        }
        this.drawChips();
    }
    onMouseUp(e){
        this.isMouseDown = false;
        let actualValues = this.getMousePosition(e);
        let xActual = actualValues.xActual;
        let yActual = actualValues.yActual;
        const column = this.getColumnFromCoordinates(xActual);
        if (!this.isValidArea(xActual, yActual) || this.isColumnFull(column)) {
            this.lastClickedFigure.setPosition(this.lastClickedFigure.getPositionInitial().posX, this.lastClickedFigure.getPositionInitial().posY);
            this.lastClickedFigure.setResaltado(false);
            this.lastClickedFigure = null;
            this.drawChips();
            return;
        }
        
        // Calcula la columna seleccionada a partir de las coordenadas del ratón
       
        // if(column == -1 || this.isColumnFull(column)){
        //     this.lastClickedFigure.setPosition(this.lastClickedFigure.getPositionInitial().posX, this.lastClickedFigure.getPositionInitial().posY);
        //     this.lastClickedFigure.setResaltado(false);
        //     this.lastClickedFigure = null;
        //     this.drawChips();
        // }

        // Encuentra la fila vacía más baja en la columna
        const row = this.findLowestEmptyRow(column);
        console.log("x y tabl",this.board.x,this.board.y);
        // Calcula las coordenadas x e y para dibujar la ficha en la fila vacía
        const xToDraw = this.board.x + column*this.modes.width + this.modes.width/2;
        const yToDraw = this.board.y + row * this.modes.height+this.modes.height/2;

        // Actualiza la posición de la ficha
        this.lastClickedFigure.setPosition(xToDraw, yToDraw);
        this.lastClickedFigure.setResaltado(false);
        this.lastClickedFigure = null;
        
        this.drawChips();
        this.saveChip(column, row, xToDraw, yToDraw);
    }

    isValidArea(xActual, yActual){
       if(xActual >= this.board.x && xActual <= this.board.x + this.modes.col * this.modes.width
            && yActual >= this.inicioGameY && yActual <= this.board.y){
                return true;
        }
        return false;
    }

    getColumnFromCoordinates(xActual){
        const column = Math.floor((xActual - this.board.x) / this.modes.width);
        if(column < 0 || column > this.modes.col){
            return -1;
        }
        return column;
    }
   
    
    onMouseMove(e){
        let actualValues = this.getMousePosition(e);
        let xActual = actualValues.xActual;
        let yActual = actualValues.yActual;
        if(this.isMouseDown && this.lastClickedFigure != null){
            this.lastClickedFigure.setPosition(xActual, yActual);
            this.drawChips();
        }
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
    
    findClickedFigure(x, y){    
        for(let i =0; i < this.chips.length; i++){    
        const element = this.chips[i];
            if(element.isPointerInside(x, y)){
                return element;
            }
        }
    }

    clearCanvas() {
        this.drawGame(); 
    }

    //seeChips
    drawChips() {
        this.clearCanvas();  
        for(let i = 0; i < this.chips.length; i ++){
            this.chips[i].drawChip();
        }
        //this.chips.forEach(chip => chip.drawChip());
    }

    createChips(img, cant, x, y, r) {
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
                chip = new Chip(x, y, null, r, this.ctx, img);
                this.chips.push(chip);
                y -= margin;
            }
            finalY = y;
            y = starY;
            x += margin;
        }
        
        for (let i = 0; i < remainder; i++) {
            chip = new Chip(starX, finalY, null, r, this.ctx, img);
            this.chips.push(chip);
            y -= margin;
        }
        
        console.log("chips:" + this.chips.length);
    }

    isColumnFull(col) {
        // Verificar si la columna está llena
        //return this.chips.some(chip => chip.col === col && chip.row === 0);
        // Verificar si la columna está llena en la matriz
        return this.gameState[col].every(row => row !== null);
    }

    //seria createChip ver
    saveChip(col, row, x, y) {
        // Colocar una ficha en la columna y actualiza la matriz del tablero
        //const row = this.getLowestEmptyRow(col);
        if (row !== -1) {
            const player = this.players[this.currentPlayer];
            const chip = new Chip(x, y, player, this.modes.sizeChip,  this.ctx, this.chipImages.imgCoca);
            this.chips.push(chip);

            // Actualiza la matriz del tablero
            this.gameState[col][row] = chip;
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
        // for (let row = this.board.cantRows - 1; row >= 0; row--) {
        //     if (!this.chips.some(chip => chip.col === col && chip.row === row)) {
        //         return row;
        //     }
        // }
        // return -1; // La columna está llena
    }

    checkForWin() {
        // Implementa la lógica para verificar si hay un ganador
        // Aquí debes verificar horizontalmente, verticalmente y en diagonal
        // Si encuentras un ganador, devuelve true; de lo contrario, devuelve false
    }
}
