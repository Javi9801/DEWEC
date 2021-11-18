window.addEventListener("load",function(){

    const enviar = this.document.getElementById("enviar");
    const form = this.document.getElementById("form1");
    var usuario = form["usuario"];
    var mensaje = form["mensaje"];
    var fichero = form["imagen"];
    var contenedorMensajes = this.document.getElementById("contenedorMensajes");
    var ultimo=0;
    var tmp1 = setInterval(pedirMensajes,5000);

    // pedirMensajes();



    enviar.onclick = function(ev){
        ev.preventDefault();

        if(usuario.value != "" && mensaje.value!=""){

             //     var texto = encodeURI("usuario="+usuario.value+"&"+
        //                 "mensaje="+mensaje.value);

        //     const ajax = new XMLHttpRequest();

        //     ajax.onreadystatechange= function(){
        //         if(ajax.readyState==4 && ajax.status==200){
        //             var respuesta = ajax.responseText;
        //             if(respuesta=="OK"){
        //                 form["mensaje"].value="";
        //                 form["mensaje"].focus();
        //             }
        //         }
        //     }

        //     var formData = new FormData();
        //     formData.append("usuario",usuario.value);
        //     formData.append("mensaje",mensaje.value);
        //     formData.append("imagen",fichero.value);

        //     if(fichero.files.length>0){
        //         formData.append("imagen",fichero.files[0]);
        //     }

        //     ajax.open("POST", "chat.php");
        //     // ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //     ajax.send(formData);

            var formData = new FormData();
            formData.append("usuario",usuario.value);
            formData.append("mensaje",mensaje.value);
            formData.append("imagen",fichero.value);

            if(fichero.files.length>0){
                formData.append("imagen",fichero.files[0]);
            }

            fetch("chat.php",{
                method:"POST",
                body:formData
            })
                .then(response => respose.JSON())
                .catch(error=>console.log("Error", error))
                .then(response => {
                    if(response.respuesta){
                        form["mensaje"].value="";
                        form["mensaje"].focus();
                    }
                })
        }
    }





    function pedirMensajes(){


        // var texto = encodeURI("usuario="+usuario.value+"&"+
        //                 "mensaje="+mensaje.value);
        const ajax = new XMLHttpRequest();
        ajax.onreadystatechange= function(){
            if(ajax.readyState==4 && ajax.status==200){

                var respuesta = JSON.parse(ajax.responseText);
                if(respuesta.mensaje.length>0){
                    for(let i=0; i<respuesta.mensaje.length;i++){
                        var div = creaContenido(respuesta.mensaje[i],usuario.value);
                        contenedorMensajes.appendChild(div);
                        var br = document.createElement("br");
                        contenedorMensajes.appendChild(br);

                        contenedorMensajes.scrollTop = contenedorMensajes.scrollHeight;
                    }
                }
                ultimo = respuesta.ultimo;
            }
        }

        ajax.open("GET", "pedir.php?ultimo="+ultimo);
        ajax.send();
    }

    function creaContenido(mensaje,usuario){
        var claseUsuario = (mensaje.usuario==usuario)?"propio":"otros";

        const div1 = document.createElement("div");
        div1.className=claseUsuario;
        const div2 = document.createElement("div");
        div2.className="usuario";
        div2.innerHTML = mensaje.usuario;

        const div3 = document.createElement("div");
        div3.className="hora";
        div3.innerHTML = mensaje.hora;

        const div4 = document.createElement("div");
        div4.className="mensaje";
        div4.innerHTML = mensaje.mensaje;

        div1.appendChild(div2);
        div1.appendChild(div3);
        div1.appendChild(div4);

        return div1;

    }
})