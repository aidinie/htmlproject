$(function(){
	$('tr.parent').click(function(){   // 获取所谓的父行
			$(this)
				.toggleClass("selected")   // 添加/删除高亮
				.siblings('.child_'+this.id).toggle();  // 隐藏/显示所谓的子行
	});
})