	$(function(){
	    var $comment = $('#comment');//获取评论框
	    $('.up').click(function(){ //向上按钮绑定单击事件
		   if(!$comment.is(":animated")){//判断是否处于动画
				$comment.animate({ scrollTop  : "-=50" } , 400);
			}
		})
		$('.down').click(function(){//向下按钮绑定单击事件
		   if(!$comment.is(":animated")){
				$comment.animate({ scrollTop  : "+=50" } , 400);
			}
		});
	});
