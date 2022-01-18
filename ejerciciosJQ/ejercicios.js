$(document).ready(function(){

    //ejercicio 1

    // $(".rojo").click(function(){
    //     $(this).hide();
    // });

    $("#segundo").click(function(){

        
        $("ul li:first-child").hide();
    })

    $("#tercero").click(function(){
        $("ul li:odd").css("background-color","yellow");
    })

    $("#cuarto").click(function(){
        $("ul li:last-child").insertBefore("ul li:first-child");
    })


    $("#quinto").click(function(){
        $("ul li:nth-child(odd)").each(function(ind,valor){
            $(valor).text($(valor).text().toUpperCase());
        })
    })

    $("#sexto").click(function(){
        $("ul li:eq(2)").after("<li>atun</li>");
    })

    
    // $("ul li").mouseenter(function(){
    //     $(this).animate({
    //         fontSize:"30px"
    //     });
    // })

    // $("ul li").mouseleave(function(){
    //     $(this).animate({
    //         fontSize:"16px"
    //     });
    // })

    $("ul li").on({
        click:function(ev){
            if(ev.originalEvent.shiftKey){
                $(this).insertAfter($(this).next());
            } else if (ev.originalEvent.altKey){
                mostrarModal();
            }else {
                $(this).insertBefore($(this).prev());
            }
        }
    })

});

function mostrarModal(){
    var pantalla = $("<div>").css({
        position:"fixed",
        top:0,
        left:0,
        width:"100%",
        height:"100%",
        "z-index":99,
        "background-color":"#000000",
        opacity:0.8
    });

    var caja = $("<div>").css({
        position:"relative",
        margin:"auto",
        left:"calc(50%-50px)",
        width:"200px",
        height:"100px",
        "z-index":100,
        "background-color":"#FFFFFF",
        border:"1px solid black",
        bordeRadius:"10px"

    });

    var titulo = $("<div>").css({
        position:"relative",
        width:"100%",
        height:"25px",

    }).append($("<div>").css({
        position:"absolute",
        width:"100%",
        height:"25px",
        left:0,
        top:0
    })).append($("<div>").css({
        position:"absolute",
        width:"25px",
        height:"25px",
        right:0,
        top:0
    }).append($("<span>").text("X").click(function(){
        $(this).parent().parent().parent().parent().remove();
    })));

    $("body").append(pantalla);
    pantalla.append(caja);
    caja.append(titulo);
}