$(document).ready(function(){
	$(".main > a").toggle(function(){//toggle函数的一般会有两个参数，分别代表一种状态，两个参数就是两个状态，他们之间会互相切换
		$(this).next("ul").slideDown("slow");
		$(this).css("background-image","url('images/up.gif')");
	},function(){
		$(this).next("ul").slideUp("slow");
		$(this).css("background-image","url('images/down.gif')");
	});
	
	$(".hmain").hover(function(){//hover函数与toggle类似，唯一的区别是一是点击事件，一个是鼠标滑过事件
    	$(this).children("ul").slideDown("slow");
    	$(this).children("a").css("background-image","url('images/up.gif')");
    },function(){
    	$(this).children("ul").slideUp("slow");
    	$(this).children("a").css("background-image","url('images/down.gif')");
    });
});


