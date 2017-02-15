$(document).ready(function(){
	
	$("li").mouseover(function(){	
		//设置当前li的背景颜色和边框
		$(this).css("background-color","#777").css("border","1px solid #777");
		//设置其他li的背景颜色和边框
		$("li").not(this).css("background-color","#aaa").css("border","1px solid white");
		//获得当前li的索引值
		var index = $('li').index(this);
		//隐藏所有的div		
		$("div").hide();
		//显示对应的div
		$("div").eq(index).show();
		
	});
});




