window.addEventListener("load", function(){
    var imagen = document.getElementById("imagenPrincipal");
    var ancho = parseInt(imagen.width/4);
    var alto = parseInt(imagen.height/4);

    var tbody = this.document.getElementsByTagName("tbody")[0];
    var coleccion = this.document.getElementsByTagName("td");
    var trs = tbody.children;

    var vector = [];
    var hueco = [3,3];



    for(let i=0; i<trs.length;i++){
        var tds = trs[i].children;
        for(let j=0; j<tds.length;j++){

            if(trs[i]!=trs.length && tds[j]!=tds.length){
                var div = this.document.createElement("div");
                vector.push(div);
                div.style.position = "relative";
                div.style.height = alto+ "px";
                div.style.width = ancho + "px";
                div.style.backgroundImage = "url('./img/imagen.png')";
                div.setAttribute("id", i+"-"+j);
                div.setAttribute("posX",i);
                div.setAttribute("posY",j);

                if(i!=0){
                    div.style.backgroundPositionX = j*(-ancho)+"px";
                    div.style.backgroundPositionY = i*(-alto)+"px";
                } else {
                    div.style.backgroundPositionX = j*(-ancho)+"px";
                }
            }


            //  tds[j].appendChild(div);

            div.onclick = function(){
                a = this.parentElement.cellIndex;
                b = this.parentElement.parentElement.rowIndex;

                var h=document.querySelectorAll("td:empty")[0];

                if(compruebaDistancia(a,b,h.cellIndex,h.parentElement.rowIndex)){
                    h.appendChild(this);

                    debugger;
                    if(compruebaPosiciones()){
                        fin();
                    }
                     // var divBlanco = document.getElementById(xBlanco+"-"+yBlanco);
                    // this.style.backgroundImage="";

                    // divBlanco.style.backgroundImage = "url('./img/imagen.png')";
                    // divBlanco.style.backgroundPositionX = this.getAttribute("posY")*(-ancho)+"px";
                    // divBlanco.style.backgroundPositionY = this.getAttribute("posX")*(-alto)+"px";

                    // divBlanco.setAttribute("posX", this.getAttribute("posX"));
                    // divBlanco.setAttribute("posY", this.getAttribute("posY"));

                    // this.setAttribute("posX",xBlanco);
                    // this.setAttribute("posY",yBlanco);

                    // xBlanco = i;
                    // yBlanco = j;


                }
            }
        }
    }



    vector.sort(function(a,b){return Math.random()-0.5;})


    for(let i = 0; i<coleccion.length-1;i++){
        coleccion[i].appendChild(vector[i]);
        var div = coleccion[i].children[0];

    }



    var tabla = document.getElementById("tablaImagen");

    imagen.ondblclick = function(){
        imagen.setAttribute("class", "oculto");
        tabla.setAttribute("class", "");

    }

    function compruebaDistancia(a,b,c,d){
        if((Math.pow(a-c,2) +  Math.pow(b-d,2)) == 1){
            return true;
        }

        return false;
    }

    function compruebaPosiciones(){
        for(let i=0; i<trs.length;i++){
            var tds = trs[i].children;
            for(let j=0; j<tds.length;j++){
                if(tds[j].children.length!=0){
                    if(parseInt(tds[j].children[0].getAttribute("posX")) != i || parseInt(tds[j].children[0].getAttribute("posY")) != j){
                        return false;
                    }
                }
            }
        }
        return true;

    }

    function fin(){
        imagen.setAttribute("class", "");
        tabla.setAttribute("class", "oculto");
    }



})


