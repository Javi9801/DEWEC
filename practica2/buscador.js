// //buscar en un formulario dado un a caja de texto y 
// //un textarea(parrafo con texto) y abajo que se muestre otro texto con las coincidencias


// function Buscador(cadena){
//     this.cadena = cadena;
//     this.coincidencias=[];
//     var j=-1;

//     while(this.cadena.indexOf("a",j)>=0){
//         j=this.cadena.indexOf("a",j);
//         this.coincidencias[this.coincidencias.length] = j++;
//     }

//     this.ocurrencias = this.coincidencias.length;
// }

// var busqueda1 = new Buscador("Juana viene al cine mañana");

Array.prototype.toString=function(){
    return this.join(", ");
}

String.prototype.BuscarTodas=function(subcadena=""){
    
    var cadena=" "+this.valueOf()+ " ";
    cadena = cadena.replace(",","");
    cadena = cadena.replace(".","");
    coincidencias=[];
    var j=-1;

    while(cadena.indexOf(subcadena,j)>=0){
        j=cadena.indexOf(subcadena,j);
        let posAnt = cadena.lastIndexOf(" ",j);
        let posTra = cadena.indexOf(" ",j);

        coincidencias[coincidencias.length] = cadena.substring(posAnt+1, posTra);
        j++;
    }
    return coincidencias;
}


// window.addEventListener("load",function(){
//     var boton = this.document.getElementById("buscar");
//     boton.onclick = function(){
//         var palabra = document.getElementById("palabra").value;
//         var frase = document.getElementById("frase").value;
//         var p = document.getElementById("resultado");

//         p.innerHTML = frase.BuscarTodas(palabra);
//     }
// })


window.addEventListener("load",function(){
    var boton = this.document.getElementById("numeros");
    
    
    boton.onclick = function(){

        var frase = document.getElementById("frase").value;
        var miarray = frase.split("\n");

        resultado = document.getElementById("resultado");
        const texto = miarray.filter(miFiltro);
        resultado.innerHTML = miarray;
    }
})

function miFiltro(value){
    return typeof value === "integer";
}

