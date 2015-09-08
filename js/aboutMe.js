$(function(){
    $(".title").click(function(){
        // console.log(this);
        var activetitle = $(this);
        if(activetitle.hasClass("active")){
            console.log("aaa");
             activetitle.next().fadeOut("1000");
             activetitle.children("span").text("+");
             activetitle.children("i").css("background-position","0 -45px");
             activetitle.removeClass("active");
        }else{
             activetitle.addClass("active");
             activetitle.next().fadeIn("1000");
             activetitle.children("span").text("-");
             activetitle.children("i").css("background-position","0 0");
        }
    });

    //menu
    $(".menuicon").mouseover(function(){
        // $(".menubar").fadeIn(1000);
         $(".menubar").animate({"height":'toggle'},"1");
    });
    $(".closeicon").click(function(){
        $(".menubar").animate({"height":'toggle'},"1");
    });
});