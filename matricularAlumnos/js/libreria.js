window.addEventListener("load",function(){
    const btnDerAll = document.getElementById("btnDerAll");
    const btnIzqAll = document.getElementById("btnIzqAll");
    const btnDer = document.getElementById("btnDer");
    const btnIzq = document.getElementById("btnIzq");
    const selectIzq = document.getElementById("alumnos");
    const selectDer = document.getElementById("seleccionados");
    const id = document.getElementById("valor");
    const nombre = document.getElementById("nombre");


    // var alumnos = JSON.parse(selectIzq.convertirJson());
    // localStorage.setItem("alumnos",alumnos);

    var alumnos = localStorage.getItem("alumnos");
    alumnos = JSON.parse(alumnos);
    if(alumnos != null){
        for(let i=0; i<alumnos.length;i++){
            var opt = document.createElement("option");
            opt.value = alumnos[i].Id;
            opt.text = alumnos[i].Nombre;
            selectIzq.appendChild(opt);
        }
    }


    btnDerAll.onclick = function(){
        selectDer.anadirTodos(selectIzq);
        selectDer.ordenar();
        selectDer.convertirJson();
    }

    btnIzqAll.onclick = function(){
        selectIzq.anadirTodos(selectDer);
        selectIzq.ordenar();
        selectIzq.convertirJson();
    }

    btnDer.onclick = function(){
        selectDer.anadirUno(selectIzq);
        selectDer.ordenar();
    }

    btnIzq.onclick = function(){
        selectIzq.anadirUno(selectDer);
        selectIzq.ordenar();
    }


    btnInsertar.onclick = function(){
        var alumnos = localStorage.getItem("alumnos");

        if(alumnos!="null"){
            alumnos = JSON.parse(alumnos);
        } else {
            alumnos = [];
        }

        alumnos.push({
            "Id":id.value,
            "Nombre":nombre.value
        });
        localStorage.setItem("alumnos",JSON.stringify(alumnos));
        window.location.reload();
    }



})