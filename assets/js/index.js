  // 👇️ using noConflict mode
//   const $jq = jQuery.noConflict();

//   $jq(document).ready(function () {
//     $jq('.single-item').slick({
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 2000,
//       dots: true,
//       centerMode: true,
//     });
//   });


$(document).ready(function(){
    $('.listing-six-slider').slick({
        arrows:false,
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
})