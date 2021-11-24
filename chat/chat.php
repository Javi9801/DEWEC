<?php
include_once("BD/BD.php");


$obj = new stdClass();
BD::conecta();
    if(isset($_POST["usuario"]) && isset($_POST["mensaje"])){



      move_uploaded_file($_FILES['imagen']['tmp_name'],"./imagenes.imagen1.jpg");
      $foto = file_get_contents($_FILES['imagen']['tmp_name']);
      $foto = base64_encode($foto);


      $m = new Mensaje("DEFAULT", $_POST["usuario"], $_POST["mensaje"], "NOW()", $foto);

      BD::altaMensaje($m);
      $obj->respuesta = true;
    } else {
      $obj->respuesta = false;
    }

    echo json_encode($obj);

?>