(function () {
  if (window.__vethamWidgetsInit) return;
  window.__vethamWidgetsInit = true;

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

  var WHATSAPP_GROUP = 'https://chat.whatsapp.com/EQuPUtcPzEdIZVlT8JyyNw';
  var RAZORPAY_URL = 'https://rzp.io/rzp/vethamspiritualtrust';

  var fabHTML =
    '<div class="vetham-fab-container" id="vetham-fab-container">' +
      '<a href="' + WHATSAPP_GROUP + '" class="vetham-fab vetham-fab-whatsapp" target="_blank" rel="noopener" title="Chat on WhatsApp" aria-label="Chat on WhatsApp">' +
        '<i class="fab fa-whatsapp"></i>' +
        '<span class="vetham-fab-label">WhatsApp</span>' +
      '</a>' +
      '<div class="vetham-fab-right">' +
        '<button type="button" class="vetham-fab vetham-fab-language" id="vetham-fab-language" title="Change language" aria-label="Change language">' +
          '<i class="fas fa-globe"></i>' +
          '<span class="vetham-fab-label">Language</span>' +
        '</button>' +
        '<button type="button" class="vetham-fab vetham-fab-donate" id="vetham-fab-donate" title="Donate us" aria-label="Donate us">' +
          '<i class="fas fa-qrcode"></i>' +
          '<span class="vetham-fab-label">Donate</span>' +
        '</button>' +
      '</div>' +
      '<div class="vetham-fab-overlay" id="vetham-fab-overlay" hidden></div>' +
      '<div class="vetham-fab-panel vetham-fab-panel-language" id="vetham-panel-language" hidden>' +
        '<button type="button" class="vetham-fab-panel-close" aria-label="Close">&times;</button>' +
        '<h4>Choose Language</h4>' +
        '<p class="vetham-fab-panel-sub">Click for language translation</p>' +
        '<div class="gtranslate_wrapper" id="gt-wrapper-vetham"></div>' +
      '</div>' +
      '<div class="vetham-fab-panel vetham-fab-panel-donate" id="vetham-panel-donate" hidden>' +
        '<button type="button" class="vetham-fab-panel-close" aria-label="Close">&times;</button>' +
        '<h4>Donate us</h4>' +
        '<p class="vetham-fab-panel-sub">Scan QR or pay via Razorpay</p>' +
        '<figure class="vetham-fab-qr">' +
          '<button type="button" class="vetham-fab-qr-enlarge" id="vetham-qr-enlarge" aria-label="Tap to enlarge QR code for scanning">' +
            '<img src="assets/images/vetham/qr-code-vkst-scan.png" alt="Scan to pay Vetham Kuzhumam Trust">' +
          '</button>' +
          '<figcaption class="vetham-fab-upi">UPI: 6515433630@indianbk</figcaption>' +
          '<p class="vetham-fab-qr-hint">Tap QR to enlarge for scanning</p>' +
        '</figure>' +
        '<a href="' + RAZORPAY_URL + '" class="vetham-fab-razorpay" target="_blank" rel="noopener">' +
          '<img src="assets/images/vetham/razorpay-logo.png" alt="Razorpay">' +
          '<span>Click Razorpay to donate</span>' +
        '</a>' +
      '</div>' +
      '<div class="vetham-qr-fullscreen" id="vetham-qr-fullscreen" hidden>' +
        '<button type="button" class="vetham-qr-fullscreen-close" aria-label="Close">&times;</button>' +
        '<img src="assets/images/vetham/qr-code-vkst-scan.png" alt="Scan to pay">' +
        '<p>UPI: 6515433630@indianbk</p>' +
      '</div>' +
    '</div>';

  function injectFab() {
    if (document.getElementById('vetham-fab-container')) return;
    var wrap = document.createElement('div');
    wrap.innerHTML = fabHTML;
    document.body.appendChild(wrap.firstElementChild);
  }

  function closePanels() {
    document.getElementById('vetham-panel-language').hidden = true;
    document.getElementById('vetham-panel-donate').hidden = true;
    document.getElementById('vetham-fab-overlay').hidden = true;
    document.getElementById('vetham-qr-fullscreen').hidden = true;
    document.getElementById('vetham-fab-language').classList.remove('active');
    document.getElementById('vetham-fab-donate').classList.remove('active');
  }

  function openPanel(name) {
    var langPanel = document.getElementById('vetham-panel-language');
    var donatePanel = document.getElementById('vetham-panel-donate');
    var langBtn = document.getElementById('vetham-fab-language');
    var donateBtn = document.getElementById('vetham-fab-donate');
    var overlay = document.getElementById('vetham-fab-overlay');
    var isOpen = name === 'language' ? !langPanel.hidden : !donatePanel.hidden;

    closePanels();
    if (isOpen) return;

    overlay.hidden = false;
    if (name === 'language') {
      langPanel.hidden = false;
      langBtn.classList.add('active');
    } else {
      donatePanel.hidden = false;
      donateBtn.classList.add('active');
    }
  }

  function bindEvents() {
    document.getElementById('vetham-fab-language').addEventListener('click', function () {
      openPanel('language');
    });
    document.getElementById('vetham-fab-donate').addEventListener('click', function () {
      openPanel('donate');
    });
    document.getElementById('vetham-fab-overlay').addEventListener('click', closePanels);
    document.querySelectorAll('.vetham-fab-panel-close').forEach(function (btn) {
      btn.addEventListener('click', closePanels);
    });
    document.getElementById('vetham-qr-enlarge').addEventListener('click', function () {
      document.getElementById('vetham-qr-fullscreen').hidden = false;
    });
    document.querySelector('.vetham-qr-fullscreen-close').addEventListener('click', function () {
      document.getElementById('vetham-qr-fullscreen').hidden = true;
    });
    document.getElementById('vetham-qr-fullscreen').addEventListener('click', function (e) {
      if (e.target === this) this.hidden = true;
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closePanels();
    });
  }

  injectFab();
  bindEvents();
})();
