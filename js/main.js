(function ($) {
  "use strict";
  ///////////////////////////
  // Btn nav collapse
  $("#nav .navbar__collapse").click(function () {
    $("#nav").toggleClass("open");
  });

  ///////////////////////////
  // Smooth scroll
  $("#back-to-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      600
    );
  });
  ///////////////////////////
  // Popup
  setTimeout(function(){
    $.fancybox.open({
      src  : '#popup-modal',
      type : 'inline',
    });
  }, 1600)
  
  ///////////////////////////
  // On Scroll
  $(window).on("scroll", function () {
    var wScroll = $(this).scrollTop();

    // Back To Top Appear
    // wScroll > 700 ? $("#back-to-top").fadeIn() : $("#back-to-top").fadeOut();
  });
  ///////////////////////////
  // Slick slider
  $("#home-slider").slick({
    arrows: false,
    prevArrow:
      "<button class='slider-arrow__prev'><svg viewBox='0 0 41 82' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M40 1L1 41L40 81' stroke='#E3E3E3' stroke-width='2' stroke-linejoin='round'/></svg></button>",
    nextArrow:
      "<button class='slider-arrow__next'><svg viewBox='0 0 42 82' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L41 41L1 81' stroke='#E3E3E3' stroke-width='2' stroke-linejoin='round'/></svg></button>",
    dots: true,
    dotsClass: "dots dots-b",
  });

  // Init fancybox
  // =============
  var selector = ".slick-slide:not(.slick-cloned)";

  // Attach custom click event on cloned elements,
  // trigger click event on corresponding link
  $(document).on("click", ".slick-cloned", function (e) {
    $(selector)
      .eq(
        ($(e.currentTarget).attr("data-slick-index") || 0) % $(selector).length
      )
      .trigger("click.fb-start", {
        $trigger: $(this),
      });

    return false;
  });

  $(".slider-single").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 400,
    // prevArrow:
    //   '<button type="button" class="single-gallery-prev"><i class="fa fa-chevron-left"></i></button>',
    // nextArrow:
    //   '<button type="button" class="single-gallery-next"><i class="fa fa-chevron-right"></i></button>',
    cssEase: "cubic-bezier(0.77, 0, 0.18, 1)",
  });

  $(".slider-nav")
    .on("init", function (event, slick) {
      $(".slider-nav .slick-slide.slick-current").addClass("is-active");
    })
    .slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: true,
      dotsClass: "dots dots-offset",

      arrows: false,
      infinite: false,
      responsive: [
        {
          breakpoint: 1240,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    });

  $(".slider-single").on("afterChange", function (event, slick, currentSlide) {
    $(".slider-nav").slick("slickGoTo", currentSlide);
    var currrentNavSlideElem =
      '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $(".slider-nav .slick-slide.is-active").removeClass("is-active");
    $(currrentNavSlideElem).addClass("is-active");
  });

  $(".slider-nav").on("click", ".slick-slide", function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data("slick-index");

    $(".slider-single").slick("slickGoTo", goToSingleSlide);
  });

  ///////////////////
  // Tabs
  var filterActive;

  function filterCategory(category) {
      if (filterActive != category) {
          
          // reset results list
          $('.filtering-content .filtering-content__cat').removeClass('active');
          
          // elements to be filtered
          $('.filtering-content .filtering-content__cat')
              .filter('[data-cat="' + category + '"]')
              .addClass('active');
          
          // reset active filter
          filterActive = category;
          $('.filtering button').removeClass('active');
      }
  }

  $('.filtering-content__cat').addClass('active');

  $('.filtering button').click(function() {
      if ($(this).hasClass('cat-all')) {
          $('.filtering-content .filtering-content__cat').addClass('active');
          filterActive = 'cat-all';
          $('.filtering button').removeClass('active');
      } else {
          filterCategory($(this).attr('data-cat'));
      }
      $(this).addClass('active');
  });
})(jQuery);
