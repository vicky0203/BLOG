$( window ).on( "load", function(){
	 
    //menu
    $(".menuicon").mouseover(function(){
         // $(".menubar").fadeIn(1000);
          $(".menubar").animate({"height":'toggle'},"1");
     });
     $(".closeicon").click(function(){
         $(".menubar").animate({"height":'toggle'},"1");
     });

    // var leftboxs = $(".left .box");
    // var rightboxs = $(".right .box");
    // var timer1 = setInterval(function(){
         
    // }, 1500);
    

    $("#wrap").animate({"height":'toggle'},"2");


	//picsplay
	var contents = $(".content");
	var pics = $(".pics");
	var linum = $(".pics li").length / contents.length;
	var movelength = 550; //250;
	//var movelength = $(".box").eq(0).height();
	//console.log(linum);
	// console.log(num1 + "aaaa"+ num2 + "bbb" + num3);
	// console.log(pics);
    
	var index = 0;
    var timer2 = null;
	timer = setInterval(function(){
        index++;
        if(index >= linum){
        	index=0;
        }
        for(var i=0;i<pics.length;i++){
        	// pics.eq(i).animate({marginTop:-index*movelength + "px"},1500);
            pics.eq(i).animate({marginLeft:-index*movelength + "px"},1500);
        }
	},3000);

});