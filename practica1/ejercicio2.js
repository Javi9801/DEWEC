/* Objeto javascript para alumno
    nombre
    apellido1
    apellido2
    fechaNacimiento
    dni
    curso

metodos
    nombreCompleto
    edad
    letraDNI
    validarDNI
*/

function Alumno(nombre, apellido1, apellido2, fechaNacimiento, dni, curso){

    this.nombre = nombre,
    this.apellido1 = apellido1,
    this.apellido2 = apellido2,
    this.fechaNacimiento = fechaNacimiento,
    this.dni = dni,
    this.curso = curso

    
};

Alumno.prototype.nombreCompleto = function(){
    return this.nombre + " " + this.apellido1 + " " + this.apellido2;
}

Alumno.prototype.edad = function(){
    return parseInt(2021 - this.fechaNacimiento.substr(-4));
};

Alumno.prototype.letraDNI = function(){
    return this.dni.substr(-1);
};

Alumno.prototype.validarDNI = function(){
    numero = this.dni.substr(0,this.dni.length-1);
    letra='TRWAGMYFPDXBNJZSQVHLCKET';
    return letra[numero % 23]==this.letraDNI();

};

Alumno.prototype.toString = function(){
    return this.nombreCompleto();
}

Alumno.prototype.escribir = function(){
    var nombre = this.nombreCompleto();
    var dia = this.fechaNacimiento;
    var dni = this.dni;
    var curso = this.curso;

    var texto = `Hola mi nombre es ${nombre} naci el dia ${dia}, mi
                mi dni es ${dni} y mi curso es ${curso}`;

    return texto;
}
function datosAlumno(){
    var nombre = document.getElementById("nombreF").value;
    var apellido1 = document.getElementById("apellido1F").value;
    var apellido2 = document.getElementById("apellido2F").value;
    var fechaNacimiento = document.getElementById("fechaF").value;
    var dni = document.getElementById("dniF").value;
    var curso = document.getElementById("cursoF").value;


    const alumno = new Alumno(nombre,apellido1,apellido2,fechaNacimiento,dni,curso);
    
    document.getElementById("nombre").innerHTML = alumno.nombreCompleto();

    document.getElementById("fechaNacimiento").innerHTML = alumno.fechaNacimiento;
    document.getElementById("dni").innerHTML = alumno.dni;

    if(alumno.validarDNI()){
        document.getElementById("dni").style.color="green";
    } else {
        document.getElementById("dni").style.color="red";
    }
    
    document.getElementById("curso").innerHTML = alumno.curso;
}

window.addEventListener("load", function(){
    var boton = this.document.getElementById("btnEnviar");
    boton.addEventListener("click",function(ev){
        ev.preventDefault();
        datosAlumno();
    });
});

