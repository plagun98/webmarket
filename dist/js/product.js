window.onload = ()=>{

    $('.slider1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slider-nav',
        arrows: 'false',
        swipe: false
      });
      $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider1',
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        swipe: false
      });
      $('.slider1__item').zoom();
      if(window.innerWidth > 767){
        //$('.slider1__item').zoom();
      } else{
        $('.product__view').appendTo($('.product__state'));
      }

      $("#search__mobile").click(()=>{
        $(".search__mobile").toggleClass("onclick");
      });
      $('.search__small').click(()=>{
        $('.search__mobile').toggleClass("search__mobile__onclick");
      });
      
      
      $(window).scroll(()=>{
        if(window.innerWidth >= 767){
          var scrolled = ($(window).scrollTop());
          if(scrolled > 200 && scrolled < 400){
            $("header").fadeOut(1);
            $(".home__anchor").css("display","none");
            $("header").removeClass("header__fixed");
            $("header").fadeOut(400);
          } else if(scrolled < 200){
            $("header").fadeIn(1);
          } else if(scrolled > 400){
            $(".home__anchor").css("display","block");
            $("header").addClass("header__fixed");
            $("header").fadeIn(400);
          }
        } else if(window.innerWidth < 767) {
          var scrolled = ($(window).scrollTop());
          if(scrolled > 200 && scrolled < 400){
            $(".menu__mobile").fadeOut(1);
            $(".menu__mobile").removeClass("menu__mobile__fixed");
            $(".home__anchor").css("display","none");
            $("#nav").removeClass("nav__fixed");
          } else if(scrolled < 200){
            $(".menu__mobile").fadeIn(1);
            $("#nav").removeClass("nav__fixed");
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
          $("#nav").removeClass("nav__fixed");
        }
        if(window.innerWidth < 768){
          $('.product__view').appendTo($('.product__state'));
        } else {
          $('.product__view').prependTo($('.product__item'));
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

        

        
        $('#review').click(()=>{
          $('#review').addClass("click__border");
          $('#techspecs').removeClass("click__border");
          $('#feedback').removeClass("click__border");
          $('.details__review').addClass("click__display");
          $('.details__techspecs').removeClass("click__display");
          $('.details__feedback').removeClass("click__display");
        });
        $('#techspecs').click(()=>{
          $('#techspecs').addClass("click__border");
          $('#review').removeClass("click__border");
          $('#feedback').removeClass("click__border");
          $('.details__techspecs').addClass("click__display");
          $('.details__review').removeClass("click__display");
          $('.details__feedback').removeClass("click__display");
        });
        $('#feedback').click(()=>{
          $('#feedback').addClass("click__border");
          $('#techspecs').removeClass("click__border");
          $('#review').removeClass("click__border");
          $('.details__feedback').addClass("click__display");
          $('.details__techspecs').removeClass("click__display");
          $('.details__review').removeClass("click__display");
        });
      
        var xhr = new XMLHttpRequest();
        var resp;
        xhr.onreadystatechange = function(){
          if(this.readyState == 4){
            resp = JSON.parse(this.response);
            console.log(resp);
            //setURL(resp);
            setSliderPhotos(resp);
            setName (resp);
            setSpecs (resp);
          }
        }
        xhr.open('GET','https://aquaplanner-dev.herokuapp.com/product/get_product/1', true);
        xhr.send();

        function setURL (resp){
          //window.location.href += "/"+resp.data.transliterationName;
        }

        function setSliderPhotos (resp){
          var slider1Arr = $('.slider1photo');
          var slidernavArr = $('.slidernavphoto');
          var zoomImg = $('.zoomImg');
          var imageUrls650 = resp.data.imageUrls650;
          var imageUrls85 = resp.data.imageUrls85;
          for(var i=0; i<slider1Arr.length; i++){
            slider1Arr[i].src=imageUrls650[i];
            slidernavArr[i].src=imageUrls85[i];
            zoomImg[i].src=imageUrls650[i];
          }
        }
        function setName (resp){
          $('#product__name').append("<p class='product__name'>"+resp.data.name+"</p>");
        }
        function setSpecs(resp){
          var specs = resp.data.specifications;
          for(var i=0;i<specs.length;i++){
            if(i%2 == 0){
              $('.details__techspecs').append("<div class='flex even'><span>"+specs[i].name+"</span><p>"+specs[i].value+"</p><div>");
            } else {
              $('.details__techspecs').append("<div class='flex odd'><span>"+specs[i].name+"</span><p>"+specs[i].value+"</p><div>");
            }
          }
        }





















}