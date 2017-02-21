/**
 * Created by nad on 2017/2/19.
 */
define(['jquery'],function ($) {
   function Dialog() {

   }
   Dialog.prototype.open=function (opitions) {
        var that=this;
        var set={
            height:400,
            width:400,
            title:'标题'
        };
        $.extend(set,opitions);
        this.$container=$('<div class="container"></div>');
        var $mask=$('<div class="demo-mask"></div>').on('click',function () {
            that.close();
        });
        var $content=$('<div class="demo-content"></div>').css(
            {
                height:set.height,
                width:set.width,
                marginLeft:-set.width/2,
                marginTop:-set.height/2
            }
        );
        var $demoTitle=$('<div class="demo-title"></div>');
        var $open=$('<span class="open">'+set.title+'</span>');
        var $close=$('<span class="close">[X]</span>').on('click',function () {
            that.close();
        });
        var $main=$('<div class="demo-main"></div>').load(set.url);
        $demoTitle.append($open).append($close);
        $content.append($demoTitle).append($main);
        this.$container.append($mask).append($content);
        $(document.body).append(this.$container);
    };
   Dialog.prototype.close=function () {
           this.$container.remove();
       };
       return Dialog;

   //  return{
   //     open:function (opitions) {
   //         var that=this;
   //         var set={
   //             height:400,
   //             width:400,
   //             title:'标题'
   //         };
   //         $.extend(set,opitions);
   //         this.$container=$('<div class="container"></div>');
   //         var $mask=$('<div class="demo-mask"></div>').on('click',function () {
   //             that.close();
   //         });
   //         var $content=$('<div class="demo-content"></div>').css(
   //             {
   //                 height:set.height,
   //                 width:set.width,
   //                 marginLeft:-set.width/2,
   //                 marginTop:-set.height/2
   //             }
   //         );
   //         var $demoTitle=$('<div class="demo-title"></div>');
   //         var $open=$('<span class="open">'+set.title+'</span>');
   //         var $close=$('<span class="close">[X]</span>').on('click',function () {
   //             that.close();
   //         });
   //         var $main=$('<div class="demo-main"></div>').load(set.url);
   //         $demoTitle.append($open).append($close);
   //         $content.append($demoTitle).append($main);
   //         this.$container.append($mask).append($content);
   //         $(document.body).append(this.$container);
   //     },
   //     close:function () {
   //         this.$container.remove();
   //     }
   // }
});