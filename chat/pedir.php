<?php
include_once("BD/BD.php");

BD::conecta();
    if(isset($_POST["usuario"]) && isset($_POST["mensaje"])){
        $mensajes = array();
        $mensajes = BD::obtieneMensajes();

        foreach($mensajes as $i){
            echo $i->getUsuario().":".$i->getMensaje()."<br>";
        }
    }

