window.addEventListener("load", function(){

    const form = document.getElementById("miForm");
    const respuesta = document.getElementById("respuesta");

    form["enviar"].onclick = function(ev){
        ev.preventDefault();
        var nombre = form["nombre"].value;
        var apellido = form["apellido"].value;

        const ajax = new XMLHttpRequest();

        ajax.onload = function(){
            respuesta.innerHTML = this.responseText;
        }

        ajax.open("GET","responder.php?nombre="+nombre+"&apellido="+apellido);
        ajax.send();
    }




})