$(document).ready(function(){

    var isTouch = 'ontouchstart' in document.documentElement;
	
    // set up the image hover effect in welcome section
	$('#welcome').find('.gallery img').hover(hoverImageEnter, hoverImageLeave);

    // set up the image hover effect in dining section
    $('#pacificrim').find('img').hover(hoverImageEnter, hoverImageLeave);
    $('#chophouse').find('img').hover(hoverImageEnter, hoverImageLeave);
    $('#zingerman').find('img').hover(hoverImageEnter, hoverImageLeave);

    function hoverImageEnter() {
        var curImgLoc = $(this).attr('src');
        var hoverImgLoc = curImgLoc.substr(0, curImgLoc.length-4) + "_h.jpg";
        $(this).attr('src', hoverImgLoc);
    }

    function hoverImageLeave() {
        var curImgLoc = $(this).attr('src');
        var newImgLoc = curImgLoc.substr(0, curImgLoc.length-6) + ".jpg";
        $(this).attr('src', newImgLoc);
    }

    // set up the image hover effect in events section
    $('#artfair').hover(function() {
        $(this).attr('id', 'artfair_hover');
    }, function() {
        $(this).attr('id','artfair');
    });

    $('#summerfestival').hover(function() {
        $(this).attr('id', 'summerfestival_hover');
    }, function() {
        $(this).attr('id','summerfestival');
    });
    
    // set up the image slider in umich section
    // configuration
    var width = 650;
    var animationSpeed = 1500;
    var pause = 3500;
    var currentSlide = 1;

    // cache DOM
    var $slider = $('#slider');
    var $sliderContainer = $slider.find('.slides');
    var $slide = $sliderContainer.find('.slide');

    var interval;
    
	function startSlider() {
		interval = setInterval(function() {
			$sliderContainer.animate({'margin-left': '-=' + width + 'px'}, animationSpeed, function() {
				currentSlide++;
				if (currentSlide === $slide.length) {
					currentSlide = 1;
					$sliderContainer.css('margin-left', 0);
				}
			});
		}, pause);
	}

	function stopSlider() {
		clearInterval(interval);
	}

    $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
    startSlider();

    // set up the smooth scrolling for navigation
    var topOffset = 43;

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - topOffset
            }, 1000);
            return false;
          } // target.length
        } // location hostname
    }); // on click

    // hightlighting menu items on scroll
    $(window).scroll(function() {
        var windowPos = $(window).scrollTop() + topOffset; // get the top position of window
        $('nav li a').removeClass('active');
        
        // check if the top position of window is greater than the top position of that section
        if (windowPos > $('#umich').offset().top) {
            $('nav li a').removeClass('active');
            $('a[href$="#umich"]').addClass('active');
        } 

        if (windowPos > $('#attractions').offset().top) {
            $('nav li a').removeClass('active');
            $('a[href$="#attractions"]').addClass('active');
        }

        if (windowPos > $('#dining').offset().top) {
            $('nav li a').removeClass('active');
            $('a[href$="#dining"]').addClass('active');
        }

        if (windowPos > $('#events').offset().top) {
            $('nav li a').removeClass('active');
            $('a[href$="#events"]').addClass('active');
        }

        if (windowPos > $('#scenery').offset().top) {
            $('nav li a').removeClass('active');
            $('a[href$="#scenery"]').addClass('active');
        }
    });
 
    
    // set up the full height for the image
    var wheight = $(window).height(); // get the height of the window
    $('.fullheight').css('height', wheight);

    $(window).resize(function() {
        var wheight = $(window).height(); // get the height of the window
        $('.fullheight').css('height', wheight);
    });

    // set up Scroll Magic
    var controller = new ScrollMagic({
        globalSceneOptions: {
            triggerHook: "onLeave"
        }
    });

    // set up the scene for pining navigation
    var pin = new ScrollScene({
        triggerElement: '#nav'
    }).setPin('#nav').addTo(controller);


    if (!isTouch) {
        // attractions animation
        var attractionOrigin = {
            bottom: -700,
            opacity: 0,
            scale: 0
        }

        var attractionDest = {
            repeat: 1,
            yoyo: true,
            bottom: 0,
            opacity: 1,
            scale: 1,
            ease: Back.easeOut
        }
        
        // set up animation for downtown
        var attractionTween = TweenMax.
           staggerFromTo('#downtown .content', 1, attractionOrigin, attractionDest);
        
        var pin = new ScrollScene({
            triggerElement: '#downtown',
            offset: -topOffset,
            duration: 500
        }).setPin('#downtown').setTween(attractionTween).addTo(controller);

        // set up animation for michigantheater
        var attractionTween = TweenMax.
           staggerFromTo('#michigantheater .content', 1, attractionOrigin, attractionDest);
        
        var pin = new ScrollScene({
            triggerElement: '#michigantheater',
            offset: -topOffset,
            duration: 500
        }).setPin('#michigantheater').setTween(attractionTween).addTo(controller);
        
        // set up animation for michiganstadium
        var attractionTween = TweenMax.
           staggerFromTo('#michiganstadium .content', 1, attractionOrigin, attractionDest);
        
        var pin = new ScrollScene({
            triggerElement: '#michiganstadium',
            offset: -topOffset,
            duration: 500
        }).setPin('#michiganstadium').setTween(attractionTween).addTo(controller);

        // set up animation for briarwood
        var attractionTween = TweenMax.
           staggerFromTo('#briarwood .content', 1, attractionOrigin, attractionDest);
        
        var pin = new ScrollScene({
            triggerElement: '#briarwood',
            offset: -topOffset,
            duration: 500
        }).setPin('#briarwood').setTween(attractionTween).addTo(controller);

        // set up animation for hillauditorium
        var attractionTween = TweenMax.
           staggerFromTo('#hillauditorium .content', 1, attractionOrigin, attractionDest);
        
        var pin = new ScrollScene({
            triggerElement: '#hillauditorium',
            offset: -topOffset,
            duration: 500
        }).setPin('#hillauditorium').setTween(attractionTween).addTo(controller);

        // set up animation for nicholsarboretum
        var attractionTween = TweenMax.
           staggerFromTo('#nicholsarboretum .content', 1, attractionOrigin, attractionDest);
        
        var pin = new ScrollScene({
            triggerElement: '#nicholsarboretum',
            offset: -topOffset,
            duration: 500
        }).setPin('#nicholsarboretum').setTween(attractionTween).addTo(controller);

        // set up animation for umlawschool
        var attractionTween = TweenMax.
           staggerFromTo('#umlawschool .content', 1, attractionOrigin, attractionDest);
        
        var pin = new ScrollScene({
            triggerElement: '#umlawschool',
            offset: -topOffset,
            duration: 500
        }).setPin('#umlawschool').setTween(attractionTween).addTo(controller);

        // set up animation for ummichiganofart
        var attractionTween = TweenMax.
           staggerFromTo('#ummichiganofart .content', 1, attractionOrigin, attractionDest);
        
        var pin = new ScrollScene({
            triggerElement: '#ummichiganofart',
            offset: -topOffset,
            duration: 500
        }).setPin('#ummichiganofart').setTween(attractionTween).addTo(controller);
    }
    


    // scenery animation
    var scenerytween = TweenMax.
       staggerFromTo('#scenery article', 1, { opacity: 0, scale: 0 },
        { delay: 1, opacity: 1, scale: 1, ease: Back.easeOut });

    var scene = new ScrollScene({
        triggerElement: '#scenery',
        offset: -topOffset
    }).setTween(scenerytween).addTo(controller);

});
