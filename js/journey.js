$(document).ready(function(){

    var picsNum = 3;
    var currentPic = 0;


    $("#wrap").animate({"height":'toggle'}, 2000);

    toggleImg(currentPic);

    var timer = setInterval(function(){
            currentPic++;
            if(currentPic >= picsNum){
                currentPic = 0;
            }
            toggleImg(currentPic);
    }, 2000);  

});

function toggleImg(index){
    $(".pics").each(function(i, obj){
            var img = $(obj).children("li").eq(index);
            img.fadeIn(1500, function(){img.fadeOut(1500)});
    });
}