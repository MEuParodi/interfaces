class Arrow {
    constructor(ctx, x, y, w, h, col, img){       
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
        this.col = col
    }

    draw(){

        // if (this.img.complete) {
        //     // Calcula la posición y las dimensiones para la flecha
        //     let x = this.x - this.w / 2;  // Centra la flecha horizontalmente
        //     let y = this.y - this.h / 2;  // Centra la flecha verticalmente
    
        //     // Dibuja la flecha
        //     this.ctx.drawImage(this.img, x, y, this.w, this.h);
        // } else {
        //     console.error("Imagen no cargada.");
        // }
       
        let x = this.x + this.w/4;
        let y = this.y - this.h / 2;
        let w = this.w;
        let h = this.h;
        console.log("hola flecha", this.img);
       // this.ctx.drawImage(this.img, 150, 100, w, h);

        for(let k = 0; k < this.col; k++){
            this.ctx.drawImage(this.img, x, y, w/2, h/2);
            x+=w;           
        }
      
    }




}