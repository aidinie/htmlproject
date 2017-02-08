	$(function(){
	    var $comment = $('#comment');  //获取评论框
	    $('.bigger').click(function(){ //放大按钮绑定单击事件
			  $comment.height($comment.height()<500?$comment.height()+50:$comment.height());
		})
		$('.smaller').click(function(){//缩小按钮绑定单击事件
			  $comment.height($comment.height()>50?$comment.height()-50:$comment.height());
		});
	});