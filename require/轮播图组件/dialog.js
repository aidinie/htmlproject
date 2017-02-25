/**
 * Created by nad on 2017/2/20.
 */
define(['jquery'],function ($) {
    function Dialog() {

    }
    Dialog.prototype.lunbo=function () {
       var $container=$('<div class="container"></div>');
       var $u1=$('<ul id="u1"></ul>');
        var $li1=$('<li class="selected">1</li>');
        var $li2=$('<li>2</li>');
        var $li3=$('<li>3</li>');
        var $li4=$('<li>4</li>');
        var $content=$('<div id="content"></div>');
        var $img1=$('<img src="img/1.jpg" alt=""  style="z-index: 1">');
        var $img2=$('<img src="img/2.jpg" alt="">');
        var $img3=$('<img src="img/3.jpg" alt="">');
        var $img4=$('<img src="img/4.jpg" alt="">');
        var $prev=$('<span id="prev">&lt;</span>');
        var $next=$('<span id="next">&gt;</span>');
        $u1.append($li1).append($li2).append($li3).append($li4);
        $content.append($img1).append($img2).append($img3).append($img4);
        $container.append($u1).append($content).append($prev).append($next);
        $(document.body).append($container);
        var index=0;
        $('#u1 li').mouseover(function () {
             index=$(this).index();
            //console.log(index);
            $(this).addClass('selected').siblings().removeClass('selected');
            // console.log()

           $($('img')[index]).show().siblings().hide();
        });
        $('#prev').click(function () {
            //console.log(index);
            index--;
            if (index==-1){
                index=3;
            }
            $($('#u1 li')[index]).addClass('selected').siblings().removeClass('selected');
            $($('img')[index]).show().siblings().hide();
        });
        $('#next').click(function () {
            //console.log(index);
            index++;
            if (index==4){
                index=0;
            }
            $($('#u1 li')[index]).addClass('selected').siblings().removeClass('selected');
            $($('img')[index]).show().siblings().hide();
        });
        function change() {
            var timer=-1;
            this.start=function () {
                //var idx=$tab.index($tab.filter('.on'));
                timer=setInterval(function () {
                    $('#next').trigger('click');
                },2000);
            };
            this.stop=function () {
                clearInterval(timer);
            }
        }
        var change1=new change();
        change1.start();
        $('.container').hover(function () {
            change1.stop();
        },function () {
            change1.start();
        })

    };
    return Dialog;
});