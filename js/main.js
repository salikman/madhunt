(function($) {
	"use strict";
	///////////////////////////
	// Btn nav collapse
	$('#nav .navbar__collapse').click(function() {
		$('#nav').toggleClass('open');
	});

	///////////////////////////
	// Smooth scroll
	$('#back-to-top').on('click', function(){
		$('body,html').animate({
			scrollTop: 0
		}, 600);
	});
	///////////////////////////
	// On Scroll
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();

		// Back To Top Appear
		wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
	});
	///////////////////////////
	// Slick slider
	$('#home-slider').slick({
		arrows: false,
		prevArrow: "<button class='slider-arrow__prev'><svg viewBox='0 0 41 82' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M40 1L1 41L40 81' stroke='#E3E3E3' stroke-width='2' stroke-linejoin='round'/></svg></button>",
		nextArrow: "<button class='slider-arrow__next'><svg viewBox='0 0 42 82' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L41 41L1 81' stroke='#E3E3E3' stroke-width='2' stroke-linejoin='round'/></svg></button>",
		dots: true,
		dotsClass: 'dots dots-b'
	});

})(jQuery);