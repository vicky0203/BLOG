$(function(){ 
    $(".item").mouseover(function(){
    	$(this).css({   "-webkit-transform":"translateY(0px)",
                        "-o-transform":"translateY(0px)",
                        "-moz-transform":"translateY(0px)",                    
                        "margin-right":"-30px",
                        "margin-left":"120px",
        }); 
        $(this).next().css({
                        "-webkit-transform":"perspective(400px) rotateY(20deg)",
                        "-moz-transform":"perspective(400px) rotateY(-20deg)",
                        "-o-transform":"perspective(400px) rotateY(-20deg)",
                        "margin-right":"0px"
        });              
        $(this).find(".infoc").show();
    }).mouseout(function(){
        $(this).css({   "-webkit-transform":"perspective(400px) rotateY(-20deg)",
                        "-moz-transform":"perspective(400px) rotateY(20deg)",
                        "-o-transform":"perspective(400px) rotateY(20deg)",
                        "margin-left":"0px",
                        "margin-right":"-150px",
        });
        $(this).next().css({
                        "-webkit-transform":"perspective(400px) rotateY(-20deg)",
                        "-moz-transform":"perspective(400px) rotateY(20deg)",
                        "-o-transform":"perspective(400px) rotateY(20deg)",
                        "margin-right":"-150px"

        });
        $(this).find(".infoc").hide();
    });


    //menu
    $(".menuicon").mouseover(function(){
         // $(".menubar").fadeIn(1000);
          $(".menubar").animate({"height":'toggle'},"1");
     });
     $(".closeicon").click(function(){
         $(".menubar").animate({"height":'toggle'},"1");
     });
})