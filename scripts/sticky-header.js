 $(document).ready(function(){
	   $(window).bind('scroll', function() {
	   var navHeight = $( window ).height() - 54;
			 if ($(window).scrollTop() > navHeight) {
				 $('#nav-links').addClass('fixed');
			 }
			 else {
				 $('#nav-links').removeClass('fixed');
			 }
		});
	});