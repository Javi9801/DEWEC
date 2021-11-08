window.addEventListener("load",function(){
    var boton = this.document.getElementById("boton");
    boton.addEventListener("click",function(){
        suma();
    });
});


function suma(){
    document.getElementById('resultado').value = 
    parseInt(document.getElementById('sumando1').value )+ 
    parseInt(document.getElementById('sumando2').value);
};

multiplica2 = function(a){
    return 2*a;
}

multiplica3 = function(a){
    return 3*a;
}

multiplica4 = function(a){
    return 4*a;
}

tabla = function(base){
    return function(numero){
        return base * numero;
    }
}

function sumaMuchos(a){
    valores = arguments.length;
    let suma = 0;
    for(let i =0; i<valores; i++){
        suma+=arguments[i];
    }
    return suma;
}