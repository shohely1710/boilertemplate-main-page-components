$(document).ready(function () {
   var windowWidth = $(window).width();
   var TM = TweenMax;
   var tl = new TimelineMax();


//Gallery-01 start
if ($('.gallery-slider-init').length > 0) {
  $('.gallery-slider-init').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    draggable: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    asNavFor: '.gallery-with-thumb-init'
  });
}
if ($('.gallery-with-thumb-init').length > 0) {
  $('.gallery-with-thumb-init').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.gallery-slider-init',
    draggable: true,
    focusOnSelect: true,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    lazyLoad: 'ondemand',
    responsive: [

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          centerMode: false,
          dots: true,
          draggable: true
        }
      }
    ]
  });
}
//Gallery-01 end

//Gallery-04 start 

if ($('.gallery-one__init').length > 0) {
  $('.gallery-one__init').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '250px',
    prevArrow: '.gallery-left',
    nextArrow: '.gallery-right',
    speed: 1200,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          dots: true,
        }
      }
    ]
  })
}

//Gallery-04 end

//Gallery-06 start

  if ($('.filter-wrap').length > 0) {
   var container = $('.filter-wrap');
   var container_height = container.height();
   var $grid = container.isotope({
     itemSelector: '.filter-item',
     percentPosition: true,
     masonry: {
       columnWidth: '.filter-item'
     }
   });
   $('.filter-nav a').on('click', function () {
     var filterValue = $(this).attr('data-filter');
     $grid.isotope({filter: filterValue});
     $('.filter-nav a').removeClass('active');
     $(this).addClass('active');
     return false;
   });

   // mobile filter
   $('.filter-mobile li').on('click', function () {
     var filterValue = $(this).attr('data-value');
     $grid.isotope({filter: filterValue});
   });

   if (768 < windowWidth) {
     container.css({'min-height': container_height})
   }
 }
//Gallery-06 end

//  //------------------- T.A.1.0-Component-10 start page component-1 facility-list
if ($('.facility-list__img-slider__init').length > 0) {
  $('.facility-list__img-slider__init').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: $('.facility-list-prev'),
    nextArrow: $('.facility-list-next'),
    responsive: [

      {
        breakpoint: 768,
        settings: {
          centerPadding: '120px',
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode:true,
        }
      },
      {
        breakpoint: 575,
        settings: {
          centerPadding: '80px',
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode:true,
        }
      }
    ]
  })
}
//------------------- T.A.1.0-Component-10 end



}); //document.ready







