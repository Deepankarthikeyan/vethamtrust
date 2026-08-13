const SCRIPT_CHAIN = [
  '/assets/js/jquery.js',
  '/assets/js/popper.min.js',
  '/assets/js/bootstrap.min.js',
  '/assets/js/owl.js',
  '/assets/js/wow.js',
  '/assets/js/validation.js',
  '/assets/js/jquery.fancybox.js',
  '/assets/js/appear.js',
  '/assets/js/scrollbar.js',
  '/assets/js/isotope.js',
  '/assets/js/jquery.nice-select.min.js',
  '/assets/js/parallax-scroll.js',
  '/assets/js/jquery-ui.js',
  '/assets/js/nav-tool.js',
  '/assets/js/jquery.bootstrap-touchspin.js',
  '/assets/js/bxslider.js',
  '/assets/js/script.js',
];

let scriptsLoaded = false;
let loadingPromise = null;

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[data-theme="${src}"]`)) {
      resolve();
      return;
    }
    const el = document.createElement('script');
    el.src = src;
    el.dataset.theme = src;
    el.async = false;
    el.onload = () => resolve();
    el.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(el);
  });
}

export function loadThemeScripts() {
  if (scriptsLoaded) return Promise.resolve();
  if (loadingPromise) return loadingPromise;

  loadingPromise = (async () => {
    for (const src of SCRIPT_CHAIN) {
      await loadScript(src);
    }
    scriptsLoaded = true;
  })();

  return loadingPromise;
}

function destroyOwl($) {
  $('.owl-carousel').each(function destroy() {
    const $el = $(this);
    if ($el.hasClass('owl-loaded')) {
      $el.trigger('destroy.owl.carousel');
      $el.removeClass('owl-loaded owl-hidden');
    }
  });
}

function initOwl($, selector, options) {
  if ($(selector).length) {
    $(selector).owlCarousel(options);
  }
}

export function reinitThemePlugins() {
  const $ = window.jQuery;
  if (!$) return;

  destroyOwl($);

  initOwl($, '.banner-carousel', {
    loop: true,
    margin: 0,
    nav: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    active: true,
    smartSpeed: 1000,
    autoplay: 6000,
    navText: ['<span class="fal fa-angle-left"></span>', '<span class="fal fa-angle-right"></span>'],
    responsive: { 0: { items: 1 }, 600: { items: 1 }, 800: { items: 1 }, 1024: { items: 1 } },
  });

  const carouselDefaults = {
    loop: true,
    margin: 30,
    nav: true,
    smartSpeed: 500,
    autoplay: 5000,
    navText: ['<span class="fal fa-angle-left"></span>', '<span class="fal fa-angle-right"></span>'],
    responsive: { 0: { items: 1 }, 480: { items: 1 }, 600: { items: 2 }, 800: { items: 3 }, 1024: { items: 3 } },
  };

  initOwl($, '.single-item-carousel', { ...carouselDefaults, responsive: { 0: { items: 1 }, 480: { items: 1 }, 600: { items: 1 }, 800: { items: 1 }, 1024: { items: 1 } } });
  initOwl($, '.two-item-carousel', { ...carouselDefaults, responsive: { 0: { items: 1 }, 480: { items: 1 }, 600: { items: 1 }, 800: { items: 2 }, 1024: { items: 2 } } });
  initOwl($, '.three-item-carousel', carouselDefaults);
  initOwl($, '.five-item-carousel', { ...carouselDefaults, margin: 0, responsive: { 0: { items: 2 }, 480: { items: 3 }, 600: { items: 4 }, 800: { items: 5 }, 1024: { items: 5 } } });
  initOwl($, '.project-carousel', {
    loop: true,
    margin: 0,
    nav: true,
    smartSpeed: 500,
    autoplay: 5000,
    navText: ['<span class="fal fa-angle-left"></span>', '<span class="fal fa-angle-right"></span>'],
    responsive: { 0: { items: 1 }, 480: { items: 2 }, 600: { items: 3 }, 800: { items: 4 }, 1024: { items: 5 } },
  });

  if ($('.bxslider').length && $.fn.bxSlider) {
    $('.bxslider').each(function each() {
      const $slider = $(this);
      if ($slider.data('bxSlider')) {
        $slider.bxSlider('destroySlider');
      }
      $slider.bxSlider({ mode: 'fade', auto: true, autoControls: false, controls: false, pagerCustom: '.slider-pager' });
    });
  }

  if ($.fn.appear) {
    $('.count-text').appear();
    $('.count-text').off('appear').on('appear', function onAppear() {
      const $t = $(this);
      if (!$t.hasClass('counted')) {
        $t.addClass('counted');
        const stop = parseInt($t.data('stop'), 10) || 0;
        $({ count: 0 }).animate({ count: stop }, { duration: 1500, easing: 'linear', step() { $t.text(Math.floor(this.count)); }, complete() { $t.text(stop); } });
      }
    });
  }

  if (typeof window.WOW === 'function') {
    new window.WOW({ live: false }).init();
  }

  if ($('.loader-wrap').length) {
    $('.loader-wrap').delay(600).fadeOut(400);
  }
}

export function setupMobileMenu() {
  const $ = window.jQuery;
  if (!$ || !$('.mobile-menu').length) return;

  $('.mobile-menu .menu-box .menu-outer').empty();
  const mobileMenuContent = $('.main-header .menu-area .main-menu').html();
  $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
  $('.sticky-header .main-menu').empty().append($('.main-header .menu-area .main-menu .navigation').clone());

  $('.main-header .navigation li.dropdown').each(function each() {
    if (!$(this).children('.dropdown-btn').length) {
      $(this).append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');
    }
  });
}
