#!/usr/bin/env python3
"""Bulk update Trusthand theme with Vetham Spiritual Trust content."""

import re
import glob
import os

WORKSPACE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

NAV_MENU = '''                                <ul class="navigation clearfix">
                                    <li{home_current}><a href="index.html">Home</a></li>
                                    <li{about_current}><a href="about.html">About Us</a></li>
                                    <li{village_current}><a href="causes.html">Our Village</a></li>
                                    <li{service_current}><a href="service.html">Services</a></li>
                                    <li{team_current}><a href="team.html">Leadership</a></li>
                                    <li{events_current}><a href="events.html">Events</a></li>
                                    <li{blog_current}><a href="blog.html">Blog</a></li>
                                    <li{contact_current}><a href="contact.html">Contact</a></li>
                                </ul>'''

FOOTER_LINKS = '''                                    <ul class="links-list clearfix">
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="service.html">Services</a></li>
                                        <li><a href="causes.html">Our Village</a></li>
                                        <li><a href="team.html">Leadership</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                    </ul>'''

FOOTER_USEFUL = '''                                    <ul class="links-list clearfix">
                                        <li><a href="events.html">Events</a></li>
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="gallery.html">Gallery</a></li>
                                        <li><a href="faq.html">FAQ</a></li>
                                        <li><a href="testimonial.html">Testimonials</a></li>
                                    </ul>'''

FOOTER_CONTACT = '''                                    <p>Vetham Kuzhumam Spiritual Trust — World Peace through Individual Peace.</p>
                                    <ul class="info-list clearfix">
                                        <li><i class="icon-17"></i>Marisettipathi Village, Kumitipathi Post, Madukkarai, Coimbatore - 641032</li>
                                        <li><i class="icon-18"></i><a href="mailto:vethamkuzhumam@gmail.com">vethamkuzhumam@gmail.com</a></li>
                                        <li><i class="icon-19"></i><a href="tel:+919944511067">+91 9944511067</a></li>
                                    </ul>'''

FOOTER_ABOUT = '''                                    <p>Vetham Kuzhumam Spiritual Trust, founded in 2017 and inspired by Yogiraj Vethathiri Maharishi, is dedicated to the vision of "World Peace through Individual Peace."</p>
                                    <p>Through yoga, meditation, and holistic teachings, we guide individuals on their spiritual journeys.</p>'''

PAGE_CURRENT = {
    'index.html': {'home_current': ' class="current"'},
    'about.html': {'about_current': ' class="current"'},
    'causes.html': {'village_current': ' class="current"'},
    'causes-2.html': {'village_current': ' class="current"'},
    'causes-details.html': {'village_current': ' class="current"'},
    'service.html': {'service_current': ' class="current"'},
    'team.html': {'team_current': ' class="current"'},
    'team-details.html': {'team_current': ' class="current"'},
    'events.html': {'events_current': ' class="current"'},
    'events-details.html': {'events_current': ' class="current"'},
    'blog.html': {'blog_current': ' class="current"'},
    'blog-2.html': {'blog_current': ' class="current"'},
    'blog-details.html': {'blog_current': ' class="current"'},
    'contact.html': {'contact_current': ' class="current"'},
}

DEFAULT_CURRENT = {
    'home_current': '', 'about_current': '', 'village_current': '',
    'service_current': '', 'team_current': '', 'events_current': '',
    'blog_current': '', 'contact_current': '',
}


def build_nav(filename):
    current = {**DEFAULT_CURRENT, **PAGE_CURRENT.get(filename, {})}
    return NAV_MENU.format(**current)


def replace_nav(content, filename):
    pattern = r'<ul class="navigation clearfix">.*?</ul>'
    return re.sub(pattern, build_nav(filename), content, count=1, flags=re.DOTALL)


