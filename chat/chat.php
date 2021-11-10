<?php
include_once("BD/BD.php");

BD::conecta();
    if(isset($_POST["usuario"]) && isset($_POST["mensaje"])){

      $m = new Mensaje($_POST["usuario"], $_POST["mensaje"]);
      BD::altaMensaje($m);
      echo "OK";
    } else {
      echo "error";
    }


?>