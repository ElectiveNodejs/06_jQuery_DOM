$(document).ready(function(){
	$("input, textarea").focus(function(){
		$(this).css("background", "#f3d5bd");
	});

	$("input, textarea").blur(function(){
		$(this).css("background", "#fff");
	});



	$("#sendMsg").click(function(){
		var studentName = $("#studentName").val();
		var studentMsg = $("#studentMsg").val();

		// console.log("The student " + studentName + " has written the message: " + studentMsg);

		var msg = "<p class='msg'>" + studentName + ": " + studentMsg + "</p>";

		$("#messageBox").append(msg);
	});



	$("#changeColors").click(function(){
		changeColors();
	});

	$("#shuffleMsg").click(function(){
		shuffleMessages();
	});

	
 	var colors = ["yellow", "pink", "red", "green"];
 	var i = 0;

	var changeColors = function(){

		$("p").css("border-color", colors[i]);
		
		if(i == colors.length - 1) i = 0;
		else i++;
	};


	var shuffleMessages = function(){
		var allMsgs = $(".msg");
		var noOfMsgs = allMsgs.length;
		// console.log(allMsgs);

		for(var i = 0; i < noOfMsgs; i++){
			var order = getRandomInt(-1, noOfMsgs-1);
			
			// console.log($(allMsgs[i]));
			$(allMsgs[i]).css("order", order);
		}


	};



	function getRandomInt(min, max) {
	 	min = Math.ceil(min);
	 	max = Math.floor(max);
	 	return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
	}

});



