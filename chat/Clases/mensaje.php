<?php

class mensaje{
    private $usuario;
    private $mensaje;
    private $id;
    private $hora;
    private $imagen;

    public function getUsuario(){
        return $this->usuario;
    }

    public function getMensaje(){
        return $this->mensaje;
    }

    public function getImagen(){
        return $this->imagen;
    }

    public function getId(){
        return $this->id;
    }

    public function setId($id){
         $this->id = $id;
    }

    public function setHora($hora){
        $this->hora = $hora;
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

    public function __construct($id, $usuario, $mensaje, $hora, $imagen){
        $this->id = $id;
        $this->usuario = $usuario;
        $this->mensaje = $mensaje;
        $this->hora = $hora;
        $this->imagen = $imagen;

    }
}

