

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


function pasa_a_Dias(fecha1){
    res = 0;
    var años = 0;
    años = edad(fecha1);
    res = años * 365;
    

    return res;
}

function pasa_a_Horas(fecha1){
    res = 0;
    var dias = 0;
    dias = pasa_a_Dias(fecha1);
    res = dias * 24;
    

    return res;
}

function restaFechas(a, b){
    var fecha, fecha1, x,y;
    var res=0;
    if(a.esFecha() && b.esFecha()){
        fecha = new Date(a);
        fecha1 = new Date(b);

        x = fecha.getTime();
        y = fecha1.getTime();

        if(x>y){
            res = x-y;
        } else{
            res = y-x;
        }

        var fechaF = new Date(res);

        return pasa_a_Dias(fechaF);

    }
}