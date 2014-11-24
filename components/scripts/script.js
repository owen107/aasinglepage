$(document).ready(function(){
	$('#welcome').find('.gallery img').hover(function() {
         var curImgLoc = $(this).attr('src');
         var hoverImgLoc = curImgLoc.substr(0, curImgLoc.length-4) + "_h.jpg";
         $(this).attr('src', hoverImgLoc);
	}, function() {
         var curImgLoc = $(this).attr('src');
         var newImgLoc = curImgLoc.substr(0, curImgLoc.length-6) + ".jpg";
         $(this).attr('src', newImgLoc);
	});
});