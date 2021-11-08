//Relacion de ejercicios

//1. Funcion pow que pasados dos numeros eleva el primero al segundo
function eleva(a,b){
    return a**b;
}
//2. Funcion que dado un numero entero y un numero de caracteres devuelve una cadena con ese numero completado con 0.
function cadena0(a,b){
    let cadena="";

    for(let i=0; i<b;i++){
        cadena+="0";
    }
    return a+cadena;
}
//3. Función que pasado el año de nacimiento me devuelva si soy mayor de edad
function mayorEdad(a){
    if(2021-a<18){
        console.log("eres menor de edad");
    } else{
        console.log("eres mayor de edad");
    }
}
//4. Funcion que admita uno o dos parametros el primero es el año de nacimiento el segundo es el año actual(por defecto) y me diga si soy mayor de edad

function mayorEdad1(a,b=2021){
    if(b-a<18){
        console.log("eres menor de edad");
    } else{
        console.log("eres mayor de edad");
    }
}
//5. Funcion que me devuelve la media de los valores pasados

function media(a){
    valores = arguments.length;
    let media = 0;
    let suma = 0;
    for(let i =0; i<valores; i++){
        suma+=arguments[i];
    }
    media = suma/valores;
    return media;
}

// 6. Funcion min que devuelve el minimo de los valores dados
function min(a){
    valores = arguments.length;
    let minimo = arguments[0];
    for(let i=0; i<valores;i++){
        if(arguments[i]<minimo){
            minimo=arguments[i];
        }
    }
    return minimo;
}

// 7. Funcion sort que devuelve un array con los valores ordenados

function sort(a){
    let valores = arguments.length;

    let ordenados = [];
    for(let i=0; i<valores;i++){
        ordenados[i]=arguments[i];
    }
    let aux=0;

    for(let i=0; i<valores-1;i++){
        for(let j=i+1; j<valores;j++){
            if(ordenados[i]>ordenados[j]){
                aux = ordenados[i];
                ordenados[i] = ordenados[j];
                ordenados[j] = aux;
            }
        }
    }
    return ordenados;
}

// 8. Funcion sort que devuelve un array con los valores ordenados cambiando el orden si hay una d al final
function sort1(a){
    let valores = arguments.length;

    let ordenados = [];
    for(let i=0; i<valores;i++){
        ordenados[i]=arguments[i];
    }
    let aux=0;

    if(typeof(ordenados[valores-1]) == "string"){
        for(let i=0; i<valores-1;i++){
            for(let j=i+1; j<valores;j++){
                if(ordenados[i]<ordenados[j]){
                    aux = ordenados[i];
                    ordenados[i] = ordenados[j];
                    ordenados[j] = aux;
                }
            }
        }
    } else {
        for(let i=0; i<valores-1;i++){
            for(let j=i+1; j<valores;j++){
                if(ordenados[i]>ordenados[j]){
                    aux = ordenados[i];
                    ordenados[i] = ordenados[j];
                    ordenados[j] = aux;
                }
            }
        }
    }
    return ordenados;
}

