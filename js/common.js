/**
 * Created by Administrator on 2017/11/25 0025.
 */
/*导航栏*/
$("#nav li").click(function () {
    var i = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
});

/*底部菜单 在线咨询角标*/
$(document).ready(function () {
    /*var n = Math.floor(Math.random()*(25-5+1)+5);*/
    var n = parseInt(Math.random()*(25-5+1)+5,10);/*随机生成5-200的整数*/
    $(".jiaobiao").text(n)
});

/*列表页点击展开*/
var listLength = $(".list-con li").length;
if(listLength<3){
    $("#listMore").hide();
}else{
    $("#listMore").show();
}
$("#listMore").click(function () {
    $(".text").hide();
    $(".more-ico").hide();
    $(".spinner").show();
    setTimeout(function () {
        $(".list .con .list-con li").show();
        $("#listMore").hide();
    },650);
});

/*专家列表*/
var zj_listLength = $(".zj_list-con li").length;
if(zj_listLength<3){
    $("#zj_listMore").hide();
}else{
    $("#zj_listMore").show();
}
$("#zj_listMore").click(function () {
    $(".text").hide();
    $(".more-ico").hide();
    $(".spinner").show();
    setTimeout(function () {
        $(".zj_list-con li").show();
        $("#zj_listMore").hide();
    },+650);
});

/*底部菜单微信按钮*/
$("#wechat").click(function(){
    $(".wechat").slideDown(500);
    $(".code").slideDown(500);
});
$(".wechat").click(function(){
    /*$(".wechat").slideUp(500);
    $(".code").slideUp(500);*/
    $(".wechat").slideUp(500);
    $(".code").slideUp(500);
});

/********************点击缓慢返回顶部****************/
window.onload = function(){
    var obtn = document.getElementById('btn_top');  //获取回到顶部按钮的ID
    var clientHeight = document.documentElement.clientHeight;   //获取可视区域的高度
    var timer = null; //定义一个定时器
    var isTop = true; //定义一个布尔值，用于判断是否到达顶部

    window.onscroll = function(){         //滚动条滚动事件

        //获取滚动条的滚动高度
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;

        /* if(osTop >= clientHeight){  //如果滚动高度大于可视区域高度，则显示回到顶部按钮
         obtn.style.display = 'block';
         }else{         //否则隐藏
         obtn.style.display = 'none';
         }*/

        //主要用于判断当 点击回到顶部按钮后 滚动条在回滚过程中，若手动滚动滚动条，则清除定时器
        if(!isTop){

            clearInterval(timer);
        }
        isTop = false;

    };

    obtn.onclick = function(){    //回到顶部按钮点击事件
        //设置一个定时器
        timer = setInterval(function(){
            //获取滚动条的滚动高度
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            //用于设置速度差，产生缓动的效果
            var speed = Math.floor(-osTop / 8);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
            isTop =true;  //用于阻止滚动事件清除定时器
            if(osTop == 0){
                clearInterval(timer);
            }
        },30);
    }
};