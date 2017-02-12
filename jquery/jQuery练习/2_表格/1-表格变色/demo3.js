	$(function(){
		$("tbody>tr:odd").addClass("odd"); //先排除第一行,然后给奇数行添加样式
		$("tbody>tr:even").addClass("even"); //先排除第一行,然后给偶数行添加样式
		$('tbody>tr').on("click",function(){
			$(this)
				.addClass('selected')
				.siblings().removeClass('selected')
				.end()
				.find(':radio').attr('checked',true);
			
		});
		// 如果单选框默认情况下是选择的，则高色.
		 // $('table :radio:checked').parent().parent().addClass('selected');
		//简化:
		$('table :radio:checked').parents("tr").addClass('selected');
         //再简化:
		 //$('tbody>tr:has(:checked)').addClass('selected');

	})