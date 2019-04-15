function onClick(){

	$("#toggleNav").animate({width:"toggle"});

	if($("#toggleNav").is(".hidden")){
		$("#toggleNav").removeClass("hidden");
		$("#toggleNav").addClass("displayedIB");
	}else if($("#toggleNav").is(".displayedIB")){
		$("#toggleNav").removeClass("displayedIB");
		$("#toggleNav").addClass("hidden");
	}
}

function learnMore(){
	$("#moreContent").animate({width:"toggle", height:"toggle"});
}

$(function(){
	var state = true;
	$("a").hover(function(){
		if(state){
			$(this).animate({
				color:"white"
			}, 500);

			state = false;
		}
	}, function(){
		if(!state){
			$(this).animate({
				color:"#96918a"
			}, 500);

			state = true;
		}
	});
});