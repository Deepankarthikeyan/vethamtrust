#!/usr/bin/env python3
"""Batch-update all HTML pages with Vetham widgets, nav, and shared content."""

import re
import glob
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

NAV_HTML = """                                <ul class="navigation clearfix">
                                    <li{home_current}><a href="index.html">Home</a></li>
                                    <li class="dropdown{about_current}"><a href="about.html">About Us</a>
                                        <ul>
                                            <li><a href="team.html">Leadership</a></li>
                                        </ul>
                                    </li>
                                    <li{village_current}><a href="causes.html">Our Village</a></li>
                                    <li{courses_current}><a href="service.html">Courses</a></li>
                                    <li class="dropdown{events_current}"><a href="events.html">Events</a>
                                        <ul>
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="donate.html">Donate</a></li>
                                        </ul>
                                    </li>
                                    <li{social_current}><a href="gallery.html">Social Media</a></li>
                                    <li{contact_current}><a href="contact.html">Contact</a></li>
                                </ul>"""

STICKY_NAV = NAV_HTML.replace("{home_current}", "").replace("{about_current}", "").replace("{village_current}", "").replace("{courses_current}", "").replace("{events_current}", "").replace("{social_current}", "").replace("{contact_current}", "")

PAGE_CURRENT = {
    "index.html": {"home_current": ' class="current"'},
    "about.html": {"about_current": ' class="current"'},
    "team.html": {"about_current": ' class="current"'},
    "team-details.html": {"about_current": ' class="current"'},
    "causes.html": {"village_current": ' class="current"'},
    "causes-details.html": {"village_current": ' class="current"'},
    "causes-2.html": {"village_current": ' class="current"'},
    "service.html": {"courses_current": ' class="current"'},
    "events.html": {"events_current": ' class="current"'},
    "events-details.html": {"events_current": ' class="current"'},
    "blog.html": {"events_current": ' class="current"'},
    "blog-2.html": {"events_current": ' class="current"'},
    "blog-details.html": {"events_current": ' class="current"'},
    "donate.html": {"events_current": ' class="current"'},
    "gallery.html": {"social_current": ' class="current"'},
    "contact.html": {"contact_current": ' class="current"'},
    "testimonial.html": {"about_current": ' class="current"'},
    "faq.html": {},
}

DEFAULT_CURRENT = {
    "home_current": "",
    "about_current": "",
    "village_current": "",
    "courses_current": "",
    "events_current": "",
    "social_current": "",
    "contact_current": "",
}

CTA_OLD = re.compile(
    r'<!-- cta-style-two -->.*?<!-- cta-style-two end -->',
    re.DOTALL,
)

CTA_NEW = """<!-- cta-style-two -->
        <section class="cta-style-two">
            <div class="pattern-layer" style="background-image: url(assets/images/shape/shape-2.png);"></div>
            <div class="auto-container">
                <div class="inner-box">
                    <h2>Journey to enlightenment: <br />We invite you to experience divine love and grace</h2>
                    <div class="btn-box">
                        <a href="https://chat.whatsapp.com/" target="_blank" rel="noopener" class="theme-btn-one"><span>Join our WhatsApp Group</span></a>
                    </div>
                </div>
            </div>
        </section>
        <!-- cta-style-two end -->"""

FOOTER_SOCIAL_OLD = re.compile(
    r'<ul class="social-links">\s*<li><a href="index\.html"><i class="fab fa-facebook-f"></i></a></li>\s*<li><a href="index\.html"><i class="fab fa-twitter"></i></a></li>\s*<li><a href="index\.html"><i class="fab fa-instagram"></i></a></li>\s*</ul>',
)

FOOTER_SOCIAL_NEW = """<ul class="social-links">
                        <li><a href="https://www.facebook.com/vetham.kuzhumam.1/" target="_blank" rel="noopener"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://www.instagram.com/vethamkuzhumam/" target="_blank" rel="noopener"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.youtube.com/@VethamSpiritualGroup" target="_blank" rel="noopener"><i class="fab fa-youtube"></i></a></li>
                    </ul>"""

NAV_PATTERN = re.compile(
    r'<div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">\s*'
    r'<ul class="navigation clearfix">.*?</ul>\s*'
    r'</div>',
    re.DOTALL,
)

WIDGET_SCRIPT = '    <script src="assets/js/vetham-widgets.js"></script>\n'


def get_nav_for_page(filename):
    current = {**DEFAULT_CURRENT, **PAGE_CURRENT.get(filename, {})}
    return NAV_HTML.format(**current)


def process_file(filepath):
    filename = os.path.basename(filepath)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    original = content

    # Update navigation (both main and sticky headers)
    nav = get_nav_for_page(filename)
    content = NAV_PATTERN.sub(nav, content)

    # Replace CTA sections
    content = CTA_OLD.sub(CTA_NEW, content)

    # Fix footer social links
    content = FOOTER_SOCIAL_OLD.sub(FOOTER_SOCIAL_NEW, content)

    # Add vetham-custom.css if missing
    if "vetham-custom.css" not in content:
        content = content.replace(
            '<link href="assets/css/responsive.css" rel="stylesheet">',
            '<link href="assets/css/responsive.css" rel="stylesheet">\n<link href="assets/css/vetham-custom.css" rel="stylesheet">',
        )

    # Add vetham-widgets.js if missing
    if "vetham-widgets.js" not in content:
        content = content.replace(
            '    <script src="assets/js/script.js"></script>',
            '    <script src="assets/js/script.js"></script>\n' + WIDGET_SCRIPT,
        )

    if content != original:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated: {filename}")
        return True
    print(f"No changes: {filename}")
    return False


def main():
    html_files = glob.glob(os.path.join(ROOT, "*.html"))
    updated = 0
    for filepath in sorted(html_files):
        if process_file(filepath):
            updated += 1
    print(f"\nDone. Updated {updated}/{len(html_files)} files.")


if __name__ == "__main__":
    main()
