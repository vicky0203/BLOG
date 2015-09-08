$(window).on("load",function(){
    
    menu();
    
    var imgsdata = {'data':[ {'src':'18.jpg'},{'src':'19.jpg'},{'src':'20.jpg'},
							 {'src':'21.jpg'},{'src':'22.jpg'},{'src':'23.jpg'},
							 {'src':'24.jpg'},{'src':'25.jpg'},{'src':'26.jpg'},
							 {'src':'27.jpg'},{'src':'28.jpg'}] };	//json get from remote server

/*      $.ajax({
        url:"./js/cuhk.json",
        type:"GET",
        success:function(data,status){
            $.each(data.imgsdata, function(index, item){
            console.log(index + "aaaa" + item.src);
          });
        }
      });*/
    $.getJSON("./js/cuhk.json",function(data){
          $.each(data.imgsdatatest, function(index, item){
            console.log(index + "aaaa" + item.src);
          });
    });


    setWaterFall();	// initial page				 

    $(".morepics").click(function(){  //load more pictures icon control
    	 $.each(imgsdata.data,function(index,value){
        console.log(index);
          var newBox = $('<div>').addClass('box').appendTo( $('#picwaterfall') );
    		  var newPic = $('<div>').addClass('pic').appendTo(newBox);
    		  $('<img>').attr('src','images/' + $(value).attr('src') ).appendTo(newPic);  
    	 });
    	 setWaterFall();
    });    
})

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
	var picwidth = divs.eq(0).outerWidth(true);
	// console.log(divs.eq(0).outerHeight(true) + "ddd" + divs.eq(0).height()); 
	var colNum = Math.floor( $("#picwrap").width()/picwidth );
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
       }
    });
}