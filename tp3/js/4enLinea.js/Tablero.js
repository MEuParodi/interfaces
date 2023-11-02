
class Tablero{
    constructor(col, filas, ctx, x, y, w, h){       
        this.cantColumnas = col;
        this.cantFilas =filas; 
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
       // this.widthCorner = widthCorner;
        //imagenes
        this.imgFinal = document.getElementById('img-fija');
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

        for(let k = 0; k < this.cantFilas; k++){
            for(let j = 0; j < this.cantColumnas; j++){
                this.ctx.drawImage(this.imgFinal,x, y, w, h);
                x+=w;
            } 
            y+=h;
            x=this.x;            
        }
      
    }


    //centrar tablero
    centerBoard(widthGame, heightGame){
        let centroAncho = widthGame/2;
        let anchoTablero = this.cantColumnas * this.w;
    
        let centroAlto = heightGame/2;
        let altoTablero = this.cantFilas * this.h;
        
        //dejo un margen inferior mas chico
        let inicioTableroY = centroAlto - (altoTablero/2) + 35;
        this.y = inicioTableroY + inicioGameY;
    
        let inicioTableroX = centroAncho - (anchoTablero/2);
        
        this.x = inicioTableroX + inicioGameX;
    }

}
