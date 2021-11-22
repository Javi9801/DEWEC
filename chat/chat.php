<?php
include_once("BD/BD.php");

$obj = new stdClass();
BD::conecta();
    if(isset($_POST["usuario"]) && isset($_POST["mensaje"]) && isset($_POST["imagen"])){

      $m = new Mensaje("DEFAULT", $_POST["usuario"], $_POST["mensaje"], "NOW()", $_POST["imagen"],);
      BD::altaMensaje($m);
      $obj->respuesta = true;
    } else {
      $obj->respuesta = false;
    }

    echo json_encode($obj);

?>