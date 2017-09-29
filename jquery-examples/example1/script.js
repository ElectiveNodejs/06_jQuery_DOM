$( document ).ready(function() {
	// console.log( "ready!" );

	$("#hideBtn").click(function(){
		$("#textbox").hide();
	});

	$("#showBtn").click(function(){
		$("#textbox").show();
	});		    

	$("#showHideBtn").click(function(){
		$("#textbox").toggle();
	});

	// $("#textbox").hide();
	// $("#textbox").remove();
});