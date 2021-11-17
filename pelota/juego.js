function juego(canvas){
    this.componentes=[];
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.temporizador = null;
}

juego.prototype.limpiar = function(){
    this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
}

juego.prototype.repintar = function(){
    this.limpiar();
    for(let i=0; i<this.componentes.length;i++){
        this.componentes[i].pintar();
    }
}

juego.prototype.empezar = function(){
    function empezar(obj){
        return function(){
            obj.repintar();
        }
    }

    if(this.temporizador === null){
        this.temporizador = window.setInterval(empezar(this),35);
    }
}

juego.prototype.parar = function(){
    if(this.temporizador!==null){
        window.clearInterval(this.temporizador);
        this.temporizador = null;
    }
}

juego.prototype.addComponente = function(componente){
    this.componentes.push(componente);
    componente.ind = this.componentes.length-1;
    componente.juego = this;
}

juego.prototype.removeComponente = function(componente){
    this.componentes.splice(componente.ind,1)
}