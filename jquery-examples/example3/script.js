$(document).ready(function(){

	$("button").click(function(e){
		console.log(e.bubbles);
		console.log(e.type);
	});

	$(document).on('mousemove', function(e){
		// console.log("X coord: " + e.clientX + ", Y coord: " + e.clientY);
		$("#coords").html("X coord: " + e.clientX + ", Y coord: " + e.clientY);

		if(e.clientX % 2 == 0 && e.clientY % 2 != 0){
			$("#coords").css("color", "red");
		} else {
			$("#coords").css("color", "blue");
		}
	});

});