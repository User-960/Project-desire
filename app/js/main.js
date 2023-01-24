$(function () {
  $('.header__btn').on('click', function () {
    $('.rightside-menu').removeClass('rightside-menu--close')
  });
  $('.rightside-menu__close').on('click', function () {
    $('.rightside-menu').addClass('rightside-menu--close')
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

  const mixer = mixitup('.gallery__inner', {
    load: {
      filter: '.living'
    }
  });

})