(function () {
  if (document.getElementById('vetham-floating-widgets')) return;

  var widgetHtml =
    '<div id="vetham-floating-widgets" class="vetham-floating-widgets">' +
      '<div class="vetham-widget-panel" id="vetham-widget-panel">' +
        '<button type="button" class="vetham-widget-close" id="vetham-widget-close" aria-label="Close">&times;</button>' +
        '<div class="vetham-widget-section">' +
          '<h6>Click Razorpay to donate</h6>' +
          '<a href="donate.html" class="vetham-razorpay-link" title="Donate via Razorpay">' +
            '<img src="assets/images/vetham/razorpay-logo.png" alt="Razorpay - Donate Now" width="120" height="120">' +
          '</a>' +
        '</div>' +
        '<div class="vetham-widget-section">' +
          '<h6>Scan QR to donate</h6>' +
          '<img src="assets/images/vetham/qr-code-vkst.jpg" alt="Vetham Kuzhumam QR Code for donations" class="vetham-qr-code">' +
        '</div>' +
        '<div class="vetham-widget-section vetham-lang-section">' +
          '<h6>Click for language translation</h6>' +
          '<div class="gtranslate_wrapper" id="gt-wrapper-vetham"></div>' +
        '</div>' +
      '</div>' +
      '<button type="button" class="vetham-widget-toggle" id="vetham-widget-toggle" aria-label="Open donate and language options">' +
        '<i class="fas fa-hand-holding-heart"></i>' +
      '</button>' +
    '</div>';

  document.body.insertAdjacentHTML('beforeend', widgetHtml);

  var toggle = document.getElementById('vetham-widget-toggle');
  var panel = document.getElementById('vetham-widget-panel');
  var closeBtn = document.getElementById('vetham-widget-close');

  toggle.addEventListener('click', function () {
    panel.classList.toggle('open');
  });

  closeBtn.addEventListener('click', function () {
    panel.classList.remove('open');
  });

  window.gtranslateSettings = window.gtranslateSettings || {};
  window.gtranslateSettings['vetham'] = {
    default_language: 'en',
    languages: ['en', 'fr', 'de', 'hi', 'kn', 'ml', 'pt', 'es', 'ta', 'te'],
    url_structure: 'none',
    native_language_names: 1,
    wrapper_selector: '#gt-wrapper-vetham',
    horizontal_position: 'inline',
    flags_location: 'https://cdn.gtranslate.net/flags/'
  };

  var gtScript = document.createElement('script');
  gtScript.src = 'https://cdn.gtranslate.net/widgets/latest/ln.js';
  gtScript.defer = true;
  document.body.appendChild(gtScript);
})();
