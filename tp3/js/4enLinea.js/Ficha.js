class Ficha{
    //let radius;

    constructor(posX, posY, radius, ctx, img){
        this.posX = posX;
        this.posY = posY;
        this.radius = radius;
       // this.fill = fill;
        this.ctx = ctx;
        //this.radius = radius * 0.90;
        this.img = img;
        this.resaltado = false;
        this.resaltadoEstilo = 'red';
    }

//drawFicha2();


    drawFicha() {
        console.log("dibujar ficha")
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.radius, 0 , 2 * Math.PI);
        // ctx.shadowBlur = 10;
        // ctx.shadowOffsetY = 2;
        // ctx.shadowOffsetX = 2;
        // ctx.shadowColor = "black";
        if(this.resaltado === true){
            this.ctx.strokeStyle = this.resaltadoEstilo;
            this.ctx.lineWidth = 15;
            this.ctx.stroke();
        }

        this.ctx.closePath(); 
        this.drawStroke(this.ctx, this.radius);

    // drawFace2(ctx, radius);
    
    }

    drawStroke(ctx, radius) {
    ctx.beginPath(); 
    const grad = this.ctx.createRadialGradient(this.posX, this.posY ,radius * 0.85, this.posX, this.posY, radius * 1.2);
        grad.addColorStop(0, 'grey');
        grad.addColorStop(0.5, 'black');
        grad.addColorStop(1, 'grey');
    
        ctx.arc(this.posX, this.posY, radius, 0, 2 * Math.PI);
      //  ctx.fillStyle = 'white';
        ctx.fill();
        ctx.drawImage(this.img, this.posX -radius, this.posY-radius, radius*2, radius*2);

        ctx.strokeStyle = grad;
        ctx.lineWidth = radius*0.15;
        ctx.stroke();
        
        //ctx.beginPath();
        
        
        ctx.closePath();
    }

    
    getRadius(){
        return this.radius;
    }

    
    setPosition(x, y){
        this.posX = x;
        this.posY = y;
    }

    getPosition(){
        return {
            x: this.getPosX(),
            y: this.getPosY()
        };
    }

    getPosX(){
        return this.posX;
    }

    getPosY(){
        return this.posY;
    }

    
    isPointerInside(x, y){
        let _x = this.posX - x;
        let _y = this.posY - y;
        //distancia entre  2puntos
        return Math.sqrt(_x * _x + _y * _y) < this.radius;
    }

    setResaltado(resaltado){
        this.resaltado = resaltado;
    }



}