#!/usr/bin/env python3
"""Apply unified header-style-two header across all HTML pages."""

import re
import glob
import os

WORKSPACE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Which top-level / parent keys are active per page
PAGE_ACTIVE = {
    'index.html': {'home'},
    'about.html': {'about'},
    'team.html': {'about', 'leadership'},
    'team-details.html': {'about', 'leadership'},
    'causes.html': {'village'},
    'causes-2.html': {'village'},
    'causes-details.html': {'village', 'donate'},
    'service.html': {'courses', 'services'},
    'events.html': {'events'},
    'events-details.html': {'events'},
    'blog.html': {'blog'},
    'blog-2.html': {'blog'},
    'blog-details.html': {'blog'},
    'gallery.html': {'social'},
    'contact.html': {'contact'},
}


def is_active(filename, key):
    return key in PAGE_ACTIVE.get(filename, set())


def build_nav(filename):
    active = PAGE_ACTIVE.get(filename, set())
    about_cls = ' class="dropdown current"' if 'about' in active else ' class="dropdown"'
    leadership_cls = ' class="current"' if 'leadership' in active else ''
    village_cls = ' class="current"' if 'village' in active else ''
    courses_cls = ' class="current"' if 'courses' in active else ''
    events_cls = ' class="dropdown current"' if 'events' in active else ' class="dropdown"'
    blog_cls = ' class="current"' if 'blog' in active else ''
    services_cls = ' class="current"' if 'services' in active else ''
    donate_cls = ' class="current"' if 'donate' in active else ''
    social_cls = ' class="current"' if 'social' in active else ''
    contact_cls = ' class="current"' if 'contact' in active else ''
    home_cls = ' class="current"' if 'home' in active else ''

    return f'''                                <ul class="navigation clearfix">
                                    <li{home_cls}><a href="index.html">Home</a></li>
                                    <li{about_cls}><a href="about.html">About Us</a>
                                        <ul>
                                            <li{leadership_cls}><a href="team.html">Leadership</a></li>
                                        </ul>
                                    </li>
                                    <li{village_cls}><a href="causes.html">Our Village</a></li>
                                    <li{courses_cls}><a href="service.html">Courses</a></li>
                                    <li{events_cls}><a href="events.html">Events</a>
                                        <ul>
                                            <li{blog_cls}><a href="blog.html">Blog</a></li>
                                            <li{services_cls}><a href="service.html">Services</a></li>
                                            <li{donate_cls}><a href="causes.html">Donate</a></li>
                                        </ul>
                                    </li>
                                    <li{social_cls}><a href="gallery.html">Social Media</a></li>
                                    <li{contact_cls}><a href="contact.html">Contact</a></li>
                                </ul>'''


def build_header(filename):
    nav = build_nav(filename)
    return f'''        <!-- main header -->
        <header class="main-header header-style-two">
            <!-- header-top -->
            <div class="header-top">
                <div class="top-inner">
                    <div class="top-left">
                        <p>World Peace through Individual Peace</p>
                        <ul class="social-links clearfix">
                            <li><a href="https://www.facebook.com/vetham.kuzhumam.1/" target="_blank" rel="noopener"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://www.instagram.com/vethamkuzhumam/" target="_blank" rel="noopener"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="https://www.youtube.com/@VethamSpiritualGroup" target="_blank" rel="noopener"><i class="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                    <div class="top-right">
                        <ul class="info">
                            <li><i class="icon-20"></i>Marisettipathi Village, Coimbatore - 641032</li>
                            <li><i class="icon-21"></i><a href="tel:+919944511067">+91 9944511067</a></li>
                            <li><i class="icon-22"></i><a href="mailto:vethamkuzhumam@gmail.com">vethamkuzhumam@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- header-lower -->
            <div class="header-lower">
                <div class="outer-box">
                    <div class="logo-box">
                        <figure class="logo"><a href="index.html"><img src="assets/images/logo-2.png" alt="Vetham Kuzhumam Spiritual Trust"></a></figure>
                    </div>
                    <div class="menu-area clearfix">
                        <!--Mobile Navigation Toggler-->
                        <div class="mobile-nav-toggler">
                            <i class="icon-bar"></i>
                            <i class="icon-bar"></i>
                            <i class="icon-bar"></i>
                        </div>
                        <nav class="main-menu navbar-expand-md navbar-light">
                            <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
{nav}
                            </div>
                        </nav>
                    </div>
                    <ul class="nav-right">
                        <li class="search-box-outer search-toggler">
                            <i class="icon-1"></i>
                        </li>
                        <li class="btn-box">
                            <button class="donate-box-btn theme-btn-one"><span>Donate Now</span></button>
                        </li>
                    </ul>
                </div>
            </div>

            <!--sticky Header-->
            <div class="sticky-header">
                <div class="outer-container">
                    <div class="outer-box">
                        <div class="logo-box">
                            <figure class="logo"><a href="index.html"><img src="assets/images/logo-2.png" alt="Vetham Kuzhumam Spiritual Trust"></a></figure>
                        </div>
                        <div class="menu-area clearfix">
                            <nav class="main-menu clearfix">
                                <!--Keep This Empty / Menu will come through Javascript-->
                            </nav>
                            <ul class="nav-right">
                                <li class="search-box-outer search-toggler">
                                    <i class="icon-1"></i>
                                </li>
                                <li class="btn-box">
                                    <button class="donate-box-btn theme-btn-one"><span>Donate Now</span></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- main-header end -->'''


def add_custom_css(content):
    link = '<link href="assets/css/vetham-custom.css" rel="stylesheet">'
    if 'vetham-custom.css' not in content:
        content = content.replace(
            '<link href="assets/css/responsive.css" rel="stylesheet">',
            '<link href="assets/css/responsive.css" rel="stylesheet">\n' + link
        )
    return content


def process_file(filepath):
    filename = os.path.basename(filepath)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    if '<!-- main header -->' not in content:
        return False

    content = re.sub(
        r'        <!-- main header -->.*?        <!-- main-header end -->',
        build_header(filename),
        content,
        count=1,
        flags=re.DOTALL
    )
    content = add_custom_css(content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    return True


def main():
    for filepath in sorted(glob.glob(os.path.join(WORKSPACE, '*.html'))):
        if process_file(filepath):
            print(f'Fixed header: {os.path.basename(filepath)}')


if __name__ == '__main__':
    main()
