var ThemeUtil = {
	use:function(themeFileName){
		$("#theme").attr("href", "css/"+themeFileName);
	}
};



$( document ).ready(function() {			
	$(".theme-default").click(function(evt){
		ThemeUtil.use("bootstrap.min.css");
	});
	
	$(".theme-cosmo").click(function(evt){
		ThemeUtil.use("bootstrap.cosmo.min.css");
	});
	
	$(".theme-cyborg").click(function(evt){
		ThemeUtil.use("bootstrap.cyborg.min.css");
	});
	
	$(".theme-paper").click(function(evt){
		ThemeUtil.use("bootstrap.paper.min.css");
	});
});