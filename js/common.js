/**
 * Created by Administrator on 2017/11/25 0025.
 */
/*������*/
$("#nav li").click(function () {
    var i = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
});

/*�ײ��˵� ������ѯ�Ǳ�*/
$(document).ready(function () {
    /*var n = Math.floor(Math.random()*(25-5+1)+5);*/
    var n = parseInt(Math.random()*(25-5+1)+5,10);/*�������5-200������*/
    $(".jiaobiao").text(n)
});

/*�б�ҳ���չ��*/
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

/*ר���б�*/
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

/*�ײ��˵�΢�Ű�ť*/
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

/********************����������ض���****************/
window.onload = function(){
    var obtn = document.getElementById('btn_top');  //��ȡ�ص�������ť��ID
    var clientHeight = document.documentElement.clientHeight;   //��ȡ��������ĸ߶�
    var timer = null; //����һ����ʱ��
    var isTop = true; //����һ������ֵ�������ж��Ƿ񵽴ﶥ��

    window.onscroll = function(){         //�����������¼�

        //��ȡ�������Ĺ����߶�
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;

        /* if(osTop >= clientHeight){  //��������߶ȴ��ڿ�������߶ȣ�����ʾ�ص�������ť
         obtn.style.display = 'block';
         }else{         //��������
         obtn.style.display = 'none';
         }*/

        //��Ҫ�����жϵ� ����ص�������ť�� �������ڻع������У����ֶ��������������������ʱ��
        if(!isTop){

            clearInterval(timer);
        }
        isTop = false;

    };

    obtn.onclick = function(){    //�ص�������ť����¼�
        //����һ����ʱ��
        timer = setInterval(function(){
            //��ȡ�������Ĺ����߶�
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            //���������ٶȲ����������Ч��
            var speed = Math.floor(-osTop / 8);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
            isTop =true;  //������ֹ�����¼������ʱ��
            if(osTop == 0){
                clearInterval(timer);
            }
        },30);
    }
};