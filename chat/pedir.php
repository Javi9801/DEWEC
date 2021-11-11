<?php
include_once("BD/BD.php");

BD::conecta();

    if(isset($_GET['ultimo'])){
        $siguiente = $_GET["ultimo"]+1;
    } else {
        $siguiente=1;
    }

    $mensajes = array();
    $mensajes = BD::obtieneMensajes($siguiente);


    $object = new stdClass();
    $object->mensaje = [];
    $ultimo = $siguiente-1;

    while($i = $mensajes->fetch()){
        $objectMensaje = new stdClass();
        $objectMensaje->id = $i[0];
        $objectMensaje->usuario = $i[1];
        $objectMensaje->mensaje = $i[2];
        $objectMensaje->hora = $i[3];

        $object->mensaje[] =$objectMensaje;
        $ultimo = $i[0];
    }

    $object->ultimo = $ultimo;

    echo json_encode($object);


