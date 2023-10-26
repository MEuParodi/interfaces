
class Tablero{
    constructor(col, filas, ctx, x, y, w, h, widthCorner){
       
        this.cantColumnas = col;
        this.cantFilas =filas; 
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.widthCorner = widthCorner;
        //imagenes
        this.arribaIzq = document.getElementById('arriba-izq');
       // this.arribaBorde = document.getElementById('arriba-borde');
        this.arribaDer = document.getElementById('arriba-der');
        this.abajoIzq = document.getElementById('abajo-izq');
       // this.abajoBorde = document.getElementById('abajo-borde');
        this.abajoDer= document.getElementById('abajo-der');
        this.izqBorde = document.getElementById('izq-borde');
        this.derBorde = document.getElementById('der-borde');
        this.medio = document.getElementById('medio');
    }



    draw(){
        let x = this.x;
        let y = this.y;
        let w = this.w;
        let h = this.h;
        //primer fila
        this.drawRows(this.arribaIzq, this.medio, this.arribaDer, x, y, w, h, this.widthCorner);
        //this.drawRows(this.arribaIzq, this.arribaBorde, this.arribaDer, x, y, 97, 82);
        y+=h;
        x=this.x;
        //resto de filas
        for(let j = 0; j < this.cantFilas - 2; j++){
            this.drawRows(this.izqBorde, this.medio, this.derBorde, x, y, w, h, this.widthCorner);
            y+=h;
            x=this.x;
        }
        //ultima fila
        this.drawRows(this.abajoIzq, this.medio, this.abajoDer, x, y, w, h, this.widthCorner);
        
        // this.drawRows(this.abajoIzq, this.abajoBorde, this.abajoDer, x, y, w, h);
        y+=h;
        x=this.x;

    }


    drawRows(imgInicio, imgMedio, imgFin,x, y, w, h, widthCorner){
        this.ctx.drawImage(imgInicio, x, y, widthCorner, h);
            x+=widthCorner;
            for(let k = 0; k < this.cantColumnas - 2; k++){
                this.ctx.drawImage(imgMedio,x, y, w, h);
                x+=w;
            }
            this.ctx.drawImage(imgFin,x, y, widthCorner, h);
            
    }


    centerBoard(widthGame, heightGame){
        let centroAncho = widthGame/2;
        let anchoTablero = (this.cantColumnas - 2) * this.w + this.widthCorner*2;
    
        let centroAlto = heightGame/2;
        let altoTablero = this.cantFilas * this.h;
    
        let inicioTableroY = centroAlto - (altoTablero/2);
        this.y = inicioTableroY + inicioGameY;
    
        let inicioTableroX = centroAncho - (anchoTablero/2);
        
        this.x = inicioTableroX + inicioGameX;
    }

}
