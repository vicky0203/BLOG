$(document).ready(function(){
    $(".chapter .title").click(function(){
        var activetitle = $(this);

        if(activetitle.hasClass("active")){
             activetitle.nextAll().fadeOut("1000");
             activetitle.children(".hide-info-icon").toggle();
             activetitle.children(".show-info-icon").toggle();
             activetitle.children(".title-icon").css("background-position","0 -45px");
             activetitle.removeClass("active");
        }else{
             activetitle.addClass("active");
             activetitle.nextAll().fadeIn("1000");
             activetitle.children(".hide-info-icon").toggle();
             activetitle.children(".show-info-icon").toggle();
             activetitle.children(".title-icon").css("background-position","0 0");
        }
    }); 
});