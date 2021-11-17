window.addEventListener("load",function(){
    const c = this.document.getElementById("canvas")
    var j = new juego(c);
    var p1 = new Pelota(100,70,10,"red");
    p1.arrancar();
    p1.v=5;
    p1.d=[Math.sqrt(2)/2, Math.sqrt(2)/2];
    var p2 = new Pelota(150,120,10,"yellow");
    p2.arrancar();
    p2.d = [1,0];
    p2.v=10;
    var p3 = new Pelota(300,100,20,"green");
    p3.arrancar();
    p2.v=8;



    j.addComponente(p1);
    j.addComponente(p2);
    j.addComponente(p3);

    j.empezar();









})