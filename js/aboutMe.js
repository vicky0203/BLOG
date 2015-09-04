$(function(){
    $(".title").click(function(){
       console.log(this);
       $(this).next().toggle();
    });
});