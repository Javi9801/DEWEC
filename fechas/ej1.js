
window.addEventListener("load",function(){
    
    document.getElementById("fecha").onkeyup=function(){
        var fecha = document.getElementById("fecha").value;
        var res = document.getElementById("res");
        res.innerHTML=(fecha.esFecha())?"OK":"ERROR";
    }

    document.getElementById("edad").onclick=function(){
        var fecha = document.getElementById("fecha2").value;
        var res = document.getElementById("res2");
        res.innerHTML=edad(fecha);
    }

    document.getElementById("vida").onclick=function(){
        var fecha = document.getElementById("fecha3").value;
        var res = document.getElementById("res3");
        res.innerHTML=pasa_a_Dias(fecha) + " dias y "+pasa_a_Horas(fecha)+" horas";
    }

    document.getElementById("resta").onclick=function(){
        var fecha = document.getElementById("fecha4").value;
        var fecha1 = document.getElementById("fecha5").value;
        var res = document.getElementById("res4");
        res.innerHTML=restaFechas(fecha,fecha1);
    }
})