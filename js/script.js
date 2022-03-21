//loading
$(window).on('load', function(){
  $('#loading-wrap').delay(900).fadeOut(800);
});
$(function(){
  setTimeout('stopload()', 10000);
})
function stopload(){
  $('#loading-wrap').delay(900).fadeOut(800);
}

//hamburger btn + drawer menu
$(function () {
  $('#hamburger-btn').click(function () {
    $('body').toggleClass('is-drawer-active')

    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', 'true')
      $('#drawer').attr('area-hidden','false')
    } else {
      $(this).attr('aria-expanded', 'false')
      $('#drawer').attr('area-hidden','true')
    }
  })
  //hamburger menu bun background
  $('.js-hamburger-bg').click(function () {
    $('body').removeClass('is-drawer-active')
    $('#hamburger-btn').attr('aria-expanded', 'false')
    $('#drawer').attr('area-hidden','true')
  })
  $('.header__list a[href]').on('click', function() {
    $('#hamburger-btn').trigger('click');
  });
});

//header scroll
$(window).scroll(function(){
	if ($(window).scrollTop() > 20) {
		$('.header').addClass('scroll');
	} else {
		$('.header').removeClass('scroll');
	}
});

//mainvisual swiper
let mySwiper = new Swiper(".swiper-container", {
  loop: true, 
  effect: "fade", 
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false 
  },
  speed: 2000, 
  allowTouchMove: false,
});

//back to page top
$(function() {
  var pagetop = $('#page-top');   
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) { 
      pagetop.addClass("is-fadein");
    } else {
      pagetop.removeClass("is-fadein");
    }
  });
  pagetop.on("click",function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500); 
  });
});

//smooth scroll
$(function () {
  $('a[href^="#"]').click(function () {
    var adjust = 80;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - adjust;
　  var speed = 500;
  $("html, body").animate({
    scrollTop: position
  }, speed, "swing");
  return false;
  });
});



