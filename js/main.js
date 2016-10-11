var num = $(".carousel-img").length;
var previous = 0;
var current = 0;

$(document).ready(function() {

    $(".carousel ul li").click(function(){
        var i = $(this).val();

        if(i+1 > num) return;

        fadeOut($(".carousel-img").eq(previous), 0, 30);
        fadeIn($(".carousel-img").eq(i), 100, 30);

        $(this).toggleClass("on");
        $(this).siblings().removeClass("on");

        current = i;
        previous = current;
    }); 

    var timer = setInterval("autoShowImage()", 2000);

    $(".carousel ul").hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval("autoShowImage()", 2000);
    });

});

function autoShowImage(){
    current = (current >= (num -1)) ? 0 : ++current;
    $(".carousel ul li").eq(current).trigger('click');
}

function fadeIn(obj, opacity, speed){

    opacity = opacity || 100;
    speed = speed || 20;

    obj.css("display","block");
    setOpacity(obj, 0);
    
    var num = 0;

    (function(){
        setOpacity(obj, num);
        num += 5;
        if(num <= opacity){
            setTimeout(arguments.callee, speed);  
            //arguments.callee 当前在执行的函数，递归调用
        }
    })();
}

function fadeOut(obj, opacity, speed){

    opacity = opacity || 0;
    speed = speed || 20;

    var num = 100;
    (function(){
        setOpacity(obj, num);
        num--;
        if(num >= opacity){
            setTimeout(arguments.callee, speed);
        }else{
            obj.css("display", "none");
        }
    })();

}

function setOpacity(obj, num){  //透明度值按IE规则计,即0~100
    obj.filters ? obj.css("filter", 'alpha(opacity=' + num + ')') : obj.css("opacity", num / 100);
}