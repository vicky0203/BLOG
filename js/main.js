var num = $(".carousel-img").length;
var previous = 0;
var current = 0;

$(document).ready(function() {

    //imgs carousel
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

    //map
    var map = new BMap.Map("journey-map");          // 创建地图实例  
    var point = new BMap.Point(109.111,32.642);  // 创建点坐标  
    map.centerAndZoom(point, 5);                 // 初始化地图，设置中心点坐标和地图级别  
    var opts = {type: BMAP_NAVIGATION_CONTROL_ZOOM};  
    map.addControl(new BMap.NavigationControl(opts));
  
    var home = new BMap.Point(117.198227,39.099922)
    var markerHome = new BMap.Marker(home);  // 创建标注
    map.addOverlay(markerHome);               // 将标注添加到地图中
    markerHome.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

    var hk = new BMap.Point(114.144276,22.287457);
    var markerHK = new BMap.Marker(hk);  // 创建标注
    map.addOverlay(markerHK);               // 将标注添加到地图中

    var tw = new BMap.Point(120.98807,23.514679);
    var markerTW = new BMap.Marker(tw);  // 创建标注
    map.addOverlay(markerTW);               // 将标注添加到地图中

    var cd = new BMap.Point(104.032887,30.665732);
    var markerCD = new BMap.Marker(cd);  // 创建标注
    map.addOverlay(markerCD);               // 将标注添加到地图中

    var jzg = new BMap.Point(103.918846,33.164503);
    var markerJZG = new BMap.Marker(jzg);  // 创建标注
    map.addOverlay(markerJZG);               // 将标注添加到地图中

    var curve1 = new BMapLib.CurveLine([home, hk], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.5}); //创建弧线对象
    map.addOverlay(curve1); //添加到地图中

    var curve2 = new BMapLib.CurveLine([hk, tw], {strokeColor:"green", strokeWeight:3, strokeOpacity:0.5}); //创建弧线对象
    map.addOverlay(curve2); //添加到地图中

    var curve3 = new BMapLib.CurveLine([home, cd], {strokeColor:"green", strokeWeight:3, strokeOpacity:0.5}); //创建弧线对象
    map.addOverlay(curve3); //添加到地图中

    var curve4 = new BMapLib.CurveLine([cd, jzg], {strokeColor:"green", strokeWeight:3, strokeOpacity:0.5}); //创建弧线对象
    map.addOverlay(curve4); //添加到地图中

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