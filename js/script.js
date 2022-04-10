$(document).ready(function() {

	$('.header__burger').click(function(event) {
		$('.header__burger,.menu-bg,.menu').toggleClass('active');
	});

  $('.nav__anchor').click(function(event) {
    $('.header__burger,.menu-bg,.menu').removeClass('active');
  });

  $('.nav__anchor').on('click', function(event){
    var $anchor = $(this)
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr('href')).offset().top - 110,
        },
        {
          duration: 600,
          specialEasing: {
            width: 'linear',
            height: 'easeInOutCubic',
          },
        }
      )
    event.preventDefault()
  })

  $(window).scroll(function(event) {
    $('.header__burger,.menu-bg,.menu').removeClass('active');
  });

	$('.slider').slick({
		arrows:false,
		dots:true,
		autoplay:true,
	});
});

window.onscroll = function showHead() {

  var header = document.querySelector('.header');  
  var header_bg = document.querySelector('.header-bg');

  if(window.pageYOffset > 50){
    header.classList.add('header__fixed');        
    header_bg.classList.add('header__fixed');
  }
  else{
    header.classList.remove('header__fixed');
    header_bg.classList.remove('header__fixed');
  }
}
