(function () {
  if (document.getElementById('vetham-sidebar-widgets')) return;

  function asset(path) {
    return path;
  }

  var sidebarHtml =
    '<aside id="vetham-sidebar-widgets" class="vetham-sidebar-widgets" aria-label="Donate, language, and contact">' +
      '<div class="vetham-sidebar-inner">' +
        '<div class="vetham-widget-section vetham-donate-section">' +
          '<h6 class="vetham-widget-title">Donate us</h6>' +
          '<a href="https://vethamspiritualtrust.com/donations/" target="_blank" rel="noopener" class="vetham-razorpay-link" title="Donate via Razorpay">' +
            '<img src="' + asset('assets/images/vetham/razorpay-logo.png') + '" alt="Razorpay">' +
          '</a>' +
          '<p class="vetham-widget-caption">Click Razorpay to donate</p>' +
          '<img src="' + asset('assets/images/vetham/qr-code-vkst.jpg') + '" alt="qr-code-vkst" class="vetham-qr-code" title="qr-code-vkst">' +
        '</div>' +
        '<div class="vetham-widget-section vetham-lang-section">' +
          '<h6 class="vetham-widget-title">Click for language translation</h6>' +
          '<div class="gtranslate_wrapper" id="gt-wrapper-vetham"></div>' +
        '</div>' +
        '<div class="vetham-widget-section vetham-contact-section">' +
          '<h6 class="vetham-widget-title">Contact Information</h6>' +
          '<p class="vetham-contact-item"><a href="mailto:vethamkuzhumam@gmail.com">Email: vethamkuzhumam@gmail.com</a></p>' +
          '<p class="vetham-contact-item"><a href="tel:+919944511067">Call: +91 9944511067</a></p>' +
          '<div class="vetham-sidebar-social">' +
            '<a href="https://www.facebook.com/vetham.kuzhumam.1/" target="_blank" rel="noopener" class="vetham-social-link"><i class="fab fa-facebook-f"></i> Facebook</a>' +
            '<a href="https://www.instagram.com/vethamkuzhumam/" target="_blank" rel="noopener" class="vetham-social-link"><i class="fab fa-instagram"></i> Instagram</a>' +
            '<a href="https://www.youtube.com/@VethamSpiritualGroup" target="_blank" rel="noopener" class="vetham-social-link"><i class="fab fa-youtube"></i> Youtube</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</aside>';

  var footerHtml =
    '<section class="vetham-footer-widgets">' +
      '<div class="auto-container">' +
        '<div class="row clearfix">' +
          '<div class="vetham-footer-widget-col">' +
            '<h4>Donate us</h4>' +
            '<a href="https://vethamspiritualtrust.com/donations/" target="_blank" rel="noopener">' +
              '<img src="' + asset('assets/images/vetham/razorpay-logo.png') + '" alt="Razorpay" style="max-width:100px;margin-bottom:10px;">' +
            '</a>' +
            '<img src="' + asset('assets/images/vetham/qr-code-vkst.jpg') + '" alt="qr-code-vkst" class="vetham-qr-code" title="qr-code-vkst">' +
          '</div>' +
          '<div class="vetham-footer-widget-col">' +
            '<h4>Click for language translation</h4>' +
            '<p style="color:#bbb;font-size:13px;margin-bottom:8px;">English · Français · Deutsch · हिन्दी · ಕನ್ನಡ · മലയാളം · Português · Español · தமிழ் · తెలుగు</p>' +
            '<div class="gtranslate_wrapper" id="gt-wrapper-vetham-footer"></div>' +
          '</div>' +
          '<div class="vetham-footer-widget-col vetham-footer-contact">' +
            '<h4>Contact Information</h4>' +
            '<p><a href="mailto:vethamkuzhumam@gmail.com">Email: vethamkuzhumam@gmail.com</a></p>' +
            '<p><a href="tel:+919944511067">Call: +91 9944511067</a></p>' +
            '<div class="vetham-footer-social">' +
              '<a href="https://www.facebook.com/vetham.kuzhumam.1/" target="_blank" rel="noopener"><i class="fab fa-facebook-f"></i> Facebook</a>' +
              '<a href="https://www.instagram.com/vethamkuzhumam/" target="_blank" rel="noopener"><i class="fab fa-instagram"></i> Instagram</a>' +
              '<a href="https://www.youtube.com/@VethamSpiritualGroup" target="_blank" rel="noopener"><i class="fab fa-youtube"></i> Youtube</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';

  document.body.insertAdjacentHTML('beforeend', sidebarHtml);

  var footer = document.querySelector('footer.main-footer');
  if (footer && !document.querySelector('.vetham-footer-widgets')) {
    footer.insertAdjacentHTML('beforebegin', footerHtml);
  }

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
  window.gtranslateSettings['vetham-footer'] = {
    default_language: 'en',
    languages: ['en', 'fr', 'de', 'hi', 'kn', 'ml', 'pt', 'es', 'ta', 'te'],
    url_structure: 'none',
    native_language_names: 1,
    wrapper_selector: '#gt-wrapper-vetham-footer',
    horizontal_position: 'inline',
    flags_location: 'https://cdn.gtranslate.net/flags/'
  };

  if (!document.querySelector('script[data-vetham-gtranslate]')) {
    var gtScript = document.createElement('script');
    gtScript.src = 'https://cdn.gtranslate.net/widgets/latest/ln.js';
    gtScript.defer = true;
    gtScript.setAttribute('data-vetham-gtranslate', '1');
    document.body.appendChild(gtScript);
  }
})();
