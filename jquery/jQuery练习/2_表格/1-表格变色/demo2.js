	$(function(){
		$("tbody>tr:odd").addClass("odd"); //先排除第一行,然后给奇数行添加样式
		$("tbody>tr:even").addClass("even"); //先排除第一行,然后给偶数行添加样式
		$("tr:contains('王五')").addClass("selected");
    })