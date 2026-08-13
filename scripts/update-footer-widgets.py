#!/usr/bin/env python3
"""Replace footer widget-section to match vethamspiritualtrust.com layout."""

import re
import glob
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

FOOTER_WIDGETS = """                <div class="widget-section vetham-footer-grid-section">
                    <div class="row clearfix vetham-footer-grid">
                        <div class="col-lg-2 col-md-6 col-sm-12 footer-column">
                            <div class="links-widget footer-widget">
                                <div class="widget-title"><h3>Quick Links</h3></div>
                                <div class="widget-content">
                                    <ul class="links-list clearfix">
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="causes.html">Our Village</a></li>
                                        <li><a href="service.html">Courses</a></li>
                                        <li><a href="events.html">Events</a></li>
                                        <li><a href="gallery.html">Social Media</a></li>
                                        <li><a href="blog.html">Blogs</a></li>
                                        <li><a href="donate.html">Donate</a></li>
                                        <li><a href="contact.html">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-12 footer-column">
                            <div class="donate-widget footer-widget centred">
                                <div class="widget-title"><h3>Donate us</h3></div>
                                <div class="widget-content">
                                    <figure class="vetham-qr-figure">
                                        <img src="assets/images/vetham/qr-code-vkst.jpg" alt="qr-code-vkst" title="qr-code-vkst" class="vetham-qr-code">
                                    </figure>
                                    <figure class="vetham-razorpay-figure">
                                        <a href="https://rzp.io/rzp/vethamspiritualtrust" target="_blank" rel="noopener">
                                            <img src="assets/images/vetham/razorpay-logo.png" alt="Razorpay">
                                        </a>
                                        <figcaption>Click Razorpay to donate</figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div class="about-widget footer-widget">
                                <div class="widget-title"><h3>Address</h3></div>
                                <div class="text">
                                    <p>Vetham Kuzhumam Spiritual Trust, Door No: 120, ST-2 Marisettipathi Village Kumitipathi Post, Othakkal Mandapam (Via) Madukkarai Taluk, Coimbatore District. (South) Pincode : 641032</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-12 footer-column">
                            <div class="language-widget footer-widget centred">
                                <div class="widget-title"><h3>Click for language translation</h3></div>
                                <div class="widget-content">
                                    <div class="gtranslate_wrapper" id="gt-wrapper-vetham"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div class="contact-widget footer-widget">
                                <div class="widget-title"><h3>Contact Information</h3></div>
                                <div class="widget-content vetham-footer-contact">
                                    <p><a href="mailto:vethamkuzhumam@gmail.com">Email: vethamkuzhumam@gmail.com</a></p>
                                    <p><a href="tel:+919944511067">Call: +91 9944511067</a></p>
                                    <div class="vetham-footer-social-names">
                                        <a href="https://www.facebook.com/vetham.kuzhumam.1/" target="_blank" rel="noopener"><i class="fab fa-facebook-f"></i> Facebook</a>
                                        <a href="https://www.instagram.com/vethamkuzhumam/" target="_blank" rel="noopener"><i class="fab fa-instagram"></i> Instagram</a>
                                        <a href="https://www.youtube.com/@VethamSpiritualGroup" target="_blank" rel="noopener"><i class="fab fa-youtube"></i> Youtube</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
"""

WIDGET_PATTERN = re.compile(
    r'<div class="widget-section[^"]*">.*?</div>\s*</div>\s*(?=\s*<div class="footer-bottom)',
    re.DOTALL,
)

# Also remove vetham-footer-widgets section if injected before footer
FOOTER_EXTRA = re.compile(
    r'<section class="vetham-footer-widgets">.*?</section>\s*',
    re.DOTALL,
)


def fix_file(path):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    original = content
    content = FOOTER_EXTRA.sub("", content)
    if WIDGET_PATTERN.search(content):
        content = WIDGET_PATTERN.sub(FOOTER_WIDGETS, content, count=1)
    if content != original:
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Fixed: {os.path.basename(path)}")
        return True
    print(f"Skip: {os.path.basename(path)}")
    return False


def main():
    files = glob.glob(os.path.join(ROOT, "*.html"))
    n = sum(fix_file(f) for f in sorted(files))
    print(f"Updated {n}/{len(files)} files")


if __name__ == "__main__":
    main()
