$(window).on("load",function(){
    
    menu();
    
    setWaterFall();	// initial page				 
    
    $(".morepics").click(function(){
        $.ajax({
            type:"GET",
            url: "./js/cuhk.json",
            // data: picNum, used to get fixed number pics from one date file    var picNum = 5;
            dataType:"json",
            cache: false, 
            error:function(XMLHttpRequest){
                  alert(XMLHttpRequest.status);
            },
            success: dealpics
        });
    });
   
});

function dealpics(data){
    var json = eval(data);
    var data = "";
    $.getJSON("./js/cuhk.json",function(data){
        $.each(json.imgsdatatest, function(index, item){
            // console.log(index + "aaaa" + item.src);
            var newBox = $('<div>').addClass('box').appendTo( $('.picwaterfall') );
            var newPic = $('<div>').addClass('pic').appendTo(newBox);
            $('<img>').attr('src','images/' + $(item).attr('src') ).appendTo(newPic);
        });
        setWaterFall();
    }); 
}




function menu(){
    $(".menuicon").mouseover(function(){
         // $(".menubar").fadeIn(1000);
          $(".menubar").animate({"height":'toggle'},"1");
     });
     $(".closeicon").click(function(){
         $(".menubar").animate({"height":'toggle'},"1");
     });
}


function setWaterFall(){
    var divs = $(".box");
    var picwidth = divs.eq(0).outerWidth(true); /*返回元素的宽度（包括内边距、边框和外边距）*/
    // console.log(divs.eq(0).outerHeight(true) + "ddd" + divs.eq(0).height()); 
    var colNum = Math.floor( $(".picwrap").width()/picwidth );
      //console.log(colNum);

    var pinHArr = [];//sum heights for each columns 

    divs.each(function(index,value){
       var pinH = divs.eq(index).outerHeight(true);
       if(index < colNum) { // initial pinHArr
       	  pinHArr[index] = pinH;  
       }else{
          var minH = Math.min.apply(null,pinHArr);
          var minHIndex = $.inArray(minH,pinHArr);
          // console.log(minH+"aaa"+minHIndex);
          $(value).css({
          	 "position":"absolute",
          	 "top":minH,
          	 "left": divs.eq(minHIndex).position().left,
          });
          pinHArr[ minHIndex ] += divs.eq( index ).outerHeight(true);
          $(".picwrap").height += minH;//increase the screen height and sroll the screen
       }
    });
}