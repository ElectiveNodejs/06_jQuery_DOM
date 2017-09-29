$( document ).ready(function() {
	$("#showHideBtn").click(function(){
		$("#textbox").toggle();
	});


	$("#colorMeRed").on("mouseover", function(){
		// console.log("Color the text of the paragraph red.");
		$("#textbox").css("color", "red");
		// $("#textbox").css("font-weight", "600");
		// $("#textbox").css("background", "red");
	});

	$("#colorMeBlue").on("mouseover", function(){
		// console.log("Color the text of the paragraph blue.");
		$("#textbox").css("color", "blue");
	});



	$("#colorMeThis").on("click", function(){
		var color = $("#colorInput").val();

		// console.log(color);

		$("#textbox").css("background", color);
	});
});