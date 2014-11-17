var FontUtil = {
	changeFontSize: function(param){
		$("*").each(function(i, e){
			var fs = $(e).css("font-size").replace(/\D/g, "");
			$(e).css("font-size", eval(parseInt(fs) + param + 1));
		});
	},
	
	increment: function(){
		this.changeFontSize("+");
	},
	
	decrement: function(){
		this.changeFontSize("-");
	}
};
		
$( document ).ready(function() {			
	$(".increment-font-size").click(function(){
		FontUtil.increment();
	});
		
	$(".decrement-font-size").click(function(){
		FontUtil.decrement();
	});
	
});