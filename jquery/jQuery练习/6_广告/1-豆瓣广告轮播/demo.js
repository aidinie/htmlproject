$(function(){

	//轮播
	var $tabs = $(".cate-mod div.list li");	
	function Carousel(){
		var _timer = -1;
		this.start = function(){
			var idx = $tabs.index($tabs.filter(".on"));//得到导航列表已选中列表的索引
			_timer = setInterval(function(){
				if(idx == $tabs.length) idx = 0;
				$($tabs[idx++]).trigger("click");
				//idx++;
			}, 2000);
		};
		this.pause = function(){
			clearInterval(_timer);
		}
	}
	
	var carousel = new Carousel();
	carousel.start();
	$tabs.add(".content .item").hover(function(){
		carousel.pause();	
	},function(){
		carousel.start();
	});
	
	//点击导航列表事件
	$(".cate-mod div.list li").click(function(){
		var $li = $(this);//将当前列表对象保存起来，供下面的匿名函数调用
		setTimeout(function(){//使用setTimeout函数是为了延时一段时间，达到缓冲效果
			var idx = $li.index();//得到当前点击的列表的索引值
			$li.addClass("on").siblings().removeClass("on");//为当前点击的列表添加选中样式，并移除其兄弟切点样式	
			$($(".content .item")[idx]).show()//显示对应当前列表索引的item
			.siblings().hide();
		}, 600);	
	});
});