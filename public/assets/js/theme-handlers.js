(function ($) {
  'use strict';

  function headerStyle() {
    if (!$('.main-header').length) return;
    const windowpos = $(window).scrollTop();
    const siteHeader = $('.main-header');
    const scrollLink = $('.scroll-top');
    if (windowpos >= 110) {
      siteHeader.addClass('fixed-header');
      scrollLink.addClass('open');
    } else {
      siteHeader.removeClass('fixed-header');
      scrollLink.removeClass('open');
    }
  }

  headerStyle();
  $(window).on('scroll', headerStyle);

  $('.main-header .navigation li.dropdown').each(function each() {
    if (!$(this).children('.dropdown-btn').length) {
      $(this).append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');
    }
  });

  if ($('.mobile-menu').length) {
    $('.mobile-menu li.dropdown .dropdown-btn').on('click', function onClick() {
      $(this).toggleClass('open');
      $(this).prev('ul').slideToggle(300);
    });

    $('.mobile-nav-toggler').on('click', function onClick() {
      $('body').addClass('mobile-menu-visible');
    });

    $('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on('click', function onClick() {
      $('body').removeClass('mobile-menu-visible');
    });
  }

  if ($('#search-popup').length) {
    $('.search-toggler').on('click', function onClick() {
      $('#search-popup').addClass('popup-visible');
    });
    $(document).on('keydown', function onKey(e) {
      if (e.keyCode === 27) $('#search-popup').removeClass('popup-visible');
    });
    $('.close-search, .search-popup .overlay-layer').on('click', function onClick() {
      $('#search-popup').removeClass('popup-visible');
    });
  }

  if ($('#donate-popup').length) {
    $('.donate-box-btn').on('click', function onClick() {
      $('#donate-popup').addClass('popup-visible');
    });
    $('.close-donate').on('click', function onClick() {
      $('#donate-popup').removeClass('popup-visible');
    });
  }

  $('.scroll-top-inner').on('click', function onClick() {
    $('html, body').animate({ scrollTop: 0 }, 400);
    return false;
  });

  $('.preloader-close').on('click', function onClick() {
    $('.loader-wrap').addClass('is-hidden');
  });
}(window.jQuery));
