window.onload = function(){

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slider-nav',
        arrows: 'false'
      });
      $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider',
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true
      });
      $('.slider__item').zoom();
}