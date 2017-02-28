/**
 * Created by apple on 17/2/20.
 */
define(['jquery'],function($){
    function Carousel(options){
        var setting = {
            buttonStyle:'square',//circle
            arrowPos:'bottom',//center
            seletor:document.body
        };
        var iNow = 0;
        $.extend(setting,options);
        var $container = $('<div class="container"></div>').hover(function(){
                stop();
            },function(){
                start();
            }),
            $tab = $('<ul class="tab"></ul>'),
            $content = $('<div class="content"></div>'),
            $arrow = $('<div class="arrow"></div>'),
            $prev = $('<span class="prev">&lt;</span>').on('click',function(){
                iNow--;
                if(iNow==-1){
                    iNow = setting.imageData.length-1;
                }
                changeImg(iNow);
            }),
            $next = $('<span class="next">&gt;</span>').on('click',function(){
                iNow++;
                if(iNow==setting.imageData.length){
                    iNow = 0;
                }
                changeImg(iNow);
            });
        for(var i=0;i<setting.imageData.length;i++){
            $tab.append('<li>'+(i+1)+'</li>');
            $content.append('<img src="'+setting.imageData[i]+'"/>');
        }
        $('li',$tab).eq(0).addClass('selected');
        $('img',$content).eq(0).addClass('selected');
        if(setting.buttonStyle=='circle'){
            $('li',$tab).html('').addClass(setting.buttonStyle);
        }
        if(setting.arrowPos=='center'){
            $arrow.addClass(setting.arrowPos);
        }
        $('li',$tab).on('mouseover',function(){
            var index = $(this).index();
            iNow = index;
            changeImg(index);
           });
        $arrow.append($prev).append($next);
        $container.append($tab).append($content).append($arrow);

        $('#con').append($container);
        function changeImg(idx){
            $('li',$tab).eq(idx).addClass('selected').siblings().removeClass('selected');
            $('img',$content).eq(idx).addClass('selected').siblings().removeClass('selected');
        }
        start();
        var timer;
        function start(){
            timer = setInterval(function(){
                $next.trigger('click');
            },1000);
        }
        function stop(){
            clearInterval(timer);
        }
    }
    return Carousel;
});