<?php
include_once("./Clases/mensaje.php");

class BD{
    private static $con;

    public static function conecta(){
        self::$con = new PDO('mysql:host=localhost;dbname=foro', 'root', '');
    }

    public static function altaMensaje(Mensaje $m){

        $res = self::$con->prepare("Insert into Foro.mensajes(usuario,mensaje,hora,imagen) values(:usuario, :mensaje, NOW(), :fichero)");

        $usuario = $m->getUsuario();
        $mensaje = $m->getMensaje();
        $imagen = $m->getImagen();

        $res->bindParam(':usuario',$usuario);
        $res->bindParam(':mensaje',$mensaje);
        $res->bindParam(':fichero',$imagen);
        $res->execute();
    }

    public static function obtieneMensajes($siguiente){
        $ret = array();

    // $res = self::$con->query("SELECT * FROM Foro.mensajes WHERE id>=(SELECT id FROM foro.mensajes ORDER BY id DESC LIMIT 1)");
        $res = self::$con->query("Select * from Foro.mensajes WHERE id>='$siguiente'");
        // while($registro = $res->fetch()){
        //     $u = new mensaje($registro[0],$registro[1],$registro[2], $registro[3]);
        //     $ret[] = $u;
        // }

        // return $ret;
        return $res;
    }
}