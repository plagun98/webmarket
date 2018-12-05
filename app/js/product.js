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

  // function setURL (resp){
  //   var urlEnding = resp.data.transliterationName;
  //   history.pushState(history.state, '',urlEnding);
  // }

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