class Chip{
    //let radius;

    constructor(posX, posY, player, radius, ctx, img){
        this.posX = posX;
        this.posY = posY;
        this.player = player;
        this.posInitial = {
            posX,
            posY
        }
        this.radius = radius;
        this.used = false;
        this.ctx = ctx;
        this.img = img;
        this.resaltado = false;
        this.resaltadoEstilo = 'blue';
    }

//drawChip2();
    setResaltadoEstilo(color){
        this.resaltadoEstilo = color;
    }

    drawChip() {
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
    }

    drawStroke(ctx, radius) {
    ctx.beginPath(); 
    const grad = this.ctx.createRadialGradient(this.posX, this.posY ,radius * 0.85, this.posX, this.posY, radius * 1.2);
        grad.addColorStop(0, 'grey');
        grad.addColorStop(0.5, 'white');
        grad.addColorStop(1, 'grey');
    
        ctx.arc(this.posX, this.posY, radius, 0, 2 * Math.PI);
      //  ctx.fillStyle = 'white';
        ctx.fill();
        ctx.drawImage(this.img, this.posX -radius, this.posY-radius, radius*2, radius*2);

        ctx.strokeStyle = grad;
        ctx.lineWidth = radius*0.20;
        ctx.stroke();
        
        //ctx.beginPath();
        
        
        ctx.closePath();
    }
    getRadius(){
        return this.radius;
    }

    getUsed(){
        return this.used;
    }

    setUsed(value){
        this.used = value;
    }

    setPositionInitial(x, y){
        this.posInitial.posX = x,
        this.posInitial.posY = y
    }

    getPositionInitial(){
        return this.posInitial;
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

    getPlayer(){
        return this.player;
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
        return Math.sqrt(_x * _x + _y * _y) < this.getRadius();
    }

    setResaltado(resaltado){
        this.resaltado = resaltado;
    }



}