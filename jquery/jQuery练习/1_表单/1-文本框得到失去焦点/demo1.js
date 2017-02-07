    $(function(){
		$(":input").focus(function(){//$("input, textarea")
			  $(this).addClass("focus");
			  //this.className = "focus";
		}).blur(function(){
			  $(this).removeClass("focus");
		});
    });