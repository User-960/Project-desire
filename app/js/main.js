$(function () {
  $('.header__btn').on('click', function () {
    $('.rightside-menu').removeClass('rightside-menu--close')
  });
  $('.rightside-menu__close').on('click', function () {
    $('.rightside-menu').addClass('rightside-menu--close')
  });

  $('.header__btn-menu').on('click', function () {
    $('.menu').toggleClass('menu--open')
  });

  if ($(window).width() < 651) {
    $('.works-path__item--measurements').appendTo($('.works-path__items-box'));
  };

  $('.top__slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.contact__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 10,
    slidesToScroll: 10,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
        }
      },
      {
        breakpoint: 1511,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
        }
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        }
      },
      {
        breakpoint: 881,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 541,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  });

  $('.article-slider__box').slick({
    prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-left"><img src="images/arrow-slider-left.svg" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-right"><img src="images/arrow-slider-right.svg" alt="arrow right"></button>'
  });

  const mixer = mixitup('.gallery__inner', {
    load: {
      filter: '.living'
    }
  });

})