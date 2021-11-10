<?php

class mensaje{
    private $usuario;
    private $mensaje;
    private $id;
    private $hora;


    public function getUsuario(){
        return $this->usuario;
    }

    public function getMensaje(){
        return $this->mensaje;
    }

    public function getId(){
        return $this->id;
    }

    public function getHora(){
        return $this->hora;
    }


    // public function __get($atributo){
    //     if(property_exists($this, $atributo)){
    //         return $this->$atributo;
    //     }
    // }

    // public function __set($atributo, $valor){
    //     if(property_exists($this, $atributo)){
    //         $this->$atributo = $valor;
    //     }
    // }

    public function __construct($usuario, $mensaje){
        $this->usuario = $usuario;
        $this->mensaje = $mensaje;

    }
}

