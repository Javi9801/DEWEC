<?php
include_once("./Clases/mensaje.php");

class BD{
    private static $con;

    public static function conecta(){
        self::$con = new PDO('mysql:host=localhost;dbname=foro', 'root', '');
    }

    public static function altaMensaje(Mensaje $m){

        $res = self::$con->prepare("Insert into Foro.mensajes(usuario,mensaje,hora) values(:usuario, :mensaje, NOW())");

        $usuario = $m->getUsuario();
        $mensaje = $m->getMensaje();

        $res->bindParam(':usuario',$usuario);
        $res->bindParam(':mensaje',$mensaje);
        $res->execute();
    }
}