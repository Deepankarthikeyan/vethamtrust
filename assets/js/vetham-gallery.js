(function ($) {
  if (!$('.vetham-gallery-grid').length) return;

  var $grid = $('.vetham-gallery-grid');
  $grid.isotope({
    itemSelector: '.gallery-item',
    layoutMode: 'fitRows',
    percentPosition: true
  });

  $('.vetham-gallery-filters .filter-btn').on('click', function () {
    var filter = $(this).attr('data-filter');
    $('.vetham-gallery-filters .filter-btn').removeClass('active');
    $(this).addClass('active');
    $grid.isotope({ filter: filter });
  });

  $(window).on('load', function () {
    $grid.isotope('layout');
  });
})(jQuery);
