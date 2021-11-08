HTMLSelectElement.prototype.anadirTodos = function(select){
    while(select.children.length>0){
        this.appendChild(select.children[0]);
    }
}

HTMLSelectElement.prototype.anadirUno = function(select){

    var tamano = select.children.length;

    for(let i=tamano-1; i>=0;i--){
        if(select.children[i].selected){
            select.children[i].selected="";
            this.appendChild(select.children[i]);
        }
    }
}

HTMLSelectElement.prototype.ordenar = function(){

    var tamano = this.children.length;
    var vector = Array.from(this.children);
    vector.sort(function(a,b){return (a.innerText.localeCompare(b.innerText))});

    for(let i=0; i<tamano;i++){
        this.appendChild(vector[i]);
    }


}

HTMLSelectElement.prototype.convertirJson = function(){
    var v = [];
    for (var i = 0; i < this.options.length; i++) {
         v.push({
             Id:this.options[i].value,
             Nombre:this.options[i].innerHTML
            });
    }

    json = JSON.stringify(v);
}