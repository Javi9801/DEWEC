window.addEventListener("load",function(){

    const cuerpo = document.getElementById("cuerpo");
    const boton = document.getElementById("insertar");
    const cabDNI = document.querySelectorAll("table thead th")[0];
    cabDNI.ordenacion=1;

    // cabDNI.ondblclick = function(){
    //     ordenarDNI();
    // }

    boton.onclick = function(){
        insertar();
    }

    cuerpo.parentElement.ondblclick = function(){
        activarEdicion();
    }
});

