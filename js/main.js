$(function() {
    var list = $("#list li");
    var index = 0; // begin with 0, end with 4
    var timer = null;

    //console.log(winh);
    autoplay();

    $("#wrap").mouseover(function(){// 鼠标划过整个容器时停止自动播放
        clearInterval(timer);
    });
        
    $("#wrap").mouseout(function(){// 鼠标划过整个容器时停止自动播放 
        autoplay();
    });

    
    for(var j=0;j<list.length;j++){
        list[j].id=j;
        //console.log(list[j].getElementsByTagName("a")[0] + "BBB" + list[j].id);
        //var a  = list[j].getElementsByTagName("a")[0];
        list[j].onclick = function(){
            console.log(this);
             change(this.id); 
        }
    }


    function autoplay(){
    	timer = setInterval(function() {
    		index++;
            console.log("aaaa" + index);
            if(index>=list.length){
               index=0;
            }
            change(index);
        }, 3000);    
    }
    /*    		if(index<list.length){ // why it still run this part after the index is equalt to list.length ??
    			index++;
    			console.log("aaa"+index);
    			change(index);
    			console.log("ccc"+index);
    		}else if(index==list.length){
    			index = 0;
    			console.log("bbb"+ index);
    			change(index);
    			clearInterval(timer);
    		}
    	}, 1500);
        console.log("ddd"+index);*/

    function change(currentIndex){
        var winh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    	$("#pic").animate({marginTop: -winh*currentIndex + "px"},1500);      
        for(var i=0;i<list.length;i++){
        	list[i].className=" ";
        }
        list[currentIndex].className = "liston";
        console.log(currentIndex);
        index=currentIndex;
    }   

});