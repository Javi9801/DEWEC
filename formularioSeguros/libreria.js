
function mostrar(){
    var persona = document.getElementById('persona');
    var empresa = document.getElementById('empresa');
    var todos = document.getElementById('todos');

    // evento para el input radio del "persona"
    document.getElementById('btnpersona').addEventListener('click', function(e) {
        
        persona.className = "";
        empresa.className = "oculto"
        todos.className = ""
    
    });

    // evento para el input radio de "empresa"
    document.getElementById('btnempresa').addEventListener('click', function(e) {
        
        persona.className = "oculto";
        empresa.className = "";
        todos.className = ""
    });

}

function cargarCP(){


    var boton = document.getElementById("procesar");
    var direccion = document.getElementById("direccion");
    var provincia = document.getElementById("provincia");
    var municipio = document.getElementById("municipio");
    var textA = document.getElementById("entrada");

    boton.onclick = function(){

        var contenido = textA.value.replaceAll("\"","");
        var filas = contenido.split("\n");
        var provincias = [];

        for(let i=0; i<filas.length;i++){
            let partes = filas[i].split(";");

            if(provincias[partes[0]]==undefined){
                provincias[partes[0]] = [];
            }
            provincias[partes[0]].push(partes[1]);
        }   

        for(prov in provincias){
            provincia.innerHTML += "<option value = '"+ prov +"'>" + prov + "</option>"; 
        }

        textA.className="oculto";

        provincia.onchange=function(){
            municipio.innerHTML="";
            for(let i=0; i<provincias[this.value].length;i++){
                let munic= provincias[this.value][i];
                municipio.innerHTML+= "<option value = '"+ munic +"'>" + munic + "</option>";
            }
        }
    };
};

function validar(){


    var valida = document.getElementById("validar");
    var fecha = document.getElementById("fnac");
    var fechaC = document.getElementById("fcarnet");
    var telefono = document.getElementById("telefono");

    valida.onclick = function(){
        var dniV = dni.value;
        var fechanac = fecha.value;
        var fcarnet = fechaC.value;
        var tel = telefono.value;

        var exp1 = /^[0-9]{8}[RWAGMYFPDXBNJZSQVHLCKET]$/;
        var exp2 = /^(([\/+]?)(34||0034)) ?(\d[_./ ]?){9}$/;

        if(exp1.test(dniV)==false){
            alert("DNI INCORRECTO, NO ES EL FORMATO ADECUADO");
        }

        if(dniV.validarDNI()==false){
            alert("DNI NO ES VALIDO");
        }

        if(fechanac.esFecha()==false){
            alert("FORMATO DE FECHA DE NACIMIENTO INCORRECTO");
        }

        if(edad(fechanac)<18){
            alert("ERROR, MENOR DE EDAD");
        }

        if(fcarnet.esFecha()==false){
            alert("FORMATO DE FECHA DE CARNET INCORRECTO");
        }

        if(exp2.test(tel)==false){
            alert("FORMATO DE TELEFONO INCORRECTO");
        }
    }
};

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
        alert("fecha incorrecta");
    }
    return res;
}