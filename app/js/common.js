window.onload = function(){
    
//search
var overlay1 = document.querySelector(".overlay-1");
var overlay2 = document.querySelector(".overlay-2");
var search = document.querySelector('.search');
var input = document.querySelector('.input');
overlay1.addEventListener('click', function(){
    search.classList.toggle('active');
    if (search.classList.contains('active')) {
        setTimeout(function(){
            input.focus();
        }, 200)
    }
},true);
search.addEventListener('click',function(){
if (search.classList.contains('active')) {
    setTimeout(function(){
        input.focus();
    }, 200)
}
})
overlay2.addEventListener('click',function(e){
  input.value = '';
  input.focus();
  search.classList.remove('searching')
})
document.body.addEventListener('click',function(e){
  if (!search.contains(e.target) && input.value.length === 0) {
    search.classList.remove('active');
    search.classList.remove('searching');
    input.value = '';
  }
})
input.addEventListener('keyup',function(e){
  if (e.keyCode === 13) {
    input.blur();
  }
})
input.addEventListener('input', () => {
  if (input.value.length > 0) {
    search.classList.add('searching')
  } else {
    search.classList.remove('searching')
  }
})
input.value = '';
input.blur();
//end search

$(".slider").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  speed: 600
});

$("#burger").click(function(){
  $("nav").toggleClass("nav__onclick__responsive");
  $(".navcollection").click(function(){
    $(".responsive__katalog").toggleClass("onclick");
  });
});
$("#search__mobile").click(function(){
  $(".search__mobile").toggleClass("onclick");
});

$(window).scroll(function(){
  if(window.innerWidth > 767){
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
  } else {
    $("#nav6").click(function(){
      $(".more__items").toggleClass(".more__items__fixed");
    })
    var scrolled = ($(window).scrollTop());
    if(scrolled > 200 && scrolled < 400){
      $(".menu__mobile").fadeOut(1);
    } else if(scrolled < 200){
      $(".menu__mobile").fadeIn(1);
    }
    if(scrolled > 400){
      $(".home__anchor").css("display","block");
      $(".menu__mobile").addClass("menu__mobile__fixed");
      $("#nav").addClass("nav__fixed");
      $(".menu__mobile").fadeIn(400);
    } else if (scrolled < 400 && scrolled > 200) {
      $(".home__anchor").css("display","none");
      $(".menu__mobile").removeClass("menu__mobile__fixed");
      $("#nav").removeClass("nav__fixed");
      $(".menu__mobile").fadeOut(400);
    }
  }

});


$("#ct1").click(function(){
  $("#cn1").toggleClass("content__display");
});
$("#ct2").click(function(){
  $("#cn2").toggleClass("content__display");
});
function screenWidth1(){
  if(window.innerWidth > 767){
    $("#nav6").click(function(){
      $(".more__items").toggleClass("onclick");
    });
  } else {
    $("#nav6").click(function(){
      $(".more__items").toggleClass("more__items__fixed");
    });
  }
}


function screenWidth5(){
  if(window.innerWidth < 1076){
    $("#not__nav5").removeClass("hidden");
  }
}
function screenWidth4(){
  if(window.innerWidth < 973){
    $("#not__nav4").removeClass("hidden");
  }
}
function screenWidth3(){
  if(window.innerWidth < 870){
    $("#not__nav3").removeClass("hidden");
  }
}
function screenWidth2(){
  if(window.innerWidth < 767){
    $(".hidden").removeClass("hidden");
  }
}
screenWidth5();
screenWidth4();
screenWidth3();
screenWidth1();


}
