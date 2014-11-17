var ThemeUtil = {
	use:function(themeFileName){
		$("#theme").attr("href", "css/"+themeFileName);
	}
};



$( document ).ready(function() {			
	$(".theme-black").click(function(evt){
		ThemeUtil.use("bootstrap.cosmo.min.css");
	});
});