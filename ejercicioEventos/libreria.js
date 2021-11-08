window.addEventListener("load",function(){
    const dni = document.getElementById("dni");
    const nombre = document.getElementById("nombre");
    const fecha = document.getElementById("fecha");
    const boton = document.getElementById("btnGuardar")


    dni.onkeydown = function(ev){
        if(isNaN(ev.key) || ev.repeat){
            ev.preventDefault();
        }

        if(ev.keyCode == 8){
            dni.value = dni.value.substr(0,dni.value.length-1);
        }
    }

    dni.onkeyup = function(){
         if(dni.value.length==8){
            dni.value = dni.value + this.value.averigua();
            nombre.focus();
            dni.disabled = true;
        }
    }

    nombre.onkeyup = function(evento){
        if(evento.keyCode === 13){
            fecha.focus();
        }

    }

    nombre.onkeydown = function(ev){

        ev.preventDefault();
        var tecla = ev.keyCode;

        if(tecla>=65 && tecla<=90){
            if (ev.getModifierState('CapsLock')) {

                if(ev.shiftKey==true){
                    nombre.value +=String.fromCharCode(tecla).toLowerCase();
                } else {
                    nombre.value +=String.fromCharCode(tecla);
                }
            } else {
                if(ev.shiftKey==true){
                    nombre.value +=String.fromCharCode(tecla);
                } else {
                    nombre.value +=String.fromCharCode(tecla).toLowerCase();
                }
            }

        }
        if(tecla==8){
            nombre.value = nombre.value.substr(0,nombre.value.length-1);
        }
    }


    fecha.onkeyup = function(){
        if(fecha.value.length!=10){
            if(fecha.value.length == 2 | fecha.value.length == 5){
                fecha.value = fecha.value+"/"
            }
        } else {
            fecha.disabled = true;
        }
    }
})




String.prototype.letraDNI= function(){
    return this.substr(-1);
};

String.prototype.validarDNI = function(){

    numero = this.substr(0,this.length-1);
    letra='TRWAGMYFPDXBNJZSQVHLCKET';
    return letra[numero % 23]==this.letraDNI();

};

String.prototype.averigua = function(){

    numero = this.substr(0,this.length);
    letra='TRWAGMYFPDXBNJZSQVHLCKET';
    return letra[numero % 23];
}