def simple_replacements(content):
    replacements = [
        ('Trusthand - HTML 5 Template Preview', 'Vetham Kuzhumam Spiritual Trust – Spiritual Teachings & Yoga Centre'),
        ('Trusthand', 'Vetham Kuzhumam'),
        ('trusthand', 'vetham'),
        ('Chicago 12, Melborne City, USA', 'Marisettipathi Village, Kumitipathi Post, Madukkarai, Coimbatore - 641032'),
        ('+88 01682648101', '+91 9944511067'),
        ('info@example.com', 'vethamkuzhumam@gmail.com'),
        ('example@info.com', 'vethamkuzhumam@gmail.com'),
        ('333 666 0000', '+91 9944511067'),
        ('3336660000', '919944511067'),
        ('New Hyde Park, NY 11040', 'Marisettipathi Village, Coimbatore - 641032'),
        ('Copyright 2022 by <a href="index.html">trusthand</a> All Right Reserved.', 'Copyright 2025 by <a href="index.html">Vetham Kuzhumam Spiritual Trust</a>. All Rights Reserved.'),
        ('Copyright 2022 by <a href="index.html">vetham</a> All Right Reserved.', 'Copyright 2025 by <a href="index.html">Vetham Kuzhumam Spiritual Trust</a>. All Rights Reserved.'),
        ('<h2>Donate Your Amount</h2>', '<h2>Donate to Vetham Kuzhumam Spiritual Trust</h2>'),
        ('<h4>About Us</h4>\n                                <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam laboris.</p>',
         '<h4>About Us</h4>\n                                <p>Vetham Kuzhumam Spiritual Trust, founded in 2017 and inspired by Yogiraj Vethathiri Maharishi, is dedicated to World Peace through Individual Peace.</p>'),
        ('<h3>Usefull Links</h3>', '<h3>Useful Links</h3>'),
        ('<link rel="icon" href="assets/images/favicon.ico" type="image/x-icon">',
         '<link rel="icon" href="assets/images/vetham/favicon.jpg" type="image/jpeg">'),
    ]
    for old, new in replacements:
        content = content.replace(old, new)
    return content


def replace_preloader(content):
    preloader = '''                        <div class="txt-loading">
                            <span data-text-preloader="v" class="letters-loading">v</span>
                            <span data-text-preloader="e" class="letters-loading">e</span>
                            <span data-text-preloader="t" class="letters-loading">t</span>
                            <span data-text-preloader="h" class="letters-loading">h</span>
                            <span data-text-preloader="a" class="letters-loading">a</span>
                            <span data-text-preloader="m" class="letters-loading">m</span>
                        </div>'''
    pattern = r'<div class="txt-loading">.*?</div>\s*</div>\s*</div>\s*</div>\s*</div>'
    return re.sub(pattern, preloader + '\n                    </div>  \n                </div>\n            </div>\n        </div>', content, count=1, flags=re.DOTALL)


def replace_footer_sections(content):
    content = re.sub(
        r'<div class="text">\s*<p>Lorem ipsum dolor sit amet consectetur adipiscing elitsollicit.*?</div>\s*</div>\s*</div>\s*<div class="col-lg-3 col-md-6 col-sm-12 footer-column">\s*<div class="links-widget footer-widget ml_50">',
        '<div class="text">\n' + FOOTER_ABOUT + '\n                                </div>\n                            </div>\n                        </div>\n                        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">\n                            <div class="links-widget footer-widget ml_50">',
        content, count=1, flags=re.DOTALL
    )
    content = re.sub(
        r'(<div class="links-widget footer-widget ml_50">.*?<h3>Quick Link</h3>.*?</div>\s*<div class="widget-content">).*?(</ul>\s*</div>)',
        r'\1\n' + FOOTER_LINKS + r'\n                                \2',
        content, count=1, flags=re.DOTALL
    )
    content = re.sub(
        r'(<div class="links-widget footer-widget ml_30">.*?<h3>Useful Links</h3>.*?</div>\s*<div class="widget-content">).*?(</ul>\s*</div>)',
        r'\1\n' + FOOTER_USEFUL + r'\n                                \2',
        content, count=1, flags=re.DOTALL
    )
    content = re.sub(
        r'(<div class="contact-widget footer-widget ml_30">.*?<h3>Contact</h3>.*?</div>\s*<div class="widget-content">).*?(</ul>\s*</div>\s*</div>\s*</div>)',
        r'\1\n' + FOOTER_CONTACT + r'\n                                \2',
        content, count=1, flags=re.DOTALL
    )
    return content


def replace_mobile_contact(content):
    content = re.sub(
        r'<div class="contact-info">.*?</div>\s*<div class="social-links">',
        '''<div class="contact-info">
                    <h4>Contact Info</h4>
                    <ul>
                        <li>Marisettipathi Village, Coimbatore - 641032</li>
                        <li><a href="tel:+919944511067">+91 9944511067</a></li>
                        <li><a href="mailto:vethamkuzhumam@gmail.com">vethamkuzhumam@gmail.com</a></li>
                    </ul>
                </div>
                <div class="social-links">''',
        content, count=1, flags=re.DOTALL
    )
    return content


def process_file(filepath):
    filename = os.path.basename(filepath)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    content = simple_replacements(content)
    content = replace_nav(content, filename)
    if 'main-footer' in content:
        content = replace_footer_sections(content)
    if 'mobile-menu' in content:
        content = replace_mobile_contact(content)
    if 'txt-loading' in content:
        content = replace_preloader(content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Updated: {filename}')


def main():
    html_files = glob.glob(os.path.join(WORKSPACE, '*.html'))
    for filepath in sorted(html_files):
        process_file(filepath)


if __name__ == '__main__':
    main()
