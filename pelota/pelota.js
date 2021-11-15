window.addEventListener("load", function(){
    var c = document.getElementById("canvas");





    function pelota(tamPelota, posPelota, direccion, ctx, color){
        this.tx=tamPelota[0];
        this.ty=tamPelota[1];
        this.cx=posPelota[0];
        this.cy=posPelota[1];
        this.velocidad=0;
        this.direccion=direccion;
        this.ctx = ctx;
        this.color = color;
    };

    pelota.prototype.pinta = function(){
        var ctx = this.ctx;
        ctx.beginPath();
        ctx.arc(this.cx, this.cy, 40, 0, 2 * Math.PI);
        ctx.stroke();


    };


})