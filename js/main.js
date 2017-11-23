$("#reservation").click(function(){
	$("div.desc > div.first").hide();
	$("div.desc > div.reserv").fadeIn();
	$("div.desc > span.perperson").hide();
});


$(".carousel a").click(function(){
	$("div.gallery div.main img").hide();
	$("div.gallery div.main").find("img").attr("src",$(this).attr('href'));
	$("div.gallery div.main img").fadeIn();
	return false;
});