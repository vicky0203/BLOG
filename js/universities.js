var boxWidth = $(".box").eq(0).outerWidth(true); /*返回元素的宽度（包括内边距、边框和外边距）*/
var gallery = $("#gallery");
var colNum = Math.floor(gallery.width() / boxWidth);
var colHeight = new Array(colNum); //sum heights for each columns

$(document).ready(function(){

 	placePics();

 	$(window).scroll(function(){  
    // 判断窗口的滚动条是否接近页面底部，这里的20可以自定义  
        if ($(document).scrollTop() + $(window).height() >= $(document).height()) {  
        	var boxNum = $(".box").length;
            for(var i = boxNum + 1; i <= Math.min(boxNum + 6, 28); i++){
            	console.log(i);
            	var newbox = document.createElement("span");
            	newbox.setAttribute("class", "box");
            	newbox.setAttribute("id", "box" + i);
            	gallery.append(newbox);
            	var newpic = document.createElement("img");
            	newpic.setAttribute("src", "images/gallery/" + i + ".jpg");
            	newbox.appendChild(newpic);
            }
        }

        placePics();
    });
}); 

function placePics(){
	$(".box").each(function(i, box){
 		var picHeight = $(box).outerHeight(true);

 		if (i < colNum) {
 			colHeight[i] = picHeight;
 		}else{
 			var currentMinHeight = Math.min.apply(this, colHeight);
 			var currentMinHeightIndex = 0; 
 			for(var i = 0; i < colHeight.length; i++){ //IE 不支持 indexOf
 				if( colHeight[i] == currentMinHeight){
 					currentMinHeightIndex = i;
 					break;
 				}
 			}

 			$(box).css({
 				"position" : "absolute",
 				"top"  : currentMinHeight,
 				"left" : $(".box").eq(currentMinHeightIndex).position().left
 			})

 			colHeight[currentMinHeightIndex] += picHeight;
 			gallery.css("height", Math.max.apply(this, colHeight));
 		}
 	});	
}