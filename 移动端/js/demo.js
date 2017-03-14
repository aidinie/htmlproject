/**
 * Created by nad on 2017/2/23.
 */
$(function () {
    var iNow=0;
   for(var i=0;i<24;i++){
       $('#container').append('<li><img src="img/'+(i+1)+'.jpg" alt=""></li>')
   }
   console.log($(document.body).width());
   var liWidth=($(document.body).width()-2*3)/4;
    console.log(liWidth);
    $('li').css({
        width:liWidth,
        height:liWidth,
    }).on('tap',function (e) {
        var index=$(this).index();
        iNow=index;
        console.log(index);
        $('#container').hide();
        $('#img-show').show().css(
            {
                background:'url(img/'+(index+1)+'.jpg) no-repeat center',
                backgroundSize:'contain'
            }
        );
        e.preventDefault();
    });
    $('#img-show').on('tap',function (e) {
        $('#container').show();
        $(this).hide();
        e.preventDefault();
    }).on('swiperight',function () {
        iNow--;
        if(iNow<=-1){
            return;
        }
        $('#img-show').css(
            {
                background:'url(img/'+(iNow+1)+'.jpg) no-repeat center',
                backgroundSize:'contain'
            })
    }).on('swipeleft',function () {
        iNow++;
        console.log(iNow);
        if(iNow>=24){
            return;
        }
        $('#img-show').css(
            {
                background:'url(img/'+(iNow+1)+'.jpg) no-repeat center',
                backgroundSize:'contain'
            })
    })
});