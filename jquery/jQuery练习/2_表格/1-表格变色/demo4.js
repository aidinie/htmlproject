	$(function(){
		$("tbody>tr:odd").addClass("odd"); //先排除第一行,然后给奇数行添加样式
		$("tbody>tr:even").addClass("even"); //先排除第一行,然后给偶数行添加样式
		$('tbody>tr').click(function() {
			//方法一
			if ($(this).hasClass('selected')) {
				$(this)
					.removeClass('selected')
					.find(':checkbox').attr('checked',false);
			}else{
				$(this)
					.addClass('selected')
					.find(':checkbox').attr('checked',true);
			}
			
			//方法二：
			// var hasSelected=$(this).hasClass('selected');//判断当前是否选中
			// //如果选中，则移出selected类，否则就加上selected类
			// $(this)[hasSelected?"removeClass":"addClass"]('selected')
			// 	//查找内部的checkbox,设置对应的属性。
			// 	.find(':checkbox').attr('checked',!hasSelected);

		});
		// 如果复选框默认情况下是选择的，则高色.
		// $('table :checkbox:checked').parent().parent().addClass('selected');
		//简化:
		$('table :checkbox:checked').parents("tr").addClass('selected');
		//$('tbody>tr:has(:checked)').addClass('selected');
  })
