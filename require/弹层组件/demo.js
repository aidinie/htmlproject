/**
 * Created by nad on 2017/2/19.
 */
require(['jquery','dialog'],function ($,Dialog) {
     var arr=[];
    $('#btn').click(function (e) {
        var dialog=new Dialog();
         arr.push(dialog);
        dialog.open(
            {
                height:500,
                title:'登录',
                url:'login.html'
            }
        );

    });
    $('#btn2').click(function () {
        if (arr.length>0){
            arr.pop().close();
        }


    });
    // $('.close').click(function () {
    //     Dialog.close();
    // })
    // $('#btn2').click(function () {
    //     dialog.close();
    // });
});