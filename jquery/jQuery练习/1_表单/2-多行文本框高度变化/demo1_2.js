	$(function(){
	    var $comment = $('#comment');  //获取评论框
	    $('.bigger').click(function(){ //放大按钮绑定单击事件
		   if(!$comment.is(":animated")){ //判断是否处于动画
			  if( $comment.height() < 500 ){ 
				  	$comment.animate({ height : "+=50" },400); //重新设置高度，在原有的基础上加50
			  }
			}
		})
		$('.smaller').click(function(){//缩小按钮绑定单击事件
		   if(!$comment.is(":animated")){//判断是否处于动画
				if( $comment.height() > 50 ){
					$comment.animate({ height : "-=50" },400); //重新设置高度，在原有的基础上减50
				}
			}
		});
	});
	
