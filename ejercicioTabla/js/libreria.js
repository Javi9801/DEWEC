
String.prototype.esFecha = function(){

    var respuesta = false;
    var partes = this.split("/");
    if(partes.length==3){

        var fecha = new Date(partes[2],partes[1]-1,partes[0]);
        if(fecha.getFullYear() == partes[2] &&
            fecha.getMonth() == (partes[1]-1) &&
            fecha.getDate() == partes[0]) {
            respuesta=true;
        }
    }
        return respuesta;
}

String.prototype.letraDNI= function(){
    return this.substr(-1);
};

String.prototype.validarDNI = function(){

    numero = this.substr(0,this.length-1);
    letra='TRWAGMYFPDXBNJZSQVHLCKET';
    return letra[numero % 23]==this.letraDNI();

};

function edad(fecha){
    var fecha2 = new Date();
    var fechaF, fecha1;
    var res=0;

    if(fecha.esFecha()){
        fecha1 = new Date(fecha);
        fechaF = new Date((fecha2.getTime() - fecha1.getTime()));
        res = fechaF.getFullYear()-1970;
    } else {
        // alert("FECHA INCORRECTA");
    }
    return res;
}


function insertar(){
    var dni = document.getElementById("dni");
    var nombre = document.getElementById("nombre");
    var edad = document.getElementById("edad");

    var respuestas = [];

    if(dni.value.validarDNI()){
        respuestas.push(true);
        dni.className=""
    } else {
        respuestas.push(false);
        dni.className="error"
    }


    if(nombre.value !== ""){
        respuestas.push(true);
        nombre.className=""
    } else {
        respuestas.push(false);
        nombre.className="error"
    }

    if((parseInt(edad.value)==edad.value) && (edad.value>=0)){
        respuestas.push(true);
        edad.className=""
    } else {
        respuestas.push(false);
        edad.className="error"
    }

    if(respuestas.every(function(val,index){return val})){
        insertarFila();
    }
}


function insertarFila(){

    var dni = document.getElementById("dni");
    var nombre = document.getElementById("nombre");
    var edad = document.getElementById("edad");
    const fila = document.createElement("tr");

    var cuerpo = document.getElementById("cuerpo");
    var tabla = cuerpo.parentElement;
    var editable = tabla.getAttribute("editable");


    const columnaDNI = document.createElement("td");
    columnaDNI.innerHTML = dni.value;
    fila.appendChild(columnaDNI);

    const columnaNombre = document.createElement("td");
    columnaNombre.innerHTML = nombre.value;
    fila.appendChild(columnaNombre);

    const columnaEdad = document.createElement("td");
    columnaEdad.innerHTML = edad.value;
    fila.appendChild(columnaEdad);



    if(editable == "on"){
        var spanE = document.createElement("span");
        var spanB = document.createElement("span");
        spanB.innerHTML = "X";
        spanB.onclick = borrarFila;
        spanE.innerHTML = "E";
        spanE.onclick = editarFila;
        var td = document.createElement("td");
        td.appendChild(spanB);
        td.appendChild(spanE);
        fila.appendChild(td);

    }

    cuerpo.appendChild(fila);
}


// function ordenarDNI(){
//     var vector = [];
//     var cabDNI = document.querySelectorAll("table thead th")[0];
//     var tbody = cabDNI.parentNode.parentNode.nextElementSibling;
//     var filas = tbody.children;

//     for(let i=0; i<filas.length;i++){
//         vector.push(filas[i]);
//     }
//     vector.sort(compararCelda);
//     cabDNI.ordenacion*=-1;
//     for(let i=0; i<vector.length;i++){
//         tbody.appendChild(vector[i]);
//     }
// }

// function compararCelda(a,b){
//     var cabDNI = document.querySelectorAll("table thead th")[0];
//     return cabDNI.ordenacion * (a.children[0].innerHTML).localeCompare(b.children[0].innerHTML);
// }

function activarEdicion(){
    var cuerpo = document.getElementById("cuerpo");
    var tabla = cuerpo.parentElement;
    var editable = tabla.getAttribute("editable");

    if(editable!=null && editable != "on"){
        tabla.setAttribute("editable", "on");
        filaCabecera = tabla.children[0].children[0];
        filasTbody = tabla.children[1].children;
        var th = document.createElement("th");
        th.innerHTML = "ACCION";
        filaCabecera.appendChild(th);

        for(let i=0; i<filasTbody.length;i++){
            var spanE = document.createElement("span");
            var spanB = document.createElement("span");
            spanB.innerHTML = "X";
            spanB.onclick = borrarFila;
            spanE.innerHTML = "E";
            spanE.onclick = editarFila;
            var td = document.createElement("td");
            td.appendChild(spanB);
            td.appendChild(spanE);

            filasTbody[i].appendChild(td);
        }

        for(let i=0; filaCabecera.children.length-1;i++){
            filaCabecera.children[i].onclick=ordenarColumna(i,filaCabecera.children[i]);
        }
    }
}
function borrarFila(){
    var fila = this.parentElement.parentElement;
    fila.parentElement.removeChild(fila);
}

