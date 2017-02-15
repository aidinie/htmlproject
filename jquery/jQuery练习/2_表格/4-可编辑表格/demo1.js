$(function(){
	$("tbody tr:even").css("background-color","#edf");//设置隔行变色
	var $editTd = $("td.editable");//获得我们想要编辑的单元格对象
	$editTd.click(function(){//为单元格对象注册单击事件
		var $tdObj = $(this);
		var $inputObj = $("<input type='text'/>");//创建一个文本框对象
		$inputObj.width($(this).width())//将文本框的长度设置成与td的长度一致
		.css({"border":"none", "background-color":$(this).css("background-color")});//去掉文本框的border
		if($(this).children("input[type='text']").size() > 0){//判断如果当前td中包含文本框子元素，则什么也不操作
			return false;
		}
		$inputObj.val($(this).text());//将td中的文本复制到文本框中
		$(this).empty()//清空td中的文本
		.append($inputObj);//将文本框插入到td中
		$inputObj.trigger("select")//触发文本框的选中状态
		.keyup(function(event){
			var keyCode = event.which;//获得当前按下的键盘的keyCode值
			if(keyCode == 13){//如果按下的是回车键
				$tdObj.text($(this).val());//将文本框中的值复制到td中
				//同时利用ajax将修改的值传到数据库中
				$.get("update.jsp", {username:$(this).val(), userId:$tdObj.prev().text()}, function(data){
					if(data == "fail"){
						alert("修改失败");
					}else{
						alert("修改成功");
					}
				}, "text");
			}
		});
	});
})





