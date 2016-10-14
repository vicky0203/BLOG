$(document).ready(function(){

    var picsNum = 3;
    var currentPic = 0;

    toggleImg(currentPic);

    var timer = setInterval(function(){
            currentPic++;
            if(currentPic >= picsNum){
                clearInterval(timer);
                showFirst();
            }
            toggleImg(currentPic);
    }, 3000);  

});

function toggleImg(index){
    $(".pics").each(function(i, obj){
            var img = $(obj).children("li").eq(index);
            img.fadeIn(1500, function(){img.fadeOut(1500)});
    });
}

function showFirst(){
    $(".pics").each(function(i, obj){
            var img = $(obj).children("li").eq(0);
            img.fadeIn(1500);
    });
}