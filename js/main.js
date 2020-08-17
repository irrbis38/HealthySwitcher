$(document).ready(function(){

  $('.header__burger').click(function(event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.header__list').click(function(event) {

        $('.header__burger,.header__menu').removeClass('active');

        $('body').removeClass('lock');
    });

  $('.basics__slider').slick({
	  arrows: true,
	  slidesToShow: 2,
	  speed: 1000,
	    responsive: [
     {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
		arrows: false,
		dots: true
      }
    },
    {
      breakpoint: 575,
      settings: {
		slidesToShow: 1,
        arrows: false,
		dots: true
      }
    }
  ]
  });
  
});