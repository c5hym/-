$(document).ready(function(){


  // swiper

  var space = $('.news__title-outer').outerWidth() * 0.25;

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: space,
    navigation: {
      nextEl: '.swiper-button-next',
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
      },
      544: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      410: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
    }
  });


  // sp stickynav

	$('.sticky__toggle').click(function(){

		$(this).next('.reserve-amp-tNav-outer').slideToggle();

    if ($(this).hasClass('active')) {
      $(this).text('ご予約はこちらから');
      $(this).removeClass('active')
    } else {
      $(this).text('CLOSE');
      $(this).addClass('active')
    }

	});


  // sp togglenav

  $('.header__gNav-toggle-btn').click(function() {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.header__gNav').addClass('active');
    } else {
      $('.header__gNav').removeClass('active');
    }
  });


  // sp表示の時、toggleメニューがwidth:95vwとなるのを回避

  if (window.matchMedia('screen and (min-width:1000px)').matches) {
	   $('.reserve-amp-tNav-outer').addClass('content');
  }

  if (window.matchMedia('screen and (min-width:544px)').matches) {
	   $('.header__gNav').addClass('content');
  }


});
