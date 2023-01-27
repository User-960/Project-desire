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
    slidesToShow: 8,
    slidesToScroll: 8
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