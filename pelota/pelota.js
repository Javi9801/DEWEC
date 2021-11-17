function Pelota(posx, posy, r,color){
    this.x=posx;
    this.y=posy;
    this.r=r;
    this.color = color;
    this.ind = null;
    this.juego = null
    this.d = [0,1];
    this.v=1;
    this.tmp = null;
};



Pelota.prototype.pintar = function(){
    var ctx = this.juego.ctx;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
};


Pelota.prototype.arrancar = function(){
    function arrancar(obj){
        return function(){
            obj.mover();
        }
    }
    this.tmp = window.setInterval(arrancar(this),30);
}

Pelota.prototype.mover = function(){

    if(this.choque()){
        this.d[0] = -this.d[0];
        this.d[1] = -this.d[1];
    }
    this.x = this.x + this.d[0]*this.v;
    this.y = this.y + this.d[1]*this.v;
}

Pelota.prototype.choque = function(){
    var respuesta = false;
    if(this.x<=this.r || this.x>=this.juego.canvas.width-this.r ||
       this.y<=this.r || this.y>=this.juego.canvas.height-this.r){
        respuesta = true;
    }
    for(let i=0; i<this.juego.componentes.length;i++){
        if(i==this.ind){
            continue;
        }
        if((this.x-this.juego.componentes[i].x) * (this.x-this.juego.componentes[i].x)+
           (this.y-this.juego.componentes[i].y) * (this.y-this.juego.componentes[i].y) <=
           (this.r + this.juego.componentes[i].r) * (this.r + this.juego.componentes[i].r)){
          respuesta = true;
        }
    }
    return respuesta;

}