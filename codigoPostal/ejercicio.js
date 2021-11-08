window.addEventListener("load",function(){
    var boton = document.getElementById("procesar");
    var direccion = document.getElementById("direccion");
    var provincia = document.getElementById("provincia");
    var municipio = document.getElementById("municipio");
    var textA = document.getElementById("entrada");
        
    
    boton.onclick = function(){
        var contenido = textA.value.replaceAll("\"","");
        var filas = contenido.split("\n");
        var provincias = [];

        for(let i=0; i<filas.length;i++){
            let partes = filas[i].split(";");

            if(provincias[partes[0]]==undefined){
                provincias[partes[0]] = [];
            }
            provincias[partes[0]].push(partes[1]);
        }   

        for(prov in provincias){
            provincia.innerHTML += "<option value = '"+ prov +"'>" + prov + "</option>"; 
        }

        provincia.onchange=function(){
            municipio.innerHTML="";
            for(let i=0; i<provincias[this.value].length;i++){
                let munic= provincias[this.value][i];
                municipio.innerHTML+= "<option value = '"+ munic +"'>" + munic + "</option>";
            }
        }
    };
})