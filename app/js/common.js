window.onload = function(){

$(".slider").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  speed: 600
});


$("#search__mobile").click(()=>{
  $(".search__mobile").toggleClass("onclick");
});




$(window).scroll(()=>{
  if(window.innerWidth >= 767){
    var scrolled = ($(window).scrollTop());
    if(scrolled > 200 && scrolled < 400){
      $("header").fadeOut(1);
    } else if(scrolled < 200){
      $("header").fadeIn(1);
    }
    if(scrolled > 400){
      $(".home__anchor").css("display","block");
      $("header").addClass("header__fixed");
      $("header").fadeIn(400);
    } else if (scrolled < 400 && scrolled > 200) {
      $(".home__anchor").css("display","none");
      $("header").removeClass("header__fixed");
      $("header").fadeOut(400);
    }
  } else if(window.innerWidth < 767) {
    var scrolled = ($(window).scrollTop());
    if(scrolled > 200 && scrolled < 400){
      $(".menu__mobile").fadeOut(1);
      $(".menu__mobile").removeClass("menu__mobile__fixed");
      $("#nav").removeClass("nav__fixed");
      $(".home__anchor").css("display","none");
    } else if(scrolled < 200){
      $(".menu__mobile").fadeIn(1);
    } else if(scrolled > 400){
      $(".home__anchor").css("display","block");
      $(".menu__mobile").addClass("menu__mobile__fixed");
      $("#nav").addClass("nav__fixed");
      $(".menu__mobile").fadeIn(400);
    }
  }

});


$("#ct1").click(()=>{
  $("#cn1").toggleClass("content__display");
});
$("#ct2").click(()=>{
  $("#cn2").toggleClass("content__display");
});

$('.search__small').click(()=>{
  $('.search__mobile').toggleClass("search__mobile__onclick");
})

$('body').append('<div class="home__anchor"><img src="../img/up-arrow.png"/></div>');
$('.home__anchor').click(()=>{
  $('body, html').animate({scrollTop: 0}, 0);
});
$("#burger").click(()=>{
  $("nav").toggleClass("nav__onclick__responsive");
  $(".navcollection").click(()=>{
    $(".responsive__katalog").toggleClass("onclick");
  });
});
$('.responsive__burger').click(()=>{
  $('#nav__container').toggleClass('nav__container__mobile');
  $('#nav0, #nav1, #nav2, #nav3, #nav4, #nav5').toggleClass('onclick').toggleClass('navitem').toggleClass('colored__background');
});

window.onresize = () =>{
  if(window.innerWidth >= 853){
    $('#responsive__burger').css('display','none');
    $('#nav0, #nav1, #nav2, #nav3, #nav4, #nav5').css('display','block');
    $('#nav__container').removeClass('nav__container__mobile');
    $('#nav0, #nav1, #nav2, #nav3, #nav4, #nav5').addClass('navitem').removeClass('colored__background');
    $("nav").removeClass("nav__onclick__responsive");
    $('#nav__container').removeClass('nav__container__smallest');
  } else if(window.innerWidth <853 && window.innerWidth > 767){
    $('#responsive__burger').css('display','block');
    $('#nav0, #nav1, #nav2, #nav3, #nav4, #nav5').removeClass().css('display','none');
    $("nav").removeClass("nav__onclick__responsive");
    $('#nav__container').removeClass('nav__container__smallest');
    $(".responsive__katalog").removeClass("onclick");
  } else if(window.innerWidth <= 767){
    $('#responsive__burger').css('display','none');
    $('#nav0, #nav1, #nav2, #nav3, #nav4, #nav5').addClass('navitem').css('display','block');
    $('#nav__container').removeClass('nav__container__mobile').addClass('nav__container__smallest');
  }
  if(window.innerWidth > 767){
    $(".navcollection").off();
    $(".responsive__katalog").removeClass('onclick');
  }
}
if(window.innerWidth >= 853){
  $('#responsive__burger').css('display','none');
  $('#nav0, #nav1, #nav2, #nav3, #nav4, #nav5').css('display','block');
  $('#nav__container').removeClass('nav__container__mobile');
  $('#nav0, #nav1, #nav2, #nav3, #nav4, #nav5').addClass('navitem').removeClass('colored__background');
} else if(window.innerWidth <853 && window.innerWidth > 767){
  $('#responsive__burger').css('display','block');
  $('#nav0, #nav1, #nav2, #nav3, #nav4, #nav5').removeClass().css('display','none');
  $("nav").removeClass("nav__onclick__responsive");
  $('#nav__container').removeClass('nav__container__smallest');
  $(".responsive__katalog").removeClass("onclick");
} else if(window.innerWidth <= 767){
  $('#responsive__burger').css('display','none');
  $('#nav0, #nav1, #nav2, #nav3, #nav4, #nav5').addClass('navitem').css('display','block');
  $('#nav__container').removeClass('nav__container__mobile').addClass('nav__container__smallest');
}



}