function editarFila(){
    var thead = document.getElementsByTagName("table")[0];
    var ths = thead.children[0].children[0].children;
    var pos;
    for(let i=0; i<ths.length-1;i++){
        if(ths[i].getAttribute("edicion")=="no"){
            pos = i;
        }
    }

    var fila = this.parentElement.parentElement;
    var contenedor = document.createElement("div");
    var td = this.parentElement;
    fila.contenedor = contenedor;
    contenedor.appendChild(td.children[0]);
    contenedor.appendChild(td.children[0]);

    var tds = fila.children;
    for(let i=0; i<tds.length-1;i++){

        if(i!=pos){
            var contenido = tds[i].innerText;
            tds[i].setAttribute("valor", contenido);
            var input = document.createElement("input");
            input.type="text";
            input.value=contenido;
            tds[i].removeChild(tds[i].childNodes[0]);
            tds[i].appendChild(input);
        }
    }

        var spanG = document.createElement("span");
        var spanC = document.createElement("span");
        spanC.innerHTML = "C";
        spanC.onclick = cancelarModificacion;
        spanG.innerHTML = "G";
        spanG.onclick = guardarModificacion;
        td.appendChild(spanC)
        td.appendChild(spanG)
}

function cancelarModificacion(){
    var thead = document.getElementsByTagName("table")[0];
    var ths = thead.children[0].children[0].children;
    var pos;
    for(let i=0; i<ths.length-1;i++){
        if(ths[i].getAttribute("edicion")=="no"){
            pos = i;
        }
    }
    var fila = this.parentElement.parentElement;
    var td = this.parentElement;
    var tds = fila.children;
    for(let i=0; i<tds.length;i++){
        if(pos!=i){
            let valor = tds[i].getAttribute("valor");
            tds[i].innerHTML= valor;
        // } else {
        //     let valor = tds[i].innerHTML;
        }
    }
    td.innerHTML = "";
    td.appendChild(fila.contenedor.children[0]);
    td.appendChild(fila.contenedor.children[0]);
}

function guardarModificacion(){
    var fila = this.parentElement.parentElement;
    var td = this.parentElement;
    var tds = fila.children;
    var respuestas = [];

    if(tds[0].children.length==1){
        respuestas.push((tds[0].children[0].value.validarDNI())?true:false);
    } else {
        respuestas.push((tds[0].innerHTML.validarDNI())?true:false);
    }

    if(tds[1].children.length==1){
        respuestas.push((tds[1].children[0].value!="")?true:false);
    } else {
        respuestas.push((tds[1].innerHTML!="")?true:false);
    }

    if(tds[2].children.length==1){
        respuestas.push((parseInt(tds[2].children[0].value)==tds[2].children[0].value)?true:false);

    } else {
        respuestas.push((parseInt(tds[2].innerHTML)==tds[2].innerHTML)?true:false);

    }
   
   
    if(respuestas.every(function(valor,indice){return valor})){
        for(let i=0; i<tds.length-1;i++){            
            if(tds[i].children.length==1){
                valor = tds[i].children[0].value;
            } else {
                valor = tds[i].innerHTML;
            }
            
            tds[i].innerHTML = valor;
        }
        td.innerHTML = "";
        td.appendChild(fila.contenedor.children[0]);
        td.appendChild(fila.contenedor.children[0]);
    }

}

function ordenarColumna(i,filaCabecera){

    filaCabecera.ordenacion=1;
    var tbody = filaCabecera.parentElement.parentElement.nextElementSibling;
    // var ths = tbody.previousElementSibling.children[0].children;

    return function(){
        var filas = tbody.children;
        var vector = [];


        for(let j=0; j<filas.length;j++){
            vector.push(filas[j]);
        }
        
        if(filaCabecera.getAttribute("tipo")=="cadena"){
            vector.sort(function(a,b){return filaCabecera.ordenacion * (a.children[i].innerText.localeCompare(b.children[i].innerText))});
        } else {
            if(filaCabecera.ordenacion == 1){
                vector.sort(function(a,b){return ((a.children[i].innerText) - (b.children[i].innerText))});
            } else {
                vector.sort(function(a,b){return ((b.children[i].innerText) - (a.children[i].innerText))});
            }
        }
            filaCabecera.ordenacion*=-1;
        


        for(let j=0; j<filas.length;j++){
            tbody.appendChild(vector[j]);
        }
    }
}
