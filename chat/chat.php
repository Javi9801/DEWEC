<?php
include_once("BD/BD.php");

BD::conecta();
    if(isset($_POST["usuario"]) && isset($_POST["mensaje"])){

      $m = new Mensaje("DEFAULT", $_POST["usuario"], $_POST["mensaje"], "NOW()");
      BD::altaMensaje($m);
      echo "OK";
    } else {
      echo "error";
    }


?>