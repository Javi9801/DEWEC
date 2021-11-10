window.addEventListener("load",function(){

    const enviar = this.document.getElementById("enviar");
    const form = this.document.getElementById("form1");
    var usuario = form["usuario"];
    var mensaje = form["mensaje"];

    enviar.onclick = function(ev){
        ev.preventDefault();

        if(usuario.value != "" && mensaje.value!=""){
            var texto = encodeURI("usuario="+usuario.value+"&"+
                        "mensaje="+mensaje.value);

            const ajax = new XMLHttpRequest();

            ajax.onreadystatechange= function(){
                if(ajax.readyState==4 && ajax.status==200){
                    var respuesta = ajax.responseText;
                    if(respuesta=="OK"){
                        form["mensaje"].value="";
                        form["mensaje"].focus();
                    }
                }
            }
            ajax.open("POST", "chat.php");
            ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            ajax.send(texto);
        }
    }

    // mensaje.onkeydown = function(ev){
    //     if(ev.keyCode==13){

    //     }
    // }
})