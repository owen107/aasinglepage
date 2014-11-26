$(document).ready(function(){
	
    // set up the image hover effect in welcome section
	$('#welcome').find('.gallery img').hover(function() {
         var curImgLoc = $(this).attr('src');
         var hoverImgLoc = curImgLoc.substr(0, curImgLoc.length-4) + "_h.jpg";
         $(this).attr('src', hoverImgLoc);
	}, function() {
         var curImgLoc = $(this).attr('src');
         var newImgLoc = curImgLoc.substr(0, curImgLoc.length-6) + ".jpg";
         $(this).attr('src', newImgLoc);
	});
    
    // set up the image slider in umich section
    // configuration
    var width = 650;
    var animationSpeed = 1000;
    var pause = 4000;
    var currentSlide = 1;

    // cache DOM
    var $slider = $('#slider');
    var $sliderContainer = $slider.find('.slides');
    var $slide = $sliderContainer.find('.slide');
    
	setInterval(function() {
		$sliderContainer.animate({'margin-left': '-=' + width + 'px'}, animationSpeed, function() {
			currentSlide++;
			if (currentSlide === $slide.length) {
				currentSlide = 1;
				$sliderContainer.css('margin-left', 0);
			}
		});
	}, pause);
});
