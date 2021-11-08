window.addEventListener("load",function(){

    var btnpersona = document.getElementById("btnpersona");
    var btnempresa = document.getElementById("btnempresa");
    var dni = document.getElementById("dni");
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var direccion = document.getElementById("direccion");
    var CP = document.getElementById("CP");
    var fecha = document.getElementById("fnac");
    var fechaC = document.getElementById("fcarnet");
    var telefono = document.getElementById("telefono");

    mostrar();
    cargarCP();
    validar(dni,fecha,fechaC,telefono);

});





